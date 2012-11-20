part of bot;

void require(bool truth, [String message = '']) {
  if(!truth) {
    throw new Exception(message);
  }
}

void requireArgument(bool truth, [String arg = "", String message]) {
  if(!truth) {
    if(message != null) {
      throw new DetailedArgumentError(arg, message);
    } else {
      throw new ArgumentError(arg);
    }
  }
}

void requireArgumentNotNull(argument, [String argName = ""]) {
  if(argument == null) {
    throw new NullArgumentError(argName);
  }
}
