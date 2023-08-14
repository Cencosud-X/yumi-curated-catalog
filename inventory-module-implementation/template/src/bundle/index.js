import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { IonRouterOutlet } from '@ionic/react';
import * as React from 'react';
import { useState, useEffect, createContext, useContext, Fragment as Fragment$1 } from 'react';
import { Route } from 'react-router-dom';
import require$$1$1 from 'http';
import require$$2 from 'https';
import require$$0$2 from 'url';
import require$$3 from 'stream';
import require$$4 from 'assert';
import require$$0$1 from 'tty';
import require$$1 from 'util';
import require$$0 from 'os';
import require$$8 from 'zlib';
import { getAuthFromCache } from '@team_eureka/eureka-ionic-core/clients/AuthenticationClient';
import Ramen from '@team_yumi/ramen';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera } from '@capacitor/camera';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import styled from 'styled-components';
import { AuthenticationClient } from '@team_eureka/eureka-ionic-core';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$m =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$m = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$l = fails$m;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$l(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$k = fails$m;

var functionBindNative = !fails$k(function () {
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
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
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

var uncurryThis$n = functionUncurryThis;

var toString$b = uncurryThis$n({}.toString);
var stringSlice$7 = uncurryThis$n(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$7(toString$b(it), 8, -1);
};

var uncurryThis$m = functionUncurryThis;
var fails$j = fails$m;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$m(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$j(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : $Object$4(it);
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
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$5(it)) throw $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$6(it));
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
var isCallable$o = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$b = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var global$l = global$m;
var isCallable$m = isCallable$o;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
};

var uncurryThis$l = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$l({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$k = global$m;
var userAgent$3 = engineUserAgent;

var process$4 = global$k.process;
var Deno$1 = global$k.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
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
var fails$i = fails$m;
var global$j = global$m;

var $String$5 = global$j.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$i(function () {
  var symbol = Symbol();
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
var isCallable$l = isCallable$o;
var isPrototypeOf$5 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$5($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$4 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$k = isCallable$o;
var tryToString$3 = tryToString$4;

var $TypeError$d = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$8 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw $TypeError$d(tryToString$3(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$7(func);
};

var call$h = functionCall;
var isCallable$j = isCallable$o;
var isObject$a = isObject$b;

var $TypeError$c = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$a(val = call$h(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$a(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$a(val = call$h(fn, input))) return val;
  throw $TypeError$c("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$i = global$m;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$i, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$i[key] = value;
  } return value;
};

var global$h = global$m;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$h[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.31.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$5 = requireObjectCoercible$7;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$5(argument));
};

var uncurryThis$k = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$k({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$j = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$a = uncurryThis$j(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
};

var global$g = global$m;
var shared$3 = shared$4.exports;
var hasOwn$c = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$g.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$j = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$c(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$g = functionCall;
var isObject$9 = isObject$b;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var $TypeError$b = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$9(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$9(result) || isSymbol$1(result)) return result;
    throw $TypeError$b("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$f = global$m;
var isObject$8 = isObject$b;

var document$3 = global$f.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$8(document$3) && isObject$8(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$h = fails$m;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$b = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$b(O, P)) return createPropertyDescriptor$2(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$g = fails$m;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$7 = isObject$b;

var $String$3 = String;
var $TypeError$a = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$a($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey = toPropertyKey$2;

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
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey(P);
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
  P = toPropertyKey(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$6 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$7 = descriptors;
var hasOwn$a = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$a(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$i = functionUncurryThis;
var isCallable$i = isCallable$o;
var store$1 = sharedStore;

var functionToString = uncurryThis$i(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$i(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$e = global$m;
var isCallable$h = isCallable$o;

var WeakMap$1 = global$e.WeakMap;

var weakMapBasicDetection = isCallable$h(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$d = global$m;
var isObject$6 = isObject$b;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$6(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn$9(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$9(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$h = functionUncurryThis;
var fails$f = fails$m;
var isCallable$g = isCallable$o;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$2 = internalState;

var enforceInternalState$1 = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;
var stringSlice$6 = uncurryThis$h(''.slice);
var replace$5 = uncurryThis$h(''.replace);
var join = uncurryThis$h([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$f(function () {
  return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$6($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$5($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$8(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$6(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$8(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$8(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$6(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$8(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$f = isCallable$o;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$f(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
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
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$1 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
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

var uncurryThis$g = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$g([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$2, key) && hasOwn$7(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
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
var uncurryThis$f = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$d = anObject$f;

var concat$2 = uncurryThis$f([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$d(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$6 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$6(target, key) && !(exceptions && hasOwn$6(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$e = fails$m;
var isCallable$e = isCallable$o;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data$1[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$e(detection) ? fails$e(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data$1 = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$c = global$m;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$7 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced$2 = isForced_1;

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
    target = global$c;
  } else if (STATIC) {
    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$c[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
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

var DESCRIPTORS$5 = descriptors;
var uncurryThis$e = functionUncurryThis;
var call$e = functionCall;
var fails$d = fails$m;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$5 = Object.defineProperty;
var concat$1 = uncurryThis$e([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$d(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$5 && $assign({ b: 1 }, $assign(defineProperty$5({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$5(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$5 || call$e(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$c = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$c({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var wellKnownSymbol$h = wellKnownSymbol$j;

var TO_STRING_TAG$3 = wellKnownSymbol$h('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$d = isCallable$o;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$g = wellKnownSymbol$j;

var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$d(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String$1 = String;

var toString$9 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$c = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$c(this);
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

var fails$c = fails$m;
var global$b = global$m;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$b.RegExp;

var UNSUPPORTED_Y$2 = fails$c(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$c(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$c(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var DESCRIPTORS$4 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$b = anObject$f;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$b(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$7;

var html$2 = getBuiltIn$4('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$a = anObject$f;
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
    EmptyConstructor[PROTOTYPE] = anObject$a(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$b = fails$m;
var global$a = global$m;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$a.RegExp;

var regexpUnsupportedDotAll = fails$b(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$a = fails$m;
var global$9 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$9.RegExp;

var regexpUnsupportedNcg = fails$a(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$d = functionCall;
var uncurryThis$d = functionUncurryThis;
var toString$8 = toString$9;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create$2 = objectCreate;
var getInternalState$1 = internalState.get;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$4 = uncurryThis$d(''.charAt);
var indexOf = uncurryThis$d(''.indexOf);
var replace$4 = uncurryThis$d(''.replace);
var stringSlice$5 = uncurryThis$d(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$d(nativeExec, re1, 'a');
  call$d(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$1(re);
    var str = toString$8(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$d(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$d(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$4(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$5(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
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

    match = call$d(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$5(match.input, charsAdded);
        match[0] = stringSlice$5(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$d(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$2(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$b = _export;
var exec$2 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$b({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
  exec: exec$2
});

var classofRaw = classofRaw$2;
var uncurryThis$c = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$c(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$b = functionUncurryThisClause;
var defineBuiltIn$6 = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$9 = fails$m;
var wellKnownSymbol$f = wellKnownSymbol$j;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;

var SPECIES$3 = wellKnownSymbol$f('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$f(KEY);

  var DELEGATES_TO_SYMBOL = !fails$9(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$9(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$b(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$b(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$3.exec) {
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

    defineBuiltIn$6(String.prototype, KEY, methods[0]);
    defineBuiltIn$6(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$3(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$a = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$7 = toString$9;
var requireObjectCoercible$4 = requireObjectCoercible$7;

var charAt$3 = uncurryThis$a(''.charAt);
var charCodeAt = uncurryThis$a(''.charCodeAt);
var stringSlice$4 = uncurryThis$a(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$7(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$3(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$4(S, position, position + 2)
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

var charAt$2 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var call$c = functionCall;
var anObject$9 = anObject$f;
var isCallable$c = isCallable$o;
var classof$4 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$8 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$c(exec)) {
    var result = call$c(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$c(regexpExec, R, S);
  throw $TypeError$8('RegExp#exec called on incompatible receiver');
};

var call$b = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$8 = anObject$f;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var toLength$1 = toLength$3;
var toString$6 = toString$9;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var getMethod$3 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$3(regexp, MATCH);
      return matcher ? call$b(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$6(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$8(this);
      var S = toString$6(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$6(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var wellKnownSymbol$e = wellKnownSymbol$j;
var create$1 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$e('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$8 = fails$m;

var correctPrototypeGetter = !fails$8(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$b = isCallable$o;
var toObject$1 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$b(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails$7 = fails$m;
var isCallable$a = isCallable$o;
var isObject$5 = isObject$b;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$d = wellKnownSymbol$j;

var ITERATOR$5 = wellKnownSymbol$d('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$7(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$a(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$5(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$c = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG$1)) {
    defineProperty$3(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$9 = functionUncurryThis;
var aCallable$6 = aCallable$8;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$9(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$9 = isCallable$o;

var $String = String;
var $TypeError$7 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$9(argument)) return argument;
  throw $TypeError$7("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$7 = anObject$f;
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
    anObject$7(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$a = _export;
var call$a = functionCall;
var FunctionName = functionName;
var isCallable$8 = isCallable$o;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var defineBuiltIn$4 = defineBuiltIn$8;
var wellKnownSymbol$b = wellKnownSymbol$j;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$b('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

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
  var nativeIterator = IterablePrototype[ITERATOR$4]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$2) {
          setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$8(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$a(nativeIterator, this); };
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
        defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$a({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$4(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
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
var InternalStateModule$1 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

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
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
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
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$2(values, 'name', { value: 'values' });
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

var global$8 = global$m;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var wellKnownSymbol$a = wellKnownSymbol$j;

var ITERATOR$3 = wellKnownSymbol$a('iterator');
var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$3, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
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
  handlePrototype(global$8[COLLECTION_NAME] && global$8[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

const toSnakeCase = str => {
  const matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];
  return matches.map(x => x.toLowerCase()).join('_');
};
// eslint-disable-next-line @typescript-eslint/ban-types
class Module extends React.Component {
  constructor(props, descriptor) {
    super(props);
    this.descriptor = descriptor;
  }
  render() {
    const {
      match
    } = this.props;
    const routes = [...this.descriptor.routes];
    if (this.descriptor.override.routes) {
      this.descriptor.override.routes.forEach(route => {
        const match = routes.find(r => r.path === route.path);
        if (!match) {
          routes.push(route);
          return;
        }
        console.warn(`Override route ${match.path} was not added because it already exists in definition module.`);
      });
    }
    return jsx(IonRouterOutlet, {
      children: routes.map(({
        path,
        page: PageComponent
      }) => {
        const absolutePath = [match.url, path].join('');
        return jsx(Route, {
          path: absolutePath,
          exact: true,
          render: props => {
            let extensions = null;
            if (this.descriptor.override.extensions && this.descriptor.override.extensions[toSnakeCase(PageComponent.name)]) {
              extensions = this.descriptor.override.extensions[toSnakeCase(PageComponent.name)];
            }
            return jsx(PageComponent, Object.assign({}, props, {
              extensions: extensions
            }));
          }
        }, path);
      })
    });
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
class Page extends React.Component {}

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$9 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$9.bind(apply$2) : function () {
  return call$9.apply(apply$2, arguments);
});

var uncurryThis$8 = functionUncurryThis;
var toObject = toObject$4;

var floor = Math.floor;
var charAt$1 = uncurryThis$8(''.charAt);
var replace$3 = uncurryThis$8(''.replace);
var stringSlice$3 = uncurryThis$8(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$3(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$1(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$3(str, 0, position);
      case "'": return stringSlice$3(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$3(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply$1 = functionApply;
var call$8 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$6 = fails$m;
var anObject$6 = anObject$f;
var isCallable$7 = isCallable$o;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString$5 = toString$9;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$2;
var getMethod$2 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$9 = wellKnownSymbol$j;

var REPLACE = wellKnownSymbol$9('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$7([].concat);
var push = uncurryThis$7([].push);
var stringIndexOf$2 = uncurryThis$7(''.indexOf);
var stringSlice$2 = uncurryThis$7(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$6(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = isNullOrUndefined$2(searchValue) ? undefined : getMethod$2(searchValue, REPLACE);
      return replacer
        ? call$8(replacer, searchValue, O, replaceValue)
        : call$8(nativeReplace, toString$5(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$6(this);
      var S = toString$5(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$2(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$7(replaceValue);
      if (!functionalReplace) replaceValue = toString$5(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString$5(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$5(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString$5(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$2(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$2(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$6 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var toString$4 = toString$9;
var whitespaces$1 = whitespaces$2;

var replace$2 = uncurryThis$6(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$4(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$2(string, ltrim, '');
    if (TYPE & 2) string = replace$2(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var fails$5 = fails$m;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$5(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$9 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$9({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable$6 = isCallable$o;
var isObject$4 = isObject$b;
var setPrototypeOf$1 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$6(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$4(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var isObject$3 = isObject$b;
var classof$3 = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$j;

var MATCH$2 = wellKnownSymbol$8('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$3(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var call$7 = functionCall;
var hasOwn$3 = hasOwnProperty_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$3(R, 'flags') && isPrototypeOf$4(RegExpPrototype$2, R)
    ? call$7(regExpFlags, R) : flags;
};

var defineProperty$1 = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$1(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor$2 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
var wellKnownSymbol$7 = wellKnownSymbol$j;
var DESCRIPTORS$2 = descriptors;

var SPECIES$2 = wellKnownSymbol$7('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$1 = descriptors;
var global$7 = global$m;
var uncurryThis$5 = functionUncurryThis;
var isForced$1 = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf$3 = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$3 = toString$9;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$3 = defineBuiltIn$8;
var fails$4 = fails$m;
var hasOwn$2 = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies$1 = setSpecies$2;
var wellKnownSymbol$6 = wellKnownSymbol$j;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$6('match');
var NativeRegExp = global$7.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$7.SyntaxError;
var exec$1 = uncurryThis$5(RegExpPrototype$1.exec);
var charAt = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringIndexOf$1 = uncurryThis$5(''.indexOf);
var stringSlice$1 = uncurryThis$5(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$1 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$4(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$1(IS_NCG, stringSlice$1(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$2(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced$1('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$3(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$3(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$3(pattern);
    flags = flags === undefined ? '' : toString$3(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
      if (dotAll) flags = replace$1(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace$1(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$3(global$7, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$1('RegExp');

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn$2 = defineBuiltIn$8;
var anObject$5 = anObject$f;
var $toString = toString$9;
var fails$3 = fails$m;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$3(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$5(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var $$8 = _export;
var DESCRIPTORS = descriptors;
var global$6 = global$m;
var uncurryThis$4 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$5 = isCallable$o;
var isPrototypeOf$2 = objectIsPrototypeOf;
var toString$2 = toString$9;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$6.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable$5(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$2(arguments[0]);
    var result = isPrototypeOf$2(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis$4(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$4(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis$4(''.replace);
  var stringSlice = uncurryThis$4(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$8({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var classof$2 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$2(process) == 'process';

var isPrototypeOf$1 = objectIsPrototypeOf;

var $TypeError$6 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw $TypeError$6('Incorrect invocation');
};

var uncurryThis$3 = functionUncurryThis;
var fails$2 = fails$m;
var isCallable$4 = isCallable$o;
var classof$1 = classof$6;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop$1 = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$3(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
  try {
    construct(noop$1, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
  switch (classof$1(argument)) {
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
var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$2 = tryToString$4;

var $TypeError$5 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$5(tryToString$2(argument) + ' is not a constructor');
};

var anObject$4 = anObject$f;
var aConstructor = aConstructor$1;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var wellKnownSymbol$5 = wellKnownSymbol$j;

var SPECIES$1 = wellKnownSymbol$5('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$4(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var uncurryThis$2 = functionUncurryThisClause;
var aCallable$5 = aCallable$8;
var NATIVE_BIND = functionBindNative;

var bind$7 = uncurryThis$2(uncurryThis$2.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$7(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$1 = functionUncurryThis;

var arraySlice$1 = uncurryThis$1([].slice);

var $TypeError$4 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$4('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$5 = global$m;
var apply = functionApply;
var bind$6 = functionBindContext;
var isCallable$3 = isCallable$o;
var hasOwn = hasOwnProperty_1;
var fails$1 = fails$m;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$5.setImmediate;
var clear = global$5.clearImmediate;
var process$3 = global$5.process;
var Dispatch = global$5.Dispatch;
var Function$1 = global$5.Function;
var MessageChannel = global$5.MessageChannel;
var String$1 = global$5.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$1(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$5.location;
});

var run = function (id) {
  if (hasOwn(queue$2, id)) {
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
  global$5.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$3(handler) ? handler : Function$1(handler);
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
  if (IS_NODE$3) {
    defer = function (id) {
      process$3.nextTick(runner(id));
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
    defer = bind$6(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$5.addEventListener &&
    isCallable$3(global$5.postMessage) &&
    !global$5.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$1(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$5.addEventListener('message', eventListener, false);
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

var global$4 = global$m;
var bind$5 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$4.MutationObserver || global$4.WebKitMutationObserver;
var document$2 = global$4.document;
var process$2 = global$4.process;
var Promise$1 = global$4.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$4, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node$1, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
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
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node$1 = document$2.createTextNode('');
    new MutationObserver(flush).observe(node$1, { characterData: true });
    notify$1 = function () {
      node$1.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$5(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$5(macrotask, global$4);
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
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$3 = global$m;

var promiseNativeConstructor = global$3.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$2 = global$m;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$2 = isCallable$o;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$4 = wellKnownSymbol$j;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$4('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(global$2.PromiseRejectionEvent);

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

var aCallable$4 = aCallable$8;

var $TypeError$3 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$3('Bad Promise constructor');
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

var $$7 = _export;
var IS_NODE = engineIsNode;
var global$1 = global$m;
var call$6 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$8;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$3;
var setSpecies = setSpecies$2;
var aCallable$3 = aCallable$8;
var isCallable$1 = isCallable$o;
var isObject$2 = isObject$b;
var anInstance = anInstance$1;
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
var TypeError$1 = global$1.TypeError;
var document$1 = global$1.document;
var process$1 = global$1.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
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
  return isObject$2(it) && isCallable$1(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
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
        call$6(then, result, resolve, reject);
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
    global$1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$6(task, global$1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$6(task, global$1, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$4 = function (fn, state, unwrap) {
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
          call$6(then, value,
            bind$4(internalResolve, wrapper, state),
            bind$4(internalReject, wrapper, state)
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
    call$6(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
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
    reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$1(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$4(internalResolve, state);
    this.reject = bind$4(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$1(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$6(nativeThen, that, resolve, reject);
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

$$7({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var wellKnownSymbol$3 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$3('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof = classof$6;
var getMethod$1 = getMethod$5;
var isNullOrUndefined = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$2 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$2('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof(it)];
};

var call$5 = functionCall;
var aCallable$2 = aCallable$8;
var anObject$3 = anObject$f;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$2 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$3(call$5(iteratorMethod, argument));
  throw $TypeError$2(tryToString$1(argument) + ' is not iterable');
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

var bind$3 = functionBindContext;
var call$3 = functionCall;
var anObject$1 = anObject$f;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError$1 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
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
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
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
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$1 = wellKnownSymbol$j;

var ITERATOR = wellKnownSymbol$1('iterator');
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

var $$6 = _export;
var call$2 = functionCall;
var aCallable$1 = aCallable$8;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
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

var $$5 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable = isCallable$o;
var defineBuiltIn = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$5({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$4 = _export;
var call$1 = functionCall;
var aCallable = aCallable$8;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call$1($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$3 = _export;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject = anObject$f;
var isObject$1 = isObject$b;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$2 = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$2({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString$1 = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString$1.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString$1.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString$1(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString$1.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString$1.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString$1.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString$1.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction$1(val) {
  return toString$1.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction$1(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString$1.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils$f = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString$1,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction$1,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

var utils$e = utils$f;

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL$3 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$e.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$e.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$e.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$e.forEach(val, function parseValue(v) {
        if (utils$e.isDate(v)) {
          v = v.toISOString();
        } else if (utils$e.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$d = utils$f;

function InterceptorManager$1() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$d.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$c = utils$f;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$c.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError$3 = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

var enhanceError$2 = enhanceError$3;

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError$3 = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError$2(error, config, code, request, response);
};

var createError$2 = createError$3;

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle$2 = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError$2(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var utils$b = utils$f;

var cookies$1 = (
  utils$b.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils$b.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils$b.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils$b.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var utils$a = utils$f;

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils$a.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils$a.trim(line.substr(0, i)).toLowerCase();
    val = utils$a.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var utils$9 = utils$f;

var isURLSameOrigin$1 = (
  utils$9.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils$9.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel$4(message) {
  this.message = message;
}

Cancel$4.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel$4.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel$4;

var utils$8 = utils$f;
var settle$1 = settle$2;
var cookies = cookies$1;
var buildURL$2 = buildURL$3;
var buildFullPath$1 = buildFullPath$2;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError$1 = createError$3;
var defaults$5 = defaults_1;
var Cancel$3 = Cancel_1;

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils$8.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath$1(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle$1(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError$1('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError$1('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults$5.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError$1(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils$8.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$8.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils$8.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel$3('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var followRedirects = {exports: {}};

var src = {exports: {}};

var browser = {exports: {}};

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

/* eslint-env browser */

(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
}(browser, browser.exports));

var node = {exports: {}};

var hasFlag$1 = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const os = require$$0;
const hasFlag = hasFlag$1;

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};

/**
 * Module dependencies.
 */

(function (module, exports) {
const tty = require$$0$1;
const util = require$$1;

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};
}(node, node.exports));

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	src.exports = browser.exports;
} else {
	src.exports = node.exports;
}

var debug$1;

var debug_1 = function () {
  if (!debug$1) {
    try {
      /* eslint global-require: off */
      debug$1 = src.exports("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug$1 !== "function") {
      debug$1 = function () { /* */ };
    }
  }
  debug$1.apply(null, arguments);
};

var url$1 = require$$0$2;
var URL = url$1.URL;
var http$1 = require$$1$1;
var https$1 = require$$2;
var Writable = require$$3.Writable;
var assert = require$$4;
var debug = debug_1;

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url$1.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url$1.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url$1.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url$1.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url$1.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    try {
      beforeRedirect(this._options, responseDetails, requestDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (isString(input)) {
        var parsed;
        try {
          parsed = urlToOptions(new URL(input));
        }
        catch (err) {
          /* istanbul ignore next */
          parsed = url$1.parse(input);
        }
        if (!isString(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
        input = parsed;
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  return CustomError;
}

function abortRequest(request) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

// Exports
followRedirects.exports = wrap({ http: http$1, https: https$1 });
followRedirects.exports.wrap = wrap;

var data = {
  "version": "0.25.0"
};

var utils$7 = utils$f;
var settle = settle$2;
var buildFullPath = buildFullPath$2;
var buildURL$1 = buildURL$3;
var http = require$$1$1;
var https = require$$2;
var httpFollow = followRedirects.exports.http;
var httpsFollow = followRedirects.exports.https;
var url = require$$0$2;
var zlib = require$$8;
var VERSION$1 = data.version;
var createError = createError$3;
var enhanceError$1 = enhanceError$3;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;

var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    var resolve = function resolve(value) {
      done();
      resolvePromise(value);
    };
    var rejected = false;
    var reject = function reject(value) {
      done();
      rejected = true;
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    var headerNames = {};

    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('user-agent' in headerNames) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers[headerNames['user-agent']]) {
        delete headers[headerNames['user-agent']];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + VERSION$1;
    }

    if (data && !utils$7.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$7.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$7.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(createError('Request body larger than maxBodyLength limit', config));
      }

      // Add Content-Length header if data exists
      if (!headerNames['content-length']) {
        headers['Content-Length'] = data.length;
      }
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destoy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          stream.destroy();
          reject(createError('error request aborted', config, 'ERR_REQUEST_ABORTED', lastRequest));
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError$1(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          try {
            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                responseData = utils$7.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(enhanceError$1(err, config, err.code, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError$1(err, config, null, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(createError(
          'error trying to parse `config.timeout` to int',
          config,
          'ERR_PARSE_TIMEOUT',
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var transitional = config.transitional || defaults$4.transitional;
        reject(createError(
          'timeout of ' + timeout + 'ms exceeded',
          config,
          transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          req
        ));
      });
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(!cancel || (cancel && cancel.type) ? new Cancel$2('canceled') : cancel);
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }


    // Send the request
    if (utils$7.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError$1(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var utils$6 = utils$f;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$3;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$6.isFormData(data) ||
      utils$6.isArrayBuffer(data) ||
      utils$6.isBuffer(data) ||
      utils$6.isStream(data) ||
      utils$6.isFile(data) ||
      utils$6.isBlob(data)
    ) {
      return data;
    }
    if (utils$6.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$6.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils$6.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$6.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils$6.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$6.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$5 = utils$f;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$5.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var utils$4 = utils$f;
var transformData = transformData$1;
var isCancel = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel$1('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$4.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$4.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$3 = utils$f;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source)) {
      return utils$3.merge(target, source);
    } else if (utils$3.isPlainObject(source)) {
      return utils$3.merge({}, source);
    } else if (utils$3.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils$3.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var VERSION = data.version;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator$1 = {
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$2 = utils$f;
var buildURL = buildURL$3;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }
  config = mergeConfig$1(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils$2.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$2.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios$1;

var Cancel = Cancel_1;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

var utils$1 = utils$f;

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
};

var utils = utils$f;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axios$2.exports.default = axios$1;

var axios = axios$2.exports;

/**
 *
 * @param error * Interceptor for success request.
 *
 * @returns
 */
const onRequestError = error => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.reject(error);
});

/**
 * Interceptor for error response.
 *
 * @param error
 */
const onResponseError = error => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.reject(error);
});
/**
 *
 * @param response
 * @returns
 */
const onResponse = response => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.resolve(response);
});

class AxiosProvider {
  constructor(config) {
    this.config = {
      headers: {},
      params: {}
    };
    this.axios = axios.create(config);
    this.addInterceptors();
  }
  addInterceptors() {
    this.axios.interceptors.request.use(this.onRequest);
  }
  onRequest(config) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (config.headers) {
        const jwt = yield getAuthFromCache();
        config.headers['Authorization'] = `${(_a = jwt === null || jwt === void 0 ? void 0 : jwt.user) === null || _a === void 0 ? void 0 : _a.token_type.toLowerCase()} ${(_b = jwt === null || jwt === void 0 ? void 0 : jwt.user) === null || _b === void 0 ? void 0 : _b.access_token}`;
      }
      return Promise.resolve(config);
    });
  }
  onRequestError(error) {
    return onRequestError(error);
  }
  onResponse(response) {
    return onResponse(response);
  }
  onErrorResponse(error) {
    return onResponseError(error);
  }
  get(uri, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(uri, this.mergeConfigs(params));
      return response.data;
    });
  }
  post(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.post(uri, data, this.mergeConfigs(params));
      return response.data;
    });
  }
  put(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.put(uri, data, this.mergeConfigs(params));
      return response.data;
    });
  }
  delete(uri, params = {}, data) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.axios.delete(uri, Object.assign(Object.assign({}, this.mergeConfigs(params)), {
        data
      }));
    });
  }
  patch(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.patch(uri, Object.assign(Object.assign({}, this.mergeConfigs(params)), {
        data
      }));
      return response.data;
    });
  }
  setAutorization(token_type, token) {
    if (token) {
      this.axios.defaults.headers.common['Authorization'] = `${token_type === null || token_type === void 0 ? void 0 : token_type.toString().toLowerCase()} ${token}`;
    } else if (this.axios.defaults.headers.common['Authorization']) {
      delete this.axios.defaults.headers.common['Authorization'];
    }
  }
  setBaseUrl(url) {
    this.axios.defaults.baseURL = url;
  }
  mergeConfigs(params) {
    return Object.assign(Object.assign({}, this.config), {
      params: Object.assign(Object.assign({}, this.config.params), params)
    });
  }
}

const config = {
  baseURL: '',
  timeout: 10000
};
class InventoryAPI extends AxiosProvider {
  constructor() {
    super(config);
    this.countryCode = '';
  }
  setCountryCode(code) {
    this.countryCode = code;
  }
  getZonification(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/inventory/${this.countryCode}/${request.store}/scan/zonification/${request.code}`);
    });
  }
  createInventory(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/inventory/${this.countryCode}/${request.store}`, request);
    });
  }
  getProduct(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/product/${this.countryCode}/${request.store}/scan`, request.data);
    });
  }
  saveProduct(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/product/${request.inventoryID}`, request.product);
    });
  }
  finishInventory(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.patch(`/inventory/${this.countryCode}/${request.inventoryID}`, {});
    });
  }
  getTotalFurniture(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/inventory/${this.countryCode}/${request.store}/furniture/total`);
    });
  }
  getAllZonificationsSaved(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/inventory/${this.countryCode}/${request.store}/list-saved`, request.zonifications);
    });
  }
  getAllZonificationsInProgress(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/inventory/${this.countryCode}/${request.store}/progress`, request.zonifications);
    });
  }
  getFiltersByZonification(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/inventory/${this.countryCode}/${request.store}/filters`, request.zonifications);
    });
  }
  getProductsByZonificationSaved(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/product/${request.productInventoryId}/all`, {});
    });
  }
  sendProductsBySavedZonification(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/inventory/${this.countryCode}/send/inventory`, request);
    });
  }
  editProductCount(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.patch(`/product/${request.id}`, request.inventory);
    });
  }
}
const inventoryAPI = new InventoryAPI();

var InventoryPagesEnum;
(function (InventoryPagesEnum) {
  InventoryPagesEnum["PAGE_LOAD_ZONE"] = "PAGE_LOAD_ZONE";
  InventoryPagesEnum["PAGE_SCAN_ZONE"] = "PAGE_SCAN_ZONE";
  InventoryPagesEnum["PAGE_SCAN_PRODUCT"] = "PAGE_SCAN_PRODUCT";
  InventoryPagesEnum["PAGE_READ_PRODUCT"] = "PAGE_READ_PRODUCT";
  InventoryPagesEnum["PAGE_SUCCESS"] = "PAGE_SUCCESS";
  InventoryPagesEnum["PAGE_INVENTORY_SAVED_LIST"] = "PAGE_INVENTORY_SAVED_LIST";
  InventoryPagesEnum["PAGE_INVENTORY_SAVED_FILTERS"] = "PAGE_INVENTORY_SAVED_FILTERS";
  InventoryPagesEnum["PAGE_INVENTORY_SAVED_EDIT"] = "PAGE_INVENTORY_SAVED_EDIT";
  InventoryPagesEnum["PAGE_INVENTORY_SAVED_LOAD_SUCCESS"] = "PAGE_INVENTORY_SAVED_LOAD_SUCCESS";
  InventoryPagesEnum["PAGE_INVENTORY_SUMMARY_LOAD"] = "PAGE_INVENTORY_SUMMARY_LOAD";
})(InventoryPagesEnum || (InventoryPagesEnum = {}));

var InventoryTypeEnum;
(function (InventoryTypeEnum) {
  InventoryTypeEnum["CONTINUOS"] = "CONTINUOS";
  InventoryTypeEnum["QUANTITY"] = "QUANTITY";
})(InventoryTypeEnum || (InventoryTypeEnum = {}));

var InventoryRoutesEnum;
(function (InventoryRoutesEnum) {
  InventoryRoutesEnum["ROOT"] = "/";
  InventoryRoutesEnum["MENU"] = "/tools/inventory";
  InventoryRoutesEnum["NEW_INVENTORY"] = "/tools/inventory/new";
  InventoryRoutesEnum["SAVED_INVENTORY"] = "/tools/inventory/saved";
  InventoryRoutesEnum["SAVED_FILTER_INVENTORY"] = "/tools/inventory/saved/filter";
  InventoryRoutesEnum["SUMMARY"] = "/tools/inventory/summary";
})(InventoryRoutesEnum || (InventoryRoutesEnum = {}));

var TitlePagesEnum;
(function (TitlePagesEnum) {
  TitlePagesEnum["INVENTORY_PERISHABLE"] = "Inventario de perecibles";
  TitlePagesEnum["INVENTORY_SAVED"] = "Inventario Guardado";
  TitlePagesEnum["INVENTORY_SUMMARY"] = "Toma de inventario";
  TitlePagesEnum["FILTERS"] = "Filtros";
})(TitlePagesEnum || (TitlePagesEnum = {}));

var ScanProductTypesEnum;
(function (ScanProductTypesEnum) {
  ScanProductTypesEnum["EAN"] = "EAN";
  ScanProductTypesEnum["SKU"] = "SKU";
})(ScanProductTypesEnum || (ScanProductTypesEnum = {}));

var NotificationTypeEnum;
(function (NotificationTypeEnum) {
  NotificationTypeEnum["SUCCESS"] = "success";
  NotificationTypeEnum["WARNING"] = "warning";
  NotificationTypeEnum["ERROR"] = "error";
  NotificationTypeEnum["INFO"] = "info";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));

var PlacementTypeEnum;
(function (PlacementTypeEnum) {
  PlacementTypeEnum["TOP"] = "top";
  PlacementTypeEnum["BOTTOM"] = "bottom";
})(PlacementTypeEnum || (PlacementTypeEnum = {}));

var InventoryStatusEnum;
(function (InventoryStatusEnum) {
  InventoryStatusEnum["CREATED"] = "CREATED";
  InventoryStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
  InventoryStatusEnum["COMPLETED"] = "COMPLETED";
  InventoryStatusEnum["SENT"] = "SENT";
  InventoryStatusEnum["EXPIRED"] = "EXPIRED";
})(InventoryStatusEnum || (InventoryStatusEnum = {}));

var UomShowTypeEnum;
(function (UomShowTypeEnum) {
  UomShowTypeEnum["GENERAL"] = "GENERAL";
  UomShowTypeEnum["INDIVIDUAL"] = "INDIVIDUAL";
})(UomShowTypeEnum || (UomShowTypeEnum = {}));

const loading = (isActive, text = 'Cargando...') => {
  if (isActive) {
    Ramen.Api.loading.show({
      text: text
    });
  } else {
    Ramen.Api.loading.hide();
  }
};

const INITIAL_STATE_INVENTORY = {
  id: '',
  country: 'NONE',
  zonificationCode: '',
  store: {
    code: '',
    name: ''
  },
  storage: {
    code: '',
    name: ''
  },
  zone: {
    code: '',
    name: ''
  },
  furniture: {
    code: ''
  },
  status: InventoryStatusEnum.CREATED,
  createdAt: '',
  createdUserEmail: '',
  createdUserName: '',
  updatedAt: '',
  updatedUserName: '',
  updatedUserEmail: '',
  completedAt: '',
  completedUserName: '',
  totalProduct: 0
};
const INITIAL_STATE_PRODUCT = {
  uom: '',
  description: '',
  ean: '',
  keySearcher: '',
  sku: '',
  imageUrl: '',
  metaData: null,
  quantity: 0,
  scanTotal: 0,
  scanTotalContinue: 0,
  scanTotalQuantity: 0,
  scanLastContinue: 0,
  scanLastQuantity: 0
};
const RESPONSE_ERROR_API = {
  response: null,
  code: 'E',
  message: 'Ocurrio un error, consulte al administrador',
  success: false
};
const InventoryContext = /*#__PURE__*/createContext({});
const InventoryProvider = ({
  children,
  historyData,
  env,
  getStoreData
}) => {
  var _a;
  const [inventory, setInventory] = useState(Object.assign(Object.assign({}, INITIAL_STATE_INVENTORY), {
    country: (_a = env === null || env === void 0 ? void 0 : env.country) !== null && _a !== void 0 ? _a : 'NONE'
  }));
  const [product, setProduct] = useState(INITIAL_STATE_PRODUCT);
  const [productIdSelected, setProductIdSelected] = useState();
  const [quantity, setQuantity] = useState('');
  const [userStore, setUserStore] = useState({
    code: '',
    name: ''
  });
  const [page, setPage] = useState(InventoryPagesEnum.PAGE_LOAD_ZONE);
  const [inventoryType, setInventoryType] = useState(InventoryTypeEnum.CONTINUOS);
  const [history, setHistory] = useState();
  const [zoneSelected, setZoneSelected] = useState([]);
  const [userSelected, setUserSelected] = useState([]);
  const [furnituresSelected, setFurnituresSelected] = useState([]);
  const [inventoriesSelectedSaved, setInventoriesSelectedSaved] = useState([]);
  const [appClientID, setAppClientID] = useState('');
  const [messages, setMessages] = useState({});
  const [uomShowType, setUomShowType] = useState(UomShowTypeEnum.INDIVIDUAL);
  const actionClearInventory = () => {
    var _a;
    const cleanData = Object.assign(Object.assign(Object.assign({}, INITIAL_STATE_INVENTORY), {
      country: (_a = env === null || env === void 0 ? void 0 : env.country) !== null && _a !== void 0 ? _a : 'NONE'
    }), {
      store: userStore
    });
    setDataInventory(cleanData);
    actionClearProduct();
  };
  const actionClearProduct = () => {
    setQuantity('');
    setProduct(INITIAL_STATE_PRODUCT);
  };
  const setDataInventory = value => {
    setInventory(Object.assign(Object.assign({}, inventory), value));
  };
  const setDataProduct = value => {
    setProduct(Object.assign(Object.assign({}, product), value));
  };
  const getDataZonification = code => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: userStore.code,
      code
    };
    try {
      loading(true);
      const {
        data: response,
        code,
        message,
        success
      } = yield inventoryAPI.getZonification(request);
      if (response) {
        setDataInventory({
          store: userStore,
          zone: response.zone,
          storage: response.storage,
          furniture: response.furniture,
          zonificationCode: `${response.zone.code}${response.furniture.code}`
        });
      }
      return {
        response: response,
        code: code,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const getInventoryID = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      zonificationCode: inventory.zonificationCode,
      store: inventory.store.code,
      zone: inventory.zone,
      storage: inventory.storage,
      furniture: inventory.furniture
    };
    try {
      loading(true);
      const {
        data: response,
        code,
        message,
        success
      } = yield inventoryAPI.createInventory(request);
      if (response) {
        setDataInventory({
          id: response._id,
          createdAt: response.createdAt,
          createdUserEmail: response.createdUserEmail,
          updatedAt: response.updatedAt,
          status: response.status
        });
      }
      return {
        response: response,
        code: code,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const getProduct = (key, type) => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: inventory.store.code,
      data: {
        productInventoryId: inventory.id,
        storage: inventory.storage.code.toString(),
        key,
        type
      }
    };
    try {
      loading(true);
      const {
        data: response,
        code,
        message,
        success
      } = yield inventoryAPI.getProduct(request);
      if (response) {
        setDataProduct({
          imageUrl: response.imageUrl ? response.imageUrl : '',
          ean: response.ean,
          keySearcher: response.keySearcher,
          sku: response.sku,
          uom: response.uom,
          description: response.description,
          quantity: response.quantity,
          metaData: response.metaData ? response.metaData : null,
          scanTotalContinue: response.scanTotalContinue,
          scanLastContinue: response.scanLastContinue,
          scanTotalQuantity: response.scanTotalQuantity,
          scanLastQuantity: response.scanLastQuantity,
          scanTotal: response.scanTotal
        });
      }
      return {
        response: response,
        code: code,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const saveProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d;
    const request = {
      inventoryID: inventory.id,
      product: Object.assign(Object.assign(Object.assign({
        ean: (_b = product.ean) === null || _b === void 0 ? void 0 : _b.toString(),
        keySearcher: (_c = product.keySearcher) === null || _c === void 0 ? void 0 : _c.toString(),
        sku: (_d = product.sku) === null || _d === void 0 ? void 0 : _d.toString(),
        description: product.description,
        imageUrl: product.imageUrl,
        uom: product.uom
      }, inventoryType === InventoryTypeEnum.CONTINUOS && {
        scanContinue: product.quantity
      }), inventoryType === InventoryTypeEnum.QUANTITY && {
        scanQuantity: Number(quantity)
      }), product.metaData && {
        metaData: product.metaData
      })
    };
    try {
      loading(true);
      const {
        data: response,
        code,
        message,
        success
      } = yield inventoryAPI.saveProduct(request);
      if (response) {
        setDataInventory({
          totalProduct: inventory.totalProduct + 1
        });
      }
      return {
        response: response,
        code: code,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const finishInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      inventoryID: inventory.id
    };
    try {
      loading(true);
      const {
        data: response,
        code,
        message,
        success
      } = yield inventoryAPI.finishInventory(request);
      if (response) {
        setDataInventory({
          createdUserName: response.userName,
          createdUserMail: response.userEmail,
          completedAt: response.completedAt
        });
      }
      return {
        response: response,
        code: code,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const getTotalFurniture = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: userStore.code
    };
    try {
      loading(true);
      const {
        data: response,
        message,
        success
      } = yield inventoryAPI.getTotalFurniture(request);
      return {
        response: response,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const listSavedZonification = filterZonification => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: userStore.code,
      zonifications: filterZonification
    };
    try {
      loading(true);
      const {
        data: response
      } = yield inventoryAPI.getAllZonificationsSaved(request);
      return response;
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const listInProgressZonification = filterZonification => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: userStore.code,
      zonifications: filterZonification
    };
    try {
      loading(true);
      const {
        data: response
      } = yield inventoryAPI.getAllZonificationsInProgress(request);
      return response;
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const listFiltersZonification = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      store: userStore.code
    };
    try {
      loading(true);
      const {
        data: response
      } = yield inventoryAPI.getFiltersByZonification(request);
      return response;
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const listProductsByZonification = productInventoryId => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      productInventoryId: productInventoryId
    };
    try {
      loading(true);
      const {
        data: response
      } = yield inventoryAPI.getProductsByZonificationSaved(request);
      return response;
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const sendListInventory = inventories => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      inventories: inventories
    };
    try {
      loading(true);
      const response = yield inventoryAPI.sendProductsBySavedZonification(request);
      return response.data;
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  const editProductCount = amount => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      id: productIdSelected ? productIdSelected : '',
      inventory: Object.assign(Object.assign({
        sku: (product === null || product === void 0 ? void 0 : product.sku) ? product.sku : ''
      }, inventoryType === InventoryTypeEnum.CONTINUOS && {
        scanContinue: Number(amount)
      }), inventoryType === InventoryTypeEnum.QUANTITY && {
        scanQuantity: Number(amount)
      })
    };
    try {
      loading(true);
      const {
        data: response,
        message,
        success
      } = yield inventoryAPI.editProductCount(request);
      return {
        response: response,
        message,
        success
      };
    } catch (error) {
      return RESPONSE_ERROR_API;
    } finally {
      loading(false);
    }
  });
  useEffect(() => {
    var _a, _b, _c;
    (() => __awaiter(void 0, void 0, void 0, function* () {
      var _d, _e;
      inventoryAPI.setBaseUrl((_d = env === null || env === void 0 ? void 0 : env.inventoryApi) !== null && _d !== void 0 ? _d : '');
      inventoryAPI.setCountryCode((_e = env === null || env === void 0 ? void 0 : env.country) !== null && _e !== void 0 ? _e : 'NONE');
      if (getStoreData) {
        const data = yield getStoreData();
        setUserStore(data);
        setDataInventory({
          store: data
        });
      }
    }))();
    setHistory(historyData);
    setAppClientID((_a = env === null || env === void 0 ? void 0 : env.clientId) !== null && _a !== void 0 ? _a : '');
    setUomShowType((_b = env === null || env === void 0 ? void 0 : env.uomShowType) !== null && _b !== void 0 ? _b : '');
    setMessages((_c = env === null || env === void 0 ? void 0 : env.messages) !== null && _c !== void 0 ? _c : '');
  }, []);
  return jsx(InventoryContext.Provider, Object.assign({
    value: {
      appClientID,
      uomShowType,
      messages,
      inventory,
      setDataInventory,
      product,
      setDataProduct,
      quantity,
      setQuantity,
      userStore,
      setUserStore,
      actionClearInventory,
      actionClearProduct,
      page,
      setPage,
      inventoryType,
      setInventoryType,
      getDataZonification,
      getInventoryID,
      getProduct,
      saveProduct,
      finishInventory,
      getTotalFurniture,
      history,
      setHistory,
      listSavedZonification,
      listInProgressZonification,
      listFiltersZonification,
      listProductsByZonification,
      zoneSelected,
      setZoneSelected,
      userSelected,
      setUserSelected,
      furnituresSelected,
      setFurnituresSelected,
      sendListInventory,
      inventoriesSelectedSaved,
      setInventoriesSelectedSaved,
      editProductCount,
      setProductIdSelected,
      productIdSelected
    }
  }, {
    children: children
  }));
};

const useScan = () => {
  const [isScanPermissionGranted, setIsScanPermissionGranted] = useState(false);
  const askScanPermission = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const status = yield BarcodeScanner.checkPermission({
        force: false
      });
      if (status.neverAsked) {
        yield Camera.requestPermissions({
          permissions: ['camera']
        });
      }
    } catch (error) {
      // if (error instanceof Error)
    }
  });
  const didUserGrantPermission = () => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield BarcodeScanner.checkPermission({
      force: false
    });
    return !!status.granted;
  });
  const onInitializedScanHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const isPermissionGranted = yield didUserGrantPermission();
    setIsScanPermissionGranted(isPermissionGranted);
  });
  const startScan = action => __awaiter(void 0, void 0, void 0, function* () {
    yield BarcodeScanner.hideBackground();
    document.body.style.background = 'transparent';
    document.querySelectorAll('.ion-page').forEach(element => {
      element.setAttribute('style', 'background: transparent; z-index: 1;');
    });
    document.querySelectorAll('[class*="root-module"]').forEach(element => {
      element.setAttribute('style', 'background: transparent;');
    });
    const result = yield BarcodeScanner.startScan();
    console.log('result: ', result);
    if (result.hasContent) {
      action(result.content);
    }
  });
  const stopScan = () => __awaiter(void 0, void 0, void 0, function* () {
    yield BarcodeScanner.showBackground();
    document.body.style.background = '';
    document.querySelectorAll('.ion-page').forEach(element => {
      element.setAttribute('style', '');
    });
    yield BarcodeScanner.stopScan();
  });
  const initScan = () => __awaiter(void 0, void 0, void 0, function* () {
    yield askScanPermission();
    yield onInitializedScanHandler();
  });
  return {
    initScan,
    isScanPermissionGranted,
    stopScan,
    startScan
  };
};

const notification = params => {
  const {
    type,
    text,
    closable,
    onClose,
    duration,
    actionText,
    onActionClick,
    placement
  } = params;
  Ramen.Api.snackbar[type]({
    placement: placement ? placement : PlacementTypeEnum.TOP,
    text: text,
    duration: duration ? duration : 4.5,
    onClose: onClose ? onClose : () => '',
    closable: closable ? closable : true,
    actionText: actionText ? actionText : '',
    onActionClick: onActionClick ? onActionClick : () => ''
  });
};
const getNotificationTypeByCode = code => {
  switch (code) {
    case 'S':
      return NotificationTypeEnum.SUCCESS;
    case 'E':
      return NotificationTypeEnum.ERROR;
    case 'W':
      return NotificationTypeEnum.WARNING;
    case 'I':
      return NotificationTypeEnum.INFO;
    default:
      return NotificationTypeEnum.ERROR;
  }
};

const useInventory = () => {
  const {
    inventory,
    setDataInventory,
    actionClearInventory,
    actionClearProduct,
    product,
    setDataProduct,
    quantity,
    setQuantity,
    page,
    setPage,
    getDataZonification,
    inventoryType,
    setInventoryType,
    history,
    setHistory,
    userStore,
    setUserStore,
    getInventoryID,
    getProduct,
    saveProduct,
    getTotalFurniture,
    finishInventory,
    listSavedZonification,
    listInProgressZonification,
    listFiltersZonification,
    listProductsByZonification,
    zoneSelected,
    setZoneSelected,
    userSelected,
    setUserSelected,
    furnituresSelected,
    setFurnituresSelected,
    sendListInventory,
    inventoriesSelectedSaved,
    setInventoriesSelectedSaved,
    editProductCount,
    productIdSelected,
    setProductIdSelected,
    uomShowType,
    messages
  } = useContext(InventoryContext);
  const {
    stopScan
  } = useScan();
  const routeToLoadZone = () => setPage(InventoryPagesEnum.PAGE_LOAD_ZONE);
  const routeToScanZone = () => setPage(InventoryPagesEnum.PAGE_SCAN_ZONE);
  const routeToScanProduct = () => setPage(InventoryPagesEnum.PAGE_SCAN_PRODUCT);
  const routeToReadProduct = () => setPage(InventoryPagesEnum.PAGE_READ_PRODUCT);
  const routeToSuccess = () => setPage(InventoryPagesEnum.PAGE_SUCCESS);
  const routeToInventorySavedList = () => setPage(InventoryPagesEnum.PAGE_INVENTORY_SAVED_LIST);
  const routeToInventorySavedFilters = () => setPage(InventoryPagesEnum.PAGE_INVENTORY_SAVED_FILTERS);
  const routeToInventorySavedLoadSuccess = () => setPage(InventoryPagesEnum.PAGE_INVENTORY_SAVED_LOAD_SUCCESS);
  const routeToInventorySavedEdit = () => setPage(InventoryPagesEnum.PAGE_INVENTORY_SAVED_EDIT);
  const routeToInventorySummary = () => setPage(InventoryPagesEnum.PAGE_INVENTORY_SUMMARY_LOAD);
  const routeToSavedInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    yield stopScan();
    history === null || history === void 0 ? void 0 : history.push(InventoryRoutesEnum.SAVED_INVENTORY);
  });
  const routeToInventoryMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    yield stopScan();
    history === null || history === void 0 ? void 0 : history.push(InventoryRoutesEnum.MENU);
  });
  const routeToRoot = () => __awaiter(void 0, void 0, void 0, function* () {
    yield stopScan();
    history === null || history === void 0 ? void 0 : history.push(InventoryRoutesEnum.ROOT);
  });
  const actionScanZone = contentScan => __awaiter(void 0, void 0, void 0, function* () {
    if (contentScan) {
      yield stopScan();
      const {
        response,
        code,
        message
      } = yield getDataZonification(contentScan);
      if (!response) {
        notification({
          type: getNotificationTypeByCode(code),
          text: message
        });
      }
      routeToLoadZone();
    }
  });
  const actionContinueToReadProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const {
      response,
      code,
      message
    } = yield getInventoryID();
    if (response) {
      if ((inventory === null || inventory === void 0 ? void 0 : inventory.status) === InventoryStatusEnum.COMPLETED) {
        notification({
          type: NotificationTypeEnum.ERROR,
          text: 'Inventario ya finalizado'
        });
      } else {
        routeToReadProduct();
      }
    } else {
      notification({
        type: getNotificationTypeByCode(code),
        text: message
      });
    }
  });
  const actionScanProduct = (contentScan, ScanProductTypes = ScanProductTypesEnum.EAN) => __awaiter(void 0, void 0, void 0, function* () {
    if (contentScan) {
      const {
        response,
        code,
        message
      } = yield getProduct(contentScan, ScanProductTypes);
      yield stopScan();
      if (!response) {
        notification({
          type: getNotificationTypeByCode(code),
          text: message
        });
        if (code === 'E') {
          actionClearProduct();
        }
      } else {
        if (code === 'W') {
          notification({
            type: getNotificationTypeByCode(code),
            text: message
          });
        }
      }
      routeToReadProduct();
    }
  });
  const actionSaveProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const {
      response,
      code,
      message
    } = yield saveProduct();
    if (response) {
      notification({
        type: NotificationTypeEnum.SUCCESS,
        text: 'Conteo exitoso'
      });
      actionClearProduct();
    } else {
      notification({
        type: getNotificationTypeByCode(code),
        text: message
      });
    }
  });
  const actionFinishInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    yield stopScan();
    yield finishInventory();
    routeToSuccess();
  });
  const actionEditProductCount = amount => __awaiter(void 0, void 0, void 0, function* () {
    const {
      response,
      code,
      message
    } = yield editProductCount(amount);
    if (response) {
      setDataProduct(response);
    }
  });
  const actionListZonificationSaved = filters => __awaiter(void 0, void 0, void 0, function* () {
    return yield listSavedZonification(filters);
  });
  const actionListFiltersZonification = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield listFiltersZonification();
  });
  const actionListProductsByZonification = id => __awaiter(void 0, void 0, void 0, function* () {
    return yield listProductsByZonification(id);
  });
  const actionSendListInventory = inventories => __awaiter(void 0, void 0, void 0, function* () {
    return yield sendListInventory(inventories);
  });
  const actionListZonificationInProgress = filters => __awaiter(void 0, void 0, void 0, function* () {
    return yield listInProgressZonification(filters);
  });
  return {
    inventory,
    setDataInventory,
    product,
    page,
    inventoryType,
    setInventoryType,
    setDataProduct,
    history,
    setHistory,
    userStore,
    setUserStore,
    quantity,
    setQuantity,
    actionClearInventory,
    actionClearProduct,
    actionScanZone,
    actionScanProduct,
    actionContinueToReadProduct,
    actionSaveProduct,
    actionFinishInventory,
    actionListZonificationSaved,
    actionListFiltersZonification,
    actionListProductsByZonification,
    actionEditProductCount,
    getTotalFurniture,
    actionSendListInventory,
    actionListZonificationInProgress,
    routeToRoot,
    routeToInventoryMenu,
    routeToLoadZone,
    routeToScanZone,
    routeToScanProduct,
    routeToReadProduct,
    routeToSuccess,
    routeToSavedInventory,
    routeToInventorySavedEdit,
    routeToInventorySavedFilters,
    routeToInventorySavedLoadSuccess,
    routeToInventorySavedList,
    routeToInventorySummary,
    zoneSelected,
    setZoneSelected,
    userSelected,
    setUserSelected,
    furnituresSelected,
    setFurnituresSelected,
    inventoriesSelectedSaved,
    setInventoriesSelectedSaved,
    productIdSelected,
    setProductIdSelected,
    uomShowType,
    messages
  };
};

const InventoryHeader = ({
  onBack,
  title
}) => {
  return jsx(Ramen.XHeader, {
    title: title,
    sticky: true,
    onBack: onBack
  });
};

const MenuList = () => {
  const {
    history,
    actionClearInventory,
    getTotalFurniture,
    inventory,
    userStore
  } = useInventory();
  const [totalFurniture, setTotalFurniture] = useState(0);
  const redirect = path => {
    history === null || history === void 0 ? void 0 : history.push(path);
  };
  const getTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    const {
      response
    } = yield getTotalFurniture();
    if (response) {
      setTotalFurniture(response.furnitureTotal);
    }
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (userStore === null || userStore === void 0 ? void 0 : userStore.code) {
        yield getTotal();
      }
    }))();
  }, [userStore]);
  const symbolIcon = num => {
    switch (num) {
      case 1:
        return 'planograms-neutral';
      case 2:
        return 'fit-stock-neutral';
      default:
        return 'planograms-neutral';
    }
  };
  return jsxs(Ramen.XPage, {
    children: [jsx(InventoryHeader, {
      title: TitlePagesEnum.INVENTORY_PERISHABLE,
      onBack: () => redirect(InventoryRoutesEnum.ROOT)
    }), jsx(Ramen.XBody, {
      children: jsx(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "s",
        padding: "none"
      }, {
        children: jsx(Ramen.XList, {
          dataSource: [{
            id: '1',
            count: undefined,
            title: 'Nuevo inventario',
            symbol: 1,
            route: () => {
              actionClearInventory();
              redirect(InventoryRoutesEnum.NEW_INVENTORY);
            }
          }, {
            id: '2',
            count: totalFurniture,
            title: 'Inventario guardado',
            symbol: 2,
            route: () => redirect(InventoryRoutesEnum.SAVED_INVENTORY)
          }],
          renderItem: data => jsx(Ramen.XCard, Object.assign({}, data.count !== undefined && data.count !== 0 && {
            count: data.count
          }, {
            onClick: () => data.route(),
            size: "l",
            symbol: symbolIcon(data.symbol),
            title: data.title
          })),
          rowKey: "id"
        })
      }))
    })]
  });
};

class MenuPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    return jsx(MenuList, {});
  }
}

const DetailZoneCard = props => {
  const {
    inventory,
    actionClearInventory
  } = useInventory();
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      padding: "xs",
      width: "full",
      gap: "m"
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          verticalAlign: "center",
          width: "half",
          height: "full"
        }, {
          children: jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Detalle"
          }))
        })), jsx(Ramen.XBox, Object.assign({
          verticalAlign: "center",
          width: "half",
          horizontalAlign: "end"
        }, {
          children: jsx(Ramen.XButton, {
            type: "outline",
            size: "s",
            text: "Limpiar",
            icon: "trash-2-outline",
            onClick: actionClearInventory,
            disabled: !(inventory === null || inventory === void 0 ? void 0 : inventory.zonificationCode)
          })
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        gap: "s"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          verticalAlign: "start"
        }, {
          children: jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Centro"
          }))
        })), jsx(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "start",
          gap: "xs"
        }, {
          children: (inventory === null || inventory === void 0 ? void 0 : inventory.store.code) ? jsxs(Fragment, {
            children: [jsx(Ramen.XTag, {
              text: inventory.store.code
            }), jsx(Ramen.XTag, {
              text: inventory.store.name
            })]
          }) : null
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        gap: "s"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          verticalAlign: "start"
        }, {
          children: jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Almac\u00E9n"
          }))
        })), jsx(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "start",
          gap: "xs"
        }, {
          children: (inventory === null || inventory === void 0 ? void 0 : inventory.storage.code) ? jsxs(Fragment, {
            children: [jsx(Ramen.XTag, {
              text: inventory.storage.code
            }), jsx(Ramen.XTag, {
              text: inventory.storage.name
            })]
          }) : null
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        gap: "s"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          verticalAlign: "start"
        }, {
          children: jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Zonificaci\u00F3n"
          }))
        })), jsx(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "start",
          gap: "xs"
        }, {
          children: (inventory === null || inventory === void 0 ? void 0 : inventory.zonificationCode) ? jsxs(Fragment, {
            children: [jsx(Ramen.XTag, {
              text: inventory.zonificationCode
            }), jsx(Ramen.XTag, {
              text: inventory.zone.name
            })]
          }) : null
        }))]
      }))]
    }))
  });
};

const isOnlyNumberAndCharacter = value => {
  const pattern = /^[0-9a-zA-Z]+$/;
  if (value) {
    if (pattern.test(value)) {
      return true;
    }
  }
  return false;
};
const isNumberWithDecimal = value => {
  const pattern = /^(\d*\.?\d{0,3}|\d+)$/;
  if (value) {
    if (pattern.test(value)) {
      return true;
    }
  }
  return false;
};

const InputCodeCard = props => {
  const [codeValue, setCodeValue] = useState('');
  const {
    inventory,
    routeToScanZone,
    actionScanZone
  } = useInventory();
  const actionKeyDown = event => __awaiter(void 0, void 0, void 0, function* () {
    if (event.key === 'Enter' && codeValue !== '') {
      yield actionScanZone(codeValue);
    }
  });
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      verticalAlign: "center",
      height: "full",
      width: "full",
      gap: "xl",
      padding: "m"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        weight: "bold",
        textAlign: "center"
      }, {
        children: "Escanea o ingresa el c\u00F3digo de la zona a inventariar"
      })), jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "center",
        height: "full",
        width: "full",
        gap: "s",
        padding: "none"
      }, {
        children: [jsx(Ramen.XButton, {
          type: "solid",
          size: "xl",
          text: "Escanea el c\u00F3digo",
          icon: "camera-outline",
          iconPosition: "end",
          onClick: routeToScanZone
        }), jsx(Ramen.XTextInput, {
          icon: "scan-outline",
          value: codeValue,
          onChange: e => {
            const value = e.target.value;
            if (isOnlyNumberAndCharacter(value) || value === '') {
              setCodeValue(value.toUpperCase());
            }
          },
          placeholder: "Ingresa el c\u00F3digo",
          size: "l",
          onKeyDown: actionKeyDown
        })]
      }))]
    }))
  });
};

const LoadZone = () => {
  const {
    inventory,
    routeToInventoryMenu,
    actionClearInventory,
    actionContinueToReadProduct
  } = useInventory();
  const isLoadZoneCode = () => {
    return inventory === null || inventory === void 0 ? void 0 : inventory.zonificationCode;
  };
  return jsxs(Ramen.XPage, {
    children: [jsx(InventoryHeader, {
      onBack: () => isLoadZoneCode() ? actionClearInventory() : routeToInventoryMenu(),
      title: TitlePagesEnum.INVENTORY_PERISHABLE
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "l",
        padding: "none"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "normal",
          weight: "bold"
        }, {
          children: "Zona a inventariar"
        })), !isLoadZoneCode() ? jsx(InputCodeCard, {}) : null, jsx(DetailZoneCard, {})]
      }))
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        type: "solid",
        size: "xl",
        text: "Continuar",
        disabled: !isLoadZoneCode(),
        onClick: () => actionContinueToReadProduct()
      })
    })]
  });
};

const InfoZone = props => {
  var _a;
  const {
    inventory
  } = useInventory();
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "around",
      height: "auto",
      width: "full",
      gap: "xl",
      padding: "xs"
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "auto",
        gap: "none",
        padding: "none"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 11,
          lineHeight: "title",
          weight: "lighter"
        }, {
          children: "Centro"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "title",
          weight: "bold"
        }, {
          children: inventory === null || inventory === void 0 ? void 0 : inventory.store.code
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "auto",
        gap: "none",
        padding: "none"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 11,
          lineHeight: "title",
          weight: "lighter"
        }, {
          children: "Almac\u00E9n"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "title",
          weight: "bold"
        }, {
          children: (_a = inventory === null || inventory === void 0 ? void 0 : inventory.storage) === null || _a === void 0 ? void 0 : _a.code
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "auto",
        gap: "none",
        padding: "none"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 11,
          lineHeight: "title",
          weight: "lighter"
        }, {
          children: "Zonificaci\u00F3n"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "title",
          weight: "bold"
        }, {
          children: inventory === null || inventory === void 0 ? void 0 : inventory.zonificationCode
        }))]
      }))]
    }))
  });
};

const ProductContinuos = props => {
  const {
    product
  } = useInventory();
  return jsxs(Ramen.XBox, Object.assign({
    verticalAlign: "start",
    padding: "none",
    gap: "s"
  }, {
    children: [jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between"
    }, {
      children: [jsx(Ramen.XCard, Object.assign({
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "start"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            lineHeight: "title",
            weight: "lighter",
            textOverflow: "no-wrap"
          }, {
            children: "Cantidad contada"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            lineHeight: "title",
            weight: "bold",
            textOverflow: "no-wrap"
          }, {
            children: product === null || product === void 0 ? void 0 : product.quantity
          }))]
        }))
      })), jsx(Ramen.XCard, Object.assign({
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "start",
          padding: "none",
          gap: "none"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            lineHeight: "title",
            weight: "lighter",
            textOverflow: "no-wrap"
          }, {
            children: "Un. de medida"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            lineHeight: "title",
            weight: "bold",
            textOverflow: "no-wrap"
          }, {
            children: (product === null || product === void 0 ? void 0 : product.uom) ? product === null || product === void 0 ? void 0 : product.uom : '-'
          }))]
        }))
      }))]
    })), jsx(Ramen.XCard, Object.assign({
      borderType: "solid"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "center",
        width: "full",
        padding: "none",
        gap: "m"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "title",
          weight: "lighter",
          textAlign: "center"
        }, {
          children: "Cantidad total"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          lineHeight: "title",
          weight: "bold",
          textAlign: "center"
        }, {
          children: (product === null || product === void 0 ? void 0 : product.scanTotalContinue) ? product === null || product === void 0 ? void 0 : product.scanTotalContinue : '0'
        }))]
      }))
    })), jsx(Ramen.XVSpace, {
      size: "s"
    })]
  }));
};

const ProductQuantity = props => {
  const {
    product,
    quantity,
    setQuantity
  } = useInventory();
  const [errorQuantity, setErrorQuantity] = useState('');
  const handleChangeQuantity = value => {
    if (isNumberWithDecimal(value) || value === '') {
      setQuantity(value);
    }
    if (Number(value) > 0) {
      setErrorQuantity('');
    } else {
      setErrorQuantity('La cantidad debe ser mayor a 0');
    }
  };
  useEffect(() => {
    setQuantity((product === null || product === void 0 ? void 0 : product.quantity) ? product.quantity.toString() : '');
  }, []);
  return jsx(Ramen.XBox, Object.assign({
    verticalAlign: "start",
    padding: "s",
    gap: "s",
    height: "auto",
    width: "auto"
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      horizontalAlign: "between",
      padding: "none",
      gap: "s",
      height: "auto",
      width: "auto"
    }, {
      children: [jsx(Ramen.XFormItem, Object.assign({
        label: "Cantidad",
        error: errorQuantity
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "s"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "full"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "basket-outline",
              onChange: e => handleChangeQuantity(e.target.value),
              value: quantity,
              placeholder: "00.0",
              size: "l"
            })
          })), jsx(Ramen.XBox, Object.assign({
            width: "half"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "none",
              value: product === null || product === void 0 ? void 0 : product.uom,
              size: "l",
              disabled: true
            })
          }))]
        }))
      })), jsx(Ramen.XFormItem, Object.assign({
        label: "Cantidad Anterior"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "s"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "full"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "basket-outline",
              value: (product === null || product === void 0 ? void 0 : product.scanLastQuantity) ? product.scanLastQuantity : 0,
              placeholder: "00.0",
              size: "l",
              disabled: true
            })
          })), jsx(Ramen.XBox, Object.assign({
            width: "half"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "none",
              value: product === null || product === void 0 ? void 0 : product.uom,
              size: "l",
              disabled: true
            })
          }))]
        }))
      })), jsx(Ramen.XFormItem, Object.assign({
        label: "Cantidad Total"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "s"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "full"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "basket-outline",
              value: (product === null || product === void 0 ? void 0 : product.scanTotalQuantity) ? product.scanTotalQuantity : 0,
              placeholder: "00.0",
              size: "l",
              disabled: true
            })
          })), jsx(Ramen.XBox, Object.assign({
            width: "half"
          }, {
            children: jsx(Ramen.XTextInput, {
              icon: "none",
              value: product === null || product === void 0 ? void 0 : product.uom,
              size: "l",
              disabled: true
            })
          }))]
        }))
      }))]
    }))
  }));
};

var PlaceholderCodeProduct;
(function (PlaceholderCodeProduct) {
  PlaceholderCodeProduct["FOCUS"] = "Ingresa el c\u00F3digo";
  PlaceholderCodeProduct["BLUR"] = "Ingresa el EAN o SKU";
})(PlaceholderCodeProduct || (PlaceholderCodeProduct = {}));
const InputCodeProductCard = () => {
  const [codeValue, setCodeValue] = useState('');
  const [placeholder, setPlaceholder] = useState(PlaceholderCodeProduct.BLUR);
  const [showRadioBtn, setShowRadioBtn] = useState(false);
  const [scanProductTypes, setScanProductTypes] = useState(ScanProductTypesEnum.EAN);
  const {
    product,
    routeToScanProduct,
    actionScanProduct,
    inventoryType
  } = useInventory();
  const actionKeyDown = event => __awaiter(void 0, void 0, void 0, function* () {
    if (event.key === 'Enter' && codeValue !== '') {
      yield actionScanProduct(codeValue, scanProductTypes);
      event.preventDefault();
      event.stopPropagation();
    }
  });
  const focusHandler = () => {
    setShowRadioBtn(true);
    setPlaceholder(PlaceholderCodeProduct.FOCUS);
  };
  const blurHandler = () => {
    setPlaceholder(PlaceholderCodeProduct.BLUR);
  };
  useEffect(() => {
    setCodeValue('');
    setShowRadioBtn(false);
  }, [inventoryType]);
  useEffect(() => {
    if (!(product === null || product === void 0 ? void 0 : product.description)) {
      setCodeValue('');
      setShowRadioBtn(false);
    }
  }, [product]);
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      verticalAlign: "center",
      height: "full",
      width: "full",
      gap: "xl",
      padding: "m"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        weight: "bold",
        textAlign: "left"
      }, {
        children: "Escanea o ingresa el c\u00F3digo del producto que quieres revisar"
      })), jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "center",
        height: "full",
        width: "full",
        gap: "s",
        padding: "none"
      }, {
        children: [jsx(Ramen.XButton, {
          type: "solid",
          size: "xl",
          text: "Escanea el c\u00F3digo",
          icon: "camera-outline",
          iconPosition: "end",
          onClick: routeToScanProduct
        }), showRadioBtn ? jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "xl",
          padding: "l"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            horizontalAlign: "center",
            width: "half"
          }, {
            children: jsx(Ramen.XRadioButton, {
              label: ScanProductTypesEnum.EAN,
              placement: "right",
              selected: scanProductTypes === ScanProductTypesEnum.EAN,
              onChange: () => setScanProductTypes(ScanProductTypesEnum.EAN)
            })
          })), jsx(Ramen.XBox, Object.assign({
            horizontalAlign: "center",
            width: "half"
          }, {
            children: jsx(Ramen.XRadioButton, {
              label: ScanProductTypesEnum.SKU,
              placement: "right",
              selected: scanProductTypes === ScanProductTypesEnum.SKU,
              onChange: () => setScanProductTypes(ScanProductTypesEnum.SKU)
            })
          }))]
        })) : null, jsx(Ramen.XNumberInput, {
          icon: "scan-outline",
          onChange: e => setCodeValue(e.target.value),
          value: codeValue,
          placeholder: placeholder,
          size: "l",
          onKeyDown: e => actionKeyDown(e),
          onFocus: focusHandler,
          onBlur: blurHandler
        })]
      }))]
    }))
  });
};

