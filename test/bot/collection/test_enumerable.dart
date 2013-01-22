part of test_bot;

class TestEnumerable {

  static void run() {
    group('Enumerable', () {
      test('aggregate', _testAggregate);
      test('contains', _testContains);
      test('count', _testCount);
      test('distinct', _testDistinct);
      test('exclude', _testExclude);
      test('filter', _testFilter);
      test('first', _testFirst);
      test('forEach', _testForEach);
      test('forEachWithIndex', _testForEachWithIndex);
      group('group', () {
        test('simple', _testSimpleGrouping);
        test('complex', _testComplexGrouping);
      });
      test('isEmpty', _testIsEmpty);
      test('join', _testJoin);
      test('length', _testLength);
      test('map', _testMap);
      test('reduce', _testReduce);
      test('selectMany', _testSelectMany);
      test('selectNumbers', _testSelectNumbers);
      test('single', _testSingle);
      test('toHashMap', _testToHashMap);
      test('toHashSet', _testToHashSet);
    });
  }

  static void _testIsEmpty() {
    expect($([]).isEmpty, isTrue);
    expect($([1]).isEmpty, isFalse);
  }

  static void _testReduce() {
    final enum = $([0,1,2]);
    expect(enum.reduce(0, (prev, element) => prev + element), 3);
    expect(enum.reduce(1, (prev, element) => prev * element), 0);
  }

  static void _testFirst() {
    final enum = $([0,1,2]);
    expect(enum.first, equals(0));

    expect(() => $([]).first, throwsStateError);

    expect(enum.firstMatching((e) => e == 1), equals(1));

    expect(() => enum.firstMatching((e) => e == 4), throwsStateError);

    expect(enum.firstMatching((e) => e == 1), equals(1));
    expect(() => enum.firstMatching((e) => e == 4), throwsStateError);
    expect(enum.firstMatching((e) => e == 4, orElse: () => -42), equals(-42));
  }

  static void _testSingle() {
    expect($([42]).single, equals(42));
    expect(() => $([]).single, throwsStateError);
    expect(() => $([1, 2]).single, throwsStateError);

    expect($([3,4,5]).singleMatching((e) => e % 2 == 0), equals(4));
    expect(() => $([3,4,5]).singleMatching((e) => e % 2 == 1), throwsStateError);
    expect(() => $([3,5,7]).singleMatching((e) => e % 2 == 0), throwsStateError);

    expect($([3,4,5]).singleMatching((e) => e % 2 == 0), equals(4));
    expect(() => $([3,4,5]).singleMatching((e) => e == 2), throwsStateError);
    expect(() => $([3,5,7]).singleMatching((e) => e % 2 == 1), throwsStateError);
  }

  static void _testJoin() {
    final enum = $([0,1,2]);
    expect(enum.join(), equals('0, 1, 2'));
    expect(enum.join('-'), equals('0-1-2'));
  }

  static void _testContains() {
    final enum = $([0,1,2]);
    expect(enum.contains(1), isTrue);
    expect(enum.contains(3), isFalse);
  }

  static void _testExclude() {
    final enum = $([0,1,2,3,4]);
    expect(enum.exclude([]), orderedEquals(enum));
    expect(enum.exclude([5, -1]), orderedEquals(enum));
    expect(enum.exclude([1,3]), orderedEquals([0,2,4]));
  }

  static void _testDistinct() {
    final enum = $([0,0,1,1,2,2,0,1,2,3,4,5]);
    expect(enum.distinct(), unorderedEquals([0,1,2,3,4,5]));

    final oddsAndEvens = enum.distinct((a,b) => a % 2 == b % 2);
    expect(oddsAndEvens, unorderedEquals([0,1]));
  }

  static void _testForEachWithIndex() {
    final enum = $([0,1,2,3]);
    enum.forEachWithIndex((e,i) {
      expect(i, equals(e));
    });
  }

  static void _testToHashSet() {
    final noDupes = $(['the', 'cat', 'is', 'super']);
    var hashSet = noDupes.toHashSet();
    expect(hashSet, unorderedEquals(noDupes));
    hashSet = noDupes.toHashSet((s) => s.length);
    expect(hashSet, unorderedEquals([3,2,5]));

    final withDupes = $(['the', 'cat', 'is', 'the', 'super', 'cat']);
    hashSet = withDupes.toHashSet();
    expect(hashSet, unorderedEquals(noDupes));
    hashSet = noDupes.toHashSet((s) => s.length);
    expect(hashSet, unorderedEquals([3,2,5]));
  }

  static void _testToHashMap() {
    final noDupes = $(['the', 'kitty', 'is', 'super']);

    //
    // where the item is the key
    //
    var hashMap = noDupes.toHashMap((s) => s.length);
    hashMap.forEach((k,v) {
      expect(k.length, equals(v));
    });
    expect(hashMap.keys, unorderedEquals(noDupes));

    //
    // where the key is produced by a func, too
    //
    hashMap = noDupes.toHashMap((s) => s, (s) => s[0]);
    hashMap.forEach((k,v) {
      expect(k, equals(v[0]));
    });
    expect(hashMap.values, unorderedEquals(noDupes));

    //
    // doesn't support duplicate keys
    //
    expect(() => noDupes.toHashMap((s) => s, (s) => s.length),
        throwsUnsupportedError);

    final withDupes = $(['the', 'cat', 'is', 'the', 'super', 'cat']);
    expect(() => withDupes.toHashMap((s) => s.length),
        throwsUnsupportedError);
  }

