import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useContext, createContext, useState, useEffect, memo, useReducer, useCallback, useRef, Fragment as Fragment$1, useMemo, Suspense, lazy } from 'react';
import { Route, useLocation, useHistory, Switch, Redirect, Link, BrowserRouter, useParams } from 'react-router-dom';
import Ramen from '@team_yumi/ramen-web';
import axios from 'axios';
import { Subject, filter } from 'rxjs';
import { get as get$2, isEmpty, uniq, flatten, debounce, map, reduce, filter as filter$1, groupBy } from 'lodash';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFormik } from 'formik';
import jwtDecode from 'jwt-decode';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var fails$y = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$x = fails$y;

var functionBindNative = !fails$x(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$p = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$p, call$p);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$p.apply(fn, arguments);
  };
};

var uncurryThis$y = functionUncurryThis;

var toString$f = uncurryThis$y({}.toString);
var stringSlice$a = uncurryThis$y(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$a(toString$f(it), 8, -1);
};

var uncurryThis$x = functionUncurryThis;
var fails$w = fails$y;
var classof$d = classofRaw$2;

var $Object$4 = Object;
var split$1 = uncurryThis$x(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$w(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$d(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$h = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$a = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$h("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$9 = requireObjectCoercible$a;

var toIndexedObject$6 = function (it) {
  return IndexedObject$3(requireObjectCoercible$9(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$v =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var shared$4 = {exports: {}};

var isPure = false;

var global$u = global$v;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$u, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$u[key] = value;
  } return value;
};

var global$t = global$v;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$t[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.30.2',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$8 = requireObjectCoercible$a;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$9 = function (argument) {
  return $Object$3(requireObjectCoercible$8(argument));
};

var uncurryThis$w = functionUncurryThis;
var toObject$8 = toObject$9;

var hasOwnProperty = uncurryThis$w({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$8(it), key);
};

var uncurryThis$v = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$e = uncurryThis$v(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$e(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$s = global$v;
var userAgent$6 = engineUserAgent;

var process$4 = global$s.process;
var Deno$1 = global$s.Deno;
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
if (!version && userAgent$6) {
  match = userAgent$6.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$6.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$v = fails$y;
var global$r = global$v;

var $String$6 = global$r.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$v(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$q = global$v;
var shared$3 = shared$4.exports;
var hasOwn$f = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$2 = global$q.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$2;

var wellKnownSymbol$n = function (name) {
  if (!hasOwn$f(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$f(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
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
var isCallable$q = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$p = isCallable$q;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$f = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$p(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$p(it);
};

var isObject$e = isObject$f;

var $String$5 = String;
var $TypeError$g = TypeError;

// `Assert: Type(argument) is Object`
var anObject$i = function (argument) {
  if (isObject$e(argument)) return argument;
  throw $TypeError$g($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$u = fails$y;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$u(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$h = descriptors;
var fails$t = fails$y;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$h && fails$t(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$p = global$v;
var isObject$d = isObject$f;

var document$3 = global$p.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$d(document$3) && isObject$d(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$g = descriptors;
var fails$s = fails$y;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$g && !fails$s(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$o = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$o.bind(call$o) : function () {
  return call$o.apply(call$o, arguments);
};

var global$o = global$v;
var isCallable$o = isCallable$q;

var aFunction = function (argument) {
  return isCallable$o(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$o[namespace]) : global$o[namespace] && global$o[namespace][method];
};

var uncurryThis$u = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$u({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$n = isCallable$q;
var isPrototypeOf$7 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$n($Symbol) && isPrototypeOf$7($Symbol.prototype, $Object$2(it));
};

var $String$4 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$m = isCallable$q;
var tryToString$5 = tryToString$6;

var $TypeError$f = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$b = function (argument) {
  if (isCallable$m(argument)) return argument;
  throw $TypeError$f(tryToString$5(argument) + ' is not a function');
};

var aCallable$a = aCallable$b;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$6 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$a(func);
};

var call$n = functionCall;
var isCallable$l = isCallable$q;
var isObject$c = isObject$f;

var $TypeError$e = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$l(fn = input.toString) && !isObject$c(val = call$n(fn, input))) return val;
  if (isCallable$l(fn = input.valueOf) && !isObject$c(val = call$n(fn, input))) return val;
  if (pref !== 'string' && isCallable$l(fn = input.toString) && !isObject$c(val = call$n(fn, input))) return val;
  throw $TypeError$e("Can't convert object to primitive value");
};

var call$m = functionCall;
var isObject$b = isObject$f;
var isSymbol$2 = isSymbol$3;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$m = wellKnownSymbol$n;

var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$m('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$b(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$m(exoticToPrim, input, pref);
    if (!isObject$b(result) || isSymbol$2(result)) return result;
    throw $TypeError$d("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$4 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var DESCRIPTORS$f = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$h = anObject$i;
var toPropertyKey$3 = toPropertyKey$4;

var $TypeError$c = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$f ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$h(O);
  P = toPropertyKey$3(P);
  anObject$h(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
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
  anObject$h(O);
  P = toPropertyKey$3(P);
  anObject$h(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$c('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil$1 = Math.ceil;
var floor$5 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$5 : ceil$1)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$9 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$8 = toIntegerOrInfinity$9;

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$8(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$7 = toIntegerOrInfinity$9;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$8 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$7(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$7 = toLength$8;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$9 = function (obj) {
  return toLength$7(obj.length);
};

var toIndexedObject$5 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$8 = lengthOfArrayLike$9;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$8(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
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
  includes: createMethod$5(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$5(false)
};

var hiddenKeys$4 = {};

var uncurryThis$t = functionUncurryThis;
var hasOwn$e = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$4 = uncurryThis$t([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$e(hiddenKeys$3, key) && hasOwn$e(O, key) && push$4(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$e(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$4(result, key);
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

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$e = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$5 = objectDefineProperty;
var anObject$g = anObject$i;
var toIndexedObject$3 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$e && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$g(O);
  var props = toIndexedObject$3(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$7;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys$2 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$2[key] || (keys$2[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$f = anObject$i;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

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
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$f(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$l = wellKnownSymbol$n;
var create$4 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$l('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$4(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$n = global$v;
var isCallable$k = isCallable$q;

var WeakMap$1 = global$n.WeakMap;

var weakMapBasicDetection = isCallable$k(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$6 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$d = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$6;

var createNonEnumerableProperty$9 = DESCRIPTORS$d ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$m = global$v;
var isObject$a = isObject$f;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
var hasOwn$d = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$m.TypeError;
var WeakMap = global$m.WeakMap;
var set$2, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$2(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$a(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store$1 = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$2 = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return store$1.get(it) || {};
  };
  has = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set$2 = function (it, metadata) {
    if (hasOwn$d(it, STATE)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$8(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$d(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$d(it, STATE);
  };
}

var internalState = {
  set: set$2,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

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

var DESCRIPTORS$c = descriptors;
var call$l = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$6;
var toIndexedObject$2 = toIndexedObject$6;
var toPropertyKey$2 = toPropertyKey$4;
var hasOwn$c = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$c ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$c(O, P)) return createPropertyDescriptor$4(!call$l(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$b = descriptors;
var hasOwn$b = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$b(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$b || (DESCRIPTORS$b && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$s = functionUncurryThis;
var isCallable$j = isCallable$q;
var store = sharedStore;

var functionToString = uncurryThis$s(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$j(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$r = functionUncurryThis;
var fails$r = fails$y;
var isCallable$i = isCallable$q;
var hasOwn$a = hasOwnProperty_1;
var DESCRIPTORS$a = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$6 = internalState;

var enforceInternalState$3 = InternalStateModule$6.enforce;
var getInternalState$4 = InternalStateModule$6.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$9 = uncurryThis$r(''.slice);
var replace$6 = uncurryThis$r(''.replace);
var join$1 = uncurryThis$r([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$a && !fails$r(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$9($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$6($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$a(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$a) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$a(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$a(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$a) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$3(value);
  if (!hasOwn$a(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$i(this) && getInternalState$4(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$h = isCallable$q;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$b = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$h(value)) makeBuiltIn$1(value, name, options);
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

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$4 = getBuiltIn$7;
var uncurryThis$q = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$e = anObject$i;

var concat$2 = uncurryThis$q([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$e(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$9 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$9(target, key) && !(exceptions && hasOwn$9(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$q = fails$y;
var isCallable$g = isCallable$q;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$g(detection) ? fails$q(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$l = global$v;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
var defineBuiltIn$a = defineBuiltIn$b;
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
    target = global$l;
  } else if (STATIC) {
    target = global$l[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$l[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
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
      createNonEnumerableProperty$7(sourceProperty, 'sham', true);
    }
    defineBuiltIn$a(target, key, sourceProperty, options);
  }
};

var fails$p = fails$y;

var correctPrototypeGetter = !fails$p(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$8 = hasOwnProperty_1;
var isCallable$f = isCallable$q;
var toObject$7 = toObject$9;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype$2 = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$7(O);
  if (hasOwn$8(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$f(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype$2 : null;
};

var fails$o = fails$y;
var isCallable$e = isCallable$q;
var isObject$9 = isObject$f;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltIn$9 = defineBuiltIn$b;
var wellKnownSymbol$k = wellKnownSymbol$n;

var ITERATOR$8 = wellKnownSymbol$k('iterator');
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
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$2) || fails$o(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$e(IteratorPrototype$2[ITERATOR$8])) {
  defineBuiltIn$9(IteratorPrototype$2, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$7 = hasOwnProperty_1;
var wellKnownSymbol$j = wellKnownSymbol$n;

var TO_STRING_TAG$4 = wellKnownSymbol$j('toStringTag');

var setToStringTag$5 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$7(target, TO_STRING_TAG$4)) {
    defineProperty$4(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$3 = objectCreate;
var createPropertyDescriptor$3 = createPropertyDescriptor$6;
var setToStringTag$4 = setToStringTag$5;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
  setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$p = functionUncurryThis;
var aCallable$9 = aCallable$b;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$p(aCallable$9(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$d = isCallable$q;

var $String$2 = String;
var $TypeError$b = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$d(argument)) return argument;
  throw $TypeError$b("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$d = anObject$i;
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
    anObject$d(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$k = _export;
var call$k = functionCall;
var FunctionName$1 = functionName;
var isCallable$c = isCallable$q;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$5 = objectSetPrototypeOf;
var setToStringTag$3 = setToStringTag$5;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
var defineBuiltIn$8 = defineBuiltIn$b;
var wellKnownSymbol$i = wellKnownSymbol$n;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$i('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$7]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$5) {
          setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$c(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$8(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$6(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$k(nativeIterator, this); };
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
        defineBuiltIn$8(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$k({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$8(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$5 = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$9 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$4 = InternalStateModule$5.set;
var getInternalState$3 = InternalStateModule$5.getterFor(ARRAY_ITERATOR);

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
  setInternalState$4(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$3(this);
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
if (DESCRIPTORS$9 && values.name !== 'values') try {
  defineProperty$3(values, 'name', { value: 'values' });
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

var global$k = global$v;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
var wellKnownSymbol$h = wellKnownSymbol$n;

var ITERATOR$6 = wellKnownSymbol$h('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol$h('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$5(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$3]) {
      createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$5(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$k[COLLECTION_NAME] && global$k[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$8 = descriptors;
var uncurryThis$o = functionUncurryThis;
var call$j = functionCall;
var fails$n = fails$y;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$6 = toObject$9;
var IndexedObject$2 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;
var concat$1 = uncurryThis$o([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$n(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$8 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$2(this, 'b', {
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
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$6(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$2(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$8 || call$j(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$j = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$j({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

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

var tryToString$4 = tryToString$6;

var $TypeError$a = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError$a('Cannot delete property ' + tryToString$4(P) + ' of ' + tryToString$4(O));
};

var wellKnownSymbol$g = wellKnownSymbol$n;

var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$b = isCallable$q;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$f = wellKnownSymbol$n;

var TO_STRING_TAG$1 = wellKnownSymbol$f('toStringTag');
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
var classof$c = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$b(O.callee) ? 'Arguments' : result;
};

var classof$b = classof$c;

var $String$1 = String;

var toString$d = function (argument) {
  if (classof$b(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$6;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$2(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$7 = lengthOfArrayLike$9;
var createProperty = createProperty$1;

var $Array$2 = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$7(O);
  var k = toAbsoluteIndex$2(start, length);
  var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
  var result = $Array$2(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice$4 = arraySliceSimple;

var floor$4 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$4(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$4(array, 0, middle), comparefn),
    mergeSort(arraySlice$4(array, middle), comparefn),
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

var fails$m = fails$y;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$m(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$5 = engineUserAgent;

var firefox = userAgent$5.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent$4 = engineUserAgent;

var webkit = userAgent$4.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$i = _export;
var uncurryThis$n = functionUncurryThis;
var aCallable$8 = aCallable$b;
var toObject$5 = toObject$9;
var lengthOfArrayLike$6 = lengthOfArrayLike$9;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$c = toString$d;
var fails$l = fails$y;
var internalSort$1 = arraySort$1;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var FF$1 = engineFfVersion;
var IE_OR_EDGE$1 = engineIsIeOrEdge;
var V8$1 = engineV8Version;
var WEBKIT$1 = engineWebkitVersion;

var test = [];
var nativeSort$1 = uncurryThis$n(test.sort);
var push$3 = uncurryThis$n(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$l(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$l(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict$1('sort');

var STABLE_SORT$1 = !fails$l(function () {
  // feature detection can be too slow, so check engines versions
  if (V8$1) return V8$1 < 70;
  if (FF$1 && FF$1 > 3) return;
  if (IE_OR_EDGE$1) return true;
  if (WEBKIT$1) return WEBKIT$1 < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

var getSortCompare$1 = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$c(x) > toString$c(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$i({ target: 'Array', proto: true, forced: FORCED$4 }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$8(comparefn);

    var array = toObject$5(this);

    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$6(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$3(items, array[index]);
    }

    internalSort$1(items, getSortCompare$1(comparefn));

    itemsLength = lengthOfArrayLike$6(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var anObject$c = anObject$i;

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

var fails$k = fails$y;
var global$j = global$v;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$j.RegExp;

var UNSUPPORTED_Y$2 = fails$k(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$k(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$k(function () {
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

var fails$j = fails$y;
var global$i = global$v;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$i.RegExp;

var regexpUnsupportedDotAll = fails$j(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$i = fails$y;
var global$h = global$v;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$h.RegExp;

var regexpUnsupportedNcg = fails$i(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$i = functionCall;
var uncurryThis$m = functionUncurryThis;
var toString$b = toString$d;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create$2 = objectCreate;
var getInternalState$2 = internalState.get;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$5 = uncurryThis$m(''.charAt);
var indexOf = uncurryThis$m(''.indexOf);
var replace$5 = uncurryThis$m(''.replace);
var stringSlice$8 = uncurryThis$m(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$i(nativeExec, re1, 'a');
  call$i(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$2(re);
    var str = toString$b(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$i(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$i(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$5(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$8(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$5(str, re.lastIndex - 1) !== '\n')) {
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

    match = call$i(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$8(match.input, charsAdded);
        match[0] = stringSlice$8(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$i(nativeReplace, match[0], reCopy, function () {
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

var $$h = _export;
var exec$3 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$h({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
  exec: exec$3
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$3 = FunctionPrototype.apply;
var call$h = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$h.bind(apply$3) : function () {
  return call$h.apply(apply$3, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$l = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$l(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$k = functionUncurryThisClause;
var defineBuiltIn$7 = defineBuiltIn$b;
var regexpExec$1 = regexpExec$2;
var fails$h = fails$y;
var wellKnownSymbol$e = wellKnownSymbol$n;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;

var SPECIES$4 = wellKnownSymbol$e('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$e(KEY);

  var DELEGATES_TO_SYMBOL = !fails$h(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$h(function () {
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
      re.constructor[SPECIES$4] = function () { return re; };
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
    var uncurriedNativeRegExpMethod = uncurryThis$k(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$k(nativeMethod);
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

    defineBuiltIn$7(String.prototype, KEY, methods[0]);
    defineBuiltIn$7(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$4(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$j = functionUncurryThis;
var toIntegerOrInfinity$6 = toIntegerOrInfinity$9;
var toString$a = toString$d;
var requireObjectCoercible$7 = requireObjectCoercible$a;

var charAt$4 = uncurryThis$j(''.charAt);
var charCodeAt = uncurryThis$j(''.charCodeAt);
var stringSlice$7 = uncurryThis$j(''.slice);

var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$a(requireObjectCoercible$7($this));
    var position = toIntegerOrInfinity$6(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$4(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$7(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$4(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$4(true)
};

var charAt$3 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$3(S, index).length : 1);
};

var uncurryThis$i = functionUncurryThis;
var toObject$4 = toObject$9;

var floor$3 = Math.floor;
var charAt$2 = uncurryThis$i(''.charAt);
var replace$4 = uncurryThis$i(''.replace);
var stringSlice$6 = uncurryThis$i(''.slice);
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
    namedCaptures = toObject$4(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$4(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$2(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$6(str, 0, position);
      case "'": return stringSlice$6(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$6(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$3(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$2(ch, 1) : captures[f - 1] + charAt$2(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$g = functionCall;
var anObject$b = anObject$i;
var isCallable$a = isCallable$q;
var classof$a = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$9 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$a(exec)) {
    var result = call$g(exec, R, S);
    if (result !== null) anObject$b(result);
    return result;
  }
  if (classof$a(R) === 'RegExp') return call$g(regexpExec, R, S);
  throw $TypeError$9('RegExp#exec called on incompatible receiver');
};

var apply$2 = functionApply;
var call$f = functionCall;
var uncurryThis$h = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var fails$g = fails$y;
var anObject$a = anObject$i;
var isCallable$9 = isCallable$q;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$9;
var toLength$6 = toLength$8;
var toString$9 = toString$d;
var requireObjectCoercible$6 = requireObjectCoercible$a;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$4 = getMethod$6;
var getSubstitution = getSubstitution$1;
var regExpExec$2 = regexpExecAbstract;
var wellKnownSymbol$d = wellKnownSymbol$n;

var REPLACE = wellKnownSymbol$d('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$h([].concat);
var push$2 = uncurryThis$h([].push);
var stringIndexOf$2 = uncurryThis$h(''.indexOf);
var stringSlice$5 = uncurryThis$h(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$g(function () {
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
fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$6(this);
      var replacer = isNullOrUndefined$4(searchValue) ? undefined : getMethod$4(searchValue, REPLACE);
      return replacer
        ? call$f(replacer, searchValue, O, replaceValue)
        : call$f(nativeReplace, toString$9(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$a(this);
      var S = toString$9(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$2(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$9(replaceValue);
      if (!functionalReplace) replaceValue = toString$9(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$2(rx, S);
        if (result === null) break;

        push$2(results, result);
        if (!global) break;

        var matchStr = toString$9(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$6(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$9(result[0]);
        var position = max(min(toIntegerOrInfinity$5(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$2(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$2(replacerArgs, namedCaptures);
          var replacement = toString$9(apply$2(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$5(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$5(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var classof$9 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$9(process) == 'process';

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$6 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor$5 = defineBuiltInAccessor$6;
var wellKnownSymbol$c = wellKnownSymbol$n;
var DESCRIPTORS$7 = descriptors;

var SPECIES$3 = wellKnownSymbol$c('species');

var setSpecies$3 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$7 && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor$5(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$6 = objectIsPrototypeOf;

var $TypeError$8 = TypeError;

var anInstance$4 = function (it, Prototype) {
  if (isPrototypeOf$6(Prototype, it)) return it;
  throw $TypeError$8('Incorrect invocation');
};

var uncurryThis$g = functionUncurryThis;
var fails$f = fails$y;
var isCallable$8 = isCallable$q;
var classof$8 = classof$c;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$g(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  switch (classof$8(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$2 = !construct || fails$f(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$1 = isConstructor$2;
var tryToString$3 = tryToString$6;

var $TypeError$7 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw $TypeError$7(tryToString$3(argument) + ' is not a constructor');
};

var anObject$9 = anObject$i;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var wellKnownSymbol$b = wellKnownSymbol$n;

var SPECIES$2 = wellKnownSymbol$b('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$9(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$9(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
};

var uncurryThis$f = functionUncurryThisClause;
var aCallable$7 = aCallable$b;
var NATIVE_BIND = functionBindNative;

var bind$7 = uncurryThis$f(uncurryThis$f.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$7(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$7(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$e = functionUncurryThis;

var arraySlice$3 = uncurryThis$e([].slice);

var $TypeError$6 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$6('Not enough arguments');
  return passed;
};

var userAgent$3 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$3);

var global$g = global$v;
var apply$1 = functionApply;
var bind$6 = functionBindContext;
var isCallable$7 = isCallable$q;
var hasOwn$6 = hasOwnProperty_1;
var fails$e = fails$y;
var html = html$2;
var arraySlice$2 = arraySlice$3;
var createElement = documentCreateElement$2;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set$1 = global$g.setImmediate;
var clear = global$g.clearImmediate;
var process$3 = global$g.process;
var Dispatch = global$g.Dispatch;
var Function$1 = global$g.Function;
var MessageChannel = global$g.MessageChannel;
var String$1 = global$g.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$e(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$g.location;
});

var run = function (id) {
  if (hasOwn$6(queue$2, id)) {
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
  global$g.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(handler) {
    validateArgumentsLength$1(arguments.length, 1);
    var fn = isCallable$7(handler) ? handler : Function$1(handler);
    var args = arraySlice$2(arguments, 1);
    queue$2[++counter] = function () {
      apply$1(fn, undefined, args);
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
    global$g.addEventListener &&
    isCallable$7(global$g.postMessage) &&
    !global$g.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$e(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$g.addEventListener('message', eventListener, false);
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
  set: set$1,
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

var userAgent$2 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$2) && typeof Pebble != 'undefined';

var userAgent$1 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

var global$f = global$v;
var bind$5 = functionBindContext;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$f.MutationObserver || global$f.WebKitMutationObserver;
var document$2 = global$f.document;
var process$2 = global$f.process;
var Promise$1 = global$f.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$f, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$2, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$2.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$2();
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
    notify$2 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$5(promise.then, promise);
    notify$2 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$2 = function () {
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
    macrotask = bind$5(macrotask, global$f);
    notify$2 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$2();
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

var global$e = global$v;

var promiseNativeConstructor = global$e.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
  && typeof window == 'object'
  && typeof document == 'object';

var global$d = global$v;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$6 = isCallable$q;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$a = wellKnownSymbol$n;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$a('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$6(global$d.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
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
    constructor[SPECIES$1] = FakePromise;
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

var aCallable$6 = aCallable$b;

var $TypeError$5 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$5('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$6(resolve);
  this.reject = aCallable$6(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$g = _export;
var IS_NODE$1 = engineIsNode;
var global$c = global$v;
var call$e = functionCall;
var defineBuiltIn$6 = defineBuiltIn$b;
var setPrototypeOf$4 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$5;
var setSpecies$2 = setSpecies$3;
var aCallable$5 = aCallable$b;
var isCallable$5 = isCallable$q;
var isObject$8 = isObject$f;
var anInstance$3 = anInstance$4;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule$4 = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
var setInternalState$3 = InternalStateModule$4.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$3 = global$c.TypeError;
var document$1 = global$c.document;
var process$1 = global$c.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$c.dispatchEvent);
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
  return isObject$8(it) && isCallable$5(then = it.then) ? then : false;
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
        reject(TypeError$3('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$e(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify$1 = function (state, isReject) {
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
    global$c.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$c['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$e(task, global$c, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE$1) {
          process$1.emit('unhandledRejection', value, promise);
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
  call$e(task, global$c, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
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
  notify$1(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$e(then, value,
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
      notify$1(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$3(this, PromisePrototype);
    aCallable$5(executor);
    call$e(Internal, this);
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
    setInternalState$3(this, {
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
  Internal.prototype = defineBuiltIn$6(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$5(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$5(onRejected) && onRejected;
    reaction.domain = IS_NODE$1 ? process$1.domain : undefined;
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

  if (isCallable$5(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$6(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$e(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$4) {
      setPrototypeOf$4(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$g({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag$2(PromiseConstructor, PROMISE, false);
setSpecies$2(PROMISE);

var wellKnownSymbol$9 = wellKnownSymbol$n;
var Iterators$1 = iterators;

var ITERATOR$5 = wellKnownSymbol$9('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$2 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$5] === it);
};

var classof$7 = classof$c;
var getMethod$3 = getMethod$6;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var Iterators = iterators;
var wellKnownSymbol$8 = wellKnownSymbol$n;

var ITERATOR$4 = wellKnownSymbol$8('iterator');

var getIteratorMethod$4 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$3(it, ITERATOR$4)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$7(it)];
};

var call$d = functionCall;
var aCallable$4 = aCallable$b;
var anObject$8 = anObject$i;
var tryToString$2 = tryToString$6;
var getIteratorMethod$3 = getIteratorMethod$4;

var $TypeError$4 = TypeError;

var getIterator$3 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
  if (aCallable$4(iteratorMethod)) return anObject$8(call$d(iteratorMethod, argument));
  throw $TypeError$4(tryToString$2(argument) + ' is not iterable');
};

var call$c = functionCall;
var anObject$7 = anObject$i;
var getMethod$2 = getMethod$6;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$c(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$7(innerResult);
  return value;
};

var bind$3 = functionBindContext;
var call$b = functionCall;
var anObject$6 = anObject$i;
var tryToString$1 = tryToString$6;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$5 = lengthOfArrayLike$9;
var isPrototypeOf$5 = objectIsPrototypeOf;
var getIterator$2 = getIterator$3;
var getIteratorMethod$2 = getIteratorMethod$4;
var iteratorClose = iteratorClose$1;

var $TypeError$3 = TypeError;

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
      anObject$6(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$2(iterable);
    if (!iterFn) throw $TypeError$3(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$5(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$5(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$2(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$b(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$5(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$7 = wellKnownSymbol$n;

var ITERATOR$3 = wellKnownSymbol$7('iterator');
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
  iteratorWithReturn[ITERATOR$3] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$3] = function () {
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
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$f = _export;
var call$a = functionCall;
var aCallable$3 = aCallable$b;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$f({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$3(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$a($promiseResolve, C, promise).then(function (value) {
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

var $$e = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$4 = isCallable$q;
var defineBuiltIn$5 = defineBuiltIn$b;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$e({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$4(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$5(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$d = _export;
var call$9 = functionCall;
var aCallable$2 = aCallable$b;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$d({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate(iterable, function (promise) {
        call$9($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$c = _export;
var call$8 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$c({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$8(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$5 = anObject$i;
var isObject$7 = isObject$f;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$5(C);
  if (isObject$7(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$b = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$b({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

const stateCollection = new Map();
const subscribers = new Map();
const initModule = (module, state) => {
  !stateCollection.has(module) && stateCollection.set(module, state);
};
const watcher = (module, fn) => {
  if (subscribers.has(module)) {
    const set = subscribers.get(module);
    !set.has(fn) && set.add(fn);
    subscribers.set(module, set);
  } else {
    subscribers.set(module, new Set([fn]));
  }
  return {
    module,
    fn
  };
};
const notify = (module, newValue, oldValue) => {
  if (subscribers.has(module)) {
    const set = subscribers.get(module);
    set.forEach(fn => fn(newValue, oldValue));
  }
};
const getValue = module => {
  return stateCollection.get(module);
};
const setValue = (module, value) => {
  const oldValue = getValue(module);
  stateCollection.set(module, value);
  notify(module, value, oldValue);
};
const observe = (module, value) => {
  initModule(module, value);
  return (...args) => {
    switch (args.length) {
      case 0:
        return getValue(module);
      case 1:
        return setValue(module, args[0]);
      default:
        throw new Error("Expected 0 or 1 arguments");
    }
  };
};

const MODULES = {
  NETWORK_MODULE: 'network_module'
};
//module : state
const networkModule = observe(MODULES.NETWORK_MODULE, null);

class BaseRest {
  constructor(config) {
    this.accessTokenKey = '__access_token__';
    this.languageKey = 'i18nextLng';
    this.onRequestSuccess = config => {
      const token = this.getToken();
      const lan = this.getLanguage();
      if (token) {
        config.headers = Object.assign(Object.assign({
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }, config.headers), this.defaultHeaders);
        if (lan && !config.headers['Accept-Language']) {
          config.headers['Accept-Language'] = lan;
        }
      }
      config.timeout = this.timeout || 1000000;
      config.url = `${this.baseUrl.replace(/\/$/, '')}${config.url}`;
      return config;
    };
    this.handleError = error => {
      this.listener.next(error);
      networkModule(error);
      return Promise.reject({
        status: error.response && error.response.status,
        response: error.response || error
      });
    };
    const {
      baseURL,
      token,
      languageKey,
      timeout,
      accessTokenKey
    } = config;
    const API_URL = baseURL || 'http://localhost:8080';
    this.accessTokenKey = accessTokenKey || '__access_token__';
    this.languageKey = languageKey || 'i18nextLng';
    let service = axios.create({
      baseURL: API_URL
    });
    this.token = token;
    this.timeout = timeout;
    this.defaultHeaders = {};
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(this.onRequestSuccess);
    Object.assign(this, service);
    this.baseUrl = API_URL;
    this.axios = service;
    this.listener = new Subject();
  }
  pushDefaultHeader(key, value) {
    this.defaultHeaders[key] = value;
  }
  removeDefaultHeader(key) {
    delete this.defaultHeaders[key];
  }
  onError(callback, statusCode) {
    this.listener.pipe(filter(error => !statusCode || error.response && error.response.status === statusCode)).subscribe(callback);
  }
  handleSuccess(response) {
    return response;
  }
  getToken() {
    return localStorage.getItem(this.accessTokenKey) || sessionStorage.getItem(this.accessTokenKey) || this.token;
  }
  getLanguage() {
    const lang = localStorage.getItem(this.languageKey) || sessionStorage.getItem(this.languageKey);
    if (lang) return lang.split('-')[0];
    return 'es';
  }
  removeToken(remember) {
    return (remember ? localStorage : sessionStorage).removeItem(this.accessTokenKey);
  }
  setToken(token, remember = true) {
    return (remember ? localStorage : sessionStorage).setItem(this.accessTokenKey, token);
  }
}

class CategoriesApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * list Categories using params
   * @param params
   * @returns {Promise<IArrayRestResponse<Reason.IReason>> | AxiosError }
   * @memberof ReasonClient
   */
  list(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get('/categories', {
          params
        });
        return {
          data,
          offset: 0,
          limit: 10,
          total: data === null || data === void 0 ? void 0 : data.length
        };
      } catch (error) {
        throw error;
      }
    });
  }
}

class ProductsApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
  * Get product by filter
  * @param params
  * @returns {Promise<Product.IProduct> | error }
  * @memberof ProductClient
  */
  getProducts(filter) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post('/products', filter);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  createProduct(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        console.log('params', params);
        const {
          data
        } = yield this.axios.post('/cart-request', params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
}

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var defineBuiltIn$4 = defineBuiltIn$b;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) defineBuiltIn$4(target, key, src[key], options);
  return target;
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$9;
var toLength$5 = toLength$8;

var $RangeError$4 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$2 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$4(it);
  var length = toLength$5(number);
  if (number !== length) throw $RangeError$4('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$1 = Array;
var abs = Math.abs;
var pow$1 = Math.pow;
var floor$2 = Math.floor;
var log$1 = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array$1(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow$1(2, -24) - pow$1(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$2(log$1(number) / LN2);
    c = pow$1(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow$1(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow$1(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow$1(2, eBias - 1) * pow$1(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow$1(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow$1(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var toObject$3 = toObject$9;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$4 = lengthOfArrayLike$9;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$3(this);
  var length = lengthOfArrayLike$4(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var global$b = global$v;
var uncurryThis$d = functionUncurryThis;
var DESCRIPTORS$6 = descriptors;
var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$6;
var defineBuiltIns$1 = defineBuiltIns$2;
var fails$d = fails$y;
var anInstance$2 = anInstance$4;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$9;
var toLength$4 = toLength$8;
var toIndex$1 = toIndex$2;
var IEEE754 = ieee754;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf;
var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
var arrayFill = arrayFill$1;
var arraySlice$1 = arraySliceSimple;
var setToStringTag$1 = setToStringTag$5;
var InternalStateModule$3 = internalState;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$3.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule$3.getterFor(DATA_VIEW);
var setInternalState$2 = InternalStateModule$3.set;
var NativeArrayBuffer = global$b[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$b[DATA_VIEW];
var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$1 = Object.prototype;
var Array$1 = global$b.Array;
var RangeError$3 = global$b.RangeError;
var fill = uncurryThis$d(arrayFill);
var reverse = uncurryThis$d([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter$1 = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor$4(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex$1(index);
  var store = getInternalDataViewState(view);
  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice$1(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex$1(index);
  var store = getInternalDataViewState(view);
  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER$1) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance$2(this, ArrayBufferPrototype$1);
    var byteLength = toIndex$1(length);
    setInternalState$2(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$6) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$2(this, DataViewPrototype$1);
    anInstance$2(buffer, ArrayBufferPrototype$1);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$3(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$4(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
    setInternalState$2(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$6) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$1 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$6) {
    addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter$1($DataView, 'buffer', getInternalDataViewState);
    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns$1(DataViewPrototype$1, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$2 && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails$d(function () {
    NativeArrayBuffer(1);
  }) || !fails$d(function () {
    new NativeArrayBuffer(-1);
  }) || fails$d(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$2(this, ArrayBufferPrototype$1);
      return new NativeArrayBuffer(toIndex$1(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

    for (var keys$1 = getOwnPropertyNames$2(NativeArrayBuffer), j = 0, key; keys$1.length > j;) {
      if (!((key = keys$1[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty$3($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype$1.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$3(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$3 && getPrototypeOf$1(DataViewPrototype$1) !== ObjectPrototype$1) {
    setPrototypeOf$3(DataViewPrototype$1, ObjectPrototype$1);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis$d(DataViewPrototype$1.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$1(DataViewPrototype$1, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag$1($ArrayBuffer, ARRAY_BUFFER);
setToStringTag$1($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var $$a = _export;
var uncurryThis$c = functionUncurryThisClause;
var fails$c = fails$y;
var ArrayBufferModule$1 = arrayBuffer;
var anObject$4 = anObject$i;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toLength$3 = toLength$8;
var speciesConstructor = speciesConstructor$2;

var ArrayBuffer$3 = ArrayBufferModule$1.ArrayBuffer;
var DataView$2 = ArrayBufferModule$1.DataView;
var DataViewPrototype = DataView$2.prototype;
var nativeArrayBufferSlice = uncurryThis$c(ArrayBuffer$3.prototype.slice);
var getUint8 = uncurryThis$c(DataViewPrototype.getUint8);
var setUint8 = uncurryThis$c(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails$c(function () {
  return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$a({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject$4(this), start); // FF fix
    }
    var length = anObject$4(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer$3))(toLength$3(fin - first));
    var viewSource = new DataView$2(this);
    var viewTarget = new DataView$2(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});

var typedArrayConstructor = {exports: {}};

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$5 = descriptors;
var global$a = global$v;
var isCallable$3 = isCallable$q;
var isObject$6 = isObject$f;
var hasOwn$5 = hasOwnProperty_1;
var classof$6 = classof$c;
var tryToString = tryToString$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
var defineBuiltIn$3 = defineBuiltIn$b;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$6;
var isPrototypeOf$4 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var wellKnownSymbol$6 = wellKnownSymbol$n;
var uid = uid$3;
var InternalStateModule$2 = internalState;

var enforceInternalState$2 = InternalStateModule$2.enforce;
var getInternalState$1 = InternalStateModule$2.get;
var Int8Array$4 = global$a.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
var Uint8ClampedArray$1 = global$a.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype = Object.prototype;
var TypeError$2 = global$a.TypeError;

var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$2 && classof$6(global$a.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject$6(it)) return false;
  var klass = classof$6(it);
  return klass === 'DataView'
    || hasOwn$5(TypedArrayConstructorsList, klass)
    || hasOwn$5(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$6(proto)) return;
  var state = getInternalState$1(proto);
  return (state && hasOwn$5(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$6(it)) return false;
  var klass = classof$6(it);
  return hasOwn$5(TypedArrayConstructorsList, klass)
    || hasOwn$5(BigIntArrayConstructorsList, klass);
};

var aTypedArray$4 = function (it) {
  if (isTypedArray$1(it)) return it;
  throw TypeError$2('Target is not a typed array');
};

var aTypedArrayConstructor$2 = function (C) {
  if (isCallable$3(C) && (!setPrototypeOf$2 || isPrototypeOf$4(TypedArray$1, C))) return C;
  throw TypeError$2(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$4 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$5) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$a[ARRAY];
    if (TypedArrayConstructor && hasOwn$5(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$1[KEY] || forced) {
    defineBuiltIn$3(TypedArrayPrototype$1, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$5) return;
  if (setPrototypeOf$2) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$a[ARRAY];
      if (TypedArrayConstructor && hasOwn$5(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$3(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$a[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$3(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$a[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$2(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$a[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$2(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$3(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw TypeError$2('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$a[NAME]) setPrototypeOf$2(global$a[NAME], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype) {
  TypedArrayPrototype$1 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$a[NAME]) setPrototypeOf$2(global$a[NAME].prototype, TypedArrayPrototype$1);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
  setPrototypeOf$2(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
}

if (DESCRIPTORS$5 && !hasOwn$5(TypedArrayPrototype$1, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$3(TypedArrayPrototype$1, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$6(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global$a[NAME]) {
    createNonEnumerableProperty$2(global$a[NAME], TYPED_ARRAY_TAG$1, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
  aTypedArray: aTypedArray$4,
  aTypedArrayConstructor: aTypedArrayConstructor$2,
  exportTypedArrayMethod: exportTypedArrayMethod$4,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray$1,
  TypedArray: TypedArray$1,
  TypedArrayPrototype: TypedArrayPrototype$1
};

/* eslint-disable no-new -- required for testing */

var global$9 = global$v;
var fails$b = fails$y;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = global$9.ArrayBuffer;
var Int8Array$3 = global$9.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$b(function () {
  Int8Array$3(1);
}) || !fails$b(function () {
  new Int8Array$3(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$3();
  new Int8Array$3(null);
  new Int8Array$3(1.5);
  new Int8Array$3(iterable);
}, true) || fails$b(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var isObject$5 = isObject$f;

var floor$1 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$5(it) && isFinite(it) && floor$1(it) === it;
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$9;

var $RangeError$3 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$2(it);
  if (result < 0) throw $RangeError$3("The argument can't be less than 0");
  return result;
};

var toPositiveInteger = toPositiveInteger$1;

var $RangeError$2 = RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError$2('Wrong offset');
  return offset;
};

var classof$5 = classof$c;

var isBigIntArray$1 = function (it) {
  var klass = classof$5(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$2 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$2 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError$2("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$2 = functionBindContext;
var call$7 = functionCall;
var aConstructor = aConstructor$2;
var toObject$2 = toObject$9;
var lengthOfArrayLike$3 = lengthOfArrayLike$9;
var getIterator$1 = getIterator$3;
var getIteratorMethod$1 = getIteratorMethod$4;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isBigIntArray = isBigIntArray$1;
var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$1 = toBigInt$2;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$2(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$1(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$7(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$2(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$3(O);
  result = new (aTypedArrayConstructor$1(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt$1(value) : +value;
  }
  return result;
};

var classof$4 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$4(argument) == 'Array';
};

var isArray = isArray$1;
var isConstructor = isConstructor$2;
var isObject$4 = isObject$f;
var wellKnownSymbol$5 = wellKnownSymbol$n;

var SPECIES = wellKnownSymbol$5('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject$4(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$1 = functionBindContext;
var uncurryThis$b = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$1 = toObject$9;
var lengthOfArrayLike$2 = lengthOfArrayLike$9;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push$1 = uncurryThis$b([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = IndexedObject$1(O);
    var boundFunction = bind$1(callbackfn, that);
    var length = lengthOfArrayLike$2(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$3(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$3(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$3(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$3(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$3(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$3(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$3(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$3(7)
};

var isCallable$2 = isCallable$q;
var isObject$3 = isObject$f;
var setPrototypeOf$1 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$3(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var $$9 = _export;
var global$8 = global$v;
var call$6 = functionCall;
var DESCRIPTORS$4 = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$4 = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$1 = anInstance$4;
var createPropertyDescriptor$1 = createPropertyDescriptor$6;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
var isIntegralNumber = isIntegralNumber$1;
var toLength$2 = toLength$8;
var toIndex = toIndex$2;
var toOffset$1 = toOffset$2;
var toPropertyKey = toPropertyKey$4;
var hasOwn$4 = hasOwnProperty_1;
var classof$3 = classof$c;
var isObject$2 = isObject$f;
var isSymbol = isSymbol$3;
var create$1 = objectCreate;
var isPrototypeOf$3 = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies$1 = setSpecies$3;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$6;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var InternalStateModule$1 = internalState;
var inheritIfRequired$1 = inheritIfRequired$2;

var getInternalState = InternalStateModule$1.get;
var setInternalState$1 = InternalStateModule$1.set;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError$2 = global$8.RangeError;
var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataView$1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$4.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore$4.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore$4.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore$4.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore$4.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore$4.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  defineBuiltInAccessor$2(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf$3(ArrayBufferPrototype, it) || (klass = classof$3(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor$1(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$2(descriptor)
    && hasOwn$4(descriptor, 'value')
    && !hasOwn$4(descriptor, 'get')
    && !hasOwn$4(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$4(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$4(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$4) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $$9({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global$8[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance$1(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$2(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer$1(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset$1(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError$2(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError$2(WRONG_LENGTH);
          } else {
            byteLength = toLength$2($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call$6(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState$1(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView$1(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$1(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance$1(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired$1(function () {
          if (!isObject$2(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call$6(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames$1(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState$1(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$9({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies$1(CONSTRUCTOR_NAME);
  };
} else typedArrayConstructor.exports = function () { /* empty */ };

var createTypedArrayConstructor = typedArrayConstructor.exports;

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var ArrayBufferViewCore$3 = arrayBufferViewCore;
var $fill = arrayFill$1;
var toBigInt = toBigInt$2;
var classof$2 = classof$c;
var call$5 = functionCall;
var uncurryThis$a = functionUncurryThis;
var fails$a = fails$y;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var slice = uncurryThis$a(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails$a(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod$3('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray$3(this);
  var actualValue = slice(classof$2(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call$5($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var global$7 = global$v;
var call$4 = functionCall;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var lengthOfArrayLike$1 = lengthOfArrayLike$9;
var toOffset = toOffset$2;
var toIndexedObject = toObject$9;
var fails$9 = fails$y;

var RangeError$1 = global$7.RangeError;
var Int8Array$2 = global$7.Int8Array;
var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$9(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$4($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$2.NATIVE_ARRAY_BUFFER_VIEWS && fails$9(function () {
  var array = new Int8Array$2(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod$2('set', function set(arrayLike /* , offset */) {
  aTypedArray$2(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$4($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$1(src);
  var index = 0;
  if (len + offset > length) throw RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var global$6 = global$v;
var uncurryThis$9 = functionUncurryThisClause;
var fails$8 = fails$y;
var aCallable$1 = aCallable$b;
var internalSort = arraySort$1;
var ArrayBufferViewCore$1 = arrayBufferViewCore;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var Uint16Array = global$6.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$9(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$8(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails$8(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails$8(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod$1('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable$1(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray$1(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

var global$5 = global$v;
var apply = functionApply;
var ArrayBufferViewCore = arrayBufferViewCore;
var fails$7 = fails$y;
var arraySlice = arraySlice$3;

var Int8Array$1 = global$5.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$7(function () {
  $toLocaleString.call(new Int8Array$1(1));
});

var FORCED$3 = fails$7(function () {
  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
}) || !fails$7(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED$3);

var call$3 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$3 = anObject$i;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var toLength$1 = toLength$8;
var toString$8 = toString$d;
var requireObjectCoercible$5 = requireObjectCoercible$a;
var getMethod$1 = getMethod$6;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$5(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$8(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$3(this);
      var S = toString$8(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$8(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

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
    return routes.map(({
      path,
      exact: _exact = true,
      page: PageComponent
    }) => {
      const absolutePath = [match.url, path].join('');
      return jsx(Route, {
        path: absolutePath,
        exact: _exact,
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
    });
  }
}

var $$8 = _export;
var $includes = arrayIncludes.includes;
var fails$6 = fails$y;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$6(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$8({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject$1 = isObject$f;
var classof$1 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$n;

var MATCH$2 = wellKnownSymbol$4('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var isRegExp$1 = isRegexp;

var $TypeError$1 = TypeError;

var notARegexp = function (it) {
  if (isRegExp$1(it)) {
    throw $TypeError$1("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$3 = wellKnownSymbol$n;

var MATCH$1 = wellKnownSymbol$3('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$7 = _export;
var uncurryThis$8 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$4 = requireObjectCoercible$a;
var toString$7 = toString$d;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$8(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$7({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$7(requireObjectCoercible$4(this)),
      toString$7(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$7 = functionUncurryThis;
var requireObjectCoercible$3 = requireObjectCoercible$a;
var toString$6 = toString$d;
var whitespaces$2 = whitespaces$3;

var replace$3 = uncurryThis$7(''.replace);
var ltrim = RegExp('^[' + whitespaces$2 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = toString$6(requireObjectCoercible$3($this));
    if (TYPE & 1) string = replace$3(string, ltrim, '');
    if (TYPE & 2) string = replace$3(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$2(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$2(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$2(3)
};

var global$4 = global$v;
var fails$5 = fails$y;
var uncurryThis$6 = functionUncurryThis;
var toString$5 = toString$d;
var trim = stringTrim.trim;
var whitespaces$1 = whitespaces$3;

var $parseInt$1 = global$4.parseInt;
var Symbol$1 = global$4.Symbol;
var ITERATOR$2 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$1 = uncurryThis$6(hex.exec);
var FORCED$2 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$2 && !fails$5(function () { $parseInt$1(Object(ITERATOR$2)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
  var S = trim(toString$5(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$6 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$6({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

class DniFormatter {
  toRut(rut) {
    if (!rut) {
      return rut;
    }
    let result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1);
    for (let i = 4; i < rut.length; i += 3) {
      result = rut.slice(-3 - i, -i) + '.' + result;
    }
    return result;
  }
  toRutWithoutDots(rut) {
    if (!rut) {
      return rut;
    }
    let result = rut.slice(0, -1) + (!rut.includes('-') ? '-' : '') + rut.substr(rut.length - 1);
    return result;
  }
  isRutValid(rut) {
    if (typeof rut !== 'string') {
      return false;
    }
    if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
      return false;
    }
    let t = parseInt(rut.slice(0, -1), 10);
    let m = 0;
    let s = 1;
    while (t > 0) {
      s = (s + t % 10 * (9 - m++ % 6)) % 11;
      t = Math.floor(t / 10);
    }
    const v = s > 0 ? '' + (s - 1) : 'K';
    return v === rut.slice(-1);
  }
  isEnterpriseRutValid(rut) {
    if (typeof rut !== 'string') {
      return false;
    }
    if (!/^0*(\d{1,3}(\.?\d{3})*)-([\dkK])$/.test(rut)) {
      return false;
    }
    let t = parseInt(rut.slice(0, -1), 10);
    let m = 0;
    let s = 1;
    while (t > 0) {
      s = (s + t % 10 * (9 - m++ % 6)) % 11;
      t = Math.floor(t / 10);
    }
    const v = s > 0 ? '' + (s - 1) : 'K';
    return v === rut.slice(-1);
  }
}
var DniFormatter$1 = new DniFormatter();

var uncurryThis$5 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$5(1.0.valueOf);

var toIntegerOrInfinity$1 = toIntegerOrInfinity$9;
var toString$4 = toString$d;
var requireObjectCoercible$2 = requireObjectCoercible$a;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$4(requireObjectCoercible$2(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$5 = _export;
var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$9;
var thisNumberValue = thisNumberValue$1;
var $repeat$1 = stringRepeat;
var fails$4 = fails$y;

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat$1 = uncurryThis$4($repeat$1);
var stringSlice$4 = uncurryThis$4(''.slice);
var nativeToFixed = uncurryThis$4(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat$1('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED$1 = fails$4(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$4(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$5({ target: 'Number', proto: true, forced: FORCED$1 }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat$1('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat$1('0', fractDigits - k) + result
        : stringSlice$4(result, 0, k - fractDigits) + '.' + stringSlice$4(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis$3 = functionUncurryThis;
var toLength = toLength$8;
var toString$3 = toString$d;
var $repeat = stringRepeat;
var requireObjectCoercible$1 = requireObjectCoercible$a;

var repeat = uncurryThis$3($repeat);
var stringSlice$3 = uncurryThis$3(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod$1 = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString$3(requireObjectCoercible$1($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString$3(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice$3(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

var stringPad = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod$1(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod$1(true)
};

// https://github.com/zloirock/core-js/issues/280
var userAgent = engineUserAgent;

var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

var $$4 = _export;
var $padStart = stringPad.start;
var WEBKIT_BUG = stringPadWebkitBug;

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$$4({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var call$2 = functionCall;
var hasOwn$3 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$3(R, 'flags') && isPrototypeOf$2(RegExpPrototype$2, R)
    ? call$2(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$2 = defineBuiltIn$b;
var anObject$2 = anObject$i;
var $toString$1 = toString$d;
var fails$3 = fails$y;
var getRegExpFlags$1 = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var nativeToString = RegExpPrototype$1[TO_STRING];

var NOT_GENERIC = fails$3(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$2(this);
    var pattern = $toString$1(R.source);
    var flags = $toString$1(getRegExpFlags$1(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

class NumberFormatter {
  toNumber(value) {
    if (!value) {
      return '0';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return formatted.substring(0, formatted.length - 3);
  }
  roundNumber(value) {
    if (!value) {
      return '0';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').replace('.00', '');
    return formatted;
  }
  toCurrency(value) {
    if (!value) {
      return '$0';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return '$' + formatted.substring(0, formatted.length - 3);
  }
  toZero(num) {
    return num.toString().padStart(5, '0');
  }
  toPhone(phone) {
    if (!phone) {
      return phone;
    }
    let phoneValue = '';
    for (let i = 0, l = phone.length; i < l; i++) {
      phoneValue += phone[i];
      phoneValue += i === 0 ? ' ' : '';
      phoneValue += i !== 0 && i % 4 === 0 ? ' ' : '';
    }
    return phoneValue;
  }
}
var NumberFormatter$1 = new NumberFormatter();

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$2 = fails$y;
var whitespaces = whitespaces$3;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$2(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$3 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$3({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var defineProperty = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var DESCRIPTORS$3 = descriptors;
var global$3 = global$v;
var uncurryThis$2 = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$2;
var createNonEnumerableProperty = createNonEnumerableProperty$9;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf$1 = objectIsPrototypeOf;
var isRegExp = isRegexp;
var toString$2 = toString$d;
var getRegExpFlags = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$1 = defineBuiltIn$b;
var fails$1 = fails$y;
var hasOwn$2 = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$3;
var wellKnownSymbol$2 = wellKnownSymbol$n;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol$2('match');
var NativeRegExp = global$3.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global$3.SyntaxError;
var exec = uncurryThis$2(RegExpPrototype.exec);
var charAt$1 = uncurryThis$2(''.charAt);
var replace$2 = uncurryThis$2(''.replace);
var stringIndexOf = uncurryThis$2(''.indexOf);
var stringSlice$2 = uncurryThis$2(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$3 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$1(function () {
    re2[MATCH] = false;
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
    chr = charAt$1(string, index);
    if (chr === '\\') {
      result += chr + charAt$1(string, ++index);
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
    chr = charAt$1(string, index);
    if (chr === '\\') {
      chr = chr + charAt$1(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice$2(string, index + 1))) {
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
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$1(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$1(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$2(pattern);
    flags = flags === undefined ? '' : toString$2(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace$2(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace$2(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

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

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn$1(global$3, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

class StringFormatter {
  constructor() {
    this.removeInitialZero = value => Number(value).toString();
    this.capitalizeLetter = ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
  }
  /**
   * Sanitize a string to be used as a name
   * @param name
   * @returns {string}
   */
  sanitize(name) {
    return name.toLowerCase().trim().replace(new RegExp(/\s/gi), '-');
  }
  /**
   * Convert string to snake case
   * @param text
   * @returns {string}
   */
  toSnakeCase(text) {
    const matches = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];
    return matches.map(x => x.toLowerCase()).join('_');
  }
}
var StringFormatter$1 = new StringFormatter();

var moment$1 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match('^[^/\\\\]*$') != null;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.4';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
}(moment$1));

var moment = moment$1.exports;

class DateFormatter {
  toDateString(date, locale = 'es') {
    if (!date) {
      return '';
    }
    return moment(date).locale(locale).format('LL');
  }
  toCustomString(momentFormat, date, locale = 'es') {
    if (!date) {
      return '';
    }
    return moment(date).locale(locale).format(momentFormat);
  }
  formatDate(stringDate, format, locale = 'es') {
    if (stringDate) {
      const date = moment(stringDate).locale(locale).format(format);
      return date;
    }
    return '';
  }
}
var DateFormatter$1 = new DateFormatter();

const validation = params => values => {
  const errors = {};
  const fields = Object.keys(params);
  fields.forEach(field => {
    const value = get$2(values, field);
    const action = get$2(params, field);
    if (Array.isArray(action)) {
      const actionLength = action.length;
      for (let i = 0; i < actionLength; i += 1) {
        const error = action[i](value, values);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    } else {
      const error = action(value, values);
      if (error) {
        errors[field] = error;
      }
    }
  });
  return errors;
};

const isRequired = value => {
  if (!value || isEmpty(value) || value === undefined) {
    return 'required';
  }
  return false;
};
const isValidEnterpriseRut = value => {
  if (!DniFormatter$1.isEnterpriseRutValid(value)) {
    return 'invalidRut';
  }
  return false;
};
const validateEmail = emailInput => String(emailInput).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const isValidEmail = value => {
  if (!validateEmail(value)) {
    return 'invalidEmail';
  }
  return false;
};

const maxFile = 5;
const maxFilePdf = 5;
const validateSize = file => {
  const sizeMax = (file === null || file === void 0 ? void 0 : file.type) === 'application/pdf' ? maxFilePdf : maxFile;
  const size = file === null || file === void 0 ? void 0 : file.size;
  if (!size) {
    return false;
  }
  const fileSize = size / 1024 / 1024; // in MiB
  return fileSize > sizeMax;
};

class FilesApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  save(data, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
      const formData = new FormData();
      formData.append('file', data, fileName);
      try {
        const response = yield this.axios.post('/load-files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    });
  }
  uploadPhotoUser(urlImage) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield this.axios.post('/users/set-image', {
          image: urlImage
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    });
  }
  delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        yield this.axios.delete(`/load-files/${id}`);
      } catch (error) {
        throw error;
      }
    });
  }
  getBase64(event, onSucces, onError) {
    let file = event.target.files[0];
    if (file && !validateSize(file)) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        onSucces === null || onSucces === void 0 ? void 0 : onSucces(reader.result);
      };
      reader.onerror = function (error) {
        onError === null || onError === void 0 ? void 0 : onError(error);
      };
    } else {
      const textError = `La imagen que desea subir es mayor que ${maxFile} MB`;
      onError === null || onError === void 0 ? void 0 : onError({
        message: textError
      });
    }
  }
  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  get(id) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (id) {
          const response = yield this.axios.get(`/load-files/${id}`, {
            responseType: 'arraybuffer'
          });
          if (response.data) return this.arrayBufferToBase64(response.data);
        }
      } catch (error) {
        throw error;
      }
      return undefined;
    });
  }
}

class AuthApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
    this.prefix = '/users';
  }
  /**
   * @param params
   * @returns {Promise<any> | AxiosError }
   */
  me() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get(`${this.prefix}/me`);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  login(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/login`, params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  activateUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`/admin/activate-user-mock`, params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  signUp(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}`, params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  setPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/set-password`, {
          password
        });
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  setPasswordDirect(password) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/set-password-direct`, {
          password
        });
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  resetPassword(email) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/reset-password`, {
          email
        });
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  resetPasswordWithToken(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/reset-password-token`, params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  logout() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post(`${this.prefix}/logout`, {});
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
}

class CartRequestApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * @param params
   * @returns {Promise<any> | AxiosError }
   */
  getHistory(filters) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post('/cart-request/search', Object.assign({}, filters));
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  /**
   * @param params
   * @returns {Promise<any> | AxiosError }
   */
  getDetailCart(cartId) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get(`/cart-request/${cartId}`, {});
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  createIntention(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post('/cart-request', params);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
}

class sapApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
    this.prefix = '/sap';
  }
  /**
   * @param rut
   * @returns {Promise<any> | AxiosError }
   */
  customerValidate(rut) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get(`${this.prefix}/customer-validate/${rut}`, {});
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  /**
  * @param rut
  * @returns {Promise<any> | AxiosError }
  */
  getInfoCompany(sapCode) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get(`${this.prefix}/customerDetail/${sapCode}`, {});
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
}

class CompanyApi extends BaseRest {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
  * Get product by filter
  * @param params
  * @returns {Promise<Product.IProduct> | error }
  * @memberof ProductClient
  */
  getAssignedSellersOffices(filter) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get('/sellers', filter);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  /**
   * Get product by filter
   * @param params
   * @returns {Promise<Product.IProduct> | error }
   * @memberof ProductClient
   */
  getAddress(filter) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.get('/companies/address', filter);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
  /**
   * Post product by filter
   * @param params
   * @returns {Promise<Product.IProduct> | error }
   * @memberof ProductClient
   */
  updateAddress(body) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const {
          data
        } = yield this.axios.post('/companies/address', body);
        return data;
      } catch (error) {
        throw error;
      }
    });
  }
}

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var categoriesClient = new CategoriesApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

const getIconCategories = type => {
  switch (type) {
    case '11':
      return 'homeappliances-electro-sm';
    case '12':
      return 'furniture-hdeco-sm';
    case '13':
      return 'gardenaccessories-exterior-sm';
    case '16':
      return 'endings-mdh';
    case '17':
      return 'kitchen-bathroom-mdh';
    case '18':
      return 'hygiene-hbeauty-sm';
    case '19':
      return 'pets-exterior-sm';
    case '20':
      return 'door-window-mdh';
    case '21':
      return 'flooring-mdh';
    case '22':
      return 'paint-mdh';
    case "23":
      return 'electric-tools-mdh';
    case "24":
      return 'automotive-mdh';
    case "25":
      return 'electricity-mdh';
    case "26":
      return 'hardware-store-mdh';
    case "28":
      return 'protection-neutral';
    case "27":
      return 'construction-mdh';
    case "29":
      return 'generic-neutral';
    case "14":
      return 'bed-hdeco-sm';
    case "15":
      return 'general-cleaning-sm';
    default:
      return '';
  }
};
const mappingChildrenCategory = (data, level = 0, parentId) => {
  return data.map(category => {
    const icon = getIconCategories(`${category.id}`);
    const parent = parentId || category.id;
    if (category.children) {
      const children = mappingChildrenCategory(category.children, level + 1, parent).sort((a, b) => a.order - b.order);
      return Object.assign(Object.assign({}, category), {
        level,
        parentId: parent,
        children,
        icon,
        url: `/category/${category.id}`
      });
    } else {
      return Object.assign(Object.assign({}, category), {
        level,
        icon,
        url: `/category/${category.id}`
      });
    }
  });
};
const groupByLevel = data => {
  const result = new Map();
  function recursive(node) {
    var _a;
    result.set(node.level, [...(result.get(node.level) || []), node]);
    (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach(recursive);
  }
  data.forEach(recursive);
  return Array.from(result.values());
};
const findAncestors = (item, targetId, ancestors = []) => {
  const currentAncestors = [...ancestors, {
    id: item.id,
    name: item.name,
    level: item.level
  }];
  if (item.id === targetId) {
    return currentAncestors;
  }
  let found = null;
  item.children.some(child => {
    const result = findAncestors(child, targetId, currentAncestors);
    if (result) {
      found = result;
      return true; // Esto interrumpe la iteración de 'some' tan pronto como encontramos el nodo objetivo
    }

    return false;
  });
  return found;
};
const findParentsInRoot = (data, targetId) => {
  let found = null;
  data.some(item => {
    const result = findAncestors(item, targetId);
    if (result) {
      found = result;
      return true;
    }
    return false;
  });
  return found;
};

const GlobalContext = /*#__PURE__*/createContext({});
const GlobalContextProvider = ({
  children
}) => {
  const [isLoading, setLoader] = useState(false);
  const [categoriesNav, setCategoriesNav] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesByLevel, setCategoriesByLevel] = useState([]);
  const [categoriesPlane, setCategoriesPlane] = useState([]);
  const [isOpenModalCategories, setIsOpenModalCategories] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoader(true);
      const {
        data
      } = yield categoriesClient.list();
      const categoriesMapped = mappingChildrenCategory(data).sort((a, b) => b.name - b.name);
      const categoriesByLevel = groupByLevel(categoriesMapped);
      const menuData = [{
        name: 'Categorías',
        url: '/category',
        submenu: [...categoriesMapped]
      }];
      setCategories(categoriesMapped);
      setCategoriesByLevel(categoriesByLevel);
      setCategoriesPlane(uniq(flatten(categoriesByLevel)));
      setCategoriesNav(menuData);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      Ramen.Api.notification.error({
        description: 'No hemos podido cargar las categorias',
        message: 'Por favor intentelo de nuevo.'
      });
    }
  });
  return jsx(GlobalContext.Provider, Object.assign({
    value: {
      isLoading,
      setLoader,
      categories,
      categoriesByLevel,
      categoriesPlane,
      categoriesNav,
      isOpenModalCategories,
      setIsOpenModalCategories,
      isOpenModalLogin,
      setIsOpenModalLogin
    }
  }, {
    children: children
  }));
};
const useGlobal = () => useContext(GlobalContext);

const Nav = ({
  links
}) => {
  const {
    isOpenModalCategories,
    setIsOpenModalCategories
  } = useGlobal();
  return jsx("nav", {
    children: jsx("ul", Object.assign({
      className: "nav-wrapper"
    }, {
      children: (links || []).map((link, index) => jsx("li", Object.assign({
        className: "nav-item"
      }, {
        children: link.submenu && jsx(Ramen.XButton, {
          type: "tonal",
          text: link.name,
          icon: isOpenModalCategories ? 'close-outline' : 'list-outline',
          onClick: () => setIsOpenModalCategories(!isOpenModalCategories)
        })
      }), index))
    }))
  });
};
var Nav$1 = /*#__PURE__*/memo(Nav);

var aCallable = aCallable$b;
var toObject = toObject$9;
var IndexedObject = indexedObject;
var lengthOfArrayLike = lengthOfArrayLike$9;

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

var $$2 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$2({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

const useLocalStorage = () => {
  const getStorage = key => {
    return JSON.parse(localStorage.getItem(key) || '[]');
  };
  const setStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  return {
    setStorage,
    getStorage
  };
};

const cartReducer = (state, action) => {
  var _a, _b;
  switch (action.type) {
    case 'ADD_TO_CART':
      return Object.assign(Object.assign({}, state), {
        products: action.payload
      });
    case 'REMOVE_FROM_CART':
      return Object.assign(Object.assign({}, state), {
        products: state.products.filter(item => item.id !== action.payload)
      });
    case 'INCRESE_COUNT':
      return Object.assign(Object.assign({}, state), {
        products: state.products.map(item => {
          if (item.id === action.payload) {
            return Object.assign(Object.assign({}, item), {
              quantity: item.quantity + 1
            });
          }
          return item;
        })
      });
    case 'UPDATE_COUNT':
      const id = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id;
      const quantity = (_b = action.payload) === null || _b === void 0 ? void 0 : _b.quantity;
      return Object.assign(Object.assign({}, state), {
        products: state.products.map(item => {
          if (item.id === id) {
            return Object.assign(Object.assign({}, item), {
              quantity
            });
          }
          return item;
        })
      });
    case 'DECRESE_COUNT':
      return Object.assign(Object.assign({}, state), {
        products: state.products.map(item => {
          if (item.id === action.payload) {
            return Object.assign(Object.assign({}, item), {
              quantity: item.quantity - 1
            });
          }
          return item;
        })
      });
    case 'SET_TOTAL_PRICE':
      return Object.assign(Object.assign({}, state), {
        totalPrice: action.payload
      });
    case 'SET_CART':
      return Object.assign(Object.assign({}, state), {
        products: action.payload
      });
    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        products: []
      };
    default:
      return state;
  }
};

const initialState = {
  totalPrice: 0,
  products: []
};
const CartContext = /*#__PURE__*/createContext(initialState);
const CartContextProvider = ({
  children
}) => {
  const [state, dispath] = useReducer(cartReducer, initialState);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    getStorage,
    setStorage
  } = useLocalStorage();
  const addToCart = (productData, quantity = 1) => {
    const {
      products
    } = state;
    // add count to the new product and set it to 1 as default
    if (products.find(product => product.id === productData.id)) {
      const product = products.find(product => product.id === productData.id);
      product.quantity += quantity;
      const newState = products.filter(newProduct => newProduct.id !== (product === null || product === void 0 ? void 0 : product.id));
      setStorage('SHOP_CART', [...newState, product]);
      dispath({
        type: 'SET_CART',
        payload: [...newState, product]
      });
    } else {
      // if allready have count and added to cart, add one to count
      productData.quantity = quantity;
      const cartData = getStorage('SHOP_CART');
      setStorage('SHOP_CART', [...cartData, productData]);
      dispath({
        type: 'ADD_TO_CART',
        payload: [...products, productData]
      });
    }
  };
  const updateCart = products => {
    setStorage('SHOP_CART', products);
    dispath({
      type: 'SET_CART',
      payload: products
    });
  };
  const deleteFromCart = item => {
    dispath({
      type: 'REMOVE_FROM_CART',
      payload: item.id
    });
    // delete from local storage
    const cartCopy = Object.assign({}, state);
    const filterdCart = cartCopy.products.filter(product => product.id !== item.id);
    setStorage('SHOP_CART', filterdCart);
  };
  const increaseQuantity = item => {
    dispath({
      type: 'INCRESE_COUNT',
      payload: item.id
    });
    const newProducts = state.products.map(productItem => {
      if (productItem.id === item.id) {
        return Object.assign(Object.assign({}, productItem), {
          quantity: item.quantity + 1
        });
      }
      return productItem;
    });
    setStorage('SHOP_CART', newProducts);
  };
  const updateQuantity = (item, quantity) => {
    if (quantity === 0) {
      return;
    } else {
      dispath({
        type: "UPDATE_COUNT",
        payload: {
          id: item.id,
          quantity
        }
      });
      const newProducts = state.products.map(productItem => {
        if (productItem.id === item.id) {
          return Object.assign(Object.assign({}, productItem), {
            quantity
          });
        }
        return productItem;
      });
      setStorage("SHOP_CART", newProducts);
    }
  };
  const decreaseQuantity = item => {
    dispath({
      type: 'DECRESE_COUNT',
      payload: item.id
    });
    const newProducts = state.products.map(productItem => {
      if (productItem.id === item.id) {
        return Object.assign(Object.assign({}, productItem), {
          quantity: item.quantity - 1
        });
      }
      return productItem;
    });
    setStorage('SHOP_CART', newProducts);
    if (item.quantity <= 1) {
      deleteFromCart(item);
    }
  };
  const clearCart = () => {
    dispath({
      type: 'CLEAR_CART'
    });
    setStorage('SHOP_CART', []);
  };
  const setTotalPrice = price => {
    dispath({
      type: 'SET_TOTAL_PRICE',
      payload: price
    });
  };
  useEffect(() => {
    let totalPrice = state.products.reduce((prev, item) => prev += item.price * item.quantity, 0).toFixed(2);
    setTotalPrice(totalPrice);
  }, [state.products]);
  return jsx(CartContext.Provider, Object.assign({
    value: {
      cart: state.products,
      totalPrice: state.totalPrice,
      isOpenModal,
      setIsOpenModal,
      dispath,
      updateCart,
      clearCart,
      addToCart,
      deleteFromCart,
      increaseQuantity,
      updateQuantity,
      decreaseQuantity,
      setTotalPrice
    }
  }, {
    children: children
  }));
};
const useCartContext = () => useContext(CartContext);

const ShopCart = () => {
  const {
    cart,
    setIsOpenModal,
    isOpenModal
  } = useCartContext();
  const {
    pathname
  } = useLocation();
  const [addAnimation, setAddAnimation] = useState(false);
  useEffect(() => {
    setAddAnimation(true);
    setTimeout(() => {
      setAddAnimation(false);
    }, 1000);
  }, [cart]);
  useEffect(() => {
    setIsOpenModal(false);
  }, [pathname]);
  return jsx("div", Object.assign({
    onClick: () => setIsOpenModal(!isOpenModal),
    className: "cart"
  }, {
    children: jsxs("div", Object.assign({
      className: "cart-icons"
    }, {
      children: [cart.length > 0 && jsx("span", Object.assign({
        className: `cart-quantity ${addAnimation ? 'active' : ''}`
      }, {
        children: cart.reduce((prev, pro) => prev += pro.quantity, 0)
      })), jsx("div", Object.assign({
        className: 'button-cart'
      }, {
        children: jsx(Ramen.XButtonIcon, {
          icon: 'shopping-cart-outline',
          size: 'm'
        })
      }))]
    }))
  }));
};
var ShopCart$1 = /*#__PURE__*/memo(ShopCart);

const MobileNav = () => {
  const {
    isOpenModalCategories,
    setIsOpenModalCategories
  } = useGlobal();
  return jsx("div", Object.assign({
    className: "mobile-nav"
  }, {
    children: jsx(Ramen.XButtonIcon, {
      type: "tonal",
      icon: isOpenModalCategories ? 'close-outline' : 'list-outline',
      onClick: () => setIsOpenModalCategories(!isOpenModalCategories)
    })
  }));
};

const Button = props => {
  const {
      children,
      className
    } = props,
    rest = __rest(props, ["children", "className"]);
  return jsx("button", Object.assign({
    className: `button-default ${className}`
  }, rest, {
    children: children
  }));
};

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3e %3cdefs%3e %3cclipPath id='clip-path'%3e %3cpath id='Rect%c3%a1ngulo_108' data-name='Rect%c3%a1ngulo 108' style='fill:none' d='M0 0h75v75H0z'/%3e %3c/clipPath%3e %3cstyle%3e .cls-4%7bfill:%23ddd%7d %3c/style%3e %3c/defs%3e %3cg id='dummy-img' transform='translate(-5 -4.89)'%3e %3cg id='Grupo_131' data-name='Grupo 131' transform='translate(5 4.89)'%3e %3cg id='Grupo_130' data-name='Grupo 130' style='clip-path:url(%23clip-path)'%3e %3cpath id='Rect%c3%a1ngulo_107' data-name='Rect%c3%a1ngulo 107' transform='translate(-.313 -.313)' style='fill:white' d='M0 0h75.625v75.625H0z'/%3e %3c/g%3e %3c/g%3e %3cg id='Grupo_132' data-name='Grupo 132' transform='translate(15 14.89)'%3e %3ccircle id='Elipse_1' data-name='Elipse 1' class='cls-4' cx='5.625' cy='5.625' r='5.625' transform='translate(7.5 7.5)'/%3e %3cpath id='Trazado_445' data-name='Trazado 445' class='cls-4' d='M88.558 36.89H40.442A3.47 3.47 0 0 0 37 40.388v31.864a.769.769 0 1 0 1.538 0V40.388a1.92 1.92 0 0 1 1.9-1.936h48.12a1.92 1.92 0 0 1 1.9 1.936v17.805a.769.769 0 1 0 1.538 0V40.388a3.47 3.47 0 0 0-3.438-3.498z' transform='translate(-37 -36.89)'/%3e %3cpath id='Trazado_446' data-name='Trazado 446' class='cls-4' d='m91.43 97.681-11.762-14.51a1.561 1.561 0 0 0-1.211-.579 1.564 1.564 0 0 0-1.211.575l-5.688 6.976-8.694 10.129L60.8 98.5l-5.549-5.36a1.563 1.563 0 0 0-2.283.118l-13.8 16.429-2.07 2.277a1.5 1.5 0 0 0-.1.117v8.086a3.143 3.143 0 0 0 3.143 3.143h48.716A3.143 3.143 0 0 0 92 120.167V98.4l-.413-.487a1.559 1.559 0 0 0-.157-.232z' transform='translate(-37 -68.31)'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const ProductCard = ({
  productData
}) => {
  var _a;
  const {
    addToCart
  } = useCartContext();
  const {
    success
  } = Ramen.Api.notification;
  const history = useHistory();
  const handleOpenProduct = () => {
    history.push(`/products/detail/${productData.ean}`);
  };
  const imageOnErrorHandler = event => {
    event.currentTarget.src = img$c;
  };
  const handleAddToCart = e => {
    e.stopPropagation();
    addToCart(productData, 1);
    success({
      description: 'Producto agregado a tu cotización.'
    });
  };
  const urlImage = productData.urlImage ? productData.urlImage : !!((_a = productData === null || productData === void 0 ? void 0 : productData.urlImageOTher) === null || _a === void 0 ? void 0 : _a.length) ? productData.urlImageOTher[0] : `https://media.easy.cl/is/image/EasySA/${StringFormatter$1.removeInitialZero(productData.sku)}` || img$c;
  return jsxs("div", Object.assign({
    onClick: handleOpenProduct,
    className: "product-card"
  }, {
    children: [jsx("div", Object.assign({
      className: "product-card__image"
    }, {
      children: jsx("img", {
        className: "product-card__image-image",
        loading: "lazy",
        src: urlImage,
        alt: productData.name,
        onError: imageOnErrorHandler
      })
    })), jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      padding: 's'
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        padding: 'xs'
      }, {
        children: [jsx(Ramen.XVSpace, {
          size: 'xxs'
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: StringFormatter$1.capitalizeLetter(productData === null || productData === void 0 ? void 0 : productData.brandName, true)
        })), jsx(Ramen.XVSpace, {
          size: 'xxs'
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 10
        }, {
          children: StringFormatter$1.capitalizeLetter((productData === null || productData === void 0 ? void 0 : productData.longName) || productData.name, true)
        })), jsx(Ramen.XVSpace, {
          size: 's'
        }), jsxs(Ramen.XText, Object.assign({
          fontSize: 10,
          colorThone: 'dim'
        }, {
          children: ["SKU ", !!(productData === null || productData === void 0 ? void 0 : productData.sku) ? Number(productData === null || productData === void 0 ? void 0 : productData.sku) : '-', ' ']
        })), jsx(Ramen.XVSpace, {
          size: 's'
        }), jsxs(Ramen.XText, Object.assign({
          fontSize: 10
        }, {
          children: [!!(productData === null || productData === void 0 ? void 0 : productData.price) ? NumberFormatter$1.toCurrency(Number(productData === null || productData === void 0 ? void 0 : productData.price)) : '-', ' ']
        })), jsx(Ramen.XVSpace, {
          size: 'xxs'
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: 'dim'
        }, {
          children: "Precio referencial"
        })), jsx(Ramen.XVSpace, {
          size: 'xs'
        })]
      })), jsx(Ramen.XButton, {
        onClick: handleAddToCart,
        type: "outline",
        text: "A\u00F1adir a cotizaci\u00F3n"
      })]
    }))]
  }));
};

const ShopCartItem = ({
  item
}) => {
  var _a;
  const {
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity
  } = useCartContext();
  const history = useHistory();
  useCallback(e => {
    updateQuantity(item, Number(e.target.value));
  }, [item, updateQuantity]);
  const onChange = useCallback(value => {
    updateQuantity(item, Number(value));
  }, [item, updateQuantity]);
  const discountPrice = (item.price || 0).toFixed(2);
  const imageOnErrorHandler = event => {
    event.currentTarget.src = img$c;
  };
  const urlImage = item.urlImage ? item.urlImage : !!((_a = item === null || item === void 0 ? void 0 : item.urlImageOTher) === null || _a === void 0 ? void 0 : _a.length) ? item.urlImageOTher[0] : `https://media.easy.cl/is/image/EasySA/${StringFormatter$1.removeInitialZero(item.sku)}` || img$c;
  return jsxs("div", Object.assign({
    className: "shop-cart__item"
  }, {
    children: [jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      verticalAlign: "center",
      gap: "xs"
    }, {
      children: [jsx("img", {
        className: "shop-cart__item__image",
        loading: "lazy",
        src: urlImage,
        onError: imageOnErrorHandler,
        alt: item.name
      }), jsx("div", Object.assign({
        className: "shop-cart__item__data",
        onClick: () => {
          history.push(`/products/detail/${item.ean}`);
        }
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "start",
          gap: "xxs"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            colorThone: "dim"
          }, {
            children: StringFormatter$1.capitalizeLetter(item === null || item === void 0 ? void 0 : item.brandName, true)
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 10
          }, {
            children: StringFormatter$1.capitalizeLetter((item === null || item === void 0 ? void 0 : item.longName) || item.name, true)
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            verticalAlign: "end",
            gap: "xs"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              fontSize: 10
            }, {
              children: !!discountPrice ? NumberFormatter$1.toCurrency(Number(discountPrice)) : '-'
            })), jsx(Ramen.XText, Object.assign({
              fontSize: 12,
              colorThone: "dim"
            }, {
              children: "(Precio referencial)"
            }))]
          }))]
        }))
      }))]
    })), jsx("div", Object.assign({
      className: 'shop-cart__item__actions'
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center",
        gap: "xxs"
      }, {
        children: [jsx(Ramen.XCounter, {
          min: 1,
          max: 100000,
          onChange: onChange,
          editable: true,
          count: item.quantity
        }), jsx(Ramen.XButtonIcon, {
          type: "clear",
          size: "l",
          icon: 'trash-2-outline',
          onClick: () => deleteFromCart(item)
        })]
      }))
    }))]
  }));
};
var ShopCartItem$1 = /*#__PURE__*/memo(ShopCartItem);

const Loader = ({
  color: _color = 'primary'
}) => {
  return jsxs("div", Object.assign({
    className: `lds-roller ${_color}`
  }, {
    children: [jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {})]
  }));
};

var img$b = "data:image/svg+xml,%3csvg width='59' height='59' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M47.0178 5.81591C47.7185 5.39549 48.5594 5.1152 49.4002 5.1152C51.9228 5.1152 53.9549 7.14727 53.9549 9.66983C53.9549 10.5107 53.7446 11.3515 53.3242 12.0523C56.8979 16.9572 59 22.9834 59 29.5C59 45.8266 45.8266 59 29.5 59C13.2435 59 0 45.8266 0 29.5C0 13.2435 13.1734 0 29.5 0C36.0867 0.0700713 42.1128 2.24228 47.0178 5.81591Z' fill='white'/%3e%3cpath d='M51.0127 14.0142C50.5222 14.2245 49.9617 14.2945 49.4011 14.2945C46.8785 14.2945 44.8465 12.2625 44.8465 9.7399C44.8465 9.17933 44.9866 8.61876 45.1267 8.12826C40.7823 4.97505 35.3868 3.08313 29.5709 3.08313C14.926 3.08313 3.01392 14.9252 3.01392 29.5701C3.01392 44.215 14.856 56.057 29.5009 56.057C44.2158 56.1271 56.0579 44.215 56.0579 29.5701C56.0579 23.7542 54.1659 18.4287 51.0127 14.0142Z' fill='%23DF1122'/%3e%3cpath d='M51.0113 14.0142C50.5208 14.2245 49.9602 14.2945 49.3996 14.2945C46.8771 14.2945 44.845 12.2625 44.845 9.7399C44.845 9.17933 44.9151 8.61876 45.1253 8.12826C40.7809 4.97505 35.3854 3.08313 29.5695 3.08313C14.9246 3.08313 3.08252 14.9252 3.08252 29.5701C3.08252 44.215 14.9246 56.057 29.5695 56.057C44.2143 56.057 56.0564 44.215 56.0564 29.5701C56.0564 23.7542 54.1645 18.4287 51.0113 14.0142Z' stroke='%23DF1122' stroke-width='0.0229017' stroke-miterlimit='3.864'/%3e%3cpath d='M46.9475 9.67003C46.9475 8.2686 48.0686 7.14746 49.4701 7.14746C50.8715 7.14746 51.9926 8.2686 51.9926 9.67003C51.9926 11.0715 50.8715 12.1926 49.4701 12.1926C48.0686 12.1926 46.9475 11.0715 46.9475 9.67003Z' fill='%23DF1122'/%3e%3cpath d='M49.401 12.1926C50.7941 12.1926 51.9235 11.0632 51.9235 9.67003C51.9235 8.27685 50.7941 7.14746 49.401 7.14746C48.0078 7.14746 46.8784 8.27685 46.8784 9.67003C46.8784 11.0632 48.0078 12.1926 49.401 12.1926Z' stroke='%23DF1122' stroke-width='0.021184' stroke-miterlimit='3.864'/%3e%3cpath d='M52.9726 23.1937L47.2968 38.189H44.0035L46.1757 33.284L42.2517 23.1937H45.5451L47.6472 29.7103H47.7873L49.7493 23.1937H52.9726Z' fill='%23FDF737'/%3e%3cpath d='M41.7634 30.7614C41.7634 33.1439 39.1707 34.0548 36.6482 34.0548C34.1957 34.0548 31.603 33.1439 31.603 30.7614H34.8263C34.8263 31.5322 35.8774 31.7424 36.6482 31.7424C37.4189 31.7424 38.3999 31.5322 38.3999 30.8315C38.3999 29.9206 37.2087 29.7804 35.2467 29.2899C33.2847 28.7994 31.8132 27.8885 31.8132 25.9966C31.8132 23.6142 34.1256 22.7733 36.5781 22.7733C39.0306 22.7733 41.2729 23.6142 41.2729 25.9265H38.0496C38.0496 25.2959 37.2087 25.0156 36.5781 25.0156C35.8774 25.0156 35.1066 25.1557 35.1066 25.8564C35.1066 26.7674 36.508 26.8374 38.0496 27.2579C40.0816 27.8885 41.7634 28.6593 41.7634 30.7614Z' fill='%23FDF737'/%3e%3cpath d='M26.7674 28.4485C26.7674 27.047 25.9966 25.7157 24.1748 25.7157C22.3529 25.7157 21.7924 27.1872 21.7924 28.4485C21.7924 29.7798 22.4931 31.1812 24.3149 31.1812C26.2069 31.1812 26.7674 29.7098 26.7674 28.4485ZM29.8506 33.7038H26.8375V32.5126H26.6974C26.2069 33.5637 25.1558 34.1242 23.6142 34.1242C20.9515 34.1242 18.6392 31.952 18.6392 28.5185C18.6392 25.015 20.7413 22.9128 23.404 22.9128C24.8755 22.9128 26.1368 23.5435 26.6974 24.4544H26.8375V23.2632H29.9206L29.8506 33.7038Z' fill='%23FDF737'/%3e%3cpath d='M38.2576 38.259C29.9191 37.1378 21.5806 37.0678 8.61743 37.9787L8.75757 37.4181C21.7208 36.297 31.9512 35.6663 37.4868 35.8766C40.7801 35.9466 41.7611 36.2269 41.7611 37.4181C41.8312 38.6093 40.3597 38.5393 38.2576 38.259Z' fill='%23FDF737'/%3e%3cpath d='M13.6624 27.3273C13.5924 26.6967 13.242 25.4354 11.4902 25.4354C9.87858 25.4354 9.38808 26.7668 9.31801 27.3273H13.6624ZM16.8857 28.3784C16.8857 28.7988 16.8156 29.4295 16.8156 29.4295H9.24794C9.31801 30.6207 10.2289 31.5316 11.4902 31.5316C12.4011 31.5316 13.0318 31.1812 13.3121 30.5506H16.6054C16.3251 32.0922 14.9938 34.0542 11.5603 34.0542C8.26694 34.0542 6.02466 31.4615 6.02466 28.3784C6.02466 25.2252 8.05673 22.9128 11.3501 22.9128C14.7135 22.9128 16.8857 25.2252 16.8857 28.3784Z' fill='%23FDF737'/%3e%3cpath d='M16.3247 44.8457C16.4649 44.7056 16.6751 44.5654 16.8853 44.4954C17.0955 44.4253 17.3057 44.3552 17.5159 44.3552C17.7262 44.3552 17.9364 44.4253 18.1466 44.4954C18.3568 44.5654 18.567 44.7056 18.7071 44.8457L18.9174 45.0559L18.4269 45.5464L18.2166 45.2662C18.1466 45.1961 18.0064 45.126 17.8663 45.0559C17.7262 44.9859 17.586 44.9859 17.5159 44.9859C17.3758 44.9859 17.2357 44.9859 17.1656 45.0559C17.0254 45.126 16.9554 45.1961 16.8152 45.2662C16.7452 45.3362 16.6751 45.4764 16.605 45.6165C16.5349 45.7567 16.5349 45.8968 16.5349 45.9669C16.5349 46.107 16.5349 46.2472 16.605 46.3172C16.6751 46.4574 16.7452 46.5274 16.8152 46.6676C17.0254 46.8778 17.2357 46.9479 17.5159 46.9479C17.6561 46.9479 17.7962 46.9479 17.8663 46.8778C18.0064 46.8077 18.0765 46.7376 18.2166 46.6676L18.4269 46.4574L18.9174 46.9479L18.7071 47.1581C18.567 47.2982 18.3568 47.4384 18.1466 47.5084C17.9364 47.5785 17.7262 47.6486 17.5159 47.6486C17.3057 47.6486 17.0955 47.5785 16.8853 47.5084C16.6751 47.4384 16.5349 47.2982 16.3247 47.1581C16.1846 47.0179 16.0444 46.8077 15.9744 46.5975C15.9043 46.3873 15.8342 46.1771 15.8342 45.9669C15.8342 45.7567 15.9043 45.5464 15.9744 45.3362C16.0444 45.1961 16.1846 44.9859 16.3247 44.8457Z' fill='white'/%3e%3cpath d='M20.1099 45.2665C19.8997 45.4767 19.8296 45.6869 19.8296 45.9672C19.8296 46.1074 19.8296 46.2475 19.8997 46.3877C19.9698 46.3176 20.0398 46.2475 20.18 46.1074C20.3201 45.9672 20.4603 45.8271 20.5303 45.757C20.6705 45.6169 20.8106 45.4767 20.9508 45.3366C21.0909 45.1964 21.161 45.1264 21.231 45.0563C21.0208 44.9862 20.8807 44.9162 20.6705 44.9862C20.4603 45.0563 20.25 45.1264 20.1099 45.2665ZM21.7215 46.4577L22.212 46.9482L22.0018 47.1584C21.8617 47.2986 21.6515 47.4387 21.4413 47.5088C21.231 47.5789 21.0208 47.6489 20.8106 47.6489C20.6004 47.6489 20.3902 47.5789 20.18 47.5088C19.9698 47.4387 19.8296 47.2986 19.6194 47.1584C19.4793 47.0183 19.3391 46.8081 19.269 46.5979C19.199 46.3877 19.1289 46.1774 19.1289 45.9672C19.1289 45.757 19.199 45.5468 19.269 45.3366C19.3391 45.1264 19.4793 44.9862 19.6194 44.776C19.7595 44.6359 19.9698 44.4957 20.18 44.4257C20.3902 44.3556 20.6004 44.2855 20.8106 44.2855C21.0208 44.2855 21.231 44.3556 21.4413 44.4257C21.6515 44.4957 21.8617 44.6359 22.0018 44.776L22.212 44.9862L20.3902 46.8081C20.6004 46.8782 20.7405 46.9482 20.9508 46.8782C21.161 46.8782 21.3712 46.738 21.5113 46.5979L21.7215 46.4577Z' fill='white'/%3e%3cpath d='M22.4236 45.9669C22.4236 45.7567 22.4937 45.5464 22.5637 45.3362C22.6338 45.126 22.7739 44.9859 22.9141 44.8457C23.0542 44.7056 23.2644 44.5654 23.4747 44.4954C23.6849 44.4253 23.8951 44.3552 24.1053 44.3552C24.3155 44.3552 24.5257 44.4253 24.7359 44.4954C24.9461 44.5654 25.0863 44.7056 25.2965 44.8457C25.4366 44.9859 25.5768 45.1961 25.6469 45.3362C25.7169 45.5464 25.787 45.7567 25.787 45.9669V47.6486H25.1564V45.9669C25.1564 45.8267 25.1564 45.6866 25.0863 45.6165C25.0162 45.4764 24.9461 45.4063 24.8761 45.2662C24.806 45.1961 24.6659 45.126 24.5257 45.0559C24.3856 44.9859 24.2454 44.9859 24.1053 44.9859C23.9652 44.9859 23.825 44.9859 23.6849 45.0559C23.5447 45.126 23.4747 45.1961 23.4046 45.2662C23.3345 45.3362 23.2644 45.4764 23.1944 45.6165C23.1243 45.7567 23.1243 45.8267 23.1243 45.9669V47.6486H22.4236V45.9669Z' fill='white'/%3e%3cpath d='M26.4165 44.8457C26.5567 44.7056 26.7669 44.5654 26.9771 44.4954C27.1873 44.4253 27.3975 44.3552 27.6077 44.3552C27.818 44.3552 28.0282 44.4253 28.2384 44.4954C28.4486 44.5654 28.6588 44.7056 28.799 44.8457L29.0092 45.0559L28.5187 45.5464L28.3085 45.3362C28.2384 45.2662 28.0982 45.1961 27.9581 45.126C27.818 45.0559 27.6778 45.0559 27.6077 45.0559C27.4676 45.0559 27.3275 45.0559 27.2574 45.126C27.1172 45.1961 27.0472 45.2662 26.907 45.3362C26.837 45.4063 26.7669 45.5464 26.6968 45.6866C26.6267 45.8267 26.6267 45.9669 26.6267 46.0369C26.6267 46.1771 26.6267 46.3172 26.6968 46.3873C26.7669 46.5274 26.837 46.5975 26.907 46.7376C27.1172 46.9479 27.3275 47.0179 27.6077 47.0179C27.7479 47.0179 27.888 47.0179 27.9581 46.9479C28.0982 46.8778 28.1683 46.8077 28.3085 46.7376L28.5187 46.5274L29.0092 47.0179L28.7289 47.1581C28.5887 47.2982 28.3785 47.4384 28.1683 47.5084C27.9581 47.5785 27.7479 47.6486 27.5377 47.6486C27.3275 47.6486 27.1172 47.5785 26.907 47.5084C26.6968 47.4384 26.5567 47.2982 26.3465 47.1581C26.2063 47.0179 26.0662 46.8077 25.9961 46.5975C25.926 46.3873 25.856 46.1771 25.856 45.9669C25.856 45.7567 25.926 45.5464 25.9961 45.3362C26.1362 45.1961 26.2764 44.9859 26.4165 44.8457Z' fill='white'/%3e%3cpath d='M29.8499 45.9669C29.8499 46.107 29.8499 46.2471 29.92 46.3873C29.99 46.5274 30.0601 46.5975 30.1302 46.7376C30.2002 46.8077 30.3404 46.8778 30.4805 46.9479C30.6207 47.0179 30.7608 47.0179 30.9009 47.0179C31.0411 47.0179 31.1812 47.0179 31.3214 46.9479C31.4615 46.8778 31.5316 46.8077 31.6717 46.7376C31.7418 46.6676 31.8119 46.5274 31.8819 46.3873C31.952 46.2471 31.952 46.107 31.952 45.9669C31.952 45.8267 31.952 45.6866 31.8819 45.6165C31.8119 45.4764 31.7418 45.4063 31.6717 45.2662C31.6017 45.1961 31.4615 45.126 31.3214 45.0559C31.1812 44.9859 31.0411 44.9859 30.9009 44.9859C30.7608 44.9859 30.6207 44.9859 30.4805 45.0559C30.3404 45.126 30.2703 45.1961 30.1302 45.2662C30.0601 45.3362 29.99 45.4764 29.92 45.6165C29.92 45.7567 29.8499 45.8267 29.8499 45.9669ZM29.2192 45.9669C29.2192 45.7567 29.2893 45.5464 29.3594 45.3362C29.4295 45.126 29.5696 44.9859 29.7097 44.8457C29.8499 44.7056 30.0601 44.5654 30.2703 44.4954C30.4805 44.4253 30.6907 44.3552 30.9009 44.3552C31.1112 44.3552 31.3214 44.4253 31.5316 44.4954C31.7418 44.5654 31.8819 44.7056 32.0922 44.8457C32.2323 44.9859 32.3724 45.1961 32.4425 45.3362C32.5126 45.5464 32.5827 45.7567 32.5827 45.9669C32.5827 46.1771 32.5126 46.3873 32.4425 46.5975C32.3724 46.8077 32.2323 46.9479 32.0922 47.1581C31.952 47.2982 31.7418 47.4384 31.5316 47.5084C31.3214 47.5785 31.1112 47.6486 30.9009 47.6486C30.6907 47.6486 30.4805 47.5785 30.2703 47.5084C30.0601 47.4384 29.92 47.2982 29.7097 47.1581C29.5696 47.0179 29.4295 46.8077 29.3594 46.5975C29.2893 46.4574 29.2192 46.2472 29.2192 45.9669Z' fill='white'/%3e%3cpath d='M35.6659 44.3552V44.9859H33.7039C33.6338 44.9859 33.5638 44.9859 33.4937 45.0559C33.4236 45.126 33.4236 45.1961 33.4236 45.2662C33.4236 45.3362 33.4236 45.4063 33.4937 45.4764C33.5638 45.5464 33.6338 45.5464 33.7039 45.5464H35.0353C35.1754 45.5464 35.3155 45.5464 35.3856 45.6165C35.5258 45.6866 35.5958 45.7566 35.6659 45.8267C35.736 45.8968 35.806 46.0369 35.8761 46.1771C35.9462 46.3172 35.9462 46.3873 35.9462 46.5274C35.9462 46.6676 35.9462 46.8077 35.8761 46.9479C35.806 47.088 35.736 47.1581 35.6659 47.2982C35.5958 47.3683 35.4557 47.4384 35.3856 47.5084C35.2455 47.5785 35.1053 47.5785 35.0353 47.5785H33.0733V46.9479H35.0353C35.1053 46.9479 35.2455 46.9479 35.2455 46.8778C35.3155 46.8077 35.3155 46.7377 35.3155 46.6676C35.3155 46.5975 35.3155 46.5274 35.2455 46.4574C35.1754 46.3873 35.1053 46.3873 35.0353 46.3873H33.7039C33.5638 46.3873 33.4236 46.3873 33.2835 46.3172C33.1433 46.2472 33.0733 46.1771 33.0032 46.107C32.9331 46.0369 32.863 45.8968 32.793 45.8267C32.7229 45.6866 32.7229 45.5464 32.7229 45.4063C32.7229 45.2662 32.7229 45.126 32.793 45.0559C32.863 44.9158 32.9331 44.8457 33.0032 44.7056C33.0733 44.6355 33.2134 44.5654 33.2835 44.4954C33.4236 44.4253 33.5638 44.4253 33.7039 44.4253H35.6659V44.3552Z' fill='white'/%3e%3cpath d='M39.5211 44.3552V45.9669C39.5211 46.1771 39.4511 46.3873 39.381 46.5975C39.3109 46.8077 39.1708 46.9479 39.0306 47.1581C38.8905 47.2982 38.6803 47.4384 38.4701 47.5084C38.2599 47.5785 38.0496 47.6486 37.8394 47.6486C37.6292 47.6486 37.419 47.5785 37.2088 47.5084C36.9986 47.4384 36.8584 47.2982 36.6482 47.1581C36.5081 47.0179 36.3679 46.8077 36.2979 46.5975C36.2278 46.3873 36.1577 46.1771 36.1577 45.9669V44.3552H36.7884V45.9669C36.7884 46.107 36.7884 46.2471 36.8584 46.3873C36.9285 46.5274 36.9986 46.5975 37.0686 46.7376C37.1387 46.8077 37.2789 46.8778 37.419 46.9479C37.5591 47.0179 37.6993 47.0179 37.8394 47.0179C37.9796 47.0179 38.1197 47.0179 38.2599 46.9479C38.4 46.8778 38.4701 46.8077 38.6102 46.7376C38.6803 46.6676 38.7504 46.5274 38.8204 46.3873C38.8905 46.2471 38.8905 46.107 38.8905 45.9669V44.3552H39.5211Z' fill='white'/%3e%3cpath d='M41.3424 46.9474C41.4825 46.9474 41.6226 46.9474 41.6927 46.8774C41.8329 46.8073 41.9029 46.7372 41.973 46.6671C42.0431 46.5971 42.1131 46.4569 42.1832 46.3168C42.2533 46.1766 42.2533 46.0365 42.2533 45.8964V44.9154H41.3424C41.2022 44.9154 41.0621 44.9154 40.9219 44.9854C40.7818 45.0555 40.7117 45.1256 40.5716 45.1956C40.5015 45.2657 40.4314 45.4059 40.3614 45.546C40.2913 45.6861 40.2913 45.7562 40.2913 45.8964C40.2913 46.0365 40.2913 46.1766 40.3614 46.3168C40.4314 46.4569 40.5015 46.527 40.5716 46.6671C40.6416 46.7372 40.7818 46.8073 40.9219 46.8774C41.0621 46.9474 41.2022 46.9474 41.3424 46.9474ZM43.0241 43.0234V45.9664C43.0241 46.1766 42.954 46.3869 42.8839 46.5971C42.8138 46.8073 42.6737 46.9474 42.5336 47.1576C42.3934 47.2978 42.1832 47.4379 42.0431 47.508C41.8329 47.5781 41.6226 47.6481 41.4124 47.6481C41.2022 47.6481 40.992 47.5781 40.7818 47.508C40.5716 47.4379 40.4314 47.2978 40.2212 47.1576C40.0811 47.0175 39.9409 46.8073 39.8709 46.5971C39.8008 46.3869 39.7307 46.1766 39.7307 45.9664C39.7307 45.7562 39.8008 45.546 39.8709 45.3358C39.9409 45.1256 40.0811 44.9854 40.2212 44.8453C40.3614 44.7051 40.5716 44.565 40.7818 44.4949C40.992 44.4249 41.2022 44.3548 41.4124 44.3548H42.3934V43.0234H43.0241Z' fill='white'/%3e%3c/svg%3e";

const LoaderScreen = ({
  loading
}) => {
  const {
    isLoading
  } = useGlobal();
  return jsxs("div", Object.assign({
    className: `loading-screen ${isLoading || loading ? 'show' : ''}`
  }, {
    children: [jsx("div", Object.assign({
      style: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, {
      children: jsx("img", {
        src: img$b,
        alt: "\u2026",
        height: "70",
        width: "70"
      })
    })), jsx(Loader, {
      color: "white"
    })]
  }));
};

const ProductCardLoading = () => {
  return jsxs("div", Object.assign({
    className: 'shop__skeleton__product'
  }, {
    children: [jsx("div", {
      className: 'shop__skeleton__product__image'
    }), jsx("div", {
      className: 'shop__skeleton__product__name'
    }), jsx("div", {
      className: 'shop__skeleton__product__price'
    })]
  }));
};

const ElevatorButton = ({
  elementRef
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const getNodeRef = () => {
    const nodes = document.querySelectorAll('[class*="xpage__"]');
    const nodeRef = elementRef ? elementRef : nodes[0];
    return nodeRef;
  };
  useEffect(() => {
    const nodeRef = getNodeRef();
    nodeRef && nodeRef.addEventListener('scroll', e => {
      let element = e.target;
      const scrolled = element.scrollTop;
      if (scrolled >= 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [elementRef]);
  const handleGoToTop = () => {
    const nodeRef = getNodeRef();
    nodeRef && nodeRef.scrollTo(0, 0);
  };
  return jsx(Button, Object.assign({
    onClick: handleGoToTop,
    className: `elevator-button ${isVisible ? 'visible' : ''}`
  }, {
    children: jsx(Ramen.XIcon, {
      icon: 'chevron-up-outline'
    })
  }));
};

var img$a = "data:image/svg+xml,%3csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_2685_7436)'%3e%3cg clip-path='url(%23clip1_2685_7436)'%3e%3cpath d='M230.871 0H-181.858V199.821H230.871V0Z' fill='%23D6D6D6'/%3e%3cpath d='M22.0701 0.0810547H-77.5996V131.093H22.0701V0.0810547Z' fill='%23F5F5F5'/%3e%3cpath d='M126.471 0.0810547H26.8009V131.093H126.471V0.0810547Z' fill='%23F5F5F5'/%3e%3cpath d='M230.871 0.0810547H131.201V131.093H230.871V0.0810547Z' fill='%23F5F5F5'/%3e%3cpath d='M231.323 132.473H-181.138V199.729H231.323V132.473Z' fill='%23EAEAEA'/%3e%3cpath d='M231.334 149.157H-181.811V150.342H231.334V149.157Z' fill='%23D6D6D6'/%3e%3cpath d='M231.334 163.076H-181.811V164.261H231.334V163.076Z' fill='%23D6D6D6'/%3e%3cpath d='M231.334 182.628H-181.811V183.813H231.334V182.628Z' fill='%23D6D6D6'/%3e%3cpath d='M231.334 138.794H-181.811V139.979H231.334V138.794Z' fill='%23D6D6D6'/%3e%3cpath d='M222.771 200L161.625 131.093L160.878 131.932L221.284 200H222.771Z' fill='%23D6D6D6'/%3e%3cpath d='M166.907 200L124.095 131.093L123.233 131.769L165.625 200H166.907Z' fill='%23D6D6D6'/%3e%3cpath d='M116.463 200L87.9476 131.093L86.9962 131.591L115.301 200H116.463Z' fill='%23D6D6D6'/%3e%3cpath d='M69.2037 200L52.8199 131.093L51.8002 131.401L68.1157 200H69.2037Z' fill='%23D6D6D6'/%3e%3cpath d='M25.2876 131.093H24.2363V200H25.2876V131.093Z' fill='%23D6D6D6'/%3e%3c/g%3e%3cpath d='M157.427 127.256L151.161 129.774L158.617 148.329L164.883 145.811L157.427 127.256Z' fill='%236E64CA'/%3e%3cpath d='M161.391 142.023L159.23 142.891C156.568 143.961 155.91 148.559 157.759 153.162L177.554 202.419C179.404 207.023 183.061 209.887 185.723 208.817L187.884 207.949C190.545 206.879 191.204 202.281 189.354 197.678L169.559 148.421C167.71 143.817 164.052 140.953 161.391 142.023Z' fill='%23564BC1'/%3e%3cpath d='M159.118 48.7508C147.792 43.9264 135.035 43.7487 123.649 48.257C112.263 52.7653 103.181 61.5906 98.3984 72.7934C93.6156 84.003 93.5289 96.6737 98.1576 108.018C102.786 119.362 111.751 128.451 123.08 133.285C134.408 138.116 147.171 138.297 158.562 133.788C169.953 129.279 179.039 120.449 183.821 109.241C186.189 103.69 187.429 97.721 187.47 91.676C187.51 85.631 186.35 79.6282 184.056 74.0106C181.762 68.3931 178.379 63.2709 174.1 58.9367C169.821 54.6025 164.73 51.1413 159.118 48.7508ZM126.618 124.921C122.116 123.002 118.032 120.223 114.6 116.745C111.167 113.266 108.454 109.156 106.614 104.648C104.774 100.141 103.844 95.3244 103.877 90.4742C103.91 85.6239 104.905 80.8347 106.805 76.3804C110.646 67.3863 117.939 60.302 127.082 56.6854C136.224 53.0687 146.467 53.2161 155.558 57.0949C164.646 60.9754 171.838 68.268 175.552 77.3698C179.265 86.4716 179.197 96.6373 175.362 105.632C171.524 114.626 164.233 121.712 155.092 125.329C145.95 128.947 135.708 128.8 126.618 124.921Z' fill='black' fill-opacity='0.1'/%3e%3cpath d='M158.535 47.4388C146.75 42.4188 133.453 42.2832 121.568 47.0621C109.683 51.841 100.182 61.1431 95.1526 72.9243C90.1228 84.7126 89.9819 98.0162 94.7609 109.908C99.5399 121.801 108.847 131.307 120.636 136.337C132.423 141.364 145.725 141.503 157.615 136.723C169.506 131.944 179.011 122.637 184.04 110.85C186.531 105.012 187.847 98.7406 187.913 92.3937C187.979 86.0467 186.794 79.7489 184.426 73.8601C182.057 67.9713 178.552 62.6069 174.109 58.0734C169.667 53.5399 164.374 49.9262 158.535 47.4388ZM124.357 127.542C119.672 125.544 115.427 122.644 111.863 119.005C108.3 115.367 105.488 111.062 103.588 106.337C101.689 101.612 100.738 96.5584 100.792 91.4659C100.846 86.3733 101.902 81.3411 103.901 76.6568C107.939 67.1983 115.569 59.7312 125.112 55.8975C134.656 52.0638 145.331 52.1776 154.791 56.2137C164.248 60.2516 171.714 67.8796 175.548 77.421C179.383 86.9623 179.271 97.6358 175.238 107.095C171.202 116.554 163.574 124.022 154.032 127.856C144.49 131.691 133.815 131.578 124.357 127.542Z' fill='%237C7AE3'/%3e%3cpath d='M46.8531 77.0385C44.1092 67.9362 42.418 52.3748 53.9563 41.7323C62.7744 33.5987 86.5973 32.7791 94.8843 50.5166C96.2678 53.4776 94.377 58.1184 90.6562 57.9495C89.194 57.8819 88.2885 62.5106 87.4429 65.3824C88.6268 77.0384 99.174 77.2537 104.524 86.1606C111.12 97.141 103.002 113.358 83.553 113.358C64.1038 113.358 52.9544 97.2778 46.8531 77.0385Z' fill='%23E67542'/%3e%3cpath d='M62.0633 89.6036C62.0633 86.5629 62.058 71.4982 62.0631 71.2448C53.7053 72.4753 54.4144 56.6624 62.8706 60.5478C64.731 61.7303 70.5163 64.5062 70.0089 54.7083C77.9556 58.4321 84.5778 56.6927 83.2534 52.0625C88.5511 59.3385 90.1114 56.0312 90.1114 58.4321C91.3531 71.1474 90.104 84.4543 82.1927 84.4553C81.3272 84.4448 80.1315 83.9733 79.2811 83.8125V89.6036C79.2811 92.9822 79.2811 94.6715 79.2811 94.6715C79.2811 94.6715 75.1856 104.571 70.8195 104.516C66.4533 104.461 62.0633 94.6715 62.0633 94.6715C62.0633 94.6715 62.0633 92.9822 62.0633 89.6036Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M75.9921 59.9145C75.095 60.1249 74.3467 60.48 73.9445 60.7326C73.7532 60.8528 73.5006 60.7953 73.3803 60.6042C73.26 60.4132 73.3175 60.1609 73.5088 60.0407C73.986 59.7409 74.8181 59.3502 75.805 59.1188C76.7922 58.8872 77.9655 58.8078 79.1046 59.1686C79.32 59.2369 79.4392 59.4666 79.3709 59.6817C79.3026 59.8969 79.0726 60.016 78.8572 59.9478C77.9032 59.6456 76.889 59.7042 75.9921 59.9145Z' fill='%23E67542'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M85.7026 59.8254C85.181 59.7953 84.696 59.9285 84.4231 60.0537C84.2178 60.1479 83.9748 60.058 83.8805 59.8529C83.7862 59.6478 83.8762 59.4051 84.0816 59.3109C84.4593 59.1376 85.0772 58.9705 85.7499 59.0094C86.4327 59.0488 87.1891 59.3032 87.7843 59.9939C87.9317 60.165 87.9123 60.423 87.7411 60.5703C87.5698 60.7175 87.3115 60.6982 87.164 60.5271C86.7433 60.0389 86.214 59.855 85.7026 59.8254Z' fill='%23E67542'/%3e%3cpath d='M77.0996 63.9649C77.0996 64.9725 76.7575 65.7584 76.2583 65.7786C75.7591 65.7987 75.3338 65.0329 75.2784 64.0455C75.2229 63.0581 75.6112 62.252 76.1196 62.2318C76.6281 62.2117 77.0626 62.9875 77.0996 63.9649Z' fill='%23232E36'/%3e%3cpath d='M86.4354 63.9649C86.4354 64.9725 86.0933 65.7584 85.5941 65.7786C85.0948 65.7987 84.6695 65.0329 84.6141 64.0455C84.5586 63.0581 84.9562 62.252 85.4554 62.2318C85.9547 62.2117 86.4354 62.9875 86.4354 63.9649Z' fill='%23232E36'/%3e%3cpath d='M78.2915 75.4701C78.9306 76.0538 79.7983 76.3947 80.7129 76.4206C81.1585 76.4206 81.604 76.3482 82.0144 76.1984C82.4248 76.0486 82.8001 75.8265 83.1108 75.5424C83.4215 75.2583 83.6678 74.9277 83.8319 74.5609C83.9961 74.1942 84.0723 73.8016 84.0606 73.409L77.3007 73.3057C77.3007 74.1115 77.6583 74.8915 78.2915 75.4701Z' fill='%235C3737'/%3e%3cpath d='M78.7541 75.8158C78.1758 75.4439 77.7375 74.932 77.5015 74.338C78.2922 74.1933 79.1258 74.3281 79.8044 74.7103C80.4829 75.0926 80.9932 75.7022 81.1761 76.3944C81.0345 76.4099 80.8731 76.4188 80.7315 76.4239C80.0175 76.4033 79.3264 76.1877 78.7541 75.8158Z' fill='%23FFC3A6'/%3e%3cpath d='M77.4011 73.6226C77.3609 73.5695 77.3228 73.3892 77.3088 73.3057L84.0625 73.4089C84.0692 73.5445 84.0429 73.7897 84.0289 73.8953C83.6262 73.9469 77.4515 73.6889 77.4011 73.6226Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M82.4947 62.969C82.6259 62.9165 82.7761 62.9794 82.8303 63.1095C83.2588 64.1398 83.8126 65.6086 83.9869 66.9362C84.0741 67.5997 84.0698 68.2503 83.8914 68.8009C83.7097 69.3619 83.3465 69.8179 82.7364 70.0637C82.6054 70.1165 82.455 70.054 82.4005 69.924C82.3461 69.7941 82.4082 69.6459 82.5393 69.5931C82.9906 69.4112 83.2594 69.0825 83.4018 68.6427C83.5477 68.1925 83.5598 67.6263 83.4773 66.9978C83.3123 65.7416 82.7821 64.3261 82.3551 63.2996C82.301 63.1695 82.3635 63.0215 82.4947 62.969Z' fill='%23ECA06F'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.7'%3e%3cpath d='M79.0528 84.1773C75.0571 83.2547 71.2722 81.5291 67.9071 79.0957C67.9071 79.0957 70.6752 86.2169 79.0368 87.5544L79.0528 84.1773Z' fill='%23FFDCC0'/%3e%3c/g%3e%3cpath d='M102.072 102.02L98.993 116.825C98.6641 118.414 98.2957 120.002 97.8878 121.591C97.4536 123.333 96.9536 125.063 96.4274 126.781L88.6121 152.059L88.27 153.177L87.9279 154.271L87.1122 156.908L86.3359 159.426H57.9166L57.1535 156.908L56.2457 153.93L56.022 153.177L55.2326 150.564L48.2725 127.652C47.6672 125.651 47.1541 123.615 46.7199 121.579C46.2989 119.579 45.97 117.566 45.7332 115.554L42.1956 103.343L48.1277 99.1253L56.1667 95.9714L56.522 95.8302L61.8506 93.7472L66.6407 92.5938H78.9402L82.1388 93.3235L84.5465 94.3709L87.4674 95.6419L93.1907 98.1485L102.072 102.02Z' fill='%23ADDECE'/%3e%3cpath d='M79.28 95.3721V90.4268H62.0623V94.1804C62.0623 94.1804 67.3167 104.925 71.7616 104.979C76.2065 105.032 79.28 95.3721 79.28 95.3721Z' fill='%23FFDCC0'/%3e%3cpath d='M104.847 197.166L73.1521 214.547L37.9043 200.567C40.2857 187.574 47.0748 173.97 51.9034 165.474C54.8901 160.213 57.1399 156.906 57.1399 156.906H87.1118C88.888 159.425 90.5984 162.355 92.2167 165.474C99.4926 179.466 104.847 197.166 104.847 197.166Z' fill='%233A6598'/%3e%3cpath d='M85.7166 287.171C80.1117 287.171 75.533 283.193 75.362 278.18L73.02 202.427C73.02 194.296 80.4538 187.646 89.5453 187.646C98.6368 187.646 106.071 194.296 106.071 202.427C108.926 227.8 104.636 256.868 95.5318 280.898C94.1108 284.652 90.1505 287.171 85.7166 287.171Z' fill='%233A6598'/%3e%3cpath d='M58.1271 287.418C63.732 287.418 68.3107 283.44 68.4817 278.427L70.8237 202.675C70.8237 194.543 63.3899 187.894 54.2984 187.894C45.2069 187.894 37.7731 194.543 37.7731 202.675C34.918 228.047 39.2072 257.115 48.3119 281.145C49.7329 284.9 53.6932 287.418 58.1271 287.418Z' fill='%233A6598'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.022 161.745C135.099 159.058 136.346 153.383 133.808 149.07L109.616 108.673C107.077 104.359 101.714 103.04 97.6369 105.725L97.1227 105.27C93.046 107.957 92.3123 114.087 94.8514 118.402L119.043 158.798C121.581 163.112 126.944 164.431 131.022 161.745Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M104.674 135.406L93.8706 116.917C91.2659 112.46 92.5575 106.543 96.7397 103.767C100.922 100.992 106.475 102.368 109.079 106.825L120.338 124.988L104.674 135.406Z' fill='%23ADDECE'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M137.785 100.591C140.514 101.144 142.397 103.61 142.059 106.191L135.542 155.999C134.782 160.55 130.202 163.47 125.358 162.49C120.47 161.501 117.225 156.934 118.175 152.38L131.915 103.914C132.599 101.498 135.144 100.057 137.785 100.591Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.118 89.5562C145.118 89.5562 145.161 103.118 140.925 107.802C137.456 111.637 133.867 106.644 133.867 106.644C133.867 106.644 131.142 104.047 129.024 99.2193C127.629 96.0388 125.609 89.6385 127.23 88.4552C129.345 86.9116 131.204 94.3434 132.947 93.7152C134.736 93.0714 134.884 91.7857 135.449 87.8481C135.803 85.3863 135.989 82.8341 136.058 80.6385C136.175 76.9469 143.854 77.0273 145.118 89.5562Z' fill='%23FFDCC0'/%3e%3cpath d='M137.662 78.7788C137.826 78.7209 138.004 78.8148 138.058 78.9885C138.101 79.1235 138.057 79.2671 137.958 79.3515L137.946 79.3592L137.942 79.372C137.937 79.3955 137.931 79.4256 137.927 79.4616L137.921 79.5197C137.906 79.693 137.911 79.9342 137.932 80.2224C137.946 80.4033 137.966 80.5966 137.991 80.7955L138.034 81.1228C138.048 81.2194 138.061 81.3026 138.072 81.3694C138.362 83.8269 138.271 86.0476 137.941 87.9431C137.875 88.3256 137.804 88.6631 137.732 88.9527L137.658 89.2324C137.649 89.2669 137.64 89.2951 137.633 89.317C137.579 89.4908 137.402 89.5849 137.237 89.5272C137.073 89.4695 136.984 89.2819 137.039 89.1082L137.06 89.037C137.072 88.9921 137.088 88.9335 137.107 88.8614L137.126 88.7848C137.194 88.5109 137.262 88.1893 137.325 87.8232C137.643 85.9914 137.732 83.8382 137.453 81.4682L137.426 81.2996C137.407 81.1694 137.388 81.0284 137.369 80.8813C137.344 80.6723 137.323 80.4684 137.308 80.2755L137.29 80.0052C137.252 79.2803 137.319 78.8998 137.662 78.7788Z' fill='%23FFC3A6'/%3e%3cpath d='M140.584 79.0201C140.757 79.0352 140.885 79.1953 140.87 79.3778C140.856 79.5603 140.705 79.6959 140.532 79.6808C140.111 79.6439 139.931 79.9489 139.921 80.6265C139.917 80.8895 139.943 81.1766 139.99 81.4632L140.027 81.6716C140.038 81.729 140.048 81.7729 140.054 81.7994L140.079 81.8906C140.093 81.9475 140.111 82.0214 140.132 82.1117C140.189 82.3589 140.245 82.6463 140.297 82.9711C140.638 85.0795 140.654 87.5508 140.135 90.2313C140.1 90.4107 139.935 90.5262 139.765 90.4895C139.596 90.4527 139.486 90.2775 139.521 90.0982C140.024 87.504 140.008 85.1145 139.68 83.0827C139.64 82.8349 139.598 82.6109 139.555 82.412L139.489 82.1235C139.474 82.0616 139.461 82.0144 139.451 81.9796L139.423 81.8532C139.407 81.7774 139.39 81.6835 139.372 81.5753C139.32 81.2513 139.29 80.925 139.294 80.6157C139.309 79.6459 139.672 78.9943 140.484 79.0144L140.584 79.0201Z' fill='%23FFC3A6'/%3e%3cpath d='M142.628 85.3933C143.071 87.9808 142.98 90.0654 142.553 91.6608C142.415 92.1784 142.274 92.527 142.152 92.7442L141.976 92.9969L141.798 93.2587C141.705 93.3965 141.608 93.5445 141.505 93.7017C141.019 94.451 140.532 95.2563 140.077 96.0857C139.561 97.0283 139.121 97.9421 138.781 98.8031C137.906 101.014 137.762 102.686 138.489 103.597C138.6 103.737 138.583 103.946 138.451 104.064C138.319 104.182 138.121 104.164 138.01 104.025C137.082 102.861 137.245 100.969 138.203 98.5472C138.555 97.6574 139.007 96.719 139.535 95.7534C139.998 94.908 140.494 94.0886 140.989 93.3261L141.191 93.0185L141.537 92.5085C141.588 92.4354 141.622 92.3871 141.631 92.3776L141.677 92.2829C141.69 92.2523 141.706 92.2152 141.724 92.1716C141.8 91.9828 141.878 91.7525 141.951 91.4803C142.367 89.9218 142.444 87.839 141.952 85.1636L141.946 85.0316C141.932 84.5835 141.943 84.0804 141.999 83.5994C142.08 82.9065 142.239 82.384 142.528 82.0778C142.651 81.9482 142.849 81.9481 142.972 82.0774C143.08 82.1924 143.093 82.371 143.008 82.5003L142.972 82.5462C142.81 82.7176 142.686 83.1245 142.621 83.6806C142.58 84.0334 142.565 84.4056 142.568 84.7536L142.574 85.0878L142.628 85.3933Z' fill='%23FFC3A6'/%3e%3cpath d='M133.142 94.315C133.26 94.1753 133.463 94.1635 133.595 94.2887L133.736 94.4274L133.909 94.6044C133.97 94.6674 134.033 94.7343 134.099 94.8048C134.473 95.2075 134.848 95.6483 135.198 96.1141C135.835 96.9622 136.321 97.7971 136.593 98.592C136.908 99.5118 136.925 100.348 136.577 101.062C136.495 101.229 136.302 101.294 136.144 101.208C135.987 101.122 135.925 100.917 136.006 100.75C136.262 100.227 136.248 99.5803 135.989 98.8235C135.744 98.1086 135.293 97.3325 134.695 96.537C134.36 96.0914 134.001 95.668 133.641 95.2813L133.46 95.0895L133.294 94.9205C133.232 94.8584 133.189 94.8158 133.166 94.7947C133.034 94.6695 133.023 94.4547 133.142 94.315Z' fill='%23FFC3A6'/%3e%3cpath d='M44.0387 135.714C46.2067 124.38 44.8392 111.432 43.0334 104.531C42.2859 101.675 42.614 98.1907 45.3751 97.145C47.3877 96.3829 49.7936 95.7973 52.0894 95.37C55.3755 94.7584 58.301 97.2698 59.2979 100.46C62.153 109.598 69.0188 118.752 72.7019 122.777V185.699H50.7474C47.6101 185.699 44.9869 183.309 44.6393 180.191C43.2432 167.668 41.0663 151.252 44.0387 135.714Z' fill='%23E00109'/%3e%3cpath d='M72.7019 122.777C81.3146 117.004 83.1433 106.642 84.5908 99.0913C85.1072 96.3977 87.4927 94.5085 90.1947 94.9787C92.8597 95.4425 95.4461 96.2269 97.5609 97.0534C100.565 98.2276 100.221 101.414 99.5103 104.56C98.152 110.573 100.971 120.012 102.535 127.481C104.168 135.278 101.469 166.162 99.7171 180.559C99.3562 183.525 96.8224 185.699 93.8344 185.699H72.7019V122.777Z' fill='%23E00109'/%3e%3cpath opacity='0.3' d='M79.7214 163.847V161.743C81.4763 161.977 84.5181 162.444 89.6658 162.444C94.8135 162.444 99.0252 161.977 99.6102 161.743V163.847C99.2202 164.197 95.8664 165.249 90.2508 165.249C84.6351 165.249 81.2813 164.314 79.7214 163.847Z' fill='black'/%3e%3cpath opacity='0.3' d='M46.9635 163.847V161.743C48.7184 161.977 51.7602 162.444 56.9079 162.444C62.0555 162.444 66.2673 161.977 66.8522 161.743V163.847C66.4623 164.197 62.5235 165.249 56.9079 165.249C51.2922 165.249 48.5234 164.314 46.9635 163.847Z' fill='black'/%3e%3cg opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M72.7019 185.699V122.596H73.8718V185.699H72.7019Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M72.7019 122.899V122.596H73.8718V122.899H72.7019ZM72.7019 124.113V123.506H73.8718V124.113H72.7019ZM72.7019 125.326V124.719H73.8718V125.326H72.7019ZM72.7019 126.54V125.933H73.8718V126.54H72.7019ZM72.7019 127.753V127.146H73.8718V127.753H72.7019ZM72.7019 128.967V128.36H73.8718V128.967H72.7019ZM72.7019 130.18V129.573H73.8718V130.18H72.7019ZM72.7019 131.394V130.787H73.8718V131.394H72.7019ZM72.7019 132.607V132H73.8718V132.607H72.7019ZM72.7019 133.821V133.214H73.8718V133.821H72.7019ZM72.7019 135.034V134.428H73.8718V135.034H72.7019ZM72.7019 136.248V135.641H73.8718V136.248H72.7019ZM72.7019 137.461V136.855H73.8718V137.461H72.7019ZM72.7019 138.675V138.068H73.8718V138.675H72.7019ZM72.7019 139.888V139.282H73.8718V139.888H72.7019ZM72.7019 141.102V140.495H73.8718V141.102H72.7019ZM72.7019 142.315V141.709H73.8718V142.315H72.7019ZM72.7019 143.529V142.922H73.8718V143.529H72.7019ZM72.7019 144.742V144.136H73.8718V144.742H72.7019ZM72.7019 145.956V145.349H73.8718V145.956H72.7019ZM72.7019 147.17V146.563H73.8718V147.17H72.7019ZM72.7019 148.383V147.776H73.8718V148.383H72.7019ZM72.7019 149.597V148.99H73.8718V149.597H72.7019ZM72.7019 150.81V150.203H73.8718V150.81H72.7019ZM72.7019 152.024V151.417H73.8718V152.024H72.7019ZM72.7019 153.237V152.63H73.8718V153.237H72.7019ZM72.7019 154.451V153.844H73.8718V154.451H72.7019ZM72.7019 155.664V155.057H73.8718V155.664H72.7019ZM72.7019 156.878V156.271H73.8718V156.878H72.7019ZM72.7019 158.091V157.484H73.8718V158.091H72.7019ZM72.7019 159.305V158.698H73.8718V159.305H72.7019ZM72.7019 160.518V159.911H73.8718V160.518H72.7019ZM72.7019 161.732V161.125H73.8718V161.732H72.7019ZM72.7019 162.945V162.339H73.8718V162.945H72.7019ZM72.7019 164.159V163.552H73.8718V164.159H72.7019ZM72.7019 165.372V164.766H73.8718V165.372H72.7019ZM72.7019 166.586V165.979H73.8718V166.586H72.7019ZM72.7019 167.799V167.193H73.8718V167.799H72.7019ZM72.7019 169.013V168.406H73.8718V169.013H72.7019ZM72.7019 170.226V169.62H73.8718V170.226H72.7019ZM72.7019 171.44V170.833H73.8718V171.44H72.7019ZM72.7019 172.653V172.047H73.8718V172.653H72.7019ZM72.7019 173.867V173.26H73.8718V173.867H72.7019ZM72.7019 175.081V174.474H73.8718V175.081H72.7019ZM72.7019 176.294V175.687H73.8718V176.294H72.7019ZM72.7019 177.508V176.901H73.8718V177.508H72.7019ZM72.7019 178.721V178.114H73.8718V178.721H72.7019ZM72.7019 179.935V179.328H73.8718V179.935H72.7019ZM72.7019 181.148V180.541H73.8718V181.148H72.7019ZM72.7019 182.362V181.755H73.8718V182.362H72.7019ZM72.7019 183.575V182.968H73.8718V183.575H72.7019ZM72.7019 184.789V184.182H73.8718V184.789H72.7019ZM72.7019 185.699V185.395H73.8718V185.699H72.7019Z' fill='white'/%3e%3c/g%3e%3cg filter='url(%23filter0_d_2685_7436)'%3e%3cpath d='M92.4002 121.081C92.5522 121.005 92.7308 120.962 92.9047 120.976C93.4264 121.018 93.8125 121.472 93.7701 121.993C93.7559 122.167 93.6983 122.337 93.5996 122.475C94.2562 123.548 94.5897 124.828 94.4802 126.174C94.2058 129.547 91.26 132.047 87.8835 131.773C84.5216 131.5 82.0041 128.556 82.2785 125.184C82.5517 121.826 85.4987 119.311 88.8751 119.585C90.2361 119.71 91.4459 120.26 92.4002 121.081Z' fill='white'/%3e%3cpath d='M93.0886 122.841C92.9837 122.876 92.8666 122.881 92.7506 122.872C92.2289 122.83 91.8429 122.376 91.8852 121.855C91.8947 121.739 91.9331 121.625 91.9703 121.526C91.1248 120.802 90.0408 120.321 88.838 120.223C85.8093 119.977 83.1468 122.224 82.9007 125.249C82.6545 128.274 84.9045 130.919 87.9332 131.165C90.9752 131.426 93.6244 129.164 93.8706 126.139C93.9683 124.938 93.6666 123.806 93.0886 122.841Z' fill='%23E00109'/%3e%3cpath d='M93.0883 122.841C92.9833 122.876 92.8662 122.881 92.7503 122.872C92.2286 122.829 91.8425 122.376 91.8849 121.854C91.8943 121.739 91.9182 121.624 91.97 121.526C91.1245 120.802 90.0405 120.321 88.8377 120.223C85.809 119.977 83.161 122.225 82.9148 125.25C82.6687 128.275 84.9187 130.92 87.9474 131.166C90.9761 131.412 93.6241 129.164 93.8702 126.139C93.968 124.938 93.6662 123.806 93.0883 122.841Z' stroke='%23E00109' stroke-width='0.0385495' stroke-miterlimit='3.864'/%3e%3cpath d='M92.3209 121.876C92.3444 121.586 92.5951 121.373 92.885 121.397C93.1748 121.42 93.3878 121.671 93.3643 121.96C93.3407 122.25 93.09 122.463 92.8002 122.439C92.5104 122.415 92.2973 122.165 92.3209 121.876Z' fill='%23E00109'/%3e%3cpath d='M92.7859 122.438C93.074 122.461 93.3266 122.247 93.35 121.959C93.3734 121.672 93.1588 121.419 92.8707 121.396C92.5826 121.372 92.33 121.587 92.3066 121.875C92.2832 122.162 92.4978 122.415 92.7859 122.438Z' stroke='%23E00109' stroke-width='0.0356583' stroke-miterlimit='3.864'/%3e%3cpath d='M93.3396 124.77L91.9138 127.772L91.2327 127.717L91.7644 126.74L91.1224 124.59L91.8035 124.645L92.1287 126.027L92.1577 126.029L92.673 124.716L93.3396 124.77Z' fill='%23FDF737'/%3e%3cpath d='M90.8944 126.145C90.8543 126.637 90.3028 126.782 89.7811 126.739C89.2739 126.698 88.7531 126.466 88.7931 125.974L89.4597 126.028C89.4468 126.188 89.6606 126.249 89.82 126.262C89.9794 126.275 90.1858 126.248 90.1976 126.103C90.2129 125.915 89.9689 125.866 89.5714 125.732C89.1739 125.597 88.8849 125.384 88.9167 124.994C88.9567 124.501 89.4491 124.367 89.9562 124.408C90.4634 124.449 90.913 124.66 90.8742 125.138L90.2076 125.084C90.2182 124.954 90.049 124.882 89.9186 124.871C89.7737 124.859 89.6119 124.875 89.6001 125.02C89.5848 125.208 89.8735 125.246 90.1852 125.359C90.5948 125.523 90.9297 125.711 90.8944 126.145Z' fill='%23FDF737'/%3e%3cpath d='M87.8319 125.416C87.8554 125.126 87.7184 124.838 87.3416 124.808C86.9648 124.777 86.8242 125.072 86.803 125.332C86.7806 125.607 86.902 125.908 87.2787 125.939C87.67 125.971 87.8107 125.676 87.8319 125.416ZM88.3811 126.553L87.758 126.502L87.778 126.256L87.7491 126.254C87.63 126.463 87.4032 126.561 87.0844 126.535C86.5337 126.49 86.092 126.003 86.1497 125.294C86.2086 124.57 86.6786 124.171 87.2293 124.216C87.5336 124.24 87.7839 124.392 87.8845 124.589L87.9135 124.592L87.9335 124.346L88.5711 124.397L88.3811 126.553Z' fill='%23FDF737'/%3e%3cpath d='M90.0433 127.635C88.3377 127.263 86.6144 127.109 83.9182 127.079L83.9566 126.966C86.6564 126.952 88.7827 126.993 89.924 127.13C90.6039 127.199 90.802 127.274 90.782 127.52C90.7765 127.767 90.4734 127.728 90.0433 127.635Z' fill='%23FDF737'/%3e%3cpath d='M85.1405 124.964C85.1366 124.832 85.0853 124.566 84.7231 124.537C84.3898 124.51 84.2659 124.776 84.242 124.891L85.1405 124.964ZM85.7894 125.235C85.7824 125.322 85.7573 125.451 85.7573 125.451L84.1922 125.324C84.1867 125.571 84.3598 125.775 84.6206 125.796C84.809 125.811 84.9453 125.749 85.0139 125.624L85.695 125.679C85.6111 125.993 85.3028 126.376 84.5927 126.318C83.9116 126.263 83.4915 125.69 83.5433 125.053C83.5963 124.401 84.0554 123.958 84.7365 124.013C85.4321 124.07 85.8424 124.584 85.7894 125.235Z' fill='%23FDF737'/%3e%3cpath d='M85.3967 128.628C85.428 128.602 85.4738 128.576 85.5185 128.565C85.5631 128.554 85.6078 128.543 85.6513 128.547C85.6947 128.55 85.737 128.568 85.7793 128.586C85.8216 128.604 85.8627 128.637 85.8894 128.668L85.9293 128.715L85.8196 128.808L85.7809 128.747C85.7675 128.731 85.7397 128.714 85.7119 128.697C85.6841 128.681 85.6551 128.678 85.6407 128.677C85.6117 128.675 85.5827 128.672 85.567 128.686C85.5369 128.698 85.5212 128.711 85.491 128.723C85.4754 128.736 85.4585 128.764 85.4417 128.792C85.4248 128.82 85.4225 128.849 85.4213 128.863C85.4189 128.892 85.4166 128.921 85.4299 128.937C85.442 128.967 85.4553 128.983 85.4675 129.013C85.5074 129.06 85.5497 129.078 85.6077 129.082C85.6367 129.085 85.6656 129.087 85.6813 129.074C85.7115 129.062 85.7271 129.048 85.7573 129.036L85.8043 128.996L85.8975 129.106L85.8505 129.146C85.8192 129.172 85.7733 129.198 85.7287 129.209C85.684 129.22 85.6394 129.231 85.5959 129.227C85.5524 129.224 85.5101 129.206 85.4678 129.188C85.4255 129.17 85.3989 129.138 85.3578 129.106C85.3312 129.074 85.3057 129.029 85.2948 128.984C85.2838 128.939 85.2728 128.895 85.2764 128.851C85.2799 128.808 85.2979 128.766 85.316 128.724C85.3328 128.696 85.3653 128.655 85.3967 128.628Z' fill='white'/%3e%3cpath d='M86.1724 128.778C86.1253 128.818 86.1073 128.86 86.1026 128.918C86.1003 128.947 86.0979 128.976 86.11 129.006C86.1257 128.992 86.1414 128.979 86.1727 128.953C86.2041 128.926 86.2354 128.899 86.2511 128.886C86.2824 128.859 86.3137 128.833 86.3451 128.806C86.3764 128.78 86.3921 128.766 86.4077 128.753C86.3655 128.735 86.3376 128.718 86.293 128.729C86.2483 128.74 86.2037 128.751 86.1724 128.778ZM86.4856 129.051L86.5788 129.16L86.5318 129.2C86.5005 129.227 86.4547 129.252 86.41 129.263C86.3654 129.274 86.3207 129.285 86.2772 129.282C86.2338 129.278 86.1915 129.26 86.1492 129.242C86.1069 129.224 86.0802 129.193 86.0391 129.16C86.0125 129.129 85.987 129.083 85.9761 129.039C85.9651 128.994 85.9542 128.949 85.9577 128.906C85.9612 128.863 85.9793 128.82 85.9973 128.778C86.0153 128.736 86.0466 128.709 86.0792 128.668C86.1105 128.642 86.1563 128.616 86.201 128.605C86.2456 128.594 86.2903 128.583 86.3338 128.587C86.3772 128.59 86.4195 128.608 86.4618 128.626C86.5041 128.644 86.5452 128.677 86.5719 128.708L86.6118 128.755L86.2044 129.101C86.2467 129.119 86.2745 129.136 86.3192 129.125C86.3626 129.128 86.4085 129.103 86.4398 129.076L86.4856 129.051Z' fill='white'/%3e%3cpath d='M86.6391 128.962C86.6426 128.918 86.6606 128.876 86.6786 128.834C86.6967 128.792 86.728 128.765 86.7593 128.738C86.7907 128.712 86.8365 128.686 86.8812 128.675C86.9258 128.665 86.9705 128.654 87.0139 128.657C87.0574 128.661 87.0997 128.679 87.142 128.697C87.1843 128.715 87.2109 128.746 87.252 128.778C87.2787 128.81 87.3041 128.856 87.3162 128.886C87.3272 128.93 87.3382 128.975 87.3346 129.018L87.3064 129.366L87.1759 129.355L87.2042 129.008C87.2066 128.979 87.2089 128.95 87.1956 128.934C87.1835 128.904 87.1702 128.888 87.158 128.858C87.1447 128.843 87.1169 128.826 87.0891 128.809C87.0613 128.792 87.0323 128.79 87.0033 128.787C86.9743 128.785 86.9454 128.783 86.9152 128.795C86.885 128.807 86.8694 128.82 86.8537 128.834C86.838 128.847 86.8212 128.875 86.8043 128.902C86.7875 128.93 86.7863 128.945 86.784 128.974L86.7557 129.321L86.6108 129.309L86.6391 128.962Z' fill='white'/%3e%3cpath d='M87.4838 128.797C87.5151 128.771 87.561 128.745 87.6056 128.734C87.6503 128.723 87.6949 128.712 87.7384 128.716C87.7819 128.719 87.8242 128.737 87.8664 128.755C87.9087 128.773 87.9499 128.806 87.9765 128.837L88.0164 128.884L87.9067 128.977L87.8668 128.93C87.8535 128.915 87.8257 128.898 87.7979 128.881C87.7701 128.864 87.7411 128.862 87.7266 128.861C87.6976 128.858 87.6686 128.856 87.653 128.869C87.6228 128.881 87.6071 128.895 87.577 128.907C87.5613 128.92 87.5445 128.948 87.5276 128.976C87.5108 129.003 87.5084 129.032 87.5072 129.047C87.5049 129.076 87.5025 129.105 87.5158 129.12C87.528 129.151 87.5413 129.166 87.5534 129.196C87.5934 129.243 87.6357 129.261 87.6936 129.266C87.7226 129.268 87.7516 129.271 87.7673 129.257C87.7974 129.245 87.8131 129.232 87.8433 129.22L87.8903 129.18L87.9835 129.289L87.9231 129.314C87.8918 129.34 87.846 129.366 87.8013 129.377C87.7567 129.388 87.712 129.399 87.6685 129.395C87.6251 129.392 87.5828 129.374 87.5405 129.356C87.4982 129.338 87.4715 129.306 87.4304 129.274C87.4038 129.242 87.3784 129.197 87.3674 129.152C87.3564 129.107 87.3455 129.063 87.349 129.019C87.3525 128.976 87.3706 128.934 87.3886 128.892C87.4199 128.865 87.4524 128.824 87.4838 128.797Z' fill='white'/%3e%3cpath d='M88.175 129.087C88.1726 129.116 88.1703 129.145 88.1824 129.175C88.1946 129.205 88.2079 129.22 88.22 129.251C88.2333 129.266 88.2611 129.283 88.2889 129.3C88.3167 129.317 88.3457 129.319 88.3747 129.321C88.4037 129.324 88.4327 129.326 88.4628 129.314C88.493 129.302 88.5086 129.289 88.5388 129.276C88.5545 129.263 88.5713 129.235 88.5882 129.208C88.605 129.18 88.6074 129.151 88.6097 129.122C88.6121 129.093 88.6144 129.064 88.6011 129.048C88.589 129.018 88.5757 129.003 88.5635 128.973C88.5502 128.957 88.5224 128.94 88.4946 128.923C88.4668 128.906 88.4378 128.904 88.4088 128.902C88.3799 128.899 88.3509 128.897 88.3207 128.909C88.2906 128.921 88.2749 128.935 88.2447 128.947C88.2291 128.96 88.2122 128.988 88.1954 129.015C88.193 129.044 88.1773 129.058 88.175 129.087ZM88.0446 129.076C88.0481 129.033 88.0661 128.99 88.0842 128.948C88.1022 128.906 88.1335 128.879 88.1649 128.853C88.1962 128.826 88.242 128.801 88.2867 128.79C88.3313 128.779 88.376 128.768 88.4194 128.771C88.4629 128.775 88.5052 128.793 88.5475 128.811C88.5898 128.829 88.6164 128.86 88.6576 128.893C88.6842 128.924 88.7096 128.97 88.7218 129C88.7327 129.045 88.7437 129.089 88.7402 129.133C88.7366 129.176 88.7186 129.218 88.7006 129.26C88.6825 129.303 88.6512 129.329 88.6187 129.37C88.5874 129.397 88.5415 129.422 88.4969 129.433C88.4522 129.444 88.4076 129.455 88.3641 129.452C88.3206 129.448 88.2783 129.43 88.236 129.412C88.1937 129.394 88.1671 129.363 88.126 129.33C88.0994 129.299 88.0739 129.253 88.063 129.209C88.0508 129.179 88.0399 129.134 88.0446 129.076Z' fill='white'/%3e%3cpath d='M89.4048 128.851L89.3942 128.981L88.9884 128.948C88.9739 128.947 88.9594 128.946 88.9438 128.959C88.9281 128.973 88.9269 128.987 88.9257 129.002C88.9246 129.016 88.9234 129.031 88.9367 129.046C88.95 129.062 88.9645 129.063 88.979 129.064L89.2543 129.087C89.2833 129.089 89.3123 129.091 89.3256 129.107C89.3534 129.124 89.3667 129.139 89.38 129.155C89.3934 129.171 89.4055 129.201 89.4176 129.231C89.4298 129.261 89.4286 129.276 89.4262 129.305C89.4239 129.334 89.4215 129.362 89.4047 129.39C89.3878 129.418 89.3722 129.431 89.3553 129.459C89.3396 129.472 89.3095 129.485 89.2938 129.498C89.2637 129.51 89.2347 129.508 89.2202 129.506L88.8144 129.473L88.825 129.343L89.2308 129.376C89.2453 129.377 89.2743 129.38 89.2754 129.365C89.2911 129.352 89.2923 129.337 89.2935 129.323C89.2946 129.308 89.2958 129.294 89.2825 129.278C89.2692 129.263 89.2547 129.262 89.2402 129.26L88.9649 129.238C88.9359 129.236 88.9069 129.233 88.8791 129.216C88.8513 129.2 88.838 129.184 88.8247 129.168C88.8114 129.153 88.7992 129.123 88.7859 129.107C88.7738 129.077 88.7761 129.048 88.7785 129.019C88.7808 128.99 88.7832 128.961 88.7989 128.948C88.8157 128.92 88.8314 128.907 88.8482 128.879C88.8639 128.866 88.894 128.853 88.9097 128.84C88.9399 128.828 88.9689 128.83 88.9978 128.833L89.4036 128.866L89.4048 128.851Z' fill='white'/%3e%3cpath d='M90.2022 128.916L90.1751 129.249C90.1716 129.292 90.1535 129.334 90.1355 129.377C90.1175 129.419 90.0861 129.446 90.0536 129.487C90.0223 129.513 89.9765 129.539 89.9318 129.55C89.8872 129.56 89.8425 129.571 89.799 129.568C89.7556 129.564 89.7133 129.546 89.671 129.528C89.6287 129.51 89.602 129.479 89.5609 129.447C89.5343 129.415 89.5088 129.37 89.4979 129.325C89.4869 129.28 89.476 129.236 89.4795 129.192L89.5066 128.859L89.637 128.87L89.6099 129.203C89.6076 129.232 89.6052 129.261 89.6174 129.291C89.6295 129.321 89.6428 129.337 89.6549 129.367C89.6683 129.382 89.6961 129.399 89.7239 129.416C89.7517 129.433 89.7806 129.435 89.8096 129.438C89.8386 129.44 89.8676 129.442 89.8978 129.43C89.9279 129.418 89.9436 129.405 89.9737 129.393C89.9894 129.379 90.0063 129.352 90.0231 129.324C90.04 129.296 90.0423 129.267 90.0447 129.238L90.0718 128.905L90.2022 128.916Z' fill='white'/%3e%3cpath d='M90.5352 129.482C90.5642 129.485 90.5931 129.487 90.6088 129.474C90.639 129.461 90.6546 129.448 90.6703 129.435C90.686 129.422 90.7028 129.394 90.7197 129.366C90.7365 129.338 90.7389 129.309 90.7412 129.28L90.7577 129.078L90.5693 129.062C90.5403 129.06 90.5114 129.058 90.4812 129.07C90.451 129.082 90.4354 129.095 90.4052 129.107C90.3895 129.121 90.3727 129.148 90.3558 129.176C90.339 129.204 90.3378 129.218 90.3355 129.247C90.3331 129.276 90.3308 129.305 90.3429 129.335C90.355 129.366 90.3683 129.381 90.3805 129.411C90.3938 129.427 90.4216 129.444 90.4494 129.461C90.4772 129.477 90.5062 129.48 90.5352 129.482ZM90.9489 128.7L90.8995 129.308C90.8959 129.351 90.8779 129.393 90.8599 129.436C90.8418 129.478 90.8105 129.505 90.778 129.546C90.7467 129.572 90.7008 129.598 90.6707 129.61C90.626 129.621 90.5814 129.632 90.5379 129.628C90.4944 129.625 90.4521 129.607 90.4098 129.589C90.3675 129.571 90.3409 129.539 90.2998 129.507C90.2732 129.475 90.2477 129.43 90.2367 129.385C90.2258 129.34 90.2148 129.296 90.2184 129.252C90.2219 129.209 90.2399 129.167 90.2579 129.125C90.276 129.082 90.3073 129.056 90.3386 129.029C90.37 129.003 90.4158 128.977 90.4605 128.966C90.5051 128.955 90.5498 128.944 90.5932 128.948L90.7961 128.964L90.8185 128.689L90.9489 128.7Z' fill='white'/%3e%3c/g%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M76.5196 183.985C76.5196 183.985 68.1527 181.634 67.6483 176.597C67.1911 172.033 71.7368 171.069 71.7368 171.069C71.7368 171.069 76.0974 169.401 81.308 169.529C84.7402 169.615 91.2571 170.43 91.4693 172.218C91.7465 174.549 84.422 173.202 84.0957 174.876C83.7604 176.592 85.2539 176.982 88.3635 178.968C90.3063 180.209 92.711 180.681 94.158 182.043C96.9861 184.703 88.7804 188.543 76.5196 183.985Z' fill='%23FFDCC0'/%3e%3cpath d='M83.6497 179.343C83.7727 179.231 83.9648 179.24 84.0789 179.362L84.1778 179.462C84.2359 179.518 84.3128 179.59 84.4087 179.675C84.6921 179.926 85.033 180.196 85.4312 180.475C87.4077 181.859 89.9347 182.892 93.011 183.249C93.1777 183.268 93.2981 183.417 93.2798 183.582C93.2615 183.746 93.1115 183.864 92.9448 183.845C89.7611 183.476 87.1389 182.404 85.0826 180.964C84.6647 180.672 84.3055 180.387 84.005 180.12L83.8629 179.992C83.7565 179.893 83.6801 179.817 83.6337 179.767C83.5196 179.645 83.5268 179.455 83.6497 179.343Z' fill='%23FFC3A6'/%3e%3cpath d='M81.5398 181.728C81.6373 181.594 81.827 181.564 81.9635 181.661C84.0502 183.151 86.4669 184.027 88.7854 184.447L89.0906 184.499C89.1878 184.515 89.2806 184.529 89.3685 184.541L89.676 184.58C89.7062 184.583 89.7299 184.585 89.7468 184.587C89.914 184.601 90.0388 184.746 90.0257 184.912C90.0125 185.077 89.8663 185.199 89.699 185.185L89.5625 185.171C89.5223 185.166 89.4756 185.16 89.4227 185.153C89.2049 185.125 88.9561 185.087 88.6804 185.037C86.2799 184.602 83.7814 183.697 81.6103 182.147C81.4739 182.05 81.4423 181.862 81.5398 181.728Z' fill='%23FFC3A6'/%3e%3cpath d='M78.5574 182.752C78.6685 182.629 78.8605 182.619 78.9861 182.73L79.0381 182.773C79.0718 182.8 79.1171 182.835 79.1744 182.877L79.2356 182.922C79.458 183.083 79.7328 183.261 80.0622 183.452C81.4359 184.246 83.2681 184.984 85.6028 185.559C85.7658 185.599 85.8661 185.762 85.8267 185.923C85.7874 186.084 85.6233 186.182 85.4603 186.142C83.069 185.553 81.1825 184.793 79.7585 183.969C79.4689 183.802 79.2176 183.642 79.0035 183.494L78.8795 183.406C78.7329 183.3 78.635 183.221 78.5837 183.176C78.4581 183.065 78.4463 182.876 78.5574 182.752Z' fill='%23FFC3A6'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M74.2543 176.481C75.2058 174.198 74.1651 171.565 71.8933 170.504L28.0341 150.04C23.9418 148.291 19.2168 150.173 17.5292 154.226C15.8266 158.315 17.8782 163.012 22.0691 164.624L68.5418 179.106C70.8576 179.828 73.3351 178.69 74.2543 176.481Z' fill='%23FFDCC0'/%3e%3cpath d='M40.8568 104.808C38.7956 105.615 37.0421 107.214 36.0862 109.41L17.7526 151.541C15.8442 155.925 17.8384 161.031 22.2064 162.947L22.3665 163.017C26.7345 164.932 31.8222 162.93 33.7306 158.546L48.227 125.234L40.8568 104.808Z' fill='%23FFDCC0'/%3e%3cpath d='M42.1956 103.657C38.8845 103.657 36.3152 106.288 35.2736 108.6L26.2958 128.523L46.1624 135.962L49.13 127.748C49.13 127.748 55.9049 112.284 51.4667 106.964C48.1556 102.995 42.1956 103.657 42.1956 103.657Z' fill='%23ADDECE'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_2685_7436' x='51.4636' y='94.8345' width='73.8315' height='73.816' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dy='6.06383'/%3e%3cfeGaussianBlur stdDeviation='15.1596'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2685_7436'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2685_7436' result='shape'/%3e%3c/filter%3e%3cclipPath id='clip0_2685_7436'%3e%3crect width='200' height='200' rx='100' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_2685_7436'%3e%3crect width='413.333' height='200' fill='white' transform='translate(-182)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const EmptyResultsComponent = ({
  emptyMessage,
  descriptionMessage,
  emptyImage
}) => {
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    gap: 'm',
    horizontalAlign: "center",
    verticalAlign: "center",
    height: 'full'
  }, {
    children: [jsx(Ramen.XImage, {
      src: emptyImage || img$a
    }), jsxs(Ramen.XText, {
      children: [emptyMessage || 'Oops! tu cotización esta vacia', " "]
    }), !!descriptionMessage && jsxs(Ramen.XText, Object.assign({
      fontSize: 8
    }, {
      children: [descriptionMessage || 'Oops! tu cotización esta vacia', " "]
    }))]
  }));
};

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var sapClient = new sapApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var companyClient = new CompanyApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

const initState = {
  user: null,
  isAuthenticated: false,
  userData: null,
  companyData: null,
  provider: ''
};
const storageName = '@user';
const UserContext = /*#__PURE__*/createContext({});
const UserContextProvider = ({
  clientRequest,
  children
}) => {
  const [data, updateStateContext] = useState(initState);
  const userData = data ? data.userData : null;
  const companyData = data ? data.companyData : null;
  const isAuthenticated = data ? data.isAuthenticated : null;
  useEffect(() => {
    getMe();
    return () => {};
  }, []);
  const hasPermission = useCallback(permission => {
    if (!permission) return true;
    if (!userData || !userData.permissions) return false;
    return userData.permissions.some(userPermission => userPermission === 'ADMIN' || userPermission === permission.toUpperCase());
  }, [userData]);
  const hasRoles = useCallback((roles, needAll) => {
    if (!roles) return true;
    if (!userData || !userData.roles) return false;
    const _hasRole = role => userData.roles.some(userRole => userRole === role);
    if (Array.isArray(roles)) {
      if (needAll) return !roles.some(role => !_hasRole(role));else return roles.some(role => _hasRole(role));
    }
    return _hasRole(roles);
  }, [userData]);
  const login = (email, password, country_code = 'CL', provider, remember = false) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = yield clientRequest.login({
        email,
        password,
        country_code
      });
      //Set Token to send to Backend.
      yield clientRequest.setToken(data.access_token, remember);
      sessionStorage.setItem(storageName, JSON.stringify(data));
      yield getMe();
    } catch (error) {
      throw error;
    }
  });
  const getDataCompany = rut => __awaiter(void 0, void 0, void 0, function* () {
    try {
      let office;
      let sellers = [];
      const {
        sapCode,
        hasCreditLine,
        address
      } = yield sapClient.customerValidate(rut);
      const [dataCompany, sellersOfficesData, addresses] = yield Promise.all([sapClient.getInfoCompany(sapCode), companyClient.getAssignedSellersOffices(), companyClient.getAddress()]);
      const {
        clientData
      } = dataCompany;
      const [sellerByOffice] = sellersOfficesData.sellers_by_office;
      if (!!sellerByOffice) {
        sellers = sellerByOffice.sellers;
        office = sellerByOffice.office;
      }
      const infoCredit = {
        amountCredit: clientData === null || clientData === void 0 ? void 0 : clientData.SaldoDisponible,
        currency: clientData === null || clientData === void 0 ? void 0 : clientData.Moneda,
        limitCredit: clientData === null || clientData === void 0 ? void 0 : clientData.LimiteCredito,
        Totalfac: clientData === null || clientData === void 0 ? void 0 : clientData.Totalfac,
        CompTotal: clientData === null || clientData === void 0 ? void 0 : clientData.CompTotal,
        Importe: clientData === null || clientData === void 0 ? void 0 : clientData.Importe,
        ValorComercial: clientData === null || clientData === void 0 ? void 0 : clientData.ValorComercial,
        Vencineto: clientData === null || clientData === void 0 ? void 0 : clientData.Vencineto,
        VencLineaCred: clientData === null || clientData === void 0 ? void 0 : clientData.VencLineaCred
      };
      return {
        rut,
        sapCode,
        hasCreditLine,
        address,
        infoCredit,
        office,
        sellers,
        deliveryAddresses: addresses,
        toDelivery: addresses[0]
      };
    } catch (error) {
      throw error;
    }
  });
  const getMe = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const tokenAuth = clientRequest.getToken();
      const user = yield sessionStorage.getItem(storageName);
      if (!!tokenAuth && !!user) {
        //get info data User
        const userData = yield clientRequest.me();
        const companyInfo = userData === null || userData === void 0 ? void 0 : userData.company_id;
        const {
          identification_id,
          addresses,
          credit_limit,
          sap_code,
          name
        } = companyInfo;
        const companyData = Object.assign(Object.assign({}, (data === null || data === void 0 ? void 0 : data.companyData) || {}), {
          sapCode: sap_code,
          hasCreditLine: credit_limit > 0,
          name,
          address: addresses,
          rut: identification_id
        });
        updateStateContext({
          isAuthenticated: !!user,
          user: JSON.parse(user),
          userData,
          companyData,
          provider: ''
        });
        return userData;
      }
      return null;
    } catch (error) {
      return null;
    }
  });
  const logout = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield clientRequest.logout();
    } catch (error) {
      console.log(error);
    }
    yield updateStateContext({
      isAuthenticated: false,
      user: undefined,
      userData: undefined,
      companyData: undefined,
      provider: ''
    });
    clientRequest.removeToken();
    yield sessionStorage.removeItem(storageName);
  });
  return jsx(UserContext.Provider, Object.assign({
    value: {
      data,
      companyData,
      userData,
      isAuthenticated,
      getMe,
      getDataCompany,
      updateStateContext,
      hasRoles,
      hasPermission,
      login,
      logout
    }
  }, {
    children: children
  }));
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUserContext must be used within a UserProvider`);
  }
  return context;
};

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var cartClient = new CartRequestApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

var img$9 = "data:image/svg+xml,%3csvg width='111' height='111' viewBox='0 0 111 111' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M71.0041 21.3933C63.6175 18.102 55.365 17.2867 47.4772 19.0688C39.5895 20.851 32.4891 25.1351 27.2351 31.2823C21.9811 37.4295 18.8549 45.1104 18.3228 53.1794C17.7908 61.2485 19.8813 69.2734 24.2826 76.0573C28.684 82.8411 35.1603 88.0205 42.7458 90.8229C50.3313 93.6254 58.6194 93.9007 66.3741 91.6079C74.1289 89.3151 80.9347 84.5769 85.7765 78.1001C90.6184 71.6233 93.2369 63.7548 93.2415 55.6683V51.8373C93.2415 49.5361 95.107 47.6707 97.4082 47.6707C99.7094 47.6707 101.575 49.5361 101.575 51.8373V55.6707C101.569 65.5543 98.3688 75.1736 92.451 83.0897C86.5331 91.0058 78.2149 96.7969 68.7369 99.5992C59.2589 102.402 49.129 102.065 39.8579 98.6399C30.5867 95.2147 22.6712 88.8843 17.2918 80.5929C11.9123 72.3015 9.35725 62.4933 10.0076 52.6311C10.6579 42.769 14.4787 33.3812 20.9003 25.868C27.3219 18.3547 36.0001 13.1185 45.6407 10.9404C55.2813 8.76221 65.3678 9.75875 74.3957 13.7814C76.4977 14.718 77.4424 17.1812 76.5058 19.2832C75.5693 21.3851 73.106 22.3299 71.0041 21.3933Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M100.353 19.3896C101.981 21.016 101.982 23.6541 100.356 25.2821L58.6893 66.9905C57.908 67.7725 56.848 68.212 55.7426 68.2123C54.6371 68.2126 53.5769 67.7736 52.7953 66.9919L40.2953 54.4919C38.6681 52.8647 38.6681 50.2266 40.2953 48.5994C41.9224 46.9722 44.5606 46.9722 46.1878 48.5994L55.7401 58.1516L94.4604 19.3925C96.0868 17.7645 98.725 17.7632 100.353 19.3896Z' fill='black'/%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3csvg width='110' height='110' viewBox='0 0 110 110' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M54.9997 13.75C32.2179 13.75 13.7497 32.2183 13.7497 55C13.7497 77.7818 32.2179 96.25 54.9997 96.25C77.7814 96.25 96.2497 77.7818 96.2497 55C96.2497 32.2183 77.7814 13.75 54.9997 13.75ZM4.58301 55C4.58301 27.1557 27.1553 4.58337 54.9997 4.58337C82.844 4.58337 105.416 27.1557 105.416 55C105.416 82.8444 82.844 105.417 54.9997 105.417C27.1553 105.417 4.58301 82.8444 4.58301 55Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M54.9997 32.0834C57.531 32.0834 59.583 34.1354 59.583 36.6667V55C59.583 57.5313 57.531 59.5834 54.9997 59.5834C52.4684 59.5834 50.4163 57.5313 50.4163 55V36.6667C50.4163 34.1354 52.4684 32.0834 54.9997 32.0834Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M50.4163 73.3334C50.4163 70.8021 52.4684 68.75 54.9997 68.75H55.0455C57.5768 68.75 59.6288 70.8021 59.6288 73.3334C59.6288 75.8647 57.5768 77.9167 55.0455 77.9167H54.9997C52.4684 77.9167 50.4163 75.8647 50.4163 73.3334Z' fill='black'/%3e%3c/svg%3e";

var Styles$9 = {"xalert-modal":"root-module_xalert-modal__DrLKB","xalert-modal__backdrop":"root-module_xalert-modal__backdrop__mPVil","xalert-modal__content":"root-module_xalert-modal__content__EOPQX","xalert-modal__header":"root-module_xalert-modal__header__XoAND","xalert-modal__body":"root-module_xalert-modal__body__z3zBz","xalert-modal__body__image":"root-module_xalert-modal__body__image__LfNCK","xalert-modal__body__title":"root-module_xalert-modal__body__title__E4y6R","xalert-modal__body__message":"root-module_xalert-modal__body__message__qOIrH","xalert-modal__actions":"root-module_xalert-modal__actions__TiEa5"};

const XAlertModal = props => {
  const onCloseModalHandler = () => {
    if (props.onClose) {
      props.onClose();
    }
  };
  const onCancelHandler = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };
  const onConfirmHandler = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
  };
  if (!props.visible) {
    return null;
  }
  const rootClass = classnames(Styles$9['xalert-modal']);
  const getImage = type => {
    switch (type) {
      case 'success':
        return img$9;
      default:
        return img$8;
    }
  };
  return jsxs("div", Object.assign({
    className: rootClass
  }, {
    children: [jsx("div", {
      className: Styles$9['xalert-modal__backdrop']
    }), jsxs("div", Object.assign({
      className: Styles$9['xalert-modal__content']
    }, {
      children: [jsx("div", Object.assign({
        className: Styles$9['xalert-modal__header']
      }, {
        children: jsx(Ramen.XButtonIcon, {
          size: "s",
          icon: "close-outline",
          type: "clear",
          onClick: onCloseModalHandler
        })
      })), jsxs("div", Object.assign({
        className: Styles$9['xalert-modal__body']
      }, {
        children: [jsx("div", Object.assign({
          className: Styles$9['xalert-modal__body__image']
        }, {
          children: jsx(Ramen.XImage, {
            src: getImage(`${props.type}`)
          })
        })), props.title && jsx("div", Object.assign({
          className: Styles$9['xalert-modal__body__title']
        }, {
          children: jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 7
          }, {
            children: props.title
          }))
        })), props.message && jsx("div", Object.assign({
          className: Styles$9['xalert-modal__body__message']
        }, {
          children: jsx(Ramen.XText, Object.assign({
            colorThone: "dim",
            weight: "lighter",
            fontSize: 10
          }, {
            children: props.message
          }))
        })), props.children]
      })), jsxs("div", Object.assign({
        className: Styles$9['xalert-modal__actions']
      }, {
        children: [props.useCancel && jsx(Ramen.XButton, {
          size: "xl",
          text: props.cancelText,
          type: "outline",
          onClick: onCancelHandler
        }), jsx(Ramen.XButton, {
          size: "xl",
          text: props.confirmText,
          type: "solid",
          onClick: onConfirmHandler
        })]
      }))]
    }))]
  }));
};
XAlertModal.defaultProps = {
  visible: false,
  useCancel: true,
  title: undefined,
  message: undefined,
  cancelText: 'Cancelar',
  type: 'confirm',
  confirmText: 'Confirmar'
};

const ModalCart = ({
  titleModal,
  emptyModalMessage,
  showPrices
}) => {
  const {
    cart,
    totalPrice,
    dispath,
    clearCart,
    isOpenModal,
    setIsOpenModal
  } = useCartContext();
  const {
    setIsOpenModalLogin
  } = useGlobal();
  const {
    companyData
  } = useUserContext();
  const {
    getStorage
  } = useLocalStorage();
  const {
    isAuthenticated
  } = useUserContext();
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [showModal, setShoModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [modalErrorMsg, setModalErrorMsg] = useState(false);
  const titleAlert = isAuthenticated ? 'Una vez envíes la solicitud, tu ejecutivo se encargará de enviarte un correo con la cotización.' : 'Inicia sesión para solicitar una cotización. Si no tienes cuenta solicita acceso.';
  const titleOkButton = isAuthenticated ? 'Enviar cotización' : "Iniciar sesión";
  const openLogin = () => __awaiter(void 0, void 0, void 0, function* () {
    setIsOpenModalLogin(true);
    setIsOpenModal(false);
  });
  const sentCart = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
      setIsLoadingRequest(true);
      const address = (companyData === null || companyData === void 0 ? void 0 : companyData.toDelivery) || (companyData === null || companyData === void 0 ? void 0 : companyData.address[0]);
      if (!address) {
        throw new Error("invalidAddress");
      }
      const cartMapped = cart.map(item => {
        var _a, _b, _c;
        return {
          ean: item.ean,
          sku: item.sku,
          quantity: item.quantity,
          unit: item.saleUnit || `${(_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.metadata) === null || _a === void 0 ? void 0 : _a.unit) === null || _b === void 0 ? void 0 : _b.saleUnit) === null || _c === void 0 ? void 0 : _c.code}`
        };
      });
      const input = {
        cart_details: cartMapped,
        address: companyData === null || companyData === void 0 ? void 0 : companyData.address[0]
      };
      yield cartClient.createIntention(input);
      clearCart();
      setIsOpenModal(false);
      setIsLoadingRequest(false);
      setShoModal(true);
    } catch (error) {
      console.log(error);
      let message = "Ha ocurrido un error enviando la solicitud de cotización.";
      if ((error === null || error === void 0 ? void 0 : error.message) === "invalidAddress") {
        message = "No se encontró dirección de despacho. Por favor seleccione una dirección de despacho en su perfil.";
        setIsOpenModal(false);
      }
      if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) === "User doesn't have any associated seller") {
        setErrorMsg({
          title: 'Ups! De momento no tienes vendedor asignado.',
          message: 'Contáctanos y te ayudaremos.'
        });
        setModalErrorMsg(true);
        setIsOpenModal(false);
      } else {
        Ramen.Api.notification.error({
          description: message
        });
      }
      setIsLoadingRequest(false);
    }
  });
  const onAction = () => {
    if (!isAuthenticated) {
      openLogin();
    } else {
      sentCart();
    }
  };
  useEffect(() => {
    const fethProducts = () => {
      const cartData = getStorage('SHOP_CART');
      dispath({
        type: 'SET_CART',
        payload: cartData
      });
    };
    fethProducts();
  }, []);
  return jsxs(Fragment, {
    children: [jsxs(Ramen.XDrawer, Object.assign({
      size: 'l',
      title: titleModal || 'Mi cotización',
      closable: true,
      open: isOpenModal,
      onClose: () => setIsOpenModal(!isOpenModal),
      onClickAction: () => setIsOpenModal(!isOpenModal)
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        colorThone: "dim"
      }, {
        children: "Aqu\u00ED est\u00E1 el detalle de los productos que has agregado a tu cotizaci\u00F3n."
      })), jsx(Ramen.XVSpace, {
        size: "xs"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        gap: "s",
        verticalAlign: "between"
      }, {
        children: [jsx("div", Object.assign({
          className: "cart-wrapper__body"
        }, {
          children: cart.length <= 0 ? jsx(EmptyResultsComponent, {
            emptyMessage: emptyModalMessage
          }) : jsx(Ramen.XList, {
            dataSource: cart,
            skeleton: isLoadingRequest,
            renderItem: (item, i) => jsx(ShopCartItem$1, {
              showPrices: showPrices,
              item: item
            }, i)
          })
        })), jsx(Ramen.XAlert, {
          showIcon: true,
          type: "info",
          title: titleAlert
        }), jsx(Ramen.XDivider, {}), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: 'm',
          horizontalAlign: showPrices ? 'between' : 'end',
          verticalAlign: "center",
          height: 'full'
        }, {
          children: [showPrices && jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            gap: "xxs"
          }, {
            children: [jsx(Ramen.XText, {
              children: "Total:"
            }), jsx(Ramen.XText, Object.assign({
              fontSize: 8
            }, {
              children: !!totalPrice ? NumberFormatter$1.toCurrency(Number(totalPrice)) : '-'
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            gap: "s"
          }, {
            children: [jsx(Ramen.XButton, {
              disabled: isLoadingRequest,
              type: "outline",
              text: "Limpiar carrito",
              onClick: () => clearCart()
            }), jsx(Ramen.XButton, {
              type: "solid",
              disabled: isAuthenticated && !cart.length || isLoadingRequest,
              loading: isLoadingRequest,
              text: titleOkButton,
              onClick: onAction
            })]
          }))]
        }))]
      }))]
    })), jsx(XAlertModal, {
      type: 'success',
      visible: showModal,
      confirmText: 'Finalizar',
      onClose: () => setShoModal(false),
      useCancel: false,
      onConfirm: () => setShoModal(false),
      title: "Solicitud de cotizaci\u00F3n enviada",
      message: 'Nos contactaremos contigo lo antes posible para atender especialmente tu solicitud.'
    }), jsx(XAlertModal, {
      type: 'confirm',
      visible: modalErrorMsg,
      confirmText: 'Finalizar',
      onClose: () => setModalErrorMsg(false),
      useCancel: false,
      onConfirm: () => setModalErrorMsg(false),
      title: (errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.title) || '',
      message: (errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.message) || ''
    })]
  });
};
var ModalCart$1 = /*#__PURE__*/memo(ModalCart);

const useInView = callback => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const observerCallBack = entrys => {
    const [entry] = entrys;
    setIsInView(entry.isIntersecting);
    if (entry.isIntersecting === true) {
      callback();
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallBack, {
      threshold: 1
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  });
  return {
    isInView,
    elementRef
  };
};

const GridContainer = ({
  children,
  className: _className = ''
}) => {
  classnames({});
  return jsx("div", Object.assign({
    className: `grid-container ${_className}`
  }, {
    children: children
  }));
};

const ListWrapper = ({
  loading,
  itemRender,
  loadMoreLoading,
  filters,
  data,
  useInfinite: _useInfinite = false,
  loadingRender,
  loadingMoreRender,
  loadMoreProducts,
  emptyResultRender
}) => {
  const loadMore = () => {
    _useInfinite && loadMoreProducts && loadMoreProducts();
  };
  const {
    elementRef
  } = useInView(loadMore);
  return jsxs("div", Object.assign({
    className: "listWrapper"
  }, {
    children: [jsxs(GridContainer, {
      children: [loadingRender && loadingRender(loading, filters.limit), data.map((item, index) => itemRender && itemRender(item, index))]
    }), _useInfinite && loadMoreLoading && loadingMoreRender && loadingMoreRender(), _useInfinite && data.length > 0 && !loadMoreLoading && jsx("div", {
      style: {
        height: '4px'
      },
      ref: elementRef
    }), !loading && data.length <= 0 && emptyResultRender && emptyResultRender()]
  }));
};

const LoaderCard = size => Array(size).fill(0).map((_, i) => jsx(ProductCardLoading, {}, i));
const itemRenderProduct = (product, i) => {
  return jsx(Fragment$1, {
    children: jsx(ProductCard, {
      productData: product
    })
  }, i);
};
const loadingRenderProduct = (loading, size) => {
  return loading && LoaderCard(size);
};
const loadingMoreRenderProduct = () => {
  return jsx(Ramen.XBox, Object.assign({
    orientation: "horizontal",
    width: 'full',
    horizontalAlign: "center"
  }, {
    children: jsx(Loader, {})
  }));
};
const emptyResultsRender = () => {
  return jsx(EmptyResultsComponent, {
    emptyMessage: "Oops... no hay resultados de b\u00FAsqueda.",
    descriptionMessage: "Lo sentimos, no hay datos para mostrar ahora"
  });
};
const ProductsList = ({
  loading,
  loadMoreLoading,
  filters,
  data,
  useInfinite: _useInfinite = false,
  loadMoreProducts
}) => jsx(ListWrapper, {
  filters: filters,
  data: data,
  loadMoreLoading: loadMoreLoading,
  loading: loading,
  useInfinite: _useInfinite,
  itemRender: itemRenderProduct,
  loadingRender: loadingRenderProduct,
  loadingMoreRender: loadingMoreRenderProduct,
  emptyResultRender: emptyResultsRender,
  loadMoreProducts: loadMoreProducts
});

var Styles$8 = {"filter-component":"root-module_filter-component__C4Mmr","filter-container":"root-module_filter-container__cbkC0"};

const breakPoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

var Styles$7 = {"xcontainer_filter":"root-module_xcontainer_filter__cEYyE","container_filter__item":"root-module_container_filter__item__IchDn","xcontainer_filter__title":"root-module_xcontainer_filter__title__ZdzKr","xcontainer_filter__item":"root-module_xcontainer_filter__item__dyeBW","xcontainer_filter__item--selected":"root-module_xcontainer_filter__item--selected__93n0o"};

const Root = ({
  filter,
  activeFilters,
  setActiveFilters,
  onFilterClick
}) => {
  const [updated, setUpdated] = useState(false);
  const [search, setSearch] = useState();
  const handleFilterClick = (filter, option) => {
    const newActiveFilters = activeFilters;
    if (filter.multiple) {
      const activeItems = newActiveFilters[filter.key] || [];
      const index = activeItems.findIndex(x => x === option.key);
      if (index !== -1) {
        newActiveFilters[filter.key] = activeItems.filter(x => x !== option.key);
      } else {
        newActiveFilters[filter.key] = [...activeItems, option.key];
      }
    } else {
      const isActive = activeFilters[filter.key] === option.key;
      isActive ? delete newActiveFilters[filter.key] : newActiveFilters[filter.key] = option.key;
    }
    setActiveFilters(newActiveFilters);
    onFilterClick === null || onFilterClick === void 0 ? void 0 : onFilterClick(Object.assign({
      filter: filter.key
    }, option));
    setUpdated(!updated);
  };
  const checkIfIsActive = (filter, option) => {
    return filter.multiple ? (activeFilters[filter.key] || []).includes(option.key) : activeFilters[filter.key] === option.key;
  };
  const filterOptions = useMemo(() => {
    if (!search || !filter.useSearch) {
      return filter.options;
    }
    return filter.options.filter(item => item.label.includes(search));
  }, [filter.useSearch, search, filter.options, updated]);
  return jsxs("div", Object.assign({
    className: classnames(Styles$7['xcontainer_filter__title'])
  }, {
    children: [jsx(Ramen.XVSpace, {
      size: "m"
    }), jsx("div", Object.assign({
      className: classnames(Styles$7['xcontainer_filter__title'])
    }, {
      children: filter.label
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), filter.useSearch && jsxs(Fragment, {
      children: [jsx(Ramen.XSearchInput, {
        onChange: e => setSearch(e.target.value),
        value: search,
        size: "l",
        placeholder: `Buscar ${filter.label.toLocaleLowerCase()}`
      }), jsx(Ramen.XVSpace, {
        size: "s"
      })]
    }), jsx("div", Object.assign({
      className: classnames(Styles$7['xcontainer_filter'])
    }, {
      children: filterOptions.map(option => {
        const isActive = checkIfIsActive(filter, option);
        const itemClasses = classnames(Styles$7['xcontainer_filter__item'], {
          [Styles$7['xcontainer_filter__item--selected']]: isActive
        });
        return jsxs("div", Object.assign({
          className: itemClasses,
          onClick: () => handleFilterClick(filter, option)
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 10
          }, {
            children: option.label
          })), (filter === null || filter === void 0 ? void 0 : filter.multiple) ? jsx(Ramen.XCheckbox, {
            selected: isActive,
            placement: "right"
          }) : jsx(Ramen.XRadioButton, {
            selected: isActive,
            placement: "right"
          })]
        }), option.key);
      })
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
      size: "m"
    })]
  }), filter.key);
};

const FilterComponent = ({
  loading,
  filters,
  selectdFilters,
  onFilterClick,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const {
    width
  } = useWindowSize();
  useEffect(() => {
    if (selectdFilters) {
      setActiveFilters(selectdFilters);
    } else {
      const initialActtiveFilters = {};
      filters.map(filter => {
        initialActtiveFilters[filter.key] = filter.options[0].key;
      });
      setActiveFilters(initialActtiveFilters);
    }
  }, []);
  useEffect(() => {
    if (selectdFilters) {
      JSON.stringify(activeFilters) !== JSON.stringify(selectdFilters) && setActiveFilters(selectdFilters);
    }
  }, [selectdFilters]);
  const handleFilterApply = () => {
    onChange === null || onChange === void 0 ? void 0 : onChange(activeFilters);
    setOpen(false);
  };
  const clearFilterApply = () => {
    setActiveFilters({});
    onChange === null || onChange === void 0 ? void 0 : onChange({});
    setOpen(false);
  };
  const FilterSkeleton = () => {
    return jsxs(Ramen.XBox, {
      children: [jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XSkeleton, {
        type: "text",
        width: "l"
      }), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsxs(Ramen.XBox, Object.assign({
        gap: "s",
        width: 'full'
      }, {
        children: [jsx(Ramen.XSkeleton, {
          size: "l",
          type: "image",
          width: "xl"
        }), jsx(Ramen.XSkeleton, {
          size: "l",
          type: "image",
          width: "xl"
        }), jsx(Ramen.XSkeleton, {
          size: "l",
          type: "image",
          width: "xl"
        }), jsx(Ramen.XSkeleton, {
          size: "l",
          type: "image",
          width: "xl"
        })]
      })), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
        size: "m"
      })]
    });
  };
  const renderFilters = () => {
    if (loading) {
      return jsxs("div", Object.assign({
        className: Styles$8['filter-component']
      }, {
        children: [jsxs("div", Object.assign({
          className: Styles$8['filter-container']
        }, {
          children: [jsx(FilterSkeleton, {}), jsx(FilterSkeleton, {}), jsx(FilterSkeleton, {})]
        })), jsx(Ramen.XVSpace, {
          size: "s"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: width < 450 ? 'vertical' : 'horizontal',
          gap: "m",
          horizontalAlign: "center",
          width: 'full'
        }, {
          children: [jsx(Ramen.XSkeleton, {
            size: "l",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            size: "l",
            type: "image",
            width: "xl"
          })]
        }))]
      }));
    }
    return !!filters.length ? jsxs("div", Object.assign({
      className: Styles$8['filter-component']
    }, {
      children: [jsx("div", Object.assign({
        className: Styles$8['filter-container']
      }, {
        children: filters.map(filter => jsx(Root, {
          filter: filter,
          activeFilters: activeFilters,
          setActiveFilters: setActiveFilters,
          onFilterClick: onFilterClick
        }))
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: width < 450 ? 'vertical' : 'horizontal',
        gap: "m",
        horizontalAlign: "center",
        width: 'full'
      }, {
        children: [jsx(Ramen.XButton, {
          text: 'Limpiar',
          icon: "trash-2-outline",
          type: "outline",
          onClick: clearFilterApply
        }), jsx(Ramen.XButton, {
          text: 'Filtrar',
          icon: "check-bold",
          type: "solid",
          onClick: handleFilterApply
        })]
      }))]
    })) : jsx(Ramen.XBox, {
      children: jsxs(Ramen.XText, Object.assign({
        colorThone: "dim"
      }, {
        children: [" ", `No hay filtros disponibles.`]
      }))
    });
  };
  return jsx("div", {
    children: renderFilters()
  });
};

var Styles$6 = {"categories-wrapper__body":"root-module_categories-wrapper__body__ytY1c","categories-wrapper__body__list":"root-module_categories-wrapper__body__list__HXHrh","categories_item":"root-module_categories_item__0lWDM","categories_item__selected":"root-module_categories_item__selected__tR3wv","categories_item__list":"root-module_categories_item__list__L8jwG","categories_item__list__name":"root-module_categories_item__list__name__FFurE","categories_seeAll":"root-module_categories_seeAll__DC3fe"};

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var call$1 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$i;
var isNullOrUndefined = isNullOrUndefined$7;
var requireObjectCoercible = requireObjectCoercible$a;
var sameValue = sameValue$1;
var toString$1 = toString$d;
var getMethod = getMethod$6;
var regExpExec = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call$1(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$1(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$1(this);
      var S = toString$1(string);
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

var fails = fails$y;
var wellKnownSymbol$1 = wellKnownSymbol$n;
var DESCRIPTORS$2 = descriptors;
var IS_PURE = isPure;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var urlConstructorDetection = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || (!searchParams.size && (IS_PURE || !DESCRIPTORS$2))
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$1]
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

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$1 = _export;
var global$2 = global$v;
var call = functionCall;
var uncurryThis$1 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn = defineBuiltIn$b;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$6;
var defineBuiltIns = defineBuiltIns$2;
var setToStringTag = setToStringTag$5;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule = internalState;
var anInstance = anInstance$4;
var isCallable$1 = isCallable$q;
var hasOwn$1 = hasOwnProperty_1;
var bind = functionBindContext;
var classof = classof$c;
var anObject = anObject$i;
var isObject = isObject$f;
var $toString = toString$d;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$6;
var getIterator = getIterator$3;
var getIteratorMethod = getIteratorMethod$4;
var validateArgumentsLength = validateArgumentsLength$2;
var wellKnownSymbol = wellKnownSymbol$n;
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
  if (!DESCRIPTORS$1) return global$2[name];
  var descriptor = getOwnPropertyDescriptor(global$2, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$2.RegExp;
var TypeError$1 = global$2.TypeError;
var decodeURIComponent = global$2.decodeURIComponent;
var encodeURIComponent = global$2.encodeURIComponent;
var charAt = uncurryThis$1(''.charAt);
var join = uncurryThis$1([].join);
var push = uncurryThis$1([].push);
var replace$1 = uncurryThis$1(''.replace);
var shift = uncurryThis$1([].shift);
var splice = uncurryThis$1([].splice);
var split = uncurryThis$1(''.split);
var stringSlice$1 = uncurryThis$1(''.slice);

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
  var result = replace$1(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$1(result, percentSequence(bytes--), percentDecode);
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
  return replace$1(encodeURIComponent(it), find, replacer);
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
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString(init));
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
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw TypeError$1('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
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
  if (!DESCRIPTORS$1) this.length = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS$1) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    if (!DESCRIPTORS$1) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
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
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
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
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
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
    if (!DESCRIPTORS$1) this.length = entries.length;
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
if (DESCRIPTORS$1) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$1({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$1(Headers)) {
  var headersHas = uncurryThis$1(HeadersPrototype.has);
  var headersSet = uncurryThis$1(HeadersPrototype.set);

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

  if (isCallable$1(nativeFetch)) {
    $$1({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$1(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$1({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var Styles$5 = {"search-component-filter":"root-module_search-component-filter__uJbim","search-icon":"root-module_search-icon__bvFuJ","close-icon":"root-module_close-icon__UdKqF","search-input":"root-module_search-input__pfVaU","search":"root-module_search__3KC9i","dropdown":"root-module_dropdown__g6luW","dropdown__item":"root-module_dropdown__item__Igour","dropdown__item__icon":"root-module_dropdown__item__icon__KoHnH","dropdown__item__text":"root-module_dropdown__item__text__Ha-eS","table-container":"root-module_table-container__dwRGC","dropdown_search-clear__button":"root-module_dropdown_search-clear__button__j9mtq","results-list_container":"root-module_results-list_container__AHzAv","results-list_container__item":"root-module_results-list_container__item__ZkS4j"};

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var productsClient = new ProductsApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

var Styles$4 = {"xdivider__vertical":"root-module_xdivider__vertical__gCbVo"};

const XDividerVertical = () => {
  const rootClass = classnames(Styles$4['xdivider__vertical'], {});
  return jsx("div", {
    className: rootClass
  });
};
XDividerVertical.defaultProps = {};

const SeeAllComponent$1 = ({
  onClick
}) => jsxs("div", {
  children: [jsxs(Ramen.XText, Object.assign({
    colorThone: "dim",
    fontSize: 11
  }, {
    children: [' ', jsxs("span", Object.assign({
      style: {
        cursor: 'pointer'
      },
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick()
    }, {
      children: [' ', "Ver m\u00E1s"]
    }))]
  })), jsx(Ramen.XVSpace, {
    size: "xxs"
  })]
});
const ResultItemList = ({
  item,
  key,
  onItemSelected,
  onItemHover
}) => {
  return jsxs(Fragment, {
    children: [jsx("div", Object.assign({
      className: classnames(Styles$5['results-list_container__item']),
      onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(item)
    }, {
      children: jsx(Ramen.XText, Object.assign({
        fontSize: 11
      }, {
        children: StringFormatter$1.capitalizeLetter((item === null || item === void 0 ? void 0 : item.name) || (item === null || item === void 0 ? void 0 : item.label), true)
      }))
    }), key), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XDivider, {})]
  });
};
const ResultsList = ({
  item,
  key,
  onItemSelected,
  onItemHover,
  maxList: _maxList = 10
}) => {
  var _a;
  return jsxs("div", Object.assign({
    className: classnames(Styles$5['results-list_container'])
  }, {
    children: [jsxs(Ramen.XBox, Object.assign({
      width: 'full',
      padding: "m"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        colorThone: "dim"
      }, {
        children: jsx("span", {
          children: item === null || item === void 0 ? void 0 : item.name
        })
      })), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XList, {
        skeleton: !item,
        dataSource: ((item === null || item === void 0 ? void 0 : item.children) || []).slice(0, _maxList),
        renderItem: (itemList, index) => {
          return jsx(ResultItemList, {
            item: itemList,
            onItemSelected: itemList => {
              onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected({
                type: item.type,
                record: itemList
              });
            }
          });
        }
      }), jsx(Ramen.XVSpace, {
        size: "s"
      }), ((_a = item === null || item === void 0 ? void 0 : item.children) === null || _a === void 0 ? void 0 : _a.length) > _maxList && jsxs(Fragment, {
        children: [jsx(SeeAllComponent$1, {
          onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected({
            record: item
          })
        }), jsx(Ramen.XVSpace, {
          size: "m"
        })]
      })]
    })), jsx(XDividerVertical, {})]
  }));
};
const SearchComponentFilter = ({
  placeholder,
  classNameExtra: _classNameExtra = '',
  value,
  onSearch,
  searchPrevious
}) => {
  const history = useHistory();
  const [currentValue, setValue] = useState(value || '');
  const [canSend, setCanSend] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [data, setData] = useState(null);
  const dropdownRef = useRef(null);
  const {
    categoriesPlane
  } = useGlobal();
  let _timer;
  const MAX_SEARCH_HISTORY = 10;
  useEffect(() => {
    setValue(value || '');
    return () => {
      clearTimeout(_timer);
      setCanSend(false);
    };
  }, [value, _timer]);
  useEffect(() => {
    return () => {
      clearTimeout(_timer);
      setCanSend(false);
      setValue('');
    };
  }, [_timer]);
  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);
  const debouncedSearch = debounce(query => __awaiter(void 0, void 0, void 0, function* () {
    try {
      if (canSend) {
        setCanSend(false);
        const response = yield productsClient.getProducts({
          filter: {
            name: query,
            isMainEan: true
          },
          limit: 10
        });
        const [brandsData] = (response.summary || []).filter(item => item.type === 'brand.name');
        const [categoriesData] = (response.summary || []).filter(item => item.type === 'hierarchy.levels.id');
        const products = (response.data || []).map(item => Object.assign(Object.assign({}, item), {
          name: item.longName
        }));
        const brands = ((brandsData === null || brandsData === void 0 ? void 0 : brandsData.data) || []).map(({
          key,
          value
        }) => ({
          key,
          label: key
        }));
        const categories = ((categoriesData === null || categoriesData === void 0 ? void 0 : categoriesData.data) || []).map(item => {
          const existCategory = (categoriesPlane || []).find(itemHierarchy => `${item.key}` === `${itemHierarchy.id}`);
          return {
            key: item.key,
            label: existCategory === null || existCategory === void 0 ? void 0 : existCategory.name
          };
        }).filter(item => !!(item === null || item === void 0 ? void 0 : item.label));
        setData([{
          name: 'Productos',
          type: 'products',
          children: products
        }, {
          name: 'Marcas',
          type: 'brands',
          children: brands
        }, {
          name: 'Categorías',
          type: 'categories',
          children: categories
        }]);
      }
      setCanSend(true);
    } catch (error) {
      console.error(error);
    }
  }), 300);
  const handleValue = e => {
    debouncedSearch(e.target.value);
    !canSend && setCanSend(true);
    setValue(e.target.value);
    getSearchHistory();
  };
  const handleSearch = e => {
    clearTimeout(_timer);
    saveSearchToLocalStorage(currentValue);
    onSearch && onSearch(currentValue);
  };
  const handleClear = () => {
    setValue('');
  };
  const handleSearchOptions = (navigateTo, props) => {
    history.push(navigateTo, Object.assign({}, history.state || props));
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    getSearchHistory();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const saveSearchToLocalStorage = searchTerm => {
    const searches = JSON.parse(localStorage.getItem('searches') || '[]');
    if (searches.includes(searchTerm)) return;
    searches.unshift(searchTerm);
    if (searches.length > MAX_SEARCH_HISTORY) {
      searches.pop();
    }
    localStorage.setItem('searches', JSON.stringify(searches));
  };
  const onRemoveOption = option => {
    const searches = JSON.parse(localStorage.getItem('searches') || '[]');
    const newSearches = searches.filter(search => search !== option);
    localStorage.setItem('searches', JSON.stringify(newSearches));
    setSearchHistory(newSearches);
  };
  const onRemoveAll = () => {
    const searches = [];
    localStorage.setItem('searches', JSON.stringify(searches));
    setSearchHistory(searches);
  };
  const getSearchHistory = () => {
    const searches = JSON.parse(localStorage.getItem('searches') || '[]');
    setSearchHistory(searches);
    return searches;
  };
  const onSearchSelected = value => {
    onSearch && onSearch(value);
    setIsDropdownOpen(false);
  };
  const onItemSelected = item => {
    var _a, _b, _c, _d, _e;
    let url = '';
    let props = {};
    switch (item.type) {
      case 'products':
        url = `/products/detail/${(_a = item.record) === null || _a === void 0 ? void 0 : _a.ean}`;
        break;
      case 'categories':
        url = `/products?s=${currentValue}`;
        saveSearchToLocalStorage(currentValue);
        props = Object.assign(Object.assign({}, history.state || {}), {
          category: (_b = item.record) === null || _b === void 0 ? void 0 : _b.key,
          categoryName: (_c = item.record) === null || _c === void 0 ? void 0 : _c.label
        });
        break;
      case 'brands':
        url = `/products?s=${currentValue}`;
        saveSearchToLocalStorage(currentValue);
        props = Object.assign(Object.assign({}, history.state || {}), {
          brand: (_d = item.record) === null || _d === void 0 ? void 0 : _d.key,
          brandName: (_e = item.record) === null || _e === void 0 ? void 0 : _e.label
        });
        break;
      default:
        url = `/products?s=${currentValue}`;
        saveSearchToLocalStorage(currentValue);
        break;
    }
    console.log(url, props);
    handleSearchOptions(url, props);
  };
  return jsxs("div", Object.assign({
    className: classnames(Styles$5['search-component-filter'])
  }, {
    children: [jsx("div", Object.assign({
      className: classnames(Styles$5['search-icon'])
    }, {
      children: jsx(Ramen.XIcon, {
        size: "s",
        icon: "search-outline"
      })
    })), jsx("input", {
      className: classnames(Styles$5[`search-input`]),
      value: currentValue,
      onChange: handleValue,
      onKeyDown: e => e.key === 'Enter' && handleSearch(),
      onFocus: toggleDropdown,
      placeholder: placeholder || 'Search products',
      type: "text"
    }), isDropdownOpen && searchHistory.length > 0 && !currentValue ? jsxs("div", Object.assign({
      className: classnames(Styles$5['dropdown']),
      ref: dropdownRef
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between"
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          verticalAlign: "center",
          gap: "s"
        }, {
          children: [jsx(Ramen.XIcon, {
            size: "xs",
            icon: "clock-outline"
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 8,
            weight: "bold"
          }, {
            children: "B\u00FAsquedas recientes"
          }))]
        })), jsx(Ramen.XButton, {
          text: "Borrar historial",
          type: "clear",
          onClick: onRemoveAll
        })]
      })), searchHistory === null || searchHistory === void 0 ? void 0 : searchHistory.map(option => {
        return jsxs("div", Object.assign({
          className: classnames(Styles$5['dropdown__item'])
        }, {
          children: [jsx("div", Object.assign({
            className: classnames(Styles$5['dropdown__item__text']),
            onClick: () => onSearchSelected(option)
          }, {
            children: jsx(Ramen.XText, Object.assign({
              fontSize: 11,
              weight: "bold"
            }, {
              children: option
            }))
          })), option && jsx("div", Object.assign({
            className: classnames(Styles$5['dropdown__item__icon']),
            onClick: () => onRemoveOption(option)
          }, {
            children: jsx(Ramen.XButtonIcon, {
              size: "s",
              type: "clear",
              icon: 'close-outline'
            })
          }))]
        }), option);
      })]
    })) : isDropdownOpen && (data === null || data === void 0 ? void 0 : data.length) && currentValue.length > 0 ? jsxs("div", Object.assign({
      className: classnames(Styles$5['dropdown']),
      ref: dropdownRef
    }, {
      children: [jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "center"
      }, {
        children: jsxs(Ramen.XText, Object.assign({
          fontSize: 8,
          weight: "bold"
        }, {
          children: ["Resultados de tu b\u00FAsqueda \"", currentValue, "\""]
        }))
      })), jsx("div", Object.assign({
        className: classnames(Styles$5['table-container'])
      }, {
        children: (data || []).map((item, index) => {
          return jsx(ResultsList, {
            item: item,
            onItemSelected: onItemSelected,
            maxList: 5
          }, index);
        })
      }))]
    })) : null, !!currentValue && jsx("div", Object.assign({
      className: classnames(Styles$5['close-icon']),
      onClick: handleClear
    }, {
      children: jsx(Ramen.XIcon, {
        icon: "close-outline",
        size: "xs"
      })
    }))]
  }));
};

const GlobalSearchComponent = ({
  onEvent
}) => {
  const history = useHistory();
  const {
    search,
    pathname
  } = useLocation();
  const pathLoc = pathname.split('/')[1];
  const inSearchPag = pathLoc === 'products';
  const valueToSearch = useMemo(() => {
    if (inSearchPag) {
      return new URLSearchParams(search).get('s') || '';
    }
    return '';
  }, [search]);
  const handleSearch = s => {
    if (s.length > 2) {
      !inSearchPag && localStorage.setItem('searchPrevious', pathname);
      history.push(`/products?s=${s}`, Object.assign({}, history.state || {}));
    } else {
      history.replace(`/products`, Object.assign({}, history.state || {}));
    }
    onEvent && onEvent(s);
  };
  return jsx(SearchComponentFilter, {
    value: valueToSearch,
    searchPrevious: localStorage.getItem('searchPrevious'),
    onSearch: handleSearch,
    placeholder: 'Busca productos, marcas y categor\u00EDas'
  });
};

const CategoryItemList = ({
  category,
  key,
  onItemSelected,
  onItemHover
}) => {
  return jsxs(Fragment, {
    children: [jsx("div", Object.assign({
      className: classnames(Styles$6['categories_item__list__name']),
      onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(category)
    }, {
      children: jsx(Ramen.XText, Object.assign({
        fontSize: 11
      }, {
        children: category === null || category === void 0 ? void 0 : category.name
      }))
    }), key), jsx(Ramen.XVSpace, {
      size: "xxs"
    })]
  });
};
const SeeAllComponent = ({
  onClick
}) => jsxs("div", Object.assign({
  className: classnames(Styles$6['categories_seeAll'])
}, {
  children: [jsxs(Ramen.XText, Object.assign({
    fontSize: 11
  }, {
    children: [' ', jsxs("span", Object.assign({
      style: {
        cursor: 'pointer'
      },
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick()
    }, {
      children: [' ', "Ver todo"]
    }))]
  })), jsx(Ramen.XVSpace, {
    size: "xxs"
  }), jsx(Ramen.XDivider, {})]
}));
const CategoryList = ({
  category,
  key,
  onItemSelected,
  onItemHover
}) => {
  return jsxs("div", Object.assign({
    className: classnames(Styles$6['categories_item__list'])
  }, {
    children: [jsx(Ramen.XVSpace, {
      size: "m"
    }), jsx(Ramen.XText, Object.assign({
      fontSize: 10
    }, {
      children: jsx("span", Object.assign({
        onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(category)
      }, {
        children: category === null || category === void 0 ? void 0 : category.name
      }))
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XList, {
      skeleton: !category,
      dataSource: (category === null || category === void 0 ? void 0 : category.children) || [],
      renderItem: (item, index) => {
        return jsx(CategoryItemList, {
          category: item,
          onItemSelected: onItemSelected
        });
      }
    }), jsx(Ramen.XVSpace, {
      size: "xs"
    }), jsx(SeeAllComponent, {
      onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(category)
    }), jsx(Ramen.XVSpace, {
      size: "m"
    })]
  }), key);
};
const CategoryItem = ({
  category,
  isActive,
  key,
  onItemSelected,
  onItemHover
}) => {
  return jsx("div", Object.assign({
    className: classnames(Styles$6['categories_item'], {
      [Styles$6[`categories_item__selected`]]: isActive
    }),
    onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(category),
    onMouseEnter: () => onItemHover === null || onItemHover === void 0 ? void 0 : onItemHover(true, category)
  }, {
    children: jsx(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      horizontalAlign: "between",
      gap: "s"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center",
        horizontalAlign: "between"
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          verticalAlign: "center",
          horizontalAlign: "between",
          gap: "m"
        }, {
          children: [jsx(Ramen.XSymbol, Object.assign({}, category.icon && {
            symbol: category.icon
          })), jsx(Ramen.XText, {
            children: category.name
          })]
        })), jsx(Ramen.XIcon, {
          size: "s",
          icon: "chevron-right-outline"
        })]
      }))
    }))
  }), key);
};
const DrawerCategories = ({
  mountNode
}) => {
  const {
    isOpenModalCategories,
    setIsOpenModalCategories,
    categories
  } = useGlobal();
  const history = useHistory();
  const [isShown, setIsShown] = useState(false);
  const [selected, setSelected] = useState();
  const refElement = useRef(null);
  const {
    width
  } = useWindowSize();
  const isMobile = width < 720;
  const onItemSelected = link => {
    var _a, _b;
    setIsOpenModalCategories(!isOpenModalCategories);
    const category = (_a = link.id) === null || _a === void 0 ? void 0 : _a.toString();
    const categoryName = (_b = link.name) === null || _b === void 0 ? void 0 : _b.toString();
    history.push('/products', Object.assign(Object.assign({}, history.state), {
      category,
      categoryName
    }));
  };
  const onItemHover = (show, link) => {
    setSelected(link);
    setIsShown(true);
  };
  const onCloseDrawer = () => {
    setIsOpenModalCategories(!isOpenModalCategories);
    setIsShown(false);
  };
  useEffect(() => {
    //Get drawer component node
    const nodes = document.querySelectorAll('[class*="xdrawer__content"]');
    if (isShown && !isMobile) {
      //Force to width by design ramen dont have this resolution.
      nodes[0].setAttribute("style", "width:1250px");
    }
  }, [isShown]);
  return jsx("div", Object.assign({
    className: classnames(Styles$6['categories_drawer'])
  }, {
    children: jsxs(Ramen.XDrawer, Object.assign({
      size: isShown && !isMobile ? 'xl' : 's',
      closable: true,
      placement: "left",
      open: isOpenModalCategories,
      onClose: onCloseDrawer
    }, !!mountNode && {
      mountNode
    }, {
      children: [jsxs("div", Object.assign({
        className: classnames(Styles$6['categories-wrapper__body']),
        ref: refElement
      }, {
        children: [jsxs("div", Object.assign({
          className: classnames(Styles$6['categories-wrapper__body__list'])
        }, {
          children: [isMobile && jsxs(Fragment, {
            children: [jsx(GlobalSearchComponent, {}), jsx(Ramen.XVSpace, {
              size: "m"
            })]
          }), jsx(Ramen.XBox, Object.assign({
            gap: 's',
            height: 'full',
            width: 'full'
          }, {
            children: jsx(Ramen.XList, {
              skeleton: !categories,
              dataSource: categories,
              renderItem: (link, i) => jsx(CategoryItem, {
                category: link,
                isActive: (selected === null || selected === void 0 ? void 0 : selected.id) === link.id,
                onItemHover: onItemHover,
                onItemSelected: onItemSelected
              }, `category-${link}-${i}`)
            })
          }))]
        })), !isMobile && jsx("div", Object.assign({
          style: {
            position: 'relative',
            display: isShown ? 'block' : 'none',
            width: '100%',
            height: '100%'
          }
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            padding: "xs",
            height: 'full',
            verticalAlign: "start",
            orientation: "vertical",
            horizontalAlign: "start"
          }, {
            children: [jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "end",
              width: 'full'
            }, {
              children: [jsxs(Ramen.XText, Object.assign({
                fontSize: 9
              }, {
                children: [" ", selected === null || selected === void 0 ? void 0 : selected.name]
              })), jsx(SeeAllComponent, {
                onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(selected)
              })]
            })), jsx(Ramen.XVSpace, {
              size: "l"
            }), jsx(GridContainer, {
              children: ((selected === null || selected === void 0 ? void 0 : selected.children) || []).map((item, index) => {
                return jsx(CategoryList, {
                  category: item,
                  onItemSelected: onItemSelected
                }, index);
              })
            })]
          }))
        }))]
      })), isOpenModalCategories && jsx(ElevatorButton, {
        elementRef: refElement === null || refElement === void 0 ? void 0 : refElement.current
      })]
    }))
  }));
};
var DrawerCategories$1 = /*#__PURE__*/memo(DrawerCategories);

const getPaths = (prefix = '', path) => {
  if (!prefix) return path;
  if (typeof path === 'string') {
    return `${prefix}${path}`;
  }
  if (Array.isArray(path)) return path.map(itemPath => `${prefix}${itemPath}`);
  return path;
};
const RouterLoader = ({
  routes,
  prefix: _prefix = '',
  notfoundRedirect
}) => {
  return jsxs(Switch, {
    children: [map(routes, (_a, key) => {
      var {
          path
        } = _a,
        props = __rest(_a, ["path"]);
      return jsx(Route, Object.assign({
        path: getPaths(_prefix, path)
      }, props), key);
    }), notfoundRedirect && jsx(Route, {
      component: () => jsx(Redirect, {
        to: notfoundRedirect
      })
    })]
  });
};

const AuthRouterLoader = /*#__PURE__*/memo(({
  routes,
  notfoundRedirect
}) => {
  const {
    userData,
    hasPermission
  } = useUserContext();
  const validRoutes = useMemo(() => reduce(routes, (result, value, key) => {
    if (value === null || value === void 0 ? void 0 : value.permission) {
      return hasPermission(value.permission) ? Object.assign(Object.assign({}, result), {
        [key]: value
      }) : result;
    }
    if (value === null || value === void 0 ? void 0 : value.existSpace) {
      return result;
    }
    if (!userData) {
      return result;
    }
    return Object.assign(Object.assign({}, result), {
      [key]: value
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, {}), [userData, hasPermission, routes]);
  return jsx(RouterLoader, {
    routes: validRoutes,
    notfoundRedirect: notfoundRedirect
  });
});
var AuthRouterLoader$1 = /*#__PURE__*/memo(AuthRouterLoader);

var Styles$3 = {"xheader":"root-module_xheader__viI2o","xheader__profile":"root-module_xheader__profile__L66F1","xheader__profile-clickable":"root-module_xheader__profile-clickable__Q-xd-","xheader__profile_logout":"root-module_xheader__profile_logout__zJOkY"};

var img$7 = "data:image/svg+xml,%3csvg width='52' height='53' viewBox='0 0 52 53' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M52 26.041C52 40.4004 40.3594 52.041 26 52.041C11.6406 52.041 0 40.4004 0 26.041C0 11.6816 11.6406 0.0410156 26 0.0410156C40.3594 0.0410156 52 11.6816 52 26.041ZM26 49.2553C38.8209 49.2553 49.2143 38.8619 49.2143 26.041C49.2143 13.2201 38.8209 2.82673 26 2.82673C13.1791 2.82673 2.78571 13.2201 2.78571 26.041C2.78571 38.8619 13.1791 49.2553 26 49.2553Z' fill='white'/%3e%3cmask id='mask0_316_28843' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='2' y='2' width='48' height='48'%3e%3cpath d='M2.78578 26.0405C2.78578 38.8614 13.1792 49.2547 26.0001 49.2547C38.821 49.2547 49.2144 38.8614 49.2144 26.0405C49.2144 13.2196 38.821 2.82617 26.0001 2.82617C13.1792 2.82617 2.78578 13.2196 2.78578 26.0405Z' fill='white'/%3e%3cpath d='M2.78578 26.0405C2.78578 38.8614 13.1792 49.2547 26.0001 49.2547C38.821 49.2547 49.2144 38.8614 49.2144 26.0405C49.2144 13.2196 38.821 2.82617 26.0001 2.82617C13.1792 2.82617 2.78578 13.2196 2.78578 26.0405Z' stroke='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_316_28843)'%3e%3cpath d='M49.2142 26.0405C49.2142 38.8614 38.8208 49.2547 25.9999 49.2547C13.179 49.2547 2.78564 38.8614 2.78564 26.0405C2.78564 13.2196 13.179 2.82617 25.9999 2.82617C38.8208 2.82617 49.2142 13.2196 49.2142 26.0405Z' fill='%23D2D8E7'/%3e%3cpath d='M34.1482 36.1611C31.311 38.2246 28.4736 39.8754 25.6363 39.8754C22.7991 39.8754 19.9617 38.2246 17.1244 36.1611C19.4631 35.4492 20.6496 34.3865 20.6839 32.973C20.6839 32.7211 20.6821 32.3633 20.6804 31.6914C20.6804 31.5848 20.6801 31.4755 20.6796 31.3636C20.675 29.5622 20.6674 27.1851 20.6567 24.7708C18.4387 21.8958 19.2535 18.5252 19.9485 18.6093C20.8006 18.7129 28.1832 11.7072 29.5993 11.348C31.0154 10.9888 34.6125 12.1484 35.2316 15.3791C35.8506 18.6097 36.1094 26.753 33.7613 30.0041C33.0932 30.9292 32.0408 31.2911 30.6042 31.0897C30.6022 31.7659 30.5982 32.1454 30.5887 32.9111C30.6071 34.3889 31.7935 35.45 34.1482 36.1611Z' fill='%23C7CFE2'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.6'%3e%3cpath d='M30.5894 31.0896C27.1846 30.7027 25.0179 29.2324 25.0179 29.2324C25.0179 29.2324 27.4941 32.3277 30.5894 32.9467V31.0896Z' fill='black' fill-opacity='0.2'/%3e%3c/g%3e%3cpath d='M19.5236 24.8192C18.4573 22.2548 14.1843 17.032 17.8676 13.782C19.1057 7.74629 25.9462 8.4144 30.5117 9.80725C33.5801 10.7434 35.8974 12.593 36.3926 11.2001C39.4879 13.782 37.9378 16.3073 35.8974 17.032C34.0455 17.6897 30.914 18.3475 25.5893 17.7284C24.6381 17.6178 24.8373 20.5309 24.3291 20.8458C23.5666 21.3183 22.9748 18.3475 20.8842 19.2395C18.7937 20.1316 20.0343 24.2677 22.2783 24.2677C23.0521 24.2677 23.4391 26.3952 21.3498 27.4012C19.8331 28.1465 20.2164 26.4855 19.5236 24.8192Z' fill='%23B7C0D8'/%3e%3cpath d='M9.38658 40.8832C7.91324 43.879 7.06515 50.788 7.06515 50.788H44.208C44.208 50.788 43.3596 43.8782 41.8866 40.8832C40.4136 37.8883 31.8116 35.1105 31.8116 35.1105C26.2169 35.1094 24.3598 35.1094 19.4661 35.1094C19.4661 35.1094 10.8599 37.8875 9.38658 40.8832Z' fill='%23B7C0D8'/%3e%3c/g%3e%3c/svg%3e";

const XHeaderProfile = props => {
  const rootClass = classnames(Styles$3['xheader']);
  const onSignOutClickHandler = () => {
    if (props.onSignOutClick) {
      props.onSignOutClick();
    }
  };
  const onProfileClickHandler = () => {
    if (props.onProfileClick) {
      props.onProfileClick();
    }
  };
  const profileClasses = classnames(Styles$3['xheader__profile'], {
    [Styles$3['xheader__profile-clickable']]: props.onProfileClick
  });
  return jsx("div", Object.assign({
    className: rootClass
  }, {
    children: jsx(Ramen.XBox, Object.assign({
      horizontalAlign: "end",
      height: 'full',
      verticalAlign: "center"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center",
        gap: "s"
      }, {
        children: [jsx("div", Object.assign({
          onClick: onProfileClickHandler,
          className: profileClasses
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            verticalAlign: "center",
            gap: "s"
          }, {
            children: [props.showInfoProfile && jsxs(Ramen.XBox, Object.assign({
              horizontalAlign: "end"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                colorThone: "lightest",
                weight: "bold",
                fontSize: 12
              }, {
                children: props.profile.title
              })), jsx(Ramen.XText, Object.assign({
                colorThone: "lightest",
                weight: "bold",
                textAlign: "right",
                fontSize: 11
              }, {
                children: props.profile.name
              }))]
            })), jsx(Ramen.XBox, {
              children: props.profile.avatar ? jsx(Ramen.XAvatar, {
                src: props.profile.avatar,
                size: "l"
              }) : jsx(Ramen.XAvatar, {
                src: img$7,
                size: "l"
              })
            })]
          }))
        })), jsx("div", {
          children: props.children
        }), props.auth && jsx("div", Object.assign({
          className: classnames(Styles$3['xheader__profile_logout'], {})
        }, {
          children: jsx(Ramen.XButtonIcon, {
            icon: "log-out-outline",
            type: "clear",
            size: "m",
            onClick: onSignOutClickHandler
          })
        }))]
      }))
    }))
  }));
};
XHeaderProfile.defaultProps = {
  onProfileClick: undefined,
  onSignOutClick: undefined,
  children: undefined,
  showInfoProfile: true
};

const Header = () => {
  const [show, setShow] = useState(false);
  const {
    width
  } = useWindowSize();
  const history = useHistory();
  const {
    categoriesNav,
    setIsOpenModalLogin
  } = useGlobal();
  const {
    userData,
    isAuthenticated,
    logout
  } = useUserContext();
  const name = isAuthenticated ? `${userData === null || userData === void 0 ? void 0 : userData.name}` : 'Inicia sesión';
  const profile = {
    title: 'Hola!',
    name,
    avatar: userData === null || userData === void 0 ? void 0 : userData.imageUrl
  };
  const containerRef = useRef(null);
  const onProfileAction = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!isAuthenticated) {
      setIsOpenModalLogin(true);
    } else {
      history.push('/profile/my-profile');
    }
  });
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  const onLogout = () => __awaiter(void 0, void 0, void 0, function* () {
    yield logout();
    history.push('/');
  });
  return jsx("div", Object.assign({
    ref: containerRef,
    className: `header-container ${show ? 'sticky' : ''}`
  }, {
    children: jsxs("div", Object.assign({
      className: `header ${show ? 'sticky' : ''}`
    }, {
      children: [jsxs("div", Object.assign({
        className: "header-left"
      }, {
        children: [jsx(Link, Object.assign({
          to: "/"
        }, {
          children: jsx("img", {
            className: "header-logo",
            src: img$b,
            alt: "logo of website"
          })
        })), jsx(XDividerVertical, {}), jsx(MobileNav, {}), jsx(Nav$1, {
          links: categoriesNav
        }), width > 715 && jsx("div", Object.assign({
          style: {
            width: width > 900 ? '48rem' : '32rem'
          }
        }, {
          children: jsx(GlobalSearchComponent, {})
        }))]
      })), jsx("div", Object.assign({
        className: "header-right"
      }, {
        children: jsx(XHeaderProfile, Object.assign({
          auth: isAuthenticated,
          onProfileClick: onProfileAction,
          onSignOutClick: onLogout,
          profile: profile,
          showInfoProfile: width > breakPoints.lg
        }, {
          children: jsx(ShopCart$1, {})
        }))
      }))]
    }))
  }));
};

const Container = ({
  children,
  className
}) => {
  return jsx("div", Object.assign({
    className: `container ${className ? className : ''}`
  }, {
    children: children
  }));
};

var Container$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Container
});

var $ = _export;
var DESCRIPTORS = descriptors;
var global$1 = global$v;
var uncurryThis = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable = isCallable$q;
var isPrototypeOf = objectIsPrototypeOf;
var toString = toString$d;
var defineBuiltInAccessor = defineBuiltInAccessor$6;
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

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
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

var img$6 = "data:image/svg+xml,%3csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M37.6308 9.30176H7.87266C5.73727 9.30176 4 11.0766 4 13.2583V13.795C4 15.9767 5.73727 17.7515 7.87266 17.7515H37.6309C37.9555 17.7515 38.2184 17.4829 38.2184 17.1513V9.90198C38.2184 9.57042 37.9554 9.30176 37.6308 9.30176Z' fill='%237C3D1E'/%3e%3cpath d='M22.7246 7.45596L20.4927 5.17576C20.2633 4.94141 19.8913 4.94141 19.6618 5.17576L8.35566 16.7267C8.18761 16.8984 8.13738 17.1565 8.2284 17.3808C8.31926 17.6052 8.53363 17.7514 8.77121 17.7514H13.235C13.3908 17.7514 13.5403 17.6882 13.6505 17.5757L22.7247 8.30497C22.8349 8.19235 22.8968 8.03974 22.8968 7.8805C22.8968 7.72127 22.8348 7.56866 22.7246 7.45596Z' fill='%2378AA17'/%3e%3cpath d='M36.2636 16.7267L24.9575 5.17576C24.728 4.94141 24.3561 4.94141 24.1265 5.17576L12.8205 16.7267C12.6525 16.8984 12.6022 17.1565 12.6932 17.3808C12.7841 17.6052 12.9985 17.7514 13.2361 17.7514H35.8482C36.0858 17.7514 36.3001 17.6052 36.3911 17.3808C36.4818 17.1565 36.4316 16.8984 36.2636 16.7267Z' fill='%238ACC19'/%3e%3cpath d='M32.9237 16.7266L26.6466 10.3135C26.5364 10.2009 26.3869 10.1377 26.2311 10.1377C26.0753 10.1377 25.926 10.2009 25.8157 10.3135C25.4781 10.6584 25.0293 10.8484 24.5518 10.8484C24.0744 10.8484 23.6256 10.6585 23.288 10.3135C23.1778 10.2009 23.0284 10.1377 22.8725 10.1377C22.7167 10.1377 22.5673 10.2009 22.4571 10.3135L16.1799 16.7266C16.0118 16.8983 15.9616 17.1564 16.0526 17.3807C16.1435 17.6051 16.3578 17.7513 16.5954 17.7513H32.5083C32.7459 17.7513 32.9603 17.6051 33.0511 17.3807C33.142 17.1564 33.0917 16.8982 32.9237 16.7266Z' fill='%2378A017'/%3e%3cpath d='M41.2816 16.551H13.33H8.13531H7.17719C5.49 16.551 4.11 15.2101 4.00063 13.5146C4.00055 13.5186 4 13.5226 4 13.5269V13.5269V38.7754C4 41.105 5.85508 43.0002 8.13531 43.0002H41.2816C41.6062 43.0002 41.8691 42.7315 41.8691 42.4V17.1512C41.8691 16.8197 41.6061 16.551 41.2816 16.551Z' fill='%23AA5D24'/%3e%3cpath d='M41.8692 26.8613H35.5454C33.1834 26.8613 31.2617 28.8245 31.2617 31.2378C31.2617 33.6509 33.1833 35.6142 35.5454 35.6142H41.8692V26.8613Z' fill='%237C3D1E'/%3e%3cpath d='M42.2376 25.3193H35.5454C33.1834 25.3193 31.2617 27.2825 31.2617 29.6958C31.2617 32.1089 33.1833 34.0722 35.5454 34.0722H42.2376C43.2095 34.0722 44.0002 33.2644 44.0002 32.2714V27.1202C44.0002 26.1271 43.2095 25.3193 42.2376 25.3193Z' fill='%23FFC107'/%3e%3cpath d='M36.0415 27.7373C34.9848 27.7373 34.125 28.6158 34.125 29.6954C34.125 30.775 34.9848 31.6533 36.0415 31.6533C37.0982 31.6533 37.958 30.775 37.958 29.6954C37.958 28.6158 37.0982 27.7373 36.0415 27.7373Z' fill='%23D4A106'/%3e%3c/svg%3e";

const imageOnErrorHandler = event => {
  event.currentTarget.src = img$c;
};
const ProductSlider = ({
  images
}) => {
  const [slectedImage, setSelectedImage] = useState(images[0]);
  const handleChangeImage = e => {
    setSelectedImage(e.target.src);
  };
  return jsxs("div", Object.assign({
    className: 'product-slider'
  }, {
    children: [jsx("img", {
      className: 'product-slider__main-image',
      src: slectedImage,
      onError: imageOnErrorHandler,
      alt: ''
    }, slectedImage), jsx("div", Object.assign({
      className: 'product-slider__images'
    }, {
      children: jsx(Swiper, Object.assign({
        direction: 'horizontal',
        navigation: true,
        modules: [Navigation],
        breakpoints: {
          990: {
            direction: 'vertical',
            spaceBetween: 1,
            slidesPerView: 4
          },
          480: {
            spaceBetween: 5,
            slidesPerView: 4
          }
        },
        spaceBetween: 3,
        slidesPerView: 3
      }, {
        children: images.map((image, i) => jsx(SwiperSlide, {
          children: jsx("img", {
            onClick: handleChangeImage,
            src: image,
            loading: 'lazy',
            onError: imageOnErrorHandler,
            className: `product-slider__images-image ${image === slectedImage ? 'active-slide' : ''}`
          })
        }, i))
      }))
    }))]
  }));
};

var img$5 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_457_16451)'%3e%3cpath d='M22.008 0.75H1.99127C1.30562 0.750395 0.75 1.30632 0.75 1.99194V22.0088C0.750395 22.6944 1.30634 23.25 1.99198 23.25H22.008C22.6937 23.25 23.2496 22.6944 23.25 22.0088V1.99123C23.2496 1.3056 22.6937 0.75 22.008 0.75Z' fill='%233D3D3D'/%3e%3cpath d='M17.5852 21.75V13.2095H20.4716L20.9039 9.86653H17.5838V7.73773C17.5838 6.77234 17.8522 6.117 19.241 6.117H21V3.13204C20.1436 3.04131 19.2828 2.99732 18.4216 3.00013C15.87 3.00013 14.1244 4.55053 14.1244 7.40583V9.86582H11.25V13.2088H14.1258V21.7493L17.5852 21.75Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_457_16451'%3e%3crect width='24' height='24' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.1875 7.36279C23.1684 6.43029 22.9914 5.50776 22.6641 4.63439C22.382 3.8825 21.9392 3.20128 21.3665 2.63834C20.8046 2.06592 20.1246 1.62291 19.3739 1.3402C18.5004 1.01312 17.5777 0.836383 16.6452 0.817492C15.4417 0.762924 15.059 0.75 12.0029 0.75C8.94677 0.75 8.56332 0.762924 7.36342 0.817492C6.43084 0.836699 5.50824 1.01367 4.63476 1.34091C3.8828 1.6229 3.20152 2.06569 2.63852 2.63834C2.06594 3.20041 1.62288 3.88061 1.34025 4.63151C1.01314 5.50493 0.836391 6.42746 0.817499 7.35992C0.762925 8.56257 0.75 8.94598 0.75 12.0018C0.75 15.0576 0.762925 15.441 0.818217 16.6408C0.837109 17.5733 1.01386 18.4958 1.34097 19.3692C1.62342 20.1198 2.06623 20.7998 2.63852 21.3617C3.20066 21.934 3.88094 22.3768 4.63189 22.6591C5.50535 22.9864 6.42796 23.1634 7.36055 23.1825C8.56045 23.2371 8.9439 23.25 12 23.25C15.0561 23.25 15.4396 23.2371 16.6395 23.1825C17.572 23.1634 18.4947 22.9864 19.3681 22.6591C20.8796 22.0746 22.0745 20.8799 22.659 19.3685C22.9864 18.4951 23.1634 17.5726 23.1825 16.6401C23.2371 15.4403 23.25 15.0569 23.25 12.0011C23.25 8.94526 23.2421 8.56257 23.1875 7.36279ZM21.1619 16.546C21.1536 17.2595 21.0226 17.9663 20.7748 18.6354C20.3963 19.6167 19.6206 20.3923 18.6393 20.7708C17.9701 21.0186 17.2633 21.1495 16.5497 21.1578C15.3634 21.2123 15.0073 21.2231 12.0029 21.2231C8.99847 21.2231 8.64231 21.2116 7.45534 21.1578C6.74178 21.1494 6.03497 21.0185 5.36575 20.7708C4.8775 20.5902 4.43585 20.3027 4.07323 19.9293C3.69972 19.5667 3.41216 19.1251 3.23165 18.6369C2.98318 17.9674 2.85177 17.2601 2.84317 16.546C2.78932 15.3599 2.77783 15.0038 2.77783 11.9997C2.77783 8.99554 2.78932 8.63941 2.84317 7.45255C2.85158 6.73907 2.98249 6.03233 3.23021 5.36317C3.41079 4.87498 3.69834 4.43339 4.07179 4.07077C4.43435 3.69724 4.87602 3.4097 5.36432 3.22927C6.03347 2.98122 6.7403 2.85007 7.4539 2.84155C8.64015 2.7877 8.99632 2.77621 12.0007 2.77621C15.0051 2.77621 15.3613 2.7877 16.5483 2.84227C17.2618 2.8506 17.9686 2.98151 18.6378 3.22927C19.1261 3.40985 19.5677 3.69737 19.9304 4.07077C20.3039 4.4333 20.5915 4.87492 20.7719 5.36317C21.0201 6.03223 21.1513 6.73901 21.1597 7.45255C21.2136 8.63869 21.225 8.99482 21.225 11.9989C21.225 15.0031 21.215 15.3621 21.1619 16.546Z' fill='%233D3D3D'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0352 6C8.70207 6 6 8.70207 6 12.0352C6 15.3684 8.70207 18.0705 12.0352 18.0705C15.3684 18.0705 18.0705 15.3684 18.0705 12.0352C18.0705 8.70207 15.3684 6 12.0352 6ZM12.0353 15.9532C9.8714 15.9532 8.11725 14.1991 8.11725 12.0353C8.11725 9.8714 9.8714 8.11725 12.0353 8.11725C14.1991 8.11725 15.9532 9.8714 15.9532 12.0353C15.9532 14.1991 14.1991 15.9532 12.0353 15.9532Z' fill='%233D3D3D'/%3e%3cpath d='M19.125 5.81248C19.125 6.34339 18.8051 6.82202 18.3146 7.02512C17.8241 7.22823 17.2595 7.11581 16.8842 6.7403C16.5089 6.36479 16.3968 5.80015 16.6001 5.30973C16.8035 4.81932 17.2823 4.49972 17.8132 4.5C18.1612 4.5 18.495 4.6383 18.741 4.88446C18.9871 5.13061 19.1252 5.46446 19.125 5.81248Z' fill='%233D3D3D'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.82508 20.9993C16.3149 20.9993 20.9603 14.0731 20.9603 8.06572C20.9603 7.86923 20.956 7.67346 20.9474 7.4784C21.8508 6.83475 22.6304 6.0378 23.25 5.12492C22.4078 5.49257 21.5142 5.73367 20.5993 5.84015C21.5606 5.27251 22.2803 4.38081 22.6248 3.33048C21.7188 3.8597 20.7277 4.23281 19.6942 4.43372C18.2634 2.93467 15.9889 2.56777 14.1471 3.53891C12.3053 4.51002 11.3548 6.57745 11.8288 8.58095C8.11684 8.39714 4.6588 6.66997 2.31548 3.82944C1.09026 5.90626 1.71604 8.56309 3.74454 9.89692C3.01192 9.87582 2.29511 9.68193 1.65439 9.3315C1.65439 9.35059 1.65439 9.36897 1.65439 9.38946C1.65602 11.552 3.20459 13.414 5.35738 13.842C4.67864 14.024 3.96661 14.0506 3.27583 13.9197C3.8797 15.7696 5.61017 17.0377 7.58321 17.0761C5.94829 18.3395 3.92929 19.0246 1.85106 19.0211C1.48311 19.0213 1.11546 19.0003 0.75 18.9582C2.86034 20.2935 5.31656 21.0024 7.82508 21' fill='%233D3D3D'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M22.7877 6.215C22.5254 5.24801 21.7695 4.49293 20.8023 4.23166C19.0414 3.75 11.9996 3.75 11.9996 3.75C11.9996 3.75 4.95706 3.75 3.19697 4.21371C2.23201 4.48915 1.48037 5.2476 1.21363 6.215C0.894382 8.00072 0.739397 9.81194 0.750631 11.6259C0.738787 13.44 0.893771 15.2512 1.21363 17.0369C1.47556 18.0033 2.23052 18.7583 3.19697 19.0202C4.97573 19.5019 11.9996 19.5019 11.9996 19.5019C11.9996 19.5019 19.0414 19.5019 20.8023 19.0382C21.7694 18.777 22.5252 18.0223 22.7877 17.0555C23.1059 15.2702 23.26 13.4595 23.2479 11.646C23.2703 9.82508 23.1162 8.00624 22.7877 6.215Z' fill='%233D3D3D'/%3e%3cpath d='M10.5 15.3L16.6185 11.775L10.5 8.25L10.5 15.3Z' fill='white'/%3e%3c/svg%3e";

const linksFooter = [{
  name: 'Easy',
  type: 'links',
  menu: [{
    name: 'Acerca de Easy',
    url: 'https://ayuda.easy.cl/ayuda/acerca-easy/quienes-somos'
  }, {
    name: 'Acerca de Cencosud',
    url: 'https://www.cencosud.com/'
  }, {
    name: 'Nuestras tiendas',
    url: 'https://www.easy.cl/tiendas'
  }, {
    name: 'Terapia de Hogar',
    url: 'https://www.easy.cl/proposito-institucional/terapia-hogar'
  }, {
    name: 'Propósito Easy',
    url: 'https://www.easy.cl/proposito-institucional'
  }, {
    name: 'Cyberday',
    url: 'https://www.easy.cl/cyberday'
  }, {
    name: 'Cybermonday',
    url: 'https://www.easy.cl/cybermonday'
  }, {
    name: 'Blackfriday',
    url: 'https://www.easy.cl/blackfriday'
  }, {
    name: 'Easy App',
    url: 'https://www.easy.cl/easy-app'
  }]
}, {
  name: 'Cencosud',
  type: 'links',
  menu: [{
    name: 'Paris',
    url: 'https://www.paris.cl/'
  }, {
    name: 'Jumbo',
    url: 'https://www.jumbo.cl/'
  }, {
    name: 'Santa Isabel',
    url: 'https://www.santaisabel.cl/'
  }, {
    name: 'Tarjeta Cencosud Scotiabank',
    url: 'https://www.tarjetacencosud.cl/publico/home'
  }, {
    name: 'Seguro Cencosud',
    url: 'https://www.seguroscencosud.cl/'
  }, {
    name: 'Puntos Cencosud',
    url: 'https://www.puntoscencosud.cl/puntos/'
  }, {
    name: 'Giftcard',
    url: 'https://www.giftcard.cl/'
  }, {
    name: 'Trabaja con nosotros',
    url: 'https://www.trabajando.cl/trabajo-cencosud'
  }, {
    name: 'Venta Empresa',
    url: 'https://www.ventaempresascencosud.cl/'
  }]
}, {
  name: 'Síguenos',
  type: 'images',
  menu: [{
    icon: img$5,
    url: 'https://es-la.facebook.com/easychile'
  }, {
    icon: img$4,
    url: 'https://www.instagram.com/easytienda'
  }, {
    icon: img$3,
    url: 'https://twitter.com/easytienda'
  }, {
    icon: img$2,
    url: 'https://www.youtube.com/user/easychile'
  }]
}];
const LinkImagesItem = ({
  link,
  key,
  onItemSelected
}) => {
  return jsx("div", {
    children: jsx("a", Object.assign({
      href: link === null || link === void 0 ? void 0 : link.url,
      target: "_blank"
    }, {
      children: jsx(Ramen.XImage, {
        height: 8,
        src: link === null || link === void 0 ? void 0 : link.icon
      })
    }))
  }, key);
};
const LinkList = ({
  isMobile,
  link,
  key,
  onItemSelected
}) => {
  const renderByType = () => {
    switch (link === null || link === void 0 ? void 0 : link.type) {
      case 'images':
        return jsx(Fragment, {
          children: jsx(Ramen.XBox, Object.assign({
            verticalAlign: "center",
            orientation: "horizontal",
            width: 'full',
            height: 'full',
            padding: "s",
            gap: "l"
          }, {
            children: ((link === null || link === void 0 ? void 0 : link.menu) || []).map((item, index) => {
              return jsx(LinkImagesItem, {
                link: item,
                onItemSelected: onItemSelected
              }, index);
            })
          }))
        });
      default:
        return jsx(Ramen.XList, {
          skeleton: !link,
          dataSource: (link === null || link === void 0 ? void 0 : link.menu) || [],
          renderItem: (item, index) => {
            return jsx(LinkItemList, {
              link: item,
              onItemSelected: onItemSelected
            }, index);
          }
        });
    }
  };
  return isMobile ? jsxs(Ramen.XCollapseCard, Object.assign({
    title: link === null || link === void 0 ? void 0 : link.name
  }, {
    children: [renderByType(), jsx(Ramen.XVSpace, {
      size: "m"
    })]
  })) : jsxs("div", {
    children: [jsx(Ramen.XVSpace, {
      size: "m"
    }), jsxs(Ramen.XText, Object.assign({
      fontSize: 9
    }, {
      children: [" ", link === null || link === void 0 ? void 0 : link.name]
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), renderByType(), jsx(Ramen.XVSpace, {
      size: "xs"
    }), jsx(Ramen.XVSpace, {
      size: "m"
    })]
  }, key);
};
const LinkItemList = ({
  link,
  key,
  onItemSelected
}) => {
  return jsxs(Fragment, {
    children: [jsx("div", Object.assign({
      onClick: () => onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(link)
    }, {
      children: jsx("a", Object.assign({
        style: {
          cursor: 'pointer',
          textDecoration: 'none'
        },
        href: link.url,
        target: "_blank"
      }, {
        children: jsx(Ramen.XText, Object.assign({
          fontSize: 10
        }, {
          children: link === null || link === void 0 ? void 0 : link.name
        }))
      }))
    }), key), jsx(Ramen.XVSpace, {
      size: "xxs"
    })]
  });
};
const TermsAndConditions = ({
  isDesktop,
  isMobile
}) => {
  const date = new Date().getFullYear();
  return jsxs(Ramen.XBox, Object.assign({
    verticalAlign: "center",
    width: 'full',
    horizontalAlign: "center",
    orientation: isDesktop ? 'horizontal' : 'vertical',
    gap: "xs",
    padding: "s"
  }, {
    children: [jsxs(Ramen.XText, Object.assign({
      colorThone: "dim",
      fontSize: 11
    }, {
      children: ["Copyright \u00A9 ", date, " Cencosud - Easy"]
    })), jsxs(Ramen.XBox, Object.assign({
      verticalAlign: "center",
      orientation: isMobile ? 'vertical' : "horizontal"
    }, {
      children: [jsx("a", Object.assign({
        style: {
          cursor: 'pointer'
        },
        href: "https://www.easy.cl/terminos-y-condiciones"
      }, {
        children: jsxs(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: ["T\u00E9rminos y Condiciones ", !isMobile ? '| ' : '', " "]
        }))
      })), jsx("a", Object.assign({
        style: {
          cursor: 'pointer'
        },
        href: "https://www.easy.cl/politica-de-privacidad"
      }, {
        children: jsxs(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: ["Pol\u00EDticas de Privacidad ", !isMobile ? '| ' : '']
        }))
      })), jsx("a", Object.assign({
        style: {
          cursor: 'pointer'
        },
        href: "https://www.cencosud.com/sostenibilidad",
        target: "_blank"
      }, {
        children: jsx(Ramen.XText, Object.assign({
          fontSize: 11
        }, {
          children: "Compromisos y Pol\u00EDticas"
        }))
      }))]
    }))]
  }));
};
const Footer = () => {
  const {
    width
  } = useWindowSize();
  const isDesktop = width > 768;
  const isMobile = width < 520;
  return jsx("footer", Object.assign({
    className: "footer"
  }, {
    children: jsxs("div", Object.assign({
      className: "footer__content"
    }, {
      children: [jsx(Ramen.XBox, Object.assign({
        padding: "s",
        height: 'full',
        verticalAlign: "start",
        orientation: isDesktop ? 'horizontal' : 'vertical',
        horizontalAlign: "around",
        width: 'full'
      }, {
        children: (linksFooter || []).map((item, index) => {
          return jsx(LinkList, {
            isMobile: isMobile,
            link: item
          }, index);
        })
      })), jsx(TermsAndConditions, {
        isDesktop: isDesktop,
        isMobile: isMobile
      })]
    }))
  }));
};

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var authClient = new AuthApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

const useForm = (submitFunction, defaultValue = {}) => {
  const [values, setValues] = useState(defaultValue);
  const handleChange = e => {
    setValues(Object.assign(Object.assign({}, values), {
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    submitFunction();
  };
  return {
    values,
    handleChange,
    handleSubmit
  };
};

var Styles$2 = {"xlogin_request_access":"root-module_xlogin_request_access__Dt-oZ"};

const LoginDrawer = () => {
  const {
    isOpenModalLogin,
    setIsOpenModalLogin
  } = useGlobal();
  const {
    login
  } = useUserContext();
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const onHandleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setIsLoadingRequest(true);
      if (!!values) {
        const {
          email,
          password
        } = values;
        yield login(email, password);
        setIsOpenModalLogin(false);
      }
      setIsLoadingRequest(false);
    } catch (error) {
      console.error(error);
      setShowError(true);
      setIsLoadingRequest(false);
    }
  });
  const {
    handleSubmit,
    handleChange,
    values
  } = useForm(onHandleLogin, {});
  const onChangeInput = (e, name) => {
    e.target.name = name;
    handleChange(e);
  };
  const onClickRequestAccess = () => {
    history.push('/signup');
    setIsOpenModalLogin(false);
  };
  const onClickForgotPassword = () => {
    history.push('/forgot-password', {
      email: values.email || ''
    });
    setIsOpenModalLogin(false);
  };
  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 3000);
    }
  }, [showError]);
  return jsxs(Ramen.XDrawer, Object.assign({
    size: 'm',
    closable: true,
    open: isOpenModalLogin,
    onClose: () => setIsOpenModalLogin(!isOpenModalLogin),
    onClickAction: () => setIsOpenModalLogin(!isOpenModalLogin)
  }, {
    children: [' ', jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      padding: "xl",
      gap: "xl"
    }, {
      children: [jsx(Ramen.XImage, {
        height: 1,
        src: img$b
      }), jsx(Ramen.XText, Object.assign({
        fontSize: 6,
        weight: "bold"
      }, {
        children: "\u00A1Hola! Esto es Easy venta empresa"
      })), jsx(Ramen.XText, Object.assign({
        fontSize: 9,
        colorThone: "dim"
      }, {
        children: "Somos tu aliado estrat\u00E9gico en la gesti\u00F3n de alta calidad."
      })), !showError ? jsx(Ramen.XVSpace, {
        size: "xs"
      }) : jsx(Ramen.XAlert, Object.assign({
        showIcon: true,
        type: "error",
        title: "Correo o contrase\u00F1a incorrectos."
      }, {
        children: jsx(Ramen.XText, Object.assign({
          fontSize: 11,
          colorThone: "dim"
        }, {
          children: "Por favor, intenta nuevamente."
        }))
      })), jsx("form", Object.assign({
        onSubmit: handleSubmit
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          gap: "m",
          width: 'full'
        }, {
          children: [jsx(Ramen.XFormItem, Object.assign({
            error: "",
            label: "Correo corporativo (*)"
          }, {
            children: jsx(Ramen.XEmailInput, {
              size: "l",
              disabled: isLoadingRequest,
              placeholder: "ejemplo@empresa.cl",
              onChange: e => onChangeInput(e, 'email')
            })
          })), jsx(Ramen.XFormItem, Object.assign({
            error: "",
            label: "Contrase\u00F1a (*)"
          }, {
            children: jsxs(Fragment, {
              children: [jsx(Ramen.XPasswordInput, {
                size: "l",
                disabled: isLoadingRequest,
                placeholder: "Ingresa tu contrase\u00F1a",
                onChange: e => onChangeInput(e, 'password')
              }), jsx(Ramen.XText, Object.assign({
                fontSize: 12,
                weight: 'normal'
              }, {
                children: jsx("span", Object.assign({
                  className: classnames(Styles$2['xlogin_request_access']),
                  onClick: onClickForgotPassword
                }, {
                  children: "\u00BF Olvidaste tu contrase\u00F1a ?"
                }))
              }))]
            })
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsx(Ramen.XButton, {
            disabled: !values,
            loading: isLoadingRequest,
            text: "Ingresar",
            type: "solid",
            size: "l"
          }), jsx(Ramen.XBox, Object.assign({
            horizontalAlign: "center"
          }, {
            children: jsxs(Ramen.XText, {
              children: ["\u00BFNo tiene una cuenta?", ' ', jsx("span", Object.assign({
                className: classnames(Styles$2['xlogin_request_access']),
                onClick: onClickRequestAccess
              }, {
                children: "Solicitar acceso"
              }))]
            })
          }))]
        }))
      }))]
    }))]
  }));
};
var LoginDrawer$1 = /*#__PURE__*/memo(LoginDrawer);

const notShowMessage = e => {
  var _a, _b, _c;
  const status = (e === null || e === void 0 ? void 0 : e.status) || (e === null || e === void 0 ? void 0 : e.statusCode) || ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status);
  const url = (_c = (_b = e === null || e === void 0 ? void 0 : e.response) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.url;
  return (status === 401 || status === 403) && url.includes('/logout');
};
const AlertWatcher = () => {
  const {
    logout
  } = useUserContext();
  watcher(MODULES.NETWORK_MODULE, e => {
    var _a;
    if (notShowMessage(e)) {
      return;
    }
    console.log('e in AlertWatcher', e);
    const status = (e === null || e === void 0 ? void 0 : e.status) || (e === null || e === void 0 ? void 0 : e.statusCode) || ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status);
    // logout system when  unhautorized.
    if (status === 403 || status === 401) {
      console.log('logout error unhautorized ');
      setTimeout(() => logout(), 1000);
    }
  });
  return jsx(Fragment, {});
};

const PortalContextComponent = ({
  children
}) => {
  return jsx(UserContextProvider, Object.assign({
    clientRequest: authClient
  }, {
    children: jsx(GlobalContextProvider, {
      children: jsxs(CartContextProvider, {
        children: [jsx(React__default.StrictMode, {
          children: children
        }), jsx(AlertWatcher, {})]
      })
    })
  }));
};
const LayoutApp = ({
  children
}) => {
  return jsx(Ramen.XConfigProvider, Object.assign({
    theme: "neutral",
    country: "cl"
  }, {
    children: jsx(Ramen.XApp, {
      children: jsx(Ramen.XPage, {
        children: jsxs(BrowserRouter, {
          children: [children, jsx(DrawerCategories$1, {}), jsx(ElevatorButton, {}), jsx(ModalCart$1, {}), jsx(LoginDrawer$1, {})]
        })
      })
    })
  }));
};
const Flow = ({
  children
}) => {
  return jsx(PortalContextComponent, {
    children: jsx(LayoutApp, {
      children: children
    })
  });
};

const MainLayout = ({
  children
}) => {
  return jsxs(Fragment, {
    children: [jsx(Header, {}), jsx("div", {
      children: jsxs(Ramen.XBox, Object.assign({
        horizontalAlign: "center",
        verticalAlign: "around",
        height: "full",
        width: 'full'
      }, {
        children: [jsx(LoaderScreen, {}), children]
      }))
    }), jsx(Footer, {})]
  });
};

const Home = () => {
  const NewProduct = /*#__PURE__*/lazy(() => import('./NewProduct.js'));
  const Container = /*#__PURE__*/lazy(() => Promise.resolve().then(function () { return Container$1; }));
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(MainLayout, {
        children: jsx(Container, {
          children: jsx(NewProduct, {})
        })
      })
    }))
  });
};

var Styles$1 = {"breadcumb-container":"root-module_breadcumb-container__Zf1A8","breadcumb-link":"root-module_breadcumb-link__QXGFS"};

const BreadCumbs = ({
  routes: _routes = []
}) => {
  const history = useHistory();
  const onItemSelected = link => {
    var _a, _b;
    const category = (_a = link.id) === null || _a === void 0 ? void 0 : _a.toString();
    const categoryName = (_b = link.name) === null || _b === void 0 ? void 0 : _b.toString();
    history.push('/products', Object.assign(Object.assign({}, history.state), {
      category,
      categoryName
    }));
  };
  return jsx("div", Object.assign({
    className: classnames(Styles$1['breadcumb-container'])
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      verticalAlign: "start",
      width: 'full',
      padding: "s"
    }, {
      children: [jsx(Link, Object.assign({
        className: classnames(Styles$1['breadcumb-link']),
        to: "/"
      }, {
        children: jsx(Ramen.XText, Object.assign({
          weight: 'bold'
        }, {
          children: "Inicio"
        }))
      })), ' ', _routes === null || _routes === void 0 ? void 0 : _routes.map((item, index) => {
        return jsxs(Fragment, {
          children: [jsx(Ramen.XText, {
            children: " / "
          }), jsxs("a", Object.assign({
            className: classnames(Styles$1['breadcumb-link']),
            onClick: () => {
              index + 1 < _routes.length && onItemSelected(item);
            }
          }, {
            children: [jsxs(Ramen.XText, Object.assign({
              weight: 'bold',
              colorThone: index + 1 < _routes.length ? 'darkest' : 'dim'
            }, {
              children: [" ", item === null || item === void 0 ? void 0 : item.name]
            })), ' ']
          }))]
        });
      })]
    }))
  }));
};

const disabledSpecification = ['Filtros Bucket', 'Configuraciones', 'Tipos de entrega', 'Filtros'];
const activeFeatures = ['Características destacadas', 'Dimensiones', 'Materiales'];
const Product = () => {
  var _a, _b, _c;
  const {
    id
  } = useParams();
  const history = useHistory();
  const {
    addToCart,
    cart,
    updateQuantity
  } = useCartContext();
  const [product, setProduct] = useState(null);
  const {
    error,
    success
  } = Ramen.Api.notification;
  const {
    categories
  } = useGlobal();
  const specificationsMapped = useMemo(() => {
    const filterSpecification = filter$1(product === null || product === void 0 ? void 0 : product.specification, item => {
      return !disabledSpecification.includes(item.fieldGroupName);
    });
    const specifications = groupBy(filterSpecification, item => {
      return item.fieldGroupName;
    });
    return map(specifications, (item, index) => {
      return {
        fieldGroup: index,
        value: item
      };
    });
  }, [product === null || product === void 0 ? void 0 : product.specification]);
  const handleAddToCart = () => {
    if (+values.quantity >= 1 && !!product) {
      if (values.quantity > 1 && isAddToCart) {
        updateQuantity(product, +values.quantity);
      } else {
        addToCart(product, +values.quantity);
      }
      success({
        description: 'Producto agregado a tu cotización.'
      });
    } else {
      error({
        description: 'No se pudo agregar el producto a tu cotización.'
      });
    }
  };
  const fetchProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    setProduct(null);
    const {
      data: productData
    } = yield productsClient.getProducts({
      filter: {
        store: 'E518',
        ['identifier.isMainEan']: true,
        ean: id
      }
    });
    const [data] = productData;
    if (!data) {
      history.push('/products');
      error({
        description: 'Producto no encontrado. Por favor intente de nuevo.'
      });
    }
    setProduct(data);
  });
  useEffect(() => {
    try {
      window.scroll(0, 0);
      fetchProduct();
    } catch (errorMessage) {
      error({
        message: 'cant get data from server',
        description: 'make sure you have accses to internet '
      });
      console.log(errorMessage);
    }
  }, [id]);
  const renderTabSpecifications = useMemo(() => {
    if (!specificationsMapped.length) {
      return jsx(Fragment, {});
    }
    const tabs = map(specificationsMapped, (item, index) => {
      return {
        key: `tab-specification-${index}`,
        label: item.fieldGroup,
        disabled: false,
        type: 'outline',
        children: item.value
      };
    });
    const defaultKey = tabs[0].key;
    const renderByFieldGroup = fields => {
      return jsx("div", Object.assign({
        className: "product-page__specification_container"
      }, {
        children: jsx(Ramen.XCard, Object.assign({
          borderType: "solid",
          size: "l"
        }, {
          children: jsx(Ramen.XBox, Object.assign({
            width: 'full'
          }, {
            children: jsx("div", Object.assign({
              className: "product-page__specification_row"
            }, {
              children: map(fields, item => {
                return jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  width: 'full',
                  horizontalAlign: "between",
                  verticalAlign: "center"
                }, {
                  children: [jsx(Ramen.XBox, Object.assign({
                    width: 'half',
                    padding: "s"
                  }, {
                    children: jsx(Ramen.XText, Object.assign({
                      weight: "bold"
                    }, {
                      children: item.fieldName
                    }))
                  })), jsx(XDividerVertical, {}), jsx(Ramen.XBox, Object.assign({
                    gap: "xxs",
                    width: 'half',
                    padding: "xs"
                  }, {
                    children: map(item.fieldValues, element => jsx(Ramen.XText, {
                      children: element
                    }))
                  }))]
                }));
              })
            }))
          }))
        }))
      }));
    };
    return jsxs(Fragment, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 8,
        weight: "bold"
      }, {
        children: "Caracter\u00EDsticas de producto"
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsxs("div", Object.assign({
        className: "product-page__specification_tabs_container"
      }, {
        children: [jsx(Ramen.XTabs, {
          defaultKey: defaultKey,
          size: "l",
          tabs: tabs,
          onTabChange: () => {}
        }), jsx(Ramen.XVSpace, {
          size: "m"
        }), jsx(Ramen.XTabContent, {
          children: map(tabs, item => {
            return jsx(Fragment, {
              children: jsx(Ramen.XTabPanel, Object.assign({
                tabKey: item.key
              }, {
                children: renderByFieldGroup(item.children)
              }))
            });
          })
        })]
      }))]
    });
  }, [specificationsMapped]);
  const renderFeatures = useMemo(() => {
    if (!(product === null || product === void 0 ? void 0 : product.specification)) {
      return jsx(Fragment, {});
    }
    const featuredFeatures = ((product === null || product === void 0 ? void 0 : product.specification) || []).filter(item => activeFeatures.includes(item.fieldGroupName));
    return jsx("ul", Object.assign({
      className: "product-page__description__features"
    }, {
      children: !!(featuredFeatures === null || featuredFeatures === void 0 ? void 0 : featuredFeatures.length) && featuredFeatures.map((feature, i) => jsx("li", Object.assign({
        className: "product-page__description__feature"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: 'full',
          orientation: "horizontal",
          verticalAlign: "center",
          gap: "xxs"
        }, {
          children: [jsxs(Ramen.XText, {
            children: [feature.fieldName, ":"]
          }), jsx(Ramen.XBox, Object.assign({
            gap: "xxs"
          }, {
            children: map(feature.fieldValues, element => jsx(Ramen.XText, {
              children: element
            }))
          }))]
        }))
      }), i))
    }));
  }, [specificationsMapped]);
  const onChangeCount = value => {
    handleChange({
      target: {
        name: 'quantity',
        value
      }
    });
  };
  const inCart = cart.find(item => item.id === (product === null || product === void 0 ? void 0 : product.id));
  const isAddToCart = inCart ? true : false;
  const initialValue = inCart ? inCart.quantity : 1;
  const {
    handleChange,
    handleSubmit,
    values
  } = useForm(handleAddToCart, {
    quantity: initialValue
  });
  if (!product) {
    return jsx(MainLayout, {
      children: jsxs(Container, {
        children: [jsxs("div", Object.assign({
          className: "product-skeleton-loading"
        }, {
          children: [jsx("section", Object.assign({
            className: "product-skeleton-loading__left"
          }, {
            children: jsx("div", {
              className: "product-skeleton-loading__left__image"
            })
          })), jsxs("section", Object.assign({
            className: "product-skeleton-loading__right"
          }, {
            children: [jsx("div", {
              className: "product-skeleton-loading__right__title"
            }), jsx("div", {
              className: "product-skeleton-loading__right__date"
            }), jsx("div", {
              className: "product-skeleton-loading__right__price"
            }), jsxs("section", Object.assign({
              className: "product-skeleton-loading__right__buy"
            }, {
              children: [jsx("div", {
                className: "product-skeleton-loading__right__buy__text"
              }), jsx("div", {
                className: "product-skeleton-loading__right__buy__button"
              })]
            })), jsxs("section", Object.assign({
              className: "product-skeleton-loading__right__buy"
            }, {
              children: [jsx("div", {
                className: "product-skeleton-loading__right__buy__text"
              }), jsx("div", {
                className: "product-skeleton-loading__right__buy__button"
              })]
            })), jsx("div", {
              className: "product-skeleton-loading__paragraph"
            })]
          }))]
        })), jsxs("div", Object.assign({
          className: "product-skeleton-loading non-flex"
        }, {
          children: [jsx("div", {
            className: "product-skeleton-loading__dis-title"
          }), jsx("div", {
            className: "product-skeleton-loading__dis-text"
          })]
        }))]
      })
    });
  }
  const discountPrice = (product.price || 0).toFixed(2);
  const ImagesURl = [...(!!((_a = product === null || product === void 0 ? void 0 : product.urlImageOTher) === null || _a === void 0 ? void 0 : _a.length) ? product.urlImageOTher : [`https://media.easy.cl/is/image/EasySA/${StringFormatter$1.removeInitialZero(product.sku)}`] || [])];
  const nameProduct = StringFormatter$1.capitalizeLetter((product === null || product === void 0 ? void 0 : product.longName) || product.name || '-', true);
  const category = ((_b = product.hierarchy) === null || _b === void 0 ? void 0 : _b.length) ? product.hierarchy[((_c = product === null || product === void 0 ? void 0 : product.hierarchy) === null || _c === void 0 ? void 0 : _c.length) - 1] : 0;
  const routes = findParentsInRoot(categories, Number(category)) || [];
  const routesMapped = [...routes, {
    id: product.id,
    name: nameProduct
  }];
  return jsx(MainLayout, {
    children: jsxs(Container, {
      children: [jsx("div", Object.assign({
        className: "product-page__path"
      }, {
        children: jsx(BreadCumbs, {
          routes: routesMapped
        })
      })), jsxs("div", Object.assign({
        className: "product-page"
      }, {
        children: [jsx("div", Object.assign({
          className: "product-page__image"
        }, {
          children: jsx(ProductSlider, {
            images: ImagesURl
          })
        })), jsxs("div", Object.assign({
          className: "product-page__content"
        }, {
          children: [jsxs(Ramen.XText, Object.assign({
            fontSize: 10
          }, {
            children: [' ', StringFormatter$1.capitalizeLetter(product === null || product === void 0 ? void 0 : product.brandName, true)]
          })), jsx(Ramen.XVSpace, {
            size: "xs"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: nameProduct
          })), jsx(Ramen.XVSpace, {
            size: "xs"
          }), jsxs(Ramen.XText, Object.assign({
            fontSize: 11,
            colorThone: "dim"
          }, {
            children: ["C\u00F3digo del producto: ", product.sku]
          })), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: !!discountPrice ? NumberFormatter$1.toCurrency(Number(discountPrice)) : '-'
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 11,
            colorThone: "dim"
          }, {
            children: "Precio referencial"
          })), jsx(Ramen.XVSpace, {
            size: "xl"
          }), renderFeatures, jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsxs("form", Object.assign({
            className: "product-page__buy-section",
            onSubmit: handleSubmit
          }, {
            children: [jsx("div", Object.assign({
              className: "product-page__buy-section__input"
            }, {
              children: jsx(Ramen.XCounter, {
                min: 1,
                max: 100000,
                onChange: onChangeCount,
                editable: true,
                count: values.quantity
              })
            })), jsx(Ramen.XButton, {
              type: 'solid',
              text: isAddToCart ? 'Actualizar en cotización' : 'Añadir a cotización'
            })]
          }))]
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "l"
      }), jsx("div", Object.assign({
        className: "product-page__discription"
      }, {
        children: renderTabSpecifications
      }))]
    })
  });
};

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADOCAYAAABRsbwsAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO19DXQV1bX/IUC+w+QbQhKSEAgfEYkgUkEkEcRWpaS6itXn07S2r1r7b/Pqe76+1i7Cq8vX2mcbfbba9lWjS23BWmLxW1OCKKgIBjEEEkICSQjk+5CQL0LyX3vYJ5wM997ce+fMmZmb+a2VdXO/ZubOnN/sffZv730mjYyMEAcOHMhFkHO+HTiQD4d4DhyYAId4DhyYAId4DhyYAId4DhyYAId4DhyYAId4DhyYgCnOSXdgOTx6by4hJBcPq5w8+HR5oF0kh3gOrAgg3SbuuAKOeI6r6cCBCXCI58CBCXBcTRuAUppDCInmjjTXy6PmXbQuRVEqJtSJszAc4lkAlFIgVQ7+RXPEWo2PlBDCkwb+7xrnyGE7RdzzdEppGv6/Ex/LcTuwvQpFUcbbpgNBcIgnGUiyXCQZe1SQDPX4V8wIIZoMHMl5sucDySmljODl7NEhozFwiGcwcKDnI8ngLw1JVo4EA3LVyzoeJBJzQUv59yil6RwZCwkh2yilx/Hz8Feqm4iP3gv7KHD53oNPF7l8PQDh1OMZAJyTFSDRFnNEAwtiq9A4pTSXt4qEkANI2FK/5owXNLodLt978OlJAg7ZFnAsniBwZMvHLQLBihRFKfVlD5TSVEJIGCEEHsPxMQzfzhrv+y20Mr2952jW2YHWdPZaWHBMZUxExt6ZMUv2EkIaCCG9+NinKEqDp+3hjYJZZzi+fPyNpRc8U5WEJYYFbh69t2h0Lvrg0wETHHIsng6ga1bAuU5eD0JKKZAqhRAyD8kVh8/9wrnzvcFHT72byxNOi4iQhPo5M64vnzo5fFDzViMhpB3JeASeK4rS68Vv0N5sSvD3u3edfXE1H70X3PROzaeO4zy4Qr0ZPPi0NDddJGxDvNbMVeqdL6F2l+muGt71YfBsIIQ8h26XR8tGKY1DkmUh0fwmmStUNb26zhPpGIB8C5I3vOPFJhuRiNVARkVR2j19mLOEdxNCXkUC+mTtL4Ent/QC8uyaTmYn4rED3ZlQu8tbHUsYMEhSyN2ti3FwuQ02UEqzcH40TzTReIB7eaJ9zzr2EpArOXbpvmlhKe1n+hrjmjr2LeVJOSvu6ncSlWxfLUUjWkMIBlW7+xCepwI8VwStYLHXQZlH7y3norsluB04h+kYmLoIG88J7Ug8klC7S9oJR3eSEa4C521u77LofrG/MHefEwne2rmzaN58xgf0cdqfW7caAzNFeC4YAT25oWNdS1fEevTei1qnjaOgTnDFDZBwReg6gTuZ427QYEDkakLICllk48FbM7B0rj4Dr1c3v6V+zhuXdByE4e+9mlIKJNxNCNmjDdTgDSqXO5d1lFI4l0VuzmUO9/8Bl4dwMcBi68RpO+VqUvZPa+Yq15NzETuhNJpSCm5kHb6UoShKgXagQHCEUrqCUvozQshDhJA1ZpBOC3AvfXldAMLwtz8E5wLPSTi/WTh3cA7hXOJLQMBidEvdIaCFe0tYvNbMVcV4t2P+PQRRtHfEUrQ+gOLWzFUVCbW7hIWXuTlcIe4rw9VdGYMka8yybuMB5nSuSAavS9h9Cl6jjZRSsIJlfFAGz2cBpbQILWA93uTYHNATEQMKVrF4OSjOQg3Ws3BHbM1cVd6auYoPohRxVg9SrMox0qkbGJGrQME7342FS6WUwl37EatYNwaYs7H/IZDi6jP86/znDQKzgo/AOUNXfBScBWQZPRUv/Hnb/Qfb+7/GfSygE7qtPMcDIu5ozVy1OaF2VxFYQHQxt+H7QL5CsJYJtbv8cktw7lGCEbNCV+FvjEyu90a8NgtxkXOq2bwNHiGQ4imqCZ8naAX59/hoqMCfwuaCsM/tfESUmwPmnzs39Mf+xLQgcv40ezugXU1LRDVbM1flcCHjfEyz4qGSDz+bi66gwr/uK9DdAQu72VW4G13K9ThwLA9vdbxpYTOrU6Ov23Wqo3Z65+DedcMjQ8H8+0GTpgzOmbF2u4Fzwj1IwNHtZ2bnJUdHT7u95JbLCxadb83GlzcHcu6mJeUEJFexhoBXsDlda+YqphWV+GrtMNxfgk8LtOFwDAxstAvhGLzNXJk6mL33tdc/mLl0VdDcsKjBRHef0yk3eAMg4NYlK/LP4802nhCy9/OX/yeEnB96dliJHxxW4u8I1BpCS0Y1MTslVxNSLuLe70qo3eWzi4lW7jPMNMlxQbo1OIezFekAkAYGZAFxXDuHg+fwOrwfRELUdDGedGAF4Y89FyA3eAM4x4+8s/3ZPLzO3TAVjVi4dFfEouVzhpX4rXCt8JoFHCwtoOOc7ln23F/hHOdybP7mysrB/O02I7NLrIS+vv7Jlc0v3MMOiZHuTN/J0XnslbO//QeJhwxZMVu0GTEa7yRfZvmU0bC0jpdQu6sEk2JV8FHOzOy82d5sg4tYlmutHGpx4FY+MFFIBwgLCz3PW0UgHE86CVFPLeDcPwDXgtcA4VrBNWOFuXgtAwJ2ENDz1WTYC38qaTKz86IIIV/JzM6739MXUSMqQStXqHkvixO+JxwgegmBFO3vhtfcZb9IABPix0SQ8dqpc3q8praHLcuCIAqGhGyrrdyxRfs+iuGlKMhe4qKglZuQhOMhSU7wiD8+uzVr2ZJFLTmLF2jn6yC+b+Vf4KYMXXhdbSs52JV4IYSQqNrKHW3a93BeUIruSSF/cVDILZhIbqUWx+oaIv7+ell64fcLKq1wPMVPlqjygZvjacQKkNEcULypFnPJDraMetqyr2Zt5Y4BN6TLZ9XSmH3Ck27FRJvLuUJlVY3l0rJSU5K63bzF5n4r2AtwTTHrBchXbtd5X8A0tMV0rhK0csWa9zZiDqHlcitl4/iJk1FWO6bMjFlnPLwN1+xuvIajwGtciPM+w5LmjYKty4Iys/PmE0KueuapR5bmLF4IxMrVRi0JIfdZOd1LJjq76NShoaHJVjomH1zeNThVeIq1pVAUBUhXgZYvXVEU22h+tu65kpmdd1vBnbf868IFcxatzVuxUkO6CT+fC1C4mvflcO0HbWH9bO1qvvLSk7dGRUWkPPKrpzctWZHfz15H0k34+VyAgs37Rise8Iar9gSllJbY4Wfb1uLhCc5Zt77g6bb2LnCfumsrdzyPE/G7vdiEAxMAUdUTjScjTp5sCW9pbY/IXbW8iZcSIMoZE630X79mZdPMpMT+cY7wOUVRdnNjIpqJ7Va3fLa0eIx0MKdra+8qxzy/TxzSuQcMeNDMKg5UmRrVLCvfk1xxoCoBSAfPy3d9nAxkg+Njn+nsoqFbX3kjs3zXxy6TuDncrY14srb4Vrd8tiMeTzo40bWVOw6Dpdu/uzTWIZ17nDnTM/Xs2d6pFQerZFSiuwWI5fBeYkLcWbB2U6dOOc9/9qs3ramHv+wFc9srD9XEQl7pOJu0Jfls5WpipjqEkNNdaHQq6eCO3tDUHLH+xuuaTD1Yi+GlLdvTwcrAoJ6dkXrWKke3/Y1/JNceOxG9bu01DQvnz/EkK4wHV25nPWq6lot22sbioVZTyCwd9/oY93Lv/oOJcCHhgpp2sBYDWA0gXURE+DnZpIPr4OlapCYnqcez99ODCeNtC26qHrblzvIVWlHnswXxMDuh2IVOd8mcbu6cNJWUDvnGInP2rC7m5skCs2aedjdtWuQ5uCEsXjR/3PxQdlP1MPfTko/10Sm2WoaL5V1NTqOBjJQS7nW3gZSTzS2h75R9kBwXG93vuJzmgJEOCC/qGrBtwrzw/u/eedjDR7VuZ4GrG7eZsDTx0E+vQD+9mHs9FUt6HFgUzNsQfeNj5PMi4+VhjcjOWjfmWKGqwerEU/ts8poMJ477lHcJ8wOI6K1bc403+pDtYUerD9cI3EmYLuSuWq7XLYYO149pyFeCgTnpa29oYdk5HhY8RnOLX7DcywJ/kp3hgnZ1nfFWH7I14PfB74Tfa6ffAdFoVfI4UJUANw6dmwvD5rl8V2sYS9FWKKa1JPG4ZbC0xY73+ZsGxoIugJqjxwO6YzH7fSLnV+NBhEAPxwrHDP+/W/ahiMBYCo4ZFTiW8pGQpgZbJhcVWUviwCrjt7Bdw0fc61AWsszf7aanpZydlTqzu6n5dPjSnOy2GTMSAtbdnBwUdH7ylMnDMl3MA18cjmloaI6iZ3qCcy5foF1M0mvMm5vR3drWERwWFjoE/ws4tLiBgYHw0NBQdU4YGhraNTAwAIGZkoGBgb/AcwH78BmWm+OxMg++R4qRqWBsXuGm/YBpYJXZDNpgwnjvy4bRAj1cp9q6E9M6Oqnqgn7nmxvdrtHnBtpIJ4ty5vi4HSGwlKvJeihqSJeKDWYNAZAO5hWQMwiD59Dho9Nk/mbYnxVyKPXCaIEerlNDY3MUXCs/9ciNmooGdYyZ1bfTMhYP9TpoNnuFRiT/mZHlPTA3gTxGRkAYPH7cTf3CR59UxH30ScUM+K7M/RoBCPNDFopRXgPzTGZMjz+rw4WGtd1/zp64G3MyYCXiVWAhYxH3mrRuYJBWteWVN9JzFi1ol+Fywv5+/6e/zGfPcxYvaBUQQncwPsZ0L0OLly/b5bQE8Vz9eOyt+IC5R2YcgHjv7dg9o72jK3SiaIsWwmN812pXN32jYTrxMIpZx5t71F4gM8W0EhbBYq4Da6EdM1vU3i2cy+lyMVIjYIXgCmQTbNb42DebSToiXswNWLxb9uEMbYTVBojDMaYCx95mbp0Gw2Eq8VDETMcEVvZalhW6PPNiLqRemX08VkVlVY2pN0gdWKNpFQ9jMF2WsG4a8biOwIWa7JTbzDomLRj5IN9R5HbBQtjQSgQiRscajsFCLCEyXNox0+IVYgL06PLHuD6dpTqDAfmc0iLXYG0ZoE2DBQ/PG6TgmFOBY7Gezw82CqYQD+8ohfxikxhQWW/G8TjwD7DcF2TMXL9m5SkzT2F3z9kp+z6rjIFHP76+XpNIXYRV64ZaPbM6SRdh+Lace22j02LdgScAuY6faIps7+gKO9ncEtnQ2OySHHPnpLetzVvRsPSKbG9yRsNw7KmBFRiTlNJSRkCjLoh0OYGTD0ZDt7jQ/yNSD8RHMHlhTe7VTVZqFhSIaDp5OvRYXUMUkKypuSXq9Om2yDPdPR4jy4kJsT0trR2R/GuXXzbv1A++d9chL0/RTxRFUV1mV2NUNMyweEWYsMr/oHEDKuBGVNfUqxejselUVGfXmVC4402Liuz/9S//c/d439cLyOUkuNqOQzxx8NaKAeBaT58e35OclNidNiu5Z3ZGanfyzOljAl9A2h07P0oq3/VJxudfHJnxwp9f7bvz9g11Xhzwes7q1VNKn8OxakijJKnEwzsJVBlkcK9BSHcxe84TjF2Mlpa2yIHBcy6PFe6Eb727K+nL169qNvLYYSkpSNK14mo7ZgEis170P1HhqxVLTUnqmpmU2BMXG90HJPPSbSRARCBaeHjY0Btv75y7v+JQkpfEu5pSupvLaAHS1UFWlRFWT7bFK+StXWZ23sIf/9t37x8cGMyorWuI8UQwghcjJnpaf2yM0rdg/pyu/RWVCR/vPZDy8d4DhhMPlpIC4llttR2zkTUn45K8VtFWzB/csmFdAxBvPBdVA7B6j5GxVq/QiLmeFOIBwTLSU9Lvvef27/z6yWefPn267QlCSHxERHj4O+99cImeBf66okzrH+9iZM1N7wbiwYU9UlMXOW9uRo9RvwESp0UlTzMNT0ATV1PR29s3BXJNX/jzqxlGWjGJyILSIa5PC1i9CrR6QhPnhRIvMzsvjRACjUnTMCMlHv8nEeFhi/7+RlnP6dNtSezzC+bNnpI5O62NESwxMa7PF/JERUYMwQQafPm33901a97cDG8n0qYC2pdD/VrtsRNRdiGeKyt2uqVNOVxddzY4eOoQ/1mjrJgkrNHM9Sq00pcI+EW8zOw8Ri4twWD9AlifXOv2tS1ftjiloenUb7BHZtv+3aWnMZKpS5y+4fpVJ4B48Nfdc7YayCjyBBmBmTMTe4F4Vpwv+jIXm54YT21gxXwFzPW2swgnEq5EKvGQYPC3AB/Z/64ApJsD8RJCyB9xAcG22sodhzD/7auKovwX+552aV1/ARYSLj7cgV/d/l6qlxNpUzErZeZZaEgku7OzFlaYi1kUYPXUmj3U9dS8Yj7LSi/cEg/mZR6axkI5xXH8a8XHeqyfA2JOq63c8T73+QJNIjRkCqxwvWnfsXzZ4mYYND5EsPwGm5/p6XECcsTsjFRp1eayIooBhBWU0tdY2RCOXRjDxhMPiQSo4silEqy2ckevqy9kZue9gmS9Fv6vrdzRihLCBo0ekiMySwUimu+890GGLGnBynCsmBCE4Rhl+jC4mr/BddaFSAtuiYfkusOXjYFbmZmdt48QspQQcheGZgtQQuCjQsLLfpbkLGwG0VSGtGAFOFbMcKxhxIOxi9JCgai5nhFywvNIvKXgru7fXVqg6QadakQFQt7qL6nEM1pagMUUIXVMxLag0dL7H+6dMTNp+tl1HhKNHStmClI00kIpupzWJB64l5nZeTC/uzYjPeV+crHcguFq0fskmLEgQ1oQqecBoM16T0/vVCCeY8UsBxirKvFgDEMvTmgTIaIjmVECOli9K5VpUWveeHvn3ts3fpV/T1hQRYuVVy9ttou0wKzY6Zb2yPPDw5O+/b2fXufus44VMw0rWHQTUYrupu5MFkOIB/PDzOy8N2Njo7/xuz+8+BkjHjaVMaz0B+74LEvdKtKCY8VsjTCNhStB8lmTeIAtzxc3PffitpGTzS0jmdl5X6mt3PEmRooMxbXXXNXw121vLTBCWoCOzxHhYYNfueHappho5Zz2fWcuFpDIwTUa1aZIqOnpdjcNI97cOelfXn3NVR+88fZOeHprZnbezv27Sw0nHkQ0t79eNle0tACdxqDr2MDAYFBvb//kLyproh0rNiGgHbPluOKQNYkHB3f9mpVF//GzX8HcJf6KxQvvkVVhfvXyKxpESQu8FTvR2Kw0n2pVKj6vmunqs44VC0iAu5nFlQux6nRd0U1DiIf9KhZjNBMO+KHunrP5TSdPN8oYiLy0AHMsb/bp7VwsIjxsgDhWzGv8+n+fvezMme6Qu+742mEbFxDn4Dhm0c1tMMb1VCwYZfHAFKs+JorqVSHBwZe9Uvp2sA+l+H6DlxZeKX17tnafzlxMLrq7z4b09vbZuY5xnub5ThzjfjfANYp4uXxe29VX5ZQNDJ676/MvjoQdqak7YWTdHAOTFo5UH4sPoHox20GJiuxvImRa9dF65bLsLLvWHoKYHsdVLJTjGLck8UYP6rfFReSJ3z2vWqC/vPx61qaffH+/yJ1BpgqI0FWHj0Z3dNIw6MdSXVOXGBYWOggV7eB28p93rJg8xMQoAwHyU+ZxuZvletu9Cycezu/SNK37sm7Nv+EYEA/cOnD1/LEm8D2oembzMErPhGo7SzGEhAQP9fX1w5K+g/DSjTesrnGsmHww4jWfbo2w+U/J4nI3oVQoTc88zwiLl8vmdxxSwaIsX7a4EVo1vFL61tylV2R/4urLrNlRa1tHaFtbRyj0YqG0O9STixgSPHUoMTG+h3cTZ0yP74N93l9YdC1YvYT42H6HdN6hp6d3Sv3xxnARrmFCXIzqSQwMDJrVw1UUUjXb2amdUvkCI05GDppiFVh7pyZFf+PrNx2rOHBoBlgpmHdBwyJvu4kRdBEVJao/MyO1Mz4+th/IBH1XPKWGMWnhHzs/Sl218spWA35vwOHhR3+35NzguSkP/ut39k2fHq/LVUyIj1W/39R0SuoS1wYA5nnhXI1eOY51yxAvly965SsRzpzpmXL+/LDaNh7IUL7LpdG7pNkRtGrz11r5Iy1MdCQmxPUCUQ4dqVWmT4/XVSWvl7gWQwqTFVBA9zt1zCiLx6v6o6HY/yt5eeHQ+fNBAwODU0NCgs9p2/VFRoafEx3xHE9acHAp0mclUyBec3OLkHlZfHzM2ba2zogvKqun2TiySXAs88TzOxNLKPEwsKJoqnRV3xgij0wv+8XP/22nTMvDSwswh7RDQyRf8N//8/RiGNgiXENASvIMVeg+1dImhHghISHn4bG3rz9g5nnYgUzxN8AierWgHBeBFXXhQgj3E3QjZbt7rGoB5o/vln2Y5MVXbAU2sME1FHHcaakzVeKJmpeBBYXHxqZTdo9sahfh3Omv1TOCeNqeFGOqzUNCQkyxNlC1AI8f7N6njU5JAUQKjdoPG9iiXEOwmlOxVyZUyevdXmjohRtDZycNEXF8JkLbOaHeKsSL5omHbR5UwPwNHiFyKXifXgGSpUF2AFli14efJsjcN7iCmx5+/CoRg9gVsuakq8Q73tAkLHIIAZYL2zyp+5hnpSSp83bqWzt1S4If0zjW/VpHTzTxcjWBldFqBAiagBwA7h6U6wjer1cAaQE+B9KCzP1OmxalzrsOVx8T4gpqkZ6WopIE5nmiLKtIK8okhZbW9vDxP2158BU2FTjmfYYRK8LyE80xAxw6gcEjtOIz4+yCtACPTFqQtd+F8+d0wOOBg1WGWNrIyPAhiBzC/4cOHxVi9ZgVFRFgYQGfcx40WhuBH9N+VyeIJt5qjcUbc4fbsH5tA1g9VqQqeN/jgkkL8DmQFmTtd9mSRSrxwCKdPt1myDwnLTVZDdMfrT0uxKoyKyoqwMJuDCApiNieieDHdAWOeZ8h3OJpQqtjLB6E8a9ZsVR198yyeiAtwCOTFmTsEyzS7NmzVPLtq6jURsaEYE5mmtB5HhxzVFSEaqlEkIVFXlvbO+0+z+MlBfMtHjYyOq55+ZKK8+vXrBwNcphh9UBaYHNNmdKC0e4mW3UIrKqobSYkxKlW6kRjs+6AGJszBkBkUzumKY59nyDS4kW7kBIuAVg9FuQwy+qtW3uN2gRJprRgtLvJz/NEuXNJ0xPU7TU3t+gOigRQlYIWFf5ENo0IrvDIcvUizPXMCu0T1d1c0ip7/zLczcT4CxYKik5FbI8FWFra2vVHNgOnSsHlmPYVRhPPJXirJzu0T3D/OYsXnpK9f6PdzdmzZ6nuZv2JJqEBFhHuq+hgjd0hknhaDc8jmNVjhbGyz+ONN6w+QSRLC0a7mwvnZaoWStTgFum+wrbY/0ZFdk2CX1qeaIvndZQHrM68rNlt8P9rb+6QPtcDaWHunHR1/7KkBaPdTdDLREYiCee+igiwJCfPUC1ya1tHIBHPr8imKa4mA7SDIGh1zLB6a/NWqO6uTGnBaHczNTlJtXqi5nlJSYmqi1h3vFE3kaHxERFEYrvDVOLxgrYZVo+XFj7cs19KkMVod5PN80RFD1meZWur/gALi2x2dZ0JJIvnF0wlHtFYPZlpXAxMWpAlbRjtbrKSnobGZiGuJitchd6YevNARdf52RmmE8+sNC4GXlqQ5e4a6W5Ct2Yo6YG8SFHVECzAAg2QdG0nLka1eNBZWsRx2RmmE49wVg+qxGVbPV5aeG/HbinSgtHuZmpKkmqlRFVDiNIHWQt3sJ4ijsvOsATxwOpB/xViktVj0kLN0fp4GcQHd5NF+IxwNzPSUtRtiwiIEC7AImLeKDrqaldYgniAm7+Sp861zLB6vLTwxts7Z8nYZ/7Na+ugR8qNN6w+KXrb87Nmq5FNEQER0duDxUs2P/TDT2ze9Eg3jKhA9wsQYTTT6jFpAfp+ypAWwO0C3e2TTz+PFe1u8i6diG3z29MbYIFt8WJ6AMD0CvRyvSu+MqsnU1djMENa+FPJy3O2/PX1+WXle1yut6cHzJUV1QBpdHuCCm0DCGMaOHsLy7iahLN6MPhhDXPZ+5ctLSy6bJ4aZKk+WhcretusDOfYsRNCiDIjMV61egHQKcwSMJp41V58ZgyuW/0l1eXb8/FnqbKtnmxp4aorL++4+cbrjhb99Af7RG+bVRY0NDWLymC5ICkISsC2MXwe064gknhdel1NAKxvwFw+2VbPDGkh79rlulqkuwMvfIuY5zFhXkTDItAXYaXYl7ZsN6UeUzBy/MnXFEY8RVEgS1t7N+zzZ1vM5TPD6smWFhhgEMJgFNl/k83LRLToYwEWEOb1EhlWh4UKCptmsGjHtIJj3ycIdzWxjTtDgz/bgB6YZrRnICZJCwR7pcBg3Lv/oLD5HpvniWqAJJLINsbomNaMdZ8gmnjalta9Hj7rEWa0Z2CQLS0Qte/obDXQIioYQrjcSFENkJwAiwp+TLtassArGBFc0W3xCGf1zGiKZIa0kHP5ApV4NceOC7N4fAMkES4s62Q2wQMs/Ji2jMXTanl+zfEYzGwFKFtaMCK5WXSjW9GLmdgU/Jj2S8MjBlWgp7MniqL4bfGIya0AzahamDs7TbV6FZ9XCbN6Ihvdil7MxI7QjOl0q1SgV/DEQzT6uzEzWwHyrSlkSQusiPVIzTFhxGPuoagIoojFTMLDw85DoIbNGW0E7VhO96XPEA8jiKdtad2uZ4NmtgJk5UqypAW+XEiUrMDmeaLXutOzmAm41T/6f9/84o7b1teJOCaJ0I5l7ZIFXkMo8bClNXTW5a2eLnfTzFaAfLmSDGmBn5OJkhVEt2Kf4FXkvJQAY5z628bdiKimdm3oI3o3aGYrQJbCJktaMEJWENkAyS4BFoM8FH4sa9f69wlGEE8b2fR7jsdgZitAPoVNhrRghKwgstEt30LQygGWY3UNUeRCNb7fC4u4AD+W/Y5oEgMt3miDT0VRekWQz8xWgDJlDSNkBdGNblkxK0sjsyI+O3BIvUnOTErsEXR4jTiWGXxq4KyFURZPG2DRNc8jJrcC5GUNGaQXLSuIbnRr9WJWcDOhkwFR175fJqrCXzuGV1vK4uFk8zillG9rLaSUwqxWgLyr++GefYbriUbICmyeF+jNZGEe/tvfv3A5QTcTlgAXtOnRMYxj+7gl1sfToFzTT153gIWY3ApQZic0I2QFkR2hrQpIsvjxQ79a0dLaEQkeyrcLvn5I4KHyYzhXj7UjsoinKKqYQ0UAABF+SURBVEq7iHkeMbEVIC8t7Nj5kaFWzwhZgTUsEtXo1ioAbfeJ3z2/8P7Comv/uu2tBRAEg2DYD+6/ez9cM0GH2YhjmEE38YwKj5cSQp7VvAZ3jBS9G2YEAHcTrN4PvneXyLuaR4C08NyL26KhTvDO2zcYKv6CrNDWti8CZAURxbIwL/vmP9/6RSB09wKyQfAEevMA0djrYOVA8wX5CaYHAnep9dhgfpevZ4OGEA98X0rpAUppvqIopfgyRIDWiNg+NEV66o8vXYFW75jAO5tHgLSw7e/vjlZMQAWFUfsCWeHDPftSRcoKdiUdzNtAyjlw8HDCiRNN0TzZwLotmJ/ZBkEUgfM5LUajlzCmoQm4nvkdMdDiETTF+Wj9gIzVlNI+V+ui+wrWFMkMqwfSwhtv75z7/gefpBpJPK2sYOXQvRHgyQYpe/wuJJGNoQ/GLvd8dEzrgZHEK3FxgHDnuFrExpnVY60ABbsWbgHSQtmO3RkwgQdpAW4CRu0LZIVDh48mgqwwEYgHc/aDldUxrsiWmBDbs3D+nNZlV17eKoFsPLRaXa5eN5MYSTzoQ0EpBdOcw/WkEEY83upBUySj51wMTFoANxekBSOJB7ICEA9lBd1aqBUBZPt474GET/cfTIKbGX+IQLYrlyxqXr5scaus6YQL8G6mmpHlT48VLYzOPQSLV0AIKSQXySjE3SSaYIcBE2q3gMgqEM/oOSbICp8dOHSGVQQECmxANoY+DckKRLiZRALxmLtZyL22W1SQhQ92yLR6fGQVpAWj9guyApTPGLFt2ThSUxf5/gd7Z9bVN0RryQbNpRYvmt8Kxceybp5eYrfmY/ki3ExiNPE4d5OPbu4RRTyCLRpAv5Ft9WRKC3YFI1vV4dp4uDnyP8PCZOOxh/2P0UwhbiaRYPEIWj0+utlAKW0UoekRbIoEyctwYaEV4C0b1kmZC8mUFuwE0NgOVx+L0ZINNDaYG1+xeGFrzuIFnRYmG0Ojps1DPo5lIZBFvDpKaSGnfZQRQu4WtQNm9aAVoCziEYnSgtXhSdBmZIMblc1+Vhn7B/tnwngVlpxvOPEURamnlL6KE9NifBnM9UZRQRbe6sm0PjKlBavBHdlAY0tPS+6yKdkY+jQyAozdV2Esi9qBrPboJUg6lXhQ10QpFRZkIZz1AQLKIp5MacFsWEjQloHdmtq7Qk2AUDekEA8CK5TSYiinUBSFJZeWiSQesz6yrZ4sacEMTDCy8eDdTDXZnwsOCoHMBUHA6hWxqgXI9qaU7hElqLOmSOW7PsmQafVkSQuywDS2mtrjMa6yR0Bjy144tzMAycawR1OJUCQyqMIgk3jgZhZCdybOVy4TRTyCTZEgvM9aAcqaYyxftrgZiGdXacFGgrYM8NYuHXurCNHueEgjHlYsMKtXQC5KC5CAmiViH7zVg1aAsohnVnBHD0BjqzxUE+OKbKCxzc1M65xAZGOo1kgIqrXTW4ngClLXnkOrB9JCEWf1thNCHhC1A2b1WFMkWQGPJTkLm4HwVpYWAkDQNhrb2fbR2gmVEHhIJR5KC89prF616LkeizRCUyRZxAPCA/GsJi04ZPMaezTlPzBGnxMpIfCQbfEI/iBXVk/YXI9FGmVaPRi40A/GCtIC09jqjzdFu8sesbHGZhSkWTtiBvHQ6j2usXpCI5ysKZJsq3fD9atOmCUtBGj2iCy4imQ+bpS1IyZZPII/rF6j623FCJKQbBbe6kHUTgYJIMQuS1oAja3iQFWMu+wR0NjmZ83udMg2Lvpw7KlA3S7fxapXQmEK8TDCWazR9SCbZTumkukGb/Vktodg0sL+ikPCiTeBBW0jsV2TpQJjstiISCYPsywewQhnAV8ypChKGaV0hajKBTOySkRLC57IBhpbRnpql0M2vwEVCLxuxyxdsfhdjYVpxEOrB/lvkEpWzt1htoiSF8xqBcikhY/3HvCLeI6gLQ1b2I6wAkFN8jDa2hGTLR7L4WQJqEXkorwgLI/TjFaATFoAwkM43xtr5JBNOso08gGMwXrROZnuYCrxEAUoL5Ry1b2vYaAlTu/GzWgFyEsLb7+7a9a8uRku9wmk3Pvp5wmHDh9NcNcOYVF2VqdDNuFoxzGmApsYbTJSPtDCdOKhvLAZE1FZF6deTC8T4nKa0QqQlxa6e85Ws306grYlUKIJqMBY22ykfKDFpJGREVn78ghKKVg7sHpF7HOU0o2iXM7Njzy5BKxe7qqr6mQlMrN9Ll+2WF03wlU7hFmzkrscskkFuJi8fADjDQJ8OTIPwkrEgx/+GSHkCr6hDKX0ZyKinCAwP/fitkUw2H/x8L/vNmKQQ5ZMa1tHaFtbR2hTc0vU8RNNMYeP1M6cMmXK8KzUmaqe5gjapgKimD9nT9yNORmwwhxPBXYkG+NyIpjLqUtYF9UKEFzFlpb2sOMnmiI7OmlYZ9eZ0JaWtkhewOYBpBseHp4UG6P0rb/xuqMO2QxCW0fw8Iul84Z3fpxFTreNjQ1Mj28PumZZ5aQFc54g39jAv8NcTKmkI1ayeAzocoK8UMi9tkJEcyTQ1aAp0nhWDyKMp063hVUdPhrd1z8w9WRzSySl3aHaOZkWEH0MCQkZysxI7QwPDxtKm5Xc8/6He2dWHqqZDgGeTT/5/n69v8HBpRh++fX04adeyCUDg8HjnB5oDFwQ98V7pZjAkSvbxWSwjMXjACJmBWp7TFjfTSlN0Tvf48VtsHoL5s/pAsvV29s3pbauIWZgYGCKNrqoBWSIKEpUP6ytHRYacg62MWN6fJ+7yCO8t+lQzXSZqWsTCcN/2pI1/MzWXC9/skII2dbxw03/O/m/fnSXxrOSCstZPHIxg0B1OflIE6X0Ab1Fs8zqefoMWMTExPiemOhp/eAiguVKTIzr8zc7BBZOhOgmSAwyVzayJMZzCVcvrw76p/wjJD52cLzDVy1d8TPr/PmZQfk3/CLm4X//T7NOkSWJRy6QrBjzOHNZJgGlNBzne7qCLT/6j/9eAVaPRRWTkxK74+Nj+xPiY/uNqGSAoAvIGUYGduwAr13CkODBoPvuLA/6+k3uw/ttHcFDG++/wwv30h3A7UyP++I9w7NUXMGopZh1A+d4XXzeHGovJZhR7jegAS777vf+5Y5DEGgBN9So8iHYLrioEICBvEuDT50lobqEYJ28IcrAYDB8Fr7j7iNgNXWQjqDbWWDWubIs8RDgcuZiWpkK7InxmJ6NAskYEWCuJ+hYPYKRHeaYMvZnJaiWzvt52CjgO/Bdl++Bq6ofDvFcAV1MIF8RpXT0JCH5ntOzbUYE6M8C2SwGHP4YgEAOria4uOB6Gr0/ywDmdOBe+gn1u20dl1o27fzQPyw26zRZ3eKx1VkKsIohh3t9tx7ygdWD8L8sq8d6wcD/0BrC6P1ZBbpdQnA7YRteok5VxEfIP8gIeZGMkD+REfKzkWHLnRfLE49c7OIL7ma5SPLdmv/lGiLR6kF9IDxipYRHTTBQIMIl1G4DkhiqkFx/Q3I9PDKsEuyZkWHyt5ERsmNkhBweGSH1GDy0WrNTK+p4LqEoSgk2oSnHprhqNAo1PuKPwM5XLjz7/CtZRof6A63rtFfw0yXsxMhaHRkh/adb4z575MklfBJDgpto/AxCSOikSWqZAXwwiUwiSfi/lWAb4pELJCviyJcrgnyy6/WMbA1hN8CJblb/RtT/4WT0j4yQUy5+R2tjczT7HwJjKZHhvaln+8JD1VqeSQTe9GPifMCsU2Yr4pELJCvAkiEh5JNdr2fHrtN6UadarxHVijUj4erH0Y9DwFpNmqSSCUgV9k9fO8gnMQw//kz38NbX9XalE74mgrewHfGIAeSTbfX0toawItwlj08bJ7CRPmkSuoQESTbJZTXqFE1yOWS3DP/1zUVkeNhjip8HUDOJZ9nMFW+A5Mvhs1vIhddTfa1okJnWBYGVRzf/5ppr27um3Tw0PHlya/tYL8nH1ClZ8Cd5POZwbWpK/0CIrnnX9Pj2KX/7/SvcK5BA8djQyluXQu6lnz//a5AsLfscMtiaeOQi+fKRfHwdXyrKEF6ll8Gg2vTwE1AFQe77zh2fGdkEF0ThgSefu27q0HnPHoc3qVOCAdHd6pr6KFHJ40kvvz5Xr0sYtPGmPUE//NZBfNqIFeTq4iLtl62Fa/ysj5v8ZtwX75lm7UggEI9crCIudEE+yO28z9vEamb1jCzh8TGbXkXQtzaWB91zW7UXH/Ua2qLd/v6BKQ1cAMMV/Eoe15tTGRI8OGXrb19Cyw/n4Cm+bQPISyPlH314fnPxZDJ4LmScrY2WBfl1LAIREMQjFy5AAdeerUTznucWEpgxf27HR/ONdPt0ZdMXfusdXy2fr0W7DHDjCQ0NGRKVPC7od49p2UA013xo5a2l6OEUuMhIOYDzuRKzkqK1CBjikbHlRLAgSrHmvRXYpXrMvE9oxrwniL3zj0Jk0W7W3PRuoyondFh6IM1WTJYYBebvqutvyGrJJxIBRTxysY8GXIhybXNS7bxPpts3/Pgzi/TOdWq+dEXVvisXNRpVtGs0/LjJfcDP58jYxrO52KRIetsGEQg44pGLF6cUJaB8bds2cD2HX379Hplu39At371Vb2LvqdDggaJ5s/kVS4UX7RoO7wth33ThWqbjde3C62oJt9EfBCTxGLCYtkDrjrRftjaaBE06QYZHovzasBu3zxOGVt76L7p/ECHkL9+/610ji3YtgHa0cmO8Cm4aUcL347ErbCmgewu4QNC7BS4WyA7cBSvwm3TkYsY8F+KWhgBPM4PW/a9pms26vYHaGQFNPHJxfQZ13ocdzApEFED2l+1eUHXt8kb2nIXmXX0W5mQ/1bvDwAacxy0urFwOl12SI7PTs9EIeOIRbBMPFw71vs9EbDO4vTMa0sxEbGsCow/XpyvTngK8Vpuw72VRoJ2iCUE8BqxuKBVFPtC7+OcQmnf1OZiTDTaejgey6trh9Ph2Lz5lF+xBmUDrVvJWTnqHZ1mYUMQjWNEuavT6kt0yfKimSnfq1OrlQrNXTAIQbrtmzXEWiS4MZCvHY8IRzyyo2fSvvrtUj4Cuhtnti2ok3CU3D4xYQgAFpgQZgTSXc4eJSrwDuhvd+Or2xceqorDf2uF9d5ZbqVLBB+zBdK8G7Vdwof8iXP64MFAilt7AFj1XDIDuzHRYBMPn73z9pnrIfPH5e5AtI7FCQQD6UBr4CeTNakkHQjhWlbAMo5yJRDoygS1eCd5pFT+/T0d6zn4DVxBd40tnazXdbFrkoJT8UPloRMJVaIMm5GLmCZx3KFR+HCydnbNP9CCgM1c8of2ytfmiiigxBxQCJyu8Lr4VuIaAyQDrBgnMe1y5k+RSwkFXuKKJMI/zhAlLPOJnEeWkFUt/GfuHX/7Y3fsYDmd/utb0szCAbBVo2dyG+7k5HJMIiic64RgmNPHIRctXMq7bOWnSmaDv3vFm0D/f8iV8pRjzBt26SpTSLBx080SsamsywI08gmRzK2ugLFCA0gDhCDchXUp3mPDEIyxp2ociSgx/w2c3oOtUOl5wgFIahwQEMqbagIhAtAaUAY5odTct8Jzkozv5Kt6UJlTAxBc4xNMBnLvwuZ+lOODGzbbAthQpSEYgYpyJZGzEqoAGtGqNroIjWqBbXYCEI1z1gONOjgOHeILgYhCWe2MJtcBATRiSMRwf2VzR33bozDXsQ3L14mOfu4CIh+Njlo0VEHt9s3FwEQ7xDACSkA1QcF13IhFheWmfdTyTf0suWyCUELIaXe9SvKk4ZPMTDvEMBgYb8rnBm8YRkUUGLeGaoevMIrKMaMfZTQPJ5gRJBMAhnmQgEXO5wZ2DEdWdmKtYj4TsQlIKHei4/xxsi5GD6VrpSDKK+2Y3hXKHaMbAIZ4FwJGBEYLNn1bjIyMEAyOmJ7BtMuRwkslOfCxnBDeC5A7cwyGeDYBzRr6Wz9vOaPx8ssuZk1kHDvEcODABE7U6wYED80AI+f8QPiGO6a79pAAAAABJRU5ErkJggg==";

const Cart = () => {
  const history = useHistory();
  const {
    cart,
    setTotalPrice
  } = useCartContext();
  Ramen.Api.notification;
  const totalProductsPrice = cart.reduce((prev, item) => prev += item.price * item.quantity, 0);
  const submitToCheckout = () => {
    if (cart.length > 0) {
      history.push('/checkout');
    }
  };
  return jsxs(Container, {
    children: [jsx("h2", Object.assign({
      className: "cart-page__title"
    }, {
      children: "Mi cotizaci\u00F3n"
    })), jsxs("div", Object.assign({
      className: "cart-page"
    }, {
      children: [jsx("div", Object.assign({
        className: "cart-page__right"
      }, {
        children: jsxs("div", Object.assign({
          className: "cart-page__right__summery-box"
        }, {
          children: [jsx("h3", Object.assign({
            className: "cart-page__right__summery-box__title"
          }, {
            children: "Resumen"
          })), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
            size: 'm'
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            gap: "xxs"
          }, {
            children: [jsx(Ramen.XText, {
              children: "Total:"
            }), jsx(Ramen.XText, Object.assign({
              fontSize: 8
            }, {
              children: !!totalProductsPrice ? NumberFormatter$1.toCurrency(Number(totalProductsPrice)) : '-'
            }))]
          })), jsx(Ramen.XVSpace, {
            size: 'm'
          }), jsx(Ramen.XDivider, {}), jsx(Ramen.XBox, Object.assign({
            orientation: "vertical",
            gap: "xxs",
            padding: "m"
          }, {
            children: jsx(Ramen.XButton, {
              type: 'solid',
              disabled: cart.length <= 0,
              text: "Enviar solicitaci\u00F3n",
              onClick: submitToCheckout
            })
          }))]
        }))
      })), jsxs("div", Object.assign({
        className: "cart-page__left"
      }, {
        children: [cart.length <= 0 && jsxs(Fragment, {
          children: [jsx("img", {
            src: img$1,
            alt: "empty cart",
            className: "cart-page__left__empty-cart"
          }), jsx("h4", Object.assign({
            className: "cart-page__left__empty-cart__title"
          }, {
            children: "you dont have any item in your cart"
          })), jsx(Button, Object.assign({
            onClick: () => history.push('/products')
          }, {
            children: "Go shoping"
          }))]
        }), jsx("div", Object.assign({
          className: "cart-page__left-products"
        }, {
          children: cart.map(product => jsx(ShopCartItem$1, {
            item: product
          }, product.id))
        }))]
      }))]
    }))]
  });
};

var useQueryCollection = ((request, params, useInfinite = false) => {
  const [data, setData] = useState([]);
  const [otherResults, setOtherResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [filters, setFilters] = useState(Object.assign({
    limit: 50,
    offset: 0,
    total: 0,
    hasNext: true
  }, params || {}));
  const getData = (filtersQuery, useNext = false) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      //Show loading more o loading data
      useNext ? setLoadMoreLoading(true) : setLoading(true);
      // clear request querys
      const _a = filtersQuery || {},
        {
          hasNext,
          total: totalElements
        } = _a,
        query = __rest(_a, ["hasNext", "total"]);
      // Create my filter
      const filter = Object.assign({
        limit: filters.limit,
        offset: !useNext ? 0 : filters.offset
      }, query);
      const _b = yield request(filter),
        {
          data: dataNew,
          offset,
          total
        } = _b,
        otherValues = __rest(_b, ["data", "offset", "total"]);
      // get data for request
      const dataMapped = useNext ? [...data, ...dataNew] : dataNew;
      // Set filters for previews request
      setFilters(Object.assign(Object.assign(Object.assign({}, filters), query), {
        offset: offset + (useInfinite ? 1 : 0),
        total,
        hasNext: (offset + (useInfinite ? 1 : 0)) * filters.limit < total
      }));
      //hide loading more o loading data
      useNext ? setLoadMoreLoading(false) : setLoading(false);
      //Set Data info for request
      setData(dataMapped);
      setOtherResults(otherValues);
    } catch (errorMessage) {
      console.log(errorMessage);
      //Set error if has
      setErrors(errorMessage);
      //hide loading more o loading data
      useNext ? setLoadMoreLoading(false) : setLoading(false);
    }
  });
  const hasNext = useMemo(() => (filters.offset + 1) * filters.limit < filters.total, [filters]);
  // each time that call load 10 more products
  const loadMore = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
      // If state of list is loading or loading more or not has next or not has data
      if (data.length < 1 || loading || !hasNext || loadMoreLoading) {
        return;
      }
      //call function with filters and hasNext in true
      yield getData(filters, true);
    } catch (errorMessage) {
      setErrors(errorMessage);
      setLoadMoreLoading(false);
    }
  }), [data, loading, hasNext, loadMoreLoading, filters]);
  return {
    otherResults,
    loading,
    errors,
    loadMoreLoading,
    filters,
    total: filters.total,
    limit: filters.limit,
    offset: filters.offset,
    data,
    hasNext: !filters.hasNext,
    setFilters,
    setData,
    getData,
    loadMore,
    setErrors
  };
});

const orderOptions = [{
  label: 'Nombre',
  value: 'name'
}, {
  label: 'Precio',
  value: 'price'
}];
const SectionFiltersOrder = ({
  loading,
  title,
  activeFilters,
  filters,
  activeSort,
  onChangeFilter,
  onSortHandle
}) => {
  const filtersMapped = useMemo(() => {
    let filterMap = [];
    const actives = Object.entries(activeFilters);
    if (actives.length) {
      actives.forEach(item => {
        var _a;
        const [key, value] = item;
        const filter = filters.find(item => item.key == key);
        if (!!filter && !!value) {
          if (filter.multiple) {
            const values = value;
            values.forEach(item => {
              var _a;
              const label = (_a = ((filter === null || filter === void 0 ? void 0 : filter.options) || []).find(elem => elem.key == item)) === null || _a === void 0 ? void 0 : _a.label;
              filterMap.push({
                label,
                value: item,
                multiple: true,
                keyParent: key,
                filter: filter
              });
            });
          } else {
            const label = (_a = ((filter === null || filter === void 0 ? void 0 : filter.options) || []).find(item => item.key == value)) === null || _a === void 0 ? void 0 : _a.label;
            filterMap.push({
              label,
              value: value,
              multiple: false,
              keyParent: key,
              filter: filter
            });
          }
        }
      });
    }
    return filterMap;
  }, [filters, activeFilters]);
  const onRemoveFilter = filter => {
    const newActiveFilters = activeFilters;
    if (filter.multiple) {
      const activeItems = newActiveFilters[filter.keyParent] || [];
      const index = activeItems.findIndex(x => x === filter.value);
      if (index !== -1) {
        newActiveFilters[filter.keyParent] = activeItems.filter(x => x != filter.value);
      }
    } else {
      const isActive = newActiveFilters[filter.keyParent] == filter.value;
      isActive && delete newActiveFilters[filter.keyParent];
    }
    onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter(newActiveFilters);
  };
  const onChange = value => {
    onSortHandle === null || onSortHandle === void 0 ? void 0 : onSortHandle(value);
  };
  return jsxs(Fragment, {
    children: [jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between",
      verticalAlign: "center",
      gap: "xxs",
      padding: "m",
      width: 'full'
    }, {
      children: [loading ? jsx(Ramen.XSkeleton, {
        type: 'text',
        size: 'm',
        width: 'm'
      }) : title ? jsx(Ramen.XText, Object.assign({
        fontSize: 7
      }, {
        children: title
      })) : jsx("div", {}), !loading ? jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center",
        gap: "s"
      }, {
        children: [jsx(Ramen.XText, {
          children: "Ordenar por:"
        }), jsx("div", Object.assign({
          style: {
            width: 150
          }
        }, {
          children: jsx(Ramen.XSelect, {
            options: orderOptions,
            value: Object.keys(activeSort || {})[0],
            size: "s",
            onChange: onChange
          })
        })), jsx(Ramen.XTooltip, Object.assign({
          text: Object.values(activeSort || {})[0] === 'asc' ? 'Orden ascendente' : 'Orden descendente',
          inline: true,
          placement: 'left'
        }, {
          children: jsx(Ramen.XIcon, {
            icon: Object.values(activeSort || {})[0] === 'asc' ? 'arrow-up-outline' : 'arrow-down-outline',
            size: "xs"
          })
        }))]
      })) : jsx("div", Object.assign({
        style: {
          width: 150
        }
      }, {
        children: jsx(Ramen.XSkeleton, {
          size: "l",
          type: "image",
          width: "xl"
        })
      }))]
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), !loading && !!filtersMapped.length && jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      padding: "m"
    }, {
      children: [jsx(Ramen.XText, {
        children: "Filtros seleccionados"
      }), jsx(Ramen.XVSpace, {
        size: "xxs"
      }), jsx("div", Object.assign({
        className: "shop_filter__selecteds"
      }, {
        children: filtersMapped.map(item => jsx(Ramen.XButton, {
          text: item === null || item === void 0 ? void 0 : item.label,
          icon: "close-outline",
          type: "tonal",
          iconPosition: "end",
          onClick: () => onRemoveFilter(item)
        }))
      }))]
    }))]
  });
};

const Shop = () => {
  const {
    error
  } = Ramen.Api.notification;
  const {
    search,
    state,
    pathname
  } = useLocation();
  const {
    category,
    categoryName,
    brand,
    brandName
  } = state || {};
  const {
    width
  } = useWindowSize();
  const {
    categories,
    categoriesByLevel
  } = useGlobal();
  const [isOpenModalFilters, setIsOpenModalFilters] = useState(false);
  const arrayParents = findParentsInRoot(categories, Number(category)) || [];
  arrayParents.length;
  const isMultipleHierarchy = false;
  const getKeyByLvl = value => {
    switch (value) {
      case 0:
        return 'category';
      case 1:
        return 'departament';
      case 2:
        return 'subcategory';
      case 3:
        return 'typeProduct';
      default:
        return 'category';
    }
  };
  const INITIAL_FILTERS = useMemo(() => {
    return Object.assign(Object.assign({}, category && {
      [getKeyByLvl(arrayParents.length - 1)]: `${category}` 
    }), !!brand && {
      brand: `${brand}` 
    });
  }, [category]);
  const [activeFilters, setActiveFilters] = useState(INITIAL_FILTERS);
  const [sortField, setSortFields] = useState({
    name: 'asc'
  });
  const {
    loading,
    errors,
    loadMoreLoading,
    filters,
    otherResults,
    data,
    total,
    getData,
    loadMore,
    setErrors
  } = useQueryCollection(args => productsClient.getProducts(args), {
    limit: 20,
    offset: 0,
    total: 0
  }, true);
  const getDataFilterByType = item => {
    let data = {};
    const options = (item.data || []).map(({
      key,
      value,
      label
    }) => {
      return {
        key: `${key}`,
        label: StringFormatter$1.capitalizeLetter(`${label || key}  (${value})`, true)
      };
    });
    switch (item.type) {
      case 'brand.name':
        data.key = 'brand';
        data.label = 'Marcas';
        data.multiple = isMultipleHierarchy;
        break;
    }
    data.options = options;
    data.useSearch = options.length > 7;
    return data;
  };
  const hierarchy = useMemo(() => {
    return activeFilters['typeProduct'] || activeFilters['subcategory'] || activeFilters['departament'] || activeFilters['category'];
  }, [activeFilters, isMultipleHierarchy]);
  const filter = useMemo(() => {
    if (loading) {
      return [];
    }
    const filtersResults = (otherResults === null || otherResults === void 0 ? void 0 : otherResults.summary) || [];
    const [filterHierarchy] = filtersResults.filter(item => item.type === 'hierarchy.levels.id');
    let initialFilters = [{
      key: 'category',
      label: 'Categorías',
      multiple: isMultipleHierarchy,
      options: []
    }, {
      key: 'departament',
      label: 'Departamento',
      multiple: isMultipleHierarchy,
      options: []
    }, {
      key: 'subcategory',
      label: 'Subcategoría',
      multiple: isMultipleHierarchy,
      options: []
    }, {
      key: 'typeProduct',
      label: 'Tipo de producto',
      multiple: isMultipleHierarchy,
      options: []
    }];
    if (categoriesByLevel) {
      initialFilters.forEach((item, index) => {
        let arrayOptions = categoriesByLevel[index];
        if (!!arrayOptions) {
          if (filterHierarchy === null || filterHierarchy === void 0 ? void 0 : filterHierarchy.data) {
            arrayOptions = arrayOptions.filter(item => filterHierarchy === null || filterHierarchy === void 0 ? void 0 : filterHierarchy.data.find(itemHierarchy => `${itemHierarchy.key}` === `${item.id}`));
          }
          let options = (arrayOptions || []).map(({
            id,
            name
          }) => {
            const existCategory = ((filterHierarchy === null || filterHierarchy === void 0 ? void 0 : filterHierarchy.data) || []).find(item => `${item.key}` === `${id}`);
            const value = (existCategory === null || existCategory === void 0 ? void 0 : existCategory.value) ? `(${existCategory === null || existCategory === void 0 ? void 0 : existCategory.value})` : '';
            return {
              key: `${id}`,
              label: `${name} ${value}`
            };
          });
          let valueFilter;
          switch (index) {
            case 0:
              valueFilter = activeFilters['category'] || category && (category);
              break;
            case 1:
              valueFilter = activeFilters['departament'];
              break;
            case 2:
              valueFilter = activeFilters['subcategory'];
              break;
            case 3:
              valueFilter = activeFilters['typeProduct'];
              break;
          }
          if (!!valueFilter) {
            options = options.filter(item => valueFilter.includes(item.key));
          }
          item.options = options;
          item.useSearch = options.length > 7;
        }
      });
    }
    const filterMapped = filtersResults.map(item => {
      const data = getDataFilterByType(item);
      return data;
    }).filter(item => item.key && item.options.length);
    return [...initialFilters, ...filterMapped].filter(item => item.key && item.options.length);
  }, [otherResults, loading, categoriesByLevel, activeFilters]);
  const searchQuery = useMemo(() => {
    return new URLSearchParams(search).get('s') || '';
  }, [search]);
  const handleFilterChange = filter => {
    const key = Object.keys(filter)[0];
    const value = Object.values(filter)[0];
    if (!value || !(value === null || value === void 0 ? void 0 : value.length)) {
      filter[key] = null;
    }
    setActiveFilters(Object.assign({}, filter));
    setIsOpenModalFilters(false);
  };
  const onSortField = value => {
    let order = 'asc';
    if (sortField[value]) {
      order = 'desc';
    }
    setSortFields({
      [value]: order
    });
  };
  // check when user type or product add search with the search query
  useEffect(() => {
    const filter = {
      filter: Object.assign(Object.assign(Object.assign(Object.assign({
        //Filter by store or location
        store: 'E518'
      }, !!activeFilters && Object.assign({}, activeFilters)), !!hierarchy && {
        category: hierarchy
      }), !!searchQuery && {
        ['name']: searchQuery
      }), {
        isMainEan: true
      }),
      sort: [sortField]
    };
    getData(filter);
  }, [activeFilters, searchQuery, sortField, hierarchy]);
  useEffect(() => {
    if (!!errors) {
      error({
        description: 'Error en la carga de productos',
        message: 'Por favor intenta nuevamente.'
      });
      setErrors();
    }
  }, [errors]);
  useEffect(() => {
    return () => {
      //Clean filter when route change
      setActiveFilters({});
    };
  }, [state]);
  const getFilters = () => {
    return jsx(FilterComponent, {
      loading: loading,
      filters: filter,
      selectdFilters: activeFilters,
      onChange: handleFilterChange
    });
  };
  const titleList = searchQuery ? `Resultado de búsqueda para "${searchQuery}"` : categoryName || brandName || '';
  return jsxs(Fragment, {
    children: [jsx(MainLayout, {
      children: jsx(Container, {
        children: jsx("div", Object.assign({
          className: "shop"
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal"
          }, {
            children: [width > breakPoints.lg && jsxs(Ramen.XBox, Object.assign({
              gap: "l",
              padding: "l"
            }, {
              children: [!loading && jsx(Ramen.XBox, {
                children: jsxs(Ramen.XText, Object.assign({
                  colorThone: "dim"
                }, {
                  children: [' ', `${total} resultados encontrados.`]
                }))
              }), getFilters()]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal"
              }, {
                children: [!loading && jsx(BreadCumbs, {
                  routes: arrayParents
                }), !loading && width < breakPoints.lg && filter.length && jsx(Ramen.XBox, Object.assign({
                  padding: "m"
                }, {
                  children: jsx(Ramen.XButton, {
                    type: "outline",
                    icon: "filter-outline",
                    text: "Filtros",
                    onClick: () => setIsOpenModalFilters(true)
                  })
                }))]
              })), jsx(SectionFiltersOrder, {
                title: titleList,
                loading: loading,
                activeFilters: activeFilters,
                filters: filter,
                activeSort: sortField,
                onChangeFilter: handleFilterChange,
                onSortHandle: onSortField
              }), jsx(ProductsList, {
                data: data,
                loading: loading,
                filters: filters,
                loadMoreLoading: loadMoreLoading,
                useInfinite: true,
                loadMoreProducts: loadMore
              })]
            }))]
          }))
        }))
      })
    }), jsx(Ramen.XDrawer, Object.assign({
      size: "s",
      placement: "left",
      title: 'Filtros',
      headerType: "fixed",
      closable: true,
      open: isOpenModalFilters,
      onClose: () => setIsOpenModalFilters(!isOpenModalFilters),
      onClickAction: () => setIsOpenModalFilters(!isOpenModalFilters)
    }, {
      children: getFilters()
    }))]
  });
};

var img = "data:image/svg+xml,%3csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4075 9.72727C9.87164 9.72727 9.43723 10.1617 9.43723 10.6976V18.8479C9.43723 19.3838 9.87164 19.8182 10.4075 19.8182H18.5579C19.0937 19.8182 19.5281 19.3838 19.5281 18.8479V10.6976C19.5281 10.1617 19.0937 9.72727 18.5579 9.72727H10.4075ZM7.75542 10.6976C7.75542 9.23284 8.9428 8.04545 10.4075 8.04545H18.5579C20.0226 8.04545 21.21 9.23284 21.21 10.6976V18.8479C21.21 20.3126 20.0226 21.5 18.5579 21.5H10.4075C8.9428 21.5 7.75542 20.3126 7.75542 18.8479V10.6976Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.36206 4.68182C5.10472 4.68182 4.85793 4.78404 4.67597 4.96601C4.494 5.14797 4.39178 5.39476 4.39178 5.6521V13.8024C4.39178 14.0598 4.494 14.3066 4.67597 14.4885C4.85793 14.6705 5.10473 14.7727 5.36206 14.7727H6.26765C6.73207 14.7727 7.10856 15.1492 7.10856 15.6136C7.10856 16.0781 6.73207 16.4545 6.26765 16.4545H5.36206C4.65868 16.4545 3.98411 16.1751 3.48674 15.6778C2.98938 15.1804 2.70996 14.5058 2.70996 13.8024V5.6521C2.70996 4.94872 2.98938 4.27415 3.48674 3.77678C3.98411 3.27942 4.65868 3 5.36206 3H13.5124C14.2158 3 14.8904 3.27942 15.3877 3.77678C15.8851 4.27415 16.1645 4.94872 16.1645 5.6521V6.55769C16.1645 7.02211 15.788 7.3986 15.3236 7.3986C14.8592 7.3986 14.4827 7.02211 14.4827 6.55769V5.6521C14.4827 5.39476 14.3805 5.14797 14.1985 4.96601C14.0165 4.78404 13.7697 4.68182 13.5124 4.68182H5.36206Z' fill='black'/%3e%3c/svg%3e";

const errorsMessage$2 = {
  email: {
    required: 'Por favor, ingresa un correo electrónico válido.',
    invalidEmail: 'Por favor, ingresa un correo electrónico válido.'
  },
  name: {
    required: 'Por favor, Ingresa tu nombre y apellidos'
  },
  rut: {
    required: 'Por favor, ingresa rut sin puntos, con guión y dígito verificador (12345678-K)',
    invalidRut: 'Por favor, ingresa rut sin puntos, con guión y dígito verificador (12345678-K)'
  },
  address: {
    required: 'Por favor, selecciona una dirección de despacho'
  }
};
const valueEmail = 'feliperodriguez@easy.cl';
const FormRequestAccess = () => {
  const history = useHistory();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    isValid,
    dirty
  } = useFormik({
    initialValues: {
      email: '',
      rut: '',
      address: '',
      name: ''
    },
    validate: values => {
      const configValidation = {
        email: [isRequired, isValidEmail],
        rut: [isRequired, isValidEnterpriseRut],
        address: [isRequired],
        name: [isRequired]
      };
      return validation(configValidation)(values);
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });
  const [address, setAddress] = useState([]);
  const [hasCreditLine, setHasCreditLine] = useState(null);
  const [hasNotRegisterInSap, setHasNotRegisterInSap] = useState(false);
  const onSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Solicitando acceso...'
      });
      const {
          rut: company_id
        } = values,
        otherValues = __rest(values, ["rut"]);
      const input = Object.assign({
        company_id
      }, otherValues);
      const data = yield authClient.signUp(input);
      if (hasCreditLine || !data.access_token) {
        goToWaitRequest();
      } else {
        goToSetPassword({
          token: data.access_token,
          email: input.email
        });
      }
      Ramen.Api.loading.hide();
    } catch (error) {
      const message = get$2(error, ['response', 'data', 'message'], 'No pudimos crear tu cuenta, por favor inténtalo nuevamente');
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'Ocurrió un error',
        message
      });
    }
  });
  const getDataByRut = rut => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Buscando información del Rut...'
      });
      setAddress([]);
      setFieldValue('address', undefined);
      setHasCreditLine(null);
      const data = yield sapClient.customerValidate(rut);
      const {
        address,
        hasCreditLine
      } = data;
      let newAddress = [];
      if (address.length) {
        newAddress = address.map(item => ({
          label: item,
          value: item
        }));
      }
      setHasCreditLine(hasCreditLine);
      setAddress(newAddress);
      Ramen.Api.loading.hide();
    } catch (error) {
      if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
        setHasNotRegisterInSap(true);
      } else {
        Ramen.Api.notification.error({
          description: 'Ocurrió un error',
          message: 'No pudimos obtener información del Rut, por favor inténtalo nuevamente.'
        });
        setHasNotRegisterInSap(false);
      }
      setHasCreditLine(null);
      setAddress([]);
      Ramen.Api.loading.hide();
    }
  });
  const onChangeField = (e, name) => {
    if (name) {
      e.target.name = name;
    }
    handleChange(e);
    switch (name) {
      case 'rut':
        if (!isValidEnterpriseRut(e.target.value)) {
          setTimeout(() => getDataByRut(e.target.value), 1000);
        }
        break;
    }
  };
  const onChangeSelect = value => {
    onChangeField({
      target: {
        name: 'address',
        value
      }
    });
  };
  const onBlurField = (e, name) => {
    e.target.name = name;
    handleBlur(e);
  };
  const goToHome = () => {
    setHasNotRegisterInSap(false);
    history.push('/');
  };
  const goToWaitRequest = () => {
    history.push('/wait-request');
  };
  const goToSetPassword = params => {
    history.push('/set-password/', params);
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(valueEmail);
  };
  return jsxs(Fragment, {
    children: [jsx("form", Object.assign({
      onSubmit: handleSubmit
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        gap: "m",
        width: 'full'
      }, {
        children: [jsx(Ramen.XFormItem, Object.assign({
          error: !errors.email ? '' : errorsMessage$2.email[errors.email],
          label: "Correo corporativo (*)"
        }, {
          children: jsx(Ramen.XEmailInput, {
            size: "l",
            placeholder: "ejemplo@empresa.cl",
            value: values.email,
            onChange: e => onChangeField(e, 'email'),
            onBlur: e => onBlurField(e, 'email')
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          error: !errors.rut ? '' : errorsMessage$2.rut[errors.rut],
          label: "RUT Empresa(*)"
        }, {
          children: jsx(Ramen.XTextInput, {
            size: "l",
            placeholder: "Ingresa el RUT",
            value: values.rut,
            onChange: e => onChangeField(e, 'rut'),
            onBlur: e => onBlurField(e, 'rut')
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          error: !errors.name ? '' : errorsMessage$2.name[errors.name],
          label: "Nombre y apellido (*)"
        }, {
          children: jsx(Ramen.XTextInput, {
            size: "l",
            placeholder: "Ingresa tu nombre y apellido",
            value: values.name,
            onChange: e => onChangeField(e, 'name'),
            onBlur: e => onBlurField(e, 'name')
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          error: !errors.address ? '' : errorsMessage$2.address[errors.address],
          label: "Direcci\u00F3n de empresa (*)"
        }, {
          children: jsx(Ramen.XSelect, {
            size: "l",
            disabled: !address.length,
            options: address,
            placeholder: "Selecciona direcci\u00F3n de despacho",
            value: values.address,
            onChange: onChangeSelect
          })
        })), jsx(Ramen.XVSpace, {
          size: "xxs"
        }), jsx(Ramen.XButton, {
          text: "Continuar",
          disabled: !dirty || !isValid,
          type: "solid",
          size: "l"
        })]
      }))
    })), jsx(XAlertModal, Object.assign({
      visible: hasNotRegisterInSap,
      confirmText: "Volver al inicio",
      onClose: () => setHasNotRegisterInSap(false),
      useCancel: false,
      onConfirm: () => goToHome(),
      title: "A\u00FAn no eres parte de Easy venta empresas \u2639\uFE0F",
      message: "Pero no te preocupes! Cont\u00E1ctanos y comencemos este viaje juntos."
    }, {
      children: jsxs(Ramen.XBox, {
        children: [jsx(Ramen.XVSpace, {
          size: "l"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "m",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XButtonIcon, {
            icon: 'mail-outline',
            type: 'tonal'
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              fontSize: 10,
              colorThone: 'dim'
            }, {
              children: "Correo electr\u00F3nico"
            })), jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              gap: "xxs",
              verticalAlign: "center"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 9,
                weight: 'bold'
              }, {
                children: valueEmail
              })), jsx("div", Object.assign({
                style: {
                  cursor: 'pointer'
                },
                onClick: copyToClipBoard
              }, {
                children: jsx(Ramen.XImage, {
                  src: img
                })
              }))]
            }))]
          }))]
        }))]
      })
    }))]
  });
};
const SignUp = () => {
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          padding: "xl",
          gap: "xl"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 6,
            weight: "bold"
          }, {
            children: "Solicitud de acceso"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 9,
            colorThone: "dim"
          }, {
            children: "Por favor, d\u00E9janos tu correo electr\u00F3nico y el RUT de empresa para solicitar tu acceso."
          })), jsx(FormRequestAccess, {})]
        }))
      })
    }))
  });
};

const PendingApprove = () => {
  const history = useHistory();
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  const goBack = () => {
    history.push('/');
  };
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          padding: "xl",
          gap: "xl"
        }, {
          children: [jsx(Ramen.XIcon, {
            icon: 'clock-outline',
            size: 'xl'
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 6,
            weight: "bold"
          }, {
            children: "Estamos verificando tu informaci\u00F3n."
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 9,
            colorThone: "dim"
          }, {
            children: "Te enviaremos un correo una vez que tu cuenta est\u00E9 activada."
          })), jsx(Ramen.XButton, {
            text: "Volver al inicio",
            type: "solid",
            size: "l",
            onClick: goBack
          })]
        }))
      })
    }))
  });
};

const errorsMessage$1 = {
  email: {
    required: 'Por favor, ingresa un correo electrónico válido.'
  },
  password: {
    required: 'Por favor, ingresa una contraseña válida, debe tener 8 caracteres mínimo.',
    invalidPassword: 'Por favor, La contraseña debe tener 8 caracteres mínimo.'
  },
  confirmPassword: {
    required: 'Por favor, la confirmación debe ser igual a tu contraseña válida',
    invalidConfirmPassword: 'Por favor, la confirmación debe ser igual a tu contraseña válida'
  }
};
const FormSetPassword = ({
  title,
  description,
  showEmail: _showEmail = true,
  showDescription: _showDescription = true,
  onSubmit
}) => {
  const history = useHistory();
  const {
    token: tokenValue
  } = useParams();
  const {
    email
  } = history.location.state || {};
  let initialEmail = email;
  if (!!tokenValue) {
    const infoToken = jwtDecode(tokenValue);
    const {
      email: emailFromToken
    } = infoToken;
    initialEmail = emailFromToken;
  }
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    dirty
  } = useFormik({
    initialValues: {
      email: initialEmail,
      password: '',
      confirmPassword: ''
    },
    validate: values => {
      const configValidation = {
        password: [isRequired, isValidPassword],
        confirmPassword: [isRequired, isValidConfirmPassword]
      };
      return validation(configValidation)(values);
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });
  const isValidConfirmPassword = value => {
    if (values.password !== value) {
      return 'invalidConfirmPassword';
    }
    return false;
  };
  const isValidPassword = value => {
    if (!value || value.length < 8) {
      return 'invalidPassword';
    }
    return false;
  };
  const onChangeField = (e, name) => {
    if (name) {
      e.target.name = name;
    }
    handleChange(e);
  };
  const onBlurField = (e, name) => {
    e.target.name = name;
    handleBlur(e);
  };
  return jsx(Fragment, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      padding: "xl",
      gap: "xl"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 6,
        weight: "bold"
      }, {
        children: title
      })), _showDescription && jsx(Ramen.XText, Object.assign({
        fontSize: 9,
        colorThone: "dim"
      }, {
        children: description
      })), jsx("form", Object.assign({
        onSubmit: handleSubmit
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          gap: "xl"
        }, {
          children: [_showEmail && jsx(Ramen.XFormItem, Object.assign({
            error: "",
            label: "Correo corporativo (*)"
          }, {
            children: jsx(Ramen.XEmailInput, {
              size: "l",
              value: values.email,
              disabled: true,
              placeholder: "ejemplo@empresa.cl"
            })
          })), jsx(Ramen.XFormItem, Object.assign({
            error: !errors.password ? '' : errorsMessage$1.password[errors.password],
            label: "Contrase\u00F1a (*)"
          }, {
            children: jsx(Ramen.XPasswordInput, {
              size: "l",
              placeholder: "Ingresa tu contrase\u00F1a",
              value: values.password,
              onChange: e => onChangeField(e, 'password'),
              onBlur: e => onBlurField(e, 'password')
            })
          })), jsx(Ramen.XFormItem, Object.assign({
            error: !errors.confirmPassword ? '' : errorsMessage$1.confirmPassword[errors.confirmPassword],
            label: "Confirma tu contrase\u00F1a (*)"
          }, {
            children: jsx(Ramen.XPasswordInput, {
              size: "l",
              placeholder: "Ingresa tu contrase\u00F1a",
              value: values.confirmPassword,
              onChange: e => onChangeField(e, 'confirmPassword'),
              onBlur: e => onBlurField(e, 'confirmPassword')
            })
          })), jsx(Ramen.XVSpace, {
            size: "xxs"
          }), jsx(Ramen.XButton, {
            disabled: !dirty || !isValid,
            text: "Continuar",
            type: "solid",
            size: "l"
          })]
        }))
      }))]
    }))
  });
};

const SetPassword = () => {
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  const {
    login
  } = useUserContext();
  const history = useHistory();
  const {
    token: tokenValue
  } = useParams();
  const {
    token
  } = history.location.state || {};
  const access_token = tokenValue || token;
  const goRoute = () => {
    history.push('/');
  };
  const isDirect = !tokenValue && !!token;
  const onSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Acceso...'
      });
      yield authClient.setToken(access_token, false);
      isDirect ? yield authClient.setPasswordDirect(values.password) : yield authClient.setPassword(values.password);
      yield login(values.email, values.password);
      Ramen.Api.notification.success({
        description: 'Cuenta creada con éxito.',
        message: '¡Estamos emocionados de tenerte a bordo y empezar esta increíble experiencia juntos! 💪'
      });
      goRoute();
      Ramen.Api.loading.hide();
    } catch (error) {
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'Ocurrió un error',
        message: 'No pudimos validar tu cuenta, por favor inténtalo nuevamente.'
      });
    }
  });
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsx(FormSetPassword, {
          onSubmit: onSubmit,
          title: "Est\u00E1s a un paso de ingresar \uD83E\uDD13",
          description: "Crea tu contrase\u00F1a, la utilizar\u00E1s para iniciar sesi\u00F3n en tu cuenta."
        })
      })
    }))
  });
};

const ActiveAccount = () => {
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  const history = useHistory();
  const {
    token
  } = useParams();
  const [statusUser, setStatusUser] = useState(false);
  const goBack = () => {
    history.push('/');
  };
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Activando usuario...'
      });
      yield authClient.activateUser({
        token
      });
      Ramen.Api.notification.success({
        description: "El usuario se ha activado correctamente."
      });
      setStatusUser(true);
      Ramen.Api.loading.hide();
    } catch (error) {
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'Ocurrió un error',
        message: 'No pudimos activar el usuario, por favor inténtalo nuevamente.'
      });
    }
  });
  const propsButton = {
    text: statusUser ? 'Volver al inicio' : 'Reintentar',
    onClick: statusUser ? goBack : getData
  };
  useEffect(() => {
    getData();
  }, []);
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          padding: "xl",
          gap: "xl"
        }, {
          children: [jsx(Ramen.XIcon, {
            icon: 'clock-outline',
            size: 'xl'
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 6,
            weight: "bold"
          }, {
            children: "Estamos activando el usuario"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 9,
            colorThone: "dim"
          }, {
            children: "Le enviamos un correo al usuario una vez que su cuenta est\u00E9 activada."
          })), jsx(Ramen.XButton, Object.assign({
            type: "solid",
            size: "l"
          }, propsButton))]
        }))
      })
    }))
  });
};

const PendingResetPassword = () => {
  const history = useHistory();
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  const goBack = () => {
    history.push('/');
  };
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          padding: "xl",
          gap: "xl"
        }, {
          children: [jsx(Ramen.XIcon, {
            icon: 'mail-outline',
            size: 'xl'
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 6,
            weight: "bold"
          }, {
            children: "Revisa tu correo"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 9,
            colorThone: "dim"
          }, {
            children: "Te  hemos enviado un enlace de recuperaci\u00F3n a tu correo registrado."
          })), jsx(Ramen.XButton, {
            text: "Volver al inicio",
            type: "solid",
            size: "l",
            onClick: goBack
          })]
        }))
      })
    }))
  });
};

const errorsMessage = {
  email: {
    required: 'Por favor, ingresa un correo electrónico válido.',
    invalidEmail: 'Por favor, ingresa un correo electrónico válido.'
  }
};
const FormForgotPassword = ({
  title,
  description
}) => {
  const history = useHistory();
  const {
    email
  } = history.location.state || {};
  const emailValue = email || '';
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    dirty
  } = useFormik({
    initialValues: {
      email: emailValue
    },
    validate: values => {
      const configValidation = {
        email: [isRequired, isValidEmail]
      };
      return validation(configValidation)(values);
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });
  const onSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Enviando información...'
      });
      yield authClient.resetPassword(values.email);
      goRoute();
      Ramen.Api.loading.hide();
    } catch (error) {
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'Ocurrió un error',
        message: 'Por favor inténtalo nuevamente.'
      });
    }
  });
  const onChangeField = (e, name) => {
    if (name) {
      e.target.name = name;
    }
    handleChange(e);
  };
  const onBlurField = (e, name) => {
    e.target.name = name;
    handleBlur(e);
  };
  const goRoute = () => {
    history.push('/wait-password');
  };
  return jsx(Fragment, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "center",
      padding: "xl",
      gap: "xl"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 6,
        weight: "bold"
      }, {
        children: title
      })), jsx(Ramen.XText, Object.assign({
        fontSize: 9,
        colorThone: "dim"
      }, {
        children: description
      })), jsx("form", Object.assign({
        onSubmit: handleSubmit
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          gap: "xl"
        }, {
          children: [jsx(Ramen.XFormItem, Object.assign({
            error: !errors.email ? '' : errorsMessage.email[errors.email],
            label: "Correo corporativo (*)"
          }, {
            children: jsx(Ramen.XEmailInput, {
              size: "l",
              placeholder: "ejemplo@empresa.cl",
              value: values.email,
              onChange: e => onChangeField(e, 'email'),
              onBlur: e => onBlurField(e, 'email')
            })
          })), jsx(Ramen.XButton, {
            disabled: !isValid,
            text: "Continuar",
            type: "solid",
            size: "l"
          })]
        }))
      }))]
    }))
  });
};
const ForgotPassword = () => {
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsx(FormForgotPassword, {
          title: "\u00BFOlvidaste tu contrase\u00F1a?",
          description: "No te preocupes, ingresa el correo que registraste y te enviaremos un enlace para restablecer tu contrase\u00F1a."
        })
      })
    }))
  });
};

const ResetPassword = () => {
  const ContainerUnauthorized = /*#__PURE__*/lazy(() => import('./root.js'));
  const {
    login
  } = useUserContext();
  const history = useHistory();
  const {
    token: tokenValue
  } = useParams();
  const {
    token
  } = history.location.state || {};
  const access_token = tokenValue || token;
  const goRoute = () => {
    history.push('/');
  };
  const onSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Actualizando contraseña...'
      });
      yield authClient.resetPasswordWithToken({
        token: access_token,
        password: values.password
      });
      yield login(values.email, values.password);
      Ramen.Api.notification.success({
        description: 'Contraseña actualizada con éxito.'
      });
      goRoute();
      Ramen.Api.loading.hide();
    } catch (error) {
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'Ocurrió un error',
        message: 'No pudimos actualizar tu contraseña, por favor inténtalo nuevamente.'
      });
    }
  });
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx(LoaderScreen, {
        loading: true
      })
    }, {
      children: jsx(ContainerUnauthorized, {
        children: jsx(FormSetPassword, {
          onSubmit: onSubmit,
          showEmail: false,
          showDescription: false,
          title: "Crea tu nueva contrase\u00F1a \uD83E\uDD13"
        })
      })
    }))
  });
};

var styles$2 = {"xprofile-container":"root-module_xprofile-container__czIm0","xprofile-container_credit_card":"root-module_xprofile-container_credit_card__Jm-HV","xprofile-container_content":"root-module_xprofile-container_content__eOUnE","xcredit-card-image":"root-module_xcredit-card-image__0gFkK"};

var Styles = {"xsidebar":"root-module_xsidebar__st05C","xsidebar--expanded":"root-module_xsidebar--expanded__rf9cW","xsidebar__shadow":"root-module_xsidebar__shadow__USOyG","xsidebar__logo":"root-module_xsidebar__logo__K73S1","xsidebar__menu":"root-module_xsidebar__menu__QvWTs","xsidebar__menu__item_action":"root-module_xsidebar__menu__item_action__mS4vt","xsidebar__menu__item_action--selected":"root-module_xsidebar__menu__item_action--selected__BnoPo","xsidebar__menu__item_divider":"root-module_xsidebar__menu__item_divider__pUhVJ","xsidebar__expander":"root-module_xsidebar__expander__niS7U","xsidebar__footer":"root-module_xsidebar__footer__2-24a"};

const XSidebarPortal = props => {
  const [expanded, setExpanded] = useState(props.expanded);
  const rootClass = classnames(Styles['xsidebar'], {
    [Styles['xsidebar--expanded']]: expanded
  });
  useEffect(() => {
    setExpanded(props.expanded);
  }, [props.expanded]);
  const onActionItemMenuClickHandler = key => {
    if (props.onActionClick) {
      props.onActionClick(key);
    }
  };
  const onToggleExpandedClickHandler = () => {
    setExpanded(!expanded);
  };
  return jsx("div", Object.assign({
    className: rootClass
  }, {
    children: jsxs("div", Object.assign({
      className: Styles['xsidebar__shadow']
    }, {
      children: [props.showLogo && jsx("div", Object.assign({
        className: Styles['xsidebar__logo']
      }, {
        children: jsx("div", {
          children: jsx(Ramen.XImage, {
            width: 'full',
            src: expanded ? `${props === null || props === void 0 ? void 0 : props.expandedLogo}` : `${props === null || props === void 0 ? void 0 : props.logo}`
          })
        })
      })), expanded && props.header, expanded ?
      // Expanded Items
      jsx(Ramen.XBox, Object.assign({
        padding: "xl",
        horizontalAlign: "start",
        width: 'full'
      }, {
        children: jsx("div", Object.assign({
          className: Styles['xsidebar__menu']
        }, {
          children: props.menu.map((item, index) => {
            switch (item.type) {
              case 'action':
                {
                  const actionClasses = classnames(Styles['xsidebar__menu__item_action'], {
                    [Styles['xsidebar__menu__item_action--selected']]: item.key === props.selectedKey
                  });
                  const icon = typeof item.icon === 'string' ? jsx(Ramen.XIcon, {
                    size: "xs",
                    icon: item.icon
                  }) : item.icon.type === 'icon' ? jsx(Ramen.XIcon, {
                    size: "xs",
                    icon: item.icon.value
                  }) : jsx(Ramen.XSymbol, {
                    size: "xs",
                    symbol: item.icon.value
                  });
                  return jsxs("div", Object.assign({
                    className: actionClasses,
                    onClick: () => onActionItemMenuClickHandler(item.key)
                  }, {
                    children: [icon, jsx(Ramen.XText, Object.assign({
                      weight: "lighter",
                      fontSize: 11
                    }, {
                      children: item.text
                    }))]
                  }), item.key);
                }
              case 'divider':
                return jsx("div", Object.assign({
                  className: Styles['xsidebar__menu__item_divider']
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 11
                  }, {
                    children: item.text
                  }))
                }), `divider_${index}`);
              default:
                // eslint-disable-next-line react/jsx-no-useless-fragment
                return jsx(Fragment, {});
            }
          })
        }))
      })) :
      // Condensed Items
      jsx(Ramen.XBox, Object.assign({
        padding: "xl",
        horizontalAlign: "center"
      }, {
        children: jsx("div", Object.assign({
          className: Styles['xsidebar__menu']
        }, {
          children: props.menu.map(item => {
            switch (item.type) {
              case 'action':
                {
                  const actionClasses = classnames(Styles['xsidebar__menu__item_action'], {
                    [Styles['xsidebar__menu__item_action--selected']]: item.key === props.selectedKey
                  });
                  const icon = typeof item.icon === 'string' ? jsx(Ramen.XIcon, {
                    size: "m",
                    icon: item.icon
                  }) : item.icon.type === 'icon' ? jsx(Ramen.XIcon, {
                    size: "m",
                    icon: item.icon.value
                  }) : jsx(Ramen.XSymbol, {
                    size: "m",
                    symbol: item.icon.value
                  });
                  return jsx(Ramen.XTooltip, Object.assign({
                    text: item.text,
                    placement: "right"
                  }, {
                    children: jsx("div", Object.assign({
                      className: actionClasses,
                      onClick: () => onActionItemMenuClickHandler(item.key)
                    }, {
                      children: icon
                    }), item.key)
                  }));
                }
              default:
                // eslint-disable-next-line react/jsx-no-useless-fragment
                return jsx(Fragment, {});
            }
          })
        }))
      })), expanded && props.footer && jsx("div", Object.assign({
        className: classnames(Styles['xsidebar__footer'])
      }, {
        children: props.footer
      })), jsx("div", Object.assign({
        className: Styles['xsidebar__expander'],
        onClick: () => onToggleExpandedClickHandler()
      }, {
        children: jsx(Ramen.XIcon, {
          icon: expanded ? 'chevron-left-outline' : 'chevron-right-outline',
          size: "s"
        })
      }))]
    }))
  }));
};
XSidebarPortal.defaultProps = {
  menu: [],
  expanded: true
};

const HistoryRequest = () => {
  const title = 'Historial de cotización';
  const [sortFields, setSortFields] = useState({
    field: 'date',
    order: 'descend'
  });
  const [shoModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState();
  const {
    cart,
    clearCart,
    updateCart,
    setIsOpenModal
  } = useCartContext();
  const {
    loading,
    filters,
    data,
    getData
  } = useQueryCollection(args => cartClient.getHistory(args), {
    date: 'DES',
    limit: 50,
    offset: 0,
    total: 0
  }, false);
  const pagination = useMemo(() => ({
    offset: filters.offset,
    limit: filters.limit,
    total: filters.total
  }), [filters]);
  const onDownloadAction = cartId => __awaiter(void 0, void 0, void 0, function* () {
    try {
      let downloadLink;
      Ramen.Api.loading.show({
        text: 'Descargando pdf de la solicitud...'
      });
      const cartDetails = yield cartClient.getDetailCart(cartId);
      downloadLink = (cartDetails === null || cartDetails === void 0 ? void 0 : cartDetails.url) || '';
      Ramen.Api.loading.hide();
      Ramen.Api.notification.success({
        description: 'Archivo de solicitud descargado satisfactoriamente.'
      });
      window.open(downloadLink, '_system', 'location=yes');
    } catch (error) {
      Ramen.Api.loading.hide;
    }
  });
  const repeatRequest = cartId => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Cargando solicitud al carrito'
      });
      const cartDetails = yield cartClient.getDetailCart(cartId);
      const products = (cartDetails.cart_details || []).map(item => {
        const {
          ean,
          sku,
          quantity,
          unit,
          price,
          urlImageOTher,
          name,
          brandName,
          inStock,
          measurement,
          description,
          saleUnit,
          id
        } = item;
        const product = {
          id,
          ean,
          sku,
          quantity: quantity,
          name,
          description,
          price,
          urlImage: urlImageOTher.length > 0 ? urlImageOTher[0] : `https://media.easy.cl/is/image/EasySA/${StringFormatter$1.removeInitialZero(sku)}`,
          brandName,
          inStock,
          saleUnit,
          metadata: {
            measurement,
            unit
          },
          category: 'ab'
        };
        return product;
      });
      setShowModal(false);
      clearCart();
      updateCart(products);
      setIsOpenModal(true);
      Ramen.Api.loading.hide();
      Ramen.Api.notification.success({
        description: 'Solicitud repetida satisfactoriamente.'
      });
    } catch (error) {
      console.error(error);
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'No pudimos repetir la solicitud, por favor intente de nuevo.'
      });
    }
  });
  const onChangeTable = (sorter, pagination) => __awaiter(void 0, void 0, void 0, function* () {
    let sortField = {};
    if (!!(sorter === null || sorter === void 0 ? void 0 : sorter.field)) {
      let field;
      switch (sorter.field) {
        case 'created_at':
          field = 'date';
          break;
        case 'total_products':
          field = 'product_quantity';
          break;
        case '_id':
          field = 'cart_number';
          break;
        default:
          field = '';
          break;
      }
      if (!!field) {
        sortField[field] = sorter.order === 'ascend' ? 'ASC' : 'DES';
      }
      setSortFields(sorter);
    }
    const newFilters = Object.assign(Object.assign({}, pagination), sortField);
    getData(newFilters);
  });
  return jsxs(Fragment, {
    children: [jsx(Ramen.XTable, {
      header: {
        left: {
          component: 'title',
          value: title
        }
      },
      columns: [{
        title: 'Fecha',
        dataIndex: 'created_at',
        key: 'created_at',
        sorter: true,
        render: value => {
          return jsx(Ramen.XText, Object.assign({
            fontSize: 10
          }, {
            children: StringFormatter$1.capitalizeLetter(DateFormatter$1.formatDate(value, 'ddd D MMM YYYY, h:mm a'), true)
          }));
        }
      }, {
        title: 'Nº cotización',
        dataIndex: '_id',
        key: '_id'
      }, {
        title: 'Cantidad de productos',
        dataIndex: 'total_products',
        key: 'total_products',
        sorter: true
      }, {
        title: 'Acciones',
        key: 'more',
        render: (_, record) => jsx(Fragment, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xs"
          }, {
            children: [jsx(Ramen.XTooltip, Object.assign({
              text: 'Repetir solicitud',
              placement: "left"
            }, {
              children: jsx(Ramen.XButtonIcon, {
                icon: "repeat-outline",
                type: "clear",
                onClick: () => {
                  if (cart.length) {
                    setSelectedRecord(record);
                    setShowModal(true);
                  } else {
                    repeatRequest(record === null || record === void 0 ? void 0 : record._id);
                  }
                }
              })
            })), jsx(Ramen.XTooltip, Object.assign({
              text: 'Descargar solicitud',
              placement: "left"
            }, {
              children: jsx(Ramen.XButtonIcon, {
                type: "clear",
                icon: "download-outline",
                onClick: () => onDownloadAction(record === null || record === void 0 ? void 0 : record._id)
              })
            }))]
          }))
        })
      }],
      sorter: sortFields,
      pagination: !loading ? pagination : undefined,
      dataSource: data,
      onChange: onChangeTable
    }), loading && (data === null || data === void 0 ? void 0 : data.length) === 0 && jsxs(Fragment, {
      children: [jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XList, {
        dataSource: [{}, {}, {}, {}, {}],
        renderItem: item => jsx(Ramen.XSkeleton, {
          size: "xl",
          width: "xl",
          type: "image"
        })
      })]
    }), !loading && (data === null || data === void 0 ? void 0 : data.length) === 0 && jsxs(Ramen.XBox, Object.assign({
      padding: "xl"
    }, {
      children: [jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(EmptyResultsComponent, {
        emptyMessage: "Por el momento, no hay cotizaciones disponibles."
      })]
    })), jsx(Ramen.XConfirmModal, {
      visible: shoModal,
      cancelText: "Cancelar",
      confirmText: "Continuar",
      message: "Eliminaremos los productos que tienes en tu carrito para repetir esta solicitud. \u00BFDeseas continuar?",
      onCancel: () => {
        setSelectedRecord(undefined);
        setShowModal(false);
      },
      onClose: () => {
        setSelectedRecord(undefined);
        setShowModal(false);
      },
      onConfirm: () => repeatRequest(selectedRecord === null || selectedRecord === void 0 ? void 0 : selectedRecord._id),
      title: "Tu carro actual sera eliminado"
    })]
  });
};

const HelpCenter = () => {
  var _a, _b;
  const [loadingRequest, setLoadingRequest] = useState(false);
  const {
    companyData,
    getDataCompany,
    data: state,
    updateStateContext
  } = useUserContext();
  useEffect(() => {
    if (!!(companyData === null || companyData === void 0 ? void 0 : companyData.office)) {
      getData();
    }
  }, []);
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoadingRequest(true);
      const infoCompany = yield getDataCompany(`${companyData === null || companyData === void 0 ? void 0 : companyData.rut}`);
      updateStateContext(Object.assign(Object.assign({}, state), {
        companyData: Object.assign(Object.assign({}, state.companyData || {}), infoCompany || {})
      }));
      setLoadingRequest(false);
    } catch (error) {
      console.log(error);
      setLoadingRequest(false);
    }
  });
  const valueEmail = !!((_a = companyData === null || companyData === void 0 ? void 0 : companyData.sellers) === null || _a === void 0 ? void 0 : _a.length) ? get$2(companyData, ['sellers', '0', 'email'], '-') : '-';
  const sellerAssigned = !!((_b = companyData === null || companyData === void 0 ? void 0 : companyData.sellers) === null || _b === void 0 ? void 0 : _b.length) ? get$2(companyData, ['sellers', '0', 'full_name'], '-') : '-';
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(valueEmail);
  };
  return jsxs(Ramen.XBox, Object.assign({
    width: 'full',
    height: 'full',
    gap: "l",
    padding: 'l'
  }, {
    children: [jsx(Ramen.XText, Object.assign({
      fontSize: 9,
      weight: 'bold'
    }, {
      children: "Centro de ayuda"
    })), jsx(Ramen.XDivider, {}), jsx(Ramen.XText, Object.assign({
      fontSize: 11,
      colorThone: "dim"
    }, {
      children: "Para cualquier duda, consulta o solicitud especial, no dudes en contactar directamente a tu vendedor asignado. Estamos aqu\u00ED para escucharte, apoyarte y hacer de cada interacci\u00F3n una experiencia excepcional \uD83D\uDCAA \uD83D\uDE80."
    })), jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      gap: "m",
      verticalAlign: 'center'
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "m",
        verticalAlign: "center"
      }, {
        children: [jsx(Ramen.XButtonIcon, {
          icon: "user-outline",
          type: "tonal"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            colorThone: "dim"
          }, {
            children: "Vendedor asignado"
          })), jsx(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xs",
            verticalAlign: "center"
          }, {
            children: jsx(Ramen.XText, Object.assign({
              fontSize: 9,
              weight: "bold"
            }, {
              children: sellerAssigned
            }))
          }))]
        }))]
      })), jsx(XDividerVertical, {}), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "m",
        verticalAlign: "center"
      }, {
        children: [jsx(Ramen.XButtonIcon, {
          icon: "mail-outline",
          type: "tonal"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            colorThone: "dim"
          }, {
            children: "Correo electr\u00F3nico"
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xs",
            verticalAlign: "center"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              fontSize: 9,
              weight: "bold"
            }, {
              children: valueEmail
            })), jsx("div", Object.assign({
              style: {
                cursor: 'pointer'
              },
              onClick: copyToClipBoard
            }, {
              children: jsx(Ramen.XImage, {
                src: img
              })
            }))]
          }))]
        }))]
      }))]
    }))]
  }));
};

var styles$1 = {"x-myaccount_card_container":"root-module_x-myaccount_card_container__DZGUV","x-myaccount_card_item":"root-module_x-myaccount_card_item__GOnHu","x-address-container":"root-module_x-address-container__yS8n-"};

var styles = {"xavatar-component_button_edit":"root-module_xavatar-component_button_edit__GtZgd"};

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var filesClient = new FilesApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

const AvatarComponent = () => {
  const {
    userData,
    getMe
  } = useUserContext();
  const inputFile = useRef();
  const onTakePhotoClickHandler = base64String => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Actualizando imagen de usuario...'
      });
      yield filesClient.uploadPhotoUser(base64String);
      yield getMe();
      Ramen.Api.loading.hide();
      Ramen.Api.notification.success({
        description: 'Se ha actualizado la imagen del usuario satisfactoriamente'
      });
    } catch (error) {
      console.error(error);
      Ramen.Api.notification.error({
        description: 'Ha ocurrido un error al subir la imagen.',
        message: 'Por favor intente de nuevo.'
      });
      Ramen.Api.loading.hide();
    }
  });
  const onErrorImage = error => {
    Ramen.Api.notification.error({
      description: 'Ha ocurrido un error al subir la imagen.',
      message: error.message ? error.message : 'Por favor intente de nuevo.'
    });
  };
  return jsx(Ramen.XBox, Object.assign({
    width: 1,
    height: 'full'
  }, {
    children: jsxs("div", Object.assign({
      className: classnames(styles['xavatar-component_button_edit'])
    }, {
      children: [jsx(Ramen.XImage, {
        rounded: "full",
        src: (userData === null || userData === void 0 ? void 0 : userData.imageUrl) || img$7,
        height: 1,
        width: 'full'
      }), jsx(Ramen.XButtonIcon, {
        size: "s",
        type: "solid",
        icon: "edit-2-outline",
        onClick: () => {
          inputFile.current.click();
        }
      }), jsx("input", {
        type: "file",
        accept: 'image/*',
        name: "image",
        ref: inputFile,
        hidden: true,
        onChange: event => {
          filesClient.getBase64(event, onTakePhotoClickHandler, onErrorImage);
        }
      })]
    }))
  }));
};
var AvatarComponent$1 = /*#__PURE__*/memo(AvatarComponent);

const XCardItemList = ({
  loading,
  title,
  value
}) => {
  return jsx("div", Object.assign({
    className: classnames(styles$1['x-myaccount_card_item'])
  }, {
    children: loading ? jsx(Ramen.XSkeleton, {
      size: "xl",
      type: "image",
      width: "xl"
    }) : jsx(Ramen.XCard, Object.assign({
      borderType: "solid"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        padding: "s",
        orientation: "horizontal",
        horizontalAlign: "between",
        width: 'full'
      }, {
        children: [jsx(Ramen.XText, {
          children: title
        }), jsx(Ramen.XText, Object.assign({
          weight: "bold"
        }, {
          children: value
        }))]
      }))
    }))
  }));
};
const AddressComponent = ({
  value,
  address,
  loading,
  onChangeAddress
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(value);
  useEffect(() => {
    if (value !== selectedAddress) {
      setSelectedAddress(value);
    }
  }, [value]);
  const changeMode = () => {
    setIsEditing(!isEditing);
  };
  const optionsAddress = useMemo(() => {
    return (address || []).map(item => ({
      label: item,
      value: item
    }));
  }, [address]);
  const onUpdateAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      Ramen.Api.loading.show({
        text: 'Actualizando dirección comercial...'
      });
      const input = uniq([selectedAddress, ...(address || [])]);
      yield companyClient.updateAddress(uniq([selectedAddress, ...(address || [])]));
      onChangeAddress === null || onChangeAddress === void 0 ? void 0 : onChangeAddress(input);
      changeMode();
      Ramen.Api.notification.success({
        description: 'Dirección comercial actualizada correctamente.'
      });
      Ramen.Api.loading.hide();
    } catch (error) {
      Ramen.Api.loading.hide();
      Ramen.Api.notification.error({
        description: 'No pudimso actualizar su dirección comercial. Por favor intenta nuevamente.'
      });
    }
  });
  const onCancel = () => __awaiter(void 0, void 0, void 0, function* () {
    setSelectedAddress(value);
    changeMode();
  });
  return jsx("div", Object.assign({
    className: classnames(styles$1['x-address-container']),
    onClick: () => {
      !isEditing && changeMode();
    }
  }, {
    children: loading ? jsx(Ramen.XSkeleton, {
      size: "xl",
      type: "image",
      width: "xl"
    }) : jsx(Ramen.XCard, {
      children: jsx(Ramen.XFormItem, Object.assign({
        label: "Direcci\u00F3n comercial"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: 'full',
          orientation: "horizontal",
          gap: "xs"
        }, {
          children: [jsx(Ramen.XSelect, {
            size: "l",
            defaultValue: selectedAddress,
            value: selectedAddress,
            disabled: !isEditing || !optionsAddress.length,
            options: optionsAddress,
            onChange: setSelectedAddress,
            placeholder: "Selecciona direcci\u00F3n comercial"
          }), isEditing && jsx(Ramen.XButtonIcon, {
            icon: "x-bold",
            onClick: onCancel
          }), isEditing && jsx(Ramen.XButtonIcon, {
            icon: "check-bold",
            onClick: onUpdateAddress
          })]
        }))
      }))
    })
  }));
};
const MyAccount = () => {
  var _a, _b, _c;
  const [loadingRequest, setLoadingRequest] = useState(false);
  const {
    companyData,
    getDataCompany,
    data: state,
    updateStateContext
  } = useUserContext();
  const {
    width
  } = useWindowSize();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoadingRequest(true);
      const infoCompany = yield getDataCompany(`${companyData === null || companyData === void 0 ? void 0 : companyData.rut}`);
      updateStateContext(Object.assign(Object.assign({}, state), {
        companyData: Object.assign(Object.assign({}, state.companyData || {}), infoCompany || {})
      }));
      setLoadingRequest(false);
    } catch (error) {
      console.log(error);
      setLoadingRequest(false);
    }
  });
  const onChangeAddress = input => {
    updateStateContext(Object.assign(Object.assign({}, state), {
      companyData: Object.assign(Object.assign({}, state.companyData || {}), {
        toDelivery: input[0],
        deliveryAddresses: input
      })
    }));
  };
  return jsxs(Ramen.XBox, Object.assign({
    width: 'full',
    height: 'full',
    gap: "l",
    padding: "l"
  }, {
    children: [jsx(Ramen.XText, Object.assign({
      fontSize: 9,
      weight: "bold"
    }, {
      children: "Informaci\u00F3n personal"
    })), jsx(Ramen.XDivider, {}), width < breakPoints.md && jsx(AvatarComponent$1, {}), jsxs("div", Object.assign({
      className: classnames(styles$1['x-myaccount_card_container'])
    }, {
      children: [jsx(XCardItemList, {
        loading: loadingRequest,
        title: 'Nombre de la empresa',
        value: (companyData === null || companyData === void 0 ? void 0 : companyData.name) || '-'
      }), jsx(XCardItemList, {
        loading: loadingRequest,
        title: 'RUT de la empresa',
        value: (companyData === null || companyData === void 0 ? void 0 : companyData.rut) || '-'
      }), jsx(XCardItemList, {
        loading: loadingRequest,
        title: 'Vendedor asignado',
        value: !!((_a = companyData === null || companyData === void 0 ? void 0 : companyData.sellers) === null || _a === void 0 ? void 0 : _a.length) ? get$2(companyData, ['sellers', '0', 'full_name'], '-') : '-'
      }), jsx(XCardItemList, {
        loading: loadingRequest,
        title: 'Sucursal asignada',
        value: ((_b = companyData === null || companyData === void 0 ? void 0 : companyData.office) === null || _b === void 0 ? void 0 : _b.name) || '-'
      })]
    })), jsx(AddressComponent, {
      value: companyData === null || companyData === void 0 ? void 0 : companyData.toDelivery,
      address: !!((_c = companyData === null || companyData === void 0 ? void 0 : companyData.deliveryAddresses) === null || _c === void 0 ? void 0 : _c.length) ? companyData === null || companyData === void 0 ? void 0 : companyData.deliveryAddresses : companyData === null || companyData === void 0 ? void 0 : companyData.address,
      loading: loadingRequest,
      onChangeAddress: onChangeAddress
    })]
  }));
};

const SUBROUTES = {
  myProfile: {
    exact: true,
    path: '/profile/my-profile',
    component: MyAccount
  },
  historyRequest: {
    exact: true,
    path: '/profile/history-request',
    component: HistoryRequest
  },
  helpCenter: {
    exact: true,
    path: '/profile/help-center',
    component: HelpCenter
  }
};

const RoutesProfile = () => {
  return jsx(AuthRouterLoader$1, {
    notfoundRedirect: "/",
    routes: SUBROUTES
  });
};

const menuList = [{
  icon: 'user-outline',
  key: 'my-profile',
  text: 'Información personal',
  label: 'Información personal',
  type: 'action'
}, {
  icon: 'shopping-bag-outline',
  key: 'history-request',
  text: 'Historial de cotización',
  label: 'Historial de cotización',
  type: 'action'
}, {
  icon: 'support-filled',
  key: 'help-center',
  text: 'Centro de ayuda',
  label: 'Centro de ayuda',
  type: 'action'
}];
const CreditProfileCard = ({
  icon,
  title,
  totalCredit,
  loading
}) => {
  return loading ? jsx(Ramen.XSkeleton, {
    size: "xl",
    type: "image",
    width: "xl"
  }) : jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "start",
      verticalAlign: "center",
      width: 'full',
      gap: "xs"
    }, {
      children: [jsx("div", Object.assign({
        className: classnames(styles$2['xcredit-card-image'])
      }, {
        children: icon && jsx(Ramen.XImage, {
          height: 7,
          src: icon
        })
      })), jsx(Ramen.XBox, Object.assign({
        width: 'full'
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          gap: "xxs"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            fontSize: 12,
            colorThone: "lightest"
          }, {
            children: title
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 8,
            colorThone: "lightest"
          }, {
            children: !!totalCredit ? NumberFormatter$1.toCurrency(Number(totalCredit)) : '-'
          }))]
        }))
      }))]
    }))
  });
};
const ProfileContainer = () => {
  var _a;
  const {
    location,
    push
  } = useHistory();
  const {
    width
  } = useWindowSize();
  const {
    userData,
    isAuthenticated,
    companyData,
    getDataCompany,
    data: state,
    updateStateContext,
    logout
  } = useUserContext();
  const [loadingRequest, setLoadingRequest] = useState(false);
  const selectedKey = useMemo(() => {
    const [itemFilter] = menuList.filter(item => location.pathname.includes(item === null || item === void 0 ? void 0 : item.key));
    return (itemFilter === null || itemFilter === void 0 ? void 0 : itemFilter.key) || '';
  }, [location.pathname]);
  const onActionClick = key => {
    push(`/profile/${key}`);
  };
  useEffect(() => {
    if ((companyData === null || companyData === void 0 ? void 0 : companyData.hasCreditLine) && !(companyData === null || companyData === void 0 ? void 0 : companyData.infoCredit)) {
      getData();
    }
  }, [location.pathname, companyData === null || companyData === void 0 ? void 0 : companyData.rut]);
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoadingRequest(true);
      const infoCompany = yield getDataCompany(`${companyData === null || companyData === void 0 ? void 0 : companyData.rut}`);
      updateStateContext(Object.assign(Object.assign({}, state), {
        companyData: Object.assign(Object.assign({}, state.companyData || {}), infoCompany || {})
      }));
      setLoadingRequest(false);
    } catch (error) {
      console.log(error);
      setLoadingRequest(false);
    }
  });
  const totalPrice = ((_a = companyData === null || companyData === void 0 ? void 0 : companyData.infoCredit) === null || _a === void 0 ? void 0 : _a.amountCredit) || '-';
  const onLogout = () => __awaiter(void 0, void 0, void 0, function* () {
    yield logout();
    push('/');
  });
  return jsx(Fragment, {
    children: jsx(MainLayout, {
      children: jsx(Container, {
        children: jsx("div", Object.assign({
          className: classnames(styles$2['xprofile-container'])
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: width > breakPoints.md ? "horizontal" : "vertical",
            gap: "l"
          }, {
            children: [width > breakPoints.md ? jsx(XSidebarPortal, Object.assign({
              header: jsx(Fragment, {
                children: jsxs(Ramen.XBox, Object.assign({
                  orientation: "vertical",
                  width: 'full',
                  padding: "xl"
                }, {
                  children: [jsx(Ramen.XVSpace, {
                    size: "l"
                  }), jsx(AvatarComponent$1, {}), jsx(Ramen.XVSpace, {
                    size: "l"
                  }), !(userData === null || userData === void 0 ? void 0 : userData.name) ? jsx(Ramen.XSkeleton, {
                    type: "tag",
                    size: "xl"
                  }) : jsx(Ramen.XText, Object.assign({
                    fontSize: 8
                  }, {
                    children: userData === null || userData === void 0 ? void 0 : userData.name
                  })), jsx(Ramen.XVSpace, {
                    size: "m"
                  }), !(userData === null || userData === void 0 ? void 0 : userData.email) ? jsx(Ramen.XSkeleton, {
                    type: "tag",
                    size: "xl"
                  }) : jsx(Ramen.XButton, {
                    icon: "mail-outline",
                    type: "tonal",
                    size: "s",
                    text: userData === null || userData === void 0 ? void 0 : userData.email
                  }), jsx(Ramen.XVSpace, {
                    size: "m"
                  }), jsx(Ramen.XDivider, {}), jsx(Ramen.XVSpace, {
                    size: "m"
                  }), (companyData === null || companyData === void 0 ? void 0 : companyData.hasCreditLine) && jsx("div", Object.assign({
                    className: classnames(styles$2['xprofile-container_credit_card'])
                  }, {
                    children: jsx(CreditProfileCard, {
                      icon: img$6,
                      loading: loadingRequest,
                      title: "Tu Cr\u00E9dito disponible es de",
                      totalCredit: totalPrice
                    })
                  }))]
                }))
              }),
              footer: jsx(Fragment, {
                children: isAuthenticated && jsx(Ramen.XButton, {
                  icon: "log-out-outline",
                  size: "s",
                  type: "clear",
                  text: "Cerrar sesi\u00F3n",
                  onClick: onLogout
                })
              }),
              selectedKey: selectedKey,
              menu: menuList,
              onActionClick: onActionClick
            }, width < 750 && {
              expanded: false
            })) : jsx(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: jsx(Ramen.XTabs, {
                defaultKey: selectedKey,
                size: "l",
                tabs: menuList,
                onTabChange: key => {
                  push(`/profile/${key}`);
                }
              })
            })), jsx("div", Object.assign({
              className: classnames(styles$2['xprofile-container_content'])
            }, {
              children: jsx(Ramen.XBox, Object.assign({
                width: 'full',
                height: 'full',
                padding: "m"
              }, {
                children: jsx(RoutesProfile, {})
              }))
            }))]
          }))
        }))
      })
    })
  });
};

const CartPage = props => {
  return jsx(Cart, {});
};

const HomePage = props => {
  return jsx(Home, {});
};

const SignUpPage = props => {
  return jsx(SignUp, {});
};

const PendingApprovePage = props => {
  return jsx(PendingApprove, {});
};

const ProductsDetailsPage = props => {
  return jsx(Product, {});
};

const ProductListPage = props => {
  return jsx(Shop, {});
};

const CreatePasswordPage = props => {
  return jsx(SetPassword, {});
};

const ActiveAccountPage = props => {
  return jsx(ActiveAccount, {});
};

const PendingResetPasswordPage = props => {
  return jsx(PendingResetPassword, {});
};

const ForgotPasswordPage = props => {
  return jsx(ForgotPassword, {});
};

const ResetPasswordPage = props => {
  return jsx(ResetPassword, {});
};

const ProfilePage = props => {
  return jsx(ProfileContainer, {});
};

class PortalModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '',
        page: HomePage
      }, {
        path: 'products',
        page: ProductListPage
      }, {
        path: 'products/detail/:id',
        page: ProductsDetailsPage
      }, {
        path: 'cart',
        page: CartPage
      }, {
        path: 'signup',
        page: SignUpPage
      }, {
        path: 'wait-request',
        page: PendingApprovePage
      }, {
        path: 'set-password/:token',
        page: CreatePasswordPage
      }, {
        path: 'set-password',
        page: CreatePasswordPage
      }, {
        path: 'active-account/:token',
        page: ActiveAccountPage
      }, {
        path: 'forgot-password',
        page: ForgotPasswordPage
      }, {
        path: 'wait-password',
        page: PendingResetPasswordPage
      }, {
        path: 'reset-password/:token',
        page: ResetPasswordPage
      }, {
        path: 'profile',
        exact: false,
        page: ProfilePage
      }],
      override
    });
  }
}
PortalModule.route = '/';

export { DrawerCategories$1 as D, Flow as F, Header as H, ModalCart$1 as M, NumberFormatter$1 as N, ProductsList as P, __awaiter as _, useUserContext as a, breakPoints as b, useGlobal as c, img$b as d, PortalModule as e, img$6 as i, productsClient as p, useWindowSize as u };
