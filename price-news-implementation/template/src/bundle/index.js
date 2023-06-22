import { jsx, jsxs } from 'react/jsx-runtime';
import Ramen from '@team_yumi/ramen';
import * as React from 'react';
import React__default, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$j = fails$k;

var functionBindNative = !fails$j(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$c = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$c, call$c);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$c.apply(fn, arguments);
  };
};

var uncurryThis$i = functionUncurryThis;

var toString$8 = uncurryThis$i({}.toString);
var stringSlice$6 = uncurryThis$i(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$8(it), 8, -1);
};

var uncurryThis$h = functionUncurryThis;
var fails$i = fails$k;
var classof$5 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$h(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$i(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$5(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$8 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$8("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$5(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$g =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var shared$4 = {exports: {}};

var global$f = global$g;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$f, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$f[key] = value;
  } return value;
};

var global$e = global$g;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$e[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5 = function (argument) {
  return $Object$3(requireObjectCoercible$4(argument));
};

var uncurryThis$g = functionUncurryThis;
var toObject$4 = toObject$5;

var hasOwnProperty = uncurryThis$g({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};

var uncurryThis$f = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$f(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$d = global$g;
var userAgent = engineUserAgent;

var process$1 = global$d.process;
var Deno = global$d.Deno;
var versions = process$1 && process$1.versions || Deno && Deno.version;
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
var fails$h = fails$k;
var global$c = global$g;

var $String$5 = global$c.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$h(function () {
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

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$b = global$g;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$1 = global$b.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$d = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)
      ? Symbol$1[name]
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
var isCallable$i = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$h = isCallable$i;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var isObject$7 = isObject$8;

var $String$4 = String;
var $TypeError$7 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$a = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$7($String$4(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$g = fails$k;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$b = descriptors;
var fails$f = fails$k;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$a = global$g;
var isObject$6 = isObject$8;

var document$1 = global$a.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$e = fails$k;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$1 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var global$9 = global$g;
var isCallable$g = isCallable$i;

var aFunction = function (argument) {
  return isCallable$g(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$9[namespace]) : global$9[namespace] && global$9[namespace][method];
};

var uncurryThis$e = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var isCallable$f = isCallable$i;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$f($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$e = isCallable$i;
var tryToString = tryToString$1;

var $TypeError$6 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$3 = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw $TypeError$6(tryToString(argument) + ' is not a function');
};

var aCallable$2 = aCallable$3;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$2(func);
};

var call$a = functionCall;
var isCallable$d = isCallable$i;
var isObject$5 = isObject$8;

var $TypeError$5 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$a(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$5(val = call$a(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$a(fn, input))) return val;
  throw $TypeError$5("Can't convert object to primitive value");
};

var call$9 = functionCall;
var isObject$4 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$c = wellKnownSymbol$d;

var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$9(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw $TypeError$4("Can't convert object to primitive value");
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

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$2;

var $TypeError$3 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
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
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

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

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
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
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var hiddenKeys$4 = {};

var uncurryThis$d = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$1 = uncurryThis$d([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$9(hiddenKeys$3, key) && hasOwn$9(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
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

var DESCRIPTORS$8 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$3 = objectDefineProperty;
var anObject$8 = anObject$a;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$8 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$2 = getBuiltIn$4;

var html$1 = getBuiltIn$2('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$7 = anObject$a;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html = html$1;
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
    EmptyConstructor[PROTOTYPE] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$b = wellKnownSymbol$d;
var create$2 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$b('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$6(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$8 = global$g;
var isCallable$c = isCallable$i;

var WeakMap$1 = global$8.WeakMap;

var weakMapBasicDetection = isCallable$c(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$7 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$6 = DESCRIPTORS$7 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$7 = global$g;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$8 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$7.TypeError;
var WeakMap = global$7.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
  set = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
  set = function (it, metadata) {
    if (hasOwn$8(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
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
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$6 = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$5 = descriptors;
var hasOwn$6 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$c = functionUncurryThis;
var isCallable$b = isCallable$i;
var store = sharedStore;

var functionToString = uncurryThis$c(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$b(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store.inspectSource;

var uncurryThis$b = functionUncurryThis;
var fails$d = fails$k;
var isCallable$a = isCallable$i;
var hasOwn$5 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$5 = uncurryThis$b(''.slice);
var replace$4 = uncurryThis$b(''.replace);
var join = uncurryThis$b([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$d(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$5($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$5(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$5(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$a(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$9 = isCallable$i;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$6 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$9(value)) makeBuiltIn$1(value, name, options);
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

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$a = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$6 = anObject$a;

var concat$2 = uncurryThis$a([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$c = fails$k;
var isCallable$8 = isCallable$i;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$8(detection) ? fails$c(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$6 = global$g;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$5 = defineBuiltIn$6;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
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
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    defineBuiltIn$5(target, key, sourceProperty, options);
  }
};

var fails$b = fails$k;

var correctPrototypeGetter = !fails$b(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$7 = isCallable$i;
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
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$a = fails$k;
var isCallable$6 = isCallable$i;
var isObject$2 = isObject$8;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$a = wellKnownSymbol$d;

var ITERATOR$2 = wellKnownSymbol$a('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$a(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$6(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$9 = wellKnownSymbol$d;

var TO_STRING_TAG$3 = wellKnownSymbol$9('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$3)) {
    defineProperty$4(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$9 = functionUncurryThis;
var aCallable$1 = aCallable$3;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$9(aCallable$1(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$5 = isCallable$i;

var $String$1 = String;
var $TypeError$2 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
  throw $TypeError$2("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$5 = anObject$a;
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
    anObject$5(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$4 = _export;
var call$7 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$i;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$8 = wellKnownSymbol$d;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$8('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$1]
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
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
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
    } else $$4({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState$1 = InternalStateModule.getterFor(ARRAY_ITERATOR);

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
  setInternalState(this, {
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
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
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

var global$5 = global$g;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$7 = wellKnownSymbol$d;

var ITERATOR = wellKnownSymbol$7('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$7('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
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
  handlePrototype(global$5[COLLECTION_NAME] && global$5[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$2 = descriptors;
var uncurryThis$8 = functionUncurryThis;
var call$6 = functionCall;
var fails$9 = fails$k;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$5;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;
var concat$1 = uncurryThis$8([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$9(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
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
      if (!DESCRIPTORS$2 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$3 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$3({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_CONTEXT = {
  tasks: [],
  completeTask: () => {
    console.log('Complete Task not implemented yet');
  },
  printers: [],
  setSelectedPrinter: () => {
    console.log('Set Selected Printer not implemented yet');
  },
  loadData: () => {
    console.log('Load data again...');
  }
};
const Module$1 = /*#__PURE__*/React__default.createContext(DEFAULT_CONTEXT);

class Boot extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      view_mode: 'PENDING',
      tasks: [],
      printers: []
    };
    this.completeTask = task => {
      this.setState(state => {
        const tasks = state.tasks.map(t => {
          const newTask = Object.assign({}, t);
          if (newTask.id === task.id) {
            newTask.state = 'COMPLETED';
          }
          return newTask;
        });
        return {
          tasks
        };
      });
    };
    this.setSelectedPrinter = printer => {
      this.setState({
        selected_printer: printer
      });
    };
    this.loadData = () => {
      setTimeout(() => {
        Ramen.Api.loading.show({
          text: 'Cargando...'
        });
      });
      setTimeout(() => {
        Ramen.Api.loading.hide();
      }, 1000);
    };
    this.componentDidMount = () => __awaiter(this, void 0, void 0, function* () {
      // This setTimeout is beacuse for some reason the loading component
      // is not showing if we don't wait a little bit
      setTimeout(() => {
        Ramen.Api.loading.show({
          text: 'Cargando...'
        });
      });
      // Load printers from taskmanager api
      const printers = [{
        id: '1',
        name: 'Impresora 1'
      }];
      // Figureout which printer is selected
      const selected_printer = printers[0];
      // Load tasks from taskmanager api
      const tasks = [{
        id: '1',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '1',
          name: 'Almacén',
          symbol: 'store-food-sm'
        },
        category: {
          id: '1',
          name: 'Frutas'
        },
        product: {
          sku: '1',
          ean: '1',
          name: 'Manzana',
          price_before: 1500,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '2',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '1',
          name: 'Almacén',
          symbol: 'store-food-sm'
        },
        category: {
          id: '1',
          name: 'Frutas'
        },
        product: {
          sku: '2',
          ean: '2',
          name: 'Pera',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '3',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '2',
          name: 'Fiambrería',
          symbol: 'stiff-meat-sm'
        },
        category: {
          id: '2',
          name: 'Fiambres'
        },
        product: {
          sku: '3',
          ean: '3',
          name: 'Jamón',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '4',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '3',
          name: 'Lácteos',
          symbol: 'juices-liquids-sm'
        },
        category: {
          id: '3',
          name: 'Lácteos'
        },
        product: {
          sku: '4',
          ean: '4',
          name: 'Leche',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '5',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '4',
          name: 'Pescadería',
          symbol: 'fish-meat-sm'
        },
        category: {
          id: '4',
          name: 'Mariscos'
        },
        product: {
          sku: '5',
          ean: '5',
          name: 'Pescado',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '6',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '1',
          name: 'Almacén',
          symbol: 'store-food-sm'
        },
        category: {
          id: '1',
          name: 'Frutas'
        },
        product: {
          sku: '6',
          ean: '6',
          name: 'Guinda',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }, {
        id: '7',
        type: 'PRICE_NEW',
        state: 'PENDING',
        section: {
          id: '1',
          name: 'Almacén',
          symbol: 'store-food-sm'
        },
        category: {
          id: '5',
          name: 'Vegetales'
        },
        product: {
          sku: '7',
          ean: '7',
          name: 'Papa',
          price_before: 2100,
          price_now: 1000,
          price_change_reason: 'Próximo a mermar'
        }
      }];
      setTimeout(() => {
        Ramen.Api.loading.hide();
        this.setState({
          view_mode: 'READY',
          tasks,
          printers,
          selected_printer
        });
      }, 1000);
    });
    this.render_PENDING = () => {
      return jsx(Ramen.XBox, {});
    };
    this.render_READY = () => {
      const {
        children
      } = this.props;
      const {
        tasks,
        printers,
        selected_printer
      } = this.state;
      return jsx(Module$1.Provider, Object.assign({
        value: {
          tasks,
          completeTask: this.completeTask,
          printers,
          selected_printer,
          setSelectedPrinter: this.setSelectedPrinter,
          loadData: this.loadData
        }
      }, {
        children: children
      }));
    };
  }
  render() {
    const {
      view_mode
    } = this.state;
    return jsx(Ramen.XBox, {
      children: (() => {
        const customRender = this[`render_${view_mode}`];
        if (!customRender) {
          return view_mode;
        }
        return customRender();
      })()
    });
  }
}

var wellKnownSymbol$6 = wellKnownSymbol$d;

var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$3 = isCallable$i;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$5 = wellKnownSymbol$d;

var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
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
    : (result = classofRaw$1(O)) == 'Object' && isCallable$3(O.callee) ? 'Arguments' : result;
};

var classof$3 = classof$4;

var $String = String;

var toString$6 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$4 = anObject$a;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$4(this);
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

var fails$8 = fails$k;
var global$4 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$4.RegExp;

var UNSUPPORTED_Y$2 = fails$8(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$8(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$8(function () {
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

var fails$7 = fails$k;
var global$3 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$3.RegExp;

var regexpUnsupportedDotAll = fails$7(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$6 = fails$k;
var global$2 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$2.RegExp;

var regexpUnsupportedNcg = fails$6(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$5 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var toString$5 = toString$6;
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
var charAt$4 = uncurryThis$7(''.charAt);
var indexOf = uncurryThis$7(''.indexOf);
var replace$3 = uncurryThis$7(''.replace);
var stringSlice$4 = uncurryThis$7(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$5(nativeExec, re1, 'a');
  call$5(nativeExec, re2, 'a');
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
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$5(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$5(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$3(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex);
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

    match = call$5(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$5(nativeReplace, match[0], reCopy, function () {
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

var $$2 = _export;
var exec$1 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

var classofRaw = classofRaw$2;
var uncurryThis$6 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$6(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$5 = functionUncurryThisClause;
var defineBuiltIn$2 = defineBuiltIn$6;
var regexpExec$1 = regexpExec$2;
var fails$5 = fails$k;
var wellKnownSymbol$4 = wellKnownSymbol$d;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

var SPECIES$1 = wellKnownSymbol$4('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
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
      re.constructor[SPECIES$1] = function () { return re; };
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
    var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
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

    defineBuiltIn$2(String.prototype, KEY, methods[0]);
    defineBuiltIn$2(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$4 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$3 = uncurryThis$4(''.charAt);
var charCodeAt = uncurryThis$4(''.charCodeAt);
var stringSlice$3 = uncurryThis$4(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$3($this));
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
          ? stringSlice$3(S, position, position + 2)
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

var charAt$2 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var call$4 = functionCall;
var anObject$3 = anObject$a;
var isCallable$2 = isCallable$i;
var classof$2 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$1 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$2(exec)) {
    var result = call$4(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof$2(R) === 'RegExp') return call$4(regexpExec, R, S);
  throw $TypeError$1('RegExp#exec called on incompatible receiver');
};

var call$3 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$2 = anObject$a;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var toLength$1 = toLength$3;
var toString$3 = toString$6;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var getMethod$1 = getMethod$3;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$3(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
      var S = toString$3(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$3(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$3 = functionUncurryThis;
var toObject$1 = toObject$5;

var floor = Math.floor;
var charAt$1 = uncurryThis$3(''.charAt);
var replace$2 = uncurryThis$3(''.replace);
var stringSlice$2 = uncurryThis$3(''.slice);
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
    namedCaptures = toObject$1(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$2(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$1(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$2(str, 0, position);
      case "'": return stringSlice$2(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$2(ch, 1, -1)];
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

var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$k;
var anObject$1 = anObject$a;
var isCallable$1 = isCallable$i;
var isNullOrUndefined = isNullOrUndefined$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString$2 = toString$6;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$d;

var REPLACE = wellKnownSymbol$3('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$2([].concat);
var push = uncurryThis$2([].push);
var stringIndexOf$1 = uncurryThis$2(''.indexOf);
var stringSlice$1 = uncurryThis$2(''.slice);

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
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$1(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call$1(replacer, searchValue, O, replaceValue)
        : call$1(nativeReplace, toString$2(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString$2(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$1(replaceValue);
      if (!functionalReplace) replaceValue = toString$2(replaceValue);

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

        var matchStr = toString$2(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$2(result[0]);
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
          var replacement = toString$2(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

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
    return jsx(Switch, {
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

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$6;
var toString$1 = toString$6;
var whitespaces$1 = whitespaces$2;

var replace$1 = uncurryThis$1(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
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

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var fails$3 = fails$k;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$3(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$1 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$1({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable = isCallable$i;
var isObject$1 = isObject$8;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$8;
var classof$1 = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$d;

var MATCH$1 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var call = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$2, R)
    ? call(regExpFlags, R) : flags;
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

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var getBuiltIn = getBuiltIn$4;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var wellKnownSymbol$1 = wellKnownSymbol$d;
var DESCRIPTORS$1 = descriptors;

var SPECIES = wellKnownSymbol$1('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS = descriptors;
var global$1 = global$g;
var uncurryThis = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf = objectIsPrototypeOf;
var isRegExp = isRegexp;
var toString = toString$6;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$1 = defineBuiltIn$6;
var fails$2 = fails$k;
var hasOwn = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$1;
var wellKnownSymbol = wellKnownSymbol$d;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global$1.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$1.SyntaxError;
var exec = uncurryThis(RegExpPrototype$1.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$2(function () {
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
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
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
    var thisIsRegExp = isPrototypeOf(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
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
  defineBuiltIn$1(global$1, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$6;
var anObject = anObject$a;
var $toString = toString$6;
var fails$1 = fails$k;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$1(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var img$1 = "data:image/svg+xml,%3csvg width='169' height='168' viewBox='0 0 169 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_6630_107634)'%3e%3cg clip-path='url(%23clip1_6630_107634)'%3e%3cpath d='M257.711 0H-88.981V167.85H257.711V0Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 0H-89.1001V110.32H258.1V0Z' fill='%23F5F5F5'/%3e%3cpath d='M258.091 111.277H-88.376V167.773H258.091V111.277Z' fill='%23EAEAEA'/%3e%3cpath d='M258.1 125.292H-88.9409V126.288H258.1V125.292Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 136.984H-88.9409V137.979H258.1V136.984Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 153.408H-88.9409V154.403H258.1V153.408Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 116.587H-88.9409V117.582H258.1V116.587Z' fill='%23D6D6D6'/%3e%3cpath d='M203.982 168L168.02 110.118L167.296 110.686L202.905 168H203.982Z' fill='%23D6D6D6'/%3e%3cpath d='M161.609 168L137.656 110.118L136.857 110.536L160.633 168H161.609Z' fill='%23D6D6D6'/%3e%3cpath d='M121.911 168L108.149 110.118L107.292 110.377L120.997 168H121.911Z' fill='%23D6D6D6'/%3e%3cpath d='M85.0217 110.118H84.1387V168H85.0217V110.118Z' fill='%23D6D6D6'/%3e%3cpath d='M48.1669 168L61.8675 110.377L61.0153 110.118L47.2529 168H48.1669Z' fill='%23D6D6D6'/%3e%3cpath d='M8.53095 168L32.3072 110.536L31.5081 110.118L7.55518 168H8.53095Z' fill='%23D6D6D6'/%3e%3cpath d='M-33.741 168L1.86823 110.686L1.14412 110.118L-34.8228 168H-33.741Z' fill='%23D6D6D6'/%3e%3c/g%3e%3cpath d='M32.98 46.9882C32.98 38.357 39.9769 31.3601 48.6081 31.3601L119.455 31.3601C128.086 31.3601 135.083 38.357 135.083 46.9882V224.106C135.083 232.737 128.086 239.734 119.455 239.734H48.608C39.9769 239.734 32.98 232.737 32.98 224.106L32.98 46.9882Z' fill='%231F1F1F'/%3e%3cg clip-path='url(%23clip2_6630_107634)'%3e%3cpath d='M37.1475 49.072C37.1475 42.1671 42.745 36.5696 49.6499 36.5696H118.413C125.318 36.5696 130.916 42.1671 130.916 49.072V222.023C130.916 228.928 125.318 234.525 118.413 234.525H49.6499C42.745 234.525 37.1475 228.928 37.1475 222.023L37.1475 49.072Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M90.1266 72.1235L115.884 116.663C116.509 117.729 116.842 118.942 116.847 120.178C116.853 121.413 116.531 122.629 115.915 123.7C115.299 124.772 114.411 125.661 113.34 126.278C112.269 126.895 111.054 127.217 109.818 127.212H58.2454C57.0095 127.217 55.7944 126.895 54.7235 126.278C53.6526 125.661 52.764 124.772 52.1479 123.7C51.5319 122.629 51.2103 121.413 51.2159 120.178C51.2215 118.942 51.554 117.729 52.1797 116.663L77.9367 72.1235C78.5534 71.0523 79.4414 70.1625 80.5114 69.5438C81.5815 68.9251 82.7956 68.5994 84.0317 68.5994C85.2677 68.5994 86.4819 68.9251 87.5519 69.5438C88.6219 70.1625 89.51 71.0523 90.1266 72.1235ZM80.9374 102.207C80.9374 103.934 82.3367 105.333 84.063 105.333C85.7892 105.333 87.1886 103.934 87.1886 102.207V89.7049C87.1886 87.9787 85.7892 86.5793 84.063 86.5793C82.3367 86.5793 80.9374 87.9787 80.9374 89.7049V102.207ZM84.063 117.835C85.7892 117.835 87.1886 116.436 87.1886 114.71C87.1886 112.984 85.7892 111.584 84.063 111.584H84.0317C82.3055 111.584 80.9061 112.984 80.9061 114.71C80.9061 116.436 82.3055 117.835 84.0317 117.835H84.063Z' fill='%23FFC107'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_6630_107634'%3e%3crect x='0.5' width='168' height='168' rx='84' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_6630_107634'%3e%3crect width='347.2' height='168' fill='white' transform='translate(-89.1001)'/%3e%3c/clipPath%3e%3cclipPath id='clip2_6630_107634'%3e%3crect width='93.7684' height='197.956' fill='white' transform='translate(37.1475 36.5696)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

class Printers extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
    this.onOpenPrinterHandler = printer => {
      // Set selected printer in shared context
      this.context.setSelectedPrinter(printer);
      this.props.history.push(`${this.props.match.url}/sections`);
    };
    this.retryLoadData = () => {
      this.context.loadData();
    };
  }
  componentDidMount() {
    if (this.context.printers && this.context.printers.length === 1) {
      this.props.history.replace('/price-news/sections');
    }
  }
  render() {
    const {
      printers
    } = this.context;
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: "Novedades de precio",
        onBack: this.onGoBackHandler
      }), jsxs(Ramen.XBody, {
        children: [jsx(Ramen.XText, Object.assign({
          weight: "bold",
          fontSize: 10
        }, {
          children: "Selecciona una impresora"
        })), jsx(Ramen.XVSpace, {
          size: "m"
        }), printers.length > 0 ? jsx(Ramen.XList, {
          dataSource: printers,
          renderItem: item => jsx(Ramen.XCard, {
            title: item.name,
            onClick: () => this.onOpenPrinterHandler(item)
          })
        }) : jsxs(Ramen.XBox, Object.assign({
          verticalAlign: "center",
          horizontalAlign: "center",
          height: "full",
          gap: "s"
        }, {
          children: [jsx(Ramen.XImage, {
            src: img$1
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            verticalAlign: "center",
            horizontalAlign: "center"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "\u00A1Ups! no conseguimos"
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "impresoras disponibles"
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            verticalAlign: "center",
            horizontalAlign: "center"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: "lighter",
              fontSize: 12
            }, {
              children: "Aseg\u00FArate de que las impresoras est\u00E9n"
            })), jsx(Ramen.XText, Object.assign({
              weight: "lighter",
              fontSize: 12
            }, {
              children: "correctamente conectadas."
            }))]
          })), jsx(Ramen.XButton, {
            text: "Reintentar",
            size: "xl",
            type: "solid",
            onClick: () => this.retryLoadData()
          })]
        }))]
      })]
    });
  }
}
Printers.contextType = Module$1;

class Sections extends Page {
  constructor() {
    super(...arguments);
    this.state = {
      show_printers_modal: false,
      sections: []
    };
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
    this.onOpenPrintersModalHandler = () => {
      this.setState({
        show_printers_modal: true
      });
    };
    this.onClosePrintersModalHandler = () => {
      this.setState({
        show_printers_modal: false
      });
    };
    this.onSelectPrinterHandler = printer => {
      // Set selected printer in shared context
      this.context.setSelectedPrinter(printer);
      this.setState({
        show_printers_modal: false
      });
    };
    this.onOpenSectionHandler = section => {
      this.props.history.push(`${this.props.match.url}/${section.id}/categories`);
    };
    this.render = () => {
      const {
        sections,
        show_printers_modal
      } = this.state;
      const {
        selected_printer,
        printers
      } = this.context;
      const totalSections = sections.length;
      return jsxs(Ramen.XPage, {
        children: [jsx(Ramen.XHeader, {
          title: "Novedades de precio",
          tags: selected_printer ? [{
            type: 'text',
            icon: 'printer-outline',
            text: selected_printer.name
          }] : undefined,
          onBack: this.onGoBackHandler
        }), jsxs(Ramen.XBody, {
          children: [jsx(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "between",
            verticalAlign: "center"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              gap: "xxs"
            }, {
              children: [jsxs(Ramen.XText, Object.assign({
                weight: "bold",
                fontSize: 10
              }, {
                children: [totalSections, " secciones"]
              })), jsx(Ramen.XText, Object.assign({
                weight: "lighter",
                fontSize: 10
              }, {
                children: "por actualizar"
              }))]
            }))
          })), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XList, {
            dataSource: sections,
            renderItem: item => jsx(Ramen.XCard, {
              symbol: item.symbol,
              title: item.name,
              count: item.alerts,
              onClick: () => this.onOpenSectionHandler(item)
            })
          }), jsx(Ramen.XFloatButton, {
            size: "l",
            icon: "printer-outline",
            onClick: this.onOpenPrintersModalHandler
          }), jsxs(Ramen.XModal, Object.assign({
            visible: show_printers_modal,
            size: "xs",
            onClose: this.onClosePrintersModalHandler
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 8
            }, {
              children: "Selecciona una impresora"
            })), jsx(Ramen.XVSpace, {
              size: "m"
            }), jsx(Ramen.XList, {
              dataSource: printers,
              renderItem: item => jsx(Ramen.XCard, {
                title: item.name,
                onClick: () => this.onSelectPrinterHandler(item)
              })
            })]
          }))]
        })]
      });
    };
  }
  componentDidMount() {
    // convert tasks to sections
    const sections = [];
    this.context.tasks.forEach(task => {
      // Ignore completed tasks
      if (task.state === 'COMPLETED') {
        return;
      }
      const section = sections.find(s => s.id === task.section.id);
      if (section) {
        section.alerts++;
      } else {
        sections.push({
          id: task.section.id,
          name: task.section.name,
          symbol: task.section.symbol,
          alerts: 1,
          categories: []
        });
      }
    });
    this.setState({
      sections
    });
  }
}
Sections.contextType = Module$1;

var aCallable = aCallable$3;
var toObject = toObject$5;
var IndexedObject = indexedObject;
var lengthOfArrayLike = lengthOfArrayLike$2;

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

var classof = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof(process) == 'process';

var $ = _export;
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
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var img = "data:image/svg+xml,%3csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect x='0.5' y='0.5' width='63' height='63' fill='url(%23pattern0)'/%3e%3crect x='0.5' y='0.5' width='63' height='63' stroke='%23F5F5F5'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_6350_305735' transform='scale(0.002)'/%3e%3c/pattern%3e%3cimage id='image0_6350_305735' width='500' height='500' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t%2bKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACIhSURBVHgB7d3prtvW1QZgJXES2xncNFMDFEXR3v/NtOifDmjRFkjSjLbjIbbjfF3Kt12G5rA3RQ1ceh5A0DkSRelItl6uPfGVBw8e/LgDADbt1R0AsHkCHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkMCNHbB5P/7444tL%2bX3IK6%2b8sr%2bUn7vXwLYJdNiAEtbPnz/f/fDDDy9%2bLrcfEsol5OPy6quvvrh0wx%2b4fAIdLlCE9LNnz/bhHZcI76FwnQrdljDuHjB0q/vYx2uvvba/lKAHLpNAhwvQDfC4LqE61Cw%2bFdRrVNT9fcTriUu5L0L9xo0b%2b5BXwcPlEOhwJhHaT58%2b3V8iyPvhOPf73O3lvv7BQc3rmtp/aTUo90W4v/7668IdzuyVBw8e/LgDTqIf4qE1yFtCeq2QHRtk12%2bef%2bONN1TucCYqdDiBaLIuQd61pCqfGwRXE6Zj%2b63dfuyA4vvvv99fl6pdnzucjkCHI4ogj5CL66mwXqN5fe5xSw8EhoK%2bu22/Sg9lLECp2iPggePS5A5H0A3y0BLeY6PZxyytyJeaquSH7isHEoIdjkugw4r6QR5aK/G1qvXabbrbToX1mLEQH7pNsMPxCHRYQQT448ePX2paP7QyX3J77f0tj6kJ%2bpqBc%2bV3wQ7rE%2bhwgAinR48e7Z48ebL/vTbAD6nMy31jfeK1/eWt09m65gK%2bpmovr/HWrVurdgnAtRLosFA0rUdVPhSMawyAm7rvlNV5jdrqvH9b%2bTlGxJvLDocR6NAolkf97/%2bbnzWvH2PQ2yF95zXbHSs8W/rUuz9rhofD%2bJ8DDaIqjyb2qebult/Hbpty6MlYuvspz7/WPrv769/Wfc7%2bduXneH/jgEm1Du0EOlSIsPnuu%2b%2bqpqGN3d464vxU1gzzYm6eer%2bbovsaYvGdeJ/1rUMbyzjBjAiXu3fv/mwqWrF0RPuc7rnNh55zyfSymudstXTqXNw29949fPjwpZX1gHEqdJgQg94iWOaaypdWkoes3DY3Sr1lFPshBwhDzelj2/S3Gxpt3/09Zg/E75rgYZ5BcTAgQiQGvkWgLKnCDx34dqxtWprXl3YR1B4cDE1jG/vZ9DaYp8kdemJQVjSxl7nlQ9YI83DIgi1Lt6nZ9pAV5vrN6VOPG/u9u4%2by/xiMGJ8NMEygQ0cJ86HgqA252mlbNfe1mOp3P%2ba%2bxg4U%2bqE8ZKovvft7CfWyGh/wMoEO/28ozNeaZx4OCfUSsGtW62tX9WPmQr1/31jId6e2CXV4mUCH3U%2bn%2b/z222/3YX5oP%2b3U6PQlj1uy7drh39I6sTT8a0a%2bl20i1I2Ah58zyp2rF2EelflQk3GrqcfUBGPNyPTaUe7H2KZoOTgZCuba0H9lYPGZ8nMZ4xAj4AEVOleuVOb9UJurFMd%2bn2saX7upuz8gbW5/azl0f3PN7zXvfwl1lTr8RKBztUqf%2bdB0qaVTr4qaCram2Xxu25ptap%2bzezCydj/80HZz71FLqOtTB4HOlYowH%2bozrxnA1TU1AG7NynnNSvyQfu6x/S3dvlTjU6Pga342UA4EOleoG%2bZdhwyGm6ug5x5bW63XvpY1Art2P92DjZoWgNb3uaVSN0%2bdaybQuTpj88yLlsCpCak1m7BbwnqtqXA1TfXd65rX1e/mKO/hIZV6mae%2bZusDbIlA56p0z5gWahY%2b6TokLNZs6m7p667d3xrbtGzfHYhYcxBVM6VNqHPNBDpXI5YOjUtxSBN73zEq55pt%2b9uP3bdWs35LRV/b7993SKUe19H6MrVsL2Ql0LkK8SUf1XmYW0N8Tk3zc80%2b1gjYUFvh1uyz9aCktil%2byQHHIaEerTAGyXFtBDrpRVB88803k/cP/XzI861Vrdds01KFd7ev2d/cftbW/1sOCfUY%2bW6QHNdEoJPe/fv3qwfBHaMZviWQ57aZ09LMvWYT%2b1rPt9TY56Y/nWti6VdSiy/0uEwNfutWgv2qsDtwq/%2bYsf31lZBd42BhaD%2bvvvrq7rXXXtvfHj/HJbaL2/riwCbu617HanmHvrba96PlfSvbjx2kzN1ermMluTfeeGMH2Ql00oqwevDgweB9NdOgarQEVE2o1%2bwvgjouN27c2F9aXvNQyIcI9RLu0ffcD8raA5JjBPtUhd0N9aGf4zoCvbxnkNkr//3C0x5FSvfu3dtX56FfoS8J9NpqvEbrdhHcUWXGiUjW7BYYE8EeQTgU7t3XNWXt92LK0DiI7nU8x61bt07y3sG5qNBJqTS1h9aFYqaWc62pPNeq1qPp/M0339xfTh1E3Yq2BHt31HjLezG3bWsz/Jx%2bk7umd66FQCed%2bPIuU9TK70umdo31t4/d13%2b%2bpc8TVfjNmzf3VfkliNcTl3i93fOQ1wR2y4C0Q4K9pj9d0zvZCXTSefjw4c8Geo0NeBszFg4tlvQRR2hGs/ClBHlf/C1xoBEtBiXY%2b83aY7rvZ023xpJBhGP96V0l1CEj09ZIJYK8W52H2ulZ/Z/XmEZWs000rb/11lu7d95552LDvKsE%2b%2b3bt1%2baEbDGgdCPFQvStOge2JVBf5CRQCeVodXg%2bpV631xwT2kJ9aFto0/3zp07%2b6p3a6LSffvtt5tf%2b1pBPbTfrrHPO5aFPcbzw7kJdNKI6qsMhGs111x8aLXeD/V4vqjIIxC3PvI6Dkq6f0fLQjNrLW4TapryS1O8Kp2MBDpp9Jva%2bw6pxGv61WuDJyrbqMqjzzyLeH8i1Mso8pYqfMnAudrHjbXUdPv/IQuBTgpRnXfPpDak39/bVxP4h/abR9/zu%2b%2b%2bu%2b83z6hMsytKsK9xMDQV5q3N%2bKp0MhLopBDV%2bVCT61yI963VBDy0TQwii8FvW29inxNV%2btAiLmu%2b/2Ua4tLqPqjSyUags3mlOl9adbc8plXZV4R5hNy1iNH6/VHwxVoDDVtaTUJ3LYJyMBD/diALgc7mzfWdT5kK9bnAqG1OjiC/pjAvolthaGpb93pMa1gvVRbJgQwEOpsWFVYsJDNmjbOIHTIgLgItLtdqKNSLuQOiteejDyknpIEMBDqbFiuWTVmj37aEeo3uvq49zIsI9TVbKA7pN%2b8qn2nMS4cMBDqb1trcvrTfvDVEYmCYMP%2bfmKoXI/zHrDUSvq9mOdpybnjYOoHOZkVl1V2zfcxaX9a1feZRkcaiMfxczLufO9vZMQYk1tCXTgYCnc3q950vaRbv315bBY5tF6/hvffeSz81bakI9JoDsLWq9Zom92BOOhkIdDar9H0uqerWamLvB0vMM8%2b6aMwaIkRruyKWBHb395aWG4PjyMA3D5sUYd6vqtbuB23dXzn9KdPigCcq9TVXkFs6L71LoLN1Ap1NevDgweT9U5Vb97Y1m3b1m9eL5WHLeclrP4cWZZ8tXR/60dk6gc4mLZlqtHSEe9lmartoai8BRZ3%2bqPe1Q731MUtG0cMlEehsTlRSS5pHDzlF6tR20YQcgU6bOAAaOgiaW673kNCde6zBcWyZQGdz5haTGXOs0dNx2lCW6Y85aFka9hjVtGZ3tkygszmPHz8eva/7JX9oE3vNNlGdTy2YwrR4/8bOC79GV8jcY2tug60Q6GzOGlXUWtW66vxwY4vNtJwedc2WF6Pd2aobO9iQCPOYM9yyiMxc3/nSRWDicWPV5SX46quv9pcQrQhxStPo649L/HwpSl96P0jHmt/HPq%2by3dD9tQcHJdANcGSLBDqbMtZ/3g3m1pCeCoLu/f1tulOvLtHf/va30ffrzp07u48//nh/fQldBlGlxznt59R8rv3Pq7UZXYXOVgl0NqU0tx9SWY%2bp2Wc3/C99EZl4jWN/z7179/aXOCiJYP/oo4/OGuzRYhCvda71Ze7ga2z7WuU1wBbpQ2dTSqB3q/E5LQOnarcrq51dsppm9ajg//nPf%2b7%2b%2bMc/7j7//PPduXS7L9acjVCjP5DS2dfYKoHOpnQr9FDTTF5ze3%2bbue22MLI9wrpU6XOXWKjnr3/96z7cz6V7ALLmgLi5x3T/DZWfVelskUBnMyLMa5Z0HbOkb30s3KOp%2bpJFmC/pC/7Xv/61%2b8tf/rI7hxiP0NLy0nVIK0y/Qg/60dkigc5mzK3i1VJ9H9JkG6Fz6c3td%2b/e3V8PVZ9Tfetx%2bxdffHGWUI/n7g8ynPu8am9rpUJniwQ6m1GzLOdQtTWkdUBdd1%2bXPFWtiEp7KMD7Ad%2b/FBHqn3766e7UDn1v55aNXWM/cKkEOpsx1gy65Eu8O8e5pak2LpdenUcQL10et%2bvvf//77Fnt1jZ3LvnWz6r7Oc89vnufJne2SKCzGUtPnDEXAq1zlS850CPIozoPra0QQ9v/4x//2J1SNLnXjnBfY9DcIYMn4dIIdDZjjS/wmu3nHn%2bpTe4R5n/605/21WW/ub3mMrR9ma9%2bKvGcUaUf67Mee2z/50PGWMC5CHQ2oxtUfTVV3dx2NV/iETatle8pRDP7H/7wh1Wa2vtKxX8qZWBca6jqI%2bfaWSmOzSgLfoyt1d01tN2SL/z%2bPk691OvXX3%2b9n5/97rvvvnRfdEF88803%2bwFsQ6PaQ//vKO/L0PKo/W2K%2b/fv76v0oddwDHP96H1j/yYOURaYsaY7WyLQ2Yy1phK1BEB/21NW5xGif/7zn/c/R6jfvn37xX0R5g8fPtzNva7%2b7UOj3fu/D%2b3rnIE%2bdnA1tE3L8r1TLrEVBuYIdDZhSZhPfbnXhER/P3F9yoqt23cdAX7Kvuyp13Jsh35m3c%2brfz213/7PzrrG1uhDZxNq%2b8hbH9fy/GXA1qlEBd46h7w/n3zM0CC4uddyKmtU2C3T1aYeD1uiQmdTapuW524v%2bl/cc826p2yK7Q5wG2sq72rtGphqdu%2bLajVezymWvO336Q9paWGpJcTZOhU6KWT8Mr72xU1qRrkfOm1NiJOJCp3NG%2bofLbe1VtX90d/nVNt8firRj3%2bOk9Ico1pfstgMXDoVOpvSuuCI0crrqTm/%2brHUVust/etzt8HWCHQ271jV1tCKYadsBo8A7fedjw2AG7se%2b3lsUNzUQLtTBfqhn%2bdQsAtsroFAZxPOPX3oHIFQ5p0vCelyXRP%2bQ/vs3xbv/6k%2bgzUr8f4JWuaq8%2b62sDUCnRRO0bQeX/JLTxCzRHchmXM75WsprSBrBfvcPiALgc5mTM0BH/piPsagsnMHer85vNw2Zqj5vHt7jdjuvffe253KuUafC3e2zih3NmPqLFxD4XSMgXGn7EN/55139v3WY89ZG%2br9bVofF04Z6N2DppalXFs/ZwFONip0NmPqXNktQX%2boU4b6xx9/PLvNMbsbYt9xYHHKc8D339%2bWmQ1LR7m33A%2bXSqCzGZeyrvbjx493pxKBXka7j13C1P2HXMIHH3ywO5W5gWtLR7l37xtat0CIk4FAZzOWrKN%2bjC/qU/ajx0FMTZV%2bLNGP//777%2b9OZar1Y260%2btT2Q7dPPWZuO7hE%2btDZjH6F3u1fPcUo9%2bLp06e7U/roo492X3311e7JkyeD99f0My/1%2b9//fndKre9t7SpyrV01sEUqdDZjamGTuWbWNcVJSk4ZBHEg87vf/W60y%2bFYYf7JJ5%2bctO88RKAfWoG36L53qnO2TqCzGSVcWr9sjxF43TOhnUI0ff/617/enUqEeVxOKT7XboXeMn1tSQC37B%2b2QKCzGVGhXko/%2bqkDPURf9m9/%2b9uqueVD949t2789mvhPHeZhqkuhRsvnfMxuCjgXgc6mvP7667tL8PDhw7NUd7/85S/3ze%2bltWJubnlNwHdvjyA/ZUtA11igh9blXmuMNbGr2tkqg%2bLYlAj0bnV8rkrr%2bfPn%2bwA6x%2blE79y5s7t169bu3//%2b9%2b7u3buD07C6uvePbRt/x29%2b85vd22%2b/vTuHeD/jc11rEZmx7aamxMHWCXQ25dSDtKbcv3//LIEe4n2ISv3rr7/effbZZ5PVbRir4KMb48MPP9xfzjnPv/SdH%2bsATWhzDQQ6m1ICdOyLv/X2Q5TR7ufsi40m%2bLh89913%2b3CP67lwj%2bCOCj8q/XjsJSzY8%2bDBgxc/11ThrZV6Dc3ubJ1AZ1PKwLhooq011yR9iKjS33333d25RVN5aS5/9OjRPtTjuiuq%2bgjyuL6UVfdCHBgNfZ61B0uHHFR1/10c898JnIJAZ3Nu3ry5H5RW9L/Qx34/RjUdlWWsdX5JI6YjtEsFvgVTS%2bm2LBxz6MlZhDlbZ5Q7mxOB3uKYlVdUllGls0yEebQmzC3HWjN6vbtdzbZTv8MWCXQ2pwT6MRcdaRFV%2binPwJZJv6VlTu1nOVatD4W9cCcLgc7mRB96DI4bW7ZzqiI/xpd1VOnffvvtjjZRnQ%2bdKrW2Eq/ZprttzSl2hTlbJtDZpAj0JV%2b%2bx%2brrjnA6x%2bpxWxUHQd3qvG/t1pe5Jv3Wx8AlEuhs0tT876kBUjXV3VLffPONEKhU000x91nNVd41rBZHJgKdTYpAj1XjLumLNwLq3r17O6ZFa0ZMqWtZznWNbdZ4DFwygc5mxdSsMFSpnevLOhZ2mZqGde2iqb27iExpSVmz3xyulUBns8pCKlPN62OO%2bcUfTe9GvQ/rvzc1g9a6lmzT3//cSHcHBWyVQGezymj3rqkv6lOJKvSLL74QDD0xX7%2bm33xO6yj38nv3ur8tZCDQ2bRYdnXpF/Ixv8gjuL766qsdP4lm9qlR7V0tI9fX/gyFO1sm0Nm0qNCjUp9qMq2Zf3wMMY0tmpivXYR5jC0IrQPh1mqGP8Zj4dIIdDbvkHN4H/sLParSaw71bph3XVKoD%2b1D0LNFAp3Ni0CPKr2rNgROcYataw31CPKpde5bmsyPEepCm2wEOpsXYR6h3jqq/ZSny4xQ/89//nM1IRJh3m1mn7Jmn3l/MNzQ/d3r/u1D98FWCHRSGKrS%2b8a%2bxE916tOnT5/uPv/889RT2uI9vXv37kvN7LVBXPsctdsNTVUT2GQl0EmhW6W3fnHPVXVrijCPKW21I763JP62L7/8cr8K3JC1pqTV7uvY28KlEeikMdeXfqpKfE4EX/SpRyWbJUBi8FuE%2bbNnzya3qz14WjP8a/ZTXMq/EVhCoJNGqdLD2AIia/XnriGapaMJfstLxZb59rGGfSyoE44RtHPbrbEWgWZ5tk6gk0rNiPexAXJT9x9LCcStLRcb71GMYI/ugydPnoxuM7ePNbbpbtu9rtm2S3XO1t3YQSIR5nfu3HlxKtPuyT/6oT0W4uf4Yo8%2b9bjcvn17v/rda6%2b9trtE8T5Fy0I0sbcE59R72v8slu6nu13Nc9Uc6MGWCHTSeeutt/bhGCu1LdGdn37qcL/UYC9B3p%2bKVvv%2bzL2XLYFd85xD%2b6ud1ijY2apX/nuk7V8v6ZQpYqH7pd4Pg7lwOHczbJwiNsL95s2bu3OI5vQYtR4HGWs1U6/xnq/9uQwF%2bjvvvHO29x2WUKGT0uuvv76vcGOw1lRVd44qvEWEaVyiUo916yPg4/qYrzlaNmKgXlym%2bvWXtmKsUa2v2UWiIicLgU5aEegRhlGtF7UBVMKqtWn5WCJYS3N8iFCPg5a4jrCPn5eIaWblEgEe71UZrd419PcPVbVrNcGXbWr2echBmTAnE03upFaa3qea2muagC%2b9kg8R6jEoMAI%2brvuvN/6GCOu4LsE9FN5jav/%2blvep5eBq7e6RsamNhSZ3tkaFTmoRcjHqPRZxGRvlPjUIrty%2bBd2WiGOoqZj772ntPqf225%2bONrdd7f6mble5s0XmoZNeVFrRNN2f01zzBT628Mg1mxst3g/gUz5/0T2w6L%2buNfYPl0igcxXef//93Y0bPzVILf3C7ofENTtGOK4Zuq0HFj5TMhDoXIXoU45Q7xuq2ueq9S01wx9TS/geI9iXtJjM9ZvDlgl0rkbpTw81Fd7cfYLguN0QZd8t1fgazwlbJdC5KtGfHtPZamiqrdcSvLVBvcao9WM8Bi6VQOfqRKDH8rA1/aw1oXPMKnVr1mgCH7pv7Wb4oe18hmydQOcqRdN7WYxlbiR0bejMbXstaivwQ/Zds92S%2b1qfBy6JQOcqxSC5Dz/88KVQH1NbqV/64jOXaMmYhJZQ7lf6S/cHl06gc7Ui1D/44IOXprMdMnq6pY/4GvS7NeYCde1QH3odkJVA56rFMqlRqQ/NUR%2bb0lYbDKr1/6mpkrv3t/aFLw1rfelkItC5ev1Q7xvrV68NJl629nuz5ODJZ0M2Ah12P4X6Rx99tO9TXytsrrlCr33/5irs2gp8SZO9FhSyEejw/6JP/eOPP95PaQtTze9zt3cfP3adXet4gh9n5qm3hPrcKPepzxO2ytnWoOe9997bV%2bz37t178QXfX8d96NSkUxXfVKhnqRRrA7dr6eIxLWdyq12qt38AB1ujQocBsfhMWSZ2KBCW9quP2WqAtFTgSx4/Va23NOu3bCPM2SqBDiNimdhogo9qPdQ2AbcGwlBT8SWGylyT%2bJr7n9pm6velzwsZCHSYEIPkYgT8zZs397%2b3hHpL6JUm5G5rwDFCc6lDXseSKnts%2b7FtD3ltY78LerZGoMOMqNBjAZpyUpfW5t%2baYO6GeIT6UB/9sSrjof1PHVTU9ntPdUv0g7Ml9Kf20WIuzMemMcKlEuhQKQL9k08%2b2X/RzwXTkJY%2b36FKsQR994QwUyE8FYT97cdeR8vtQ6%2b/NWRjpkEMSuyPWxh7X2v%2bxv5rGXtv%2bsqywLAVAh0aRLX%2bq1/96menYK0Jmu7tc8E/pv%2b4fiU/Nniv/1xDzfvd25eo3c9Y4MYlujVK98bQyn3dx48999TztuwvPmfz1NkabUqwQDkF65dffrl7%2bvTpi6byrqHb%2bg4J1KEgqpmiNRVuhz5/zXZ9Ed6/%2bMUvdm%2b%2b%2beaL2yLUnzx58tLju9MHu%2b9X9yBnqe7zvPHGGzvYmlcePHiwfoccXJH//h/a3b9/f/fs2bMXtw0Fy1TYDAXxJVaILaE/t238fW%2b//fZ%2bNkH/b33%2b/Pnu008/fen2obPazb2vNa%2bpf/v7778v1NkcFTocKCr1W7du7b777rv9YjRhrGIv5oJmrBI9tW7lWxvmNaF5%2b/bt/Tz/MiWwL/rSY5uHDx%2b%2beP6xfU9V57WtFf3nFuZskQodVvTDDz/s7t69%2byKIitaKvcWh%2bxlrqp8K0f7ja/cdzerRXdFtXh8T7%2bVnn302%2bJrGfp%2b7vbymqduj%2bT8OJmBrBDocQUuw19w395jW/u81zAV5V0uQd0WLR2n16A7m61t6UNN/nRHkEeiwRQIdjiiC/fHjxy/62If6gIdcav/5VNN7//bSbB595GNN6zU%2b//zz/cDDmur8kDnyZb2BQ14rnJNAhxOJwXNRsX///fcvbmsJ7lOHfMt0sK6owmOUegx4W%2bM1x0HRF198MTrosPbgaOrviW3i9LnCnC0T6HBiEVAR7BHwcyPja6zV3HzI40o1HoMDW5vVawyFelijSo/XHpW5hWTYOoEOZxRNyY8ePdpf4ueu2ub5Uxhqbj92iPeNhXqoqdKHDkRiDrxmdrIQ6HAhSn97hHuE1lA1usYCKmPmpqhFgEcVG83pcTlXRdsdKDek9r2JLoEYqHeJ4xVgCYEOFyoq9gj16HOPn%2bMSC65MaZkvPicCu1zOGeBDyiyCOPhp/XujRSGCXBM72Qh02JAI%2bAizWBY1ruP3CLT4OcJ%2bLvCLqLbjEgcA0dwcTc/lOoJuK2cai783Qr0c9JTlYrtVd/wtsVBM/F1rDdSDSyTQIaGhfuZwDScd6f7tToHKNfGvHRK65iAT4lwrp08FgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAQEOgAkINABIAGBDgAJCHQASECgA0ACAh0AEhDoAJCAQAeABAQ6ACQg0AEgAYEOAAkIdABIQKADQAICHQASEOgAkIBAB4AEBDoAJCDQASABgQ4ACQh0AEhAoANAAgIdABIQ6ACQgEAHgAT%2bDzwQOFx9nu2pAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e";

class Categories extends Page {
  constructor() {
    super(...arguments);
    this.state = {
      selection_type: 'SINGLE',
      selections: {}
    };
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
    this.onTurnOnSelectMultipleHandler = () => {
      this.setState({
        selection_type: 'MULTIPLE'
      });
    };
    this.onTurnOfSelectMultipleHandler = () => {
      this.setState({
        selection_type: 'SINGLE',
        selections: {}
      });
    };
    this.onToogleSelectCategoryHandler = (category, selected) => {
      this.setState(state => {
        const selections = Object.assign({}, state.selections);
        category.products.forEach(p => {
          selections[p.ean] = selected;
        });
        return {
          selections
        };
      });
    };
    this.onSelectProductCardHandler = (category, product) => {
      const {
        selection_type
      } = this.state;
      if (selection_type === 'SINGLE') {
        this.props.history.push(`${this.props.match.url}/${category.id}/print/${product.ean}`);
      } else {
        // Mark product as selected
        this.setState(state => {
          const selections = Object.assign({}, state.selections);
          selections[product.ean] = !selections[product.ean];
          return {
            selections
          };
        });
      }
    };
    this.onSelectAllHandler = () => {
      this.setState(state => {
        var _a;
        const selections = Object.assign({}, state.selections);
        (_a = state.section) === null || _a === void 0 ? void 0 : _a.categories.forEach(c => {
          c.products.forEach(p => {
            selections[p.ean] = true;
          });
        });
        return {
          selections
        };
      });
    };
    this.onPrintSelectionHandler = () => {
      const eans = Object.keys(this.state.selections).filter(ean => this.state.selections[ean]);
      this.props.history.push(`${this.props.match.url}/print-list/${eans.join(',')}`);
    };
  }
  componentDidMount() {
    // convert tasks to section
    // using the section id from the url
    const tasks = this.context.tasks.filter(t => t.section.id === this.props.match.params.sectionId);
    let section;
    tasks.forEach(task => {
      if (!section) {
        section = {
          id: task.section.id,
          name: task.section.name,
          symbol: task.section.symbol,
          alerts: 0,
          categories: []
        };
      }
      // Ignore completed tasks
      if (task.state === 'COMPLETED') {
        return;
      }
      section.alerts++;
      let category = section.categories.find(c => c.id === task.category.id);
      if (!category) {
        category = {
          id: task.category.id,
          name: task.category.name,
          alerts: 0,
          products: [task.product]
        };
        section.categories.push(category);
      } else {
        category.products.push(task.product);
      }
      category.alerts++;
    });
    this.setState({
      section
    });
  }
  render() {
    const {
      section,
      selection_type,
      selections
    } = this.state;
    const {
      selected_printer
    } = this.context;
    let actionBar = jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between"
    }, {
      children: jsx(Ramen.XButton, {
        text: "Selecci\u00F3n m\u00FAltiple",
        type: "outline",
        onClick: this.onTurnOnSelectMultipleHandler
      })
    }));
    if (selection_type === 'MULTIPLE') {
      actionBar = jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between"
      }, {
        children: [jsx(Ramen.XButton, {
          icon: "x-outline",
          text: "Cancelar",
          type: "outline",
          onClick: this.onTurnOfSelectMultipleHandler
        }), jsx(Ramen.XButton, {
          text: "Selecionar todo",
          type: "clear",
          onClick: this.onSelectAllHandler
        })]
      }));
    }
    const totalSelected = Object.values(selections).filter(s => s).length;
    const thereAreSelected = totalSelected > 0;
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: section === null || section === void 0 ? void 0 : section.name,
        subtitle: "Novedades de precios",
        tags: selected_printer ? [{
          type: 'text',
          icon: 'printer-outline',
          text: selected_printer.name
        }] : undefined,
        onBack: this.onGoBackHandler
      }), jsxs(Ramen.XBody, {
        children: [jsx(Ramen.XVSpace, {
          size: "xs"
        }), actionBar, jsx(Ramen.XVSpace, {
          size: "m"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "xxs"
        }, {
          children: [jsxs(Ramen.XText, Object.assign({
            weight: "bold"
          }, {
            children: [(section === null || section === void 0 ? void 0 : section.alerts) || 0, " etiquetas"]
          })), jsx(Ramen.XText, Object.assign({
            weight: "lighter"
          }, {
            children: "por actualizar"
          }))]
        })), jsx(Ramen.XVSpace, {
          size: "xl"
        }), (section === null || section === void 0 ? void 0 : section.categories) && jsx(Ramen.XList, {
          dataSource: section.categories,
          renderItem: category => {
            const totalSelected = category.products.reduce((acc, p) => {
              return acc + (selections[p.ean] ? 1 : 0);
            }, 0);
            const totalProducts = category.products.length;
            const isSelected = totalSelected === totalProducts;
            const isIndeterminated = totalSelected > 0 && totalSelected < totalProducts;
            return jsx(Ramen.XCollapseCard, Object.assign({
              title: category.name,
              count: category.alerts,
              selected: isSelected,
              indeterminate: isIndeterminated,
              onSelect: selection_type === 'MULTIPLE' ? selected => this.onToogleSelectCategoryHandler(category, selected) : undefined
            }, {
              children: category.products.map(product => {
                const selected = selections[product.ean];
                return jsxs("div", Object.assign({
                  onClick: () => this.onSelectProductCardHandler(category, product)
                }, {
                  children: [jsxs(Ramen.XBox, Object.assign({
                    gap: "s"
                  }, {
                    children: [jsxs(Ramen.XBox, Object.assign({
                      orientation: "horizontal",
                      verticalAlign: "center",
                      gap: "s"
                    }, {
                      children: [selection_type === 'MULTIPLE' && jsx(Ramen.XCheckbox, {
                        selected: selected,
                        onChange: () => this.onSelectProductCardHandler(category, product)
                      }), jsx(Ramen.XImage, {
                        src: product.image || img,
                        rounded: "m"
                      }), jsxs(Ramen.XBox, Object.assign({
                        gap: "xxs",
                        width: "flex"
                      }, {
                        children: [jsx(Ramen.XText, Object.assign({
                          weight: "bold",
                          fontSize: 11
                        }, {
                          children: product.name
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "lighter",
                            fontSize: 11
                          }, {
                            children: "EAN"
                          })), jsx(Ramen.XText, Object.assign({
                            fontSize: 11
                          }, {
                            children: product.ean
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "lighter",
                            fontSize: 11
                          }, {
                            children: "SKU"
                          })), jsx(Ramen.XText, Object.assign({
                            fontSize: 11
                          }, {
                            children: product.sku
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "lighter",
                            fontSize: 11
                          }, {
                            children: "Pre. Anterior"
                          })), jsxs(Ramen.XText, Object.assign({
                            fontSize: 11
                          }, {
                            children: ["$", product.price_before, " CLP"]
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal",
                          gap: "xxs"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: "lighter",
                            fontSize: 11
                          }, {
                            children: "Pre. Nuevo"
                          })), jsxs(Ramen.XText, Object.assign({
                            fontSize: 11
                          }, {
                            children: ["$", product.price_now, " CLP"]
                          }))]
                        }))]
                      }))]
                    })), jsx(Ramen.XTag, {
                      text: product.price_change_reason
                    })]
                  })), jsx(Ramen.XVSpace, {
                    size: "xl"
                  })]
                }), product.ean);
              })
            }));
          }
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        })]
      }), thereAreSelected && jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          type: "solid",
          text: "Continuar",
          size: "xl",
          onClick: this.onPrintSelectionHandler
        })
      })]
    });
  }
}
Categories.contextType = Module$1;

class Print extends Page {
  constructor() {
    super(...arguments);
    this.state = {
      count: 1
    };
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
    this.onChangeCounHandler = count => {
      this.setState({
        count
      });
    };
    this.onPrintHandler = () => {
      Ramen.Api.loading.show({
        text: 'Imprimiendo...'
      });
      setTimeout(() => {
        var _a;
        Ramen.Api.loading.hide();
        if (this.state.task) {
          this.context.completeTask(this.state.task);
        }
        const sectionTasks = this.context.tasks.filter(task => task.section.id === this.props.match.params.sectionId && task.state === 'PENDING');
        const sectionIsFinished = sectionTasks.length === 0;
        if (sectionIsFinished) {
          // Snackbar live in App Container for that reason
          // we can go back and the snackbar still visible
          Ramen.Api.snackbar.success({
            placement: 'top',
            text: `Impresión de etiquetas de ${(_a = this.state.task) === null || _a === void 0 ? void 0 : _a.section.name} realizadas con éxito`,
            // That number simulate inifinte duration
            duration: 10000000,
            closable: true
          });
          this.props.history.go(-2);
        } else {
          // Snackbar live in App Container for that reason
          // we can go back and the snackbar still visible
          Ramen.Api.snackbar.success({
            placement: 'top',
            text: 'Impresión de etiqueta realizada'
          });
          this.props.history.goBack();
        }
      }, 2000);
    };
    this.componentDidMount = () => {
      const {
        tasks
      } = this.context;
      const {
        sectionId,
        categoryId,
        productId
      } = this.props.match.params;
      // find task by section, category and product id
      const task = tasks.find(task => task.section.id === sectionId && task.category.id === categoryId && task.product.ean === productId);
      const product = task === null || task === void 0 ? void 0 : task.product;
      this.setState({
        task,
        product
      });
    };
    this.render = () => {
      const {
        product,
        count
      } = this.state;
      const {
        selected_printer
      } = this.context;
      return jsxs(Ramen.XPage, {
        children: [jsx(Ramen.XHeader, {
          tags: selected_printer ? [{
            type: 'text',
            icon: 'printer-outline',
            text: selected_printer.name
          }] : undefined,
          onBack: this.onGoBackHandler
        }), jsxs(Ramen.XBody, {
          children: [jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            verticalAlign: "center",
            gap: "s"
          }, {
            children: [jsx(Ramen.XImage, {
              src: (product === null || product === void 0 ? void 0 : product.image) || img,
              rounded: "m"
            }), jsxs(Ramen.XBox, Object.assign({
              gap: "xxs",
              width: "flex"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: "bold",
                fontSize: 11
              }, {
                children: product === null || product === void 0 ? void 0 : product.name
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "lighter",
                  fontSize: 11
                }, {
                  children: "EAN"
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: product === null || product === void 0 ? void 0 : product.ean
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "lighter",
                  fontSize: 11
                }, {
                  children: "Stock de tienda"
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "51"
                }))]
              }))]
            }))]
          })), jsx(Ramen.XVSpace, {
            size: "s"
          }), jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xs"
          }, {
            children: [jsx(Ramen.XBox, Object.assign({
              width: "flex"
            }, {
              children: jsx(Ramen.XCard, Object.assign({
                size: "l",
                borderType: "solid"
              }, {
                children: jsxs(Ramen.XBox, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "lighter",
                    fontSize: 11
                  }, {
                    children: "Precio anterior"
                  })), jsxs(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 10,
                    lineHeight: "copy"
                  }, {
                    children: ["$", product === null || product === void 0 ? void 0 : product.price_before]
                  }))]
                })
              }))
            })), jsx(Ramen.XBox, Object.assign({
              width: "flex"
            }, {
              children: jsx(Ramen.XCard, Object.assign({
                size: "l",
                borderType: "solid"
              }, {
                children: jsxs(Ramen.XBox, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "lighter",
                    fontSize: 11
                  }, {
                    children: "Precio nuevo"
                  })), jsxs(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 10,
                    lineHeight: "copy"
                  }, {
                    children: ["$", product === null || product === void 0 ? void 0 : product.price_now]
                  }))]
                })
              }))
            }))]
          })), jsx(Ramen.XVSpace, {
            size: "l"
          }), jsx(Ramen.XCard, Object.assign({
            size: "l"
          }, {
            children: jsxs(Ramen.XBox, {
              children: [jsx(Ramen.XVSpace, {
                size: "xs"
              }), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                verticalAlign: "center",
                gap: "s",
                width: "flex"
              }, {
                children: [jsx(Ramen.XIcon, {
                  size: "s",
                  icon: "tag-outline"
                }), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Tipo de etiqueta"
                }))]
              })), jsx(Ramen.XVSpace, {
                size: "xs"
              })]
            })
          })), jsx(Ramen.XVSpace, {
            size: "m"
          }), jsx(Ramen.XCard, Object.assign({
            size: "l"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "flex"
            }, {
              children: [jsx(Ramen.XVSpace, {
                size: "xs"
              }), jsxs(Ramen.XBox, Object.assign({
                width: "flex",
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Cantidad a imprimir"
                })), jsx(Ramen.XCounter, {
                  count: count,
                  min: 1,
                  onChange: this.onChangeCounHandler
                })]
              })), jsx(Ramen.XVSpace, {
                size: "xs"
              })]
            }))
          }))]
        }), jsx(Ramen.XFooter, {
          children: jsx(Ramen.XButton, {
            type: "solid",
            text: "Imprimir",
            size: "xl",
            onClick: this.onPrintHandler
          })
        })]
      });
    };
  }
}
Print.contextType = Module$1;

