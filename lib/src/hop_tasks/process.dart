part of hop_tasks;

Task createProcessTask(String command, {List<String> args: null, String description: ''}) {
  return new Task.async((ctx) => startProcess(ctx, command, args), description);
}

// TODO: document that start does an 'interactive' process
//       stderr and stdout are piped to context, etc
//       This aligns with io.Process.start
Future<bool> startProcess(TaskLogger ctx, String command,
    [List<String> args = null]) {

  requireArgumentNotNull(ctx, 'ctx');
  requireArgumentNotNull(command, 'command');
  if(args == null) {
    args = [];
  }

  ctx.fine("Starting process:");
  ctx.fine("$command ${args.join(' ')}");
  return Process.start(command, args)
      .then((process) {
        return pipeProcess(process,
            stdOutWriter: ctx.fine,
            stdErrWriter: ctx.severe);
      })
      .then((int exitCode) {
        return exitCode == 0;
      });
}

Future<int> pipeProcess(Process process,
    {Action1<String> stdOutWriter, Action1<String> stdErrWriter}) {
  final completer = new Completer<int>();

  bool finished = false;

  bool validateNotFinished(String message) {
    if(finished) {
      print('Error in hop_tasks - pipeProcess');
      print("Received signal from $process after exit signal");
      print(message);
      print("Tracked at http://code.google.com/p/dart/issues/detail?id=8422");
      return false;
    }
    return true;
  }

  if(stdOutWriter != null) {
    process.stdout.onData = () {
      final data = process.stdout.read();
      final str = new String.fromCharCodes(data).trim();

      if(validateNotFinished('stdout - $str')) {
        stdOutWriter(str);
      }
    };
  }

  if(stdErrWriter != null) {
    process.stderr.onData = () {
      final data = process.stderr.read();
      assert(data != null);
      final str = new String.fromCharCodes(data).trim();

      if(validateNotFinished('stderr - $str')) {
        stdErrWriter(str);
      }

    };
  }

  process.onExit = (int exitCode){
    if(validateNotFinished('onExit')) {
      finished = true;
      completer.complete(exitCode);
    }
  };

  return completer.future;
}