var img$1 = "data:image/png;base64,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";

function truncateText(text, limit) {
  if (text) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  }
  return '-';
}
const amountWithBaseUnit = (amount, baseUnit) => {
  return `${amount ? amount : '0'} ${baseUnit ? baseUnit : ''}`;
};

const InfoProduct = ({
  product
}) => {
  const fontSize = 11;
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "horizontal",
    horizontalAlign: "start",
    height: "auto",
    width: "full",
    gap: "xs",
    padding: "none"
  }, {
    children: [jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "start",
      width: 1
    }, {
      children: jsx(Ramen.XImage, {
        src: (product === null || product === void 0 ? void 0 : product.imageUrl) ? product.imageUrl : img$1,
        width: 2,
        height: 2
      })
    })), jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "start",
      width: "full"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        width: "full",
        gap: "xxs"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: fontSize,
          lineHeight: "title",
          weight: "bold",
          textOverflow: "no-wrap"
        }, {
          children: (product === null || product === void 0 ? void 0 : product.description) ? truncateText(product === null || product === void 0 ? void 0 : product.description, 28) : '-'
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          height: "auto",
          width: "full",
          gap: "m",
          padding: "none"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: fontSize,
            weight: "normal",
            colorThone: "dim"
          }, {
            children: "EAN"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: fontSize,
            weight: "bold"
          }, {
            children: (product === null || product === void 0 ? void 0 : product.ean) ? product === null || product === void 0 ? void 0 : product.ean : '0000000000'
          }))]
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          height: "auto",
          width: "full",
          gap: "m",
          padding: "none"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: fontSize,
            weight: "normal",
            colorThone: "dim"
          }, {
            children: "SKU"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: fontSize,
            weight: "bold"
          }, {
            children: (product === null || product === void 0 ? void 0 : product.sku) ? product === null || product === void 0 ? void 0 : product.sku : '0000000000'
          }))]
        }))]
      }))
    }))]
  }));
};

