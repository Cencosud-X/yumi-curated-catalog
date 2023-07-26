import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { memo, useReducer, useState, useEffect, createContext, useContext, useMemo, useCallback, Suspense, lazy, useRef, Fragment as Fragment$1 } from 'react';
import { NavLink as NavLink$1, useLocation, useHistory, Link, Route, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCart } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Ramen from '@team_yumi/ramen-web';
import { Apis } from '@digital-product-catalog/models';
import { IoIosArrowUp } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'classnames';
import 'swiper/css/pagination';
import { TiTick } from 'react-icons/ti';
import { RiCloseFill } from 'react-icons/ri';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$n = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$m = fails$n;

var functionBindNative = !fails$m(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$l = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$l, call$l);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$l.apply(fn, arguments);
  };
};

var uncurryThis$q = functionUncurryThis;

var toString$c = uncurryThis$q({}.toString);
var stringSlice$9 = uncurryThis$q(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$9(toString$c(it), 8, -1);
};

var uncurryThis$p = functionUncurryThis;
var fails$l = fails$n;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split$1 = uncurryThis$p(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$l(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$e = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$9 = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$8 = requireObjectCoercible$9;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$8(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
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

var shared$4 = {exports: {}};

var isPure = false;

var global$m = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$m, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$m[key] = value;
  } return value;
};

var global$l = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$l[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$7 = requireObjectCoercible$9;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5 = function (argument) {
  return $Object$3(requireObjectCoercible$7(argument));
};

var uncurryThis$o = functionUncurryThis;
var toObject$4 = toObject$5;

var hasOwnProperty = uncurryThis$o({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};

var uncurryThis$n = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$b = uncurryThis$n(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$k = global$n;
var userAgent$4 = engineUserAgent;

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
if (!version && userAgent$4) {
  match = userAgent$4.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$4.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$k = fails$n;
var global$j = global$n;

var $String$6 = global$j.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$k(function () {
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

var global$i = global$n;
var shared$3 = shared$4.exports;
var hasOwn$c = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$2 = global$i.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$i = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$c(Symbol$2, name)
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
var isCallable$o = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var isObject$8 = isObject$9;

var $String$5 = String;
var $TypeError$d = TypeError;

// `Assert: Type(argument) is Object`
var anObject$h = function (argument) {
  if (isObject$8(argument)) return argument;
  throw $TypeError$d($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$j = fails$n;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$d = descriptors;
var fails$i = fails$n;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$d && fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$h = global$n;
var isObject$7 = isObject$9;

var document$3 = global$h.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$7(document$3) && isObject$7(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$h = fails$n;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$k = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$k.bind(call$k) : function () {
  return call$k.apply(call$k, arguments);
};

var global$g = global$n;
var isCallable$m = isCallable$o;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$g[namespace]) : global$g[namespace] && global$g[namespace][method];
};

var uncurryThis$m = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$m({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$l = isCallable$o;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$2(it));
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

var $TypeError$c = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$9 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw $TypeError$c(tryToString$3(argument) + ' is not a function');
};

var aCallable$8 = aCallable$9;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$6 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$8(func);
};

var call$j = functionCall;
var isCallable$j = isCallable$o;
var isObject$6 = isObject$9;

var $TypeError$b = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$6(val = call$j(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$6(val = call$j(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$6(val = call$j(fn, input))) return val;
  throw $TypeError$b("Can't convert object to primitive value");
};

var call$i = functionCall;
var isObject$5 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$h = wellKnownSymbol$i;

var $TypeError$a = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$h('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$i(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw $TypeError$a("Can't convert object to primitive value");
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

var DESCRIPTORS$b = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$g = anObject$h;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$9 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$2(P);
  anObject$g(Attributes);
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
  anObject$g(O);
  P = toPropertyKey$2(P);
  anObject$g(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil$1 = Math.ceil;
var floor$3 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$3 : ceil$1)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$4 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$3(O);
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
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};

var hiddenKeys$4 = {};

var uncurryThis$l = functionUncurryThis;
var hasOwn$b = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$2 = uncurryThis$l([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$b(hiddenKeys$3, key) && hasOwn$b(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$b(O, key = names[i++])) {
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

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$a = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$f = anObject$h;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$f(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$7;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$e = anObject$h;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
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
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$e(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$g = wellKnownSymbol$i;
var create$3 = objectCreate;
var defineProperty$5 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$g('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$5(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$f = global$n;
var isCallable$i = isCallable$o;

var WeakMap$1 = global$f.WeakMap;

var weakMapBasicDetection = isCallable$i(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$9 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$9 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$a = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

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
  var store$1 = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store$1.get(it) || {};
  };
  has = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$a(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$a(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$a(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
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

var DESCRIPTORS$8 = descriptors;
var call$h = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$3(!call$h(propertyIsEnumerableModule$1.f, O, P), O[P]);
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

var uncurryThis$k = functionUncurryThis;
var isCallable$h = isCallable$o;
var store = sharedStore;

var functionToString = uncurryThis$k(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$h(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$j = functionUncurryThis;
var fails$g = fails$n;
var isCallable$g = isCallable$o;
var hasOwn$7 = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$3 = internalState;

var enforceInternalState = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;
var stringSlice$8 = uncurryThis$j(''.slice);
var replace$5 = uncurryThis$j(''.replace);
var join$1 = uncurryThis$j([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$g(function () {
  return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$8($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$5($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$4(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
    defineProperty$4(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$7(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$4(value, 'prototype', { writable: false });
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
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$f = isCallable$o;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$9 = function (O, key, value, options) {
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
var uncurryThis$i = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$d = anObject$h;

var concat$2 = uncurryThis$i([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
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

var fails$f = fails$n;
var isCallable$e = isCallable$o;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$e(detection) ? fails$f(detection)
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
var defineBuiltIn$8 = defineBuiltIn$9;
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
    defineBuiltIn$8(target, key, sourceProperty, options);
  }
};

var fails$e = fails$n;

var correctPrototypeGetter = !fails$e(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$d = isCallable$o;
var toObject$3 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$3(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$d(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$d = fails$n;
var isCallable$c = isCallable$o;
var isObject$3 = isObject$9;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$7 = defineBuiltIn$9;
var wellKnownSymbol$f = wellKnownSymbol$i;

var ITERATOR$8 = wellKnownSymbol$f('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$2) || fails$d(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$c(IteratorPrototype$2[ITERATOR$8])) {
  defineBuiltIn$7(IteratorPrototype$2, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$e = wellKnownSymbol$i;

var TO_STRING_TAG$3 = wellKnownSymbol$e('toStringTag');

var setToStringTag$4 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG$3)) {
    defineProperty$3(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
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

var uncurryThis$h = functionUncurryThis;
var aCallable$7 = aCallable$9;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$h(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$b = isCallable$o;

var $String$2 = String;
var $TypeError$8 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$b(argument)) return argument;
  throw $TypeError$8("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$c = anObject$h;
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
    anObject$c(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$e = _export;
var call$g = functionCall;
var FunctionName = functionName;
var isCallable$a = isCallable$o;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$6 = defineBuiltIn$9;
var wellKnownSymbol$d = wellKnownSymbol$i;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$d('iterator');
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
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$a(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$6(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$g(nativeIterator, this); };
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
        defineBuiltIn$6(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$e({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$6(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
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
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$5 = descriptors;

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
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$5 && values.name !== 'values') try {
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

var global$c = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$c = wellKnownSymbol$i;

var ITERATOR$6 = wellKnownSymbol$c('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
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

var DESCRIPTORS$4 = descriptors;
var uncurryThis$g = functionUncurryThis;
var call$f = functionCall;
var fails$c = fails$n;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$5;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat$1 = uncurryThis$g([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$c(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$4 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
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
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$4 || call$f(propertyIsEnumerable, S, key)) T[key] = S[key];
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

const Nav = ({
  links
}) => {
  return jsx("nav", {
    children: jsx("ul", Object.assign({
      className: 'nav-wrapper'
    }, {
      children: (links || []).map((link, index) => jsx("li", Object.assign({
        className: 'nav-item'
      }, {
        children: link.submenu ? jsxs(Fragment, {
          children: [jsxs(NavLink$1, Object.assign({
            className: 'nav-link link-wrapper nav-item',
            to: link.url
          }, {
            children: [jsx(GiHamburgerMenu, {
              className: 'mobile-nav__button-icon'
            }), jsx("span", {
              children: link.name
            })]
          })), jsx("ul", Object.assign({
            className: 'nav__sub-menu'
          }, {
            children: link.submenu.map((sublink, subindex) => jsx("li", Object.assign({
              className: 'nav__sub-menu__item'
            }, {
              children: jsxs(NavLink$1, Object.assign({
                className: 'nav-link',
                to: sublink.url
              }, {
                children: [sublink.name, jsx(MdKeyboardArrowRight, {
                  className: 'nav-link__arrow-icon'
                })]
              }))
            }), subindex))
          }))]
        }) : jsx(NavLink$1, Object.assign({
          className: 'nav-link',
          to: link.url
        }, {
          children: link.name
        }))
      }), index))
    }))
  });
};
var Nav$1 = /*#__PURE__*/memo(Nav);

var aCallable$6 = aCallable$9;
var toObject$1 = toObject$5;
var IndexedObject = indexedObject;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;

var $TypeError$7 = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$3 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$6(callbackfn);
    var O = toObject$1(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$2(O);
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
        throw $TypeError$7('Reduce of empty array with no initial value');
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
  left: createMethod$3(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$3(true)
};

var fails$b = fails$n;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$b(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var classof$6 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$6(process) == 'process';

var $$c = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var CHROME_VERSION = engineV8Version;
var IS_NODE$4 = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$2 = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$c({ target: 'Array', proto: true, forced: FORCED$2 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var uncurryThis$f = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$f(1.0.valueOf);

var wellKnownSymbol$b = wellKnownSymbol$i;

var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$9 = isCallable$o;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$a = wellKnownSymbol$i;

var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
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
var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var classof$4 = classof$5;

var $String$1 = String;

var toString$a = function (argument) {
  if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$9 = toString$a;
var requireObjectCoercible$6 = requireObjectCoercible$9;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$9(requireObjectCoercible$6(this));
  var result = '';
  var n = toIntegerOrInfinity$3(count);
  if (n < 0 || n == Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$b = _export;
var uncurryThis$e = functionUncurryThis;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
var thisNumberValue = thisNumberValue$1;
var $repeat$1 = stringRepeat;
var fails$a = fails$n;

var $RangeError = RangeError;
var $String = String;
var floor$2 = Math.floor;
var repeat$1 = uncurryThis$e($repeat$1);
var stringSlice$7 = uncurryThis$e(''.slice);
var nativeToFixed = uncurryThis$e(1.0.toFixed);

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
    c2 = floor$2(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor$2(c / n);
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

var FORCED$1 = fails$a(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$a(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$b({ target: 'Number', proto: true, forced: FORCED$1 }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity$2(fractionDigits);
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
        : stringSlice$7(result, 0, k - fractDigits) + '.' + stringSlice$7(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
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
    console.log(quantity);
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
          console.log(Object.assign(Object.assign({}, productItem), {
            quantity
          }));
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
      })), jsx(BiCart, {
        className: "cart-icon"
      })]
    }))
  }));
};
var ShopCart$1 = /*#__PURE__*/memo(ShopCart);

var anObject$b = anObject$h;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$b(this);
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

var fails$9 = fails$n;
var global$b = global$n;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$b.RegExp;

var UNSUPPORTED_Y$1 = fails$9(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$9(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$9(function () {
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

var fails$8 = fails$n;
var global$a = global$n;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$a.RegExp;

var regexpUnsupportedDotAll = fails$8(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$7 = fails$n;
var global$9 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$9.RegExp;

var regexpUnsupportedNcg = fails$7(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$e = functionCall;
var uncurryThis$d = functionUncurryThis;
var toString$8 = toString$a;
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
var charAt$4 = uncurryThis$d(''.charAt);
var indexOf = uncurryThis$d(''.indexOf);
var replace$4 = uncurryThis$d(''.replace);
var stringSlice$6 = uncurryThis$d(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$e(nativeExec, re1, 'a');
  call$e(nativeExec, re2, 'a');
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
    var str = toString$8(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$e(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$e(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$4(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$6(str, re.lastIndex);
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

    match = call$e(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$6(match.input, charsAdded);
        match[0] = stringSlice$6(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$e(nativeReplace, match[0], reCopy, function () {
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

var $$a = _export;
var exec$2 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$a({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
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
var defineBuiltIn$5 = defineBuiltIn$9;
var regexpExec$1 = regexpExec$2;
var fails$6 = fails$n;
var wellKnownSymbol$9 = wellKnownSymbol$i;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES$3 = wellKnownSymbol$9('species');
var RegExpPrototype$2 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$9(KEY);

  var DELEGATES_TO_SYMBOL = !fails$6(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$6(function () {
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
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
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

    defineBuiltIn$5(String.prototype, KEY, methods[0]);
    defineBuiltIn$5(RegExpPrototype$2, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
};

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var call$d = functionCall;
var anObject$a = anObject$h;
var isCallable$8 = isCallable$o;
var classof$3 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$6 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$8(exec)) {
    var result = call$d(exec, R, S);
    if (result !== null) anObject$a(result);
    return result;
  }
  if (classof$3(R) === 'RegExp') return call$d(regexpExec, R, S);
  throw $TypeError$6('RegExp#exec called on incompatible receiver');
};

var call$c = functionCall;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var anObject$9 = anObject$h;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var requireObjectCoercible$5 = requireObjectCoercible$9;
var sameValue = sameValue$1;
var toString$7 = toString$a;
var getMethod$4 = getMethod$6;
var regExpExec$2 = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic$2('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$5(this);
      var searcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$4(regexp, SEARCH);
      return searcher ? call$c(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$7(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$9(this);
      var S = toString$7(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec$2(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

var fails$5 = fails$n;
var wellKnownSymbol$8 = wellKnownSymbol$i;
var DESCRIPTORS$3 = descriptors;
var IS_PURE = isPure;

var ITERATOR$5 = wellKnownSymbol$8('iterator');

var urlConstructorDetection = !fails$5(function () {
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
    || (!searchParams.size && (IS_PURE || !DESCRIPTORS$3))
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$5]
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

var defineBuiltIn$4 = defineBuiltIn$9;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$4(target, key, src[key], options);
  return target;
};

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$5 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw $TypeError$5('Incorrect invocation');
};

var uncurryThis$a = functionUncurryThisClause;
var aCallable$5 = aCallable$9;
var NATIVE_BIND$1 = functionBindNative;

var bind$5 = uncurryThis$a(uncurryThis$a.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$2 = classof$5;
var getMethod$3 = getMethod$6;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var Iterators$1 = iterators;
var wellKnownSymbol$7 = wellKnownSymbol$i;

var ITERATOR$4 = wellKnownSymbol$7('iterator');

var getIteratorMethod$3 = function (it) {
  if (!isNullOrUndefined$3(it)) return getMethod$3(it, ITERATOR$4)
    || getMethod$3(it, '@@iterator')
    || Iterators$1[classof$2(it)];
};

var call$b = functionCall;
var aCallable$4 = aCallable$9;
var anObject$8 = anObject$h;
var tryToString$2 = tryToString$4;
var getIteratorMethod$2 = getIteratorMethod$3;

var $TypeError$4 = TypeError;

var getIterator$2 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$4(iteratorMethod)) return anObject$8(call$b(iteratorMethod, argument));
  throw $TypeError$4(tryToString$2(argument) + ' is not iterable');
};

var $TypeError$3 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$3('Not enough arguments');
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
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var createProperty = createProperty$1;

var $Array = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice$2 = arraySliceSimple;

var floor$1 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$1(length / 2);
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

var $$9 = _export;
var global$8 = global$n;
var call$a = functionCall;
var uncurryThis$9 = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn$3 = defineBuiltIn$9;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var isCallable$7 = isCallable$o;
var hasOwn$3 = hasOwnProperty_1;
var bind$4 = functionBindContext;
var classof$1 = classof$5;
var anObject$7 = anObject$h;
var isObject$2 = isObject$9;
var $toString$1 = toString$a;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var wellKnownSymbol$6 = wellKnownSymbol$i;
var arraySort = arraySort$1;

var ITERATOR$3 = wellKnownSymbol$6('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$2) return global$8[name];
  var descriptor = getOwnPropertyDescriptor$1(global$8, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$8.RegExp;
var TypeError$2 = global$8.TypeError;
var decodeURIComponent = global$8.decodeURIComponent;
var encodeURIComponent = global$8.encodeURIComponent;
var charAt$3 = uncurryThis$9(''.charAt);
var join = uncurryThis$9([].join);
var push$1 = uncurryThis$9([].push);
var replace$3 = uncurryThis$9(''.replace);
var shift = uncurryThis$9([].shift);
var splice = uncurryThis$9([].splice);
var split = uncurryThis$9(''.split);
var stringSlice$5 = uncurryThis$9(''.slice);

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
  var result = replace$3(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$3(result, percentSequence(bytes--), percentDecode);
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
  return replace$3(encodeURIComponent(it), find, replacer);
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
    else this.parseQuery(typeof init == 'string' ? charAt$3(init, 0) === '?' ? stringSlice$5(init, 1) : init : $toString$1(init));
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
      while (!(step = call$a(next, iterator)).done) {
        entryIterator = getIterator$1(anObject$7(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$a(entryNext, entryIterator)).done ||
          (second = call$a(entryNext, entryIterator)).done ||
          !call$a(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push$1(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$3(object, key)) {
      push$1(this.entries, { key: key, value: $toString$1(object[key]) });
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
          push$1(this.entries, {
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
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
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
  if (!DESCRIPTORS$2) this.length = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength$1(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    if (!DESCRIPTORS$2) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    if (!DESCRIPTORS$2) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
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
    if (!found) push$1(entries, { key: key, value: val });
    if (!DESCRIPTORS$2) this.length = entries.length;
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
defineBuiltIn$3(URLSearchParamsPrototype, ITERATOR$3, URLSearchParamsPrototype.entries, { name: 'entries' });

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

$$9({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$7(Headers)) {
  var headersHas = uncurryThis$9(HeadersPrototype.has);
  var headersSet = uncurryThis$9(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$2(init)) {
      var body = init.body;
      var headers;
      if (classof$1(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString$1(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$7(nativeFetch)) {
    $$9({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
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

    $$9({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$9 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$9.bind(apply$2) : function () {
  return call$9.apply(apply$2, arguments);
});

var uncurryThis$8 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
var toString$6 = toString$a;
var requireObjectCoercible$4 = requireObjectCoercible$9;

var charAt$2 = uncurryThis$8(''.charAt);
var charCodeAt = uncurryThis$8(''.charCodeAt);
var stringSlice$4 = uncurryThis$8(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$6(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$4(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$7 = functionUncurryThis;
var toObject = toObject$5;

var floor = Math.floor;
var charAt = uncurryThis$7(''.charAt);
var replace$2 = uncurryThis$7(''.replace);
var stringSlice$3 = uncurryThis$7(''.slice);
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
    switch (charAt(ch, 0)) {
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
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply$1 = functionApply;
var call$8 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$n;
var anObject$6 = anObject$h;
var isCallable$6 = isCallable$o;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var toLength$2 = toLength$4;
var toString$5 = toString$a;
var requireObjectCoercible$3 = requireObjectCoercible$9;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$2 = getMethod$6;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$5 = wellKnownSymbol$i;

var REPLACE = wellKnownSymbol$5('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$6([].concat);
var push = uncurryThis$6([].push);
var stringIndexOf = uncurryThis$6(''.indexOf);
var stringSlice$2 = uncurryThis$6(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
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
      var O = requireObjectCoercible$3(this);
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
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$6(replaceValue);
      if (!functionalReplace) replaceValue = toString$5(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString$5(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
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

const SearchComponentFilter = ({
  placeholder,
  classNameExtra: _classNameExtra = "",
  value,
  onSearch,
  searchPrevious
}) => {
  const history = useHistory();
  const [currentValue, setValue] = useState(value || '');
  const [canSend, setCanSend] = useState(false);
  let _timer;
  useEffect(() => {
    setValue(value || '');
    return () => {
      clearTimeout(_timer);
      setCanSend(false);
    };
  }, [value]);
  useEffect(() => {
    _timer = setTimeout(() => {
      if (canSend) {
        onSearch && onSearch(currentValue);
      }
    }, 1000);
    return () => {
      clearTimeout(_timer);
      setCanSend(false);
    };
  }, [currentValue]);
  const handleValue = e => {
    !canSend && setCanSend(true);
    setValue(e.target.value);
    _timer && clearTimeout(_timer);
  };
  useEffect(() => {
    return () => {
      clearTimeout(_timer);
      setCanSend(false);
      setValue('');
    };
  }, []);
  const handleSearch = e => {
    clearTimeout(_timer);
    onSearch && onSearch(currentValue);
  };
  const handleClear = () => {
    setValue('');
    onSearch && onSearch('');
    global && searchPrevious && history.push(searchPrevious);
  };
  return jsxs("div", Object.assign({
    className: "search-component-filter"
  }, {
    children: [jsx(FiSearch, {
      className: "search-icon"
    }), jsx("input", {
      className: `search-input ${_classNameExtra}`,
      value: currentValue,
      onChange: handleValue,
      onKeyDown: e => e.key === 'Enter' && handleSearch(),
      placeholder: placeholder || "Search products",
      type: "text"
    }), !!currentValue && jsx(AiFillCloseCircle, {
      className: "close-icon",
      onClick: handleClear
    })]
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
      history.push(`/products?s=${s}`);
    } else {
      history.replace(`/products`);
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

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var categoriesClient = new Apis.CategoriesApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

const mappingChildrenCategory = data => {
  return data.map(category => {
    if (category.menu) {
      const menu = mappingChildrenCategory(category.menu);
      return Object.assign(Object.assign({}, category), {
        menu,
        url: `/category/${category.slug}`
      });
    } else {
      return Object.assign(Object.assign({}, category), {
        url: `/category/${category.slug}`
      });
    }
  });
};

const GlobalContext = /*#__PURE__*/createContext({});
const GlobalContextProvider = ({
  children
}) => {
  const [isLoading, setLoader] = useState(false);
  const [categoriesNav, setCategoriesNav] = useState([]);
  const [categories, setCategories] = useState([]);
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
      const categoriesMapped = mappingChildrenCategory(data);
      const menuData = [{
        name: 'Categorías',
        url: '/category',
        submenu: [...categoriesMapped]
      }];
      setCategories(categoriesMapped);
      setCategoriesNav(menuData);
      setLoader(false);
    } catch (error) {
      Ramen.Api.notification.error({
        description: 'Error',
        message: 'We have errors please try again'
      });
    }
  });
  return jsx(GlobalContext.Provider, Object.assign({
    value: {
      isLoading,
      setLoader,
      categories,
      categoriesNav
    }
  }, {
    children: children
  }));
};
const useGlobal = () => useContext(GlobalContext);

const NavLink = ({
  menuData
}) => {
  return jsx("ul", Object.assign({
    className: "nav-link-mobile"
  }, {
    children: menuData.map((link, index) => jsx("li", Object.assign({
      className: "mobile-nav__links"
    }, {
      children: link.submenu ? jsxs(Fragment, {
        children: [jsx(Link, Object.assign({
          className: "mobile-nav__links-text",
          to: link.url
        }, {
          children: jsx("span", {
            children: link.name
          })
        })), jsx("ul", {
          children: link.submenu.map((sublink, subindex) => jsx("li", Object.assign({
            className: "mobile-nav__links__submenu"
          }, {
            children: jsx(Link, Object.assign({
              className: "mobile-nav__links-text",
              to: sublink.url
            }, {
              children: sublink.name
            }))
          }), subindex))
        })]
      }) : jsx(Link, Object.assign({
        className: "mobile-nav__links-text",
        to: link.url
      }, {
        children: link.name
      }))
    }), index))
  }));
};
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    pathname
  } = useLocation();
  const {
    categories
  } = useGlobal();
  const hanldeOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return jsxs("div", Object.assign({
    className: "mobile-nav"
  }, {
    children: [jsx("button", Object.assign({
      onClick: hanldeOpenMenu,
      className: "mobile-nav__button"
    }, {
      children: jsx(GiHamburgerMenu, {
        className: "mobile-nav__button-icon"
      })
    })), jsxs(Ramen.XDrawer, Object.assign({
      size: 's',
      headerType: 'fixed',
      title: 'Menu',
      closable: true,
      placement: "left",
      open: isOpen,
      onClose: () => hanldeOpenMenu(),
      onClickAction: () => hanldeOpenMenu()
    }, {
      children: [jsx(GlobalSearchComponent, {}), jsx(NavLink, {
        menuData: categories
      })]
    }))]
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

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3e %3cdefs%3e %3cclipPath id='clip-path'%3e %3cpath id='Rect%c3%a1ngulo_108' data-name='Rect%c3%a1ngulo 108' style='fill:none' d='M0 0h75v75H0z'/%3e %3c/clipPath%3e %3cstyle%3e .cls-4%7bfill:%23ddd%7d %3c/style%3e %3c/defs%3e %3cg id='dummy-img' transform='translate(-5 -4.89)'%3e %3cg id='Grupo_131' data-name='Grupo 131' transform='translate(5 4.89)'%3e %3cg id='Grupo_130' data-name='Grupo 130' style='clip-path:url(%23clip-path)'%3e %3cpath id='Rect%c3%a1ngulo_107' data-name='Rect%c3%a1ngulo 107' transform='translate(-.313 -.313)' style='fill:white' d='M0 0h75.625v75.625H0z'/%3e %3c/g%3e %3c/g%3e %3cg id='Grupo_132' data-name='Grupo 132' transform='translate(15 14.89)'%3e %3ccircle id='Elipse_1' data-name='Elipse 1' class='cls-4' cx='5.625' cy='5.625' r='5.625' transform='translate(7.5 7.5)'/%3e %3cpath id='Trazado_445' data-name='Trazado 445' class='cls-4' d='M88.558 36.89H40.442A3.47 3.47 0 0 0 37 40.388v31.864a.769.769 0 1 0 1.538 0V40.388a1.92 1.92 0 0 1 1.9-1.936h48.12a1.92 1.92 0 0 1 1.9 1.936v17.805a.769.769 0 1 0 1.538 0V40.388a3.47 3.47 0 0 0-3.438-3.498z' transform='translate(-37 -36.89)'/%3e %3cpath id='Trazado_446' data-name='Trazado 446' class='cls-4' d='m91.43 97.681-11.762-14.51a1.561 1.561 0 0 0-1.211-.579 1.564 1.564 0 0 0-1.211.575l-5.688 6.976-8.694 10.129L60.8 98.5l-5.549-5.36a1.563 1.563 0 0 0-2.283.118l-13.8 16.429-2.07 2.277a1.5 1.5 0 0 0-.1.117v8.086a3.143 3.143 0 0 0 3.143 3.143h48.716A3.143 3.143 0 0 0 92 120.167V98.4l-.413-.487a1.559 1.559 0 0 0-.157-.232z' transform='translate(-37 -68.31)'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var call$7 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$5 = anObject$h;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var toLength$1 = toLength$4;
var toString$4 = toString$a;
var requireObjectCoercible$2 = requireObjectCoercible$9;
var getMethod$1 = getMethod$6;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$7(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$4(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$5(this);
      var S = toString$4(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$4(result[0]);
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
    });
  }
}

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$5 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$9;
var toString$3 = toString$a;
var whitespaces$1 = whitespaces$2;

var replace$1 = uncurryThis$5(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$3(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$1(string, ltrim, '');
    if (TYPE & 2) string = replace$1(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};

var global$7 = global$n;
var fails$3 = fails$n;
var uncurryThis$4 = functionUncurryThis;
var toString$2 = toString$a;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var $parseInt$1 = global$7.parseInt;
var Symbol$1 = global$7.Symbol;
var ITERATOR$2 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$1 = uncurryThis$4(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$2 && !fails$3(function () { $parseInt$1(Object(ITERATOR$2)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString$2(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$8 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$8({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis$3 = functionUncurryThis;
var toLength = toLength$4;
var toString$1 = toString$a;
var $repeat = stringRepeat;
var requireObjectCoercible = requireObjectCoercible$9;

var repeat = uncurryThis$3($repeat);
var stringSlice$1 = uncurryThis$3(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString$1(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString$1(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice$1(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

var stringPad = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};

// https://github.com/zloirock/core-js/issues/280
var userAgent$3 = engineUserAgent;

var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent$3);

var $$7 = _export;
var $padStart = stringPad.start;
var WEBKIT_BUG = stringPadWebkitBug;

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$$7({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var call$6 = functionCall;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$2(R, 'flags') && isPrototypeOf$2(RegExpPrototype$1, R)
    ? call$6(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn$2 = defineBuiltIn$9;
var anObject$4 = anObject$h;
var $toString = toString$a;
var fails$2 = fails$n;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$2(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$4(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
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

const ProductCard = ({
  productData
}) => {
  const {
    addToCart
  } = useCartContext();
  const {
    success
  } = Ramen.Api.notification;
  const history = useHistory();
  const handleOpenProduct = () => {
    history.push(`/products/detail/${productData.sku}`);
  };
  const imageOnErrorHandler = event => {
    console.log('onError');
    event.currentTarget.src = img$2;
  };
  const handleAddToCart = e => {
    e.stopPropagation();
    addToCart(productData, 1);
    success({
      description: 'Producto agregado a tu cotización.'
    });
  };
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
        src: productData.urlImage || img$2,
        alt: productData.name,
        onError: imageOnErrorHandler
      })
    })), jsx("div", Object.assign({
      className: "product-card__content"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        padding: 'm'
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: "vertical",
          verticalAlign: "center",
          padding: 'm'
        }, {
          children: [jsx("h4", Object.assign({
            className: "product-card__sku"
          }, {
            children: productData === null || productData === void 0 ? void 0 : productData.brandName
          })), jsx("h4", Object.assign({
            className: "product-card__name"
          }, {
            children: productData === null || productData === void 0 ? void 0 : productData.name
          })), jsxs("div", Object.assign({
            className: "product-card__sku"
          }, {
            children: ["SKU ", !!(productData === null || productData === void 0 ? void 0 : productData.sku) ? Number(productData === null || productData === void 0 ? void 0 : productData.sku) : '-', ' ']
          })), jsxs("h4", Object.assign({
            className: "product-card__sku"
          }, {
            children: [!!(productData === null || productData === void 0 ? void 0 : productData.price) ? NumberFormatter$1.toCurrency(Number(productData === null || productData === void 0 ? void 0 : productData.price)) : '-', ' ']
          })), jsx("p", {
            children: "Precio referencial"
          })]
        })), jsx(Ramen.XButton, {
          onClick: handleAddToCart,
          type: "outline",
          text: "A\u00F1adir a cotizaci\u00F3n"
        })]
      }))
    }))]
  }));
};

const Input = props => {
  const {
    className
  } = props;
  const [isFocus, setIsFocus] = useState('false');
  const handleShowError = () => {
    setIsFocus('true');
  };
  return jsx("input", Object.assign({
    "is-focus": isFocus,
    onBlur: handleShowError,
    type: 'text'
  }, props, {
    className: `input-default ${className}`
  }));
};

const ShopCartItem = ({
  item
}) => {
  var _a, _b, _c, _d;
  const {
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity
  } = useCartContext();
  useCallback(e => {
    updateQuantity(item, Number(e.target.value));
  }, [item, updateQuantity]);
  const onChange = useCallback(value => {
    updateQuantity(item, Number(value));
  }, [item, updateQuantity]);
  const discountPrice = (item.price || 0).toFixed(2);
  const imageOnErrorHandler = event => {
    console.log('onError');
    event.currentTarget.src = img$2;
  };
  return jsxs("div", Object.assign({
    className: 'shop-cart__item'
  }, {
    children: [jsx("div", Object.assign({
      className: 'shop-cart__item__counter'
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: 'horizontal',
        verticalAlign: 'center',
        gap: 'xxs'
      }, {
        children: [jsx(Ramen.XCounter, {
          min: 1,
          max: 100000,
          onChange: onChange,
          count: item.quantity
        }), jsx(Ramen.XButtonIcon, {
          type: "clear",
          size: 'l',
          icon: 'trash-2-outline',
          onClick: () => deleteFromCart(item)
        })]
      }))
    })), jsx("img", {
      className: 'shop-cart__item__image',
      loading: 'lazy',
      src: item.urlImage,
      onError: imageOnErrorHandler,
      alt: item.name
    }), jsxs("div", Object.assign({
      className: 'shop-cart__item__content'
    }, {
      children: [jsxs("p", {
        children: [" ", ((_a = item === null || item === void 0 ? void 0 : item.brandName) === null || _a === void 0 ? void 0 : _a.length) >= 30 ? `${(_b = item === null || item === void 0 ? void 0 : item.brandName) === null || _b === void 0 ? void 0 : _b.slice(0, 35)} ...` : item.brandName]
      }), jsx(Link, Object.assign({
        to: `/products/detail/${item.sku}`,
        className: 'shop-cart__item__name'
      }, {
        children: ((_c = item === null || item === void 0 ? void 0 : item.name) === null || _c === void 0 ? void 0 : _c.length) >= 30 ? `${(_d = item === null || item === void 0 ? void 0 : item.name) === null || _d === void 0 ? void 0 : _d.slice(0, 35)} ...` : item.name
      })), jsxs("p", Object.assign({
        className: 'shop-cart__item__price'
      }, {
        children: [!!discountPrice ? NumberFormatter$1.toCurrency(Number(discountPrice)) : '-', ' ']
      }))]
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

const LoaderScreen = () => {
  const {
    isLoading
  } = useGlobal();
  return jsx("div", Object.assign({
    className: `loading-screen ${isLoading ? 'show' : ''}`
  }, {
    children: jsx(Loader, {
      color: 'white'
    })
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
  console.log(elementRef);
  const element = document.getElementById('refBody');
  useEffect(() => {
    console.log(element);
    element && element.addEventListener('scroll', e => {
      let element = e.target;
      const scrolled = element.scrollTop;
      if (scrolled >= 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  const handleGoToTop = () => {
    element && element.scrollTo(0, 0);
  };
  return jsx(Button, Object.assign({
    onClick: handleGoToTop,
    className: `elevator-button ${isVisible ? 'visible' : ''}`
  }, {
    children: jsx(IoIosArrowUp, {})
  }));
};

var img$1 = "data:image/png;base64,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";

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
      src: emptyImage || img$1
    }), jsxs(Ramen.XText, {
      children: [emptyMessage || 'Oops! tu cotización esta vacia', " "]
    }), !!descriptionMessage && jsxs(Ramen.XText, Object.assign({
      fontSize: 8
    }, {
      children: [descriptionMessage || 'Oops! tu cotización esta vacia', " "]
    }))]
  }));
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
    pathname
  } = useLocation();
  const history = useHistory();
  const {
    getStorage
  } = useLocalStorage();
  const {
    width
  } = useWindowSize();
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
  useEffect(() => {
    setIsOpenModal(false);
  }, [pathname]);
  return jsx(Ramen.XDrawer, Object.assign({
    size: 'm',
    headerType: 'fixed',
    title: titleModal || 'Mi cotización',
    closable: true,
    open: isOpenModal,
    onClose: () => setIsOpenModal(!isOpenModal),
    onClickAction: () => setIsOpenModal(!isOpenModal)
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      gap: "s",
      verticalAlign: "between"
    }, {
      children: [jsx("div", Object.assign({
        className: "cart-wrapper__body"
      }, {
        children: cart.length <= 0 ? jsx(EmptyResultsComponent, {
          emptyImage: img$1,
          emptyMessage: emptyModalMessage
        }) : jsx(Ramen.XList, {
          dataSource: cart,
          renderItem: (item, i) => jsx(ShopCartItem$1, {
            showPrices: showPrices,
            item: item
          }, i)
        })
      })), jsx(Ramen.XDivider, {}), jsxs(Ramen.XBox, Object.assign({
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
          }), jsxs(Ramen.XText, Object.assign({
            fontSize: 8
          }, {
            children: [totalPrice, " $"]
          }))]
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: width < 450 ? 'vertical' : 'horizontal',
          gap: "s"
        }, {
          children: [jsx(Ramen.XButton, {
            type: "outline",
            text: "Limpiar carrito",
            onClick: () => clearCart()
          }), jsx(Ramen.XButton, {
            type: "solid",
            text: "Ir la cotizaci\u00F3n",
            onClick: () => history.push('/cart')
          })]
        }))]
      }))]
    }))
  }));
};
var ModalCart$1 = /*#__PURE__*/memo(ModalCart);

var img = "data:image/svg+xml,%3csvg width='59' height='59' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M47.0178 5.81591C47.7185 5.39549 48.5594 5.1152 49.4002 5.1152C51.9228 5.1152 53.9549 7.14727 53.9549 9.66983C53.9549 10.5107 53.7446 11.3515 53.3242 12.0523C56.8979 16.9572 59 22.9834 59 29.5C59 45.8266 45.8266 59 29.5 59C13.2435 59 0 45.8266 0 29.5C0 13.2435 13.1734 0 29.5 0C36.0867 0.0700713 42.1128 2.24228 47.0178 5.81591Z' fill='white'/%3e%3cpath d='M51.0127 14.0142C50.5222 14.2245 49.9617 14.2945 49.4011 14.2945C46.8785 14.2945 44.8465 12.2625 44.8465 9.7399C44.8465 9.17933 44.9866 8.61876 45.1267 8.12826C40.7823 4.97505 35.3868 3.08313 29.5709 3.08313C14.926 3.08313 3.01392 14.9252 3.01392 29.5701C3.01392 44.215 14.856 56.057 29.5009 56.057C44.2158 56.1271 56.0579 44.215 56.0579 29.5701C56.0579 23.7542 54.1659 18.4287 51.0127 14.0142Z' fill='%23DF1122'/%3e%3cpath d='M51.0113 14.0142C50.5208 14.2245 49.9602 14.2945 49.3996 14.2945C46.8771 14.2945 44.845 12.2625 44.845 9.7399C44.845 9.17933 44.9151 8.61876 45.1253 8.12826C40.7809 4.97505 35.3854 3.08313 29.5695 3.08313C14.9246 3.08313 3.08252 14.9252 3.08252 29.5701C3.08252 44.215 14.9246 56.057 29.5695 56.057C44.2143 56.057 56.0564 44.215 56.0564 29.5701C56.0564 23.7542 54.1645 18.4287 51.0113 14.0142Z' stroke='%23DF1122' stroke-width='0.0229017' stroke-miterlimit='3.864'/%3e%3cpath d='M46.9475 9.67003C46.9475 8.2686 48.0686 7.14746 49.4701 7.14746C50.8715 7.14746 51.9926 8.2686 51.9926 9.67003C51.9926 11.0715 50.8715 12.1926 49.4701 12.1926C48.0686 12.1926 46.9475 11.0715 46.9475 9.67003Z' fill='%23DF1122'/%3e%3cpath d='M49.401 12.1926C50.7941 12.1926 51.9235 11.0632 51.9235 9.67003C51.9235 8.27685 50.7941 7.14746 49.401 7.14746C48.0078 7.14746 46.8784 8.27685 46.8784 9.67003C46.8784 11.0632 48.0078 12.1926 49.401 12.1926Z' stroke='%23DF1122' stroke-width='0.021184' stroke-miterlimit='3.864'/%3e%3cpath d='M52.9726 23.1937L47.2968 38.189H44.0035L46.1757 33.284L42.2517 23.1937H45.5451L47.6472 29.7103H47.7873L49.7493 23.1937H52.9726Z' fill='%23FDF737'/%3e%3cpath d='M41.7634 30.7614C41.7634 33.1439 39.1707 34.0548 36.6482 34.0548C34.1957 34.0548 31.603 33.1439 31.603 30.7614H34.8263C34.8263 31.5322 35.8774 31.7424 36.6482 31.7424C37.4189 31.7424 38.3999 31.5322 38.3999 30.8315C38.3999 29.9206 37.2087 29.7804 35.2467 29.2899C33.2847 28.7994 31.8132 27.8885 31.8132 25.9966C31.8132 23.6142 34.1256 22.7733 36.5781 22.7733C39.0306 22.7733 41.2729 23.6142 41.2729 25.9265H38.0496C38.0496 25.2959 37.2087 25.0156 36.5781 25.0156C35.8774 25.0156 35.1066 25.1557 35.1066 25.8564C35.1066 26.7674 36.508 26.8374 38.0496 27.2579C40.0816 27.8885 41.7634 28.6593 41.7634 30.7614Z' fill='%23FDF737'/%3e%3cpath d='M26.7674 28.4485C26.7674 27.047 25.9966 25.7157 24.1748 25.7157C22.3529 25.7157 21.7924 27.1872 21.7924 28.4485C21.7924 29.7798 22.4931 31.1812 24.3149 31.1812C26.2069 31.1812 26.7674 29.7098 26.7674 28.4485ZM29.8506 33.7038H26.8375V32.5126H26.6974C26.2069 33.5637 25.1558 34.1242 23.6142 34.1242C20.9515 34.1242 18.6392 31.952 18.6392 28.5185C18.6392 25.015 20.7413 22.9128 23.404 22.9128C24.8755 22.9128 26.1368 23.5435 26.6974 24.4544H26.8375V23.2632H29.9206L29.8506 33.7038Z' fill='%23FDF737'/%3e%3cpath d='M38.2576 38.259C29.9191 37.1378 21.5806 37.0678 8.61743 37.9787L8.75757 37.4181C21.7208 36.297 31.9512 35.6663 37.4868 35.8766C40.7801 35.9466 41.7611 36.2269 41.7611 37.4181C41.8312 38.6093 40.3597 38.5393 38.2576 38.259Z' fill='%23FDF737'/%3e%3cpath d='M13.6624 27.3273C13.5924 26.6967 13.242 25.4354 11.4902 25.4354C9.87858 25.4354 9.38808 26.7668 9.31801 27.3273H13.6624ZM16.8857 28.3784C16.8857 28.7988 16.8156 29.4295 16.8156 29.4295H9.24794C9.31801 30.6207 10.2289 31.5316 11.4902 31.5316C12.4011 31.5316 13.0318 31.1812 13.3121 30.5506H16.6054C16.3251 32.0922 14.9938 34.0542 11.5603 34.0542C8.26694 34.0542 6.02466 31.4615 6.02466 28.3784C6.02466 25.2252 8.05673 22.9128 11.3501 22.9128C14.7135 22.9128 16.8857 25.2252 16.8857 28.3784Z' fill='%23FDF737'/%3e%3cpath d='M16.3247 44.8457C16.4649 44.7056 16.6751 44.5654 16.8853 44.4954C17.0955 44.4253 17.3057 44.3552 17.5159 44.3552C17.7262 44.3552 17.9364 44.4253 18.1466 44.4954C18.3568 44.5654 18.567 44.7056 18.7071 44.8457L18.9174 45.0559L18.4269 45.5464L18.2166 45.2662C18.1466 45.1961 18.0064 45.126 17.8663 45.0559C17.7262 44.9859 17.586 44.9859 17.5159 44.9859C17.3758 44.9859 17.2357 44.9859 17.1656 45.0559C17.0254 45.126 16.9554 45.1961 16.8152 45.2662C16.7452 45.3362 16.6751 45.4764 16.605 45.6165C16.5349 45.7567 16.5349 45.8968 16.5349 45.9669C16.5349 46.107 16.5349 46.2472 16.605 46.3172C16.6751 46.4574 16.7452 46.5274 16.8152 46.6676C17.0254 46.8778 17.2357 46.9479 17.5159 46.9479C17.6561 46.9479 17.7962 46.9479 17.8663 46.8778C18.0064 46.8077 18.0765 46.7376 18.2166 46.6676L18.4269 46.4574L18.9174 46.9479L18.7071 47.1581C18.567 47.2982 18.3568 47.4384 18.1466 47.5084C17.9364 47.5785 17.7262 47.6486 17.5159 47.6486C17.3057 47.6486 17.0955 47.5785 16.8853 47.5084C16.6751 47.4384 16.5349 47.2982 16.3247 47.1581C16.1846 47.0179 16.0444 46.8077 15.9744 46.5975C15.9043 46.3873 15.8342 46.1771 15.8342 45.9669C15.8342 45.7567 15.9043 45.5464 15.9744 45.3362C16.0444 45.1961 16.1846 44.9859 16.3247 44.8457Z' fill='white'/%3e%3cpath d='M20.1099 45.2665C19.8997 45.4767 19.8296 45.6869 19.8296 45.9672C19.8296 46.1074 19.8296 46.2475 19.8997 46.3877C19.9698 46.3176 20.0398 46.2475 20.18 46.1074C20.3201 45.9672 20.4603 45.8271 20.5303 45.757C20.6705 45.6169 20.8106 45.4767 20.9508 45.3366C21.0909 45.1964 21.161 45.1264 21.231 45.0563C21.0208 44.9862 20.8807 44.9162 20.6705 44.9862C20.4603 45.0563 20.25 45.1264 20.1099 45.2665ZM21.7215 46.4577L22.212 46.9482L22.0018 47.1584C21.8617 47.2986 21.6515 47.4387 21.4413 47.5088C21.231 47.5789 21.0208 47.6489 20.8106 47.6489C20.6004 47.6489 20.3902 47.5789 20.18 47.5088C19.9698 47.4387 19.8296 47.2986 19.6194 47.1584C19.4793 47.0183 19.3391 46.8081 19.269 46.5979C19.199 46.3877 19.1289 46.1774 19.1289 45.9672C19.1289 45.757 19.199 45.5468 19.269 45.3366C19.3391 45.1264 19.4793 44.9862 19.6194 44.776C19.7595 44.6359 19.9698 44.4957 20.18 44.4257C20.3902 44.3556 20.6004 44.2855 20.8106 44.2855C21.0208 44.2855 21.231 44.3556 21.4413 44.4257C21.6515 44.4957 21.8617 44.6359 22.0018 44.776L22.212 44.9862L20.3902 46.8081C20.6004 46.8782 20.7405 46.9482 20.9508 46.8782C21.161 46.8782 21.3712 46.738 21.5113 46.5979L21.7215 46.4577Z' fill='white'/%3e%3cpath d='M22.4236 45.9669C22.4236 45.7567 22.4937 45.5464 22.5637 45.3362C22.6338 45.126 22.7739 44.9859 22.9141 44.8457C23.0542 44.7056 23.2644 44.5654 23.4747 44.4954C23.6849 44.4253 23.8951 44.3552 24.1053 44.3552C24.3155 44.3552 24.5257 44.4253 24.7359 44.4954C24.9461 44.5654 25.0863 44.7056 25.2965 44.8457C25.4366 44.9859 25.5768 45.1961 25.6469 45.3362C25.7169 45.5464 25.787 45.7567 25.787 45.9669V47.6486H25.1564V45.9669C25.1564 45.8267 25.1564 45.6866 25.0863 45.6165C25.0162 45.4764 24.9461 45.4063 24.8761 45.2662C24.806 45.1961 24.6659 45.126 24.5257 45.0559C24.3856 44.9859 24.2454 44.9859 24.1053 44.9859C23.9652 44.9859 23.825 44.9859 23.6849 45.0559C23.5447 45.126 23.4747 45.1961 23.4046 45.2662C23.3345 45.3362 23.2644 45.4764 23.1944 45.6165C23.1243 45.7567 23.1243 45.8267 23.1243 45.9669V47.6486H22.4236V45.9669Z' fill='white'/%3e%3cpath d='M26.4165 44.8457C26.5567 44.7056 26.7669 44.5654 26.9771 44.4954C27.1873 44.4253 27.3975 44.3552 27.6077 44.3552C27.818 44.3552 28.0282 44.4253 28.2384 44.4954C28.4486 44.5654 28.6588 44.7056 28.799 44.8457L29.0092 45.0559L28.5187 45.5464L28.3085 45.3362C28.2384 45.2662 28.0982 45.1961 27.9581 45.126C27.818 45.0559 27.6778 45.0559 27.6077 45.0559C27.4676 45.0559 27.3275 45.0559 27.2574 45.126C27.1172 45.1961 27.0472 45.2662 26.907 45.3362C26.837 45.4063 26.7669 45.5464 26.6968 45.6866C26.6267 45.8267 26.6267 45.9669 26.6267 46.0369C26.6267 46.1771 26.6267 46.3172 26.6968 46.3873C26.7669 46.5274 26.837 46.5975 26.907 46.7376C27.1172 46.9479 27.3275 47.0179 27.6077 47.0179C27.7479 47.0179 27.888 47.0179 27.9581 46.9479C28.0982 46.8778 28.1683 46.8077 28.3085 46.7376L28.5187 46.5274L29.0092 47.0179L28.7289 47.1581C28.5887 47.2982 28.3785 47.4384 28.1683 47.5084C27.9581 47.5785 27.7479 47.6486 27.5377 47.6486C27.3275 47.6486 27.1172 47.5785 26.907 47.5084C26.6968 47.4384 26.5567 47.2982 26.3465 47.1581C26.2063 47.0179 26.0662 46.8077 25.9961 46.5975C25.926 46.3873 25.856 46.1771 25.856 45.9669C25.856 45.7567 25.926 45.5464 25.9961 45.3362C26.1362 45.1961 26.2764 44.9859 26.4165 44.8457Z' fill='white'/%3e%3cpath d='M29.8499 45.9669C29.8499 46.107 29.8499 46.2471 29.92 46.3873C29.99 46.5274 30.0601 46.5975 30.1302 46.7376C30.2002 46.8077 30.3404 46.8778 30.4805 46.9479C30.6207 47.0179 30.7608 47.0179 30.9009 47.0179C31.0411 47.0179 31.1812 47.0179 31.3214 46.9479C31.4615 46.8778 31.5316 46.8077 31.6717 46.7376C31.7418 46.6676 31.8119 46.5274 31.8819 46.3873C31.952 46.2471 31.952 46.107 31.952 45.9669C31.952 45.8267 31.952 45.6866 31.8819 45.6165C31.8119 45.4764 31.7418 45.4063 31.6717 45.2662C31.6017 45.1961 31.4615 45.126 31.3214 45.0559C31.1812 44.9859 31.0411 44.9859 30.9009 44.9859C30.7608 44.9859 30.6207 44.9859 30.4805 45.0559C30.3404 45.126 30.2703 45.1961 30.1302 45.2662C30.0601 45.3362 29.99 45.4764 29.92 45.6165C29.92 45.7567 29.8499 45.8267 29.8499 45.9669ZM29.2192 45.9669C29.2192 45.7567 29.2893 45.5464 29.3594 45.3362C29.4295 45.126 29.5696 44.9859 29.7097 44.8457C29.8499 44.7056 30.0601 44.5654 30.2703 44.4954C30.4805 44.4253 30.6907 44.3552 30.9009 44.3552C31.1112 44.3552 31.3214 44.4253 31.5316 44.4954C31.7418 44.5654 31.8819 44.7056 32.0922 44.8457C32.2323 44.9859 32.3724 45.1961 32.4425 45.3362C32.5126 45.5464 32.5827 45.7567 32.5827 45.9669C32.5827 46.1771 32.5126 46.3873 32.4425 46.5975C32.3724 46.8077 32.2323 46.9479 32.0922 47.1581C31.952 47.2982 31.7418 47.4384 31.5316 47.5084C31.3214 47.5785 31.1112 47.6486 30.9009 47.6486C30.6907 47.6486 30.4805 47.5785 30.2703 47.5084C30.0601 47.4384 29.92 47.2982 29.7097 47.1581C29.5696 47.0179 29.4295 46.8077 29.3594 46.5975C29.2893 46.4574 29.2192 46.2472 29.2192 45.9669Z' fill='white'/%3e%3cpath d='M35.6659 44.3552V44.9859H33.7039C33.6338 44.9859 33.5638 44.9859 33.4937 45.0559C33.4236 45.126 33.4236 45.1961 33.4236 45.2662C33.4236 45.3362 33.4236 45.4063 33.4937 45.4764C33.5638 45.5464 33.6338 45.5464 33.7039 45.5464H35.0353C35.1754 45.5464 35.3155 45.5464 35.3856 45.6165C35.5258 45.6866 35.5958 45.7566 35.6659 45.8267C35.736 45.8968 35.806 46.0369 35.8761 46.1771C35.9462 46.3172 35.9462 46.3873 35.9462 46.5274C35.9462 46.6676 35.9462 46.8077 35.8761 46.9479C35.806 47.088 35.736 47.1581 35.6659 47.2982C35.5958 47.3683 35.4557 47.4384 35.3856 47.5084C35.2455 47.5785 35.1053 47.5785 35.0353 47.5785H33.0733V46.9479H35.0353C35.1053 46.9479 35.2455 46.9479 35.2455 46.8778C35.3155 46.8077 35.3155 46.7377 35.3155 46.6676C35.3155 46.5975 35.3155 46.5274 35.2455 46.4574C35.1754 46.3873 35.1053 46.3873 35.0353 46.3873H33.7039C33.5638 46.3873 33.4236 46.3873 33.2835 46.3172C33.1433 46.2472 33.0733 46.1771 33.0032 46.107C32.9331 46.0369 32.863 45.8968 32.793 45.8267C32.7229 45.6866 32.7229 45.5464 32.7229 45.4063C32.7229 45.2662 32.7229 45.126 32.793 45.0559C32.863 44.9158 32.9331 44.8457 33.0032 44.7056C33.0733 44.6355 33.2134 44.5654 33.2835 44.4954C33.4236 44.4253 33.5638 44.4253 33.7039 44.4253H35.6659V44.3552Z' fill='white'/%3e%3cpath d='M39.5211 44.3552V45.9669C39.5211 46.1771 39.4511 46.3873 39.381 46.5975C39.3109 46.8077 39.1708 46.9479 39.0306 47.1581C38.8905 47.2982 38.6803 47.4384 38.4701 47.5084C38.2599 47.5785 38.0496 47.6486 37.8394 47.6486C37.6292 47.6486 37.419 47.5785 37.2088 47.5084C36.9986 47.4384 36.8584 47.2982 36.6482 47.1581C36.5081 47.0179 36.3679 46.8077 36.2979 46.5975C36.2278 46.3873 36.1577 46.1771 36.1577 45.9669V44.3552H36.7884V45.9669C36.7884 46.107 36.7884 46.2471 36.8584 46.3873C36.9285 46.5274 36.9986 46.5975 37.0686 46.7376C37.1387 46.8077 37.2789 46.8778 37.419 46.9479C37.5591 47.0179 37.6993 47.0179 37.8394 47.0179C37.9796 47.0179 38.1197 47.0179 38.2599 46.9479C38.4 46.8778 38.4701 46.8077 38.6102 46.7376C38.6803 46.6676 38.7504 46.5274 38.8204 46.3873C38.8905 46.2471 38.8905 46.107 38.8905 45.9669V44.3552H39.5211Z' fill='white'/%3e%3cpath d='M41.3424 46.9474C41.4825 46.9474 41.6226 46.9474 41.6927 46.8774C41.8329 46.8073 41.9029 46.7372 41.973 46.6671C42.0431 46.5971 42.1131 46.4569 42.1832 46.3168C42.2533 46.1766 42.2533 46.0365 42.2533 45.8964V44.9154H41.3424C41.2022 44.9154 41.0621 44.9154 40.9219 44.9854C40.7818 45.0555 40.7117 45.1256 40.5716 45.1956C40.5015 45.2657 40.4314 45.4059 40.3614 45.546C40.2913 45.6861 40.2913 45.7562 40.2913 45.8964C40.2913 46.0365 40.2913 46.1766 40.3614 46.3168C40.4314 46.4569 40.5015 46.527 40.5716 46.6671C40.6416 46.7372 40.7818 46.8073 40.9219 46.8774C41.0621 46.9474 41.2022 46.9474 41.3424 46.9474ZM43.0241 43.0234V45.9664C43.0241 46.1766 42.954 46.3869 42.8839 46.5971C42.8138 46.8073 42.6737 46.9474 42.5336 47.1576C42.3934 47.2978 42.1832 47.4379 42.0431 47.508C41.8329 47.5781 41.6226 47.6481 41.4124 47.6481C41.2022 47.6481 40.992 47.5781 40.7818 47.508C40.5716 47.4379 40.4314 47.2978 40.2212 47.1576C40.0811 47.0175 39.9409 46.8073 39.8709 46.5971C39.8008 46.3869 39.7307 46.1766 39.7307 45.9664C39.7307 45.7562 39.8008 45.546 39.8709 45.3358C39.9409 45.1256 40.0811 44.9854 40.2212 44.8453C40.3614 44.7051 40.5716 44.565 40.7818 44.4949C40.992 44.4249 41.2022 44.3548 41.4124 44.3548H42.3934V43.0234H43.0241Z' fill='white'/%3e%3c/svg%3e";

const Header = () => {
  const [show, setShow] = useState(false);
  const {
    width
  } = useWindowSize();
  const {
    categoriesNav
  } = useGlobal();
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
  return jsx("div", Object.assign({
    className: `header-container ${show ? 'sticky' : ''}`
  }, {
    children: jsxs("div", Object.assign({
      className: `header ${show ? 'sticky' : ''}`
    }, {
      children: [jsx(MobileNav, {}), jsxs("div", Object.assign({
        className: "header-left"
      }, {
        children: [jsx(Link, Object.assign({
          to: "/"
        }, {
          children: jsx("img", {
            className: "header-logo",
            src: img,
            alt: "logo of website"
          })
        })), jsx(Nav$1, {
          links: categoriesNav
        }), width > 715 && jsx("div", Object.assign({
          style: {
            width: '48rem'
          }
        }, {
          children: jsx(GlobalSearchComponent, {})
        }))]
      })), jsx("div", Object.assign({
        className: "header-right"
      }, {
        children: jsx(ShopCart$1, {})
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

var $$6 = _export;
var DESCRIPTORS$1 = descriptors;
var global$6 = global$n;
var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$5 = isCallable$o;
var isPrototypeOf$1 = objectIsPrototypeOf;
var toString = toString$a;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$6.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS$1 && isCallable$5(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
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
  var replace = uncurryThis$2(''.replace);
  var stringSlice = uncurryThis$2(''.slice);

  defineBuiltInAccessor$1(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$6({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var productsClient = new Apis.ProductsApi({
  baseURL: 'https://api.staging.cencox.xyz/ebisu/api-bff'
});

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
      alt: ''
    }, slectedImage), jsx("div", Object.assign({
      className: 'product-slider__images'
    }, {
      children: jsx(Swiper, Object.assign({
        direction: 'horizontal',
        breakpoints: {
          990: {
            direction: 'vertical',
            spaceBetween: 10,
            slidesPerView: 3
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
            className: `product-slider__images-image ${image === slectedImage ? 'active-slide' : ''}`
          })
        }, i))
      }))
    }))]
  }));
};

const Footer = () => {
  return jsx("footer", Object.assign({
    className: 'footer'
  }, {
    children: jsx("div", Object.assign({
      className: 'footer__content'
    }, {
      children: jsx("h4", Object.assign({
        className: 'footer__title'
      }, {
        children: "Copyright \u00A9 2023 Cencosud - Easy"
      }))
    }))
  }));
};

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var wellKnownSymbol$4 = wellKnownSymbol$i;
var DESCRIPTORS = descriptors;

var SPECIES$2 = wellKnownSymbol$4('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var uncurryThis$1 = functionUncurryThis;
var fails$1 = fails$n;
var isCallable$4 = isCallable$o;
var classof = classof$5;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$1(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
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
var isConstructor$1 = !construct || fails$1(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$1 = tryToString$4;

var $TypeError$2 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$2(tryToString$1(argument) + ' is not a constructor');
};

var anObject$3 = anObject$h;
var aConstructor = aConstructor$1;
var isNullOrUndefined = isNullOrUndefined$7;
var wellKnownSymbol$3 = wellKnownSymbol$i;

var SPECIES$1 = wellKnownSymbol$3('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$3(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject$3(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var uncurryThis = functionUncurryThis;

var arraySlice$1 = uncurryThis([].slice);

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$5 = global$n;
var apply = functionApply;
var bind$3 = functionBindContext;
var isCallable$3 = isCallable$o;
var hasOwn = hasOwnProperty_1;
var fails = fails$n;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$2;
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

fails(function () {
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
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$5.addEventListener &&
    isCallable$3(global$5.postMessage) &&
    !global$5.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
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

var global$4 = global$n;
var bind$2 = functionBindContext;
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
var notify$1, toggle, node, promise, then;

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
    macrotask = bind$2(macrotask, global$4);
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

var global$3 = global$n;

var promiseNativeConstructor = global$3.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$2 = global$n;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$2 = isCallable$o;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$2 = wellKnownSymbol$i;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$2('species');
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

var aCallable$3 = aCallable$9;

var $TypeError$1 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$1('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$3(resolve);
  this.reject = aCallable$3(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$5 = _export;
var IS_NODE = engineIsNode;
var global$1 = global$n;
var call$5 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$9;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$4;
var setSpecies = setSpecies$1;
var aCallable$2 = aCallable$9;
var isCallable$1 = isCallable$o;
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
  return isObject$1(it) && isCallable$1(then = it.then) ? then : false;
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
    global$1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$5(task, global$1, function () {
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
  call$5(task, global$1, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
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
    aCallable$2(executor);
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
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
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

$$5({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var wellKnownSymbol$1 = wellKnownSymbol$i;
var Iterators = iterators;

var ITERATOR$1 = wellKnownSymbol$1('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
};

var call$4 = functionCall;
var anObject$2 = anObject$h;
var getMethod = getMethod$6;

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
var anObject$1 = anObject$h;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$4;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var iteratorClose = iteratorClose$1;

var $TypeError = TypeError;

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
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
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

var wellKnownSymbol = wellKnownSymbol$i;

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

var $$4 = _export;
var call$2 = functionCall;
var aCallable$1 = aCallable$9;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
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

var $$3 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable = isCallable$o;
var defineBuiltIn = defineBuiltIn$9;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$3({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
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

var $$2 = _export;
var call$1 = functionCall;
var aCallable = aCallable$9;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$2({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
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

var $$1 = _export;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$1({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject = anObject$h;
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

var $ = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

const Home = () => {
  const NewProduct = /*#__PURE__*/lazy(() => import('./NewProduct.js'));
  const Container = /*#__PURE__*/lazy(() => Promise.resolve().then(function () { return Container$1; }));
  return jsx(Fragment, {
    children: jsx(Suspense, Object.assign({
      fallback: jsx("h2", {
        children: "loading"
      })
    }, {
      children: jsx(Container, {
        children: jsx(NewProduct, {})
      })
    }))
  });
};

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

const Product = () => {
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
  const handleAddToCart = () => {
    if (+values.quantity >= 1 && (product === null || product === void 0 ? void 0 : product.inStock)) {
      if (values.quantity > 1) {
        updateQuantity(product, +values.quantity);
      } else {
        addToCart(product, +values.quantity);
      }
      success({
        description: 'Producto agregado a tu cotización.'
      });
    } else {
      error({
        message: 'make sure put number in quantity input',
        description: 'cant add product to cart'
      });
    }
  };
  const fetchProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    setProduct(null);
    const {
      data: productData
    } = yield productsClient.getProducts({
      store: "E518",
      sku: id
    });
    const data = productData[0];
    if (!data) {
      history.push('/products');
      error({
        message: 'product not found',
        description: 'make sure enter correct product id in url'
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
  const {
    handleChange,
    handleSubmit,
    values
  } = useForm(handleAddToCart, {
    quantity: 1
  });
  if (!product) {
    return jsxs(Container, {
      children: [jsxs("div", Object.assign({
        className: 'product-skeleton-loading'
      }, {
        children: [jsx("section", Object.assign({
          className: 'product-skeleton-loading__left'
        }, {
          children: jsx("div", {
            className: 'product-skeleton-loading__left__image'
          })
        })), jsxs("section", Object.assign({
          className: 'product-skeleton-loading__right'
        }, {
          children: [jsx("div", {
            className: 'product-skeleton-loading__right__title'
          }), jsx("div", {
            className: 'product-skeleton-loading__right__date'
          }), jsx("div", {
            className: 'product-skeleton-loading__right__price'
          }), jsxs("section", Object.assign({
            className: 'product-skeleton-loading__right__buy'
          }, {
            children: [jsx("div", {
              className: 'product-skeleton-loading__right__buy__text'
            }), jsx("div", {
              className: 'product-skeleton-loading__right__buy__button'
            })]
          })), jsxs("section", Object.assign({
            className: 'product-skeleton-loading__right__buy'
          }, {
            children: [jsx("div", {
              className: 'product-skeleton-loading__right__buy__text'
            }), jsx("div", {
              className: 'product-skeleton-loading__right__buy__button'
            })]
          })), jsx("div", {
            className: 'product-skeleton-loading__paragraph'
          })]
        }))]
      })), jsxs("div", Object.assign({
        className: 'product-skeleton-loading non-flex'
      }, {
        children: [jsx("div", {
          className: 'product-skeleton-loading__dis-title'
        }), jsx("div", {
          className: 'product-skeleton-loading__dis-text'
        })]
      }))]
    });
  }
  const discountPrice = (product.price || 0).toFixed(2);
  const isAddToCart = cart.find(item => item.id === product.id) ? true : false;
  const ImagesURl = [product.urlImage || 'assets/svg/dummy-img.svg'];
  return jsxs(Container, {
    children: [jsxs("div", Object.assign({
      className: 'product-page__path'
    }, {
      children: [jsx(Link, Object.assign({
        className: 'product-page__path-link',
        to: '/'
      }, {
        children: "Home"
      })), ' ', "/", ' ', jsx(Link, Object.assign({
        className: 'product-page__path-link',
        to: '/products'
      }, {
        children: "Productos"
      })), ' ', "/ ", product.name]
    })), jsxs("div", Object.assign({
      className: 'product-page'
    }, {
      children: [jsx("div", Object.assign({
        className: 'product-page__image'
      }, {
        children: jsx(ProductSlider, {
          images: ImagesURl
        })
      })), jsxs("div", Object.assign({
        className: 'product-page__content'
      }, {
        children: [jsx("h2", Object.assign({
          className: 'product-page__content__title'
        }, {
          children: product.brandName
        })), jsx("h2", Object.assign({
          className: 'product-page__content__title'
        }, {
          children: product.name
        })), jsx("div", Object.assign({
          className: 'product-page__content__prices'
        }, {
          children: jsxs("h4", Object.assign({
            className: 'product-page__content__price'
          }, {
            children: [!!discountPrice ? NumberFormatter$1.toCurrency(Number(discountPrice)) : '-', ' ']
          }))
        })), jsx("hr", {
          className: 'product-page__line'
        }), jsx("div", Object.assign({
          className: 'product-page__status'
        }, {
          children: jsxs("h4", Object.assign({
            className: 'product-page__status__stock'
          }, {
            children: [jsx("span", Object.assign({
              style: {
                color: '#0000009d'
              }
            }, {
              children: "Disponibilidad :"
            })), ' ', product.inStock ? jsxs("span", Object.assign({
              className: 'product-page__status__stock-text'
            }, {
              children: ["En stock ", jsx(TiTick, {
                className: 'product-page__status__stock-icon'
              })]
            })) : jsxs("span", Object.assign({
              className: 'product-page__status__stock-text'
            }, {
              children: ["Fuera de stock ", jsx(RiCloseFill, {
                className: 'product-page__status__out-stock-icon'
              })]
            }))]
          }))
        })), jsx("hr", {
          className: 'product-page__line'
        }), jsxs("form", Object.assign({
          className: 'product-page__buy-section',
          onSubmit: handleSubmit
        }, {
          children: [jsxs("div", Object.assign({
            className: 'product-page__buy-section__input'
          }, {
            children: [jsx("h4", {
              children: "Cantidad:"
            }), jsx(Input, {
              min: 1,
              max: 9999,
              onChange: handleChange,
              value: values.quantity,
              name: 'quantity',
              type: 'number'
            })]
          })), jsx(Ramen.XButton, {
            type: 'solid',
            text: isAddToCart ? 'Actualizar en cotización' : 'Añadir a cotización'
          })]
        }))]
      }))]
    })), jsx("hr", {
      className: 'product-page__line'
    }), jsxs("div", Object.assign({
      className: 'product-page__discription'
    }, {
      children: [jsx("h4", Object.assign({
        className: 'product-page__discription__title'
      }, {
        children: "Informaci\u00F3n del producto:"
      })), jsx("p", Object.assign({
        className: 'product-page__discription__text'
      }, {
        children: product.description
      }))]
    })), jsx("hr", {
      className: 'product-page__line'
    })]
  });
};

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

const ProductContainer = ({
  children,
  className: _className = ''
}) => {
  return jsx("div", Object.assign({
    className: `products-container ${_className}`
  }, {
    children: children
  }));
};

const LoaderCard = size => Array(size).fill(0).map((_, i) => jsx(ProductCardLoading, {}, i));
const Shop = () => {
  const {
    error
  } = Ramen.Api.notification;
  const [loading, setLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const {
    search
  } = useLocation();
  const [products, setProducts] = useState([]);
  const [filters, setFilter] = useState({
    limit: 50,
    offset: 0,
    total: 0
  });
  const searchQuery = useMemo(() => {
    return new URLSearchParams(search).get('s') || '';
  }, [search]);
  const getData = (useNext = false) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      useNext ? setLoadMoreLoading(true) : setLoading(true);
      const filter = Object.assign({
        store: 'E518',
        limit: filters.limit,
        offset: filters.offset
      }, !!searchQuery && {
        ['description.longName']: searchQuery
      });
      const {
        data,
        offset,
        total
      } = yield productsClient.getProducts(filter);
      const dataProducts = useNext ? [...products, ...data] : data;
      setFilter(Object.assign(Object.assign({}, filters), {
        offset: offset + 1,
        total
      }));
      useNext ? setLoadMoreLoading(false) : setLoading(false);
      setProducts(dataProducts);
    } catch (errorMessage) {
      error({
        description: 'Error',
        message: 'We have errors please try again'
      });
      useNext ? setLoadMoreLoading(false) : setLoading(false);
    }
  });
  // each time that call load 10 more products
  const loadMoreProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      if (products.length < 0) {
        return;
      }
      if (loading) {
        return;
      }
      yield getData(true);
    } catch (error) {
      setLoadMoreLoading(false);
    }
  });
  // check when user type or product add search with the search query
  useEffect(() => {
    getData();
  }, [searchQuery]);
  const {
    elementRef
  } = useInView(loadMoreProducts);
  return jsx(Fragment, {
    children: jsx(Container, {
      children: jsxs("div", Object.assign({
        className: "shop"
      }, {
        children: [jsxs("div", Object.assign({
          className: 'product-page__path'
        }, {
          children: [jsx(Link, Object.assign({
            className: 'product-page__path-link',
            to: '/'
          }, {
            children: "Inicio"
          })), ' ', "/", ' ', jsx(Link, Object.assign({
            className: 'product-page__path-link',
            to: '/products'
          }, {
            children: "Productos"
          })), ' ']
        })), jsxs("div", Object.assign({
          className: "shop__products-section"
        }, {
          children: [jsxs(ProductContainer, {
            children: [loading && LoaderCard(filters.limit), products.map((product, i) => jsx(Fragment$1, {
              children: jsx(ProductCard, {
                productData: product
              })
            }, i))]
          }), loadMoreLoading && jsx(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            width: 'full',
            horizontalAlign: 'center'
          }, {
            children: jsx(Loader, {})
          })), products.length > 0 && !loadMoreLoading && jsx("div", {
            style: {
              height: '4px'
            },
            ref: elementRef
          }), products.length <= 0 && jsx(EmptyResultsComponent, {
            emptyImage: 'https://easycl.vtexassets.com/arquivos/nuestrosLocalesHome.png',
            emptyMessage: "Oops!",
            descriptionMessage: 'No hay productos'
          })]
        }))]
      }))
    })
  });
};

const CartPage = props => {
  return jsx(Cart, {})
  // <h1 style={{color: 'red'}}>ProductListPage</h1>
  ;
};

const HomePage = props => {
  return jsx(Home, {});
};

const ProductsDetailsPage = props => {
  return jsx(Product, {})
  // <h1 style={{color: 'red'}}>ProductListPage</h1>
  ;
};

const ProductListPage = props => {
  return jsx(Shop, {})
  // <h1 style={{color: 'red'}}>ProductListPage</h1>
  ;
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
      }],
      override
    });
  }
}
PortalModule.route = '/';

export { CartContextProvider as C, ElevatorButton as E, Footer as F, GlobalContextProvider as G, Header as H, Loader as L, ModalCart$1 as M, ProductCard as P, __awaiter as _, LoaderScreen as a, PortalModule as b, productsClient as p, useGlobal as u };