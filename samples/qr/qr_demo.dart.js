function Isolate() {}
init();

var $$ = {};
var $ = Isolate.$isolateProperties;
$$.ExceptionImplementation = {"":
 ["_msg"],
 "super": "Object",
 toString$0: function(){var t1=this._msg;return t1==null?'Exception':'Exception: '+$.S(t1);},
 is$Exception: true
};

$$.FutureImpl = {"":
 ["_isComplete", "_lib1_value?", "_exception", "_stackTrace", "_exceptionHandled", "_successListeners", "_exceptionHandlers", "_completionListeners"],
 "super": "Object",
 get$value: function(){if(this.get$isComplete()!==true)throw $.$$throw($.FutureNotCompleteException$());var t1=this._exception;if(!(t1==null))throw $.$$throw(t1);return this._lib1_value;},
 get$exception: function(){if(this.get$isComplete()!==true)throw $.$$throw($.FutureNotCompleteException$());return this._exception;},
 get$stackTrace: function(){if(this.get$isComplete()!==true)throw $.$$throw($.FutureNotCompleteException$());return this._stackTrace;},
 get$isComplete: function(){return this._isComplete;},
 get$hasValue: function(){return this.get$isComplete()===true&&this._exception==null;},
 then$1: function(onSuccess){if(this.get$hasValue()===true)onSuccess.call$1(this.get$value());else if(this.get$isComplete()!==true)this._successListeners.push(onSuccess);else if(this._exceptionHandled!==true)throw $.$$throw(this._exception);},
 handleException$1: function(onException){if(this._exceptionHandled===true)return;if(this._isComplete===true){var t1=this._exception;if(!(t1==null))this._exceptionHandled=onException.call$1(t1);}else this._exceptionHandlers.push(onException);},
 _complete$0: function(){this._isComplete=true;try{if(!(this._exception==null))for(var t1=$.iterator(this._exceptionHandlers);t1.hasNext$0()===true;){var handler=t1.next$0();if($.eqB(handler.call$1(this._exception),true)){this._exceptionHandled=true;break;}}if(this.get$hasValue()===true)for(t1=$.iterator(this._successListeners);t1.hasNext$0()===true;){var listener=t1.next$0();listener.call$1(this.get$value());}else if(this._exceptionHandled!==true&&$.gtB($.get$length(this._successListeners),0))throw $.$$throw(this._exception);}finally{for(t1=$.iterator(this._completionListeners);t1.hasNext$0()===true;){var listener0=t1.next$0();try{listener0.call$1(this);}catch(exception){$.unwrapException(exception);}}}},
 _setValue$1: function(value){if(this._isComplete===true)throw $.$$throw($.FutureAlreadyCompleteException$());this._lib1_value=value;this._complete$0();},
 _setException$2: function(exception,stackTrace){if(exception==null)throw $.$$throw($.IllegalArgumentException$(null));if(this._isComplete===true)throw $.$$throw($.FutureAlreadyCompleteException$());this._exception=exception;this._stackTrace=stackTrace;this._complete$0();}
};

$$.CompleterImpl = {"":
 ["_futureImpl"],
 "super": "Object",
 get$future: function(){return this._futureImpl;},
 complete$1: function(value){this._futureImpl._setValue$1(value);},
 completeException$2: function(exception,stackTrace){this._futureImpl._setException$2(exception,stackTrace);},
 completeException$1: function(exception) {
  return this.completeException$2(exception,null)
},
 completeException$1: function(exception) {
  return this.completeException$2(exception,null)
}
};

$$.HashMapImplementation = {"":
 ["_keys", "_values", "_loadLimit", "_numberOfEntries", "_numberOfDeleted"],
 "super": "Object",
 _probeForAdding$1: function(key){var t1=$.hashCode(key);if(t1!==(t1|0))return this._probeForAdding$1$bailout(1,key,t1,0,0,0);var t3=$.get$length(this._keys);if(t3!==(t3|0))return this._probeForAdding$1$bailout(2,key,t1,t3,0,0);var hash=(t1&t3-1)>>>0;for(var numberOfProbes=1,insertionIndex=-1;true;){t1=this._keys;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this._probeForAdding$1$bailout(3,key,hash,numberOfProbes,insertionIndex,t1);if(hash<0||hash>=t1.length)throw $.ioore(hash);var existingKey=t1[hash];if(existingKey==null){if(insertionIndex<0)return hash;return insertionIndex;}else if($.eqB(existingKey,key))return hash;else if(insertionIndex<0&&$.CTC14===existingKey)insertionIndex=hash;var numberOfProbes0=numberOfProbes+1;hash=$.HashMapImplementation__nextProbe(hash,numberOfProbes,$.get$length(this._keys));if(hash!==(hash|0))return this._probeForAdding$1$bailout(4,numberOfProbes0,key,insertionIndex,hash,0);numberOfProbes=numberOfProbes0;}},
 _probeForAdding$1$bailout: function(state,env0,env1,env2,env3,env4){switch(state){case 1:var key=env0;t1=env1;break;case 2:key=env0;t1=env1;t3=env2;break;case 3:key=env0;hash=env1;numberOfProbes=env2;insertionIndex=env3;t1=env4;break;case 4:numberOfProbes0=env0;key=env1;insertionIndex=env2;hash=env3;break;}switch(state){case 0:var t1=$.hashCode(key);case 1:state=0;var t3=$.get$length(this._keys);case 2:state=0;var hash=$.and(t1,$.sub(t3,1));var numberOfProbes=1;var insertionIndex=-1;default:L0:while(true)switch(state){case 0:if(!true)break L0;t1=this._keys;case 3:state=0;var existingKey=$.index(t1,hash);if(existingKey==null){if($.ltB(insertionIndex,0))return hash;return insertionIndex;}else if($.eqB(existingKey,key))return hash;else if($.ltB(insertionIndex,0)&&$.CTC14===existingKey)insertionIndex=hash;var numberOfProbes0=numberOfProbes+1;hash=$.HashMapImplementation__nextProbe(hash,numberOfProbes,$.get$length(this._keys));case 4:state=0;numberOfProbes=numberOfProbes0;}}},
 _probeForLookup$1: function(key){var hash=$.and($.hashCode(key),$.sub($.get$length(this._keys),1));if(hash!==(hash|0))return this._probeForLookup$1$bailout(1,key,hash);for(var numberOfProbes=1;true;){var existingKey=$.index(this._keys,hash);if(existingKey==null)return -1;if($.eqB(existingKey,key))return hash;var numberOfProbes0=numberOfProbes+1;hash=$.HashMapImplementation__nextProbe(hash,numberOfProbes,$.get$length(this._keys));numberOfProbes=numberOfProbes0;}},
 _probeForLookup$1$bailout: function(state,key,hash){for(var numberOfProbes=1;true;){var existingKey=$.index(this._keys,hash);if(existingKey==null)return -1;if($.eqB(existingKey,key))return hash;var numberOfProbes0=numberOfProbes+1;hash=$.HashMapImplementation__nextProbe(hash,numberOfProbes,$.get$length(this._keys));numberOfProbes=numberOfProbes0;}},
 _ensureCapacity$0: function(){var newNumberOfEntries=$.add(this._numberOfEntries,1);if($.geB(newNumberOfEntries,this._loadLimit)){this._grow$1($.mul($.get$length(this._keys),2));return;}var numberOfFree=$.sub($.sub($.get$length(this._keys),newNumberOfEntries),this._numberOfDeleted);if($.gtB(this._numberOfDeleted,numberOfFree))this._grow$1($.get$length(this._keys));},
 _grow$1: function(newCapacity){var capacity=$.get$length(this._keys);if(typeof capacity!=='number')return this._grow$1$bailout(1,newCapacity,capacity,0,0);this._loadLimit=$.tdiv($.mul(newCapacity,3),4);var oldKeys=this._keys;if(typeof oldKeys!=='string'&&(typeof oldKeys!=='object'||oldKeys===null||oldKeys.constructor!==Array&&!oldKeys.is$JavaScriptIndexingBehavior()))return this._grow$1$bailout(2,newCapacity,oldKeys,capacity,0);var oldValues=this._values;if(typeof oldValues!=='string'&&(typeof oldValues!=='object'||oldValues===null||oldValues.constructor!==Array&&!oldValues.is$JavaScriptIndexingBehavior()))return this._grow$1$bailout(3,newCapacity,oldKeys,oldValues,capacity);this._keys=$.ListImplementation_List(newCapacity);this._values=$.ListImplementation_List(newCapacity,$.getRuntimeTypeInfo(this).V);for(var i=0;i<capacity;++i){if(i<0||i>=oldKeys.length)throw $.ioore(i);var key=oldKeys[i];if(key==null||key===$.CTC14)continue;if(i<0||i>=oldValues.length)throw $.ioore(i);var value=oldValues[i];var newIndex=this._probeForAdding$1(key);$.indexSet(this._keys,newIndex,key);$.indexSet(this._values,newIndex,value);}this._numberOfDeleted=0;},
 _grow$1$bailout: function(state,env0,env1,env2,env3){switch(state){case 1:var newCapacity=env0;capacity=env1;break;case 2:newCapacity=env0;oldKeys=env1;capacity=env2;break;case 3:newCapacity=env0;oldKeys=env1;oldValues=env2;capacity=env3;break;}switch(state){case 0:var capacity=$.get$length(this._keys);case 1:state=0;this._loadLimit=$.tdiv($.mul(newCapacity,3),4);var oldKeys=this._keys;case 2:state=0;var oldValues=this._values;case 3:state=0;this._keys=$.ListImplementation_List(newCapacity);this._values=$.ListImplementation_List(newCapacity,$.getRuntimeTypeInfo(this).V);for(var i=0;$.ltB(i,capacity);++i){var key=$.index(oldKeys,i);if(key==null||key===$.CTC14)continue;var value=$.index(oldValues,i);var newIndex=this._probeForAdding$1(key);$.indexSet(this._keys,newIndex,key);$.indexSet(this._values,newIndex,value);}this._numberOfDeleted=0;}},
 clear$0: function(){this._numberOfEntries=0;this._numberOfDeleted=0;var length$=$.get$length(this._keys);if(typeof length$!=='number')return this.clear$0$bailout(1,length$);for(var i=0;i<length$;++i){$.indexSet(this._keys,i,null);$.indexSet(this._values,i,null);}},
 clear$0$bailout: function(state,length$){for(var i=0;$.ltB(i,length$);++i){$.indexSet(this._keys,i,null);$.indexSet(this._values,i,null);}},
 operator$indexSet$2: function(key,value){this._ensureCapacity$0();var index=this._probeForAdding$1(key);var t1=this._keys;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.operator$indexSet$2$bailout(1,key,value,index,t1);if(index!==(index|0))throw $.iae(index);if(index<0||index>=t1.length)throw $.ioore(index);if(!(t1[index]==null)){if(index<0||index>=t1.length)throw $.ioore(index);var t2=t1[index]===$.CTC14;t1=t2;}else t1=true;if(t1){t1=this._numberOfEntries;if(typeof t1!=='number')return this.operator$indexSet$2$bailout(3,key,value,t1,index);this._numberOfEntries=t1+1;}t1=this._keys;if(typeof t1!=='object'||t1===null||(t1.constructor!==Array||!!t1.immutable$list)&&!t1.is$JavaScriptIndexingBehavior())return this.operator$indexSet$2$bailout(4,key,value,t1,index);if(index<0||index>=t1.length)throw $.ioore(index);t1[index]=key;t1=this._values;if(typeof t1!=='object'||t1===null||(t1.constructor!==Array||!!t1.immutable$list)&&!t1.is$JavaScriptIndexingBehavior())return this.operator$indexSet$2$bailout(5,value,t1,index,0);if(index<0||index>=t1.length)throw $.ioore(index);t1[index]=value;},
 operator$indexSet$2$bailout: function(state,env0,env1,env2,env3){switch(state){case 1:var key=env0;var value=env1;index=env2;t1=env3;break;case 2:key=env0;value=env1;index=env2;t1=env3;break;case 3:key=env0;value=env1;t1=env2;index=env3;break;case 4:key=env0;value=env1;t1=env2;index=env3;break;case 5:value=env0;t1=env1;index=env2;break;}switch(state){case 0:this._ensureCapacity$0();var index=this._probeForAdding$1(key);var t1=this._keys;case 1:state=0;case 2:if(state===2||state===0&&!($.index(t1,index)==null))switch(state){case 0:t1=this._keys;case 2:state=0;var t3=$.index(t1,index)===$.CTC14;t1=t3;}else t1=true;case 3:if(state===3||state===0&&t1)switch(state){case 0:t1=this._numberOfEntries;case 3:state=0;this._numberOfEntries=$.add(t1,1);}t1=this._keys;case 4:state=0;$.indexSet(t1,index,key);t1=this._values;case 5:state=0;$.indexSet(t1,index,value);}},
 operator$index$1: function(key){var index=this._probeForLookup$1(key);if($.ltB(index,0))return;return $.index(this._values,index);},
 remove$1: function(key){var index=this._probeForLookup$1(key);if($.geB(index,0)){this._numberOfEntries=$.sub(this._numberOfEntries,1);var value=$.index(this._values,index);$.indexSet(this._values,index,null);$.indexSet(this._keys,index,$.CTC14);this._numberOfDeleted=$.add(this._numberOfDeleted,1);return value;}return;},
 isEmpty$0: function(){return $.eq(this._numberOfEntries,0);},
 get$length: function(){return this._numberOfEntries;},
 forEach$1: function(f){var length$=$.get$length(this._keys);if(typeof length$!=='number')return this.forEach$1$bailout(1,f,length$);for(var i=0;i<length$;++i){var key=$.index(this._keys,i);if(!(key==null)&&!(key===$.CTC14))f.call$2(key,$.index(this._values,i));}},
 forEach$1$bailout: function(state,f,length$){for(var i=0;$.ltB(i,length$);++i){var key=$.index(this._keys,i);if(!(key==null)&&!(key===$.CTC14))f.call$2(key,$.index(this._values,i));}},
 getKeys$0: function(){var t1={};var list=$.ListImplementation_List($.get$length(this),$.getRuntimeTypeInfo(this).K);t1.i_10=0;this.forEach$1(new $.HashMapImplementation_getKeys__(list,t1));return list;},
 getValues$0: function(){var t1={};var list=$.ListImplementation_List($.get$length(this),$.getRuntimeTypeInfo(this).V);t1.i_1=0;this.forEach$1(new $.HashMapImplementation_getValues__(list,t1));return list;},
 containsKey$1: function(key){return !$.eqB(this._probeForLookup$1(key),-1);},
 toString$0: function(){return $.Maps_mapToString(this);},
 HashMapImplementation$0: function(){this._numberOfEntries=0;this._numberOfDeleted=0;this._loadLimit=$.HashMapImplementation__computeLoadLimit(8);this._keys=$.ListImplementation_List(8);this._values=$.ListImplementation_List(8,$.getRuntimeTypeInfo(this).V);},
 is$Map: function() { return true; }
};

$$._DeletedKeySentinel = {"":
 [],
 "super": "Object"
};

$$.KeyValuePair = {"":
 ["key?", "value="],
 "super": "Object"
};

$$.LinkedHashMapImplementation = {"":
 ["_list", "_map"],
 "super": "Object",
 operator$indexSet$2: function(key,value){if(this._map.containsKey$1(key)===true){var t1=this._map;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.operator$indexSet$2$bailout(1,key,value,t1);if(key!==(key|0))throw $.iae(key);if(key<0||key>=t1.length)throw $.ioore(key);t1[key].get$element().set$value(value);}else{$.addLast(this._list,$.KeyValuePair$(key,value,$.getRuntimeTypeInfo(this).K,$.getRuntimeTypeInfo(this).V));t1=this._map;if(typeof t1!=='object'||t1===null||(t1.constructor!==Array||!!t1.immutable$list)&&!t1.is$JavaScriptIndexingBehavior())return this.operator$indexSet$2$bailout(2,key,t1,0);var t3=this._list.lastEntry$0();if(key!==(key|0))throw $.iae(key);if(key<0||key>=t1.length)throw $.ioore(key);t1[key]=t3;}},
 operator$indexSet$2$bailout: function(state,env0,env1,env2){switch(state){case 1:var key=env0;var value=env1;t1=env2;break;case 2:key=env0;t1=env1;break;}switch(state){case 0:default:if(state===1||state===0&&this._map.containsKey$1(key)===true)switch(state){case 0:var t1=this._map;case 1:state=0;$.index(t1,key).get$element().set$value(value);}else switch(state){case 0:$.addLast(this._list,$.KeyValuePair$(key,value,$.getRuntimeTypeInfo(this).K,$.getRuntimeTypeInfo(this).V));t1=this._map;case 2:state=0;$.indexSet(t1,key,this._list.lastEntry$0());}}},
 operator$index$1: function(key){var entry=$.index(this._map,key);if(entry==null)return;return entry.get$element().get$value();},
 remove$1: function(key){var entry=this._map.remove$1(key);if(entry==null)return;entry.remove$0();return entry.get$element().get$value();},
 getKeys$0: function(){var t1={};var list=$.ListImplementation_List($.get$length(this),$.getRuntimeTypeInfo(this).K);t1.index_10=0;$.forEach(this._list,new $.LinkedHashMapImplementation_getKeys__(list,t1));return list;},
 getValues$0: function(){var t1={};var list=$.ListImplementation_List($.get$length(this),$.getRuntimeTypeInfo(this).V);t1.index_1=0;$.forEach(this._list,new $.LinkedHashMapImplementation_getValues__(list,t1));return list;},
 forEach$1: function(f){$.forEach(this._list,new $.LinkedHashMapImplementation_forEach__(f));},
 containsKey$1: function(key){return this._map.containsKey$1(key);},
 get$length: function(){return $.get$length(this._map);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 clear$0: function(){$.clear(this._map);$.clear(this._list);},
 toString$0: function(){return $.Maps_mapToString(this);},
 LinkedHashMapImplementation$0: function(){this._map=$.HashMapImplementation$($.getRuntimeTypeInfo(this).K,'DoubleLinkedQueueEntry<KeyValuePair<K, V>>');this._list=$.DoubleLinkedQueue$('KeyValuePair<K, V>');},
 is$Map: function() { return true; }
};

$$.DoubleLinkedQueueEntry = {"":
 ["_previous=", "_next=", "_element?"],
 "super": "Object",
 _link$2: function(p,n){this._next=n;this._previous=p;p.set$_next(this);n.set$_previous(this);},
 prepend$1: function(e){$.DoubleLinkedQueueEntry$(e,$.getRuntimeTypeInfo(this).E)._link$2(this._previous,this);},
 remove$0: function(){var t1=this._next;this._previous.set$_next(t1);t1=this._previous;this._next.set$_previous(t1);this._next=null;this._previous=null;return this._element;},
 _asNonSentinelEntry$0: function(){return this;},
 previousEntry$0: function(){return this._previous._asNonSentinelEntry$0();},
 get$element: function(){return this._element;},
 DoubleLinkedQueueEntry$1: function(e){this._element=e;}
};

$$._DoubleLinkedQueueEntrySentinel = {"":
 ["_previous", "_next", "_element"],
 "super": "DoubleLinkedQueueEntry",
 remove$0: function(){throw $.$$throw($.CTC13);},
 _asNonSentinelEntry$0: function(){return;},
 get$element: function(){throw $.$$throw($.CTC13);},
 _DoubleLinkedQueueEntrySentinel$0: function(){this._link$2(this,this);}
};

$$.DoubleLinkedQueue = {"":
 ["_sentinel"],
 "super": "Object",
 addLast$1: function(value){this._sentinel.prepend$1(value);},
 add$1: function(value){this.addLast$1(value);},
 addAll$1: function(collection){for(var t1=$.iterator(collection);t1.hasNext$0()===true;)this.add$1(t1.next$0());},
 removeLast$0: function(){return this._sentinel.get$_previous().remove$0();},
 removeFirst$0: function(){return this._sentinel.get$_next().remove$0();},
 first$0: function(){return this._sentinel.get$_next().get$element();},
 get$first: function() { return new $.BoundClosure(this, 'first$0'); },
 last$0: function(){return this._sentinel.get$_previous().get$element();},
 lastEntry$0: function(){return this._sentinel.previousEntry$0();},
 get$length: function(){var t1={};t1.counter_1=0;this.forEach$1(new $.DoubleLinkedQueue_length__(t1));return t1.counter_1;},
 isEmpty$0: function(){var t1=this._sentinel.get$_next();var t2=this._sentinel;return t1==null?t2==null:t1===t2;},
 clear$0: function(){var t1=this._sentinel;t1.set$_next(t1);t1=this._sentinel;t1.set$_previous(t1);},
 forEach$1: function(f){var entry=this._sentinel.get$_next();for(;t1=this._sentinel,!(entry==null?t1==null:entry===t1);){var nextEntry=entry.get$_next();f.call$1(entry.get$_element());entry=nextEntry;}var t1;},
 filter$1: function(f){var other=$.DoubleLinkedQueue$($.getRuntimeTypeInfo(this).E);var entry=this._sentinel.get$_next();for(;t1=this._sentinel,!(entry==null?t1==null:entry===t1);){var nextEntry=entry.get$_next();if(f.call$1(entry.get$_element())===true)other.addLast$1(entry.get$_element());entry=nextEntry;}return other;var t1;},
 iterator$0: function(){return $._DoubleLinkedQueueIterator$(this._sentinel,$.getRuntimeTypeInfo(this).E);},
 toString$0: function(){return $.Collections_collectionToString(this);},
 DoubleLinkedQueue$0: function(){this._sentinel=$._DoubleLinkedQueueEntrySentinel$($.getRuntimeTypeInfo(this).E);},
 is$Collection: function() { return true; }
};

$$._DoubleLinkedQueueIterator = {"":
 ["_sentinel", "_currentEntry"],
 "super": "Object",
 hasNext$0: function(){var t1=this._currentEntry.get$_next();var t2=this._sentinel;return !(t1==null?t2==null:t1===t2);},
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);this._currentEntry=this._currentEntry.get$_next();return this._currentEntry.get$element();},
 _DoubleLinkedQueueIterator$1: function(_sentinel){this._currentEntry=this._sentinel;}
};

$$.JSSyntaxRegExp = {"":
 ["_ignoreCase", "_multiLine", "_lib1_pattern"],
 "super": "Object",
 firstMatch$1: function(str){var m=$.regExpExec(this,$.checkString(str));if(m==null)return;var matchStart=$.regExpMatchStart(m);var t1=$.get$length($.index(m,0));if(typeof t1!=='number')throw $.iae(t1);var matchEnd=matchStart+t1;return $._MatchImplementation$(this.get$pattern(),str,matchStart,matchEnd,m);},
 hasMatch$1: function(str){return $.regExpTest(this,$.checkString(str));},
 get$pattern: function(){return this._lib1_pattern;},
 get$multiLine: function(){return this._multiLine;},
 get$ignoreCase: function(){return this._ignoreCase;},
 is$RegExp: true
};

$$.StringBufferImpl = {"":
 ["_buffer", "_length"],
 "super": "Object",
 get$length: function(){return this._length;},
 isEmpty$0: function(){return this._length===0;},
 add$1: function(obj){var str=$.toString(obj);if(str==null||$.isEmpty(str)===true)return this;$.add$1(this._buffer,str);var t1=this._length;if(typeof t1!=='number')return this.add$1$bailout(1,str,t1);var t3=$.get$length(str);if(typeof t3!=='number')return this.add$1$bailout(2,t1,t3);this._length=t1+t3;return this;},
 add$1$bailout: function(state,env0,env1){switch(state){case 1:str=env0;t1=env1;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:var str=$.toString(obj);if(str==null||$.isEmpty(str)===true)return this;$.add$1(this._buffer,str);var t1=this._length;case 1:state=0;var t3=$.get$length(str);case 2:state=0;this._length=$.add(t1,t3);return this;}},
 addAll$1: function(objects){for(var t1=$.iterator(objects);t1.hasNext$0()===true;)this.add$1(t1.next$0());return this;},
 clear$0: function(){this._buffer=$.ListImplementation_List(null,'String');this._length=0;return this;},
 toString$0: function(){if($.get$length(this._buffer)===0)return '';if($.get$length(this._buffer)===1)return $.index(this._buffer,0);var result=$.stringJoinUnchecked($.StringImplementation__toJsStringArray(this._buffer),'');$.clear(this._buffer);$.add$1(this._buffer,result);return result;},
 StringBufferImpl$1: function(content$){this.clear$0();this.add$1(content$);}
};

$$._MatchImplementation = {"":
 ["pattern", "str", "_start", "_end", "_groups"],
 "super": "Object",
 group$1: function(index){return $.index(this._groups,index);},
 operator$index$1: function(index){return this.group$1(index);}
};

$$.IndexOutOfRangeException = {"":
 ["_value?"],
 "super": "Object",
 toString$0: function(){return 'IndexOutOfRangeException: '+$.S(this._value);},
 is$Exception: true
};

$$.IllegalAccessException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Attempt to modify an immutable object';},
 is$Exception: true
};

$$.NoSuchMethodException = {"":
 ["_receiver", "_functionName", "_arguments", "_existingArgumentNames"],
 "super": "Object",
 toString$0: function(){var sb=$.StringBufferImpl$('');var t1=this._arguments;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.toString$0$bailout(1,t1,sb);var i=0;for(;i<t1.length;++i){if(i>0)sb.add$1(', ');if(i<0||i>=t1.length)throw $.ioore(i);sb.add$1(t1[i]);}t1=this._existingArgumentNames;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.toString$0$bailout(2,sb,t1);var actualParameters=sb.toString$0();sb=$.StringBufferImpl$('');for(i=0;i<t1.length;++i){if(i>0)sb.add$1(', ');if(i<0||i>=t1.length)throw $.ioore(i);sb.add$1(t1[i]);}var formalParameters=sb.toString$0();t1=this._functionName;return 'NoSuchMethodException: incorrect number of arguments passed to method named \''+$.S(t1)+'\'\nReceiver: '+$.S(this._receiver)+'\n'+'Tried calling: '+$.S(t1)+'('+$.S(actualParameters)+')\n'+'Found: '+$.S(t1)+'('+$.S(formalParameters)+')';},
 toString$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;sb=env1;break;case 2:sb=env0;t1=env1;break;}switch(state){case 0:var sb=$.StringBufferImpl$('');var t1=this._arguments;case 1:state=0;var i=0;for(;$.ltB(i,$.get$length(t1));++i){if(i>0)sb.add$1(', ');sb.add$1($.index(t1,i));}t1=this._existingArgumentNames;case 2:state=0;if(t1==null)return 'NoSuchMethodException : method not found: \''+$.S(this._functionName)+'\'\n'+'Receiver: '+$.S(this._receiver)+'\n'+'Arguments: ['+$.S(sb)+']';else{var actualParameters=sb.toString$0();sb=$.StringBufferImpl$('');for(i=0;$.ltB(i,$.get$length(t1));++i){if(i>0)sb.add$1(', ');sb.add$1($.index(t1,i));}var formalParameters=sb.toString$0();t1=this._functionName;return 'NoSuchMethodException: incorrect number of arguments passed to method named \''+$.S(t1)+'\'\nReceiver: '+$.S(this._receiver)+'\n'+'Tried calling: '+$.S(t1)+'('+$.S(actualParameters)+')\n'+'Found: '+$.S(t1)+'('+$.S(formalParameters)+')';}}},
 is$Exception: true
};

$$.ObjectNotClosureException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Object is not closure';},
 is$Exception: true
};

$$.IllegalArgumentException = {"":
 ["_arg"],
 "super": "Object",
 toString$0: function(){return 'Illegal argument(s): '+$.S(this._arg);},
 is$Exception: true
};

$$.StackOverflowException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Stack Overflow';},
 is$Exception: true
};

$$.FormatException = {"":
 ["message"],
 "super": "Object",
 toString$0: function(){return 'FormatException: '+$.S(this.message);},
 is$Exception: true
};

$$.NullPointerException = {"":
 ["functionName", "arguments"],
 "super": "Object",
 toString$0: function(){var t1=this.functionName;if(t1==null)return this.get$exceptionName();else return $.S(this.get$exceptionName())+' : method: \''+$.S(t1)+'\'\n'+'Receiver: null\n'+'Arguments: '+$.S(this.arguments);},
 get$exceptionName: function(){return 'NullPointerException';},
 is$Exception: true
};

$$.NoMoreElementsException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'NoMoreElementsException';},
 is$Exception: true
};

$$.EmptyQueueException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'EmptyQueueException';},
 is$Exception: true
};

$$.UnsupportedOperationException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function(){return 'UnsupportedOperationException: '+$.S(this._message);},
 is$Exception: true
};

$$.NotImplementedException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function(){var t1=this._message;return !(t1==null)?'NotImplementedException: '+$.S(t1):'NotImplementedException';},
 is$Exception: true
};

$$.IllegalJSRegExpException = {"":
 ["_pattern", "_errmsg"],
 "super": "Object",
 toString$0: function(){return 'IllegalJSRegExpException: \''+$.S(this._pattern)+'\' \''+$.S(this._errmsg)+'\'';},
 is$Exception: true
};

$$.FutureNotCompleteException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Exception: future has not been completed';},
 is$Exception: true
};

$$.FutureAlreadyCompleteException = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Exception: future already completed';},
 is$Exception: true
};

$$.Object = {"":
 [],
 "super": "",
 operator$eq$1: function(other){return this===other;},
 toString$0: function(){return $.Primitives_objectToString(this);}
};

$$.ListIterator = {"":
 ["i", "list"],
 "super": "Object",
 hasNext$0: function(){var t1=this.i;if(typeof t1!=='number')return this.hasNext$0$bailout(1,t1);return t1<this.list.length;},
 hasNext$0$bailout: function(state,t1){return $.lt(t1,this.list.length);},
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.NoMoreElementsException$());var value=this.list[this.i];var t1=this.i;if(typeof t1!=='number')return this.next$0$bailout(1,t1,value);this.i=t1+1;return value;},
 next$0$bailout: function(state,t1,value){this.i=$.add(t1,1);return value;}
};

$$.StackTrace = {"":
 ["stack"],
 "super": "Object",
 toString$0: function(){var t1=this.stack;return !(t1==null)?t1:'';}
};

$$.Closure = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Closure';}
};

$$.ConstantMap = {"":
 ["length?", "_jsObject", "_lib5_keys"],
 "super": "Object",
 containsKey$1: function(key){if($.eqB(key,'__proto__'))return false;return $.jsHasOwnProperty(this._jsObject,key);},
 operator$index$1: function(key){if(this.containsKey$1(key)!==true)return;return this._jsObject[key];},
 forEach$1: function(f){$.forEach(this._lib5_keys,new $.ConstantMap_forEach_anon(this,f));},
 getKeys$0: function(){return this._lib5_keys;},
 getValues$0: function(){var result=[];$.forEach(this._lib5_keys,new $.ConstantMap_getValues_anon(this,result));return result;},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 toString$0: function(){return $.Maps_mapToString(this);},
 _throwImmutable$0: function(){throw $.$$throw($.CTC109);},
 operator$indexSet$2: function(key,val){return this._throwImmutable$0();},
 remove$1: function(key){return this._throwImmutable$0();},
 clear$0: function(){return this._throwImmutable$0();},
 is$Map: function() { return true; }
};

$$.MetaInfo = {"":
 ["_tag?", "_tags", "_set?"],
 "super": "Object"
};

$$.QrDemo = {"":
 ["_scale", "_canvas", "_qrMapper?", "_ctx", "_lib0_value?", "_typeNumber", "_errorCorrectLevel", "_squares!", "_frameRequested"],
 "super": "Object",
 get$updated: function(){return this._qrMapper.get$outputChanged();},
 get$error: function(){return this._qrMapper.get$error();},
 get$value: function(){return this._lib0_value;},
 set$value: function(input){this._lib0_value=input;this._update$0();},
 requestFrame$0: function(){if(this._frameRequested!==true){this._frameRequested=true;$.window().requestAnimationFrame$1(this.get$_onFrame());}},
 _levelClick$1: function(args){this._typeNumber=$.parseInt($.index(args.get$srcElement().get$dataAttributes(),'type-value'));this._update$0();},
 get$_levelClick: function() { return new $.BoundClosure0(this, '_levelClick$1'); },
 _errorClick$1: function(args){this._errorCorrectLevel=$.parseInt($.index(args.get$srcElement().get$dataAttributes(),'error-value'));this._update$0();},
 get$_errorClick: function() { return new $.BoundClosure0(this, '_errorClick$1'); },
 _update$0: function(){var t=[this._typeNumber,this._errorCorrectLevel,this._lib0_value];this._qrMapper.set$input(t);},
 _onFrame$1: function(highResTime){this._frameRequested=false;var t1=this._ctx;var t2=this._canvas;t1.clearRect$4(0,0,t2.get$width(),t2.get$height());var size=$.toInt($.sqrt($.get$length(this._squares)));var minDimension=$.min(t2.get$width(),t2.get$height());if(typeof size!=='number')throw $.iae(size);var scale=$.tdiv(minDimension,size);var offset=$.tdiv(minDimension-scale*size,2);var t3=this._scale;t3.set$target(scale);if(t3.update$0()===true)this.requestFrame$0();t1.setTransform$6(t3.get$current(),0,0,t3.get$current(),offset,offset);if($.gtB($.get$length(this._squares),0))for(var x=0;x<size;++x)for(var y=0;y<size;++y)if($.index(this._squares,x*size+y)===true)t1.fillRect$4(x,y,1,1);},
 get$_onFrame: function() { return new $.BoundClosure0(this, '_onFrame$1'); },
 QrDemo$3: function(canvas,typeDiv,errorDiv){this._ctx.set$fillStyle('black');$.add$1(this._qrMapper.get$outputChanged(),new $.anon1(this));for(var i=1;i<=10;++i){var radio=$._Elements_InputElement('radio');radio.set$innerHTML($.S(i));radio.set$id('type_'+$.S(i));radio.set$name('type');$.add$1(radio.get$on().get$change(),this.get$_levelClick());$.indexSet(radio.get$dataAttributes(),'type-value',$.toString(i));if(i===this._typeNumber)$.indexSet(radio.get$attributes(),'checked','checked');$.add$1(typeDiv.get$elements(),radio);var label=$._Elements_LabelElement();label.set$innerHTML($.S(i));label.set$htmlFor(radio.get$id());$.add$1(typeDiv.get$elements(),label);}for(var t1=$.iterator($.CTC102);t1.hasNext$0()===true;){var t2=t1.next$0();radio=$._Elements_InputElement('radio');radio.set$id('error_'+$.S(t2));radio.set$name('error-level');$.add$1(radio.get$on().get$change(),this.get$_errorClick());$.indexSet(radio.get$dataAttributes(),'error-value',$.toString(t2));if($.eqB(t2,this._errorCorrectLevel))$.indexSet(radio.get$attributes(),'checked','checked');$.add$1(errorDiv.get$elements(),radio);label=$._Elements_LabelElement();label.set$innerHTML($.QrErrorCorrectLevel_getName(t2));label.set$htmlFor(radio.get$id());$.add$1(errorDiv.get$elements(),label);}}
};

$$._QrCalc = {"":
 ["_sendPort", "_completer", "_innerFuture", "_input", "_future", "_output", "_pending", "_outputChangedHandle", "_inputChangedHandle", "_errorHandle"],
 "super": "SendPortValue"
};

$$._Default = {"":
 [],
 "super": "Object"
};

$$._AbstractWorkerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._AudioContextEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$complete: function(){return this.operator$index$1('complete');},
 complete$1: function(arg0) { return this.get$complete().call$1(arg0); }
};

$$._BatteryManagerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._BodyElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._DOMApplicationCacheEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._DedicatedWorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_WorkerContextEventsImpl"
};

$$._DocumentEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$change: function(){return this.operator$index$1('change');},
 get$error: function(){return this.operator$index$1('error');},
 get$keyUp: function(){return this.operator$index$1('keyup');},
 get$reset: function(){return this.operator$index$1('reset');},
 reset$0: function() { return this.get$reset().call$0(); }
};