const ReadProduct = () => {
  const {
    inventory,
    product,
    routeToLoadZone,
    actionClearProduct,
    actionFinishInventory,
    actionSaveProduct,
    setInventoryType,
    quantity,
    inventoryType
  } = useInventory();
  const onBack = () => {
    actionClearProduct();
    routeToLoadZone();
  };
  const isEnableSave = () => {
    if (inventoryType === InventoryTypeEnum.CONTINUOS) {
      return product === null || product === void 0 ? void 0 : product.description;
    }
    if (inventoryType === InventoryTypeEnum.QUANTITY) {
      return (product === null || product === void 0 ? void 0 : product.description) && quantity && Number(quantity) > 0;
    }
    return false;
  };
  return jsxs(Ramen.XPage, {
    children: [jsx(InventoryHeader, {
      onBack: () => onBack(),
      title: TitlePagesEnum.INVENTORY_PERISHABLE
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "l",
        padding: "none"
      }, {
        children: [jsx(InfoZone, {}), jsx(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "center"
        }, {
          children: jsx(Ramen.XTabs, {
            actions: [],
            defaultKey: inventoryType,
            onTabChange: e => {
              if (e === InventoryTypeEnum.CONTINUOS) {
                actionClearProduct();
                setInventoryType(InventoryTypeEnum.CONTINUOS);
              } else {
                actionClearProduct();
                setInventoryType(InventoryTypeEnum.QUANTITY);
              }
            },
            size: "s",
            tabs: [{
              disabled: false,
              key: InventoryTypeEnum.CONTINUOS,
              label: `Continuo`,
              icon: 'chevron-right-filled'
            }, {
              disabled: false,
              key: InventoryTypeEnum.QUANTITY,
              label: `Cantidad`,
              icon: 'calculator-filled'
            }]
          })
        })), jsx(InputCodeProductCard, {}), (product === null || product === void 0 ? void 0 : product.description) && jsx(Ramen.XCard, {
          children: jsxs(Ramen.XBox, Object.assign({
            verticalAlign: "start",
            height: "auto",
            width: "full",
            gap: "m"
          }, {
            children: [jsx(InfoProduct, {
              product: product
            }), jsxs(Ramen.XTabContent, {
              children: [jsx(Ramen.XTabPanel, Object.assign({
                tabKey: InventoryTypeEnum.CONTINUOS
              }, {
                children: jsx(ProductContinuos, {})
              })), jsx(Ramen.XTabPanel, Object.assign({
                tabKey: InventoryTypeEnum.QUANTITY
              }, {
                children: jsx(ProductQuantity, {})
              }))]
            })]
          }))
        })]
      }))
    }), jsxs(Ramen.XFooter, Object.assign({
      background: "gradient"
    }, {
      children: [jsx(Ramen.XButton, {
        type: "solid",
        size: "xl",
        text: "Guardar",
        disabled: !isEnableSave(),
        onClick: actionSaveProduct
      }), jsx(Ramen.XButton, {
        type: "outline",
        size: "xl",
        text: "Finalizar mueble",
        disabled: !(inventory === null || inventory === void 0 ? void 0 : inventory.totalProduct),
        onClick: actionFinishInventory
      })]
    }))]
  });
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAEACAYAAACTecuMAAABWmlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGBiSSwoyGFhYGDIzSspCnJ3UoiIjFJgf87AyiDLwMFgzSCRmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisZ0snObQa3ZVZbJw6L6O36CumehTAlZJanAyk/wCxVnJBUQkDA6MGkB1QXlIAYlcA2SJFQEcB2T0gdjqEvQDEToKwt4DVhAQ5A9kngGyB5IzEFCD7BpCtk4Qkno7Ezs0pTYa6AeR6ntS80GAgzQfEMgzBDI4MvkAylMGPwR0YNtjVmoDVOjPkMxQwVDIUMWQypDNkMJQwKAB1FwBhDkMqkO3JkMeQzKDHoANkGzEYALExKIzRww4hVtrMwGB2Dch4jhAL62Ng2LEf6OxVCDGto0B+FgPDwdkFiUWJ8BBl/MZSnGZsBGGLHmZg4Kj///+FJDCoYxgYGR/8//9D6P//30D3s19gYOhgAQCEjGF+j+rK6QAAAIplWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAHigAgAEAAAAAQAAAP6gAwAEAAAAAQAAAQAAAAAAQVNDSUkAAABTY3JlZW5zaG90fA6VyAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAdZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgokTb3CAAAAHGlET1QAAAACAAAAAAAAAIAAAAAoAAAAgAAAAIAAACXfqK3TggAAJatJREFUeAHsXQmYXUWVPt2d9J596ZA9EJJAMEAABWQElAmYEQUighqUuDM6jIGPTwdUEFxAWRR0QFGZUVBQR1EU1E9ZlDEIAxqWQBIgLNmXTtKd7vTeU/99+V+fV33vW++97933bn3fe1V16tSpqvPqr73qVQ0aI7GJNRBroKI0UBUDv6J+77iwsQYcDcTAjytCrIEK1EAM/Ar80eMixxqIgR/XgVgDFaiBGPgV+KPHRY41EAM/rgOxBipQAzHwK/BHj4scayAGflwHYg1UoAZi4Ffgjx4XOdZADPy4DsQaqEANxMCvwB89LnKsgRj4cR2INVCBGoiBX4E/elzkWAMx8OM6EGugAjUQA79Mf3TetqY9MDCQLGlPT0/SrR01NTWCD011dTWdUlVV5XyShNgRaQ3EwI/ozwdA4wNAu9lBFAvgh2EjABsNBRsI2kGkHcv0VwMx8P3VZyDSAOz+/n7no0EeSGIFCNUNwogRI5wGgbQCxMZRA9BADPwAlFqISAAbn97eXqc310P0QuQWKy6AD4ORARoD+OORQbF+jaF0Y+AP6aJoLoC7XICejRIBfjQEGMXU19fHDUE2SvOZJwa+zwrNRpweuvf19WUTpSx5Nm7c6DR4DQ0NMnbsWGlsbBS4YxO8BmLgB69jJwWCnT17SMmWdDIAfnd3d0oex40bJ1OmTElZNExhiD2+aCAGvi9q9BaCHh0fDGtjk6oBN+A3NzdLS0tLcuuwrq4uXhdIVZsvvhj4vqgxVQh6d+yVV/IwPlUj7r50wNcxuCaAxUF9zkDzxO7cNBADPzd9peUG0AF4AD82mTWQLfC1JDQCtbW1zoJgvDugNZObOwZ+bvoaxs3eHUP5GPDD1JOWkA/wKZCjgJEjR8a7AlRKDnYM/ByUpVkJ+Hg4r7WSm7sQ4DOluAGgJnKzY+Dnpi+nV4/n7zkqzYPdD+BTdNwAUBPZ2THws9NTDPgs9ZQLm5/AZ7pxA0BNpLdj4KfXTwz4DPopJDgI4DM/cQNATbjbMfDd9eJQ41X6NMrxIShI4DN7cQNATaTaMfBT9eH4YsC7KCUAUhjAZ7bRAGAbEGcBYmOuVpvV6XjT+UBNgCpwhDQ+ZRcONMIEPkuEA0A8B0BaJdox8A/86nEvH371LwbwUcp4+B/3+M6dd/TyUb/3Hj5sC0+xWMBnztEA4C5AJR4DrugeH728fTuMlSK2g9dAsYGPElZq71+RwI/n8sGDOpsUSgH4zCcagEp6FKTigB/P5VnVi2+XEvChDYC/Ulb+Kwr4GNYD+LEpDQ2UGvCplUpY+a8I4GPhrqurK749x5pdInapAh/qKfeFv7IHPvbk0dPHxxVKBO0qG6UMfIK/XIf+ZQ38eNVeoawEnaUOfKoMp/3QAGAUUC6mbIEfz+dLv4pGBfjQZLnN+8sS+Pv3748P5JQ+7iVKwIc6y2nLr6yAHy/iRQDtKotRAz7BXw7z/rIBfgx6haiIOKMI/HIBf1kAPwZ9RJBuZTOqwC8H8Ece+DHoLTRFyBtl4Ecd/JEGfrxHHyGUu2Q16sCPMvgjC3yAHqfxYhNdDZQD8KMK/kgCPx7eRxfsOuflAvwogj9ywI9Br6ETbXc5AT9q4I8U8HEaD59KfDEl2hB3z325AT9K4I8M8HEa77XXXnP+Qhn/lxab6GugHIEfFfBHAvi9vb3y4osvOjfspk6dKjHwow96lKBcgR8F8EcC+OvXrxf0+LglVWzgt+/dK088/JDs2LJFdmzdJru2bZPOffuks7PDQePEyS2O3djcJBNapsicuYdI46jRMtk0WHMOO8wJi78SGihn4KOEpXy2v+SBj+H9nj17nJpSLOAD7D+7/XZZu3q1bHplQ6LW5vE9bvJkQcOw4MhFcvjiY2T2/PkyasyYPCSVR5RyBz5+pVK91VfSwN+0aZPs2rUrWcvDBj4B/+Cv7k3mwU9HQ1OTTJ9zsLzl9CWmEViQ84hg+6aNMnnadD+zFKqsSgA+FArw4xnvUrrPX7LA32eGzy+//HJKRQwT+H978EH53teuk/0diSF8SkYC8kybPUfmm9HAcW85OeNoYMPzz8uNn7tClpxzjpz5/uUB5ShYsZUCfGgRN/pKaW2qJIGPvXr09rt3706peWEB/47rvy5/+tWvUtIO28PRAKYFsw+dZ9YJRknLtKnS0dYujz/ysPzx3nudRgl877zggkiCv5KAj96+lK7zlhzw8TYeFvJ27tyZnNsTdGEA/6e33Sq/vusuJhkJG+C//KZvyOwFCwIfTuL3yWbISj7abor0A/jp5LulmQ0tCJlIt5QW+0oO+HwyC3N7Lurxxwoa+Bg+f/5jH2VykbIPPeINcsm110rz6NFOBWPlhQ1DsNp0XUjNwziMTz7w2DIYDzwMI7+m2bIwqkMjX11d7byYBLu5uVkmm0VQOx03v1samqbdOl92PsDHMpBP2wwnDX7thj9bUyqLfSUFfOzX9/T0ODosBvA/esbpoc7ps60s2fJ96NJL5dR3nZUEDeMRNPTnauv42q3laOCArvnops14BD79AH6TGb20tCS2RElPZ9syvXjJBxsGwEV6sOl3HOqLcUiy/aTDZpi2dbh2owPDYl8xTckA3z6DHzbw7zFD/PsiNsS3K8602bPluh/d6ZBZoaFXVHAYumGj5wEPaQ6D+ULF5d+E63gIRxyGkZ82eO1KD/lu8hgHQ337huUorGUY4DNfsGEgnzT46dZpMj2WHWEwdp4pywk0Xywn/UwTfrvMmpdpgy+dW4eRt9jz/ZIBfmdnZ7L1hXLCBv7Fy86R1u3bkXRkDeb6V9/+PZkyfboDDBSElZwVVlfqdAVlPDceN1lsSMBvp0FZtClz8+bNzlCfftijzVRl0qRJmuTqdssDGHU+4GcDYecJYdp4ybN5KIdlsePRr+MB+AQ/Gyf4i/lffSUBfM7rtbLCBP4zjz8u1116iU4+su5PXnmVvPHUU5OAdysIKy3DWBnhp5u2pml+ummjItMgLntK0imPNng18ElPB3zyMB3YpMGmYZr0w9Z8Opx08lIOeexw8mmb+tQ2w7UcTYNcDvnJw/Aw7KID3+tBjTCBXw7DfFaWC1eulFPe+S7H61ZpSaONSodezK58CIfRdLhBx4c9m81HWZRLMFCWlrHFHHvG4h7DIAvAnzhxopMueR2GA182jXlhuuQlH8LhprH9oJNX88CNvIOfhny0Qdey4dflpY5Ap9FxQUOvjwYgbFNU4EOp+OG1cqmAMIH/2Q9cIBs3bGDSkbY/+OmVZoEvAXwWRFd26poVkDZ4WYltHoaRns5PGeBhurRJY3zd44MGgzk+h/rMG+0Ex9A36bQRAjc+bAh0nhlTA9oOpyzY2RiWLRO/VyOANBoaGpINaTZp+sFTVOC7DfFZqLCA/+0rr5RVD/6JyUbe/tfPf0GOM0N9bVg5Nc3LzYpvh2u6dtt89BMIBJaOQ7fu8RmPPT79udiUizh027YOy0W2VzzIdzNudA1+5gtxMS1Cz+8Wx022H7SiAd9riM9ChQH8Ujihx/L6ZV93513OTUA3eW4gdOPLRGMFpTzwu9FIZ8Oj+RHmBnx7Hx98NBospGmb4bR1mJc7E68OhxuG5bFluvGCB8DGCARGgx9+xgl7yF804GOIT2VAAbYJGvg4rPOVlZ+O9L69rbNDDl8oV9xyi6deueBmx7MrMiqn/m1svx1f+zWvdts88LsN9QF8t+088EMeDPJmy7b94CPNjkcZsGk0D2m0KYd+2KQxHmhsGOiGXhHupV+EEfhwh7nKXxTg64M6UJKbCRr4X7zoIln/7DNuSUeW9onPfV6OPfnkZEVDhaNhBYOfbtpuPKRpW/PDDaNBCBo+oNENHuaDAEAY3Fu3bjXvGHSCJWk4xycPA7SfbtqUS17YDNM07UY4DOIyfro4OoxxAVaWH7K0G37yMS74YZie4zFfpOMST1gHe0IHPgrttaBHRcAOEvi4bnvJee8pu97+MzfdpFWYdLPiJQmWI1O4Zrd54afBb5uLcRvq23N8Oz0v+ZrPy424XmGazjRsGvwwLCf9oGk3/AQz3DAIxwdx7TCEg4ZPWAd7Qgd+ugU9KIAmSOA/ZO7Xf//665mU7/aMKePksINbZEdrh3R09cjGrbul09hBmamzZsllN9woTWZFPJ1BpWPlIx8rLCsz6JpGN+iax+az/UyH8XXapOHILk7u0Q8ZGOrrVX3QGFePJOy8gE+nyXBNyxSfMmAzTbpha8M8A6yQCwO3jgc/DHkdj+XXYeDHB6v8ms54ftqhAj/Tgp4uWJDAD3JRr6GuVm69/N3S3Jh6Fnvf/m7ZtrNdYG/Y1CobNreaxqBXdu7ZJ7v2dOTdMCy7cIW871Of0qqLjBtTPttgHYKAscNK0Y86DeCjLH19fY6NfAK4+LAhQJnoh5t0DXCWO4yFvlCBn2lBT/+wQQL/W1ddJY/96Y86Od/cZ5+6SN6/9Jic5W3d1SbbdrVLR2ePbN+9T7abBgFuNA4YNdBMGtskk8aZG2zjRsmSE+ZJzYkXmo3g0QyO7SJrAI0ARrW4bMaGjeAm+HUWdSNAOg70BL3QFxrwc+ntoYCoAv/ai8+UuTMm8jcM3K4++mypGj8j8HTiBHLTAHp01HmAn1MBNwkYJbBhQDgaAvBjuB/kiz2hAT+X3h4KCBL4QR3RHT+mSW685F3DhvkoT1AmBn5QmvVHLhsAjADgtg2Arw0bATQAjY2NgU17QgE+CofhTy4mSODfd9edcs9tt+WSnax4jz5shlzxodOy4vWLKQa+X5oMVg56f2DABj+wARoBj1zQjRV+DPmDMKEAP9feHgUNEvhBvbSzfOmxctapbwjid/KUWb3gbVI1baFneBxQmAbauvbJL579rWzes122tm2XV3a+4ghsrG2UpvomOWTiHDl2pnkuvWWeTB9zUNrEAHDsYuihP9cBGBGgJ/CD7PUDB34+vT2UECTw8Sz1ly6+2Pf792HP76GnKAN/sPV1GVj/Z6mqHyXVC5eIjAimd4OecjV/WPeI/OCvP5aNO1/NKmpDfaO88eDj5B0LT5cTZi32jAPwo+fHCAAGwAdNL/IR+AjHPB/zfb9N4MDPp7dHIYMEPuRnezmnsb5WznnrIrOK3oxo8tCTL8nfX3jdcesvbON9feWZMmVC5hX2F1/fKc++uMVs7SVW67FC3zKxWY48dKoWmXTv6+yWp9dvlpfNNmBzQ63MmT4hyRtZ4Ldvl/4nf2mexzFTwJo6qXnTe0tid+K5bevkxgdvk7Wb1iT1n4sDDcApC94qHzxumecIAEAHLmDzqTmkQcDTxtYmTBBz/UCBn+tKvlPKA19BAz+bQzzzZ7fIlz+5VGfLcf9h1Tq58/4nUvbecWjnpkvPGsarCXfe/6Tc+9DTDgkLgU0GxA2mYdlvtuteN4d8QDv3tKPkn4+fl4z2kmkkPnPzfYIGaILZyoPZubtDzjhxgbNtWDXnOKk++IQkf1QcA0/+TAb3bElkt0SAj17+6l9/1RcVThg9ST57+krP3p9zfjQAMOjxCXjYdCMsiBX+QIGfb2+PwgYNfBzb/fK/fcrzHj6AfM1Fb/dcof/r6g1y450PI6uOefNRB8vK959M7zAbB3f++Ng6h+62DoB9/MeeflUmj2+WE4+ck4yPdLa37ktZO1i9bpN0mNEC+KIIfGeI/3fT29M0jzc9fnH/FOSWR++Qex67hznyxUbv/743nS8rjnuPqzxMg/eaeoieH0AH+GFoE/zo+dHr0+8qLEdiYMAvpLdHGYIGPtJId4Ivm4M43/3FKvnDqhcgSi5ZfkoKYB1iCF9RBP7Ac7+Xwa1rk9qpmr5IquefkvSH7fivJ+6R7z1yRyDJAvyfeMtHZNmi4SNHAB7ARwNA4BPc2kZD4PdpvsCAj9VLLmDko9EwgJ/uam42C3XoxX/8wFPyf2tez2v//i/Pb3JU80+HTctKRXc9ulbePP8gmT1paB0hcsDvM/Xi0f9OzO0PlLqYW5KY03/8Rxdnpf98mQD+Oy74tuucHzhpb293gI8Te2gMYAB8fuD3u9cPBPjIPBcvkOl8TBjAR768Fvm+9dllWS3U5VM2xNltFuzO/OovzZZQndy9cqmMs872g6e/N7H4VzOyVtBIrPj27+Xtx8yRW1acimDHRA34g9tekgGzPZY0daOk5nizsFeEFX1s1S27/QOyvzv1anAybz465k87XL7/3huHSbR7fTBwUQ9uDX4M9/16ny8Q4GOLQq9WogC5mrCA79XrZ9Pj51omzf/K9jY57eqfO6Q/fuHdMnvyUC9Ovr7u/dLTuV8ax40X9PZX3v2/MmVcozx6zflkidwcf+Dp+2Rwx4ah/BdxmH/Loz8w8/qfJvMStGPlkotdh/zo9fEnsQA89vi50KdBj7z5ubUXCPALWdSj8sMCPtJz6/WDnrMD+MtvuV+27u4UL+Ajb207tknT+Iny13VbnR7fBv7AjKOls2URWItucKVW91bDMoRh/mM/EeluTwYVa5gfRG/PXn3Va0/JF371pWEjiekTZ8l3zr9BxtQntoapBIAdfxCL3h9gJ/ARrsEPul9be74Dv9BFPSojTOCj18dfTu9Wf6hxklml/3SaVXrmsxD78p/8VdZtaZWfX/IOTzGdbXukykz7ukY2yHk33S9nH3eIXLRkCOgbaw6STbXZrRF4JuJTAP7zbu7cuZ7Shq3mYxvvpA8WZZj/82ful2/8/mbPvOYaQNAz3ju/e4G0tu2g17Ex1//Gu6+VhVOGtmvJgP+JTLfIxwYVL/T4cXnHd+D70dtDGWECH+nZF3dwIOfKj58e6k075MM2mOd3tbVJ0wT3G3+lBHysPC9enObUmukJB9Y/mixi1cTZUn3kO5P+MB0f/skleR/SsfNpgz7d1uB5x79H/u2kD9kipKOjI/l3YujZYdjbw6bBHN+Phzp8Bb4fi3osYNjAd9vXD6PXZ3nT2Xu3bZbmiS2uw+hSAv6YMWNk4ULvewMph3ZMgasPPUmqZno3FOl0UkgYhvnLf3jRsB45H5m5gB7yMdy/+8LvDEsK62LY2oPRw32CnjYaBQCfI4BhgrIk+Ar8fM/lu+U1bOAjD/ZpPvT6y05bJGedEu7FG1sf+3btMG9tjBGs7ttmy5iF0jV2lk0O3Y+KOHXqVO/HIt3m90cslaoW76lBUIXYuHeLnH/7ioLF5wp6JDjenOj7z/O+NmxrD1Pk1tZWB/TQJYGubY4EMNQv9FFOX4Hv1zAfCioG8N16/VIAf7oePzJn9XE2//G78dMmTbEW9la9+pRc9rPLk/mwHceYyzYwazY9N2yBjrz5gB5xvfb0scAH4MMA7LpHJ+ARBjd7fTYKoOdqfAO+n8N8FKIYwEe6dq8PGgyO8B5r7ttPMhdqFs2dIlPUIZoERzDfXR3t0t/V7TnHry5Sr5lraQcNiAZeGPrHImxVdvYOyOgJU6R6xiKpmpX7c2W55oH86Rb29FAcZ/e//vtvDgN/vqBn+nd/9I5hPT6AjzpPYGtQa+BTRqF7+r4B389hPgpXLOC79fpUNu0w5/4Afn2T9+u5xeo1qYts7YE1f5DBLYnjzYiD6UutOZBS22AuHmF1/xhzwWlUS7biCuJL1+MD+NeffVUSmDb4CwU9Mp4O+AC87vHZAMDWDQAW+Qp5pMM34Ps5zIdyigV8pO3V6yMMBrforr7ojEBP9iVSyvy9Z+4S6W8Yn5kxDw4MNydMmJBHzOFR+s0lGL1/v2fL6zL2oKG3AsM8r58O+Mg5wP3FpZcNA/9MswuhT9+lW70froEEJduhPkDORoDgp0yOCgpZ3fcF+H4P81HAYgIfD3Vc8eEPe/7hRikB/+/1b5CeqtSnvFlB/LCxL4/9+WzNwMurHNbqg8zqPl//3d8m/X8zB3dw994YZ5hvtihHT1I9fIg39LC4t+KHnxw2hHcyd+DLBj8O5ZygdiDyAT1EY3HvRx+4ddghHqzqYy8fIHdb3NNzfuazkMM8vgDf72E+ClZM4CP9dH+d7XVPH/HCNF1VtfJ83fxAgT9+/HhZsGBBdsUCwJ/8n0TPjjP4xyxLgN9a2Ovc3WqO5tclhvkHJHeaI6sNMw+X6saxUg2AsdHILuWcuLCd97G7L834uo4NfiaSL+gRf7FZOLz5nGsoKmljxIxju+zl2eODQQ/xtbuQwzy+AB9PCQH8fppiAz/dlV1f39Yz89uqUUND9cE+czHnwOWcYfpE2IFeE2EA/ur6oVN8w/gLJGAeecQRRzjHRLMShS07AH/frgS7eYOu5qgzxbmYoxb2nF0KcwyZ25M9+zuk19xJ4CGlqoMWSPXh5imuAM3lD3xV/vzcIxlTsMFfCOiR2HnHn2cO8AzfSgTocWYfwNeg5zCftu75QUOvn4/xBfh+z+9RkGID32uen81LO7n8EKu3dsk3H3pVmkc3yehRzeYz2ok+Y1rqMdyZM6fLwrYnZKzayu9vniwDR6Z/9SeXvNi8+SweYag/uOGJpKjqw94mg+07ZHDj00la66ZXZfy0obMHmO+Pmjx1aAsrhMW+XF7bAfg/cuJy+Y15R+CRNZkbi2RBXRxuC3tgQ33nWX2Cm2BHOGi8wAM/DBoI/EZ6FJAIyfxdMPCRWfsfTzMnm5mj2MB3u7WHIf5/rHib56s8mUs1nAN/oXX3fX+REX3d8nxrt6za0iWtXYmHGDV3k3l66+Grz025vhtGz6jzkJVbv6WHCGbubnamh0YBxocef0zLVISK3duDNjDQLzUHHy/VU9U6AQJ8NNkO931M0lk01IuDlI3DO7ikQ6Czx6cffGwMGAc2wjHcz+eqbsHAD2J+j0IVG/jIA4f7eO9u+dLjnL+sAt1vs+211+XFfzzniO3sG5B71rfJw6+n3hG/6vw3y/KT5qckXawjrymZcPGkXL01vbeenoBdr+jbpxJxN2Ff687EEeXx06XGvFob1Hw/3X6+S7EKJn393K+4vsGHjpOdJ8CsgU/wg4Yenw0ARwcAfT6n+AoGfqEv7XhpsxSAj7x1blwr4zcOXSzxym+h9E0vbpAtG16V7v1dAvDf8FSrvLjHzOmNcQM96KV6eGdwu3ls45nfIouuBleNG0aPdub47cbN3t+NOchRDXr9ax+6Jau5vlvecqF5ze0BYNR1DXC6YdONtPSQnnTY+WzrFQz8IOb3KGSpAL9q7yape/53yFLgBsP+/rbdsndHq6xpH5AtPTUpV3DtDJTsH2bai3xWxtmrg1xVXZPc1sMQH2Ej69Q78gG/0IOnty6/9xrZZdYhgjJe9/CRHnp63MwjyHVvz/zo+T342NsjHP585vkFAT+o+T0KVInAR7mzNgCEy+pw1vEDZhxY+3DKgp5bcpjf95n968bRY51g+Gtq65PDWYeIhb6A39zHHv21D9wUCPi99u1RNuAHe/eY4wPAMBr4pJHuMJgvTQcNwOcUgDyZ7IKAH9T8HpmOgZ/+pwtyCJw+5SxDrb17t1js+XHzsHNPq1SPqE32/roRCONYchDgR0//NXP8d6bHX2thGxw9PoBP4BLUeliv3dAjeajTfOb5BQE/iP17FiYGPjXhbocBBveUs6TqwzxpojjvChoAVJvtqj6zj908YZLDjS2/MVPM4p6hh1VWDPuveeCGjAd70hQnGYQbflcv/cywE3pkYKeJtyn1oh3DAXZ89BaeDXjygp7rfn5BwA9qfo8CxcDnz+piY/hbpCerXHLjSbIf3vBkNAHo/Tv27HZ6/Lad251tvokz5jhRwgI+EsOC3y/MwuQvn/pNXkP/hrpGuez0f5cl80528u72BTBjURxDff53HvgAYIKbdqbenvFynefnDXxkGplHIYIwMfC9tRrmhRbvXGQOyWaer6VgGw+3EWsbzGm0QUkO+8MEPvPDBuAvL/1N1m5cQ7KnjR7+6JlHyIXHnufJgwANevgJfDfQIzwb4IMPK/s2L+hepiDgc+/RS3gh9KgCv98sUPWbLbmaJvPirDlcEYQp2dV8q7D2HXwr2NObcmXXcBW7vLjUs8ZMA9aabcqtbducfE8Z3SKjzN9kTx09JW3vrgtpgx5hAL42AC861Vx6fMTPdYEvb+BzjqIz7ac7qsCHDrq2bpK+fW1SO3aC1IwyT2b52ABE6g807FN8WVQQbOm1mZN9+spusYGfRbYzsnjhRQOfYIft1nsz3C2x2tranF7fjYHvpkVFy2cff2CgT7q2bJbe3TulyryTV2vAP8KsXI9oTpzDV+Jzc+LSy7Hn5hanmNwZ9vPdsrZ3+2ZpMPpyHug4wBBl4KP3xiI4Vu7dDBoEGhvYNvjtcMaDDV4M97M1eQM/yBV9ZD7KPT7yr8EPP0xNfYOMxAjATANybQSqZpu/wz7khISgCH2nHN/NkG/XZ8b09d4M8UspmID3+kcpAJXrY+CFyaenZ5kRN5eV/byBH+SKPgoTdeCjDG7gBx2myvzwNWYRq6quXkbUNUl13UipHncQTnUkGPA9aY5pIMYV5QnqoUwU5hq03tL3koZtPazm61t7Dm/AJ/e88pMvHR0ihu/Ah+6huU8PuZoON8LQCLAxsHt65kXHI402wnJZ2c8L+GihglzRR2HKAfj8UbrNefTuVnM11euePRnPukIGndtsidVfkHE4AxUBczj8uPjADxu/A23wajf82ugw7QYP/DDseeAmjXTbDzqMlqXdiVAjc+92qVlt7uinMdjK27t9S3LfPoXVAH/gTctT0mG4W3rMJ8tCP+JQX4xPm7zwk9+LxjQBVPDAxgdDdgCe8ckHWwNZhzM9Hc48aZtxNM3NncvKft7AR4umleOWkUJo5QR86AGr/d3bt0pve+JPE1x1o4Cvw6ln2jqMboSxgtBt8yOcYYznZrP3QRj5bduOx7SYh2S4eThk7NoHpLpvf5JkO4bdx1cMfXVjZO+8tytKwsl0dLrazQik0c948CNM+8njZYPXlgdeNxm6F9c8mpduG/g6HfJ45UnTQwF+kFt5KEy5AR9lwtC/19zE8ur9q87+nHlpduhxSwAQRlc2XSlYcUEDL8NoIy7dtEGDoV/boFOmTpP8DIcNw7gJ3xAA7LjNrzwitW2byZZi878BG8YkzuunBBpPX+MkaZt7mkMGQCDblo9At7y48ZHXEWi+3Hggi0aHkw4a3eSz/cirTdN+usGnG1rIQ5hbGkzLy87lbn5ePb7X1oRXhvKhlyPwqQc2AH379kpfxz6Speqcz5lnuBL/kacrHBuAJKNxMJyVhGGsUKw4tBluxyM/w2FrHk233ZpPp2O7G7Y9LfVbn7WjO359NNeNoWfcHOmcdeKwPDEN5gFx7bKQB2Hp3G5xQYNBPPTeelXeTgd8ute2w7UfbuZFx4EMGB2eoGT/ncuWXgz8DHrNZzsvg8iUYEwBeveaG1rGHjxjpZnjD/X4YEQl0QYVQ1dChrHngJ9ubZNP26xkmsZGxo5r90r004YMxqU8yhjR2SrN6x4gOWnrY7pJouXonjRfume80aEyLaZD+bBpGAa/W7jmc4unaeDV8uC3w6FDGgIaftJJo65Jt+VQBsPpz8XO5bJOXsDHIobXNkUuGU3HW849vle5O9+wTAbrR6WAncBnxWFcTQeNfoZrfu12C7dprHxuMsGr6ajAAIdOY1h880ho07rfSU1X6voGgL+/vc28zuX+T8BIa/+0xdLbsjBFPug0dro6b+BhuJ0n+sGDODYf6bA1L/xexk2GGy0I0CNPkJvtXn5ewA96Dx+FqEjgL3q3DNY1p1RE6IKGlVpXJtLIY9s2L/3go5s248IPowHBMG0zXNPotmXW7lwvda+uYrBjA/jp/gIcTN2zTpCeiYemxINH55GBbjSvMObPK44OZzm1rnW4WxqUy4aRYEcjSbeOxzRIy8eOgZ+P1lziVJmTZzWvPiYjdrzkEuo/qevIc6W/tslVsK50YGDFcqODpumoENoPt45PN2yGsRdHWozLcMojL+nghbHp8Fd3t0vTs79MMBz4dnr8tr3Jq7gpgQc8nYefKQON6vlxIwvGzrOd5oHojsUwTaPbyZvSj10W8sHOFKZ5bTd0puPbOrT58/FDfraHePLq8YM+vINCF7PHr975ilTvXCsj9mzMR/95xxlsHCc9U4+SvnGzUmSgksDY803NhApsG13R3MJAYzyb1/a7xWdcO8zNX9Vt/jDjhd9JdW+HW7AnDdOfATMK0vmBG8YrffLSdhOeSQa349zi2jTkg/J0GGR45RF8zJ9bXC0nWzfkYKifjbwY+EqrAPyIjU9JddduRQ3fOdAwVvqmL5b+8bPTgr2QnKFCulVuXYm12y0tNEh2Y0Qa5SOeM3owwK9/3uzn5wD8gZFN0rXgDGfdwy19LxrzoMO9aOBB/lhW8GHx1AaPjm+7KQN0GsikH7Ign8aWTXqhNuRme3qv4oGP4bwDdjOcr+pPvGpb6A/gR/zBmlrpHzVZ+swcF89LozKyIkE+AadppIOGSuC2+g8eHYeVkvwIc5NNmh2fdMqkH3wwmt7wj5/lDPzuxan327V8Ldst35o3kZtEflhmhDMeZZEPth0Of6ZeXMdHOvgwH0wXdhAGcmPgZ9Dsrd/5kbxtvvmv+/oDf/eUgb9YwWgAXuttlp6Zx8uM6Qel9BzZ5okV2ObXFZE9kqaBn3Q7rva7yacc8g32dknD6p/n1Lj2jZ0uvfOH/5WWlq3dSMv22zS3cOaRYbBpWH6WkTwMT2eTV8tLx+9HWLan98q6x9/bnjgcM8b8NZVtvvDFG6Rr8zq5eUVij9gOLyX/3h7Tkp/4PhkcUZ/MFhquefPmyLSpU2TB/LmuAHWreKjIpCeF+exwk1/VsVPqn/11TikNjGqR7sP/JSW/lE07J4GKGfFhCGy4bZna78WPeDTULf3FsLMF/v8DAAD//0bCD7QAACIPSURBVO1dCXxU1dU/ycxkm+wrhACyr6IiIhUQ1KIoLWgVP1vUupRP+lnb/tS6fFRbsX7Wta0LUrfWaqvVolZtC1JRKsoii0IgbCaQBLInTJJJMpNM5rtnwk3evHlv5i33bZl3f7/kvXvfXc49b/7vnnvOufcmBEkAGQGzd3V1QW9vr4xS8rM2NTXByZMnwwo6nU4oLi4Gl8sVlk4jnrZ2eP+9D6G2rg4+27oLGhoa4IU1j8GkCeNolv5r9YlauO2n98HV0wvgxvlj+tPNeBNMSgf/tCUQdKb0k/cu6efjv1kdiufn50FRYQEsvHg+DCsugnNmnNmfj94kJCTQ29CVvnZM597jQ4xz89M4/xpWIa8cNy/mczQchKTyz/hFosYDGYXgn/ytqHmE6McC2D4/iPUJ89FnlG5alsbplaab9ZqamgqJiYkxyUsgHYrkUJRimN1MwEcAv/HGO/DlnjI4eqwygvJl11wJP7zluoh0TEDwPLf6Rbhh/lhTg7+qyQuNIy+ESVOn9vcDP3K33raS9PlYfxq9KSgogNGjRsBlCy+ECRPGQEnxEPrIsKvr6BZw1O6X1X5vRhH4p0QHvpwKrQJeOX3i59UM+NhQZ2en5iO+x+OBxsZGfr9gxIgR0NHlC43smz//Akr3l0Xk4Sc8+egvYOY5Z/GTQ/EVP7oXSveVwfXnj4MfXzpRMI/RifuqWuDtKjf87PYfhpHy3POvwp9fXxuWJhQ5beQIWLhgPsy/4DzDPgKuA+vBcbJaiDzRtKAjCXznCH+0RQvF+YNBCfy9pQfh0OEK+PfHn0NHh1fyK546eRKsefZhwfzbv9gNt9/1QOiZWcF/7+u74csaH7zz5gthfUBp55plK8LSYkWiSUCxyqp5nvTV25DY2SK7iq5ZN8suE88FBg3w29s74F/rPyFz9p3Q0hI+55fzgt/48xrR0Y6O+lhfYVYa/H75LBie55ZTvWZ5qxq9cMUTG0P1C/Xh2ht+IijuSyEoLc0Np0+dCHPPmwmXL7lEShHFeVK2vqSorG/GsjDdhqJK4qjQoAD+9h274aln/6gK8PSdX3TBXHjg/jtoNOzKHfXpAxz9r58/GrJTk2iS7lcE/S0vboV6T0eo7RXLr4drv/edMDoee3IN/P39dWFpSiKoF/j+sqs0+QAktDdAcul7SsgC3xlLIZiaqahsPBayPPD/tvYfsOalV6Grs4vZ+/vHe69BVka6YH0XL1oWMX3A0f/mC8bCzLH5uksAWw43wINr9/SDHom+cP5cWPWL8I+X0EdLsIMSE/EDufwHy0SlI4nVhGVzNB0F1+GPwtKkRmzgS+VUXz5LA5/1j5myLtr8NpaibMG0Elg8owS+Ma6AVqfJdX91C7z66VHYsCdSEZbmToMPP/hLWLseTzssuvzasDS1ERz9n/7tg8zA76zaAc7jXykiyzdpIQSzhikqG4+FLAt8al9HGzzrgMB56/XnBUd9qQByJyfBGSNzYN7kIphYnAlThueoJhPNdR/trYVNZbWwt7I5an2s5/lijSGvfvfEA4I+EGJlxNKVaPRpXTbwKSekXTUFPtrxA4GANEpk5lpxKzGvSTDRyay2P7vQPJk+5Cr5aJqU66iiTBialQpFuakwjEwPMlKd5M8V+uOWP9HcN1c/3tIJNeSv9mQHlNe1g9fn52aLen/nT38YMQ9nNc/nN8wK/Eo1+khP9+g5ECicwCfNjgtwAJ2QUlJStHHgwfZ8Ph/09PQINK0u6d2/r4fHf/ucukpilI5m2tOj/RjkxXy85NuXRNjztaQbwf/y808qFvsTerogecefY/ZLLIMNfDHORKYj8HHEp16IkTkGUmR77mFRrYB/xdXLQ262A+Rpcyfm0IPi/tLv3RKh5NOGCmW1zpw5HZ585P6wwmUHj8DyFXeGpbGMqJnzJ3iOQ3KZcquDDXzpbxIBn5aWJqmAIuB3d3eD3y9dPJVCiZajFr99oVGT5lEq7tPyWl8RhHxHHqn6CTW0offfs0//n6B+JFq9ajT6WG/PsDOgZ/iMaE3Yz05xQHPgo5iPoz7LoNdojzSj+MrXjtO+vPaXd2DNC6/QqCmvQmZJPfh3+bcugTvvCHcbjsUg19HPiY9+bLdqsXps4ItxJjIdF+egqC8lKBrxWQNfz9GeMiWauM/aPEbbZHUVWnF4x90PwrbtO1k1IVpPNOWoUKGkfR9AYlud0CNJaYEhk6D7tPMk5Y33TLh6NTk5WRIbFAEfl+TiQh1WwQjxWsgZhvZHjRssrUPLq56afX4/5Cr71Gj0se2e/DHQM3Y+nww7LsABzYGPyxs7OvpMUwLty0pSstBEVgMimfEHLGbT18o8JkKK7GShUVdPqSmaZYTbGbUafazLBj6Xo9HvcbRH8EsJikZ8rBiBL3MpvyA9RoJMTNzXynNQkAEKEoWUk1pr9vlkCn18+HnUavSxPhv4fK6Kx9GG73A4xDNwnigGPqs1+XoopTj9DbsVAhBm0ENLHkaIzIjQNEVvmqWI/Go1+sgW1ptxyGS1pbJL9drDTikGPgvvPb1HKf5bjKbdN/M8/zSyGclrrzzF7w4ILTSKyMQwIZbIr1ajj6TawJf2wtCUJ9VrD2tUDHwWTjxmMJ2JiftGTkFivWohWz6WMeJjFU3kV6vRxz7ZwEcuxA5ybPhYm2LgszDpGaHN57NQbMWensoyPk2x4mKSyv0PPAEbP/k0VnGmz6OJ/Go1+khob2oO+M8I34OAaQcGSWVyNPrYZcXAx0U6KO4rDXrPScXoFBNXjbI2iNHJT9/88bv8JHju92QPvjdi78EXUVBlwrkzz4YnHrkvohalu+5wKwq60sF39n9xk+x7AQ7oBny1Jj0zac6FPOGQt3rPmQXep2iS0PJcI6dO/CmTml13uJ22gc/lhvi9HFMe1qJ4xMfCajT7ZppD83+02DcMZpiK9FES+X/lPbfBxPGjQ67TbW1t4PV6YW9pGbz93kbAtRR6B77egYVGH/tgA1/am5Sj0ccaVQFfjWbfTKBCs96K5df2gwgVlwimN//2PmzZvkca5+XkSiH7+KUIO1ok5Aj7WieQtf7csHTytFDUT8y2flJVS1oCeJMT4eDmUujaUsHNqts9V1+iZtcdLsE28LncEL6Xq9HHWlQBX42Cb84Flwv3woDUwoJcWPjNWaGW/f5u8JGVh83NbeREniY4eIQcWJE9sNSRApMLREde33NH7kA+V37fvbOAm6bNzr0jjvRA5diBD4ln/dfge69Ud06ioo96Q6rZdYdLuA18LjeE7+Vq9LEWVcBXquAz0/yesjJz4RQIjs0CBOromkQ4OtoBDrdxO+xSuqRcRxwJQNVIBxGLB3I3PL4ZghVNAwk63dEVfCw0+pRke299ygnhq1zFHtaiCvhKFXxGKqEEWUdG9MKHFvQ/QiBVjpXm+thfyMCb7LpeaM9KhJ6Bo/Wgs6wB2p753BCqUGcyF0ohIcBmzwYb+NFfo1zFHtamCvhYgRIFn15LSJE+KSFhVB4U3DmnPytfdO5/YNKb9MZeyPAGoYaM+txg1Kg/lZzX98cbJnNJUXVvAz86++Qq9rA21cBX4sFnhIdZNNYlThkC+f9zbn8WIdG5/6HJboYeI6cWk2NP3b4gJAWCUDbO2S/yez4kc/2/6z/XP31kLvxhxWxmnLKBL85KnN8j8PEqJ6gGvhIFn5kUe8gsx5zRkPfd00N8QyAVtvZCtyMBWtwJZBSNfeSwHIazzkunJfRjlU/E/oaSPpoDHX5ouo8cZNHFRuSWSvsVs06DlUv6+Cm1TLR8NvDFuaNkfo+1qQa+3Hm+0QtzhFiYvHgqZF0yBpzEETGHiM2e7ERI6iLicztAw5DwubNQeSPTJu/vgf2TnYDifld6Yoh+Cnykq+n1PRDYrK9579aFk+HGeWOYscUGvjgrlczvsTbVwMdK5MzzN378Gdy/6jEsZpqQdvNMSJ8+FJII0NPaCfDzEiHF2wvpJN6engCd2fLEKD07hoq9/JO90JjtgOKmABwa7TRcyff0TbOYnjhkA1/8F6Vkfo+1MQG+nHm+mTz2KDuz7poHySOzQ1EcQSuK+5Rko04EQqMpzWfWK0oqieSYA7/wsYBQf8e/dBP3WY/2yHMb+MK/PCX2e1oTE+DLseebyWOPMqHw2SX0NnRNbwyCkxwU5MlN6FeUhWWwWKTx5V3Qu7NKU6rxNKEHrpoGk0vUHynGJ9QGPp8jfXGl83sszQT4WJHUrbiuW3YzVJzQ37EEaRQKCUOzoODn84UeDZq01k+PQdcbX2rWH1Tm3XrxBM2OFLeBL/zq5Gy1xa+BGfCliPu4+eLsBdfwaTA0zjflGUqMRo2HtPs/I+I+44DHiN935TSm83khEm3gR3JFqRmP1sQM+FLMemWl+2H5bf9L2zbF1XXxeMhZMskUtGhJBHXmWfLthbDho09VHxOm9SjP5YUNfC43+u7ViPlYAzPg4zy/rKwMcM99sXDoy13w0DPKD1AUq1dNOtXoq6nDCmWpWW/pld8KOfy89fYHisjWa5TnErevYD43at8TDowcORKysrIU84IZ8JGCysrKqEdr5TSVQvuxA3DghAc27quDr+tboby2VTHxLArmPPBNcOVrs2qOBX2s6mjfdQI6XvoClt+0DBZcNBt+/ssn4NDhr2VVf974Ilh1zZmazeXFiCkfcanYI03TcRDDKazL5ZK8X72mBJ2qHI/KGjVqlKTjsMXoYQp83ACiqUlccZddvhFcnY1htFQ1emH7142wo7wZvjrWDPUeNgd1hDUiFiHr4gufMOZHJUaSVul0nv/Qqrth+plTYdeXpbDy/kckNedOToIfXzoRrjx3pKT8rDM1TLmadZWS62tvbw/5qWRnZ4c+AJILapgRbfdqRnskjSnw0Yuvvr5e9KCNnCPrwOmLPsLr+SHgL87R8F2Zour6lRvgt/fdAxPGjQrR8/TqP8A/122MShv63a9aeiYMzzNOKjIS+Mgcj8cDqMNCsOHc2uiQl5en+iPEFPjIkNbWVtHjtQr2vSmbZ/urW6DseCtsKquHI2RawFIiiBfFHmU62vP/esdKSE/vA3F7uxeu/8Ht0ClwHBqO8jdcMJap6y2lQ+7VaOCjyH/y5MnQgJaTk6NKxJbbd35+1ObjNmco7qsJzIEvJu47u1og5+sNamgNlcUPwfYjzbDrKJkakD+vT/kClIwfnQepkwpU02SVCnC13rs33x1G7qZPt8GvH3smLM0MozwlKOhwQePEK2jUsCuO+DjyYzAS/Onp6eTDLeKiKYM7zIGPbTc2NoZEIy4dTm8d5BzdxE1icq/mQ5D36GVklx3OtjVMKDJvJcktQXh+2tIIAm+/60EoO3AolK6Fy21EgzISAs5UaJ7wbRkltMtKwY/ivto5tlIq8/PzmUw3NAE+KkTwjxtSmw5Aeq0GG1dyGmnt7IYLV63jpIjfxoPHHr/3rgQXvFgS7p6MeWpqGuCeu34Oj187XROXWz4dcuJmAj7SjeBvaWmBtLQ0cLv11XugdQHn9yyCJsAXUvK5a3ZBWvMRFjSL1rHlcAPc9vJW0efcB4lnD4f8m6Zzk+Li/uEhl0KxK/IH29lcDyV1myGxl6z2MVEwG/CRNX6yGSvO+RH4eoKfhVKPvlpNgI+VHz9+PMy0V+LZC1l+cVMfJUjN9al1B+BPmw5LqiJeHHf4zLjSMQlmOYX1GjkdlVDsLecXMTTudWbB0ZyzDKXBDI2jMm/y5MmqlXq0L5oBH9fo19bW0nagsPJjSOkJF//7HzK6ufG5z2BvZbOk2uLFcYfPjIvdE+E7qeKbZBSe+BxSurT9QPNpihb3peRCXTG7bbyitSX3GXqr4uI0FPulnksvtw2aPzMzk5mYj3VqBnysHJ156KkueWVvay5Gzvvlemlaft6uukhrvIQpaSPgrryZot11dLZAbrl664toAzIf+FPzwDP6Ipml9MtOHXxQ06+VjZ+VCY/LFU2B32/a6/FDwcHIQx65hKi931fVAt9fvVlSNfE6v0fm5BLR+TdDB7YSF2JYWsNecNeXCT3SPa0rayS0lZyre7tyGtTawYeFpx6/P5oCHxvDUT/YVs/Ehs8nnhtfu+0YPPyuNKtBCvE3z5xrjPspl2Yj7sU0+3xahNyr+Xn0iFsB+Fo7+KDDDuuphObAx1HfU7lfExs+94d37+u7YcOeam6S6H28zu8pQ54ZthgyEqOfEpTo95KP9XrNp2eUJrGrN38SdBSdLvbYNOnUxo8EsTK5YV1ajPZYr+bAx0Y6yndAcoW2p7pc/btN0lb6xfH8Ht8FhpWFF8H45NhbZKU2E9+LGmlSVF/N7P9bBfjYcwp+lg4+LE143LejC/CDzVXQu/sdbrtM73uJd9dlj3xEPAZja6PjeX5PmX5T3iyYl1ZCo1GvRov8nuIZ4M8ZHZVGMz1k6eDD0mGHzyNdgI+NBna8RZY51fDbZxL3ZwyF7z7yTzhWFVvUj+f5PWX2oqzT4erMCTQa9Wq0yO8Zfh74M6V9pKJ2RMeHuIYfFX5qHXy0mNtTNugGfC1H/fYh0+AXL22ETZu30H6JXuN9fo+MOcc9Fn6Ue6Yoj/gPjBT5W0bOg570Ij5Jpo+jH0tbWxug/R03xZQbtJrbUzp0Az42qNWo3zJmATz/1w3w1tr3ab8Er/Hony/EiFi2fKEyGdXbIMVzTOiRpmlHh8wFd95QTdvQqnKv1wv4hzZ+FNulBi3s9vy2dQW+FqM+LtusG7cY1n24CZ557g/8/oXFuWfkhT2Iswja8h8vvFBWrxMC3cSx50NwBcjpHToG3G/PLBtgKOk2Ovigbz/u4CN1DX1GRkZIUlDSntQyugIfierdtx6CtQel0hczn8eVC9XZ02Db9q9g9fN/ipo/Xv3z+UxJhWRYlSzfKSbN3wyjPPpp+f2OZDic+w0++YM6ztonX4xZugMfiBdfYDMZmQM+MZpkpbcMOQs6MkZCbV0j3HLr3VHLxtv6+2jMeKFocbTHos+yPQd18+pDP/3G4eeH5srowII+8VYNOPKjxh+lFxTlxUJubi6TjTbE6qfp+gOftNxbvgWCFV9QGlRdcX7fk9Jnk7508XWidcXb/nqijDj1QGx5bqxy+FwvEx/12qNacgSFVv7wUvqtJg+18eOIjnN+oYAfN9Tk6xEMAT52LLCV7K/vjW13j8YEtN83cXZnue6mn4ra8ulR2NHqi6dnUp14hHiil4kPrTWdeRNDJODmFxjEQBN6aPJ/FPxiDj4oDaA2X49gGPBZKProiEAZteLWe0Vt+dwTcWn+eL7KceIR4pOrtRqyq7T1xuSa8qhjDNrGrSzy037wd/DR2nzHf4eGAR8J6T34CQSrlSuLWofNAF/2gFfXrx9dLWzLt910+e8drs49Gxa5+7bZjngoMUHrXZUaJ14OQcfAmgI0jeH6d3Rjlaohl9gVXbN1dXWFdqOmDj4o4uM0hvVCnGidMhT4IUUfivy+tmg0ij5rHncZBJIGdhx9+ZU3BW35tptuJAvleO9Flh5I0Wq+H0jKguZxlww0dOquubk5BBCjNruMIEhhAtfBp6ioSDcRn5JrLPAJFUpFfqEfxj/XfQxPr36Z9q3/apvx+lnRf3O+ewLcnKt+1Vtovl+xERJ7OvvrZnHDn8bROul+d2gXT0oakAbocytdUYLB+T6eg6d3MBz42GElIj/653tzx5MR3w3BU6O+2LFQthkv8mc1wVEE9wyZzURk1mLr9Gg++mgaQ00/KvqsLPKjaI99MMJSYQrgqxX58Wfdk5wFrV3d8N6mvXCcnL9X19IFteRakeqCgjvnRP7y4zxlXGIh3J4zg5mijKU/P99aw39VuPEFbvDCV5Dx85k9rqcWn88LcwAfqSK79AS2v8Gnj0m8ktRSlQhwgPzVkr9jjgSocyZAt7gfBZN2zVxJJrhhVfospuYxVv78fKWtEB9RQYaLYIwaMYVokpOmtxafT5t5gE8oC1buhN7Dn/Fp1CxOTkODfYkJcIJ8AA45BucHwRUEKOoJwrnd5C8AMJXEMTQlOKA2f27Ih5zlXFkt+Dtzx0L70Ol9RMb4b1XbPor4RlsmTAV8fM9areCL8RsKe0w/CFaVEBDsU3xBWEQAP6U3CNkgLNocLpoPCa5k5sdBKQW/mEIv7OVwItQmjotalCx95VSl662W6+yldsR0wGcx35faebn5KomEUEUkhB1kulBBpgpN5NpErmYIUsFOaX2IrBK9asQiCLRpYxeXu1OvnJGe9gGvVrPt4/p8MzggmQ/4+DZxvr+TbNXFaCEPVqlVMFI6cJPRfA4Z2WcQEX52r7Qe4sfrV6mJUO1KAPTXd53sOxBCi6Og0Lsvvb4UnL5WUeJw33xv0VTocReJ5on2ABV9KPLjdAVHfjMHBDwC3wzBnMAnnNF7vs/6ZZQSQaCaSAQ7GesOcGSf6euF+eSIO6lgx77hB+oVIp2sTyNEnQrotjsjmBPyhtNycQge0pHUUQcOfwf5mHcDkD0UulOyQ1tqcT3zKF1yr1aw7ZthXs/lq2mBj0Qqse9zO2e2ezUfgxJUzpG/K8m8XWzOLtbft8jH5zUCeL4V4zLHOLjAac3dbcT6asZ03H1n7Nixsnbh0bofpgY+dt4Myj4tX0KsjwEC/vtEnJczunPp/R2Zy68nor1QmJM6Dq51jw85w+A5cGaYewrRKTUNHXvQGcZsir4hQ4bo7pIbi2emB76ZlX2xmKv0Of0YZBCxXingsW2cz6/IJMO9SKCbblJROT8/39KecOj/juA3k23fLMo8/k/A/MBHijtbibJvreLFPPxOx1N8qTsRvCLY5266SRVkWij59OS3mWz7qGw0Kz+tAXz85SD4t71uCU2/nj/0WG3hqL+BKPU+SSLmR57psTgpHx4mtnwMuNwVTWNGO5aEiFHxD237uIJP6bbWKpoOK2pm0COh1gE+UmshMx+Sa8ZQSYhC92UMGQkumESWv2IIBoPQTUCTRBRRoYVPRPPemYeLoAaWPYcyWuAffsDQpdeoRTxGu+NKeUXWAj7+QI/vg94DH0npm52HAQf4ex4wqFLzKoy07aNiEZcMmz1YDvjIUBv82v6susiI2VRbD0UjSsA7ep7ljrBC7lCFpZ7r9tGigDvpWGGpsCWBjy/WBj9yQVpAIFeUHgSH0wEp7r7NHFPS+q7d3T3Ep6Yburx9G2n4O7vAnUkOdMjPhdySEmgZc7ElxX3kDJ5fh6M/ivxaByuBHnlhWeAj8Tb4kQvSQ4+/G3xEiddDgM4NTjKvd7iI/ZtsZMkNVjqimks3vaeLeFCzrqWPgtVAj/yxNPCxAzb4kQvsAkoHXk8buKbOA9/QM9hVbFBNWtv20SvPKCWiGpZaHvjY+WDd19Bb9m/b1CfwS/Ce9PSP8MmnxHvM5uvoJOlEzO/phvaTbeAjIj6K/CjmByedD90jzgzNVwWqtFySVrZ9K2jvxV7WoAB+qHO2qU/wHXsamsBDtqkSCjjPdzhd4M4i69mJOIwr5XATjG6yjVljYyPzTTqEaNAjTQtFn5lW2inh4eABPvbe9vBT8hsIAb4rd1TYGQVajZKKCGRQiOUGnWZ3zpHCrsEFfOyxDf7Qey/fsx+cSURhR0Z1qrnHB6i9D/QEoImI9YfJ85rZ58Py8YtCZbj/6Chpdf992idWtn2z+t7Tfkq9Dj7gY8/Jibx7ytbD/qaKEB+KeZtUDCeLX7hhBDfC8B695IRCFWfTnnbiRcfdpgL3/ysm9LWR6x7iYjubrM5bEJC/FJc7t6c01Kenwjay0ej+dDfsS+7bbNTtSIPVxZfRLGFXdH1NTk42rb95GLESIvRjhso4VMrJCXjCLdro5ZaT04aeeQcn8E9x8KmqrfCP2h168lOztvIJ+IeTtfhjyG47w8iHIZ18zLgfsEzik996am+9VvLROH7qg4KbiDaQ7cIqyI47/PX4SKyLuO2+WLJEkG7qv6/lJh2CDWuYqGQKg5to6H3ElYYsCFU9qIGPPXy5Zje8U/MF+AN+rXlp2fqfGbYYMhIjT6VB8Rj3r8f931nuxGsko+Ta9q1qrovF40EPfGRApb8Nbi9bC23+9lj8iMvnuPdesSvceYcyApVi3UQfoIf3G21T6yu17cdaiTgYlHhivIwL4GPnEfxrqrfBzqYDYryI2/SfFJwP01MKBfuvZl4sWKFJElF/gT71QgtqBtt8XojlcQN82nkU/f9ard+hHbRdM19jHZmN82IUedPTrbdEV4zv9IPGX8SD/cQ0nNcP5hB3wMeXaYv+4T/pWEdm0+OqYonG4bWaP8a37Q8WU50Uzscl8CljBpPWn/ZJyfXs1FGw3D1ZtChu0oEgQdPeYFHyYWdpv1B/MXToUENOrRVlusYP4hr4yFt79AfAk3P/2zVR45+aOasvKioCNFdaYQ09Sw7GPfApM+N59M91ZsFvhi6grBC8omlvMPnv41JanMvjNR6DDXzOW4/X0T+a9x6HPaGjqnBkRLu+VQNq7NFMp+X6fCvwxga+wFt6s2E/vHlie1zZ/V8ZfpUAJ8KTUBOOu9pYVcmH++Eh6Ae7xj78rQnHbOAL8yU093/1xC74T8NekRyDKzmaEw+3pw0NDaHR0qz7xXNppfdookONPV7t0McBG/gxfgnx4vgTzYmHyyJ6LLUV/PdxZEffA9wwww7hHLCBH84P0Rh+AH5V/iEca6sRzWPlB7GceGjfrOC/j/N4Cvh409bT9xTragM/Fod4zz9vrYI/kvn/YPsAzM+cCDdmTeX1Vjiq5+61whQIp9qAF+aLUKoNfCGuSEgbbB8A7jl6sbpP3V3NskmHDfhYbyzyuQ38SJ7IShksOoAxqUPg/vw5kvuO/vvoxWekkg+VdTh/R229LdJLfnWhjDbw5fFLNDd+ANAKsNtTYUkzoFRbPmUA3aTDCNOeraWnb0H51Qa+ct6JlkQ/gH83lVlODyDFlk87TZV8aBfHEVfrYIvzbDlsA58tP8NqQyng3bp98J/mA5aQAqTa8mkntd6kA8GOLrW2DZ5ynN3VBj47XkatCZWBHzQehENt1ab9CKwsvAjGJ0s/Zw535sG5Pn9Ne1RGSHhoz90lMEllFhv4KhmopDh+BD5uKYfdJ82lD5Bqy+f2mcUmHXRkR/95XPprK+q4HNbm3ga+NnyVXCtOB7Z6quAz8iEobzsB/l7jNgWNtSGHUKeU+u+jCI9WAdTKo4edDXYh7mqXZgNfO94qqhmlgQPeRvIxKIcab5OuHwI5tnxu59B/P9aJtBToKMbbozqXe8bc28A3hu+SWy3tqIfqrjbYSXQDxzobNf0YyLXl006g/77P5+s/ZBNHbwQ3ghz/7BGdcso8Vxv45nkXkinxBHywz1sfkgxq/K2hD0InOT3opK9NlYQgx5aP4MY/BDbO0ekW3LbILvk1GprRBr6h7GffOH4UqnweaO3xkT8/tJG/GhLHUNvdFtagl+Tp7PVBaiI5JsuZDGnkVJ3bcs8Ky4MiOgU5HbltcIexyJIRG/iWfG020TYH1HHABr46/tmlbQ5YkgM28C352myibQ6o44ANfHX8s0vbHLAkB2zgW/K12UTbHFDHARv46vhnl7Y5YEkO2MC35GuzibY5oI4DNvDV8c8ubXPAkhywgW/J12YTbXNAHQf+H7IYWkrMLmLQAAAAAElFTkSuQmCC";

