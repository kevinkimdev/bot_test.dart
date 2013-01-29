part of hop_tasks;

Future<bool> branchForDir(TaskContext ctx, String sourceBranch, String sourceDir,
    String targetBranch, {String workingDir}) {

  return _runGit(['ls-tree', '-d', sourceBranch, sourceDir], workingDir)
      .then(_getTreeFromLsTree)
      .then((String tree) =>
          _fromSourceDirTree(ctx, tree, targetBranch, sourceDir, sourceBranch, workingDir));
}

String _getTreeFromLsTree(ProcessResult pr) {
  if(pr.stdout.isEmpty) {
    throw 'No output. Does the provided dir exist? Provided source Branch? Git error: ${pr.stderr}';
  }
  return pr.stdout;
}

Future<bool> _fromSourceDirTree(TaskContext ctx, String tree,
    String targetBranch, String sourceDir, String sourceBranch, String workingDir) {
  final split = tree.split(_whiteSpaceExp);
  final sha = split[2];

  final gitArgs = new List<String>.from(['commit-tree', sha]);
  final branchNameRef = 'refs/heads/$targetBranch';

  return _runGit(['rev-parse', '--verify', '-p', branchNameRef], workingDir)
      .then((ProcessResult rppr) {
        if(rppr.exitCode == 0) {
          // existing branch
          final parent = rppr.stdout.trim();
          return _withExistingBranch(ctx, parent, sha, sourceDir, gitArgs,
              sourceBranch, branchNameRef, targetBranch, workingDir);
        } else {
          // new branch
          return _getMasterCommit(ctx, 'created', gitArgs, sourceBranch,
              sourceDir, branchNameRef, targetBranch, workingDir);
        }
      });
}

Future<bool> _withExistingBranch(TaskContext ctx, String parent, String dirSha,
    String sourceDir, List<String> gitArgs, String sourceBranch,
    String branchNameRef, String targetBranch, String workingDir) {
  return _runGit(['cat-file', '-p', parent], workingDir)
      .then(_getParentTree)
      .then((String parentTree) =>
          _continueWithExistingBranch(ctx, parent, parentTree, dirSha, sourceDir,
              gitArgs, sourceBranch, branchNameRef, targetBranch, workingDir));
}

String _getParentTree(ProcessResult pr) {
  require(pr.exitCode == 0, 'cat-file returned an error');
  final split = pr.stdout.split(_whiteSpaceExp);
  require(split[0] == 'tree', "Should be a tree");
  return split[1].trim();
}

Future<bool> _continueWithExistingBranch(TaskContext ctx,
    String parent, String parentTree, String dirSha, String sourceDir,
    List<String> gitArgs, String sourceBranch, String branchNameRef,
    String targetBranch, workingDir) {
  if(parentTree == dirSha) {
    ctx.fine('There have been no changes to "$sourceDir" since the last commit');
    return new Future.immediate(true);
  } else {
    gitArgs.addAll(['-p', parent]);
    return _getMasterCommit(ctx, 'updated', gitArgs, sourceBranch, sourceDir,
        branchNameRef, targetBranch, workingDir);
  }
}

Future<bool> _getMasterCommit(TaskContext ctx, String verb, List<String> gitArgs,
    String sourceBranch, String sourceDir, String branchNameRef, String targetBranch,
    String workingDir) {

  return _runGit(['rev-parse', sourceBranch], workingDir)
      .then(_transformRevParse)
      .then((masterCommit) => _doCommitSimple(ctx, verb, gitArgs, sourceDir,
          masterCommit, branchNameRef, targetBranch, workingDir));
}

String _transformRevParse(ProcessResult pr) {
  require(pr.exitCode == 0);
  return pr.stdout.trim();
}

Future<bool> _doCommitSimple(TaskContext ctx, String verb, List<String> gitArgs,
    String sourceDir, String masterCommit, String branchNameRef,
    String targetBranch, String workingDir) {

  masterCommit = masterCommit.substring(0, 8);

  gitArgs.addAll(['-m', 'Contents of $sourceDir from commit $masterCommit']);

  return _runGit(gitArgs, workingDir)
      .then((ProcessResult pr) {
        require(pr.exitCode == 0, pr.stderr);

        final newCommitSha = pr.stdout.trim();
        ctx.info('Create new commit: $newCommitSha');

        return _runGit(['update-ref', branchNameRef, newCommitSha], workingDir)
            .then((ProcessResult updateRefPr) {
              require(updateRefPr.exitCode == 0);
              ctx.info("Branch '$targetBranch' $verb");
              return true;
              });
      });
}

Future<ProcessResult> _runGit(List<String> args, String workingDir) {
  final options = new ProcessOptions();
  if(workingDir != null) {
    options.workingDirectory = workingDir;
  }

  return Process.run('git', args, options);
}

final _whiteSpaceExp = new RegExp(r'\s+', multiLine: true);