$$.FilteredElementList = {"":
 ["_node", "_childNodes"],
 "super": "Object",
 get$_filtered: function(){return $.ListImplementation_List$from($.filter(this._childNodes,new $.FilteredElementList__filtered_anon()));},
 get$first: function(){for(var t1=$.iterator(this._childNodes);t1.hasNext$0()===true;){var t2=t1.next$0();if(typeof t2==='object'&&t2!==null&&t2.is$Element())return t2;}return;},
 first$0: function() { return this.get$first().call$0(); },
 forEach$1: function(f){$.forEach(this.get$_filtered(),f);},
 operator$indexSet$2: function(index,value){this.operator$index$1(index).replaceWith$1(value);},
 set$length: function(newLength){var len=$.get$length(this);if($.geB(newLength,len))return;else if($.ltB(newLength,0))throw $.$$throw($.CTC107);this.removeRange$2($.sub(newLength,1),$.sub(len,newLength));},
 add$1: function(value){$.add$1(this._childNodes,value);},
 get$add: function() { return new $.BoundClosure0(this, 'add$1'); },
 addAll$1: function(collection){$.forEach(collection,this.get$add());},
 addLast$1: function(value){this.add$1(value);},
 removeRange$2: function(start,rangeLength){$.forEach($.getRange(this.get$_filtered(),start,rangeLength),new $.FilteredElementList_removeRange_anon());},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC60);},
 clear$0: function(){$.clear(this._childNodes);},
 removeLast$0: function(){var result=this.last$0();if(!(result==null))result.remove$0();return result;},
 filter$1: function(f){return $.filter(this.get$_filtered(),f);},
 isEmpty$0: function(){return $.isEmpty(this.get$_filtered());},
 get$length: function(){return $.get$length(this.get$_filtered());},
 operator$index$1: function(index){return $.index(this.get$_filtered(),index);},
 iterator$0: function(){return $.iterator(this.get$_filtered());},
 getRange$2: function(start,rangeLength){return $.getRange(this.get$_filtered(),start,rangeLength);},
 indexOf$2: function(element,start){return $.indexOf$2(this.get$_filtered(),element,start);},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $.lastIndexOf$2(this.get$_filtered(),element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return $.last(this.get$_filtered());},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ChildrenElementList = {"":
 ["_lib_element?", "_childElements"],
 "super": "Object",
 _toList$0: function(){var t1=this._childElements;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this._toList$0$bailout(1,t1);var output=$.ListImplementation_List(t1.length);for(var len=t1.length,i=0;i<len;++i){if(i<0||i>=t1.length)throw $.ioore(i);var t2=t1[i];if(i<0||i>=output.length)throw $.ioore(i);output[i]=t2;}return output;},
 _toList$0$bailout: function(state,t1){var output=$.ListImplementation_List($.get$length(t1));for(var len=$.get$length(t1),i=0;$.ltB(i,len);++i){var t2=$.index(t1,i);if(i<0||i>=output.length)throw $.ioore(i);output[i]=t2;}return output;},
 get$first: function(){return this._lib_element.get$$$dom_firstElementChild();},
 first$0: function() { return this.get$first().call$0(); },
 forEach$1: function(f){for(var t1=$.iterator(this._childElements);t1.hasNext$0()===true;)f.call$1(t1.next$0());},
 filter$1: function(f){var output=[];this.forEach$1(new $._ChildrenElementList_filter_anon(f,output));return $._FrozenElementList$_wrap(output);},
 isEmpty$0: function(){return this._lib_element.get$$$dom_firstElementChild()==null;},
 get$length: function(){return $.get$length(this._childElements);},
 operator$index$1: function(index){return $.index(this._childElements,index);},
 operator$indexSet$2: function(index,value){this._lib_element.$dom_replaceChild$2(value,$.index(this._childElements,index));},
 set$length: function(newLength){throw $.$$throw($.CTC106);},
 add$1: function(value){this._lib_element.$dom_appendChild$1(value);return value;},
 addLast$1: function(value){return this.add$1(value);},
 iterator$0: function(){return $.iterator(this._toList$0());},
 addAll$1: function(collection){for(var t1=$.iterator(collection),t2=this._lib_element;t1.hasNext$0()===true;)t2.$dom_appendChild$1(t1.next$0());},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC60);},
 getRange$2: function(start,rangeLength){return $._FrozenElementList$_wrap($._Lists_getRange(this,start,rangeLength,[]));},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 clear$0: function(){this._lib_element.set$text('');},
 removeLast$0: function(){var result=this.last$0();if(!(result==null))this._lib_element.$dom_removeChild$1(result);return result;},
 last$0: function(){return this._lib_element.get$$$dom_lastElementChild();},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementList = {"":
 ["_nodeList"],
 "super": "Object",
 get$first: function(){return $.index(this._nodeList,0);},
 first$0: function() { return this.get$first().call$0(); },
 forEach$1: function(f){for(var t1=$.iterator(this);t1.hasNext$0()===true;)f.call$1(t1.next$0());},
 filter$1: function(f){var out=$._ElementList$([]);for(var t1=$.iterator(this);t1.hasNext$0()===true;){var t2=t1.next$0();if(f.call$1(t2)===true)out.add$1(t2);}return out;},
 isEmpty$0: function(){return $.isEmpty(this._nodeList);},
 get$length: function(){return $.get$length(this._nodeList);},
 operator$index$1: function(index){return $.index(this._nodeList,index);},
 operator$indexSet$2: function(index,value){throw $.$$throw($.CTC106);},
 set$length: function(newLength){$.set$length(this._nodeList,newLength);},
 add$1: function(value){throw $.$$throw($.CTC106);},
 addLast$1: function(value){throw $.$$throw($.CTC106);},
 iterator$0: function(){return $._FrozenElementListIterator$(this);},
 addAll$1: function(collection){throw $.$$throw($.CTC106);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC106);},
 getRange$2: function(start,rangeLength){return $._FrozenElementList$_wrap($.getRange(this._nodeList,start,rangeLength));},
 indexOf$2: function(element,start){return $.indexOf$2(this._nodeList,element,start);},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){return $.lastIndexOf$2(this._nodeList,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 clear$0: function(){throw $.$$throw($.CTC106);},
 removeLast$0: function(){throw $.$$throw($.CTC106);},
 last$0: function(){return $.last(this._nodeList);},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementListIterator = {"":
 ["_lib_list", "_index"],
 "super": "Object",
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);var t1=this._lib_list;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.next$0$bailout(1,t1,0);var t3=this._index;if(typeof t3!=='number')return this.next$0$bailout(2,t1,t3);this._index=t3+1;if(t3!==(t3|0))throw $.iae(t3);if(t3<0||t3>=t1.length)throw $.ioore(t3);return t1[t3];},
 next$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);var t1=this._lib_list;case 1:state=0;var t3=this._index;case 2:state=0;this._index=$.add(t3,1);return $.index(t1,t3);}},
 hasNext$0: function(){var t1=this._index;if(typeof t1!=='number')return this.hasNext$0$bailout(1,t1,0);var t3=$.get$length(this._lib_list);if(typeof t3!=='number')return this.hasNext$0$bailout(2,t1,t3);return t1<t3;},
 hasNext$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:var t1=this._index;case 1:state=0;var t3=$.get$length(this._lib_list);case 2:state=0;return $.lt(t1,t3);}}
};

$$._ElementList = {"":
 ["_lib_list"],
 "super": "_ListWrapper",
 filter$1: function(f){return $._ElementList$($._ListWrapper.prototype.filter$1.call(this,f));},
 getRange$2: function(start,rangeLength){return $._ElementList$($._ListWrapper.prototype.getRange$2.call(this,start,rangeLength));},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ElementAttributeMap = {"":
 ["_lib_element?"],
 "super": "Object",
 containsKey$1: function(key){return this._lib_element.$dom_hasAttribute$1(key);},
 operator$index$1: function(key){return this._lib_element.$dom_getAttribute$1(key);},
 operator$indexSet$2: function(key,value){this._lib_element.$dom_setAttribute$2(key,$.S(value));},
 remove$1: function(key){var t1=this._lib_element;var value=t1.$dom_getAttribute$1(key);t1.$dom_removeAttribute$1(key);return value;},
 clear$0: function(){var attributes=this._lib_element.get$$$dom_attributes();if(typeof attributes!=='string'&&(typeof attributes!=='object'||attributes===null||attributes.constructor!==Array&&!attributes.is$JavaScriptIndexingBehavior()))return this.clear$0$bailout(1,attributes);for(var i=attributes.length-1;i>=0;--i){if(i<0||i>=attributes.length)throw $.ioore(i);this.remove$1(attributes[i].get$name());}},
 clear$0$bailout: function(state,attributes){for(var i=$.sub($.get$length(attributes),1);$.geB(i,0);i=$.sub(i,1))this.remove$1($.index(attributes,i).get$name());},
 forEach$1: function(f){var attributes=this._lib_element.get$$$dom_attributes();if(typeof attributes!=='string'&&(typeof attributes!=='object'||attributes===null||attributes.constructor!==Array&&!attributes.is$JavaScriptIndexingBehavior()))return this.forEach$1$bailout(1,f,attributes);for(var len=attributes.length,i=0;i<len;++i){if(i<0||i>=attributes.length)throw $.ioore(i);var item=attributes[i];f.call$2(item.get$name(),item.get$value());}},
 forEach$1$bailout: function(state,f,attributes){for(var len=$.get$length(attributes),i=0;$.ltB(i,len);++i){var item=$.index(attributes,i);f.call$2(item.get$name(),item.get$value());}},
 getKeys$0: function(){var attributes=this._lib_element.get$$$dom_attributes();if(typeof attributes!=='string'&&(typeof attributes!=='object'||attributes===null||attributes.constructor!==Array&&!attributes.is$JavaScriptIndexingBehavior()))return this.getKeys$0$bailout(1,attributes);var keys=$.ListImplementation_List(attributes.length,'String');for(var len=attributes.length,i=0;i<len;++i){if(i<0||i>=attributes.length)throw $.ioore(i);var t1=attributes[i].get$name();if(i<0||i>=keys.length)throw $.ioore(i);keys[i]=t1;}return keys;},
 getKeys$0$bailout: function(state,attributes){var keys=$.ListImplementation_List($.get$length(attributes),'String');for(var len=$.get$length(attributes),i=0;$.ltB(i,len);++i){var t1=$.index(attributes,i).get$name();if(i<0||i>=keys.length)throw $.ioore(i);keys[i]=t1;}return keys;},
 getValues$0: function(){var attributes=this._lib_element.get$$$dom_attributes();if(typeof attributes!=='string'&&(typeof attributes!=='object'||attributes===null||attributes.constructor!==Array&&!attributes.is$JavaScriptIndexingBehavior()))return this.getValues$0$bailout(1,attributes);var values=$.ListImplementation_List(attributes.length,'String');for(var len=attributes.length,i=0;i<len;++i){if(i<0||i>=attributes.length)throw $.ioore(i);var t1=attributes[i].get$value();if(i<0||i>=values.length)throw $.ioore(i);values[i]=t1;}return values;},
 getValues$0$bailout: function(state,attributes){var values=$.ListImplementation_List($.get$length(attributes),'String');for(var len=$.get$length(attributes),i=0;$.ltB(i,len);++i){var t1=$.index(attributes,i).get$value();if(i<0||i>=values.length)throw $.ioore(i);values[i]=t1;}return values;},
 get$length: function(){return $.get$length(this._lib_element.get$$$dom_attributes());},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 is$Map: function() { return true; }
};

$$._DataAttributeMap = {"":
 ["$$dom_attributes?"],
 "super": "Object",
 containsKey$1: function(key){return this.$$dom_attributes.containsKey$1(this._attr$1(key));},
 operator$index$1: function(key){return $.index(this.$$dom_attributes,this._attr$1(key));},
 operator$indexSet$2: function(key,value){$.indexSet(this.$$dom_attributes,this._attr$1(key),$.S(value));},
 remove$1: function(key){return this.$$dom_attributes.remove$1(this._attr$1(key));},
 clear$0: function(){for(var t1=$.iterator(this.getKeys$0());t1.hasNext$0()===true;)this.remove$1(t1.next$0());},
 forEach$1: function(f){$.forEach(this.$$dom_attributes,new $._DataAttributeMap_forEach_anon(this,f));},
 getKeys$0: function(){var keys=$.ListImplementation_List(null,'String');$.forEach(this.$$dom_attributes,new $._DataAttributeMap_getKeys_anon(this,keys));return keys;},
 getValues$0: function(){var values=$.ListImplementation_List(null,'String');$.forEach(this.$$dom_attributes,new $._DataAttributeMap_getValues_anon(this,values));return values;},
 get$length: function(){return $.get$length(this.getKeys$0());},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 _attr$1: function(key){return 'data-'+$.S(key);},
 _matches$1: function(key){return $.startsWith(key,'data-');},
 _strip$1: function(key){return $.substring$1(key,5);},
 is$Map: function() { return true; }
};

$$._ElementEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$change: function(){return this.operator$index$1('change');},
 get$error: function(){return this.operator$index$1('error');},
 get$keyUp: function(){return this.operator$index$1('keyup');},
 get$reset: function(){return this.operator$index$1('reset');},
 reset$0: function() { return this.get$reset().call$0(); }
};

$$._EventSourceEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._EventsImpl = {"":
 ["_ptr"],
 "super": "Object",
 operator$index$1: function(type){return $._EventListenerListImpl$(this._ptr,type);}
};

$$._EventListenerListImpl = {"":
 ["_ptr", "_type"],
 "super": "Object",
 add$2: function(listener,useCapture){this._add$2(listener,useCapture);return this;},
 add$1: function(listener) {
  return this.add$2(listener,false)
},
 remove$2: function(listener,useCapture){this._remove$2(listener,useCapture);return this;},
 remove$1: function(listener) {
  return this.remove$2(listener,false)
},
 _add$2: function(listener,useCapture){this._ptr.$dom_addEventListener$3(this._type,listener,useCapture);},
 _remove$2: function(listener,useCapture){this._ptr.$dom_removeEventListener$3(this._type,listener,useCapture);}
};

$$._FileReaderEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._FileWriterEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');},
 get$write: function(){return this.operator$index$1('write');},
 write$1: function(arg0) { return this.get$write().call$1(arg0); }
};

$$._FrameSetElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._HttpRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._HttpRequestUploadEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._IDBDatabaseEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._IDBOpenDBRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_IDBRequestEventsImpl"
};

$$._IDBRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._IDBTransactionEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$complete: function(){return this.operator$index$1('complete');},
 complete$1: function(arg0) { return this.get$complete().call$1(arg0); },
 get$error: function(){return this.operator$index$1('error');}
};

$$._IDBVersionChangeRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_IDBRequestEventsImpl"
};

$$._InputElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._JavaScriptAudioNodeEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._MediaStreamEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaStreamTrackEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaStreamTrackListEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MessagePortEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._ChildNodeListLazy = {"":
 ["_this"],
 "super": "Object",
 get$first: function(){return this._this.firstChild;},
 first$0: function() { return this.get$first().call$0(); },
 last$0: function(){return this._this.lastChild;},
 add$1: function(value){this._this.$dom_appendChild$1(value);},
 addLast$1: function(value){this._this.$dom_appendChild$1(value);},
 addAll$1: function(collection){for(var t1=$.iterator(collection),t2=this._this;t1.hasNext$0()===true;)t2.$dom_appendChild$1(t1.next$0());},
 removeLast$0: function(){var result=this.last$0();if(!(result==null))this._this.$dom_removeChild$1(result);return result;},
 clear$0: function(){this._this.set$text('');},
 operator$indexSet$2: function(index,value){this._this.$dom_replaceChild$2(value,this.operator$index$1(index));},
 iterator$0: function(){return $.iterator(this._this.get$$$dom_childNodes());},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._NodeListWrapper$($._Collections_filter(this,[],f));},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.UnsupportedOperationException$('Cannot insertRange on immutable List.'));},
 getRange$2: function(start,rangeLength){return $._NodeListWrapper$($._Lists_getRange(this,start,rangeLength,[]));},
 get$length: function(){return $.get$length(this._this.get$$$dom_childNodes());},
 operator$index$1: function(index){return $.index(this._this.get$$$dom_childNodes(),index);},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ListWrapper = {"":
 [],
 "super": "Object",
 iterator$0: function(){return $.iterator(this._lib_list);},
 forEach$1: function(f){return $.forEach(this._lib_list,f);},
 filter$1: function(f){return $.filter(this._lib_list,f);},
 isEmpty$0: function(){return $.isEmpty(this._lib_list);},
 get$length: function(){return $.get$length(this._lib_list);},
 operator$index$1: function(index){return $.index(this._lib_list,index);},
 operator$indexSet$2: function(index,value){$.indexSet(this._lib_list,index,value);},
 set$length: function(newLength){$.set$length(this._lib_list,newLength);},
 add$1: function(value){return $.add$1(this._lib_list,value);},
 addLast$1: function(value){return $.addLast(this._lib_list,value);},
 addAll$1: function(collection){return $.addAll(this._lib_list,collection);},
 indexOf$2: function(element,start){return $.indexOf$2(this._lib_list,element,start);},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){return $.lastIndexOf$2(this._lib_list,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 clear$0: function(){return $.clear(this._lib_list);},
 removeLast$0: function(){return $.removeLast(this._lib_list);},
 last$0: function(){return $.last(this._lib_list);},
 getRange$2: function(start,rangeLength){return $.getRange(this._lib_list,start,rangeLength);},
 insertRange$3: function(start,rangeLength,initialValue){return $.insertRange$3(this._lib_list,start,rangeLength,initialValue);},
 get$first: function(){return $.index(this._lib_list,0);},
 first$0: function() { return this.get$first().call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NodeListWrapper = {"":
 ["_lib_list"],
 "super": "_ListWrapper",
 filter$1: function(f){return $._NodeListWrapper$($.filter(this._lib_list,f));},
 getRange$2: function(start,rangeLength){return $._NodeListWrapper$($.getRange(this._lib_list,start,rangeLength));},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NotificationEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$close: function(){return this.operator$index$1('close');},
 close$0: function() { return this.get$close().call$0(); },
 get$error: function(){return this.operator$index$1('error');}
};

$$._PeerConnection00EventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._SVGElementInstanceEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$change: function(){return this.operator$index$1('change');},
 get$error: function(){return this.operator$index$1('error');},
 get$keyUp: function(){return this.operator$index$1('keyup');},
 get$reset: function(){return this.operator$index$1('reset');},
 reset$0: function() { return this.get$reset().call$0(); }
};

$$._SharedWorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_WorkerContextEventsImpl"
};

$$._SpeechRecognitionEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._TextTrackEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._TextTrackCueEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._TextTrackListEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._WebSocketEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$close: function(){return this.operator$index$1('close');},
 close$0: function() { return this.get$close().call$0(); },
 get$error: function(){return this.operator$index$1('error');}
};

$$._WindowEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$change: function(){return this.operator$index$1('change');},
 get$error: function(){return this.operator$index$1('error');},
 get$keyUp: function(){return this.operator$index$1('keyup');},
 get$reset: function(){return this.operator$index$1('reset');},
 reset$0: function() { return this.get$reset().call$0(); }
};

$$._WorkerEventsImpl = {"":
 ["_ptr"],
 "super": "_AbstractWorkerEventsImpl"
};

$$._WorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$error: function(){return this.operator$index$1('error');}
};

$$._FixedSizeListIterator = {"":
 ["_lib_length", "_array", "_pos"],
 "super": "_VariableSizeListIterator",
 hasNext$0: function(){var t1=this._lib_length;if(typeof t1!=='number')return this.hasNext$0$bailout(1,t1,0);var t3=this._pos;if(typeof t3!=='number')return this.hasNext$0$bailout(2,t1,t3);return t1>t3;},
 hasNext$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:var t1=this._lib_length;case 1:state=0;var t3=this._pos;case 2:state=0;return $.gt(t1,t3);}}
};

$$._VariableSizeListIterator = {"":
 [],
 "super": "Object",
 hasNext$0: function(){var t1=$.get$length(this._array);if(typeof t1!=='number')return this.hasNext$0$bailout(1,t1,0);var t3=this._pos;if(typeof t3!=='number')return this.hasNext$0$bailout(2,t3,t1);return t1>t3;},
 hasNext$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t3=env0;t1=env1;break;}switch(state){case 0:var t1=$.get$length(this._array);case 1:state=0;var t3=this._pos;case 2:state=0;return $.gt(t1,t3);}},
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);var t1=this._array;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.next$0$bailout(1,t1,0);var t3=this._pos;if(typeof t3!=='number')return this.next$0$bailout(2,t1,t3);this._pos=t3+1;if(t3!==(t3|0))throw $.iae(t3);if(t3<0||t3>=t1.length)throw $.ioore(t3);return t1[t3];},
 next$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);var t1=this._array;case 1:state=0;var t3=this._pos;case 2:state=0;this._pos=$.add(t3,1);return $.index(t1,t3);}}
};

$$._Manager = {"":
 ["nextIsolateId=", "currentManagerId=", "nextManagerId=", "currentContext=", "rootContext=", "topEventLoop?", "fromCommandLine?", "isWorker?", "supportsWorkers", "isolates?", "mainManager?", "managers?"],
 "super": "Object",
 get$useWorkers: function(){return this.supportsWorkers;},
 get$needSerialization: function(){return this.get$useWorkers();},
 _nativeDetectEnvironment$0: function(){    this.isWorker = $isWorker;
    this.supportsWorkers = $supportsWorkers;
    this.fromCommandLine = typeof(window) == 'undefined';
  },
 _nativeInitWorkerMessageHandler$0: function(){    $globalThis.onmessage = function (e) {
      _IsolateNatives._processWorkerMessage(this.mainManager, e);
    }
  },
 maybeCloseWorker$0: function(){if($.isEmpty(this.isolates)===true)this.mainManager.postMessage$1($._serializeMessage($.makeLiteralMap(['command','close'])));},
 _Manager$0: function(){this._nativeDetectEnvironment$0();this.topEventLoop=$._EventLoop$();this.isolates=$.HashMapImplementation$('int','_IsolateContext');this.managers=$.HashMapImplementation$('int','_ManagerStub');if(this.isWorker===true){this.mainManager=$._MainManagerStub$();this._nativeInitWorkerMessageHandler$0();}}
};

$$._IsolateContext = {"":
 ["id=", "ports?", "isolateStatics"],
 "super": "Object",
 initGlobals$0: function(){$initGlobals(this);},
 eval$1: function(code){var old=$._globalState().get$currentContext();$._globalState().set$currentContext(this);this._setGlobals$0();var result=null;try{result=code.call$0();}finally{var t1=old;$._globalState().set$currentContext(t1);t1=old;if(!(t1==null))t1._setGlobals$0();}return result;},
 _setGlobals$0: function(){$setGlobals(this);},
 lookup$1: function(portId){return $.index(this.ports,portId);},
 register$2: function(portId,port){if(this.ports.containsKey$1(portId)===true)throw $.$$throw($.ExceptionImplementation$('Registry: ports must be registered only once.'));$.indexSet(this.ports,portId,port);$.indexSet($._globalState().get$isolates(),this.id,this);},
 unregister$1: function(portId){this.ports.remove$1(portId);if($.isEmpty(this.ports)===true)$._globalState().get$isolates().remove$1(this.id);},
 _IsolateContext$0: function(){var t1=$._globalState();var t2=t1.get$nextIsolateId();t1.set$nextIsolateId($.add(t2,1));this.id=t2;this.ports=$.HashMapImplementation$('int','ReceivePort');this.initGlobals$0();}
};

$$._EventLoop = {"":
 ["events"],
 "super": "Object",
 enqueue$3: function(isolate,fn,msg){$.addLast(this.events,$._IsolateEvent$(isolate,fn,msg));},
 dequeue$0: function(){if($.isEmpty(this.events)===true)return;return this.events.removeFirst$0();},
 runIteration$0: function(){var event$=this.dequeue$0();if(event$==null){if($._globalState().get$isWorker()===true)$._globalState().maybeCloseWorker$0();else if(!($._globalState().get$rootContext()==null)&&$._globalState().get$isolates().containsKey$1($._globalState().get$rootContext().get$id())===true&&$._globalState().get$fromCommandLine()===true&&$.isEmpty($._globalState().get$rootContext().get$ports())===true)throw $.$$throw($.ExceptionImplementation$('Program exited with open ReceivePorts.'));return false;}event$.process$0();return true;},
 _runHelper$0: function(){if(!($._window()==null))new $._EventLoop__runHelper_next(this).call$0();else for(;this.runIteration$0()===true;);},
 run$0: function(){if($._globalState().get$isWorker()!==true)this._runHelper$0();else try{this._runHelper$0();}catch(exception){var t1=$.unwrapException(exception);var e=t1;var trace=$.getTraceFromException(exception);$._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command','error','msg',$.S(e)+'\n'+$.S(trace)])));}}
};

$$._IsolateEvent = {"":
 ["isolate", "fn", "message"],
 "super": "Object",
 process$0: function(){this.isolate.eval$1(this.fn);}
};

$$._MainManagerStub = {"":
 [],
 "super": "Object",
 get$id: function(){return 0;},
 set$id: function(i){throw $.$$throw($.NotImplementedException$(null));},
 set$onmessage: function(f){throw $.$$throw($.ExceptionImplementation$('onmessage should not be set on MainManagerStub'));},
 postMessage$1: function(msg){$globalThis.postMessage(msg);},
 terminate$0: function(){}
};

$$._BaseSendPort = {"":
 ["_isolateId?"],
 "super": "Object",
 _checkReplyTo$1: function(replyTo){if(!(replyTo==null)&&!(typeof replyTo==='object'&&replyTo!==null&&!!replyTo.is$_NativeJsSendPort)&&!(typeof replyTo==='object'&&replyTo!==null&&!!replyTo.is$_WorkerSendPort)&&!(typeof replyTo==='object'&&replyTo!==null&&!!replyTo.is$_BufferingSendPort))throw $.$$throw($.ExceptionImplementation$('SendPort.send: Illegal replyTo port type'));},
 call$1: function(message){var completer=$.CompleterImpl$();var port=$._ReceivePortImpl$();this.send$2(message,port.toSendPort$0());port.receive$1(new $._BaseSendPort_call_anon(port,completer));return completer.get$future();},
 is$SendPort: true
};

$$._NativeJsSendPort = {"":
 ["_receivePort?", "_isolateId"],
 "super": "_BaseSendPort",
 send$2: function(message,replyTo){$._waitForPendingPorts([message,replyTo],new $._NativeJsSendPort_send_anon(this,message,replyTo));},
 send$1: function(message) {
  return this.send$2(message,null)
},
 operator$eq$1: function(other){return typeof other==='object'&&other!==null&&!!other.is$_NativeJsSendPort&&$.eqB(this._receivePort,other._receivePort);},
 hashCode$0: function(){return this._receivePort.get$_id();},
 is$_NativeJsSendPort: true,
 is$SendPort: true
};

$$._WorkerSendPort = {"":
 ["_workerId?", "_receivePortId", "_isolateId"],
 "super": "_BaseSendPort",
 send$2: function(message,replyTo){$._waitForPendingPorts([message,replyTo],new $._WorkerSendPort_send_anon(this,message,replyTo));},
 send$1: function(message) {
  return this.send$2(message,null)
},
 operator$eq$1: function(other){if(typeof other==='object'&&other!==null&&!!other.is$_WorkerSendPort)var t1=$.eqB(this._workerId,other._workerId)&&$.eqB(this._isolateId,other._isolateId)&&$.eqB(this._receivePortId,other._receivePortId);else t1=false;return t1;},
 hashCode$0: function(){return $.xor($.xor($.shl(this._workerId,16),$.shl(this._isolateId,8)),this._receivePortId);},
 is$_WorkerSendPort: true,
 is$SendPort: true
};

$$._BufferingSendPort = {"":
 ["_id?", "_port!", "_futurePort?", "pending=", "_isolateId"],
 "super": "_BaseSendPort",
 send$2: function(message,replyTo){var t1=this._port;if(!(t1==null))t1.send$2(message,replyTo);else $.add$1(this.pending,$.makeLiteralMap(['message',message,'replyTo',replyTo]));},
 send$1: function(message) {
  return this.send$2(message,null)
},
 operator$eq$1: function(other){return typeof other==='object'&&other!==null&&!!other.is$_BufferingSendPort&&$.eqB(this._id,other._id);},
 hashCode$0: function(){return this._id;},
 _BufferingSendPort$2: function(isolateId,_futurePort){$._BufferingSendPort__idCount=$.add($._BufferingSendPort__idCount,1);this._futurePort.then$1(new $.anon0(this));},
 is$_BufferingSendPort: true,
 is$SendPort: true
};

$$._ReceivePortImpl = {"":
 ["_id?", "_callback?"],
 "super": "Object",
 _callback$2: function(arg0, arg1) { return this._callback.call$2(arg0, arg1); },
 receive$1: function(onMessage){this._callback=onMessage;},
 close$0: function(){this._callback=null;$._globalState().get$currentContext().unregister$1(this._id);},
 toSendPort$0: function(){return $._NativeJsSendPort$(this,$._globalState().get$currentContext().get$id());},
 _ReceivePortImpl$0: function(){$._globalState().get$currentContext().register$2(this._id,this);}
};

$$._PendingSendPortFinder = {"":
 ["ports?", "_visited"],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x){},
 visitList$1: function(list){if(!($.index(this._visited,list)==null))return;$.indexSet(this._visited,list,true);$.forEach(list,new $._PendingSendPortFinder_visitList_anon(this));},
 visitMap$1: function(map){if(!($.index(this._visited,map)==null))return;$.indexSet(this._visited,map,true);$.forEach(map.getValues$0(),new $._PendingSendPortFinder_visitMap_anon(this));},
 visitSendPort$1: function(port){if(!!port.is$_BufferingSendPort&&port._port==null)this.ports.push(port.get$_futurePort());},
 _PendingSendPortFinder$0: function(){this._visited=$._JsVisitedMap$();}
};

$$._JsSerializer = {"":
 ["_nextFreeRefId", "_visited"],
 "super": "_Serializer",
 visitSendPort$1: function(x){if(typeof x==='object'&&x!==null&&!!x.is$_NativeJsSendPort)return this.visitNativeJsSendPort$1(x);if(typeof x==='object'&&x!==null&&!!x.is$_WorkerSendPort)return this.visitWorkerSendPort$1(x);if(typeof x==='object'&&x!==null&&!!x.is$_BufferingSendPort)return this.visitBufferingSendPort$1(x);throw $.$$throw('Illegal underlying port '+$.S(x));},
 visitNativeJsSendPort$1: function(port){return ['sendport',$._globalState().get$currentManagerId(),port._isolateId,port._receivePort.get$_id()];},
 visitWorkerSendPort$1: function(port){return ['sendport',port._workerId,port._isolateId,port._receivePortId];},
 visitBufferingSendPort$1: function(port){var t1=port._port;if(!(t1==null))return this.visitSendPort$1(t1);else throw $.$$throw('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');},
 _JsSerializer$0: function(){this._visited=$._JsVisitedMap$();}
};

$$._JsCopier = {"":
 ["_visited"],
 "super": "_Copier",
 visitSendPort$1: function(x){if(typeof x==='object'&&x!==null&&!!x.is$_NativeJsSendPort)return this.visitNativeJsSendPort$1(x);if(typeof x==='object'&&x!==null&&!!x.is$_WorkerSendPort)return this.visitWorkerSendPort$1(x);if(typeof x==='object'&&x!==null&&!!x.is$_BufferingSendPort)return this.visitBufferingSendPort$1(x);throw $.$$throw('Illegal underlying port '+$.S(this.get$p()));},
 visitNativeJsSendPort$1: function(port){return $._NativeJsSendPort$(port._receivePort,port._isolateId);},
 visitWorkerSendPort$1: function(port){return $._WorkerSendPort$(port._workerId,port._isolateId,port._receivePortId);},
 visitBufferingSendPort$1: function(port){var t1=port._port;if(!(t1==null))return this.visitSendPort$1(t1);else throw $.$$throw('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');},
 _JsCopier$0: function(){this._visited=$._JsVisitedMap$();}
};

$$._JsDeserializer = {"":
 ["_deserialized"],
 "super": "_Deserializer",
 deserializeSendPort$1: function(x){var managerId=$.index(x,1);var isolateId=$.index(x,2);var receivePortId=$.index(x,3);if($.eqB(managerId,$._globalState().get$currentManagerId())){var isolate=$.index($._globalState().get$isolates(),isolateId);if(isolate==null)return;return $._NativeJsSendPort$(isolate.lookup$1(receivePortId),isolateId);}else return $._WorkerSendPort$(managerId,isolateId,receivePortId);}
};

$$._JsVisitedMap = {"":
 ["tagged"],
 "super": "Object",
 operator$index$1: function(object){return this._getAttachedInfo$1(object);},
 operator$indexSet$2: function(object,info){$.add$1(this.tagged,object);this._setAttachedInfo$2(object,info);},
 reset$0: function(){this.tagged=$.ListImplementation_List(null);},
 cleanup$0: function(){var length$=$.get$length(this.tagged);if(typeof length$!=='number')return this.cleanup$0$bailout(1,length$);var i=0;for(;i<length$;++i)this._clearAttachedInfo$1($.index(this.tagged,i));this.tagged=null;},
 cleanup$0$bailout: function(state,length$){var i=0;for(;$.ltB(i,length$);++i)this._clearAttachedInfo$1($.index(this.tagged,i));this.tagged=null;},
 _clearAttachedInfo$1: function(o){o['__MessageTraverser__attached_info__'] = (void 0);},
 _setAttachedInfo$2: function(o,info){o['__MessageTraverser__attached_info__'] = info;},
 _getAttachedInfo$1: function(o){return o['__MessageTraverser__attached_info__'];}
};

$$._MessageTraverserVisitedMap = {"":
 [],
 "super": "Object",
 operator$index$1: function(object){return;},
 operator$indexSet$2: function(object,info){},
 reset$0: function(){},
 cleanup$0: function(){}
};

$$._MessageTraverser = {"":
 [],
 "super": "Object",
 traverse$1: function(x){if($._MessageTraverser_isPrimitive(x))return this.visitPrimitive$1(x);this._visited.reset$0();var result=null;try{result=this._dispatch$1(x);}finally{this._visited.cleanup$0();}return result;},
 _dispatch$1: function(x){if($._MessageTraverser_isPrimitive(x))return this.visitPrimitive$1(x);if(typeof x==='object'&&x!==null&&(x.constructor===Array||x.is$List()))return this.visitList$1(x);if(typeof x==='object'&&x!==null&&x.is$Map())return this.visitMap$1(x);if(typeof x==='object'&&x!==null&&!!x.is$SendPort)return this.visitSendPort$1(x);if(typeof x==='object'&&x!==null&&!!x.is$SendPortSync)return this.visitSendPortSync$1(x);return this.visitObject$1(x);},
 visitObject$1: function(x){throw $.$$throw('Message serialization: Illegal value '+$.S(x)+' passed');}
};

$$._Copier = {"":
 [],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x){return x;},
 visitList$1: function(list){if(typeof list!=='object'||list===null||list.constructor!==Array&&!list.is$JavaScriptIndexingBehavior())return this.visitList$1$bailout(1,list);var copy=this._visited.operator$index$1(list);if(!(copy==null))return copy;var len=list.length;copy=$.ListImplementation_List(len);this._visited.operator$indexSet$2(list,copy);for(var i=0;i<len;++i){if(i<0||i>=list.length)throw $.ioore(i);var t1=this._dispatch$1(list[i]);if(i<0||i>=copy.length)throw $.ioore(i);copy[i]=t1;}return copy;},
 visitList$1$bailout: function(state,list){var copy=$.index(this._visited,list);if(!(copy==null))return copy;var len=$.get$length(list);copy=$.ListImplementation_List(len);$.indexSet(this._visited,list,copy);for(var i=0;$.ltB(i,len);++i){var t1=this._dispatch$1($.index(list,i));if(i<0||i>=copy.length)throw $.ioore(i);copy[i]=t1;}return copy;},
 visitMap$1: function(map){var t1={};t1.copy_10=$.index(this._visited,map);var t2=t1.copy_10;if(!(t2==null))return t2;t1.copy_10=$.HashMapImplementation$();$.indexSet(this._visited,map,t1.copy_10);map.forEach$1(new $._Copier_visitMap_anon(this,t1));return t1.copy_10;}
};

$$._Serializer = {"":
 [],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x){return x;},
 visitList$1: function(list){var copyId=$.index(this._visited,list);if(!(copyId==null))return ['ref',copyId];var id=this._nextFreeRefId;this._nextFreeRefId=id+1;$.indexSet(this._visited,list,id);return ['list',id,this._serializeList$1(list)];},
 visitMap$1: function(map){var copyId=$.index(this._visited,map);if(!(copyId==null))return ['ref',copyId];var id=this._nextFreeRefId;this._nextFreeRefId=id+1;$.indexSet(this._visited,map,id);return ['map',id,this._serializeList$1(map.getKeys$0()),this._serializeList$1(map.getValues$0())];},
 _serializeList$1: function(list){if(typeof list!=='string'&&(typeof list!=='object'||list===null||list.constructor!==Array&&!list.is$JavaScriptIndexingBehavior()))return this._serializeList$1$bailout(1,list);var len=list.length;var result=$.ListImplementation_List(len);for(var i=0;i<len;++i){if(i<0||i>=list.length)throw $.ioore(i);var t1=this._dispatch$1(list[i]);if(i<0||i>=result.length)throw $.ioore(i);result[i]=t1;}return result;},
 _serializeList$1$bailout: function(state,list){var len=$.get$length(list);var result=$.ListImplementation_List(len);for(var i=0;$.ltB(i,len);++i){var t1=this._dispatch$1($.index(list,i));if(i<0||i>=result.length)throw $.ioore(i);result[i]=t1;}return result;}
};

$$._Deserializer = {"":
 [],
 "super": "Object",
 deserialize$1: function(x){if($._Deserializer_isPrimitive(x))return x;this._deserialized=$.HashMapImplementation$();return this._deserializeHelper$1(x);},
 _deserializeHelper$1: function(x){if($._Deserializer_isPrimitive(x))return x;switch($.index(x,0)){case 'ref':return this._deserializeRef$1(x);case 'list':return this._deserializeList$1(x);case 'map':return this._deserializeMap$1(x);case 'sendport':return this.deserializeSendPort$1(x);default:return this.deserializeObject$1(x);}},
 _deserializeRef$1: function(x){var id=$.index(x,1);return $.index(this._deserialized,id);},
 _deserializeList$1: function(x){var id=$.index(x,1);var dartList=$.index(x,2);if(typeof dartList!=='object'||dartList===null||(dartList.constructor!==Array||!!dartList.immutable$list)&&!dartList.is$JavaScriptIndexingBehavior())return this._deserializeList$1$bailout(1,dartList,id);$.indexSet(this._deserialized,id,dartList);var len=dartList.length;for(var i=0;i<len;++i){if(i<0||i>=dartList.length)throw $.ioore(i);var t1=this._deserializeHelper$1(dartList[i]);if(i<0||i>=dartList.length)throw $.ioore(i);dartList[i]=t1;}return dartList;},
 _deserializeList$1$bailout: function(state,dartList,id){$.indexSet(this._deserialized,id,dartList);var len=$.get$length(dartList);for(var i=0;$.ltB(i,len);++i)$.indexSet(dartList,i,this._deserializeHelper$1($.index(dartList,i)));return dartList;},
 _deserializeMap$1: function(x){var result=$.HashMapImplementation$();var id=$.index(x,1);$.indexSet(this._deserialized,id,result);var keys=$.index(x,2);if(typeof keys!=='string'&&(typeof keys!=='object'||keys===null||keys.constructor!==Array&&!keys.is$JavaScriptIndexingBehavior()))return this._deserializeMap$1$bailout(1,x,result,keys);var values=$.index(x,3);if(typeof values!=='string'&&(typeof values!=='object'||values===null||values.constructor!==Array&&!values.is$JavaScriptIndexingBehavior()))return this._deserializeMap$1$bailout(2,values,result,keys);var len=keys.length;for(var i=0;i<len;++i){if(i<0||i>=keys.length)throw $.ioore(i);var key=this._deserializeHelper$1(keys[i]);if(i<0||i>=values.length)throw $.ioore(i);result.operator$indexSet$2(key,this._deserializeHelper$1(values[i]));}return result;},
 _deserializeMap$1$bailout: function(state,env0,env1,env2){switch(state){case 1:var x=env0;result=env1;keys=env2;break;case 2:values=env0;result=env1;keys=env2;break;}switch(state){case 0:var result=$.HashMapImplementation$();var id=$.index(x,1);$.indexSet(this._deserialized,id,result);var keys=$.index(x,2);case 1:state=0;var values=$.index(x,3);case 2:state=0;var len=$.get$length(keys);for(var i=0;$.ltB(i,len);++i)result.operator$indexSet$2(this._deserializeHelper$1($.index(keys,i)),this._deserializeHelper$1($.index(values,i)));return result;}},
 deserializeObject$1: function(x){throw $.$$throw('Unexpected serialized object');}
};

$$._Timer = {"":
 ["_once", "_handle"],
 "super": "Object",
 _Timer$repeating$2: function(milliSeconds,callback){this._handle=$._window().setInterval$2(new $.anon3(this,callback),milliSeconds);},
 _Timer$2: function(milliSeconds,callback){this._handle=$._window().setTimeout$2(new $.anon2(this,callback),milliSeconds);}
};

