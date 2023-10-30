import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as SDK from '@team_yumi/sdk';
import { useLocation, useHistory, useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import * as React from 'react';
import React__default, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import Ramen from '@team_yumi/ramen';
import { DateTime } from 'luxon';
import { initReactI18next, I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import axios from 'axios';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$h =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$i = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$h = fails$i;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$g = fails$i;

var functionBindNative = !fails$g(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$d = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$d.bind(call$d) : function () {
  return call$d.apply(call$d, arguments);
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
var call$c = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$c, call$c);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$c.apply(fn, arguments);
  };
};

var uncurryThis$k = functionUncurryThis;

var toString$8 = uncurryThis$k({}.toString);
var stringSlice$7 = uncurryThis$k(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$7(toString$8(it), 8, -1);
};

var uncurryThis$j = functionUncurryThis;
var fails$f = fails$i;
var classof$6 = classofRaw$2;

var $Object$4 = Object;
var split$1 = uncurryThis$j(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$f(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$b = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$4(it)) throw $TypeError$b("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$5(it));
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
var isCallable$j = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$i = isCallable$j;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$i(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$i(it);
};

var global$g = global$h;
var isCallable$h = isCallable$j;

var aFunction = function (argument) {
  return isCallable$h(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$g[namespace]) : global$g[namespace] && global$g[namespace][method];
};

var uncurryThis$i = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$f = global$h;
var userAgent = engineUserAgent;

var process = global$f.process;
var Deno = global$f.Deno;
var versions = process && process.versions || Deno && Deno.version;
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
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$e = fails$i;
var global$e = global$h;

var $String$5 = global$e.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$e(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$2 = getBuiltIn$3;
var isCallable$g = isCallable$j;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$g($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$2 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$f = isCallable$j;
var tryToString$1 = tryToString$2;

var $TypeError$a = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$4 = function (argument) {
  if (isCallable$f(argument)) return argument;
  throw $TypeError$a(tryToString$1(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$4 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$3(func);
};

var call$b = functionCall;
var isCallable$e = isCallable$j;
var isObject$7 = isObject$8;

var $TypeError$9 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$7(val = call$b(fn, input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$7(val = call$b(fn, input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$7(val = call$b(fn, input))) return val;
  throw $TypeError$9("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = false;

var global$d = global$h;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$d, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$d[key] = value;
  } return value;
};

var global$c = global$h;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$c[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};

var uncurryThis$h = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$g = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$g(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
};

var global$b = global$h;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$b.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$f = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$a(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$a = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$e = wellKnownSymbol$f;

var $TypeError$8 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$e('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$a(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw $TypeError$8("Can't convert object to primitive value");
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

var global$a = global$h;
var isObject$5 = isObject$8;

var document$1 = global$a.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$d = fails$i;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$9 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$4(!call$9(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$c = fails$i;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$4 = isObject$8;

var $String$3 = String;
var $TypeError$7 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$b = function (argument) {
  if (isObject$4(argument)) return argument;
  throw $TypeError$7($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$a = anObject$b;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$6 = TypeError;
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
  anObject$a(O);
  P = toPropertyKey$1(P);
  anObject$a(Attributes);
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
  anObject$a(O);
  P = toPropertyKey$1(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$7 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$f = functionUncurryThis;
var isCallable$d = isCallable$j;
var store$1 = sharedStore;

var functionToString = uncurryThis$f(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$9 = global$h;
var isCallable$c = isCallable$j;

var WeakMap$1 = global$9.WeakMap;

var weakMapBasicDetection = isCallable$c(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$8 = global$h;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
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
  set = function (it, metadata) {
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
  set = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$e = functionUncurryThis;
var fails$b = fails$i;
var isCallable$b = isCallable$j;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$2 = internalState;

var enforceInternalState = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$6 = uncurryThis$e(''.slice);
var replace$4 = uncurryThis$e(''.replace);
var join$1 = uncurryThis$e([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$b(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$6($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$b(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$a = isCallable$j;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$6 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$a(value)) makeBuiltIn$1(value, name, options);
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
var floor$2 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$2 : ceil)(n);
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

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
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
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$d = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$2 = uncurryThis$d([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
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

var getBuiltIn$1 = getBuiltIn$3;
var uncurryThis$c = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$9 = anObject$b;

var concat$2 = uncurryThis$c([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$a = fails$i;
var isCallable$9 = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$9(detection) ? fails$a(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$7 = global$h;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$5 = defineBuiltIn$6;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced = isForced_1;

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
    target = global$7;
  } else if (STATIC) {
    target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$7[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$5(target, key, sourceProperty, options);
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
var uncurryThis$b = functionUncurryThis;
var call$8 = functionCall;
var fails$9 = fails$i;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat$1 = uncurryThis$b([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$9(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$5 && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
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
      if (!DESCRIPTORS$5 || call$8(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$6 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$6({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var objectDefineProperties = {};

var DESCRIPTORS$4 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$8 = anObject$b;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$3;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$7 = anObject$b;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
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
  html.appendChild(iframe);
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
    EmptyConstructor[PROTOTYPE] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$d = wellKnownSymbol$f;
var create$3 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$d('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$8 = fails$i;

var correctPrototypeGetter = !fails$8(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$8 = isCallable$j;
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
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$8(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$7 = fails$i;
var isCallable$7 = isCallable$j;
var isObject$2 = isObject$8;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$c = wellKnownSymbol$f;

var ITERATOR$5 = wellKnownSymbol$c('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$7(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$7(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$b = wellKnownSymbol$f;

var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$3)) {
    defineProperty$2(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$2 = setToStringTag$3;
var Iterators$3 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$a = functionUncurryThis;
var aCallable$2 = aCallable$4;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$a(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$6 = isCallable$j;

var $String$1 = String;
var $TypeError$5 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$6(argument)) return argument;
  throw $TypeError$5("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$6 = anObject$b;
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
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$5 = _export;
var call$7 = functionCall;
var FunctionName = functionName;
var isCallable$5 = isCallable$j;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$a = wellKnownSymbol$f;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$a('iterator');
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
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$5(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$7(nativeIterator, this); };
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
        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$5({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$1 = iterators;
var InternalStateModule$1 = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

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
  var state = getInternalState$1(this);
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
var values = Iterators$1.Arguments = Iterators$1.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
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

var global$6 = global$h;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$9 = wellKnownSymbol$f;

var ITERATOR$3 = wellKnownSymbol$9('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$3, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues;
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
  handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ERROR_TYPES;
(function (ERROR_TYPES) {
  ERROR_TYPES["ERR_INTERNET"] = "ERR_INTERNET";
  ERROR_TYPES["ERR_REQUEST"] = "ERR_REQUEST";
})(ERROR_TYPES || (ERROR_TYPES = {}));

const DIGITAL_CHECKLIST_TASK_TYPE = 'CHECKLIST';
const DIGITAL_CHECKLIST_ITEM_TASK_TYPE = 'CHECKLIST-ITEM';

var $$4 = _export;
var $includes = arrayIncludes.includes;
var fails$6 = fails$i;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$6(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$4({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject$1 = isObject$8;
var classof$5 = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$f;

var MATCH$1 = wellKnownSymbol$8('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$5(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError$4 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$4("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$7 = wellKnownSymbol$f;

var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$4 = isCallable$j;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$6 = wellKnownSymbol$f;

var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
};

var classof$3 = classof$4;

var $String = String;

var toString$6 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var wellKnownSymbol$5 = wellKnownSymbol$f;

var MATCH = wellKnownSymbol$5('match');

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

var $$3 = _export;
var uncurryThis$9 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$3 = requireObjectCoercible$6;
var toString$5 = toString$6;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$9(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$3({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$5(requireObjectCoercible$3(this)),
      toString$5(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var ChecklistFlowPagesEnum;
(function (ChecklistFlowPagesEnum) {
  ChecklistFlowPagesEnum["PAGE_CHECKLIST_TOOLS"] = "PAGE_CHECKLIST_TOOLS";
  ChecklistFlowPagesEnum["PAGE_ITEMS_LIST_TOOLS"] = "PAGE_ITEMS_LIST_TOOLS";
  ChecklistFlowPagesEnum["PAGE_CHECK_FEEDBACK_TOOLS"] = "PAGE_CHECK_FEEDBACK_TOOLS";
  ChecklistFlowPagesEnum["PAGE_ITEMS_LIST_TASK"] = "PAGE_ITEMS_LIST_TASK";
  ChecklistFlowPagesEnum["PAGE_CHECK_FEEDBACK_TASK"] = "PAGE_CHECK_FEEDBACK_TASK";
  ChecklistFlowPagesEnum["PAGE_CHECKLIST_SUMMARY"] = "PAGE_CHECKLIST_SUMMARY";
})(ChecklistFlowPagesEnum || (ChecklistFlowPagesEnum = {}));

const getChecklistInitialFlowPage = path => {
  if (path.includes('/digital-checklist/task')) {
    return ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TASK;
  }
  if (path.includes('/digital-checklist/summary')) {
    return ChecklistFlowPagesEnum.PAGE_CHECKLIST_SUMMARY;
  }
  if (path.includes('/digital-checklist')) {
    return ChecklistFlowPagesEnum.PAGE_CHECKLIST_TOOLS;
  }
  return ChecklistFlowPagesEnum.PAGE_CHECKLIST_TOOLS;
};
const formatDate = (dateTime, format, tz) => {
  if (!dateTime) return undefined;
  if (!tz) tz = 'America/Santiago';
  // const date = moment(dateTime).locale('es').tz(tz).format(format);
  const date = DateTime.fromISO(dateTime).setZone(tz).toLocaleString(DateTime.DATE_MED);
  return date;
};

var translation = {
	module_title: "Checklist Digitales",
	checklist_subtitle: "Revisa los puntos indicados en el checklist.",
	checklist_item_btn: "Terminar revisión",
	checklist_items_task_description: "Checklist digital",
	checklist_item_modal_title: "¿Deseas terminar la revisión?",
	checklist_item_modal_subtitle: "Puedes terminar la revisión o verificar nuevamente los ítems antes de enviarlos.",
	checklist_task_feedback_expandable: "Reporte de revisión",
	checklist_task_feedback_status_label: "Indicó en el registro",
	checklist_task_feedback_status_valid: "Resuelto",
	checklist_task_feedback_status_invalid: "No cumple",
	checklist_task_feedback_expandable_reviewed_by: "Revisado por",
	checklist_task_feedback_expandable_revision_date: "Fecha de revisión",
	checklist_task_feedback_expandable_pic: "Foto registrada",
	checklist_task_feedback_expandable_pic_desc: "(Haz clic en la imagen para ampliar)",
	checklist_task_feedback_expandable_comments: "Comentarios",
	feedback_footer_button: "Guardar",
	feedback_question: "¿Se cumple este punto?",
	checklist_task_feedback_question: "¿Se resolvió la tarea?",
	feedback_question_description: "Revisión de dirección, limpios, capacidades diferentes, status y pintado.",
	feedback_yes: "Sí",
	feedback_no: "No",
	feedback_na: "N/A",
	feedback_info: "Es necesario tomar una foto y dejar un comentario para completar la revisión.",
	feedback_button_photo: "Tomar foto",
	feedback_comment_placeholder: "Escribe aquí",
	feedback_comment_label: "Deja algún comentario (*)",
	feedback_comment_caption: "Límite de caracteres",
	checklist_task_items_title: "Soporte Operativo",
	checklist_task_feedback_question_description: "Revisión de dirección, limpios, capacidades diferentes, status y pintado.",
	checklist_summary_title: "Seguimiento de tareas",
	checklist_summary_subtitle: "Checklist Soporte operativo",
	checklist_summary_pending_tab: "Pendientes",
	checklist_summary_done_tab: "Realizadas",
	checklist_summary_expired_tab: "Caducadas",
	checklist_error_request_title: "Error de conexión",
	checklist_error_request_subtitle: "Sufrimos un problema, vuelve a  chequear el estado de tu solicitud.",
	checklist_error_request_action: "Volver a ntentar",
	checklist_error_connection_title: "No hay internet",
	checklist_error_connection_subtitle: "Revisa si tu teléfono tiene señal móvil o red Wi-Fi.",
	checklist_error_connection_action: "Volver a ntentar"
};
var es_CL = {
	translation: translation
};

var es_CL$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	translation: translation,
	'default': es_CL
});

const resources = {
  es_CL: es_CL$1
};
const i18nInstance = i18n.createInstance();
i18nInstance.use(initReactI18next).init({
  lng: 'es_CL',
  fallbackLng: 'es_CL',
  resources,
  interpolation: {
    escapeValue: false
  }
});

class BaseClient extends SDK.Lib.RESTClient {
  constructor(country, baseUrl, tokenProvider) {
    super({
      baseURL: `${baseUrl}`
    });
    if (tokenProvider) {
      this.axios = axios.create({
        baseURL: baseUrl
      });
      this.axios.interceptors.request.use(config => __awaiter(this, void 0, void 0, function* () {
        if (!config.headers) {
          throw new Error('Config is not defined');
        }
        const jwt = yield tokenProvider();
        config.headers['Authorization'] = `Bearer ${jwt}`;
        config.headers['Country'] = country;
        config.headers['Accept'] = 'application/json';
        return config;
      }), error => {
        throw error;
      });
    } else {
      this.axios.defaults.headers.common['Country'] = country;
    }
    this.country = country;
  }
}

class CheckListClient extends BaseClient {
  getChecklist() {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/task', {
        params: {
          filters: {
            type: DIGITAL_CHECKLIST_TASK_TYPE,
            state: 'PENDING'
          }
        }
      });
      return data;
    });
  }
  getChecklists(query) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/task', {
        params: Object.assign(Object.assign({}, query), {
          filters: Object.assign({
            type: DIGITAL_CHECKLIST_ITEM_TASK_TYPE
          }, query.filters)
        })
      });
      return data;
    });
  }
  getChecklistData(key) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get(`/task/${key}`);
      return data;
    });
  }
  getChecklistItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get(`/task/${id}`);
      return data;
    });
  }
  getChecklistItemSummary() {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/task/check-list-items-summary');
      return data;
    });
  }
  getChecklistItemData(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get(`/task/check-list-items/${templateId}`);
      return data;
    });
  }
  getChecklistItemTasksData() {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get(`/task/check-list-items-counters`);
      return data;
    });
  }
  saveFeedback(feedback) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.axios.post(`/task/item-feedback`, feedback);
    });
  }
  completeChecklistTask(feedback) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.axios.post(`/task/complete-checklist-item`, feedback);
    });
  }
  markAsCompleted(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.axios.patch(`/task/${taskId}/complete`);
    });
  }
}

function getClients(country, baseUrl, tokenProvider) {
  const checklistClient = new CheckListClient(country, baseUrl, tokenProvider);
  return {
    checklistClient: checklistClient
  };
}

const ModuleContext = /*#__PURE__*/createContext({});
const ModuleContextProvider = props => {
  if (!props.params.country) {
    return jsx(Ramen.XPage, {
      children: jsx(Ramen.XBody, {
        children: jsx(Ramen.XAlert, {
          title: "Country is required",
          type: "error"
        })
      })
    });
  }
  const value = {
    country: props.params.country,
    clients: getClients(props.params.country, props.params.baseUrl, props.params.tokenProvider)
    // clients: {} as IClients
  };

  return jsx(ModuleContext.Provider, Object.assign({
    value: value
  }, {
    children: jsx(I18nextProvider, Object.assign({
      i18n: i18nInstance,
      defaultNS: "translation"
    }, {
      children: props.children
    }))
  }));
};
ModuleContextProvider.defaultProps = {};

const ChecklistContext = /*#__PURE__*/createContext({});
const ChecklistProvider = ({
  children
}) => {
  const {
    pathname
  } = useLocation();
  const {
    clients,
    country
  } = React.useContext(ModuleContext);
  const mainPage = getChecklistInitialFlowPage(pathname);
  const [page, setPage] = useState(mainPage);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [selectedCheck, setSelectedCheck] = useState();
  const [selectedChecklistTask, setSelectedChecklistTask] = useState();
  const [checklistTaskId, setChecklistTaskId] = useState();
  const [selectedClItem, setSelectedClItem] = useState();
  const [feedback, setFeedback] = useState();
  const getChecklists = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      const {
        items
      } = yield clients.checklistClient.getChecklist();
      setChecklist(items);
    } catch (error) {
      console.log(error);
      setError(ERROR_TYPES.ERR_REQUEST);
    } finally {
      setLoading(false);
    }
  });
  const showSuccessSnackBar = (text, type) => {
    Ramen.Api.snackbar[type || 'success']({
      placement: 'top',
      text: text,
      duration: 4.5,
      closable: true
    });
  };
  const getChecklistData = id => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield clients.checklistClient.getChecklistData(id);
    return data;
  });
  const getChecklistItemData = id => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      const data = yield clients.checklistClient.getChecklistItemData(id);
      setSelectedChecklistTask(data);
    } catch (error) {
      console.log(error);
      setError(ERROR_TYPES.ERR_REQUEST);
    } finally {
      setLoading(false);
    }
  });
  const saveFeedback = (feedback, taskId, itemId) => __awaiter(void 0, void 0, void 0, function* () {
    const feedbackBody = {
      taskId: taskId,
      itemId: itemId,
      feedback: feedback
    };
    yield clients.checklistClient.saveFeedback(feedbackBody);
  });
  const completeChecklistTask = (feedback, taskId, itemId) => __awaiter(void 0, void 0, void 0, function* () {
    const feedbackBody = {
      taskId: taskId,
      itemId: itemId,
      feedback: feedback
    };
    yield clients.checklistClient.completeChecklistTask(feedbackBody);
  });
  const sendChecklist = taskId => {
    clients.checklistClient.markAsCompleted(taskId);
  };
  const value = {
    country,
    page,
    loading,
    error,
    checklist,
    selectedClItem,
    selectedCheck,
    feedback,
    showSuccessSnackBar,
    setPage,
    setLoading,
    setSelectedClItem,
    getChecklists,
    setFeedback,
    setSelectedCheck,
    getChecklistData,
    saveFeedback,
    sendChecklist,
    getChecklistItemData,
    selectedChecklistTask,
    setSelectedChecklistTask,
    completeChecklistTask,
    setChecklistTaskId,
    checklistTaskId
  };
  return jsx(ChecklistContext.Provider, Object.assign({
    value: value
  }, {
    children: children
  }));
};

var img = "data:image/svg+xml,%3csvg width='96' height='96' viewBox='0 0 96 96' fill='currrentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cg filter='url(%23filter0_i_4885_7402)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M96 48.0387V85.6859C96 91.3822 91.3822 96 85.6859 96C80.5539 96 76.2973 92.2517 75.5044 87.3434C67.7152 92.7988 58.2314 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0C74.2632 0 95.5999 21.0926 95.9944 47.2619C95.9981 47.3752 96 47.4891 96 47.6033V47.9613C96 47.9742 96 47.9871 96 48C96 48.0129 96 48.0258 96 48.0387Z' fill='url(%23paint0_linear_4885_7402)'/%3e%3c/g%3e%3ccircle cx='48.0001' cy='47.9998' r='27.3719' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.3761 44.1369C37.9298 45.3401 37.6859 46.6416 37.6859 48C37.6859 54.1345 42.6589 59.1075 48.7934 59.1075C54.9278 59.1075 59.9008 54.1345 59.9008 48C59.9008 41.8655 54.9278 36.8926 48.7934 36.8926C48.3298 36.8926 47.8729 36.921 47.4242 36.9761C47.5412 37.458 47.6033 37.9614 47.6033 38.4794C47.6033 41.9848 44.7616 44.8265 41.2562 44.8265C40.2193 44.8265 39.2405 44.5778 38.3761 44.1369Z' fill='%23333333'/%3e%3cdefs%3e%3cfilter id='filter0_i_4885_7402' x='0' y='0' width='96' height='96' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='7.5'/%3e%3cfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='shape' result='effect1_innerShadow_4885_7402'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_4885_7402' x1='76.2843' y1='18.4489' x2='23.3527' y2='100.582' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23F7FF05'/%3e%3cstop offset='0.614583' stop-color='%232DDFA6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

const Header = ({
  onBack,
  title,
  subTitle,
  skeleton
}) => {
  return jsx(Ramen.XHeader, {
    title: title,
    subtitle: subTitle,
    sticky: true,
    onBack: onBack,
    skeleton: skeleton
  });
};

var ICON;
(function (ICON) {
  ICON["YES"] = "YES";
  ICON["NO"] = "NO";
  ICON["NA"] = "NA";
})(ICON || (ICON = {}));
const CardList = ({
  items
}) => {
  const checkState = {
    YES: 'check',
    NO: 'refuse',
    NA: 'not-applicable'
  };
  return jsx(Ramen.XBox, Object.assign({
    height: 'full',
    orientation: "vertical",
    padding: "xs",
    gap: "m"
  }, {
    children: items === null || items === void 0 ? void 0 : items.map(it => {
      return jsx(Ramen.XCard, {
        title: it.title,
        onClick: it.onClick,
        state: (it === null || it === void 0 ? void 0 : it.state) ? checkState[it.state] : undefined
      }, it.key + it.title);
    })
  }));
};

const ChecklistSummary$1 = ({
  params
}) => {
  const [loading, setLoading] = React__default.useState(false);
  const [summary, setSummary] = React__default.useState([]);
  const history = useHistory();
  React__default.useEffect(() => {
    const clients = getClients(params.country, params.baseUrl, params.tokenProvider);
    const fetchSummary = () => __awaiter(void 0, void 0, void 0, function* () {
      setLoading(true);
      try {
        const result = yield clients.checklistClient.getChecklistItemSummary();
        setSummary(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    });
    fetchSummary();
  }, [params]);
  return jsx(Ramen.XBox, Object.assign({
    orientation: 'vertical',
    verticalAlign: 'start',
    width: 'full'
  }, {
    children: jsx(Ramen.XList, {
      skeleton: loading,
      dataSource: summary,
      renderItem: item => jsx(Ramen.XCard, {
        title: item.item,
        symbol: "address-neutral",
        onClick: () => history === null || history === void 0 ? void 0 : history.push(`/digital-checklist/summary/${item._id}`)
      })
    })
  }));
};

var anObject$5 = anObject$b;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$5(this);
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

var fails$5 = fails$i;
var global$5 = global$h;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$5.RegExp;

var UNSUPPORTED_Y$1 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$5(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var fails$4 = fails$i;
var global$4 = global$h;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$4.RegExp;

var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$i;
var global$3 = global$h;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$3.RegExp;

var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$6 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var toString$4 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create$1 = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$4 = uncurryThis$8(''.charAt);
var indexOf = uncurryThis$8(''.indexOf);
var replace$3 = uncurryThis$8(''.replace);
var stringSlice$5 = uncurryThis$8(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$6(nativeExec, re1, 'a');
  call$6(nativeExec, re2, 'a');
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
      result = call$6(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$6(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$3(flags, 'y', '');
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

    match = call$6(nativeExec, sticky ? reCopy : re, strCopy);

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
      call$6(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$1(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$2 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$5 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$5.bind(apply$1) : function () {
  return call$5.apply(apply$1, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$7 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$7(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$6 = functionUncurryThisClause;
var defineBuiltIn$2 = defineBuiltIn$6;
var regexpExec$1 = regexpExec$2;
var fails$2 = fails$i;
var wellKnownSymbol$4 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES = wellKnownSymbol$4('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
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
      re.constructor[SPECIES] = function () { return re; };
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
    var uncurriedNativeRegExpMethod = uncurryThis$6(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$6(nativeMethod);
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

var uncurryThis$5 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$3 = toString$6;
var requireObjectCoercible$2 = requireObjectCoercible$6;

var charAt$3 = uncurryThis$5(''.charAt);
var charCodeAt = uncurryThis$5(''.charCodeAt);
var stringSlice$4 = uncurryThis$5(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$3(requireObjectCoercible$2($this));
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
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$2 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var uncurryThis$4 = functionUncurryThis;
var toObject = toObject$4;

var floor$1 = Math.floor;
var charAt$1 = uncurryThis$4(''.charAt);
var replace$2 = uncurryThis$4(''.replace);
var stringSlice$3 = uncurryThis$4(''.slice);
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
  return replace$2(replacement, symbols, function (match, ch) {
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
          var f = floor$1(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$4 = functionCall;
var anObject$4 = anObject$b;
var isCallable$3 = isCallable$j;
var classof$2 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$3 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$3(exec)) {
    var result = call$4(exec, R, S);
    if (result !== null) anObject$4(result);
    return result;
  }
  if (classof$2(R) === 'RegExp') return call$4(regexpExec, R, S);
  throw $TypeError$3('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$3 = functionCall;
var uncurryThis$3 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$1 = fails$i;
var anObject$3 = anObject$b;
var isCallable$2 = isCallable$j;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$2;
var toString$2 = toString$6;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$1;
var getMethod$2 = getMethod$4;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$f;

var REPLACE = wellKnownSymbol$3('replace');
var max$1 = Math.max;
var min = Math.min;
var concat = uncurryThis$3([].concat);
var push$1 = uncurryThis$3([].push);
var stringIndexOf = uncurryThis$3(''.indexOf);
var stringSlice$2 = uncurryThis$3(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
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
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$1(this);
      var replacer = isNullOrUndefined$2(searchValue) ? undefined : getMethod$2(searchValue, REPLACE);
      return replacer
        ? call$3(replacer, searchValue, O, replaceValue)
        : call$3(nativeReplace, toString$2(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$3(this);
      var S = toString$2(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$2(replaceValue);
      if (!functionalReplace) replaceValue = toString$2(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;

        push$1(results, result);
        if (!global) break;

        var matchStr = toString$2(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$2(result[0]);
        var position = max$1(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
          var replacement = toString$2(apply(replaceValue, undefined, replacerArgs));
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

const useChecklist = () => {
  const {
    country,
    page,
    feedback,
    loading,
    selectedCheck,
    selectedClItem,
    setLoading,
    getChecklists,
    error,
    checklist,
    setPage,
    showSuccessSnackBar,
    setFeedback,
    setSelectedCheck,
    getChecklistData,
    setSelectedClItem,
    saveFeedback,
    sendChecklist,
    getChecklistItemData,
    selectedChecklistTask,
    setSelectedChecklistTask,
    completeChecklistTask,
    setChecklistTaskId,
    checklistTaskId
  } = useContext(ChecklistContext);
  const history = useHistory();
  const routeToChecklistTool = () => {
    setChecklistTaskId(undefined);
    setPage(ChecklistFlowPagesEnum.PAGE_CHECKLIST_TOOLS);
  };
  const routeToChecklistItemsTool = () => setPage(ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TOOLS);
  const routeToChecklistItemFeedbackTool = () => setPage(ChecklistFlowPagesEnum.PAGE_CHECK_FEEDBACK_TOOLS);
  const redirectToChecklistItemsTask = id => history.push(`/digital-checklist/task/${id}`);
  const routeToChecklistItemsTask = () => setPage(ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TASK);
  const routeToChecklistItemFeedbackTask = () => setPage(ChecklistFlowPagesEnum.PAGE_CHECK_FEEDBACK_TASK);
  const routeToChecklistSummary = () => setPage(ChecklistFlowPagesEnum.PAGE_CHECKLIST_SUMMARY);
  const routeToHome = () => history.replace('/');
  return {
    country,
    page,
    loading,
    error,
    setLoading,
    checklist,
    selectedCheck,
    selectedClItem,
    feedback,
    // set routes
    routeToHome,
    routeToChecklistTool,
    routeToChecklistItemsTool,
    routeToChecklistItemFeedbackTool,
    routeToChecklistItemsTask,
    redirectToChecklistItemsTask,
    routeToChecklistItemFeedbackTask,
    getChecklistItemData,
    routeToChecklistSummary,
    getChecklists,
    showSuccessSnackBar,
    setFeedback,
    setSelectedCheck,
    getChecklistData,
    setSelectedClItem,
    saveFeedback,
    sendChecklist,
    selectedChecklistTask,
    setSelectedChecklistTask,
    completeChecklistTask,
    setChecklistTaskId,
    checklistTaskId
  };
};

const Checklist = () => {
  const {
    t
  } = useTranslation();
  const {
    routeToHome,
    loading,
    getChecklists,
    checklist,
    routeToChecklistItemsTool,
    setChecklistTaskId
  } = useChecklist();
  const onChecklistClick = id => __awaiter(void 0, void 0, void 0, function* () {
    setChecklistTaskId(id);
    routeToChecklistItemsTool();
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield getChecklists();
    }))();
    getChecklists();
  }, []);
  if (loading) {
    return jsxs(Ramen.XBox, Object.assign({
      padding: 'l'
    }, {
      children: [jsx(Ramen.XSkeleton, {
        type: 'icon'
      }), jsx(Ramen.XVSpace, {
        size: 'l'
      }), jsx(Ramen.XSkeleton, {
        type: 'text',
        size: 'm'
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XSkeleton, {
        type: 'text',
        size: 'xs',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      })]
    }));
  }
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToHome(),
      title: t('module_title'),
      subTitle: t('checklist_subtitle'),
      skeleton: loading
    }), jsx(Ramen.XBody, {
      children: (checklist === null || checklist === void 0 ? void 0 : checklist.length) === 0 ? jsxs(Ramen.XBox, Object.assign({
        width: 'full',
        gap: 'm',
        orientation: 'vertical',
        verticalAlign: 'center',
        horizontalAlign: 'center'
      }, {
        children: [jsx(Ramen.XVSpace, {
          size: 'xl'
        }), jsx(Ramen.XVSpace, {
          size: 'xl'
        }), jsx(Ramen.XVSpace, {
          size: 'xl'
        }), jsx(Ramen.XImage, {
          src: img
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 9,
          weight: 'bold'
        }, {
          children: "\u00A1Todo en orden!"
        }))]
      })) : jsx(CardList, {
        items: (checklist === null || checklist === void 0 ? void 0 : checklist.map(ck => ({
          key: ck.task_id,
          title: ck.meta_data.name,
          onClick: () => {
            onChecklistClick(ck.task_id);
          }
        }))) || []
      })
    })]
  });
};

const ChecklistItems = () => {
  var _a;
  const [disableButton, setDisableButton] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const {
    t
  } = useTranslation();
  const {
    loading,
    setLoading,
    selectedCheck,
    setSelectedCheck,
    routeToChecklistTool,
    routeToChecklistItemFeedbackTool,
    setSelectedClItem,
    sendChecklist,
    getChecklistData,
    checklistTaskId
  } = useChecklist();
  const onGetChecklistData = id => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    const data = yield getChecklistData(id);
    setSelectedCheck(data);
    setLoading(false);
  });
  const onChecklistItemClick = id => __awaiter(void 0, void 0, void 0, function* () {
    routeToChecklistItemFeedbackTool();
    const selected = selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items.find(its => its.id === id);
    if (selected) {
      setSelectedClItem(selected);
    }
  });
  useEffect(() => {
    if (!checklistTaskId) return;
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield onGetChecklistData(checklistTaskId);
    }))();
  }, [checklistTaskId]);
  useEffect(() => {
    const allItemsChecked = selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items.every(item => {
      var _a;
      return (_a = item === null || item === void 0 ? void 0 : item.feedback) === null || _a === void 0 ? void 0 : _a.response;
    });
    if (allItemsChecked) {
      setDisableButton(false);
    }
  }, [selectedCheck]);
  const onSendCheckList = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.id)) return;
    yield sendChecklist(selectedCheck.id);
    routeToChecklistTool();
  });
  const onConfirmSend = key => {
    if (key === 'send_feedback') {
      onSendCheckList();
    } else {
      setShowConfirmModal(false);
    }
  };
  const progress = useMemo(() => {
    if (!(selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items)) return 0;
    const checkedItems = selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items.filter(item => {
      var _a;
      return (_a = item === null || item === void 0 ? void 0 : item.feedback) === null || _a === void 0 ? void 0 : _a.response;
    });
    return checkedItems.length / (selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items.length) * 100;
  }, [selectedCheck]);
  if (loading) {
    return jsxs(Ramen.XBox, Object.assign({
      padding: 'l'
    }, {
      children: [jsx(Ramen.XSkeleton, {
        type: 'icon'
      }), jsx(Ramen.XVSpace, {
        size: 'l'
      }), jsx(Ramen.XSkeleton, {
        type: 'text',
        size: 'm'
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XSkeleton, {
        type: 'text',
        size: 'xs',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      }), jsx(Ramen.XSkeleton, {
        type: 'image',
        size: 'xl',
        width: 'xl'
      }), jsx(Ramen.XVSpace, {
        size: 'm'
      })]
    }));
  }
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToChecklistTool(),
      title: (selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.name) || '',
      skeleton: loading
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XProgressBar, {
        size: 'xs',
        progress: progress,
        text: 'Comenzar'
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(CardList, {
        items: ((_a = selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.meta_data.items) === null || _a === void 0 ? void 0 : _a.map(it => {
          var _a;
          return {
            key: it.id,
            title: it.title,
            state: (_a = it === null || it === void 0 ? void 0 : it.feedback) === null || _a === void 0 ? void 0 : _a.response,
            onClick: () => {
              onChecklistItemClick(it.id);
            }
          };
        })) || []
      })]
    }), jsx(Ramen.XModal, {
      closable: true,
      onClose: () => setShowConfirmModal(false),
      visible: showConfirmModal,
      title: t('checklist_item_modal_title'),
      subtitle: t('checklist_item_modal_subtitle'),
      actions: [{
        key: 'send_feedback',
        text: 'Terminar revisión',
        type: 'solid'
      }, {
        key: 'check_again',
        text: 'Revisar nuevamente',
        type: 'outline'
      }],
      onActionClick: onConfirmSend,
      size: 'xs'
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        text: t('checklist_item_btn'),
        size: 'xl',
        type: 'solid',
        onClick: () => setShowConfirmModal(true),
        disabled: disableButton
      })
    })]
  });
};

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor$2 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var $$1 = _export;
var DESCRIPTORS$2 = descriptors;
var global$2 = global$h;
var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$1 = isCallable$j;
var isPrototypeOf$1 = objectIsPrototypeOf;
var toString$1 = toString$6;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$2.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS$2 && isCallable$1(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$1(arguments[0]);
    var result = isPrototypeOf$1(SymbolPrototype, this)
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
  var thisSymbolValue = uncurryThis$2(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$2(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$1 = uncurryThis$2(''.replace);
  var stringSlice$1 = uncurryThis$2(''.slice);

  defineBuiltInAccessor$1(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$1(string, 7, -1) : replace$1(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$1({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

const ItemFeedback = () => {
  const {
    t
  } = useTranslation();
  const {
    selectedClItem,
    selectedCheck,
    routeToChecklistItemsTool,
    setFeedback,
    feedback,
    saveFeedback,
    showSuccessSnackBar
  } = useChecklist();
  const onFeedbackBtnClick = btn => {
    setFeedback({
      response: btn
    });
  };
  const commentHandler = comment => {
    setFeedback(Object.assign(Object.assign({}, feedback), {
      comment: comment
    }));
  };
  useEffect(() => {
    if (selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback) {
      setFeedback({
        response: selectedClItem.feedback.response,
        comment: selectedClItem.feedback.comment,
        attachments: selectedClItem.feedback.attachments || []
      });
    }
  }, [selectedClItem]);
  const onSaveFeedback = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!feedback || !feedback.response) return;
    if (!(selectedCheck === null || selectedCheck === void 0 ? void 0 : selectedCheck.id) || !(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.id)) return;
    try {
      yield saveFeedback(feedback, selectedCheck.id, selectedClItem.id);
      setFeedback(undefined);
      routeToChecklistItemsTool();
      showSuccessSnackBar('Guardado con éxito');
    } catch (error) {
      setFeedback(undefined);
      routeToChecklistItemsTool();
      showSuccessSnackBar('Ha ocurrido un error al guardar', 'error');
    }
  });
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToChecklistItemsTool(),
      title: selectedClItem.title
    }), jsxs(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: 'vertical',
      padding: 'l'
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        gap: 'xxs'
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          colorThone: 'darkest',
          fontSize: 10,
          weight: 'bold'
        }, {
          children: t('feedback_question')
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.description
        }))]
      })), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsxs(Ramen.XBox, Object.assign({
        gap: 's',
        orientation: 'horizontal',
        horizontalAlign: 'between'
      }, {
        children: [jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'YES' ? 'outline' : 'tonal',
          icon: 'check-extrabold',
          text: t('feedback_yes'),
          onClick: () => onFeedbackBtnClick('YES'),
          disabled: !!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback)
        }), jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'NO' ? 'outline' : 'tonal',
          icon: 'x-extrabold',
          text: t('feedback_no'),
          onClick: () => onFeedbackBtnClick('NO'),
          disabled: !!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback)
        }), jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'NA' ? 'outline' : 'tonal',
          icon: 'slash-extrabold',
          text: t('feedback_na'),
          onClick: () => onFeedbackBtnClick('NA'),
          disabled: !!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback)
        })]
      })), jsx(Ramen.XVSpace, {
        size: 'l'
      }), feedback && (feedback.response === 'YES' || feedback.response === 'NO') && jsxs(Ramen.XBox, Object.assign({
        gap: 'l'
      }, {
        children: [jsx(Ramen.XAlert, {
          title: t('feedback_info'),
          type: 'info'
        }), jsx(Ramen.XButton, {
          text: t('feedback_button_photo'),
          size: 'xl',
          type: 'default',
          icon: 'camera-outline',
          disabled: !!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback)
        }), jsx(Ramen.XBox, Object.assign({
          gap: 'xs'
        }, {
          children: jsx(Ramen.XFormItem, Object.assign({
            label: t('feedback_comment_label'),
            caption: t('feedback_comment_caption')
          }, {
            children: jsx(Ramen.XTextArea, {
              placeholder: t('feedback_comment_placeholder'),
              value: feedback.comment || '',
              onChange: e => commentHandler(e.target.value),
              maxLength: 400,
              disabled: !!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback)
            })
          }))
        }))]
      }))]
    })), !(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback) ? jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        text: t('feedback_footer_button'),
        size: 'xl',
        type: 'solid',
        onClick: onSaveFeedback,
        disabled: !(feedback === null || feedback === void 0 ? void 0 : feedback.response)
      })
    }) : null]
  });
};