class PrintList extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
  }
  render() {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: "Print List Page",
        onBack: this.onGoBackHandler
      }), jsx(Ramen.XBody, {})]
    });
  }
}
PrintList.contextType = Module$1;

class Filters extends Page {
  constructor() {
    super(...arguments);
    this.state = {
      show_modal: false
    };
    this.onGoBackHandler = () => {
      this.props.history.goBack();
    };
    this.onOpenModalHandler = () => {
      this.setState({
        show_modal: true
      });
    };
    this.onCloseModalHandler = () => {
      this.setState({
        show_modal: false
      });
    };
  }
  render() {
    const items = [{
      id: '1',
      name: 'Secciones'
    }, {
      id: '2',
      name: 'Tipo de etiqueta'
    }];
    const {
      selected_printer
    } = this.context;
    const {
      show_modal
    } = this.state;
    const getSections = () => {
      return this.context.tasks.reduce((acc, priceNewSection) => {
        const sectionId = priceNewSection.section.id;
        const existingSection = acc.find(section => section.id === sectionId);
        if (!existingSection) {
          acc.push(priceNewSection.section);
        }
        return acc;
      }, []);
    };
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: "Filtros",
        tags: selected_printer ? [{
          type: 'text',
          icon: 'printer-outline',
          text: selected_printer.name
        }] : undefined,
        onBack: this.onGoBackHandler
      }), jsxs(Ramen.XBody, {
        children: [jsx(Ramen.XList, {
          dataSource: items,
          renderItem: item => jsx(Ramen.XCard, {
            title: item.name,
            onClick: () => {
              this.onOpenModalHandler();
            }
          })
        }), jsxs(Ramen.XModal, Object.assign({
          visible: show_modal,
          size: "m",
          onClose: this.onCloseModalHandler
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: "Secciones"
          })), jsx(Ramen.XVSpace, {
            size: "m"
          }), jsx(Ramen.XList, {
            dataSource: getSections(),
            renderItem: item => jsx(Ramen.XCard, {
              title: item.name,
              onClick: () => {
                this.onOpenModalHandler();
              }
            })
          })]
        }))]
      })]
    });
  }
}
Filters.contextType = Module$1;

class HelloWorldModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/',
        page: Printers
      }, {
        path: '/sections',
        page: Sections
      }, {
        path: '/sections/filters',
        page: Filters
      }, {
        path: '/sections/:sectionId/categories',
        page: Categories
      }, {
        path: '/sections/:sectionId/categories/:categoryId/print/:productId',
        page: Print
      }, {
        path: '/sections/:sectionId/categories/print-list/:productIds',
        page: PrintList
      }],
      override
    });
  }
  render() {
    return jsx(Boot, {
      children: super.render()
    });
  }
}
HelloWorldModule.route = '/price-news';

export { HelloWorldModule as default };