$$.Uri = {"":
 ["scheme", "userInfo", "domain", "port", "path", "query", "fragment"],
 "super": "Object",
 query$1: function(arg0) { return this.query.call$1(arg0); },
 isAbsolute$0: function(){if(''===this.scheme)return false;if(!(''===this.fragment))return false;return true;},
 hasAuthority$0: function(){return !$.eqB(this.userInfo,'')||!$.eqB(this.domain,'')||!$.eqB(this.port,0);},
 toString$0: function(){var sb=$.StringBufferImpl$('');var t1=this.scheme;$.Uri__addIfNonEmpty(sb,t1,t1,':');if(this.hasAuthority$0()===true||$.eqB(t1,'file')){sb.add$1('//');t1=this.userInfo;$.Uri__addIfNonEmpty(sb,t1,t1,'@');t1=this.domain;sb.add$1(t1==null?'null':t1);t1=this.port;if(!$.eqB(t1,0)){sb.add$1(':');sb.add$1($.toString(t1));}}t1=this.path;sb.add$1(t1==null?'null':t1);t1=this.query;$.Uri__addIfNonEmpty(sb,t1,'?',t1);t1=this.fragment;$.Uri__addIfNonEmpty(sb,t1,'#',t1);return sb.toString$0();}
};

$$.DisposableImpl = {"":
 [],
 "super": "Object"
};

$$.GlobalId = {"":
 ["id?", "_hashCode"],
 "super": "Object",
 hashCode$0: function(){return this._hashCode;},
 operator$eq$1: function(other){return !(other==null)&&$.eqB(other.get$id(),this.id);}
};

$$.NullArgumentException = {"":
 ["theArg", "_arg"],
 "super": "IllegalArgumentException",
 toString$0: function(){return 'Null argument(s): '+$.S(this.theArg);}
};

$$.InvalidOperationException = {"":
 ["message"],
 "super": "Object",
 is$Exception: true
};

$$.DetailedIllegalArgumentException = {"":
 ["argument", "message", "_arg"],
 "super": "IllegalArgumentException",
 toString$0: function(){var t1=this.message;var t2=t1==null||$.eqB($.get$length(t1),0);var t3=this.argument;if(t2)return 'Illegal argument: '+$.S(t3);else return 'Illegal argument: '+$.S(t3)+' -- '+$.S(t1);}
};

$$.Enumerable = {"":
 [],
 "super": "Object",
 iterator$0: function(){throw $.$$throw($.CTC60);},
 join$1: function(separator){var sb=$.StringBufferImpl$('');for(var t1=$.iterator(this);t1.hasNext$0()===true;){var t2=t1.next$0();if($.gtB($.get$length(sb),0))sb.add$1(separator);sb.add$1(t2);}return sb.toString$0();},
 join$0: function() {
  return this.join$1(', ')
},
 first$1: function(f){if(f==null)f=new $.Enumerable_first_anon();var iter=$._WhereIterator$(this.iterator$0(),f,$.getRuntimeTypeInfo(this).T);if(iter.hasNext$0()!==true)throw $.$$throw($.CTC105);return iter.next$0();},
 first$0: function() {
  return this.first$1(null)
},
 get$first: function() { return new $.BoundClosure1(this, 'first$1'); },
 forEach$1: function(f){for(var t1=$.iterator(this);t1.hasNext$0()===true;)f.call$1(t1.next$0());},
 toString$0: function(){return '['+$.S(this.join$0())+']';}
};

$$._WhereIterator = {"":
 ["_source", "_lib3_func", "_lib3_next=", "_current"],
 "super": "Object",
 _lib3_func$1: function(arg0) { return this._lib3_func.call$1(arg0); },
 _lib3_func$1: function(arg0) { return this._lib3_func.call$1(arg0); },
 hasNext$0: function(){if(this._lib3_next==null){this._lib3_next=false;for(var t1=this._source;t1.hasNext$0()===true;){this._current=t1.next$0();if(this._lib3_func$1(this._current)===true){this._lib3_next=true;break;}}}return this._lib3_next;},
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);this._lib3_next=null;return this._current;}
};

$$.IndexIterator = {"":
 ["_indexer", "_lib3_length", "_lib3_pos"],
 "super": "Object",
 hasNext$0: function(){var t1=this._lib3_length;if(typeof t1!=='number')return this.hasNext$0$bailout(1,t1,0);var t3=this._lib3_pos;if(typeof t3!=='number')return this.hasNext$0$bailout(2,t1,t3);return t1>t3;},
 hasNext$0$bailout: function(state,env0,env1){switch(state){case 1:t1=env0;break;case 2:t1=env0;t3=env1;break;}switch(state){case 0:var t1=this._lib3_length;case 1:state=0;var t3=this._lib3_pos;case 2:state=0;return $.gt(t1,t3);}},
 next$0: function(){if(this.hasNext$0()!==true)throw $.$$throw($.CTC2);var t1=this._lib3_pos;if(typeof t1!=='number')return this.next$0$bailout(1,t1);this._lib3_pos=t1+1;return this._indexer$1(t1);},
 next$0$bailout: function(state,t1){this._lib3_pos=$.add(t1,1);return this._indexer$1(t1);},
 _indexer$1: function(arg0) { return this._indexer.call$1(arg0); },
 IndexIterator$2: function(length$,indexer){$.requireArgumentNotNull(this._indexer,'_indexer');}
};

$$.ListBase = {"":
 [],
 "super": "Enumerable",
 iterator$0: function(){return $.IndexIterator$($.get$length(this),new $.ListBase_iterator_anon(this),$.getRuntimeTypeInfo(this).T);},
 forEach$1: function(f){for(var i=0;$.ltB(i,$.get$length(this));++i)f.call$1(this.operator$index$1(i));},
 filter$1: function(f){var list=$.ListImplementation_List(null,$.getRuntimeTypeInfo(this).T);for(var i=0;$.ltB(i,$.get$length(this));++i){var e=this.operator$index$1(i);if(f.call$1(e)===true)list.push(e);}return list;},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 get$length: function(){throw $.$$throw($.CTC61);},
 operator$index$1: function(index){throw $.$$throw($.CTC61);},
 indexOf$2: function(element,start){if(typeof start!=='number')return this.indexOf$2$bailout(1,element,start);for(var i=start;$.ltB(i,$.get$length(this));++i)if($.eqB(this.operator$index$1(i),element))return i;return -1;},
 indexOf$2$bailout: function(state,element,start){for(var i=start;$.ltB(i,$.get$length(this));i=$.add(i,1))if($.eqB(this.operator$index$1(i),element))return i;return -1;},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start!==(start|0))return this.lastIndexOf$2$bailout(1,element,start);for(var i=start,lastIndex=-1;$.ltB(i,$.get$length(this));++i)lastIndex=$.eqB(this.operator$index$1(i),element)?i:lastIndex;return lastIndex;},
 lastIndexOf$2$bailout: function(state,element,start){for(var i=start,lastIndex=-1;$.ltB(i,$.get$length(this));i=$.add(i,1))lastIndex=$.eqB(this.operator$index$1(i),element)?i:lastIndex;return lastIndex;},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 getRange$2: function(start,itemCount){if(typeof start!=='number')return this.getRange$2$bailout(1,start,itemCount);$.requireArgument($.ge(itemCount,0),'count',null);if(typeof itemCount!=='number')throw $.iae(itemCount);var lastIndex=start+itemCount-1;if(itemCount>0)if(start<0)throw $.$$throw($.IndexOutOfRangeException$(start));else if($.geB(lastIndex,$.get$length(this)))throw $.$$throw($.IndexOutOfRangeException$(lastIndex));var list=$.ListImplementation_List(null,$.getRuntimeTypeInfo(this).T);for(var i=start;i<=lastIndex;++i)list.push(this.operator$index$1(i));return list;},
 getRange$2$bailout: function(state,start,itemCount){$.requireArgument($.ge(itemCount,0),'count',null);var lastIndex=$.sub($.add(start,itemCount),1);if($.gtB(itemCount,0))if($.ltB(start,0))throw $.$$throw($.IndexOutOfRangeException$(start));else if($.geB(lastIndex,$.get$length(this)))throw $.$$throw($.IndexOutOfRangeException$(lastIndex));var list=$.ListImplementation_List(null,$.getRuntimeTypeInfo(this).T);for(var i=start;$.leB(i,lastIndex);i=$.add(i,1))list.push(this.operator$index$1(i));return list;},
 operator$indexSet$2: function(index,value){throw $.$$throw($.CTC59);},
 add$1: function(value){throw $.$$throw($.CTC59);},
 addLast$1: function(value){throw $.$$throw($.CTC59);},
 addAll$1: function(value){throw $.$$throw($.CTC59);},
 clear$0: function(){throw $.$$throw($.CTC59);},
 removeLast$0: function(){throw $.$$throw($.CTC59);},
 insertRange$3: function(start,length$,initialValue){throw $.$$throw($.CTC59);},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$.ReadOnlyCollection = {"":
 ["_items"],
 "super": "ListBase",
 get$length: function(){return $.get$length(this._items);},
 operator$index$1: function(index){return $.index(this._items,index);}
};

$$.EventHandle = {"":
 ["_handlers", "_disposed"],
 "super": "DisposableImpl",
 fireEvent$1: function(args){var t1=this._handlers;if(!(t1==null))$.forEach(t1,new $.EventHandle_fireEvent_anon(args));},
 add$1: function(handler){var id=$.GlobalId_GlobalId();if(this._handlers==null)this._handlers=$.HashMapImplementation$('GlobalId','Action1<T>');$.indexSet(this._handlers,id,handler);return id;},
 remove$1: function(id){var t1=this._handlers;if(!(t1==null))return !(t1.remove$1(id)==null);else return false;}
};

$$.EventArgs = {"":
 [],
 "super": "Object"
};

$$.BungeeNum = {"":
 ["_target", "_current", "_velocity"],
 "super": "Object",
 set$target: function(value){$.requireArgument($.isValidNumber(value),'value',null);this._target=value;},
 get$current: function(){return this._current;},
 set$current: function(value){$.requireArgument($.isValidNumber(value),'value',null);this._current=value;},
 update$0: function(){var t1=this._velocity;if(t1==null)this._velocity=0;else this._velocity=$.mul(t1,0.8);var force=$.sub(this._target,this._current);this._velocity=$.add(this._velocity,$.mul(force,0.05));this._current=$.add(this._current,this._velocity);if($.ltB($.abs($.sub(this._current,this._target)),0.01)&&$.ltB($.abs(this._velocity),0.01)){this._current=this._target;this._velocity=null;return false;}else return true;},
 BungeeNum$2: function(target,current){this.set$target(target);this.set$current(current==null?target:current);}
};

$$.QrBitBuffer = {"":
 ["_lib2_buffer", "_lib2_length"],
 "super": "ListBase",
 operator$index$1: function(index){if(typeof index!=='number')return this.operator$index$1$bailout(1,index,0);var bufIndex=$.tdiv(index,8);var t1=this._lib2_buffer;if(bufIndex!==(bufIndex|0))throw $.iae(bufIndex);if(bufIndex<0||bufIndex>=t1.length)throw $.ioore(bufIndex);t1=t1[bufIndex];if(t1!==(t1|0))return this.operator$index$1$bailout(2,t1,index);var t3=$.mod(index,8);if(t3!==(t3|0))return this.operator$index$1$bailout(3,t1,t3);return ($.shr(t1,7-t3)&1)===1;},
 operator$index$1$bailout: function(state,env0,env1){switch(state){case 1:var index=env0;break;case 2:t1=env0;index=env1;break;case 3:t1=env0;t3=env1;break;}switch(state){case 0:case 1:state=0;var bufIndex=$.tdiv(index,8);var t1=this._lib2_buffer;if(bufIndex!==(bufIndex|0))throw $.iae(bufIndex);if(bufIndex<0||bufIndex>=t1.length)throw $.ioore(bufIndex);t1=t1[bufIndex];case 2:state=0;var t3=$.mod(index,8);if(typeof t3!=='number')throw $.iae(t3);case 3:state=0;return $.eq($.and($.shr(t1,7-t3),1),1);}},
 get$length: function(){return this._lib2_length;},
 getByte$1: function(index){var t1=this._lib2_buffer;if(index!==(index|0))throw $.iae(index);if(index<0||index>=t1.length)throw $.ioore(index);return t1[index];},
 put$2: function(number,length$){if(number!==(number|0))return this.put$2$bailout(1,number,length$);if(length$!==(length$|0))return this.put$2$bailout(1,number,length$);for(var i=0;i<length$;++i)this.putBit$1(($.shr(number,length$-i-1)&1)===1);},
 put$2$bailout: function(state,number,length$){for(var i=0;$.ltB(i,length$);++i)this.putBit$1($.eq($.and($.shr(number,$.sub($.sub(length$,i),1)),1),1));},
 putBit$1: function(bit){var t1=this._lib2_length;if(typeof t1!=='number')return this.putBit$1$bailout(1,bit,t1,0,0);var bufIndex=$.tdiv(t1,8);t1=this._lib2_buffer;if(t1.length<=bufIndex)t1.push(0);if(bit===true){var t2=this._lib2_length;if(typeof t2!=='number')return this.putBit$1$bailout(2,t2,bufIndex,t1,0);t2=$.mod(t2,8);if(t2!==(t2|0))return this.putBit$1$bailout(3,t2,bufIndex,t1,0);t2=$.shr(128,t2);if(bufIndex!==(bufIndex|0))throw $.iae(bufIndex);if(bufIndex<0||bufIndex>=t1.length)throw $.ioore(bufIndex);var t5=t1[bufIndex];if(t5!==(t5|0))return this.putBit$1$bailout(4,t1,t5,bufIndex,t2);t1[bufIndex]=(t5|t2)>>>0;}t1=this._lib2_length;if(typeof t1!=='number')return this.putBit$1$bailout(5,t1,0,0,0);this._lib2_length=t1+1;},
 putBit$1$bailout: function(state,env0,env1,env2,env3){switch(state){case 1:var bit=env0;t1=env1;break;case 2:t2=env0;bufIndex=env1;t1=env2;break;case 3:t2=env0;bufIndex=env1;t1=env2;break;case 4:t1=env0;t5=env1;bufIndex=env2;t2=env3;break;case 5:t1=env0;break;}switch(state){case 0:var t1=this._lib2_length;case 1:state=0;var bufIndex=$.tdiv(t1,8);t1=this._lib2_buffer;if($.leB(t1.length,bufIndex))t1.push(0);default:if(state===4||state===3||state===2||state===0&&bit===true)switch(state){case 0:var t2=this._lib2_length;case 2:state=0;t2=$.mod(t2,8);if(typeof t2!=='number')throw $.iae(t2);case 3:state=0;t2=$.shr(128,t2);if(bufIndex!==(bufIndex|0))throw $.iae(bufIndex);if(bufIndex<0||bufIndex>=t1.length)throw $.ioore(bufIndex);var t5=t1[bufIndex];case 4:state=0;t2=$.or(t5,t2);if(bufIndex<0||bufIndex>=t1.length)throw $.ioore(bufIndex);t1[bufIndex]=t2;}t1=this._lib2_length;case 5:state=0;this._lib2_length=$.add(t1,1);}}
};

$$.QrByte = {"":
 ["mode?", "_data"],
 "super": "Object",
 get$length: function(){return $.get$length(this._data);},
 write$1: function(buffer){for(var t1=$.iterator(this._data);t1.hasNext$0()===true;)buffer.put$2(t1.next$0(),8);}
};

$$.QrPolynomial = {"":
 ["_myThings"],
 "super": "Object",
 operator$index$1: function(index){return $.index(this._myThings,index);},
 get$length: function(){return $.get$length(this._myThings);},
 multiply$1: function(e){if(typeof e!=='string'&&(typeof e!=='object'||e===null||e.constructor!==Array&&!e.is$JavaScriptIndexingBehavior()))return this.multiply$1$bailout(1,e,0,0,0,0,0,0);var t1=$.get$length(this);if(typeof t1!=='number')return this.multiply$1$bailout(2,e,t1,0,0,0,0,0);var foo=$.QrMath_getZeroedList(t1+e.length-1);var i=0;while(true){t1=$.get$length(this);if(typeof t1!=='number')return this.multiply$1$bailout(3,e,i,foo,t1,0,0,0);if(!(i<t1))break;for(var j=0;j<e.length;++j){t1=i+j;var t2=$.QrMath_glog(this.operator$index$1(i));if(typeof t2!=='number')return this.multiply$1$bailout(4,e,j,t2,i,foo,t1,0);if(j<0||j>=e.length)throw $.ioore(j);var t4=$.QrMath_glog(e[j]);if(typeof t4!=='number')return this.multiply$1$bailout(5,e,j,t2,i,t4,foo,t1);var t6=$.QrMath_gexp(t2+t4);if(t6!==(t6|0))return this.multiply$1$bailout(6,e,j,i,t6,foo,t1,0);if(t1<0||t1>=foo.length)throw $.ioore(t1);var t8=foo[t1];if(t8!==(t8|0))return this.multiply$1$bailout(7,e,j,i,t6,foo,t8,t1);foo[t1]=(t8^t6)>>>0;}++i;}return $.QrPolynomial_QrPolynomial(foo,0);},
 multiply$1$bailout: function(state,env0,env1,env2,env3,env4,env5,env6){switch(state){case 1:var e=env0;break;case 2:e=env0;t1=env1;break;case 3:e=env0;i=env1;foo=env2;t1=env3;break;case 4:e=env0;j=env1;t2=env2;i=env3;foo=env4;t1=env5;break;case 5:e=env0;j=env1;t2=env2;i=env3;t4=env4;foo=env5;t1=env6;break;case 6:e=env0;j=env1;i=env2;t6=env3;foo=env4;t1=env5;break;case 7:e=env0;j=env1;i=env2;t6=env3;foo=env4;t8=env5;t1=env6;break;}switch(state){case 0:case 1:state=0;var t1=$.get$length(this);case 2:state=0;var foo=$.QrMath_getZeroedList($.sub($.add(t1,$.get$length(e)),1));var i=0;default:L0:while(true)switch(state){case 0:t1=$.get$length(this);case 3:state=0;if(!$.ltB(i,t1))break L0;var j=0;default:L1:while(true)switch(state){case 0:if(!$.ltB(j,$.get$length(e)))break L1;t1=i+j;var t2=$.QrMath_glog(this.operator$index$1(i));case 4:state=0;var t4=$.QrMath_glog($.index(e,j));case 5:state=0;var t6=$.QrMath_gexp($.add(t2,t4));case 6:state=0;if(t1<0||t1>=foo.length)throw $.ioore(t1);var t8=foo[t1];case 7:state=0;t6=$.xor(t8,t6);if(t1<0||t1>=foo.length)throw $.ioore(t1);foo[t1]=t6;++j;}++i;}return $.QrPolynomial_QrPolynomial(foo,0);}},
 mod$1: function(e){if(typeof e!=='string'&&(typeof e!=='object'||e===null||e.constructor!==Array&&!e.is$JavaScriptIndexingBehavior()))return this.mod$1$bailout(1,e,0,0,0,0,0);var t1=$.get$length(this);if(typeof t1!=='number')return this.mod$1$bailout(2,e,t1,0,0,0,0);if(t1-e.length<0)return this;t1=$.QrMath_glog(this.operator$index$1(0));if(typeof t1!=='number')return this.mod$1$bailout(3,e,t1,0,0,0,0);if(0>=e.length)throw $.ioore(0);var t3=$.QrMath_glog(e[0]);if(typeof t3!=='number')return this.mod$1$bailout(4,e,t3,t1,0,0,0);var ratio=t1-t3;var thing=$.QrMath_getZeroedList($.get$length(this));var i=0;while(true){t1=$.get$length(this);if(typeof t1!=='number')return this.mod$1$bailout(5,e,i,t1,ratio,thing,0);if(!(i<t1))break;t1=this.operator$index$1(i);if(i<0||i>=thing.length)throw $.ioore(i);thing[i]=t1;++i;}for(i=0;t1=e.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);var t2=$.QrMath_glog(e[i]);if(typeof t2!=='number')return this.mod$1$bailout(6,i,e,ratio,thing,t2,0);var t4=$.QrMath_gexp(t2+ratio);if(t4!==(t4|0))return this.mod$1$bailout(7,i,e,t4,ratio,thing,0);if(i<0||i>=thing.length)throw $.ioore(i);var t6=thing[i];if(t6!==(t6|0))return this.mod$1$bailout(8,i,e,t4,t6,ratio,thing);thing[i]=(t6^t4)>>>0;}return $.QrPolynomial_QrPolynomial(thing,0).mod$1(e);},
 mod$1$bailout: function(state,env0,env1,env2,env3,env4,env5){switch(state){case 1:var e=env0;break;case 2:e=env0;t1=env1;break;case 3:e=env0;t1=env1;break;case 4:e=env0;t3=env1;t1=env2;break;case 5:e=env0;i=env1;t1=env2;ratio=env3;thing=env4;break;case 6:i=env0;e=env1;ratio=env2;thing=env3;t1=env4;break;case 7:i=env0;e=env1;t3=env2;ratio=env3;thing=env4;break;case 8:i=env0;e=env1;t3=env2;t5=env3;ratio=env4;thing=env5;break;}switch(state){case 0:case 1:state=0;var t1=$.get$length(this);case 2:state=0;if($.ltB($.sub(t1,$.get$length(e)),0))return this;t1=$.QrMath_glog(this.operator$index$1(0));case 3:state=0;var t3=$.QrMath_glog($.index(e,0));case 4:state=0;var ratio=$.sub(t1,t3);var thing=$.QrMath_getZeroedList($.get$length(this));var i=0;case 5:L0:while(true)switch(state){case 0:t1=$.get$length(this);case 5:state=0;if(!$.ltB(i,t1))break L0;t1=this.operator$index$1(i);if(i<0||i>=thing.length)throw $.ioore(i);thing[i]=t1;++i;}i=0;default:L1:while(true)switch(state){case 0:if(!$.ltB(i,$.get$length(e)))break L1;t1=$.QrMath_glog($.index(e,i));case 6:state=0;t3=$.QrMath_gexp($.add(t1,ratio));case 7:state=0;if(i<0||i>=thing.length)throw $.ioore(i);var t5=thing[i];case 8:state=0;t3=$.xor(t5,t3);if(i<0||i>=thing.length)throw $.ioore(i);thing[i]=t3;++i;}return $.QrPolynomial_QrPolynomial(thing,0).mod$1(e);}}
};

$$.QrRsBlock = {"":
 ["totalCount?", "dataCount?"],
 "super": "Object"
};

$$.QrCode = {"":
 ["typeNumber", "errorCorrectLevel", "moduleCount", "_modules", "_dataCache", "_dataList"],
 "super": "Object",
 isDark$2: function(row,col){if(!(row<0)){var t1=this.moduleCount;if(typeof t1!=='number')return this.isDark$2$bailout(1,row,col,t1);t1=t1<=row||col<0||t1<=col;}else t1=true;if(t1)throw $.$$throw($.S(row)+' , '+$.S(col));t1=this._modules;if(row<0||row>=t1.length)throw $.ioore(row);t1=t1[row];if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.isDark$2$bailout(2,t1,col,0);if(col<0||col>=t1.length)throw $.ioore(col);return t1[col];},
 isDark$2$bailout: function(state,env0,env1,env2){switch(state){case 1:var row=env0;var col=env1;t1=env2;break;case 2:t1=env0;col=env1;break;}switch(state){case 0:case 1:if(state===1||state===0&&!(row<0))switch(state){case 0:var t1=this.moduleCount;case 1:state=0;t1=$.leB(t1,row)||col<0||$.leB(t1,col);}else t1=true;if(t1)throw $.$$throw($.S(row)+' , '+$.S(col));t1=this._modules;if(row<0||row>=t1.length)throw $.ioore(row);t1=t1[row];case 2:state=0;return $.index(t1,col);}},
 addData$1: function(data){var newData=$.QrByte_QrByte(data);this._dataList.push(newData);this._dataCache=null;},
 make$0: function(){this._makeImpl$2(false,this._getBestMaskPattern$0());},
 _setupPositionProbePattern$2: function(row,col){if(typeof row!=='number')return this._setupPositionProbePattern$2$bailout(1,row,col,0);if(typeof col!=='number')return this._setupPositionProbePattern$2$bailout(1,row,col,0);var t1=this.moduleCount;if(typeof t1!=='number')return this._setupPositionProbePattern$2$bailout(2,row,col,t1);var t3=this._modules;var r=-1;for(;r<=7;++r){var t2=row+r;if(t2<=-1||t1<=t2)continue;for(var t4=0<=r,t5=r<=6,t6=!(r===0),t7=r===6,t8=2<=r,t9=r<=4,c=-1;c<=7;++c){var t10=col+c;if(t10<=-1||t1<=t10)continue;if(t4)if(t5)var t11=c===0||c===6;else t11=false;else t11=false;if(!t11){if(0<=c)if(c<=6)t11=r===0||t7;else t11=false;else t11=false;if(!t11)t11=t8&&t9&&2<=c&&c<=4;else t11=true;}else t11=true;var t12=t3.length;if(t11){if(t2!==(t2|0))throw $.iae(t2);if(t2<0||t2>=t12)throw $.ioore(t2);$.indexSet(t3[t2],t10,true);}else{if(t2!==(t2|0))throw $.iae(t2);if(t2<0||t2>=t12)throw $.ioore(t2);$.indexSet(t3[t2],t10,false);}}}},
 _setupPositionProbePattern$2$bailout: function(state,env0,env1,env2){switch(state){case 1:var row=env0;var col=env1;break;case 2:row=env0;col=env1;t1=env2;break;}switch(state){case 0:case 1:state=0;var t1=this.moduleCount;case 2:state=0;var t3=this._modules;var r=-1;for(;r<=7;++r){if($.leB($.add(row,r),-1)||$.leB(t1,$.add(row,r)))continue;for(var t2=0<=r,t4=r<=6,t5=!(r===0),t6=r===6,t7=2<=r,t8=r<=4,c=-1;c<=7;++c){if($.leB($.add(col,c),-1)||$.leB(t1,$.add(col,c)))continue;if(t2)if(t4)var t9=c===0||c===6;else t9=false;else t9=false;if(!t9){if(0<=c)if(c<=6)t9=r===0||t6;else t9=false;else t9=false;if(!t9)t9=t7&&t8&&2<=c&&c<=4;else t9=true;}else t9=true;if(t9){t9=$.add(row,r);if(t9!==(t9|0))throw $.iae(t9);if(t9<0||t9>=t3.length)throw $.ioore(t9);$.indexSet(t3[t9],$.add(col,c),true);}else{t9=$.add(row,r);if(t9!==(t9|0))throw $.iae(t9);if(t9<0||t9>=t3.length)throw $.ioore(t9);$.indexSet(t3[t9],$.add(col,c),false);}}}}},
 _getBestMaskPattern$0: function(){for(var minLostPoint=0,pattern=0,i=0;i<8;++i){this._makeImpl$2(true,i);var lostPoint=$.QrUtil_getLostPoint(this);if(i===0||minLostPoint>lostPoint){pattern=i;minLostPoint=lostPoint;}}return pattern;},
 _setupTimingPattern$0: function(){var t1=this.moduleCount;if(typeof t1!=='number')return this._setupTimingPattern$0$bailout(1,t1);var t3=this._modules;t1-=8;var r=8;for(;r<t1;++r){if(r<0||r>=t3.length)throw $.ioore(r);if(!($.index(t3[r],6)==null))continue;if(r<0||r>=t3.length)throw $.ioore(r);$.indexSet(t3[r],6,$.mod(r,2)===0);}for(var c=8;c<t1;++c){if(6>=t3.length)throw $.ioore(6);if(!($.index(t3[6],c)==null))continue;if(6>=t3.length)throw $.ioore(6);$.indexSet(t3[6],c,$.mod(c,2)===0);}},
 _setupTimingPattern$0$bailout: function(state,t1){var t3=this._modules;var r=8;for(;$.ltB(r,$.sub(t1,8));++r){if(r<0||r>=t3.length)throw $.ioore(r);if(!($.index(t3[r],6)==null))continue;if(r<0||r>=t3.length)throw $.ioore(r);$.indexSet(t3[r],6,$.mod(r,2)===0);}for(var c=8;$.ltB(c,$.sub(t1,8));++c){if(6<0||6>=t3.length)throw $.ioore(6);if(!($.index(t3[6],c)==null))continue;if(6<0||6>=t3.length)throw $.ioore(6);$.indexSet(t3[6],c,$.mod(c,2)===0);}},
 _setupPositionAdjustPattern$0: function(){var pos=$.QrUtil_getPatternPosition(this.typeNumber);if(typeof pos!=='string'&&(typeof pos!=='object'||pos===null||pos.constructor!==Array&&!pos.is$JavaScriptIndexingBehavior()))return this._setupPositionAdjustPattern$0$bailout(1,pos,0,0,0,0,0);for(var t1=this._modules,i=0;i<pos.length;++i)for(var j=0;t2=pos.length,j<t2;++j){if(i<0||i>=t2)throw $.ioore(i);var row=pos[i];if(typeof row!=='number')return this._setupPositionAdjustPattern$0$bailout(2,row,pos,j,i,t1,0);if(j<0||j>=t2)throw $.ioore(j);var col=pos[j];if(typeof col!=='number')return this._setupPositionAdjustPattern$0$bailout(3,row,pos,col,j,i,t1);if(row!==(row|0))throw $.iae(row);if(row<0||row>=t1.length)throw $.ioore(row);if(!($.index(t1[row],col)==null))continue;for(var r=-2;r<=2;++r)for(var t2=!(r===-2),t3=!(r===2),t4=r===0,t5=row+r,c=-2;c<=2;++c){if(t2)if(t3)if(!(c===-2))if(!(c===2))var t6=t4&&c===0;else t6=true;else t6=true;else t6=true;else t6=true;var t7=t1.length;var t8=col+c;if(t6){if(t5<0||t5>=t7)throw $.ioore(t5);$.indexSet(t1[t5],t8,true);}else{if(t5<0||t5>=t7)throw $.ioore(t5);$.indexSet(t1[t5],t8,false);}}}},
 _setupPositionAdjustPattern$0$bailout: function(state,env0,env1,env2,env3,env4,env5){switch(state){case 1:pos=env0;break;case 2:row=env0;pos=env1;j=env2;i=env3;t1=env4;break;case 3:row=env0;pos=env1;col=env2;j=env3;i=env4;t1=env5;break;}switch(state){case 0:var pos=$.QrUtil_getPatternPosition(this.typeNumber);case 1:state=0;var t1=this._modules;var i=0;default:L0:while(true)switch(state){case 0:if(!$.ltB(i,$.get$length(pos)))break L0;var j=0;default:L1:while(true)switch(state){case 0:if(!$.ltB(j,$.get$length(pos)))break L1;default:c$1:{switch(state){case 0:var row=$.index(pos,i);case 2:state=0;var col=$.index(pos,j);case 3:state=0;if(row!==(row|0))throw $.iae(row);if(row<0||row>=t1.length)throw $.ioore(row);if(!($.index(t1[row],col)==null))break c$1;for(var r=-2;r<=2;++r)for(var t2=!(r===-2),t3=!(r===2),t4=r===0,c=-2;c<=2;++c){if(t2)if(t3)if(!(c===-2))if(!(c===2))var t5=t4&&c===0;else t5=true;else t5=true;else t5=true;else t5=true;if(t5){t5=row+r;if(t5!==(t5|0))throw $.iae(t5);if(t5<0||t5>=t1.length)throw $.ioore(t5);$.indexSet(t1[t5],$.add(col,c),true);}else{t5=row+r;if(t5!==(t5|0))throw $.iae(t5);if(t5<0||t5>=t1.length)throw $.ioore(t5);$.indexSet(t1[t5],$.add(col,c),false);}}}}++j;}++i;}}},
 _setupTypeNumber$1: function(test){var bits=$.QrUtil_getBCHTypeNumber(this.typeNumber);if(bits!==(bits|0))return this._setupTypeNumber$1$bailout(1,test,bits);for(var t1=!test,t2=this._modules,t3=this.moduleCount,i=0;i<18;++i){var mod=t1&&($.shr(bits,i)&1)===1;var t4=$.tdiv(i,3);if(t4<0||t4>=t2.length)throw $.ioore(t4);t4=t2[t4];var t5=$.mod(i,3);if(typeof t3!=='number')throw $.iae(t3);$.indexSet(t4,t5+t3-8-3,mod);}for(i=0;i<18;++i){mod=t1&&($.shr(bits,i)&1)===1;t4=$.mod(i,3);if(typeof t3!=='number')throw $.iae(t3);t5=t4+t3-8-3;if(t5!==(t5|0))throw $.iae(t5);if(t5<0||t5>=t2.length)throw $.ioore(t5);$.indexSet(t2[t5],$.tdiv(i,3),mod);}},
 _setupTypeNumber$1$bailout: function(state,test,bits){for(var t1=!test,t2=this._modules,t3=this.moduleCount,i=0;i<18;++i){var mod=t1&&$.eqB($.and($.shr(bits,i),1),1);var t4=$.tdiv(i,3);if(t4<0||t4>=t2.length)throw $.ioore(t4);t4=t2[t4];var t5=$.mod(i,3);if(typeof t3!=='number')throw $.iae(t3);$.indexSet(t4,t5+t3-8-3,mod);}for(i=0;i<18;++i){mod=t1&&$.eqB($.and($.shr(bits,i),1),1);t4=$.mod(i,3);if(typeof t3!=='number')throw $.iae(t3);t5=t4+t3-8-3;if(t5!==(t5|0))throw $.iae(t5);if(t5<0||t5>=t2.length)throw $.ioore(t5);$.indexSet(t2[t5],$.tdiv(i,3),mod);}},
 _setupTypeInfo$2: function(test,maskPattern){var bits=$.QrUtil_getBCHTypeInfo($.or($.shl(this.errorCorrectLevel,3),maskPattern));if(bits!==(bits|0))return this._setupTypeInfo$2$bailout(1,test,bits,0,0);var t1=!test;var t2=this._modules;var t3=this.moduleCount;if(typeof t3!=='number')return this._setupTypeInfo$2$bailout(2,t2,t1,bits,t3);var t5=t3-15;var i=0;var mod=null;for(;i<15;++i){mod=t1&&($.shr(bits,i)&1)===1;if(i<6){if(i<0||i>=t2.length)throw $.ioore(i);$.indexSet(t2[i],8,mod);}else{var t4=i<8;var t6=t2.length;if(t4){t4=i+1;if(t4<0||t4>=t6)throw $.ioore(t4);$.indexSet(t2[t4],8,mod);}else{t4=t5+i;if(t4!==(t4|0))throw $.iae(t4);if(t4<0||t4>=t6)throw $.ioore(t4);$.indexSet(t2[t4],8,mod);}}}for(i=0;i<15;++i){mod=t1&&($.shr(bits,i)&1)===1;if(i<8){if(8>=t2.length)throw $.ioore(8);$.indexSet(t2[8],t3-i-1,mod);}else{t4=i<9;t5=15-i-1;t6=t2.length;if(t4){if(8>=t6)throw $.ioore(8);$.indexSet(t2[8],t5+1,mod);}else{if(8>=t6)throw $.ioore(8);$.indexSet(t2[8],t5,mod);}}}t3-=8;if(t3!==(t3|0))throw $.iae(t3);if(t3<0||t3>=t2.length)throw $.ioore(t3);$.indexSet(t2[t3],8,t1);},
 _setupTypeInfo$2$bailout: function(state,env0,env1,env2,env3){switch(state){case 1:var test=env0;bits=env1;break;case 2:t2=env0;t1=env1;bits=env2;t3=env3;break;}switch(state){case 0:var bits=$.QrUtil_getBCHTypeInfo($.or($.shl(this.errorCorrectLevel,3),maskPattern));case 1:state=0;var t1=!test;var t2=this._modules;var t3=this.moduleCount;case 2:state=0;var i=0;var mod=null;for(;i<15;++i){mod=t1&&$.eqB($.and($.shr(bits,i),1),1);if(i<6){if(i<0||i>=t2.length)throw $.ioore(i);$.indexSet(t2[i],8,mod);}else if(i<8){var t4=i+1;if(t4<0||t4>=t2.length)throw $.ioore(t4);$.indexSet(t2[t4],8,mod);}else{t4=$.add($.sub(t3,15),i);if(t4!==(t4|0))throw $.iae(t4);if(t4<0||t4>=t2.length)throw $.ioore(t4);$.indexSet(t2[t4],8,mod);}}for(i=0;i<15;++i){mod=t1&&$.eqB($.and($.shr(bits,i),1),1);if(i<8){if(8<0||8>=t2.length)throw $.ioore(8);$.indexSet(t2[8],$.sub($.sub(t3,i),1),mod);}else{t4=i<9;var t5=15-i;if(t4){if(8<0||8>=t2.length)throw $.ioore(8);$.indexSet(t2[8],t5-1+1,mod);}else{if(8<0||8>=t2.length)throw $.ioore(8);$.indexSet(t2[8],t5-1,mod);}}}t3=$.sub(t3,8);if(t3!==(t3|0))throw $.iae(t3);if(t3<0||t3>=t2.length)throw $.ioore(t3);$.indexSet(t2[t3],8,t1);}},
 _mapData$2: function(data,maskPattern){if(typeof data!=='string'&&(typeof data!=='object'||data===null||data.constructor!==Array&&!data.is$JavaScriptIndexingBehavior()))return this._mapData$2$bailout(1,data,maskPattern,0,0,0,0,0,0,0,0,0,0);var t1=this.moduleCount;if(typeof t1!=='number')return this._mapData$2$bailout(2,data,maskPattern,t1,0,0,0,0,0,0,0,0,0);var row=t1-1;for(var t2=this._modules,col=row,inc=-1,byteIndex=0,bitIndex=7;col>0;col-=2){if(col===6)--col;for(var inc0=-inc;true;){for(var c=0;c<2;++c){if(row!==(row|0))throw $.iae(row);if(row<0||row>=t2.length)throw $.ioore(row);var t3=t2[row];var t4=col-c;if($.index(t3,t4)==null){t3=data.length;if(byteIndex<t3){if(byteIndex<0||byteIndex>=t3)throw $.ioore(byteIndex);var t5=data[byteIndex];if(t5!==(t5|0))return this._mapData$2$bailout(3,c,maskPattern,t5,bitIndex,data,col,inc0,row,inc,t1,t2,byteIndex);var dark=($.shr(t5,bitIndex)&1)===1;}else dark=false;if($.QrUtil_getMask(maskPattern,row,t4)===true)dark=!dark;if(row<0||row>=t2.length)throw $.ioore(row);$.indexSet(t2[row],t4,dark);--bitIndex;if(bitIndex===-1){++byteIndex;bitIndex=7;}}}row+=inc;if(row<0||t1<=row){row-=inc;inc=inc0;break;}}}},
 _mapData$2$bailout: function(state,env0,env1,env2,env3,env4,env5,env6,env7,env8,env9,env10,env11){switch(state){case 1:var data=env0;var maskPattern=env1;break;case 2:data=env0;maskPattern=env1;t1=env2;break;case 3:c=env0;maskPattern=env1;t3=env2;bitIndex=env3;data=env4;col=env5;inc0=env6;row=env7;inc=env8;t1=env9;t2=env10;byteIndex=env11;break;}switch(state){case 0:case 1:state=0;var t1=this.moduleCount;case 2:state=0;var row=$.sub(t1,1);var col=$.sub(t1,1);var t2=this._modules;var inc=-1;var byteIndex=0;var bitIndex=7;case 3:L0:while(true)switch(state){case 0:if(!$.gtB(col,0))break L0;if($.eqB(col,6))col=$.sub(col,1);var inc0=-inc;case 3:L1:while(true)switch(state){case 0:if(!true)break L1;var c=0;case 3:L2:while(true)switch(state){case 0:if(!(c<2))break L2;if(row!==(row|0))throw $.iae(row);if(row<0||row>=t2.length)throw $.ioore(row);case 3:if(state===3||state===0&&$.index(t2[row],$.sub(col,c))==null)switch(state){case 0:case 3:if(state===3||state===0&&$.ltB(byteIndex,$.get$length(data)))switch(state){case 0:var t3=$.index(data,byteIndex);case 3:state=0;var dark=$.eq($.and($.shr(t3,bitIndex),1),1);}else dark=false;if($.QrUtil_getMask(maskPattern,row,$.sub(col,c))===true)dark=dark!==true;if(row<0||row>=t2.length)throw $.ioore(row);$.indexSet(t2[row],$.sub(col,c),dark);--bitIndex;if(bitIndex===-1){++byteIndex;bitIndex=7;}}++c;}row=$.add(row,inc);if($.ltB(row,0)||$.leB(t1,row)){row=$.sub(row,inc);inc=inc0;break L1;}}col=$.sub(col,2);}}},
 _makeImpl$2: function(test,maskPattern){this._setupPositionProbePattern$2(0,0);var t1=this.moduleCount;if(typeof t1!=='number')return this._makeImpl$2$bailout(1,test,maskPattern,t1);t1-=7;this._setupPositionProbePattern$2(t1,0);this._setupPositionProbePattern$2(0,t1);this._setupPositionAdjustPattern$0();this._setupTimingPattern$0();this._setupTypeInfo$2(test,maskPattern);t1=this.typeNumber;if(typeof t1!=='number')return this._makeImpl$2$bailout(2,t1,maskPattern,test);if(t1>=7)this._setupTypeNumber$1(test);if(this._dataCache==null)this._dataCache=$.QrCode__createData(t1,this.errorCorrectLevel,this._dataList);this._mapData$2(this._dataCache,maskPattern);},
 _makeImpl$2$bailout: function(state,env0,env1,env2){switch(state){case 1:var test=env0;var maskPattern=env1;t1=env2;break;case 2:t1=env0;maskPattern=env1;test=env2;break;}switch(state){case 0:this._setupPositionProbePattern$2(0,0);var t1=this.moduleCount;case 1:state=0;this._setupPositionProbePattern$2($.sub(t1,7),0);this._setupPositionProbePattern$2(0,$.sub(t1,7));this._setupPositionAdjustPattern$0();this._setupTimingPattern$0();this._setupTypeInfo$2(test,maskPattern);t1=this.typeNumber;case 2:state=0;if($.geB(t1,7))this._setupTypeNumber$1(test);if(this._dataCache==null)this._dataCache=$.QrCode__createData(t1,this.errorCorrectLevel,this._dataList);this._mapData$2(this._dataCache,maskPattern);}},
 QrCode$2: function(typeNumber,errorCorrectLevel){$.requireArgument($.gtB(typeNumber,0)&&$.ltB(typeNumber,11),'typeNumber',null);$.requireArgument($.ge($.indexOf$1($.CTC102,this.errorCorrectLevel),0),'errorCorrectLevel',null);var t1=this.moduleCount;if(typeof t1!=='number')return this.QrCode$2$bailout(1,t1);var t3=this._modules;var row=0;for(;row<t1;++row)t3.push($.ListImplementation_List(t1,'bool'));this._dataCache=null;this._dataList=[];},
 QrCode$2$bailout: function(state,t1){var t3=this._modules;var row=0;for(;$.ltB(row,t1);++row)t3.push($.ListImplementation_List(t1,'bool'));this._dataCache=null;this._dataList=[];}
};