dayjs.extend(utc);
dayjs.extend(timezone);
//agregar secret o ver como diferenciar paises
dayjs.tz.setDefault('America/Lima');
dayjs.locale('es', {
  months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  weekdays: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
  weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  weekdaysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
});
const formatDate = (date, format = 'DD MMM. YYYY · hh:mma') => {
  if (date) {
    return dayjs(date).tz().format(format);
  }
  return '-';
};

const Success = () => {
  const {
    inventory,
    routeToInventoryMenu,
    routeToSavedInventory
  } = useInventory();
  return jsxs(Ramen.XPage, {
    children: [jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "center"
        }, {
          children: jsx(Ramen.XImage, {
            width: 'flex',
            src: img
          })
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 8,
          lineClamp: 13,
          lineHeight: "title",
          weight: "bold",
          textAlign: "center"
        }, {
          children: "\u00A1Todo listo!"
        })), jsxs(Ramen.XText, Object.assign({
          fontSize: 10,
          lineClamp: 13,
          lineHeight: "title",
          weight: "normal",
          textAlign: "center",
          colorThone: "dim"
        }, {
          children: [jsx(Ramen.XVSpace, {
            size: "xs"
          }), `Finalizaste el guardado del mueble`, jsx(Ramen.XVSpace, {
            size: "xl"
          })]
        })), jsx(Ramen.XCard, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            width: "full"
          }, {
            children: [jsx(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              padding: "xxs"
            }, {
              children: jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                lineClamp: 13,
                lineHeight: "title",
                weight: "bold"
              }, {
                children: `Mueble ${inventory === null || inventory === void 0 ? void 0 : inventory.zonificationCode}`
              }))
            })), jsx(Ramen.XVSpace, {
              size: "xs"
            }), jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              padding: "xxs",
              width: "full"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                orientation: "vertical",
                width: "half",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  weight: "bold"
                }, {
                  children: "Colaborador"
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  weight: "lighter"
                }, {
                  children: inventory === null || inventory === void 0 ? void 0 : inventory.createdUserName
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "vertical",
                width: "half",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  weight: "bold"
                }, {
                  children: "Fecha y hora"
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  weight: "lighter"
                }, {
                  children: `${formatDate(inventory === null || inventory === void 0 ? void 0 : inventory.completedAt)}`
                }))]
              }))]
            }))]
          }))
        }), jsx(Ramen.XVSpace, {
          size: "xs"
        }), jsx(Ramen.XVSpace, {
          size: "xs"
        })]
      }))]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        type: "solid",
        size: "xl",
        text: "Nuevo inventario",
        onClick: () => routeToInventoryMenu()
      }), jsx(Ramen.XButton, {
        type: "outline",
        size: "xl",
        text: "Inventario guardado",
        onClick: () => routeToSavedInventory()
      })]
    })]
  });
};

