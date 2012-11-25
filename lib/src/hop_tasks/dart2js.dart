part of hop_tasks;

Task createDart2JsTask(List<String> inputs,
    {bool minify: false}) {
  return new Task.async((context) {
    final futureFuncs = $(inputs).map((p) =>
        () => _dart2js(context, p, minify: minify)).toList();
    return _chainTasks(futureFuncs);
  }, 'Run Dart-to-Javascript compiler');
}

Future<bool> _dart2js(TaskContext ctx, String file,
    {String output: null, bool minify: false}) {
  if(output == null) {
    output = "${file}.js";
  }

  final packageDir = new Directory('packages');
  assert(packageDir.existsSync());

  final args = ["--package-root=${packageDir.path}",
                '--throw-on-error',
                '-v',
                "--out=$output",
                file];

  if(minify) {
    args.add('--minify');
  }

  return startProcess(ctx, 'dart2js', args);
}

Future<bool> _chainTasks(List<Func<Future<bool>>> futures, [int index=0]) {
  assert(futures.length > 0);
  assert(index >= 0);
  assert(index <= futures.length);
  if(index == futures.length) {
    return new Future.immediate(true);
  }
  final func = futures[index];
  final future = func();
  return future.chain((bool status) {
    if(status) {
      return _chainTasks(futures, index+1);
    }
    else {
      return new Future.immediate(false);
    }
  });
}