$$.QrInputTooLongException = {"":
 ["providedInput", "inputLimit", "message"],
 "super": "Object",
 toString$0: function(){return 'QrInputTooLongException: '+$.S(this.message);},
 is$Exception: true
};

$$.FutureValue = {"":
 [],
 "super": "Object",
 set$input: function(value){this._input=value;if(this._future==null)this._startFuture$0();else this._pending=true;this._inputChangedHandle.fireEvent$1($.CTC104);},
 get$output: function(){return this._output;},
 get$outputChanged: function(){return this._outputChangedHandle;},
 get$error: function(){return this._errorHandle;},
 _startFuture$0: function(){this._future=this.getFuture$1(this._input);this._future.handleException$1(this.get$_futureException());this._future.then$1(this.get$_futureCompleted());},
 _futureException$1: function(exception){this._future=null;this._errorHandle.fireEvent$1(exception);this._cleanup$0();return true;},
 get$_futureException: function() { return new $.BoundClosure0(this, '_futureException$1'); },
 _futureCompleted$1: function(value){this._future=null;this._output=value;this._outputChangedHandle.fireEvent$1($.CTC104);this._cleanup$0();},
 get$_futureCompleted: function() { return new $.BoundClosure0(this, '_futureCompleted$1'); },
 _cleanup$0: function(){if(this._pending===true){this._pending=false;this._startFuture$0();}}
};

$$.FutureValueResult = {"":
 ["value?", "exception?"],
 "super": "Object",
 get$isException: function(){return !(this.exception==null);},
 toMap$0: function(){return $.makeLiteralMap(['value',this.value,'exception',this.exception]);},
 operator$eq$1: function(other){return !(other==null)&&$.eqB(other.get$value(),this.value)&&$.eqB(other.get$exception(),this.exception);},
 FutureValueResult$fromException$1: function(exception){$.requireArgumentNotNull(this.exception,'exception');}
};

$$.SendPortValue = {"":
 [],
 "super": "FutureValue",
 getFuture$1: function(value){this._completer=$.CompleterImpl$($.getRuntimeTypeInfo(this).TOutput);this._innerFuture=this._sendPort.call$1(value);this._innerFuture.then$1(this.get$__futureCompleted());return this._completer.get$future();},
 __futureCompleted$1: function(value){this._innerFuture=null;if(typeof value==='object'&&value!==null&&value.is$Map()&&$.FutureValueResult_isMyMap(value))this._sendValueResultCompleted$1($.FutureValueResult_FutureValueResult$fromMap(value));else this._lib4_complete$1(value);},
 get$__futureCompleted: function() { return new $.BoundClosure0(this, '__futureCompleted$1'); },
 _sendValueResultCompleted$1: function(value){if(value.get$isException()===true)this._completeException$1(value.get$exception());else this._lib4_complete$1(value.get$value());},
 _lib4_complete$1: function(value){var c=this._completer;this._completer=null;c.complete$1(value);},
 _completeException$1: function(exception){var c=this._completer;this._completer=null;c.completeException$1(exception);}
};

$$.SendValuePort = {"":
 ["_func"],
 "super": "Object",
 _func$1: function(arg0) { return this._func.call$1(arg0); },
 _func$1: function(arg0) { return this._func.call$1(arg0); },
 SendValuePort$1: function(_func){$.port().receive$1(new $.anon(this));}
};

$$.main_anon = {"":
 ["demo_1", "input_0"],
 "super": "Closure",
 call$1: function(args){var t1=this.input_0.get$value();this.demo_1.set$value(t1);}
};

$$.main_anon0 = {"":
 ["input_2"],
 "super": "Closure",
 call$1: function(args){this.input_2.get$style().set$background('');}
};

$$.main_anon1 = {"":
 ["input_3"],
 "super": "Closure",
 call$1: function(args){this.input_3.get$style().set$background('red');}
};

$$.Maps__emitMap_anon = {"":
 ["result_3", "box_0", "visiting_2"],
 "super": "Closure",
 call$2: function(k,v){var t1=this.box_0;if(t1.first_1!==true)$.add$1(this.result_3,', ');t1.first_1=false;t1=this.result_3;var t2=this.visiting_2;$.Collections__emitObject(k,t1,t2);$.add$1(t1,': ');$.Collections__emitObject(v,t1,t2);}
};

$$._convertDartToNative_PrepareForStructuredClone_findSlot = {"":
 ["copies_3", "values_2"],
 "super": "Closure",
 call$1: function(value){var t1=this.values_2;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.call$1$bailout(1,value,t1);var length$=t1.length;for(var i=0;i<length$;++i){if(i<0||i>=length$)throw $.ioore(i);var t2=t1[i];if(t2==null?value==null:t2===value)return i;}$.add$1(t1,value);$.add$1(this.copies_3,null);return length$;},
 call$1$bailout: function(state,value,t1){var length$=$.get$length(t1);for(var i=0;$.ltB(i,length$);++i){var t2=$.index(t1,i);if(t2==null?value==null:t2===value)return i;}$.add$1(t1,value);$.add$1(this.copies_3,null);return length$;}
};

$$._convertDartToNative_PrepareForStructuredClone_readSlot = {"":
 ["copies_4"],
 "super": "Closure",
 call$1: function(i){return $.index(this.copies_4,i);}
};

$$._convertDartToNative_PrepareForStructuredClone_writeSlot = {"":
 ["copies_5"],
 "super": "Closure",
 call$2: function(i,x){$.indexSet(this.copies_5,i,x);}
};

$$._convertDartToNative_PrepareForStructuredClone_cleanupSlots = {"":
 [],
 "super": "Closure",
 call$0: function(){}
};

$$._convertDartToNative_PrepareForStructuredClone_walk = {"":
 ["writeSlot_8", "findSlot_7", "readSlot_6"],
 "super": "Closure",
 call$1: function(e){var t1={};if(e==null)return e;if(typeof e==='boolean')return e;if(typeof e==='number')return e;if(typeof e==='string')return e;if(typeof e==='object'&&e!==null&&!!e.is$Date)throw $.$$throw($.CTC5);if(typeof e==='object'&&e!==null&&!!e.is$RegExp)throw $.$$throw($.CTC6);if(typeof e==='object'&&e!==null&&e.is$_FileImpl())return e;if(typeof e==='object'&&e!==null&&e.is$File())throw $.$$throw($.CTC7);if(typeof e==='object'&&e!==null&&e.is$_BlobImpl())return e;if(typeof e==='object'&&e!==null&&e.is$Blob())throw $.$$throw($.CTC8);if(typeof e==='object'&&e!==null&&e.is$_FileListImpl())return e;if(typeof e==='object'&&e!==null&&e.is$FileList())throw $.$$throw($.CTC9);if(typeof e==='object'&&e!==null&&e.is$_ImageDataImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ImageData())throw $.$$throw($.CTC9);if(typeof e==='object'&&e!==null&&e.is$_ArrayBufferImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ArrayBuffer())throw $.$$throw($.CTC10);if(typeof e==='object'&&e!==null&&e.is$_ArrayBufferViewImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ArrayBufferView())throw $.$$throw($.CTC11);if(typeof e==='object'&&e!==null&&e.is$Map()){var slot=this.findSlot_7.call$1(e);t1.copy_1=this.readSlot_6.call$1(slot);var t2=t1.copy_1;if(!(t2==null))return t2;t1.copy_1={};this.writeSlot_8.call$2(slot,t1.copy_1);e.forEach$1(new $._convertDartToNative_PrepareForStructuredClone_walk_anon(this,t1));return t1.copy_1;}if(typeof e==='object'&&e!==null&&(e.constructor===Array||e.is$List())){if(typeof e!=='object'||e===null||(e.constructor!==Array||!!e.immutable$list)&&!e.is$JavaScriptIndexingBehavior())return this.call$1$bailout(1,e,0,0,0,0,0,0);var length$=e.length;slot=this.findSlot_7.call$1(e);t2=this.readSlot_6;var copy=t2.call$1(slot);if(!(copy==null)){if(true===copy){copy=new Array(length$);this.writeSlot_8.call$2(slot,copy);}return copy;}t1=e instanceof Array&&!!!(e.immutable$list);var t3=this.writeSlot_8;if(t1){t3.call$2(slot,true);for(var i=0;i<length$;++i){if(i<0||i>=e.length)throw $.ioore(i);var element=e[i];var elementCopy=this.call$1(element);if(!(elementCopy==null?element==null:elementCopy===element)){copy=t2.call$1(slot);if(true===copy){copy=new Array(length$);t3.call$2(slot,copy);}if(typeof copy!=='object'||copy===null||(copy.constructor!==Array||!!copy.immutable$list)&&!copy.is$JavaScriptIndexingBehavior())return this.call$1$bailout(2,copy,i,t3,e,length$,elementCopy,slot);for(var j=0;j<i;++j){if(j<0||j>=e.length)throw $.ioore(j);t1=e[j];if(j<0||j>=copy.length)throw $.ioore(j);copy[j]=t1;}if(i<0||i>=copy.length)throw $.ioore(i);copy[i]=elementCopy;++i;break;}}if(copy==null){t3.call$2(slot,e);copy=e;}}else{copy=new Array(length$);t3.call$2(slot,copy);i=0;}if(typeof copy!=='object'||copy===null||(copy.constructor!==Array||!!copy.immutable$list)&&!copy.is$JavaScriptIndexingBehavior())return this.call$1$bailout(3,e,copy,length$,i,0,0,0);for(;i<length$;++i){if(i<0||i>=e.length)throw $.ioore(i);t1=this.call$1(e[i]);if(i<0||i>=copy.length)throw $.ioore(i);copy[i]=t1;}return copy;}throw $.$$throw($.CTC12);},
 call$1$bailout: function(state,env0,env1,env2,env3,env4,env5,env6){switch(state){case 1:var e=env0;break;case 2:copy=env0;i=env1;t3=env2;e=env3;length$=env4;elementCopy=env5;slot=env6;break;case 3:e=env0;copy=env1;length$=env2;i=env3;break;}switch(state){case 0:var t1={};if(e==null)return e;if(typeof e==='boolean')return e;if(typeof e==='number')return e;if(typeof e==='string')return e;if(typeof e==='object'&&e!==null&&!!e.is$Date)throw $.$$throw($.CTC5);if(typeof e==='object'&&e!==null&&!!e.is$RegExp)throw $.$$throw($.CTC6);if(typeof e==='object'&&e!==null&&e.is$_FileImpl())return e;if(typeof e==='object'&&e!==null&&e.is$File())throw $.$$throw($.CTC7);if(typeof e==='object'&&e!==null&&e.is$_BlobImpl())return e;if(typeof e==='object'&&e!==null&&e.is$Blob())throw $.$$throw($.CTC8);if(typeof e==='object'&&e!==null&&e.is$_FileListImpl())return e;if(typeof e==='object'&&e!==null&&e.is$FileList())throw $.$$throw($.CTC9);if(typeof e==='object'&&e!==null&&e.is$_ImageDataImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ImageData())throw $.$$throw($.CTC9);if(typeof e==='object'&&e!==null&&e.is$_ArrayBufferImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ArrayBuffer())throw $.$$throw($.CTC10);if(typeof e==='object'&&e!==null&&e.is$_ArrayBufferViewImpl())return e;if(typeof e==='object'&&e!==null&&e.is$ArrayBufferView())throw $.$$throw($.CTC11);if(typeof e==='object'&&e!==null&&e.is$Map()){var slot=this.findSlot_7.call$1(e);t1.copy_1=this.readSlot_6.call$1(slot);var t2=t1.copy_1;if(!(t2==null))return t2;t1.copy_1={};this.writeSlot_8.call$2(slot,t1.copy_1);e.forEach$1(new $._convertDartToNative_PrepareForStructuredClone_walk_anon(this,t1));return t1.copy_1;}default:if(state===3||state===2||state===1||state===0&&typeof e==='object'&&e!==null&&(e.constructor===Array||e.is$List()))switch(state){case 0:case 1:state=0;var length$=$.get$length(e);slot=this.findSlot_7.call$1(e);t2=this.readSlot_6;var copy=t2.call$1(slot);if(!(copy==null)){if(true===copy){copy=new Array(length$);this.writeSlot_8.call$2(slot,copy);}return copy;}t1=e instanceof Array&&!!!(e.immutable$list);var t3=this.writeSlot_8;case 2:if(state===2||state===0&&t1)switch(state){case 0:t3.call$2(slot,true);var i=0;case 2:L0:while(true)switch(state){case 0:if(!$.ltB(i,length$))break L0;var element=$.index(e,i);var elementCopy=this.call$1(element);case 2:if(state===2||state===0&&!(elementCopy==null?element==null:elementCopy===element))switch(state){case 0:copy=t2.call$1(slot);if(true===copy){copy=new Array(length$);t3.call$2(slot,copy);}case 2:state=0;for(var j=0;j<i;++j)$.indexSet(copy,j,$.index(e,j));$.indexSet(copy,i,elementCopy);++i;break L0;}++i;}if(copy==null){t3.call$2(slot,e);copy=e;}}else{copy=new Array(length$);t3.call$2(slot,copy);i=0;}case 3:state=0;for(;$.ltB(i,length$);++i)$.indexSet(copy,i,this.call$1($.index(e,i)));return copy;}throw $.$$throw($.CTC12);}}
};

$$._convertDartToNative_PrepareForStructuredClone_walk_anon = {"":
 ["walk_9", "box_0"],
 "super": "Closure",
 call$2: function(key,value){this.box_0.copy_1[key] = this.walk_9.call$1(value);}
};

$$.invokeClosure_anon = {"":
 ["closure_0"],
 "super": "Closure",
 call$0: function(){return this.closure_0.call$0();}
};

$$.invokeClosure_anon0 = {"":
 ["closure_2", "arg1_1"],
 "super": "Closure",
 call$0: function(){return this.closure_2.call$1(this.arg1_1);}
};

$$.invokeClosure_anon1 = {"":
 ["closure_5", "arg1_4", "arg2_3"],
 "super": "Closure",
 call$0: function(){return this.closure_5.call$2(this.arg1_4,this.arg2_3);}
};

$$._convertNativeToDart_AcceptStructuredClone_findSlot = {"":
 ["copies_1", "values_0"],
 "super": "Closure",
 call$1: function(value){var t1=this.values_0;if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return this.call$1$bailout(1,value,t1);var length$=t1.length;for(var i=0;i<length$;++i){if(i<0||i>=length$)throw $.ioore(i);var t2=t1[i];if(t2==null?value==null:t2===value)return i;}$.add$1(t1,value);$.add$1(this.copies_1,null);return length$;},
 call$1$bailout: function(state,value,t1){var length$=$.get$length(t1);for(var i=0;$.ltB(i,length$);++i){var t2=$.index(t1,i);if(t2==null?value==null:t2===value)return i;}$.add$1(t1,value);$.add$1(this.copies_1,null);return length$;}
};

$$._convertNativeToDart_AcceptStructuredClone_readSlot = {"":
 ["copies_2"],
 "super": "Closure",
 call$1: function(i){return $.index(this.copies_2,i);}
};

$$._convertNativeToDart_AcceptStructuredClone_writeSlot = {"":
 ["copies_3"],
 "super": "Closure",
 call$2: function(i,x){$.indexSet(this.copies_3,i,x);}
};

$$._convertNativeToDart_AcceptStructuredClone_walk = {"":
 ["writeSlot_6", "findSlot_5", "readSlot_4"],
 "super": "Closure",
 call$1: function(e){if(typeof e!=='object'||e===null||(e.constructor!==Array||!!e.immutable$list)&&!e.is$JavaScriptIndexingBehavior())return this.call$1$bailout(1,e,0,0);if(e instanceof Date)throw $.$$throw($.CTC5);if(e instanceof RegExp)throw $.$$throw($.CTC6);if($._isJavaScriptSimpleObject(e)){var slot=this.findSlot_5.call$1(e);var copy=this.readSlot_4.call$1(slot);if(!(copy==null))return copy;copy=$.makeLiteralMap([]);if(typeof copy!=='object'||copy===null||(copy.constructor!==Array||!!copy.immutable$list)&&!copy.is$JavaScriptIndexingBehavior())return this.call$1$bailout(2,e,slot,copy);this.writeSlot_6.call$2(slot,copy);for(var t1=$.iterator(Object.keys(e));t1.hasNext$0()===true;){var t2=t1.next$0();var t3=this.call$1(e[t2]);if(t2!==(t2|0))throw $.iae(t2);if(t2<0||t2>=copy.length)throw $.ioore(t2);copy[t2]=t3;}return copy;}if(e instanceof Array){slot=this.findSlot_5.call$1(e);copy=this.readSlot_4.call$1(slot);if(!(copy==null))return copy;this.writeSlot_6.call$2(slot,e);var length$=e.length;for(var i=0;i<length$;++i){if(i<0||i>=e.length)throw $.ioore(i);t1=this.call$1(e[i]);if(i<0||i>=e.length)throw $.ioore(i);e[i]=t1;}return e;}return e;},
 call$1$bailout: function(state,env0,env1,env2){switch(state){case 1:var e=env0;break;case 2:e=env0;slot=env1;copy=env2;break;}switch(state){case 0:case 1:state=0;if(e==null)return e;if(typeof e==='boolean')return e;if(typeof e==='number')return e;if(typeof e==='string')return e;if(e instanceof Date)throw $.$$throw($.CTC5);if(e instanceof RegExp)throw $.$$throw($.CTC6);case 2:if(state===2||state===0&&$._isJavaScriptSimpleObject(e))switch(state){case 0:var slot=this.findSlot_5.call$1(e);var copy=this.readSlot_4.call$1(slot);if(!(copy==null))return copy;copy=$.makeLiteralMap([]);case 2:state=0;this.writeSlot_6.call$2(slot,copy);for(var t1=$.iterator(Object.keys(e));t1.hasNext$0()===true;){var t2=t1.next$0();$.indexSet(copy,t2,this.call$1(e[t2]));}return copy;}if(e instanceof Array){slot=this.findSlot_5.call$1(e);copy=this.readSlot_4.call$1(slot);if(!(copy==null))return copy;this.writeSlot_6.call$2(slot,e);var length$=$.get$length(e);for(var i=0;$.ltB(i,length$);++i)$.indexSet(e,i,this.call$1($.index(e,i)));return e;}return e;}}
};

$$.DoubleLinkedQueue_length__ = {"":
 ["box_0"],
 "super": "Closure",
 call$1: function(element){var t1=this.box_0;t1.counter_1=$.add(t1.counter_1,1);}
};

$$.LinkedHashMapImplementation_forEach__ = {"":
 ["f_0"],
 "super": "Closure",
 call$1: function(entry){this.f_0.call$2(entry.get$key(),entry.get$value());}
};

$$._convertNativeToDart_IDBKey_containsDate = {"":
 [],
 "super": "Closure",
 call$1: function(object){if(object instanceof Date)return true;if(typeof object==='object'&&object!==null&&(object.constructor===Array||object.is$List())){if(typeof object!=='object'||object===null||object.constructor!==Array&&!object.is$JavaScriptIndexingBehavior())return this.call$1$bailout(1,object);for(var i=0;t1=object.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);if(this.call$1(object[i])===true)return true;}}return false;var t1;},
 call$1$bailout: function(state,env0){switch(state){case 1:var object=env0;break;}switch(state){case 0:if(object instanceof Date)return true;case 1:if(state===1||state===0&&typeof object==='object'&&object!==null&&(object.constructor===Array||object.is$List()))switch(state){case 0:case 1:state=0;for(var i=0;$.ltB(i,$.get$length(object));++i)if(this.call$1($.index(object,i))===true)return true;}return false;}}
};

$$.anon1 = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(args){var t1=this.this_0;t1.set$_squares(t1.get$_qrMapper().get$output());t1.requestFrame$0();}
};

$$._qrIsolate_anon = {"":
 [],
 "super": "Closure",
 call$1: function(input){var code=$.QrCode$($.index(input,0),$.index(input,1));code.addData$1($.index(input,2));code.make$0();var squares=$.ListImplementation_List(null,'bool');var t1=code.moduleCount;if(typeof t1!=='number')return this.call$1$bailout(1,code,squares,t1);var x=0;for(;x<t1;++x)for(var y=0;y<t1;++y)squares.push(code.isDark$2(y,x));return squares;},
 call$1$bailout: function(state,code,squares,t1){var x=0;for(;$.ltB(x,t1);++x)for(var y=0;$.ltB(y,t1);++y)squares.push(code.isDark$2(y,x));return squares;}
};

$$.anon = {"":
 ["this_0"],
 "super": "Closure",
 call$2: function(value,reply){var _message=null;try{var t1=this.this_0;var output=t1._func$1(value);_message=$.FutureValueResult$(output,$.getRuntimeTypeInfo(t1).TOutput);}catch(exception){t1=$.unwrapException(exception);var ex=t1;var exString=$.toString(ex);_message=$.FutureValueResult$fromException(exString,$.getRuntimeTypeInfo(this.this_0).TOutput);}reply.send$1(_message.toMap$0());}
};

$$.ListBase_iterator_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(i){return $.index(this.this_0,i);}
};

$$._IsolateNatives__spawn_anon = {"":
 ["port_1", "completer_0"],
 "super": "Closure",
 call$2: function(msg,replyPort){this.port_1.close$0();this.completer_0.complete$1(replyPort);}
};

$$.anon0 = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(p){var t1=this.this_0;t1.set$_port(p);for(var t2=$.iterator(t1.get$pending());t2.hasNext$0()===true;){var t3=t2.next$0();p.send$2($.index(t3,'message'),$.index(t3,'replyTo'));}t1.set$pending(null);}
};

$$._BaseSendPort_call_anon = {"":
 ["port_1", "completer_0"],
 "super": "Closure",
 call$2: function(value,ignoreReplyTo){this.port_1.close$0();var t1=typeof value==='object'&&value!==null&&!!value.is$Exception;var t2=this.completer_0;if(t1)t2.completeException$1(value);else t2.complete$1(value);}
};

$$._NativeJsSendPort_send_anon = {"":
 ["this_5", "message_4", "replyTo_3"],
 "super": "Closure",
 call$0: function(){var t1={};var t2=this.this_5;var t3=this.replyTo_3;t2._checkReplyTo$1(t3);var isolate=$.index($._globalState().get$isolates(),t2.get$_isolateId());if(isolate==null)return;if(t2.get$_receivePort().get$_callback()==null)return;var shouldSerialize=!($._globalState().get$currentContext()==null)&&!$.eqB($._globalState().get$currentContext().get$id(),t2.get$_isolateId());var msg=this.message_4;t1.msg_1=msg;t1.reply_2=t3;if(shouldSerialize){t1.msg_1=$._serializeMessage(t1.msg_1);t1.reply_2=$._serializeMessage(t1.reply_2);}$._globalState().get$topEventLoop().enqueue$3(isolate,new $._NativeJsSendPort_send_anon0(t2,t1,shouldSerialize),'receive '+$.S(msg));}
};

$$._NativeJsSendPort_send_anon0 = {"":
 ["this_7", "box_0", "shouldSerialize_6"],
 "super": "Closure",
 call$0: function(){var t1=this.this_7;if(!(t1.get$_receivePort().get$_callback()==null)){if(this.shouldSerialize_6===true){var t2=this.box_0;t2.msg_1=$._deserializeMessage(t2.msg_1);t2.reply_2=$._deserializeMessage(t2.reply_2);}t1=t1.get$_receivePort();t2=this.box_0;t1._callback$2(t2.msg_1,t2.reply_2);}}
};

$$._waitForPendingPorts_anon = {"":
 ["callback_0"],
 "super": "Closure",
 call$1: function(_){return this.callback_0.call$0();}
};

$$._WorkerSendPort_send_anon = {"":
 ["this_2", "message_1", "replyTo_0"],
 "super": "Closure",
 call$0: function(){var t1=this.this_2;var t2=this.replyTo_0;t1._checkReplyTo$1(t2);var workerMessage=$._serializeMessage($.makeLiteralMap(['command','message','port',t1,'msg',this.message_1,'replyTo',t2]));if($._globalState().get$isWorker()===true)$._globalState().get$mainManager().postMessage$1(workerMessage);else $.index($._globalState().get$managers(),t1.get$_workerId()).postMessage$1(workerMessage);}
};

$$._PendingSendPortFinder_visitMap_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(e){return this.this_0._dispatch$1(e);}
};

$$._StorageImpl_getValues_anon = {"":
 ["values_0"],
 "super": "Closure",
 call$2: function(k,v){return $.add$1(this.values_0,v);}
};

$$.LinkedHashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$1: function(entry){var t1=this.list_2;var t2=this.box_0;var t3=t2.index_1;t2.index_1=$.add(t3,1);$.indexSet(t1,t3,entry.get$value());}
};

$$.HashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$2: function(key,value){var t1=this.list_2;var t2=this.box_0;var t3=t2.i_1;t2.i_1=$.add(t3,1);$.indexSet(t1,t3,value);}
};

$$._StorageImpl_getKeys_anon = {"":
 ["keys_0"],
 "super": "Closure",
 call$2: function(k,v){return $.add$1(this.keys_0,k);}
};

$$.LinkedHashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$1: function(entry){var t1=this.list_2;var t2=this.box_0;var t3=t2.index_10;t2.index_10=$.add(t3,1);$.indexSet(t1,t3,entry.get$key());}
};

$$.HashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$2: function(key,value){var t1=this.list_2;var t2=this.box_0;var t3=t2.i_10;t2.i_10=$.add(t3,1);$.indexSet(t1,t3,key);}
};

$$._Copier_visitMap_anon = {"":
 ["this_2", "box_0"],
 "super": "Closure",
 call$2: function(key,val){var t1=this.box_0.copy_10;var t2=this.this_2;$.indexSet(t1,t2._dispatch$1(key),t2._dispatch$1(val));}
};

$$._PendingSendPortFinder_visitList_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(e){return this.this_0._dispatch$1(e);}
};

$$.Futures_wait_anon = {"":
 ["completer_5", "pos_4", "box_0", "result_3", "values_2"],
 "super": "Closure",
 call$1: function(value){var t1=this.values_2;$.indexSet(t1,this.pos_4,value);var t2=this.box_0;var remaining=$.sub(t2.remaining_1,1);t2.remaining_1=remaining;if($.eqB(remaining,0)&&this.result_3.get$isComplete()!==true)this.completer_5.complete$1(t1);}
};

$$.Futures_wait_anon0 = {"":
 ["future_8", "completer_7", "result_6"],
 "super": "Closure",
 call$1: function(exception){if(this.result_6.get$isComplete()!==true)this.completer_7.completeException$2(exception,this.future_8.get$stackTrace());return true;}
};

$$._IsolateNatives__startNonWorker_function = {"":
 ["functionName_1", "replyPort_0"],
 "super": "Closure",
 call$0: function(){$._IsolateNatives__startIsolate($._IsolateNatives__getJSFunctionFromName(this.functionName_1),this.replyPort_0);}
};

$$._IsolateNatives__spawnWorker_anon = {"":
 ["worker_0"],
 "super": "Closure",
 call$1: function(e){$._IsolateNatives__processWorkerMessage(this.worker_0,e);}
};

$$._IsolateNatives__processWorkerMessage_function = {"":
 ["entryPoint_1", "replyTo_0"],
 "super": "Closure",
 call$0: function(){$._IsolateNatives__startIsolate(this.entryPoint_1,this.replyTo_0);}
};

$$.EventHandle_fireEvent_anon = {"":
 ["args_0"],
 "super": "Closure",
 call$2: function(id,handler){handler.call$1(this.args_0);}
};

$$.Enumerable_first_anon = {"":
 [],
 "super": "Closure",
 call$1: function(e){return true;}
};

$$.FilteredElementList__filtered_anon = {"":
 [],
 "super": "Closure",
 call$1: function(n){return typeof n==='object'&&n!==null&&n.is$Element();}
};

$$._ChildrenElementList_filter_anon = {"":
 ["f_1", "output_0"],
 "super": "Closure",
 call$1: function(element){if(this.f_1.call$1(element)===true)$.add$1(this.output_0,element);}
};

$$.FilteredElementList_removeRange_anon = {"":
 [],
 "super": "Closure",
 call$1: function(el){return el.remove$0();}
};

$$.ConstantMap_forEach_anon = {"":
 ["this_1", "f_0"],
 "super": "Closure",
 call$1: function(key){return this.f_0.call$2(key,$.index(this.this_1,key));}
};

$$.ConstantMap_getValues_anon = {"":
 ["this_1", "result_0"],
 "super": "Closure",
 call$1: function(key){return $.add$1(this.result_0,$.index(this.this_1,key));}
};

$$._DataAttributeMap_getKeys_anon = {"":
 ["this_1", "keys_0"],
 "super": "Closure",
 call$2: function(key,value){var t1=this.this_1;if(t1._matches$1(key)===true)$.add$1(this.keys_0,t1._strip$1(key));}
};

$$._DataAttributeMap_forEach_anon = {"":
 ["this_1", "f_0"],
 "super": "Closure",
 call$2: function(key,value){var t1=this.this_1;if(t1._matches$1(key)===true)this.f_0.call$2(t1._strip$1(key),value);}
};

$$._DataAttributeMap_getValues_anon = {"":
 ["this_1", "values_0"],
 "super": "Closure",
 call$2: function(key,value){if(this.this_1._matches$1(key)===true)$.add$1(this.values_0,value);}
};

$$.startRootIsolate_anon = {"":
 [],
 "super": "Closure",
 call$0: function(){$._TimerFactory__factory=$._timerFactory;return;}
};

$$._EventLoop__runHelper_next = {"":
 ["this_0"],
 "super": "Closure",
 call$0: function(){if(this.this_0.runIteration$0()!==true)return;$._window().setTimeout$2(this,0);}
};

$$.anon2 = {"":
 ["this_1", "callback_0"],
 "super": "Closure",
 call$0: function(){return this.callback_0.call$1(this.this_1);}
};

$$.anon3 = {"":
 ["this_1", "callback_0"],
 "super": "Closure",
 call$0: function(){return this.callback_0.call$1(this.this_1);}
};

$$.Closure = {"":
 [],
 "super": "Object",
 toString$0: function(){return 'Closure';}
};

$$.BoundClosure = {'':
 ['self', 'target'],
 'super': 'Closure',
call$0: function() { return this.self[this.target](); }
};
$$.BoundClosure0 = {'':
 ['self', 'target'],
 'super': 'Closure',
call$1: function(p0) { return this.self[this.target](p0); }
};
$$.BoundClosure1 = {'':
 ['self', 'target'],
 'super': 'Closure',
call$1: function(p0) { return this.self[this.target](p0); },
 call$0: function() {
  return this.call$1(null)
}
};
$.div$slow = function(a,b){if($.checkNumbers(a,b))return a / b;return a.operator$div$1(b);};

$._InputElementEventsImpl$ = function(_ptr){return new $._InputElementEventsImpl(_ptr);};

$.startsWith = function(receiver,other){if(!(typeof receiver==='string'))return receiver.startsWith$1(other);$.checkString(other);var length$=other.length;if(length$>receiver.length)return false;return other == receiver.substring(0, length$);};

$._NativeJsSendPort$ = function(_receivePort,isolateId){return new $._NativeJsSendPort(_receivePort,isolateId);};

$.eqB = function(a,b){if(a == null)return b == null;if(b == null)return false;if(typeof a === "object")if(!!a.operator$eq$1)return a.operator$eq$1(b)===true;return a === b;};

$.FutureAlreadyCompleteException$ = function(){return new $.FutureAlreadyCompleteException();};

$.getRange = function(receiver,start,length$){if(!$.isJsArray(receiver))return receiver.getRange$2(start,length$);if(0===length$)return [];$.checkNull(start);$.checkNull(length$);if(!(typeof start==='number'&&start===(start|0)))throw $.$$throw($.IllegalArgumentException$(start));if(!(typeof length$==='number'&&length$===(length$|0)))throw $.$$throw($.IllegalArgumentException$(length$));var t1=length$<0;if(t1)throw $.$$throw($.IllegalArgumentException$(length$));if(start<0)throw $.$$throw($.IndexOutOfRangeException$(start));var end=start+length$;if($.gtB(end,$.get$length(receiver)))throw $.$$throw($.IndexOutOfRangeException$(length$));if(t1)throw $.$$throw($.IllegalArgumentException$(length$));return receiver.slice(start, end);};

$.set$length = function(receiver,newLength){if($.isJsArray(receiver)){$.checkNull(newLength);if(!(typeof newLength==='number'&&newLength===(newLength|0)))throw $.$$throw($.IllegalArgumentException$(newLength));if(newLength<0)throw $.$$throw($.IndexOutOfRangeException$(newLength));$.checkGrowable(receiver,'set length');receiver.length = newLength;}else receiver.set$length(newLength);return newLength;};

$._Device_userAgent = function(){return $.window().get$navigator().get$userAgent();};

$.checkNum = function(value){if(!(typeof value==='number')){$.checkNull(value);throw $.$$throw($.IllegalArgumentException$(value));}return value;};

$.convertDartClosureToJS = function(closure,arity){if(closure==null)return;var function$=closure.$identity;if(!!function$)return function$;function$=function() {
    return $.invokeClosure.call$5(closure, $._currentIsolate(), arity, arguments[0], arguments[1]);
  };closure.$identity = function$;return function$;};

$._Lists_getRange = function(a,start,length$,accumulator){if(typeof a!=='string'&&(typeof a!=='object'||a===null||a.constructor!==Array&&!a.is$JavaScriptIndexingBehavior()))return $._Lists_getRange$bailout(1,a,start,length$,accumulator);if(typeof start!=='number')return $._Lists_getRange$bailout(1,a,start,length$,accumulator);if($.ltB(length$,0))throw $.$$throw($.IllegalArgumentException$('length'));if(start<0)throw $.$$throw($.IndexOutOfRangeException$(start));if(typeof length$!=='number')throw $.iae(length$);var end=start+length$;if(end>a.length)throw $.$$throw($.IndexOutOfRangeException$(end));for(var i=start;i<end;++i){if(i!==(i|0))throw $.iae(i);if(i<0||i>=a.length)throw $.ioore(i);accumulator.push(a[i]);}return accumulator;};