let _$1 = t => t,
  _t$1,
  _t2,
  _t3,
  _t4,
  _t5;
const ContainerBarcodeScanner = styled.div(_t$1 || (_t$1 = _$1`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.4fr 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`));
const HeaderScanner = styled.div(_t2 || (_t2 = _$1`
  svg {
    color: white !important;
  }
  z-index: 3;
  div > * {
    color: white !important;
  }
`));
const ScannerBox = styled.div(_t3 || (_t3 = _$1`
  display: grid;
  place-items: center;
`));
const ScannerZone = styled.div(_t4 || (_t4 = _$1`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 290px;
  height: 290px;
  border-radius: 8px;
  background: linear-gradient(to right, white 8px, transparent 8px) 0 0,
    linear-gradient(to right, white 8px, transparent 8px) 0 100%,
    linear-gradient(to left, white 8px, transparent 8px) 100% 0,
    linear-gradient(to left, white 8px, transparent 8px) 100% 100%,
    linear-gradient(to bottom, white 8px, transparent 8px) 0 0,
    linear-gradient(to bottom, white 8px, transparent 8px) 100% 0,
    linear-gradient(to top, white 8px, transparent 8px) 0 100%,
    linear-gradient(to top, white 8px, transparent 8px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  z-index: 2;
`));
const FooterScanner = styled.div(_t5 || (_t5 = _$1`
  button {
    background: white !important;
  }
`));

