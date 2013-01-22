part of bot;

class GlobalId implements Comparable {
  static int _globalId = 0;
  final int id;
  final int _hashCode;

  GlobalId._internal(int value) :
    id = value,
    _hashCode = Util.getHashCode([value]);

  factory GlobalId() {
    return new GlobalId._internal(_globalId++);
  }

  int compareTo(GlobalId other) => id.compareTo(other.id);

  int get hashCode => _hashCode;

  bool operator ==(GlobalId other) => other != null && other.id == id;
}