$._TextTrackListEventsImpl$ = function(_ptr){return new $._TextTrackListEventsImpl(_ptr);};

$.StackTrace$ = function(stack){return new $.StackTrace(stack);};

$._MediaStreamTrackEventsImpl$ = function(_ptr){return new $._MediaStreamTrackEventsImpl(_ptr);};

$.ObjectNotClosureException$ = function(){return new $.ObjectNotClosureException();};

$._JsVisitedMap$ = function(){return new $._JsVisitedMap(null);};

$.isJsArray = function(value){return !(value==null)&&value.constructor === Array;};

$.QrMath_glog = function(n){if($.ltB(n,1))throw $.$$throw('glog('+$.S(n)+')');return $.index($.QrMath_LOG_TABLE(),n);};

$._Elements_InputElement = function(type){var _e=$._document().$dom_createElement$1('input');_e.set$type(type);return _e;};

$.Primitives_objectTypeName = function(object){var name$=$.constructorNameFallback(object);if($.eqB(name$,'Object')){var decompiled=String(object.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1];if(typeof decompiled==='string')name$=decompiled;}return $.charCodeAt(name$,0)===36?$.substring$1(name$,1):name$;};

$.clear = function(receiver){if(!$.isJsArray(receiver))return receiver.clear$0();$.set$length(receiver,0);};

$.IndexIterator$ = function(length$,indexer,T){var t1=new $.IndexIterator(indexer,length$,0);$.setRuntimeTypeInfo(t1,{ 'T': T });t1.IndexIterator$2(length$,indexer);return t1;};

$._fillStatics = function(context){  $globals = context.isolateStatics;
  $static_init();
};

$.QrUtil_getLostPoint = function(qrCode){var moduleCount=qrCode.moduleCount;if(typeof moduleCount!=='number')return $.QrUtil_getLostPoint$bailout(1,qrCode,moduleCount);for(var lostPoint=0,col=null,row=0;row<moduleCount;++row)for(col=0;col<moduleCount;++col){var dark=qrCode.isDark$2(row,col);for(var r=-1,sameCount=0;r<=1;++r){var t1=row+r;if(t1<0||moduleCount<=t1)continue;for(var t2=r===0,c=-1;c<=1;++c){var t3=col+c;if(t3<0||moduleCount<=t3)continue;if(t2&&c===0)continue;if($.eqB(dark,qrCode.isDark$2(t1,t3)))++sameCount;}}if(sameCount>5)lostPoint+=3+sameCount-5;}for(t1=moduleCount-1,row=0;row<t1;++row)for(t2=row+1,col=0;col<t1;++col){var count=qrCode.isDark$2(row,col)===true?1:0;if(qrCode.isDark$2(t2,col)===true)++count;t3=col+1;if(qrCode.isDark$2(row,t3)===true)++count;if(qrCode.isDark$2(t2,t3)===true)++count;if(count===0||count===4)lostPoint+=3;}for(t1=moduleCount-6,row=0;row<moduleCount;++row)for(col=0;col<t1;++col)if(qrCode.isDark$2(row,col)===true&&qrCode.isDark$2(row,col+1)!==true&&qrCode.isDark$2(row,col+2)===true&&qrCode.isDark$2(row,col+3)===true&&qrCode.isDark$2(row,col+4)===true&&qrCode.isDark$2(row,col+5)!==true&&qrCode.isDark$2(row,col+6)===true)lostPoint+=40;for(col=0;col<moduleCount;++col)for(row=0;row<t1;++row)if(qrCode.isDark$2(row,col)===true&&qrCode.isDark$2(row+1,col)!==true&&qrCode.isDark$2(row+2,col)===true&&qrCode.isDark$2(row+3,col)===true&&qrCode.isDark$2(row+4,col)===true&&qrCode.isDark$2(row+5,col)!==true&&qrCode.isDark$2(row+6,col)===true)lostPoint+=40;for(var darkCount=0,col=0;col<moduleCount;++col)for(row=0;row<moduleCount;++row)darkCount=qrCode.isDark$2(row,col)===true?darkCount+1:darkCount;t1=$.mul($.div($.abs(100*darkCount/moduleCount/moduleCount-50),5),10);if(typeof t1!=='number')throw $.iae(t1);return lostPoint+t1;};

$.print = function(object){$.PrintImplementation_print(object);};

$.ListIterator$ = function(list,T){var t1=new $.ListIterator(0,list);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$._JavaScriptAudioNodeEventsImpl$ = function(_ptr){return new $._JavaScriptAudioNodeEventsImpl(_ptr);};

$.StackOverflowException$ = function(){return new $.StackOverflowException();};

$.isEmpty = function(receiver){if(typeof receiver==='string'||$.isJsArray(receiver))return receiver.length === 0;return receiver.isEmpty$0();};

$.BungeeNum$ = function(target,current){var t1=new $.BungeeNum(null,null,null);t1.BungeeNum$2(target,current);return t1;};

$.forEach = function(receiver,f){if(!$.isJsArray(receiver))return receiver.forEach$1(f);else return $.Collections_forEach(receiver,f);};

$.QrPolynomial_QrPolynomial = function(thing,shift){if(typeof thing!=='string'&&(typeof thing!=='object'||thing===null||thing.constructor!==Array&&!thing.is$JavaScriptIndexingBehavior()))return $.QrPolynomial_QrPolynomial$bailout(1,thing,shift);var offset=0;while(true){var t1=thing.length;if(offset<t1){if(offset<0||offset>=t1)throw $.ioore(offset);var t2=$.eqB(thing[offset],0);t1=t2;}else t1=false;if(!t1)break;++offset;}t1=thing.length-offset;if(typeof shift!=='number')throw $.iae(shift);var values=$.QrMath_getZeroedList(t1+shift);for(var i=0;t1=thing.length,i<t1-offset;++i){t2=i+offset;if(t2<0||t2>=t1)throw $.ioore(t2);t2=thing[t2];if(i<0||i>=values.length)throw $.ioore(i);values[i]=t2;}return $.QrPolynomial$_internal(values);};

$.Collections_forEach = function(iterable,f){for(var t1=$.iterator(iterable);t1.hasNext$0()===true;)f.call$1(t1.next$0());};

$.PrintImplementation_print = function(obj){if(typeof obj==='string')$.Primitives_printString(obj);else $.Primitives_printString($.toString(obj));};

$.QrCode__createBytes = function(buffer,rsBlocks){if(typeof rsBlocks!=='string'&&(typeof rsBlocks!=='object'||rsBlocks===null||rsBlocks.constructor!==Array&&!rsBlocks.is$JavaScriptIndexingBehavior()))return $.QrCode__createBytes$bailout(1,buffer,rsBlocks,0,0,0,0,0,0,0,0,0,0);var dcdata=$.ListImplementation_List(rsBlocks.length,'List');var ecdata=$.ListImplementation_List(rsBlocks.length,'List');for(var r=0,maxEcCount=0,maxDcCount=0,offset=0;t1=rsBlocks.length,r<t1;++r){if(r<0||r>=t1)throw $.ioore(r);var dcCount=rsBlocks[r].get$dataCount();if(r<0||r>=rsBlocks.length)throw $.ioore(r);var ecCount=$.sub(rsBlocks[r].get$totalCount(),dcCount);maxDcCount=$.max(maxDcCount,dcCount);maxEcCount=$.max(maxEcCount,ecCount);var t2=$.QrMath_getZeroedList(dcCount);if(r<0||r>=dcdata.length)throw $.ioore(r);dcdata[r]=t2;var i=0;while(true){if(r<0||r>=dcdata.length)throw $.ioore(r);if(!$.ltB(i,$.get$length(dcdata[r])))break;if(r<0||r>=dcdata.length)throw $.ioore(r);var t1=dcdata[r];if(typeof t1!=='object'||t1===null||(t1.constructor!==Array||!!t1.immutable$list)&&!t1.is$JavaScriptIndexingBehavior())return $.QrCode__createBytes$bailout(2,buffer,rsBlocks,dcCount,dcdata,ecCount,maxDcCount,t1,ecdata,maxEcCount,r,offset,i);var t3=buffer.getByte$1(i+offset);if(typeof t3!=='number')throw $.iae(t3);t3=255&t3;if(i<0||i>=t1.length)throw $.ioore(i);t1[i]=t3;++i;}if(typeof dcCount!=='number')throw $.iae(dcCount);offset+=dcCount;var rsPoly=$.QrUtil_getErrorCorrectPolynomial(ecCount);if(r<0||r>=dcdata.length)throw $.ioore(r);var modPoly=$.QrPolynomial_QrPolynomial(dcdata[r],$.sub($.get$length(rsPoly),1)).mod$1(rsPoly);if(typeof modPoly!=='string'&&(typeof modPoly!=='object'||modPoly===null||modPoly.constructor!==Array&&!modPoly.is$JavaScriptIndexingBehavior()))return $.QrCode__createBytes$bailout(3,r,buffer,rsBlocks,modPoly,dcdata,maxDcCount,offset,ecdata,maxEcCount,rsPoly,0,0);t2=$.QrMath_getZeroedList($.sub($.get$length(rsPoly),1));if(r<0||r>=ecdata.length)throw $.ioore(r);ecdata[r]=t2;i=0;while(true){if(r<0||r>=ecdata.length)throw $.ioore(r);if(!$.ltB(i,$.get$length(ecdata[r])))break;t1=i+modPoly.length;if(r<0||r>=ecdata.length)throw $.ioore(r);t2=$.get$length(ecdata[r]);if(typeof t2!=='number')throw $.iae(t2);var modIndex=t1-t2;if(r<0||r>=ecdata.length)throw $.ioore(r);t2=ecdata[r];if(typeof t2!=='object'||t2===null||(t2.constructor!==Array||!!t2.immutable$list)&&!t2.is$JavaScriptIndexingBehavior())return $.QrCode__createBytes$bailout(4,buffer,rsBlocks,modPoly,dcdata,maxDcCount,ecdata,maxEcCount,r,modIndex,t2,offset,i);if(modIndex>=0){if(modIndex!==(modIndex|0))throw $.iae(modIndex);if(modIndex<0||modIndex>=modPoly.length)throw $.ioore(modIndex);t1=modPoly[modIndex];}else t1=0;if(i<0||i>=t2.length)throw $.ioore(i);t2[i]=t1;++i;}}for(var totalCodeCount=0,i=0;t1=rsBlocks.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);t2=rsBlocks[i].get$totalCount();if(typeof t2!=='number')throw $.iae(t2);totalCodeCount+=t2;}var data=[];for(i=0;i<maxDcCount;++i)for(r=0;r<rsBlocks.length;++r){if(r<0||r>=dcdata.length)throw $.ioore(r);if($.ltB(i,$.get$length(dcdata[r]))){if(r<0||r>=dcdata.length)throw $.ioore(r);t1=dcdata[r];if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return $.QrCode__createBytes$bailout(5,r,t1,maxEcCount,rsBlocks,maxDcCount,i,data,dcdata,ecdata,0,0,0);if(i<0||i>=t1.length)throw $.ioore(i);data.push(t1[i]);}}for(i=0;i<maxEcCount;++i)for(r=0;r<rsBlocks.length;++r){if(r<0||r>=ecdata.length)throw $.ioore(r);if($.ltB(i,$.get$length(ecdata[r]))){if(r<0||r>=ecdata.length)throw $.ioore(r);t1=ecdata[r];if(typeof t1!=='string'&&(typeof t1!=='object'||t1===null||t1.constructor!==Array&&!t1.is$JavaScriptIndexingBehavior()))return $.QrCode__createBytes$bailout(6,rsBlocks,r,data,t1,ecdata,i,0,0,0,0,0,0);if(i<0||i>=t1.length)throw $.ioore(i);data.push(t1[i]);}}return data;};

$._IDBTransactionEventsImpl$ = function(_ptr){return new $._IDBTransactionEventsImpl(_ptr);};

$.dynamicFunction = function(name$){var f=Object.prototype[name$];if(!(f==null)&&!!f.methods)return f.methods;var methods={};var dartMethod=Object.getPrototypeOf($.CTC110)[name$];if(!(dartMethod==null))$.propertySet(methods,'Object',dartMethod);var bind=function() {return $.dynamicBind.call$4(this, name$, methods, Array.prototype.slice.call(arguments));};bind.methods = methods;$.defineProperty(Object.prototype,name$,bind);return methods;};

$.ListImplementation_List$from = function(other,E){var result=$.ListImplementation_List(null);for(var t1=$.iterator(other);t1.hasNext$0()===true;)result.push(t1.next$0());return result;};

$._Timer$repeating = function(milliSeconds,callback){var t1=new $._Timer(false,null);t1._Timer$repeating$2(milliSeconds,callback);return t1;};

$._EventSourceEventsImpl$ = function(_ptr){return new $._EventSourceEventsImpl(_ptr);};

$._Collections_forEach = function(iterable,f){for(var t1=$.iterator(iterable);t1.hasNext$0()===true;)f.call$1(t1.next$0());};

$._convertNativeToDart_AcceptStructuredClone = function(object){var values=[];var copies=[];var t1=new $._convertNativeToDart_AcceptStructuredClone_findSlot(copies,values);var t2=new $._convertNativeToDart_AcceptStructuredClone_readSlot(copies);return new $._convertNativeToDart_AcceptStructuredClone_walk(new $._convertNativeToDart_AcceptStructuredClone_writeSlot(copies),t1,t2).call$1(object);};

$.max = function(a,b){if(typeof a==='number'){if(typeof b==='number'){if(a>b)return a;if(a<b)return b;if(typeof b==='number'){if(typeof a==='number')if(a===0)return a+b;if($.isNaN(b)===true)return b;return a;}if(b===0&&$.isNegative(a)===true)return b;return a;}throw $.$$throw($.IllegalArgumentException$(b));}throw $.$$throw($.IllegalArgumentException$(a));};

$._FrozenElementList$_wrap = function(_nodeList){return new $._FrozenElementList(_nodeList);};

$.QrUtil_getMask = function(maskPattern,i,j){switch(maskPattern){case 0:return $.eq($.mod($.add(i,j),2),0);case 1:return $.eq($.mod(i,2),0);case 2:return $.eq($.mod(j,3),0);case 3:return $.eq($.mod($.add(i,j),3),0);case 4:return $.eq($.mod($.add($.tdiv(i,2),$.tdiv(j,3)),2),0);case 5:return $.eq($.add($.mod($.mul(i,j),2),$.mod($.mul(i,j),3)),0);case 6:return $.eq($.mod($.add($.mod($.mul(i,j),2),$.mod($.mul(i,j),3)),2),0);case 7:return $.eq($.mod($.add($.mod($.mul(i,j),3),$.mod($.add(i,j),2)),2),0);default:throw $.$$throw('bad maskPattern:'+$.S(maskPattern));}};

$.SendValuePort$ = function(_func,TInput,TOutput){var t1=new $.SendValuePort(_func);$.setRuntimeTypeInfo(t1,{ 'TInput': TInput, 'TOutput': TOutput });t1.SendValuePort$1(_func);return t1;};

$.ge$slow = function(a,b){if($.checkNumbers(a,b))return a >= b;return a.operator$ge$1(b);};

$._convertDartToNative_PrepareForStructuredClone = function(value){var values=[];var copies=[];var t1=new $._convertDartToNative_PrepareForStructuredClone_findSlot(copies,values);var t2=new $._convertDartToNative_PrepareForStructuredClone_readSlot(copies);var t3=new $._convertDartToNative_PrepareForStructuredClone_writeSlot(copies);var t4=new $._convertDartToNative_PrepareForStructuredClone_cleanupSlots();var copy=new $._convertDartToNative_PrepareForStructuredClone_walk(t3,t1,t2).call$1(value);t4.call$0();return copy;};

$.floor = function(receiver){return Math.floor(receiver);};

$.getFunctionForTypeNameOf = function(){if(!(typeof(navigator)==='object'))return $.typeNameInChrome;var userAgent=navigator.userAgent;if($.contains(userAgent,'Chrome')||$.contains(userAgent,'DumpRenderTree'))return $.typeNameInChrome;else if($.contains(userAgent,'Firefox'))return $.typeNameInFirefox;else if($.contains(userAgent,'MSIE'))return $.typeNameInIE;else if($.contains(userAgent,'Opera'))return $.typeNameInOpera;else if($.contains(userAgent,'Safari'))return $.typeNameInSafari;else return $.constructorNameFallback;};

$._WebSocketEventsImpl$ = function(_ptr){return new $._WebSocketEventsImpl(_ptr);};

$.shr = function(a,b){if($.checkNumbers(a,b)){if(b<0)throw $.$$throw($.IllegalArgumentException$(b));if(a>0){if(b > 31)return 0;return a >>> b;}if(b>31)b=31;return (a >> b) >>> 0;}return a.operator$shr$1(b);};

$._JsCopier$ = function(){var t1=new $._JsCopier($._MessageTraverserVisitedMap$());t1._JsCopier$0();return t1;};

$._convertDartToNative_SerializedScriptValue = function(value){return $._convertDartToNative_PrepareForStructuredClone(value);};

$._deserializeMessage = function(message){if($._globalState().get$needSerialization()===true)return $._JsDeserializer$().deserialize$1(message);else return message;};

$.indexSet$slow = function(a,index,value){if($.isJsArray(a)){if(!(typeof index==='number'&&index===(index|0)))throw $.$$throw($.IllegalArgumentException$(index));if(index<0||$.geB(index,$.get$length(a)))throw $.$$throw($.IndexOutOfRangeException$(index));$.checkMutable(a,'indexed set');a[index] = value;return;}a.operator$indexSet$2(index,value);};

$.Arrays_lastIndexOf = function(a,element,startIndex){if(typeof a!=='string'&&(typeof a!=='object'||a===null||a.constructor!==Array&&!a.is$JavaScriptIndexingBehavior()))return $.Arrays_lastIndexOf$bailout(1,a,element,startIndex);if(typeof startIndex!=='number')return $.Arrays_lastIndexOf$bailout(1,a,element,startIndex);if(startIndex<0)return -1;var t1=a.length;if(startIndex>=t1)startIndex=t1-1;for(var i=startIndex;i>=0;--i){if(i!==(i|0))throw $.iae(i);if(i<0||i>=a.length)throw $.ioore(i);if($.eqB(a[i],element))return i;}return -1;};

$.and = function(a,b){if($.checkNumbers(a,b))return (a & b) >>> 0;return a.operator$and$1(b);};

$._MediaStreamEventsImpl$ = function(_ptr){return new $._MediaStreamEventsImpl(_ptr);};

$.setRuntimeTypeInfo = function(target,typeInfo){if(!(target==null))target.builtin$typeInfo = typeInfo;};

$.hashCode = function(receiver){if(typeof receiver==='number')return receiver & 0x1FFFFFFF;if(!(typeof receiver==='string'))return receiver.hashCode$0();var length$=receiver.length;for(var hash=0,i=0;i<length$;++i){var hash0=536870911&hash+receiver.charCodeAt(i);var hash1=536870911&hash0+524287&hash0 << 10;hash1=(hash1^$.shr(hash1,6))>>>0;hash=hash1;}hash0=536870911&hash+67108863&hash << 3;hash0=(hash0^$.shr(hash0,11))>>>0;return 536870911&hash0+16383&hash0 << 15;};

$.FutureImpl_FutureImpl$immediate = function(value,T){var res=$.FutureImpl$();res._setValue$1(value);return res;};

$.mul$slow = function(a,b){if($.checkNumbers(a,b))return a * b;return a.operator$mul$1(b);};

$._waitForPendingPorts = function(message,callback){var finder=$._PendingSendPortFinder$();finder.traverse$1(message);$.Futures_wait(finder.ports).then$1(new $._waitForPendingPorts_anon(callback));};

$.QrDemo$ = function(canvas,typeDiv,errorDiv){var t1=canvas.get$context2d();var t2=$._QrCalc$();t1=new $.QrDemo($.BungeeNum$(1,null),canvas,t2,t1,'',10,0,null,false);t1.QrDemo$3(canvas,typeDiv,errorDiv);return t1;};

$.gt = function(a,b){return typeof a==='number'&&typeof b==='number'?a > b:$.gt$slow(a,b);};

$._IsolateContext$ = function(){var t1=new $._IsolateContext(null,null,null);t1._IsolateContext$0();return t1;};

$.buildDynamicMetadata = function(inputTable){var result=[];for(var i=0;i<inputTable.length;++i){var tag=inputTable[i][0];var array=inputTable[i];var tags=array[1];var set={};var tagNames=tags.split('|');for(var j=0,index=1;j<tagNames.length;++j){$.propertySet(set,tagNames[j],true);index=j;array=tagNames;}result.push($.MetaInfo$(tag,tags,set));}return result;};

$.charCodeAt = function(receiver,index){if(typeof receiver==='string'){if(index<0)throw $.$$throw($.IndexOutOfRangeException$(index));if(index>=receiver.length)throw $.$$throw($.IndexOutOfRangeException$(index));return receiver.charCodeAt(index);}else return receiver.charCodeAt$1(index);};

$.getTypeNameOf = function(obj){if($._getTypeNameOf==null)$._getTypeNameOf=$.getFunctionForTypeNameOf();return $._getTypeNameOf.call$1(obj);};

$.QrMath_getZeroedList = function(count){var l=$.ListImplementation_List(null,'int');$.insertRange$3(l,0,count,0);return l;};

$.ListImplementation_List = function(length$,E){return $.Primitives_newList(length$);};

$.contains$1 = function(receiver,other){return $.contains$2(receiver,other,0);};

$.mul = function(a,b){return typeof a==='number'&&typeof b==='number'?a * b:$.mul$slow(a,b);};

$.isValidNumber = function(value){return !(value==null)&&$.isInfinite(value)!==true&&$.isNaN(value)!==true;};

$._IsolateNatives__processWorkerMessage = function(sender,e){var msg=$._deserializeMessage($._IsolateNatives__getEventData(e));switch($.index(msg,'command')){case 'start':var t1=$.index(msg,'id');$._globalState().set$currentManagerId(t1);var entryPoint=$._IsolateNatives__getJSFunctionFromName($.index(msg,'functionName'));var replyTo=$._deserializeMessage($.index(msg,'replyTo'));$._globalState().get$topEventLoop().enqueue$3($._IsolateContext$(),new $._IsolateNatives__processWorkerMessage_function(entryPoint,replyTo),'worker-start');$._globalState().get$topEventLoop().run$0();break;case 'spawn-worker':$._IsolateNatives__spawnWorker($.index(msg,'functionName'),$.index(msg,'uri'),$.index(msg,'replyPort'));break;case 'message':$.index(msg,'port').send$2($.index(msg,'msg'),$.index(msg,'replyTo'));$._globalState().get$topEventLoop().run$0();break;case 'close':$._IsolateNatives__log('Closing Worker');$._globalState().get$managers().remove$1(sender.get$id());sender.terminate$0();$._globalState().get$topEventLoop().run$0();break;case 'log':$._IsolateNatives__log($.index(msg,'msg'));break;case 'print':if($._globalState().get$isWorker()===true)$._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command','print','msg',msg])));else $.print($.index(msg,'msg'));break;case 'error':throw $.$$throw($.index(msg,'msg'));}};

$._browserPrefix = function(){if($._cachedBrowserPrefix==null)if($._Device_isFirefox()===true)$._cachedBrowserPrefix='-moz-';else $._cachedBrowserPrefix='-webkit-';return $._cachedBrowserPrefix;};

$._EventsImpl$ = function(_ptr){return new $._EventsImpl(_ptr);};

$._BodyElementEventsImpl$ = function(_ptr){return new $._BodyElementEventsImpl(_ptr);};

$._IsolateNatives__log = function(msg){if($._globalState().get$isWorker()===true)$._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command','log','msg',msg])));else try{$._IsolateNatives__consoleLog(msg);}catch(exception){$.unwrapException(exception);var trace=$.getTraceFromException(exception);throw $.$$throw($.ExceptionImplementation$(trace));}};

$.parseInt = function(str){$.checkString(str);if(!/^\s*[+-]?(?:0[xX][abcdefABCDEF0-9]+|\d+)\s*$/.test(str))throw $.$$throw($.FormatException$(str));var trimmed=$.trim(str);if($.gtB($.get$length(trimmed),2))var t1=$.eqB($.index(trimmed,1),'x')||$.eqB($.index(trimmed,1),'X');else t1=false;if(!t1)if($.gtB($.get$length(trimmed),3))t1=$.eqB($.index(trimmed,2),'x')||$.eqB($.index(trimmed,2),'X');else t1=false;else t1=true;var base=t1?16:10;var ret=parseInt(trimmed, base);if($.isNaN(ret)===true)throw $.$$throw($.FormatException$(str));return ret;};

$.add$1 = function(receiver,value){if($.isJsArray(receiver)){$.checkGrowable(receiver,'add');receiver.push(value);return;}return receiver.add$1(value);};

$._Timer$ = function(milliSeconds,callback){var t1=new $._Timer(true,null);t1._Timer$2(milliSeconds,callback);return t1;};

$.get$length = function(receiver){if(typeof receiver==='string'||$.isJsArray(receiver))return receiver.length;else return receiver.get$length();};

$.Uri__parseIntOrZero = function(val){if(!(val==null)&&!$.eqB(val,''))return $.parseInt(val);else return 0;};

$.isNaN = function(receiver){if(typeof receiver==='number')return isNaN(receiver);else return receiver.isNaN$0();};

$.regExpMakeNative = function(regExp,global){var pattern=regExp.get$pattern();var multiLine=regExp.get$multiLine();var ignoreCase=regExp.get$ignoreCase();$.checkString(pattern);var sb=$.StringBufferImpl$('');if(multiLine===true)$.add$1(sb,'m');if(ignoreCase===true)$.add$1(sb,'i');if(global)$.add$1(sb,'g');try{return new RegExp(pattern, $.toString(sb));}catch(exception){var t1=$.unwrapException(exception);var e=t1;throw $.$$throw($.IllegalJSRegExpException$(pattern,String(e)));}};

$.or = function(a,b){if($.checkNumbers(a,b))return (a | b) >>> 0;return a.operator$or$1(b);};

$.QrMath_gexp = function(n){if(typeof n!=='number')return $.QrMath_gexp$bailout(1,n);for(;n<0;)n+=255;for(;n>=256;)n-=255;return $.index($.QrMath_EXP_TABLE(),n);};

$.port = function(){if($._lazyPort==null)$._lazyPort=$._ReceivePortFactory_ReceivePort();return $._lazyPort;};

$.main = function(){var demo=$.QrDemo$($.query('#content'),$.query('#type-div'),$.query('#error-div'));var input=$.query('#input');input.set$value('Type your message in here...');demo.set$value(input.get$value());$.add$1(input.get$on().get$keyUp(),new $.main_anon(demo,input));$.add$1(demo.get$updated(),new $.main_anon0(input));$.add$1(demo.get$error(),new $.main_anon1(input));};

$.FutureValueResult$fromException = function(exception,TOutput){var t1=new $.FutureValueResult(null,exception);$.setRuntimeTypeInfo(t1,{ 'TOutput': TOutput });t1.FutureValueResult$fromException$1(exception);return t1;};

$.ceil = function(receiver){return Math.ceil(receiver);};

$.toInt = function(receiver){if(!(typeof receiver==='number'))return receiver.toInt$0();if($.isNaN(receiver)===true)throw $.$$throw($.FormatException$('NaN'));if($.isInfinite(receiver)===true)throw $.$$throw($.FormatException$('Infinity'));var truncated=$.truncate(receiver);return truncated == -0.0?0:truncated;};

$.lastIndexOf$1 = function(receiver,element){if($.isJsArray(receiver))return $.Arrays_lastIndexOf(receiver,element,receiver.length);else if(typeof receiver==='string'){$.checkNull(element);return receiver.lastIndexOf(element);}return receiver.lastIndexOf$1(element);};

$._FrozenElementListIterator$ = function(_list){return new $._FrozenElementListIterator(_list,0);};

$.iterator = function(receiver){if($.isJsArray(receiver))return $.ListIterator$(receiver);return receiver.iterator$0();};

$.dynamicBind = function(obj,name$,methods,arguments$){var tag=$.getTypeNameOf(obj);var method=methods[tag];if(method==null&&!($._dynamicMetadata0()==null))for(var i=0;i<$._dynamicMetadata0().length;++i){var entry=$._dynamicMetadata0()[i];if(entry.get$_set()[tag]){method=methods[entry.get$_tag()];if(!(method==null))break;}}if(method==null)method=methods['Object'];var proto=Object.getPrototypeOf(obj);if(method==null)method=function () {if (Object.getPrototypeOf(this) === proto) {throw new TypeError(name$ + " is not a function");} else {return Object.prototype[name$].apply(this, arguments);}};if(!proto.hasOwnProperty(name$))$.defineProperty(proto,name$,method);return method.apply(obj, arguments$);};

$.Maps_mapToString = function(m){var result=$.StringBufferImpl$('');$.Maps__emitMap(m,result,$.ListImplementation_List(null));return result.toString$0();};

$.QrUtil_getBCHTypeInfo = function(data){var d=$.shl(data,10);if(d!==(d|0))return $.QrUtil_getBCHTypeInfo$bailout(1,data,d);for(;$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G15)>=0;){var t1=$.shl($.QrUtil_G15,$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G15));if(typeof t1!=='number')throw $.iae(t1);d=(d^t1)>>>0;}return $.xor($.or($.shl(data,10),d),$.QrUtil_G15_MASK);};

$.GlobalId$_internal = function(value){return new $.GlobalId(value,$.Util_getHashCode([value]));};

$.UnsupportedOperationException$ = function(_message){return new $.UnsupportedOperationException(_message);};

$._BufferingSendPort$ = function(isolateId,_futurePort){var t1=new $._BufferingSendPort($._BufferingSendPort__idCount,null,_futurePort,[],isolateId);t1._BufferingSendPort$2(isolateId,_futurePort);return t1;};

$.invokeClosure = function(closure,isolate,numberOfArguments,arg1,arg2){if($.eqB(numberOfArguments,0))return $._callInIsolate(isolate,new $.invokeClosure_anon(closure));else if($.eqB(numberOfArguments,1))return $._callInIsolate(isolate,new $.invokeClosure_anon0(closure,arg1));else if($.eqB(numberOfArguments,2))return $._callInIsolate(isolate,new $.invokeClosure_anon1(closure,arg1,arg2));else throw $.$$throw($.ExceptionImplementation$('Unsupported number of arguments for wrapped closure'));};

$.removeLast = function(receiver){if($.isJsArray(receiver)){$.checkGrowable(receiver,'removeLast');if($.get$length(receiver)===0)throw $.$$throw($.IndexOutOfRangeException$(-1));return receiver.pop();}return receiver.removeLast$0();};

$._IsolateNatives__getJSFunctionName = function(f){return f.$name || (void 0);};

$.MetaInfo$ = function(_tag,_tags,_set){return new $.MetaInfo(_tag,_tags,_set);};

$.addLast = function(receiver,value){if(!$.isJsArray(receiver))return receiver.addLast$1(value);$.checkGrowable(receiver,'addLast');receiver.push(value);};

$._HttpRequestEventsImpl$ = function(_ptr){return new $._HttpRequestEventsImpl(_ptr);};

$.geB = function(a,b){return typeof a==='number'&&typeof b==='number'?a >= b:$.ge$slow(a,b)===true;};

$._isJavaScriptSimpleObject = function(value){return Object.getPrototypeOf(value) === Object.prototype;};

$.add = function(a,b){return typeof a==='number'&&typeof b==='number'?a + b:$.add$slow(a,b);};

$.ioore = function(index){throw $.$$throw($.IndexOutOfRangeException$(index));};

$._JsDeserializer$ = function(){return new $._JsDeserializer(null);};

$._IsolateNatives__getJSFunctionFromName = function(functionName){    return $globalThis[functionName];
  };

$.QrRsBlock_getRsBlockTable = function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case 1:return $.index($.QrRsBlock__rsBlockTable,$.add($.mul($.sub(typeNumber,1),4),0));case 0:return $.index($.QrRsBlock__rsBlockTable,$.add($.mul($.sub(typeNumber,1),4),1));case 3:return $.index($.QrRsBlock__rsBlockTable,$.add($.mul($.sub(typeNumber,1),4),2));case 2:return $.index($.QrRsBlock__rsBlockTable,$.add($.mul($.sub(typeNumber,1),4),3));default:throw $.$$throw('bad rs block @ typeNumber: '+$.S(typeNumber)+'/errorCorrectLevel:'+$.S(errorCorrectLevel));}};

$._ChildNodeListLazy$ = function(_this){return new $._ChildNodeListLazy(_this);};

$.QrErrorCorrectLevel_getName = function(level){switch(level){case 1:return 'Low';case 0:return 'Medium';case 3:return 'Quality';case 2:return 'High';default:throw $.$$throw('not supported');}};

$.abs = function(receiver){if(!(typeof receiver==='number'))return receiver.abs$0();return Math.abs(receiver);};

$._callInIsolate = function(isolate,function$){isolate.eval$1(function$);$._globalState().get$topEventLoop().run$0();};

$.charCodes = function(receiver){if(!(typeof receiver==='string'))return receiver.charCodes$0();var len=receiver.length;var result=$.ListImplementation_List(len,'int');for(var i=0;i<len;++i){var t1=$.charCodeAt(receiver,i);if(i<0||i>=result.length)throw $.ioore(i);result[i]=t1;}return result;};

$.Primitives_printString = function(string){if(typeof dartPrint == "function"){dartPrint(string);return;}if(typeof console == "object"){console.log(string);return;}if(typeof write == "function"){write(string);write("\n");}};

$._convertNativeToDart_IDBKey = function(nativeKey){if(new $._convertNativeToDart_IDBKey_containsDate().call$1(nativeKey)===true)throw $.$$throw($.CTC15);return nativeKey;};

$.leB = function(a,b){return typeof a==='number'&&typeof b==='number'?a <= b:$.le$slow(a,b)===true;};

$.mod = function(a,b){if($.checkNumbers(a,b)){var result=a % b;if(result===0)return 0;if(result>0)return result;if(b<0)return result-b;else return result+b;}return a.operator$mod$1(b);};

$._IDBRequestEventsImpl$ = function(_ptr){return new $._IDBRequestEventsImpl(_ptr);};

$._WorkerEventsImpl$ = function(_ptr){return new $._WorkerEventsImpl(_ptr);};

$.ExceptionImplementation$ = function(msg){return new $.ExceptionImplementation(msg);};

$._QrCalc$ = function(){return new $._QrCalc($.spawnFunction($._qrIsolate),null,null,null,null,null,false,$.EventHandle$('EventArgs'),$.EventHandle$('EventArgs'),$.EventHandle$('Object'));};

$.typeNameInFirefox = function(obj){var name$=$.constructorNameFallback(obj);if(name$==='Window')return 'DOMWindow';if(name$==='Document')return 'HTMLDocument';if(name$==='XMLDocument')return 'Document';if(name$==='WorkerMessageEvent')return 'MessageEvent';if(name$==='DragEvent')return 'MouseEvent';if(name$==='DataTransfer')return 'Clipboard';if(name$==='FormData')return 'DOMFormData';return name$;};

$.sub$slow = function(a,b){if($.checkNumbers(a,b))return a - b;return a.operator$sub$1(b);};

$.Collections_collectionToString = function(c){var result=$.StringBufferImpl$('');$.Collections__emitCollection(c,result,$.ListImplementation_List(null));return result.toString$0();};

$._SharedWorkerContextEventsImpl$ = function(_ptr){return new $._SharedWorkerContextEventsImpl(_ptr);};

$.QrUtil_getBCHTypeNumber = function(data){var d=$.shl(data,12);if(d!==(d|0))return $.QrUtil_getBCHTypeNumber$bailout(1,data,d);for(;$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G18)>=0;){var t1=$.shl($.QrUtil_G18,$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G18));if(typeof t1!=='number')throw $.iae(t1);d=(d^t1)>>>0;}return $.or($.shl(data,12),d);};

$.indexOf$2 = function(receiver,element,start){if($.isJsArray(receiver)){if(!(typeof start==='number'&&start===(start|0)))throw $.$$throw($.IllegalArgumentException$(start));return $.Arrays_indexOf(receiver,element,start,receiver.length);}else if(typeof receiver==='string'){$.checkNull(element);if(!(typeof start==='number'&&start===(start|0)))throw $.$$throw($.IllegalArgumentException$(start));if(!(typeof element==='string'))throw $.$$throw($.IllegalArgumentException$(element));if(start<0)return -1;return receiver.indexOf(element, start);}return receiver.indexOf$2(element,start);};

$.typeNameInIE = function(obj){var name$=$.constructorNameFallback(obj);if(name$==='Window')return 'DOMWindow';if(name$==='Document'){if(!!obj.xmlVersion)return 'Document';return 'HTMLDocument';}if(name$==='CanvasPixelArray')return 'Uint8ClampedArray';if(name$==='DataTransfer')return 'Clipboard';if(name$==='DragEvent')return 'MouseEvent';if(name$==='HTMLDDElement')return 'HTMLElement';if(name$==='HTMLDTElement')return 'HTMLElement';if(name$==='HTMLTableDataCellElement')return 'HTMLTableCellElement';if(name$==='HTMLTableHeaderCellElement')return 'HTMLTableCellElement';if(name$==='HTMLPhraseElement')return 'HTMLElement';if(name$==='MSStyleCSSProperties')return 'CSSStyleDeclaration';if(name$==='MouseWheelEvent')return 'WheelEvent';if(name$==='FormData')return 'DOMFormData';return name$;};

$.trim = function(receiver){if(!(typeof receiver==='string'))return receiver.trim$0();return receiver.trim();};

$.QrPolynomial$_internal = function(_myThings){return new $.QrPolynomial(_myThings);};

$._TextTrackEventsImpl$ = function(_ptr){return new $._TextTrackEventsImpl(_ptr);};

$.DoubleLinkedQueue$ = function(E){var t1=new $.DoubleLinkedQueue(null);$.setRuntimeTypeInfo(t1,{ 'E': E });t1.DoubleLinkedQueue$0();return t1;};

$.Primitives_newList = function(length$){if(length$==null)return new Array();if(!(typeof length$==='number'&&length$===(length$|0))||length$<0)throw $.$$throw($.IllegalArgumentException$(length$));var result=new Array(length$);result.fixed$length = true;return result;};

$.ge = function(a,b){return typeof a==='number'&&typeof b==='number'?a >= b:$.ge$slow(a,b);};

$._globalState = function(){return $globalState;};