const ChecklistToolsFlow = () => {
  const {
    page,
    error
  } = useChecklist();
  const renderPAGE_CHECKLIST = () => jsx(Checklist, {});
  const renderPAGE_ITEMS_LIST = () => jsx(ChecklistItems, {});
  const renderPAGE_CHECK_FEEDBACK = () => jsx(ItemFeedback, {});
  const renders = {
    [ChecklistFlowPagesEnum.PAGE_CHECKLIST_TOOLS]: renderPAGE_CHECKLIST,
    [ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TOOLS]: renderPAGE_ITEMS_LIST,
    [ChecklistFlowPagesEnum.PAGE_CHECK_FEEDBACK_TOOLS]: renderPAGE_CHECK_FEEDBACK
  };
  if (error) {
    if (error === ERROR_TYPES.ERR_INTERNET) {
      console.log('Mostrar pagina de error de internet');
      return jsx(Fragment, {
        children: "Mostrar pagina de error de internet"
      });
    }
    if (error === ERROR_TYPES.ERR_REQUEST) {
      console.log('Mostrar modal de error');
      return jsx(Fragment, {
        children: "Mostrar modal de error"
      });
    }
  }
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

var fails = fails$i;
var wellKnownSymbol$2 = wellKnownSymbol$f;
var DESCRIPTORS$1 = descriptors;
var IS_PURE = isPure;

var ITERATOR$2 = wellKnownSymbol$2('iterator');

var urlConstructorDetection = !fails(function () {
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
    || (!params.size && (IS_PURE || !DESCRIPTORS$1))
    || !params.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR$2]
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

var defineBuiltIn$1 = defineBuiltIn$6;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$1(target, key, src[key], options);
  return target;
};

var isPrototypeOf = objectIsPrototypeOf;

var $TypeError$2 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError$2('Incorrect invocation');
};