const Scan = ({
  typeScan
}) => {
  const {
    startScan,
    stopScan,
    initScan
  } = useScan();
  const {
    routeToLoadZone,
    actionScanZone,
    routeToReadProduct,
    actionScanProduct
  } = useInventory();
  const [showBtnBack, setShowBtnBack] = useState(false);
  const goBack = () => __awaiter(void 0, void 0, void 0, function* () {
    yield stopScan();
    if (typeScan === 'zone') {
      routeToLoadZone();
    } else {
      routeToReadProduct();
    }
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield initScan();
      if (typeScan === 'zone') {
        yield startScan(actionScanZone);
      } else {
        yield startScan(actionScanProduct);
      }
    }))();
  }, []);
  setTimeout(() => setShowBtnBack(true), 1200);
  return jsxs(ContainerBarcodeScanner, {
    children: [jsx(HeaderScanner, {
      children: jsx(InventoryHeader, {
        onBack: showBtnBack ? goBack : undefined,
        title: "Coloca el c\u00F3digo en el centro del recuadro para escanear"
      })
    }), jsx(ScannerBox, {
      children: jsx(ScannerZone, {})
    }), jsx(FooterScanner, {
      children: jsx(Ramen.XFooter, Object.assign({
        background: "transparent"
      }, {
        children: jsx(Ramen.XButton, {
          text: "Ingresa el c\u00F3digo",
          size: "xl",
          onClick: goBack
        })
      }))
    })]
  });
};

