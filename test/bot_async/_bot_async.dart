library test_bot_async;

import 'dart:isolate';
import 'dart:async';
import 'package:bot/bot.dart';
import 'package:bot/bot_async.dart';
import 'package:bot/bot_test.dart';
import 'package:unittest/unittest.dart';

import 'package:serialization/serialization.dart';

part 'test_send_port_value.dart';
part 'test_future_value_result.dart';
part 'test_delayed_result.dart';

void main() {
  group('bot_async', (){
    TestSendPortValue.run();
    TestFutureValueResult.run();
    registerDelayedResultTests();
  });
}
