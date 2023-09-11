import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useContext, useReducer, useMemo, createContext, useState, useCallback, useEffect, Fragment as Fragment$1 } from 'react';
import { useHistory as useHistory$1, useLocation, Switch, Route } from 'react-router';
import { BrowserRouter, useHistory } from 'react-router-dom';
import * as _ from 'lodash';
import * as SDK from '@team_yumi/sdk';
import { produce } from 'immer';
import Ramen from '@team_yumi/ramen';
import '@team_yumi/code-scanner/index.css';
import { useScanner } from '@team_yumi/code-scanner';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$n =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$j = fails$k;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var fails$i = fails$k;

var functionBindNative = !fails$i(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$j = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$j.bind(call$j) : function () {
  return call$j.apply(call$j, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$i = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$i, call$i);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$i.apply(fn, arguments);
  };
};

var uncurryThis$j = functionUncurryThis;

var toString$7 = uncurryThis$j({}.toString);
var stringSlice$5 = uncurryThis$j(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$5(toString$7(it), 8, -1);
};

var uncurryThis$i = functionUncurryThis;
var fails$h = fails$k;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split$1 = uncurryThis$i(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$h(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) === 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$6 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$5 = isNullOrUndefined$6;

var $TypeError$e = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$5 = function (it) {
  if (isNullOrUndefined$5(it)) throw $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$5;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$4(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$n = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$m = isCallable$n;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it);
};

var global$m = global$n;
var isCallable$l = isCallable$n;

var aFunction = function (argument) {
  return isCallable$l(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
};

var uncurryThis$h = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$l = global$n;
var userAgent$3 = engineUserAgent;

var process$3 = global$l.process;
var Deno$1 = global$l.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = engineV8Version;
var fails$g = fails$k;
var global$k = global$n;

var $String$5 = global$k.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$g(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$k = isCallable$n;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$k($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$4 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$j = isCallable$n;
var tryToString$3 = tryToString$4;

var $TypeError$d = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$9 = function (argument) {
  if (isCallable$j(argument)) return argument;
  throw $TypeError$d(tryToString$3(argument) + ' is not a function');
};

var aCallable$8 = aCallable$9;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$8(func);
};

var call$h = functionCall;
var isCallable$i = isCallable$n;
var isObject$8 = isObject$9;

var $TypeError$c = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$8(val = call$h(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$8(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$8(val = call$h(fn, input))) return val;
  throw $TypeError$c("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = false;

var global$j = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$j, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$j[key] = value;
  } return value;
};

var global$i = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$i[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.1',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$3 = requireObjectCoercible$5;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$3(argument));
};

var uncurryThis$g = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$g({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$f = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$f(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$h = global$n;
var shared$3 = shared$4.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$h.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$h = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$b(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$g = functionCall;
var isObject$7 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$g = wellKnownSymbol$h;

var $TypeError$b = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$1(result)) return result;
    throw $TypeError$b("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$g = global$n;
var isObject$6 = isObject$9;

var document$3 = global$g.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$3) && isObject$6(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$d = descriptors;
var fails$f = fails$k;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$d && !fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$c = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$a = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$c ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$a(O, P)) return createPropertyDescriptor$4(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$b = descriptors;
var fails$e = fails$k;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$5 = isObject$9;

var $String$3 = String;
var $TypeError$a = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$5(argument)) return argument;
  throw $TypeError$a($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$9 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$1(P);
  anObject$e(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$1(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$9 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$9 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$8 = descriptors;
var hasOwn$9 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || (DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$e = functionUncurryThis;
var isCallable$h = isCallable$n;
var store$1 = sharedStore;

var functionToString = uncurryThis$e(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$h(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$f = global$n;
var isCallable$g = isCallable$n;

var WeakMap$1 = global$f.WeakMap;

var weakMapBasicDetection = isCallable$g(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$8 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$e.TypeError;
var WeakMap = global$e.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$8(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$8(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$8(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$d = functionUncurryThis;
var fails$d = fails$k;
var isCallable$f = isCallable$n;
var hasOwn$7 = hasOwnProperty_1;
var DESCRIPTORS$7 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$3 = internalState;

var enforceInternalState = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$4 = uncurryThis$d(''.slice);
var replace$3 = uncurryThis$d(''.replace);
var join$1 = uncurryThis$d([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$7 && !fails$d(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$4($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$3($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$7) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$7(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$7) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$7(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$f(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$e = isCallable$n;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$e(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

var max$1 = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$4 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$c = functionUncurryThis;
var hasOwn$6 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$c([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$6(hiddenKeys$2, key) && hasOwn$6(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$5 = getBuiltIn$7;
var uncurryThis$b = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$d = anObject$f;

var concat$1 = uncurryThis$b([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$d(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$c = fails$k;
var isCallable$d = isCallable$n;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$d(detection) ? fails$c(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$d = global$n;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$7 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$7(target, key, sourceProperty, options);
  }
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$6 = descriptors;
var uncurryThis$a = functionUncurryThis;
var call$e = functionCall;
var fails$b = fails$k;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat = uncurryThis$a([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$b(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$6 && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$4(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$6 || call$e(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$d = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$d({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var objectDefineProperties = {};

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$c = anObject$f;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$c(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$7;

var html$2 = getBuiltIn$4('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$b = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$b(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$f = wellKnownSymbol$h;
var create$3 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$f('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
  defineProperty$3(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$a = fails$k;

var correctPrototypeGetter = !fails$a(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$c = isCallable$n;
var toObject$1 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$c(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$9 = fails$k;
var isCallable$b = isCallable$n;
var isObject$3 = isObject$9;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$e = wellKnownSymbol$h;

var ITERATOR$7 = wellKnownSymbol$e('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$2) || fails$9(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$7].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$b(IteratorPrototype$2[ITERATOR$7])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$7, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$d = wellKnownSymbol$h;

var TO_STRING_TAG$3 = wellKnownSymbol$d('toStringTag');

var setToStringTag$4 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$3(target, TO_STRING_TAG$3)) {
    defineProperty$2(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$3 = setToStringTag$4;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$9 = functionUncurryThis;
var aCallable$7 = aCallable$9;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$9(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$a = isCallable$n;

var $String$1 = String;
var $TypeError$8 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$a(argument)) return argument;
  throw $TypeError$8("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$a = anObject$f;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$a(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$c = _export;
var call$d = functionCall;
var FunctionName = functionName;
var isCallable$9 = isCallable$n;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$c = wellKnownSymbol$h;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$6 = wellKnownSymbol$c('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$6]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$9(CurrentIteratorPrototype[ITERATOR$6])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$6, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$d(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$c({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$6, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$4 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$4 && values.name !== 'values') try {
  defineProperty$1(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$c = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$b = wellKnownSymbol$h;

var ITERATOR$5 = wellKnownSymbol$b('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$b('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$5, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$5] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$c[COLLECTION_NAME] && global$c[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var fails$8 = fails$k;
var wellKnownSymbol$a = wellKnownSymbol$h;
var DESCRIPTORS$3 = descriptors;
var IS_PURE = isPure;

var ITERATOR$4 = wellKnownSymbol$a('iterator');

var urlConstructorDetection = !fails$8(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
    || (!params.size && (IS_PURE || !DESCRIPTORS$3))
    || !params.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR$4]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor$3 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var defineBuiltIn$4 = defineBuiltIn$8;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$4(target, key, src[key], options);
  return target;
};

var isPrototypeOf$2 = objectIsPrototypeOf;

var $TypeError$7 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$7('Incorrect invocation');
};

var classofRaw$1 = classofRaw$2;
var uncurryThis$8 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$8(fn);
};

var uncurryThis$7 = functionUncurryThisClause;
var aCallable$6 = aCallable$9;
var NATIVE_BIND$1 = functionBindNative;

var bind$5 = uncurryThis$7(uncurryThis$7.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$6(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var wellKnownSymbol$9 = wellKnownSymbol$h;

var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$8 = isCallable$n;
var classofRaw = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$h;

var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String = String;

var toString$5 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var classof$4 = classof$6;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var Iterators$1 = iterators;
var wellKnownSymbol$7 = wellKnownSymbol$h;

var ITERATOR$3 = wellKnownSymbol$7('iterator');

var getIteratorMethod$3 = function (it) {
  if (!isNullOrUndefined$3(it)) return getMethod$3(it, ITERATOR$3)
    || getMethod$3(it, '@@iterator')
    || Iterators$1[classof$4(it)];
};

var call$c = functionCall;
var aCallable$5 = aCallable$9;
var anObject$9 = anObject$f;
var tryToString$2 = tryToString$4;
var getIteratorMethod$2 = getIteratorMethod$3;

var $TypeError$6 = TypeError;

var getIterator$2 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$5(iteratorMethod)) return anObject$9(call$c(iteratorMethod, argument));
  throw $TypeError$6(tryToString$2(argument) + ' is not iterable');
};

var $TypeError$5 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$5('Not enough arguments');
  return passed;
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var createProperty$1 = createProperty$2;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  var n = 0;
  for (; k < fin; k++, n++) createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice$2 = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$2(array, 0, middle), comparefn),
    mergeSort(arraySlice$2(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort$1 = mergeSort;

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$b = _export;
var global$b = global$n;
var call$b = functionCall;
var uncurryThis$6 = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn$3 = defineBuiltIn$8;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var isCallable$7 = isCallable$n;
var hasOwn$2 = hasOwnProperty_1;
var bind$4 = functionBindContext;
var classof$3 = classof$6;
var anObject$8 = anObject$f;
var isObject$2 = isObject$9;
var $toString = toString$5;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var wellKnownSymbol$6 = wellKnownSymbol$h;
var arraySort = arraySort$1;

var ITERATOR$2 = wellKnownSymbol$6('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$2) return global$b[name];
  var descriptor = getOwnPropertyDescriptor$1(global$b, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$b.RegExp;
var TypeError$2 = global$b.TypeError;
var decodeURIComponent = global$b.decodeURIComponent;
var encodeURIComponent = global$b.encodeURIComponent;
var charAt$3 = uncurryThis$6(''.charAt);
var join = uncurryThis$6([].join);
var push = uncurryThis$6([].push);
var replace$2 = uncurryThis$6(''.replace);
var shift = uncurryThis$6([].shift);
var splice = uncurryThis$6([].splice);
var split = uncurryThis$6(''.split);
var stringSlice$3 = uncurryThis$6(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$2(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$2(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$2(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator$1(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject$2(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$3(init, 0) === '?' ? stringSlice$3(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod$1(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator$1(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$b(next, iterator)).done) {
        entryIterator = getIterator$1(anObject$8(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$b(entryNext, entryIterator)).done ||
          (second = call$b(entryNext, entryIterator)).done ||
          !call$b(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn$2(object, key)) {
      push(this.entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$1(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState$1(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS$2) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$1(arguments.length, 2);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS$2) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength$1(arguments.length, 1);
    var entries = state.entries;
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
        if (value !== undefined) break;
      } else index++;
    }
    if (!DESCRIPTORS$2) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$1(arguments.length, 1);
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$1(arguments.length, 1);
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength$1(arguments.length, 1);
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index++];
      if (entry.key === key && (value === undefined || entry.value === value)) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$1(arguments.length, 1);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    if (!DESCRIPTORS$2) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$4(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$3(URLSearchParamsPrototype, ITERATOR$2, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$3(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS$2) defineBuiltInAccessor$2(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$b({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$7(Headers)) {
  var headersHas = uncurryThis$6(HeadersPrototype.has);
  var headersSet = uncurryThis$6(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$2(init)) {
      var body = init.body;
      var headers;
      if (classof$3(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$1(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$7(nativeFetch)) {
    $$b({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$7(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$b({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var anObject$7 = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$7(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$7 = fails$k;
var global$a = global$n;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$a.RegExp;

var UNSUPPORTED_Y$1 = fails$7(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$7(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$7(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var fails$6 = fails$k;
var global$9 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$9.RegExp;

var regexpUnsupportedDotAll = fails$6(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$5 = fails$k;
var global$8 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$8.RegExp;

var regexpUnsupportedNcg = fails$5(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$a = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$4 = toString$5;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$a(nativeExec, re1, 'a');
  call$a(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$4(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$a(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$a(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$a(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$a(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$a = _export;
var exec$1 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$a({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$4 = functionUncurryThisClause;
var defineBuiltIn$2 = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$4 = fails$k;
var wellKnownSymbol$5 = wellKnownSymbol$h;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES$3 = wellKnownSymbol$5('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$5(KEY);

  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$3] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$2(String.prototype, KEY, methods[0]);
    defineBuiltIn$2(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};

var call$9 = functionCall;
var anObject$6 = anObject$f;
var isCallable$6 = isCallable$n;
var classof$2 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$4 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$6(exec)) {
    var result = call$9(exec, R, S);
    if (result !== null) anObject$6(result);
    return result;
  }
  if (classof$2(R) === 'RegExp') return call$9(regexpExec, R, S);
  throw $TypeError$4('RegExp#exec called on incompatible receiver');
};

var call$8 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$5 = anObject$f;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var requireObjectCoercible$2 = requireObjectCoercible$5;
var sameValue = sameValue$1;
var toString$3 = toString$5;
var getMethod$2 = getMethod$5;
var regExpExec$1 = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$2(this);
      var searcher = isNullOrUndefined$2(regexp) ? undefined : getMethod$2(regexp, SEARCH);
      return searcher ? call$8(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$3(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$5(this);
      var S = toString$3(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec$1(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

function Router(properties) {
  return jsx(BrowserRouter, Object.assign({}, properties));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$2 = toString$5;
var requireObjectCoercible$1 = requireObjectCoercible$5;

var charAt$1 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$1 = uncurryThis$3(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$2(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$1(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$1(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var call$7 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$4 = anObject$f;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var toLength = toLength$2;
var toString$1 = toString$5;
var requireObjectCoercible = requireObjectCoercible$5;
var getMethod$1 = getMethod$5;
var advanceStringIndex = advanceStringIndex$1;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$7(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$4(this);
      var S = toString$1(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

function toPath(properties) {
  const {
    location,
    match
  } = properties || {};
  if (match) {
    return match.path;
  }
  return '/';
}
function toDefaults$1(properties) {
  return _.defaultsDeep({}, properties, {
    path: toPath(properties),
    loading: true,
    title: 'Impresión de flejes',
    // Module settings
    country: '',
    flag: '',
    store: '',
    // Data sources
    currentUser: null,
    selectedPrinter: null,
    printers: []
  });
}
function Store(properties) {
  const normalized = JSON.parse(JSON.stringify(properties));
  const defaults = toDefaults$1(normalized);
  return _.defaultsDeep({}, normalized, defaults);
}

var ActionType;
(function (ActionType) {
  ActionType["Load"] = "@labeling/load";
  ActionType["SetModule"] = "@labeling/set-module";
  ActionType["SetBootSettings"] = "@labeling/set-boot-settings";
  ActionType["SetPrinters"] = "@labeling/set-printers";
  ActionType["SetSelectedPrinter"] = "@labeling/set-selected-printer";
})(ActionType || (ActionType = {}));

var global$7 = global$n;
var classof$1 = classofRaw$2;

var engineIsNode = classof$1(global$7.process) === 'process';

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var wellKnownSymbol$4 = wellKnownSymbol$h;
var DESCRIPTORS$1 = descriptors;

var SPECIES$2 = wellKnownSymbol$4('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var uncurryThis$2 = functionUncurryThis;
var fails$3 = fails$k;
var isCallable$5 = isCallable$n;
var classof = classof$6;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$2(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$3(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$1 = tryToString$4;

var $TypeError$3 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$3(tryToString$1(argument) + ' is not a constructor');
};

var anObject$3 = anObject$f;
var aConstructor = aConstructor$1;
var isNullOrUndefined = isNullOrUndefined$6;
var wellKnownSymbol$3 = wellKnownSymbol$h;

var SPECIES$1 = wellKnownSymbol$3('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$3(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject$3(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$6 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$6.bind(apply$1) : function () {
  return call$6.apply(apply$1, arguments);
});

var uncurryThis$1 = functionUncurryThis;

var arraySlice$1 = uncurryThis$1([].slice);

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$6 = global$n;
var apply = functionApply;
var bind$3 = functionBindContext;
var isCallable$4 = isCallable$n;
var hasOwn$1 = hasOwnProperty_1;
var fails$2 = fails$k;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set = global$6.setImmediate;
var clear = global$6.clearImmediate;
var process$2 = global$6.process;
var Dispatch = global$6.Dispatch;
var Function$1 = global$6.Function;
var MessageChannel = global$6.MessageChannel;
var String$1 = global$6.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$2(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$6.location;
});

var run = function (id) {
  if (hasOwn$1(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$6.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$4(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$4) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$6.addEventListener &&
    isCallable$4(global$6.postMessage) &&
    !global$6.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$2(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$6.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};

Queue$2.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$2;

var userAgent$1 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$5 = global$n;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
var document$2 = global$5.document;
var process$1 = global$5.process;
var Promise$1 = global$5.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$1.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$2(macrotask, global$5);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$4 = global$n;

var promiseNativeConstructor = global$4.Promise;

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
  && typeof window == 'object'
  && typeof document == 'object';

var global$3 = global$n;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$3 = isCallable$n;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$2 = wellKnownSymbol$h;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$2('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$3.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$4 = aCallable$9;

var $TypeError$2 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$2('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$9 = _export;
var IS_NODE$1 = engineIsNode;
var global$2 = global$n;
var call$5 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$8;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$4;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$9;
var isCallable$2 = isCallable$n;
var isObject$1 = isObject$9;
var anInstance = anInstance$2;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$2.TypeError;
var document$1 = global$2.document;
var process = global$2.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$2.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$1(it) && isCallable$2(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$5(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$2.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$2['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$5(task, global$2, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE$1) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$5(task, global$2, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$5(then, value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$5(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$2(onRejected) && onRejected;
    reaction.domain = IS_NODE$1 ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$2(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$5(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$9({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var wellKnownSymbol$1 = wellKnownSymbol$h;
var Iterators = iterators;

var ITERATOR$1 = wellKnownSymbol$1('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
};

var call$4 = functionCall;
var anObject$2 = anObject$f;
var getMethod = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$2(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$4(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$2(innerResult);
  return value;
};

var bind = functionBindContext;
var call$3 = functionCall;
var anObject$1 = anObject$f;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var iteratorClose = iteratorClose$1;

var $TypeError$1 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$3 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$1(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$1(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$3(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol = wellKnownSymbol$h;

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$8 = _export;
var call$2 = functionCall;
var aCallable$2 = aCallable$9;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$2 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$2($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$1 = isCallable$n;
var defineBuiltIn = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$7({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$1(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$6 = _export;
var call$1 = functionCall;
var aCallable$1 = aCallable$9;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate$1 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      iterate$1(iterable, function (promise) {
        call$1($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$5 = _export;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$5({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject = anObject$f;
var isObject = isObject$9;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$4 = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$4({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var PrinterType;
(function (PrinterType) {
  PrinterType["LASER"] = "laser";
  PrinterType["INKJET"] = "inkjet";
})(PrinterType || (PrinterType = {}));
var PrinterStatus;
(function (PrinterStatus) {
  PrinterStatus["CONNECTED"] = "connected";
  PrinterStatus["DISCONNECTED"] = "disconnected";
})(PrinterStatus || (PrinterStatus = {}));

const mockPrinters = [{
  id: '1',
  name: 'printer_1',
  label: 'Impresora 1',
  type: PrinterType.INKJET,
  status: PrinterStatus.CONNECTED
}, {
  id: '2',
  name: 'printer_2',
  label: 'Impresora 2',
  type: PrinterType.INKJET,
  status: PrinterStatus.CONNECTED
}];
class PrinterClient {
  loadPrinters() {
    console.log('Retrieve printers information');
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        resolve(mockPrinters);
        clearTimeout(timeout);
      }, 300);
    });
  }
}
var PrinterClient$1 = new PrinterClient();

function toDefaults(properties) {
  const normalized = _.pickBy(properties, _.isFunction);
  return _.defaultsDeep({}, normalized, {
    onLoad: _.noop,
    onRequest: _.noop
  });
}
function getUserInformation(settings) {
  const user = SDK.Lib.IAM.getUser();
  const userStore = () => {
    const storesByUser = user === null || user === void 0 ? void 0 : user.getScope(`country:${settings === null || settings === void 0 ? void 0 : settings.country}=>flag:${settings === null || settings === void 0 ? void 0 : settings.flag}=>store`);
    const store = storesByUser === null || storesByUser === void 0 ? void 0 : storesByUser.find(store => store === (settings === null || settings === void 0 ? void 0 : settings.store));
    if (!store) {
      return '';
    }
    return store;
  };
  return _.defaultsDeep({}, user === null || user === void 0 ? void 0 : user.getInfo(), {
    store: userStore(),
    email: ''
  });
}
function onLoad(parameters) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      actions,
      dispatch,
      payload
    } = parameters;
    dispatch({
      type: ActionType.Load,
      payload: {
        loading: true
      }
    });
    const printers = yield PrinterClient$1.loadPrinters();
    dispatch({
      type: ActionType.SetPrinters,
      payload: {
        printers
      }
    });
    const next = {
      loading: false
    };
    dispatch({
      type: ActionType.Load,
      payload: next
    });
    return;
  });
}
function onBootSettings(parameters) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      actions,
      dispatch,
      payload
    } = parameters;
    const {
      settings
    } = payload;
    const currentUser = getUserInformation(settings);
    dispatch({
      type: ActionType.SetBootSettings,
      payload: {
        store: settings === null || settings === void 0 ? void 0 : settings.store,
        flag: settings === null || settings === void 0 ? void 0 : settings.flag,
        country: settings === null || settings === void 0 ? void 0 : settings.country,
        currentUser
      }
    });
    return;
  });
}
function onSelectedPrinter(parameters) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      actions,
      dispatch,
      payload
    } = parameters;
    dispatch({
      type: ActionType.SetSelectedPrinter,
      payload
    });
    return;
  });
}
function ActionFactory(parameters) {
  const {
    dispatch,
    properties
  } = parameters;
  const defaults = toDefaults(properties);
  return {
    onBootSettings: parameters => onBootSettings({
      dispatch,
      payload: parameters,
      actions: defaults
    }),
    onLoad: parameters => onLoad({
      dispatch,
      payload: parameters,
      actions: defaults
    }),
    onSelectedPrinter: parameters => onSelectedPrinter({
      dispatch,
      payload: parameters,
      actions: defaults
    })
  };
}

// Selectors:
// Reducers:
function onSetBootSettings(state, action) {
  const {
    payload
  } = action;
  state.store = (payload === null || payload === void 0 ? void 0 : payload.store) || state.store;
  state.country = (payload === null || payload === void 0 ? void 0 : payload.country) || state.country;
  state.flag = (payload === null || payload === void 0 ? void 0 : payload.flag) || state.flag;
  state.currentUser = (payload === null || payload === void 0 ? void 0 : payload.currentUser) || state.currentUser;
  return state;
}
function toLoadReduce(state, action) {
  const {
    payload
  } = action;
  state.loading = (payload === null || payload === void 0 ? void 0 : payload.loading) || false;
  return state;
}
function onSetPrinters(state, action) {
  const {
    payload
  } = action;
  state.printers = (payload === null || payload === void 0 ? void 0 : payload.printers) || state.printers;
  return state;
}
function onSetSelectedPrinter(state, action) {
  const {
    payload
  } = action;
  state.selectedPrinter = (payload === null || payload === void 0 ? void 0 : payload.selectedPrinter) || state.selectedPrinter;
  return state;
}
// Reducer Runner:
function Reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.SetBootSettings:
        return onSetBootSettings(draft, action);
      case ActionType.Load:
        return toLoadReduce(draft, action);
      case ActionType.SetPrinters:
        return onSetPrinters(draft, action);
      case ActionType.SetSelectedPrinter:
        return onSetSelectedPrinter(draft, action);
      default:
        return state;
    }
  });
}

const StoreContext = /*#__PURE__*/createContext({});
const ActionContext = /*#__PURE__*/createContext({});
function useRootContext() {
  const store = useContext(StoreContext);
  const actions = useContext(ActionContext);
  return [store, actions];
}
function RootProvider(properties) {
  const _a = properties || {},
    {
      children
    } = _a,
    leftovers = __rest(_a, ["children"]);
  const [store, dispatch] = useReducer(Reducer, leftovers, Store);
  const actions = useMemo(() => ActionFactory({
    dispatch,
    properties
  }), [dispatch, properties]);
  return jsx(StoreContext.Provider, Object.assign({
    value: store
  }, {
    children: jsx(ActionContext.Provider, Object.assign({
      value: actions
    }, {
      children: children
    }))
  }));
}

var ModeType;
(function (ModeType) {
  ModeType[ModeType["Loading"] = 0] = "Loading";
  ModeType[ModeType["Home"] = 1] = "Home";
  ModeType[ModeType["Warning"] = 2] = "Warning";
})(ModeType || (ModeType = {}));
function HomePage() {
  const [store, actions] = useRootContext();
  const history = useHistory();
  const [mode, setMode] = useState(ModeType.Loading);
  const onSelectedPrinter = useCallback(printer => {
    Ramen.Api.loading.show({
      text: 'Conexión en proceso...'
    });
    actions.onSelectedPrinter({
      selectedPrinter: printer
    });
    const timeout = setTimeout(() => {
      Ramen.Api.loading.hide();
      clearTimeout(timeout);
      history.push(`printer?id=${printer.id}`);
    }, 3000);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMode(ModeType.Home);
      clearTimeout(timeout);
    }, 2000);
  }, []);
  const renderLoading = () => {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: ''
      }), jsxs(Ramen.XBody, {
        children: [jsxs(Ramen.XBox, Object.assign({
          gap: 'm',
          padding: 'm'
        }, {
          children: [jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "icon",
            width: "s"
          }), jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "text",
            width: "m"
          })]
        })), jsxs(Ramen.XBox, Object.assign({
          gap: 'm',
          padding: 'm'
        }, {
          children: [jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          })]
        }))]
      })]
    });
  };
  const renderHome = () => {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: store.title,
        onBack: () => history.goBack()
      }), jsxs(Ramen.XBody, {
        children: [jsxs(Ramen.XBox, Object.assign({
          gap: 'm'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: 'bold'
          }, {
            children: "Selecciona una impresora"
          })), store.printers.map(printer => jsx(Ramen.XCard, {
            onClick: () => onSelectedPrinter(printer),
            size: "s",
            title: printer.label
          }, `printer-${printer.id}`))]
        })), jsx(Ramen.XFooter, {
          children: jsx(Ramen.XButton, {
            type: "outline",
            text: "Conectar impresora port\u00E1til",
            onClick: () => history.push('codeprinter'),
            size: 'xl'
          })
        })]
      })]
    });
  };
  const renderWarning = () => {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: store.title,
        onBack: () => history.goBack()
      }), jsxs(Ramen.XBody, {
        children: [jsx(Ramen.XBox, {
          padding: "xl"
        }), jsx(Ramen.XBox, Object.assign({
          gap: 'xl',
          horizontalAlign: 'center',
          height: "auto",
          padding: 'xl'
        }, {
          children: jsx(Ramen.XImage, {
            height: "full",
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACoCAYAAACbic6KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABExSURBVHgB7Z1NbBzlGcefrNexk9jgQEiCDMqmQSVKBYmRiHIq9oHcSoJEeyLEQWouUWRbKpWQKuKgNkjtAVstFyqBo/bUgnDorRJi4ZQGVTggEAGZjFGCBCrxJnHib6fPf3bG7K5ndmdm33c+n5/0esazu/buzH+fr/dj1pFQl9nZ2cLi4uI+3u1at25dIZ/P77hz504XtwKO4Tn4nR/rcvkTBn7w46vbpaWlqZaWlunl5eWL/Hupo6NjggRX1pFgMj093cXC6YUIWTj7VlZWevlwgcJjAgKGcHm/yEKe2Lx5c4mE7IrUEuXhXC63j8VxiMIVpFdgYSdYuOe4QbQGZZBMifTmzZuwlE+we+5Fo+Qxwe/7A27jnZ2dRcoIqRcphMmW8jDvHq0TNyYRg1uRw5KzaRdsKkUKV97e3j7AF7Cf4unGVWPwF3Bkfn7+XBpDglSJFFaT48xTCXXlqhhLm3VNvEhhNVtbW5EAHc24OGsx+JwMb9iw4SwlnMSK1HbpnPUOpizWVE3ixZpIkd6+fRvx5rCI0xeJFWuiRIqYk0/0m5SNZEgXiRNrIkQqCZEWJhYWFp5OQjUgRzEGcSe79lf5m/++CFQ5+9avX38Z5xfnmWJMbC2puPZQiXUIEDuR4lvd1tYG1z5IQtiMcQhwOm4hQKxEKtYzFhhcOTkWp86A2MSkt27dOoXYk0SgUVPAdZidnT1FMSFyS8ruvcDu/U1JjOIH16GL8/Pzx6J2/5GKlAWKDPMdEusZZwyOU/uiFGpk7p7dyVHucxf3Hn8KVqkqskQ2EpEi/uTgfEy6NZMDh2OvRhWnhu7uUTyW8lJywbjVjRs3DlGIhCpStqAoL/WTkHTGNm3adIxCIhSRokDPcQ3iz30kpIUJK6HSPqNVu0hFoKkmFKFqFakINBNoF6rW7J4FihhUBJpu9qEzhjSiTaRWknSYhNTD1ZrD1vXWghaRog5KksVnjX5ddVTlMakl0GESMgnXUYe4jjpCClEqUhYo3Ps7JGQa7k3sUznUT5lIMZrJyuQLpJEbN27Qe++9R99++y1dvXqVhMZ0d3fT7t27zYb9EChxxt+jalCKEpFapaaPSZNAIczx8XFTnB999BEJwYFQn3vuOTp8WHtOa1hCbbo0pUSkOvvjIc5XXnkFo/ZJUAcs6okTJ7SKVVU/f9MixUINLFClgTKA9Tx58qRYTs08/vjjdObMGW1hgIpEqimRIg5tbW39WPWQO8Sa/f39EnOGBAQ6NjamS6hNx6dNiZSz+cukOA71KtC77rqL9uzZQw888AAJ7ly5coU+//xz0zPVQ6dQMQ2FrWkfBSSwSHXVQ5988sm6Aj1w4AANDg6aW8E758+fp7feestsbkCgb7/9tmkAVNOM2w8kUqvcdJkU89prr5nNCVjNl156ScTZJLCsx48fN62rE0eOHKEXX3yRNBDY7QcSKSdLype9gfWEFXXi+eefNwUqqGNkZMRsTsDt79+/n1QT1O377rufmZnp1zH92M2CwrWLQNWD84rmhNu1aBboBhMwySe+LKmuXiU3K3rw4EF6/fXXSdDHyy+/TG+88caa44hhdcSmVHb7O/0U+X1Z0ra2tgHS0KvkVAtF1i4WVD+wpk5iRCeKJtA76avjx7NIYUV19SpduHBhzTGcPCkv6QcCdTIGmjtRBqAnr0/2LFIu2g+TJi5dulT1O06cZPHhgbCq1pp+8cUXpBFYU89jTz2JFKrnzMx3wOsVlEUqgUDFioYHBPrMM89UHQuht68fqyh6eaInkeq0oqB28IhY0fBBHboW3ULFEvNentdQpLqtqBNOJ0zQSxTnHCUpL9a0oUh1W1EnxNWHj6ZyU0PYmg40ek5dkUZhRYVsgZmmjW4sUVekUVhRIXs0qpvWFSlb0SdIEPQzUM+auooUffQkC9wK4YCbGPe7PVjPkjYMaAVBFblc7pDrY04HrYRJ1nASQqNeOcpRpJIwCVHA1rTX8bjTQUmYhIgYcJq6vkaklsktkCCEDzL83tqDa0TKVrSfBCEiWH9rVqtwEqm4eiEyWH+HZmdnq45ViZRro8joCyQI0VGgGg3WWtJeEoSIWV5ernL5VSKtV1AVhLCo1WGVSLmgKgV8IXKgw8pS1KpIrdKT3OtTiANVpahVkUo3qBAnKvVYKVIpPQmxgfXYa+9XxqRiSYU4sXd6etrcyeOHNeC0QEJwSh8SzU+V99t2cFT1cxKaokDl2LRkijSfz4sVDcrVvxBN/Z5oqWZpo3YW6rYjRDt+R0IwLF0WTXcvSVMAIMqLB4kmf7NWoGBuqize/+53flxoiK1LU6RclyqQ4I/JF4iuf9j4ebc+IfrsVyQEooAfpkhbWlr2kuCd7/5Wbl6BmP/3Lgn+YEtawNYU6crKihTx/QA37pevXxC37x/TeEpM6hckSnNT5Bu8Bq8V/NCFMlSu0eoRQgWm0P5MgcFrgwg8u0CbXbnW1tYCCd6Am29GZEvXywmX4Jn29vauHGf2Ykm9AHH6SZbc+OHdcuFf8MTS0lJBROqVS78mZQRJvDIKyqNInESkjYAFva7Q+uFvNRPbZowcIyJthA7L59SVKjgi7r4RzSZLbiCJkpJUQ1DQ931HvEyhu7ap6wuQMkSk9QjDJatMyFKKiNQNVSWnRiCJkpJUXUSkbnxykELjS7Gm9RCROgEL6jdWzHeVBznf+1R5wLMfmu1uTTl5zu4NEn7EHqzsB4jysf+UhQoQx146Xu5d8gr+J0Sel2JLJZzdl8SS1hLEiu75R7W4sP+wz1ugoyQ19QcSqllZWRGRVhHEiubvJupwGDMOofp1+3D5kkRV0dbWNp1jc2qQUCZIz5Jq9yz9+lUsLCxcz+XzeYOE8vSOMEpOjZCpJlWYMenc3Jx0IIOvYzTOU6aarLK4uGjkNm/ejLOR7TMSJFnSiUw1WQX6tBOn7Io0SLIUBjLVBEzgR67yl0wS10EeZkkq20kU4lFs7SnN2fzKhtU/HxS8twyXpFiXF7G1pzQblEWSMCku29bUwA97mZ3suXtYqR8SUOpBSSrO1l4jti5NkS4tLWVPpEmyUG6LoqUcW5emSK0ylEFZIWkj4rM51cSwdFk1VC8b1jSpNcjslaQu2jurImX//wFlAdVTQsJyw7CmGZpqwnos2vuVIk2/JdVRcoJ4nMpE+F+qLV+GpppU6nFVpJ2dnUVKe8+TrikhmP5RKUhY189+SVrIxlSTkqVHk6rxpFwvTa811dk/j7974eHy8uRY1fnC7vIKz7r+V8qnmtTqsEqkXOE/R2kEli2MkhPcMWqvuuNUjOBPcUmqVodVIm1paRmnNBJ04du4Yn7pzlCKKVb+UiXSDRs2GJS2emlcRzk1C1z+zEVKIUZHR4e7uwepc/mp7fu+wz1Rv6UUUqw9kK89UCqVxlmoAxQCXGZAkEzaiMuUEF3YJSlNd9/DevVtbW36r1MFuVzubO2xNSJ98MEHi1euXCnxm9I6AXx5eZlmZ2dR+iJthDklBBPy7v1FuW5662JIMTBb0y+PEz12Xst8fc5RcFc6un37NrW2tppNM0Z3d3ex9mDe6Zn8ZkZZpKdIIxBpe3u7vg8e5pSQTY8S7f13c4tDBGXOKCeGGm4PaQtz48aNpkHBVjNFp4OO8+7Z3Ts+WSX4dsKVaCHsZOln/2x+cYhmgEg1lqQgVBgVuH2d8P847XTcUaT3339/kVxUrYKFhQXzg8OdaCHMUU5YHMJpEYggi0MEBQLVnETBoMCaauRj1p3h9EC9FUy0Zfn4sHD1Wgh7SghiUDcrhsfCQvNUEy5PahUpW+lRt8fybg+wpRubmZk5pWO58sXFRdN9oCkniikh6AHa9afqY5pd8FrulN+Hwkx/fn6e5ubmVn9Hho8wjTNwUgmmL3HCftbtcVeRYsDpV199NcouWWkChQ++fv16jLom5ZQ+jGZKCArrEKS5Kh67/x/+FU19VnFJCteo8joh04c1VZ1LNMqB8vUe3LJlywhbPaUihRXdtGmTnng0yjlLfu/crAW2pt/9XZlIcZ2496fqGNfRzeMq66ZuCZNNXbsNa8pvRll/PlwHvo3aEqYZTSOPkoTmcwAvqDg2HXNLmGwaBhds7kdJERBpCLU2QSNIoBCyqSpHNbKioKFIVZWjENvARWizoiCskk+cQUysEVxDWFMIVQENrSjwlKZ5UXsjYEW1Fe9tnBazzRQcJ25/lnSjSqRedeVJpLCmbN7PUkBQakIBX1tt1Gbbs9lecx6e5G49g00qsbuykQQ3gScrCjwXvLhMMEwB50Dhw4QwOKEs0J+G2B0ZK9iKdp8ILeSBV4ThCYof75z3+kSofnJycpTF6rskhXgUBeDr10PogdnyVLmwnoR1npTBAt31RxbpSVLJzZs3XRNd1oHZgtS7Oa4dfeihhwyvz/csUnDjxo2R++67b8DPMD77Q4Sa1eNi4X5KKKineTwpPAdGYGEElIYxpQjP6l03WFKEcsj4fWDw60b8vMCXSHt6ekrff//9EO++6fU1CLC1DslzA27v4b+WG2qHaZu4hs+HTF5jDN5oDClq3iju+7m2nNsMd3d3G+QDXyIFW7duHWOhHuXd3kbPtROm2l6L0Ol4lAT1oByFMM5HzlHctm2b7wQ80EgBFt8x8pBESfE+/eD6YtCJFyzd+CaQSJFEcdDcMDuDqw/dzQuhguuLvKNRDxQ/ftpryamWwGOutm/fjuC36PY4rKjWgc1CbGg01hT3r2U3P0wBaWpgYD23bydMQvqx+/NdKLHX7aMmaEqkbm4fCRNqaOLqs4E9JsOpBwr6COrmbZoeYm25/aqRUjD9PmtnQsLB9a5NoFigo5Y+mkLJPAC2mMOIO7CPABrfKHH12cL2mnbnDfTAxmqYFKBEpBgcbcUdJcQmKPIK2cMeHQWBQg87d+5U0oOiTE2IOz799NOnOTZ5H78rGm8oRMi1a9cC5RVsQYf27NljkCKUmrxHHnmkODk5OdTZ2fkqCYnnnnvuwTw3X69hgZ7esWOH0iVE1c5NZXbt2jWCwi0JmQPXnQU6TIpRLlKAwm0zg6SF5IHr3UzBvh5aRAr4DfernGkqxBdcZ1xv0oQ2kQLO8tEjlf5b72QY3MpmZmYm0MARr2gVKUpTnB2iNCVCTSEQKBfwlZWa3NAqUiBCTSdhCRRoFymAULdu3dojyVQ6sJKknjAECkIRqY0VXCtbEUUIH/TH60ySnAhVpIAt6qDUUZMJrtv27dsHKWRCFylAPY2/kUMkJAW49WO66qCNiESkAEO4lpeXd9qjp4R4Yl2fPkzApIiITKTAGjSNzL9IQuzgfvgirg8LNNLKTKQiBRDq1NRUH/daSJwaIxB/HjhwoK/ZUfUqiFykNoZhDLNQYVUNEqLEwHX45ptvhikmxEakgIVaxAni7lSpp0YA7gDC578H14FiRDg3jAwAn7B+3mBxtAIJujG4HWOBFimGxMqSVsInbIw3PSTFf93g/PbEVaAgtpa0EraqBd68w20fCaoochticcZ+TEVsLWkluBkVYiXexZAwg4RmuMwN1ZS+JAgUJEKkNggBuO0kEWsQpqlsOX8SZ9fuRCLcvRuSXHkCXZqIO0dYnIlcpDXRIrURsTpS5DbG7VxSxWmTCpHasFh7edPP7ShllyK300lz6fVIlUiBtU5mgdshboOUDetqcEMHSGJdej1SJ9JKLMH2Utm6PkHpEizECGGOp8lqOpFqkVZSIdjDVBZsEmuuRW4fYJt2YVaSGZFWUhESQKgQ7V6Kp2gNbueoPIlxPI2u3AuZFGktlmhxrxkItZfKoi1QuMI1qGwpIcgpKlvLTIqyFhFpHSzxQqgQMIS7mRvui1iwnlK7raVEPy7Xjq1hbacq9ifQo0aCK/8HB8lm9Qia/OYAAAAASUVORK5CYII=",
            width: 1
          })
        })), jsxs(Ramen.XBox, Object.assign({
          gap: 'xl',
          padding: 'xl'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8,
            textAlign: 'center'
          }, {
            children: "\u00A1Ups! no conseguimos impresoras disponibles"
          })), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 10,
            textAlign: 'center'
          }, {
            children: "Aseg\u00FArate de que las impresoras est\u00E9n correctamente conectadas."
          })), jsx(Ramen.XButton, {
            type: "solid",
            text: "Reintentar",
            onClick: () => {
              console.log("reintentar");
            },
            size: 'xl'
          })]
        }))]
      })]
    });
  };
  const renders = new Map();
  renders.set(ModeType.Loading, renderLoading);
  renders.set(ModeType.Home, renderHome);
  renders.set(ModeType.Warning, renderWarning);
  const render = mode => {
    return jsx(Fragment, {
      children: (() => {
        const customRender = renders.get(mode);
        if (!customRender) {
          return jsx("div", {
            children: mode
          });
        }
        return customRender();
      })()
    });
  };
  return render(mode);
}

var $$3 = _export;
var $includes = arrayIncludes.includes;
var fails$1 = fails$k;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$1(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$3({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var $$2 = _export;
var iterate = iterate$3;
var createProperty = createProperty$2;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$$2({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

var aCallable = aCallable$9;
var toObject = toObject$4;
var IndexedObject = indexedObject;
var lengthOfArrayLike = lengthOfArrayLike$4;

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

var fails = fails$k;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$1 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$1({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var img = "data:image/svg+xml,%3csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='56' height='56' rx='16' fill='%23F5F5F5'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M28.0002 44.6667C37.2049 44.6667 44.6668 37.2047 44.6668 28C44.6668 18.7953 37.2049 11.3333 28.0002 11.3333C18.7954 11.3333 11.3335 18.7953 11.3335 28C11.3335 37.2047 18.7954 44.6667 28.0002 44.6667ZM34.7468 21.1355C35.3163 20.566 36.2397 20.566 36.8092 21.1355C37.3787 21.705 37.3787 22.6284 36.8092 23.1979L26.1148 33.8923C25.5452 34.4618 24.6219 34.4618 24.0524 33.8923L19.1913 29.0312C18.6217 28.4617 18.6217 27.5383 19.1913 26.9688C19.7608 26.3993 20.6841 26.3993 21.2537 26.9688L25.0836 30.7987L34.7468 21.1355Z' fill='%232B994C'/%3e%3c/svg%3e";

var $ = _export;
var DESCRIPTORS = descriptors;
var global$1 = global$n;
var uncurryThis = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable = isCallable$n;
var isPrototypeOf = objectIsPrototypeOf;
var toString = toString$5;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$1.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

function Card(properties) {
  const {
    onClick,
    image,
    title,
    description,
    size,
    border
  } = properties;
  return jsx(Ramen.XCard, Object.assign({
    size: size,
    borderType: border
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      width: "flex",
      orientation: "horizontal",
      verticalAlign: "center",
      gap: "m",
      padding: "xxs"
    }, {
      children: [image && jsx(Ramen.XImage, {
        src: image,
        height: 8,
        width: 8,
        rounded: "full"
      }), jsx(Ramen.XBox, Object.assign({
        width: "flex",
        orientation: "horizontal",
        verticalAlign: "center"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "flex"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 11
          }, {
            children: title
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 12
          }, {
            children: description
          }))]
        }))
      })), jsx(Ramen.XButtonIcon, {
        icon: "edit-2-outline",
        size: "s",
        type: "clear",
        onClick: onClick
      })]
    }))
  }));
}

var styles = {"group-radio-button":"index-module_group-radio-button__aV4wH"};

const GroupRadioButton = properties => {
  const {
    groups,
    onChange
  } = properties;
  const [selectedOptions, setSelectedOptions] = useState(new Map());
  const onChangeHandler = (key, value) => {
    const newSelectedOptions = new Map(selectedOptions.set(key, value));
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };
  return jsx("div", Object.assign({
    className: styles['group-radio-button']
  }, {
    children: jsx(Ramen.XBox, Object.assign({
      orientation: "vertical",
      gap: "l",
      width: "full"
    }, {
      children: groups.map((group, index) => {
        const {
          value: key,
          label,
          options,
          hidden
        } = group;
        return jsx(Fragment$1, {
          children: !hidden && jsxs(Fragment, {
            children: [index > 0 && jsx(Ramen.XDivider, {}), label && jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: label
            })), options.map(option => jsx(Ramen.XOptionRadioButton, Object.assign({}, option, {
              label: option.label,
              selected: option.selected || false,
              onChange: () => onChangeHandler(key, option.value)
            }), option.value))]
          })
        }, key);
      })
    }))
  }));
};

const getConfigOptions = printer => {
  const {
    type,
    settings = {}
  } = printer || {};
  return [{
    label: 'Selecciona el modo en el que deseas trabajar',
    value: 'printer_mode',
    options: [{
      label: 'Impresión unitaria',
      value: 'unitary_printing',
      symbol: 'unitary-label-neutral',
      disabled: type === PrinterType.LASER,
      selected: (settings === null || settings === void 0 ? void 0 : settings.printer_mode) === 'unitary_printing'
    }, {
      label: 'Cola de impresión',
      value: 'print_spooler',
      symbol: 'massive-label-neutral',
      selected: (settings === null || settings === void 0 ? void 0 : settings.printer_mode) === 'print_spooler'
    }, {
      label: 'Novedades de precio',
      value: 'price_news',
      symbol: 'white label-neutral',
      selected: (settings === null || settings === void 0 ? void 0 : settings.printer_mode) === 'price_news'
    }]
  }, {
    label: 'Selecciona el tipo de fleje',
    value: 'fleje_type',
    options: [{
      label: 'Tipo de fleje 1',
      value: 'fleje_type_one',
      selected: (settings === null || settings === void 0 ? void 0 : settings.fleje_type) === 'fleje_type_one'
    }],
    hidden: !['unitary_printing', 'print_spooler'].includes(settings === null || settings === void 0 ? void 0 : settings.printer_mode),
    dependsOn: [{
      key: 'printer_mode',
      value: 'unitary_printing'
    }, {
      key: 'printer_mode',
      value: 'print_spooler'
    }]
  }];
};
function PrinterPage(properties) {
  var _a, _b, _c;
  const [store, actions] = useRootContext();
  const history = useHistory$1();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const configOptions = useMemo(() => getConfigOptions(store.selectedPrinter), [store.selectedPrinter]);
  const resetDependsOnFields = (fields = {}, otherFields) => {
    const newFields = Object.fromEntries(otherFields);
    const changes = Object.fromEntries(Object.entries(fields).filter(([key, value]) => value !== newFields[key]));
    const optionsToReset = configOptions.reduce((acc, option) => {
      var _a;
      const keys = (_a = option.dependsOn) === null || _a === void 0 ? void 0 : _a.map(item => item.key);
      (keys === null || keys === void 0 ? void 0 : keys.some(key => changes[key])) && acc.push(option.value);
      return acc;
    }, []);
    optionsToReset.forEach(item => delete newFields[item]);
    return newFields;
  };
  const validateSettings = fields => {
    return !!(fields === null || fields === void 0 ? void 0 : fields.printer_mode) && ['unitary_printing', 'print_spooler'].includes(fields === null || fields === void 0 ? void 0 : fields.printer_mode) ? !!fields.fleje_type : true;
  };
  const onGroupRadioButtonHandle = values => {
    var _a;
    const currentSettings = (_a = store.selectedPrinter) === null || _a === void 0 ? void 0 : _a.settings;
    const newSettings = resetDependsOnFields(currentSettings, values);
    const enabled = validateSettings(newSettings);
    const newSelectedPrinter = Object.assign(Object.assign({}, store.selectedPrinter), {
      settings: newSettings,
      enabled
    });
    actions.onSelectedPrinter({
      selectedPrinter: newSelectedPrinter
    });
  };
  const onClickContinue = () => {
    const {
      settings
    } = store.selectedPrinter;
    const path = {
      unitary_printing: `printing?mode=${settings === null || settings === void 0 ? void 0 : settings.printer_mode}&type=${settings === null || settings === void 0 ? void 0 : settings.fleje_type}`,
      print_spooler: `printing?mode=${settings === null || settings === void 0 ? void 0 : settings.printer_mode}&type=${settings === null || settings === void 0 ? void 0 : settings.fleje_type}`,
      // TODO: Verify this with price-news module
      price_news: '/price-news'
    }[settings === null || settings === void 0 ? void 0 : settings.printer_mode];
    path && history.push(path);
  };
  // Hooks
  useEffect(() => {
    if (!store.selectedPrinter) {
      const currentPrinter = store.printers.find(printer => printer.id === queryParams.get('id'));
      actions.onSelectedPrinter({
        selectedPrinter: currentPrinter
      });
    }
  }, [store.printers]);
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: store.title,
      onBack: () => history.goBack()
    }), jsxs(Ramen.XBody, {
      children: [jsx(Card, {
        title: (_a = store.selectedPrinter) === null || _a === void 0 ? void 0 : _a.label,
        description: (_b = store.selectedPrinter) === null || _b === void 0 ? void 0 : _b.status,
        image: img,
        onClick: () => history.goBack()
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XBox, {}), jsx(GroupRadioButton, {
        groups: configOptions,
        onChange: onGroupRadioButtonHandle
      })]
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        text: "Continuar",
        disabled: !((_c = store.selectedPrinter) === null || _c === void 0 ? void 0 : _c.enabled),
        size: "xl",
        type: "solid",
        onClick: onClickContinue
      })
    })]
  });
}

function PrintingPage() {
  const queryParams = new URLSearchParams(location.search);
  const history = useHistory();
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: queryParams.get('mode'),
      onBack: () => history.goBack()
    }), jsx(Ramen.XBody, {})]
  });
}

const BarCodeScanner = /*#__PURE__*/React.forwardRef((props, barcodeInputRef) => {
  const {
    searchDisabled,
    autoFocused,
    onScan,
    focusInput
  } = props;
  const [barcodeNumber, setBarcodeNumber] = useState('');
  const printWhenMainClick = () => {
    focusInput();
  };
  const {
    startScan
  } = useScanner(printWhenMainClick);
  const handleChange = value => {
    const oldCodeNumber = barcodeNumber;
    setBarcodeNumber(value);
    if (
    // Si el nuevo codigo es distinto al anterior
    oldCodeNumber !== value
    // Si tamaño de nuevo codigo es mayor que 1
    && value.length > 1
    // Si la diferencia entre los tamaños es mayor que 1 (significa que no se está borrando o escribiendo)
    && Math.abs(value.length - oldCodeNumber.length) > 1 && onScan) {
      onScan(value).then(() => {
        setBarcodeNumber("");
      });
    }
  };
  const handleCameraClick = () => {
    if (startScan) {
      startScan(code => {
        setBarcodeNumber(code);
        !searchDisabled && onScan && onScan(code).then(() => {
          setBarcodeNumber("");
        });
      });
    }
  };
  const handleSearchCodeClick = () => {
    if (barcodeNumber && onScan) {
      onScan(barcodeNumber).then(() => {
        setBarcodeNumber("");
      });
    }
  };
  useEffect(() => {
    if (autoFocused) {
      focusInput();
    }
  }, [autoFocused]);
  return jsx(Ramen.XBox, Object.assign({
    orientation: "horizontal",
    width: "flex",
    gap: "s"
  }, {
    children: jsx(Ramen.XCardScan, {
      onChange: e => handleChange(e.target.value),
      onClick: handleCameraClick,
      onSubmit: handleSearchCodeClick,
      placeholder: "Ingresa c\u00F3digo",
      value: barcodeNumber,
      inputRef: barcodeInputRef
    })
  }));
});

function CodePrinterPage() {
  const [store, actions] = useRootContext();
  const history = useHistory();
  const [barcodeNumber, setbarcodeNumber] = useState('');
  const focusInput = () => {
    barcodeInputRef.current && barcodeInputRef.current.focus();
  };
  const barcodeInputRef = React.useRef(null);
  console.log("store", store);
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: 'Ingresar el código de la impresora móvil',
      onBack: () => history.goBack()
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: 'm'
      }, {
        children: [jsx(BarCodeScanner, {
          searchDisabled: false,
          autoFocused: true,
          ref: barcodeInputRef,
          focusInput: focusInput,
          onScan: code => __awaiter(this, void 0, void 0, function* () {
            console.log('PCode', code);
            setbarcodeNumber(code);
          })
        }), jsx(Ramen.XAlert, {
          type: 'info',
          title: 'Si no funciona el escaner puedes, puedes ingresar manualmente el c\u00F3digo.'
        })]
      }))
    })]
  });
}

function toPages() {
  return [{
    path: '/home',
    exact: true,
    component: HomePage
  }, {
    path: '/printer',
    exact: true,
    component: PrinterPage
  }, {
    path: '/printing',
    exact: true,
    component: PrintingPage
  }, {
    path: '/codeprinter',
    exact: true,
    component: CodePrinterPage
  }];
}
function Application(props) {
  const [store, actions] = useRootContext();
  const pages = toPages();
  useHistory$1();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const settings = {
    store: queryParam.get('store'),
    country: queryParam.get('country'),
    flag: queryParam.get('flag')
  };
  useEffect(() => {
    actions.onBootSettings({
      settings
    });
    actions.onLoad();
  }, []);
  return jsx(Router, Object.assign({
    basename: props.basePath
  }, {
    children: jsx(Switch, {
      children: pages.map(page => jsx(Route, {
        path: page.path,
        exact: page.exact,
        component: page.component
      }, `page-${page.path}`))
    })
  }));
}

class Module extends SDK.Lib.BaseModule {
  constructor(params) {
    super(params);
    this.documentationPath = '/labeling';
    this.Home = props => {
      return jsx(RootProvider, Object.assign({}, props, {
        children: jsx(Application, {
          basePath: this.documentationPath
        })
      }));
    };
  }
}

export { Module as default };
