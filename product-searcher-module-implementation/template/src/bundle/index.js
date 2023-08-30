import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { IonRouterOutlet, IonHeader, IonContent } from '@ionic/react';
import * as React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Ramen from '@team_yumi/ramen';
import Draggable from 'react-draggable';
import { useScanner } from '@team_yumi/code-scanner';
import moment from 'moment-timezone';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$m = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$l = fails$m;

var functionBindNative = !fails$l(function () {
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

var uncurryThis$n = functionUncurryThis;

var toString$c = uncurryThis$n({}.toString);
var stringSlice$8 = uncurryThis$n(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$8(toString$c(it), 8, -1);
};

var uncurryThis$m = functionUncurryThis;
var fails$k = fails$m;
var classof$4 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$m(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$k(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) === 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$7 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$6(it));
};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$j =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var shared$4 = {exports: {}};

var global$i = global$j;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$i, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$i[key] = value;
  } return value;
};

var global$h = global$j;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$h[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$5 = requireObjectCoercible$7;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$3(requireObjectCoercible$5(argument));
};

var uncurryThis$l = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$l({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$k = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$b = uncurryThis$k(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$g = global$j;
var userAgent = engineUserAgent;

var process = global$g.process;
var Deno = global$g.Deno;
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
var fails$j = fails$m;
var global$f = global$j;

var $String$6 = global$f.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$j(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$e = global$j;
var shared$3 = shared$4.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$3 = global$e.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$1;

var wellKnownSymbol$d = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$b(Symbol$3, name)
      ? Symbol$3[name]
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

var isObject$7 = isObject$8;

var $String$5 = String;
var $TypeError$6 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$a = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$6($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$i = fails$m;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var DESCRIPTORS$c = descriptors;
var fails$h = fails$m;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var objectDefineProperty = {};

var global$d = global$j;
var isObject$6 = isObject$8;

var document$1 = global$d.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$b = descriptors;
var fails$g = fails$m;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$b && !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var NATIVE_BIND$1 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var global$c = global$j;
var isCallable$h = isCallable$j;

var aFunction = function (argument) {
  return isCallable$h(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$c[namespace]) : global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$j = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var isCallable$g = isCallable$j;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
};

var $String$4 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$f = isCallable$j;
var tryToString = tryToString$1;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$f(argument)) return argument;
  throw $TypeError$5(tryToString(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$1(func);
};

var call$a = functionCall;
var isCallable$e = isCallable$j;
var isObject$5 = isObject$8;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$5(val = call$a(fn, input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$5(val = call$a(fn, input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$5(val = call$a(fn, input))) return val;
  throw $TypeError$4("Can't convert object to primitive value");
};

var call$9 = functionCall;
var isObject$4 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$c = wellKnownSymbol$d;

var $TypeError$3 = TypeError;
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
    throw $TypeError$3("Can't convert object to primitive value");
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
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$2;

var $TypeError$2 = TypeError;
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
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
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
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
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

var hiddenKeys$4 = {};

var uncurryThis$i = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$1 = uncurryThis$i([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
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
var anObject$8 = anObject$a;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$9 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
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
if (ArrayPrototype[UNSCOPABLES] === undefined) {
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

var global$b = global$j;
var isCallable$d = isCallable$j;

var WeakMap$1 = global$b.WeakMap;

var weakMapBasicDetection = isCallable$d(WeakMap$1) && /native code/.test(String(WeakMap$1));

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
var global$a = global$j;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$a.TypeError;
var WeakMap = global$a.WeakMap;
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
    if (hasOwn$9(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
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

var DESCRIPTORS$7 = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$8 = hasOwnProperty_1;
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
  if (hasOwn$8(O, P)) return createPropertyDescriptor$1(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$6 = descriptors;
var hasOwn$7 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || (DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$h = functionUncurryThis;
var isCallable$c = isCallable$j;
var store = sharedStore;

var functionToString = uncurryThis$h(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$c(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store.inspectSource;

var uncurryThis$g = functionUncurryThis;
var fails$f = fails$m;
var isCallable$b = isCallable$j;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$5 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$7 = uncurryThis$g(''.slice);
var replace$5 = uncurryThis$g(''.replace);
var join = uncurryThis$g([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$f(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$7($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$5($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$5) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$5) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$b(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$a = isCallable$j;
var definePropertyModule$1 = objectDefineProperty;
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
var uncurryThis$f = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$6 = anObject$a;

var concat$2 = uncurryThis$f([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$e = fails$m;
var isCallable$9 = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$9(detection) ? fails$e(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$9 = global$j;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$5 = defineBuiltIn$6;
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
    target = global$9;
  } else if (STATIC) {
    target = global$9[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$9[TARGET] || {}).prototype;
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
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    defineBuiltIn$5(target, key, sourceProperty, options);
  }
};

var fails$d = fails$m;

var correctPrototypeGetter = !fails$d(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$8 = isCallable$j;
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
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$8(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$c = fails$m;
var isCallable$7 = isCallable$j;
var isObject$2 = isObject$8;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$a = wellKnownSymbol$d;

var ITERATOR$4 = wellKnownSymbol$a('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$c(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$7(IteratorPrototype$2[ITERATOR$4])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$4, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$9 = wellKnownSymbol$d;

var TO_STRING_TAG$3 = wellKnownSymbol$9('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$3(target, TO_STRING_TAG$3)) {
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

var uncurryThis$e = functionUncurryThis;
var aCallable = aCallable$2;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$e(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$6 = isCallable$j;

var $String$2 = String;
var $TypeError$1 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$6(argument)) return argument;
  throw $TypeError$1("Can't set " + $String$2(argument) + ' as a prototype');
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

var $$7 = _export;
var call$7 = functionCall;
var FunctionName = functionName;
var isCallable$5 = isCallable$j;
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
var ITERATOR$3 = wellKnownSymbol$8('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$3]
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
        } else if (!isCallable$5(CurrentIteratorPrototype[ITERATOR$3])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
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
    } else $$7({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
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
var DESCRIPTORS$4 = descriptors;

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
  switch (kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
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

var global$8 = global$j;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$7 = wellKnownSymbol$d;

var ITERATOR$2 = wellKnownSymbol$7('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$7('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$2] = ArrayValues;
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
  handlePrototype(global$8[COLLECTION_NAME] && global$8[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$3 = descriptors;
var uncurryThis$d = functionUncurryThis;
var call$6 = functionCall;
var fails$b = fails$m;
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
var objectAssign = !$assign || fails$b(function () {
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
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
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
      if (!DESCRIPTORS$3 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
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

var wellKnownSymbol$6 = wellKnownSymbol$d;

var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$4 = isCallable$j;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$5 = wellKnownSymbol$d;

var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
};

var classof$2 = classof$3;

var $String$1 = String;

var toString$a = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
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

var fails$a = fails$m;
var global$7 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$7.RegExp;

var UNSUPPORTED_Y$2 = fails$a(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$a(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$a(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$9 = fails$m;
var global$6 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$6.RegExp;

var regexpUnsupportedDotAll = fails$9(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$8 = fails$m;
var global$5 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$5.RegExp;

var regexpUnsupportedNcg = fails$8(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$5 = functionCall;
var uncurryThis$c = functionUncurryThis;
var toString$9 = toString$a;
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
var charAt$5 = uncurryThis$c(''.charAt);
var indexOf = uncurryThis$c(''.indexOf);
var replace$4 = uncurryThis$c(''.replace);
var stringSlice$6 = uncurryThis$c(''.slice);

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
    var str = toString$9(string);
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
      flags = replace$4(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$6(str, re.lastIndex);
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

    match = call$5(nativeExec, sticky ? reCopy : re, strCopy);

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

var $$5 = _export;
var exec$2 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
  exec: exec$2
});

var classofRaw = classofRaw$2;
var uncurryThis$b = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$b(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$a = functionUncurryThisClause;
var defineBuiltIn$2 = defineBuiltIn$6;
var regexpExec$1 = regexpExec$2;
var fails$7 = fails$m;
var wellKnownSymbol$4 = wellKnownSymbol$d;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

var SPECIES$1 = wellKnownSymbol$4('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$7(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$7(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$a(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$a(nativeMethod);
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

var uncurryThis$9 = functionUncurryThis;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$8 = toString$a;
var requireObjectCoercible$4 = requireObjectCoercible$7;

var charAt$4 = uncurryThis$9(''.charAt);
var charCodeAt = uncurryThis$9(''.charCodeAt);
var stringSlice$5 = uncurryThis$9(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$8(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$3(pos);
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
          ? stringSlice$5(S, position, position + 2)
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

var charAt$3 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$3(S, index).length : 1);
};

var call$4 = functionCall;
var anObject$3 = anObject$a;
var isCallable$3 = isCallable$j;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$3(exec)) {
    var result = call$4(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$4(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};

var call$3 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$2 = anObject$a;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var toLength$1 = toLength$3;
var toString$7 = toString$a;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var getMethod$1 = getMethod$3;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$7(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
      var S = toString$7(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$7(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
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

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$8 = functionUncurryThis;
var toObject = toObject$4;

var floor$1 = Math.floor;
var charAt$2 = uncurryThis$8(''.charAt);
var replace$3 = uncurryThis$8(''.replace);
var stringSlice$4 = uncurryThis$8(''.slice);
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
    switch (charAt$2(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$4(str, 0, position);
      case "'": return stringSlice$4(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$4(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$1(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$2(ch, 1) : captures[f - 1] + charAt$2(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$6 = fails$m;
var anObject$1 = anObject$a;
var isCallable$2 = isCallable$j;
var isNullOrUndefined = isNullOrUndefined$4;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
var toLength = toLength$3;
var toString$6 = toString$a;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$d;

var REPLACE = wellKnownSymbol$3('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$7([].concat);
var push = uncurryThis$7([].push);
var stringIndexOf$1 = uncurryThis$7(''.indexOf);
var stringSlice$3 = uncurryThis$7(''.slice);

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
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call$1(replacer, searchValue, O, replaceValue)
        : call$1(nativeReplace, toString$6(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString$6(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$2(replaceValue);
      if (!functionalReplace) replaceValue = toString$6(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString$6(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$6(result[0]);
        var position = max(min(toIntegerOrInfinity$2(result.index), S.length), 0);
        var captures = [];
        var replacement;
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
          replacement = toString$6(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$3(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$3(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// a string of all valid unicode whitespaces
var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$6 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var toString$5 = toString$a;
var whitespaces$3 = whitespaces$4;

var replace$2 = uncurryThis$6(''.replace);
var ltrim = RegExp('^[' + whitespaces$3 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$3 + '])[' + whitespaces$3 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$5(requireObjectCoercible$1($this));
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
var whitespaces$2 = whitespaces$4;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$5(function () {
    return !!whitespaces$2[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces$2[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$4 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$4({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable$1 = isCallable$j;
var isObject$1 = isObject$8;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$1(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$8;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$d;

var MATCH$1 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};

var call = functionCall;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$2(R, 'flags') && isPrototypeOf$2(RegExpPrototype$2, R)
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

var defineBuiltInAccessor$2 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var getBuiltIn = getBuiltIn$4;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
var wellKnownSymbol$1 = wellKnownSymbol$d;
var DESCRIPTORS$2 = descriptors;

var SPECIES = wellKnownSymbol$1('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor$1(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$1 = descriptors;
var global$4 = global$j;
var uncurryThis$5 = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf$1 = objectIsPrototypeOf;
var isRegExp = isRegexp;
var toString$4 = toString$a;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$1 = defineBuiltIn$6;
var fails$4 = fails$m;
var hasOwn$1 = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$1;
var wellKnownSymbol = wellKnownSymbol$d;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global$4.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$4.SyntaxError;
var exec$1 = uncurryThis$5(RegExpPrototype$1.exec);
var charAt$1 = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringIndexOf = uncurryThis$5(''.indexOf);
var stringSlice$2 = uncurryThis$5(''.slice);
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
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
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
        if (exec$1(IS_NCG, stringSlice$2(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$1(names, groupname)) {
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
    var thisIsRegExp = isPrototypeOf$1(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$1(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$4(pattern);
    flags = flags === undefined ? '' : toString$4(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace$1(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
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
  defineBuiltIn$1(global$4, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$6;
var anObject = anObject$a;
var $toString = toString$a;
var fails$3 = fails$m;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$3(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

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

class HomePage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a, _b;
    return jsxs(Ramen.XPage, {
      children: [jsx(IonHeader, {
        children: "Home Page"
      }), jsxs(IonContent, {
        children: [jsxs("div", {
          children: ["I am the hello world page", jsx("br", {}), "you can extend the below content (red box) !!"]
        }), jsx("div", Object.assign({
          style: {
            backgroundColor: 'red',
            border: '1px solid red'
          }
        }, {
          children: ((_b = (_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.white_boxes) === null || _b === void 0 ? void 0 : _b.red_box) && jsx(this.props.extensions.white_boxes.red_box, {})
        }))]
      })]
    });
  }
}

class AboutPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    return jsxs(Ramen.XPage, {
      children: [jsx(IonHeader, {
        children: "Title"
      }), jsx(IonContent, {
        children: "I am the about page"
      })]
    });
  }
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

const Image$2 = () => {
  return jsxs("svg", Object.assign({
    width: "207",
    height: "409",
    viewBox: "0 0 207 409",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M44.0017 21C44.0017 9.95431 35.0474 1 24.0017 1C12.956 1 4.00171 9.95431 4.00171 21",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M36.0017 21C36.0017 14.3726 30.6291 9 24.0017 9C17.3743 9 12.0017 14.3726 12.0017 21",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M31.7772 84.9915C30.6389 84.776 29.5006 84.6152 28.3946 84.3358C22.3825 82.8252 17.7535 79.499 14.6213 74.3389C9.90121 66.5612 5.2494 58.7453 0.571039 50.9476C-0.544483 49.0845 0.0018952 47.3547 1.96924 46.3811C5.64781 44.5545 10.2313 45.6888 12.4605 49.0698C13.8017 51.1047 14.9969 53.229 16.2548 55.3113C16.3629 55.494 16.4445 55.7369 16.5962 55.8191C16.9055 55.978 17.3115 56.1844 17.5979 56.1059C17.8844 56.0273 18.1159 55.6456 18.2676 55.3478C18.372 55.1451 18.2999 54.8565 18.2999 54.6062C18.2999 45.332 18.2999 36.0578 18.2999 26.7836C18.2999 23.83 20.0946 21.6692 22.9801 21.1048C26.3077 20.4436 29.5974 23.0008 29.6334 26.2722C29.6695 29.5436 29.6334 32.8351 29.6429 36.1157V36.9523C31.2441 36.0828 32.8548 35.8161 34.5414 36.3604C36.2279 36.9048 37.3757 38.0336 38.0776 39.5917C41.5665 37.2938 45.7725 38.8227 47.0132 42.3973C47.7569 42.1416 48.4816 41.7964 49.2462 41.6448C52.5851 40.9835 55.7723 43.3124 55.9279 46.5766C56.036 48.8726 55.9791 51.1777 55.9772 53.4774C55.9772 57.147 56.0645 60.8185 55.9203 64.4826C55.649 71.3524 52.5055 76.8248 46.8026 80.9219C43.722 83.1426 40.0676 84.5073 36.2374 84.8673C36.0761 84.8963 35.9175 84.9378 35.7631 84.9915H31.7772ZM20.8515 40.9908C20.8515 45.5938 20.8515 50.1975 20.8515 54.8017C20.87 55.2309 20.8311 55.6606 20.7358 56.0803C20.3564 57.463 19.3907 58.3361 17.9318 58.5644C16.3857 58.8056 15.1279 58.2448 14.3273 56.9315C13.0638 54.8747 11.861 52.787 10.5937 50.7302C9.03232 48.1876 5.97222 47.2506 3.30103 48.4634C2.4606 48.8452 2.38851 49.0534 2.85141 49.8261C7.52219 57.6347 12.1626 65.458 16.8979 73.2319C22.3996 82.2535 34.4275 85.2874 43.7501 79.9191C49.7508 76.4668 53.1031 71.2665 53.3554 64.5118C53.5735 58.7087 53.4199 52.8911 53.4275 47.0789C53.4247 46.8956 53.4114 46.7127 53.3876 46.5309C53.1979 44.876 51.4165 43.6504 49.7356 44.0138C48.2008 44.3463 47.2693 45.4569 47.2295 46.9875C47.2143 47.762 47.2504 48.5383 47.2124 49.311C47.1745 50.0836 46.6224 50.6024 45.9242 50.5896C45.2261 50.5768 44.712 50.0672 44.6835 49.2854C44.6683 48.8981 44.6835 48.5109 44.6835 48.1237C44.6664 46.5966 44.7442 45.0623 44.6 43.5572C44.4426 41.9133 42.9647 40.8374 41.2819 40.9525C39.6731 41.0639 38.459 42.3608 38.4476 43.9992C38.4381 45.4605 38.4476 46.9218 38.4476 48.3739C38.4476 49.4279 37.9923 49.985 37.1499 49.9795C36.3076 49.974 35.9054 49.4315 35.9054 48.4159C35.9054 46.2058 35.9187 43.9938 35.894 41.7836C35.8926 41.3301 35.8124 40.88 35.6569 40.452C35.4146 39.8162 34.9505 39.2812 34.3439 38.9384C33.7373 38.5956 33.0259 38.4662 32.3312 38.5724C30.7698 38.8318 29.6752 39.9935 29.6581 41.4822C29.6334 43.875 29.6809 46.2697 29.6183 48.6607C29.5947 48.8865 29.5222 49.1051 29.4056 49.3024C29.2889 49.4996 29.1307 49.6712 28.941 49.806C28.6507 49.9886 27.9715 49.963 27.7211 49.7512C27.3638 49.412 27.153 48.9552 27.1311 48.4725C27.0856 44.8723 27.1045 41.2721 27.1045 37.6701C27.1045 33.9329 27.114 30.1957 27.1045 26.4567C27.1093 26.0339 27.0209 25.615 26.8451 25.2276C26.6693 24.8402 26.4101 24.4931 26.0846 24.2093C25.7592 23.9255 25.3749 23.7114 24.9571 23.5811C24.5394 23.4509 24.0977 23.4075 23.6612 23.4538C22.0278 23.609 20.8686 24.9388 20.8667 26.6996C20.8503 31.4634 20.8452 36.2271 20.8515 40.9908Z",
      fill: "white"
    }), jsx("path", {
      d: "M64.6667 52C64.6667 54.9455 67.0545 57.3333 70 57.3333C72.9455 57.3333 75.3333 54.9455 75.3333 52C75.3333 49.0545 72.9455 46.6667 70 46.6667C67.0545 46.6667 64.6667 49.0545 64.6667 52ZM179.239 315.149C179.597 315.569 180.228 315.619 180.649 315.261L187.498 309.423C187.919 309.065 187.969 308.434 187.611 308.014C187.253 307.593 186.621 307.543 186.201 307.901L180.112 313.09L174.923 307.002C174.565 306.581 173.934 306.531 173.514 306.889C173.093 307.247 173.043 307.879 173.401 308.299L179.239 315.149ZM70 53C70.6867 53 71.3695 53.0026 72.0485 53.0079L72.0641 51.008C71.3798 51.0027 70.6918 51 70 51V53ZM76.0763 53.0713C77.4037 53.103 78.7158 53.1452 80.0128 53.1979L80.0939 51.1995C78.7855 51.1464 77.4623 51.1038 76.124 51.0719L76.0763 53.0713ZM83.9782 53.3942C85.3333 53.4736 86.6713 53.5649 87.9924 53.6681L88.1481 51.6742C86.8139 51.57 85.463 51.4777 84.0952 51.3976L83.9782 53.3942ZM91.9052 54.0133C93.2457 54.1454 94.5681 54.2903 95.8726 54.4479L96.1125 52.4623C94.7931 52.3029 93.4561 52.1564 92.1013 52.0229L91.9052 54.0133ZM99.8353 54.9737C101.137 55.1623 102.421 55.3643 103.686 55.5795L104.022 53.6078C102.74 53.3898 101.44 53.1853 100.122 52.9944L99.8353 54.9737ZM107.655 56.3101C108.964 56.5697 110.252 56.8443 111.519 57.1338L111.965 55.184C110.678 54.8901 109.371 54.6116 108.045 54.3483L107.655 56.3101ZM115.36 58.0728C116.664 58.413 117.944 58.77 119.203 59.1436L119.772 57.2263C118.492 56.8462 117.19 56.4833 115.865 56.1376L115.36 58.0728ZM122.927 60.3193C124.211 60.7496 125.471 61.1983 126.706 61.6654L127.413 59.7947C126.154 59.3184 124.87 58.8612 123.563 58.423L122.927 60.3193ZM130.34 63.1214C131.578 63.6464 132.79 64.1912 133.977 64.7556L134.836 62.9495C133.622 62.3726 132.384 61.8161 131.12 61.2801L130.34 63.1214ZM137.486 66.5205C138.665 67.1467 139.817 67.7939 140.943 68.4619L141.964 66.7418C140.81 66.0576 139.631 65.395 138.425 64.7543L137.486 66.5205ZM144.277 70.5503C145.385 71.2824 146.465 72.0364 147.519 72.8123L148.705 71.2018C147.623 70.4058 146.515 69.6324 145.38 68.8819L144.277 70.5503ZM150.627 75.2267C151.65 76.064 152.645 76.924 153.614 77.8064L154.961 76.3277C153.966 75.4217 152.944 74.5388 151.895 73.6794L150.627 75.2267ZM156.456 80.5345C157.381 81.4703 158.28 82.4289 159.153 83.4101L160.647 82.0805C159.751 81.0734 158.828 80.0893 157.878 79.1286L156.456 80.5345ZM161.7 86.4255C162.519 87.4477 163.314 88.4923 164.085 89.5593L165.706 88.388C164.916 87.2944 164.101 86.2231 163.26 85.1745L161.7 86.4255ZM166.324 92.8238C167.036 93.9177 167.726 95.0332 168.393 96.17L170.118 95.1574C169.435 93.9945 168.73 92.8528 168 91.7326L166.324 92.8238ZM170.327 99.6389C170.936 100.79 171.524 101.961 172.093 103.152L173.898 102.291C173.318 101.075 172.717 99.8794 172.095 98.7037L170.327 99.6389ZM173.735 106.779C174.249 107.974 174.744 109.188 175.221 110.421L177.086 109.698C176.601 108.444 176.096 107.207 175.573 105.99L173.735 106.779ZM176.596 114.162C177.024 115.392 177.436 116.64 177.832 117.904L179.74 117.307C179.338 116.023 178.92 114.755 178.484 113.505L176.596 114.162ZM178.965 121.723C179.318 122.982 179.657 124.257 179.982 125.548L181.921 125.06C181.592 123.752 181.249 122.459 180.89 121.182L178.965 121.723ZM180.902 129.413C181.19 130.697 181.466 131.996 181.729 133.31L183.69 132.918C183.424 131.589 183.145 130.274 182.853 128.974L180.902 129.413ZM182.463 137.197C182.695 138.505 182.916 139.827 183.125 141.163L185.101 140.854C184.89 139.505 184.667 138.169 184.432 136.847L182.463 137.197ZM183.698 145.055C183.879 146.365 184.05 147.688 184.21 149.023L186.196 148.784C186.034 147.438 185.862 146.103 185.68 144.782L183.698 145.055ZM184.653 152.972C184.789 154.278 184.916 155.595 185.035 156.925L187.027 156.747C186.907 155.408 186.779 154.081 186.642 152.765L184.653 152.972ZM185.365 160.94C185.462 162.239 185.552 163.549 185.635 164.869L187.631 164.744C187.548 163.416 187.457 162.098 187.359 160.79L185.365 160.94ZM185.861 168.862C185.928 170.183 185.988 171.514 186.041 172.855L188.039 172.776C187.986 171.428 187.926 170.089 187.858 168.76L185.861 168.862ZM186.178 176.814C186.217 178.143 186.25 179.481 186.277 180.829L188.276 180.789C188.249 179.435 188.216 178.09 188.177 176.755L186.178 176.814ZM186.339 184.805C186.353 186.121 186.363 187.446 186.367 188.779L188.367 188.773C188.363 187.435 188.353 186.104 188.338 184.783L186.339 184.805ZM186.364 192.806C186.358 194.119 186.347 195.441 186.332 196.771L188.332 196.794C188.347 195.46 188.358 194.133 188.364 192.815L186.364 192.806ZM186.273 200.752C186.249 202.087 186.22 203.43 186.188 204.78L188.187 204.829C188.22 203.474 188.248 202.127 188.272 200.788L186.273 200.752ZM186.081 208.743C186.042 210.063 185.999 211.389 185.952 212.724L187.951 212.793C187.998 211.456 188.041 210.126 188.08 208.802L186.081 208.743ZM185.802 216.748C185.75 218.064 185.694 219.387 185.636 220.717L187.634 220.805C187.693 219.472 187.748 218.146 187.801 216.827L185.802 216.748ZM185.452 224.692C185.388 226.024 185.321 227.362 185.251 228.707L187.248 228.811C187.318 227.464 187.385 226.123 187.45 224.788L185.452 224.692ZM185.036 232.691C184.963 234.007 184.888 235.329 184.81 236.658L186.807 236.775C186.885 235.444 186.96 234.12 187.033 232.801L185.036 232.691ZM184.569 240.661C184.487 241.99 184.403 243.325 184.317 244.666L186.313 244.794C186.399 243.452 186.484 242.115 186.565 240.784L184.569 240.661ZM184.058 248.622C183.97 249.947 183.88 251.277 183.788 252.612L185.783 252.75C185.875 251.413 185.966 250.081 186.054 248.755L184.058 248.622ZM183.507 256.636C183.414 257.949 183.32 259.266 183.224 260.589L185.219 260.733C185.315 259.41 185.409 258.091 185.502 256.778L183.507 256.636ZM182.932 264.564C182.834 265.895 182.734 267.231 182.633 268.571L184.627 268.722C184.728 267.38 184.828 266.044 184.927 264.712L182.932 264.564ZM182.33 272.56C182.229 273.876 182.127 275.196 182.024 276.521L184.018 276.676C184.121 275.35 184.223 274.029 184.324 272.713L182.33 272.56ZM181.713 280.511C181.608 281.846 181.503 283.185 181.396 284.53L183.39 284.688C183.496 283.343 183.602 282.003 183.707 280.667L181.713 280.511ZM181.082 288.486C180.977 289.806 180.871 291.13 180.765 292.459L182.758 292.618C182.865 291.289 182.971 289.965 183.076 288.645L181.082 288.486ZM180.444 296.459C180.337 297.789 180.23 299.123 180.123 300.462L182.116 300.623C182.224 299.284 182.331 297.949 182.438 296.619L180.444 296.459ZM179.805 304.419C179.698 305.742 179.592 307.069 179.485 308.4L181.478 308.56C181.585 307.229 181.692 305.902 181.798 304.579L179.805 304.419ZM179.164 312.407C179.11 313.077 179.057 313.748 179.003 314.421L180.997 314.579C181.05 313.908 181.104 313.237 181.158 312.567L179.164 312.407Z",
      fill: "white"
    }), jsxs("g", Object.assign({
      filter: "url(#filter0_d_3_1044)"
    }, {
      children: [jsx("rect", {
        x: "32",
        y: "330",
        width: "152",
        height: "48",
        rx: "24",
        fill: "#11A279"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M67.1 346.8C63.6206 346.8 60.8 349.621 60.8 353.1C60.8 356.579 63.6206 359.4 67.1 359.4C70.5794 359.4 73.4 356.579 73.4 353.1C73.4 349.621 70.5794 346.8 67.1 346.8ZM59 353.1C59 348.626 62.6265 345 67.1 345C71.5735 345 75.2 348.626 75.2 353.1C75.2 357.574 71.5735 361.2 67.1 361.2C62.6265 361.2 59 357.574 59 353.1Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M71.5486 357.549C71.9001 357.197 72.4699 357.197 72.8214 357.549L76.7364 361.464C77.0879 361.815 77.0879 362.385 76.7364 362.736C76.3849 363.088 75.8151 363.088 75.4636 362.736L71.5486 358.821C71.1971 358.47 71.1971 357.9 71.5486 357.549Z",
        fill: "white"
      }), jsx("path", {
        d: "M94.2891 350.43C93.3776 350.43 92.6719 350.773 92.1719 351.461C91.6719 352.143 91.4219 353.096 91.4219 354.32C91.4219 356.867 92.3776 358.141 94.2891 358.141C95.0911 358.141 96.0625 357.94 97.2031 357.539V359.57C96.2656 359.961 95.2188 360.156 94.0625 360.156C92.401 360.156 91.1302 359.654 90.25 358.648C89.3698 357.638 88.9297 356.19 88.9297 354.305C88.9297 353.117 89.1458 352.078 89.5781 351.188C90.0104 350.292 90.6302 349.607 91.4375 349.133C92.25 348.654 93.2005 348.414 94.2891 348.414C95.3984 348.414 96.513 348.682 97.6328 349.219L96.8516 351.188C96.4245 350.984 95.9948 350.807 95.5625 350.656C95.1302 350.505 94.7057 350.43 94.2891 350.43ZM100.552 355.617C100.552 356.482 100.692 357.135 100.973 357.578C101.26 358.021 101.723 358.242 102.364 358.242C102.999 358.242 103.455 358.023 103.731 357.586C104.012 357.143 104.153 356.487 104.153 355.617C104.153 354.753 104.012 354.104 103.731 353.672C103.45 353.24 102.989 353.023 102.348 353.023C101.713 353.023 101.255 353.24 100.973 353.672C100.692 354.099 100.552 354.747 100.552 355.617ZM106.591 355.617C106.591 357.039 106.216 358.151 105.466 358.953C104.716 359.755 103.671 360.156 102.333 360.156C101.494 360.156 100.755 359.974 100.114 359.609C99.4734 359.24 98.9812 358.711 98.6375 358.023C98.2937 357.336 98.1219 356.534 98.1219 355.617C98.1219 354.19 98.4943 353.081 99.2391 352.289C99.9839 351.497 101.031 351.102 102.38 351.102C103.218 351.102 103.958 351.284 104.598 351.648C105.239 352.013 105.731 352.536 106.075 353.219C106.419 353.901 106.591 354.701 106.591 355.617ZM115.822 360H113.439V354.898C113.439 354.268 113.327 353.797 113.103 353.484C112.879 353.167 112.522 353.008 112.033 353.008C111.366 353.008 110.884 353.232 110.587 353.68C110.291 354.122 110.142 354.859 110.142 355.891V360H107.759V351.266H109.58L109.9 352.383H110.033C110.298 351.961 110.663 351.643 111.127 351.43C111.595 351.211 112.127 351.102 112.72 351.102C113.736 351.102 114.507 351.378 115.033 351.93C115.559 352.477 115.822 353.268 115.822 354.305V360ZM123.569 357.406C123.569 358.302 123.256 358.984 122.631 359.453C122.011 359.922 121.082 360.156 119.842 360.156C119.207 360.156 118.665 360.112 118.217 360.023C117.769 359.94 117.35 359.815 116.959 359.648V357.68C117.402 357.888 117.899 358.062 118.452 358.203C119.009 358.344 119.498 358.414 119.92 358.414C120.785 358.414 121.217 358.164 121.217 357.664C121.217 357.477 121.16 357.326 121.045 357.211C120.931 357.091 120.733 356.958 120.452 356.812C120.17 356.661 119.795 356.487 119.327 356.289C118.655 356.008 118.16 355.747 117.842 355.508C117.53 355.268 117.301 354.995 117.155 354.688C117.014 354.375 116.944 353.992 116.944 353.539C116.944 352.763 117.243 352.164 117.842 351.742C118.446 351.315 119.301 351.102 120.405 351.102C121.457 351.102 122.48 351.331 123.475 351.789L122.756 353.508C122.319 353.32 121.91 353.167 121.53 353.047C121.149 352.927 120.761 352.867 120.366 352.867C119.663 352.867 119.311 353.057 119.311 353.438C119.311 353.651 119.423 353.836 119.647 353.992C119.876 354.148 120.373 354.38 121.139 354.688C121.821 354.964 122.321 355.221 122.639 355.461C122.957 355.701 123.191 355.977 123.342 356.289C123.493 356.602 123.569 356.974 123.569 357.406ZM130.816 360L130.495 358.883H130.37C130.115 359.289 129.753 359.604 129.284 359.828C128.816 360.047 128.282 360.156 127.683 360.156C126.657 360.156 125.883 359.883 125.362 359.336C124.842 358.784 124.581 357.992 124.581 356.961V351.266H126.964V356.367C126.964 356.997 127.076 357.471 127.3 357.789C127.524 358.102 127.881 358.258 128.37 358.258C129.037 358.258 129.519 358.036 129.816 357.594C130.112 357.146 130.261 356.406 130.261 355.375V351.266H132.644V360H130.816ZM136.727 360H134.344V347.844H136.727V360ZM142.114 358.258C142.531 358.258 143.031 358.167 143.614 357.984V359.758C143.02 360.023 142.291 360.156 141.427 360.156C140.473 360.156 139.778 359.917 139.341 359.438C138.908 358.953 138.692 358.229 138.692 357.266V353.055H137.552V352.047L138.864 351.25L139.552 349.406H141.075V351.266H143.52V353.055H141.075V357.266C141.075 357.604 141.169 357.854 141.356 358.016C141.549 358.177 141.802 358.258 142.114 358.258ZM146.486 355.617C146.486 356.482 146.627 357.135 146.908 357.578C147.194 358.021 147.658 358.242 148.298 358.242C148.934 358.242 149.39 358.023 149.666 357.586C149.947 357.143 150.088 356.487 150.088 355.617C150.088 354.753 149.947 354.104 149.666 353.672C149.384 353.24 148.923 353.023 148.283 353.023C147.647 353.023 147.189 353.24 146.908 353.672C146.627 354.099 146.486 354.747 146.486 355.617ZM152.525 355.617C152.525 357.039 152.15 358.151 151.4 358.953C150.65 359.755 149.606 360.156 148.267 360.156C147.429 360.156 146.689 359.974 146.048 359.609C145.408 359.24 144.916 358.711 144.572 358.023C144.228 357.336 144.056 356.534 144.056 355.617C144.056 354.19 144.429 353.081 145.173 352.289C145.918 351.497 146.965 351.102 148.314 351.102C149.153 351.102 149.892 351.284 150.533 351.648C151.173 352.013 151.666 352.536 152.009 353.219C152.353 353.901 152.525 354.701 152.525 355.617ZM158.569 351.102C158.892 351.102 159.16 351.125 159.373 351.172L159.194 353.406C159.001 353.354 158.767 353.328 158.491 353.328C157.73 353.328 157.136 353.523 156.709 353.914C156.287 354.305 156.077 354.852 156.077 355.555V360H153.694V351.266H155.498L155.85 352.734H155.967C156.238 352.245 156.603 351.852 157.061 351.555C157.524 351.253 158.027 351.102 158.569 351.102Z",
        fill: "white"
      })]
    })), jsx("defs", {
      children: jsxs("filter", Object.assign({
        id: "filter0_d_3_1044",
        x: "9",
        y: "315",
        width: "198",
        height: "94",
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
        }), jsx("feMorphology", {
          radius: "1",
          operator: "erode",
          in: "SourceAlpha",
          result: "effect1_dropShadow_3_1044"
        }), jsx("feOffset", {
          dy: "8"
        }), jsx("feGaussianBlur", {
          stdDeviation: "12"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.1 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3_1044"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_3_1044",
          result: "shape"
        })]
      }))
    })]
  }));
};

const Image$1 = () => {
  return jsxs("svg", Object.assign({
    width: "217",
    height: "145",
    viewBox: "0 0 217 145",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M0.292893 63.2909C-0.0976311 63.6815 -0.0976311 64.3146 0.292893 64.7052L6.65685 71.0691C7.04738 71.4596 7.68054 71.4596 8.07107 71.0691C8.46159 70.6786 8.46159 70.0454 8.07107 69.6549L2.41421 63.998L8.07107 58.3412C8.46159 57.9507 8.46159 57.3175 8.07107 56.927C7.68054 56.5365 7.04738 56.5365 6.65685 56.927L0.292893 63.2909ZM18 62.998L1 62.998L1 64.998L18 64.998L18 62.998Z",
      fill: "white"
    }), jsx("circle", {
      cx: "30",
      cy: "63.998",
      r: "11",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M59.7071 64.7052C60.0976 64.3146 60.0976 63.6815 59.7071 63.2909L53.3431 56.927C52.9526 56.5365 52.3195 56.5365 51.9289 56.927C51.5384 57.3175 51.5384 57.9507 51.9289 58.3412L57.5858 63.998L51.9289 69.6549C51.5384 70.0454 51.5384 70.6786 51.9289 71.0691C52.3195 71.4596 52.9526 71.4596 53.3431 71.0691L59.7071 64.7052ZM42 64.998L59 64.998L59 62.998L42 62.998L42 64.998Z",
      fill: "white"
    }), jsx("path", {
      d: "M38.7755 144.99C37.6372 144.774 36.4989 144.613 35.3929 144.334C29.3808 142.823 24.7518 139.497 21.6196 134.337C16.8995 126.559 12.2477 118.743 7.56933 110.946C6.45381 109.083 7.00019 107.353 8.96753 106.379C12.6461 104.553 17.2296 105.687 19.4588 109.068C20.8 111.103 21.9952 113.227 23.253 115.309C23.3612 115.492 23.4428 115.735 23.5945 115.817C23.9038 115.976 24.3098 116.182 24.5962 116.104C24.8827 116.025 25.1142 115.644 25.2659 115.346C25.3703 115.143 25.2982 114.855 25.2982 114.604C25.2982 105.33 25.2982 96.0559 25.2982 86.7817C25.2982 83.8281 27.0929 81.6672 29.9784 81.1028C33.306 80.4416 36.5957 82.9988 36.6317 86.2702C36.6678 89.5417 36.6317 92.8332 36.6412 96.1137V96.9503C38.2424 96.0808 39.8531 95.8142 41.5397 96.3585C43.2262 96.9028 44.374 98.0316 45.0759 99.5897C48.5648 97.2919 52.7708 98.8207 54.0115 102.395C54.7552 102.14 55.4799 101.794 56.2444 101.643C59.5834 100.982 62.7706 103.31 62.9262 106.575C63.0343 108.871 62.9774 111.176 62.9755 113.475C62.9755 117.145 63.0628 120.817 62.9186 124.481C62.6473 131.35 59.5037 136.823 53.8009 140.92C50.7202 143.141 47.0659 144.505 43.2357 144.865C43.0744 144.894 42.9158 144.936 42.7614 144.99H38.7755ZM27.8498 100.989C27.8498 105.592 27.8498 110.196 27.8498 114.8C27.8683 115.229 27.8294 115.659 27.7341 116.078C27.3547 117.461 26.389 118.334 24.9301 118.562C23.384 118.804 22.1261 118.243 21.3255 116.93C20.062 114.873 18.8593 112.785 17.592 110.728C16.0306 108.186 12.9705 107.249 10.2993 108.461C9.45889 108.843 9.3868 109.051 9.8497 109.824C14.5205 117.633 19.1609 125.456 23.8962 133.23C29.3979 142.252 41.4258 145.285 50.7484 139.917C56.7491 136.465 60.1013 131.265 60.3537 124.51C60.5718 118.707 60.4182 112.889 60.4258 107.077C60.423 106.894 60.4097 106.711 60.3859 106.529C60.1962 104.874 58.4148 103.648 56.7339 104.012C55.1991 104.344 54.2676 105.455 54.2278 106.986C54.2126 107.76 54.2486 108.536 54.2107 109.309C54.1728 110.082 53.6207 110.6 52.9225 110.588C52.2244 110.575 51.7103 110.065 51.6818 109.283C51.6666 108.896 51.6818 108.509 51.6818 108.122C51.6647 106.595 51.7425 105.06 51.5983 103.555C51.4409 101.911 49.963 100.835 48.2802 100.951C46.6714 101.062 45.4573 102.359 45.4459 103.997C45.4364 105.459 45.4459 106.92 45.4459 108.372C45.4459 109.426 44.9906 109.983 44.1482 109.978C43.3059 109.972 42.9037 109.43 42.9037 108.414C42.9037 106.204 42.917 103.992 42.8923 101.782C42.8908 101.328 42.8107 100.878 42.6552 100.45C42.4129 99.8143 41.9488 99.2793 41.3422 98.9365C40.7356 98.5936 40.0242 98.4643 39.3295 98.5705C37.7681 98.8299 36.6735 99.9916 36.6564 101.48C36.6317 103.873 36.6792 106.268 36.6166 108.659C36.593 108.885 36.5205 109.103 36.4039 109.3C36.2872 109.498 36.129 109.669 35.9393 109.804C35.649 109.987 34.9698 109.961 34.7194 109.749C34.3621 109.41 34.1513 108.953 34.1294 108.471C34.0839 104.87 34.1028 101.27 34.1028 97.6682C34.1028 93.931 34.1123 90.1938 34.1028 86.4547C34.1076 86.032 34.0192 85.6131 33.8434 85.2257C33.6676 84.8383 33.4084 84.4912 33.0829 84.2074C32.7575 83.9235 32.3732 83.7094 31.9554 83.5792C31.5377 83.4489 31.096 83.4055 30.6595 83.4518C29.0261 83.6071 27.8669 84.9368 27.865 86.6977C27.8486 91.4614 27.8435 96.2251 27.8498 100.989Z",
      fill: "white"
    }), jsxs("g", Object.assign({
      filter: "url(#filter0_d_3_1044)"
    }, {
      children: [jsx("rect", {
        x: "146",
        y: "15.998",
        width: "48",
        height: "48",
        rx: "24",
        fill: "#11A279"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M169.1 32.798C165.621 32.798 162.8 35.6187 162.8 39.098C162.8 42.5774 165.621 45.398 169.1 45.398C172.579 45.398 175.4 42.5774 175.4 39.098C175.4 35.6187 172.579 32.798 169.1 32.798ZM161 39.098C161 34.6245 164.626 30.998 169.1 30.998C173.574 30.998 177.2 34.6245 177.2 39.098C177.2 43.5716 173.574 47.198 169.1 47.198C164.626 47.198 161 43.5716 161 39.098Z",
        fill: "white"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M173.549 43.5466C173.9 43.1952 174.47 43.1952 174.821 43.5466L178.736 47.4616C179.088 47.8131 179.088 48.383 178.736 48.7344C178.385 49.0859 177.815 49.0859 177.464 48.7344L173.549 44.8194C173.197 44.468 173.197 43.8981 173.549 43.5466Z",
        fill: "white"
      })]
    })), jsx("path", {
      d: "M24.6667 43C24.6667 45.9455 27.0545 48.3333 30 48.3333C32.9455 48.3333 35.3333 45.9455 35.3333 43C35.3333 40.0545 32.9455 37.6667 30 37.6667C27.0545 37.6667 24.6667 40.0545 24.6667 43ZM79 18.9984L79.0656 18.0005L79 18.9984ZM120 104.998L119.757 105.968L120 104.998ZM176.207 73.2912C175.817 72.9007 175.183 72.9007 174.793 73.2912L168.429 79.6552C168.038 80.0457 168.038 80.6789 168.429 81.0694C168.819 81.4599 169.453 81.4599 169.843 81.0694L175.5 75.4126L181.157 81.0694C181.547 81.4599 182.181 81.4599 182.571 81.0694C182.962 80.6789 182.962 80.0457 182.571 79.6552L176.207 73.2912ZM31 43C31 42.6049 31.1176 42.0863 31.4066 41.4422L29.582 40.6233C29.2214 41.4268 29 42.2319 29 43H31ZM33.5323 38.2827C34.3041 37.3792 35.2382 36.4255 36.3199 35.4459L34.9773 33.9635C33.8435 34.9904 32.8477 36.0049 32.0116 36.9837L33.5323 38.2827ZM39.4194 32.8828C40.4446 32.1033 41.5471 31.3234 42.7183 30.5545L41.6207 28.8826C40.4124 29.6759 39.2722 30.4823 38.209 31.2907L39.4194 32.8828ZM46.1641 28.4427C47.3092 27.7879 48.5012 27.1503 49.7344 26.5379L48.8447 24.7467C47.5764 25.3766 46.3499 26.0325 45.1713 26.7065L46.1641 28.4427ZM53.4101 24.8433C54.6371 24.3204 55.8946 23.8264 57.1777 23.3677L56.5046 21.4844C55.1829 21.9569 53.8884 22.4654 52.626 23.0034L53.4101 24.8433ZM61.0234 22.1258C62.3105 21.7545 63.6167 21.4223 64.9374 21.135L64.5122 19.1807C63.1463 19.4779 61.7971 19.8211 60.469 20.2042L61.0234 22.1258ZM68.9057 20.4179C70.2325 20.2277 71.5688 20.0867 72.9103 20.0004L72.7817 18.0045C71.3861 18.0944 69.998 18.2409 68.6219 18.4381L68.9057 20.4179ZM76.9286 19.9101C77.5972 19.9238 78.266 19.9523 78.9344 19.9962L79.0656 18.0005C78.3665 17.9546 77.6677 17.9248 76.9697 17.9105L76.9286 19.9101ZM78.9344 19.9962C79.6214 20.0414 80.3009 20.096 80.9729 20.1597L81.1619 18.1687C80.4705 18.1031 79.7717 18.0469 79.0656 18.0005L78.9344 19.9962ZM84.9159 20.6514C86.2695 20.8617 87.5905 21.1111 88.8795 21.3977L89.3136 19.4454C87.9819 19.1493 86.6185 18.8919 85.223 18.6751L84.9159 20.6514ZM92.749 22.3958C94.041 22.7767 95.2983 23.197 96.5215 23.6543L97.2219 21.781C95.9541 21.3069 94.6518 20.8717 93.3146 20.4774L92.749 22.3958ZM100.213 25.1922C101.438 25.7572 102.625 26.3615 103.776 27.0027L104.75 25.2556C103.555 24.5897 102.322 23.9623 101.05 23.376L100.213 25.1922ZM107.182 29.0756C108.298 29.8153 109.376 30.592 110.416 31.4026L111.646 29.8251C110.566 28.9834 109.446 28.1768 108.287 27.4084L107.182 29.0756ZM113.466 33.971C114.456 34.8713 115.408 35.8046 116.322 36.7679L117.773 35.3912C116.826 34.3929 115.839 33.425 114.811 32.4909L113.466 33.971ZM118.967 39.7639C119.815 40.7957 120.626 41.855 121.399 42.9387L123.027 41.7771C122.228 40.6573 121.39 39.5618 120.513 38.4941L118.967 39.7639ZM123.615 46.271C124.319 47.407 124.986 48.5644 125.618 49.74L127.38 48.7935C126.729 47.5826 126.042 46.3895 125.315 45.2176L123.615 46.271ZM127.41 53.3262C127.974 54.5412 128.502 55.7713 128.996 57.0131L130.854 56.2739C130.347 54.9985 129.804 53.7342 129.224 52.4846L127.41 53.3262ZM130.38 60.7836C130.809 62.0562 131.204 63.3372 131.565 64.6231L133.491 64.0816C133.12 62.7636 132.715 61.45 132.275 60.1444L130.38 60.7836ZM132.557 68.5184C132.857 69.831 133.124 71.145 133.358 72.4568L135.327 72.1054C135.087 70.7625 134.814 69.417 134.507 68.0726L132.557 68.5184ZM133.97 76.4272C134.144 77.768 134.285 79.1024 134.393 80.4264L136.387 80.2631C136.276 78.9077 136.132 77.5419 135.953 76.1696L133.97 76.4272ZM134.626 84.4444C134.671 85.8027 134.683 87.145 134.661 88.4669L136.661 88.4994C136.683 87.144 136.671 85.7685 136.624 84.3774L134.626 84.4444ZM134.491 92.4823C134.397 93.8446 134.267 95.178 134.102 96.4769L136.087 96.7283C136.256 95.3905 136.39 94.0192 136.486 92.62L134.491 92.4823ZM133.475 100.432C133.215 101.78 132.916 103.079 132.579 104.32L134.509 104.844C134.86 103.552 135.17 102.204 135.439 100.81L133.475 100.432ZM131.374 108.094C130.887 109.399 130.353 110.611 129.776 111.721L131.551 112.644C132.169 111.454 132.736 110.166 133.248 108.793L131.374 108.094ZM127.705 115.019C126.869 116.108 125.98 117.008 125.05 117.708L126.252 119.306C127.351 118.48 128.365 117.444 129.292 116.236L127.705 115.019ZM121.79 119.289C121.21 119.427 120.613 119.498 120 119.498V121.498C120.77 121.498 121.522 121.409 122.254 121.234L121.79 119.289ZM120 119.498C119.22 119.498 118.507 119.443 117.857 119.342L117.549 121.318C118.31 121.437 119.126 121.498 120 121.498V119.498ZM114.081 117.853C112.955 116.998 112.268 115.874 111.949 114.644L110.013 115.147C110.437 116.781 111.364 118.301 112.871 119.446L114.081 117.853ZM112.089 110.656C112.497 109.341 113.24 108.146 114.227 107.268L112.898 105.773C111.616 106.914 110.685 108.431 110.179 110.062L112.089 110.656ZM117.775 105.77C118.391 105.734 119.053 105.792 119.757 105.968L120.243 104.028C119.35 103.805 118.485 103.725 117.658 103.774L117.775 105.77ZM119.757 105.968C120.421 106.134 121.108 106.295 121.816 106.448L122.24 104.494C121.552 104.345 120.886 104.189 120.243 104.028L119.757 105.968ZM125.975 107.225C127.328 107.439 128.73 107.624 130.17 107.772L130.375 105.783C128.972 105.638 127.605 105.458 126.287 105.25L125.975 107.225ZM134.39 108.091C135.783 108.158 137.198 108.187 138.624 108.171L138.602 106.171C137.217 106.186 135.842 106.158 134.486 106.094L134.39 108.091ZM142.859 107.991C144.268 107.885 145.679 107.73 147.081 107.521L146.786 105.543C145.435 105.745 144.073 105.894 142.709 105.997L142.859 107.991ZM151.264 106.721C152.655 106.393 154.027 106.002 155.37 105.543L154.723 103.651C153.446 104.087 152.137 104.46 150.805 104.775L151.264 106.721ZM159.343 103.933C160.642 103.316 161.899 102.62 163.104 101.839L162.015 100.161C160.889 100.891 159.709 101.545 158.484 102.126L159.343 103.933ZM166.546 99.2305C167.616 98.2849 168.623 97.2503 169.554 96.1204L168.01 94.8487C167.148 95.8948 166.216 96.8537 165.222 97.7315L166.546 99.2305ZM172.031 92.5723C172.742 91.3606 173.379 90.0658 173.934 88.6836L172.077 87.9384C171.559 89.23 170.966 90.4355 170.306 91.5601L172.031 92.5723ZM175.26 84.606C175.603 83.2666 175.878 81.8597 176.081 80.3829L174.1 80.1101C173.907 81.5152 173.646 82.8476 173.323 84.1106L175.26 84.606ZM176.455 76.1512C176.485 75.4475 176.5 74.73 176.5 73.9984H174.5C174.5 74.7026 174.486 75.3921 174.457 76.067L176.455 76.1512Z",
      fill: "white"
    }), jsx("defs", {
      children: jsxs("filter", Object.assign({
        id: "filter0_d_3_1044",
        x: "123",
        y: "0.998047",
        width: "94",
        height: "94",
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
        }), jsx("feMorphology", {
          radius: "1",
          operator: "erode",
          in: "SourceAlpha",
          result: "effect1_dropShadow_3_1044"
        }), jsx("feOffset", {
          dy: "8"
        }), jsx("feGaussianBlur", {
          stdDeviation: "12"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.1 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3_1044"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_3_1044",
          result: "shape"
        })]
      }))
    })]
  }));
};

const BarCodeScanner = ({
  searchDisabled,
  autoFocused,
  onScan,
  isCodeValid
}) => {
  const [barcodeNumber, setBarcodeNumber] = useState('');
  const barcodeInputRef = useRef(null);
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  const printWhenMainClick = () => {
    barcodeInputRef.current && barcodeInputRef.current.focus();
  };
  const {
    startScan
  } = useScanner(printWhenMainClick);
  const clear = () => {
    if (isMounted.current) setBarcodeNumber("");
  };
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
      onScan(value).then(clear);
    }
  };
  const handleCameraClick = () => {
    if (startScan) {
      startScan(code => {
        setBarcodeNumber(code);
        !searchDisabled && onScan && onScan(code).then(clear);
      });
    }
  };
  const handleSearchCodeClick = () => {
    if (barcodeNumber && onScan) {
      onScan(barcodeNumber).then(clear);
    }
  };
  useEffect(() => {
    if (isMounted.current && autoFocused) {
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
        placeholder: "Escanea o ingresa c\u00F3digo",
        icon: "scan-outline",
        size: "l",
        onChange: e => handleChange(e.target.value),
        value: barcodeNumber,
        inputRef: barcodeInputRef,
        onKeyDown: evt => __awaiter(void 0, void 0, void 0, function* () {
          if (evt.key === 'Enter') {
            handleSearchCodeClick();
          }
        })
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

const ProductSearchCmp = _a => {
  var {
      searchByCode,
      searchByText
    } = _a;
    __rest(_a, ["searchByCode", "searchByText"]);
  useState();
  useRef();
  return jsx(Fragment, {
    children: jsx(Ramen.XBox, Object.assign({
      orientation: 'vertical',
      verticalAlign: 'between',
      height: 'full'
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: 'vertical',
        gap: 'm'
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          weight: 'bold',
          fontSize: 8
        }, {
          children: "Consultor de productos"
        })), jsx(BarCodeScanner, {
          searchDisabled: false,
          isCodeValid: code => true,
          onScan: searchByCode
        })]
      }))
    }))
  });
};

var global$3 = global$j;
var fails$2 = fails$m;
var uncurryThis$4 = functionUncurryThis;
var toString$3 = toString$a;
var trim$1 = stringTrim.trim;
var whitespaces$1 = whitespaces$4;

var $parseInt$1 = global$3.parseInt;
var Symbol$2 = global$3.Symbol;
var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$4(hex.exec);
var FORCED$2 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$1 && !fails$2(function () { $parseInt$1(Object(ITERATOR$1)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
  var S = trim$1(toString$3(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$3 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$3({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});

var global$2 = global$j;
var fails$1 = fails$m;
var uncurryThis$3 = functionUncurryThis;
var toString$2 = toString$a;
var trim = stringTrim.trim;
var whitespaces = whitespaces$4;

var charAt = uncurryThis$3(''.charAt);
var $parseFloat$1 = global$2.parseFloat;
var Symbol$1 = global$2.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var FORCED$1 = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails$1(function () { $parseFloat$1(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED$1 ? function parseFloat(string) {
  var trimmedString = trim(toString$2(string));
  var result = $parseFloat$1(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat$1;

var $$2 = _export;
var $parseFloat = numberParseFloat;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$$2({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});

var $$1 = _export;
var DESCRIPTORS = descriptors;
var global$1 = global$j;
var uncurryThis$2 = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable = isCallable$j;
var isPrototypeOf = objectIsPrototypeOf;
var toString$1 = toString$a;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
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
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$1(arguments[0]);
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
  var thisSymbolValue = uncurryThis$2(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$2(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis$2(''.replace);
  var stringSlice$1 = uncurryThis$2(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$1(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$1({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

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

var uncurryThis$1 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$1(1.0.valueOf);

var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
var toString = toString$a;
var requireObjectCoercible = requireObjectCoercible$7;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n === Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $ = _export;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$m;

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

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

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
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
    if (number !== number) return 'NaN';
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
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

const toCurrency = value => {
  if (!value) {
    return '$0';
  }
  const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  return '$' + formatted.substring(0, formatted.length - 3);
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
        fontSize: 10,
        weight: "normal"
      }, {
        children: label
      })), jsxs(Ramen.XText, Object.assign({
        colorThone: "darkest",
        fontSize: 10,
        weight: "normal",
        textOverflow: "break-word",
        textAlign: 'right'
      }, {
        children: [' ', value]
      }))]
    }));
  } else {
    return null;
  }
};

class NumberFormatter {
  toNumber(value) {
    if (!value) {
      return '0';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return formatted.substring(0, formatted.length - 3);
  }
  toDoubleNumber(value) {
    if (!value) {
      return '0';
    }
    const formattedNumber = value.toFixed(1);
    const parts = formattedNumber.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const decimalPart = parts[1].replace('.', ',');
    return `${integerPart}${decimalPart === '0' ? '' : `,${decimalPart}`}`;
  }
  roundNumber(value) {
    if (!value) {
      return '0';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').replace('.00', '');
    return formatted;
  }
  toCurrency(value, addCurrencySymbol = true) {
    const currencySymbol = addCurrencySymbol ? '$' : '';
    if (!value) {
      return `${currencySymbol}0`;
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return `${currencySymbol}${formatted.substring(0, formatted.length - 3)}`;
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
    size: 'xl',
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

/* eslint-disable react/style-prop-object */
const Image = () => {
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

const buildTxt = (data, separator = '/') => {
  if (data && data.length > 0) {
    return data.filter(str => str && str.length > 0).join(` ${separator} `).trim();
  }
  return '';
};
const getRecepmerDate = (date, hour) => {
  const fulldate = `${date} ${hour}`;
  const recepmerDate = moment(fulldate, 'YYYYMMDD HHmmSS');
  if (recepmerDate.isValid()) {
    return moment(recepmerDate).format(`DD MMM YYYY · HH:MM`) + ' hrs';
  }
  return '-';
};
const formatLastsWeekSales = data => {
  let value = undefined;
  if ((data === null || data === void 0 ? void 0 : data.units) && (data === null || data === void 0 ? void 0 : data.amount)) {
    value = `${NumberFormatter$1.toNumber(data.units)}`;
    if (data.um) {
      value = `${value} ${data === null || data === void 0 ? void 0 : data.um}`;
    }
    value = `${value} / ${NumberFormatter$1.toCurrency(data.amount).substring(1)}`;
    if (data.code === '15') {
      value = `${value} CLP`;
    } else {
      value = `${value} CLP Neto`;
    }
  }
  return value;
};
const formatDate = date => {
  const momentDate = moment(date);
  if (momentDate.isValid()) {
    return momentDate.utc().format(`DD MMM YYYY`);
  } else {
    return '-';
  }
};
const ProductDetailCmp = _a => {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  var {
      product,
      imgUrlResolver,
      mdhCenterUrl
    } = _a;
    __rest(_a, ["product", "imgUrlResolver", "mdhCenterUrl"]);
  console.log(product);
  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();
  const imageUrl = useMemo(() => imgUrlResolver(product.sku), [product, imgUrlResolver]);
  const location = product.locationHall && product.locationRack ? `${product.locationHall} / ${product.locationRack}` : product.locationHall ? product.locationHall : product.locationRack ? product.locationRack : undefined;
  const lastFourWeeksSales = formatLastsWeekSales({
    units: (product === null || product === void 0 ? void 0 : product.unitSoldLastWeek) ? parseInt(product.unitSoldLastWeek) : 0,
    um: product === null || product === void 0 ? void 0 : product.um,
    amount: (product === null || product === void 0 ? void 0 : product.costSoldLastWeek) ? parseFloat(product === null || product === void 0 ? void 0 : product.costSoldLastWeek) : undefined
  });
  return jsxs(Ramen.XBox, Object.assign({
    gap: 's'
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
          src: imageUrl,
          showExpandIcon: false
        })
      })), jsx(Ramen.XBox, Object.assign({
        gap: "xxs",
        width: 'full'
      }, {
        children: jsx(Ramen.XText, Object.assign({
          weight: "bold",
          lineHeight: "title",
          fontSize: 11
        }, {
          children: product.description
        }))
      }))]
    })), jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      width: "full",
      gap: "s"
    }, {
      children: [jsx(InfoBox, {
        label: "Precio",
        value: `${toCurrency(product.price)}`
      }), jsx(InfoBox, {
        label: "Stock f\u00EDsico",
        value: `${product.price}`
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
        label: "Stock disponible",
        value: `${product.availableStock} ${product.um ? product.um.toUpperCase() : ''}`
      }), jsx(InfoRawRow, {
        label: "EAN",
        value: `${product.ean}`
      }), jsx(InfoRawRow, {
        label: "C\u00F3digo SAP",
        value: `${product.sku}`
      }), jsx(InfoRawRow, {
        label: "Unidad de medida",
        value: product.um ? product.um.toUpperCase() : ''
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          colorThone: "medium",
          fontSize: 10,
          weight: "normal"
        }, {
          children: "Ventas \u00FAlt. 4 sem"
        })), jsxs(Ramen.XText, Object.assign({
          colorThone: "darkest",
          fontSize: 10,
          weight: "normal",
          textOverflow: "break-word"
        }, {
          children: [' ', lastFourWeeksSales ? jsx(Ramen.XButton, {
            text: `${lastFourWeeksSales}`,
            onClick: () => {
              console.log('TODO');
            },
            type: 'clear'
          }) : ' - ']
        }))]
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          colorThone: "medium",
          fontSize: 10,
          weight: "normal"
        }, {
          children: "Atributo surtido"
        })), jsxs(Ramen.XBox, Object.assign({
          orientation: 'vertical',
          verticalAlign: 'end'
        }, {
          children: [jsxs(Ramen.XText, Object.assign({
            colorThone: "darkest",
            fontSize: 10,
            weight: "normal",
            textOverflow: "break-word",
            textAlign: 'right'
          }, {
            children: [' ', `${buildTxt(['Tienda', buildTxt([product === null || product === void 0 ? void 0 : product.assortment.storeCode, product === null || product === void 0 ? void 0 : product.assortment.storeTxt], '-'), '/'], '')}`]
          })), jsxs(Ramen.XText, Object.assign({
            colorThone: "darkest",
            fontSize: 10,
            weight: "normal",
            textOverflow: "break-word",
            textAlign: 'right'
          }, {
            children: [' ', `${buildTxt(['Cadena', buildTxt([product === null || product === void 0 ? void 0 : product.assortment.networkCode, product === null || product === void 0 ? void 0 : product.assortment.networkTxt], '-')], '')}`]
          }))]
        }))]
      })), jsx(InfoRawRow, {
        label: "Sustancia peligrosa",
        value: (_b = product.dangerousSubstance) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()
      }), jsx(InfoRawRow, {
        label: "Marca",
        value: (_c = product.trademark) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()
      }), jsx(InfoRawRow, {
        label: "Secci\u00F3n",
        value: buildTxt([product === null || product === void 0 ? void 0 : product.section, (_d = product === null || product === void 0 ? void 0 : product.sectionDescription) === null || _d === void 0 ? void 0 : _d.toLowerCase()], '-')
      }), jsx(InfoRawRow, {
        label: "Rubro",
        value: (_e = product === null || product === void 0 ? void 0 : product.sectionGroup) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase()
      }), jsx(InfoRawRow, {
        label: "Subrubro",
        value: (_f = product === null || product === void 0 ? void 0 : product.subrubro) === null || _f === void 0 ? void 0 : _f.toLowerCase()
      }), jsx(InfoRawRow, {
        label: "Proveedor",
        value: buildTxt([product === null || product === void 0 ? void 0 : product.supplier.code, product === null || product === void 0 ? void 0 : product.supplier.name], '-')
      }), jsx(InfoRawRow, {
        label: "Peso",
        value: product === null || product === void 0 ? void 0 : product.weight.toLowerCase()
      })]
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XBox, Object.assign({
      width: 'full'
    }, {
      children: jsx(Ramen.XCard, Object.assign({
        size: "l",
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "m",
          verticalAlign: "between",
          horizontalAlign: "between",
          width: 'full'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            colorThone: 'medium',
            fontSize: 11
          }, {
            children: "\u00DAltima recepci\u00F3n"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            weight: "bold"
          }, {
            children: getRecepmerDate(product === null || product === void 0 ? void 0 : product.recepmerDate, product === null || product === void 0 ? void 0 : product.recepmerHour)
          }))]
        }))
      }))
    })), jsx(Ramen.XBox, Object.assign({
      width: 'full'
    }, {
      children: jsx(Ramen.XCard, Object.assign({
        size: "l",
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "m",
          verticalAlign: "between",
          horizontalAlign: "between",
          width: 'full'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            colorThone: 'medium',
            fontSize: 11
          }, {
            children: "Pr\u00F3ximo abastecimiento"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            weight: "bold"
          }, {
            children: formatDate(product === null || product === void 0 ? void 0 : product.nextSupplyDate)
          }))]
        }))
      }))
    })), jsx(Ramen.XBox, Object.assign({
      width: 'full'
    }, {
      children: jsx(Ramen.XCard, Object.assign({
        size: "l",
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          gap: "m",
          verticalAlign: "between",
          horizontalAlign: "between",
          width: 'full'
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            colorThone: 'medium',
            fontSize: 11
          }, {
            children: "Cantidad pr\u00F3ximo abastecimiento"
          })), jsx(Ramen.XText, Object.assign({
            fontSize: 10,
            weight: "bold"
          }, {
            children: !!(product === null || product === void 0 ? void 0 : product.nextCantProxAbastDesp) && `${NumberFormatter$1.toNumber(parseFloat(`${product === null || product === void 0 ? void 0 : product.nextCantProxAbastDesp}`))} ${product === null || product === void 0 ? void 0 : product.um}` || '-'
          }))]
        }))
      }))
    })), jsx(Ramen.XBox, Object.assign({
      width: 'full'
    }, {
      children: jsx(Ramen.XCard, Object.assign({
        size: "l",
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: 'vertical',
          width: 'full'
        }, {
          children: [jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "m",
            verticalAlign: "between",
            horizontalAlign: "between",
            width: 'full'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              fontSize: 10,
              weight: "bold"
            }, {
              children: "Pedido en transito"
            })), jsx(Ramen.XText, Object.assign({
              fontSize: 10,
              weight: "bold"
            }, {
              children: ((_g = product === null || product === void 0 ? void 0 : product.nextSupply) === null || _g === void 0 ? void 0 : _g.orderNumber) ? (_h = product === null || product === void 0 ? void 0 : product.nextSupply) === null || _h === void 0 ? void 0 : _h.orderNumber : '-'
            }))]
          })), jsxs(Ramen.XBox, Object.assign({
            orientation: 'horizontal',
            width: 'full',
            horizontalAlign: 'between'
          }, {
            children: [jsxs(Ramen.XBox, Object.assign({
              orientation: 'vertical'
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                colorThone: 'medium',
                fontSize: 11
              }, {
                children: "UN. solicitadas"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                weight: "bold"
              }, {
                children: `${NumberFormatter$1.toNumber(parseFloat(`${(_j = product === null || product === void 0 ? void 0 : product.nextSupply) === null || _j === void 0 ? void 0 : _j.quantify}`))}`
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              orientation: 'vertical',
              horizontalAlign: 'end'
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                colorThone: 'medium',
                fontSize: 11
              }, {
                children: "Fecha de entrega"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                weight: "bold"
              }, {
                children: ` ${((_k = product === null || product === void 0 ? void 0 : product.nextSupply) === null || _k === void 0 ? void 0 : _k.date) ? moment((_l = product === null || product === void 0 ? void 0 : product.nextSupply) === null || _l === void 0 ? void 0 : _l.date).format('ddd DD MMM YYYY') : '-'}`
              }))]
            }))]
          }))]
        }))
      }))
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XButton, {
      icon: 'arrow-right-outline',
      iconPosition: 'end',
      text: 'Disponibilidad de centros',
      onClick: () => setOpenModal(true)
    }), jsx(ConfirmModal, {
      visible: openModal,
      title: "¿Deseas abandonar el proceso?",
      subTitle: "Serás redirigido a otra sección y perderás todo el progreso",
      btnActionText: "Confirmar",
      onClose: () => setOpenModal(false),
      onConfirm: () => {
        history.replace(`${mdhCenterUrl}/${product.sku}`);
      },
      ImageCmp: jsx(Image, {})
    })]
  }));
};

// TODO: Pass as module param
const imgUrl = sku => {
  if (sku) {
    return `https://media.easy.cl/is/image/EasySA/${sku}`;
  } else {
    return 'assets/dummy-img.svg';
  }
};
const ProductSearchModal = _a => {
  var {
      visible,
      searchByCode,
      searchByText,
      mdhCenterUrl
    } = _a,
    props = __rest(_a, ["visible", "searchByCode", "searchByText", "mdhCenterUrl"]);
  const [mode, setMode] = useState('SEARCH');
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      Ramen.Api.loading.show({
        text: 'Buscando ...'
      });
    } else {
      Ramen.Api.loading.hide();
    }
  }, [loading]);
  useEffect(() => {
    if (product) {
      setMode('PRODUCT_DETAIL');
    } else {
      setMode('SEARCH');
    }
  }, [product]);
  const onClose = () => {
    setProduct(undefined);
    props.onClose();
  };
  const showWarnMsg = msg => Ramen.Api.snackbar.warning({
    text: msg || 'Ha ocurrido un error. Intente luego.',
    closable: true,
    placement: 'bottom'
  });
  const onSearchByCode = code => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d;
    console.log('PCode', code);
    setLoading(true);
    try {
      const _product = yield searchByCode(code);
      setProduct(_product);
    } catch (error) {
      Ramen.Api.loading.hide();
      if (((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === 400) {
        showWarnMsg((_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message);
      } else {
        showWarnMsg(undefined);
      }
    } finally {
      setLoading(false);
    }
  });
  const renderMode = mode => {
    switch (mode) {
      case 'SEARCH':
        return jsx(ProductSearchCmp, {
          searchByCode: onSearchByCode,
          searchByText: searchByText
        });
      case 'PRODUCT_DETAIL':
        if (product) {
          return jsx(ProductDetailCmp, {
            product: product,
            imgUrlResolver: imgUrl,
            mdhCenterUrl: mdhCenterUrl
          });
        } else {
          return null;
        }
      default:
        return null;
    }
  };
  return jsx(Ramen.XModal, {
    visible: visible,
    onClose: onClose,
    children: renderMode(mode)
  });
};

var ModeType;
(function (ModeType) {
  ModeType[ModeType["Onboarding"] = 0] = "Onboarding";
  ModeType[ModeType["FloatingButton"] = 1] = "FloatingButton";
})(ModeType || (ModeType = {}));
const FloatingButton = _a => {
  var {
      disabled,
      showOnboarding,
      onOnboardingEnd,
      onPositionChange,
      searchByCode,
      searchByText,
      mdhCenterUrl
    } = _a,
    props = __rest(_a, ["disabled", "showOnboarding", "onOnboardingEnd", "onPositionChange", "searchByCode", "searchByText", "mdhCenterUrl"]);
  const [mode, setMode] = useState(ModeType.FloatingButton);
  const [showedOnboarding, setShowedOnboarding] = useState(!showOnboarding);
  const [position, setPosition] = useState(props.position || {
    x: window.innerWidth - 48 - (window.innerWidth - 48) / 20,
    y: window.innerHeight - 48 - (window.innerHeight - 48) / 4 // set initial x position about 10% right
  });

  const [lastPosition, setLastPosition] = useState(position);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const handleDrag = (e, ui) => {
    const x = Math.round(ui.x);
    const y = Math.round(ui.y);
    setPosition({
      x,
      y
    });
  };
  const handleOnStart = () => {
    setLastPosition(position);
  };
  const handleOnStop = () => {
    if (position.x === lastPosition.x && position.y === lastPosition.y) {
      handleFloatingButtonClick();
    }
    setLastPosition(position);
    onPositionChange === null || onPositionChange === void 0 ? void 0 : onPositionChange(position);
  };
  const renderOnboarding = () => {
    switch (onboardingStep) {
      case 1:
        return jsxs("div", Object.assign({
          style: {
            background: '#000000e0',
            zIndex: 50000,
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }
        }, {
          children: [jsx(Image$2, {}), jsx("div", Object.assign({
            style: {
              position: 'absolute',
              height: '100%',
              width: '100%'
            }
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "full",
              height: "full",
              horizontalAlign: "center",
              verticalAlign: "center",
              padding: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 8,
                lineHeight: "title",
                weight: "bold",
                textAlign: "center",
                colorThone: "lightest"
              }, {
                children: "Consultor de productos"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                textAlign: "center",
                colorThone: "lightest"
              }, {
                children: "Presiona el icono de lupa para realizar consultas sobre productos que necesites revisar"
              })), jsx(Ramen.XVSpace, {
                size: "xl"
              }), jsx(Ramen.XButton, {
                onClick: () => {
                  setOnboardingStep(onboardingStep + 1);
                },
                text: "Ok, entendido",
                type: "outline"
              })]
            }))
          }))]
        }));
      case 2:
        return jsxs("div", Object.assign({
          style: {
            background: '#000000e0',
            zIndex: 50000,
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'flex-start'
          }
        }, {
          children: [jsx("div", Object.assign({
            style: {
              marginTop: '20%'
            }
          }, {
            children: jsx(Image$1, {})
          })), jsx("div", Object.assign({
            style: {
              position: 'absolute',
              height: '100%',
              width: '100%'
            }
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "full",
              height: "full",
              horizontalAlign: "center",
              verticalAlign: "center",
              padding: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 8,
                lineHeight: "title",
                weight: "bold",
                textAlign: "center",
                colorThone: "lightest"
              }, {
                children: "Ubicar bot\u00F3n de consultor"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 10,
                textAlign: "center",
                colorThone: "lightest"
              }, {
                children: "Puedes mover el bot\u00F3n del consultor para ubicarlo en cualquier lugar de la pantalla"
              })), jsx(Ramen.XVSpace, {
                size: "xl"
              }), jsx(Ramen.XButton, {
                onClick: () => {
                  setOnboardingStep(1);
                  setShowedOnboarding(true);
                  onOnboardingEnd === null || onOnboardingEnd === void 0 ? void 0 : onOnboardingEnd();
                  setMode(ModeType.FloatingButton);
                },
                text: "Ok, entendido",
                type: "outline"
              })]
            }))
          }))]
        }));
      default:
        return null;
    }
  };
  const FloatingButton = () => {
    return jsxs(Fragment, {
      children: [jsx(Draggable, Object.assign({
        onDrag: handleDrag,
        bounds: {
          left: 0,
          top: 0,
          right: window.innerWidth - 48,
          bottom: window.innerHeight - 48
        },
        position: position,
        disabled: disabled,
        onStart: handleOnStart,
        onStop: handleOnStop
      }, {
        children: jsx("div", Object.assign({
          className: "search-floating-button",
          style: {
            position: 'absolute',
            zIndex: 999
          }
        }, {
          children: jsx(Ramen.XButtonIcon, {
            icon: "search-outline",
            state: "success",
            disabled: disabled
          })
        }))
      })), jsx(ProductSearchModal, {
        visible: modalOpen,
        onClose: () => setModalOpen(false),
        searchByCode: searchByCode,
        searchByText: searchByText,
        mdhCenterUrl: mdhCenterUrl
      })]
    });
  };
  const handleFloatingButtonClick = () => {
    if (showOnboarding && !showedOnboarding) {
      setTimeout(() => {
        setMode(ModeType.Onboarding);
      }, 10);
    } else {
      setModalOpen(true);
    }
  };
  const renders = new Map();
  renders.set(ModeType.Onboarding, renderOnboarding);
  renders.set(ModeType.FloatingButton, FloatingButton);
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
};

class HelloWorldModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/home',
        page: HomePage
      }, {
        path: '/about',
        page: AboutPage
      }],
      override
    });
  }
}
HelloWorldModule.route = '/product-searcher';

export { FloatingButton, HelloWorldModule as default };