$.substring$2 = function(receiver,startIndex,endIndex){if(!(typeof receiver==='string'))return receiver.substring$2(startIndex,endIndex);$.checkNum(startIndex);var length$=receiver.length;if(endIndex==null)endIndex=length$;$.checkNum(endIndex);if(startIndex<0)throw $.$$throw($.IndexOutOfRangeException$(startIndex));if($.gtB(startIndex,endIndex))throw $.$$throw($.IndexOutOfRangeException$(startIndex));if($.gtB(endIndex,length$))throw $.$$throw($.IndexOutOfRangeException$(endIndex));return $.substringUnchecked(receiver,startIndex,endIndex);};

$.StringBufferImpl$ = function(content$){var t1=new $.StringBufferImpl(null,null);t1.StringBufferImpl$1(content$);return t1;};

$._globalState0 = function(val){$globalState = val;};

$.getRuntimeTypeInfo = function(target){if(target==null)return;var res=target.builtin$typeInfo;return res==null?{}:res;};

$.window = function(){return window;};

$.spawnFunction = function(topLevelFunction){var name$=$._IsolateNatives__getJSFunctionName(topLevelFunction);if(name$==null)throw $.$$throw($.UnsupportedOperationException$('only top-level functions can be spawned.'));return $._IsolateNatives__spawn(name$,null,false);};

$.HashMapImplementation$ = function(K,V){var t1=new $.HashMapImplementation(null,null,null,null,null);$.setRuntimeTypeInfo(t1,{ 'K': K, 'V': V });t1.HashMapImplementation$0();return t1;};

$._SVGElementInstanceEventsImpl$ = function(_ptr){return new $._SVGElementInstanceEventsImpl(_ptr);};

$._FixedSizeListIterator$ = function(array,T){var t1=new $._FixedSizeListIterator($.get$length(array),array,0);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$._FileReaderEventsImpl$ = function(_ptr){return new $._FileReaderEventsImpl(_ptr);};

$._MainManagerStub$ = function(){return new $._MainManagerStub();};

$.DetailedIllegalArgumentException$ = function(arg,message){return new $.DetailedIllegalArgumentException(arg,message,'');};

$.regExpTest = function(regExp,str){return $.regExpGetNative(regExp).test(str);};

$.HashMapImplementation__nextProbe = function(currentProbe,numberOfProbes,length$){return $.and($.add(currentProbe,numberOfProbes),$.sub(length$,1));};

$.makeLiteralMap = function(keyValuePairs){var iterator=$.iterator(keyValuePairs);var result=$.LinkedHashMapImplementation$();for(;iterator.hasNext$0()===true;)result.operator$indexSet$2(iterator.next$0(),iterator.next$0());return result;};

$._IsolateNatives__thisScript = function(){return $thisScriptUrl};

$.Uri__addIfNonEmpty = function(sb,test,first,second){if(!(''===test)){sb.add$1(first==null?'null':first);sb.add$1(second==null?'null':second);}};

$.isInfinite = function(receiver){if(!(typeof receiver==='number'))return receiver.isInfinite$0();return receiver == Infinity||receiver == -Infinity;};

$.CompleterImpl$ = function(T){var t1=new $.CompleterImpl($.FutureImpl$());$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$.HashMapImplementation__computeLoadLimit = function(capacity){return $.tdiv(capacity*3,4);};

$.NoMoreElementsException$ = function(){return new $.NoMoreElementsException();};

$.addAll = function(receiver,collection){if(!$.isJsArray(receiver))return receiver.addAll$1(collection);var iterator=$.iterator(collection);for(;iterator.hasNext$0()===true;)$.add$1(receiver,iterator.next$0());};

$.QrRsBlock_getRSBlocks = function(typeNumber,errorCorrectLevel){var rsBlock=$.QrRsBlock_getRsBlockTable(typeNumber,errorCorrectLevel);if(typeof rsBlock!=='string'&&(typeof rsBlock!=='object'||rsBlock===null||rsBlock.constructor!==Array&&!rsBlock.is$JavaScriptIndexingBehavior()))return $.QrRsBlock_getRSBlocks$bailout(1,rsBlock,0,0,0,0,0);var length$=$.tdiv(rsBlock.length,3);var list=$.ListImplementation_List(null,'QrRsBlock');for(var i=0;i<length$;++i){var t1=i*3;var t2=t1+0;var t3=rsBlock.length;if(t2<0||t2>=t3)throw $.ioore(t2);var count=rsBlock[t2];if(typeof count!=='number')return $.QrRsBlock_getRSBlocks$bailout(2,t1,count,rsBlock,i,length$,list);var t4=t1+1;if(t4<0||t4>=t3)throw $.ioore(t4);var totalCount=rsBlock[t4];t1+=2;if(t1<0||t1>=t3)throw $.ioore(t1);var dataCount=rsBlock[t1];for(var j=0;j<count;++j)list.push($.QrRsBlock$(totalCount,dataCount));}return list;};

$._WindowEventsImpl$ = function(_ptr){return new $._WindowEventsImpl(_ptr);};

$._EventListenerListImpl$ = function(_ptr,_type){return new $._EventListenerListImpl(_ptr,_type);};

$.gt$slow = function(a,b){if($.checkNumbers(a,b))return a > b;return a.operator$gt$1(b);};

$.iae = function(argument){throw $.$$throw($.IllegalArgumentException$(argument));};

$._IsolateNatives__getEventData = function(e){return e.data};

$._DOMApplicationCacheEventsImpl$ = function(_ptr){return new $._DOMApplicationCacheEventsImpl(_ptr);};

$._IsolateNatives__spawnWorker = function(functionName,uri,replyPort){if(functionName==null)functionName='main';if(uri==null)uri=$._IsolateNatives__thisScript();if($.Uri$fromString(uri).isAbsolute$0()!==true)uri=$.S($.substring$2($._IsolateNatives__thisScript(),0,$.lastIndexOf$1($._IsolateNatives__thisScript(),'/')))+'/'+$.S(uri);var worker=$._IsolateNatives__newWorker(uri);worker.set$onmessage(new $._IsolateNatives__spawnWorker_anon(worker));var t1=$._globalState();var workerId=t1.get$nextManagerId();t1.set$nextManagerId($.add(workerId,1));worker.set$id(workerId);$.indexSet($._globalState().get$managers(),workerId,worker);worker.postMessage$1($._serializeMessage($.makeLiteralMap(['command','start','id',workerId,'replyTo',$._serializeMessage(replyPort),'functionName',functionName])));};

$.Collections__emitCollection = function(c,result,visiting){$.add$1(visiting,c);var isList=typeof c==='object'&&c!==null&&(c.constructor===Array||c.is$List());$.add$1(result,isList?'[':'{');for(var t1=$.iterator(c),first=true;t1.hasNext$0()===true;){var t2=t1.next$0();if(!first)$.add$1(result,', ');$.Collections__emitObject(t2,result,visiting);first=false;}$.add$1(result,isList?']':'}');$.removeLast(visiting);};

$.FilteredElementList$ = function(node){return new $.FilteredElementList(node,node.get$nodes());};

$.typeNameInChrome = function(obj){var name$=obj.constructor.name;if(name$==='Window')return 'DOMWindow';if(name$==='CanvasPixelArray')return 'Uint8ClampedArray';if(name$==='WebKitMutationObserver')return 'MutationObserver';if(name$==='FormData')return 'DOMFormData';return name$;};

$._document = function(){return document;};

$._FrameSetElementEventsImpl$ = function(_ptr){return new $._FrameSetElementEventsImpl(_ptr);};

$.StringImplementation__toJsStringArray = function(strings){if(typeof strings!=='object'||strings===null||(strings.constructor!==Array||!!strings.immutable$list)&&!strings.is$JavaScriptIndexingBehavior())return $.StringImplementation__toJsStringArray$bailout(1,strings);$.checkNull(strings);var length$=strings.length;if($.isJsArray(strings)){for(var i=0;i<length$;++i){if(i<0||i>=strings.length)throw $.ioore(i);var string=strings[i];$.checkNull(string);if(!(typeof string==='string'))throw $.$$throw($.IllegalArgumentException$(string));}var array=strings;}else{array=$.ListImplementation_List(length$);for(i=0;i<length$;++i){if(i<0||i>=strings.length)throw $.ioore(i);string=strings[i];$.checkNull(string);if(!(typeof string==='string'))throw $.$$throw($.IllegalArgumentException$(string));if(i<0||i>=array.length)throw $.ioore(i);array[i]=string;}}return array;};

$.listInsertRange = function(receiver,start,length$,initialValue){if(typeof receiver!=='object'||receiver===null||(receiver.constructor!==Array||!!receiver.immutable$list)&&!receiver.is$JavaScriptIndexingBehavior())return $.listInsertRange$bailout(1,receiver,start,length$,initialValue);if(length$===0)return;$.checkNull(start);$.checkNull(length$);if(!(typeof length$==='number'&&length$===(length$|0)))throw $.$$throw($.IllegalArgumentException$(length$));if(length$<0)throw $.$$throw($.IllegalArgumentException$(length$));var receiverLength=receiver.length;if(start<0||start>receiverLength)throw $.$$throw($.IndexOutOfRangeException$(start));var t1=receiverLength+length$;$.set$length(receiver,t1);var t2=start+length$;$.Arrays_copy(receiver,start,receiver,t2,receiverLength-start);for(var i=start;i<t2;++i){if(i<0||i>=receiver.length)throw $.ioore(i);receiver[i]=initialValue;}$.set$length(receiver,t1);};

$.IllegalJSRegExpException$ = function(_pattern,_errmsg){return new $.IllegalJSRegExpException(_pattern,_errmsg);};

$._IsolateNatives__startIsolate = function(topLevel,replyTo){$._fillStatics($._globalState().get$currentContext());$._lazyPort=$._ReceivePortFactory_ReceivePort();replyTo.send$2('spawned',$.port().toSendPort$0());topLevel.call$0();};

$._IDBDatabaseEventsImpl$ = function(_ptr){return new $._IDBDatabaseEventsImpl(_ptr);};

$._timerFactory = function(millis,callback,repeating){return repeating===true?$._Timer$repeating(millis,callback):$._Timer$(millis,callback);};

$.toStringForNativeObject = function(obj){return 'Instance of '+$.getTypeNameOf(obj);};

$.query = function(selector){return $._document().query$1(selector);};

$.constructorNameFallback = function(obj){var constructor$=obj.constructor;if(typeof(constructor$)==='function'){var name$=constructor$.name;if(typeof name$==='string')var t1=!(name$==='')&&!(name$==='Object')&&!(name$==='Function.prototype');else t1=false;if(t1)return name$;}var string=Object.prototype.toString.call(obj);return string.substring(8, string.length - 1);};

$.FormatException$ = function(message){return new $.FormatException(message);};

$.ltB = function(a,b){return typeof a==='number'&&typeof b==='number'?a < b:$.lt$slow(a,b)===true;};

$.indexOf$1 = function(receiver,element){if($.isJsArray(receiver))return $.Arrays_indexOf(receiver,element,0,receiver.length);return receiver.indexOf$1(element);};

$.FutureValueResult$ = function(value,TOutput){var t1=new $.FutureValueResult(value,null);$.setRuntimeTypeInfo(t1,{ 'TOutput': TOutput });return t1;};

$.filter = function(receiver,predicate){if(!$.isJsArray(receiver))return receiver.filter$1(predicate);else return $.Collections_filter(receiver,[],predicate);};

$.tdiv = function(a,b){if($.checkNumbers(a,b))return $.truncate(a / b);return a.operator$tdiv$1(b);};

$._ChildrenElementList$_wrap = function(element){return new $._ChildrenElementList(element,element.get$$$dom_children());};

$.unwrapException = function(ex){if("dartException" in ex)return ex.dartException;var message=ex.message;if(ex instanceof TypeError){var type=ex.type;var name$=ex.arguments ? ex.arguments[0] : "";if($.eqB(type,'property_not_function')||$.eqB(type,'called_non_callable')||$.eqB(type,'non_object_property_call')||$.eqB(type,'non_object_property_load'))if(typeof name$==='string'&&$.startsWith(name$,'call$')===true)return $.ObjectNotClosureException$();else return $.NullPointerException$(null,$.CTC0);else if($.eqB(type,'undefined_method'))if(typeof name$==='string'&&$.startsWith(name$,'call$')===true)return $.ObjectNotClosureException$();else return $.NoSuchMethodException$('',name$,[],null);var ieErrorCode=ex.number & 0xffff;var ieFacilityNumber=ex.number>>16 & 0x1FFF;if(typeof message==='string')if($.endsWith(message,'is null')===true||$.endsWith(message,'is undefined')===true||$.endsWith(message,'is null or undefined')===true)return $.NullPointerException$(null,$.CTC0);else{if($.contains$1(message,' is not a function')!==true)var t1=ieErrorCode===438&&ieFacilityNumber===10;else t1=true;if(t1)return $.NoSuchMethodException$('','<unknown>',[],null);}return $.ExceptionImplementation$(typeof message==='string'?message:'');}if(ex instanceof RangeError){if(typeof message==='string'&&$.contains$1(message,'call stack')===true)return $.StackOverflowException$();return $.IllegalArgumentException$('');}if(typeof InternalError == 'function' && ex instanceof InternalError)if(typeof message==='string'&&message==='too much recursion')return $.StackOverflowException$();return ex;};

$.GlobalId_GlobalId = function(){var t1=$.GlobalId__globalId;$.GlobalId__globalId=$.add(t1,1);return $.GlobalId$_internal(t1);};

$.Collections_filter = function(source,destination,f){for(var t1=$.iterator(source);t1.hasNext$0()===true;){var t2=t1.next$0();if(f.call$1(t2)===true)destination.push(t2);}return destination;};

$.checkNumbers = function(a,b){if(typeof a==='number')if(typeof b==='number')return true;else{$.checkNull(b);throw $.$$throw($.IllegalArgumentException$(b));}return false;};

$._MediaStreamTrackListEventsImpl$ = function(_ptr){return new $._MediaStreamTrackListEventsImpl(_ptr);};

$._ReceivePortImpl$ = function(){var t1=$._ReceivePortImpl__nextFreeId;$._ReceivePortImpl__nextFreeId=$.add(t1,1);t1=new $._ReceivePortImpl(t1,null);t1._ReceivePortImpl$0();return t1;};

$._NodeListWrapper$ = function(list){return new $._NodeListWrapper(list);};

$.NoSuchMethodException$ = function(_receiver,_functionName,_arguments,existingArgumentNames){return new $.NoSuchMethodException(_receiver,_functionName,_arguments,existingArgumentNames);};

$._Collections_filter = function(source,destination,f){for(var t1=$.iterator(source);t1.hasNext$0()===true;){var t2=t1.next$0();if(f.call$1(t2)===true)destination.push(t2);}return destination;};

$.stringJoinUnchecked = function(array,separator){return array.join(separator);};

$._WorkerSendPort$ = function(_workerId,isolateId,_receivePortId){return new $._WorkerSendPort(_workerId,_receivePortId,isolateId);};

$.S = function(value){var res=$.toString(value);if(!(typeof res==='string'))throw $.$$throw($.IllegalArgumentException$(value));return res;};

$._DoubleLinkedQueueIterator$ = function(_sentinel,E){var t1=new $._DoubleLinkedQueueIterator(_sentinel,null);$.setRuntimeTypeInfo(t1,{ 'E': E });t1._DoubleLinkedQueueIterator$1(_sentinel);return t1;};

$._DataAttributeMap$ = function($$dom_attributes){return new $._DataAttributeMap($$dom_attributes);};

$.checkString = function(value){if(!(typeof value==='string')){$.checkNull(value);throw $.$$throw($.IllegalArgumentException$(value));}return value;};

$.Arrays_indexOf = function(a,element,startIndex,endIndex){if(typeof a!=='string'&&(typeof a!=='object'||a===null||a.constructor!==Array&&!a.is$JavaScriptIndexingBehavior()))return $.Arrays_indexOf$bailout(1,a,element,startIndex,endIndex);if(startIndex>=a.length)return -1;if(startIndex<0)startIndex=0;for(var i=startIndex;i<endIndex;++i){if(i<0||i>=a.length)throw $.ioore(i);if($.eqB(a[i],element))return i;}return -1;};

$._Lists_indexOf = function(a,element,startIndex,endIndex){if(typeof a!=='string'&&(typeof a!=='object'||a===null||a.constructor!==Array&&!a.is$JavaScriptIndexingBehavior()))return $._Lists_indexOf$bailout(1,a,element,startIndex,endIndex);if(typeof startIndex!=='number')return $._Lists_indexOf$bailout(1,a,element,startIndex,endIndex);if(typeof endIndex!=='number')return $._Lists_indexOf$bailout(1,a,element,startIndex,endIndex);if(startIndex>=a.length)return -1;if(startIndex<0)startIndex=0;for(var i=startIndex;i<endIndex;++i){if(i!==(i|0))throw $.iae(i);if(i<0||i>=a.length)throw $.ioore(i);if($.eqB(a[i],element))return i;}return -1;};

$._ReceivePortFactory_ReceivePort = function(){return $._ReceivePortImpl$();};

$._WhereIterator$ = function(_source,_func,T){var t1=new $._WhereIterator(_source,_func,null,null);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$.FutureValueResult_FutureValueResult$fromMap = function(value,TOutput){$.requireArgumentNotNull(value,'value');$.requireArgument($.FutureValueResult_isMyMap(value),'value',null);var ex=$.index(value,'exception');if(!(ex==null))return $.FutureValueResult$fromException(ex);else return $.FutureValueResult$($.index(value,'value'));};

$.QrByte$_internal = function(_data){return new $.QrByte(4,_data);};

$.EventHandle$ = function(T){var t1=new $.EventHandle(null,false);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$.toString = function(value){if(typeof value == "object" && value !== null)if($.isJsArray(value))return $.Collections_collectionToString(value);else return value.toString$0();if(value === 0 && (1 / value) < 0)return '-0.0';if(value==null)return 'null';if(typeof value == "function")return 'Closure';return String(value);};

$.Uri__emptyIfNull = function(val){return !(val==null)?val:'';};

$.startRootIsolate = function(entry){var t1=$._Manager$();$._globalState0(t1);if($._globalState().get$isWorker()===true)return;var rootContext=$._IsolateContext$();$._globalState().set$rootContext(rootContext);$._fillStatics(rootContext);$._globalState().set$currentContext(rootContext);if(!($._window()==null))rootContext.eval$1(new $.startRootIsolate_anon());rootContext.eval$1(entry);$._globalState().get$topEventLoop().run$0();};

$._ElementFactoryProvider_Element$tag = function(tag){return document.createElement(tag)};

$.lt$slow = function(a,b){if($.checkNumbers(a,b))return a < b;return a.operator$lt$1(b);};

$.Collections__emitObject = function(o,result,visiting){if(typeof o==='object'&&o!==null&&(o.constructor===Array||o.is$Collection()))if($.Collections__containsRef(visiting,o))$.add$1(result,typeof o==='object'&&o!==null&&(o.constructor===Array||o.is$List())?'[...]':'{...}');else $.Collections__emitCollection(o,result,visiting);else if(typeof o==='object'&&o!==null&&o.is$Map())if($.Collections__containsRef(visiting,o))$.add$1(result,'{...}');else $.Maps__emitMap(o,result,visiting);else $.add$1(result,o==null?'null':o);};

$._DedicatedWorkerContextEventsImpl$ = function(_ptr){return new $._DedicatedWorkerContextEventsImpl(_ptr);};

$.QrMath_EXP_TABLE = function(){if($.QrMath__expTable==null){var t=$.QrMath_getZeroedList(256);for(var i=0;i<8;++i){var t1=$.shl(1,i);if(i<0||i>=t.length)throw $.ioore(i);t[i]=t1;}for(i=8;i<256;++i){t1=i-4;var t2=t.length;if(t1<0||t1>=t2)throw $.ioore(t1);t1=t[t1];var t3=i-5;if(t3<0||t3>=t2)throw $.ioore(t3);t1=$.xor(t1,t[t3]);var t4=i-6;if(t4<0||t4>=t.length)throw $.ioore(t4);t1=$.xor(t1,t[t4]);var t5=i-8;if(t5<0||t5>=t.length)throw $.ioore(t5);t1=$.xor(t1,t[t5]);if(i<0||i>=t.length)throw $.ioore(i);t[i]=t1;}$.QrMath__expTable=$.ReadOnlyCollection$wrap(t);}return $.QrMath__expTable;};

$._IsolateNatives__startNonWorker = function(functionName,uri,replyPort){if(!(uri==null))throw $.$$throw($.UnsupportedOperationException$('Currently spawnUri is not supported without web workers.'));$._globalState().get$topEventLoop().enqueue$3($._IsolateContext$(),new $._IsolateNatives__startNonWorker_function(functionName,replyPort),'nonworker start');};

$.requireArgumentNotNull = function(argument,argName){if(argument==null)throw $.$$throw($.NullArgumentException$(argName));};

$.truncate = function(receiver){return receiver<0?$.ceil(receiver):$.floor(receiver);};

$._EventLoop$ = function(){return new $._EventLoop($.DoubleLinkedQueue$('_IsolateEvent'));};

$.substringUnchecked = function(receiver,startIndex,endIndex){return receiver.substring(startIndex, endIndex);};

$._convertNativeToDart_IDBAny = function(object){return $._convertNativeToDart_AcceptStructuredClone(object);};

$.contains = function(userAgent,name$){return !(userAgent.indexOf(name$)===-1);};

$._AudioContextEventsImpl$ = function(_ptr){return new $._AudioContextEventsImpl(_ptr);};

$._TextTrackCueEventsImpl$ = function(_ptr){return new $._TextTrackCueEventsImpl(_ptr);};

$.typeNameInSafari = function(obj){var name$=$.constructorNameFallback(obj);if(name$==='Window')return 'DOMWindow';if(name$==='CanvasPixelArray')return 'Uint8ClampedArray';if(name$==='WebKitMutationObserver')return 'MutationObserver';if(name$==='FormData')return 'DOMFormData';return name$;};

$.regExpExec = function(regExp,str){var result=$.regExpGetNative(regExp).exec(str);if(result === null)return;return result;};

$.endsWith = function(receiver,other){$.checkString(other);var receiverLength=receiver.length;var otherLength=other.length;if(otherLength>receiverLength)return false;return other===$.substring$1(receiver,receiverLength-otherLength);};

$.contains$2 = function(receiver,other,startIndex){if(!(typeof receiver==='string'))return receiver.contains$2(other,startIndex);$.checkNull(other);return $.stringContainsUnchecked(receiver,other,startIndex);};

$._ElementAttributeMap$ = function(_element){return new $._ElementAttributeMap(_element);};

$.regExpMatchStart = function(m){return m.index;};

$._WorkerContextEventsImpl$ = function(_ptr){return new $._WorkerContextEventsImpl(_ptr);};

$._ElementEventsImpl$ = function(_ptr){return new $._ElementEventsImpl(_ptr);};

$.QrUtil_getLengthInBits = function(mode,type){if($.leB(1,type)&&$.ltB(type,10))switch(mode){case 1:return 10;case 2:return 9;case 4:return 8;case 8:return 8;default:throw $.$$throw('mode:'+$.S(mode));}else if($.ltB(type,27))switch(mode){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw $.$$throw('mode:'+$.S(mode));}else if($.ltB(type,41))switch(mode){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw $.$$throw('mode:'+$.S(mode));}else throw $.$$throw('type:'+$.S(type));};

$._dynamicMetadata = function(table){$dynamicMetadata = table;};

$._dynamicMetadata0 = function(){if(typeof($dynamicMetadata)==='undefined'){var t1=[];$._dynamicMetadata(t1);}return $dynamicMetadata;};

$.ReadOnlyCollection$wrap = function(source,T){var t1=new $.ReadOnlyCollection(source);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$._SpeechRecognitionEventsImpl$ = function(_ptr){return new $._SpeechRecognitionEventsImpl(_ptr);};

$.QrInputTooLongException_QrInputTooLongException = function(providedInput,inputLimit){return $.QrInputTooLongException$_internal(providedInput,inputLimit,'Input too long. '+$.S(providedInput)+' > '+$.S(inputLimit));};

$.isNegative = function(receiver){return receiver===0?1/receiver<0:receiver<0;};

$.add$slow = function(a,b){if($.checkNumbers(a,b))return a + b;return a.operator$add$1(b);};

$.jsHasOwnProperty = function(jsObject,property){return jsObject.hasOwnProperty(property);};

$._Elements_LabelElement = function(){return $._document().$dom_createElement$1('label');};

$.Util_getHashCode = function(source){for(var t1=$.iterator(source),hash=0;t1.hasNext$0()===true;){var t2=t1.next$0();var next=t2==null?0:$.hashCode(t2);if(typeof next!=='number')throw $.iae(next);var hash0=536870911&hash+next;var hash1=536870911&hash0+((524287&hash0)<<10>>>0);hash1=(hash1^$.shr(hash1,6))>>>0;hash=hash1;}hash0=536870911&hash+((67108863&hash)<<3>>>0);hash0=(hash0^$.shr(hash0,11))>>>0;return 536870911&hash0+((16383&hash0)<<15>>>0);};

$.IllegalArgumentException$ = function(arg){return new $.IllegalArgumentException(arg);};

$.dynamicSetMetadata = function(inputTable){var t1=$.buildDynamicMetadata(inputTable);$._dynamicMetadata(t1);};

$._IsolateNatives__startWorker = function(functionName,uri,replyPort){if($._globalState().get$isWorker()===true)$._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command','spawn-worker','functionName',functionName,'uri',uri,'replyPort',replyPort])));else $._IsolateNatives__spawnWorker(functionName,uri,replyPort);};

$.stringLastIndexOfUnchecked = function(receiver,element,start){return receiver.lastIndexOf(element, start);};

$._IsolateNatives__spawn = function(functionName,uri,isLight){var completer=$.CompleterImpl$('SendPort');var port=$._ReceivePortFactory_ReceivePort();port.receive$1(new $._IsolateNatives__spawn_anon(port,completer));var signalReply=port.toSendPort$0();if($._globalState().get$useWorkers()===true&&!isLight)$._IsolateNatives__startWorker(functionName,uri,signalReply);else $._IsolateNatives__startNonWorker(functionName,uri,signalReply);return $._BufferingSendPort$($._globalState().get$currentContext().get$id(),completer.get$future());};

$.QrCode__createData = function(typeNumber,errorCorrectLevel,dataList){if(typeof dataList!=='string'&&(typeof dataList!=='object'||dataList===null||dataList.constructor!==Array&&!dataList.is$JavaScriptIndexingBehavior()))return $.QrCode__createData$bailout(1,typeNumber,errorCorrectLevel,dataList);var rsBlocks=$.QrRsBlock_getRSBlocks(typeNumber,errorCorrectLevel);var buffer=$.QrBitBuffer$();for(var i=0;t1=dataList.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);var data=dataList[i];buffer.put$2(data.get$mode(),4);buffer.put$2($.get$length(data),$.QrUtil_getLengthInBits(data.get$mode(),typeNumber));data.write$1(buffer);}for(var i=0,totalDataCount=0;t1=rsBlocks.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);var t2=rsBlocks[i].get$dataCount();if(typeof t2!=='number')throw $.iae(t2);totalDataCount+=t2;}var totalByteCount=totalDataCount*8;if($.gtB($.get$length(buffer),totalByteCount))throw $.$$throw($.QrInputTooLongException_QrInputTooLongException($.get$length(buffer),totalByteCount));if($.leB($.add($.get$length(buffer),4),totalByteCount))buffer.put$2(0,4);for(;!$.eqB($.mod($.get$length(buffer),8),0);)buffer.putBit$1(false);for(;true;){if($.geB($.get$length(buffer),totalByteCount))break;buffer.put$2(236,8);if($.geB($.get$length(buffer),totalByteCount))break;buffer.put$2(17,8);}return $.QrCode__createBytes(buffer,rsBlocks);var t1;};

$._HttpRequestUploadEventsImpl$ = function(_ptr){return new $._HttpRequestUploadEventsImpl(_ptr);};

$.lastIndexOf$2 = function(receiver,element,start){if($.isJsArray(receiver))return $.Arrays_lastIndexOf(receiver,element,start);else if(typeof receiver==='string'){$.checkNull(element);if(!(typeof element==='string'))throw $.$$throw($.IllegalArgumentException$(element));if(!(start==null)){if(!(typeof start==='number'))throw $.$$throw($.IllegalArgumentException$(start));if(start<0)return -1;var t1=receiver.length;if(start>=t1){if(element==='')return t1;start=t1-1;}else start=start;}return $.stringLastIndexOfUnchecked(receiver,element,start);}return receiver.lastIndexOf$2(element,start);};

$._PendingSendPortFinder$ = function(){var t1=$._MessageTraverserVisitedMap$();t1=new $._PendingSendPortFinder([],t1);t1._PendingSendPortFinder$0();return t1;};

$.Futures_wait = function(futures){var t1={};if(typeof futures!=='string'&&(typeof futures!=='object'||futures===null||futures.constructor!==Array&&!futures.is$JavaScriptIndexingBehavior()))return $.Futures_wait$bailout(1,futures,t1);if($.isEmpty(futures)===true)return $.FutureImpl_FutureImpl$immediate($.CTC0,'List');var completer=$.CompleterImpl$('List');var result=completer.get$future();t1.remaining_1=futures.length;var values=$.ListImplementation_List(futures.length);for(var i=0;t2=futures.length,i<t2;++i){if(i<0||i>=t2)throw $.ioore(i);var future=futures[i];future.then$1(new $.Futures_wait_anon(completer,i,t1,result,values));future.handleException$1(new $.Futures_wait_anon0(future,completer,result));}return result;var t2;};

$.QrBitBuffer$ = function(){return new $.QrBitBuffer($.ListImplementation_List(null,'int'),0);};

$._MatchImplementation$ = function(pattern,str,_start,_end,_groups){return new $._MatchImplementation(pattern,str,_start,_end,_groups);};

$.checkNull = function(object){if(object==null)throw $.$$throw($.NullPointerException$(null,$.CTC0));return object;};

$.Arrays_copy = function(src,srcStart,dst,dstStart,count){if(typeof src!=='string'&&(typeof src!=='object'||src===null||src.constructor!==Array&&!src.is$JavaScriptIndexingBehavior()))return $.Arrays_copy$bailout(1,src,srcStart,dst,dstStart,count);if(typeof dst!=='object'||dst===null||(dst.constructor!==Array||!!dst.immutable$list)&&!dst.is$JavaScriptIndexingBehavior())return $.Arrays_copy$bailout(1,src,srcStart,dst,dstStart,count);if(srcStart<dstStart)for(var i=srcStart+count-1,j=dstStart+count-1;i>=srcStart;--i,--j){if(i!==(i|0))throw $.iae(i);if(i<0||i>=src.length)throw $.ioore(i);var t1=src[i];if(j!==(j|0))throw $.iae(j);if(j<0||j>=dst.length)throw $.ioore(j);dst[j]=t1;}else for(t1=srcStart+count,i=srcStart,j=dstStart;i<t1;++i,++j){if(i<0||i>=src.length)throw $.ioore(i);var t2=src[i];if(j<0||j>=dst.length)throw $.ioore(j);dst[j]=t2;}};

$._PeerConnection00EventsImpl$ = function(_ptr){return new $._PeerConnection00EventsImpl(_ptr);};

$.QrUtil_getPatternPosition = function(typeNumber){var t1=$.sub(typeNumber,1);if(t1!==(t1|0))throw $.iae(t1);if(t1<0||t1>=40)throw $.ioore(t1);return $.CTC101[t1];};

$._AbstractWorkerEventsImpl$ = function(_ptr){return new $._AbstractWorkerEventsImpl(_ptr);};

$.indexSet = function(a,index,value){if(a.constructor === Array && !a.immutable$list){var key=index >>> 0;if(key===index&&key<a.length){a[key] = value;return;}}$.indexSet$slow(a,index,value);};

$.index$slow = function(a,index){if(typeof a==='string'||$.isJsArray(a)){if(!(typeof index==='number'&&index===(index|0))){if(!(typeof index==='number'))throw $.$$throw($.IllegalArgumentException$(index));if(!($.truncate(index)===index))throw $.$$throw($.IllegalArgumentException$(index));}if($.ltB(index,0)||$.geB(index,$.get$length(a)))throw $.$$throw($.IndexOutOfRangeException$(index));return a[index];}return a.operator$index$1(index);};

$.div = function(a,b){return typeof a==='number'&&typeof b==='number'?a / b:$.div$slow(a,b);};

$.Collections__containsRef = function(c,ref){for(var t1=$.iterator(c);t1.hasNext$0()===true;){var t2=t1.next$0();if(t2==null?ref==null:t2===ref)return true;}return false;};

$.Uri$fromString = function(uri){var t1=$.CTC103.firstMatch$1(uri);return new $.Uri($.Uri__emptyIfNull($.index(t1,1)),$.Uri__emptyIfNull($.index(t1,2)),$.Uri__emptyIfNull($.index(t1,3)),$.Uri__parseIntOrZero($.index(t1,4)),$.Uri__emptyIfNull($.index(t1,5)),$.Uri__emptyIfNull($.index(t1,6)),$.Uri__emptyIfNull($.index(t1,7)));};

$._Lists_lastIndexOf = function(a,element,startIndex){if(typeof a!=='string'&&(typeof a!=='object'||a===null||a.constructor!==Array&&!a.is$JavaScriptIndexingBehavior()))return $._Lists_lastIndexOf$bailout(1,a,element,startIndex);if(typeof startIndex!=='number')return $._Lists_lastIndexOf$bailout(1,a,element,startIndex);if(startIndex<0)return -1;var t1=a.length;if(startIndex>=t1)startIndex=t1-1;for(var i=startIndex;i>=0;--i){if(i!==(i|0))throw $.iae(i);if(i<0||i>=a.length)throw $.ioore(i);if($.eqB(a[i],element))return i;}return -1;};

$._MediaElementEventsImpl$ = function(_ptr){return new $._MediaElementEventsImpl(_ptr);};

$.$$throw = function(ex){if(ex==null)ex=$.CTC1;var jsError=new Error();jsError.name = ex;jsError.description = ex;jsError.dartException = ex;jsError.toString = $.toStringWrapper.call$0;throw jsError;};

$._MessagePortEventsImpl$ = function(_ptr){return new $._MessagePortEventsImpl(_ptr);};

$.QrUtil_getErrorCorrectPolynomial = function(errorCorrectLength){if(typeof errorCorrectLength!=='number')return $.QrUtil_getErrorCorrectPolynomial$bailout(1,errorCorrectLength);var a=$.QrPolynomial_QrPolynomial([1],0);for(var i=0;i<errorCorrectLength;++i)a=a.multiply$1($.QrPolynomial_QrPolynomial([1,$.QrMath_gexp(i)],0));return a;};

$.getTraceFromException = function(exception){return $.StackTrace$(exception.stack);};

$._IsolateEvent$ = function(isolate,fn,message){return new $._IsolateEvent(isolate,fn,message);};

$.Maps__emitMap = function(m,result,visiting){var t1={};$.add$1(visiting,m);$.add$1(result,'{');t1.first_1=true;$.forEach(m,new $.Maps__emitMap_anon(result,t1,visiting));$.add$1(result,'}');$.removeLast(visiting);};

$._MessageTraverser_isPrimitive = function(x){return x==null||typeof x==='string'||typeof x==='number'||typeof x==='boolean';};

$._Deserializer_isPrimitive = function(x){return x==null||typeof x==='string'||typeof x==='number'||typeof x==='boolean';};

$.QrCode$ = function(typeNumber,errorCorrectLevel){var t1=new $.QrCode(typeNumber,errorCorrectLevel,$.add($.mul(typeNumber,4),17),$.ListImplementation_List(null,'List<bool>'),null,null);t1.QrCode$2(typeNumber,errorCorrectLevel);return t1;};

$._qrIsolate = function(){$.SendValuePort$(new $._qrIsolate_anon(),'List','List<bool>');};

$._BatteryManagerEventsImpl$ = function(_ptr){return new $._BatteryManagerEventsImpl(_ptr);};

$.propertySet = function(object,property,value){object[property] = value;};

$._Device_isFirefox = function(){return $.contains$2($._Device_userAgent(),'Firefox',0);};

$.min = function(a,b){if(typeof a==='number'){if(typeof b==='number'){if(a>b)return b;if(a<b)return a;if(typeof b==='number'){if(typeof a==='number')if(a===0)return (a+b)*a*b;if(a===0&&$.isNegative(b)===true||$.isNaN(b)===true)return b;return a;}return a;}throw $.$$throw($.IllegalArgumentException$(b));}throw $.$$throw($.IllegalArgumentException$(a));};

$._IDBOpenDBRequestEventsImpl$ = function(_ptr){return new $._IDBOpenDBRequestEventsImpl(_ptr);};

$._IsolateNatives__newWorker = function(url){return new Worker(url);};

$.checkMutable = function(list,reason){if(!!(list.immutable$list))throw $.$$throw($.UnsupportedOperationException$(reason));};

$.sqrt = function(value){return Math.sqrt($.checkNum(value));};

$.checkGrowable = function(list,reason){if(!!(list.fixed$length))throw $.$$throw($.UnsupportedOperationException$(reason));};

$._serializeMessage = function(message){if($._globalState().get$needSerialization()===true)return $._JsSerializer$().traverse$1(message);else return $._JsCopier$().traverse$1(message);};

$.FutureValueResult_isMyMap = function(value){return !(value==null)&&$.eqB($.get$length(value),2)&&value.containsKey$1('value')===true&&value.containsKey$1('exception')===true;};

$._IsolateNatives__consoleLog = function(msg){$globalThis.console.log(msg);};

$.index = function(a,index){if(typeof a == "string" || a.constructor === Array){var key=index >>> 0;if(key===index&&key<a.length)return a[key];}return $.index$slow(a,index);};

$.IndexOutOfRangeException$ = function(_value){return new $.IndexOutOfRangeException(_value);};

$.le$slow = function(a,b){if($.checkNumbers(a,b))return a <= b;return a.operator$le$1(b);};

$.KeyValuePair$ = function(key,value,K,V){var t1=new $.KeyValuePair(key,value);$.setRuntimeTypeInfo(t1,{ 'K': K, 'V': V });return t1;};

$._DocumentEventsImpl$ = function(_ptr){return new $._DocumentEventsImpl(_ptr);};

$.xor = function(a,b){if($.checkNumbers(a,b))return (a ^ b) >>> 0;return a.operator$xor$1(b);};

$.typeNameInOpera = function(obj){var name$=$.constructorNameFallback(obj);if(name$==='Window')return 'DOMWindow';if(name$==='FormData')return 'DOMFormData';return name$;};

$.last = function(receiver){if(!$.isJsArray(receiver))return receiver.last$0();return $.index(receiver,$.sub($.get$length(receiver),1));};

$.substring$1 = function(receiver,startIndex){if(!(typeof receiver==='string'))return receiver.substring$1(startIndex);return $.substring$2(receiver,startIndex,null);};

$.QrInputTooLongException$_internal = function(providedInput,inputLimit,message){return new $.QrInputTooLongException(providedInput,inputLimit,message);};

$._window = function(){return typeof window != "undefined"?window:null;};

$._IDBVersionChangeRequestEventsImpl$ = function(_ptr){return new $._IDBVersionChangeRequestEventsImpl(_ptr);};

$._MessageTraverserVisitedMap$ = function(){return new $._MessageTraverserVisitedMap();};

$.NullArgumentException$ = function(arg){return new $.NullArgumentException(arg,arg);};

$.FutureNotCompleteException$ = function(){return new $.FutureNotCompleteException();};

$.NotImplementedException$ = function(message){return new $.NotImplementedException(message);};

$._JsSerializer$ = function(){var t1=new $._JsSerializer(0,$._MessageTraverserVisitedMap$());t1._JsSerializer$0();return t1;};

$.QrMath_LOG_TABLE = function(){if($.QrMath__logTable==null){var t=$.QrMath_getZeroedList(256);for(var i=0;i<255;++i){var t1=$.index($.QrMath_EXP_TABLE(),i);if(t1!==(t1|0))throw $.iae(t1);if(t1<0||t1>=t.length)throw $.ioore(t1);t[t1]=i;}$.QrMath__logTable=$.ReadOnlyCollection$wrap(t);}return $.QrMath__logTable;};

$.eq = function(a,b){if(a == null)return b == null;if(b == null)return false;if(typeof a === "object")if(!!a.operator$eq$1)return a.operator$eq$1(b);return a === b;};

$.LinkedHashMapImplementation$ = function(K,V){var t1=new $.LinkedHashMapImplementation(null,null);$.setRuntimeTypeInfo(t1,{ 'K': K, 'V': V });t1.LinkedHashMapImplementation$0();return t1;};

$.NullPointerException$ = function(functionName,arguments$){return new $.NullPointerException(functionName,arguments$);};

$._DoubleLinkedQueueEntrySentinel$ = function(E){var t1=new $._DoubleLinkedQueueEntrySentinel(null,null,null);$.setRuntimeTypeInfo(t1,{ 'E': E });t1.DoubleLinkedQueueEntry$1(null);t1._DoubleLinkedQueueEntrySentinel$0();return t1;};

$.FutureImpl$ = function(T){var t1=new $.FutureImpl(false,null,null,null,false,[],[],[]);$.setRuntimeTypeInfo(t1,{ 'T': T });return t1;};

$.QrByte_QrByte = function(input){$.requireArgumentNotNull(input,'input');var charCodes=$.charCodes(input);for(var t1=$.iterator(charCodes);t1.hasNext$0()===true;)$.requireArgument($.lt(t1.next$0(),255),'ascii-only',null);return $.QrByte$_internal(charCodes);};

$.toStringWrapper = function(){return $.toString(this.dartException);};

$.QrUtil_getBCHDigit = function(data){if(data!==(data|0))return $.QrUtil_getBCHDigit$bailout(1,data);for(var digit=0;!(data===0);){++digit;data=$.shr(data,1);}return digit;};

$._ElementList$ = function(list){return new $._ElementList(list);};

$.gtB = function(a,b){return typeof a==='number'&&typeof b==='number'?a > b:$.gt$slow(a,b)===true;};

$.stringContainsUnchecked = function(receiver,other,startIndex){return !($.indexOf$2(receiver,other,startIndex)===-1);};

$.requireArgument = function(truth,arg,message){if(truth!==true)if(!(message==null))throw $.$$throw($.DetailedIllegalArgumentException$(arg,message));else throw $.$$throw($.IllegalArgumentException$(arg));};

$.shl = function(a,b){if($.checkNumbers(a,b)){if(b<0)throw $.$$throw($.IllegalArgumentException$(b));if(b > 31)return 0;return (a << b) >>> 0;}return a.operator$shl$1(b);};

$.Primitives_objectToString = function(object){return 'Instance of \''+$.S($.Primitives_objectTypeName(object))+'\'';};

$.defineProperty = function(obj,property,value){Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: true, configurable: true});};

$._currentIsolate = function(){return $._globalState().get$currentContext();};

$.QrRsBlock$ = function(totalCount,dataCount){return new $.QrRsBlock(totalCount,dataCount);};

$.insertRange$3 = function(receiver,start,length$,initialValue){if(!$.isJsArray(receiver))return receiver.insertRange$3(start,length$,initialValue);return $.listInsertRange(receiver,start,length$,initialValue);};

$.lt = function(a,b){return typeof a==='number'&&typeof b==='number'?a < b:$.lt$slow(a,b);};

$._FileWriterEventsImpl$ = function(_ptr){return new $._FileWriterEventsImpl(_ptr);};

$._Manager$ = function(){var t1=new $._Manager(0,0,1,null,null,null,null,null,null,null,null,null);t1._Manager$0();return t1;};

$._NotificationEventsImpl$ = function(_ptr){return new $._NotificationEventsImpl(_ptr);};

$.regExpGetNative = function(regExp){var r=regExp._re;return r==null?regExp._re = $.regExpMakeNative(regExp,false):r;};

$.sub = function(a,b){return typeof a==='number'&&typeof b==='number'?a - b:$.sub$slow(a,b);};

$.DoubleLinkedQueueEntry$ = function(e,E){var t1=new $.DoubleLinkedQueueEntry(null,null,null);$.setRuntimeTypeInfo(t1,{ 'E': E });t1.DoubleLinkedQueueEntry$1(e);return t1;};

$.QrPolynomial_QrPolynomial$bailout = function(state,thing,shift){var offset=0;while(true){if(!($.ltB(offset,$.get$length(thing))&&$.eqB($.index(thing,offset),0)))break;++offset;}var values=$.QrMath_getZeroedList($.add($.sub($.get$length(thing),offset),shift));for(var i=0;$.ltB(i,$.sub($.get$length(thing),offset));++i){var t1=$.index(thing,i+offset);if(i<0||i>=values.length)throw $.ioore(i);values[i]=t1;}return $.QrPolynomial$_internal(values);};

$._Lists_lastIndexOf$bailout = function(state,a,element,startIndex){if($.ltB(startIndex,0))return -1;if($.geB(startIndex,$.get$length(a)))startIndex=$.sub($.get$length(a),1);for(var i=startIndex;$.geB(i,0);i=$.sub(i,1))if($.eqB($.index(a,i),element))return i;return -1;};

$.Arrays_lastIndexOf$bailout = function(state,a,element,startIndex){if($.ltB(startIndex,0))return -1;if($.geB(startIndex,$.get$length(a)))startIndex=$.sub($.get$length(a),1);for(var i=startIndex;$.geB(i,0);i=$.sub(i,1))if($.eqB($.index(a,i),element))return i;return -1;};

$._Lists_indexOf$bailout = function(state,a,element,startIndex,endIndex){if($.geB(startIndex,$.get$length(a)))return -1;if($.ltB(startIndex,0))startIndex=0;for(var i=startIndex;$.ltB(i,endIndex);i=$.add(i,1))if($.eqB($.index(a,i),element))return i;return -1;};

$.Arrays_indexOf$bailout = function(state,a,element,startIndex,endIndex){if($.geB(startIndex,$.get$length(a)))return -1;if(startIndex<0)startIndex=0;for(var i=startIndex;i<endIndex;++i)if($.eqB($.index(a,i),element))return i;return -1;};

$.QrCode__createBytes$bailout = function(state,env0,env1,env2,env3,env4,env5,env6,env7,env8,env9,env10,env11){switch(state){case 1:var buffer=env0;var rsBlocks=env1;break;case 2:buffer=env0;rsBlocks=env1;dcCount=env2;dcdata=env3;ecCount=env4;maxDcCount=env5;t1=env6;ecdata=env7;maxEcCount=env8;r=env9;offset=env10;i=env11;break;case 3:r=env0;buffer=env1;rsBlocks=env2;modPoly=env3;dcdata=env4;maxDcCount=env5;offset=env6;ecdata=env7;maxEcCount=env8;rsPoly=env9;break;case 4:buffer=env0;rsBlocks=env1;modPoly=env2;dcdata=env3;maxDcCount=env4;ecdata=env5;maxEcCount=env6;r=env7;modIndex=env8;t2=env9;offset=env10;i=env11;break;case 5:r=env0;t1=env1;maxEcCount=env2;rsBlocks=env3;maxDcCount=env4;i=env5;data=env6;dcdata=env7;ecdata=env8;break;case 6:rsBlocks=env0;r=env1;data=env2;t1=env3;ecdata=env4;i=env5;break;}switch(state){case 0:case 1:state=0;var dcdata=$.ListImplementation_List($.get$length(rsBlocks),'List');var ecdata=$.ListImplementation_List($.get$length(rsBlocks),'List');var r=0;var maxEcCount=0;var maxDcCount=0;var offset=0;default:L0:while(true)switch(state){case 0:if(!$.ltB(r,$.get$length(rsBlocks)))break L0;var dcCount=$.index(rsBlocks,r).get$dataCount();var ecCount=$.sub($.index(rsBlocks,r).get$totalCount(),dcCount);maxDcCount=$.max(maxDcCount,dcCount);maxEcCount=$.max(maxEcCount,ecCount);var t1=$.QrMath_getZeroedList(dcCount);if(r<0||r>=dcdata.length)throw $.ioore(r);dcdata[r]=t1;var i=0;case 2:L1:while(true)switch(state){case 0:if(r<0||r>=dcdata.length)throw $.ioore(r);if(!$.ltB(i,$.get$length(dcdata[r])))break L1;if(r<0||r>=dcdata.length)throw $.ioore(r);t1=dcdata[r];case 2:state=0;var t3=buffer.getByte$1(i+offset);if(typeof t3!=='number')throw $.iae(t3);$.indexSet(t1,i,255&t3);++i;}if(typeof dcCount!=='number')throw $.iae(dcCount);offset+=dcCount;var rsPoly=$.QrUtil_getErrorCorrectPolynomial(ecCount);if(r<0||r>=dcdata.length)throw $.ioore(r);var modPoly=$.QrPolynomial_QrPolynomial(dcdata[r],$.sub($.get$length(rsPoly),1)).mod$1(rsPoly);case 3:state=0;var t2=$.QrMath_getZeroedList($.sub($.get$length(rsPoly),1));if(r<0||r>=ecdata.length)throw $.ioore(r);ecdata[r]=t2;i=0;case 4:L2:while(true)switch(state){case 0:if(r<0||r>=ecdata.length)throw $.ioore(r);if(!$.ltB(i,$.get$length(ecdata[r])))break L2;t1=$.get$length(modPoly);if(typeof t1!=='number')throw $.iae(t1);t1=i+t1;if(r<0||r>=ecdata.length)throw $.ioore(r);t2=$.get$length(ecdata[r]);if(typeof t2!=='number')throw $.iae(t2);var modIndex=t1-t2;if(r<0||r>=ecdata.length)throw $.ioore(r);t2=ecdata[r];case 4:state=0;$.indexSet(t2,i,modIndex>=0?$.index(modPoly,modIndex):0);++i;}++r;}for(var totalCodeCount=0,i=0;$.ltB(i,$.get$length(rsBlocks));++i){t1=$.index(rsBlocks,i).get$totalCount();if(typeof t1!=='number')throw $.iae(t1);totalCodeCount+=t1;}var data=[];i=0;case 5:L3:while(true)switch(state){case 0:if(!(i<maxDcCount))break L3;r=0;case 5:L4:while(true)switch(state){case 0:if(!$.ltB(r,$.get$length(rsBlocks)))break L4;if(r<0||r>=dcdata.length)throw $.ioore(r);case 5:if(state===5||state===0&&$.ltB(i,$.get$length(dcdata[r])))switch(state){case 0:if(r<0||r>=dcdata.length)throw $.ioore(r);t1=dcdata[r];case 5:state=0;data.push($.index(t1,i));}++r;}++i;}i=0;case 6:L5:while(true)switch(state){case 0:if(!(i<maxEcCount))break L5;r=0;case 6:L6:while(true)switch(state){case 0:if(!$.ltB(r,$.get$length(rsBlocks)))break L6;if(r<0||r>=ecdata.length)throw $.ioore(r);case 6:if(state===6||state===0&&$.ltB(i,$.get$length(ecdata[r])))switch(state){case 0:if(r<0||r>=ecdata.length)throw $.ioore(r);t1=ecdata[r];case 6:state=0;data.push($.index(t1,i));}++r;}++i;}return data;}};

$._Lists_getRange$bailout = function(state,a,start,length$,accumulator){if($.ltB(length$,0))throw $.$$throw($.IllegalArgumentException$('length'));if($.ltB(start,0))throw $.$$throw($.IndexOutOfRangeException$(start));var end=$.add(start,length$);if($.gtB(end,$.get$length(a)))throw $.$$throw($.IndexOutOfRangeException$(end));for(var i=start;$.ltB(i,end);i=$.add(i,1))accumulator.push($.index(a,i));return accumulator;};

$.QrUtil_getErrorCorrectPolynomial$bailout = function(state,errorCorrectLength){var a=$.QrPolynomial_QrPolynomial([1],0);for(var i=0;$.ltB(i,errorCorrectLength);++i)a=a.multiply$1($.QrPolynomial_QrPolynomial([1,$.QrMath_gexp(i)],0));return a;};

$.QrUtil_getBCHDigit$bailout = function(state,data){for(var digit=0;!$.eqB(data,0);){++digit;data=$.shr(data,1);}return digit;};

$.QrCode__createData$bailout = function(state,typeNumber,errorCorrectLevel,dataList){var rsBlocks=$.QrRsBlock_getRSBlocks(typeNumber,errorCorrectLevel);var buffer=$.QrBitBuffer$();for(var i=0;$.ltB(i,$.get$length(dataList));++i){var data=$.index(dataList,i);buffer.put$2(data.get$mode(),4);buffer.put$2($.get$length(data),$.QrUtil_getLengthInBits(data.get$mode(),typeNumber));data.write$1(buffer);}for(var i=0,totalDataCount=0;t1=rsBlocks.length,i<t1;++i){if(i<0||i>=t1)throw $.ioore(i);var t2=rsBlocks[i].get$dataCount();if(typeof t2!=='number')throw $.iae(t2);totalDataCount+=t2;}var totalByteCount=totalDataCount*8;if($.gtB($.get$length(buffer),totalByteCount))throw $.$$throw($.QrInputTooLongException_QrInputTooLongException($.get$length(buffer),totalByteCount));if($.leB($.add($.get$length(buffer),4),totalByteCount))buffer.put$2(0,4);for(;!$.eqB($.mod($.get$length(buffer),8),0);)buffer.putBit$1(false);for(;true;){if($.geB($.get$length(buffer),totalByteCount))break;buffer.put$2(236,8);if($.geB($.get$length(buffer),totalByteCount))break;buffer.put$2(17,8);}return $.QrCode__createBytes(buffer,rsBlocks);var t1;};

$.QrUtil_getBCHTypeInfo$bailout = function(state,data,d){for(;$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G15)>=0;)d=$.xor(d,$.shl($.QrUtil_G15,$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G15)));return $.xor($.or($.shl(data,10),d),$.QrUtil_G15_MASK);};

