Enumerable $(Iterable source) {
  return new Enumerable(source);
}

class Enumerable<T> implements Iterable<T> {

  const Enumerable._internal();

  factory Enumerable(Iterable<T> source) {
    return new _EnumerableWrapper(source);
  }

  Iterator iterator() {
    throw const NotImplementedException();
  }

  Object aggregate(Object seed, Func2<Object, T, Object> func) {
    return CollectionUtil.aggregate(this, seed, func);
  }

  SelectMany selectMany(Func1 func) {
    requireArgumentNotNull(func, 'func');
    return new SelectMany(this, func);
  }

  Grouping<Object, T> group([Func1<T, Object> keyFunc = null]) {
    return new Grouping(this, keyFunc);
  }

  /**
   * Returns true if every elements of this collection satisify the
   * predicate [f]. Returns false otherwise.
   */
  bool every(bool f(T element)) {
    for (final e in this) {
      if(!f(e)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns true if one element of this collection satisfies the
   * predicate [f]. Returns false otherwise.
   */
  bool some(bool f(T element)) {
    for (final e in this) {
      if(f(e)) {
        return true;
      }
    }
    return false;
  }

  Enumerable select(Func1 f) => new _SelectEnumerable(this, f);

  ReadOnlyCollection<T> toReadOnlyCollection() => new ReadOnlyCollection(this);

  // TODO: forEach
  // TODO: where
  // TODO: toList
}

class _EnumerableWrapper<T> extends Enumerable<T> {
  final Iterable<T> source;

  const _EnumerableWrapper(this.source) : super._internal();

  Iterator iterator() => source.iterator();
}

class _SelectEnumerable<TSource, TOutput> extends Enumerable<TOutput> {
  final Enumerable<TSource> _source;
  final Func1<TSource, TOutput> _func;

  const _SelectEnumerable(this._source, this._func) : super._internal();

  Iterator<TOutput> iterator() {
    return new _SelectIterator<TSource, TOutput>(_source.iterator(), _func);
  }
}

class _SelectIterator<TSource, TOutput> implements Iterator<TOutput> {
  final Iterator<TSource> _source;
  final Func1<TSource, TOutput> _func;

  const _SelectIterator(this._source, this._func);

  bool hasNext() => _source.hasNext();

  TOutput next() => _func(_source.next());
}