var uncurryThis$1 = functionUncurryThisClause;
var aCallable$1 = aCallable$4;
var NATIVE_BIND = functionBindNative;

var bind$1 = uncurryThis$1(uncurryThis$1.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$1 = classof$4;
var getMethod$1 = getMethod$4;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$f;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$1(it)];
};

var call$2 = functionCall;
var aCallable = aCallable$4;
var anObject$2 = anObject$b;
var tryToString = tryToString$2;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$1 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$2(call$2(iteratorMethod, argument));
  throw $TypeError$1(tryToString(argument) + ' is not iterable');
};

var $TypeError = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
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

var $ = _export;
var global$1 = global$h;
var call$1 = functionCall;
var uncurryThis = functionUncurryThis;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn = defineBuiltIn$6;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag = setToStringTag$3;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule = internalState;
var anInstance = anInstance$1;
var isCallable = isCallable$j;
var hasOwn = hasOwnProperty_1;
var bind = functionBindContext;
var classof = classof$4;
var anObject$1 = anObject$b;
var isObject = isObject$8;
var $toString = toString$6;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var validateArgumentsLength = validateArgumentsLength$1;
var wellKnownSymbol = wellKnownSymbol$f;
var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS) return global$1[name];
  var descriptor = getOwnPropertyDescriptor(global$1, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$1.RegExp;
var TypeError$1 = global$1.TypeError;
var decodeURIComponent = global$1.decodeURIComponent;
var encodeURIComponent = global$1.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

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
  var result = replace(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
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
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
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
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$1(next, iterator)).done) {
        entryIterator = getIterator(anObject$1(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$1(entryNext, entryIterator)).done ||
          (second = call$1(entryNext, entryIterator)).done ||
          !call$1(entryNext, entryIterator).done
        ) throw TypeError$1('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
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
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength(arguments.length, 2);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength(arguments.length, 1);
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
    if (!DESCRIPTORS) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength(arguments.length, 1);
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
    validateArgumentsLength(arguments.length, 1);
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
    var length = validateArgumentsLength(arguments.length, 1);
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
    validateArgumentsLength(arguments.length, 1);
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
    if (!DESCRIPTORS) this.size = entries.length;
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
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
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
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var call = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject = anObject$b;
var isNullOrUndefined = isNullOrUndefined$5;
var requireObjectCoercible = requireObjectCoercible$6;
var sameValue = sameValue$1;
var toString = toString$6;
var getMethod = getMethod$4;
var regExpExec = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

const ChecklistItemsTask = () => {
  useTranslation();
  const {
    loading,
    selectedChecklistTask,
    routeToHome,
    getChecklistItemData,
    routeToChecklistItemFeedbackTask,
    setSelectedClItem
  } = useChecklist();
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const routeParams = useParams();
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      onGetChecklistItemData();
    }))();
  }, []);
  const onGetChecklistItemData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield getChecklistItemData(routeParams.id);
  });
  const onChecklistItemClick = id => __awaiter(void 0, void 0, void 0, function* () {
    const selected = selectedChecklistTask === null || selectedChecklistTask === void 0 ? void 0 : selectedChecklistTask.find(its => its.id === id);
    if (selected) {
      setSelectedClItem(selected.meta_data.item);
    }
    routeToChecklistItemFeedbackTask();
  });
  if (loading) {
    return jsxs(Ramen.XBox, Object.assign({
      padding: "l"
    }, {
      children: [jsx(Ramen.XSkeleton, {
        type: "icon"
      }), jsx(Ramen.XVSpace, {
        size: "l"
      }), jsx(Ramen.XSkeleton, {
        type: "text",
        size: "m"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XSkeleton, {
        type: "text",
        size: "xs",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "image",
        size: "xl",
        width: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "m"
      })]
    }));
  }
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToHome(),
      title: query.get('checklist_name') || "",
      skeleton: loading
    }), jsx(Ramen.XBody, {
      children: jsx(CardList, {
        items: (selectedChecklistTask === null || selectedChecklistTask === void 0 ? void 0 : selectedChecklistTask.map(item => ({
          key: item.id,
          title: item.meta_data.item.title,
          onClick: () => {
            onChecklistItemClick(item.id);
          }
        }))) || []
      })
    })]
  });
};