$.Futures_wait$bailout = function(state,futures,t1){if($.isEmpty(futures)===true)return $.FutureImpl_FutureImpl$immediate($.CTC0,'List');var completer=$.CompleterImpl$('List');var result=completer.get$future();t1.remaining_1=$.get$length(futures);var values=$.ListImplementation_List($.get$length(futures));for(var i=0;$.ltB(i,$.get$length(futures));++i){var future=$.index(futures,i);future.then$1(new $.Futures_wait_anon(completer,i,t1,result,values));future.handleException$1(new $.Futures_wait_anon0(future,completer,result));}return result;};

$.Arrays_copy$bailout = function(state,src,srcStart,dst,dstStart,count){if(srcStart<dstStart)for(var i=srcStart+count-1,j=dstStart+count-1;i>=srcStart;--i,--j)$.indexSet(dst,j,$.index(src,i));else for(var t1=srcStart+count,i=srcStart,j=dstStart;i<t1;++i,++j)$.indexSet(dst,j,$.index(src,i));};

$.QrMath_gexp$bailout = function(state,n){for(;$.ltB(n,0);)n=$.add(n,255);for(;$.geB(n,256);)n=$.sub(n,255);return $.index($.QrMath_EXP_TABLE(),n);};

$.StringImplementation__toJsStringArray$bailout = function(state,strings){$.checkNull(strings);var length$=$.get$length(strings);if($.isJsArray(strings)){for(var i=0;$.ltB(i,length$);++i){var string=$.index(strings,i);$.checkNull(string);if(!(typeof string==='string'))throw $.$$throw($.IllegalArgumentException$(string));}var array=strings;}else{array=$.ListImplementation_List(length$);for(i=0;$.ltB(i,length$);++i){string=$.index(strings,i);$.checkNull(string);if(!(typeof string==='string'))throw $.$$throw($.IllegalArgumentException$(string));if(i<0||i>=array.length)throw $.ioore(i);array[i]=string;}}return array;};

$.QrUtil_getLostPoint$bailout = function(state,qrCode,moduleCount){for(var lostPoint=0,col=null,row=0;$.ltB(row,moduleCount);++row)for(col=0;$.ltB(col,moduleCount);++col){var dark=qrCode.isDark$2(row,col);for(var r=-1,sameCount=0;r<=1;++r){var t1=row+r;if(t1<0||$.leB(moduleCount,t1))continue;for(var t2=r===0,c=-1;c<=1;++c){var t3=col+c;if(t3<0||$.leB(moduleCount,t3))continue;if(t2&&c===0)continue;if($.eqB(dark,qrCode.isDark$2(t1,t3)))++sameCount;}}if(sameCount>5)lostPoint+=3+sameCount-5;}for(row=0;$.ltB(row,$.sub(moduleCount,1));++row)for(t1=row+1,col=0;$.ltB(col,$.sub(moduleCount,1));++col){var count=qrCode.isDark$2(row,col)===true?1:0;if(qrCode.isDark$2(t1,col)===true)++count;t2=col+1;if(qrCode.isDark$2(row,t2)===true)++count;if(qrCode.isDark$2(t1,t2)===true)++count;if(count===0||count===4)lostPoint+=3;}for(row=0;$.ltB(row,moduleCount);++row)for(col=0;$.ltB(col,$.sub(moduleCount,6));++col)if(qrCode.isDark$2(row,col)===true&&qrCode.isDark$2(row,col+1)!==true&&qrCode.isDark$2(row,col+2)===true&&qrCode.isDark$2(row,col+3)===true&&qrCode.isDark$2(row,col+4)===true&&qrCode.isDark$2(row,col+5)!==true&&qrCode.isDark$2(row,col+6)===true)lostPoint+=40;for(col=0;$.ltB(col,moduleCount);++col)for(row=0;$.ltB(row,$.sub(moduleCount,6));++row)if(qrCode.isDark$2(row,col)===true&&qrCode.isDark$2(row+1,col)!==true&&qrCode.isDark$2(row+2,col)===true&&qrCode.isDark$2(row+3,col)===true&&qrCode.isDark$2(row+4,col)===true&&qrCode.isDark$2(row+5,col)!==true&&qrCode.isDark$2(row+6,col)===true)lostPoint+=40;for(var darkCount=0,col=0;$.ltB(col,moduleCount);++col)for(row=0;$.ltB(row,moduleCount);++row)darkCount=qrCode.isDark$2(row,col)===true?darkCount+1:darkCount;t1=100*darkCount;if(typeof moduleCount!=='number')throw $.iae(moduleCount);t2=$.mul($.div($.abs(t1/moduleCount/moduleCount-50),5),10);if(typeof t2!=='number')throw $.iae(t2);return lostPoint+t2;};

$.listInsertRange$bailout = function(state,receiver,start,length$,initialValue){if(length$===0)return;$.checkNull(start);$.checkNull(length$);if(!(typeof length$==='number'&&length$===(length$|0)))throw $.$$throw($.IllegalArgumentException$(length$));if(length$<0)throw $.$$throw($.IllegalArgumentException$(length$));var receiverLength=receiver.length;if(start<0||start>receiverLength)throw $.$$throw($.IndexOutOfRangeException$(start));var t1=receiverLength+length$;$.set$length(receiver,t1);var t2=start+length$;$.Arrays_copy(receiver,start,receiver,t2,receiverLength-start);for(var i=start;i<t2;++i)$.indexSet(receiver,i,initialValue);$.set$length(receiver,t1);};

$.QrRsBlock_getRSBlocks$bailout = function(state,env0,env1,env2,env3,env4,env5){switch(state){case 1:rsBlock=env0;break;case 2:t1=env0;count=env1;rsBlock=env2;i=env3;length$=env4;list=env5;break;}switch(state){case 0:var rsBlock=$.QrRsBlock_getRsBlockTable(typeNumber,errorCorrectLevel);case 1:state=0;var length$=$.tdiv($.get$length(rsBlock),3);var list=$.ListImplementation_List(null,'QrRsBlock');var i=0;case 2:L0:while(true)switch(state){case 0:if(!$.ltB(i,length$))break L0;var t1=i*3;var count=$.index(rsBlock,t1+0);case 2:state=0;var totalCount=$.index(rsBlock,t1+1);var dataCount=$.index(rsBlock,t1+2);for(var j=0;$.ltB(j,count);++j)list.push($.QrRsBlock$(totalCount,dataCount));++i;}return list;}};

$.QrUtil_getBCHTypeNumber$bailout = function(state,data,d){for(;$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G18)>=0;)d=$.xor(d,$.shl($.QrUtil_G18,$.QrUtil_getBCHDigit(d)-$.QrUtil_getBCHDigit($.QrUtil_G18)));return $.or($.shl(data,12),d);};

$.dynamicBind.call$4 = $.dynamicBind;
$.dynamicBind.$name = "dynamicBind";
$.toStringWrapper.call$0 = $.toStringWrapper;
$.toStringWrapper.$name = "toStringWrapper";
$.typeNameInFirefox.call$1 = $.typeNameInFirefox;
$.typeNameInFirefox.$name = "typeNameInFirefox";
$.typeNameInSafari.call$1 = $.typeNameInSafari;
$.typeNameInSafari.$name = "typeNameInSafari";
$.constructorNameFallback.call$1 = $.constructorNameFallback;
$.constructorNameFallback.$name = "constructorNameFallback";
$.typeNameInChrome.call$1 = $.typeNameInChrome;
$.typeNameInChrome.$name = "typeNameInChrome";
$._qrIsolate.call$0 = $._qrIsolate;
$._qrIsolate.$name = "_qrIsolate";
$.typeNameInIE.call$1 = $.typeNameInIE;
$.typeNameInIE.$name = "typeNameInIE";
$.invokeClosure.call$5 = $.invokeClosure;
$.invokeClosure.$name = "invokeClosure";
$._timerFactory.call$3 = $._timerFactory;
$._timerFactory.$name = "_timerFactory";
$.typeNameInOpera.call$1 = $.typeNameInOpera;
$.typeNameInOpera.$name = "typeNameInOpera";
Isolate.$finishClasses($$);
$$ = {};
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC0 = Isolate.makeConstantList([]);
$.CTC46 = Isolate.makeConstantList([2, 60, 38, 2, 61, 39]);
$.CTC50 = Isolate.makeConstantList([3, 58, 36, 2, 59, 37]);
$.CTC51 = Isolate.makeConstantList([4, 36, 16, 4, 37, 17]);
$.CTC36 = Isolate.makeConstantList([2, 33, 11, 2, 34, 12]);
$.CTC55 = Isolate.makeConstantList([6, 43, 19, 2, 44, 20]);
$.CTC43 = Isolate.makeConstantList([2, 32, 14, 4, 33, 15]);
$.CTC47 = Isolate.makeConstantList([4, 40, 18, 2, 41, 19]);
$.CTC17 = Isolate.makeConstantList([1, 26, 19]);
$.CTC44 = Isolate.makeConstantList([4, 39, 13, 1, 40, 14]);
$.CTC52 = Isolate.makeConstantList([4, 36, 12, 4, 37, 13]);
$.CTC18 = Isolate.makeConstantList([1, 26, 16]);
$.CTC14 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC97 = Isolate.makeConstantList([6, 28, 54, 80, 106, 132, 158]);
$.CTC21 = Isolate.makeConstantList([1, 44, 34]);
$.CTC30 = Isolate.makeConstantList([2, 50, 32]);
$.CTC37 = Isolate.makeConstantList([2, 86, 68]);
$.CTC20 = Isolate.makeConstantList([1, 26, 9]);
$.CTC63 = Isolate.makeConstantList([6, 22]);
$.CTC32 = Isolate.makeConstantList([4, 25, 9]);
$.CTC48 = Isolate.makeConstantList([4, 40, 14, 2, 41, 15]);
$.CTC19 = Isolate.makeConstantList([1, 26, 13]);
$.CTC62 = Isolate.makeConstantList([6, 18]);
$.CTC65 = Isolate.makeConstantList([6, 30]);
$.CTC84 = Isolate.makeConstantList([6, 28, 54, 80, 106]);
$.CTC45 = Isolate.makeConstantList([2, 121, 97]);
$.CTC82 = Isolate.makeConstantList([6, 26, 50, 74, 98]);
$.CTC35 = Isolate.makeConstantList([2, 33, 15, 2, 34, 16]);
$.CTC54 = Isolate.makeConstantList([4, 69, 43, 1, 70, 44]);
$.CTC6 = new Isolate.$isolateProperties.NotImplementedException('structured clone of RegExp');
$.CTC40 = Isolate.makeConstantList([4, 43, 15]);
$.CTC98 = Isolate.makeConstantList([6, 32, 58, 84, 110, 136, 162]);
$.CTC56 = Isolate.makeConstantList([6, 43, 15, 2, 44, 16]);
$.CTC8 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Blob');
$.CTC53 = Isolate.makeConstantList([2, 86, 68, 2, 87, 69]);
$.CTC66 = Isolate.makeConstantList([6, 34]);
$.CTC58 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot insertRange on immutable List.');
$.CTC85 = Isolate.makeConstantList([6, 32, 58, 84, 110]);
$.CTC31 = Isolate.makeConstantList([2, 50, 24]);
$.CTC70 = Isolate.makeConstantList([6, 28, 50]);
$.CTC42 = Isolate.makeConstantList([4, 49, 31]);
$.CTC64 = Isolate.makeConstantList([6, 26]);
$.CTC28 = Isolate.makeConstantList([2, 35, 13]);
$.CTC102 = Isolate.makeConstantList([1, 0, 3, 2]);
$.CTC41 = Isolate.makeConstantList([2, 98, 78]);
$.CTC71 = Isolate.makeConstantList([6, 30, 54]);
$.CTC27 = Isolate.makeConstantList([2, 35, 17]);
$.CTC22 = Isolate.makeConstantList([1, 44, 28]);
$.CTC69 = Isolate.makeConstantList([6, 26, 46]);
$.CTC83 = Isolate.makeConstantList([6, 30, 54, 78, 102]);
$.CTC38 = Isolate.makeConstantList([4, 43, 27]);
$.CTC10 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBuffer');
$.CTC29 = Isolate.makeConstantList([1, 100, 80]);
$.CTC61 = new Isolate.$isolateProperties.NotImplementedException('must be implemented by subclass');
$.CTC72 = Isolate.makeConstantList([6, 32, 58]);
$.CTC67 = Isolate.makeConstantList([6, 22, 38]);
$.CTC68 = Isolate.makeConstantList([6, 24, 42]);
$.CTC23 = Isolate.makeConstantList([1, 44, 22]);
$.CTC39 = Isolate.makeConstantList([4, 43, 19]);
$.CTC24 = Isolate.makeConstantList([1, 44, 16]);
$.CTC73 = Isolate.makeConstantList([6, 34, 62]);
$.CTC1 = new Isolate.$isolateProperties.NullPointerException(null, Isolate.$isolateProperties.CTC0);
$.CTC13 = new Isolate.$isolateProperties.EmptyQueueException();
$.CTC80 = Isolate.makeConstantList([6, 34, 62, 90]);
$.CTC3 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot removeLast on immutable List.');
$.CTC60 = new Isolate.$isolateProperties.NotImplementedException(null);
$.CTC81 = Isolate.makeConstantList([6, 28, 50, 72, 94]);
$.CTC2 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC100 = Isolate.makeConstantList([6, 30, 58, 86, 114, 142, 170]);
$.CTC74 = Isolate.makeConstantList([6, 26, 46, 66]);
$.CTC75 = Isolate.makeConstantList([6, 26, 48, 70]);
$.CTC76 = Isolate.makeConstantList([6, 26, 50, 74]);
$.CTC77 = Isolate.makeConstantList([6, 30, 54, 78]);
$.CTC78 = Isolate.makeConstantList([6, 30, 56, 82]);
$.CTC79 = Isolate.makeConstantList([6, 30, 58, 86]);
$.CTC86 = Isolate.makeConstantList([6, 30, 58, 86, 114]);
$.CTC87 = Isolate.makeConstantList([6, 34, 62, 90, 118]);
$.CTC88 = Isolate.makeConstantList([6, 26, 50, 74, 98, 122]);
$.CTC89 = Isolate.makeConstantList([6, 30, 54, 78, 102, 126]);
$.CTC90 = Isolate.makeConstantList([6, 26, 52, 78, 104, 130]);
$.CTC91 = Isolate.makeConstantList([6, 30, 56, 82, 108, 134]);
$.CTC92 = Isolate.makeConstantList([6, 34, 60, 86, 112, 138]);
$.CTC93 = Isolate.makeConstantList([6, 30, 58, 86, 114, 142]);
$.CTC94 = Isolate.makeConstantList([6, 34, 62, 90, 118, 146]);
$.CTC95 = Isolate.makeConstantList([6, 30, 54, 78, 102, 126, 150]);
$.CTC96 = Isolate.makeConstantList([6, 24, 50, 76, 102, 128, 154]);
$.CTC99 = Isolate.makeConstantList([6, 26, 54, 82, 110, 138, 166]);
$.CTC101 = Isolate.makeConstantList([Isolate.$isolateProperties.CTC0, Isolate.$isolateProperties.CTC62, Isolate.$isolateProperties.CTC63, Isolate.$isolateProperties.CTC64, Isolate.$isolateProperties.CTC65, Isolate.$isolateProperties.CTC66, Isolate.$isolateProperties.CTC67, Isolate.$isolateProperties.CTC68, Isolate.$isolateProperties.CTC69, Isolate.$isolateProperties.CTC70, Isolate.$isolateProperties.CTC71, Isolate.$isolateProperties.CTC72, Isolate.$isolateProperties.CTC73, Isolate.$isolateProperties.CTC74, Isolate.$isolateProperties.CTC75, Isolate.$isolateProperties.CTC76, Isolate.$isolateProperties.CTC77, Isolate.$isolateProperties.CTC78, Isolate.$isolateProperties.CTC79, Isolate.$isolateProperties.CTC80, Isolate.$isolateProperties.CTC81, Isolate.$isolateProperties.CTC82, Isolate.$isolateProperties.CTC83, Isolate.$isolateProperties.CTC84, Isolate.$isolateProperties.CTC85, Isolate.$isolateProperties.CTC86, Isolate.$isolateProperties.CTC87, Isolate.$isolateProperties.CTC88, Isolate.$isolateProperties.CTC89, Isolate.$isolateProperties.CTC90, Isolate.$isolateProperties.CTC91, Isolate.$isolateProperties.CTC92, Isolate.$isolateProperties.CTC93, Isolate.$isolateProperties.CTC94, Isolate.$isolateProperties.CTC95, Isolate.$isolateProperties.CTC96, Isolate.$isolateProperties.CTC97, Isolate.$isolateProperties.CTC98, Isolate.$isolateProperties.CTC99, Isolate.$isolateProperties.CTC100]);
$.CTC106 = new Isolate.$isolateProperties.UnsupportedOperationException('');
$.CTC108 = new Isolate.$isolateProperties.ConstantMap(0, {}, Isolate.$isolateProperties.CTC0);
$.CTC109 = new Isolate.$isolateProperties.IllegalAccessException();
$.CTC110 = new Isolate.$isolateProperties.Object();
$.CTC34 = Isolate.makeConstantList([2, 67, 43]);
$.CTC26 = Isolate.makeConstantList([1, 70, 44]);
$.CTC25 = Isolate.makeConstantList([1, 70, 55]);
$.CTC33 = Isolate.makeConstantList([1, 134, 108]);
$.CTC49 = Isolate.makeConstantList([2, 146, 116]);
$.CTC57 = Isolate.makeConstantList([Isolate.$isolateProperties.CTC17, Isolate.$isolateProperties.CTC18, Isolate.$isolateProperties.CTC19, Isolate.$isolateProperties.CTC20, Isolate.$isolateProperties.CTC21, Isolate.$isolateProperties.CTC22, Isolate.$isolateProperties.CTC23, Isolate.$isolateProperties.CTC24, Isolate.$isolateProperties.CTC25, Isolate.$isolateProperties.CTC26, Isolate.$isolateProperties.CTC27, Isolate.$isolateProperties.CTC28, Isolate.$isolateProperties.CTC29, Isolate.$isolateProperties.CTC30, Isolate.$isolateProperties.CTC31, Isolate.$isolateProperties.CTC32, Isolate.$isolateProperties.CTC33, Isolate.$isolateProperties.CTC34, Isolate.$isolateProperties.CTC35, Isolate.$isolateProperties.CTC36, Isolate.$isolateProperties.CTC37, Isolate.$isolateProperties.CTC38, Isolate.$isolateProperties.CTC39, Isolate.$isolateProperties.CTC40, Isolate.$isolateProperties.CTC41, Isolate.$isolateProperties.CTC42, Isolate.$isolateProperties.CTC43, Isolate.$isolateProperties.CTC44, Isolate.$isolateProperties.CTC45, Isolate.$isolateProperties.CTC46, Isolate.$isolateProperties.CTC47, Isolate.$isolateProperties.CTC48, Isolate.$isolateProperties.CTC49, Isolate.$isolateProperties.CTC50, Isolate.$isolateProperties.CTC51, Isolate.$isolateProperties.CTC52, Isolate.$isolateProperties.CTC53, Isolate.$isolateProperties.CTC54, Isolate.$isolateProperties.CTC55, Isolate.$isolateProperties.CTC56]);
$.CTC4 = new Isolate.$isolateProperties._Default();
$.CTC12 = new Isolate.$isolateProperties.NotImplementedException('structured clone of other type');
$.CTC59 = new Isolate.$isolateProperties.UnsupportedOperationException('Mutation operations are not supported');
$.CTC9 = new Isolate.$isolateProperties.NotImplementedException('structured clone of FileList');
$.CTC104 = new Isolate.$isolateProperties.EventArgs();
$.CTC105 = new Isolate.$isolateProperties.InvalidOperationException('The input sequence is empty.');
$.CTC15 = new Isolate.$isolateProperties.NotImplementedException('IDBKey containing Date');
$.CTC5 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Date');
$.CTC7 = new Isolate.$isolateProperties.NotImplementedException('structured clone of File');
$.CTC16 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot add to immutable List.');
$.CTC107 = new Isolate.$isolateProperties.IllegalArgumentException('Invalid list length');
$.CTC103 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$');
$.CTC11 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBufferView');
$._SPAWNED_SIGNAL = 'spawned';
$.Uri__COMPONENT_PATH = 5;
$.HashMapImplementation__DELETED_KEY = Isolate.$isolateProperties.CTC14;
$._BufferingSendPort__idCount = 0;
$.QrMath__logTable = null;
$.QrRsBlock__rsBlockTable = Isolate.$isolateProperties.CTC57;
$.Uri__COMPONENT_PORT = 4;
$._lazyPort = null;
$.Uri__COMPONENT_SCHEME = 1;
$.HashMapImplementation__INITIAL_CAPACITY = 8;
$.QrMath__expTable = null;
$.GlobalId__globalId = 0;
$.QrUtil_G15 = 1335;
$.Uri__splitRe = Isolate.$isolateProperties.CTC103;
$.Uri__COMPONENT_USER_INFO = 2;
$.Uri__COMPONENT_FRAGMENT = 7;
$._ReceivePortImpl__nextFreeId = 1;
$._TimerFactory__factory = null;
$._cachedBrowserPrefix = null;
$.Primitives_DOLLAR_CHAR_VALUE = 36;
$.QrUtil_G15_MASK = 21522;
$.Uri__COMPONENT_DOMAIN = 3;
$.QrUtil_G18 = 7973;
$.Uri__COMPONENT_QUERY_DATA = 6;
$._getTypeNameOf = null;
var $ = null;
Isolate.$finishClasses($$);
$$ = {};
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
$.$defineNativeClass = function(cls, fields, methods) {
  var generateGetterSetter =   function(field, prototype) {
    var len = field.length;
    var lastChar = field[len - 1];
    var needsGetter = lastChar == '?' || lastChar == '=';
    var needsSetter = lastChar == '!' || lastChar == '=';
    if (needsGetter || needsSetter) field = field.substring(0, len - 1);
    if (needsGetter) {
      var getterString = "return this." + field + ";";
        prototype["get$" + field] = new Function(getterString);
    }
    if (needsSetter) {
      var setterString = "this." + field + " = v;";
      prototype["set$" + field] = new Function("v", setterString);
    }
    return field;
  };
  for (var i = 0; i < fields.length; i++) {
    generateGetterSetter(fields[i], methods);
  }
  for (var method in methods) {
    $.dynamicFunction(method)[cls] = methods[method];
  }
};

(function(table) {
  for (var key in table) {
    $.defineProperty(Object.prototype, key, table[key]);
  }
})({
 is$JavaScriptIndexingBehavior: function() { return false; },
 is$ArrayBufferView: function() { return false; },
 is$_BlobImpl: function() { return false; },
 is$_FileListImpl: function() { return false; },
 is$_ImageDataImpl: function() { return false; },
 is$_FileImpl: function() { return false; },
 is$_ArrayBufferViewImpl: function() { return false; },
 toString$0: function() { return $.toStringForNativeObject(this); },
 is$Blob: function() { return false; },
 is$ArrayBuffer: function() { return false; },
 is$File: function() { return false; },
 is$Element: function() { return false; },
 is$Map: function() { return false; },
 is$List: function() { return false; },
 is$_ArrayBufferImpl: function() { return false; },
 is$Collection: function() { return false; },
 is$FileList: function() { return false; },
 is$ImageData: function() { return false; }
});

$.$defineNativeClass('AbstractWorker', [], {
 get$on: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {return $._AbstractWorkerEventsImpl$(this);}  } else {
    return Object.prototype.get$on.call(this);
  }
},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLAnchorElement', ["name=", "target!", "type!"], {
 toString$0: function(){return this.toString();},
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebKitAnimation', ["name?"], {
});