  static void _testCount() {
    final e = $([1,2,3,4,5,6]);

    expect(e.length, equals(6));

    var count = e.count((x) => x % 2 == 0);
    expect(count, equals(3));
  }

  static void _testLength() {
    final e = $([1,2,3,4,5,6]);

    expect(e.length, equals(6));
  }

  static void _testFilter() {
    final e = $([1,2,3,4,5,6]).where((x) => x % 2 == 0);
    expect(e, orderedEquals([2,4,6]));
  }

  static void _testMap() {
    final e = $([1,2,3,4,5,6]).mappedBy((x) => x * 2);
    expect(e, orderedEquals([2,4,6,8,10,12]));
  }

  static void _testSelectNumbers() {
    final e = $(['a', 'cat', 'is', 'super']).selectNumbers((x) => x.length);
    expect(e, orderedEquals([1,3,2,5]));

    final sum = e.sum();
    expect(sum, equals(11));
  }

  static void _testForEach() {
    final e = $([1,2,3,4,5,6]);
    int sum = 0;
    e.forEach((a) => sum += a);
    expect(sum, equals(7 * 3));
  }

  static void _testAggregate() {
    Func2<int, int, int> summer = (current, next) => current + next;

    final valEnumerable = $([1,2,3]);

    int sum = valEnumerable.reduce(0, summer);
    expect(sum, equals(6));

    Func2<String, String, String> prepender = (current, next) {
      return next.concat(current);
    };

    final strsEnumerable = $(['first', 'second', 'third']);

    String str = strsEnumerable.reduce('', prepender);
    expect(str, equals('thirdsecondfirst'));
  }

  //
  // Select Many
  //
  static void _testSelectMany() {
    final sourceEnum = $(['Okoboji', 'Iowa']);

    var select = sourceEnum.selectMany(_getChars);

    var charList = new List<String>.from(select);
    expect(charList.length, equals(11));
    expect(charList[6], equals('i'));
    expect(charList[7], equals('I'));

    //
    // now group 'em
    //
    var grouped = select.group();
    // 11 letters, o repeated three times
    expect(grouped.length, equals(9));

    //
    // Some and Every
    //
    expect(select.some((e) => e == 'k'), isTrue);
    expect(select.some((e) => e == 'z'), isFalse);

    expect(select.every((e) => e == 'z'), isFalse);
    expect(select.every((e) => e != 'z'), isTrue);
  }

  static List<String> _getChars(String input) {
    var list = new List<String>();
    for(int i = 0; i < input.length; i++) {
      list.add(input[i]);
    }

    return list;
  }

  //
  // Grouping
  //
  static void _testComplexGrouping() {
    final Func1<String, int> keyFunc = (str) => str.length;

    //
    // Test 1
    //
    var grouping = $(['a']).group(keyFunc);

    expect(grouping.length, equals(1));

    var list = grouping[1];
    expect(list.length, equals(1));
    expect(list[0], equals('a'));

    //
    // Test 2
    //
    final source = ['a', 'b', 'c', 'ab', 'bc', 'abc'];
    grouping = $(source).group(keyFunc);

    expect(grouping.length, equals(3));

    list = grouping[1];
    expect(list.length, equals(3));
    expect(list, contains('a'));
    expect(list, contains('b'));
    expect(list, contains('c'));
    expect(list, isNot(contains('d')));

    list = grouping[2];
    expect(list.length, equals(2));
    expect(list, contains('ab'));
    expect(list, contains('bc'));
    expect(list, isNot(contains('a')));

    list = grouping[3];
    expect(list.length, equals(1));
    expect(list[0], equals('abc'));
    expect(list, isNot(contains('d')));

    list = grouping[0];
    expect(list, isNull);

    // verify all values
    list = new List<String>.from(grouping.getValues());
    expect(list, unorderedEquals(source));
  }

  static void _testSimpleGrouping() {
    //
    // Test 1
    //
    var grouping = $([1]).group();

    expect(grouping.length, equals(1));

    var list = grouping[1];
    expect(list.length, equals(1));
    expect(list[0], equals(1));

    //
    // Test 2
    //
    grouping = $([1, 1]).group();

    expect(grouping.length, equals(1));

    list = grouping[1];
    expect(list.length, equals(2));
    expect(list[0], equals(1));
    expect(list[1], equals(1));

    //
    // Test 3
    //
    grouping = $([1, 2, 3, 1, 2, 1]).group();

    expect(grouping.length, equals(3));

    list = grouping[1];
    expect(list.length, equals(3));
    expect(list, everyElement(equals(1)));

    list = grouping[2];
    expect(list.length, equals(2));
    expect(list, everyElement(equals(2)));

    list = grouping[3];
    expect(list.length, equals(1));
    expect(list, everyElement(equals(3)));

    list = grouping[4];
    expect(list, isNull);
  }
}