const InventoryNewMain = () => {
  const {
    page,
    routeToLoadZone
  } = useInventory();
  useEffect(() => {
    routeToLoadZone();
  }, []);
  const renderPAGE_LOAD_ZONE = () => jsx(LoadZone, {});
  const renderPAGE_SCAN_ZONE = () => jsx(Scan, {
    typeScan: "zone"
  });
  const renderPAGE_SCAN_PRODUCT = () => jsx(Scan, {
    typeScan: "product"
  });
  const renderPAGE_READ_PRODUCT = () => jsx(ReadProduct, {});
  const renderPAGE_SUCCESS = () => jsx(Success, {});
  const renders = {
    [InventoryPagesEnum.PAGE_LOAD_ZONE]: renderPAGE_LOAD_ZONE,
    [InventoryPagesEnum.PAGE_SCAN_ZONE]: renderPAGE_SCAN_ZONE,
    [InventoryPagesEnum.PAGE_SCAN_PRODUCT]: renderPAGE_SCAN_PRODUCT,
    [InventoryPagesEnum.PAGE_READ_PRODUCT]: renderPAGE_READ_PRODUCT,
    [InventoryPagesEnum.PAGE_SUCCESS]: renderPAGE_SUCCESS
  };
  return jsx(Ramen.XPage, {
    children: (() => {
      if (!renders[page]) {
        return jsx("div", {
          children: page
        });
      }
      return renders[page]();
    })()
  });
};

class InventoryNewPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    return jsx(InventoryNewMain, {});
  }
}

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails = fails$m;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$1({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol = wellKnownSymbol$j;

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $ = _export;
var uncurryThis = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$7;
var toString = toString$9;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

const useAuth = () => {
  const {
    appClientID
  } = useContext(InventoryContext);
  const hasPermission = scope => {
    return AuthenticationClient.hasRole(`${appClientID}:${scope}`);
  };
  const getUserMail = () => {
    const user = AuthenticationClient.getInfo();
    if (user) {
      return user.email;
    }
    return '';
  };
  const hasWritePermission = mails => {
    const mailsToFind = Array.isArray(mails) ? mails : mails ? [mails] : '';
    return hasPermission('inventory.write') || mailsToFind.includes(getUserMail());
  };
  return {
    getUserMail,
    hasPermission,
    hasWritePermission
  };
};

const CardExtendedComponent = ({
  zonification,
  inventoriesSelected,
  setInventoriesSelected
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const {
    setDataProduct,
    actionListProductsByZonification,
    routeToInventorySavedEdit,
    setProductIdSelected,
    setDataInventory
  } = useInventory();
  const {
    hasWritePermission
  } = useAuth();
  const emailsUser = [zonification.createdUserEmail, zonification.updatedUserEmail];
  const selected = e => {
    const inventoryIds = inventoriesSelected.map(value => {
      return value.productInventoryId === zonification.productInventoryId ? Object.assign(Object.assign({}, value), {
        selected: e
      }) : Object.assign({}, value);
    });
    setInventoriesSelected(inventoryIds);
  };
  const onClickProduct = () => {
    setProductIdSelected(zonification.productInventoryId);
    routeToInventorySavedEdit();
  };
  const onToggle = open => __awaiter(void 0, void 0, void 0, function* () {
    if (open) {
      const response = yield actionListProductsByZonification(zonification.productInventoryId);
      return response;
    }
    return [];
  });
  return jsx(Ramen.XCollapseCard, Object.assign({
    count: zonification.skusCountZonification,
    description: `Mueble ${zonification.furnitureCode}`,
    onSelect: hasWritePermission(emailsUser) ? selected : undefined,
    title: zonification.zonificationCode,
    onToggle: e => __awaiter(void 0, void 0, void 0, function* () {
      if (!isOpened) {
        const data = yield onToggle(e);
        setProducts(data);
        setIsOpened(true);
      }
    })
  }, {
    children: products.length ? jsx(Ramen.XBox, Object.assign({
      gap: "xl",
      orientation: "vertical",
      padding: "none"
    }, {
      children: products.map((product, index) => {
        return jsxs(Ramen.XBox, Object.assign({
          gap: "s",
          orientation: "vertical",
          padding: "none"
        }, {
          children: [jsx(InfoProduct, {
            product: product
          }), jsx(Ramen.XBox, Object.assign({
            gap: "xs"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              gap: "xs"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: "flex"
              }, {
                children: jsx(Ramen.XCard, Object.assign({
                  size: "s",
                  borderType: "solid"
                }, {
                  children: jsxs(Ramen.XBox, {
                    children: [jsx(Ramen.XText, Object.assign({
                      weight: 'normal',
                      fontSize: 12
                    }, {
                      children: "Continuo"
                    })), jsx(Ramen.XText, Object.assign({
                      textAlign: "left",
                      weight: "bold",
                      fontSize: 12
                    }, {
                      children: amountWithBaseUnit(product.scanTotalContinue, product.uom)
                    }))]
                  })
                }))
              })), jsx(Ramen.XBox, Object.assign({
                width: "flex"
              }, {
                children: jsx(Ramen.XCard, Object.assign({
                  size: "s",
                  borderType: "solid"
                }, {
                  children: jsxs(Ramen.XBox, {
                    children: [jsx(Ramen.XText, Object.assign({
                      weight: 'normal',
                      fontSize: 12
                    }, {
                      children: "Cantidad"
                    })), jsx(Ramen.XText, Object.assign({
                      textAlign: "left",
                      weight: "bold",
                      fontSize: 12
                    }, {
                      children: amountWithBaseUnit(product.scanTotalQuantity, product.uom)
                    }))]
                  })
                }))
              }))]
            }))
          })), jsx(Ramen.XCard, Object.assign({
            borderType: "solid",
            size: "s",
            onClick: () => {}
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "center",
              verticalAlign: "center",
              gap: "xxs",
              padding: "none"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: 'normal',
                fontSize: 12
              }, {
                children: "Conteo total"
              })), jsx(Ramen.XText, Object.assign({
                textAlign: "center",
                weight: "bold",
                fontSize: 12
              }, {
                children: amountWithBaseUnit(product.scanTotal, product.uom)
              }))]
            }))
          })), jsx(Ramen.XButton, {
            text: "Ver",
            size: "xs",
            type: "tonal",
            onClick: () => {
              setDataProduct(product);
              onClickProduct();
              setDataInventory({
                createdUserEmail: zonification.createdUserEmail,
                updatedUserEmail: zonification.updatedUserEmail
              });
            }
          }), jsx(Ramen.XVSpace, {
            size: "xs"
          })]
        }), `id${index}`);
      })
    })) : null
  }));
};

const InventoryLoadModalComponent = ({
  show,
  closeModal,
  loadInventory
}) => {
  const onActionClick = key => {
    switch (key) {
      case 'cancel':
        closeModal();
        break;
      case 'load':
        loadInventory();
        break;
    }
  };
  return jsx(Ramen.XModal, {
    icon: "alert-bold-filled",
    title: "Est\u00E1s a punto de cargar todos los muebles guardados",
    subtitle: "Aseg\u00FArate de haber revisado todos los datos correctamente. Una vez grabado no podr\u00E1s modificarlo",
    actions: [{
      key: 'load',
      text: 'Cargar',
      type: 'solid'
    }, {
      key: 'cancel',
      text: 'Volver al listado',
      type: 'outline'
    }],
    onClose: closeModal,
    onActionClick: onActionClick,
    visible: show,
    size: "s"
  });
};

const LoadZoneSavePageComponent = () => {
  var _a;
  const [showModal, setShowModal] = useState(false);
  const [inventorySaved, setInventorySaved] = useState({});
  const [inventoriesSelected, setInventoriesSelected] = useState([]);
  const {
    routeToInventoryMenu,
    routeToInventorySavedFilters,
    routeToInventorySavedLoadSuccess,
    actionListZonificationSaved,
    userStore,
    zoneSelected,
    furnituresSelected,
    userSelected,
    setInventoriesSelectedSaved,
    messages
  } = useInventory();
  useEffect(() => {
    if (userStore === null || userStore === void 0 ? void 0 : userStore.name) {
      (() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const response = yield actionListZonificationSaved({
          zones: zoneSelected,
          furnitures: furnituresSelected,
          users: userSelected
        });
        const zonficiationSelected = [];
        (_a = response.storageList) === null || _a === void 0 ? void 0 : _a.forEach(value => {
          value.zonifications.forEach(value2 => {
            zonficiationSelected.push(Object.assign(Object.assign({}, value2), {
              selected: false
            }));
          });
        });
        setInventoriesSelected(zonficiationSelected);
        setInventorySaved(response);
      }))();
    }
  }, [userStore]);
  return jsxs(Ramen.XPage, {
    children: [jsxs(Fragment$1, {
      children: [jsx(InventoryHeader, {
        onBack: () => routeToInventoryMenu(),
        title: TitlePagesEnum.INVENTORY_SAVED
      }), inventorySaved.storageList && jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "center",
        horizontalAlign: "between",
        height: "auto",
        width: "full",
        orientation: "vertical",
        padding: "xl",
        gap: "l"
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "between",
          verticalAlign: "center"
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "between",
            verticalAlign: "center"
          }, {
            children: [jsxs(Ramen.XText, Object.assign({
              fontSize: 10,
              weight: "bold"
            }, {
              children: [inventorySaved.furnitureCount, " muebles"]
            })), jsx(Ramen.XText, Object.assign({
              fontSize: 10,
              weight: "normal",
              colorThone: "dim"
            }, {
              children: "\u00A0contados"
            }))]
          })), jsx(Ramen.XButton, {
            icon: "filter-1-outline",
            onClick: () => routeToInventorySavedFilters(),
            text: "Filtros",
            type: "outline"
          })]
        })), jsx(Ramen.XTabs, {
          actions: [],
          defaultKey: (_a = inventorySaved === null || inventorySaved === void 0 ? void 0 : inventorySaved.storageList[0]) === null || _a === void 0 ? void 0 : _a.storageCode.toString(),
          onActionClick: () => {},
          size: "s",
          tabs: inventorySaved.storageList.map(value => {
            return {
              key: `${value.storageCode}`,
              label: `Almacén ${value.storageCode}`
            };
          })
        }), jsx(Ramen.XTabContent, {
          children: jsx(Ramen.XList, {
            dataSource: inventorySaved.storageList,
            renderItem: storage => {
              return jsx(Ramen.XTabPanel, Object.assign({
                tabKey: `${storage.storageCode}`
              }, {
                children: jsxs(Ramen.XBox, Object.assign({
                  gap: "l"
                }, {
                  children: [jsx(Ramen.XCard, Object.assign({
                    borderType: "solid",
                    size: "l",
                    onClick: () => {}
                  }, {
                    children: jsxs(Ramen.XBox, Object.assign({
                      width: 'full',
                      orientation: "horizontal",
                      horizontalAlign: "between",
                      verticalAlign: "center",
                      padding: "xxs"
                    }, {
                      children: [jsx(Ramen.XText, Object.assign({
                        weight: "bold"
                      }, {
                        children: "SKU contadas"
                      })), jsx(Ramen.XBadge, {
                        size: "s",
                        value: storage.skusCountStorage
                      })]
                    }))
                  })), jsx(Ramen.XList, {
                    dataSource: storage.zonifications,
                    renderItem: (zonification, index) => {
                      return jsx(CardExtendedComponent, {
                        zonification: zonification,
                        inventoriesSelected: inventoriesSelected,
                        setInventoriesSelected: setInventoriesSelected
                      }, `id${index}`);
                    }
                  }), jsx(Ramen.XVSpace, {
                    size: "xl"
                  }), jsx(Ramen.XVSpace, {
                    size: "xl"
                  })]
                }))
              }));
            }
          })
        })]
      })), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          type: "solid",
          size: "xl",
          text: messages.sendInventory,
          disabled: inventoriesSelected.every(value => !value.selected),
          onClick: () => {
            const zonificationSelectedFilter = inventoriesSelected.filter(value => value.selected).map(value => value.productInventoryId);
            setInventoriesSelectedSaved(zonificationSelectedFilter);
            setShowModal(true);
          }
        })
      })]
    }), jsx(InventoryLoadModalComponent, {
      show: showModal,
      closeModal: () => setShowModal(false),
      loadInventory: routeToInventorySavedLoadSuccess
    })]
  });
};