const ItemFeedbackTask = () => {
  var _a, _b, _c;
  const {
    t
  } = useTranslation();
  const {
    selectedClItem,
    routeToChecklistItemsTask,
    completeChecklistTask,
    setFeedback,
    feedback,
    showSuccessSnackBar,
    selectedChecklistTask
  } = useChecklist();
  const onFeedbackBtnClick = btn => {
    setFeedback({
      response: btn
    });
  };
  const commentHandler = comment => {
    setFeedback(Object.assign(Object.assign({}, feedback), {
      comment: comment
    }));
  };
  const onCloseChecklistTask = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!feedback || !feedback.response) return;
    if (!(selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.id)) return;
    const taskId = selectedChecklistTask === null || selectedChecklistTask === void 0 ? void 0 : selectedChecklistTask.find(item => item.meta_data.item.id === selectedClItem.id);
    try {
      if (!taskId) {
        throw new Error('Task not found');
      }
      yield completeChecklistTask(feedback, taskId === null || taskId === void 0 ? void 0 : taskId.id, selectedClItem.id);
      setFeedback(undefined);
      routeToChecklistItemsTask();
      showSuccessSnackBar('Tarea finalizada con éxito');
    } catch (error) {
      setFeedback(undefined);
      routeToChecklistItemsTask();
      showSuccessSnackBar('Ha ocurrido un error al finalizar la tarea');
    }
  });
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToChecklistItemsTask(),
      title: selectedClItem.title
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XCollapseCard, Object.assign({
        title: t('checklist_task_feedback_expandable')
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: 'vertical',
          gap: 'm',
          width: 'full'
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            horizontalAlign: 'between'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'medium',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: t('checklist_task_feedback_expandable_reviewed_by')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: (_a = selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback) === null || _a === void 0 ? void 0 : _a.user.name
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            horizontalAlign: 'between'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'medium',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: t('checklist_task_feedback_expandable_revision_date')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: formatDate((_b = selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback) === null || _b === void 0 ? void 0 : _b.created_at)
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'vertical',
            verticalAlign: 'start',
            gap: 'xxs'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 11,
              weight: 'bold'
            }, {
              children: t('checklist_task_feedback_expandable_pic')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 12
            }, {
              children: t('checklist_task_feedback_expandable_pic_desc')
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            gap: 'l'
          }, {
            children: [jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl'
            }), jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl'
            })]
          })), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 11,
              weight: 'bold'
            }, {
              children: t('checklist_task_feedback_expandable_comments')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 12,
              weight: 'lighter'
            }, {
              children: (_c = selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.feedback) === null || _c === void 0 ? void 0 : _c.comment
            }))]
          })]
        }))
      })), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsxs(Ramen.XBox, Object.assign({
        gap: 'xxs'
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          colorThone: 'darkest',
          fontSize: 10,
          weight: 'bold'
        }, {
          children: t('checklist_task_feedback_question')
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: selectedClItem === null || selectedClItem === void 0 ? void 0 : selectedClItem.description
        }))]
      })), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsxs(Ramen.XBox, Object.assign({
        gap: 's',
        orientation: 'horizontal',
        horizontalAlign: 'between'
      }, {
        children: [jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'YES' ? 'solid' : 'tonal',
          icon: 'check-extrabold',
          text: t('feedback_yes'),
          onClick: () => onFeedbackBtnClick('YES')
        }), jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'NO' ? 'solid' : 'tonal',
          icon: 'x-extrabold',
          text: t('feedback_no'),
          onClick: () => onFeedbackBtnClick('NO')
        }), jsx(Ramen.XButton, {
          size: 'l',
          type: (feedback === null || feedback === void 0 ? void 0 : feedback.response) === 'NA' ? 'solid' : 'tonal',
          icon: 'slash-extrabold',
          text: t('feedback_na'),
          onClick: () => onFeedbackBtnClick('NA')
        })]
      })), jsx(Ramen.XVSpace, {
        size: 'l'
      }), feedback && (feedback.response === 'YES' || feedback.response === 'NO') && jsxs(Ramen.XBox, Object.assign({
        gap: 'l'
      }, {
        children: [jsx(Ramen.XAlert, {
          title: t('feedback_info'),
          type: 'info'
        }), jsx(Ramen.XButton, {
          text: t('feedback_button_photo'),
          size: 'xl',
          type: 'default',
          icon: 'camera-outline'
        }), jsx(Ramen.XBox, Object.assign({
          gap: 'xs'
        }, {
          children: jsx(Ramen.XFormItem, Object.assign({
            label: t('feedback_comment_label'),
            caption: t('feedback_comment_caption')
          }, {
            children: jsx(Ramen.XTextArea, {
              placeholder: t('feedback_comment_placeholder'),
              value: feedback.comment || '',
              onChange: e => commentHandler(e.target.value),
              maxLength: 400
            })
          }))
        }))]
      }))]
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        text: t('feedback_footer_button'),
        size: 'xl',
        type: 'solid',
        onClick: onCloseChecklistTask,
        disabled: !(feedback === null || feedback === void 0 ? void 0 : feedback.response)
      })
    })]
  });
};

