import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { IonRouterOutlet } from '@ionic/react';
import * as React from 'react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Ramen from '@team_yumi/ramen';
import { useScanner, ScannerHoC } from '@team_yumi/code-scanner';
import '@team_yumi/code-scanner/index.css';
import moment$2 from 'moment-timezone';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var fails$o = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$n = fails$o;

var functionBindNative = !fails$n(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$k = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$k, call$k);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$k.apply(fn, arguments);
  };
};

var uncurryThis$r = functionUncurryThis;

var toString$e = uncurryThis$r({}.toString);
var stringSlice$9 = uncurryThis$r(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$9(toString$e(it), 8, -1);
};

var uncurryThis$q = functionUncurryThis;
var fails$m = fails$o;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$q(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$m(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : $Object$4(it);
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
var requireObjectCoercible$a = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$9 = requireObjectCoercible$a;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$9(it));
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

var global$m = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$m, key, { value: value, configurable: true, writable: true });
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
  version: '3.31.1',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$8 = requireObjectCoercible$a;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$3(requireObjectCoercible$8(argument));
};

var uncurryThis$p = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$p({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$o = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$d = uncurryThis$o(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$k = global$n;
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
var fails$l = fails$o;
var global$j = global$n;

var $String$6 = global$j.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$l(function () {
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

var wellKnownSymbol$j = function (name) {
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

var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var isObject$9 = isObject$a;

var $String$5 = String;
var $TypeError$d = TypeError;

// `Assert: Type(argument) is Object`
var anObject$g = function (argument) {
  if (isObject$9(argument)) return argument;
  throw $TypeError$d($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$k = fails$o;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$k(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$c = descriptors;
var fails$j = fails$o;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$h = global$n;
var isObject$8 = isObject$a;

var document$3 = global$h.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$8(document$3) && isObject$8(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$b = descriptors;
var fails$i = fails$o;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$b && !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$j = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$j.bind(call$j) : function () {
  return call$j.apply(call$j, arguments);
};

var global$g = global$n;
var isCallable$m = isCallable$o;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$g[namespace]) : global$g[namespace] && global$g[namespace][method];
};

var uncurryThis$n = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$l = isCallable$o;
var isPrototypeOf$5 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$5($Symbol.prototype, $Object$2(it));
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
var aCallable$8 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw $TypeError$c(tryToString$3(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$6 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$7(func);
};

var call$i = functionCall;
var isCallable$j = isCallable$o;
var isObject$7 = isObject$a;

var $TypeError$b = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$7(val = call$i(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$7(val = call$i(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$7(val = call$i(fn, input))) return val;
  throw $TypeError$b("Can't convert object to primitive value");
};

var call$h = functionCall;
var isObject$6 = isObject$a;
var isSymbol$1 = isSymbol$2;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var $TypeError$a = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$h(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw $TypeError$a("Can't convert object to primitive value");
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

var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$f = anObject$g;
var toPropertyKey$1 = toPropertyKey$2;

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
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$f(O);
  P = toPropertyKey$1(P);
  anObject$f(Attributes);
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
  anObject$f(O);
  P = toPropertyKey$1(P);
  anObject$f(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

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
var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;

var max$1 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
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

var hiddenKeys$4 = {};

var uncurryThis$m = functionUncurryThis;
var hasOwn$b = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$1 = uncurryThis$m([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$b(hiddenKeys$3, key) && hasOwn$b(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$b(O, key = names[i++])) {
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

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$9 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$3 = objectDefineProperty;
var anObject$e = anObject$g;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$9 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$e(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$7;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$d = anObject$g;
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
    EmptyConstructor[PROTOTYPE] = anObject$d(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$h = wellKnownSymbol$j;
var create$2 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$h('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$f = global$n;
var isCallable$i = isCallable$o;

var WeakMap$1 = global$f.WeakMap;

var weakMapBasicDetection = isCallable$i(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$6 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$a = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$e.TypeError;
var WeakMap = global$e.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
    if (store$1.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn$a(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
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

var DESCRIPTORS$7 = descriptors;
var call$g = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$1(!call$g(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$6 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || (DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$l = functionUncurryThis;
var isCallable$h = isCallable$o;
var store = sharedStore;

var functionToString = uncurryThis$l(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$h(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$k = functionUncurryThis;
var fails$h = fails$o;
var isCallable$g = isCallable$o;
var hasOwn$7 = hasOwnProperty_1;
var DESCRIPTORS$5 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$2 = internalState;

var enforceInternalState$1 = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$8 = uncurryThis$k(''.slice);
var replace$5 = uncurryThis$k(''.replace);
var join = uncurryThis$k([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$h(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$8($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$5($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$5) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$7(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$5) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$7(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$f = isCallable$o;
var definePropertyModule$1 = objectDefineProperty;
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
    else definePropertyModule$1.f(O, key, {
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
var uncurryThis$j = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$c = anObject$g;

var concat$2 = uncurryThis$j([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$c(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$6 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$6(target, key) && !(exceptions && hasOwn$6(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$g = fails$o;
var isCallable$e = isCallable$o;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$e(detection) ? fails$g(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$d = global$n;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
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

var fails$f = fails$o;

var correctPrototypeGetter = !fails$f(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$d = isCallable$o;
var toObject$2 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$2(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$d(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$e = fails$o;
var isCallable$c = isCallable$o;
var isObject$4 = isObject$a;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$g = wellKnownSymbol$j;

var ITERATOR$6 = wellKnownSymbol$g('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$e(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$c(IteratorPrototype$2[ITERATOR$6])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$f = wellKnownSymbol$j;

var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG$3)) {
    defineProperty$4(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$i = functionUncurryThis;
var aCallable$6 = aCallable$8;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$i(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
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
var anObject$b = anObject$g;
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
    anObject$b(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$f = _export;
var call$f = functionCall;
var FunctionName = functionName;
var isCallable$a = isCallable$o;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$e = wellKnownSymbol$j;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$e('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$5]
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
        } else if (!isCallable$a(CurrentIteratorPrototype[ITERATOR$5])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$f(nativeIterator, this); };
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
    } else $$f({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
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
var defineProperty$3 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$4 = descriptors;

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
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$4 && values.name !== 'values') try {
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

var global$c = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$d = wellKnownSymbol$j;

var ITERATOR$4 = wellKnownSymbol$d('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$4, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$4] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
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

var wellKnownSymbol$c = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$9 = isCallable$o;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$b = wellKnownSymbol$j;

var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');
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
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String$1 = String;

var toString$c = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$a = anObject$g;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$a(this);
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

var fails$d = fails$o;
var global$b = global$n;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$b.RegExp;

var UNSUPPORTED_Y$2 = fails$d(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$d(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$d(function () {
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

var fails$c = fails$o;
var global$a = global$n;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$a.RegExp;

var regexpUnsupportedDotAll = fails$c(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$b = fails$o;
var global$9 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$9.RegExp;

var regexpUnsupportedNcg = fails$b(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$e = functionCall;
var uncurryThis$h = functionUncurryThis;
var toString$b = toString$c;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$4 = uncurryThis$h(''.charAt);
var indexOf = uncurryThis$h(''.indexOf);
var replace$4 = uncurryThis$h(''.replace);
var stringSlice$7 = uncurryThis$h(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$e(nativeExec, re1, 'a');
  call$e(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$b(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$e(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$e(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$4(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$7(str, re.lastIndex);
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
        match.input = stringSlice$7(match.input, charsAdded);
        match[0] = stringSlice$7(match[0], charsAdded);
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

var $$e = _export;
var exec$3 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$e({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
  exec: exec$3
});

var classofRaw = classofRaw$2;
var uncurryThis$g = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$g(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$f = functionUncurryThisClause;
var defineBuiltIn$4 = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$a = fails$o;
var wellKnownSymbol$a = wellKnownSymbol$j;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

var SPECIES$3 = wellKnownSymbol$a('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$a(KEY);

  var DELEGATES_TO_SYMBOL = !fails$a(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$a(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$f(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$f(nativeMethod);
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

    defineBuiltIn$4(String.prototype, KEY, methods[0]);
    defineBuiltIn$4(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$e = functionUncurryThis;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$a = toString$c;
var requireObjectCoercible$7 = requireObjectCoercible$a;

var charAt$3 = uncurryThis$e(''.charAt);
var charCodeAt = uncurryThis$e(''.charCodeAt);
var stringSlice$6 = uncurryThis$e(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$a(requireObjectCoercible$7($this));
    var position = toIntegerOrInfinity$3(pos);
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
          ? stringSlice$6(S, position, position + 2)
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

var call$d = functionCall;
var anObject$9 = anObject$g;
var isCallable$8 = isCallable$o;
var classof$4 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$7 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$8(exec)) {
    var result = call$d(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$d(regexpExec, R, S);
  throw $TypeError$7('RegExp#exec called on incompatible receiver');
};

var call$c = functionCall;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var anObject$8 = anObject$g;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var toLength$2 = toLength$4;
var toString$9 = toString$c;
var requireObjectCoercible$6 = requireObjectCoercible$a;
var getMethod$4 = getMethod$6;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$2 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$2('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$6(this);
      var matcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$4(regexp, MATCH);
      return matcher ? call$c(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$9(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$8(this);
      var S = toString$9(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$2(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$2(rx, S)) !== null) {
        var matchStr = toString$9(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var DESCRIPTORS$3 = descriptors;
var uncurryThis$d = functionUncurryThis;
var call$b = functionCall;
var fails$9 = fails$o;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;
var concat$1 = uncurryThis$d([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$9(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
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
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$3 || call$b(propertyIsEnumerable, S, key)) T[key] = S[key];
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
var call$a = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$a.bind(apply$2) : function () {
  return call$a.apply(apply$2, arguments);
});

var uncurryThis$c = functionUncurryThis;
var toObject = toObject$4;

var floor$1 = Math.floor;
var charAt$1 = uncurryThis$c(''.charAt);
var replace$3 = uncurryThis$c(''.replace);
var stringSlice$5 = uncurryThis$c(''.slice);
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
      case '`': return stringSlice$5(str, 0, position);
      case "'": return stringSlice$5(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$5(ch, 1, -1)];
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

var apply$1 = functionApply;
var call$9 = functionCall;
var uncurryThis$b = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$8 = fails$o;
var anObject$7 = anObject$g;
var isCallable$7 = isCallable$o;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
var toLength$1 = toLength$4;
var toString$8 = toString$c;
var requireObjectCoercible$5 = requireObjectCoercible$a;
var advanceStringIndex = advanceStringIndex$2;
var getMethod$3 = getMethod$6;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$9 = wellKnownSymbol$j;

var REPLACE = wellKnownSymbol$9('replace');
var max = Math.max;
var min$1 = Math.min;
var concat = uncurryThis$b([].concat);
var push = uncurryThis$b([].push);
var stringIndexOf$2 = uncurryThis$b(''.indexOf);
var stringSlice$4 = uncurryThis$b(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$8(function () {
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
      var O = requireObjectCoercible$5(this);
      var replacer = isNullOrUndefined$3(searchValue) ? undefined : getMethod$3(searchValue, REPLACE);
      return replacer
        ? call$9(replacer, searchValue, O, replaceValue)
        : call$9(nativeReplace, toString$8(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$7(this);
      var S = toString$8(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$2(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$7(replaceValue);
      if (!functionalReplace) replaceValue = toString$8(replaceValue);

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

        var matchStr = toString$8(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$8(result[0]);
        var position = max(min$1(toIntegerOrInfinity$2(result.index), S.length), 0);
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
          var replacement = toString$8(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$4(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$4(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$a = functionUncurryThis;
var requireObjectCoercible$4 = requireObjectCoercible$a;
var toString$7 = toString$c;
var whitespaces$2 = whitespaces$3;

var replace$2 = uncurryThis$a(''.replace);
var ltrim = RegExp('^[' + whitespaces$2 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$7(requireObjectCoercible$4($this));
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
var fails$7 = fails$o;
var whitespaces$1 = whitespaces$3;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$7(function () {
    return !!whitespaces$1[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$c = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$c({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable$6 = isCallable$o;
var isObject$3 = isObject$a;
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
    isObject$3(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var isObject$2 = isObject$a;
var classof$3 = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$j;

var MATCH$2 = wellKnownSymbol$8('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$2(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var call$8 = functionCall;
var hasOwn$3 = hasOwnProperty_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$3(R, 'flags') && isPrototypeOf$4(RegExpPrototype$2, R)
    ? call$8(regExpFlags, R) : flags;
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
var global$8 = global$n;
var uncurryThis$9 = functionUncurryThis;
var isForced$1 = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf$3 = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$6 = toString$c;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$3 = defineBuiltIn$8;
var fails$6 = fails$o;
var hasOwn$2 = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies$1 = setSpecies$2;
var wellKnownSymbol$6 = wellKnownSymbol$j;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$6('match');
var NativeRegExp = global$8.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$8.SyntaxError;
var exec$2 = uncurryThis$9(RegExpPrototype$1.exec);
var charAt = uncurryThis$9(''.charAt);
var replace$1 = uncurryThis$9(''.replace);
var stringIndexOf$1 = uncurryThis$9(''.indexOf);
var stringSlice$3 = uncurryThis$9(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$1 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$6(function () {
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
        if (exec$2(IS_NCG, stringSlice$3(string, index + 1))) {
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

    pattern = pattern === undefined ? '' : toString$6(pattern);
    flags = flags === undefined ? '' : toString$6(flags);
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
  defineBuiltIn$3(global$8, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$1('RegExp');

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn$2 = defineBuiltIn$8;
var anObject$6 = anObject$g;
var $toString = toString$c;
var fails$5 = fails$o;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$5(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$6(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var global$7 = global$n;
var fails$4 = fails$o;
var uncurryThis$8 = functionUncurryThis;
var toString$5 = toString$c;
var trim = stringTrim.trim;
var whitespaces = whitespaces$3;

var $parseInt$1 = global$7.parseInt;
var Symbol$1 = global$7.Symbol;
var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$1 = uncurryThis$8(hex.exec);
var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$3 && !fails$4(function () { $parseInt$1(Object(ITERATOR$3)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
  var S = trim(toString$5(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$b = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$b({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var call$7 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$5 = anObject$g;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var requireObjectCoercible$3 = requireObjectCoercible$a;
var sameValue = sameValue$1;
var toString$4 = toString$c;
var getMethod$2 = getMethod$6;
var regExpExec = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$3(this);
      var searcher = isNullOrUndefined$2(regexp) ? undefined : getMethod$2(regexp, SEARCH);
      return searcher ? call$7(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$4(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$5(this);
      var S = toString$4(string);
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

const BarCodeScanner = ({
  searchDisabled,
  autoFocused,
  onScan,
  isCodeValid
}) => {
  const [barcodeNumber, setBarcodeNumber] = useState('');
  const barcodeInputRef = useRef(null);
  const printWhenMainClick = () => {
    barcodeInputRef.current && barcodeInputRef.current.focus();
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
      console.log('Busca automatico');
      onScan(value).then(() => {
        setBarcodeNumber("");
      });
    }
  };
  const handleCameraClick = () => {
    if (startScan) {
      startScan(code => {
        console.log('se setea el codigo ' + code);
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
      barcodeInputRef.current && barcodeInputRef.current.focus();
    }
  }, [autoFocused]);
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "horizontal",
    width: "flex",
    gap: "s"
  }, {
    children: [jsx(Ramen.XBox, {
      children: jsx(Ramen.XTextInput, {
        placeholder: "Ingresa c\u00F3digo",
        icon: "scan-outline",
        size: "l",
        onChange: e => handleChange(e.target.value),
        value: barcodeNumber,
        inputRef: barcodeInputRef
      })
    }), jsx(Ramen.XButtonIcon, {
      icon: "arrow-right-extrabold",
      onClick: handleSearchCodeClick,
      disabled: searchDisabled || !isCodeValid(barcodeNumber)
    }), jsx(Ramen.XButtonIcon, {
      icon: "camera-outline",
      onClick: handleCameraClick
    })]
  }));
};

var $$a = _export;
var DESCRIPTORS = descriptors;
var global$6 = global$n;
var uncurryThis$7 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$5 = isCallable$o;
var isPrototypeOf$2 = objectIsPrototypeOf;
var toString$3 = toString$c;
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
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$3(arguments[0]);
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
  var thisSymbolValue = uncurryThis$7(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$7(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis$7(''.replace);
  var stringSlice$2 = uncurryThis$7(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$2(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$a({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

const ProductAttr = ({
  label,
  value
}) => {
  return jsxs(Ramen.XBox, Object.assign({
    orientation: 'horizontal',
    gap: 'xxs'
  }, {
    children: [jsx(Ramen.XText, Object.assign({
      weight: 'normal',
      colorThone: 'dim',
      fontSize: 11
    }, {
      children: label
    })), jsx(Ramen.XText, Object.assign({
      fontSize: 11
    }, {
      children: value
    }))]
  }));
};
const ProductCard$1 = ({
  product,
  miniImageUrl
}) => {
  var _a, _b;
  return jsxs(Ramen.XBox, Object.assign({
    orientation: 'horizontal',
    gap: 's',
    verticalAlign: 'center',
    width: 'full'
  }, {
    children: [jsx(Ramen.XBox, {
      children: jsx(Ramen.XImagePreviewer, {
        border: "solid",
        rounded: "s",
        src: miniImageUrl((_a = product.sku) === null || _a === void 0 ? void 0 : _a.toString(), (_b = product.ean) === null || _b === void 0 ? void 0 : _b.toString()),
        showExpandIcon: false
      })
    }), jsxs(Ramen.XBox, Object.assign({
      gap: 'xxs'
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        weight: 'bold',
        lineHeight: 'title',
        fontSize: 11
      }, {
        children: product.description
      })), jsx(ProductAttr, {
        label: 'EAN',
        value: product.ean.toString()
      }), jsx(ProductAttr, {
        label: 'SKU',
        value: product.sku.toString()
      })]
    }))]
  }));
};

const TaskCard = ({
  task,
  onDelete,
  onCountChange,
  miniImageUrl
}) => {
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      gap: 'l',
      padding: 'l',
      width: 'full'
    }, {
      children: [jsx(ProductCard$1, {
        product: task.product,
        miniImageUrl: miniImageUrl
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: 'horizontal',
        horizontalAlign: 'between',
        width: 'full'
      }, {
        children: [jsx(Ramen.XCounter, {
          defaultCount: task.count,
          onChange: count => onCountChange(Object.assign(Object.assign({}, task), {
            count
          }))
        }), jsx(Ramen.XButtonIcon, {
          size: 'm',
          icon: 'trash-2-outline',
          onClick: () => onDelete(task)
        })]
      }))]
    }))
  });
};

const ConfirmModal = ({
  visible,
  onClose,
  onConfirm,
  title,
  subTitle,
  btnActionText,
  ImageCmp
}) => {
  const onActionClick = action => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Action2 ${action} clicked.`);
    if (action === "ok") {
      yield onClose();
      yield onConfirm();
    } else if (action === 'close') {
      onClose();
    }
  });
  const content = jsxs(Ramen.XBox, Object.assign({
    gap: 'xs',
    horizontalAlign: 'center',
    verticalAlign: 'center',
    height: 'auto'
  }, {
    children: [ImageCmp, jsx(Ramen.XText, Object.assign({
      lineHeight: 'title',
      weight: 'bold',
      fontSize: 8,
      textAlign: 'center'
    }, {
      children: title
    })), subTitle && jsx(Ramen.XText, Object.assign({
      colorThone: 'dim',
      textAlign: 'center'
    }, {
      children: subTitle
    }))]
  }));
  return jsx(Ramen.XModal, {
    visible: visible,
    children: content,
    closable: true,
    onClose: onClose,
    onActionClick: onActionClick,
    size: 'l',
    actions: [{
      key: "ok",
      text: btnActionText,
      type: "solid"
    }, {
      key: "close",
      text: "Volver",
      type: "outline"
    }]
  });
};

const Image$5 = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "168",
    viewBox: "0 0 169 168",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_7498_115255)"
    }, {
      children: [jsxs("g", Object.assign({
        clipPath: "url(#clip1_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M257.712 0H-88.9805V167.85H257.712V0Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 0H-89.0996V110.32H258.1V0Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M258.09 111.277H-88.377V167.773H258.09V111.277Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M258.1 125.292H-88.9414V126.288H258.1V125.292Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 136.984H-88.9414V137.979H258.1V136.984Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 153.408H-88.9414V154.404H258.1V153.408Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 116.587H-88.9414V117.582H258.1V116.587Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M203.981 168L168.019 110.118L167.295 110.686L202.904 168H203.981Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M161.608 168L137.655 110.118L136.855 110.536L160.632 168H161.608Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M121.91 168L108.148 110.118L107.291 110.377L120.996 168H121.91Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M85.0217 110.118H84.1387V168H85.0217V110.118Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M48.1659 168L61.8665 110.377L61.0144 110.118L47.252 168H48.1659Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M8.53046 168L32.3067 110.536L31.5076 110.118L7.55469 168H8.53046Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M-33.7405 168L1.86871 110.686L1.14461 110.118L-34.8223 168H-33.7405Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M32.9805 46.9879C32.9805 38.3568 39.9774 31.3599 48.6085 31.3599L119.456 31.3599C128.087 31.3599 135.084 38.3568 135.084 46.9879V224.106C135.084 232.737 128.087 239.734 119.456 239.734H48.6085C39.9774 239.734 32.9805 232.737 32.9805 224.106L32.9805 46.9879Z",
        fill: "#1F1F1F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M37.1484 49.0718C37.1484 42.1669 42.746 36.5693 49.6509 36.5693H118.414C125.319 36.5693 130.917 42.1669 130.917 49.0718V222.022C130.917 228.927 125.319 234.525 118.414 234.525H49.6509C42.746 234.525 37.1484 228.927 37.1484 222.022L37.1484 49.0718Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M90.1276 72.1233L115.885 116.663C116.51 117.729 116.843 118.941 116.848 120.177C116.854 121.413 116.532 122.628 115.916 123.7C115.3 124.771 114.412 125.661 113.341 126.277C112.27 126.894 111.055 127.217 109.819 127.212H58.2463C57.0105 127.217 55.7954 126.894 54.7245 126.277C53.6535 125.661 52.7649 124.771 52.1489 123.7C51.5328 122.628 51.2113 121.413 51.2169 120.177C51.2225 118.941 51.555 117.729 52.1807 116.663L77.9377 72.1233C78.5543 71.052 79.4424 70.1623 80.5124 69.5436C81.5824 68.9249 82.7966 68.5991 84.0326 68.5991C85.2687 68.5991 86.4828 68.9249 87.5529 69.5436C88.6229 70.1623 89.511 71.052 90.1276 72.1233ZM80.9383 102.207C80.9383 103.933 82.3377 105.333 84.064 105.333C85.7902 105.333 87.1896 103.933 87.1896 102.207V89.7046C87.1896 87.9784 85.7902 86.579 84.064 86.579C82.3377 86.579 80.9383 87.9784 80.9383 89.7046V102.207ZM84.064 117.835C85.7902 117.835 87.1896 116.436 87.1896 114.71C87.1896 112.983 85.7902 111.584 84.064 111.584H84.0327C82.3065 111.584 80.9071 112.983 80.9071 114.71C80.9071 116.436 82.3065 117.835 84.0327 117.835H84.064Z",
          fill: "#FFC107"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsx("clipPath", Object.assign({
        id: "clip0_7498_115255"
      }, {
        children: jsx("rect", {
          x: "0.5",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_7498_115255"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-89.0996)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_7498_115255"
      }, {
        children: jsx("rect", {
          width: "93.7684",
          height: "197.956",
          fill: "white",
          transform: "translate(37.1484 36.5693)"
        })
      }))]
    })]
  }));
};

const ProductListModal = ({
  tasks,
  open,
  onClose,
  onDelete,
  onSend,
  onTaskChange,
  miniImageUrl
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState({
    status: false
  });
  const [sendConfirm, setSendConfirm] = useState(false);
  const onDeleted = task => {
    onDelete(task);
    Ramen.Api.snackbar.success({
      placement: 'top',
      duration: 5,
      closable: true,
      text: 'Producto eliminado'
    });
  };
  const onConfirmSend = () => __awaiter(void 0, void 0, void 0, function* () {
    yield onClose === null || onClose === void 0 ? void 0 : onClose();
    yield onSend();
  });
  const onActionClick = action => {
    console.log(`Action ${action} clicked.`);
    if (action === "send") {
      setSendConfirm(true);
    }
  };
  const sendBtnEnabled = tasks.length > 0 && tasks.every(item => item.count > 0);
  const content = jsx(Ramen.XBox, Object.assign({
    gap: 's'
  }, {
    children: tasks.map(task => {
      return jsx(TaskCard, {
        task: task,
        onCountChange: onTaskChange,
        onDelete: () => setDeleteConfirm({
          status: true,
          item: task
        }),
        miniImageUrl: miniImageUrl
      }, task.id);
    })
  }));
  return jsxs(Fragment, {
    children: [jsx(Ramen.XModal, {
      title: 'Productos a solicitar',
      closable: true,
      visible: open,
      size: 'xl',
      children: content,
      actions: [{
        key: "send",
        text: "Enviar solicitud",
        type: "solid",
        disabled: !sendBtnEnabled
      }],
      onActionClick: onActionClick,
      onClose: onClose
    }), deleteConfirm.status && jsx(ConfirmModal, {
      visible: deleteConfirm.status,
      title: '\u00BFDeseas eliminar el producto?',
      subTitle: 'Esta acci\u00F3n es irreversible y no podr\u00E1 ser modificada posteriormente.',
      btnActionText: 'Eliminar',
      onClose: () => setDeleteConfirm({
        status: false
      }),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onConfirm: () => onDeleted(deleteConfirm.item),
      ImageCmp: jsx(Image$5, {})
    }), sendConfirm && jsx(ConfirmModal, {
      visible: sendConfirm,
      title: '\u00BFDeseas enviar la solicitud?',
      subTitle: 'Esta acci\u00F3n es irreversible y no podr\u00E1 ser modificada posteriormente.',
      btnActionText: 'Enviar',
      onClose: () => setSendConfirm(false),
      onConfirm: onConfirmSend,
      ImageCmp: jsx(Image$5, {})
    })]
  });
};

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

const DATA_KEY = 'INTERNAL_CONSUMPTION_PRODUCTS';
const DATE_KEY = 'INTERNAL_CONSUMPTION_PRODUCTS_TIME';
const META_DATA_KEY = 'INTERNAL_CONSUMPTION_META_DATA';
class Storage {
  getAll() {
    const serializedDate = localStorage.getItem(DATE_KEY);
    const serializedData = localStorage.getItem(DATA_KEY);
    let out = [];
    try {
      const date = JSON.parse(serializedDate || moment().toDate().toString());
      if (moment.duration(moment().diff(moment(date))).asHours() < 4) {
        out = JSON.parse(serializedData || '[]');
      } else {
        this.clear();
      }
    } catch (error) {
      // Nothing to do
    }
    return out;
  }
  getMetaData() {
    const serializedData = localStorage.getItem(META_DATA_KEY);
    let out = undefined;
    try {
      if (serializedData) {
        out = JSON.parse(serializedData);
      }
    } catch (error) {
      // Nothing to do
    }
    return out;
  }
  set(items, metaData) {
    localStorage.setItem(DATA_KEY, JSON.stringify(items));
    localStorage.setItem(DATE_KEY, JSON.stringify(moment().toDate()));
    localStorage.setItem(META_DATA_KEY, JSON.stringify(metaData));
  }
  add(item, metaData) {
    localStorage.setItem(META_DATA_KEY, JSON.stringify(metaData));
    const tasks = this.getAll();
    this.set([item, ...tasks], this.getMetaData());
  }
  update(item) {
    const newTasks = [];
    this.getAll().forEach(task => {
      if (task.id === item.id) {
        newTasks.push(item);
      } else {
        newTasks.push(task);
      }
    });
    this.set(newTasks, this.getMetaData());
  }
  clear() {
    localStorage.removeItem(DATA_KEY);
    localStorage.removeItem(DATE_KEY);
    localStorage.removeItem(META_DATA_KEY);
  }
}
const StorageInstance = new Storage();

var uncurryThis$6 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$6(1.0.valueOf);

var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
var toString$2 = toString$c;
var requireObjectCoercible$2 = requireObjectCoercible$a;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$2(requireObjectCoercible$2(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$9 = _export;
var uncurryThis$5 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails$3 = fails$o;

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis$5($repeat);
var stringSlice$1 = uncurryThis$5(''.slice);
var nativeToFixed = uncurryThis$5(1.0.toFixed);

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
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails$3(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$3(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$9({ target: 'Number', proto: true, forced: FORCED }, {
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
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice$1(result, 0, k - fractDigits) + '.' + stringSlice$1(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

var isRegExp = isRegexp;

var $TypeError$6 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$6("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$5 = wellKnownSymbol$j;

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

var $$8 = _export;
var uncurryThis$4 = functionUncurryThisClause;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$4;
var toString$1 = toString$c;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$a;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis$4(''.startsWith);
var stringSlice = uncurryThis$4(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$8({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$1(requireObjectCoercible$1(this));
    notARegExp$1(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$1(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});

const toCurrency = value => {
  if (!value) {
    return '$0';
  }
  const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  return '$' + formatted.substring(0, formatted.length - 3);
};
const formatDate = (dateTime, format, tz) => {
  if (!tz) tz = 'America/Santiago';
  if (!format) format = 'DD MMM. yyyy';
  const date = moment$2(dateTime).tz(tz).format(format);
  return date;
};
const hourOfDate = (date, format) => {
  const fmt = formatDate(date, format || 'hh:mm');
  if (fmt && fmt.startsWith('Invalid')) {
    return undefined;
  } else {
    return `${fmt} hrs`;
  }
};
const checkUserLevel = (level, expectedLevel) => {
  switch (expectedLevel) {
    case 'CONTROL':
      return level === 1;
    case 'REVISOR':
      return level === 2;
    case 'CREATOR':
      return level === 0;
    default:
      return false;
  }
};
function safeRestCall(call) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const result = yield call();
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  });
}

const ToolPageWrapper = props => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(StorageInstance.getAll());
  const [costCenters, setCostCenters] = useState([]);
  const [selectedCostCenter, setSelectedCostCenter] = useState(StorageInstance.getMetaData());
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const goHome = useCallback(() => {
    if (history) {
      history.replace('/');
    } else {
      window.location.replace('/');
    }
  }, []);
  const constCentersSelectOptions = costCenters.map(item => ({
    value: item.id,
    label: `${item.id} - ${item.name}`
  }));
  const loadCostCeners = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = yield props.moduleClient.getCostCenters();
      // const data: CostCenter[] = [];
      setHasError(false);
      setLoading(false);
      setCostCenters(data);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setHasError(true);
    }
  }), []);
  const selectCostCenter = value => {
    const center = costCenters === null || costCenters === void 0 ? void 0 : costCenters.find(item => item.id === value);
    if (center) {
      setSelectedCostCenter(center);
    }
  };
  const checkModuleAccessFn = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    const _user = yield safeRestCall(() => props.moduleClient.getICUser());
    const canAccess = yield safeRestCall(() => props.moduleClient.checkAccess());
    if (canAccess && checkUserLevel(_user === null || _user === void 0 ? void 0 : _user.level, 'CREATOR')) {
      yield loadCostCeners();
    } else {
      Ramen.Api.snackbar.warning({
        placement: 'top',
        duration: 5,
        closable: true,
        text: 'Acceso restringido'
      });
      setTimeout(goHome, 3000);
    }
  }), [goHome, loadCostCeners, props.moduleClient]);
  useEffect(() => {
    checkModuleAccessFn();
  }, []);
  useEffect(() => {
    StorageInstance.set(tasks, selectedCostCenter);
  }, [tasks, selectedCostCenter]);
  return jsx(ScannerHoC, {
    children: jsxs(Ramen.XPage, Object.assign({
      skeleton: loading
    }, {
      children: [jsx(Ramen.XHeader, {
        onBack: goHome,
        title: 'Solicitud de Consumo Interno'
      }), jsxs(Ramen.XBody, {
        children: [jsx(Ramen.XSkeletonRenderer, Object.assign({
          visible: loading
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            gap: 'm'
          }, {
            children: [jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl',
              width: 'xl'
            }), jsx(Ramen.XSkeleton, {
              type: 'image',
              size: 'xl',
              width: 'xl'
            })]
          }))
        })), jsxs(Ramen.XBox, Object.assign({
          gap: 'm'
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            gap: 's'
          }, {
            children: [jsx(Ramen.XText, {
              children: "Centro de costo (*)"
            }), jsx(Ramen.XSelect, {
              title: 'Centro de costo',
              options: constCentersSelectOptions,
              okText: 'Aceptar',
              onChange: opt => selectCostCenter(opt.value),
              value: selectedCostCenter === null || selectedCostCenter === void 0 ? void 0 : selectedCostCenter.id,
              searchable: true
            })]
          })), jsxs(Ramen.XBox, Object.assign({
            gap: 's'
          }, {
            children: [jsx(Ramen.XText, {
              children: "Carga los productos que deseas solicitar"
            }), jsx(BarCodeScanner, {
              searchDisabled: !(selectedCostCenter === null || selectedCostCenter === void 0 ? void 0 : selectedCostCenter.id),
              autoFocused: true,
              isCodeValid: props.productClient.isCodeValid,
              onScan: code => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                console.log('PCode', code);
                if ((code === null || code === void 0 ? void 0 : code.length) > 0) {
                  if (!selectedCostCenter) {
                    Ramen.Api.snackbar.warning({
                      placement: 'top',
                      duration: 5,
                      closable: true,
                      text: 'Debe seleccionar el centro de costo.'
                    });
                    return;
                  }
                  const productInList = tasks.find(item => item.product.sku === parseInt(code) || item.product.ean === parseInt(code));
                  if (productInList) {
                    console.log('Exist p', productInList);
                    const newTasks = [];
                    tasks.forEach(item => {
                      if (item.id === productInList.id) {
                        const newTask = Object.assign(Object.assign({}, item), {
                          id: `${new Date().getTime()}}`,
                          count: item.count + 1
                        });
                        console.log('Update count', newTask);
                        newTasks.push(newTask);
                      } else {
                        newTasks.push(item);
                      }
                    });
                    setTasks(newTasks);
                    Ramen.Api.snackbar.success({
                      placement: 'top',
                      duration: 5,
                      closable: true,
                      text: 'Producto adicionado.'
                    });
                  } else {
                    try {
                      Ramen.Api.loading.show({
                        text: ''
                      });
                      const product = yield props.productClient.search(code);
                      console.log(product);
                      if (product) {
                        const data = {
                          id: `${new Date().getTime()}}`,
                          product: product,
                          count: 1
                        };
                        setTasks([...tasks, data]);
                        Ramen.Api.snackbar.success({
                          placement: 'top',
                          duration: 5,
                          closable: true,
                          text: 'Producto adicionado.'
                        });
                      } else {
                        Ramen.Api.snackbar.warning({
                          placement: 'top',
                          duration: 5,
                          closable: true,
                          text: 'El Producto no ha podido ser adicionado.'
                        });
                      }
                      Ramen.Api.loading.hide();
                    } catch (error) {
                      console.log(error);
                      if (error.response.status === 400) {
                        console.log((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message);
                        Ramen.Api.loading.hide();
                        Ramen.Api.snackbar.warning({
                          text: (_b = error.response.data) === null || _b === void 0 ? void 0 : _b.message,
                          placement: 'top',
                          closable: true
                        });
                      }
                    }
                  }
                }
              })
            })]
          }))]
        })), tasks.length > 0 && jsx("div", Object.assign({
          onClick: () => setOpen(true)
        }, {
          children: jsx(Ramen.XFooter, Object.assign({
            background: 'gradient'
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                orientation: 'horizontal',
                width: 'full',
                horizontalAlign: 'center',
                height: 8
              }, {
                children: jsx(Ramen.XBox, Object.assign({
                  width: 4
                }, {
                  children: jsx(Ramen.XDivider, {})
                }))
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: 'horizontal',
                horizontalAlign: 'between',
                verticalAlign: 'center'
              }, {
                children: [jsx(Ramen.XText, {
                  children: "Productos a solicitar"
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: 'horizontal',
                  gap: 'xs'
                }, {
                  children: [jsx(Ramen.XIcon, {
                    icon: 'book-outline'
                  }), jsx(Ramen.XBadge, {
                    value: tasks.length
                  })]
                }))]
              }))]
            }))
          }))
        }))]
      }), selectedCostCenter && jsx(ProductListModal, {
        open: open,
        tasks: tasks,
        miniImageUrl: props.miniImageUrl,
        onClose: () => setOpen(false),
        onDelete: task => {
          const newTasks = tasks.filter(item => item.id !== task.id);
          if (newTasks.length === 0) {
            setOpen(false);
          }
          setTasks(newTasks);
        },
        onSend: () => __awaiter(void 0, void 0, void 0, function* () {
          setLoading(true);
          try {
            const declarationsDTO = tasks.map(task => ({
              id: task.id,
              product: task.product.sku.toString(),
              costCenter: selectedCostCenter,
              count: task.count
            }));
            yield props.taskClient.createTasks({
              costCenter: selectedCostCenter,
              data: declarationsDTO
            });
            setTasks([]);
            setSelectedCostCenter(undefined);
            Ramen.Api.snackbar.success({
              placement: 'top',
              duration: 5,
              closable: true,
              text: 'Solicitud enviada con éxito'
            });
          } catch (error) {
            Ramen.Api.snackbar.error({
              placement: 'top',
              duration: 5,
              closable: true,
              text: 'Ha ocurrido un error. Intente más tarde.'
            });
          } finally {
            setLoading(false);
          }
        }),
        onTaskChange: task => {
          const newTasks = [];
          tasks.forEach(item => {
            if (item.id === task.id) {
              newTasks.push(task);
            } else {
              newTasks.push(item);
            }
          });
          setTasks(newTasks);
        }
      }), jsx(Ramen.XModal, {
        closable: true,
        onClose: goHome,
        visible: hasError,
        title: 'Ha ocurrido un error',
        subtitle: 'Ha ocurrido un error mientras se intentaba cargar informaci\u00F3n.'
      })]
    }))
  });
};

class ToolPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let moduleClient;
    let productClient;
    let taskClient;
    let imgUrl;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.productClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      productClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.productClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.tasksClientFactory();
    }
    if (!((_g = this.props.extensions) === null || _g === void 0 ? void 0 : _g.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_h = this.props.extensions) === null || _h === void 0 ? void 0 : _h.triggers.miniImgUrlResolver;
    }
    return jsx(ToolPageWrapper, {
      moduleClient: moduleClient,
      productClient: productClient,
      taskClient: taskClient,
      miniImageUrl: imgUrl
    });
  }
}

const UNIQUE_CLASS_ID = 'internal-consumption-Rfpdadiral';
const ControlTag = ({
  task
}) => {
  var _a;
  if (task.meta_data.controlResponse) {
    let text = 'Confirmado por control interno';
    let state = 'success';
    if (((_a = task.meta_data.controlResponse) === null || _a === void 0 ? void 0 : _a.status) === 'REJECTED') {
      text = 'Rechazado por control interno';
      state = 'error';
    }
    return jsx(Ramen.XBox, {
      children: jsx("div", Object.assign({
        className: `sub-tasks-control-tag-${UNIQUE_CLASS_ID}`
      }, {
        children: jsx(Ramen.XTagState, {
          size: "l",
          text: text,
          state: state
        })
      }))
    });
  } else {
    return null;
  }
};

const TaskAttr = ({
  label,
  value
}) => {
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "horizontal",
    gap: "xxs"
  }, {
    children: [jsx(Ramen.XText, Object.assign({
      weight: "normal",
      colorThone: "dim",
      fontSize: 11
    }, {
      children: label
    })), jsx(Ramen.XText, Object.assign({
      fontSize: 11
    }, {
      children: value
    }))]
  }));
};
const ProductCard = ({
  task,
  markedAs,
  miniImageUrl,
  onSelectCard,
  onMarkTask
}) => {
  var _a, _b, _c;
  const handleCardClick = () => {
    onSelectCard(task);
  };
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      gap: "l",
      width: 'full'
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between",
        verticalAlign: "center"
      }, {
        children: [jsx(Ramen.XBox, {
          children: jsx(Ramen.XTag, {
            text: `${task.meta_data.count} ${(_a = task.meta_data.product.um) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`
          })
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "m"
        }, {
          children: [jsx(Ramen.XButtonIcon, {
            state: markedAs === 'FREE' ? 'success' : 'neutral',
            type: "tonal",
            icon: "check-bold",
            size: "m",
            onClick: e => {
              onMarkTask(task, 'FREE');
              e.stopPropagation();
            }
          }), jsx(Ramen.XButtonIcon, {
            state: markedAs === 'REJECT' ? 'error' : 'neutral',
            type: "tonal",
            icon: "x-bold",
            size: "m",
            onClick: e => {
              onMarkTask(task, 'REJECT');
              e.stopPropagation();
            }
          })]
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "s",
        verticalAlign: "center",
        width: "full"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          width: 2,
          height: 2
        }, {
          children: jsx(Ramen.XImagePreviewer, {
            border: "solid",
            rounded: "s",
            src: miniImageUrl((_b = task.meta_data.product.sku) === null || _b === void 0 ? void 0 : _b.toString(), (_c = task.meta_data.product.ean) === null || _c === void 0 ? void 0 : _c.toString()),
            showExpandIcon: false
          })
        })), jsxs(Ramen.XBox, Object.assign({
          gap: "xxs",
          width: 'full',
          onClick: handleCardClick
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            lineHeight: "title",
            fontSize: 11
          }, {
            children: task.meta_data.product.description
          })), jsx(TaskAttr, {
            label: "SKU",
            value: task.meta_data.product.sku.toString()
          }), jsx(TaskAttr, {
            label: "Creado por",
            value: task.created_by.full_name
          }), jsx(TaskAttr, {
            label: "N\u00B0 solicitud",
            value: task.meta_data.documentNumber
          })]
        }))]
      })), jsx(ControlTag, {
        task: task
      })]
    }))
  });
};

/* eslint-disable react/style-prop-object */
const Image$4 = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "169",
    viewBox: "0 0 169 169",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_8926_132573)"
    }, {
      children: [jsx("mask", Object.assign({
        id: "mask0_8926_132573",
        style: {
          maskType: 'alpha'
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "169",
        height: "169"
      }, {
        children: jsx("circle", {
          cx: "84.3535",
          cy: "84.4121",
          r: "84",
          fill: "#7C7AE3"
        })
      })), jsx("g", {
        mask: "url(#mask0_8926_132573)"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip1_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M194.285 0.412109H-152.407V168.262H194.285V0.412109Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M18.8925 0.480225H-64.8301V110.53H18.8925V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M106.589 0.480225H22.8662V110.53H106.589V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M194.285 0.480225H110.562V110.53H194.285V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M194.664 111.689H-151.803V168.185H194.664V111.689Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M194.674 125.704H-152.367V126.7H194.674V125.704Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 137.396H-152.367V138.391H194.674V137.396Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 153.82H-152.367V154.815H194.674V153.82Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 116.999H-152.367V117.994H194.674V116.999Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M187.481 168.412L136.118 110.53L135.491 111.235L186.232 168.412H187.481Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M140.556 168.412L104.593 110.53L103.869 111.098L139.478 168.412H140.556Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M98.1827 168.412L74.2298 110.53L73.4307 110.948L97.2069 168.412H98.1827Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M58.4852 168.412L44.7228 110.53L43.8662 110.789L57.5712 168.412H58.4852Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M21.595 110.53H20.7119V168.412H21.595V110.53Z",
          fill: "#D6D6D6"
        }), jsx("mask", Object.assign({
          id: "mask1_8926_132573",
          style: {
            maskType: 'luminance'
          },
          maskUnits: "userSpaceOnUse",
          x: "126",
          y: "0",
          width: "69",
          height: "169"
        }, {
          children: jsx("path", {
            d: "M194.515 0.412109H126.078V168.008H194.515V0.412109Z",
            fill: "white"
          })
        })), jsxs("g", Object.assign({
          mask: "url(#mask1_8926_132573)"
        }, {
          children: [jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2123L203.173 -22.1987V190.619L130.696 111.448L130.471 57.2123Z",
            fill: "#A8A8A8"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.213 67.8723L132.122 69.6179V61.0217L135.213 58.3442V67.8723Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask2_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "132",
            y: "58",
            width: "4",
            height: "12"
          }, {
            children: jsx("path", {
              d: "M135.213 67.8723L132.122 69.6179V61.0217L135.213 58.3442V67.8723Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask2_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M131.147 57.5806L138.207 68.6951L136.405 70.1998L129.341 59.0852L131.147 57.5806Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M137.094 58.3442H135.213V67.8723H137.094V58.3442Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.44 64.831L136.842 66.8675V56.8531L140.44 53.7346V64.831Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask3_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "136",
            y: "53",
            width: "5",
            height: "14"
          }, {
            children: jsx("path", {
              d: "M140.44 64.831L136.842 66.8675V56.8531L140.44 53.7346V64.831Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask3_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M135.517 52.8074L143.902 66.0039L141.765 67.7904L133.376 54.5939L135.517 52.8074Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M142.63 53.7346H140.44V64.8355H142.63V53.7346Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M146.034 61.6081L141.915 63.9401V52.4665L146.034 48.8889V61.6081Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask4_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "141",
            y: "48",
            width: "6",
            height: "16"
          }, {
            children: jsx("path", {
              d: "M146.034 61.6081L141.915 63.9401V52.4665L146.034 48.8889V61.6081Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask4_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M140.144 47.2251L150.427 63.4082L147.805 65.5993L137.521 49.4207L140.144 47.2251Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M148.546 48.8889H146.034V61.6127H148.546V48.8889Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.757 51.7891L147.964 54.7393V49.1434L151.757 45.6567V51.7891Z",
            fill: "white"
          }), jsx("path", {
            d: "M156.834 45.6567H151.757V51.7936H156.834V45.6567Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M159.13 46.3386L154.582 49.8798V43.1565L159.13 38.9744V46.3386Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M165.223 38.9744H159.13V46.3386H165.223V38.9744Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.757 58.1941L147.964 60.3398V54.7393L151.757 51.7891V58.1941Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M156.834 51.7891H151.757V58.1941H156.834V51.7891Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M159.13 54.0256L154.582 56.5985V49.8798L159.13 46.3386V54.0256Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M165.223 46.3386H159.13V54.0256H165.223V46.3386Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.812 53.3439H163.907C164.34 53.3439 164.693 53.0075 164.693 52.6029V45.1023C164.693 44.6932 164.34 44.3613 163.907 44.3613H160.812C160.38 44.3613 160.026 44.6932 160.026 45.1023V52.6029C160.026 53.012 160.38 53.3439 160.812 53.3439Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.826 44.4978H163.895C164.182 44.4978 164.42 44.7205 164.42 44.9933V52.7076C164.42 52.9803 164.182 53.2031 163.895 53.2031H160.826C160.539 53.2031 160.301 52.9803 160.301 52.7076V44.9933C160.301 44.7205 160.539 44.4978 160.826 44.4978Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.208 44.3567H164.517C164.614 44.3567 164.694 44.2794 164.694 44.1885C164.694 44.0975 164.614 44.0203 164.517 44.0203H160.208C160.111 44.0203 160.031 44.0975 160.031 44.1885C160.031 44.2794 160.111 44.3567 160.208 44.3567Z",
            fill: "white"
          }), jsx("path", {
            d: "M162.358 46.0659H160.026V51.2436H162.358V46.0659Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.812 44.0204H163.907C164.34 44.0204 164.693 43.684 164.693 43.2794V35.7788C164.693 35.3697 164.34 35.0378 163.907 35.0378H160.812C160.38 35.0378 160.026 35.3697 160.026 35.7788V43.2794C160.026 43.6885 160.38 44.0204 160.812 44.0204Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.826 35.1741H163.895C164.182 35.1741 164.42 35.3968 164.42 35.6696V43.3838C164.42 43.6566 164.182 43.8793 163.895 43.8793H160.826C160.539 43.8793 160.301 43.6566 160.301 43.3838V35.6696C160.301 35.3968 160.539 35.1741 160.826 35.1741Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.208 35.0378H164.517C164.614 35.0378 164.694 34.9605 164.694 34.8696C164.694 34.7787 164.614 34.7014 164.517 34.7014H160.208C160.111 34.7014 160.031 34.7787 160.031 34.8696C160.031 34.9605 160.111 35.0378 160.208 35.0378Z",
            fill: "white"
          }), jsx("path", {
            d: "M162.358 36.7471H160.026V41.9248H162.358V36.7471Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.764 51.0983H168.08C168.544 51.0983 168.923 50.7392 168.923 50.3028V42.2657C168.923 41.8293 168.544 41.4702 168.08 41.4702H164.764C164.301 41.4702 163.921 41.8293 163.921 42.2657V50.3028C163.921 50.7392 164.301 51.0983 164.764 51.0983Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.777 41.6201H168.066C168.376 41.6201 168.632 41.861 168.632 42.152V50.4208C168.632 50.7118 168.38 50.9527 168.066 50.9527H164.777C164.468 50.9527 164.212 50.7118 164.212 50.4208V42.152C164.212 41.861 164.464 41.6201 164.777 41.6201Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.116 41.4701H168.734C168.84 41.4701 168.924 41.3883 168.924 41.2883C168.924 41.1883 168.84 41.1064 168.734 41.1064H164.116C164.01 41.1064 163.926 41.1883 163.926 41.2883C163.926 41.3883 164.014 41.4701 164.116 41.4701Z",
            fill: "white"
          }), jsx("path", {
            d: "M166.42 43.302H163.921V48.8525H166.42V43.302Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.764 41.1066H168.08C168.544 41.1066 168.923 40.7474 168.923 40.311V32.274C168.923 31.8376 168.544 31.4785 168.08 31.4785H164.764C164.301 31.4785 163.921 31.8376 163.921 32.274V40.311C163.921 40.7474 164.301 41.1066 164.764 41.1066Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.777 31.6284H168.066C168.376 31.6284 168.632 31.8693 168.632 32.1603V40.4291C168.632 40.7201 168.38 40.961 168.066 40.961H164.777C164.468 40.961 164.212 40.7201 164.212 40.4291V32.1603C164.212 31.8693 164.464 31.6284 164.777 31.6284Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.115 31.4784H168.733C168.839 31.4784 168.923 31.3966 168.923 31.2966C168.923 31.1966 168.839 31.1147 168.733 31.1147H164.115C164.009 31.1147 163.925 31.1966 163.925 31.2966C163.925 31.3966 164.013 31.4784 164.115 31.4784Z",
            fill: "white"
          }), jsx("path", {
            d: "M166.42 33.3103H163.921V38.8608H166.42V33.3103Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.689 48.8844H172.283C172.787 48.8844 173.197 48.498 173.197 48.0207V39.3063C173.197 38.8336 172.787 38.4426 172.283 38.4426H168.689C168.186 38.4426 167.775 38.829 167.775 39.3063V48.0207C167.775 48.4934 168.186 48.8844 168.689 48.8844Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.702 38.6064H172.27C172.605 38.6064 172.879 38.8656 172.879 39.1838V48.1481C172.879 48.4663 172.605 48.7255 172.27 48.7255H168.702C168.367 48.7255 168.093 48.4663 168.093 48.1481V39.1838C168.093 38.8656 168.367 38.6064 168.702 38.6064Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M167.983 38.4427H172.99C173.105 38.4427 173.197 38.3563 173.197 38.2472C173.197 38.1381 173.105 38.0518 172.99 38.0518H167.983C167.868 38.0518 167.775 38.1381 167.775 38.2472C167.775 38.3563 167.868 38.4427 167.983 38.4427Z",
            fill: "white"
          }), jsx("path", {
            d: "M170.486 40.4292H167.775V46.4479H170.486V40.4292Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.689 38.0519H172.283C172.787 38.0519 173.197 37.6655 173.197 37.1882V28.4738C173.197 28.001 172.787 27.6101 172.283 27.6101H168.689C168.186 27.6101 167.775 27.9965 167.775 28.4738V37.1882C167.775 37.6609 168.186 38.0519 168.689 38.0519Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.702 27.7737H172.27C172.605 27.7737 172.879 28.0328 172.879 28.351V37.3154C172.879 37.6336 172.605 37.8927 172.27 37.8927H168.702C168.367 37.8927 168.093 37.6336 168.093 37.3154V28.351C168.093 28.0328 168.367 27.7737 168.702 27.7737Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M167.983 27.6146H172.99C173.105 27.6146 173.197 27.5282 173.197 27.4191C173.197 27.31 173.105 27.2236 172.99 27.2236H167.983C167.868 27.2236 167.775 27.31 167.775 27.4191C167.775 27.5282 167.868 27.6146 167.983 27.6146Z",
            fill: "white"
          }), jsx("path", {
            d: "M170.486 29.5964H167.775V35.6151H170.486V29.5964Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 48.7433L150.34 49.3343V48.216L151.095 47.5205V48.7433Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.986 49.6072L149.319 50.1254V49.1435L149.986 48.5298V49.6072Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.002 50.3754L148.428 50.8209V49.9708L149.002 49.439V50.3754Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 57.226L148.428 58.958V57.5624L151.095 55.6804V57.226Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 45.2658L155.13 47.6569V46.0522L158.203 43.4565V45.2658Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 52.2938L155.13 54.2848V52.6802L158.203 50.5164V52.2938Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 83.0964H134.709C134.983 83.0964 135.208 82.8873 135.208 82.6282V80.2053C135.208 79.9462 134.983 79.7371 134.709 79.7371H132.753C132.479 79.7371 132.254 79.9462 132.254 80.2053V82.6282C132.254 82.8873 132.479 83.0964 132.753 83.0964Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 79.8188H134.192C134.656 79.8188 135.031 80.1734 135.031 80.6098V82.2099C135.031 82.6463 134.652 83.0009 134.192 83.0009H133.27C132.806 83.0009 132.431 82.6463 132.431 82.2099V80.6098C132.431 80.1734 132.81 79.8188 133.27 79.8188Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 79.7325H135.093C135.155 79.7325 135.208 79.6825 135.208 79.628C135.208 79.5689 135.159 79.5234 135.093 79.5234H132.369C132.307 79.5234 132.254 79.5734 132.254 79.628C132.254 79.6871 132.302 79.7325 132.369 79.7325Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 79.6917H133.671C133.707 79.6917 133.737 79.6645 133.737 79.6281C133.737 79.5917 133.707 79.5645 133.671 79.5645H132.514C132.479 79.5645 132.448 79.5917 132.448 79.6281C132.448 79.6645 132.479 79.6917 132.514 79.6917Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 80.8145H132.603V81.7736H134.925V80.8145Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 79.5007H134.709C134.983 79.5007 135.208 79.2916 135.208 79.0325V76.6096C135.208 76.3505 134.983 76.1414 134.709 76.1414H132.753C132.479 76.1414 132.254 76.3505 132.254 76.6096V79.0325C132.254 79.2916 132.479 79.5007 132.753 79.5007Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 76.2275H134.192C134.656 76.2275 135.031 76.5821 135.031 77.0185V78.6186C135.031 79.055 134.652 79.4096 134.192 79.4096H133.27C132.806 79.4096 132.431 79.055 132.431 78.6186V77.0185C132.431 76.5821 132.81 76.2275 133.27 76.2275Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 76.1412H135.093C135.155 76.1412 135.208 76.0912 135.208 76.0367C135.208 75.9776 135.159 75.9321 135.093 75.9321H132.369C132.307 75.9321 132.254 75.9821 132.254 76.0367C132.254 76.0958 132.302 76.1412 132.369 76.1412Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 76.0958H133.671C133.707 76.0958 133.737 76.0685 133.737 76.0321C133.737 75.9958 133.707 75.9685 133.671 75.9685H132.514C132.479 75.9685 132.448 75.9958 132.448 76.0321C132.448 76.0685 132.479 76.0958 132.514 76.0958Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 77.2185H132.603V78.1777H134.925V77.2185Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 75.9275H134.709C134.983 75.9275 135.208 75.7184 135.208 75.4593V73.0363C135.208 72.7772 134.983 72.5681 134.709 72.5681H132.753C132.479 72.5681 132.254 72.7772 132.254 73.0363V75.4593C132.254 75.7184 132.479 75.9275 132.753 75.9275Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 72.6499H134.192C134.656 72.6499 135.031 73.0045 135.031 73.4409V75.041C135.031 75.4774 134.652 75.832 134.192 75.832H133.27C132.806 75.832 132.431 75.4774 132.431 75.041V73.4409C132.431 73.0045 132.81 72.6499 133.27 72.6499Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 72.5636H135.093C135.155 72.5636 135.208 72.5136 135.208 72.459C135.208 72.3999 135.159 72.3545 135.093 72.3545H132.369C132.307 72.3545 132.254 72.4045 132.254 72.459C132.254 72.5181 132.302 72.5636 132.369 72.5636Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 72.5228H133.671C133.707 72.5228 133.737 72.4955 133.737 72.4591C133.737 72.4228 133.707 72.3955 133.671 72.3955H132.514C132.479 72.3955 132.448 72.4228 132.448 72.4591C132.448 72.4955 132.479 72.5228 132.514 72.5228Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 73.6455H132.603V74.6047H134.925V73.6455Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 83.0962H136.286C136.573 83.0962 136.811 82.8734 136.811 82.6007V80.0414C136.811 79.7686 136.577 79.5459 136.286 79.5459H134.224C133.937 79.5459 133.698 79.7686 133.698 80.0414V82.6007C133.698 82.8734 133.932 83.0962 134.224 83.0962Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 79.6414H135.791C136.255 79.6414 136.63 79.9959 136.63 80.4323V82.2097C136.63 82.6461 136.25 83.0007 135.791 83.0007H134.723C134.259 83.0007 133.884 82.6461 133.884 82.2097V80.4323C133.884 79.9959 134.263 79.6414 134.723 79.6414Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 79.5459H136.696C136.762 79.5459 136.815 79.4959 136.815 79.4323C136.815 79.3686 136.762 79.3186 136.696 79.3186H133.821C133.755 79.3186 133.702 79.3686 133.702 79.4323C133.702 79.4959 133.755 79.5459 133.821 79.5459Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 79.505H135.19C135.229 79.505 135.26 79.4732 135.26 79.4368C135.26 79.4005 135.229 79.3687 135.19 79.3687H133.971C133.931 79.3687 133.9 79.4005 133.9 79.4368C133.9 79.4732 133.931 79.505 133.971 79.505Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M136.515 80.687H134.064V81.6962H136.515V80.687Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 79.3049H136.286C136.573 79.3049 136.811 79.0822 136.811 78.8094V76.2501C136.811 75.9774 136.577 75.7546 136.286 75.7546H134.224C133.937 75.7546 133.698 75.9774 133.698 76.2501V78.8094C133.698 79.0822 133.932 79.3049 134.224 79.3049Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 75.8455H135.791C136.255 75.8455 136.63 76.2 136.63 76.6364V78.4139C136.63 78.8503 136.25 79.2048 135.791 79.2048H134.723C134.259 79.2048 133.884 78.8503 133.884 78.4139V76.6364C133.884 76.2 134.263 75.8455 134.723 75.8455Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 75.7546H136.696C136.762 75.7546 136.815 75.7046 136.815 75.641C136.815 75.5773 136.762 75.5273 136.696 75.5273H133.821C133.755 75.5273 133.702 75.5773 133.702 75.641C133.702 75.7046 133.755 75.7546 133.821 75.7546Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 75.7091H135.19C135.229 75.7091 135.26 75.6773 135.26 75.6409C135.26 75.6046 135.229 75.5728 135.19 75.5728H133.971C133.931 75.5728 133.9 75.6046 133.9 75.6409C133.9 75.6773 133.931 75.7091 133.971 75.7091Z",
            fill: "white"
          }), jsx("path", {
            d: "M136.515 76.8958H134.064V77.9049H136.515V76.8958Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 75.532H136.286C136.573 75.532 136.811 75.3092 136.811 75.0365V72.4772C136.811 72.2044 136.577 71.9817 136.286 71.9817H134.224C133.937 71.9817 133.698 72.2044 133.698 72.4772V75.0365C133.698 75.3092 133.932 75.532 134.224 75.532Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 72.0725H135.791C136.255 72.0725 136.63 72.4271 136.63 72.8635V74.6409C136.63 75.0773 136.25 75.4319 135.791 75.4319H134.723C134.259 75.4319 133.884 75.0773 133.884 74.6409V72.8635C133.884 72.4271 134.263 72.0725 134.723 72.0725Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 71.9817H136.696C136.762 71.9817 136.815 71.9317 136.815 71.868C136.815 71.8044 136.762 71.7544 136.696 71.7544H133.821C133.755 71.7544 133.702 71.8044 133.702 71.868C133.702 71.9317 133.755 71.9817 133.821 71.9817Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 71.9362H135.19C135.229 71.9362 135.26 71.9044 135.26 71.868C135.26 71.8316 135.229 71.7998 135.19 71.7998H133.971C133.931 71.7998 133.9 71.8316 133.9 71.868C133.9 71.9044 133.931 71.9362 133.971 71.9362Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M136.515 73.1228H134.064V74.132H136.515V73.1228Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 82.9552H138.692C139.001 82.9552 139.253 82.7189 139.253 82.4234V79.6823C139.253 79.3913 139.001 79.1504 138.692 79.1504H136.485C136.176 79.1504 135.924 79.3868 135.924 79.6823V82.4234C135.924 82.7143 136.176 82.9552 136.485 82.9552Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 79.2549H138.219C138.682 79.2549 139.058 79.6095 139.058 80.0459V82.0597C139.058 82.4961 138.678 82.8506 138.219 82.8506H136.956C136.492 82.8506 136.117 82.4961 136.117 82.0597V80.0459C136.117 79.6095 136.497 79.2549 136.956 79.2549Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 79.1549H139.124C139.195 79.1549 139.252 79.1003 139.252 79.0322C139.252 78.964 139.195 78.9094 139.124 78.9094H136.047C135.976 78.9094 135.919 78.964 135.919 79.0322C135.919 79.1003 135.976 79.1549 136.047 79.1549Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 79.1093H137.518C137.562 79.1093 137.593 79.0775 137.593 79.0366C137.593 78.9957 137.557 78.9639 137.518 78.9639H136.211C136.167 78.9639 136.136 78.9957 136.136 79.0366C136.136 79.0775 136.171 79.1093 136.211 79.1093Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M138.935 80.3777H136.312V81.4596H138.935V80.3777Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 78.8959H138.692C139.001 78.8959 139.253 78.6595 139.253 78.3641V75.6229C139.253 75.332 139.001 75.0911 138.692 75.0911H136.485C136.176 75.0911 135.924 75.3274 135.924 75.6229V78.3641C135.924 78.655 136.176 78.8959 136.485 78.8959Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 75.1956H138.219C138.682 75.1956 139.058 75.5501 139.058 75.9865V78.0003C139.058 78.4367 138.678 78.7913 138.219 78.7913H136.956C136.492 78.7913 136.117 78.4367 136.117 78.0003V75.9865C136.117 75.5501 136.497 75.1956 136.956 75.1956Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 75.0956H139.124C139.195 75.0956 139.252 75.041 139.252 74.9728C139.252 74.9046 139.195 74.8501 139.124 74.8501H136.047C135.976 74.8501 135.919 74.9046 135.919 74.9728C135.919 75.041 135.976 75.0956 136.047 75.0956Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 75.0456H137.518C137.562 75.0456 137.593 75.0138 137.593 74.9729C137.593 74.932 137.557 74.9001 137.518 74.9001H136.211C136.167 74.9001 136.136 74.932 136.136 74.9729C136.136 75.0138 136.171 75.0456 136.211 75.0456Z",
            fill: "white"
          }), jsx("path", {
            d: "M138.935 76.3137H136.312V77.3956H138.935V76.3137Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 74.8547H138.692C139.001 74.8547 139.253 74.6183 139.253 74.3228V71.5817C139.253 71.2907 139.001 71.0498 138.692 71.0498H136.485C136.176 71.0498 135.924 71.2862 135.924 71.5817V74.3228C135.924 74.6137 136.176 74.8547 136.485 74.8547Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 71.1543H138.219C138.682 71.1543 139.058 71.5089 139.058 71.9453V73.9591C139.058 74.3955 138.678 74.75 138.219 74.75H136.956C136.492 74.75 136.117 74.3955 136.117 73.9591V71.9453C136.117 71.5089 136.497 71.1543 136.956 71.1543Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 71.0543H139.124C139.195 71.0543 139.252 70.9998 139.252 70.9316C139.252 70.8634 139.195 70.8088 139.124 70.8088H136.047C135.976 70.8088 135.919 70.8634 135.919 70.9316C135.919 70.9998 135.976 71.0543 136.047 71.0543Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 71.0043H137.518C137.562 71.0043 137.593 70.9725 137.593 70.9316C137.593 70.8907 137.557 70.8589 137.518 70.8589H136.211C136.167 70.8589 136.136 70.8907 136.136 70.9316C136.136 70.9725 136.171 71.0043 136.211 71.0043Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M138.935 72.2725H136.312V73.3544H138.935V72.2725Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 73.0909L138.029 74.2046V69.8497L141.932 68.2542V73.0909Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M145.845 68.2542H141.933V73.0864H145.845V68.2542Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 77.923L138.029 78.5594V74.2046L141.932 73.0908V77.923Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M145.845 73.0908H141.933V77.9276H145.845V73.0908Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 82.7598L138.029 82.9144V78.5595L141.932 77.9231V82.7598Z",
            fill: "white"
          }), jsx("path", {
            d: "M145.845 77.9231H141.933V82.7553H145.845V77.9231Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 71.0452L143.836 72.368V67.1994L148.463 65.3083V71.0452Z",
            fill: "white"
          }), jsx("path", {
            d: "M153.108 65.3083H148.463V71.0452H153.108V65.3083Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 76.7865L143.836 77.5366V72.368L148.463 71.0452V76.7865Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M153.108 71.0452H148.463V76.782H153.108V71.0452Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 82.5234L143.836 82.7053V77.5367L148.463 76.7866V82.5234Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M153.108 76.7866H148.463V82.5234H153.108V76.7866Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 68.5996L150.785 70.1633V64.0447L156.265 61.8081V68.5996Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M161.762 61.8081H156.265V68.5996H161.762V61.8081Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 75.3865L150.785 76.2775V70.1634L156.265 68.5996V75.3865Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M161.762 68.5996H156.265V75.3911H161.762V68.5996Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 82.1779L150.785 82.3961V76.2775L156.265 75.3865V82.1779Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M161.762 75.3865H156.265V82.1779H161.762V75.3865Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 65.4538L159.85 67.3403V59.9624L166.459 57.2622V65.4538Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M173.091 57.2622H166.459V65.4538H173.091V57.2622Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 73.6454L159.85 74.7228V67.3404L166.459 65.4539V73.6454Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M173.091 65.4539H166.459V73.6454H173.091V65.4539Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 81.8368L159.85 82.1005V74.7226L166.459 73.6453V81.8368Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M173.091 73.6453H166.459V81.8368H173.091V73.6453Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.371 91.0422H137.283V96.5563C137.283 96.7291 136.409 96.87 135.327 96.87C134.245 96.87 133.371 96.7291 133.371 96.5563V91.0422Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.327 91.3514C136.404 91.3514 137.283 91.2105 137.283 91.0378C137.283 90.865 136.404 90.7241 135.327 90.7241C134.25 90.7241 133.371 90.865 133.371 91.0378C133.371 91.2105 134.25 91.3514 135.327 91.3514Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.371 85.5283H137.283V91.0424C137.283 91.2151 136.409 91.3561 135.327 91.3561C134.245 91.3561 133.371 91.2151 133.371 91.0424V85.5283Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.327 85.8419C136.404 85.8419 137.283 85.701 137.283 85.5283C137.283 85.3555 136.404 85.2146 135.327 85.2146C134.25 85.2146 133.371 85.3555 133.371 85.5283C133.371 85.701 134.25 85.8419 135.327 85.8419Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.882 91.8879H141.271V98.0703C141.271 98.2657 140.29 98.4203 139.076 98.4203C137.862 98.4203 136.882 98.2657 136.882 98.0703V91.8879Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.076 92.2379C140.286 92.2379 141.271 92.0788 141.271 91.8879C141.271 91.6969 140.286 91.5378 139.076 91.5378C137.866 91.5378 136.882 91.6969 136.882 91.8879C136.882 92.0788 137.866 92.2379 139.076 92.2379Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.882 85.7056H141.271V91.8879C141.271 92.0788 140.29 92.2379 139.076 92.2379C137.862 92.2379 136.882 92.0834 136.882 91.8879V85.7056Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.076 86.0555C140.286 86.0555 141.271 85.8964 141.271 85.7055C141.271 85.5146 140.286 85.3555 139.076 85.3555C137.866 85.3555 136.882 85.5146 136.882 85.7055C136.882 85.8964 137.866 86.0555 139.076 86.0555Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.516 92.8606H145.452V99.8203C145.452 100.038 144.348 100.216 142.984 100.216C141.619 100.216 140.516 100.038 140.516 99.8203V92.8606Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.984 93.2561C144.344 93.2561 145.452 93.0788 145.452 92.8606C145.452 92.6424 144.344 92.4651 142.984 92.4651C141.624 92.4651 140.516 92.6424 140.516 92.8606C140.516 93.0788 141.624 93.2561 142.984 93.2561Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.516 85.9009H145.452V92.8605C145.452 93.0787 144.348 93.256 142.984 93.256C141.619 93.256 140.516 93.0787 140.516 92.8605V85.9009Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.984 86.2963C144.344 86.2963 145.452 86.1191 145.452 85.9009C145.452 85.6827 144.344 85.5054 142.984 85.5054C141.624 85.5054 140.516 85.6827 140.516 85.9009C140.516 86.1191 141.624 86.2963 142.984 86.2963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.569 93.8154H150.119V101.639C150.119 101.884 148.878 102.08 147.342 102.08C145.805 102.08 144.564 101.88 144.564 101.639V93.8154H144.569Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M147.346 94.2608C148.873 94.2608 150.123 94.0608 150.123 93.8199C150.123 93.5789 148.878 93.3789 147.346 93.3789C145.813 93.3789 144.568 93.5789 144.568 93.8199C144.568 94.0608 145.813 94.2608 147.346 94.2608Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.569 85.9963H150.119V93.8197C150.119 94.0652 148.878 94.2607 147.342 94.2607C145.805 94.2607 144.564 94.0606 144.564 93.8197V85.9963H144.569Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M147.346 86.4373C148.873 86.4373 150.123 86.2373 150.123 85.9964C150.123 85.7554 148.878 85.5554 147.346 85.5554C145.813 85.5554 144.568 85.7554 144.568 85.9964C144.568 86.2373 145.813 86.4373 147.346 86.4373Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.149 103.657H137.412L134.493 101.861H136.975L140.149 103.657Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M165.095 94.938C166.42 94.938 167.493 97.0563 167.493 99.6747C167.493 102.289 166.424 104.411 165.1 104.411C163.775 104.411 162.702 102.293 162.702 99.6747C162.702 97.0609 163.771 94.938 165.095 94.938Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            d: "M165.095 94.938H150.494V104.407H165.095V94.938Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.494 94.938C151.818 94.938 152.891 97.0563 152.891 99.6747C152.891 102.289 151.823 104.411 150.498 104.411C149.173 104.411 148.101 102.293 148.101 99.6747C148.101 97.0609 149.169 94.938 150.494 94.938Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.074 97.261C150.595 97.261 151.015 98.3429 151.015 99.6748C151.015 101.007 150.595 102.089 150.074 102.089C149.553 102.089 149.134 101.007 149.134 99.6748C149.134 98.3429 149.553 97.261 150.074 97.261Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M165.043 85.4963C166.367 85.4963 167.44 87.6147 167.44 90.2331C167.44 92.8469 166.371 94.9698 165.047 94.9698C163.722 94.9698 162.649 92.8515 162.649 90.2331C162.649 87.6192 163.718 85.4963 165.043 85.4963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            d: "M165.048 85.4963H150.446V94.9653H165.048V85.4963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.446 85.4963C151.77 85.4963 152.843 87.6147 152.843 90.2331C152.843 92.8469 151.775 94.9698 150.45 94.9698C149.126 94.9698 148.053 92.8515 148.053 90.2331C148.053 87.6192 149.121 85.4963 150.446 85.4963Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.026 87.8193C150.547 87.8193 150.967 88.9012 150.967 90.2332C150.967 91.5651 150.547 92.647 150.026 92.647C149.505 92.647 149.086 91.5651 149.086 90.2332C149.086 88.9012 149.505 87.8193 150.026 87.8193Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M172.905 96.5154H156.6V107.094H172.905V96.5154Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.6 96.5154C158.075 96.5154 159.276 98.8838 159.276 101.802C159.276 104.721 158.083 107.089 156.604 107.089C155.125 107.089 153.929 104.721 153.929 101.802C153.929 98.8838 155.125 96.5154 156.6 96.5154Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.132 99.1111C156.71 99.1111 157.183 100.316 157.183 101.807C157.183 103.293 156.715 104.502 156.132 104.502C155.549 104.502 155.081 103.298 155.081 101.807C155.081 100.32 155.549 99.1111 156.132 99.1111Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M172.905 85.9419H156.6V96.52H172.905V85.9419Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.6 85.9419C158.075 85.9419 159.276 88.3103 159.276 91.2287C159.276 94.1471 158.083 96.5155 156.604 96.5155C155.125 96.5155 153.929 94.1471 153.929 91.2287C153.929 88.3103 155.125 85.9419 156.6 85.9419Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.132 88.533C156.71 88.533 157.183 89.7376 157.183 91.2286C157.183 92.7151 156.715 93.9243 156.132 93.9243C155.549 93.9243 155.081 92.7197 155.081 91.2286C155.081 89.7422 155.549 88.533 156.132 88.533Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M181.984 98.2202H163.563V110.171H181.984V98.2202Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.563 98.2202C165.232 98.2202 166.588 100.893 166.588 104.193C166.588 107.494 165.237 110.167 163.572 110.167C161.908 110.167 160.548 107.494 160.548 104.193C160.548 100.893 161.899 98.2202 163.568 98.2202H163.563Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.033 101.152C163.691 101.152 164.221 102.516 164.221 104.198C164.221 105.88 163.691 107.244 163.033 107.244C162.376 107.244 161.846 105.88 161.846 104.198C161.846 102.516 162.376 101.152 163.033 101.152Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M181.984 86.269H163.563V98.2155H181.984V86.269Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.563 86.269C165.232 86.269 166.588 88.942 166.588 92.2423C166.588 95.5425 165.237 98.2155 163.572 98.2155C161.908 98.2155 160.548 95.5425 160.548 92.2423C160.548 88.942 161.899 86.269 163.568 86.269H163.563Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.033 89.2012C163.691 89.2012 164.221 90.5649 164.221 92.2469C164.221 93.9288 163.691 95.2926 163.033 95.2926C162.376 95.2926 161.846 93.9288 161.846 92.2469C161.846 90.5649 162.376 89.2012 163.033 89.2012Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M173.525 112.689C174.346 112.689 175.013 112.117 175.013 111.417V97.1518C175.013 94.3561 172.951 94.1288 172.893 93.1469L172.571 87.5374H170.364L170.041 93.1469C169.984 94.1288 167.922 94.3561 167.922 97.1518V111.417C167.922 112.117 168.593 112.689 169.41 112.689H173.525Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M171.295 97.5063H167.917V105.934H171.295V97.5063Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M137.412 113.571H147.797V107.962L140.15 103.657H137.412V113.571Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.246 117.985H154.017L154.26 111.635L145.615 106.748H142.246V117.985Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M145.641 106.748H142.246L138.935 104.716H142.025L145.641 106.748Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.188 123.522H161.969L162.088 116.049L151.972 110.344L148.188 110.366V123.522Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.973 110.344L148.189 110.367L144.312 107.98L147.796 107.962L151.973 110.344Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M154.578 129.427H170.517V120.817L158.83 114.203H154.578V129.427Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.83 114.203H154.578L150.092 111.448H153.924L158.83 114.203Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M161.599 135.946H179.829V126.1L166.46 118.54H161.599V135.946Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M176.358 127.613L163.991 120.013V138.369L176.358 149.751V127.613Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.991 120.013H169.064L182.509 127.613H176.358L163.991 120.013Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M161.599 118.54L156.473 115.385V131.223L161.599 135.946V118.54Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M154.573 114.203L150.092 111.448V125.281L154.573 129.404V114.203Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "0.22",
            strokeMiterlimit: "22.93"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.185 110.362L144.312 107.98V119.949L148.185 123.518V110.362Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.246 106.753L138.935 104.716V114.944L142.246 117.994V106.753Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M137.412 103.657L134.493 101.861V110.871L137.412 113.553V103.657Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.46 118.54H161.599L156.473 115.385H160.888L166.46 118.54Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M157.62 120.763L160.04 122.677V128.995L157.62 127V120.763Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.28 116.472L153.382 117.958V123.522L151.28 121.79V116.472Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M145.346 112.29L147.152 113.571V118.354L145.346 116.863V112.29Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.849 108.325L141.46 109.466V113.721L139.849 112.394V108.325Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.253 105.094L136.626 106.066V109.708L135.253 108.571V105.094Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M153.386 110.33V108.198L156.94 109.985V112.271L153.386 110.33Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.873 101.252V99.8521L139.204 101.029V102.53L136.873 101.252Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.257 119.767V118.085L141.566 120.363V122.222L139.257 119.767Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.641 84.8235V83.4916L135.972 83.437V84.8735L133.641 84.8235Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.428 85.0418V83.1916L147.669 83.1189V85.1145L144.428 85.0418Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 51.1209L148.428 53.1984V51.8028L151.095 49.5481V51.1209Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 54.8576L150.34 55.4032V54.2212L151.095 53.6257V54.8576Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.986 55.6577L149.319 56.1396V54.9713L149.986 54.4758V55.6577Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.002 56.3668L148.428 56.785V55.644L149.002 55.2122V56.3668Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 42.5293L157.333 43.2067V41.9202L158.203 41.1201V42.5293Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.926 43.5248L156.158 44.1203V42.9884L156.926 42.2883V43.5248Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M155.797 44.4067L155.13 44.9249V43.943L155.797 43.3293V44.4067Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 49.5662L157.333 50.1936V48.8389L158.203 48.1479V49.5662Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.926 50.489L156.158 51.0436V49.698L156.926 49.1252V50.489Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M155.797 51.3073L155.13 51.7891V50.4754L155.797 49.9753V51.3073Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 59.7806L132.122 58.1487V110.271L130.471 108.635V59.7806Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 108.635L203.173 180.49V190.618L130.471 111.207V108.635Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2122L203.173 -22.1987V-12.0752L130.471 59.7806V57.2122Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 70.2316V72.3045L203.173 37.288V29.1191L130.471 70.2316Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 98.1838V96.1155L203.173 131.132V139.301L130.471 98.1838Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 83.2281L203.173 80.3369V88.0785L130.471 85.1919V83.2281Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 59.7806H132.122L203.173 -6.03834V-12.0752L130.471 59.7806Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 72.3043H132.122L203.173 40.229V37.2878L130.471 72.3043Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 96.1155H132.122L203.173 128.191V131.132L130.471 96.1155Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 108.635H132.122L203.173 174.458V180.49L130.471 108.635Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2122L128.921 58.9077V109.512L130.471 111.207V57.2122Z",
            fill: "#9E9E9E"
          })]
        }))]
      })), jsx("path", {
        d: "M24.5907 65.1246C22.2859 57.4787 20.8652 44.4072 30.5574 35.4674C37.9646 28.6352 57.9758 27.9467 64.937 42.8463C66.099 45.3335 64.5108 49.2318 61.3853 49.0899C60.1571 49.0331 59.3964 52.9212 58.6861 55.3335C59.6806 65.1246 68.5403 65.3054 73.0346 72.7872C78.5751 82.0107 71.756 95.6332 55.4187 95.6332C39.0813 95.6332 29.7158 82.1257 24.5907 65.1246Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M37.3676 75.6793C37.3676 73.1251 37.3631 60.4708 37.3674 60.2579C30.3469 61.2915 30.9425 48.0087 38.0457 51.2724C39.6084 52.2657 44.4681 54.5975 44.0419 46.3673C50.7171 49.4953 56.2798 48.0342 55.1672 44.1448C59.6174 50.2567 60.928 47.4785 60.928 49.4953C61.9711 60.1761 60.9218 71.3539 54.2763 71.3547C53.5493 71.3459 52.5449 70.9499 51.8305 70.8148V75.6793C51.8305 78.5173 51.8305 79.9363 51.8305 79.9363C51.8305 79.9363 48.3903 88.2517 44.7228 88.2057C41.0552 88.1597 37.3676 79.9363 37.3676 79.9363C37.3676 79.9363 37.3676 78.5173 37.3676 75.6793Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M49.0683 50.7405C48.3148 50.9172 47.6861 51.2154 47.3484 51.4276C47.1877 51.5286 46.9755 51.4803 46.8744 51.3198C46.7734 51.1593 46.8217 50.9474 46.9824 50.8464C47.3832 50.5946 48.0822 50.2665 48.9112 50.072C49.7404 49.8775 50.7259 49.8108 51.6828 50.1139C51.8637 50.1712 51.9639 50.3642 51.9065 50.5449C51.8491 50.7257 51.6559 50.8257 51.475 50.7684C50.6736 50.5146 49.8217 50.5638 49.0683 50.7405Z",
        fill: "#5C3737"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M57.2248 50.6655C56.7867 50.6402 56.3793 50.7521 56.15 50.8573C55.9775 50.9364 55.7735 50.8609 55.6942 50.6886C55.615 50.5163 55.6906 50.3125 55.8631 50.2333C56.1804 50.0878 56.6995 49.9474 57.2645 49.98C57.8381 50.0132 58.4734 50.2268 58.9734 50.807C59.0972 50.9507 59.081 51.1675 58.9371 51.2912C58.7932 51.4149 58.5762 51.3986 58.4524 51.2549C58.099 50.8448 57.6544 50.6903 57.2248 50.6655Z",
        fill: "#5C3737"
      }), jsx("path", {
        d: "M49.9982 54.1426C49.9982 54.989 49.7108 55.6492 49.2915 55.6661C48.8721 55.683 48.5149 55.0398 48.4683 54.2103C48.4217 53.3809 48.7479 52.7038 49.175 52.6868C49.6021 52.6699 49.9671 53.3216 49.9982 54.1426Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M57.8409 54.1426C57.8409 54.989 57.5536 55.6492 57.1342 55.6661C56.7148 55.683 56.3576 55.0398 56.311 54.2103C56.2644 53.3809 56.5983 52.7038 57.0177 52.6868C57.4371 52.6699 57.8409 53.3216 57.8409 54.1426Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M50.9997 63.8071C51.5365 64.2975 52.2653 64.5838 53.0336 64.6055C53.4079 64.6055 53.7822 64.5448 54.1269 64.4189C54.4717 64.2931 54.7869 64.1065 55.0479 63.8679C55.3089 63.6292 55.5157 63.3515 55.6536 63.0434C55.7915 62.7354 55.8555 62.4056 55.8457 62.0758L50.1674 61.989C50.1674 62.6659 50.4678 63.3211 50.9997 63.8071Z",
        fill: "#5C3737"
      }), jsx("path", {
        d: "M51.3883 64.0974C50.9026 63.7849 50.5344 63.355 50.3361 62.856C51.0003 62.7345 51.7006 62.8477 52.2706 63.1688C52.8405 63.4899 53.2692 64.002 53.4229 64.5834C53.3039 64.5964 53.1683 64.6039 53.0493 64.6082C52.4496 64.5908 51.8691 64.4098 51.3883 64.0974Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M50.2513 62.2552C50.2175 62.2107 50.1856 62.0592 50.1738 61.989L55.8469 62.0757C55.8525 62.1896 55.8304 62.3956 55.8187 62.4843C55.4804 62.5277 50.2936 62.311 50.2513 62.2552Z",
        fill: "white"
      }), jsx("path", {
        d: "M54.1495 54.9999C54.3094 54.2731 54.25 53.5153 53.9789 52.8223C53.7078 52.1292 53.2371 51.5319 52.6263 51.1059C52.0155 50.6799 51.292 50.4443 50.5472 50.4288C49.8024 50.4133 49.0698 50.6187 48.4418 51.0189C47.8138 51.4192 47.3186 51.9963 47.0189 52.6776C46.7191 53.3588 46.6282 54.1134 46.7577 54.8462C46.8871 55.579 47.2311 56.257 47.7462 56.7946C48.2612 57.3322 48.9242 57.7053 49.6514 57.8666C50.1353 57.974 50.6356 57.985 51.1237 57.899C51.6118 57.813 52.0781 57.6316 52.4959 57.3653C52.9137 57.099 53.2748 56.753 53.5586 56.3471C53.8423 55.9412 54.0431 55.4834 54.1495 54.9999ZM53.6129 54.8794C53.4775 55.5002 53.1612 56.0671 52.7036 56.5084C52.2461 56.9498 51.668 57.2459 51.0422 57.3595C50.4163 57.473 49.7709 57.3988 49.1872 57.1463C48.6035 56.8938 48.1078 56.4743 47.7625 55.9407C47.4173 55.4071 47.238 54.7833 47.2474 54.148C47.2567 53.5128 47.4542 52.8945 47.8149 52.3712C48.1756 51.8479 48.6834 51.4431 49.2743 51.2078C49.8651 50.9725 50.5125 50.9172 51.1347 51.049C51.9681 51.2336 52.6945 51.74 53.1554 52.4576C53.6163 53.1752 53.7743 54.0459 53.5948 54.8794H53.6129Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M38.874 51.4094C38.874 51.2918 38.9694 51.1965 39.0871 51.1965C39.8808 51.1965 41.2146 51.2827 42.6515 51.5404C44.086 51.7977 45.6405 52.2289 46.8643 52.9274C46.9665 52.9857 47.002 53.1157 46.9436 53.2178C46.8852 53.3199 46.755 53.3553 46.6529 53.297C45.49 52.6333 43.9901 52.213 42.5762 51.9594C41.1648 51.7063 39.8562 51.6222 39.0871 51.6222C38.9694 51.6222 38.874 51.5269 38.874 51.4094Z",
        fill: "white"
      }), jsx("path", {
        d: "M62.5193 54.705C62.6795 53.978 62.6203 53.2199 62.3492 52.5265C62.078 51.8331 61.6071 51.2356 60.996 50.8095C60.3849 50.3834 59.6611 50.1478 58.916 50.1326C58.1709 50.1174 57.438 50.3232 56.8099 50.724C56.1819 51.1248 55.687 51.7026 55.3877 52.3843C55.0884 53.0661 54.9982 53.8211 55.1285 54.5541C55.2588 55.287 55.6037 55.9649 56.1197 56.502C56.6357 57.0392 57.2995 57.4114 58.0273 57.5718C58.5107 57.6783 59.0104 57.6886 59.4978 57.6021C59.9852 57.5157 60.4508 57.3342 60.8679 57.0679C61.2851 56.8017 61.6456 56.456 61.929 56.0506C62.2123 55.6451 62.413 55.1879 62.5193 54.705ZM61.9827 54.5846C61.8462 55.2059 61.5283 55.7729 61.0692 56.2137C60.6102 56.6546 60.0305 56.9496 59.4035 57.0614C58.7766 57.1731 58.1305 57.0967 57.5471 56.8417C56.9636 56.5867 56.469 56.1646 56.1257 55.6288C55.7824 55.093 55.606 54.4676 55.6186 53.8316C55.6312 53.1956 55.8324 52.5776 56.1966 52.0558C56.5609 51.534 57.0719 51.1319 57.665 50.9002C58.2581 50.6685 58.9067 50.6177 59.5287 50.7542C60.362 50.9387 61.0885 51.4451 61.5494 52.1627C62.0103 52.8804 62.1682 53.751 61.9887 54.5846H61.9827Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M54.5308 53.306C54.641 53.2619 54.7672 53.3147 54.8127 53.424C55.1727 54.2895 55.6378 55.5232 55.7843 56.6384C55.8575 57.1957 55.8539 57.7422 55.7041 58.2048C55.5514 58.676 55.2463 59.059 54.7339 59.2655C54.6238 59.3099 54.4974 59.2573 54.4517 59.1482C54.406 59.039 54.4582 58.9145 54.5683 58.8702C54.9474 58.7174 55.1731 58.4413 55.2928 58.0718C55.4153 57.6937 55.4255 57.2181 55.3562 56.6902C55.2176 55.6349 54.7722 54.4459 54.4136 53.5837C54.3681 53.4744 54.4206 53.3501 54.5308 53.306Z",
        fill: "#CD754D"
      }), jsx("g", Object.assign({
        style: {
          mixBlendMode: 'multiply'
        },
        opacity: "0.7"
      }, {
        children: jsx("path", {
          d: "M51.6387 71.1213C48.2824 70.3464 45.1031 68.8969 42.2764 66.8528C42.2764 66.8528 44.6016 72.8346 51.6253 73.9581L51.6387 71.1213Z",
          fill: "#EA925A"
        })
      })), jsx("path", {
        d: "M70.9747 86.1092L68.3886 98.545C68.1123 99.8795 67.8028 101.214 67.4602 102.549C67.0955 104.012 66.6755 105.465 66.2334 106.908L59.6686 128.142L59.3812 129.081L59.0939 130L58.4086 132.215L57.7566 134.33H33.8844L33.2434 132.215L32.4808 129.714L32.2929 129.081L31.6298 126.886L25.7833 107.64C25.2749 105.959 24.8439 104.249 24.4792 102.539C24.1255 100.858 23.8492 99.1678 23.6503 97.4774L20.6787 87.2205L25.6617 83.6774L32.4145 81.0282L32.7129 80.9095L37.1889 79.1598L41.2127 78.1909H51.5442L54.231 78.8039L56.2535 79.6837L58.7071 80.7514L63.5146 82.8569L70.9747 86.1092Z",
        fill: "#FAD2A0"
      }), jsx("path", {
        d: "M51.8291 80.5252V76.3711H37.3662V79.5241C37.3662 79.5241 41.7799 88.5498 45.5137 88.5947C49.2474 88.6395 51.8291 80.5252 51.8291 80.5252Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M73.3065 166.032L46.6824 180.633L17.0742 168.889C19.0746 157.975 24.7774 146.548 28.8335 139.411C31.3423 134.992 33.2322 132.214 33.2322 132.214H58.4085C59.9005 134.33 61.3372 136.791 62.6966 139.411C68.8084 151.164 73.3065 166.032 73.3065 166.032Z",
        fill: "#3A6598"
      }), jsx("path", {
        d: "M57.2364 241.637C52.5283 241.637 48.6822 238.295 48.5385 234.084L46.5713 170.452C46.5713 163.621 52.8156 158.036 60.4525 158.036C68.0894 158.036 74.3338 163.621 74.3338 170.452C76.732 191.765 73.1291 216.182 65.4812 236.368C64.2876 239.521 60.9609 241.637 57.2364 241.637Z",
        fill: "#3A6598"
      }), jsx("path", {
        d: "M34.0611 241.844C38.7692 241.844 42.6153 238.502 42.759 234.291L44.7262 170.659C44.7262 163.828 38.4819 158.243 30.845 158.243C23.2081 158.243 16.9638 163.828 16.9638 170.659C14.5655 191.972 18.1684 216.389 25.8164 236.575C27.01 239.728 30.3366 241.844 34.0611 241.844Z",
        fill: "#3A6598"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M117.085 88.7103C117.085 88.7103 110.939 92.8183 107.299 89.864C104.002 87.1885 105.844 83.4906 105.844 83.4906C105.844 83.4906 107.115 79.4573 110.052 76.0261C111.986 73.7655 116.094 69.9024 117.405 70.9277C119.113 72.2659 113.35 75.5341 114.289 76.8491C115.252 78.1983 116.131 78.2804 119.158 77.4819C121.05 76.9826 122.927 75.7335 124.627 75.6478C127.952 75.4803 126.835 83.4186 117.085 88.7103Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M124.926 76.5498C125.037 76.4608 125.19 76.4899 125.268 76.6146C125.345 76.7394 125.318 76.9127 125.206 77.0017C123.464 78.3957 121.829 79.3233 120.346 79.8729C119.825 80.0662 119.359 80.1984 118.954 80.2805L118.783 80.3129C118.626 80.3405 118.511 80.354 118.44 80.3581C118.304 80.3659 118.19 80.2482 118.185 80.0951C118.179 79.9421 118.285 79.8116 118.42 79.8038L118.49 79.7976C118.575 79.7881 118.703 79.7685 118.873 79.7342C119.255 79.6567 119.699 79.5308 120.198 79.3456C121.634 78.8135 123.225 77.9112 124.926 76.5498Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M124.57 78.4966C124.67 78.3925 124.825 78.3995 124.916 78.512C125.007 78.6246 124.999 78.8002 124.899 78.9042L124.803 78.9993C124.761 79.0397 124.71 79.0885 124.649 79.1452C124.447 79.3323 124.209 79.5396 123.935 79.7618C123.155 80.395 122.248 81.0219 121.222 81.5987C120.481 82.0151 119.704 82.39 118.892 82.7145C118.764 82.7658 118.624 82.6902 118.58 82.5458C118.536 82.4013 118.605 82.2427 118.733 82.1914C119.525 81.8747 120.284 81.5087 121.007 81.1022C122.008 80.5394 122.893 79.9283 123.652 79.3122L123.905 79.1023C124.066 78.966 124.211 78.8372 124.34 78.7174L124.519 78.5473C124.54 78.5265 124.557 78.5095 124.57 78.4966Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M123.241 81.592C123.356 81.5091 123.507 81.5464 123.579 81.6753C123.651 81.8042 123.616 81.9759 123.502 82.0588C121.997 83.1454 120.747 83.9138 119.737 84.4182L119.48 84.5433C119.233 84.6599 119.017 84.7519 118.83 84.8219L118.711 84.8652C118.676 84.8776 118.644 84.8881 118.617 84.8969L118.519 84.925L118.424 84.927L118.271 84.9005C118.22 84.8926 118.159 84.8837 118.09 84.8745C116.935 84.7206 115.625 84.7376 114.379 85.0673C112.952 85.4448 111.82 86.1923 111.087 87.3815C111.009 87.5078 110.856 87.54 110.745 87.4533C110.635 87.3666 110.608 87.1938 110.686 87.0675C111.497 85.7514 112.735 84.9336 114.272 84.5269C115.582 84.1802 116.946 84.1625 118.153 84.3233L118.398 84.3595L118.462 84.3703L118.576 84.3335L118.68 84.2955C118.913 84.2078 119.2 84.0818 119.542 83.9109C120.528 83.4185 121.757 82.6637 123.241 81.592Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M113.895 77.6616C114.03 77.6735 114.129 77.807 114.117 77.9598L114.096 78.1624L114.061 78.4084C114.048 78.4943 114.033 78.584 114.016 78.6768C113.917 79.2079 113.774 79.7375 113.576 80.2318C113.126 81.3537 112.461 82.1333 111.539 82.3951C111.407 82.4325 111.275 82.3423 111.243 82.1937C111.212 82.0451 111.293 81.8942 111.425 81.8568C112.177 81.6432 112.736 80.9874 113.129 80.0072C113.311 79.554 113.444 79.0626 113.535 78.5689C113.567 78.3958 113.592 78.2352 113.61 78.0912L113.628 77.9167C113.64 77.7639 113.76 77.6497 113.895 77.6616Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M108.22 65.702L117.271 62.5463C118.639 62.0693 120.106 62.7503 120.555 64.0547L128.37 86.758C128.822 88.0707 128.076 89.5144 126.716 89.9883L117.666 93.1441C116.298 93.6211 114.83 92.9401 114.381 91.6356L106.567 68.9324C106.115 67.6197 106.861 66.176 108.22 65.702Z",
        fill: "#373C4F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M107.443 68.809C107.142 67.9284 107.651 66.9577 108.581 66.6408L117.842 63.4848C118.772 63.1679 119.77 63.6249 120.071 64.5054L127.612 86.5609C127.913 87.4415 127.404 88.4122 126.474 88.7291L117.213 91.8851C116.283 92.202 115.285 91.745 114.984 90.8645L107.443 68.809Z",
          fill: "white"
        }), jsx("path", {
          d: "M110.337 73.6082C110.211 73.2413 110.423 72.8368 110.811 72.7048L113.417 71.8167C113.804 71.6847 114.22 71.8751 114.346 72.242C114.471 72.6089 114.259 73.0133 113.871 73.1454L111.265 74.0334C110.878 74.1655 110.462 73.9751 110.337 73.6082Z",
          fill: "#2CDFA6"
        }), jsx("path", {
          d: "M114.686 72.1257C114.561 71.7589 114.773 71.3544 115.161 71.2223L117.767 70.3343C118.154 70.2023 118.57 70.3926 118.695 70.7595C118.821 71.1264 118.608 71.5309 118.221 71.6629L115.615 72.551C115.227 72.683 114.812 72.4926 114.686 72.1257Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M119.037 70.6436C118.911 70.2767 119.124 69.8722 119.511 69.7402L121.616 69.0229L122.07 70.3515L119.965 71.0688C119.578 71.2009 119.162 71.0105 119.037 70.6436Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M111.109 75.8669C111.034 75.6467 111.161 75.404 111.394 75.3248L121.076 72.0254C121.308 71.9462 121.558 72.0604 121.633 72.2805L122.678 75.3364C122.753 75.5566 122.626 75.7993 122.393 75.8785L112.711 79.1779C112.479 79.2571 112.229 79.1429 112.154 78.9227L111.109 75.8669Z",
          fill: "#5C5C5C"
        }), jsx("path", {
          d: "M112.699 80.5172C112.624 80.2971 112.751 80.0544 112.983 79.9752L122.666 76.6758C122.898 76.5966 123.148 76.7108 123.223 76.9309L123.586 77.9939C123.661 78.214 123.534 78.4567 123.302 78.5359L113.619 81.8353C113.387 81.9145 113.137 81.8003 113.062 81.5802L112.699 80.5172Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M113.607 83.1745C113.532 82.9543 113.659 82.7117 113.892 82.6324L123.574 79.333C123.806 79.2538 124.056 79.368 124.131 79.5882L124.54 80.7839C124.615 81.0041 124.488 81.2468 124.255 81.326L114.573 84.6254C114.341 84.7046 114.091 84.5904 114.016 84.3703L113.607 83.1745Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M114.561 85.9645C114.486 85.7444 114.613 85.5017 114.846 85.4225L124.528 82.1231C124.76 82.0438 125.01 82.1581 125.085 82.3782L125.448 83.4411C125.524 83.6613 125.396 83.9039 125.164 83.9832L115.482 87.2826C115.249 87.3618 115 87.2476 114.925 87.0274L114.561 85.9645Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M115.47 88.622C115.395 88.4018 115.522 88.1592 115.755 88.0799L125.437 84.7805C125.669 84.7013 125.919 84.8155 125.994 85.0357L126.358 86.0986C126.433 86.3187 126.305 86.5614 126.073 86.6406L116.391 89.94C116.158 90.0193 115.909 89.905 115.834 89.6849L115.47 88.622Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M109.184 70.2355C109.143 70.1169 109.212 69.9861 109.337 69.9435L113.964 68.3667C114.089 68.324 114.224 68.3856 114.264 68.5042C114.305 68.6228 114.236 68.7536 114.111 68.7962L109.484 70.373C109.359 70.4157 109.224 70.3541 109.184 70.2355Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M109.409 70.8942C109.369 70.7756 109.437 70.6448 109.563 70.6022L112.436 69.6231C112.561 69.5804 112.695 69.642 112.736 69.7606C112.776 69.8792 112.708 70.01 112.583 70.0526L109.71 71.0317C109.584 71.0744 109.45 71.0128 109.409 70.8942Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M119.646 66.9264C119.73 67.1715 119.588 67.4417 119.329 67.5299C119.07 67.6182 118.792 67.491 118.708 67.2458C118.625 67.0007 118.767 66.7305 119.025 66.6423C119.284 66.554 119.562 66.6812 119.646 66.9264Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M109.655 68.5509C109.738 68.796 109.597 69.0662 109.338 69.1545C109.079 69.2427 108.801 69.1155 108.717 68.8703C108.633 68.6252 108.775 68.355 109.034 68.2668C109.293 68.1786 109.571 68.3058 109.655 68.5509Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M105.594 84.3533C105.594 84.3533 107.867 74.0802 110.802 73.0703L110.818 73.0639C111.976 72.792 112.635 74.7555 111.919 76.2731L108.585 83.321L105.594 84.3533Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M91.6737 131.222L91.3544 131.465C88.33 133.765 84.2563 132.877 82.2549 129.482L63.5352 97.716C61.535 94.3205 62.365 89.7034 65.3894 87.4027L65.7081 87.1601C68.7325 84.8594 72.8068 85.7467 74.8076 89.1423L93.5279 120.909C95.5287 124.304 94.6981 128.921 91.6737 131.222Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M110.208 84.3532C112.095 85.619 112.833 88.2011 111.882 90.2156L93.5071 129.091C91.7048 132.595 87.4927 133.623 84.1406 131.376C80.7593 129.109 79.5739 124.399 81.5179 120.95L104.923 85.3265C106.089 83.5511 108.38 83.1293 110.208 84.3532Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M82.726 102.581L74.7009 88.963C72.7662 85.6803 68.6469 84.9232 65.5469 87.281C62.4469 89.6388 61.4938 94.2541 63.4285 97.5367L71.3778 111.025L82.726 102.581Z",
        fill: "#FAD2A0"
      }), jsx("path", {
        d: "M22.2264 114.412C23.9675 105.31 22.9941 94.9685 21.5796 89.0119C20.8975 86.1393 21.3213 82.6781 24.1205 81.7394C25.3458 81.3286 26.698 80.987 28.0392 80.7097C31.3125 80.0327 34.2527 82.5598 35.3471 85.7181C37.8986 93.0816 43.3331 100.299 46.3035 103.545V156.399H28.7468C25.6095 156.399 22.9832 154.008 22.6319 150.89C21.46 140.489 19.7988 127.102 22.2264 114.412Z",
        fill: "#E00109"
      }), jsx("path", {
        d: "M46.3037 103.545C53.2643 98.8798 54.9499 90.6455 56.1505 84.3797C56.6667 81.6861 59.0399 79.7919 61.7289 80.3316C63.3583 80.6586 64.9327 81.117 66.3216 81.6141C69.3588 82.7012 69.1058 85.9522 68.6592 89.147C67.9521 94.2049 70.1256 101.585 71.3635 107.496C72.7049 113.902 70.5657 138.856 69.0947 151.264C68.7429 154.231 66.2123 156.399 63.2243 156.399H46.3037V103.545Z",
        fill: "#E00109"
      }), jsx("path", {
        opacity: "0.3",
        d: "M52.2002 138.043V136.276C53.6743 136.473 56.2294 136.865 60.5535 136.865C64.8775 136.865 68.4154 136.473 68.9067 136.276V138.043C68.5792 138.338 65.762 139.221 61.0448 139.221C56.3277 139.221 53.5105 138.436 52.2002 138.043Z",
        fill: "black"
      }), jsx("path", {
        opacity: "0.3",
        d: "M24.6836 138.043V136.276C26.1577 136.473 28.7128 136.865 33.0369 136.865C37.3609 136.865 40.8988 136.473 41.3901 136.276V138.043C41.0626 138.338 37.754 139.221 33.0369 139.221C28.3197 139.221 25.9939 138.436 24.6836 138.043Z",
        fill: "black"
      }), jsxs("g", Object.assign({
        opacity: "0.5"
      }, {
        children: [jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46.3037 156.399V103.393H47.2864V156.399H46.3037Z",
          fill: "black"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46.3037 103.648V103.393H47.2864V103.648H46.3037ZM46.3037 104.667V104.157H47.2864V104.667H46.3037ZM46.3037 105.686V105.177H47.2864V105.686H46.3037ZM46.3037 106.706V106.196H47.2864V106.706H46.3037ZM46.3037 107.725V107.215H47.2864V107.725H46.3037ZM46.3037 108.744V108.235H47.2864V108.744H46.3037ZM46.3037 109.764V109.254H47.2864V109.764H46.3037ZM46.3037 110.783V110.273H47.2864V110.783H46.3037ZM46.3037 111.803V111.293H47.2864V111.803H46.3037ZM46.3037 112.822V112.312H47.2864V112.822H46.3037ZM46.3037 113.841V113.332H47.2864V113.841H46.3037ZM46.3037 114.861V114.351H47.2864V114.861H46.3037ZM46.3037 115.88V115.37H47.2864V115.88H46.3037ZM46.3037 116.899V116.39H47.2864V116.899H46.3037ZM46.3037 117.919V117.409H47.2864V117.919H46.3037ZM46.3037 118.938V118.428H47.2864V118.938H46.3037ZM46.3037 119.957V119.448H47.2864V119.957H46.3037ZM46.3037 120.977V120.467H47.2864V120.977H46.3037ZM46.3037 121.996V121.486H47.2864V121.996H46.3037ZM46.3037 123.015V122.506H47.2864V123.015H46.3037ZM46.3037 124.035V123.525H47.2864V124.035H46.3037ZM46.3037 125.054V124.545H47.2864V125.054H46.3037ZM46.3037 126.074V125.564H47.2864V126.074H46.3037ZM46.3037 127.093V126.583H47.2864V127.093H46.3037ZM46.3037 128.112V127.603H47.2864V128.112H46.3037ZM46.3037 129.132V128.622H47.2864V129.132H46.3037ZM46.3037 130.151V129.641H47.2864V130.151H46.3037ZM46.3037 131.17V130.661H47.2864V131.17H46.3037ZM46.3037 132.19V131.68H47.2864V132.19H46.3037ZM46.3037 133.209V132.699H47.2864V133.209H46.3037ZM46.3037 134.228V133.719H47.2864V134.228H46.3037ZM46.3037 135.248V134.738H47.2864V135.248H46.3037ZM46.3037 136.267V135.757H47.2864V136.267H46.3037ZM46.3037 137.286V136.777H47.2864V137.286H46.3037ZM46.3037 138.306V137.796H47.2864V138.306H46.3037ZM46.3037 139.325V138.816H47.2864V139.325H46.3037ZM46.3037 140.345V139.835H47.2864V140.345H46.3037ZM46.3037 141.364V140.854H47.2864V141.364H46.3037ZM46.3037 142.383V141.874H47.2864V142.383H46.3037ZM46.3037 143.403V142.893H47.2864V143.403H46.3037ZM46.3037 144.422V143.912H47.2864V144.422H46.3037ZM46.3037 145.441V144.932H47.2864V145.441H46.3037ZM46.3037 146.461V145.951H47.2864V146.461H46.3037ZM46.3037 147.48V146.97H47.2864V147.48H46.3037ZM46.3037 148.499V147.99H47.2864V148.499H46.3037ZM46.3037 149.519V149.009H47.2864V149.519H46.3037ZM46.3037 150.538V150.028H47.2864V150.538H46.3037ZM46.3037 151.557V151.048H47.2864V151.557H46.3037ZM46.3037 152.577V152.067H47.2864V152.577H46.3037ZM46.3037 153.596V153.087H47.2864V153.596H46.3037ZM46.3037 154.616V154.106H47.2864V154.616H46.3037ZM46.3037 155.635V155.125H47.2864V155.635H46.3037ZM46.3037 156.399V156.145H47.2864V156.399H46.3037Z",
          fill: "white"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter0_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M62.8504 102.12C62.9781 102.057 63.1281 102.02 63.2742 102.032C63.7124 102.068 64.0367 102.449 64.0011 102.887C63.9892 103.033 63.9408 103.176 63.8579 103.291C64.4095 104.193 64.6896 105.268 64.5976 106.399C64.3671 109.232 61.8926 111.332 59.0564 111.102C56.2324 110.872 54.1177 108.4 54.3482 105.567C54.5777 102.746 57.0531 100.634 59.8893 100.864C61.0326 100.969 62.0488 101.431 62.8504 102.12Z",
          fill: "white"
        }), jsx("path", {
          d: "M63.4291 103.599C63.3409 103.629 63.2425 103.633 63.1452 103.625C62.7069 103.59 62.3826 103.208 62.4182 102.771C62.4261 102.673 62.4584 102.578 62.4897 102.495C61.7795 101.886 60.8689 101.482 59.8586 101.4C57.3145 101.194 55.0779 103.08 54.8712 105.622C54.6644 108.163 56.5544 110.385 59.0985 110.591C61.6538 110.811 63.8792 108.911 64.0859 106.37C64.168 105.36 63.9145 104.41 63.4291 103.599Z",
          fill: "#E00109"
        }), jsx("path", {
          d: "M63.4286 103.599C63.3405 103.629 63.2421 103.633 63.1447 103.625C62.7065 103.59 62.3822 103.208 62.4178 102.771C62.4257 102.673 62.4458 102.577 62.4892 102.495C61.779 101.886 60.8684 101.482 59.8581 101.4C57.314 101.194 55.0897 103.081 54.8829 105.623C54.6762 108.164 56.5662 110.386 59.1103 110.592C61.6543 110.799 63.8787 108.911 64.0855 106.37C64.1676 105.36 63.9141 104.41 63.4286 103.599Z",
          stroke: "#E00109",
          strokeWidth: "0.0385495",
          strokeMiterlimit: "3.864"
        }), jsx("path", {
          d: "M62.7837 102.788C62.8035 102.545 63.0141 102.366 63.2576 102.386C63.501 102.406 63.6799 102.616 63.6602 102.859C63.6404 103.102 63.4298 103.281 63.1863 103.261C62.9429 103.242 62.7639 103.031 62.7837 102.788Z",
          fill: "#E00109"
        }), jsx("path", {
          d: "M63.1746 103.26C63.4166 103.28 63.6288 103.1 63.6484 102.858C63.6681 102.616 63.4879 102.405 63.2458 102.385C63.0038 102.365 62.7917 102.545 62.772 102.787C62.7523 103.029 62.9326 103.241 63.1746 103.26Z",
          stroke: "#E00109",
          strokeWidth: "0.0356583",
          strokeMiterlimit: "3.864"
        }), jsx("path", {
          d: "M63.6398 105.22L62.4421 107.741L61.87 107.695L62.3166 106.875L61.7773 105.068L62.3495 105.115L62.6226 106.275L62.647 106.277L63.0798 105.174L63.6398 105.22Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M61.5859 106.375C61.5522 106.788 61.089 106.909 60.6508 106.874C60.2247 106.839 59.7872 106.645 59.8208 106.231L60.3808 106.277C60.3699 106.41 60.5495 106.462 60.6834 106.473C60.8173 106.484 60.9907 106.461 61.0006 106.339C61.0134 106.181 60.8085 106.14 60.4746 106.027C60.1407 105.915 59.8979 105.736 59.9246 105.407C59.9582 104.994 60.3718 104.881 60.7979 104.915C61.2239 104.95 61.6016 105.127 61.5689 105.529L61.009 105.483C61.0179 105.374 60.8758 105.313 60.7662 105.304C60.6445 105.295 60.5086 105.308 60.4987 105.43C60.4858 105.588 60.7283 105.62 60.9902 105.714C61.3343 105.852 61.6155 106.01 61.5859 106.375Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M59.0126 105.762C59.0324 105.519 58.9173 105.277 58.6008 105.251C58.2843 105.225 58.1661 105.473 58.1483 105.692C58.1295 105.923 58.2315 106.176 58.548 106.202C58.8766 106.228 58.9948 105.981 59.0126 105.762ZM59.474 106.717L58.9506 106.675L58.9674 106.468L58.943 106.466C58.843 106.642 58.6525 106.724 58.3847 106.702C57.9221 106.665 57.5511 106.255 57.5996 105.659C57.649 105.052 58.0439 104.716 58.5065 104.754C58.7621 104.775 58.9723 104.902 59.0568 105.068L59.0812 105.07L59.098 104.863L59.6336 104.907L59.474 106.717Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M60.8707 107.626C59.438 107.314 57.9904 107.184 55.7256 107.16L55.7579 107.064C58.0256 107.053 59.8118 107.087 60.7704 107.202C61.3416 107.26 61.508 107.323 61.4912 107.53C61.4866 107.737 61.2319 107.704 60.8707 107.626Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M56.7518 105.382C56.7485 105.272 56.7055 105.048 56.4012 105.024C56.1212 105.001 56.0172 105.225 55.9971 105.321L56.7518 105.382ZM57.2969 105.61C57.291 105.683 57.2699 105.792 57.2699 105.792L55.9552 105.685C55.9506 105.893 56.096 106.064 56.3151 106.081C56.4733 106.094 56.5878 106.042 56.6454 105.937L57.2176 105.983C57.1471 106.247 56.8881 106.568 56.2917 106.52C55.7195 106.474 55.3666 105.992 55.4101 105.457C55.4547 104.91 55.8403 104.537 56.4124 104.584C56.9967 104.631 57.3414 105.063 57.2969 105.61Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M56.9679 108.46C56.9943 108.437 57.0328 108.416 57.0703 108.407C57.1078 108.398 57.1453 108.388 57.1818 108.391C57.2183 108.394 57.2538 108.409 57.2894 108.425C57.3249 108.44 57.3594 108.467 57.3818 108.493L57.4154 108.533L57.3232 108.611L57.2907 108.559C57.2795 108.546 57.2561 108.532 57.2328 108.518C57.2094 108.504 57.1851 108.502 57.1729 108.501C57.1485 108.499 57.1242 108.497 57.111 108.508C57.0857 108.518 57.0725 108.529 57.0472 108.54C57.034 108.551 57.0199 108.574 57.0057 108.597C56.9916 108.621 56.9896 108.645 56.9886 108.657C56.9866 108.682 56.9847 108.706 56.9958 108.719C57.006 108.744 57.0172 108.757 57.0274 108.783C57.061 108.822 57.0965 108.837 57.1452 108.841C57.1695 108.843 57.1939 108.845 57.207 108.834C57.2324 108.824 57.2455 108.813 57.2709 108.803L57.3104 108.769L57.3886 108.861L57.3492 108.895C57.3228 108.917 57.2843 108.938 57.2468 108.947C57.2093 108.957 57.1718 108.966 57.1353 108.963C57.0988 108.96 57.0633 108.945 57.0277 108.93C56.9922 108.915 56.9698 108.888 56.9353 108.861C56.9129 108.835 56.8915 108.796 56.8823 108.759C56.8731 108.721 56.8639 108.684 56.8669 108.647C56.8699 108.611 56.885 108.575 56.9001 108.54C56.9143 108.517 56.9416 108.482 56.9679 108.46Z",
          fill: "white"
        }), jsx("path", {
          d: "M57.6195 108.586C57.58 108.62 57.5648 108.655 57.5609 108.704C57.5589 108.728 57.5569 108.752 57.5671 108.778C57.5803 108.767 57.5934 108.755 57.6198 108.733C57.6461 108.711 57.6724 108.688 57.6856 108.677C57.7119 108.655 57.7382 108.633 57.7645 108.61C57.7909 108.588 57.804 108.577 57.8172 108.565C57.7817 108.55 57.7583 108.536 57.7208 108.545C57.6833 108.555 57.6458 108.564 57.6195 108.586ZM57.8826 108.816L57.9609 108.908L57.9214 108.941C57.8951 108.963 57.8566 108.985 57.8191 108.994C57.7816 109.003 57.7441 109.012 57.7076 109.009C57.671 109.006 57.6355 108.991 57.6 108.976C57.5644 108.961 57.5421 108.935 57.5075 108.908C57.4852 108.881 57.4638 108.843 57.4546 108.805C57.4454 108.768 57.4362 108.73 57.4391 108.694C57.4421 108.657 57.4573 108.622 57.4724 108.586C57.4875 108.551 57.5139 108.529 57.5412 108.494C57.5675 108.472 57.606 108.45 57.6435 108.441C57.681 108.432 57.7185 108.423 57.755 108.426C57.7916 108.429 57.8271 108.444 57.8626 108.459C57.8981 108.474 57.9327 108.501 57.955 108.528L57.9886 108.567L57.6464 108.858C57.6819 108.873 57.7053 108.887 57.7428 108.878C57.7793 108.881 57.8178 108.859 57.8441 108.837L57.8826 108.816Z",
          fill: "white"
        }), jsx("path", {
          d: "M58.0114 108.74C58.0144 108.704 58.0295 108.668 58.0447 108.633C58.0598 108.597 58.0861 108.575 58.1125 108.553C58.1388 108.53 58.1773 108.509 58.2148 108.5C58.2523 108.491 58.2898 108.481 58.3263 108.484C58.3628 108.487 58.3984 108.502 58.4339 108.518C58.4694 108.533 58.4918 108.559 58.5263 108.586C58.5487 108.613 58.5701 108.651 58.5803 108.676C58.5895 108.714 58.5987 108.751 58.5957 108.788L58.572 109.08L58.4624 109.071L58.4862 108.779C58.4881 108.755 58.4901 108.73 58.4789 108.717C58.4687 108.692 58.4576 108.679 58.4474 108.653C58.4362 108.64 58.4128 108.626 58.3895 108.612C58.3661 108.598 58.3418 108.596 58.3174 108.594C58.2931 108.592 58.2687 108.59 58.2434 108.6C58.2181 108.61 58.2049 108.621 58.1917 108.633C58.1786 108.644 58.1644 108.667 58.1503 108.69C58.1361 108.714 58.1351 108.726 58.1332 108.75L58.1094 109.042L57.9877 109.032L58.0114 108.74Z",
          fill: "white"
        }), jsx("path", {
          d: "M58.7203 108.602C58.7467 108.58 58.7852 108.558 58.8227 108.549C58.8602 108.54 58.8977 108.531 58.9342 108.534C58.9707 108.537 59.0062 108.552 59.0418 108.567C59.0773 108.582 59.1118 108.609 59.1342 108.636L59.1678 108.675L59.0756 108.753L59.0421 108.714C59.0309 108.701 59.0075 108.687 58.9842 108.672C58.9608 108.658 58.9365 108.656 58.9243 108.655C58.9 108.653 58.8756 108.651 58.8625 108.663C58.8371 108.673 58.824 108.684 58.7986 108.694C58.7855 108.705 58.7713 108.729 58.7572 108.752C58.743 108.775 58.741 108.8 58.74 108.812C58.7381 108.836 58.7361 108.86 58.7473 108.873C58.7575 108.899 58.7686 108.912 58.7788 108.937C58.8124 108.977 58.8479 108.992 58.8966 108.996C58.921 108.998 58.9453 109 58.9585 108.989C58.9838 108.978 58.997 108.967 59.0223 108.957L59.0618 108.923L59.1401 109.016L59.0894 109.036C59.0631 109.058 59.0246 109.08 58.9871 109.089C58.9496 109.098 58.9121 109.107 58.8755 109.104C58.839 109.101 58.8035 109.086 58.768 109.071C58.7324 109.056 58.7101 109.03 58.6755 109.002C58.6532 108.976 58.6318 108.938 58.6226 108.9C58.6134 108.863 58.6042 108.825 58.6071 108.789C58.6101 108.752 58.6252 108.717 58.6404 108.681C58.6667 108.659 58.694 108.624 58.7203 108.602Z",
          fill: "white"
        }), jsx("path", {
          d: "M59.3016 108.845C59.2997 108.869 59.2977 108.894 59.3079 108.919C59.3181 108.944 59.3293 108.957 59.3395 108.983C59.3506 108.996 59.374 109.01 59.3974 109.024C59.4207 109.038 59.4451 109.04 59.4694 109.042C59.4937 109.044 59.5181 109.046 59.5434 109.036C59.5688 109.026 59.5819 109.015 59.6073 109.004C59.6204 108.993 59.6346 108.97 59.6487 108.947C59.6629 108.923 59.6648 108.899 59.6668 108.875C59.6688 108.85 59.6708 108.826 59.6596 108.813C59.6494 108.787 59.6382 108.774 59.628 108.749C59.6168 108.736 59.5935 108.722 59.5701 108.708C59.5468 108.693 59.5224 108.692 59.4981 108.69C59.4737 108.688 59.4494 108.686 59.4241 108.696C59.3987 108.706 59.3856 108.717 59.3602 108.727C59.3471 108.738 59.3329 108.762 59.3188 108.785C59.3168 108.809 59.3036 108.821 59.3016 108.845ZM59.1921 108.836C59.1951 108.8 59.2102 108.764 59.2253 108.729C59.2405 108.693 59.2668 108.671 59.2931 108.648C59.3195 108.626 59.3579 108.605 59.3955 108.596C59.433 108.586 59.4705 108.577 59.507 108.58C59.5435 108.583 59.579 108.598 59.6146 108.613C59.6501 108.628 59.6725 108.655 59.707 108.682C59.7294 108.708 59.7507 108.747 59.7609 108.772C59.7701 108.81 59.7793 108.847 59.7764 108.883C59.7734 108.92 59.7583 108.955 59.7431 108.991C59.728 109.026 59.7017 109.049 59.6744 109.083C59.648 109.106 59.6095 109.127 59.572 109.136C59.5345 109.145 59.497 109.155 59.4605 109.152C59.424 109.149 59.3884 109.133 59.3529 109.118C59.3174 109.103 59.295 109.077 59.2605 109.05C59.2381 109.023 59.2167 108.985 59.2075 108.947C59.1973 108.922 59.1881 108.885 59.1921 108.836Z",
          fill: "white"
        }), jsx("path", {
          d: "M60.3345 108.647L60.3256 108.757L59.9848 108.729C59.9726 108.728 59.9604 108.727 59.9472 108.738C59.9341 108.75 59.9331 108.762 59.9321 108.774C59.9311 108.786 59.9301 108.798 59.9413 108.811C59.9525 108.825 59.9647 108.825 59.9768 108.826L60.2081 108.845C60.2325 108.847 60.2568 108.849 60.268 108.862C60.2914 108.876 60.3025 108.89 60.3137 108.903C60.3249 108.916 60.3351 108.941 60.3453 108.967C60.3555 108.992 60.3545 109.004 60.3525 109.028C60.3505 109.053 60.3486 109.077 60.3344 109.1C60.3203 109.124 60.3071 109.135 60.2929 109.158C60.2798 109.169 60.2545 109.179 60.2413 109.191C60.216 109.201 60.1916 109.199 60.1794 109.198L59.8386 109.17L59.8475 109.061L60.1883 109.088C60.2005 109.089 60.2249 109.091 60.2258 109.079C60.239 109.068 60.24 109.056 60.241 109.044C60.242 109.032 60.243 109.019 60.2318 109.006C60.2206 108.993 60.2084 108.992 60.1963 108.991L59.965 108.972C59.9406 108.97 59.9163 108.968 59.8929 108.954C59.8696 108.94 59.8584 108.927 59.8472 108.914C59.836 108.901 59.8258 108.875 59.8146 108.862C59.8044 108.837 59.8064 108.813 59.8084 108.788C59.8104 108.764 59.8124 108.74 59.8255 108.729C59.8397 108.705 59.8528 108.694 59.867 108.671C59.8801 108.66 59.9055 108.649 59.9186 108.638C59.944 108.628 59.9683 108.63 59.9927 108.632L60.3335 108.66L60.3345 108.647Z",
          fill: "white"
        }), jsx("path", {
          d: "M61.0042 108.702L60.9815 108.981C60.9785 109.018 60.9634 109.053 60.9482 109.089C60.9331 109.124 60.9067 109.147 60.8794 109.181C60.8531 109.203 60.8146 109.225 60.7771 109.234C60.7396 109.243 60.7021 109.252 60.6656 109.249C60.6291 109.247 60.5935 109.231 60.558 109.216C60.5225 109.201 60.5001 109.175 60.4656 109.148C60.4432 109.121 60.4218 109.083 60.4126 109.045C60.4034 109.008 60.3942 108.97 60.3972 108.934L60.4199 108.654L60.5295 108.663L60.5067 108.943C60.5047 108.967 60.5028 108.991 60.513 109.017C60.5232 109.042 60.5343 109.055 60.5445 109.081C60.5557 109.094 60.5791 109.108 60.6024 109.122C60.6258 109.136 60.6501 109.138 60.6745 109.14C60.6988 109.142 60.7232 109.144 60.7485 109.134C60.7738 109.124 60.787 109.112 60.8123 109.102C60.8255 109.091 60.8396 109.068 60.8538 109.044C60.8679 109.021 60.8699 108.997 60.8719 108.972L60.8947 108.693L61.0042 108.702Z",
          fill: "white"
        }), jsx("path", {
          d: "M61.2841 109.177C61.3085 109.179 61.3328 109.181 61.346 109.17C61.3713 109.16 61.3845 109.149 61.3977 109.138C61.4108 109.126 61.425 109.103 61.4391 109.08C61.4533 109.056 61.4552 109.032 61.4572 109.008L61.4711 108.837L61.3128 108.825C61.2885 108.823 61.2641 108.821 61.2388 108.831C61.2135 108.841 61.2003 108.852 61.175 108.862C61.1618 108.874 61.1477 108.897 61.1335 108.92C61.1194 108.944 61.1184 108.956 61.1164 108.98C61.1144 109.004 61.1124 109.029 61.1226 109.054C61.1328 109.079 61.144 109.092 61.1542 109.118C61.1654 109.131 61.1887 109.145 61.2121 109.159C61.2355 109.173 61.2598 109.175 61.2841 109.177ZM61.6317 108.52L61.5901 109.031C61.5872 109.067 61.572 109.103 61.5569 109.138C61.5417 109.174 61.5154 109.196 61.4881 109.231C61.4618 109.253 61.4233 109.274 61.398 109.284C61.3605 109.294 61.3229 109.303 61.2864 109.3C61.2499 109.297 61.2144 109.282 61.1788 109.267C61.1433 109.251 61.121 109.225 61.0864 109.198C61.064 109.172 61.0427 109.133 61.0335 109.096C61.0243 109.058 61.0151 109.021 61.018 108.984C61.021 108.948 61.0361 108.912 61.0513 108.877C61.0664 108.841 61.0927 108.819 61.1191 108.797C61.1454 108.774 61.1839 108.753 61.2214 108.744C61.2589 108.735 61.2964 108.725 61.3329 108.728L61.5033 108.742L61.5221 108.511L61.6317 108.52Z",
          fill: "white"
        })]
      })), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M-4.96091 176.598C-4.96091 176.598 -1.10781 169.728 3.27307 170.137C7.24058 170.507 7.04644 174.616 7.04644 174.616C7.04644 174.616 7.48985 178.681 6.22152 183.184C5.3854 186.151 3.24487 191.671 1.68275 191.555C-0.353945 191.404 2.41646 185.271 1.07172 184.706C-0.308068 184.126 -0.970384 185.358 -3.34496 187.724C-4.82884 189.203 -5.76356 191.211 -7.23924 192.239C-10.1238 194.247 -11.5511 186.477 -4.96091 176.598Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.19743 176.596C-0.78069 176.059 -1.90199 173.891 -1.34755 171.674L9.3584 128.871C10.4594 124.963 14.23 122.547 17.7416 123.499C21.2842 124.46 23.179 128.471 21.9355 132.376L5.98041 173.862C5.18529 175.93 3.11165 177.115 1.19743 176.596Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M25.6782 87.558C25.4687 87.4813 25.2532 87.416 25.0324 87.363L24.5557 87.2484C21.2247 86.4495 17.916 88.7437 17.1665 92.373L10.2451 125.878C9.49504 129.507 11.5876 133.097 14.9192 133.897L15.3953 134.01C18.7263 134.809 22.035 132.516 22.7844 128.887L29.2672 97.5051L25.6782 87.558Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M29.9876 90.2615C28.7277 87.4833 24.8198 86.7595 24.8198 86.7595C21.0223 85.8378 17.5462 88.715 16.7556 92.5866L12.8662 109.428L26.6919 114.769L29.9876 99.5068C29.9876 99.5068 31.2475 93.0396 29.9876 90.2615Z",
        fill: "#FAD2A0"
      }), jsxs("g", Object.assign({
        filter: "url(#filter1_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M131.046 30.4812H106.551C103.652 30.4812 101.302 32.7193 101.302 35.4802C101.302 38.2411 103.652 40.4792 106.551 40.4792H131.046C133.945 40.4792 136.295 38.2411 136.295 35.4802C136.295 32.7193 133.945 30.4812 131.046 30.4812Z",
          fill: "white"
        }), jsx("g", Object.assign({
          clipPath: "url(#clip3_8926_132573)"
        }, {
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M110.536 35.4801C110.536 37.5891 108.826 39.2987 106.717 39.2987C104.608 39.2987 102.898 37.5891 102.898 35.4801C102.898 33.3711 104.608 31.6614 106.717 31.6614C108.826 31.6614 110.536 33.3711 110.536 35.4801ZM106.717 33.5707C106.506 33.5707 106.335 33.7417 106.335 33.9526C106.335 34.1635 106.506 34.3345 106.717 34.3345H106.721C106.932 34.3345 107.103 34.1635 107.103 33.9526C107.103 33.7417 106.932 33.5707 106.721 33.5707H106.717ZM107.099 35.4801C107.099 35.2692 106.928 35.0982 106.717 35.0982C106.506 35.0982 106.335 35.2692 106.335 35.4801V37.0075C106.335 37.2184 106.506 37.3894 106.717 37.3894C106.928 37.3894 107.099 37.2184 107.099 37.0075V35.4801Z",
            fill: "#5382BC"
          })
        })), jsx("path", {
          d: "M120.468 36.0527H113.471C113.23 36.0527 113.034 36.2489 113.034 36.4909C113.034 36.7329 113.23 36.9291 113.471 36.9291H120.468C120.71 36.9291 120.906 36.7329 120.906 36.4909C120.906 36.2489 120.71 36.0527 120.468 36.0527Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M126.591 34.0808H113.471C113.23 34.0808 113.034 34.277 113.034 34.519C113.034 34.761 113.23 34.9571 113.471 34.9571H126.591C126.832 34.9571 127.028 34.761 127.028 34.519C127.028 34.277 126.832 34.0808 126.591 34.0808Z",
          fill: "#CCCCCC"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter2_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M79.4107 44.3489H115.749C120.05 44.3489 123.536 47.843 123.536 52.1531C123.536 56.4633 120.05 59.9574 115.749 59.9574H79.4107C75.1102 59.9574 71.6239 56.4633 71.6239 52.1531C71.6239 47.843 75.1102 44.3489 79.4107 44.3489Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M115.466 58.0452C118.725 58.0452 121.368 55.4029 121.368 52.1435C121.368 48.8842 118.725 46.2419 115.466 46.2419C112.207 46.2419 109.564 48.8842 109.564 52.1435C109.564 55.4029 112.207 58.0452 115.466 58.0452ZM117.855 49.7128C118.057 49.5112 118.384 49.5112 118.585 49.7128C118.787 49.9145 118.787 50.2415 118.585 50.4431L114.798 54.23C114.597 54.4317 114.27 54.4317 114.068 54.23L112.347 52.5087C112.145 52.307 112.145 51.9801 112.347 51.7784C112.549 51.5767 112.875 51.5767 113.077 51.7784L114.433 53.1346L117.855 49.7128Z",
          fill: "#2B994C"
        }), jsx("path", {
          d: "M89.044 52.8032H78.6616C78.3032 52.8032 78.0127 53.0943 78.0127 53.4534C78.0127 53.8125 78.3032 54.1036 78.6616 54.1036H89.044C89.4024 54.1036 89.693 53.8125 89.693 53.4534C89.693 53.0943 89.4024 52.8032 89.044 52.8032Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M98.1287 49.8767H78.6616C78.3032 49.8767 78.0127 50.1678 78.0127 50.5269C78.0127 50.886 78.3032 51.1771 78.6616 51.1771H98.1287C98.4871 51.1771 98.7776 50.886 98.7776 50.5269C98.7776 50.1678 98.4871 49.8767 98.1287 49.8767Z",
          fill: "#CCCCCC"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter3_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M76.8542 22.1494H96.903C99.2758 22.1494 101.199 24.0772 101.199 26.4552C101.199 28.8332 99.2758 30.761 96.903 30.761H76.8542C74.4814 30.761 72.558 28.8332 72.558 26.4552C72.558 24.0772 74.4814 22.1494 76.8542 22.1494Z",
          fill: "white"
        }), jsx("g", Object.assign({
          clipPath: "url(#clip4_8926_132573)"
        }, {
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M96.9278 29.8215C98.7493 29.8215 100.226 28.345 100.226 26.5235C100.226 24.7021 98.7493 23.2256 96.9278 23.2256C95.1064 23.2256 93.6299 24.7021 93.6299 26.5235C93.6299 28.345 95.1064 29.8215 96.9278 29.8215ZM98.1504 25.7674C98.2792 25.6386 98.2792 25.4297 98.1504 25.301C98.0216 25.1722 97.8128 25.1722 97.684 25.301L96.9278 26.0571L96.1717 25.301C96.0429 25.1722 95.834 25.1722 95.7053 25.301C95.5765 25.4297 95.5765 25.6386 95.7053 25.7674L96.4614 26.5235L95.7053 27.2797C95.5765 27.4085 95.5765 27.6173 95.7053 27.7461C95.834 27.8749 96.0429 27.8749 96.1717 27.7461L96.9278 26.9899L97.684 27.7461C97.8128 27.8749 98.0216 27.8749 98.1504 27.7461C98.2792 27.6173 98.2792 27.4085 98.1504 27.2797L97.3942 26.5235L98.1504 25.7674Z",
            fill: "#DD4242"
          })
        })), jsx("path", {
          d: "M81.8538 26.9465H76.1256C75.9279 26.9465 75.7676 27.1071 75.7676 27.3053C75.7676 27.5034 75.9279 27.664 76.1256 27.664H81.8538C82.0516 27.664 82.2119 27.5034 82.2119 27.3053C82.2119 27.1071 82.0516 26.9465 81.8538 26.9465Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M86.8661 25.3313H76.1256C75.9279 25.3313 75.7676 25.4919 75.7676 25.69C75.7676 25.8881 75.9279 26.0487 76.1256 26.0487H86.8661C87.0638 26.0487 87.2241 25.8881 87.2241 25.69C87.2241 25.4919 87.0638 25.3313 86.8661 25.3313Z",
          fill: "#CCCCCC"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsxs("filter", Object.assign({
        id: "filter0_d_8926_132573",
        x: "23.6125",
        y: "76.1927",
        width: "71.7203",
        height: "71.7079",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "6.06383"
        }), jsx("feGaussianBlur", {
          stdDeviation: "15.1596"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter1_d_8926_132573",
        x: "88.848",
        y: "18.0275",
        width: "59.9006",
        height: "34.9055",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter2_d_8926_132573",
        x: "59.1703",
        y: "31.8951",
        width: "76.8196",
        height: "40.5159",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter3_d_8926_132573",
        x: "60.1039",
        y: "9.69567",
        width: "53.5491",
        height: "33.5191",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsx("clipPath", Object.assign({
        id: "clip0_8926_132573"
      }, {
        children: jsx("rect", {
          x: "0.353516",
          y: "0.412109",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_8926_132573"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-152.526 0.412109)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_8926_132573"
      }, {
        children: jsx("rect", {
          width: "13.3404",
          height: "26.6821",
          fill: "white",
          transform: "matrix(0.946658 -0.322597 0.323486 0.946111 106.897 67.2146)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip3_8926_132573"
      }, {
        children: jsx("rect", {
          width: "9.16485",
          height: "9.16485",
          fill: "white",
          transform: "translate(102.135 30.8977)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip4_8926_132573"
      }, {
        children: jsx("rect", {
          width: "7.9151",
          height: "7.91509",
          fill: "white",
          transform: "translate(92.9707 22.5659)"
        })
      }))]
    })]
  }));
};

const Image$3 = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "168",
    viewBox: "0 0 169 168",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_7498_115255)"
    }, {
      children: [jsxs("g", Object.assign({
        clipPath: "url(#clip1_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M257.712 0H-88.9805V167.85H257.712V0Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 0H-89.0996V110.32H258.1V0Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M258.09 111.277H-88.377V167.773H258.09V111.277Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M258.1 125.292H-88.9414V126.288H258.1V125.292Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 136.984H-88.9414V137.979H258.1V136.984Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 153.408H-88.9414V154.404H258.1V153.408Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 116.587H-88.9414V117.582H258.1V116.587Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M203.981 168L168.019 110.118L167.295 110.686L202.904 168H203.981Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M161.608 168L137.655 110.118L136.855 110.536L160.632 168H161.608Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M121.91 168L108.148 110.118L107.291 110.377L120.996 168H121.91Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M85.0217 110.118H84.1387V168H85.0217V110.118Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M48.1659 168L61.8665 110.377L61.0144 110.118L47.252 168H48.1659Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M8.53046 168L32.3067 110.536L31.5076 110.118L7.55469 168H8.53046Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M-33.7405 168L1.86871 110.686L1.14461 110.118L-34.8223 168H-33.7405Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M32.9805 46.9879C32.9805 38.3568 39.9774 31.3599 48.6085 31.3599L119.456 31.3599C128.087 31.3599 135.084 38.3568 135.084 46.9879V224.106C135.084 232.737 128.087 239.734 119.456 239.734H48.6085C39.9774 239.734 32.9805 232.737 32.9805 224.106L32.9805 46.9879Z",
        fill: "#1F1F1F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M37.1484 49.0718C37.1484 42.1669 42.746 36.5693 49.6509 36.5693H118.414C125.319 36.5693 130.917 42.1669 130.917 49.0718V222.022C130.917 228.927 125.319 234.525 118.414 234.525H49.6509C42.746 234.525 37.1484 228.927 37.1484 222.022L37.1484 49.0718Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M90.1276 72.1233L115.885 116.663C116.51 117.729 116.843 118.941 116.848 120.177C116.854 121.413 116.532 122.628 115.916 123.7C115.3 124.771 114.412 125.661 113.341 126.277C112.27 126.894 111.055 127.217 109.819 127.212H58.2463C57.0105 127.217 55.7954 126.894 54.7245 126.277C53.6535 125.661 52.7649 124.771 52.1489 123.7C51.5328 122.628 51.2113 121.413 51.2169 120.177C51.2225 118.941 51.555 117.729 52.1807 116.663L77.9377 72.1233C78.5543 71.052 79.4424 70.1623 80.5124 69.5436C81.5824 68.9249 82.7966 68.5991 84.0326 68.5991C85.2687 68.5991 86.4828 68.9249 87.5529 69.5436C88.6229 70.1623 89.511 71.052 90.1276 72.1233ZM80.9383 102.207C80.9383 103.933 82.3377 105.333 84.064 105.333C85.7902 105.333 87.1896 103.933 87.1896 102.207V89.7046C87.1896 87.9784 85.7902 86.579 84.064 86.579C82.3377 86.579 80.9383 87.9784 80.9383 89.7046V102.207ZM84.064 117.835C85.7902 117.835 87.1896 116.436 87.1896 114.71C87.1896 112.983 85.7902 111.584 84.064 111.584H84.0327C82.3065 111.584 80.9071 112.983 80.9071 114.71C80.9071 116.436 82.3065 117.835 84.0327 117.835H84.064Z",
          fill: "#FFC107"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsx("clipPath", Object.assign({
        id: "clip0_7498_115255"
      }, {
        children: jsx("rect", {
          x: "0.5",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_7498_115255"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-89.0996)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_7498_115255"
      }, {
        children: jsx("rect", {
          width: "93.7684",
          height: "197.956",
          fill: "white",
          transform: "translate(37.1484 36.5693)"
        })
      }))]
    })]
  }));
};

const CardList$1 = ({
  title,
  btnActionText,
  loading,
  tasks,
  miniImageUrl,
  goHome,
  onSelectCard,
  bulkTaskRequest
}) => {
  const [taskStates, setStaskStates] = useState([]);
  const [modalType, setModalType] = useState();
  const onMarkTask = (task, state) => {
    setStaskStates(stateList => {
      const index = stateList.findIndex(st => st.task.id === task.id);
      if (index > -1) {
        if (stateList[index].state === state) {
          stateList.splice(index, 1);
        } else {
          stateList[index].state = state;
        }
      } else {
        stateList.push({
          task: task,
          state: state
        });
      }
      return [...stateList];
    });
  };
  const onBulkTaskRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulkTaskRequest(taskStates.map(t => ({
      task: t.task,
      qty: t.task.meta_data.count,
      action: t.state === 'FREE' ? 'APPROVED' : 'REJECTED'
    })));
    setStaskStates([]);
  });
  const getTaskMark = useCallback(task => {
    var _a;
    return (_a = taskStates.find(t => t.task.id === task.id)) === null || _a === void 0 ? void 0 : _a.state;
  }, [taskStates]);
  const handleConfirm = () => {
    if (taskStates.every(t => t.state === 'FREE')) {
      setModalType('UNIQUE');
    } else {
      setModalType('MIX');
    }
  };
  return jsxs(Ramen.XPage, Object.assign({
    skeleton: loading
  }, {
    children: [jsx(Ramen.XHeader, {
      onBack: goHome,
      title: title
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XSkeletonRenderer, Object.assign({
        visible: loading
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          gap: "m"
        }, {
          children: [jsx(Ramen.XSkeleton, {
            type: "image",
            size: "xl",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            type: "image",
            size: "xl",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            type: "image",
            size: "xl",
            width: "xl"
          }), jsx(Ramen.XSkeleton, {
            type: "image",
            size: "xl",
            width: "xl"
          })]
        }))
      })), jsx(Ramen.XBox, Object.assign({
        gap: "s"
      }, {
        children: tasks.map(task => {
          return jsx(ProductCard, {
            task: task,
            miniImageUrl: miniImageUrl,
            onSelectCard: onSelectCard,
            onMarkTask: onMarkTask,
            markedAs: getTaskMark(task)
          }, task.id);
        })
      }))]
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        type: "solid",
        text: btnActionText,
        size: "xl",
        disabled: taskStates.length === 0,
        onClick: () => handleConfirm()
      })
    }), jsx(ConfirmModal, {
      visible: modalType === 'UNIQUE',
      title: "\u00BFDeseas confirmar la solicitud?",
      btnActionText: "Confirmar",
      onClose: () => setModalType(undefined),
      onConfirm: onBulkTaskRequest,
      ImageCmp: jsx(Image$4, {})
    }), jsx(ConfirmModal, {
      visible: modalType === 'MIX',
      title: "\u00BFDeseas continuar con el proceso?",
      btnActionText: "Continuar",
      onClose: () => setModalType(undefined),
      onConfirm: onBulkTaskRequest,
      ImageCmp: jsx(Image$3, {})
    })]
  }));
};

const Image$2 = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "169",
    viewBox: "0 0 169 169",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_14090_264044)"
    }, {
      children: [jsxs("g", Object.assign({
        clipPath: "url(#clip1_14090_264044)"
      }, {
        children: [jsx("path", {
          d: "M257.565 0.412109H-89.127V168.262H257.565V0.412109Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M257.954 0.412109H-89.2461V110.732H257.954V0.412109Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M257.945 111.689H-88.5225V168.185H257.945V111.689Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M257.954 125.704H-89.0869V126.7H257.954V125.704Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M257.954 137.396H-89.0869V138.392H257.954V137.396Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M257.954 153.82H-89.0869V154.816H257.954V153.82Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M257.954 116.999H-89.0869V117.995H257.954V116.999Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M203.836 168.412L167.874 110.53L167.149 111.099L202.759 168.412H203.836Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M161.463 168.412L137.51 110.53L136.711 110.948L160.487 168.412H161.463Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M121.765 168.412L108.003 110.53L107.146 110.789L120.852 168.412H121.765Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M84.8752 110.53H83.9922V168.412H84.8752V110.53Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M48.0204 168.412L61.721 110.789L60.8689 110.53L47.1064 168.412H48.0204Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M8.38495 168.412L32.1612 110.948L31.3621 110.53L7.40918 168.412H8.38495Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M-33.887 168.412L1.72223 111.099L0.998123 110.53L-34.9688 168.412H-33.887Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M32.834 47.4005C32.834 38.7694 39.8309 31.7725 48.4621 31.7725L119.309 31.7725C127.94 31.7725 134.937 38.7694 134.937 47.4005V224.519C134.937 233.15 127.94 240.147 119.309 240.147H48.4621C39.8309 240.147 32.834 233.15 32.834 224.519L32.834 47.4005Z",
        fill: "#1F1F1F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_14090_264044)"
      }, {
        children: [jsx("path", {
          d: "M37.002 49.4839C37.002 42.579 42.5995 36.9814 49.5044 36.9814H118.268C125.173 36.9814 130.77 42.579 130.77 49.4839V222.435C130.77 229.339 125.173 234.937 118.268 234.937H49.5044C42.5995 234.937 37.002 229.339 37.002 222.435L37.002 49.4839Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M83.886 130.75C101.148 130.75 115.142 116.756 115.142 99.4934C115.142 82.2312 101.148 68.2373 83.886 68.2373C66.6237 68.2373 52.6299 82.2312 52.6299 99.4934C52.6299 116.756 66.6237 130.75 83.886 130.75ZM95.473 92.3267C96.6936 91.1061 96.6936 89.1271 95.473 87.9065C94.2524 86.6858 92.2734 86.6858 91.0527 87.9065L83.886 95.0732L76.7193 87.9065C75.4987 86.6858 73.5197 86.6858 72.299 87.9065C71.0784 89.1271 71.0784 91.1061 72.299 92.3267L79.4657 99.4934L72.299 106.66C71.0784 107.881 71.0784 109.86 72.299 111.08C73.5197 112.301 75.4987 112.301 76.7193 111.08L83.886 103.914L91.0527 111.08C92.2734 112.301 94.2524 112.301 95.473 111.08C96.6936 109.86 96.6936 107.881 95.473 106.66L88.3063 99.4934L95.473 92.3267Z",
          fill: "#DD4242"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsx("clipPath", Object.assign({
        id: "clip0_14090_264044"
      }, {
        children: jsx("rect", {
          x: "0.353516",
          y: "0.412109",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_14090_264044"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-89.2461 0.412109)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_14090_264044"
      }, {
        children: jsx("rect", {
          width: "93.7684",
          height: "197.956",
          fill: "white",
          transform: "translate(37.002 36.9814)"
        })
      }))]
    })]
  }));
};

const InfoBox = ({
  label,
  value
}) => {
  return jsx(Ramen.XBox, Object.assign({
    width: 'half'
  }, {
    children: jsx(Ramen.XCard, Object.assign({
      borderType: "solid"
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          colorThone: "medium",
          fontSize: 11,
          weight: "normal"
        }, {
          children: label
        })), jsx(Ramen.XText, Object.assign({
          colorThone: "darkest",
          weight: "bold"
        }, {
          children: value
        }))]
      }))
    }))
  }));
};

const InfoRawRow = ({
  label,
  value
}) => {
  if (value) {
    return jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        colorThone: "medium",
        fontSize: 11,
        weight: "normal"
      }, {
        children: label
      })), jsxs(Ramen.XText, Object.assign({
        colorThone: "darkest",
        fontSize: 11,
        weight: "normal",
        textOverflow: "break-word"
      }, {
        children: [' ', value]
      }))]
    }));
  } else {
    return null;
  }
};

const Image$1 = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "168",
    viewBox: "0 0 169 168",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_7498_115255)"
    }, {
      children: [jsxs("g", Object.assign({
        clipPath: "url(#clip1_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M257.712 0H-88.9805V167.85H257.712V0Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 0H-89.0996V110.32H258.1V0Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M258.09 111.277H-88.377V167.773H258.09V111.277Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M258.1 125.292H-88.9414V126.288H258.1V125.292Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 136.984H-88.9414V137.979H258.1V136.984Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 153.408H-88.9414V154.404H258.1V153.408Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 116.587H-88.9414V117.582H258.1V116.587Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M203.981 168L168.019 110.118L167.295 110.686L202.904 168H203.981Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M161.608 168L137.655 110.118L136.855 110.536L160.632 168H161.608Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M121.91 168L108.148 110.118L107.291 110.377L120.996 168H121.91Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M85.0217 110.118H84.1387V168H85.0217V110.118Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M48.1659 168L61.8665 110.377L61.0144 110.118L47.252 168H48.1659Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M8.53046 168L32.3067 110.536L31.5076 110.118L7.55469 168H8.53046Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M-33.7405 168L1.86871 110.686L1.14461 110.118L-34.8223 168H-33.7405Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M32.9805 46.9879C32.9805 38.3568 39.9774 31.3599 48.6085 31.3599L119.456 31.3599C128.087 31.3599 135.084 38.3568 135.084 46.9879V224.106C135.084 232.737 128.087 239.734 119.456 239.734H48.6085C39.9774 239.734 32.9805 232.737 32.9805 224.106L32.9805 46.9879Z",
        fill: "#1F1F1F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_7498_115255)"
      }, {
        children: [jsx("path", {
          d: "M37.1484 49.0718C37.1484 42.1669 42.746 36.5693 49.6509 36.5693H118.414C125.319 36.5693 130.917 42.1669 130.917 49.0718V222.022C130.917 228.927 125.319 234.525 118.414 234.525H49.6509C42.746 234.525 37.1484 228.927 37.1484 222.022L37.1484 49.0718Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M90.1276 72.1233L115.885 116.663C116.51 117.729 116.843 118.941 116.848 120.177C116.854 121.413 116.532 122.628 115.916 123.7C115.3 124.771 114.412 125.661 113.341 126.277C112.27 126.894 111.055 127.217 109.819 127.212H58.2463C57.0105 127.217 55.7954 126.894 54.7245 126.277C53.6535 125.661 52.7649 124.771 52.1489 123.7C51.5328 122.628 51.2113 121.413 51.2169 120.177C51.2225 118.941 51.555 117.729 52.1807 116.663L77.9377 72.1233C78.5543 71.052 79.4424 70.1623 80.5124 69.5436C81.5824 68.9249 82.7966 68.5991 84.0326 68.5991C85.2687 68.5991 86.4828 68.9249 87.5529 69.5436C88.6229 70.1623 89.511 71.052 90.1276 72.1233ZM80.9383 102.207C80.9383 103.933 82.3377 105.333 84.064 105.333C85.7902 105.333 87.1896 103.933 87.1896 102.207V89.7046C87.1896 87.9784 85.7902 86.579 84.064 86.579C82.3377 86.579 80.9383 87.9784 80.9383 89.7046V102.207ZM84.064 117.835C85.7902 117.835 87.1896 116.436 87.1896 114.71C87.1896 112.983 85.7902 111.584 84.064 111.584H84.0327C82.3065 111.584 80.9071 112.983 80.9071 114.71C80.9071 116.436 82.3065 117.835 84.0327 117.835H84.064Z",
          fill: "#FFC107"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsx("clipPath", Object.assign({
        id: "clip0_7498_115255"
      }, {
        children: jsx("rect", {
          x: "0.5",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_7498_115255"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-89.0996)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_7498_115255"
      }, {
        children: jsx("rect", {
          width: "93.7684",
          height: "197.956",
          fill: "white",
          transform: "translate(37.1484 36.5693)"
        })
      }))]
    })]
  }));
};

/* eslint-disable react/style-prop-object */
const Image = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "169",
    viewBox: "0 0 169 169",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_8926_132573)"
    }, {
      children: [jsx("mask", Object.assign({
        id: "mask0_8926_132573",
        style: {
          maskType: 'alpha'
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "169",
        height: "169"
      }, {
        children: jsx("circle", {
          cx: "84.3535",
          cy: "84.4121",
          r: "84",
          fill: "#7C7AE3"
        })
      })), jsx("g", {
        mask: "url(#mask0_8926_132573)"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip1_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M194.285 0.412109H-152.407V168.262H194.285V0.412109Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M18.8925 0.480225H-64.8301V110.53H18.8925V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M106.589 0.480225H22.8662V110.53H106.589V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M194.285 0.480225H110.562V110.53H194.285V0.480225Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M194.664 111.689H-151.803V168.185H194.664V111.689Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M194.674 125.704H-152.367V126.7H194.674V125.704Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 137.396H-152.367V138.391H194.674V137.396Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 153.82H-152.367V154.815H194.674V153.82Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M194.674 116.999H-152.367V117.994H194.674V116.999Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M187.481 168.412L136.118 110.53L135.491 111.235L186.232 168.412H187.481Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M140.556 168.412L104.593 110.53L103.869 111.098L139.478 168.412H140.556Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M98.1827 168.412L74.2298 110.53L73.4307 110.948L97.2069 168.412H98.1827Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M58.4852 168.412L44.7228 110.53L43.8662 110.789L57.5712 168.412H58.4852Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M21.595 110.53H20.7119V168.412H21.595V110.53Z",
          fill: "#D6D6D6"
        }), jsx("mask", Object.assign({
          id: "mask1_8926_132573",
          style: {
            maskType: 'luminance'
          },
          maskUnits: "userSpaceOnUse",
          x: "126",
          y: "0",
          width: "69",
          height: "169"
        }, {
          children: jsx("path", {
            d: "M194.515 0.412109H126.078V168.008H194.515V0.412109Z",
            fill: "white"
          })
        })), jsxs("g", Object.assign({
          mask: "url(#mask1_8926_132573)"
        }, {
          children: [jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2123L203.173 -22.1987V190.619L130.696 111.448L130.471 57.2123Z",
            fill: "#A8A8A8"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.213 67.8723L132.122 69.6179V61.0217L135.213 58.3442V67.8723Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask2_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "132",
            y: "58",
            width: "4",
            height: "12"
          }, {
            children: jsx("path", {
              d: "M135.213 67.8723L132.122 69.6179V61.0217L135.213 58.3442V67.8723Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask2_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M131.147 57.5806L138.207 68.6951L136.405 70.1998L129.341 59.0852L131.147 57.5806Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M137.094 58.3442H135.213V67.8723H137.094V58.3442Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.44 64.831L136.842 66.8675V56.8531L140.44 53.7346V64.831Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask3_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "136",
            y: "53",
            width: "5",
            height: "14"
          }, {
            children: jsx("path", {
              d: "M140.44 64.831L136.842 66.8675V56.8531L140.44 53.7346V64.831Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask3_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M135.517 52.8074L143.902 66.0039L141.765 67.7904L133.376 54.5939L135.517 52.8074Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M142.63 53.7346H140.44V64.8355H142.63V53.7346Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M146.034 61.6081L141.915 63.9401V52.4665L146.034 48.8889V61.6081Z",
            fill: "#D6D6D6"
          }), jsx("mask", Object.assign({
            id: "mask4_8926_132573",
            style: {
              maskType: 'luminance'
            },
            maskUnits: "userSpaceOnUse",
            x: "141",
            y: "48",
            width: "6",
            height: "16"
          }, {
            children: jsx("path", {
              d: "M146.034 61.6081L141.915 63.9401V52.4665L146.034 48.8889V61.6081Z",
              fill: "white"
            })
          })), jsx("g", Object.assign({
            mask: "url(#mask4_8926_132573)"
          }, {
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M140.144 47.2251L150.427 63.4082L147.805 65.5993L137.521 49.4207L140.144 47.2251Z",
              fill: "white"
            })
          })), jsx("path", {
            d: "M148.546 48.8889H146.034V61.6127H148.546V48.8889Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.757 51.7891L147.964 54.7393V49.1434L151.757 45.6567V51.7891Z",
            fill: "white"
          }), jsx("path", {
            d: "M156.834 45.6567H151.757V51.7936H156.834V45.6567Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M159.13 46.3386L154.582 49.8798V43.1565L159.13 38.9744V46.3386Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M165.223 38.9744H159.13V46.3386H165.223V38.9744Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.757 58.1941L147.964 60.3398V54.7393L151.757 51.7891V58.1941Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M156.834 51.7891H151.757V58.1941H156.834V51.7891Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M159.13 54.0256L154.582 56.5985V49.8798L159.13 46.3386V54.0256Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M165.223 46.3386H159.13V54.0256H165.223V46.3386Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.812 53.3439H163.907C164.34 53.3439 164.693 53.0075 164.693 52.6029V45.1023C164.693 44.6932 164.34 44.3613 163.907 44.3613H160.812C160.38 44.3613 160.026 44.6932 160.026 45.1023V52.6029C160.026 53.012 160.38 53.3439 160.812 53.3439Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.826 44.4978H163.895C164.182 44.4978 164.42 44.7205 164.42 44.9933V52.7076C164.42 52.9803 164.182 53.2031 163.895 53.2031H160.826C160.539 53.2031 160.301 52.9803 160.301 52.7076V44.9933C160.301 44.7205 160.539 44.4978 160.826 44.4978Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.208 44.3567H164.517C164.614 44.3567 164.694 44.2794 164.694 44.1885C164.694 44.0975 164.614 44.0203 164.517 44.0203H160.208C160.111 44.0203 160.031 44.0975 160.031 44.1885C160.031 44.2794 160.111 44.3567 160.208 44.3567Z",
            fill: "white"
          }), jsx("path", {
            d: "M162.358 46.0659H160.026V51.2436H162.358V46.0659Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.812 44.0204H163.907C164.34 44.0204 164.693 43.684 164.693 43.2794V35.7788C164.693 35.3697 164.34 35.0378 163.907 35.0378H160.812C160.38 35.0378 160.026 35.3697 160.026 35.7788V43.2794C160.026 43.6885 160.38 44.0204 160.812 44.0204Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.826 35.1741H163.895C164.182 35.1741 164.42 35.3968 164.42 35.6696V43.3838C164.42 43.6566 164.182 43.8793 163.895 43.8793H160.826C160.539 43.8793 160.301 43.6566 160.301 43.3838V35.6696C160.301 35.3968 160.539 35.1741 160.826 35.1741Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M160.208 35.0378H164.517C164.614 35.0378 164.694 34.9605 164.694 34.8696C164.694 34.7787 164.614 34.7014 164.517 34.7014H160.208C160.111 34.7014 160.031 34.7787 160.031 34.8696C160.031 34.9605 160.111 35.0378 160.208 35.0378Z",
            fill: "white"
          }), jsx("path", {
            d: "M162.358 36.7471H160.026V41.9248H162.358V36.7471Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.764 51.0983H168.08C168.544 51.0983 168.923 50.7392 168.923 50.3028V42.2657C168.923 41.8293 168.544 41.4702 168.08 41.4702H164.764C164.301 41.4702 163.921 41.8293 163.921 42.2657V50.3028C163.921 50.7392 164.301 51.0983 164.764 51.0983Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.777 41.6201H168.066C168.376 41.6201 168.632 41.861 168.632 42.152V50.4208C168.632 50.7118 168.38 50.9527 168.066 50.9527H164.777C164.468 50.9527 164.212 50.7118 164.212 50.4208V42.152C164.212 41.861 164.464 41.6201 164.777 41.6201Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.116 41.4701H168.734C168.84 41.4701 168.924 41.3883 168.924 41.2883C168.924 41.1883 168.84 41.1064 168.734 41.1064H164.116C164.01 41.1064 163.926 41.1883 163.926 41.2883C163.926 41.3883 164.014 41.4701 164.116 41.4701Z",
            fill: "white"
          }), jsx("path", {
            d: "M166.42 43.302H163.921V48.8525H166.42V43.302Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.764 41.1066H168.08C168.544 41.1066 168.923 40.7474 168.923 40.311V32.274C168.923 31.8376 168.544 31.4785 168.08 31.4785H164.764C164.301 31.4785 163.921 31.8376 163.921 32.274V40.311C163.921 40.7474 164.301 41.1066 164.764 41.1066Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.777 31.6284H168.066C168.376 31.6284 168.632 31.8693 168.632 32.1603V40.4291C168.632 40.7201 168.38 40.961 168.066 40.961H164.777C164.468 40.961 164.212 40.7201 164.212 40.4291V32.1603C164.212 31.8693 164.464 31.6284 164.777 31.6284Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M164.115 31.4784H168.733C168.839 31.4784 168.923 31.3966 168.923 31.2966C168.923 31.1966 168.839 31.1147 168.733 31.1147H164.115C164.009 31.1147 163.925 31.1966 163.925 31.2966C163.925 31.3966 164.013 31.4784 164.115 31.4784Z",
            fill: "white"
          }), jsx("path", {
            d: "M166.42 33.3103H163.921V38.8608H166.42V33.3103Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.689 48.8844H172.283C172.787 48.8844 173.197 48.498 173.197 48.0207V39.3063C173.197 38.8336 172.787 38.4426 172.283 38.4426H168.689C168.186 38.4426 167.775 38.829 167.775 39.3063V48.0207C167.775 48.4934 168.186 48.8844 168.689 48.8844Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.702 38.6064H172.27C172.605 38.6064 172.879 38.8656 172.879 39.1838V48.1481C172.879 48.4663 172.605 48.7255 172.27 48.7255H168.702C168.367 48.7255 168.093 48.4663 168.093 48.1481V39.1838C168.093 38.8656 168.367 38.6064 168.702 38.6064Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M167.983 38.4427H172.99C173.105 38.4427 173.197 38.3563 173.197 38.2472C173.197 38.1381 173.105 38.0518 172.99 38.0518H167.983C167.868 38.0518 167.775 38.1381 167.775 38.2472C167.775 38.3563 167.868 38.4427 167.983 38.4427Z",
            fill: "white"
          }), jsx("path", {
            d: "M170.486 40.4292H167.775V46.4479H170.486V40.4292Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.689 38.0519H172.283C172.787 38.0519 173.197 37.6655 173.197 37.1882V28.4738C173.197 28.001 172.787 27.6101 172.283 27.6101H168.689C168.186 27.6101 167.775 27.9965 167.775 28.4738V37.1882C167.775 37.6609 168.186 38.0519 168.689 38.0519Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M168.702 27.7737H172.27C172.605 27.7737 172.879 28.0328 172.879 28.351V37.3154C172.879 37.6336 172.605 37.8927 172.27 37.8927H168.702C168.367 37.8927 168.093 37.6336 168.093 37.3154V28.351C168.093 28.0328 168.367 27.7737 168.702 27.7737Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M167.983 27.6146H172.99C173.105 27.6146 173.197 27.5282 173.197 27.4191C173.197 27.31 173.105 27.2236 172.99 27.2236H167.983C167.868 27.2236 167.775 27.31 167.775 27.4191C167.775 27.5282 167.868 27.6146 167.983 27.6146Z",
            fill: "white"
          }), jsx("path", {
            d: "M170.486 29.5964H167.775V35.6151H170.486V29.5964Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 48.7433L150.34 49.3343V48.216L151.095 47.5205V48.7433Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.986 49.6072L149.319 50.1254V49.1435L149.986 48.5298V49.6072Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.002 50.3754L148.428 50.8209V49.9708L149.002 49.439V50.3754Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 57.226L148.428 58.958V57.5624L151.095 55.6804V57.226Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 45.2658L155.13 47.6569V46.0522L158.203 43.4565V45.2658Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 52.2938L155.13 54.2848V52.6802L158.203 50.5164V52.2938Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 83.0964H134.709C134.983 83.0964 135.208 82.8873 135.208 82.6282V80.2053C135.208 79.9462 134.983 79.7371 134.709 79.7371H132.753C132.479 79.7371 132.254 79.9462 132.254 80.2053V82.6282C132.254 82.8873 132.479 83.0964 132.753 83.0964Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 79.8188H134.192C134.656 79.8188 135.031 80.1734 135.031 80.6098V82.2099C135.031 82.6463 134.652 83.0009 134.192 83.0009H133.27C132.806 83.0009 132.431 82.6463 132.431 82.2099V80.6098C132.431 80.1734 132.81 79.8188 133.27 79.8188Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 79.7325H135.093C135.155 79.7325 135.208 79.6825 135.208 79.628C135.208 79.5689 135.159 79.5234 135.093 79.5234H132.369C132.307 79.5234 132.254 79.5734 132.254 79.628C132.254 79.6871 132.302 79.7325 132.369 79.7325Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 79.6917H133.671C133.707 79.6917 133.737 79.6645 133.737 79.6281C133.737 79.5917 133.707 79.5645 133.671 79.5645H132.514C132.479 79.5645 132.448 79.5917 132.448 79.6281C132.448 79.6645 132.479 79.6917 132.514 79.6917Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 80.8145H132.603V81.7736H134.925V80.8145Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 79.5007H134.709C134.983 79.5007 135.208 79.2916 135.208 79.0325V76.6096C135.208 76.3505 134.983 76.1414 134.709 76.1414H132.753C132.479 76.1414 132.254 76.3505 132.254 76.6096V79.0325C132.254 79.2916 132.479 79.5007 132.753 79.5007Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 76.2275H134.192C134.656 76.2275 135.031 76.5821 135.031 77.0185V78.6186C135.031 79.055 134.652 79.4096 134.192 79.4096H133.27C132.806 79.4096 132.431 79.055 132.431 78.6186V77.0185C132.431 76.5821 132.81 76.2275 133.27 76.2275Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 76.1412H135.093C135.155 76.1412 135.208 76.0912 135.208 76.0367C135.208 75.9776 135.159 75.9321 135.093 75.9321H132.369C132.307 75.9321 132.254 75.9821 132.254 76.0367C132.254 76.0958 132.302 76.1412 132.369 76.1412Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 76.0958H133.671C133.707 76.0958 133.737 76.0685 133.737 76.0321C133.737 75.9958 133.707 75.9685 133.671 75.9685H132.514C132.479 75.9685 132.448 75.9958 132.448 76.0321C132.448 76.0685 132.479 76.0958 132.514 76.0958Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 77.2185H132.603V78.1777H134.925V77.2185Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.753 75.9275H134.709C134.983 75.9275 135.208 75.7184 135.208 75.4593V73.0363C135.208 72.7772 134.983 72.5681 134.709 72.5681H132.753C132.479 72.5681 132.254 72.7772 132.254 73.0363V75.4593C132.254 75.7184 132.479 75.9275 132.753 75.9275Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.27 72.6499H134.192C134.656 72.6499 135.031 73.0045 135.031 73.4409V75.041C135.031 75.4774 134.652 75.832 134.192 75.832H133.27C132.806 75.832 132.431 75.4774 132.431 75.041V73.4409C132.431 73.0045 132.81 72.6499 133.27 72.6499Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.369 72.5636H135.093C135.155 72.5636 135.208 72.5136 135.208 72.459C135.208 72.3999 135.159 72.3545 135.093 72.3545H132.369C132.307 72.3545 132.254 72.4045 132.254 72.459C132.254 72.5181 132.302 72.5636 132.369 72.5636Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M132.514 72.5228H133.671C133.707 72.5228 133.737 72.4955 133.737 72.4591C133.737 72.4228 133.707 72.3955 133.671 72.3955H132.514C132.479 72.3955 132.448 72.4228 132.448 72.4591C132.448 72.4955 132.479 72.5228 132.514 72.5228Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M134.925 73.6455H132.603V74.6047H134.925V73.6455Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 83.0962H136.286C136.573 83.0962 136.811 82.8734 136.811 82.6007V80.0414C136.811 79.7686 136.577 79.5459 136.286 79.5459H134.224C133.937 79.5459 133.698 79.7686 133.698 80.0414V82.6007C133.698 82.8734 133.932 83.0962 134.224 83.0962Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 79.6414H135.791C136.255 79.6414 136.63 79.9959 136.63 80.4323V82.2097C136.63 82.6461 136.25 83.0007 135.791 83.0007H134.723C134.259 83.0007 133.884 82.6461 133.884 82.2097V80.4323C133.884 79.9959 134.263 79.6414 134.723 79.6414Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 79.5459H136.696C136.762 79.5459 136.815 79.4959 136.815 79.4323C136.815 79.3686 136.762 79.3186 136.696 79.3186H133.821C133.755 79.3186 133.702 79.3686 133.702 79.4323C133.702 79.4959 133.755 79.5459 133.821 79.5459Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 79.505H135.19C135.229 79.505 135.26 79.4732 135.26 79.4368C135.26 79.4005 135.229 79.3687 135.19 79.3687H133.971C133.931 79.3687 133.9 79.4005 133.9 79.4368C133.9 79.4732 133.931 79.505 133.971 79.505Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M136.515 80.687H134.064V81.6962H136.515V80.687Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 79.3049H136.286C136.573 79.3049 136.811 79.0822 136.811 78.8094V76.2501C136.811 75.9774 136.577 75.7546 136.286 75.7546H134.224C133.937 75.7546 133.698 75.9774 133.698 76.2501V78.8094C133.698 79.0822 133.932 79.3049 134.224 79.3049Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 75.8455H135.791C136.255 75.8455 136.63 76.2 136.63 76.6364V78.4139C136.63 78.8503 136.25 79.2048 135.791 79.2048H134.723C134.259 79.2048 133.884 78.8503 133.884 78.4139V76.6364C133.884 76.2 134.263 75.8455 134.723 75.8455Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 75.7546H136.696C136.762 75.7546 136.815 75.7046 136.815 75.641C136.815 75.5773 136.762 75.5273 136.696 75.5273H133.821C133.755 75.5273 133.702 75.5773 133.702 75.641C133.702 75.7046 133.755 75.7546 133.821 75.7546Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 75.7091H135.19C135.229 75.7091 135.26 75.6773 135.26 75.6409C135.26 75.6046 135.229 75.5728 135.19 75.5728H133.971C133.931 75.5728 133.9 75.6046 133.9 75.6409C133.9 75.6773 133.931 75.7091 133.971 75.7091Z",
            fill: "white"
          }), jsx("path", {
            d: "M136.515 76.8958H134.064V77.9049H136.515V76.8958Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.224 75.532H136.286C136.573 75.532 136.811 75.3092 136.811 75.0365V72.4772C136.811 72.2044 136.577 71.9817 136.286 71.9817H134.224C133.937 71.9817 133.698 72.2044 133.698 72.4772V75.0365C133.698 75.3092 133.932 75.532 134.224 75.532Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.723 72.0725H135.791C136.255 72.0725 136.63 72.4271 136.63 72.8635V74.6409C136.63 75.0773 136.25 75.4319 135.791 75.4319H134.723C134.259 75.4319 133.884 75.0773 133.884 74.6409V72.8635C133.884 72.4271 134.263 72.0725 134.723 72.0725Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.821 71.9817H136.696C136.762 71.9817 136.815 71.9317 136.815 71.868C136.815 71.8044 136.762 71.7544 136.696 71.7544H133.821C133.755 71.7544 133.702 71.8044 133.702 71.868C133.702 71.9317 133.755 71.9817 133.821 71.9817Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.971 71.9362H135.19C135.229 71.9362 135.26 71.9044 135.26 71.868C135.26 71.8316 135.229 71.7998 135.19 71.7998H133.971C133.931 71.7998 133.9 71.8316 133.9 71.868C133.9 71.9044 133.931 71.9362 133.971 71.9362Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M136.515 73.1228H134.064V74.132H136.515V73.1228Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 82.9552H138.692C139.001 82.9552 139.253 82.7189 139.253 82.4234V79.6823C139.253 79.3913 139.001 79.1504 138.692 79.1504H136.485C136.176 79.1504 135.924 79.3868 135.924 79.6823V82.4234C135.924 82.7143 136.176 82.9552 136.485 82.9552Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 79.2549H138.219C138.682 79.2549 139.058 79.6095 139.058 80.0459V82.0597C139.058 82.4961 138.678 82.8506 138.219 82.8506H136.956C136.492 82.8506 136.117 82.4961 136.117 82.0597V80.0459C136.117 79.6095 136.497 79.2549 136.956 79.2549Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 79.1549H139.124C139.195 79.1549 139.252 79.1003 139.252 79.0322C139.252 78.964 139.195 78.9094 139.124 78.9094H136.047C135.976 78.9094 135.919 78.964 135.919 79.0322C135.919 79.1003 135.976 79.1549 136.047 79.1549Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 79.1093H137.518C137.562 79.1093 137.593 79.0775 137.593 79.0366C137.593 78.9957 137.557 78.9639 137.518 78.9639H136.211C136.167 78.9639 136.136 78.9957 136.136 79.0366C136.136 79.0775 136.171 79.1093 136.211 79.1093Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M138.935 80.3777H136.312V81.4596H138.935V80.3777Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 78.8959H138.692C139.001 78.8959 139.253 78.6595 139.253 78.3641V75.6229C139.253 75.332 139.001 75.0911 138.692 75.0911H136.485C136.176 75.0911 135.924 75.3274 135.924 75.6229V78.3641C135.924 78.655 136.176 78.8959 136.485 78.8959Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 75.1956H138.219C138.682 75.1956 139.058 75.5501 139.058 75.9865V78.0003C139.058 78.4367 138.678 78.7913 138.219 78.7913H136.956C136.492 78.7913 136.117 78.4367 136.117 78.0003V75.9865C136.117 75.5501 136.497 75.1956 136.956 75.1956Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 75.0956H139.124C139.195 75.0956 139.252 75.041 139.252 74.9728C139.252 74.9046 139.195 74.8501 139.124 74.8501H136.047C135.976 74.8501 135.919 74.9046 135.919 74.9728C135.919 75.041 135.976 75.0956 136.047 75.0956Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 75.0456H137.518C137.562 75.0456 137.593 75.0138 137.593 74.9729C137.593 74.932 137.557 74.9001 137.518 74.9001H136.211C136.167 74.9001 136.136 74.932 136.136 74.9729C136.136 75.0138 136.171 75.0456 136.211 75.0456Z",
            fill: "white"
          }), jsx("path", {
            d: "M138.935 76.3137H136.312V77.3956H138.935V76.3137Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.485 74.8547H138.692C139.001 74.8547 139.253 74.6183 139.253 74.3228V71.5817C139.253 71.2907 139.001 71.0498 138.692 71.0498H136.485C136.176 71.0498 135.924 71.2862 135.924 71.5817V74.3228C135.924 74.6137 136.176 74.8547 136.485 74.8547Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.956 71.1543H138.219C138.682 71.1543 139.058 71.5089 139.058 71.9453V73.9591C139.058 74.3955 138.678 74.75 138.219 74.75H136.956C136.492 74.75 136.117 74.3955 136.117 73.9591V71.9453C136.117 71.5089 136.497 71.1543 136.956 71.1543Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.047 71.0543H139.124C139.195 71.0543 139.252 70.9998 139.252 70.9316C139.252 70.8634 139.195 70.8088 139.124 70.8088H136.047C135.976 70.8088 135.919 70.8634 135.919 70.9316C135.919 70.9998 135.976 71.0543 136.047 71.0543Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.211 71.0043H137.518C137.562 71.0043 137.593 70.9725 137.593 70.9316C137.593 70.8907 137.557 70.8589 137.518 70.8589H136.211C136.167 70.8589 136.136 70.8907 136.136 70.9316C136.136 70.9725 136.171 71.0043 136.211 71.0043Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M138.935 72.2725H136.312V73.3544H138.935V72.2725Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 73.0909L138.029 74.2046V69.8497L141.932 68.2542V73.0909Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M145.845 68.2542H141.933V73.0864H145.845V68.2542Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 77.923L138.029 78.5594V74.2046L141.932 73.0908V77.923Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M145.845 73.0908H141.933V77.9276H145.845V73.0908Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M141.932 82.7598L138.029 82.9144V78.5595L141.932 77.9231V82.7598Z",
            fill: "white"
          }), jsx("path", {
            d: "M145.845 77.9231H141.933V82.7553H145.845V77.9231Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 71.0452L143.836 72.368V67.1994L148.463 65.3083V71.0452Z",
            fill: "white"
          }), jsx("path", {
            d: "M153.108 65.3083H148.463V71.0452H153.108V65.3083Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 76.7865L143.836 77.5366V72.368L148.463 71.0452V76.7865Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M153.108 71.0452H148.463V76.782H153.108V71.0452Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.463 82.5234L143.836 82.7053V77.5367L148.463 76.7866V82.5234Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M153.108 76.7866H148.463V82.5234H153.108V76.7866Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 68.5996L150.785 70.1633V64.0447L156.265 61.8081V68.5996Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M161.762 61.8081H156.265V68.5996H161.762V61.8081Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 75.3865L150.785 76.2775V70.1634L156.265 68.5996V75.3865Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M161.762 68.5996H156.265V75.3911H161.762V68.5996Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.265 82.1779L150.785 82.3961V76.2775L156.265 75.3865V82.1779Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M161.762 75.3865H156.265V82.1779H161.762V75.3865Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 65.4538L159.85 67.3403V59.9624L166.459 57.2622V65.4538Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M173.091 57.2622H166.459V65.4538H173.091V57.2622Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 73.6454L159.85 74.7228V67.3404L166.459 65.4539V73.6454Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M173.091 65.4539H166.459V73.6454H173.091V65.4539Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.459 81.8368L159.85 82.1005V74.7226L166.459 73.6453V81.8368Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            d: "M173.091 73.6453H166.459V81.8368H173.091V73.6453Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.371 91.0422H137.283V96.5563C137.283 96.7291 136.409 96.87 135.327 96.87C134.245 96.87 133.371 96.7291 133.371 96.5563V91.0422Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.327 91.3514C136.404 91.3514 137.283 91.2105 137.283 91.0378C137.283 90.865 136.404 90.7241 135.327 90.7241C134.25 90.7241 133.371 90.865 133.371 91.0378C133.371 91.2105 134.25 91.3514 135.327 91.3514Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.371 85.5283H137.283V91.0424C137.283 91.2151 136.409 91.3561 135.327 91.3561C134.245 91.3561 133.371 91.2151 133.371 91.0424V85.5283Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.327 85.8419C136.404 85.8419 137.283 85.701 137.283 85.5283C137.283 85.3555 136.404 85.2146 135.327 85.2146C134.25 85.2146 133.371 85.3555 133.371 85.5283C133.371 85.701 134.25 85.8419 135.327 85.8419Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.882 91.8879H141.271V98.0703C141.271 98.2657 140.29 98.4203 139.076 98.4203C137.862 98.4203 136.882 98.2657 136.882 98.0703V91.8879Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.076 92.2379C140.286 92.2379 141.271 92.0788 141.271 91.8879C141.271 91.6969 140.286 91.5378 139.076 91.5378C137.866 91.5378 136.882 91.6969 136.882 91.8879C136.882 92.0788 137.866 92.2379 139.076 92.2379Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.882 85.7056H141.271V91.8879C141.271 92.0788 140.29 92.2379 139.076 92.2379C137.862 92.2379 136.882 92.0834 136.882 91.8879V85.7056Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.076 86.0555C140.286 86.0555 141.271 85.8964 141.271 85.7055C141.271 85.5146 140.286 85.3555 139.076 85.3555C137.866 85.3555 136.882 85.5146 136.882 85.7055C136.882 85.8964 137.866 86.0555 139.076 86.0555Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.516 92.8606H145.452V99.8203C145.452 100.038 144.348 100.216 142.984 100.216C141.619 100.216 140.516 100.038 140.516 99.8203V92.8606Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.984 93.2561C144.344 93.2561 145.452 93.0788 145.452 92.8606C145.452 92.6424 144.344 92.4651 142.984 92.4651C141.624 92.4651 140.516 92.6424 140.516 92.8606C140.516 93.0788 141.624 93.2561 142.984 93.2561Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.516 85.9009H145.452V92.8605C145.452 93.0787 144.348 93.256 142.984 93.256C141.619 93.256 140.516 93.0787 140.516 92.8605V85.9009Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.984 86.2963C144.344 86.2963 145.452 86.1191 145.452 85.9009C145.452 85.6827 144.344 85.5054 142.984 85.5054C141.624 85.5054 140.516 85.6827 140.516 85.9009C140.516 86.1191 141.624 86.2963 142.984 86.2963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.569 93.8154H150.119V101.639C150.119 101.884 148.878 102.08 147.342 102.08C145.805 102.08 144.564 101.88 144.564 101.639V93.8154H144.569Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M147.346 94.2608C148.873 94.2608 150.123 94.0608 150.123 93.8199C150.123 93.5789 148.878 93.3789 147.346 93.3789C145.813 93.3789 144.568 93.5789 144.568 93.8199C144.568 94.0608 145.813 94.2608 147.346 94.2608Z",
            fill: "#BBBBBB"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.569 85.9963H150.119V93.8197C150.119 94.0652 148.878 94.2607 147.342 94.2607C145.805 94.2607 144.564 94.0606 144.564 93.8197V85.9963H144.569Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M147.346 86.4373C148.873 86.4373 150.123 86.2373 150.123 85.9964C150.123 85.7554 148.878 85.5554 147.346 85.5554C145.813 85.5554 144.568 85.7554 144.568 85.9964C144.568 86.2373 145.813 86.4373 147.346 86.4373Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M140.149 103.657H137.412L134.493 101.861H136.975L140.149 103.657Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M165.095 94.938C166.42 94.938 167.493 97.0563 167.493 99.6747C167.493 102.289 166.424 104.411 165.1 104.411C163.775 104.411 162.702 102.293 162.702 99.6747C162.702 97.0609 163.771 94.938 165.095 94.938Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            d: "M165.095 94.938H150.494V104.407H165.095V94.938Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.494 94.938C151.818 94.938 152.891 97.0563 152.891 99.6747C152.891 102.289 151.823 104.411 150.498 104.411C149.173 104.411 148.101 102.293 148.101 99.6747C148.101 97.0609 149.169 94.938 150.494 94.938Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.074 97.261C150.595 97.261 151.015 98.3429 151.015 99.6748C151.015 101.007 150.595 102.089 150.074 102.089C149.553 102.089 149.134 101.007 149.134 99.6748C149.134 98.3429 149.553 97.261 150.074 97.261Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M165.043 85.4963C166.367 85.4963 167.44 87.6147 167.44 90.2331C167.44 92.8469 166.371 94.9698 165.047 94.9698C163.722 94.9698 162.649 92.8515 162.649 90.2331C162.649 87.6192 163.718 85.4963 165.043 85.4963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            d: "M165.048 85.4963H150.446V94.9653H165.048V85.4963Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.446 85.4963C151.77 85.4963 152.843 87.6147 152.843 90.2331C152.843 92.8469 151.775 94.9698 150.45 94.9698C149.126 94.9698 148.053 92.8515 148.053 90.2331C148.053 87.6192 149.121 85.4963 150.446 85.4963Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M150.026 87.8193C150.547 87.8193 150.967 88.9012 150.967 90.2332C150.967 91.5651 150.547 92.647 150.026 92.647C149.505 92.647 149.086 91.5651 149.086 90.2332C149.086 88.9012 149.505 87.8193 150.026 87.8193Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M172.905 96.5154H156.6V107.094H172.905V96.5154Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.6 96.5154C158.075 96.5154 159.276 98.8838 159.276 101.802C159.276 104.721 158.083 107.089 156.604 107.089C155.125 107.089 153.929 104.721 153.929 101.802C153.929 98.8838 155.125 96.5154 156.6 96.5154Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.132 99.1111C156.71 99.1111 157.183 100.316 157.183 101.807C157.183 103.293 156.715 104.502 156.132 104.502C155.549 104.502 155.081 103.298 155.081 101.807C155.081 100.32 155.549 99.1111 156.132 99.1111Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M172.905 85.9419H156.6V96.52H172.905V85.9419Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.6 85.9419C158.075 85.9419 159.276 88.3103 159.276 91.2287C159.276 94.1471 158.083 96.5155 156.604 96.5155C155.125 96.5155 153.929 94.1471 153.929 91.2287C153.929 88.3103 155.125 85.9419 156.6 85.9419Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.132 88.533C156.71 88.533 157.183 89.7376 157.183 91.2286C157.183 92.7151 156.715 93.9243 156.132 93.9243C155.549 93.9243 155.081 92.7197 155.081 91.2286C155.081 89.7422 155.549 88.533 156.132 88.533Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M181.984 98.2202H163.563V110.171H181.984V98.2202Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.563 98.2202C165.232 98.2202 166.588 100.893 166.588 104.193C166.588 107.494 165.237 110.167 163.572 110.167C161.908 110.167 160.548 107.494 160.548 104.193C160.548 100.893 161.899 98.2202 163.568 98.2202H163.563Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.033 101.152C163.691 101.152 164.221 102.516 164.221 104.198C164.221 105.88 163.691 107.244 163.033 107.244C162.376 107.244 161.846 105.88 161.846 104.198C161.846 102.516 162.376 101.152 163.033 101.152Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            d: "M181.984 86.269H163.563V98.2155H181.984V86.269Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.563 86.269C165.232 86.269 166.588 88.942 166.588 92.2423C166.588 95.5425 165.237 98.2155 163.572 98.2155C161.908 98.2155 160.548 95.5425 160.548 92.2423C160.548 88.942 161.899 86.269 163.568 86.269H163.563Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.033 89.2012C163.691 89.2012 164.221 90.5649 164.221 92.2469C164.221 93.9288 163.691 95.2926 163.033 95.2926C162.376 95.2926 161.846 93.9288 161.846 92.2469C161.846 90.5649 162.376 89.2012 163.033 89.2012Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M173.525 112.689C174.346 112.689 175.013 112.117 175.013 111.417V97.1518C175.013 94.3561 172.951 94.1288 172.893 93.1469L172.571 87.5374H170.364L170.041 93.1469C169.984 94.1288 167.922 94.3561 167.922 97.1518V111.417C167.922 112.117 168.593 112.689 169.41 112.689H173.525Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            d: "M171.295 97.5063H167.917V105.934H171.295V97.5063Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M137.412 113.571H147.797V107.962L140.15 103.657H137.412V113.571Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.246 117.985H154.017L154.26 111.635L145.615 106.748H142.246V117.985Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M145.641 106.748H142.246L138.935 104.716H142.025L145.641 106.748Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.188 123.522H161.969L162.088 116.049L151.972 110.344L148.188 110.366V123.522Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.973 110.344L148.189 110.367L144.312 107.98L147.796 107.962L151.973 110.344Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M154.578 129.427H170.517V120.817L158.83 114.203H154.578V129.427Z",
            fill: "#CCCCCC"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.83 114.203H154.578L150.092 111.448H153.924L158.83 114.203Z",
            fill: "#E7E7E7"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M161.599 135.946H179.829V126.1L166.46 118.54H161.599V135.946Z",
            fill: "#A5A5A5"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M176.358 127.613L163.991 120.013V138.369L176.358 149.751V127.613Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M163.991 120.013H169.064L182.509 127.613H176.358L163.991 120.013Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M161.599 118.54L156.473 115.385V131.223L161.599 135.946V118.54Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M154.573 114.203L150.092 111.448V125.281L154.573 129.404V114.203Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "0.22",
            strokeMiterlimit: "22.93"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M148.185 110.362L144.312 107.98V119.949L148.185 123.518V110.362Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.246 106.753L138.935 104.716V114.944L142.246 117.994V106.753Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M137.412 103.657L134.493 101.861V110.871L137.412 113.553V103.657Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M166.46 118.54H161.599L156.473 115.385H160.888L166.46 118.54Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M157.62 120.763L160.04 122.677V128.995L157.62 127V120.763Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.28 116.472L153.382 117.958V123.522L151.28 121.79V116.472Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M145.346 112.29L147.152 113.571V118.354L145.346 116.863V112.29Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.849 108.325L141.46 109.466V113.721L139.849 112.394V108.325Z",
            fill: "#D6D6D6"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M135.253 105.094L136.626 106.066V109.708L135.253 108.571V105.094Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M153.386 110.33V108.198L156.94 109.985V112.271L153.386 110.33Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M136.873 101.252V99.8521L139.204 101.029V102.53L136.873 101.252Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M139.257 119.767V118.085L141.566 120.363V122.222L139.257 119.767Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M133.641 84.8235V83.4916L135.972 83.437V84.8735L133.641 84.8235Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.428 85.0418V83.1916L147.669 83.1189V85.1145L144.428 85.0418Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 51.1209L148.428 53.1984V51.8028L151.095 49.5481V51.1209Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M151.095 54.8576L150.34 55.4032V54.2212L151.095 53.6257V54.8576Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.986 55.6577L149.319 56.1396V54.9713L149.986 54.4758V55.6577Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M149.002 56.3668L148.428 56.785V55.644L149.002 55.2122V56.3668Z",
            fill: "#BDBDBD"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 42.5293L157.333 43.2067V41.9202L158.203 41.1201V42.5293Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.926 43.5248L156.158 44.1203V42.9884L156.926 42.2883V43.5248Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M155.797 44.4067L155.13 44.9249V43.943L155.797 43.3293V44.4067Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M158.203 49.5662L157.333 50.1936V48.8389L158.203 48.1479V49.5662Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M156.926 50.489L156.158 51.0436V49.698L156.926 49.1252V50.489Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M155.797 51.3073L155.13 51.7891V50.4754L155.797 49.9753V51.3073Z",
            fill: "white"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 59.7806L132.122 58.1487V110.271L130.471 108.635V59.7806Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 108.635L203.173 180.49V190.618L130.471 111.207V108.635Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2122L203.173 -22.1987V-12.0752L130.471 59.7806V57.2122Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 70.2316V72.3045L203.173 37.288V29.1191L130.471 70.2316Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 98.1838V96.1155L203.173 131.132V139.301L130.471 98.1838Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 83.2281L203.173 80.3369V88.0785L130.471 85.1919V83.2281Z",
            fill: "#9E9E9E"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 59.7806H132.122L203.173 -6.03834V-12.0752L130.471 59.7806Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 72.3043H132.122L203.173 40.229V37.2878L130.471 72.3043Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 96.1155H132.122L203.173 128.191V131.132L130.471 96.1155Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 108.635H132.122L203.173 174.458V180.49L130.471 108.635Z",
            fill: "#989898"
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M130.471 57.2122L128.921 58.9077V109.512L130.471 111.207V57.2122Z",
            fill: "#9E9E9E"
          })]
        }))]
      })), jsx("path", {
        d: "M24.5907 65.1246C22.2859 57.4787 20.8652 44.4072 30.5574 35.4674C37.9646 28.6352 57.9758 27.9467 64.937 42.8463C66.099 45.3335 64.5108 49.2318 61.3853 49.0899C60.1571 49.0331 59.3964 52.9212 58.6861 55.3335C59.6806 65.1246 68.5403 65.3054 73.0346 72.7872C78.5751 82.0107 71.756 95.6332 55.4187 95.6332C39.0813 95.6332 29.7158 82.1257 24.5907 65.1246Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M37.3676 75.6793C37.3676 73.1251 37.3631 60.4708 37.3674 60.2579C30.3469 61.2915 30.9425 48.0087 38.0457 51.2724C39.6084 52.2657 44.4681 54.5975 44.0419 46.3673C50.7171 49.4953 56.2798 48.0342 55.1672 44.1448C59.6174 50.2567 60.928 47.4785 60.928 49.4953C61.9711 60.1761 60.9218 71.3539 54.2763 71.3547C53.5493 71.3459 52.5449 70.9499 51.8305 70.8148V75.6793C51.8305 78.5173 51.8305 79.9363 51.8305 79.9363C51.8305 79.9363 48.3903 88.2517 44.7228 88.2057C41.0552 88.1597 37.3676 79.9363 37.3676 79.9363C37.3676 79.9363 37.3676 78.5173 37.3676 75.6793Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M49.0683 50.7405C48.3148 50.9172 47.6861 51.2154 47.3484 51.4276C47.1877 51.5286 46.9755 51.4803 46.8744 51.3198C46.7734 51.1593 46.8217 50.9474 46.9824 50.8464C47.3832 50.5946 48.0822 50.2665 48.9112 50.072C49.7404 49.8775 50.7259 49.8108 51.6828 50.1139C51.8637 50.1712 51.9639 50.3642 51.9065 50.5449C51.8491 50.7257 51.6559 50.8257 51.475 50.7684C50.6736 50.5146 49.8217 50.5638 49.0683 50.7405Z",
        fill: "#5C3737"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M57.2248 50.6655C56.7867 50.6402 56.3793 50.7521 56.15 50.8573C55.9775 50.9364 55.7735 50.8609 55.6942 50.6886C55.615 50.5163 55.6906 50.3125 55.8631 50.2333C56.1804 50.0878 56.6995 49.9474 57.2645 49.98C57.8381 50.0132 58.4734 50.2268 58.9734 50.807C59.0972 50.9507 59.081 51.1675 58.9371 51.2912C58.7932 51.4149 58.5762 51.3986 58.4524 51.2549C58.099 50.8448 57.6544 50.6903 57.2248 50.6655Z",
        fill: "#5C3737"
      }), jsx("path", {
        d: "M49.9982 54.1426C49.9982 54.989 49.7108 55.6492 49.2915 55.6661C48.8721 55.683 48.5149 55.0398 48.4683 54.2103C48.4217 53.3809 48.7479 52.7038 49.175 52.6868C49.6021 52.6699 49.9671 53.3216 49.9982 54.1426Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M57.8409 54.1426C57.8409 54.989 57.5536 55.6492 57.1342 55.6661C56.7148 55.683 56.3576 55.0398 56.311 54.2103C56.2644 53.3809 56.5983 52.7038 57.0177 52.6868C57.4371 52.6699 57.8409 53.3216 57.8409 54.1426Z",
        fill: "#232E36"
      }), jsx("path", {
        d: "M50.9997 63.8071C51.5365 64.2975 52.2653 64.5838 53.0336 64.6055C53.4079 64.6055 53.7822 64.5448 54.1269 64.4189C54.4717 64.2931 54.7869 64.1065 55.0479 63.8679C55.3089 63.6292 55.5157 63.3515 55.6536 63.0434C55.7915 62.7354 55.8555 62.4056 55.8457 62.0758L50.1674 61.989C50.1674 62.6659 50.4678 63.3211 50.9997 63.8071Z",
        fill: "#5C3737"
      }), jsx("path", {
        d: "M51.3883 64.0974C50.9026 63.7849 50.5344 63.355 50.3361 62.856C51.0003 62.7345 51.7006 62.8477 52.2706 63.1688C52.8405 63.4899 53.2692 64.002 53.4229 64.5834C53.3039 64.5964 53.1683 64.6039 53.0493 64.6082C52.4496 64.5908 51.8691 64.4098 51.3883 64.0974Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M50.2513 62.2552C50.2175 62.2107 50.1856 62.0592 50.1738 61.989L55.8469 62.0757C55.8525 62.1896 55.8304 62.3956 55.8187 62.4843C55.4804 62.5277 50.2936 62.311 50.2513 62.2552Z",
        fill: "white"
      }), jsx("path", {
        d: "M54.1495 54.9999C54.3094 54.2731 54.25 53.5153 53.9789 52.8223C53.7078 52.1292 53.2371 51.5319 52.6263 51.1059C52.0155 50.6799 51.292 50.4443 50.5472 50.4288C49.8024 50.4133 49.0698 50.6187 48.4418 51.0189C47.8138 51.4192 47.3186 51.9963 47.0189 52.6776C46.7191 53.3588 46.6282 54.1134 46.7577 54.8462C46.8871 55.579 47.2311 56.257 47.7462 56.7946C48.2612 57.3322 48.9242 57.7053 49.6514 57.8666C50.1353 57.974 50.6356 57.985 51.1237 57.899C51.6118 57.813 52.0781 57.6316 52.4959 57.3653C52.9137 57.099 53.2748 56.753 53.5586 56.3471C53.8423 55.9412 54.0431 55.4834 54.1495 54.9999ZM53.6129 54.8794C53.4775 55.5002 53.1612 56.0671 52.7036 56.5084C52.2461 56.9498 51.668 57.2459 51.0422 57.3595C50.4163 57.473 49.7709 57.3988 49.1872 57.1463C48.6035 56.8938 48.1078 56.4743 47.7625 55.9407C47.4173 55.4071 47.238 54.7833 47.2474 54.148C47.2567 53.5128 47.4542 52.8945 47.8149 52.3712C48.1756 51.8479 48.6834 51.4431 49.2743 51.2078C49.8651 50.9725 50.5125 50.9172 51.1347 51.049C51.9681 51.2336 52.6945 51.74 53.1554 52.4576C53.6163 53.1752 53.7743 54.0459 53.5948 54.8794H53.6129Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M38.874 51.4094C38.874 51.2918 38.9694 51.1965 39.0871 51.1965C39.8808 51.1965 41.2146 51.2827 42.6515 51.5404C44.086 51.7977 45.6405 52.2289 46.8643 52.9274C46.9665 52.9857 47.002 53.1157 46.9436 53.2178C46.8852 53.3199 46.755 53.3553 46.6529 53.297C45.49 52.6333 43.9901 52.213 42.5762 51.9594C41.1648 51.7063 39.8562 51.6222 39.0871 51.6222C38.9694 51.6222 38.874 51.5269 38.874 51.4094Z",
        fill: "white"
      }), jsx("path", {
        d: "M62.5193 54.705C62.6795 53.978 62.6203 53.2199 62.3492 52.5265C62.078 51.8331 61.6071 51.2356 60.996 50.8095C60.3849 50.3834 59.6611 50.1478 58.916 50.1326C58.1709 50.1174 57.438 50.3232 56.8099 50.724C56.1819 51.1248 55.687 51.7026 55.3877 52.3843C55.0884 53.0661 54.9982 53.8211 55.1285 54.5541C55.2588 55.287 55.6037 55.9649 56.1197 56.502C56.6357 57.0392 57.2995 57.4114 58.0273 57.5718C58.5107 57.6783 59.0104 57.6886 59.4978 57.6021C59.9852 57.5157 60.4508 57.3342 60.8679 57.0679C61.2851 56.8017 61.6456 56.456 61.929 56.0506C62.2123 55.6451 62.413 55.1879 62.5193 54.705ZM61.9827 54.5846C61.8462 55.2059 61.5283 55.7729 61.0692 56.2137C60.6102 56.6546 60.0305 56.9496 59.4035 57.0614C58.7766 57.1731 58.1305 57.0967 57.5471 56.8417C56.9636 56.5867 56.469 56.1646 56.1257 55.6288C55.7824 55.093 55.606 54.4676 55.6186 53.8316C55.6312 53.1956 55.8324 52.5776 56.1966 52.0558C56.5609 51.534 57.0719 51.1319 57.665 50.9002C58.2581 50.6685 58.9067 50.6177 59.5287 50.7542C60.362 50.9387 61.0885 51.4451 61.5494 52.1627C62.0103 52.8804 62.1682 53.751 61.9887 54.5846H61.9827Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M54.5308 53.306C54.641 53.2619 54.7672 53.3147 54.8127 53.424C55.1727 54.2895 55.6378 55.5232 55.7843 56.6384C55.8575 57.1957 55.8539 57.7422 55.7041 58.2048C55.5514 58.676 55.2463 59.059 54.7339 59.2655C54.6238 59.3099 54.4974 59.2573 54.4517 59.1482C54.406 59.039 54.4582 58.9145 54.5683 58.8702C54.9474 58.7174 55.1731 58.4413 55.2928 58.0718C55.4153 57.6937 55.4255 57.2181 55.3562 56.6902C55.2176 55.6349 54.7722 54.4459 54.4136 53.5837C54.3681 53.4744 54.4206 53.3501 54.5308 53.306Z",
        fill: "#CD754D"
      }), jsx("g", Object.assign({
        style: {
          mixBlendMode: 'multiply'
        },
        opacity: "0.7"
      }, {
        children: jsx("path", {
          d: "M51.6387 71.1213C48.2824 70.3464 45.1031 68.8969 42.2764 66.8528C42.2764 66.8528 44.6016 72.8346 51.6253 73.9581L51.6387 71.1213Z",
          fill: "#EA925A"
        })
      })), jsx("path", {
        d: "M70.9747 86.1092L68.3886 98.545C68.1123 99.8795 67.8028 101.214 67.4602 102.549C67.0955 104.012 66.6755 105.465 66.2334 106.908L59.6686 128.142L59.3812 129.081L59.0939 130L58.4086 132.215L57.7566 134.33H33.8844L33.2434 132.215L32.4808 129.714L32.2929 129.081L31.6298 126.886L25.7833 107.64C25.2749 105.959 24.8439 104.249 24.4792 102.539C24.1255 100.858 23.8492 99.1678 23.6503 97.4774L20.6787 87.2205L25.6617 83.6774L32.4145 81.0282L32.7129 80.9095L37.1889 79.1598L41.2127 78.1909H51.5442L54.231 78.8039L56.2535 79.6837L58.7071 80.7514L63.5146 82.8569L70.9747 86.1092Z",
        fill: "#FAD2A0"
      }), jsx("path", {
        d: "M51.8291 80.5252V76.3711H37.3662V79.5241C37.3662 79.5241 41.7799 88.5498 45.5137 88.5947C49.2474 88.6395 51.8291 80.5252 51.8291 80.5252Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M73.3065 166.032L46.6824 180.633L17.0742 168.889C19.0746 157.975 24.7774 146.548 28.8335 139.411C31.3423 134.992 33.2322 132.214 33.2322 132.214H58.4085C59.9005 134.33 61.3372 136.791 62.6966 139.411C68.8084 151.164 73.3065 166.032 73.3065 166.032Z",
        fill: "#3A6598"
      }), jsx("path", {
        d: "M57.2364 241.637C52.5283 241.637 48.6822 238.295 48.5385 234.084L46.5713 170.452C46.5713 163.621 52.8156 158.036 60.4525 158.036C68.0894 158.036 74.3338 163.621 74.3338 170.452C76.732 191.765 73.1291 216.182 65.4812 236.368C64.2876 239.521 60.9609 241.637 57.2364 241.637Z",
        fill: "#3A6598"
      }), jsx("path", {
        d: "M34.0611 241.844C38.7692 241.844 42.6153 238.502 42.759 234.291L44.7262 170.659C44.7262 163.828 38.4819 158.243 30.845 158.243C23.2081 158.243 16.9638 163.828 16.9638 170.659C14.5655 191.972 18.1684 216.389 25.8164 236.575C27.01 239.728 30.3366 241.844 34.0611 241.844Z",
        fill: "#3A6598"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M117.085 88.7103C117.085 88.7103 110.939 92.8183 107.299 89.864C104.002 87.1885 105.844 83.4906 105.844 83.4906C105.844 83.4906 107.115 79.4573 110.052 76.0261C111.986 73.7655 116.094 69.9024 117.405 70.9277C119.113 72.2659 113.35 75.5341 114.289 76.8491C115.252 78.1983 116.131 78.2804 119.158 77.4819C121.05 76.9826 122.927 75.7335 124.627 75.6478C127.952 75.4803 126.835 83.4186 117.085 88.7103Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M124.926 76.5498C125.037 76.4608 125.19 76.4899 125.268 76.6146C125.345 76.7394 125.318 76.9127 125.206 77.0017C123.464 78.3957 121.829 79.3233 120.346 79.8729C119.825 80.0662 119.359 80.1984 118.954 80.2805L118.783 80.3129C118.626 80.3405 118.511 80.354 118.44 80.3581C118.304 80.3659 118.19 80.2482 118.185 80.0951C118.179 79.9421 118.285 79.8116 118.42 79.8038L118.49 79.7976C118.575 79.7881 118.703 79.7685 118.873 79.7342C119.255 79.6567 119.699 79.5308 120.198 79.3456C121.634 78.8135 123.225 77.9112 124.926 76.5498Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M124.57 78.4966C124.67 78.3925 124.825 78.3995 124.916 78.512C125.007 78.6246 124.999 78.8002 124.899 78.9042L124.803 78.9993C124.761 79.0397 124.71 79.0885 124.649 79.1452C124.447 79.3323 124.209 79.5396 123.935 79.7618C123.155 80.395 122.248 81.0219 121.222 81.5987C120.481 82.0151 119.704 82.39 118.892 82.7145C118.764 82.7658 118.624 82.6902 118.58 82.5458C118.536 82.4013 118.605 82.2427 118.733 82.1914C119.525 81.8747 120.284 81.5087 121.007 81.1022C122.008 80.5394 122.893 79.9283 123.652 79.3122L123.905 79.1023C124.066 78.966 124.211 78.8372 124.34 78.7174L124.519 78.5473C124.54 78.5265 124.557 78.5095 124.57 78.4966Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M123.241 81.592C123.356 81.5091 123.507 81.5464 123.579 81.6753C123.651 81.8042 123.616 81.9759 123.502 82.0588C121.997 83.1454 120.747 83.9138 119.737 84.4182L119.48 84.5433C119.233 84.6599 119.017 84.7519 118.83 84.8219L118.711 84.8652C118.676 84.8776 118.644 84.8881 118.617 84.8969L118.519 84.925L118.424 84.927L118.271 84.9005C118.22 84.8926 118.159 84.8837 118.09 84.8745C116.935 84.7206 115.625 84.7376 114.379 85.0673C112.952 85.4448 111.82 86.1923 111.087 87.3815C111.009 87.5078 110.856 87.54 110.745 87.4533C110.635 87.3666 110.608 87.1938 110.686 87.0675C111.497 85.7514 112.735 84.9336 114.272 84.5269C115.582 84.1802 116.946 84.1625 118.153 84.3233L118.398 84.3595L118.462 84.3703L118.576 84.3335L118.68 84.2955C118.913 84.2078 119.2 84.0818 119.542 83.9109C120.528 83.4185 121.757 82.6637 123.241 81.592Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M113.895 77.6616C114.03 77.6735 114.129 77.807 114.117 77.9598L114.096 78.1624L114.061 78.4084C114.048 78.4943 114.033 78.584 114.016 78.6768C113.917 79.2079 113.774 79.7375 113.576 80.2318C113.126 81.3537 112.461 82.1333 111.539 82.3951C111.407 82.4325 111.275 82.3423 111.243 82.1937C111.212 82.0451 111.293 81.8942 111.425 81.8568C112.177 81.6432 112.736 80.9874 113.129 80.0072C113.311 79.554 113.444 79.0626 113.535 78.5689C113.567 78.3958 113.592 78.2352 113.61 78.0912L113.628 77.9167C113.64 77.7639 113.76 77.6497 113.895 77.6616Z",
        fill: "#CD754D"
      }), jsx("path", {
        d: "M108.22 65.702L117.271 62.5463C118.639 62.0693 120.106 62.7503 120.555 64.0547L128.37 86.758C128.822 88.0707 128.076 89.5144 126.716 89.9883L117.666 93.1441C116.298 93.6211 114.83 92.9401 114.381 91.6356L106.567 68.9324C106.115 67.6197 106.861 66.176 108.22 65.702Z",
        fill: "#373C4F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M107.443 68.809C107.142 67.9284 107.651 66.9577 108.581 66.6408L117.842 63.4848C118.772 63.1679 119.77 63.6249 120.071 64.5054L127.612 86.5609C127.913 87.4415 127.404 88.4122 126.474 88.7291L117.213 91.8851C116.283 92.202 115.285 91.745 114.984 90.8645L107.443 68.809Z",
          fill: "white"
        }), jsx("path", {
          d: "M110.337 73.6082C110.211 73.2413 110.423 72.8368 110.811 72.7048L113.417 71.8167C113.804 71.6847 114.22 71.8751 114.346 72.242C114.471 72.6089 114.259 73.0133 113.871 73.1454L111.265 74.0334C110.878 74.1655 110.462 73.9751 110.337 73.6082Z",
          fill: "#2CDFA6"
        }), jsx("path", {
          d: "M114.686 72.1257C114.561 71.7589 114.773 71.3544 115.161 71.2223L117.767 70.3343C118.154 70.2023 118.57 70.3926 118.695 70.7595C118.821 71.1264 118.608 71.5309 118.221 71.6629L115.615 72.551C115.227 72.683 114.812 72.4926 114.686 72.1257Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M119.037 70.6436C118.911 70.2767 119.124 69.8722 119.511 69.7402L121.616 69.0229L122.07 70.3515L119.965 71.0688C119.578 71.2009 119.162 71.0105 119.037 70.6436Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M111.109 75.8669C111.034 75.6467 111.161 75.404 111.394 75.3248L121.076 72.0254C121.308 71.9462 121.558 72.0604 121.633 72.2805L122.678 75.3364C122.753 75.5566 122.626 75.7993 122.393 75.8785L112.711 79.1779C112.479 79.2571 112.229 79.1429 112.154 78.9227L111.109 75.8669Z",
          fill: "#5C5C5C"
        }), jsx("path", {
          d: "M112.699 80.5172C112.624 80.2971 112.751 80.0544 112.983 79.9752L122.666 76.6758C122.898 76.5966 123.148 76.7108 123.223 76.9309L123.586 77.9939C123.661 78.214 123.534 78.4567 123.302 78.5359L113.619 81.8353C113.387 81.9145 113.137 81.8003 113.062 81.5802L112.699 80.5172Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M113.607 83.1745C113.532 82.9543 113.659 82.7117 113.892 82.6324L123.574 79.333C123.806 79.2538 124.056 79.368 124.131 79.5882L124.54 80.7839C124.615 81.0041 124.488 81.2468 124.255 81.326L114.573 84.6254C114.341 84.7046 114.091 84.5904 114.016 84.3703L113.607 83.1745Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M114.561 85.9645C114.486 85.7444 114.613 85.5017 114.846 85.4225L124.528 82.1231C124.76 82.0438 125.01 82.1581 125.085 82.3782L125.448 83.4411C125.524 83.6613 125.396 83.9039 125.164 83.9832L115.482 87.2826C115.249 87.3618 115 87.2476 114.925 87.0274L114.561 85.9645Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M115.47 88.622C115.395 88.4018 115.522 88.1592 115.755 88.0799L125.437 84.7805C125.669 84.7013 125.919 84.8155 125.994 85.0357L126.358 86.0986C126.433 86.3187 126.305 86.5614 126.073 86.6406L116.391 89.94C116.158 90.0193 115.909 89.905 115.834 89.6849L115.47 88.622Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M109.184 70.2355C109.143 70.1169 109.212 69.9861 109.337 69.9435L113.964 68.3667C114.089 68.324 114.224 68.3856 114.264 68.5042C114.305 68.6228 114.236 68.7536 114.111 68.7962L109.484 70.373C109.359 70.4157 109.224 70.3541 109.184 70.2355Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M109.409 70.8942C109.369 70.7756 109.437 70.6448 109.563 70.6022L112.436 69.6231C112.561 69.5804 112.695 69.642 112.736 69.7606C112.776 69.8792 112.708 70.01 112.583 70.0526L109.71 71.0317C109.584 71.0744 109.45 71.0128 109.409 70.8942Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M119.646 66.9264C119.73 67.1715 119.588 67.4417 119.329 67.5299C119.07 67.6182 118.792 67.491 118.708 67.2458C118.625 67.0007 118.767 66.7305 119.025 66.6423C119.284 66.554 119.562 66.6812 119.646 66.9264Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M109.655 68.5509C109.738 68.796 109.597 69.0662 109.338 69.1545C109.079 69.2427 108.801 69.1155 108.717 68.8703C108.633 68.6252 108.775 68.355 109.034 68.2668C109.293 68.1786 109.571 68.3058 109.655 68.5509Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M105.594 84.3533C105.594 84.3533 107.867 74.0802 110.802 73.0703L110.818 73.0639C111.976 72.792 112.635 74.7555 111.919 76.2731L108.585 83.321L105.594 84.3533Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M91.6737 131.222L91.3544 131.465C88.33 133.765 84.2563 132.877 82.2549 129.482L63.5352 97.716C61.535 94.3205 62.365 89.7034 65.3894 87.4027L65.7081 87.1601C68.7325 84.8594 72.8068 85.7467 74.8076 89.1423L93.5279 120.909C95.5287 124.304 94.6981 128.921 91.6737 131.222Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M110.208 84.3532C112.095 85.619 112.833 88.2011 111.882 90.2156L93.5071 129.091C91.7048 132.595 87.4927 133.623 84.1406 131.376C80.7593 129.109 79.5739 124.399 81.5179 120.95L104.923 85.3265C106.089 83.5511 108.38 83.1293 110.208 84.3532Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M82.726 102.581L74.7009 88.963C72.7662 85.6803 68.6469 84.9232 65.5469 87.281C62.4469 89.6388 61.4938 94.2541 63.4285 97.5367L71.3778 111.025L82.726 102.581Z",
        fill: "#FAD2A0"
      }), jsx("path", {
        d: "M22.2264 114.412C23.9675 105.31 22.9941 94.9685 21.5796 89.0119C20.8975 86.1393 21.3213 82.6781 24.1205 81.7394C25.3458 81.3286 26.698 80.987 28.0392 80.7097C31.3125 80.0327 34.2527 82.5598 35.3471 85.7181C37.8986 93.0816 43.3331 100.299 46.3035 103.545V156.399H28.7468C25.6095 156.399 22.9832 154.008 22.6319 150.89C21.46 140.489 19.7988 127.102 22.2264 114.412Z",
        fill: "#E00109"
      }), jsx("path", {
        d: "M46.3037 103.545C53.2643 98.8798 54.9499 90.6455 56.1505 84.3797C56.6667 81.6861 59.0399 79.7919 61.7289 80.3316C63.3583 80.6586 64.9327 81.117 66.3216 81.6141C69.3588 82.7012 69.1058 85.9522 68.6592 89.147C67.9521 94.2049 70.1256 101.585 71.3635 107.496C72.7049 113.902 70.5657 138.856 69.0947 151.264C68.7429 154.231 66.2123 156.399 63.2243 156.399H46.3037V103.545Z",
        fill: "#E00109"
      }), jsx("path", {
        opacity: "0.3",
        d: "M52.2002 138.043V136.276C53.6743 136.473 56.2294 136.865 60.5535 136.865C64.8775 136.865 68.4154 136.473 68.9067 136.276V138.043C68.5792 138.338 65.762 139.221 61.0448 139.221C56.3277 139.221 53.5105 138.436 52.2002 138.043Z",
        fill: "black"
      }), jsx("path", {
        opacity: "0.3",
        d: "M24.6836 138.043V136.276C26.1577 136.473 28.7128 136.865 33.0369 136.865C37.3609 136.865 40.8988 136.473 41.3901 136.276V138.043C41.0626 138.338 37.754 139.221 33.0369 139.221C28.3197 139.221 25.9939 138.436 24.6836 138.043Z",
        fill: "black"
      }), jsxs("g", Object.assign({
        opacity: "0.5"
      }, {
        children: [jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46.3037 156.399V103.393H47.2864V156.399H46.3037Z",
          fill: "black"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46.3037 103.648V103.393H47.2864V103.648H46.3037ZM46.3037 104.667V104.157H47.2864V104.667H46.3037ZM46.3037 105.686V105.177H47.2864V105.686H46.3037ZM46.3037 106.706V106.196H47.2864V106.706H46.3037ZM46.3037 107.725V107.215H47.2864V107.725H46.3037ZM46.3037 108.744V108.235H47.2864V108.744H46.3037ZM46.3037 109.764V109.254H47.2864V109.764H46.3037ZM46.3037 110.783V110.273H47.2864V110.783H46.3037ZM46.3037 111.803V111.293H47.2864V111.803H46.3037ZM46.3037 112.822V112.312H47.2864V112.822H46.3037ZM46.3037 113.841V113.332H47.2864V113.841H46.3037ZM46.3037 114.861V114.351H47.2864V114.861H46.3037ZM46.3037 115.88V115.37H47.2864V115.88H46.3037ZM46.3037 116.899V116.39H47.2864V116.899H46.3037ZM46.3037 117.919V117.409H47.2864V117.919H46.3037ZM46.3037 118.938V118.428H47.2864V118.938H46.3037ZM46.3037 119.957V119.448H47.2864V119.957H46.3037ZM46.3037 120.977V120.467H47.2864V120.977H46.3037ZM46.3037 121.996V121.486H47.2864V121.996H46.3037ZM46.3037 123.015V122.506H47.2864V123.015H46.3037ZM46.3037 124.035V123.525H47.2864V124.035H46.3037ZM46.3037 125.054V124.545H47.2864V125.054H46.3037ZM46.3037 126.074V125.564H47.2864V126.074H46.3037ZM46.3037 127.093V126.583H47.2864V127.093H46.3037ZM46.3037 128.112V127.603H47.2864V128.112H46.3037ZM46.3037 129.132V128.622H47.2864V129.132H46.3037ZM46.3037 130.151V129.641H47.2864V130.151H46.3037ZM46.3037 131.17V130.661H47.2864V131.17H46.3037ZM46.3037 132.19V131.68H47.2864V132.19H46.3037ZM46.3037 133.209V132.699H47.2864V133.209H46.3037ZM46.3037 134.228V133.719H47.2864V134.228H46.3037ZM46.3037 135.248V134.738H47.2864V135.248H46.3037ZM46.3037 136.267V135.757H47.2864V136.267H46.3037ZM46.3037 137.286V136.777H47.2864V137.286H46.3037ZM46.3037 138.306V137.796H47.2864V138.306H46.3037ZM46.3037 139.325V138.816H47.2864V139.325H46.3037ZM46.3037 140.345V139.835H47.2864V140.345H46.3037ZM46.3037 141.364V140.854H47.2864V141.364H46.3037ZM46.3037 142.383V141.874H47.2864V142.383H46.3037ZM46.3037 143.403V142.893H47.2864V143.403H46.3037ZM46.3037 144.422V143.912H47.2864V144.422H46.3037ZM46.3037 145.441V144.932H47.2864V145.441H46.3037ZM46.3037 146.461V145.951H47.2864V146.461H46.3037ZM46.3037 147.48V146.97H47.2864V147.48H46.3037ZM46.3037 148.499V147.99H47.2864V148.499H46.3037ZM46.3037 149.519V149.009H47.2864V149.519H46.3037ZM46.3037 150.538V150.028H47.2864V150.538H46.3037ZM46.3037 151.557V151.048H47.2864V151.557H46.3037ZM46.3037 152.577V152.067H47.2864V152.577H46.3037ZM46.3037 153.596V153.087H47.2864V153.596H46.3037ZM46.3037 154.616V154.106H47.2864V154.616H46.3037ZM46.3037 155.635V155.125H47.2864V155.635H46.3037ZM46.3037 156.399V156.145H47.2864V156.399H46.3037Z",
          fill: "white"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter0_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M62.8504 102.12C62.9781 102.057 63.1281 102.02 63.2742 102.032C63.7124 102.068 64.0367 102.449 64.0011 102.887C63.9892 103.033 63.9408 103.176 63.8579 103.291C64.4095 104.193 64.6896 105.268 64.5976 106.399C64.3671 109.232 61.8926 111.332 59.0564 111.102C56.2324 110.872 54.1177 108.4 54.3482 105.567C54.5777 102.746 57.0531 100.634 59.8893 100.864C61.0326 100.969 62.0488 101.431 62.8504 102.12Z",
          fill: "white"
        }), jsx("path", {
          d: "M63.4291 103.599C63.3409 103.629 63.2425 103.633 63.1452 103.625C62.7069 103.59 62.3826 103.208 62.4182 102.771C62.4261 102.673 62.4584 102.578 62.4897 102.495C61.7795 101.886 60.8689 101.482 59.8586 101.4C57.3145 101.194 55.0779 103.08 54.8712 105.622C54.6644 108.163 56.5544 110.385 59.0985 110.591C61.6538 110.811 63.8792 108.911 64.0859 106.37C64.168 105.36 63.9145 104.41 63.4291 103.599Z",
          fill: "#E00109"
        }), jsx("path", {
          d: "M63.4286 103.599C63.3405 103.629 63.2421 103.633 63.1447 103.625C62.7065 103.59 62.3822 103.208 62.4178 102.771C62.4257 102.673 62.4458 102.577 62.4892 102.495C61.779 101.886 60.8684 101.482 59.8581 101.4C57.314 101.194 55.0897 103.081 54.8829 105.623C54.6762 108.164 56.5662 110.386 59.1103 110.592C61.6543 110.799 63.8787 108.911 64.0855 106.37C64.1676 105.36 63.9141 104.41 63.4286 103.599Z",
          stroke: "#E00109",
          strokeWidth: "0.0385495",
          strokeMiterlimit: "3.864"
        }), jsx("path", {
          d: "M62.7837 102.788C62.8035 102.545 63.0141 102.366 63.2576 102.386C63.501 102.406 63.6799 102.616 63.6602 102.859C63.6404 103.102 63.4298 103.281 63.1863 103.261C62.9429 103.242 62.7639 103.031 62.7837 102.788Z",
          fill: "#E00109"
        }), jsx("path", {
          d: "M63.1746 103.26C63.4166 103.28 63.6288 103.1 63.6484 102.858C63.6681 102.616 63.4879 102.405 63.2458 102.385C63.0038 102.365 62.7917 102.545 62.772 102.787C62.7523 103.029 62.9326 103.241 63.1746 103.26Z",
          stroke: "#E00109",
          strokeWidth: "0.0356583",
          strokeMiterlimit: "3.864"
        }), jsx("path", {
          d: "M63.6398 105.22L62.4421 107.741L61.87 107.695L62.3166 106.875L61.7773 105.068L62.3495 105.115L62.6226 106.275L62.647 106.277L63.0798 105.174L63.6398 105.22Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M61.5859 106.375C61.5522 106.788 61.089 106.909 60.6508 106.874C60.2247 106.839 59.7872 106.645 59.8208 106.231L60.3808 106.277C60.3699 106.41 60.5495 106.462 60.6834 106.473C60.8173 106.484 60.9907 106.461 61.0006 106.339C61.0134 106.181 60.8085 106.14 60.4746 106.027C60.1407 105.915 59.8979 105.736 59.9246 105.407C59.9582 104.994 60.3718 104.881 60.7979 104.915C61.2239 104.95 61.6016 105.127 61.5689 105.529L61.009 105.483C61.0179 105.374 60.8758 105.313 60.7662 105.304C60.6445 105.295 60.5086 105.308 60.4987 105.43C60.4858 105.588 60.7283 105.62 60.9902 105.714C61.3343 105.852 61.6155 106.01 61.5859 106.375Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M59.0126 105.762C59.0324 105.519 58.9173 105.277 58.6008 105.251C58.2843 105.225 58.1661 105.473 58.1483 105.692C58.1295 105.923 58.2315 106.176 58.548 106.202C58.8766 106.228 58.9948 105.981 59.0126 105.762ZM59.474 106.717L58.9506 106.675L58.9674 106.468L58.943 106.466C58.843 106.642 58.6525 106.724 58.3847 106.702C57.9221 106.665 57.5511 106.255 57.5996 105.659C57.649 105.052 58.0439 104.716 58.5065 104.754C58.7621 104.775 58.9723 104.902 59.0568 105.068L59.0812 105.07L59.098 104.863L59.6336 104.907L59.474 106.717Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M60.8707 107.626C59.438 107.314 57.9904 107.184 55.7256 107.16L55.7579 107.064C58.0256 107.053 59.8118 107.087 60.7704 107.202C61.3416 107.26 61.508 107.323 61.4912 107.53C61.4866 107.737 61.2319 107.704 60.8707 107.626Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M56.7518 105.382C56.7485 105.272 56.7055 105.048 56.4012 105.024C56.1212 105.001 56.0172 105.225 55.9971 105.321L56.7518 105.382ZM57.2969 105.61C57.291 105.683 57.2699 105.792 57.2699 105.792L55.9552 105.685C55.9506 105.893 56.096 106.064 56.3151 106.081C56.4733 106.094 56.5878 106.042 56.6454 105.937L57.2176 105.983C57.1471 106.247 56.8881 106.568 56.2917 106.52C55.7195 106.474 55.3666 105.992 55.4101 105.457C55.4547 104.91 55.8403 104.537 56.4124 104.584C56.9967 104.631 57.3414 105.063 57.2969 105.61Z",
          fill: "#FDF737"
        }), jsx("path", {
          d: "M56.9679 108.46C56.9943 108.437 57.0328 108.416 57.0703 108.407C57.1078 108.398 57.1453 108.388 57.1818 108.391C57.2183 108.394 57.2538 108.409 57.2894 108.425C57.3249 108.44 57.3594 108.467 57.3818 108.493L57.4154 108.533L57.3232 108.611L57.2907 108.559C57.2795 108.546 57.2561 108.532 57.2328 108.518C57.2094 108.504 57.1851 108.502 57.1729 108.501C57.1485 108.499 57.1242 108.497 57.111 108.508C57.0857 108.518 57.0725 108.529 57.0472 108.54C57.034 108.551 57.0199 108.574 57.0057 108.597C56.9916 108.621 56.9896 108.645 56.9886 108.657C56.9866 108.682 56.9847 108.706 56.9958 108.719C57.006 108.744 57.0172 108.757 57.0274 108.783C57.061 108.822 57.0965 108.837 57.1452 108.841C57.1695 108.843 57.1939 108.845 57.207 108.834C57.2324 108.824 57.2455 108.813 57.2709 108.803L57.3104 108.769L57.3886 108.861L57.3492 108.895C57.3228 108.917 57.2843 108.938 57.2468 108.947C57.2093 108.957 57.1718 108.966 57.1353 108.963C57.0988 108.96 57.0633 108.945 57.0277 108.93C56.9922 108.915 56.9698 108.888 56.9353 108.861C56.9129 108.835 56.8915 108.796 56.8823 108.759C56.8731 108.721 56.8639 108.684 56.8669 108.647C56.8699 108.611 56.885 108.575 56.9001 108.54C56.9143 108.517 56.9416 108.482 56.9679 108.46Z",
          fill: "white"
        }), jsx("path", {
          d: "M57.6195 108.586C57.58 108.62 57.5648 108.655 57.5609 108.704C57.5589 108.728 57.5569 108.752 57.5671 108.778C57.5803 108.767 57.5934 108.755 57.6198 108.733C57.6461 108.711 57.6724 108.688 57.6856 108.677C57.7119 108.655 57.7382 108.633 57.7645 108.61C57.7909 108.588 57.804 108.577 57.8172 108.565C57.7817 108.55 57.7583 108.536 57.7208 108.545C57.6833 108.555 57.6458 108.564 57.6195 108.586ZM57.8826 108.816L57.9609 108.908L57.9214 108.941C57.8951 108.963 57.8566 108.985 57.8191 108.994C57.7816 109.003 57.7441 109.012 57.7076 109.009C57.671 109.006 57.6355 108.991 57.6 108.976C57.5644 108.961 57.5421 108.935 57.5075 108.908C57.4852 108.881 57.4638 108.843 57.4546 108.805C57.4454 108.768 57.4362 108.73 57.4391 108.694C57.4421 108.657 57.4573 108.622 57.4724 108.586C57.4875 108.551 57.5139 108.529 57.5412 108.494C57.5675 108.472 57.606 108.45 57.6435 108.441C57.681 108.432 57.7185 108.423 57.755 108.426C57.7916 108.429 57.8271 108.444 57.8626 108.459C57.8981 108.474 57.9327 108.501 57.955 108.528L57.9886 108.567L57.6464 108.858C57.6819 108.873 57.7053 108.887 57.7428 108.878C57.7793 108.881 57.8178 108.859 57.8441 108.837L57.8826 108.816Z",
          fill: "white"
        }), jsx("path", {
          d: "M58.0114 108.74C58.0144 108.704 58.0295 108.668 58.0447 108.633C58.0598 108.597 58.0861 108.575 58.1125 108.553C58.1388 108.53 58.1773 108.509 58.2148 108.5C58.2523 108.491 58.2898 108.481 58.3263 108.484C58.3628 108.487 58.3984 108.502 58.4339 108.518C58.4694 108.533 58.4918 108.559 58.5263 108.586C58.5487 108.613 58.5701 108.651 58.5803 108.676C58.5895 108.714 58.5987 108.751 58.5957 108.788L58.572 109.08L58.4624 109.071L58.4862 108.779C58.4881 108.755 58.4901 108.73 58.4789 108.717C58.4687 108.692 58.4576 108.679 58.4474 108.653C58.4362 108.64 58.4128 108.626 58.3895 108.612C58.3661 108.598 58.3418 108.596 58.3174 108.594C58.2931 108.592 58.2687 108.59 58.2434 108.6C58.2181 108.61 58.2049 108.621 58.1917 108.633C58.1786 108.644 58.1644 108.667 58.1503 108.69C58.1361 108.714 58.1351 108.726 58.1332 108.75L58.1094 109.042L57.9877 109.032L58.0114 108.74Z",
          fill: "white"
        }), jsx("path", {
          d: "M58.7203 108.602C58.7467 108.58 58.7852 108.558 58.8227 108.549C58.8602 108.54 58.8977 108.531 58.9342 108.534C58.9707 108.537 59.0062 108.552 59.0418 108.567C59.0773 108.582 59.1118 108.609 59.1342 108.636L59.1678 108.675L59.0756 108.753L59.0421 108.714C59.0309 108.701 59.0075 108.687 58.9842 108.672C58.9608 108.658 58.9365 108.656 58.9243 108.655C58.9 108.653 58.8756 108.651 58.8625 108.663C58.8371 108.673 58.824 108.684 58.7986 108.694C58.7855 108.705 58.7713 108.729 58.7572 108.752C58.743 108.775 58.741 108.8 58.74 108.812C58.7381 108.836 58.7361 108.86 58.7473 108.873C58.7575 108.899 58.7686 108.912 58.7788 108.937C58.8124 108.977 58.8479 108.992 58.8966 108.996C58.921 108.998 58.9453 109 58.9585 108.989C58.9838 108.978 58.997 108.967 59.0223 108.957L59.0618 108.923L59.1401 109.016L59.0894 109.036C59.0631 109.058 59.0246 109.08 58.9871 109.089C58.9496 109.098 58.9121 109.107 58.8755 109.104C58.839 109.101 58.8035 109.086 58.768 109.071C58.7324 109.056 58.7101 109.03 58.6755 109.002C58.6532 108.976 58.6318 108.938 58.6226 108.9C58.6134 108.863 58.6042 108.825 58.6071 108.789C58.6101 108.752 58.6252 108.717 58.6404 108.681C58.6667 108.659 58.694 108.624 58.7203 108.602Z",
          fill: "white"
        }), jsx("path", {
          d: "M59.3016 108.845C59.2997 108.869 59.2977 108.894 59.3079 108.919C59.3181 108.944 59.3293 108.957 59.3395 108.983C59.3506 108.996 59.374 109.01 59.3974 109.024C59.4207 109.038 59.4451 109.04 59.4694 109.042C59.4937 109.044 59.5181 109.046 59.5434 109.036C59.5688 109.026 59.5819 109.015 59.6073 109.004C59.6204 108.993 59.6346 108.97 59.6487 108.947C59.6629 108.923 59.6648 108.899 59.6668 108.875C59.6688 108.85 59.6708 108.826 59.6596 108.813C59.6494 108.787 59.6382 108.774 59.628 108.749C59.6168 108.736 59.5935 108.722 59.5701 108.708C59.5468 108.693 59.5224 108.692 59.4981 108.69C59.4737 108.688 59.4494 108.686 59.4241 108.696C59.3987 108.706 59.3856 108.717 59.3602 108.727C59.3471 108.738 59.3329 108.762 59.3188 108.785C59.3168 108.809 59.3036 108.821 59.3016 108.845ZM59.1921 108.836C59.1951 108.8 59.2102 108.764 59.2253 108.729C59.2405 108.693 59.2668 108.671 59.2931 108.648C59.3195 108.626 59.3579 108.605 59.3955 108.596C59.433 108.586 59.4705 108.577 59.507 108.58C59.5435 108.583 59.579 108.598 59.6146 108.613C59.6501 108.628 59.6725 108.655 59.707 108.682C59.7294 108.708 59.7507 108.747 59.7609 108.772C59.7701 108.81 59.7793 108.847 59.7764 108.883C59.7734 108.92 59.7583 108.955 59.7431 108.991C59.728 109.026 59.7017 109.049 59.6744 109.083C59.648 109.106 59.6095 109.127 59.572 109.136C59.5345 109.145 59.497 109.155 59.4605 109.152C59.424 109.149 59.3884 109.133 59.3529 109.118C59.3174 109.103 59.295 109.077 59.2605 109.05C59.2381 109.023 59.2167 108.985 59.2075 108.947C59.1973 108.922 59.1881 108.885 59.1921 108.836Z",
          fill: "white"
        }), jsx("path", {
          d: "M60.3345 108.647L60.3256 108.757L59.9848 108.729C59.9726 108.728 59.9604 108.727 59.9472 108.738C59.9341 108.75 59.9331 108.762 59.9321 108.774C59.9311 108.786 59.9301 108.798 59.9413 108.811C59.9525 108.825 59.9647 108.825 59.9768 108.826L60.2081 108.845C60.2325 108.847 60.2568 108.849 60.268 108.862C60.2914 108.876 60.3025 108.89 60.3137 108.903C60.3249 108.916 60.3351 108.941 60.3453 108.967C60.3555 108.992 60.3545 109.004 60.3525 109.028C60.3505 109.053 60.3486 109.077 60.3344 109.1C60.3203 109.124 60.3071 109.135 60.2929 109.158C60.2798 109.169 60.2545 109.179 60.2413 109.191C60.216 109.201 60.1916 109.199 60.1794 109.198L59.8386 109.17L59.8475 109.061L60.1883 109.088C60.2005 109.089 60.2249 109.091 60.2258 109.079C60.239 109.068 60.24 109.056 60.241 109.044C60.242 109.032 60.243 109.019 60.2318 109.006C60.2206 108.993 60.2084 108.992 60.1963 108.991L59.965 108.972C59.9406 108.97 59.9163 108.968 59.8929 108.954C59.8696 108.94 59.8584 108.927 59.8472 108.914C59.836 108.901 59.8258 108.875 59.8146 108.862C59.8044 108.837 59.8064 108.813 59.8084 108.788C59.8104 108.764 59.8124 108.74 59.8255 108.729C59.8397 108.705 59.8528 108.694 59.867 108.671C59.8801 108.66 59.9055 108.649 59.9186 108.638C59.944 108.628 59.9683 108.63 59.9927 108.632L60.3335 108.66L60.3345 108.647Z",
          fill: "white"
        }), jsx("path", {
          d: "M61.0042 108.702L60.9815 108.981C60.9785 109.018 60.9634 109.053 60.9482 109.089C60.9331 109.124 60.9067 109.147 60.8794 109.181C60.8531 109.203 60.8146 109.225 60.7771 109.234C60.7396 109.243 60.7021 109.252 60.6656 109.249C60.6291 109.247 60.5935 109.231 60.558 109.216C60.5225 109.201 60.5001 109.175 60.4656 109.148C60.4432 109.121 60.4218 109.083 60.4126 109.045C60.4034 109.008 60.3942 108.97 60.3972 108.934L60.4199 108.654L60.5295 108.663L60.5067 108.943C60.5047 108.967 60.5028 108.991 60.513 109.017C60.5232 109.042 60.5343 109.055 60.5445 109.081C60.5557 109.094 60.5791 109.108 60.6024 109.122C60.6258 109.136 60.6501 109.138 60.6745 109.14C60.6988 109.142 60.7232 109.144 60.7485 109.134C60.7738 109.124 60.787 109.112 60.8123 109.102C60.8255 109.091 60.8396 109.068 60.8538 109.044C60.8679 109.021 60.8699 108.997 60.8719 108.972L60.8947 108.693L61.0042 108.702Z",
          fill: "white"
        }), jsx("path", {
          d: "M61.2841 109.177C61.3085 109.179 61.3328 109.181 61.346 109.17C61.3713 109.16 61.3845 109.149 61.3977 109.138C61.4108 109.126 61.425 109.103 61.4391 109.08C61.4533 109.056 61.4552 109.032 61.4572 109.008L61.4711 108.837L61.3128 108.825C61.2885 108.823 61.2641 108.821 61.2388 108.831C61.2135 108.841 61.2003 108.852 61.175 108.862C61.1618 108.874 61.1477 108.897 61.1335 108.92C61.1194 108.944 61.1184 108.956 61.1164 108.98C61.1144 109.004 61.1124 109.029 61.1226 109.054C61.1328 109.079 61.144 109.092 61.1542 109.118C61.1654 109.131 61.1887 109.145 61.2121 109.159C61.2355 109.173 61.2598 109.175 61.2841 109.177ZM61.6317 108.52L61.5901 109.031C61.5872 109.067 61.572 109.103 61.5569 109.138C61.5417 109.174 61.5154 109.196 61.4881 109.231C61.4618 109.253 61.4233 109.274 61.398 109.284C61.3605 109.294 61.3229 109.303 61.2864 109.3C61.2499 109.297 61.2144 109.282 61.1788 109.267C61.1433 109.251 61.121 109.225 61.0864 109.198C61.064 109.172 61.0427 109.133 61.0335 109.096C61.0243 109.058 61.0151 109.021 61.018 108.984C61.021 108.948 61.0361 108.912 61.0513 108.877C61.0664 108.841 61.0927 108.819 61.1191 108.797C61.1454 108.774 61.1839 108.753 61.2214 108.744C61.2589 108.735 61.2964 108.725 61.3329 108.728L61.5033 108.742L61.5221 108.511L61.6317 108.52Z",
          fill: "white"
        })]
      })), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M-4.96091 176.598C-4.96091 176.598 -1.10781 169.728 3.27307 170.137C7.24058 170.507 7.04644 174.616 7.04644 174.616C7.04644 174.616 7.48985 178.681 6.22152 183.184C5.3854 186.151 3.24487 191.671 1.68275 191.555C-0.353945 191.404 2.41646 185.271 1.07172 184.706C-0.308068 184.126 -0.970384 185.358 -3.34496 187.724C-4.82884 189.203 -5.76356 191.211 -7.23924 192.239C-10.1238 194.247 -11.5511 186.477 -4.96091 176.598Z",
        fill: "#EA925A"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.19743 176.596C-0.78069 176.059 -1.90199 173.891 -1.34755 171.674L9.3584 128.871C10.4594 124.963 14.23 122.547 17.7416 123.499C21.2842 124.46 23.179 128.471 21.9355 132.376L5.98041 173.862C5.18529 175.93 3.11165 177.115 1.19743 176.596Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M25.6782 87.558C25.4687 87.4813 25.2532 87.416 25.0324 87.363L24.5557 87.2484C21.2247 86.4495 17.916 88.7437 17.1665 92.373L10.2451 125.878C9.49504 129.507 11.5876 133.097 14.9192 133.897L15.3953 134.01C18.7263 134.809 22.035 132.516 22.7844 128.887L29.2672 97.5051L25.6782 87.558Z",
        fill: "#EA925A"
      }), jsx("path", {
        d: "M29.9876 90.2615C28.7277 87.4833 24.8198 86.7595 24.8198 86.7595C21.0223 85.8378 17.5462 88.715 16.7556 92.5866L12.8662 109.428L26.6919 114.769L29.9876 99.5068C29.9876 99.5068 31.2475 93.0396 29.9876 90.2615Z",
        fill: "#FAD2A0"
      }), jsxs("g", Object.assign({
        filter: "url(#filter1_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M131.046 30.4812H106.551C103.652 30.4812 101.302 32.7193 101.302 35.4802C101.302 38.2411 103.652 40.4792 106.551 40.4792H131.046C133.945 40.4792 136.295 38.2411 136.295 35.4802C136.295 32.7193 133.945 30.4812 131.046 30.4812Z",
          fill: "white"
        }), jsx("g", Object.assign({
          clipPath: "url(#clip3_8926_132573)"
        }, {
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M110.536 35.4801C110.536 37.5891 108.826 39.2987 106.717 39.2987C104.608 39.2987 102.898 37.5891 102.898 35.4801C102.898 33.3711 104.608 31.6614 106.717 31.6614C108.826 31.6614 110.536 33.3711 110.536 35.4801ZM106.717 33.5707C106.506 33.5707 106.335 33.7417 106.335 33.9526C106.335 34.1635 106.506 34.3345 106.717 34.3345H106.721C106.932 34.3345 107.103 34.1635 107.103 33.9526C107.103 33.7417 106.932 33.5707 106.721 33.5707H106.717ZM107.099 35.4801C107.099 35.2692 106.928 35.0982 106.717 35.0982C106.506 35.0982 106.335 35.2692 106.335 35.4801V37.0075C106.335 37.2184 106.506 37.3894 106.717 37.3894C106.928 37.3894 107.099 37.2184 107.099 37.0075V35.4801Z",
            fill: "#5382BC"
          })
        })), jsx("path", {
          d: "M120.468 36.0527H113.471C113.23 36.0527 113.034 36.2489 113.034 36.4909C113.034 36.7329 113.23 36.9291 113.471 36.9291H120.468C120.71 36.9291 120.906 36.7329 120.906 36.4909C120.906 36.2489 120.71 36.0527 120.468 36.0527Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M126.591 34.0808H113.471C113.23 34.0808 113.034 34.277 113.034 34.519C113.034 34.761 113.23 34.9571 113.471 34.9571H126.591C126.832 34.9571 127.028 34.761 127.028 34.519C127.028 34.277 126.832 34.0808 126.591 34.0808Z",
          fill: "#CCCCCC"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter2_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M79.4107 44.3489H115.749C120.05 44.3489 123.536 47.843 123.536 52.1531C123.536 56.4633 120.05 59.9574 115.749 59.9574H79.4107C75.1102 59.9574 71.6239 56.4633 71.6239 52.1531C71.6239 47.843 75.1102 44.3489 79.4107 44.3489Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M115.466 58.0452C118.725 58.0452 121.368 55.4029 121.368 52.1435C121.368 48.8842 118.725 46.2419 115.466 46.2419C112.207 46.2419 109.564 48.8842 109.564 52.1435C109.564 55.4029 112.207 58.0452 115.466 58.0452ZM117.855 49.7128C118.057 49.5112 118.384 49.5112 118.585 49.7128C118.787 49.9145 118.787 50.2415 118.585 50.4431L114.798 54.23C114.597 54.4317 114.27 54.4317 114.068 54.23L112.347 52.5087C112.145 52.307 112.145 51.9801 112.347 51.7784C112.549 51.5767 112.875 51.5767 113.077 51.7784L114.433 53.1346L117.855 49.7128Z",
          fill: "#2B994C"
        }), jsx("path", {
          d: "M89.044 52.8032H78.6616C78.3032 52.8032 78.0127 53.0943 78.0127 53.4534C78.0127 53.8125 78.3032 54.1036 78.6616 54.1036H89.044C89.4024 54.1036 89.693 53.8125 89.693 53.4534C89.693 53.0943 89.4024 52.8032 89.044 52.8032Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M98.1287 49.8767H78.6616C78.3032 49.8767 78.0127 50.1678 78.0127 50.5269C78.0127 50.886 78.3032 51.1771 78.6616 51.1771H98.1287C98.4871 51.1771 98.7776 50.886 98.7776 50.5269C98.7776 50.1678 98.4871 49.8767 98.1287 49.8767Z",
          fill: "#CCCCCC"
        })]
      })), jsxs("g", Object.assign({
        filter: "url(#filter3_d_8926_132573)"
      }, {
        children: [jsx("path", {
          d: "M76.8542 22.1494H96.903C99.2758 22.1494 101.199 24.0772 101.199 26.4552C101.199 28.8332 99.2758 30.761 96.903 30.761H76.8542C74.4814 30.761 72.558 28.8332 72.558 26.4552C72.558 24.0772 74.4814 22.1494 76.8542 22.1494Z",
          fill: "white"
        }), jsx("g", Object.assign({
          clipPath: "url(#clip4_8926_132573)"
        }, {
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M96.9278 29.8215C98.7493 29.8215 100.226 28.345 100.226 26.5235C100.226 24.7021 98.7493 23.2256 96.9278 23.2256C95.1064 23.2256 93.6299 24.7021 93.6299 26.5235C93.6299 28.345 95.1064 29.8215 96.9278 29.8215ZM98.1504 25.7674C98.2792 25.6386 98.2792 25.4297 98.1504 25.301C98.0216 25.1722 97.8128 25.1722 97.684 25.301L96.9278 26.0571L96.1717 25.301C96.0429 25.1722 95.834 25.1722 95.7053 25.301C95.5765 25.4297 95.5765 25.6386 95.7053 25.7674L96.4614 26.5235L95.7053 27.2797C95.5765 27.4085 95.5765 27.6173 95.7053 27.7461C95.834 27.8749 96.0429 27.8749 96.1717 27.7461L96.9278 26.9899L97.684 27.7461C97.8128 27.8749 98.0216 27.8749 98.1504 27.7461C98.2792 27.6173 98.2792 27.4085 98.1504 27.2797L97.3942 26.5235L98.1504 25.7674Z",
            fill: "#DD4242"
          })
        })), jsx("path", {
          d: "M81.8538 26.9465H76.1256C75.9279 26.9465 75.7676 27.1071 75.7676 27.3053C75.7676 27.5034 75.9279 27.664 76.1256 27.664H81.8538C82.0516 27.664 82.2119 27.5034 82.2119 27.3053C82.2119 27.1071 82.0516 26.9465 81.8538 26.9465Z",
          fill: "#CCCCCC"
        }), jsx("path", {
          d: "M86.8661 25.3313H76.1256C75.9279 25.3313 75.7676 25.4919 75.7676 25.69C75.7676 25.8881 75.9279 26.0487 76.1256 26.0487H86.8661C87.0638 26.0487 87.2241 25.8881 87.2241 25.69C87.2241 25.4919 87.0638 25.3313 86.8661 25.3313Z",
          fill: "#CCCCCC"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsxs("filter", Object.assign({
        id: "filter0_d_8926_132573",
        x: "23.6125",
        y: "76.1927",
        width: "71.7203",
        height: "71.7079",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "6.06383"
        }), jsx("feGaussianBlur", {
          stdDeviation: "15.1596"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter1_d_8926_132573",
        x: "88.848",
        y: "18.0275",
        width: "59.9006",
        height: "34.9055",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter2_d_8926_132573",
        x: "59.1703",
        y: "31.8951",
        width: "76.8196",
        height: "40.5159",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsxs("filter", Object.assign({
        id: "filter3_d_8926_132573",
        x: "60.1039",
        y: "9.69567",
        width: "53.5491",
        height: "33.5191",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, {
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "6.22687"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_8926_132573"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_8926_132573",
          result: "shape"
        })]
      })), jsx("clipPath", Object.assign({
        id: "clip0_8926_132573"
      }, {
        children: jsx("rect", {
          x: "0.353516",
          y: "0.412109",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_8926_132573"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-152.526 0.412109)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_8926_132573"
      }, {
        children: jsx("rect", {
          width: "13.3404",
          height: "26.6821",
          fill: "white",
          transform: "matrix(0.946658 -0.322597 0.323486 0.946111 106.897 67.2146)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip3_8926_132573"
      }, {
        children: jsx("rect", {
          width: "9.16485",
          height: "9.16485",
          fill: "white",
          transform: "translate(102.135 30.8977)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip4_8926_132573"
      }, {
        children: jsx("rect", {
          width: "7.9151",
          height: "7.91509",
          fill: "white",
          transform: "translate(92.9707 22.5659)"
        })
      }))]
    })]
  }));
};

const ProductDetail = ({
  selectedTask,
  user,
  goBack,
  miniImageUrl,
  rejectTask,
  freeTask,
  controlTag: _controlTag = true,
  showActions
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [qty, setQty] = useState(selectedTask.meta_data.count);
  const [openModal, setOpenModal] = useState();
  const product = selectedTask.meta_data.product;
  const location = product.locationHall && product.locationRack ? `${product.locationHall} / ${product.locationRack}` : product.locationHall ? product.locationHall : product.locationRack ? product.locationRack : undefined;
  const store = `${selectedTask.meta_data.store.id} - ${selectedTask.meta_data.store.label}`;
  const costCenter = `${selectedTask.meta_data.create.costCenter.id} - ${selectedTask.meta_data.create.costCenter.name}`;
  const handleFreeProduct = () => {
    setOpenModal('freeModal');
  };
  const handleRejectProduct = () => {
    setOpenModal('rejectModal');
  };
  const showRevisorReleaseBtn = showActions && selectedTask.state === 'PENDING' && checkUserLevel(user === null || user === void 0 ? void 0 : user.level, 'REVISOR');
  const showControlReleaseBtn = showActions && selectedTask.state === 'PENDING' && checkUserLevel(user === null || user === void 0 ? void 0 : user.level, 'CONTROL') && !((_a = selectedTask.meta_data.controlResponse) === null || _a === void 0 ? void 0 : _a.status);
  const showRejectBtn = showControlReleaseBtn || showRevisorReleaseBtn;
  const showAnyAction = showControlReleaseBtn || showRevisorReleaseBtn || showRejectBtn;
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: goBack
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "s"
      }, {
        children: [jsxs(Ramen.XBox, Object.assign({
          gap: "l"
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "s",
            verticalAlign: "center",
            width: "full"
          }, {
            children: [jsx(Ramen.XBox, Object.assign({
              width: 2,
              height: 2
            }, {
              children: jsx(Ramen.XImagePreviewer, {
                border: "solid",
                rounded: "s",
                src: miniImageUrl((_b = selectedTask.meta_data.product.sku) === null || _b === void 0 ? void 0 : _b.toString(), (_c = selectedTask.meta_data.product.ean) === null || _c === void 0 ? void 0 : _c.toString()),
                showExpandIcon: false
              })
            })), jsxs(Ramen.XBox, Object.assign({
              gap: "xxs"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: "bold",
                lineHeight: "title"
              }, {
                children: selectedTask.meta_data.product.description
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "normal",
                  colorThone: "dim"
                }, {
                  children: "EAN"
                })), jsx(Ramen.XText, {
                  children: (_e = (_d = selectedTask.meta_data.product) === null || _d === void 0 ? void 0 : _d.ean) === null || _e === void 0 ? void 0 : _e.toString()
                })]
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "normal",
                  colorThone: "dim"
                }, {
                  children: "SKU"
                })), jsx(Ramen.XText, {
                  children: (_g = (_f = selectedTask.meta_data.product) === null || _f === void 0 ? void 0 : _f.sku) === null || _g === void 0 ? void 0 : _g.toString()
                })]
              }))]
            }))]
          })), _controlTag && jsx(ControlTag, {
            task: selectedTask
          })]
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          width: "full",
          gap: "s"
        }, {
          children: [jsx(InfoBox, {
            label: "Costo",
            value: `${toCurrency(selectedTask.meta_data.product.unitCost)}`
          }), jsx(InfoBox, {
            label: "Stock f\u00EDsico",
            value: `${selectedTask.meta_data.product.fisicStock}`
          })]
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          width: "full",
          gap: "s"
        }, {
          children: [jsx(InfoBox, {
            label: "Stock te\u00F3rico",
            value: `${selectedTask.meta_data.product.stockTh}`
          }), jsx(InfoBox, {
            label: "Stock compr.",
            value: `${selectedTask.meta_data.product.nextCantProxAbastDesp || 0}`
          })]
        })), location && jsx(Ramen.XBox, Object.assign({
          width: 'full'
        }, {
          children: jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "solid"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              gap: "s",
              verticalAlign: "center",
              horizontalAlign: "center"
            }, {
              children: [jsx(Ramen.XIcon, {
                icon: "location-outline",
                size: "xs"
              }), jsx(Ramen.XText, Object.assign({
                fontSize: 11
              }, {
                children: "Ubicaci\u00F3n"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                weight: "bold"
              }, {
                children: location || ' - '
              }))]
            }))
          }))
        })), jsx(Ramen.XVSpace, {
          size: "s"
        }), jsxs(Ramen.XBox, Object.assign({
          gap: "l"
        }, {
          children: [jsx(InfoRawRow, {
            label: "Cantidad solicitada",
            value: `${selectedTask.meta_data.count.toString()} ${selectedTask.meta_data.product.um}`
          }), jsx(InfoRawRow, {
            label: "N\u00B0 solicitud",
            value: `${selectedTask.meta_data.documentNumber}`
          }), jsx(InfoRawRow, {
            label: "Tienda",
            value: store
          }), jsx(InfoRawRow, {
            label: "Centro de Costo",
            value: costCenter
          }), jsx(InfoRawRow, {
            label: "C\u00F3digo SAP",
            value: `${selectedTask.meta_data.product.sku}`
          }), jsx(InfoRawRow, {
            label: "Fecha de creaci\u00F3n",
            value: `${formatDate(selectedTask.created_at)}`
          }), jsx(InfoRawRow, {
            label: "Hora de creaci\u00F3n",
            value: `${formatDate(selectedTask.created_at, 'hh:mm')} hrs`
          }), jsx(InfoRawRow, {
            label: "Creado por",
            value: `${selectedTask.created_by.full_name}`
          }), jsx(InfoRawRow, {
            label: "Tintom\u00E9trico",
            value: `${selectedTask.meta_data.product.sectionGroup === 'TINTOMETRICO' ? 'Si' : 'No'}`
          }), jsx(InfoRawRow, {
            label: "Revisado por",
            value: (_h = selectedTask.meta_data.releaseResponse) === null || _h === void 0 ? void 0 : _h.user.full_name
          })]
        })), jsx(Ramen.XVSpace, {
          size: "s"
        }), showAnyAction && jsx(Ramen.XBox, {
          children: jsx(Ramen.XCard, Object.assign({
            size: "l"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              gap: "m",
              verticalAlign: "center"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11
              }, {
                children: "Editar cantidad solicitada"
              })), jsx(Ramen.XCounter, {
                defaultCount: selectedTask.meta_data.count,
                onChange: n => setQty(n),
                count: qty
              })]
            }))
          }))
        })]
      }))
    }), jsxs(Ramen.XFooter, {
      children: [showRevisorReleaseBtn && jsx(Ramen.XButton, {
        type: "solid",
        text: "Liberar",
        size: "xl",
        onClick: handleFreeProduct
      }), showControlReleaseBtn && jsx(Ramen.XButton, {
        type: "solid",
        text: "Confirmar",
        size: "xl",
        onClick: handleFreeProduct
      }), showRejectBtn && jsx(Ramen.XButton, {
        type: "outline",
        text: "Rechazar",
        size: "xl",
        onClick: handleRejectProduct
      })]
    }), jsx(ConfirmModal, {
      visible: openModal === 'freeModal',
      title: (user === null || user === void 0 ? void 0 : user.level) === 1 ? "¿Deseas confirmar la solicitud?" : "¿Deseas liberar la solicitud?",
      btnActionText: (user === null || user === void 0 ? void 0 : user.level) === 1 ? "Confirmar" : "Liberar",
      onClose: () => setOpenModal(undefined),
      onConfirm: () => freeTask(selectedTask, qty),
      ImageCmp: jsx(Image, {})
    }), jsx(ConfirmModal, {
      visible: openModal === 'rejectModal',
      title: "\u00BFDeseas rechazar la solicitud?",
      subTitle: 'Esta acci\u00F3n es irreversible y no podr\u00E1 ser modificada posteriormente.',
      btnActionText: "Rechazar",
      onClose: () => setOpenModal(undefined),
      onConfirm: () => rejectTask(selectedTask, qty),
      ImageCmp: jsx(Image$1, {})
    })]
  });
};

const TasksPageWrapper = props => {
  const [mode, setMode] = useState('LIST');
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState();
  const [selectedTask, setSelectedTask] = useState();
  const [actionError, setActionError] = useState();
  const history = useHistory();
  const goHome = useCallback(() => {
    if (history) {
      history.replace('/');
    } else {
      window.location.replace('/');
    }
  }, [history]);
  const loadTasks = useCallback(_user => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    let _tasks = [];
    if (checkUserLevel(_user === null || _user === void 0 ? void 0 : _user.level, 'REVISOR')) {
      _tasks = yield props.taskClient.revisorTasks();
    } else if (checkUserLevel(_user === null || _user === void 0 ? void 0 : _user.level, 'CONTROL')) {
      _tasks = yield props.taskClient.controlTasks();
    }
    setTasks(_tasks);
    setLoading(false);
    if (_tasks.length === 0) {
      goHome();
    }
  }), [props.taskClient, goHome]);
  const onSelectCard = task => {
    setSelectedTask(task);
    setMode('PRODUCT_DETAIL');
  };
  const goBackFromProductDetail = () => {
    setSelectedTask(undefined);
    setMode('LIST');
  };
  const rejectTask = (task, qty) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setActionError(undefined);
      setLoading(true);
      setMode('LIST');
      yield props.taskClient.setTaskAction({
        reports: [{
          id: task.id,
          action: 'REJECTED',
          count: qty
        }]
      });
      Ramen.Api.snackbar.success({
        placement: 'top',
        duration: 5,
        closable: true,
        text: 'Solicitud procesada con éxito'
      });
      yield loadTasks(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setActionError({
        task: task,
        qty: qty,
        action: 'REJECTED'
      });
    }
  });
  const freeTask = (task, qty) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setActionError(undefined);
      setLoading(true);
      setMode('LIST');
      yield props.taskClient.setTaskAction({
        reports: [{
          id: task.id,
          action: 'APPROVED',
          count: qty
        }]
      });
      Ramen.Api.snackbar.success({
        placement: 'top',
        duration: 5,
        closable: true,
        text: 'Solicitud procesada con éxito'
      });
      yield loadTasks(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setActionError({
        task: task,
        qty: qty,
        action: 'APPROVED'
      });
    }
  });
  const bulkTaskRequest = data => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setActionError(undefined);
      setLoading(true);
      setMode('LIST');
      yield props.taskClient.setTaskAction({
        reports: data.map(dat => {
          return {
            id: dat.task.id,
            action: dat.action,
            count: dat.qty
          };
        })
      });
      Ramen.Api.snackbar.success({
        placement: 'top',
        duration: 5,
        closable: true,
        text: 'Solicitud procesada con éxito'
      });
      yield loadTasks(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setActionError(data);
    }
  });
  const retryTaskAction = data => __awaiter(void 0, void 0, void 0, function* () {
    if (data) {
      if (Array.isArray(data)) {
        console.log('es un arreglo');
        setActionError(undefined);
      } else {
        switch (data.action) {
          case 'APPROVED':
            yield freeTask(data.task, data.qty);
            break;
          case 'REJECTED':
            yield rejectTask(data.task, data.qty);
            break;
        }
      }
    }
  });
  const goOut = useCallback(() => {
    Ramen.Api.snackbar.warning({
      placement: 'top',
      duration: 5,
      closable: true,
      text: 'Acceso restringido'
    });
    setTimeout(goHome, 1000);
  }, [goHome]);
  useEffect(() => {
    const initialLoad = () => __awaiter(void 0, void 0, void 0, function* () {
      try {
        const _user = yield props.moduleClient.getICUser();
        if (checkUserLevel(_user === null || _user === void 0 ? void 0 : _user.level, props.userLevel)) {
          setUser(_user);
          yield loadTasks(_user);
        } else {
          goOut();
        }
      } catch (error) {
        console.log(error);
        goOut();
      }
    });
    initialLoad();
  }, [loadTasks, props.moduleClient, goOut, props.userLevel]);
  const renderCmp = mode => {
    switch (mode) {
      case 'LIST':
        return jsx(CardList$1, {
          title: props.title,
          btnActionText: props.btnActionText,
          goHome: goHome,
          loading: loading,
          miniImageUrl: props.miniImageUrl,
          tasks: tasks,
          onSelectCard: onSelectCard,
          bulkTaskRequest: bulkTaskRequest
        });
      case 'PRODUCT_DETAIL':
        if (selectedTask) return jsx(ProductDetail, {
          selectedTask: selectedTask,
          user: user,
          goBack: goBackFromProductDetail,
          miniImageUrl: props.miniImageUrl,
          rejectTask: rejectTask,
          freeTask: freeTask,
          showActions: true
        });
        return null;
      default:
        return jsx("div", {
          children: mode
        });
    }
  };
  return jsxs(Fragment, {
    children: [renderCmp(mode), jsx(ConfirmModal, {
      visible: !!actionError,
      title: "Lo sentimos",
      subTitle: 'No se pudo procesar la solicitud debido a un error de SAP. Int\u00E9ntalo nuevamente',
      btnActionText: "Volver a intentar",
      onClose: () => setActionError(undefined),
      onConfirm: () => retryTaskAction(actionError),
      ImageCmp: jsx(Image$2, {})
    })]
  });
};

class RevisorTasksPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    let taskClient;
    let imgUrl;
    let moduleClient;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.tasksClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.miniImgUrlResolver;
    }
    return jsx(TasksPageWrapper, {
      userLevel: 'REVISOR',
      title: 'Liberaci\u00F3n de solicitud',
      btnActionText: 'Finalizar',
      moduleClient: moduleClient,
      taskClient: taskClient,
      miniImageUrl: imgUrl
    });
  }
}

class ControlTasksPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    let taskClient;
    let imgUrl;
    let moduleClient;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.tasksClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.miniImgUrlResolver;
    }
    return jsx(TasksPageWrapper, {
      userLevel: 'CONTROL',
      title: 'Confirmaci\u00F3n de solicitud',
      btnActionText: 'Confirmar',
      moduleClient: moduleClient,
      taskClient: taskClient,
      miniImageUrl: imgUrl
    });
  }
}

var classof$2 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$2(process) == 'process';

var isPrototypeOf$1 = objectIsPrototypeOf;

var $TypeError$5 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw $TypeError$5('Incorrect invocation');
};

var uncurryThis$3 = functionUncurryThis;
var fails$2 = fails$o;
var isCallable$4 = isCallable$o;
var classof$1 = classof$6;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$3(constructorRegExp.exec);
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

var $TypeError$4 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$4(tryToString$2(argument) + ' is not a constructor');
};

var anObject$4 = anObject$g;
var aConstructor = aConstructor$1;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var wellKnownSymbol$4 = wellKnownSymbol$j;

var SPECIES$1 = wellKnownSymbol$4('species');

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

var bind$4 = uncurryThis$2(uncurryThis$2.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$1 = functionUncurryThis;

var arraySlice$1 = uncurryThis$1([].slice);

var $TypeError$3 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$3('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$5 = global$n;
var apply = functionApply;
var bind$3 = functionBindContext;
var isCallable$3 = isCallable$o;
var hasOwn = hasOwnProperty_1;
var fails$1 = fails$o;
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
    defer = bind$3(port.postMessage, port);
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
var wellKnownSymbol$3 = wellKnownSymbol$j;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$3('species');
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

var $$7 = _export;
var IS_NODE = engineIsNode;
var global$1 = global$n;
var call$6 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$8;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$3;
var setSpecies = setSpecies$2;
var aCallable$3 = aCallable$8;
var isCallable$1 = isCallable$o;
var isObject$1 = isObject$a;
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
          call$6(then, value,
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
    call$6(Internal, this);
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

var wellKnownSymbol$2 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$2('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof = classof$6;
var getMethod$1 = getMethod$6;
var isNullOrUndefined = isNullOrUndefined$7;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof(it)];
};

var call$5 = functionCall;
var aCallable$2 = aCallable$8;
var anObject$3 = anObject$g;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$1 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$3(call$5(iteratorMethod, argument));
  throw $TypeError$1(tryToString$1(argument) + ' is not iterable');
};

var call$4 = functionCall;
var anObject$2 = anObject$g;
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
var anObject$1 = anObject$g;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
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

var wellKnownSymbol = wellKnownSymbol$j;

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

var anObject = anObject$g;
var isObject = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
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

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails = fails$o;
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

var $ = _export;
var uncurryThis = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$a;
var toString = toString$c;
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

const TaskStateTag = props => {
  var _a;
  const status = (_a = props.task.meta_data.releaseResponse) === null || _a === void 0 ? void 0 : _a.status;
  if (status) {
    if (status === 'APPROVED') {
      return jsx(Ramen.XTagState, {
        type: 'solid',
        state: 'success',
        text: 'Liberado'
      });
    } else if (status === 'REJECTED') {
      return jsx(Ramen.XTagState, {
        type: 'solid',
        state: 'error',
        text: 'Rechazado'
      });
    } else {
      return jsx(Ramen.XTagState, {
        type: 'solid',
        state: 'info',
        text: 'Reversado'
      });
    }
  } else {
    return null;
  }
};

const DataAttr = ({
  label,
  value
}) => {
  if (value) {
    return jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      gap: "xxs"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        weight: "normal",
        colorThone: "dim",
        fontSize: 11
      }, {
        children: label
      })), jsx(Ramen.XText, Object.assign({
        fontSize: 11
      }, {
        children: value
      }))]
    }));
  } else {
    return null;
  }
};
const ImgDataCard = ({
  label,
  imageUrl,
  fields,
  tags: _tags = [],
  onClick,
  controlTag: _controlTag = true,
  task
}) => {
  return jsx(Ramen.XCard, {
    children: jsxs(Ramen.XBox, Object.assign({
      gap: "l",
      width: 'full',
      onClick: () => onClick()
    }, {
      children: [jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between",
        verticalAlign: "center"
      }, {
        children: jsx(Ramen.XBox, Object.assign({
          orientation: 'horizontal',
          gap: 'm'
        }, {
          children: _tags
        }))
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "s",
        verticalAlign: "center",
        width: "full"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          width: 2,
          height: 2
        }, {
          children: jsx(Ramen.XImagePreviewer, {
            border: "solid",
            rounded: "s",
            src: imageUrl,
            showExpandIcon: false
          })
        })), jsxs(Ramen.XBox, Object.assign({
          gap: "xxs",
          width: 'full'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            lineHeight: "title",
            fontSize: 11
          }, {
            children: label
          })), fields.map(field => jsx(DataAttr, {
            label: field.label,
            value: field.value
          }, field.key))]
        }))]
      })), _controlTag && jsx(ControlTag, {
        task: task
      })]
    }))
  });
};

const OkImage = () => {
  return jsxs("svg", Object.assign({
    width: "169",
    height: "168",
    viewBox: "0 0 169 168",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      clipPath: "url(#clip0_14940_34859)"
    }, {
      children: [jsxs("g", Object.assign({
        clipPath: "url(#clip1_14940_34859)"
      }, {
        children: [jsx("path", {
          d: "M257.712 0H-88.9805V167.85H257.712V0Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 0H-89.0996V110.32H258.1V0Z",
          fill: "#F5F5F5"
        }), jsx("path", {
          d: "M258.09 111.277H-88.377V167.773H258.09V111.277Z",
          fill: "#EAEAEA"
        }), jsx("path", {
          d: "M258.1 125.292H-88.9414V126.288H258.1V125.292Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 136.984H-88.9414V137.979H258.1V136.984Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 153.408H-88.9414V154.403H258.1V153.408Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M258.1 116.587H-88.9414V117.582H258.1V116.587Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M203.981 168L168.019 110.118L167.295 110.686L202.904 168H203.981Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M161.608 168L137.655 110.118L136.855 110.536L160.632 168H161.608Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M121.91 168L108.148 110.118L107.291 110.377L120.996 168H121.91Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M85.0217 110.118H84.1387V168H85.0217V110.118Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M48.1659 168L61.8665 110.377L61.0144 110.118L47.252 168H48.1659Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M8.53046 168L32.3067 110.536L31.5076 110.118L7.55469 168H8.53046Z",
          fill: "#D6D6D6"
        }), jsx("path", {
          d: "M-33.7405 168L1.86871 110.686L1.14461 110.118L-34.8223 168H-33.7405Z",
          fill: "#D6D6D6"
        })]
      })), jsx("path", {
        d: "M32.9805 46.9882C32.9805 38.357 39.9774 31.3601 48.6085 31.3601L119.456 31.3601C128.087 31.3601 135.084 38.357 135.084 46.9882V224.106C135.084 232.737 128.087 239.734 119.456 239.734H48.6085C39.9774 239.734 32.9805 232.737 32.9805 224.106L32.9805 46.9882Z",
        fill: "#1F1F1F"
      }), jsxs("g", Object.assign({
        clipPath: "url(#clip2_14940_34859)"
      }, {
        children: [jsx("path", {
          d: "M37.1484 49.072C37.1484 42.1671 42.746 36.5696 49.6509 36.5696H118.414C125.319 36.5696 130.917 42.1671 130.917 49.072V222.023C130.917 228.928 125.319 234.525 118.414 234.525H49.6509C42.746 234.525 37.1484 228.928 37.1484 222.023L37.1484 49.072Z",
          fill: "white"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M84.0335 130.338C101.296 130.338 115.29 116.344 115.29 99.0818C115.29 81.8195 101.296 67.8257 84.0335 67.8257C66.7712 67.8257 52.7773 81.8195 52.7773 99.0818C52.7773 116.344 66.7712 130.338 84.0335 130.338ZM96.6859 86.2083C97.754 85.1402 99.4856 85.1402 100.554 86.2083C101.622 87.2763 101.622 89.008 100.554 90.076L80.4977 110.132C79.4296 111.2 77.698 111.2 76.6299 110.132L67.5135 101.016C66.4455 99.9476 66.4455 98.216 67.5135 97.1479C68.5816 96.0799 70.3132 96.0799 71.3813 97.1479L78.5638 104.33L96.6859 86.2083Z",
          fill: "#2B994C"
        })]
      }))]
    })), jsxs("defs", {
      children: [jsx("clipPath", Object.assign({
        id: "clip0_14940_34859"
      }, {
        children: jsx("rect", {
          x: "0.5",
          width: "168",
          height: "168",
          rx: "84",
          fill: "white"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip1_14940_34859"
      }, {
        children: jsx("rect", {
          width: "347.2",
          height: "168",
          fill: "white",
          transform: "translate(-89.0996)"
        })
      })), jsx("clipPath", Object.assign({
        id: "clip2_14940_34859"
      }, {
        children: jsx("rect", {
          width: "93.7684",
          height: "197.956",
          fill: "white",
          transform: "translate(37.1484 36.5696)"
        })
      }))]
    })]
  }));
};

const EmptyList = ({
  text
}) => {
  return jsxs(Ramen.XBox, Object.assign({
    horizontalAlign: 'center',
    gap: 'm'
  }, {
    children: [jsx(OkImage, {}), jsx(Ramen.XText, Object.assign({
      weight: 'bold',
      fontSize: 8
    }, {
      children: text
    }))]
  }));
};

const SummaryButtons = props => {
  const [selected, setSelected] = useState(props.activeDefault);
  const onClick = key => {
    setSelected(key);
    props.onSelectBtn(key);
  };
  return jsx(Ramen.XBox, Object.assign({
    gap: "s",
    orientation: 'horizontal',
    overflow: 'scroll_x',
    padding: 'm'
  }, {
    children: props.buttons.map(tab => {
      return jsx(Ramen.XTab, {
        icon: tab.icon,
        label: tab.text,
        onSelect: () => onClick(tab.key),
        selected: selected === tab.key
      }, tab.key);
    })
  }));
};

const CardList = props => {
  return jsxs(Ramen.XPage, Object.assign({
    skeleton: props.skeleton
  }, {
    children: [jsx(Ramen.XHeader, {
      onBack: props.goBack,
      title: props.title,
      children: props.activeTab && jsx(SummaryButtons, {
        buttons: props.tabs,
        activeDefault: props.activeTab,
        onSelectBtn: key => props.onClickTab(key)
      })
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XSkeletonRenderer, Object.assign({
        visible: props.skeleton
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          gap: 'm'
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            gap: 'm',
            orientation: 'horizontal'
          }, {
            children: [jsx(Ramen.XSkeleton, {
              type: "image",
              width: 'xl'
            }), jsx(Ramen.XSkeleton, {
              type: "image",
              width: 'xl'
            }), jsx(Ramen.XSkeleton, {
              type: "image",
              width: 'xl'
            })]
          })), jsxs(Ramen.XBox, Object.assign({
            gap: 'l'
          }, {
            children: [jsx(Ramen.XSkeleton, {
              type: "image",
              size: "xl",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              type: "image",
              size: "xl",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              type: "image",
              size: "xl",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              type: "image",
              size: "xl",
              width: "xl"
            })]
          }))]
        }))
      })), !props.loading && props.activeTab && props.tasks.length === 0 && jsx(EmptyList, {
        text: '\u00A1Tienes todo en orden!'
      }), props.activeTab && props.tasks.length > 0 && jsx(Ramen.XBox, Object.assign({
        gap: "s"
      }, {
        children: props.tasks.map(task => {
          var _a, _b, _c;
          return jsx(ImgDataCard, {
            imageUrl: props.miniImageUrl((_a = task.meta_data.product.sku) === null || _a === void 0 ? void 0 : _a.toString(), (_b = task.meta_data.product.ean) === null || _b === void 0 ? void 0 : _b.toString()),
            label: task.meta_data.product.description,
            fields: props.cardFields[props.activeTab](task),
            tags: [jsx(Ramen.XTag, {
              text: `${task.meta_data.count} ${(_c = task.meta_data.product.um) === null || _c === void 0 ? void 0 : _c.toLowerCase()}`
            }, 'count'), props.activeTab !== 'REJECTED' ? jsx(TaskStateTag, {
              task: task
            }, 'state') : null],
            onClick: () => {
              if (props.showDetails) {
                props.onCardClick(task);
              }
            },
            controlTag: props.controlTag,
            task: task
          }, task.id);
        })
      }))]
    }), jsx(Ramen.XVSpace, {
      size: 's'
    })]
  }));
};

const SummaryPageWrapper = props => {
  const CurrentTabs = useMemo(() => {
    const allTabs = [{
      key: 'PROCESSED',
      icon: 'check-bold-filled',
      text: 'Procesadas'
    }, {
      key: 'PENDING',
      icon: 'inbox-filled',
      text: 'Pendientes'
    }, {
      key: 'REJECTED',
      icon: 'x-circle-bold-filled',
      text: 'Rechazadas'
    }, {
      key: 'EXPIRED',
      icon: 'block-filled',
      text: 'Caducadas'
    }];
    return allTabs.filter(tab => props.tabs.includes(tab.key));
  }, []);
  const [mode, setMode] = useState('LIST');
  const [skeleton, setSkeleton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const [currentTasks, setCurrentTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();
  const [user, setUser] = useState();
  const history = useHistory();
  const goHome = useCallback(() => {
    if (history) {
      history.replace('/');
    } else {
      window.location.replace('/');
    }
  }, [history]);
  const loadTasks = useCallback(tab => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      if (tab) {
        const fn = props.dataFn[tab];
        const tasks = yield fn();
        setCurrentTasks(tasks);
      } else {
        setCurrentTasks([]);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }), [props.dataFn]);
  useEffect(() => {
    if (loading) {
      Ramen.Api.loading.show({
        text: 'Cargando'
      });
    } else {
      Ramen.Api.loading.hide();
    }
  }, [loading]);
  useEffect(() => {
    if (activeTab) {
      setCurrentTasks([]);
      loadTasks(activeTab);
    }
  }, [activeTab]);
  useEffect(() => {
    const checkAccess = () => __awaiter(void 0, void 0, void 0, function* () {
      let user;
      try {
        user = yield props.moduleClient.getICUser();
      } catch (error) {
        // Nothing
      }
      if (user && checkUserLevel(user.level, props.expectedUserLevel)) {
        setSkeleton(false);
        setActiveTab(props.defaultTab);
        setUser(user);
      } else {
        Ramen.Api.snackbar.warning({
          placement: 'top',
          duration: 5,
          closable: true,
          text: 'Acceso restringido'
        });
        setTimeout(goHome, 1000);
      }
    });
    checkAccess();
  }, []);
  const renderMode = mode => {
    switch (mode) {
      case 'LIST':
        return jsx(CardList, {
          title: props.title,
          miniImageUrl: props.miniImageUrl,
          tasks: currentTasks,
          tabs: CurrentTabs,
          activeTab: activeTab,
          goBack: goHome,
          cardFields: props.cardFields,
          onCardClick: task => {
            setSelectedTask(task);
            setMode('DETAILS');
          },
          onClickTab: key => setActiveTab(key),
          skeleton: skeleton,
          loading: loading,
          controlTag: props.controlTag,
          showDetails: props.showDetails
        });
      case 'DETAILS':
        if (selectedTask) return jsx(ProductDetail, {
          selectedTask: selectedTask,
          user: user,
          goBack: () => {
            setSelectedTask(undefined);
            setMode('LIST');
          },
          miniImageUrl: props.miniImageUrl,
          rejectTask: () => Promise.resolve(),
          freeTask: () => Promise.resolve(),
          controlTag: props.controlTag,
          showActions: activeTab !== 'EXPIRED'
        });
        return null;
      default:
        return jsx("div", {
          children: mode
        });
    }
  };
  return jsxs(Fragment, {
    children: [renderMode(mode), jsx(ConfirmModal, {
      visible: !!error,
      title: "Lo sentimos",
      subTitle: 'Ha ocurrido un error cargando las tareas. Int\u00E9ntalo nuevamente',
      btnActionText: "Volver a intentar",
      onClose: () => setError(false),
      onConfirm: () => loadTasks(activeTab),
      ImageCmp: jsx(Image$2, {})
    })]
  });
};

class CreatorSummaryPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    let taskClient;
    let imgUrl;
    let moduleClient;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.tasksClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.miniImgUrlResolver;
    }
    const pendingTasks = () => taskClient.creatorPendingTasks();
    const rejectedTasks = () => taskClient.creatorRejectedTasks();
    const expiredTasks = () => taskClient.creatorExpiredTasks();
    const TaskCardFields = {
      PENDING: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }, {
        key: 'hour',
        label: 'Hora de creación',
        value: hourOfDate(task.created_at)
      }],
      REJECTED: task => {
        var _a, _b;
        return [{
          key: 'sku',
          label: 'SKU',
          value: task.meta_data.product.sku.toString()
        }, {
          key: 'document',
          label: 'N° solicitud',
          value: task.meta_data.documentNumber
        }, {
          key: 'rejected_by',
          label: 'Rechazado por',
          value: (_b = (_a = task.meta_data.releaseResponse) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.full_name
        }];
      },
      EXPIRED: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }],
      PROCESSED: task => []
    };
    const DataFn = {
      PENDING: pendingTasks,
      REJECTED: rejectedTasks,
      EXPIRED: expiredTasks,
      PROCESSED: () => Promise.resolve([])
    };
    return jsx(SummaryPageWrapper, {
      title: 'Listado de solicitudes',
      miniImageUrl: imgUrl,
      cardFields: TaskCardFields,
      dataFn: DataFn,
      moduleClient: moduleClient,
      expectedUserLevel: 'CREATOR',
      tabs: ['PENDING', 'REJECTED', 'EXPIRED'],
      defaultTab: 'PENDING',
      controlTag: false,
      showDetails: false
    });
  }
}

class ControlSummaryPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    let taskClient;
    let imgUrl;
    let moduleClient;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.tasksClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.miniImgUrlResolver;
    }
    const processedTasks = () => taskClient.processedTasks();
    const expiredTasks = () => taskClient.creatorExpiredTasks();
    const TaskCardFields = {
      PROCESSED: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }, {
        key: 'hour',
        label: 'Hora de creación',
        value: hourOfDate(task.created_at)
      }],
      EXPIRED: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }, {
        key: 'hour',
        label: 'Hora de creación',
        value: hourOfDate(task.created_at)
      }],
      REJECTED: task => [],
      PENDING: task => []
    };
    const DataFn = {
      PENDING: () => Promise.resolve([]),
      REJECTED: () => Promise.resolve([]),
      EXPIRED: expiredTasks,
      PROCESSED: processedTasks
    };
    return jsx(SummaryPageWrapper, {
      title: 'Solicitud de Consumo interno',
      miniImageUrl: imgUrl,
      cardFields: TaskCardFields,
      dataFn: DataFn,
      moduleClient: moduleClient,
      expectedUserLevel: 'CONTROL',
      tabs: ['PROCESSED', 'EXPIRED'],
      defaultTab: 'PROCESSED',
      controlTag: false,
      showDetails: true
    });
  }
}

class RevisorSummaryPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    let taskClient;
    let imgUrl;
    let moduleClient;
    if (!((_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.triggers.moduleClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      moduleClient = (_b = this.props.extensions) === null || _b === void 0 ? void 0 : _b.triggers.moduleClientFactory();
    }
    if (!((_c = this.props.extensions) === null || _c === void 0 ? void 0 : _c.triggers.tasksClientFactory)) {
      throw Error('Missing a module dependency');
    } else {
      taskClient = (_d = this.props.extensions) === null || _d === void 0 ? void 0 : _d.triggers.tasksClientFactory();
    }
    if (!((_e = this.props.extensions) === null || _e === void 0 ? void 0 : _e.triggers.miniImgUrlResolver)) {
      throw Error('Missing a module dependency');
    } else {
      imgUrl = (_f = this.props.extensions) === null || _f === void 0 ? void 0 : _f.triggers.miniImgUrlResolver;
    }
    const processedTasks = () => taskClient.processedTasks();
    const expiredTasks = () => taskClient.creatorExpiredTasks();
    const TaskCardFields = {
      PROCESSED: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }, {
        key: 'hour',
        label: 'Hora de creación',
        value: hourOfDate(task.created_at)
      }],
      EXPIRED: task => [{
        key: 'sku',
        label: 'SKU',
        value: task.meta_data.product.sku.toString()
      }, {
        key: 'document',
        label: 'N° solicitud',
        value: task.meta_data.documentNumber
      }, {
        key: 'hour',
        label: 'Hora de creación',
        value: hourOfDate(task.created_at)
      }],
      REJECTED: task => [],
      PENDING: task => []
    };
    const DataFn = {
      PENDING: () => Promise.resolve([]),
      REJECTED: () => Promise.resolve([]),
      EXPIRED: expiredTasks,
      PROCESSED: processedTasks
    };
    return jsx(SummaryPageWrapper, {
      title: 'Solicitud de Consumo interno',
      miniImageUrl: imgUrl,
      cardFields: TaskCardFields,
      dataFn: DataFn,
      moduleClient: moduleClient,
      expectedUserLevel: 'REVISOR',
      tabs: ['PROCESSED', 'EXPIRED'],
      defaultTab: 'PROCESSED',
      controlTag: true,
      showDetails: true
    });
  }
}

class InternalConsumptionModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/',
        page: ToolPage
      }, {
        path: '/revisor-tasks',
        page: RevisorTasksPage
      }, {
        path: '/control-tasks',
        page: ControlTasksPage
      }, {
        path: '/creator-summary',
        page: CreatorSummaryPage
      }, {
        path: '/control-summary',
        page: ControlSummaryPage
      }, {
        path: '/revisor-summary',
        page: RevisorSummaryPage
      }],
      override
    });
  }
}
InternalConsumptionModule.route = '/internal-consumption';

export { InternalConsumptionModule as default };