const InventoryLoadSuccess = () => {
  const {
    actionSendListInventory,
    inventoriesSelectedSaved,
    routeToInventorySavedList,
    uomShowType
  } = useInventory();
  const [productSaved, setProductSaved] = useState([]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const response = yield actionSendListInventory(inventoriesSelectedSaved);
      setProductSaved(response);
    }))();
  }, [inventoriesSelectedSaved]);
  return jsx(Ramen.XPage, {
    children: productSaved.length > 0 && jsxs(Ramen.XBox, Object.assign({
      verticalAlign: "start",
      height: "auto",
      width: "full",
      gap: "s",
      padding: "xl",
      horizontalAlign: "center"
    }, {
      children: [jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XBox, Object.assign({
        orientation: "vertical",
        horizontalAlign: "center",
        height: "auto",
        width: "auto"
      }, {
        children: jsx(Ramen.XImage, {
          width: 'flex',
          height: 'full',
          src: img
        })
      })), jsx(Ramen.XText, Object.assign({
        textAlign: "center",
        weight: "bold",
        fontSize: 8
      }, {
        children: "Inventario cargado"
      })), jsx(Ramen.XVSpace, {
        size: "l"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        width: 'full'
      }, {
        children: [jsx(Ramen.XList, {
          dataSource: productSaved,
          renderItem: (product, index) => {
            var _a, _b, _c;
            let totalCount = '';
            if (uomShowType === UomShowTypeEnum.INDIVIDUAL) {
              let total = [];
              total = product.data.totalCount.map(value => {
                return `${value.quantity} ${value.uom}`;
              });
              totalCount = total.join(' / ');
            } else {
              let total = 0;
              product.data.totalCount.map(value => {
                total = value.quantity + total;
                return '';
              });
              totalCount = `${total}`;
            }
            return jsx(Ramen.XCard, {
              children: jsxs(Ramen.XBox, Object.assign({
                width: "flex",
                orientation: "vertical",
                gap: "m"
              }, {
                children: [jsxs(Ramen.XBox, Object.assign({
                  width: "flex",
                  orientation: "horizontal"
                }, {
                  children: [jsx(Ramen.XBox, Object.assign({
                    width: 2
                  }, {
                    children: jsx(Ramen.XTag, {
                      size: "l",
                      text: `${index + 1}`
                    })
                  })), jsxs(Ramen.XBox, Object.assign({
                    width: "full",
                    gap: "m",
                    orientation: "vertical"
                  }, {
                    children: [jsx(Ramen.XText, Object.assign({
                      weight: "bold",
                      fontSize: 10
                    }, {
                      children: `Mueble ${(_a = product.data.metadata.furniture) === null || _a === void 0 ? void 0 : _a.code} - ${(_b = product.data.metadata.zone) === null || _b === void 0 ? void 0 : _b.name} - ${(_c = product.data.metadata.storage) === null || _c === void 0 ? void 0 : _c.code}`
                    })), jsxs(Ramen.XBox, Object.assign({
                      orientation: "vertical",
                      gap: "m"
                    }, {
                      children: [jsxs(Ramen.XBox, Object.assign({
                        orientation: "horizontal",
                        gap: "xs"
                      }, {
                        children: [jsxs(Ramen.XBox, Object.assign({
                          orientation: "vertical",
                          width: "half",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 12
                          }, {
                            children: "Conteo de inventario"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "normal",
                            colorThone: "medium",
                            fontSize: 12
                          }, {
                            children: product.sent ? product.data.inventoryCountNumber : '-'
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "vertical",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 12
                          }, {
                            children: "SKUs"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "normal",
                            colorThone: "medium",
                            fontSize: 12
                          }, {
                            children: product.data.skusCount
                          }))]
                        }))]
                      })), jsxs(Ramen.XBox, Object.assign({
                        orientation: "horizontal",
                        gap: "xs",
                        verticalAlign: "center"
                      }, {
                        children: [jsxs(Ramen.XBox, Object.assign({
                          orientation: "vertical",
                          width: "half",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 12
                          }, {
                            children: "Conteo Total"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "normal",
                            colorThone: "medium",
                            fontSize: 12
                          }, {
                            children: totalCount
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "vertical",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 12
                          }, {
                            children: "Fecha y hora"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "normal",
                            colorThone: "medium",
                            fontSize: 12
                          }, {
                            children: `${formatDate(product.data.datetime)}`
                          }))]
                        }))]
                      }))]
                    }))]
                  }))]
                })), !product.sent ? jsx(Ramen.XBox, {
                  children: jsx(Ramen.XAlert, Object.assign({
                    title: "",
                    type: "error"
                  }, {
                    children: product.message
                  }))
                }) : null]
              }))
            });
          }
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        })]
      })), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          type: "solid",
          text: "Finalizar",
          size: "xl",
          onClick: routeToInventorySavedList
        })
      })]
    }))
  });
};

const FilterZoneComponent = () => {
  var _a, _b, _c;
  const {
    routeToInventorySavedList,
    actionListFiltersZonification,
    zoneSelected,
    setZoneSelected,
    userSelected,
    setUserSelected,
    furnituresSelected,
    setFurnituresSelected
  } = useInventory();
  const [filters, setFilters] = useState([]);
  const [zoneTempSelected, setZoneTempSelected] = useState([]);
  const [furnitureTempSelected, setFurnitureTempSelected] = useState([]);
  const [userTempSelected, setUserTempSelected] = useState([]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const response = yield actionListFiltersZonification();
      setFilters(response);
    }))();
  }, []);
  const sendFilters = () => {
    setZoneSelected(zoneTempSelected);
    setFurnituresSelected(furnitureTempSelected);
    setUserSelected(userTempSelected);
    routeToInventorySavedList();
  };
  useEffect(() => {
    setZoneTempSelected(zoneSelected);
    setFurnitureTempSelected(furnituresSelected);
    setUserTempSelected(userSelected);
  }, []);
  return jsx(Ramen.XPage, {
    children: jsxs(Fragment$1, {
      children: [jsx(InventoryHeader, {
        onBack: routeToInventorySavedList,
        title: TitlePagesEnum.FILTERS
      }), filters && jsx(Ramen.XBox, Object.assign({
        verticalAlign: "center",
        horizontalAlign: "between",
        height: "auto",
        width: "full",
        padding: "xl"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          gap: "xxs"
        }, {
          children: [jsx(Ramen.XSelectMultiple, {
            okText: "Guardar",
            onChange: e => {
              const values = e.map(value => {
                return value.value;
              });
              setZoneTempSelected(values);
            },
            options: (_a = filters.zones) === null || _a === void 0 ? void 0 : _a.map(value => ({
              label: value,
              value: value
            })),
            subtitle: "",
            title: 'Zona',
            size: "l",
            values: zoneTempSelected
          }), jsx(Ramen.XSelectMultiple, {
            okText: "Guardar",
            onChange: e => {
              const values = e.map(value => {
                return value.value;
              });
              setFurnitureTempSelected(values);
            },
            options: (_b = filters.furnitures) === null || _b === void 0 ? void 0 : _b.map(value => ({
              label: value,
              value: value
            })),
            subtitle: "",
            title: 'Mueble',
            size: "l",
            values: furnitureTempSelected
          }), jsx(Ramen.XSelectMultiple, {
            okText: "Guardar",
            onChange: e => {
              const values = e.map(value => {
                return value.value;
              });
              setUserTempSelected(values);
            },
            options: (_c = filters.users) === null || _c === void 0 ? void 0 : _c.map(value => ({
              label: value.name,
              value: value.email
            })),
            subtitle: "",
            title: 'Creado por',
            size: "l",
            values: userTempSelected
          })]
        }))
      })), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          type: "solid",
          size: "xl",
          text: "Aplicar filtro",
          onClick: sendFilters
        })
      })]
    })
  });
};

const InformationCard = ({
  product,
  inventoryType
}) => {
  return jsx(Ramen.XCard, Object.assign({
    onClick: () => {}
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      width: 'full',
      gap: "l"
    }, {
      children: [jsx(Ramen.XBox, {
        children: "1"
      }), jsxs(Ramen.XBox, Object.assign({
        width: 'full',
        gap: "l"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 10,
          weight: "bold"
        }, {
          children: product === null || product === void 0 ? void 0 : product.description
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "between"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            orientation: "vertical",
            width: 'flex',
            gap: "m"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              gap: "xxs"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: "bold",
                fontSize: 12
              }, {
                children: "Cantidad"
              })), jsx(Ramen.XText, Object.assign({
                weight: "lighter",
                fontSize: 12
              }, {
                children: inventoryType === InventoryTypeEnum.QUANTITY ? product === null || product === void 0 ? void 0 : product.scanTotalQuantity : product === null || product === void 0 ? void 0 : product.scanTotalContinue
              }))]
            }))
          })), jsx(Ramen.XBox, Object.assign({
            orientation: "vertical",
            width: 'auto',
            gap: "m"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              gap: "xxs"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: "bold",
                fontSize: 12
              }, {
                children: "Unidad de medida"
              })), jsx(Ramen.XText, Object.assign({
                weight: "lighter",
                fontSize: 12
              }, {
                children: product === null || product === void 0 ? void 0 : product.uom
              }))]
            }))
          }))]
        }))]
      }))]
    }))
  }));
};

const FormContinuos = ({
  amount,
  handleChangeAmount,
  errorAmount
}) => {
  return jsx(Ramen.XFormItem, Object.assign({
    label: "Nueva cantidad",
    error: errorAmount
  }, {
    children: jsx(Ramen.XTextInput, {
      icon: "edit-3-outline",
      onChange: e => handleChangeAmount(e.target.value),
      value: amount,
      placeholder: "0",
      size: "l"
    })
  }));
};

const FormQuantity = ({
  amount,
  handleChangeAmount,
  errorAmount,
  product
}) => {
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      width: 'full'
    }, {
      children: [jsx(InfoProduct, {
        product: product
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsxs(Ramen.XBox, {
        children: [jsx(Ramen.XFormItem, Object.assign({
          label: "Cantidad",
          error: errorAmount
        }, {
          children: jsx(Ramen.XTextInput, {
            icon: "basket-outline",
            placeholder: "00.0",
            size: "l",
            onChange: e => handleChangeAmount(e.target.value),
            value: amount
          })
        })), jsx(Ramen.XVSpace, {
          size: "xl"
        })]
      })]
    }))
  });
};

const ModalEdit = ({
  showModal,
  setShowModal
}) => {
  const [amount, setAmount] = useState('');
  const [errorAmount, setErrorAmount] = useState('');
  const {
    product,
    inventoryType,
    actionEditProductCount
  } = useInventory();
  const handleChangeAmount = value => {
    if (isNumberWithDecimal(value) || value === '') {
      setAmount(value);
    }
    if (Number(value) > 0) {
      setErrorAmount('');
    } else {
      setErrorAmount('La cantidad debe ser mayor a 0');
    }
  };
  const onActionClick = key => __awaiter(void 0, void 0, void 0, function* () {
    switch (key) {
      case 'confirm':
        onCloseModal();
        yield actionEditProductCount(amount);
        break;
    }
  });
  const onCloseModal = () => {
    setShowModal(false);
    setAmount('');
    setErrorAmount('');
  };
  useEffect(() => {
    var _a, _b;
    if (inventoryType === InventoryTypeEnum.CONTINUOS) {
      setAmount((product === null || product === void 0 ? void 0 : product.scanTotalContinue) ? (_a = product === null || product === void 0 ? void 0 : product.scanTotalContinue) === null || _a === void 0 ? void 0 : _a.toString() : '');
    } else {
      setAmount((product === null || product === void 0 ? void 0 : product.scanTotalQuantity) ? (_b = product === null || product === void 0 ? void 0 : product.scanTotalQuantity) === null || _b === void 0 ? void 0 : _b.toString() : '');
    }
  }, [inventoryType, showModal]);
  return jsxs(Ramen.XModal, Object.assign({
    visible: showModal,
    title: `Editar conteo ${inventoryType === InventoryTypeEnum.QUANTITY ? 'cantidad' : 'contínuo'}`,
    size: "l",
    actions: [{
      key: 'confirm',
      text: 'Confirmar',
      type: 'solid',
      disabled: Number(amount) <= 0
    }],
    onClose: onCloseModal,
    onActionClick: onActionClick
  }, {
    children: [jsx(InformationCard, {
      product: product,
      inventoryType: inventoryType
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), inventoryType === InventoryTypeEnum.CONTINUOS ? jsx(FormContinuos, {
      amount: amount,
      handleChangeAmount: handleChangeAmount,
      errorAmount: errorAmount
    }) : jsx(FormQuantity, {
      amount: amount,
      handleChangeAmount: handleChangeAmount,
      product: product,
      errorAmount: errorAmount
    })]
  }));
};

const ContentEdit = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    product,
    inventoryType,
    actionEditProductCount,
    inventory
  } = useInventory();
  const {
    hasWritePermission
  } = useAuth();
  const emailsUser = [inventory === null || inventory === void 0 ? void 0 : inventory.createdUserEmail, inventory === null || inventory === void 0 ? void 0 : inventory.updatedUserEmail];
  const deleteCount = () => __awaiter(void 0, void 0, void 0, function* () {
    yield actionEditProductCount('0');
  });
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    width: 'full'
  }, {
    children: [jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between",
        width: 'flex',
        gap: "s",
        padding: "m"
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          gap: "xxs",
          horizontalAlign: "start"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            weight: "lighter"
          }, {
            children: "Total"
          })), jsx(Ramen.XText, Object.assign({
            weight: "bold"
          }, {
            children: inventoryType === InventoryTypeEnum.QUANTITY ? product === null || product === void 0 ? void 0 : product.scanTotalQuantity : product === null || product === void 0 ? void 0 : product.scanTotalContinue
          }))]
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          gap: "xxs",
          horizontalAlign: "start"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            weight: "lighter"
          }, {
            children: "Unidad de medida"
          })), jsx(Ramen.XText, Object.assign({
            weight: "bold"
          }, {
            children: product === null || product === void 0 ? void 0 : product.uom
          }))]
        }))]
      }))
    })), hasWritePermission(emailsUser) ? jsxs(Ramen.XBox, Object.assign({
      width: "full",
      orientation: "horizontal",
      gap: "xs"
    }, {
      children: [jsx(Ramen.XBox, Object.assign({
        width: 'half'
      }, {
        children: jsx(Ramen.XButton, {
          text: "Borrar",
          size: "xs",
          type: "tonal",
          icon: "trash-2-outline",
          onClick: () => deleteCount()
        })
      })), jsx(Ramen.XBox, Object.assign({
        width: 'half'
      }, {
        children: jsx(Ramen.XButton, {
          text: "Editar",
          size: "xs",
          type: "tonal",
          icon: "edit-2-outline",
          onClick: () => setShowModal(true)
        })
      }))]
    })) : null, jsx(ModalEdit, {
      showModal: showModal,
      setShowModal: setShowModal
    })]
  }));
};

const EditZoneComponent = () => {
  const {
    product,
    routeToInventorySavedList,
    inventoryType,
    setInventoryType
  } = useInventory();
  const onBack = () => {
    setInventoryType(InventoryTypeEnum.CONTINUOS);
    routeToInventorySavedList();
  };
  return jsxs(Ramen.XPage, {
    children: [jsx(InventoryHeader, {
      onBack: onBack,
      title: ''
    }), jsxs(Ramen.XBody, {
      children: [jsx(InfoProduct, {
        product: product
      }), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "center"
      }, {
        children: jsx(Ramen.XTabs, {
          actions: [],
          defaultKey: inventoryType,
          onTabChange: e => {
            if (e === InventoryTypeEnum.CONTINUOS) {
              setInventoryType(InventoryTypeEnum.CONTINUOS);
            } else {
              setInventoryType(InventoryTypeEnum.QUANTITY);
            }
          },
          size: "s",
          tabs: [{
            disabled: false,
            key: InventoryTypeEnum.CONTINUOS,
            label: `Continuo`,
            icon: 'chevron-right-filled'
          }, {
            disabled: false,
            key: InventoryTypeEnum.QUANTITY,
            label: `Cantidad`,
            icon: 'calculator-filled'
          }]
        })
      })), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XCard, Object.assign({
        borderType: "solid"
      }, {
        children: jsx(Ramen.XBox, Object.assign({
          verticalAlign: "start",
          height: "auto",
          width: "full",
          gap: "m"
        }, {
          children: jsxs(Ramen.XTabContent, {
            children: [jsx(Ramen.XTabPanel, Object.assign({
              tabKey: InventoryTypeEnum.CONTINUOS
            }, {
              children: jsx(ContentEdit, {})
            })), jsx(Ramen.XTabPanel, Object.assign({
              tabKey: InventoryTypeEnum.QUANTITY
            }, {
              children: jsx(ContentEdit, {})
            }))]
          })
        }))
      }))]
    })]
  });
};

const InventorySavedMain = () => {
  const {
    page,
    routeToInventorySavedList
  } = useInventory();
  const renderPAGE_INVENTORY_SAVED_LIST = () => jsx(LoadZoneSavePageComponent, {});
  const renderPAGE_INVENTORY_SAVED_FILTERS = () => jsx(FilterZoneComponent, {});
  const renderPAGE_INVENTORY_SAVED_LOAD_SUCCESS = () => jsx(InventoryLoadSuccess, {});
  const renderPAGE_INVENTORY_SAVED_EDIT = () => jsx(EditZoneComponent, {});
  const renders = {
    [InventoryPagesEnum.PAGE_INVENTORY_SAVED_LIST]: renderPAGE_INVENTORY_SAVED_LIST,
    [InventoryPagesEnum.PAGE_INVENTORY_SAVED_LOAD_SUCCESS]: renderPAGE_INVENTORY_SAVED_LOAD_SUCCESS,
    [InventoryPagesEnum.PAGE_INVENTORY_SAVED_FILTERS]: renderPAGE_INVENTORY_SAVED_FILTERS,
    [InventoryPagesEnum.PAGE_INVENTORY_SAVED_EDIT]: renderPAGE_INVENTORY_SAVED_EDIT
  };
  useEffect(() => {
    routeToInventorySavedList();
  }, []);
  return jsx(Ramen.XPage, {
    children: (() => {
      if (!renders[page]) {
        return jsx("div", {
          children: page
        });
      }
      return renders[page]();
    })()
  });
};

class InventorySavedPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    return jsx(InventorySavedMain, {});
  }
}

const SummaryCard = props => {
  return jsx(Ramen.XCard, {
    onClick: () => {
      var _a;
      return (_a = props.history) === null || _a === void 0 ? void 0 : _a.push(InventoryRoutesEnum.SUMMARY);
    },
    size: "l",
    symbol: "fit-stock-neutral",
    title: "Toma de inventario",
    borderType: "shadow"
  });
};

let _ = t => t,
  _t;
const SummaryContainerCard = styled.div(_t || (_t = _`
  width: 100%;
  border-radius: 20px;
  background: #fff;
  padding: 4%;
  box-shadow: 4px 4px 8px 4px rgba(24, 39, 75, 0.08);
`));

const InventorySummaryCard = props => {
  return jsx(SummaryContainerCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      gap: "xs"
    }, {
      children: [jsx(Ramen.XTagState, {
        state: "success",
        text: "En progreso"
      }), jsxs(Ramen.XText, Object.assign({
        weight: "bold"
      }, {
        children: ["Almac\u00E9n ", props.productInventory.storageCode, " - Mueble", ' ', props.productInventory.furnitureCode]
      })), jsxs(Ramen.XText, Object.assign({
        colorThone: "dim",
        fontSize: 11
      }, {
        children: ["Iniciado ", formatDate(props.productInventory.createdAt)]
      }))]
    }))
  });
};

const SummaryLoadComponent = () => {
  const {
    userStore,
    userSelected,
    actionListZonificationInProgress,
    routeToRoot
  } = useInventory();
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    if (userStore === null || userStore === void 0 ? void 0 : userStore.name) {
      (() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield actionListZonificationInProgress({
          zones: [],
          furnitures: [],
          users: userSelected
        });
        if (response) {
          let data = [];
          response === null || response === void 0 ? void 0 : response.storageList.forEach(storage => {
            data = [...data, ...(storage === null || storage === void 0 ? void 0 : storage.zonifications)];
          });
          setInventories(data);
        }
      }))();
    }
  }, [userStore]);
  return jsx(Ramen.XPage, {
    children: jsxs(Fragment$1, {
      children: [jsx(InventoryHeader, {
        onBack: () => routeToRoot(),
        title: TitlePagesEnum.INVENTORY_SUMMARY
      }), jsx(Ramen.XBox, Object.assign({
        orientation: "vertical",
        gap: "m",
        padding: "m"
      }, {
        children: inventories.map((inventory, index) => {
          return jsx(InventorySummaryCard, {
            productInventory: inventory
          }, index);
        })
      }))]
    })
  });
};

const InventorySummaryMain = () => {
  const {
    page,
    routeToInventorySummary
  } = useInventory();
  const renderPAGE_INVENTORY_SUMMARY_LOAD = () => jsx(SummaryLoadComponent, {});
  const renders = {
    [InventoryPagesEnum.PAGE_INVENTORY_SUMMARY_LOAD]: renderPAGE_INVENTORY_SUMMARY_LOAD
  };
  useEffect(() => {
    routeToInventorySummary();
  }, []);
  return jsx(Ramen.XPage, {
    children: (() => {
      if (!renders[page]) {
        return jsx("div", {
          children: page
        });
      }
      return renders[page]();
    })()
  });
};

class InventorySummaryPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    return jsx(InventorySummaryMain, {});
  }
}

class InventoryModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/',
        page: MenuPage
      }, {
        path: '/new',
        page: InventoryNewPage
      }, {
        path: '/saved',
        page: InventorySavedPage
      }, {
        path: '/summary',
        page: InventorySummaryPage
      }],
      override
    });
  }
  render() {
    var _a, _b, _c;
    return jsx(Ramen.XApp, {
      children: jsx(Ramen.XConfigProvider, Object.assign({
        theme: "arcus"
      }, {
        children: jsx(InventoryProvider, Object.assign({
          historyData: this.props.history,
          env: (_b = (_a = this.descriptor.override.extensions) === null || _a === void 0 ? void 0 : _a.menu_page.env) !== null && _b !== void 0 ? _b : null,
          getStoreData: (_c = this.descriptor.override.extensions) === null || _c === void 0 ? void 0 : _c.menu_page.triggers.getStoreData
        }, {
          children: super.render()
        }))
      }))
    });
  }
}
InventoryModule.route = '/tools/inventory';
InventoryModule.summaryCard = SummaryCard;

export { InventoryModule as default };