const ChecklistTaskFlow = () => {
  const {
    page,
    error
  } = useChecklist();
  const renderPAGE_ITEMS_LIST_TASK = () => jsx(ChecklistItemsTask, {});
  const renderPAGE_CHECK_FEEDBACK_TASK = () => jsx(ItemFeedbackTask, {});
  const renders = {
    [ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TASK]: renderPAGE_ITEMS_LIST_TASK,
    [ChecklistFlowPagesEnum.PAGE_CHECK_FEEDBACK_TASK]: renderPAGE_CHECK_FEEDBACK_TASK
  };
  if (error) {
    if (error === ERROR_TYPES.ERR_INTERNET) {
      // TODO
      console.log('Mostrar pagina de error de internet');
      return jsx(Fragment, {
        children: "Mostrar pagina de error de internet"
      });
    }
    if (error === ERROR_TYPES.ERR_REQUEST) {
      // TODO
      console.log('Mostrar modal de error');
      return jsx(Fragment, {
        children: "Mostrar modal de error"
      });
    }
  }
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

const ChecklistSummaryContext = /*#__PURE__*/React__default.createContext({});
const useChecklistSummaryContext = () => React__default.useContext(ChecklistSummaryContext);
const ChecklistSummaryContextProvider = ({
  children
}) => {
  const {
    clients
  } = React__default.useContext(ModuleContext);
  const [checklists, setCheckLists] = React__default.useState([]);
  const [selectedChecklist, setSelectedChecklist] = React__default.useState();
  const [loading, setLoading] = React__default.useState(false);
  const fetchPending = React__default.useCallback(checklistId => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const result = yield clients.checklistClient.getChecklists({
        limit: 100,
        offset: 0,
        filters: {
          state: 'PENDING',
          'meta_data.templateId': checklistId
        }
      });
      setCheckLists(result.items);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  const fetchCompleted = React__default.useCallback(checklistId => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const result = yield clients.checklistClient.getChecklists({
        limit: 100,
        offset: 0,
        filters: {
          state: 'COMPLETED',
          'meta_data.templateId': checklistId
        }
      });
      setCheckLists(result.items);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  const fetchExpired = React__default.useCallback(checklistId => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const result = yield clients.checklistClient.getChecklists({
        limit: 100,
        offset: 0,
        filters: {
          state: 'PENDING',
          'meta_data.templateId': checklistId
          // @TODO: Add other filters to get expired checklist tasks
        }
      });

      setCheckLists(result.items);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  const fetchChecklistItem = React__default.useCallback(id => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const result = yield clients.checklistClient.getChecklistItem(id);
      setSelectedChecklist(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  return jsx(ChecklistSummaryContext.Provider, Object.assign({
    value: {
      checklists,
      selectedChecklist,
      loading,
      fetchCompleted,
      fetchPending,
      fetchExpired,
      fetchChecklistItem
    }
  }, {
    children: children
  }));
};

const ChecklistSummary = () => {
  const {
    loading,
    checklists,
    fetchPending,
    fetchCompleted,
    fetchExpired
  } = useChecklistSummaryContext();
  const params = useParams();
  const [currentTab, setCurrentTab] = React__default.useState('pending');
  const history = useHistory();
  const {
    t
  } = useTranslation();
  React__default.useEffect(() => {
    if (!params.id) return;
    fetchPending(params.id);
  }, [params.id, fetchPending]);
  const onTabChange = newTab => __awaiter(void 0, void 0, void 0, function* () {
    if (newTab === currentTab) return;
    if (newTab === 'pending') yield fetchPending(params.id);else if (newTab === 'done') yield fetchCompleted(params.id);else if (newTab === 'expired') yield fetchExpired(params.id);
    setCurrentTab(newTab);
  });
  return jsxs(Ramen.XPage, {
    children: [jsx(Header, {
      onBack: () => history.goBack(),
      title: t('checklist_summary_title'),
      subTitle: t('checklist_summary_subtitle'),
      skeleton: loading
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "m"
      }, {
        children: [jsx(Ramen.XTabs, {
          actions: [],
          border: "none",
          defaultKey: "pending",
          onTabChange: onTabChange,
          size: "s",
          tabs: [{
            disabled: false,
            key: 'pending',
            label: t('checklist_summary_pending_tab'),
            type: 'outline'
          }, {
            disabled: false,
            key: 'done',
            label: t('checklist_summary_done_tab'),
            type: 'outline'
          }, {
            disabled: false,
            key: 'expired',
            label: t('checklist_summary_expired_tab'),
            type: 'outline'
          }]
        }), jsx(CardList, {
          items: (checklists === null || checklists === void 0 ? void 0 : checklists.map(checklist => ({
            key: checklist.task_id,
            title: checklist.meta_data.name,
            onClick: () => history.push(`/digital-checklist/summary/${checklist.task_id}/feedback`)
          }))) || []
        })]
      }))
    })]
  });
};

const ChecklistItemFeedback = () => {
  var _a, _b, _c;
  const {
    loading,
    selectedChecklist,
    fetchChecklistItem
  } = useChecklistSummaryContext();
  const history = useHistory();
  const params = useParams();
  const {
    t
  } = useTranslation();
  React__default.useEffect(() => {
    if (!params.id) return;
    fetchChecklistItem(params.id);
  }, [params.id, fetchChecklistItem]);
  const selectedItem = React__default.useMemo(() => {
    if (!selectedChecklist) return undefined;
    return selectedChecklist.meta_data.item;
  }, [selectedChecklist]);
  const feedbackStatusLabel = React__default.useMemo(() => {
    var _a;
    return ((_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.feedback) === null || _a === void 0 ? void 0 : _a.response) === 'YES' ? t('checklist_task_feedback_status_valid') : t('checklist_task_feedback_status_invalid');
  }, [selectedItem, t]);
  const feedbackStatus = React__default.useMemo(() => {
    var _a;
    return ((_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.feedback) === null || _a === void 0 ? void 0 : _a.response) === 'YES' ? 'success' : 'error';
  }, [selectedItem]);
  return jsxs(Ramen.XPage, Object.assign({
    skeleton: loading
  }, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => history.goBack(),
      title: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.title,
      subtitle: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.description
    }), jsx(Ramen.XBody, {
      children: jsx(Ramen.XCollapseCard, Object.assign({
        title: t('checklist_task_feedback_expandable'),
        defaultOpen: true
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: 'vertical',
          gap: 'm',
          width: 'full'
        }, {
          children: [jsx(Ramen.XCard, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: 'horizontal',
              verticalAlign: 'center',
              horizontalAlign: 'between',
              gap: 's'
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 12
              }, {
                children: t('checklist_task_feedback_status_label')
              })), jsx(Ramen.XTagState, {
                text: feedbackStatusLabel,
                state: feedbackStatus
              })]
            }))
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            horizontalAlign: 'between'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'medium',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: t('checklist_task_feedback_expandable_reviewed_by')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: (_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.feedback) === null || _a === void 0 ? void 0 : _a.user.name
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            horizontalAlign: 'between'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'medium',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: t('checklist_task_feedback_expandable_revision_date')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              weight: 'normal',
              lineHeight: 'copy',
              fontSize: 11
            }, {
              children: formatDate((_b = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.feedback) === null || _b === void 0 ? void 0 : _b.created_at)
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'vertical',
            verticalAlign: 'start',
            gap: 'xxs'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 11,
              weight: 'bold'
            }, {
              children: t('checklist_task_feedback_expandable_pic')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 12
            }, {
              children: t('checklist_task_feedback_expandable_pic_desc')
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            gap: 'l'
          }, {
            children: [jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl'
            }), jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl'
            })]
          })), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 11,
              weight: 'bold'
            }, {
              children: t('checklist_task_feedback_expandable_comments')
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'darkest',
              fontSize: 12,
              weight: 'lighter'
            }, {
              children: (_c = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.feedback) === null || _c === void 0 ? void 0 : _c.comment
            }))]
          })]
        }))
      }))
    })]
  }));
};