$.$defineNativeClass('WebKitAnimationList', ["length?"], {
});

$.$defineNativeClass('HTMLAppletElement', ["height?", "name=", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAreaElement', ["target!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ArrayBuffer', [], {
 is$_ArrayBufferImpl: function() { return true; },
 is$ArrayBuffer: function() { return true; }
});

$.$defineNativeClass('ArrayBufferView', [], {
 is$_ArrayBufferViewImpl: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Attr', ["name?", "value="], {
});

$.$defineNativeClass('AudioBuffer', ["length?"], {
});

$.$defineNativeClass('AudioContext', [], {
 get$on: function(){return $._AudioContextEventsImpl$(this);}
});

$.$defineNativeClass('HTMLAudioElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('AudioParam', ["name?", "value="], {
});

$.$defineNativeClass('HTMLBRElement', [], {
 clear$0: function() { return this.clear.call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLBaseElement', ["target!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLBaseFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('BatteryManager', [], {
 get$on: function(){return $._BatteryManagerEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('BiquadFilterNode', ["type!"], {
});

$.$defineNativeClass('Blob', [], {
 is$_BlobImpl: function() { return true; },
 is$Blob: function() { return true; }
});

$.$defineNativeClass('HTMLBodyElement', ["background!"], {
 get$on: function(){return $._BodyElementEventsImpl$(this);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLButtonElement', ["name=", "type!", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('CSSFontFaceRule', ["style?"], {
});

$.$defineNativeClass('WebKitCSSKeyframeRule', ["style?"], {
});

$.$defineNativeClass('WebKitCSSKeyframesRule', ["name="], {
});

$.$defineNativeClass('WebKitCSSMatrix', [], {
 multiply$1: function(secondMatrix){return this.multiply(secondMatrix);},
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('CSSPageRule', ["style?"], {
});

$.$defineNativeClass('CSSRuleList', ["length?"], {
});

$.$defineNativeClass('CSSStyleDeclaration', ["length?"], {
 getPropertyValue$1: function(propertyName){return this.getPropertyValue(propertyName);},
 setProperty$3: function(propertyName,value,priority){return this.setProperty(propertyName,value,priority);},
 set$background: function(value){this.setProperty$3('background',value,'');},
 get$clear: function(){return this.getPropertyValue$1('clear');},
 clear$0: function() { return this.get$clear().call$0(); },
 get$filter: function(){return this.getPropertyValue$1($.S($._browserPrefix())+'filter');},
 filter$1: function(arg0) { return this.get$filter().call$1(arg0); },
 get$height: function(){return this.getPropertyValue$1('height');},
 get$width: function(){return this.getPropertyValue$1('width');}
});

$.$defineNativeClass('CSSStyleRule', ["style?"], {
});

$.$defineNativeClass('CSSValueList', ["length?"], {
});

$.$defineNativeClass('HTMLCanvasElement', ["height?", "width?"], {
 getContext$1: function(contextId){return this.getContext(contextId);},
 get$context2d: function(){return this.getContext$1('2d');},
 is$Element: function() { return true; }
});

$.$defineNativeClass('CanvasRenderingContext2D', ["fillStyle!"], {
 clearRect$4: function(x,y,width,height){return this.clearRect(x,y,width,height);},
 fillRect$4: function(x,y,width,height){return this.fillRect(x,y,width,height);},
 setTransform$6: function(m11,m12,m21,m22,dx,dy){return this.setTransform(m11,m12,m21,m22,dx,dy);}
});

$.$defineNativeClass('CharacterData', ["length?"], {
});

$.$defineNativeClass('ClientRect', ["height?", "width?"], {
});

$.$defineNativeClass('ClientRectList', ["length?"], {
});

_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
_ConsoleImpl.error$1 = function(arg){return this.error(arg);};
_ConsoleImpl.get$error = function() { return new $.BoundClosure0(this, 'error$1'); };
$.$defineNativeClass('HTMLContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('DOMApplicationCache', [], {
 get$on: function(){return $._DOMApplicationCacheEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 update$0: function(){return this.update();}
});

$.$defineNativeClass('DOMError', ["name?"], {
});

$.$defineNativeClass('DOMException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('DOMFileSystem', ["name?"], {
});

$.$defineNativeClass('DOMFileSystemSync', ["name?"], {
});

$.$defineNativeClass('DOMMimeTypeArray', ["length?"], {
});

$.$defineNativeClass('DOMPlugin', ["length?", "name?"], {
});

$.$defineNativeClass('DOMPluginArray', ["length?"], {
});

$.$defineNativeClass('DOMSelection', [], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('DOMSettableTokenList', ["value="], {
});

$.$defineNativeClass('DOMStringList', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'String');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('DOMTokenList', ["length?"], {
 add$1: function(token){return this.add(token);},
 remove$1: function(token){return this.remove(token);},
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('HTMLDataListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('DataTransferItemList', ["length?"], {
 add$2: function(data_OR_file,type){return this.add(data_OR_file,type);},
 add$1: function(data_OR_file) {
  return this.add(data_OR_file);
},
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('DataView', [], {
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('DedicatedWorkerContext', [], {
 get$on: function(){return $._DedicatedWorkerContextEventsImpl$(this);},
 postMessage$2: function(message,messagePorts){return this.postMessage(message,messagePorts);},
 postMessage$1: function(message) {
  return this.postMessage(message);
}
});

$.$defineNativeClass('HTMLDetailsElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDirectoryElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDivElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDocument', [], {
 get$on: function(){return $._DocumentEventsImpl$(this);},
 $dom_createElement$1: function(tagName){return this.createElement(tagName);},
 $dom_getElementById$1: function(elementId){return this.getElementById(elementId);},
 $dom_querySelector$1: function(selectors){return this.querySelector(selectors);},
 query$1: function(selectors){if($.CTC16.hasMatch$1(selectors)===true)return this.$dom_getElementById$1($.substring$1(selectors,1));return this.$dom_querySelector$1(selectors);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentFragment', [], {
 get$elements: function(){if(this._elements==null)this._elements=$.FilteredElementList$(this);return this._elements;},
 query$1: function(selectors){return this.$dom_querySelector$1(selectors);},
 set$innerHTML: function(value){  if (Object.getPrototypeOf(this).hasOwnProperty('set$innerHTML')) {
  {$.clear(this.get$nodes());var e=$._ElementFactoryProvider_Element$tag('div');e.set$innerHTML(value);var nodes=$.ListImplementation_List$from(e.get$nodes());$.addAll(this.get$nodes(),nodes);}  } else {
    return Object.prototype.set$innerHTML.call(this, value);
  }
},
 get$id: function(){return '';},
 get$$$dom_firstElementChild: function(){return this.get$elements().first$0();},
 get$$$dom_lastElementChild: function(){return $.last(this.get$elements());},
 get$parent: function(){return;},
 get$attributes: function(){return $.CTC108;},
 get$dataAttributes: function(){return $.CTC108;},
 get$style: function(){return $._ElementFactoryProvider_Element$tag('div').get$style();},
 set$id: function(value){throw $.$$throw($.UnsupportedOperationException$('ID can\'t be set for document fragments.'));},
 get$on: function(){return $._ElementEventsImpl$(this);},
 $dom_querySelector$1: function(selectors){return this.querySelector(selectors);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentType', ["name?"], {
});

$.$defineNativeClass('Element', ["id=", "innerHTML!", "style?"], {
 get$attributes: function(){return $._ElementAttributeMap$(this);},
 set$elements: function(value){  if (Object.getPrototypeOf(this).hasOwnProperty('set$elements')) {
  {var elements=this.get$elements();$.clear(elements);$.addAll(elements,value);}  } else {
    return Object.prototype.set$elements.call(this, value);
  }
},
 get$elements: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$elements')) {
  {return $._ChildrenElementList$_wrap(this);}  } else {
    return Object.prototype.get$elements.call(this);
  }
},
 query$1: function(selectors){return this.$dom_querySelector$1(selectors);},
 get$dataAttributes: function(){return $._DataAttributeMap$(this.get$attributes());},
 get$on: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {return $._ElementEventsImpl$(this);}  } else {
    return Object.prototype.get$on.call(this);
  }
},
 get$$$dom_children: function(){return this.children;},
 get$$$dom_firstElementChild: function(){return this.firstElementChild;},
 get$$$dom_lastElementChild: function(){return this.lastElementChild;},
 $dom_getAttribute$1: function(name){return this.getAttribute(name);},
 $dom_hasAttribute$1: function(name){return this.hasAttribute(name);},
 $dom_querySelector$1: function(selectors){return this.querySelector(selectors);},
 $dom_removeAttribute$1: function(name){return this.removeAttribute(name);},
 $dom_setAttribute$2: function(name,value){return this.setAttribute(name,value);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLEmbedElement', ["height?", "name=", "type!", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Entry', ["name?"], {
 remove$2: function(successCallback,errorCallback){return this.remove($.convertDartClosureToJS(successCallback,0),$.convertDartClosureToJS(errorCallback,1));},
 remove$1: function(successCallback) {
  successCallback = $.convertDartClosureToJS(successCallback, 0);
  return this.remove(successCallback);
}
});

$.$defineNativeClass('EntryArray', ["length?"], {
});

$.$defineNativeClass('EntryArraySync', ["length?"], {
});

$.$defineNativeClass('EntrySync', ["name?"], {
 remove$0: function(){return this.remove();}
});

$.$defineNativeClass('Event', ["srcElement?"], {
});

$.$defineNativeClass('EventException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('EventSource', [], {
 get$on: function(){return $._EventSourceEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('EventTarget', [], {
 get$on: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {return $._EventsImpl$(this);}  } else {
    return Object.prototype.get$on.call(this);
  }
},
 $dom_addEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
},
 $dom_removeEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
}
});

$.$defineNativeClass('HTMLFieldSetElement', ["elements?", "name="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('File', ["name?"], {
 is$_FileImpl: function() { return true; },
 is$File: function() { return true; },
 is$Blob: function() { return true; }
});

$.$defineNativeClass('FileException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('FileList', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'File');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$_FileListImpl: function() { return true; },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$FileList: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('FileReader', ["error?"], {
 get$on: function(){return $._FileReaderEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('FileWriter', ["error?", "length?"], {
 get$on: function(){return $._FileWriterEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 write$1: function(data){return this.write(data);}
});

$.$defineNativeClass('FileWriterSync', ["length?"], {
 write$1: function(data){return this.write(data);}
});

$.$defineNativeClass('Float32Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'num');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Float64Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'num');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('HTMLFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFormElement', ["length?", "name=", "target!"], {
 reset$0: function(){return this.reset();},
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameElement', ["height?", "name=", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameSetElement', [], {
 get$on: function(){return $._FrameSetElementEventsImpl$(this);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('Gamepad', ["id?"], {
});

$.$defineNativeClass('GamepadList', ["length?"], {
});

$.$defineNativeClass('HTMLHRElement', ["width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAllCollection', ["length?"], {
});

$.$defineNativeClass('HTMLCollection', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'Node');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLOptionsCollection', [], {
 get$length: function(){return this.length;},
 set$length: function(value){this.length = value;},
 remove$1: function(index){return this.remove(index);},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLHeadElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLHeadingElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('History', ["length?"], {
});

$.$defineNativeClass('HTMLHtmlElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('XMLHttpRequest', [], {
 get$on: function(){return $._HttpRequestEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 send$1: function(data){return this.send(data);}
});

$.$defineNativeClass('XMLHttpRequestException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('XMLHttpRequestUpload', [], {
 get$on: function(){return $._HttpRequestUploadEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('IDBCursor', [], {
 get$key: function(){return $._convertNativeToDart_IDBKey(this.get$_key());},
 get$_key: function(){return this.key;}
});

$.$defineNativeClass('IDBCursorWithValue', [], {
 get$value: function(){return $._convertNativeToDart_IDBAny(this.get$_lib_value());},
 get$_lib_value: function(){return this.value;}
});

$.$defineNativeClass('IDBDatabase', ["name?"], {
 get$on: function(){return $._IDBDatabaseEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('IDBDatabaseException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('IDBIndex', ["name?"], {
});

$.$defineNativeClass('IDBObjectStore', ["name?"], {
 add$2: function(value,key){if(!$.eqB($.CTC4,key))return this._add_1$2($._convertDartToNative_SerializedScriptValue(value),key);return this._add_2$1($._convertDartToNative_SerializedScriptValue(value));},
 add$1: function(value) {
  return this.add$2(value,Isolate.$isolateProperties.CTC4)
},
 _add_1$2: function(value,key){return this.add(value,key);},
 _add_2$1: function(value){return this.add(value);},
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('IDBOpenDBRequest', [], {
 get$on: function(){return $._IDBOpenDBRequestEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('IDBRequest', ["error?"], {
 get$on: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {return $._IDBRequestEventsImpl$(this);}  } else {
    return Object.prototype.get$on.call(this);
  }
},
 $dom_addEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
},
 $dom_removeEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
}
});

$.$defineNativeClass('IDBTransaction', ["error?", "mode?"], {
 get$on: function(){return $._IDBTransactionEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('IDBVersionChangeRequest', [], {
 get$on: function(){return $._IDBVersionChangeRequestEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLIFrameElement', ["height?", "name=", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ImageData', ["height?", "width?"], {
 is$_ImageDataImpl: function() { return true; },
 is$ImageData: function() { return true; }
});

$.$defineNativeClass('HTMLImageElement', ["height?", "name=", "width?"], {
 complete$1: function(arg0) { return this.complete.call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLInputElement', ["height?", "name=", "type!", "value=", "width?"], {
 get$on: function(){return $._InputElementEventsImpl$(this);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('Int16Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Int32Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Int8Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('JavaScriptAudioNode', [], {
 get$on: function(){return $._JavaScriptAudioNodeEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLKeygenElement', ["name="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLIElement', ["type!", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLabelElement', ["htmlFor!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLegendElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLinkElement', ["target!", "type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('LocalMediaStream', [], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('Location', [], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('HTMLMapElement', ["name="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMarqueeElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaController', [], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLMediaElement', ["error?"], {
 get$on: function(){return $._MediaElementEventsImpl$(this);},
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaList', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'String');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('MediaSource', [], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('MediaStream', [], {
 get$on: function(){return $._MediaStreamEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
},
 $dom_removeEventListener$3: function(type,listener,useCapture){  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
}
});

$.$defineNativeClass('MediaStreamList', ["length?"], {
});

$.$defineNativeClass('MediaStreamTrack', [], {
 get$on: function(){return $._MediaStreamTrackEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('MediaStreamTrackList', ["length?"], {
 get$on: function(){return $._MediaStreamTrackListEventsImpl$(this);},
 add$1: function(track){return this.add(track);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 remove$1: function(track){return this.remove(track);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLMenuElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MessageEvent', ["ports?"], {
});

$.$defineNativeClass('MessagePort', [], {
 get$on: function(){return $._MessagePortEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 postMessage$2: function(message,messagePorts){return this.postMessage(message,messagePorts);},
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLMetaElement', ["name="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMeterElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLModElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('NamedNodeMap', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'Node');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Navigator', ["userAgent?"], {
});

$.$defineNativeClass('Node', [], {
 get$nodes: function(){return $._ChildNodeListLazy$(this);},
 remove$0: function(){if(!(this.get$parent()==null))this.get$parent().$dom_removeChild$1(this);return this;},
 replaceWith$1: function(otherNode){try{var parent$=this.get$parent();parent$.$dom_replaceChild$2(otherNode,this);}catch(exception){$.unwrapException(exception);}return this;},
 get$$$dom_attributes: function(){return this.attributes;},
 get$$$dom_childNodes: function(){return this.childNodes;},
 get$parent: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$parent')) {
  {return this.parentNode;}  } else {
    return Object.prototype.get$parent.call(this);
  }
},
 set$text: function(value){this.textContent = value;},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_appendChild$1: function(newChild){return this.appendChild(newChild);},
 $dom_removeChild$1: function(oldChild){return this.removeChild(oldChild);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_replaceChild$2: function(newChild,oldChild){return this.replaceChild(newChild,oldChild);}
});

$.$defineNativeClass('NodeIterator', [], {
 filter$1: function(arg0) { return this.filter.call$1(arg0); }
});

$.$defineNativeClass('NodeList', ["length?"], {
 iterator$0: function(){return $._FixedSizeListIterator$(this,'Node');},
 add$1: function(value){this._parent.$dom_appendChild$1(value);},
 addLast$1: function(value){this._parent.$dom_appendChild$1(value);},
 addAll$1: function(collection){for(var t1=$.iterator(collection);t1.hasNext$0()===true;){var t2=t1.next$0();this._parent.$dom_appendChild$1(t2);}},
 removeLast$0: function(){var result=this.last$0();if(!(result==null))this._parent.$dom_removeChild$1(result);return result;},
 clear$0: function(){this._parent.set$text('');},
 operator$indexSet$2: function(index,value){this._parent.$dom_replaceChild$2(value,this.operator$index$1(index));},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._NodeListWrapper$($._Collections_filter(this,[],f));},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 get$first: function(){return this.operator$index$1(0);},
 first$0: function() { return this.get$first().call$0(); },
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.UnsupportedOperationException$('Cannot insertRange on immutable List.'));},
 getRange$2: function(start,rangeLength){return $._NodeListWrapper$($._Lists_getRange(this,start,rangeLength,[]));},
 operator$index$1: function(index){return this[index];},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Notification', [], {
 get$on: function(){return $._NotificationEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLOListElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLObjectElement', ["height?", "name=", "type!", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptGroupElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptionElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Oscillator', ["type!"], {
});

$.$defineNativeClass('HTMLOutputElement', ["htmlFor!", "name=", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParagraphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParamElement', ["name=", "type!", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('PeerConnection00', [], {
 get$on: function(){return $._PeerConnection00EventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLPreElement', ["width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLProgressElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLQuoteElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('RTCPeerConnection', [], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('RadioNodeList', ["value="], {
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Range', [], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('RangeException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('SQLResultSetRowList', ["length?"], {
});

$.$defineNativeClass('SVGAElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphDefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphItemElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAngle', ["value="], {
});

$.$defineNativeClass('SVGAnimateColorElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateMotionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateTransformElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimationElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCircleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGClipPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGComponentTransferFunctionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCursorElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDefsElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDescElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDocument', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElement', [], {
 get$elements: function(){return $.FilteredElementList$(this);},
 set$elements: function(value){var elements=this.get$elements();$.clear(elements);$.addAll(elements,value);},
 set$innerHTML: function(svg){var container=$._ElementFactoryProvider_Element$tag('div');container.set$innerHTML('<svg version="1.1">'+$.S(svg)+'</svg>');this.set$elements(container.get$elements().get$first().get$elements());},
 get$id: function(){return this.id;},
 set$id: function(value){this.id = value;},
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElementInstance', [], {
 get$on: function(){return $._SVGElementInstanceEventsImpl$(this);}
});

$.$defineNativeClass('SVGElementInstanceList', ["length?"], {
});

$.$defineNativeClass('SVGEllipseElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('SVGFEBlendElement', ["mode?", "height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEColorMatrixElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEComponentTransferElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFECompositeElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEConvolveMatrixElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDiffuseLightingElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDisplacementMapElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDistantLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDropShadowElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFloodElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncAElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncBElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncGElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncRElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEGaussianBlurElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEImageElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeNodeElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMorphologyElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEOffsetElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEPointLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpecularLightingElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpotLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETileElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETurbulenceElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFilterElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceFormatElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceNameElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceSrcElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceUriElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGForeignObjectElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphRefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGHKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGImageElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLength', ["value="], {
});

$.$defineNativeClass('SVGLengthList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGLineElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLinearGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMarkerElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMaskElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMatrix', [], {
 multiply$1: function(secondMatrix){return this.multiply(secondMatrix);}
});

$.$defineNativeClass('SVGMetadataElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMissingGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGNumber', ["value="], {
});

$.$defineNativeClass('SVGNumberList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPathSegList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGPatternElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPointList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGPolygonElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPolylineElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRadialGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRect', ["height?", "width?"], {
});

$.$defineNativeClass('SVGRectElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSVGElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGScriptElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSetElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStopElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStringList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGStyleElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSwitchElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSymbolElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTRefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPositioningElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTransformList', [], {
 clear$0: function(){return this.clear();}
});

$.$defineNativeClass('SVGUseElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGVKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGViewElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Screen', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLScriptElement', ["htmlFor!", "type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLSelectElement', ["length=", "name=", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLShadowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ShadowRoot', ["innerHTML!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SharedWorkerContext', ["name?"], {
 get$on: function(){return $._SharedWorkerContextEventsImpl$(this);}
});

$.$defineNativeClass('SourceBufferList', ["length?"], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('HTMLSourceElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SpeechGrammarList', ["length?"], {
});

$.$defineNativeClass('SpeechInputResultList', ["length?"], {
});

$.$defineNativeClass('SpeechRecognition', [], {
 get$on: function(){return $._SpeechRecognitionEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('SpeechRecognitionResult', ["length?"], {
});

$.$defineNativeClass('SpeechRecognitionResultList', ["length?"], {
});

$.$defineNativeClass('Storage', [], {
 containsKey$1: function(key){return !(this.$dom_getItem$1(key)==null);},
 operator$index$1: function(key){return this.$dom_getItem$1(key);},
 operator$indexSet$2: function(key,value){return this.$dom_setItem$2(key,value);},
 remove$1: function(key){var value=this.operator$index$1(key);this.$dom_removeItem$1(key);return value;},
 clear$0: function(){return this.$dom_clear$0();},
 forEach$1: function(f){for(var i=0;true;++i){var key=this.$dom_key$1(i);if(key==null)return;f.call$2(key,this.operator$index$1(key));}},
 getKeys$0: function(){var keys=[];this.forEach$1(new $._StorageImpl_getKeys_anon(keys));return keys;},
 getValues$0: function(){var values=[];this.forEach$1(new $._StorageImpl_getValues_anon(values));return values;},
 get$length: function(){return this.get$$$dom_length();},
 isEmpty$0: function(){return this.$dom_key$1(0)==null;},
 get$$$dom_length: function(){return this.length;},
 $dom_clear$0: function(){return this.clear();},
 $dom_getItem$1: function(key){return this.getItem(key);},
 $dom_key$1: function(index){return this.key(index);},
 $dom_removeItem$1: function(key){return this.removeItem(key);},
 $dom_setItem$2: function(key,data){return this.setItem(key,data);},
 is$Map: function() { return true; }
});

$.$defineNativeClass('StorageEvent', ["key?"], {
});

$.$defineNativeClass('HTMLStyleElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('StyleSheetList', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'StyleSheet');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTableCaptionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableCellElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableColElement', ["width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableElement', ["width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableRowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableSectionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTextAreaElement', ["name=", "value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TextMetrics', ["width?"], {
});

$.$defineNativeClass('TextTrack', ["mode?"], {
 get$on: function(){return $._TextTrackEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('TextTrackCue', ["id=", "text!"], {
 get$on: function(){return $._TextTrackCueEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('TextTrackCueList', ["length?"], {
});

$.$defineNativeClass('TextTrackList', ["length?"], {
 get$on: function(){return $._TextTrackListEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('TimeRanges', ["length?"], {
});

$.$defineNativeClass('HTMLTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TouchList', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'Touch');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTrackElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TreeWalker', [], {
 filter$1: function(arg0) { return this.filter.call$1(arg0); }
});

$.$defineNativeClass('HTMLUListElement', ["type!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Uint16Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint32Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint8Array', ["length?"], {
 operator$index$1: function(index){return this[index];},
 operator$indexSet$2: function(index,value){this[index] = value},
 iterator$0: function(){return $._FixedSizeListIterator$(this,'int');},
 add$1: function(value){throw $.$$throw($.CTC);},
 addLast$1: function(value){throw $.$$throw($.CTC);},
 addAll$1: function(collection){throw $.$$throw($.CTC);},
 forEach$1: function(f){return $._Collections_forEach(this,f);},
 filter$1: function(f){return $._Collections_filter(this,[],f);},
 isEmpty$0: function(){return $.eq($.get$length(this),0);},
 indexOf$2: function(element,start){return $._Lists_indexOf(this,element,start,$.get$length(this));},
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 lastIndexOf$2: function(element,start){if(start==null)start=$.sub($.get$length(this),1);return $._Lists_lastIndexOf(this,element,start);},
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,null)
},
 last$0: function(){return this.operator$index$1($.sub($.get$length(this),1));},
 removeLast$0: function(){throw $.$$throw($.CTC3);},
 insertRange$3: function(start,rangeLength,initialValue){throw $.$$throw($.CTC58);},
 getRange$2: function(start,rangeLength){return $._Lists_getRange(this,start,rangeLength,[]);},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint8ClampedArray', [], {
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('HTMLUnknownElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLVideoElement', ["height?", "width?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebGLActiveInfo', ["name?"], {
});

$.$defineNativeClass('WebKitNamedFlow', ["name?"], {
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);}
});

$.$defineNativeClass('WebSocket', [], {
 get$on: function(){return $._WebSocketEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$2: function(code,reason){return this.close(code,reason);},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 send$1: function(data){return this.send(data);}
});

$.$defineNativeClass('DOMWindow', ["length?", "name=", "navigator?"], {
 requestAnimationFrame$1: function(callback){this._ensureRequestAnimationFrame$0();return this._requestAnimationFrame$1(callback);},
 _requestAnimationFrame$1: function(callback){return this.requestAnimationFrame($.convertDartClosureToJS(callback,1));},
 _ensureRequestAnimationFrame$0: function(){   if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   var vendors = ['ms', 'moz', 'webkit', 'o'];
   for (var i = 0; i < vendors.length && !this.requestAnimationFrame; ++i) {
     this.requestAnimationFrame = this[vendors[i] + 'RequestAnimationFrame'];
     this.cancelAnimationFrame =
         this[vendors[i]+'CancelAnimationFrame'] ||
         this[vendors[i]+'CancelRequestAnimationFrame'];
   }
   if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   this.requestAnimationFrame = function(callback) {
       return window.setTimeout(callback, 16 /* 16ms ~= 60fps */);
   };
   this.cancelAnimationFrame = function(id) { clearTimeout(id); }
},
 get$on: function(){return $._WindowEventsImpl$(this);},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 setInterval$2: function(handler,timeout){return this.setInterval($.convertDartClosureToJS(handler,0),timeout);},
 setTimeout$2: function(handler,timeout){return this.setTimeout($.convertDartClosureToJS(handler,0),timeout);}
});

$.$defineNativeClass('Worker', [], {
 get$on: function(){return $._WorkerEventsImpl$(this);},
 postMessage$2: function(message,messagePorts){return this.postMessage(message,messagePorts);},
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 terminate$0: function(){return this.terminate();}
});

$.$defineNativeClass('WorkerContext', ["navigator?"], {
 get$on: function(){  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {return $._WorkerContextEventsImpl$(this);}  } else {
    return Object.prototype.get$on.call(this);
  }
},
 $dom_addEventListener$3: function(type,listener,useCapture){return this.addEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 close$0: function(){return this.close();},
 $dom_removeEventListener$3: function(type,listener,useCapture){return this.removeEventListener(type,$.convertDartClosureToJS(listener,1),useCapture);},
 setInterval$2: function(handler,timeout){return this.setInterval($.convertDartClosureToJS(handler,0),timeout);},
 setTimeout$2: function(handler,timeout){return this.setTimeout($.convertDartClosureToJS(handler,0),timeout);}
});

$.$defineNativeClass('WorkerLocation', [], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('WorkerNavigator', ["userAgent?"], {
});

$.$defineNativeClass('XPathException', ["name?"], {
 toString$0: function(){return this.toString();}
});

$.$defineNativeClass('XSLTProcessor', [], {
 reset$0: function(){return this.reset();}
});

$.$defineNativeClass('Worker', [], {
 get$id: function(){return this.id;},
 set$id: function(i){this.id = i;},
 set$onmessage: function(f){this.onmessage = f;},
 postMessage$1: function(msg){return this.postMessage(msg);}
});

$.$defineNativeClass('DOMWindow', [], {
 setTimeout$2: function(handler,timeout){return this.setTimeout($.convertDartClosureToJS(handler,0),timeout);},
 setInterval$2: function(handler,timeout){return this.setInterval($.convertDartClosureToJS(handler,0),timeout);}
});

// 314 dynamic classes.
// 366 classes
// 33 !leaf
(function(){
  var v0/*class(_SVGTextPositioningElementImpl)*/ = 'SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement';
  var v1/*class(_Uint8ArrayImpl)*/ = 'Uint8Array|Uint8ClampedArray|Uint8ClampedArray';
  var v2/*class(_SVGTextContentElementImpl)*/ = [v0/*class(_SVGTextPositioningElementImpl)*/,v0/*class(_SVGTextPositioningElementImpl)*/,'SVGTextContentElement|SVGTextPathElement|SVGTextPathElement'].join('|');
  var v3/*class(_SVGGradientElementImpl)*/ = 'SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement';
  var v4/*class(_SVGComponentTransferFunctionElementImpl)*/ = 'SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement';
  var v5/*class(_SVGAnimationElementImpl)*/ = 'SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement';
  var v6/*class(_SVGElementImpl)*/ = [v2/*class(_SVGTextContentElementImpl)*/,v3/*class(_SVGGradientElementImpl)*/,v4/*class(_SVGComponentTransferFunctionElementImpl)*/,v5/*class(_SVGAnimationElementImpl)*/,v2/*class(_SVGTextContentElementImpl)*/,v3/*class(_SVGGradientElementImpl)*/,v4/*class(_SVGComponentTransferFunctionElementImpl)*/,v5/*class(_SVGAnimationElementImpl)*/,'SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement'].join('|');
  var v7/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement|HTMLVideoElement|HTMLAudioElement';
  var v8/*class(_ElementImpl)*/ = [v6/*class(_SVGElementImpl)*/,v7/*class(_MediaElementImpl)*/,v6/*class(_SVGElementImpl)*/,v7/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v9/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot|ShadowRoot';
  var v10/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument|SVGDocument';
  var v11/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|CDATASection|Comment|Text|CDATASection|CDATASection|Comment';
  var v12/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v13/*class(_NodeImpl)*/ = [v8/*class(_ElementImpl)*/,v9/*class(_DocumentFragmentImpl)*/,v10/*class(_DocumentImpl)*/,v11/*class(_CharacterDataImpl)*/,v8/*class(_ElementImpl)*/,v9/*class(_DocumentFragmentImpl)*/,v10/*class(_DocumentImpl)*/,v11/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v14/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream|LocalMediaStream';
  var v15/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest';
  var v16/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker|Worker|SharedWorker';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['SVGGradientElement', v3/*class(_SVGGradientElementImpl)*/],
    ['SVGTextPositioningElement', v0/*class(_SVGTextPositioningElementImpl)*/],
    ['SVGTextContentElement', v2/*class(_SVGTextContentElementImpl)*/],
    ['AbstractWorker', v16/*class(_AbstractWorkerImpl)*/],
    ['Uint8Array', v1/*class(_Uint8ArrayImpl)*/],
    ['ArrayBufferView', [v1/*class(_Uint8ArrayImpl)*/,v1/*class(_Uint8ArrayImpl)*/,'ArrayBufferView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView'].join('|')],
    ['AudioParam', 'AudioParam|AudioGain|AudioGain'],
    ['Blob', 'Blob|File|File'],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['WorkerContext', v12/*class(_WorkerContextImpl)*/],
    ['CharacterData', v11/*class(_CharacterDataImpl)*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList|DOMSettableTokenList'],
    ['HTMLDocument', v10/*class(_DocumentImpl)*/],
    ['DocumentFragment', v9/*class(_DocumentFragmentImpl)*/],
    ['SVGComponentTransferFunctionElement', v4/*class(_SVGComponentTransferFunctionElementImpl)*/],
    ['SVGAnimationElement', v5/*class(_SVGAnimationElementImpl)*/],
    ['SVGElement', v6/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v7/*class(_MediaElementImpl)*/],
    ['Element', v8/*class(_ElementImpl)*/],
    ['Entry', 'Entry|FileEntry|DirectoryEntry|FileEntry|DirectoryEntry'],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync|FileEntrySync|DirectoryEntrySync'],
    ['Event', 'Event|WebGLContextEvent|UIEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent|WebKitTransitionEvent|TrackEvent|StorageEvent|SpeechRecognitionEvent|SpeechRecognitionError|SpeechInputEvent|ProgressEvent|XMLHttpRequestProgressEvent|XMLHttpRequestProgressEvent|PopStateEvent|PageTransitionEvent|OverflowEvent|OfflineAudioCompletionEvent|MutationEvent|MessageEvent|MediaStreamTrackEvent|MediaStreamEvent|MediaKeyEvent|IDBVersionChangeEvent|IDBUpgradeNeededEvent|HashChangeEvent|ErrorEvent|DeviceOrientationEvent|DeviceMotionEvent|CustomEvent|CloseEvent|BeforeLoadEvent|AudioProcessingEvent|WebKitAnimationEvent|WebGLContextEvent|UIEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent|WebKitTransitionEvent|TrackEvent|StorageEvent|SpeechRecognitionEvent|SpeechRecognitionError|SpeechInputEvent|ProgressEvent|XMLHttpRequestProgressEvent|XMLHttpRequestProgressEvent|PopStateEvent|PageTransitionEvent|OverflowEvent|OfflineAudioCompletionEvent|MutationEvent|MessageEvent|MediaStreamTrackEvent|MediaStreamEvent|MediaKeyEvent|IDBVersionChangeEvent|IDBUpgradeNeededEvent|HashChangeEvent|ErrorEvent|DeviceOrientationEvent|DeviceMotionEvent|CustomEvent|CloseEvent|BeforeLoadEvent|AudioProcessingEvent|WebKitAnimationEvent'],
    ['Node', v13/*class(_NodeImpl)*/],
    ['MediaStream', v14/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v15/*class(_IDBRequestImpl)*/],
    ['EventTarget', [v12/*class(_WorkerContextImpl)*/,v13/*class(_NodeImpl)*/,v14/*class(_MediaStreamImpl)*/,v15/*class(_IDBRequestImpl)*/,v16/*class(_AbstractWorkerImpl)*/,v12/*class(_WorkerContextImpl)*/,v13/*class(_NodeImpl)*/,v14/*class(_MediaStreamImpl)*/,v15/*class(_IDBRequestImpl)*/,v16/*class(_AbstractWorkerImpl)*/,'EventTarget|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLOptionsCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue|IDBCursorWithValue'],
    ['NodeList', 'NodeList|RadioNodeList|RadioNodeList']];
$.dynamicSetMetadata(table);
})();

var $globalThis = $;
var $globalState;
var $globals;
var $isWorker;
var $supportsWorkers;
var $thisScriptUrl;
function $static_init(){};

function $initGlobals(context) {
  context.isolateStatics = new Isolate();
}
function $setGlobals(context) {
  $ = context.isolateStatics;
  $globalThis = $;
}
$.main.call$0 = $.main
if (typeof document != 'undefined' && document.readyState != 'complete') {
  document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {
      $.startRootIsolate($.main);
    }
  }, false);
} else {
  $.startRootIsolate($.main);
}
function init() {
Isolate.$isolateProperties = {};
Isolate.$defineClass = function(cls, fields, prototype) {
  var generateGetterSetter =   function(field, prototype) {
    var len = field.length;
    var lastChar = field[len - 1];
    var needsGetter = lastChar == '?' || lastChar == '=';
    var needsSetter = lastChar == '!' || lastChar == '=';
    if (needsGetter || needsSetter) field = field.substring(0, len - 1);
    if (needsGetter) {
      var getterString = "return this." + field + ";";
        prototype["get$" + field] = new Function(getterString);
    }
    if (needsSetter) {
      var setterString = "this." + field + " = v;";
      prototype["set$" + field] = new Function("v", setterString);
    }
    return field;
  };
  var constructor;
  if (typeof fields == 'function') {
    constructor = fields;
  } else {
    var str = "function " + cls + "(";
    var body = "";
    for (var i = 0; i < fields.length; i++) {
      if (i != 0) str += ", ";
      var field = fields[i];
      field = generateGetterSetter(field, prototype);
      str += field;
      body += "this." + field + " = " + field + ";\n";
    }
    str += ") {" + body + "}\n";
    str += "return " + cls + ";";
    constructor = new Function(str)();
  }
  constructor.prototype = prototype;
  return constructor;
};
var supportsProto = false;
var tmp = Isolate.$defineClass('c', ['f?'], {}).prototype;
if (tmp.__proto__) {
  tmp.__proto__ = {};
  if (typeof tmp.get$f !== "undefined") supportsProto = true;
}
Isolate.$pendingClasses = {};
Isolate.$finishClasses = function(collectedClasses) {
  for (var cls in collectedClasses) {
    if (Object.prototype.hasOwnProperty.call(collectedClasses, cls)) {
      var desc = collectedClasses[cls];
      Isolate.$isolateProperties[cls] = Isolate.$defineClass(cls, desc[''], desc);
      if (desc['super'] !== "") Isolate.$pendingClasses[cls] = desc['super'];
    }
  }
  var pendingClasses = Isolate.$pendingClasses;
  Isolate.$pendingClasses = {};
  var finishedClasses = {};
  function finishClass(cls) {
    if (finishedClasses[cls]) return;
    finishedClasses[cls] = true;
    var superclass = pendingClasses[cls];
    if (!superclass) return;
    finishClass(superclass);
    var constructor = Isolate.$isolateProperties[cls];
    var superConstructor = Isolate.$isolateProperties[superclass];
    var prototype = constructor.prototype;
    if (supportsProto) {
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
    } else {
      function tmp() {};
      tmp.prototype = superConstructor.prototype;
      var newPrototype = new tmp();
      constructor.prototype = newPrototype;
      newPrototype.constructor = constructor;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var member in prototype) {
        if (member == '' || member == 'super') continue;
        if (hasOwnProperty.call(prototype, member)) {
          newPrototype[member] = prototype[member];
        }
      }
    }
  }
  for (var cls in pendingClasses) finishClass(cls);
};
Isolate.$finishIsolateConstructor = function(oldIsolate) {
  var isolateProperties = oldIsolate.$isolateProperties;
  var isolatePrototype = oldIsolate.prototype;
  var str = "{\n";
  str += "var properties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= properties." + staticName + ";\n";
    }
  }
  str += "}\n";
  var newIsolate = new Function(str);
  newIsolate.prototype = isolatePrototype;
  isolatePrototype.constructor = newIsolate;
  newIsolate.$isolateProperties = isolateProperties;
  return newIsolate;
};
}
