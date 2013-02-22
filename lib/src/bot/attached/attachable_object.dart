part of bot;

class AttachableObject extends DisposableImpl {
  final Map<Property, Object> _propertyValues =
      new Map<Property, Object>();

  final Map<Attachable, EventHandle> _eventHandlers =
      new Map<Attachable, EventHandle>();

  @override @protected
  void disposeInternal(){
    super.disposeInternal();
    _eventHandlers.forEach((a, e) {
      e.dispose();
    });
    _eventHandlers.clear();
  }

  async.Stream _getStream(Attachable property) {
    validateNotDisposed();
    var handle = _eventHandlers.putIfAbsent(property,
        () => new EventHandle(onSubscriptionStateChange: () => _onSubscriptionChanged(property)));
    return handle.stream;
  }

  bool _hasSubscribers(Attachable property) {
    validateNotDisposed();
    final handle = _eventHandlers[property];
    return handle != null && handle.hasSubscribers;
  }

  void _onSubscriptionChanged(Attachable property) {
    assert(property != null);
    if(isDisposed) {
      assert(_eventHandlers.isEmpty);
    } else {
      var handle = _eventHandlers[property];
      assert(handle != null);
      if(!handle.hasSubscribers) {
        handle.dispose();
        _eventHandlers.remove(property);
      }
    }
  }

  void _fireEvent(Attachable attachable, dynamic args) {
    validateNotDisposed();
    var handle = _eventHandlers[attachable];
    if(handle != null){
      handle.add(args);
    }
  }

  void _set(Property key, Object value){
    validateNotDisposed();
    assert(!identical(value, Property.Undefined));
    _propertyValues[key] = value;
    _fireChange(key);
  }

  bool _isSet(Property key){
    validateNotDisposed();
    return _propertyValues.containsKey(key);
  }

  void _remove(Property key){
    validateNotDisposed();
    var exists = _isSet(key);
    if(exists){
      // NOTE: remove returns the removed item, which could be null. Bleh.
      // TODO: ponder null-ish value to avoid these double access scenarios? Maybe?
      _propertyValues.remove(key);
      _fireChange(key);
    }
  }

  Object _getValueOrUndefined(Property key, AttachableObject obj,
                              Func1<AttachableObject, Object> ifAbsent){
    validateNotDisposed();
    if(_isSet(key)){
      return _propertyValues[key];
    }
    else if(ifAbsent != null){
      var value = ifAbsent(obj);
      _set(key, value);
      return value;
    }
    else{
      return Property.Undefined;
    }
  }

  void _fireChange(Property key) {
    validateNotDisposed();
    var handle = _eventHandlers[key];
    if(handle != null){
      handle.add(key);
    }
  }
}