const ChecklistSummaryFlow = () => {
  const {
    path
  } = useRouteMatch();
  return jsx(ChecklistSummaryContextProvider, {
    children: jsxs(Switch, {
      children: [jsx(Route, {
        path: `${path}/:id`,
        exact: true,
        component: ChecklistSummary
      }), jsx(Route, {
        path: `${path}/:id/feedback`,
        component: ChecklistItemFeedback
      })]
    })
  });
};

const Flow = props => {
  const {
    path
  } = useRouteMatch();
  return jsx(ModuleContextProvider, Object.assign({
    params: props.params
  }, {
    children: jsx(ChecklistProvider, {
      children: jsxs(Switch, {
        children: [jsx(Route, {
          path: `${path}`,
          exact: true,
          component: ChecklistToolsFlow
        }), jsx(Route, {
          path: `${path}/task/:id`,
          component: ChecklistTaskFlow
        }), jsx(Route, {
          path: `${path}/summary`,
          component: ChecklistSummaryFlow
        })]
      })
    })
  }));
};
class Module extends SDK.Lib.BaseModule {
  constructor(params) {
    super(params);
    this.defaultPath = '/digital-checklist';
    this.Flow = () => jsx(Flow, {
      params: params
    });
    this.Summary = () => jsx(ChecklistSummary$1, {
      params: params
    });
    this.clients = getClients(params.country, params.baseUrl, params.tokenProvider);
  }
}

export { Module as default };
