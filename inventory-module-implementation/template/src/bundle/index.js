import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { IonRouterOutlet, IonCard, IonItem, IonThumbnail, IonPage, IonModal, IonHeader, IonToolbar, IonContent, IonImg, IonInput, IonButtons, IonButton, IonIcon, IonCardHeader, IonCardContent } from '@ionic/react';
import * as React from 'react';
import React__default, { Fragment, useEffect, useRef, useState, createContext, useContext } from 'react';
import { Route } from 'react-router-dom';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$y = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$x = fails$y;

var functionBindNative$1 = !fails$x(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative$1;

var FunctionPrototype$4 = Function.prototype;
var call$j = FunctionPrototype$4.call;
var uncurryThisWithBind$1 = NATIVE_BIND$4 && FunctionPrototype$4.bind.bind(call$j, call$j);

var functionUncurryThis$1 = NATIVE_BIND$4 ? uncurryThisWithBind$1 : function (fn) {
  return function () {
    return call$j.apply(fn, arguments);
  };
};

var uncurryThis$u = functionUncurryThis$1;

var toString$d = uncurryThis$u({}.toString);
var stringSlice$9 = uncurryThis$u(''.slice);

var classofRaw$4 = function (it) {
  return stringSlice$9(toString$d(it), 8, -1);
};

var uncurryThis$t = functionUncurryThis$1;
var fails$w = fails$y;
var classof$8 = classofRaw$4;

var $Object$9 = Object;
var split$1 = uncurryThis$t(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject$1 = fails$w(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$9('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split$1(it, '') : $Object$9(it);
} : $Object$9;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$f = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$a = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$f("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject$1;
var requireObjectCoercible$9 = requireObjectCoercible$a;

var toIndexedObject$b = function (it) {
  return IndexedObject$2(requireObjectCoercible$9(it));
};

var check$1 = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$u =
  // eslint-disable-next-line es/no-global-this -- safe
  check$1(typeof globalThis == 'object' && globalThis) ||
  check$1(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check$1(typeof self == 'object' && self) ||
  check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal$1 || Function('return this')();

var shared$9 = {exports: {}};

var global$t = global$u;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$c = Object.defineProperty;

var defineGlobalProperty$7 = function (key, value) {
  try {
    defineProperty$c(global$t, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$t[key] = value;
  } return value;
};

var global$s = global$u;
var defineGlobalProperty$6 = defineGlobalProperty$7;

var SHARED$1 = '__core-js_shared__';
var store$7 = global$s[SHARED$1] || defineGlobalProperty$6(SHARED$1, {});

var sharedStore$1 = store$7;

var store$6 = sharedStore$1;

(shared$9.exports = function (key, value) {
  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.30.2',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$8 = requireObjectCoercible$a;

var $Object$8 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$7 = function (argument) {
  return $Object$8(requireObjectCoercible$8(argument));
};

var uncurryThis$s = functionUncurryThis$1;
var toObject$6 = toObject$7;

var hasOwnProperty$2 = uncurryThis$s({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$2(toObject$6(it), key);
};

var uncurryThis$r = functionUncurryThis$1;

var id$1 = 0;
var postfix$1 = Math.random();
var toString$c = uncurryThis$r(1.0.toString);

var uid$5 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id$1 + postfix$1, 36);
};

var engineUserAgent$1 = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$r = global$u;
var userAgent$1 = engineUserAgent$1;

var process$1 = global$r.process;
var Deno$1 = global$r.Deno;
var versions$1 = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$1;

if (v8$1) {
  match$1 = v8$1.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version$1 && userAgent$1) {
  match$1 = userAgent$1.match(/Edge\/(\d+)/);
  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$1.match(/Chrome\/(\d+)/);
    if (match$1) version$1 = +match$1[1];
  }
}

var engineV8Version$1 = version$1;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version$1;
var fails$v = fails$y;
var global$q = global$u;

var $String$a = global$q.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection$1 = !!Object.getOwnPropertySymbols && !fails$v(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$a(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$3 = symbolConstructorDetection$1;

var useSymbolAsUid$1 = NATIVE_SYMBOL$3
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$p = global$u;
var shared$8 = shared$9.exports;
var hasOwn$j = hasOwnProperty_1$1;
var uid$4 = uid$5;
var NATIVE_SYMBOL$2 = symbolConstructorDetection$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;

var Symbol$5 = global$p.Symbol;
var WellKnownSymbolsStore$1 = shared$8('wks');
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$3 ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$4;

var wellKnownSymbol$o = function (name) {
  if (!hasOwn$j(WellKnownSymbolsStore$1, name)) {
    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$2 && hasOwn$j(Symbol$5, name)
      ? Symbol$5[name]
      : createWellKnownSymbol$1('Symbol.' + name);
  } return WellKnownSymbolsStore$1[name];
};

var documentAll$5 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA$1 = typeof documentAll$5 == 'undefined' && documentAll$5 !== undefined;

var documentAll_1$1 = {
  all: documentAll$5,
  IS_HTMLDDA: IS_HTMLDDA$1
};

var $documentAll$3 = documentAll_1$1;

var documentAll$4 = $documentAll$3.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$y = $documentAll$3.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$4;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$x = isCallable$y;
var $documentAll$2 = documentAll_1$1;

var documentAll$3 = $documentAll$2.all;

var isObject$k = $documentAll$2.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$x(it) || it === documentAll$3;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$x(it);
};

var isObject$j = isObject$k;

var $String$9 = String;
var $TypeError$e = TypeError;

// `Assert: Type(argument) is Object`
var anObject$h = function (argument) {
  if (isObject$j(argument)) return argument;
  throw $TypeError$e($String$9(argument) + ' is not an object');
};

var objectDefineProperties$1 = {};

var fails$u = fails$y;

// Detect IE8's incomplete defineProperty implementation
var descriptors$1 = !fails$u(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$k = descriptors$1;
var fails$t = fails$y;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug$1 = DESCRIPTORS$k && fails$t(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty$1 = {};

var global$o = global$u;
var isObject$i = isObject$k;

var document$2 = global$o.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$3 = isObject$i(document$2) && isObject$i(document$2.createElement);

var documentCreateElement$5 = function (it) {
  return EXISTS$3 ? document$2.createElement(it) : {};
};

var DESCRIPTORS$j = descriptors$1;
var fails$s = fails$y;
var createElement$1 = documentCreateElement$5;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine$1 = !DESCRIPTORS$j && !fails$s(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$3 = functionBindNative$1;

var call$i = Function.prototype.call;

var functionCall$1 = NATIVE_BIND$3 ? call$i.bind(call$i) : function () {
  return call$i.apply(call$i, arguments);
};

var global$n = global$u;
var isCallable$w = isCallable$y;

var aFunction$1 = function (argument) {
  return isCallable$w(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(global$n[namespace]) : global$n[namespace] && global$n[namespace][method];
};

var uncurryThis$q = functionUncurryThis$1;

var objectIsPrototypeOf$1 = uncurryThis$q({}.isPrototypeOf);

var getBuiltIn$7 = getBuiltIn$8;
var isCallable$v = isCallable$y;
var isPrototypeOf$3 = objectIsPrototypeOf$1;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;

var $Object$7 = Object;

var isSymbol$7 = USE_SYMBOL_AS_UID$2 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$v($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$7(it));
};

var $String$8 = String;

var tryToString$3 = function (argument) {
  try {
    return $String$8(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$u = isCallable$y;
var tryToString$2 = tryToString$3;

var $TypeError$d = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$5 = function (argument) {
  if (isCallable$u(argument)) return argument;
  throw $TypeError$d(tryToString$2(argument) + ' is not a function');
};

var aCallable$4 = aCallable$5;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$4(func);
};

var call$h = functionCall$1;
var isCallable$t = isCallable$y;
var isObject$h = isObject$k;

var $TypeError$c = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$3 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$t(fn = input.toString) && !isObject$h(val = call$h(fn, input))) return val;
  if (isCallable$t(fn = input.valueOf) && !isObject$h(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$t(fn = input.toString) && !isObject$h(val = call$h(fn, input))) return val;
  throw $TypeError$c("Can't convert object to primitive value");
};

var call$g = functionCall$1;
var isObject$g = isObject$k;
var isSymbol$6 = isSymbol$7;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
var wellKnownSymbol$n = wellKnownSymbol$o;

var $TypeError$b = TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$n('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$3 = function (input, pref) {
  if (!isObject$g(input) || isSymbol$6(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$g(result) || isSymbol$6(result)) return result;
    throw $TypeError$b("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$2(input, pref);
};

var toPrimitive$2 = toPrimitive$3;
var isSymbol$5 = isSymbol$7;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$5 = function (argument) {
  var key = toPrimitive$2(argument, 'string');
  return isSymbol$5(key) ? key : key + '';
};

var DESCRIPTORS$i = descriptors$1;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
var V8_PROTOTYPE_DEFINE_BUG$3 = v8PrototypeDefineBug$1;
var anObject$g = anObject$h;
var toPropertyKey$4 = toPropertyKey$5;

var $TypeError$a = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
var ENUMERABLE$1 = 'enumerable';
var CONFIGURABLE$3 = 'configurable';
var WRITABLE$1 = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty$1.f = DESCRIPTORS$i ? V8_PROTOTYPE_DEFINE_BUG$3 ? function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$4(P);
  anObject$g(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
    var current = $getOwnPropertyDescriptor$3(O, P);
    if (current && current[WRITABLE$1]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$3 in Attributes ? Attributes[CONFIGURABLE$3] : current[CONFIGURABLE$3],
        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
        writable: false
      };
    }
  } return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$4(P);
  anObject$g(Attributes);
  if (IE8_DOM_DEFINE$3) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$a('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil$1 = Math.ceil;
var floor$2 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc$1 = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$2 : ceil$1)(n);
};

var trunc$1 = mathTrunc$1;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$7 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc$1(number);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;

var max$2 = Math.max;
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$6(index);
  return integer < 0 ? max$2(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$5 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$5(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$4 = toLength$5;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$3 = function (obj) {
  return toLength$4(obj.length);
};

var toIndexedObject$a = toIndexedObject$b;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$3;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$a($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
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

var arrayIncludes$1 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var hiddenKeys$9 = {};

var uncurryThis$p = functionUncurryThis$1;
var hasOwn$i = hasOwnProperty_1$1;
var toIndexedObject$9 = toIndexedObject$b;
var indexOf$3 = arrayIncludes$1.indexOf;
var hiddenKeys$8 = hiddenKeys$9;

var push$2 = uncurryThis$p([].push);

var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$9(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$i(hiddenKeys$8, key) && hasOwn$i(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$i(O, key = names[i++])) {
    ~indexOf$3(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$7 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$3 = objectKeysInternal$1;
var enumBugKeys$6 = enumBugKeys$7;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$4 = Object.keys || function keys(O) {
  return internalObjectKeys$3(O, enumBugKeys$6);
};

var DESCRIPTORS$h = descriptors$1;
var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
var definePropertyModule$7 = objectDefineProperty$1;
var anObject$f = anObject$h;
var toIndexedObject$8 = toIndexedObject$b;
var objectKeys$3 = objectKeys$4;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties$1.f = DESCRIPTORS$h && !V8_PROTOTYPE_DEFINE_BUG$2 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$f(O);
  var props = toIndexedObject$8(Properties);
  var keys = objectKeys$3(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$7.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$6 = getBuiltIn$8;

var html$3 = getBuiltIn$6('document', 'documentElement');

var shared$7 = shared$9.exports;
var uid$3 = uid$5;

var keys$2 = shared$7('keys');

var sharedKey$7 = function (key) {
  return keys$2[key] || (keys$2[key] = uid$3(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$e = anObject$h;
var definePropertiesModule$1 = objectDefineProperties$1;
var enumBugKeys$5 = enumBugKeys$7;
var hiddenKeys$7 = hiddenKeys$9;
var html$2 = html$3;
var documentCreateElement$4 = documentCreateElement$5;
var sharedKey$6 = sharedKey$7;

var GT$1 = '>';
var LT$1 = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT$1 = 'script';
var IE_PROTO$3 = sharedKey$6('IE_PROTO');

var EmptyConstructor$1 = function () { /* empty */ };

var scriptTag$1 = function (content) {
  return LT$1 + SCRIPT$1 + GT$1 + content + LT$1 + '/' + SCRIPT$1 + GT$1;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX$1 = function (activeXDocument) {
  activeXDocument.write(scriptTag$1(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame$1 = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$4('iframe');
  var JS = 'java' + SCRIPT$1 + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$2.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag$1('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument$1;
var NullProtoObject$1 = function () {
  try {
    activeXDocument$1 = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject$1 = typeof document != 'undefined'
    ? document.domain && activeXDocument$1
      ? NullProtoObjectViaActiveX$1(activeXDocument$1) // old IE
      : NullProtoObjectViaIFrame$1()
    : NullProtoObjectViaActiveX$1(activeXDocument$1); // WSH
  var length = enumBugKeys$5.length;
  while (length--) delete NullProtoObject$1[PROTOTYPE$1][enumBugKeys$5[length]];
  return NullProtoObject$1();
};

hiddenKeys$7[IE_PROTO$3] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate$1 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor$1[PROTOTYPE$1] = anObject$e(O);
    result = new EmptyConstructor$1();
    EmptyConstructor$1[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$3] = O;
  } else result = NullProtoObject$1();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var wellKnownSymbol$m = wellKnownSymbol$o;
var create$5 = objectCreate$1;
var defineProperty$b = objectDefineProperty$1.f;

var UNSCOPABLES$1 = wellKnownSymbol$m('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES$1] == undefined) {
  defineProperty$b(ArrayPrototype$1, UNSCOPABLES$1, {
    configurable: true,
    value: create$5(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$4 = function (key) {
  ArrayPrototype$1[UNSCOPABLES$1][key] = true;
};

var iterators$1 = {};

var global$m = global$u;
var isCallable$s = isCallable$y;

var WeakMap$3 = global$m.WeakMap;

var weakMapBasicDetection$1 = isCallable$s(WeakMap$3) && /native code/.test(String(WeakMap$3));

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$g = descriptors$1;
var definePropertyModule$6 = objectDefineProperty$1;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;

var createNonEnumerableProperty$b = DESCRIPTORS$g ? function (object, key, value) {
  return definePropertyModule$6.f(object, key, createPropertyDescriptor$6(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP$1 = weakMapBasicDetection$1;
var global$l = global$u;
var isObject$f = isObject$k;
var createNonEnumerableProperty$a = createNonEnumerableProperty$b;
var hasOwn$h = hasOwnProperty_1$1;
var shared$6 = sharedStore$1;
var sharedKey$5 = sharedKey$7;
var hiddenKeys$6 = hiddenKeys$9;

var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var TypeError$2 = global$l.TypeError;
var WeakMap$2 = global$l.WeakMap;
var set$1, get$1, has$1;

var enforce$1 = function (it) {
  return has$1(it) ? get$1(it) : set$1(it, {});
};

var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$f(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$6.state) {
  var store$5 = shared$6.state || (shared$6.state = new WeakMap$2());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$5.get = store$5.get;
  store$5.has = store$5.has;
  store$5.set = store$5.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store$5.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    store$5.set(it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return store$5.get(it) || {};
  };
  has$1 = function (it) {
    return store$5.has(it);
  };
} else {
  var STATE$1 = sharedKey$5('state');
  hiddenKeys$6[STATE$1] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$h(it, STATE$1)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$a(it, STATE$1, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$h(it, STATE$1) ? it[STATE$1] : {};
  };
  has$1 = function (it) {
    return hasOwn$h(it, STATE$1);
  };
}

var internalState$1 = {
  set: set$1,
  get: get$1,
  has: has$1,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var objectGetOwnPropertyDescriptor$1 = {};

var objectPropertyIsEnumerable$1 = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG$1 = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var DESCRIPTORS$f = descriptors$1;
var call$f = functionCall$1;
var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var toIndexedObject$7 = toIndexedObject$b;
var toPropertyKey$3 = toPropertyKey$5;
var hasOwn$g = hasOwnProperty_1$1;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$f ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$7(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$2) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$g(O, P)) return createPropertyDescriptor$5(!call$f(propertyIsEnumerableModule$2.f, O, P), O[P]);
};

var makeBuiltIn$6 = {exports: {}};

var DESCRIPTORS$e = descriptors$1;
var hasOwn$f = hasOwnProperty_1$1;

var FunctionPrototype$3 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor$1 = DESCRIPTORS$e && Object.getOwnPropertyDescriptor;

var EXISTS$2 = hasOwn$f(FunctionPrototype$3, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER$1 = EXISTS$2 && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$e || (DESCRIPTORS$e && getDescriptor$1(FunctionPrototype$3, 'name').configurable));

var functionName$1 = {
  EXISTS: EXISTS$2,
  PROPER: PROPER$1,
  CONFIGURABLE: CONFIGURABLE$2
};

var uncurryThis$o = functionUncurryThis$1;
var isCallable$r = isCallable$y;
var store$4 = sharedStore$1;

var functionToString$1 = uncurryThis$o(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$r(store$4.inspectSource)) {
  store$4.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$3 = store$4.inspectSource;

var uncurryThis$n = functionUncurryThis$1;
var fails$r = fails$y;
var isCallable$q = isCallable$y;
var hasOwn$e = hasOwnProperty_1$1;
var DESCRIPTORS$d = descriptors$1;
var CONFIGURABLE_FUNCTION_NAME$3 = functionName$1.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$3 = internalState$1;

var enforceInternalState$2 = InternalStateModule$3.enforce;
var getInternalState$5 = InternalStateModule$3.get;
var $String$7 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$a = Object.defineProperty;
var stringSlice$8 = uncurryThis$n(''.slice);
var replace$6 = uncurryThis$n(''.replace);
var join$1 = uncurryThis$n([].join);

var CONFIGURABLE_LENGTH$1 = DESCRIPTORS$d && !fails$r(function () {
  return defineProperty$a(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE$1 = String(String).split('String');

var makeBuiltIn$5 = makeBuiltIn$6.exports = function (value, name, options) {
  if (stringSlice$8($String$7(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$6($String$7(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$e(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$3 && value.name !== name)) {
    if (DESCRIPTORS$d) defineProperty$a(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH$1 && options && hasOwn$e(options, 'arity') && value.length !== options.arity) {
    defineProperty$a(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$e(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$d) defineProperty$a(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$2(value);
  if (!hasOwn$e(state, 'source')) {
    state.source = join$1(TEMPLATE$1, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$5(function toString() {
  return isCallable$q(this) && getInternalState$5(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$p = isCallable$y;
var definePropertyModule$5 = objectDefineProperty$1;
var makeBuiltIn$4 = makeBuiltIn$6.exports;
var defineGlobalProperty$5 = defineGlobalProperty$7;

var defineBuiltIn$a = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$p(value)) makeBuiltIn$4(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$5(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$5.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames$1 = {};

var internalObjectKeys$2 = objectKeysInternal$1;
var enumBugKeys$4 = enumBugKeys$7;

var hiddenKeys$5 = enumBugKeys$4.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$2(O, hiddenKeys$5);
};

var objectGetOwnPropertySymbols$1 = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

var getBuiltIn$5 = getBuiltIn$8;
var uncurryThis$m = functionUncurryThis$1;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols$1;
var anObject$d = anObject$h;

var concat$3 = uncurryThis$m([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$3 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$d(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
  return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$d = hasOwnProperty_1$1;
var ownKeys$2 = ownKeys$3;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$4 = objectDefineProperty$1;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys$2(source);
  var defineProperty = definePropertyModule$4.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$d(target, key) && !(exceptions && hasOwn$d(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$q = fails$y;
var isCallable$o = isCallable$y;

var replacement$1 = /#|\.prototype\./;

var isForced$4 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value == POLYFILL$1 ? true
    : value == NATIVE$1 ? false
    : isCallable$o(detection) ? fails$q(detection)
    : !!detection;
};

var normalize$1 = isForced$4.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};

var data$1 = isForced$4.data = {};
var NATIVE$1 = isForced$4.NATIVE = 'N';
var POLYFILL$1 = isForced$4.POLYFILL = 'P';

var isForced_1$1 = isForced$4;

var global$k = global$u;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$b;
var defineBuiltIn$9 = defineBuiltIn$a;
var defineGlobalProperty$4 = defineGlobalProperty$7;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$3 = isForced_1$1;

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
var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$k;
  } else if (STATIC) {
    target = global$k[TARGET] || defineGlobalProperty$4(TARGET, {});
  } else {
    target = (global$k[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$9(sourceProperty, 'sham', true);
    }
    defineBuiltIn$9(target, key, sourceProperty, options);
  }
};

var fails$p = fails$y;

var correctPrototypeGetter$1 = !fails$p(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$c = hasOwnProperty_1$1;
var isCallable$n = isCallable$y;
var toObject$5 = toObject$7;
var sharedKey$4 = sharedKey$7;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter$1;

var IE_PROTO$2 = sharedKey$4('IE_PROTO');
var $Object$6 = Object;
var ObjectPrototype$1 = $Object$6.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? $Object$6.getPrototypeOf : function (O) {
  var object = toObject$5(O);
  if (hasOwn$c(object, IE_PROTO$2)) return object[IE_PROTO$2];
  var constructor = object.constructor;
  if (isCallable$n(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$6 ? ObjectPrototype$1 : null;
};

var fails$o = fails$y;
var isCallable$m = isCallable$y;
var isObject$e = isObject$k;
var getPrototypeOf$3 = objectGetPrototypeOf$1;
var defineBuiltIn$8 = defineBuiltIn$a;
var wellKnownSymbol$l = wellKnownSymbol$o;

var ITERATOR$5 = wellKnownSymbol$l('iterator');
var BUGGY_SAFARI_ITERATORS$3 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$5, PrototypeOfArrayIteratorPrototype$1, arrayIterator$1;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator$1 = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator$1)) BUGGY_SAFARI_ITERATORS$3 = true;
  else {
    PrototypeOfArrayIteratorPrototype$1 = getPrototypeOf$3(getPrototypeOf$3(arrayIterator$1));
    if (PrototypeOfArrayIteratorPrototype$1 !== Object.prototype) IteratorPrototype$5 = PrototypeOfArrayIteratorPrototype$1;
  }
}

var NEW_ITERATOR_PROTOTYPE$1 = !isObject$e(IteratorPrototype$5) || fails$o(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$5[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE$1) IteratorPrototype$5 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$m(IteratorPrototype$5[ITERATOR$5])) {
  defineBuiltIn$8(IteratorPrototype$5, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore$1 = {
  IteratorPrototype: IteratorPrototype$5,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$3
};

var defineProperty$9 = objectDefineProperty$1.f;
var hasOwn$b = hasOwnProperty_1$1;
var wellKnownSymbol$k = wellKnownSymbol$o;

var TO_STRING_TAG$7 = wellKnownSymbol$k('toStringTag');

var setToStringTag$5 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$b(target, TO_STRING_TAG$7)) {
    defineProperty$9(target, TO_STRING_TAG$7, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$4 = iteratorsCore$1.IteratorPrototype;
var create$4 = objectCreate$1;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;
var setToStringTag$4 = setToStringTag$5;
var Iterators$5 = iterators$1;

var returnThis$3 = function () { return this; };

var iteratorCreateConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$4(IteratorPrototype$4, { next: createPropertyDescriptor$4(+!ENUMERABLE_NEXT, next) });
  setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$5[TO_STRING_TAG] = returnThis$3;
  return IteratorConstructor;
};

var uncurryThis$l = functionUncurryThis$1;
var aCallable$3 = aCallable$5;

var functionUncurryThisAccessor$1 = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$l(aCallable$3(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$l = isCallable$y;

var $String$6 = String;
var $TypeError$9 = TypeError;

var aPossiblePrototype$3 = function (argument) {
  if (typeof argument == 'object' || isCallable$l(argument)) return argument;
  throw $TypeError$9("Can't set " + $String$6(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor$1 = functionUncurryThisAccessor$1;
var anObject$c = anObject$h;
var aPossiblePrototype$2 = aPossiblePrototype$3;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor$1(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$c(O);
    aPossiblePrototype$2(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$7 = _export$1;
var call$e = functionCall$1;
var FunctionName$1 = functionName$1;
var isCallable$k = isCallable$y;
var createIteratorConstructor$1 = iteratorCreateConstructor$1;
var getPrototypeOf$2 = objectGetPrototypeOf$1;
var setPrototypeOf$2 = objectSetPrototypeOf$1;
var setToStringTag$3 = setToStringTag$5;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$b;
var defineBuiltIn$7 = defineBuiltIn$a;
var wellKnownSymbol$j = wellKnownSymbol$o;
var Iterators$4 = iterators$1;
var IteratorsCore$1 = iteratorsCore$1;

var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$2 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype$3 = IteratorsCore$1.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$2 = IteratorsCore$1.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$j('iterator');
var KEYS$1 = 'keys';
var VALUES$1 = 'values';
var ENTRIES$1 = 'entries';

var returnThis$2 = function () { return this; };

var iteratorDefine$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$2 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS$1: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES$1: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES$1: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$2 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype$3) {
        if (setPrototypeOf$2) {
          setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype$3);
        } else if (!isCallable$k(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$7(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES$1 && nativeIterator && nativeIterator.name !== VALUES$1) {
    if (CONFIGURABLE_FUNCTION_NAME$2) {
      createNonEnumerableProperty$8(IterablePrototype, 'name', VALUES$1);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$e(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES$1),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS$1),
      entries: getIterationMethod(ENTRIES$1)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$7(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$7({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$7(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$4[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$3 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$6 = toIndexedObject$b;
var addToUnscopables$3 = addToUnscopables$4;
var Iterators$3 = iterators$1;
var InternalStateModule$2 = internalState$1;
var defineProperty$8 = objectDefineProperty$1.f;
var defineIterator$1 = iteratorDefine$1;
var createIterResultObject$2 = createIterResultObject$3;
var DESCRIPTORS$c = descriptors$1;

var ARRAY_ITERATOR$1 = 'Array Iterator';
var setInternalState$1 = InternalStateModule$2.set;
var getInternalState$4 = InternalStateModule$2.getterFor(ARRAY_ITERATOR$1);

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
var es_array_iterator$1 = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR$1,
    target: toIndexedObject$6(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$4(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$2(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$2(index, false);
  if (kind == 'values') return createIterResultObject$2(target[index], false);
  return createIterResultObject$2([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values$1 = Iterators$3.Arguments = Iterators$3.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$3('keys');
addToUnscopables$3('values');
addToUnscopables$3('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$c && values$1.name !== 'values') try {
  defineProperty$8(values$1, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables$1 = {
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
var documentCreateElement$3 = documentCreateElement$5;

var classList$1 = documentCreateElement$3('span').classList;
var DOMTokenListPrototype$3 = classList$1 && classList$1.constructor && classList$1.constructor.prototype;

var domTokenListPrototype$1 = DOMTokenListPrototype$3 === Object.prototype ? undefined : DOMTokenListPrototype$3;

var global$j = global$u;
var DOMIterables$1 = domIterables$1;
var DOMTokenListPrototype$2 = domTokenListPrototype$1;
var ArrayIteratorMethods$1 = es_array_iterator$1;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$b;
var wellKnownSymbol$i = wellKnownSymbol$o;

var ITERATOR$3 = wellKnownSymbol$i('iterator');
var TO_STRING_TAG$6 = wellKnownSymbol$i('toStringTag');
var ArrayValues$1 = ArrayIteratorMethods$1.values;

var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues$1) try {
      createNonEnumerableProperty$7(CollectionPrototype, ITERATOR$3, ArrayValues$1);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues$1;
    }
    if (!CollectionPrototype[TO_STRING_TAG$6]) {
      createNonEnumerableProperty$7(CollectionPrototype, TO_STRING_TAG$6, COLLECTION_NAME);
    }
    if (DOMIterables$1[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods$1[METHOD_NAME]) try {
        createNonEnumerableProperty$7(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods$1[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods$1[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME$1 in DOMIterables$1) {
  handlePrototype$1(global$j[COLLECTION_NAME$1] && global$j[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
}

handlePrototype$1(DOMTokenListPrototype$2, 'DOMTokenList');

var DESCRIPTORS$b = descriptors$1;
var uncurryThis$k = functionUncurryThis$1;
var call$d = functionCall$1;
var fails$n = fails$y;
var objectKeys$2 = objectKeys$4;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols$1;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable$1;
var toObject$4 = toObject$7;
var IndexedObject$1 = indexedObject$1;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$7 = Object.defineProperty;
var concat$2 = uncurryThis$k([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$n(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$b && $assign({ b: 1 }, $assign(defineProperty$7({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$7(this, 'b', {
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
  return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$4(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  var propertyIsEnumerable = propertyIsEnumerableModule$1.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$2(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$b || call$d(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$6 = _export$1;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$6({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var wellKnownSymbol$h = wellKnownSymbol$o;

var TO_STRING_TAG$5 = wellKnownSymbol$h('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$5] = 'z';

var toStringTagSupport$1 = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport$1;
var isCallable$j = isCallable$y;
var classofRaw$3 = classofRaw$4;
var wellKnownSymbol$g = wellKnownSymbol$o;

var TO_STRING_TAG$4 = wellKnownSymbol$g('toStringTag');
var $Object$5 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS$1 = classofRaw$3(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$7 = TO_STRING_TAG_SUPPORT$1 ? classofRaw$3 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet$1(O = $Object$5(it), TO_STRING_TAG$4)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS$1 ? classofRaw$3(O)
    // ES3 arguments fallback
    : (result = classofRaw$3(O)) == 'Object' && isCallable$j(O.callee) ? 'Arguments' : result;
};

var classof$6 = classof$7;

var $String$5 = String;

var toString$b = function (argument) {
  if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$5(argument);
};

var anObject$b = anObject$h;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$3 = function () {
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

var fails$m = fails$y;
var global$i = global$u;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$5 = global$i.RegExp;

var UNSUPPORTED_Y$4 = fails$m(function () {
  var re = $RegExp$5('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$2 = UNSUPPORTED_Y$4 || fails$m(function () {
  return !$RegExp$5('a', 'y').sticky;
});

var BROKEN_CARET$1 = UNSUPPORTED_Y$4 || fails$m(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$5('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers$1 = {
  BROKEN_CARET: BROKEN_CARET$1,
  MISSED_STICKY: MISSED_STICKY$2,
  UNSUPPORTED_Y: UNSUPPORTED_Y$4
};

var fails$l = fails$y;
var global$h = global$u;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$4 = global$h.RegExp;

var regexpUnsupportedDotAll$1 = fails$l(function () {
  var re = $RegExp$4('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$k = fails$y;
var global$g = global$u;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp$3 = global$g.RegExp;

var regexpUnsupportedNcg$1 = fails$k(function () {
  var re = $RegExp$3('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$c = functionCall$1;
var uncurryThis$j = functionUncurryThis$1;
var toString$a = toString$b;
var regexpFlags$2 = regexpFlags$3;
var stickyHelpers$2 = regexpStickyHelpers$1;
var shared$5 = shared$9.exports;
var create$3 = objectCreate$1;
var getInternalState$3 = internalState$1.get;
var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll$1;
var UNSUPPORTED_NCG$2 = regexpUnsupportedNcg$1;

var nativeReplace$1 = shared$5('native-string-replace', String.prototype.replace);
var nativeExec$1 = RegExp.prototype.exec;
var patchedExec$1 = nativeExec$1;
var charAt$5 = uncurryThis$j(''.charAt);
var indexOf$2 = uncurryThis$j(''.indexOf);
var replace$5 = uncurryThis$j(''.replace);
var stringSlice$7 = uncurryThis$j(''.slice);

var UPDATES_LAST_INDEX_WRONG$1 = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$c(nativeExec$1, re1, 'a');
  call$c(nativeExec$1, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$3 = stickyHelpers$2.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED$1 = /()??/.exec('')[1] !== undefined;

var PATCH$1 = UPDATES_LAST_INDEX_WRONG$1 || NPCG_INCLUDED$1 || UNSUPPORTED_Y$3 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$2;

if (PATCH$1) {
  patchedExec$1 = function exec(string) {
    var re = this;
    var state = getInternalState$3(re);
    var str = toString$a(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$c(patchedExec$1, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$3 && re.sticky;
    var flags = call$c(regexpFlags$2, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$5(flags, 'y', '');
      if (indexOf$2(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$7(str, re.lastIndex);
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

    if (NPCG_INCLUDED$1) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG$1) lastIndex = re.lastIndex;

    match = call$c(nativeExec$1, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$7(match.input, charsAdded);
        match[0] = stringSlice$7(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG$1 && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED$1 && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$c(nativeReplace$1, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$3(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec$1;

var $$5 = _export$1;
var exec$2 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
  exec: exec$2
});

var classofRaw$2 = classofRaw$4;
var uncurryThis$i = functionUncurryThis$1;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$2(fn) === 'Function') return uncurryThis$i(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$h = functionUncurryThisClause;
var defineBuiltIn$6 = defineBuiltIn$a;
var regexpExec$2 = regexpExec$3;
var fails$j = fails$y;
var wellKnownSymbol$f = wellKnownSymbol$o;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$b;

var SPECIES$1 = wellKnownSymbol$f('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$f(KEY);

  var DELEGATES_TO_SYMBOL = !fails$j(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$j(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$h(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$h(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype$3.exec) {
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

  if (SHAM) createNonEnumerableProperty$6(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$g = functionUncurryThis$1;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
var toString$9 = toString$b;
var requireObjectCoercible$7 = requireObjectCoercible$a;

var charAt$4 = uncurryThis$g(''.charAt);
var charCodeAt = uncurryThis$g(''.charCodeAt);
var stringSlice$6 = uncurryThis$g(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$9(requireObjectCoercible$7($this));
    var position = toIntegerOrInfinity$4(pos);
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
          ? stringSlice$6(S, position, position + 2)
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

var charAt$3 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$3(S, index).length : 1);
};

var call$b = functionCall$1;
var anObject$a = anObject$h;
var isCallable$i = isCallable$y;
var classof$5 = classofRaw$4;
var regexpExec$1 = regexpExec$3;

var $TypeError$8 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$i(exec)) {
    var result = call$b(exec, R, S);
    if (result !== null) anObject$a(result);
    return result;
  }
  if (classof$5(R) === 'RegExp') return call$b(regexpExec$1, R, S);
  throw $TypeError$8('RegExp#exec called on incompatible receiver');
};

var call$a = functionCall$1;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$9 = anObject$h;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var toLength$3 = toLength$5;
var toString$8 = toString$b;
var requireObjectCoercible$6 = requireObjectCoercible$a;
var getMethod$3 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$6(this);
      var matcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$3(regexp, MATCH);
      return matcher ? call$a(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$8(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$9(this);
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
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
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

var NATIVE_BIND$2 = functionBindNative$1;

var FunctionPrototype$2 = Function.prototype;
var apply$1 = FunctionPrototype$2.apply;
var call$9 = FunctionPrototype$2.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$2 ? call$9.bind(apply$1) : function () {
  return call$9.apply(apply$1, arguments);
});

var uncurryThis$f = functionUncurryThis$1;
var toObject$3 = toObject$7;

var floor$1 = Math.floor;
var charAt$2 = uncurryThis$f(''.charAt);
var replace$4 = uncurryThis$f(''.replace);
var stringSlice$5 = uncurryThis$f(''.slice);
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
    namedCaptures = toObject$3(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$4(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$2(ch, 0)) {
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
          if (f <= m) return captures[f - 1] === undefined ? charAt$2(ch, 1) : captures[f - 1] + charAt$2(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call$8 = functionCall$1;
var uncurryThis$e = functionUncurryThis$1;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$i = fails$y;
var anObject$8 = anObject$h;
var isCallable$h = isCallable$y;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$7;
var toLength$2 = toLength$5;
var toString$7 = toString$b;
var requireObjectCoercible$5 = requireObjectCoercible$a;
var advanceStringIndex = advanceStringIndex$2;
var getMethod$2 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$e = wellKnownSymbol$o;

var REPLACE = wellKnownSymbol$e('replace');
var max$1 = Math.max;
var min$2 = Math.min;
var concat$1 = uncurryThis$e([].concat);
var push$1 = uncurryThis$e([].push);
var stringIndexOf$2 = uncurryThis$e(''.indexOf);
var stringSlice$4 = uncurryThis$e(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$i(function () {
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
      var O = requireObjectCoercible$5(this);
      var replacer = isNullOrUndefined$3(searchValue) ? undefined : getMethod$2(searchValue, REPLACE);
      return replacer
        ? call$8(replacer, searchValue, O, replaceValue)
        : call$8(nativeReplace, toString$7(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$7(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$2(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$h(replaceValue);
      if (!functionalReplace) replaceValue = toString$7(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push$1(results, result);
        if (!global) break;

        var matchStr = toString$7(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$2(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$7(result[0]);
        var position = max$1(min$2(toIntegerOrInfinity$3(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
          var replacement = toString$7(apply(replaceValue, undefined, replacerArgs));
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
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$d = functionUncurryThis$1;
var requireObjectCoercible$4 = requireObjectCoercible$a;
var toString$6 = toString$b;
var whitespaces$1 = whitespaces$2;

var replace$3 = uncurryThis$d(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$6(requireObjectCoercible$4($this));
    if (TYPE & 1) string = replace$3(string, ltrim, '');
    if (TYPE & 2) string = replace$3(string, rtrim, '$1');
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

var PROPER_FUNCTION_NAME$2 = functionName$1.PROPER;
var fails$h = fails$y;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$h(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$2 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$4 = _export$1;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$4({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable$g = isCallable$y;
var isObject$d = isObject$k;
var setPrototypeOf$1 = objectSetPrototypeOf$1;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$g(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$d(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var isObject$c = isObject$k;
var classof$4 = classofRaw$4;
var wellKnownSymbol$d = wellKnownSymbol$o;

var MATCH$3 = wellKnownSymbol$d('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp$1 = function (it) {
  var isRegExp;
  return isObject$c(it) && ((isRegExp = it[MATCH$3]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
};

var call$7 = functionCall$1;
var hasOwn$a = hasOwnProperty_1$1;
var isPrototypeOf$2 = objectIsPrototypeOf$1;
var regExpFlags = regexpFlags$3;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$a(R, 'flags') && isPrototypeOf$2(RegExpPrototype$2, R)
    ? call$7(regExpFlags, R) : flags;
};

var defineProperty$6 = objectDefineProperty$1.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$6(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var makeBuiltIn$3 = makeBuiltIn$6.exports;
var defineProperty$5 = objectDefineProperty$1;

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn$3(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn$3(descriptor.set, name, { setter: true });
  return defineProperty$5.f(target, name, descriptor);
};

var getBuiltIn$4 = getBuiltIn$8;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var wellKnownSymbol$c = wellKnownSymbol$o;
var DESCRIPTORS$a = descriptors$1;

var SPECIES = wellKnownSymbol$c('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$a && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$9 = descriptors$1;
var global$f = global$u;
var uncurryThis$c = functionUncurryThis$1;
var isForced$2 = isForced_1$1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$b;
var getOwnPropertyNames = objectGetOwnPropertyNames$1.f;
var isPrototypeOf$1 = objectIsPrototypeOf$1;
var isRegExp$1 = isRegexp$1;
var toString$5 = toString$b;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers$1 = regexpStickyHelpers$1;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$5 = defineBuiltIn$a;
var fails$g = fails$y;
var hasOwn$9 = hasOwnProperty_1$1;
var enforceInternalState$1 = internalState$1.enforce;
var setSpecies = setSpecies$1;
var wellKnownSymbol$b = wellKnownSymbol$o;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll$1;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg$1;

var MATCH$2 = wellKnownSymbol$b('match');
var NativeRegExp = global$f.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$f.SyntaxError;
var exec$1 = uncurryThis$c(RegExpPrototype$1.exec);
var charAt$1 = uncurryThis$c(''.charAt);
var replace$2 = uncurryThis$c(''.replace);
var stringIndexOf$1 = uncurryThis$c(''.indexOf);
var stringSlice$3 = uncurryThis$c(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY$1 = stickyHelpers$1.MISSED_STICKY;
var UNSUPPORTED_Y$2 = stickyHelpers$1.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$9 &&
  (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$g(function () {
    re2[MATCH$2] = false;
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
        if (exec$1(IS_NCG, stringSlice$3(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$9(names, groupname)) {
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
if (isForced$2('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$1(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
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

    pattern = pattern === undefined ? '' : toString$5(pattern);
    flags = flags === undefined ? '' : toString$5(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
      if (dotAll) flags = replace$2(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY$1 && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y$2) flags = replace$2(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$1(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$5(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys$1 = getOwnPropertyNames(NativeRegExp), index$1 = 0; keys$1.length > index$1;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys$1[index$1++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$5(global$f, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var PROPER_FUNCTION_NAME$1 = functionName$1.PROPER;
var defineBuiltIn$4 = defineBuiltIn$a;
var anObject$7 = anObject$h;
var $toString = toString$b;
var fails$f = fails$y;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$f(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$4(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$7(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var Styles$d = {"xbox":"root-module_xbox__BgkeR","horizontal_align-stretch":"root-module_horizontal_align-stretch__RsDSG","horizontal_align-start":"root-module_horizontal_align-start__Qw6KM","horizontal_align-end":"root-module_horizontal_align-end__yw58M","horizontal_align-center":"root-module_horizontal_align-center__KeM-o","horizontal_align-between":"root-module_horizontal_align-between__pEOfH","horizontal_align-evenly":"root-module_horizontal_align-evenly__e6eJi","horizontal_align-around":"root-module_horizontal_align-around__j235-","vertical_align-start":"root-module_vertical_align-start__sNb0E","vertical_align-end":"root-module_vertical_align-end__mTzSR","vertical_align-center":"root-module_vertical_align-center__pZuOa","vertical_align-between":"root-module_vertical_align-between__EO116","vertical_align-evenly":"root-module_vertical_align-evenly__RFKcJ","vertical_align-around":"root-module_vertical_align-around__Q3-1J","vertical_align-stretch":"root-module_vertical_align-stretch__E-LVK","orientation-vertical":"root-module_orientation-vertical__Fm0BD","orientation-horizontal":"root-module_orientation-horizontal__fRZCe","padding-none":"root-module_padding-none__EdoeZ","padding-xs":"root-module_padding-xs__3bj0A","padding-s":"root-module_padding-s__nVsOF","padding-m":"root-module_padding-m__--bDL","padding-l":"root-module_padding-l__vkb4-","padding-xl":"root-module_padding-xl__vWGek","gap-none":"root-module_gap-none__QTmry","gap-xs":"root-module_gap-xs__vxwxm","gap-s":"root-module_gap-s__d2plT","gap-m":"root-module_gap-m__0eGVm","gap-l":"root-module_gap-l__x2mIm","gap-xl":"root-module_gap-xl__jgA9t","height-auto":"root-module_height-auto__-VbZ-","height-full":"root-module_height-full__XysBe","height-1":"root-module_height-1__jGkq3","height-2":"root-module_height-2__dw0qK","height-3":"root-module_height-3__Ve-qm","height-4":"root-module_height-4__R2ASX","height-5":"root-module_height-5__4zYwN","height-6":"root-module_height-6__BfTg1","height-7":"root-module_height-7__XyzRA","height-8":"root-module_height-8__oSqoB","height-9":"root-module_height-9__-Nh5k","height-10":"root-module_height-10__EFjFa","height-11":"root-module_height-11__X-z1B","height-12":"root-module_height-12__C6-6C","width-auto":"root-module_width-auto__c0z5C","width-half":"root-module_width-half__JK4IZ","width-full":"root-module_width-full__Ydozy","max_width":"root-module_max_width__9CF6a","min_width":"root-module_min_width__cczDz","width-1":"root-module_width-1__bumbq","width-2":"root-module_width-2__jtPrr","width-3":"root-module_width-3__vIY86","width-4":"root-module_width-4__q4ecu","width-5":"root-module_width-5__z8oQP","width-6":"root-module_width-6__uubpa","width-7":"root-module_width-7__I6dPv","width-8":"root-module_width-8__OT-j6","width-9":"root-module_width-9__6Dg6B","width-10":"root-module_width-10__7fHU-","width-11":"root-module_width-11__t2dyS","width-12":"root-module_width-12__OT9GL","touchable":"root-module_touchable__crRxB","overflow-visible":"root-module_overflow-visible__EUDCq","overflow-hidden":"root-module_overflow-hidden__yuNbr","overflow-auto":"root-module_overflow-auto__urY-3","overflow-scroll":"root-module_overflow-scroll__2cFBU","overflow-scroll_y":"root-module_overflow-scroll_y__LxNho","overflow-scroll_x":"root-module_overflow-scroll_x__9PREg"};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames$1));

var classnames = classnames$1.exports;

const XBox = props => {
  // If orientation change, x and y axis will be inverted
  const hAlign = props.orientation === 'horizontal' ? props.verticalAlign : props.horizontalAlign;
  const vAlign = props.orientation === 'horizontal' ? props.horizontalAlign : props.verticalAlign;
  const rootClass = classnames(Styles$d.xbox, Styles$d[`orientation-${props.orientation}`], Styles$d[`horizontal_align-${hAlign}`], Styles$d[`vertical_align-${vAlign}`], Styles$d[`padding-${props.padding}`], Styles$d[`overflow-${props.overflow}`], Styles$d[`gap-${props.gap}`], Styles$d[`height-${props.height}`], Styles$d[`width-${props.width}`], {
    [Styles$d.touchable]: props.touchable
  });
  return jsx("div", {
    className: rootClass,
    children: props.children
  });
};
XBox.defaultProps = {
  orientation: 'vertical',
  verticalAlign: 'start',
  horizontalAlign: 'stretch',
  width: 'auto',
  height: 'auto',
  overflow: 'visible',
  padding: 'none',
  gap: 'none',
  touchable: false
};

var Styles$c = {"xtext":"root-module_xtext__FTEzH","text_overflow-break-word":"root-module_text_overflow-break-word__0-jCX","text_overflow-no-wrap":"root-module_text_overflow-no-wrap__3G8Ju","line_height-normal":"root-module_line_height-normal__-FibS","line_height-title":"root-module_line_height-title__2IApz","weight-lighter":"root-module_weight-lighter__75pw8","weight-normal":"root-module_weight-normal__CRY08","weight-bold":"root-module_weight-bold__krljQ","font_size-inherit":"root-module_font_size-inherit__T-ItM","font_size-1":"root-module_font_size-1__WKnkW","font_size-2":"root-module_font_size-2__Mr6q7","font_size-3":"root-module_font_size-3__3Vhe9","font_size-4":"root-module_font_size-4__3q-j4","font_size-5":"root-module_font_size-5__mfRjv","font_size-6":"root-module_font_size-6__dzU1-","font_size-7":"root-module_font_size-7__gdpm8","font_size-8":"root-module_font_size-8__XgW0l","font_size-9":"root-module_font_size-9__eiNs4","font_size-10":"root-module_font_size-10__WYXfx","font_size-11":"root-module_font_size-11__z-XZD","font_size-12":"root-module_font_size-12__RWIJX","line_clamp":"root-module_line_clamp__-ah3x"};

const XText = props => {
  const rootClass = classnames(Styles$c.xtext, Styles$c[`text_overflow-${props.textOverflow}`], Styles$c[`line_height-${props.lineHeight}`], Styles$c[`weight-${props.weight}`], Styles$c[`font_size-${props.fontSize}`], {
    [Styles$c.line_clamp]: props.lineClamp !== 'none'
  });
  const styles = {};
  if (props.lineClamp !== 'none') {
    styles.WebkitLineClamp = props.lineClamp;
  }
  return jsx("div", {
    style: styles,
    className: rootClass,
    children: props.children
  });
};
XText.defaultProps = {
  lineHeight: 'normal',
  textOverflow: 'normal',
  weight: 'normal',
  fontSize: 10,
  lineClamp: 'none'
};

var Styles$b = {"xicon":"root-module_xicon__WMNSi","icon_size-xs":"root-module_icon_size-xs__bK2p2","icon_size-s":"root-module_icon_size-s__zgO05","icon_size-m":"root-module_icon_size-m__-DheZ","icon_size-l":"root-module_icon_size-l__QX1lj","icon_size-xl":"root-module_icon_size-xl__nSVvy","icon-spin":"root-module_icon-spin__0EEdQ","spin":"root-module_spin__XvK3O"};

var _path$n;
function _extends$n() { _extends$n = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }
var SvgArrowUp = function SvgArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$n({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$n || (_path$n = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.327 12.232a1.129 1.129 0 0 1 .007-1.597l6.872-6.808a1.129 1.129 0 0 1 1.588 0l6.872 6.808a1.129 1.129 0 0 1-1.59 1.604L13.13 7.336v12.035a1.129 1.129 0 0 1-2.258 0V7.336L5.923 12.24a1.129 1.129 0 0 1-1.596-.008Z",
    clipRule: "evenodd"
  })));
};

var _path$m;
function _extends$m() { _extends$m = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }
var SvgArrowDown = function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$m({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$m || (_path$m = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.673 11.768a1.129 1.129 0 0 1-.007 1.597l-6.872 6.808a1.129 1.129 0 0 1-1.588 0l-6.872-6.808a1.129 1.129 0 1 1 1.59-1.604l4.947 4.903V4.629a1.129 1.129 0 0 1 2.258 0v12.035l4.948-4.903a1.129 1.129 0 0 1 1.596.008Z",
    clipRule: "evenodd"
  })));
};

var _path$l;
function _extends$l() { _extends$l = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }
var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$l({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$l || (_path$l = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.232 19.673a1.129 1.129 0 0 1-1.597-.007l-6.808-6.872a1.129 1.129 0 0 1 0-1.588l6.808-6.872a1.129 1.129 0 1 1 1.604 1.59L7.336 10.87h12.035a1.129 1.129 0 0 1 0 2.258H7.336l4.903 4.948a1.129 1.129 0 0 1-.008 1.596Z",
    clipRule: "evenodd"
  })));
};

var _path$k;
function _extends$k() { _extends$k = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }
var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$k({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$k || (_path$k = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.768 4.327a1.129 1.129 0 0 1 1.597.007l6.808 6.872c.436.44.436 1.149 0 1.588l-6.808 6.872a1.129 1.129 0 0 1-1.604-1.59l4.903-4.947H4.629a1.129 1.129 0 0 1 0-2.258h12.035L11.76 5.923a1.129 1.129 0 0 1 .008-1.596Z",
    clipRule: "evenodd"
  })));
};

var _path$j;
function _extends$j() { _extends$j = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }
var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$j({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$j || (_path$j = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M4.327 15.191a1.129 1.129 0 0 1 .007-1.596l6.872-6.808a1.129 1.129 0 0 1 1.588 0l6.872 6.808a1.129 1.129 0 0 1-1.59 1.604l-4.947-4.903L12 9.16l-1.129 1.136L5.923 15.2a1.129 1.129 0 0 1-1.596-.008Z"
  })));
};

var _path$i;
function _extends$i() { _extends$i = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }
var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$i({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$i || (_path$i = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.673 8.809a1.129 1.129 0 0 1-.007 1.596l-6.872 6.808a1.129 1.129 0 0 1-1.588 0l-6.872-6.808a1.129 1.129 0 0 1 1.59-1.604l4.947 4.903L12 14.84l1.129-1.136L18.077 8.8a1.129 1.129 0 0 1 1.596.008Z"
  })));
};

var _path$h;
function _extends$h() { _extends$h = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }
var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$h({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$h || (_path$h = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15.191 19.673a1.129 1.129 0 0 1-1.596-.007l-6.808-6.872a1.129 1.129 0 0 1 0-1.588l6.808-6.872a1.129 1.129 0 0 1 1.604 1.59l-4.903 4.947L9.16 12l1.136 1.129 4.903 4.948a1.129 1.129 0 0 1-.008 1.596Z"
  })));
};

var _path$g;
function _extends$g() { _extends$g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }
var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$g({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$g || (_path$g = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8.809 4.327a1.129 1.129 0 0 1 1.596.007l6.808 6.872c.436.44.436 1.149 0 1.588l-6.808 6.872a1.129 1.129 0 0 1-1.604-1.59l4.903-4.947L14.84 12l-1.136-1.129L8.8 5.923a1.129 1.129 0 0 1 .008-1.596Z"
  })));
};

var _path$f;
function _extends$f() { _extends$f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$f || (_path$f = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.606 4a1.604 1.604 0 0 0-1.134 2.738l5.273 5.26-5.272 5.261a1.6 1.6 0 0 0-.001 2.269 1.599 1.599 0 0 0 2.27 0l5.26-5.273 5.26 5.272a1.6 1.6 0 0 0 2.268.001 1.599 1.599 0 0 0 0-2.27l-5.273-5.26 5.273-5.26a1.604 1.604 0 1 0-2.268-2.268l-5.26 5.273L6.74 4.47C6.44 4.169 6.032 4 5.606 4Zm13.698 15.302.225.227.001-.001h.001l-.227-.226Z",
    clipRule: "evenodd"
  })));
};

var _path$e;
function _extends$e() { _extends$e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }
var SvgApple = function SvgApple(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$e || (_path$e = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.624 7.819c-.116.09-2.165 1.244-2.165 3.81 0 2.968 2.607 4.019 2.685 4.045-.012.064-.414 1.438-1.374 2.838-.857 1.232-1.75 2.462-3.11 2.462-1.36 0-1.71-.79-3.281-.79-1.53 0-2.074.816-3.318.816-1.245 0-2.113-1.14-3.11-2.54-1.157-1.644-2.09-4.199-2.09-6.623 0-3.888 2.527-5.95 5.016-5.95 1.322 0 2.424.868 3.254.868.79 0 2.022-.92 3.526-.92.57 0 2.619.051 3.967 1.984Zm-4.68-3.63c.621-.739 1.061-1.763 1.061-2.787A1.92 1.92 0 0 0 15.967 1c-1.012.038-2.216.674-2.942 1.516-.57.648-1.102 1.672-1.102 2.71 0 .156.026.312.038.362.064.012.168.026.272.026.908 0 2.05-.608 2.71-1.426Z"
  })));
};

var _path$d, _path2$5;
function _extends$d() { _extends$d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }
var SvgCencosud = function SvgCencosud(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$d || (_path$d = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18 9.857c.935 0 1.8-.3 2.505-.808a9 9 0 1 1-6.147-5.737A4.286 4.286 0 0 0 18 9.857Z"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18 8.643A2.571 2.571 0 1 0 18 3.5a2.571 2.571 0 0 0 0 5.143Z"
  })));
};

var _path$c, _path2$4;
function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
var SvgFacebook = function SvgFacebook(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$c || (_path$c = /*#__PURE__*/React.createElement("path", {
    fill: "#1977F3",
    d: "M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m15.699 14.746.42-2.746h-2.632v-1.782a1.374 1.374 0 0 1 1.548-1.484h1.199V6.396a14.604 14.604 0 0 0-2.127-.185c-2.17 0-3.588 1.313-3.588 3.695V12H8.104v2.746h2.412v6.638a9.51 9.51 0 0 0 2.968 0v-6.638H15.7Z"
  })));
};

var _path$b, _path2$3, _path3, _path4;
function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
var SvgGoogle = function SvgGoogle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M21 12.201c0-.74-.062-1.28-.195-1.84h-8.622v3.34h5.061c-.102.83-.653 2.08-1.877 2.92l-.017.112 2.726 2.07.189.018c1.734-1.57 2.734-3.88 2.734-6.62Z"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12.183 21c2.48 0 4.561-.8 6.081-2.18l-2.897-2.2c-.776.53-1.817.9-3.184.9a5.518 5.518 0 0 1-5.224-3.74l-.108.01-2.835 2.149-.037.101C5.49 18.98 8.591 21 12.183 21Z"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M6.959 13.78A5.445 5.445 0 0 1 6.653 12c0-.62.112-1.22.296-1.78l-.005-.12-2.87-2.184-.094.044A8.862 8.862 0 0 0 3 12c0 1.45.357 2.82.98 4.04l2.979-2.26Z"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    fill: "#EB4335",
    d: "M12.183 6.48c1.724 0 2.888.73 3.55 1.34l2.593-2.48C16.734 3.89 14.662 3 12.183 3 8.591 3 5.49 5.02 3.98 7.96l2.969 2.26a5.54 5.54 0 0 1 5.234-3.74Z"
  })));
};

var _path$a;
function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.137 6h13.726c.981 0 1.814.667 2.061 1.566l-6.254 4.047-.005.004-2.55 1.65-2.55-1.65-.005-.004-6.447-4.172A2.144 2.144 0 0 1 5.137 6Zm15.862 2.395v7.484c0 .267-.05.522-.141.758l-5.377-4.67L21 8.394Zm-.531 8.88a2.14 2.14 0 0 1-1.605.725H5.137a2.138 2.138 0 0 1-1.5-.614l5.757-5.003 2.513 1.627c.12.08.28.088.41.004l2.52-1.63 5.63 4.892.001-.001Zm-17.263-.492A2.09 2.09 0 0 1 3 15.879V8.245l5.75 3.72-5.545 4.818Z",
    clipRule: "evenodd"
  })));
};

var _path$9;
function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var SvgTofu = function SvgTofu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.865 2h-9.73a2.63 2.63 0 0 0-1.862.778A2.665 2.665 0 0 0 4.5 4.653v14.694c0 .703.279 1.378.773 1.875A2.63 2.63 0 0 0 7.135 22h9.73c.699 0 1.368-.28 1.862-.778a2.666 2.666 0 0 0 .773-1.875V4.653c0-.703-.279-1.378-.773-1.875A2.63 2.63 0 0 0 16.865 2ZM6.418 3.932a1.01 1.01 0 0 1 .717-.3h9.73c.269 0 .527.108.716.3.19.19.297.45.297.721v14.694c0 .27-.106.53-.297.721a1.01 1.01 0 0 1-.716.3h-9.73a1.01 1.01 0 0 1-.717-.3 1.024 1.024 0 0 1-.296-.721V4.653c0-.27.106-.53.296-.721Zm3.708 5.027a.808.808 0 0 0-1.132.015.82.82 0 0 0-.014 1.14l1.862 1.875-1.859 1.872-.003.003a.82.82 0 0 0 .014 1.14.808.808 0 0 0 1.132.015l1.863-1.876 1.857 1.87a.811.811 0 0 0 .892.192.811.811 0 0 0 .505-.767.82.82 0 0 0-.25-.579l-1.857-1.87 1.859-1.872.003-.004a.82.82 0 0 0-.577-1.378.808.808 0 0 0-.57.224l-1.862 1.875-1.86-1.871-.003-.004Z",
    clipRule: "evenodd"
  })));
};

var _path$8, _path2$2;
function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var SvgBug = function SvgBug(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.142 12.576h2.27c.307 0 .572.236.587.543a.57.57 0 0 1-.571.6h-2.286v.566a5.12 5.12 0 0 1-.37 1.918c.92.824 1.513 1.736 1.513 3.225a.572.572 0 0 1-.604.571.58.58 0 0 1-.54-.584c-.002-.98-.326-1.587-.934-2.177a5.156 5.156 0 0 1-2.922 2.026.572.572 0 0 1-.714-.553V9.714a.57.57 0 0 0-.599-.57.583.583 0 0 0-.544.586v8.98a.571.571 0 0 1-.714.554 5.156 5.156 0 0 1-2.922-2.026c-.61.593-.935 1.202-.935 2.19a.571.571 0 0 1-.594.57.585.585 0 0 1-.549-.594c.007-1.476.598-2.382 1.515-3.201a5.119 5.119 0 0 1-.371-1.918v-.567H4.572a.572.572 0 0 1-.571-.598.583.583 0 0 1 .587-.544h2.27v-1.722c0-.124.005-.247.015-.368-1.065-.996-1.159-2.285-1.159-3.629a.571.571 0 0 1 .6-.57c.307.015.543.279.543.586 0 1.02.072 1.721.388 2.271A3.599 3.599 0 0 1 8.45 7.797c.901-.616 2.13-.943 3.55-.943 2.44 0 4.103.813 4.79 2.283.287-.56.353-1.28.353-2.28a.57.57 0 0 1 .599-.57.582.582 0 0 1 .544.586c0 1.37-.096 2.683-1.152 3.679.006.099.01.2.01.302v1.722Z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "m14.346 6.574-.011-.003c-.69-.19-1.475-.288-2.335-.288-.85 0-1.638.11-2.342.324-.489.147-.917-.367-.672-.817A3.424 3.424 0 0 1 11.992 4h.015a3.424 3.424 0 0 1 2.99 1.758c.245.44-.166.952-.65.816Z"
  })));
};

var _path$7, _path2$1;
function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var SvgLoading = function SvgLoading(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 4.398a7.602 7.602 0 1 0 0 15.204 7.602 7.602 0 0 0 0-15.204ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z",
    clipRule: "evenodd",
    opacity: 0.2
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.9 3.199c0-.662.537-1.199 1.199-1.199 5.493 0 9.9 4.547 9.9 10.099a1.199 1.199 0 1 1-2.397 0c0-4.279-3.385-7.701-7.503-7.701a1.199 1.199 0 0 1-1.2-1.199Z",
    clipRule: "evenodd"
  })));
};

var _path$6;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgUncheck = function SvgUncheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Z",
    clipRule: "evenodd"
  })));
};

var _path$5;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Zm8.293 5.293a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.793 1.793 4.793-4.793Z",
    clipRule: "evenodd"
  })));
};

var _path$4;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgNotifications = function SvgNotifications(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.407 4.392A6.632 6.632 0 0 0 6.924 6.77a6.41 6.41 0 0 0-1.298 3.96v4.363a.704.704 0 0 1-.2.507.734.734 0 0 1-.508.22 1.499 1.499 0 0 0-1.007.449 1.44 1.44 0 0 0-.411 1.006c0 .374.147.734.411 1.005.264.27.625.432 1.007.449h14.164a1.498 1.498 0 0 0 1.007-.449 1.44 1.44 0 0 0 .411-1.005 1.44 1.44 0 0 0-.411-1.006 1.499 1.499 0 0 0-1.007-.449.738.738 0 0 1-.508-.22.71.71 0 0 1-.2-.507v-4.363a6.41 6.41 0 0 0-1.298-3.96 6.634 6.634 0 0 0-3.483-2.377v-.751a1.534 1.534 0 0 0-.438-1.155 1.624 1.624 0 0 0-2.312 0 1.56 1.56 0 0 0-.438 1.155l.002.751Zm-.885 15.062h4.96c.015.329-.037.657-.155.965-.117.308-.297.59-.53.828-.231.238-.51.427-.818.557a2.525 2.525 0 0 1-2.773-.557 2.426 2.426 0 0 1-.53-.828 2.388 2.388 0 0 1-.154-.965Z",
    clipRule: "evenodd"
  })));
};

var _path$3;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgProfile = function SvgProfile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16.94 6.94a4.94 4.94 0 1 1-9.88 0 4.94 4.94 0 0 1 9.88 0ZM20 17.5c0 2.485-3.582 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
  })));
};

var _path$2, _path2;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgTask = function SvgTask(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15 6.545v-1.59a.457.457 0 0 0-.455-.455h-5.09A.457.457 0 0 0 9 4.955v1.59c0 .25.205.455.455.455h5.09c.25 0 .455-.205.455-.455Z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16.46 6h1.035c.555 0 1.005.45 1.005 1.005v11.49c0 .555-.45 1.005-1.005 1.005H6.505c-.555 0-1.005-.45-1.005-1.005V7.005C5.5 6.45 5.95 6 6.505 6H7.54c.255 0 .46.205.46.46v.705c0 .46.375.835.835.835h6.33c.46 0 .835-.375.835-.835V6.46c0-.255.205-.46.46-.46Z"
  })));
};

var _path$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgStats = function SvgStats(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M13.568 3.5h-3.136c-.269 0-.486.273-.486.61V19.89c0 .337.217.61.486.61h3.136c.268 0 .486-.273.486-.61V4.11c0-.338-.218-.611-.486-.611ZM7.122 11.39H3.986c-.269 0-.486.273-.486.61v7.89c0 .337.217.61.486.61h3.136c.269 0 .486-.273.486-.61V12c0-.337-.217-.61-.486-.61ZM16.877 7.445h3.137c.268 0 .486.273.486.61V19.89c0 .337-.218.61-.486.61h-3.137c-.268 0-.485-.273-.485-.61V8.056c0-.338.217-.611.485-.611Z"
  })));
};

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgTools = function SvgTools(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "m20.253 19.046-1.207 1.207a.85.85 0 0 1-1.198 0L7.75 10.173c-.276.08-.562.122-.85.127a3.4 3.4 0 0 1-3.213-4.505l2.16 2.159.45-.45 1.207-1.208.45-.45-2.159-2.159A3.4 3.4 0 0 1 10.3 6.9a3.235 3.235 0 0 1-.128.85l10.081 10.097a.85.85 0 0 1 0 1.199ZM3.747 17.847a.85.85 0 0 0 0 1.199l1.207 1.207a.85.85 0 0 0 1.198 0l4.65-4.641-2.406-2.405-4.65 4.64ZM18.8 3.5l-3.4 1.7v1.7l-1.845 1.844 1.7 1.7L17.1 8.6h1.7l1.7-3.4-1.7-1.7Z"
  })));
};

const XIcon = props => {
  const rootClass = classnames(Styles$b.xicon, Styles$b[`icon_size-${props.size}`]);
  const iconSVG = (() => {
    switch (props.icon) {
      default:
      case 'none':
        return undefined;
      case 'arrow-up':
        return jsx(SvgArrowUp, {});
      case 'arrow-down':
        return jsx(SvgArrowDown, {});
      case 'arrow-left':
        return jsx(SvgArrowLeft, {});
      case 'arrow-right':
        return jsx(SvgArrowRight, {});
      case 'chevron-up':
        return jsx(SvgChevronUp, {});
      case 'chevron-down':
        return jsx(SvgChevronDown, {});
      case 'chevron-left':
        return jsx(SvgChevronLeft, {});
      case 'chevron-right':
        return jsx(SvgChevronRight, {});
      case 'close':
        return jsx(SvgClose, {});
      case 'apple':
        return jsx(SvgApple, {});
      case 'cencosud':
        return jsx(SvgCencosud, {});
      case 'facebook':
        return jsx(SvgFacebook, {});
      case 'google':
        return jsx(SvgGoogle, {});
      case 'mail':
        return jsx(SvgMail, {});
      case 'tofu':
        return jsx(SvgTofu, {});
      case 'bug':
        return jsx(SvgBug, {});
      case 'loading':
        return jsx("div", {
          className: Styles$b[`icon-spin`],
          children: jsx(SvgLoading, {})
        });
      case 'uncheck':
        return jsx(SvgUncheck, {});
      case 'check':
        return jsx(SvgCheck, {});
      case 'notifications':
        return jsx(SvgNotifications, {});
      case 'profile':
        return jsx(SvgProfile, {});
      case 'task':
        return jsx(SvgTask, {});
      case 'stats':
        return jsx(SvgStats, {});
      case 'tools':
        return jsx(SvgTools, {});
    }
  })();
  if (!iconSVG) {
    return jsx(Fragment, {
      children: "\u00A0"
    });
  }
  return jsx("div", {
    className: rootClass,
    children: iconSVG
  });
};
XIcon.defaultProps = {
  icon: 'cencosud',
  size: 'm'
};

var Styles$a = {"xbutton":"root-module_xbutton__Qz5J5","xbutton_content":"root-module_xbutton_content__n5-Oj","button_content-reverse":"root-module_button_content-reverse__e-Coj","button_type-default":"root-module_button_type-default__kdN2r","button_type-solid":"root-module_button_type-solid__FM1Wb","button_type-tonal":"root-module_button_type-tonal__ErqJT","button_type-clear":"root-module_button_type-clear__2SPgA","button_type-outline":"root-module_button_type-outline__BStzO","button_size-xs":"root-module_button_size-xs__cHHal","button_size-s":"root-module_button_size-s__2-Dks","button_size-m":"root-module_button_size-m__yR3Pl","button_size-l":"root-module_button_size-l__adiea","button_size-xl":"root-module_button_size-xl__1a1gW","button-loading":"root-module_button-loading__PgU3n"};

const XButton = props => {
  const hasIcon = props.icon !== 'none';
  const rootClass = classnames(Styles$a.xbutton, Styles$a[`button_type-${props.type}`], Styles$a[`button_size-${props.size}`], {
    [Styles$a[`button-loading`]]: props.loading
  });
  const contentClass = classnames(Styles$a.xbutton_content, {
    [Styles$a[`button_content-reverse`]]: props.iconPosition === 'end'
  });
  const buttonOnClickHandler = e => {
    if (props.onClick && !props.loading) {
      props.onClick(e);
    }
  };
  const fontSize = (() => {
    // Get the font size according to the button size
    switch (props.size) {
      default:
      case 'xl':
      case 'l':
        return 10;
      case 'm':
        return 11;
      case 's':
      case 'xs':
        return 12;
    }
  })();
  const iconSize = (() => {
    // Get the icon size according to the button size
    switch (props.size) {
      case 'xl':
      case 'l':
        // for a button xl & l, set icon to s
        return 's';
      case 'm':
      case 's':
      default:
        // for a button m & s, set icon to xs
        return 'xs';
    }
  })();
  const iconLoadingSize = (() => {
    // Get the icon size according to the button size
    switch (props.size) {
      case 'xl':
        // for a button xl, set icon to m
        return 'm';
      case 'l':
      case 'm':
        // for a button l & m, set icon to s
        return 's';
      case 's':
      default:
        // for a button s, set icon to xs
        return 'xs';
    }
  })();
  const buttonContent = jsxs(Fragment, {
    children: [jsxs("div", {
      className: contentClass,
      children: [hasIcon && jsx(XIcon, {
        icon: props.icon,
        size: iconSize
      }), jsx(XText, {
        fontSize: fontSize,
        lineClamp: 1,
        weight: "bold",
        children: props.text
      })]
    }), props.loading && jsx("i", {
      children: jsx(XIcon, {
        icon: 'loading',
        size: iconLoadingSize
      })
    })]
  });
  return jsx("button", {
    disabled: props.disabled,
    className: rootClass,
    onClick: buttonOnClickHandler,
    children: buttonContent
  });
};
XButton.defaultProps = {
  type: 'default',
  size: 'l',
  icon: 'none',
  iconPosition: 'start',
  disabled: false,
  loading: false,
  text: undefined
};

var Styles$9 = {"xbuttonicon":"root-module_xbuttonicon__IVwuz","buttonicon_type-default":"root-module_buttonicon_type-default__L6dJI","buttonicon_type-solid":"root-module_buttonicon_type-solid__bp0V9","buttonicon_type-tonal":"root-module_buttonicon_type-tonal__rre5O","buttonicon_type-clear":"root-module_buttonicon_type-clear__LEA6o","buttonicon_type-outline":"root-module_buttonicon_type-outline__NqzF3","buttonicon_size-xs":"root-module_buttonicon_size-xs__IZZEa","buttonicon_size-s":"root-module_buttonicon_size-s__Fd0yV","buttonicon_size-m":"root-module_buttonicon_size-m__CA47J","buttonicon_size-l":"root-module_buttonicon_size-l__L8uRi","buttonicon_size-xl":"root-module_buttonicon_size-xl__iB8Ub","buttonicon-loading":"root-module_buttonicon-loading__rGPC3"};

const XButtonIcon = props => {
  const hasIcon = props.icon !== 'none';
  const rootClass = classnames(Styles$9.xbuttonicon, Styles$9[`buttonicon_type-${props.type}`], Styles$9[`buttonicon_size-${props.size}`], {
    [Styles$9[`buttonicon-loading`]]: props.loading
  });
  const buttonIconOnClickHandler = e => {
    if (props.onClick && !props.loading) {
      props.onClick(e);
    }
  };
  const iconSize = (() => {
    switch (props.size) {
      case 'xl':
        return 'm';
      case 'l':
      case 'm':
        return 's';
      case 's':
      case 'xs':
      default:
        return 'xs';
    }
  })();
  return jsxs("button", {
    disabled: props.disabled,
    className: rootClass,
    onClick: buttonIconOnClickHandler,
    children: [hasIcon && !props.loading && jsx(XIcon, {
      icon: props.icon,
      size: iconSize
    }), props.loading && jsx(XIcon, {
      icon: 'loading',
      size: iconSize
    })]
  });
};
XButtonIcon.defaultProps = {
  type: 'default',
  size: 'l',
  icon: 'tofu',
  disabled: false,
  loading: false
};

var Styles$8 = {"xtag":"root-module_xtag__CLZYk","xtag--size-s":"root-module_xtag--size-s__x-8qV","xtag--size-l":"root-module_xtag--size-l__zdOxQ","xtag--touchable":"root-module_xtag--touchable__dvrbO","xtag__text_container":"root-module_xtag__text_container__GTdbl","xtag__text":"root-module_xtag__text__N-DWl"};

const XTag = props => {
  const onCloseHandler = e => {
    if (props.onClose) {
      props.onClose(e);
    }
  };
  const rootClass = classnames(Styles$8.xtag, {
    [Styles$8['xtag--touchable']]: props.onClose
  }, {
    [Styles$8[`xtag--size-${props.size}`]]: props.size
  });
  if (props.visible === false) return null;
  return jsx("div", {
    className: rootClass,
    onClick: onCloseHandler,
    children: jsxs("div", {
      className: Styles$8.xtag__text_container,
      children: [props.icon && jsx(XIcon, {
        icon: props.icon,
        size: "xs"
      }), jsx("div", {
        className: Styles$8.xtag__text,
        children: props.text
      }), props.onClose && jsx("div", {
        children: jsx(XIcon, {
          icon: "close",
          size: "xs"
        })
      })]
    })
  });
};
XTag.defaultProps = {
  visible: true,
  icon: "none",
  size: 's'
};

var Styles$7 = {"ximage":"root-module_ximage__tYtn0","height-auto":"root-module_height-auto__xeMzQ","height-full":"root-module_height-full__TGn22","height-1":"root-module_height-1__55qf3","height-2":"root-module_height-2__X1GeS","height-3":"root-module_height-3__FeUmj","height-4":"root-module_height-4__cC2Gi","height-5":"root-module_height-5__yLI6L","height-6":"root-module_height-6__GNt0Y","height-7":"root-module_height-7__MhDEA","height-8":"root-module_height-8__rhzv1","height-9":"root-module_height-9__UwLQX","height-10":"root-module_height-10__q0Bl-","height-11":"root-module_height-11__BPWAr","height-12":"root-module_height-12__FnLos","width-auto":"root-module_width-auto__LkyC8","width-half":"root-module_width-half__yn2d-","width-full":"root-module_width-full__TAwIh","width-1":"root-module_width-1__BZ9et","width-2":"root-module_width-2__wTEZT","width-3":"root-module_width-3__XwPfp","width-4":"root-module_width-4__EjiBd","width-5":"root-module_width-5__jRYQj","width-6":"root-module_width-6__NF4MZ","width-7":"root-module_width-7__-UKna","width-8":"root-module_width-8__nPXuF","width-9":"root-module_width-9__0UBdF","width-10":"root-module_width-10__6KkbL","width-11":"root-module_width-11__EJiz7","width-12":"root-module_width-12__gnimm"};

const XImage = props => {
  const rootClass = classnames(Styles$7.ximage, Styles$7[`height-${props.height}`], Styles$7[`width-${props.width}`]);
  return jsx("img", {
    src: props.src,
    className: rootClass,
    alt: ''
  });
};
XImage.defaultProps = {
  height: 'auto',
  width: 'auto'
};

var img$6 = "data:image/svg+xml,%3csvg width='56' height='32' viewBox='0 0 56 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='55.98' height='32' rx='16' fill='%23DF1122'/%3e%3cpath d='M45.9813 10.3221L41.6314 21.8145H39.1073L40.7721 18.0553L37.7648 10.3221H40.2888L41.8999 15.3165H42.0073L43.511 10.3221H45.9813Z' fill='white'/%3e%3cpath d='M37.3904 16.1221C37.3904 17.948 35.4034 18.6462 33.4701 18.6462C31.5905 18.6462 29.6035 17.948 29.6035 16.1221H32.0738C32.0738 16.7129 32.8794 16.874 33.4701 16.874C34.0608 16.874 34.8127 16.7129 34.8127 16.1758C34.8127 15.4777 33.8997 15.3703 32.396 14.9944C30.8924 14.6185 29.7646 13.9203 29.7646 12.4703C29.7646 10.6444 31.5368 10 33.4164 10C35.296 10 37.0145 10.6444 37.0145 12.4166H34.5442C34.5442 11.9333 33.8997 11.7185 33.4164 11.7185C32.8794 11.7185 32.2886 11.8259 32.2886 12.3629C32.2886 13.0611 33.3627 13.1148 34.5442 13.437C36.1016 13.9203 37.3904 14.511 37.3904 16.1221Z' fill='white'/%3e%3cpath d='M25.8974 14.3494C25.8974 13.2753 25.3067 12.2549 23.9104 12.2549C22.5141 12.2549 22.0845 13.3827 22.0845 14.3494C22.0845 15.3697 22.6215 16.4438 24.0178 16.4438C25.4678 16.4438 25.8974 15.316 25.8974 14.3494ZM28.2603 18.3771H25.9511V17.4641H25.8437C25.4678 18.2697 24.6622 18.6993 23.4808 18.6993C21.44 18.6993 19.6678 17.0345 19.6678 14.4031C19.6678 11.7179 21.2789 10.1068 23.3196 10.1068C24.4474 10.1068 25.4141 10.5902 25.8437 11.2883H25.9511V10.3753H28.314L28.2603 18.3771Z' fill='white'/%3e%3cpath d='M34.7036 21.8682C28.3129 21.0089 21.9223 20.9552 11.9872 21.6534L12.0946 21.2237C22.0297 20.3645 29.8703 19.8812 34.1129 20.0423C36.6369 20.096 37.3888 20.3108 37.3888 21.2237C37.4425 22.1367 36.3147 22.083 34.7036 21.8682Z' fill='white'/%3e%3cpath d='M15.8536 13.4901C15.7999 13.0068 15.5314 12.0401 14.1888 12.0401C12.9537 12.0401 12.5777 13.0605 12.524 13.4901H15.8536ZM18.324 14.2957C18.324 14.6179 18.2703 15.1012 18.2703 15.1012H12.4703C12.524 16.0142 13.2222 16.7123 14.1888 16.7123C14.887 16.7123 15.3703 16.4438 15.5851 15.9604H18.1092C17.8943 17.1419 16.874 18.6456 14.2425 18.6456C11.7185 18.6456 10 16.6586 10 14.2957C10 11.879 11.5574 10.1068 14.0814 10.1068C16.6592 10.1068 18.324 11.879 18.324 14.2957Z' fill='white'/%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg width='77' height='32' viewBox='0 0 77 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='76.05' height='32' rx='16' fill='%2319AD49'/%3e%3cpath d='M60.054 12.4656C59.5609 12.4656 59.1499 12.5478 58.739 12.7122C58.3281 12.8766 57.9171 13.1232 57.5884 13.4519C57.2596 13.7807 57.013 14.1094 56.8486 14.5204C56.6843 14.9313 56.6021 15.4244 56.6021 15.9176C56.6021 16.4107 56.6843 16.8216 56.8486 17.2326C57.013 17.6435 57.2596 18.0545 57.5884 18.3832C57.9171 18.712 58.2459 18.9585 58.739 19.1229C59.1499 19.2873 59.6431 19.3695 60.054 19.3695C60.5471 19.3695 60.9581 19.2873 61.369 19.1229C61.78 18.9585 62.1909 18.712 62.5197 18.3832C62.8484 18.0545 63.095 17.6435 63.2594 17.2326C63.4238 16.8216 63.5059 16.3285 63.5059 15.9176C63.4238 14.9313 63.095 14.1916 62.5197 13.5341C61.9444 12.8766 61.1225 12.4656 60.054 12.4656ZM60.1362 10C60.9581 10 61.6978 10.1644 62.3553 10.4931C63.095 10.8219 63.6703 11.2328 64.2456 11.8081C64.821 12.3835 65.2319 12.9588 65.5607 13.6985C65.8894 14.4382 66.0538 15.1779 66.0538 15.9997C66.0538 16.8216 65.8894 17.5613 65.5607 18.301C65.2319 19.0407 64.821 19.616 64.3278 20.1913C63.8347 20.7667 63.1772 21.1776 62.4375 21.4242C61.6978 21.6707 60.8759 21.8351 60.054 21.8351C59.2321 21.8351 58.4924 21.6707 57.7527 21.4242C57.013 21.0954 56.4377 20.6845 55.8624 20.1913C55.3693 19.6982 54.8761 19.0407 54.6296 18.301C54.3008 17.5613 54.1364 16.8216 54.1364 15.9997C54.1364 15.1779 54.3008 14.4382 54.6296 13.6985C54.9583 12.9588 55.3693 12.3835 55.8624 11.8903C56.4377 11.3972 57.013 10.9041 57.7527 10.6575C58.4924 10.2466 59.3143 10.0822 60.1362 10Z' fill='white'/%3e%3cpath d='M27.7526 16.7394C27.7526 18.2188 26.5198 19.4517 25.0404 19.4517C24.1363 19.4517 23.3966 19.0407 22.9035 18.3832C22.7391 18.2188 22.6569 18.0545 22.5747 17.8079L22.4925 17.5613V17.3969C22.4104 17.1504 22.4104 16.9038 22.4104 16.6573V11.2328C22.4104 10.9041 22.3282 10.6575 22.0816 10.4109C21.835 10.1644 21.5885 10 21.2597 10C20.931 10 20.6022 10.1644 20.3556 10.4109C20.1091 10.6575 20.0269 10.9041 20.0269 11.2328V16.5751C20.0269 17.5613 20.2734 18.301 20.52 18.8763L20.6022 18.9585L20.8488 19.4517L21.0131 19.616C21.3419 20.1092 21.835 20.5201 22.3282 20.931L22.4104 21.0132C22.8213 21.2598 23.1501 21.4242 23.6432 21.5886C23.9719 21.6707 24.3829 21.7529 24.876 21.8351H25.6979L26.191 21.7529C26.5198 21.6707 26.8486 21.5886 27.1773 21.4242C27.6704 21.1776 28.1636 20.931 28.5745 20.5201C28.9855 20.1092 29.3142 19.7804 29.5608 19.2873L29.7252 19.0407L29.8074 18.7941C30.1361 18.0545 30.3005 17.3148 30.3005 16.5751V11.2328C30.3005 10.9041 30.2183 10.6575 29.9717 10.4109C29.7252 10.1644 29.4786 10.0822 29.0676 10C28.7389 10 28.4923 10.1644 28.2458 10.4109C27.9992 10.6575 27.8348 10.9041 27.8348 11.2328V16.3285' fill='white'/%3e%3cpath d='M44.2731 20.4384V14.0277C44.2731 11.4799 42.8759 10.0827 40.4102 10.0827C39.424 10.0827 38.3555 10.5758 37.8624 11.3155L37.5336 11.8087L37.2049 11.3155C36.7939 10.658 35.8077 10.1649 34.7392 10.1649C32.2735 10.1649 30.8763 11.6443 30.8763 14.1099V20.6028C30.8763 21.3425 31.3695 22 32.1092 22C32.8489 22 33.342 21.4247 33.342 20.6028V13.8634C33.342 13.1237 33.9995 12.5483 34.7392 12.5483C35.4789 12.5483 36.2186 13.1237 36.2186 13.8634V20.5206C36.2186 21.2603 36.7939 21.9178 37.5336 21.9178C38.2733 21.9178 38.8486 21.3425 38.8486 20.5206V13.699C38.8486 12.9593 39.5061 12.384 40.2458 12.384C40.9855 12.384 41.6431 12.9593 41.6431 13.699V20.4384C41.6431 21.1781 42.2184 21.8356 42.9581 21.8356C43.78 21.8356 44.2731 21.1781 44.2731 20.4384Z' fill='white'/%3e%3cpath d='M54.0557 18.6298C54.0557 17.3148 53.1516 16.1641 51.9188 15.671C53.0694 15.1779 53.7269 14.1916 53.7269 12.9588C53.7269 11.315 52.3297 10 50.4394 10H46.3299C45.6724 10 45.0971 10.5753 45.0971 11.2328V20.6023C45.0971 21.2598 45.6724 21.8351 46.3299 21.8351H50.8503C51.0969 21.8351 51.3434 21.7529 51.59 21.6707C53.0694 21.2598 54.0557 20.1092 54.0557 18.6298ZM49.9462 12.3013C50.6859 12.3013 51.3434 12.8766 51.3434 13.6163C51.3434 14.356 50.7681 14.9313 49.9462 14.9313H47.645V12.3013H49.9462ZM47.645 16.9038H50.275C51.0147 16.9038 51.59 17.4791 51.59 18.2188C51.59 18.9585 51.0147 19.5338 50.275 19.5338H47.645V16.9038Z' fill='white'/%3e%3cpath d='M19.123 17.5613V11.8081C19.123 11.5616 19.123 11.2328 19.0408 10.9863C18.9586 10.6575 18.712 10.3288 18.3833 10.1644C18.1367 10 17.8901 10 17.5614 10H13.6163C13.2876 10 12.9588 10.0822 12.7944 10.3288C12.2191 10.8219 12.3013 11.8081 12.9588 12.2191C13.2876 12.4656 13.6985 12.3835 14.0272 12.3835H16.7395V17.5613C16.7395 18.712 15.7532 19.6982 14.6026 19.6982C13.4519 19.6982 12.5479 18.7941 12.4657 17.6435V17.4791C12.4657 16.8216 11.8903 16.3285 11.2328 16.3285C10.5753 16.3285 10 16.9038 10 17.5613V17.7257C10.1644 20.1913 12.0547 21.8351 14.6026 21.8351C19.2873 21.8351 19.2051 17.0682 19.123 17.5613Z' fill='white'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg width='52' height='32' viewBox='0 0 52 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='51.13' height='32' rx='16' fill='%23006DFF'/%3e%3cpath d='M41.1105 18.5772C41.1105 17.0208 40.1566 16.5689 38.5499 15.8157C37.0938 15.163 36.6419 14.8618 36.6419 14.1588C36.6419 13.5563 37.144 13.1044 38.0478 13.1044C38.9515 13.1044 39.5038 13.3555 40.2068 13.8576L40.9097 12.9538C40.257 12.4015 39.3532 12.05 38.1482 12.05C36.5917 12.05 35.4369 12.9538 35.4369 14.2593C35.4369 15.6651 36.1398 16.1672 37.8971 16.9203C39.4034 17.5731 39.9557 17.9747 39.9557 18.6777C39.9557 19.5312 39.4034 20.0333 38.1984 20.0333C37.3448 20.0333 36.5415 19.6818 35.8386 19.0793L35.1356 19.9831C35.939 20.6358 36.9934 21.0877 38.1984 21.0877C39.6545 20.9873 41.1105 20.2844 41.1105 18.5772Z' fill='white'/%3e%3cpath d='M33.8801 12.2009H32.6249V20.8369H33.8801V12.2009Z' fill='white'/%3e%3cpath d='M31.2189 12.2509C30.9177 12.1003 30.516 12.05 29.8633 12.05C28.9595 12.05 28.106 12.6023 27.7043 13.3053V12.2509H26.4993V20.8367H27.7545V15.7655C27.7545 14.1086 28.4072 13.1547 29.6122 13.1547C30.1645 13.1547 30.5662 13.3053 30.9177 13.5061L31.2189 12.2509Z' fill='white'/%3e%3cpath d='M23.5861 18.728C23.084 19.431 22.2305 20.0335 21.1259 20.0335C20.0715 20.0335 19.3686 19.4812 19.3686 18.1757C19.3686 17.0711 20.1217 16.4686 21.3769 16.4686C22.4313 16.4686 23.0338 16.6695 23.5861 16.9707V18.728ZM24.7912 20.8368V14.8117C24.7912 12.8033 23.6363 12 21.7786 12C20.674 12 19.6196 12.3013 18.8665 12.7029L19.3183 13.7071C20.0213 13.3054 20.7744 13.0544 21.6782 13.0544C22.9334 13.0544 23.5359 13.6569 23.5359 14.9623V15.9665C23.0338 15.6653 22.2305 15.4644 21.3769 15.4644C19.6698 15.4644 18.0631 16.2678 18.0631 18.2259C18.0631 20.3347 19.469 20.9874 20.8246 20.9874C22.0799 20.9874 22.9334 20.4351 23.5359 19.7322V20.8368H24.7912Z' fill='white'/%3e%3cpath d='M15.7541 16.3682C15.7541 18.6778 15.0511 19.9331 13.5951 19.9331C12.5909 19.9331 11.7373 19.3808 11.2854 18.6276V14.3096C11.8879 13.5565 12.6411 13.0544 13.5448 13.0544C14.9005 13.1046 15.7541 14.2092 15.7541 16.3682ZM16.9591 16.3682C16.9591 13.3054 15.6034 12 13.8461 12C12.6913 12 11.8377 12.5523 11.2352 13.2552V12.2008H9.97998V24L11.2352 23.2971V19.8326C11.8377 20.5356 12.5909 20.9874 13.6453 20.9874C15.503 20.9874 16.9591 19.431 16.9591 16.3682Z' fill='white'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='32' height='32' rx='16' fill='%237F2684'/%3e%3cpath d='M17.0938 15.0534C17.0938 15.6504 16.3334 15.6963 16.3334 15.6963H15.3427V14.4104H16.3334C16.3334 14.4104 17.0938 14.4563 17.0938 15.0534Z' fill='white'/%3e%3cpath d='M21.493 13.6152C21.1467 13.7903 20.7638 13.8813 20.3755 13.8808C19.9633 13.8808 19.5576 13.7785 19.1949 13.5833C18.8322 13.3881 18.524 13.1061 18.2979 12.7626C18.0719 12.419 17.9351 12.0249 17.9 11.6156C17.8649 11.2063 17.9325 10.7947 18.0967 10.4179C16.7996 9.93576 15.3751 9.91546 14.0647 10.3605C12.7543 10.8055 11.6386 11.6884 10.9068 12.8596C10.175 14.0308 9.8721 15.4182 10.0494 16.7865C10.2268 18.1549 10.8735 19.42 11.8799 20.3674C12.8863 21.3148 14.1905 21.8863 15.5713 21.9848C16.9522 22.0834 18.3248 21.703 19.4564 20.9081C20.588 20.1133 21.4089 18.9529 21.7801 17.6238C22.1513 16.2946 22.0499 14.8783 21.493 13.6152ZM16.6328 16.7986H15.4347V19.0949H14.1444V13.2623H16.5407C16.5407 13.2623 18.5222 13.2623 18.5222 15.0993C18.5222 16.9364 16.6328 16.7986 16.6328 16.7986Z' fill='white'/%3e%3cpath d='M21.7848 11.4046C21.7848 11.6824 21.7021 11.9539 21.5472 12.1849C21.3924 12.4159 21.1723 12.5959 20.9148 12.7022C20.6572 12.8085 20.3739 12.8364 20.1005 12.7822C19.8271 12.728 19.576 12.5942 19.3789 12.3978C19.1818 12.2013 19.0475 11.9511 18.9931 11.6786C18.9388 11.4061 18.9667 11.1237 19.0733 10.8671C19.18 10.6104 19.3607 10.3911 19.5924 10.2367C19.8242 10.0824 20.0967 10 20.3754 10C20.5605 9.9999 20.7438 10.0362 20.9149 10.1067C21.0859 10.1773 21.2413 10.2807 21.3722 10.4112C21.5031 10.5416 21.6069 10.6965 21.6777 10.8669C21.7485 11.0374 21.7849 11.2201 21.7848 11.4046Z' fill='white'/%3e%3c/svg%3e";

var img$2$1 = "data:image/svg+xml,%3csvg width='61' height='32' viewBox='0 0 61 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='60.05' height='32' rx='16' fill='%237F2684'/%3e%3cpath d='M31.4166 13.2486C31.4166 12.3104 31.4166 11.3475 31.4166 10.4093C31.4166 10.113 31.4907 10.0389 31.787 10.0143C33.2686 9.96488 33.2686 9.96488 33.2686 11.3969C33.2686 12.5079 33.2686 12.5079 34.3798 12.5079C34.6267 12.5079 34.8983 12.5079 35.1453 12.5079C35.8613 12.5079 35.7873 12.4091 35.7873 13.1745C35.7873 14.2608 35.7873 14.2608 34.7255 14.2608C34.3304 14.2608 33.9353 14.2608 33.5402 14.2608C33.318 14.2608 33.2439 14.3349 33.2439 14.5571C33.2686 15.0756 33.2439 15.5941 33.2933 16.1126C33.3427 16.952 34.0341 17.5939 34.8736 17.5692C35.0465 17.5939 35.2193 17.5939 35.3922 17.5692C35.7132 17.5199 35.812 17.668 35.7873 17.989C35.7873 18.1371 35.7873 18.3099 35.7873 18.4581C35.7873 19.495 35.7873 19.495 34.7255 19.4209C32.8488 19.3469 31.3672 17.7668 31.4166 15.8904C31.3919 15.0015 31.4166 14.1127 31.4166 13.2486Z' fill='white'/%3e%3cpath d='M29.3428 19.3221C29.3428 18.0877 29.3181 16.8532 29.3181 15.6187C29.3428 15.5446 29.3181 15.4459 29.244 15.3965L28.8242 14.7546L28.7254 14.6558L28.602 14.5571C27.8118 14.088 26.7994 14.3596 26.3302 15.1496C26.1574 15.4706 26.0833 15.8409 26.1327 16.1866C25.9598 16.7791 26.0586 17.421 26.0586 18.0136C26.0339 19.1987 26.0586 19.1987 24.8486 19.174C24.5276 19.174 24.4042 19.0752 24.4042 18.7296C24.4289 17.5939 24.4042 16.4582 24.4042 15.3224C24.4289 14.8287 24.6264 14.3842 24.9227 13.9892L25.0215 13.8658C25.0956 13.6929 25.1943 13.5695 25.3425 13.4707L25.4413 13.372C25.4907 13.2485 25.6141 13.1745 25.7129 13.1498L25.8364 13.051C26.0833 12.8288 26.4043 12.6807 26.75 12.6313C26.8241 12.656 26.9229 12.6313 26.9722 12.5572L27.1698 12.5325C27.1945 12.5325 27.2192 12.5325 27.2439 12.5325L27.4908 12.4832C27.6143 12.5819 27.7624 12.5819 27.8859 12.4832C28.5279 12.4832 29.1452 12.6807 29.6391 13.0757L29.7625 13.1745L29.9601 13.3226C29.9601 13.5942 30.0836 13.7176 30.3305 13.6929C30.6021 13.9398 30.7996 14.2608 30.8737 14.6064C30.849 14.6805 30.8984 14.7793 30.9478 14.8287L30.9725 14.9768L31.0466 15.1496L31.1207 15.7669L31.096 15.7915C31.096 15.8162 31.1207 15.8409 31.1207 15.8656C31.1454 17.0013 31.17 18.137 31.1207 19.2728L29.3428 19.3221Z' fill='white'/%3e%3cpath d='M17.1439 14.8287C17.1439 14.2855 17.1439 13.7176 17.1439 13.1745C17.1439 12.9276 17.218 12.8288 17.4649 12.8535C17.8353 12.8782 18.2304 12.8782 18.6008 12.8535C18.9218 12.8288 19.0206 12.9523 18.9959 13.2732C18.9712 14.2361 18.9959 15.199 18.9959 16.1619C18.9959 17.1989 19.6379 17.8902 20.5515 17.9148C21.4405 17.9148 22.1813 17.1989 22.1813 16.2853C22.1813 16.236 22.1813 16.2113 22.1813 16.1619C22.1813 15.199 22.1813 14.2361 22.1813 13.2732C22.1813 12.977 22.2554 12.8535 22.5764 12.8535C24.0333 12.8288 24.0333 12.8288 24.0333 14.2855C24.0579 15.1496 24.0579 16.0138 23.9839 16.8532C23.7369 18.7049 21.9097 19.8159 20.4281 19.7419C18.6255 19.6431 17.218 18.1864 17.1686 16.3841C17.1439 15.8409 17.1439 15.3471 17.1439 14.8287Z' fill='white'/%3e%3cpath d='M39.442 19.7419C37.5407 19.7419 36.0344 18.1865 36.0344 16.3101V16.2854C36.0591 14.3843 37.5901 12.8535 39.4914 12.8782C41.3681 12.9029 42.8744 14.409 42.9238 16.2854C42.9238 18.1865 41.3928 19.7419 39.4914 19.7419C39.4667 19.7419 39.442 19.7419 39.442 19.7419ZM39.442 17.8902C40.331 17.9149 41.0471 17.1989 41.0718 16.3347C41.0718 16.3347 41.0718 16.3348 41.0718 16.3101C41.0471 15.4212 40.331 14.7052 39.4667 14.7052C38.6025 14.7299 37.9111 15.4212 37.8864 16.2854C37.8617 17.1495 38.5284 17.8655 39.3927 17.8902C39.3927 17.8902 39.4174 17.8902 39.442 17.8902Z' fill='white'/%3e%3cpath d='M47.1955 12.5325C47.8375 12.5325 48.4796 12.5325 49.0969 12.5325C49.3685 12.5325 49.4426 12.6066 49.4426 12.8782C49.492 14.3843 49.492 14.3842 48.0104 14.3842C47.1955 14.3842 46.356 14.3842 45.5411 14.3842C45.2942 14.3842 45.0225 14.3843 45.0225 14.7052C45.0225 15.0509 45.3189 15.0262 45.5658 15.0262C46.3313 15.0262 47.1214 15.0015 47.8869 15.0509C48.9981 15.0509 49.9364 15.8903 50.0352 17.0013C50.134 18.0136 49.5167 18.9518 48.5536 19.2728C48.282 19.3468 48.0104 19.3962 47.7388 19.3962C46.5535 19.4209 45.3682 19.3962 44.183 19.4209C43.8126 19.4209 43.7385 19.2975 43.7632 18.9765C43.7879 18.5321 43.6397 17.9642 43.862 17.6926C44.1089 17.3964 44.7015 17.5939 45.146 17.5939C45.9856 17.5692 46.8251 17.5939 47.6647 17.5939C47.9116 17.5939 48.1832 17.5692 48.1832 17.2482C48.1832 16.9273 47.9116 16.9026 47.6647 16.9026C46.8992 16.9026 46.109 16.9026 45.3435 16.9026C44.1336 16.9026 43.1706 15.9397 43.1459 14.7546C43.1459 14.7299 43.1459 14.7299 43.1459 14.7052C43.1459 13.5201 44.1336 12.5572 45.3189 12.5572C45.3435 12.5572 45.3436 12.5572 45.3682 12.5572C45.9856 12.5079 46.5782 12.5325 47.1955 12.5325Z' fill='white'/%3e%3cpath d='M10.0323 18.6063C10.0323 17.7422 10.0323 16.8533 10.0323 15.9892C10.0323 14.0881 11.5385 12.5574 13.4399 12.5574H13.4646C15.3412 12.5574 16.8722 14.0881 16.8969 15.9645C16.9216 17.8656 15.4153 19.421 13.514 19.4457C13.0942 19.4457 12.6991 19.4704 12.2793 19.4457C11.9336 19.421 11.8842 19.5445 11.8842 19.8655C11.9089 20.4333 11.8842 21.0012 11.9089 21.569C11.9336 21.89 11.8101 21.9888 11.4891 21.9641C11.02 21.9394 10.4273 22.1122 10.1557 21.8653C9.8594 21.6184 10.0816 21.0012 10.0569 20.5321C10.0076 19.8901 10.0076 19.2482 10.0323 18.6063ZM11.8595 16.5324C11.8842 17.5693 11.8842 17.5693 12.8966 17.5693C13.1189 17.5693 13.3411 17.5693 13.5633 17.5693C14.3782 17.52 15.0202 16.8287 15.0696 16.0139C15.0696 15.1991 14.5017 14.5325 13.6868 14.3844C12.8966 14.2856 12.1312 14.7794 11.9089 15.5448C11.8595 15.8905 11.8348 16.2114 11.8595 16.5324Z' fill='white'/%3e%3c/svg%3e";

var img$1$1 = "data:image/svg+xml,%3csvg width='43' height='32' viewBox='0 0 43 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='42.97' height='32' rx='16' fill='%23DF0F20'/%3e%3cpath d='M31.3709 14.1904C31.3709 14.2666 31.3328 14.3428 31.2947 14.419C31.1804 14.6856 30.8376 14.8761 30.4947 14.8761C30.19 14.8761 29.9614 14.7237 30.0376 14.3809C30.1138 13.8857 30.7233 13.7333 31.4852 13.7333L31.3709 14.1904ZM32.9328 13.2762C33.0852 12.3238 32.7804 11.5238 31.2566 11.5238C30.4185 11.5238 29.7709 11.7143 29.4281 11.9047L29.5424 12.7047C29.8852 12.5524 30.3804 12.4 30.8376 12.4C31.5233 12.4 31.5995 12.7047 31.5614 12.9333V12.9714C29.9614 12.9714 28.7805 13.4666 28.6281 14.5333C28.5138 15.1809 28.971 15.7904 29.8852 15.7904C30.4185 15.7904 30.9138 15.5999 31.2947 15.2952H31.3328V15.6761H32.628C32.628 15.4475 32.6661 15.0666 32.7423 14.6856L32.9328 13.2762Z' fill='white'/%3e%3cpath d='M26.7624 10.8763L26.6481 11.6382H26.0386L25.8862 12.5525H26.4957L26.191 14.2286C26.0767 14.8 26.1529 15.181 26.3815 15.4476C26.5719 15.6381 26.9529 15.7905 27.41 15.7905C27.791 15.7905 28.1719 15.7524 28.3624 15.6762L28.5147 14.7238C28.3624 14.7619 28.2862 14.7619 28.0957 14.7619C27.6767 14.7619 27.5624 14.5334 27.6767 14.0381L27.9433 12.5525H28.9719L29.1243 11.6382H28.0957L28.2862 10.5334L26.7624 10.8763Z' fill='white'/%3e%3cpath d='M20.7047 15.6761H22.1142L22.5332 13.3523C22.5332 13.238 22.5713 13.1238 22.6475 13.0476C22.7999 12.819 23.0666 12.5904 23.4475 12.5904C23.9427 12.5904 24.0951 12.9333 24.0189 13.4666L23.638 15.7142H25.0475L25.4665 13.3142C25.6951 12.1333 25.0856 11.5619 24.1332 11.5619C23.3713 11.5619 22.838 11.9428 22.6094 12.2095H22.5713L22.6094 11.6381H21.3904C21.3523 12.019 21.2761 12.4381 21.1999 12.9333L20.7047 15.6761Z' fill='white'/%3e%3cpath d='M18.9135 14.1904C18.9135 14.2666 18.8754 14.3428 18.8373 14.419C18.6849 14.6856 18.3802 14.8761 18.0373 14.8761C17.7326 14.8761 17.504 14.7237 17.5802 14.3809C17.6564 13.8857 18.2659 13.7333 19.0278 13.7333L18.9135 14.1904ZM20.4373 13.2762C20.5897 12.3238 20.2849 11.5238 18.7611 11.5238C17.9231 11.5238 17.2754 11.7143 16.9326 11.9047L17.0469 12.7047C17.3897 12.5524 17.885 12.4 18.3421 12.4C19.0278 12.4 19.104 12.7047 19.0659 12.9333V12.9714C17.4659 12.9714 16.285 13.4666 16.1326 14.5333C16.0183 15.1809 16.4755 15.7904 17.3897 15.7904C17.9231 15.7904 18.4183 15.5999 18.7992 15.2952H18.8373V15.6761H20.1325C20.1325 15.4475 20.1706 15.0666 20.2468 14.6856L20.4373 13.2762Z' fill='white'/%3e%3cpath d='M11.4861 15.4094C11.8289 15.5999 12.4765 15.7523 13.2003 15.7523C14.9146 15.7523 15.867 14.9523 16.0193 14.038C16.1717 13.238 15.7527 12.7428 14.686 12.3619C13.9241 12.0952 13.5813 11.9428 13.6575 11.5619C13.6956 11.2952 14.0384 11.0286 14.6479 11.0286C15.2574 11.0286 15.6765 11.1809 15.905 11.2952L16.4003 10.2667C16.0574 10.1143 15.5622 10 14.8384 10C13.3527 10 12.3242 10.7238 12.1718 11.6762C12.0194 12.4761 12.6289 13.0095 13.6194 13.3523C14.3432 13.5809 14.6098 13.7714 14.5336 14.1142C14.4575 14.4952 14.0765 14.7237 13.4289 14.7237C12.8194 14.7237 12.248 14.5332 11.9051 14.3809L11.4861 15.4094Z' fill='white'/%3e%3cpath d='M29.8086 21.8856H31.2181L32.2847 16.019H30.8371L29.8086 21.8856Z' fill='white'/%3e%3cpath d='M26.8768 19.4096C26.953 19.0667 27.2958 18.5715 27.9053 18.5715C28.5529 18.5715 28.6291 19.1048 28.5529 19.4096H26.8768ZM29.6577 20.2857C29.6958 20.2095 29.772 20.0191 29.8101 19.7905C30.0005 18.8 29.6196 17.7715 28.1339 17.7715C26.5339 17.7715 25.6197 18.9143 25.4673 19.9429C25.2387 21.2 26.0006 22 27.5244 22C28.1339 22 28.7053 21.9238 29.2386 21.7333L29.2005 20.8952C28.7815 21.0095 28.4006 21.0857 27.9053 21.0857C27.2577 21.0857 26.6863 20.819 26.7625 20.3238H29.6577V20.2857Z' fill='white'/%3e%3cpath d='M22.0381 19.5997C22.0381 19.5235 22.0762 19.4473 22.1143 19.3711C22.2667 18.9902 22.6857 18.7616 23.0667 18.7616C23.7143 18.7616 23.9429 19.2568 23.8286 19.9044C23.7143 20.6282 23.2572 21.0473 22.6477 21.0473C22.2286 21.0473 21.9619 20.7806 21.9239 20.4378C21.9239 20.3616 21.9239 20.2854 21.9239 20.2092L22.0381 19.5997ZM20.4382 20.6663C20.362 21.1235 20.2477 21.6187 20.1715 21.8854H21.3905L21.5429 21.3139C21.7715 21.8092 22.2667 21.9616 22.8 21.9616C23.8286 21.9616 25.0095 21.2378 25.2762 19.7902C25.5047 18.533 24.8571 17.7331 23.7524 17.7331C23.1048 17.7331 22.6096 17.9616 22.2667 18.3045L22.6857 15.9807H21.2762L20.4382 20.6663Z' fill='white'/%3e%3cpath d='M18.4191 20.4381C18.4191 20.5143 18.381 20.5905 18.3429 20.6667C18.1906 20.9333 17.8858 21.1238 17.543 21.1238C17.2382 21.1238 17.0096 20.9714 17.0858 20.6286C17.162 20.1334 17.7715 19.981 18.5334 19.981L18.4191 20.4381ZM19.9429 19.4857C20.0953 18.5334 19.7905 17.7334 18.2668 17.7334C17.4287 17.7334 16.7811 17.9239 16.4382 18.1143L16.5525 18.9143C16.8953 18.7619 17.3906 18.6096 17.8477 18.6096C18.5334 18.6096 18.6096 18.9143 18.5715 19.1429V19.181C16.9715 19.181 15.7906 19.6762 15.6382 20.7429C15.5239 21.3905 15.9811 22 16.8953 22C17.4287 22 17.9239 21.8095 18.3048 21.5048H18.3429V21.8857H19.6382C19.6382 21.6571 19.6762 21.2762 19.7524 20.8952L19.9429 19.4857Z' fill='white'/%3e%3cpath d='M11.9045 21.6952C12.2093 21.8476 12.7426 22 13.314 22C14.6093 22 15.3711 21.4286 15.5235 20.6667C15.6378 20.0953 15.333 19.6762 14.5331 19.4096C13.9997 19.2191 13.8474 19.1429 13.8855 18.9524C13.9236 18.7619 14.1521 18.6477 14.495 18.6477C14.8759 18.6477 15.2569 18.7619 15.4473 18.8762L15.8283 18.0001C15.5616 17.8858 15.1426 17.7715 14.6093 17.7715C13.4664 17.7715 12.6664 18.3429 12.5141 19.1048C12.4379 19.6 12.7045 20.0572 13.6188 20.3238C14.114 20.4762 14.2283 20.5905 14.1902 20.781C14.1521 20.9714 13.9616 21.1238 13.5426 21.1238C13.1236 21.1238 12.5902 20.9714 12.3617 20.819L11.9045 21.6952Z' fill='white'/%3e%3cpath d='M10.9905 16.3237L10 21.8855H11.4095L12.4 16.3237H10.9905Z' fill='white'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3csvg width='51' height='32' viewBox='0 0 51 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='50.96' height='32' rx='16' fill='%23E8308A'/%3e%3cpath d='M37.1975 10.2402H34.0511C33.6467 10.2402 33.453 10.3371 33.3603 10.8257L31.7176 21.0103C31.6418 21.5116 31.7345 21.7559 32.181 21.7559H35.58C36.9026 21.7559 37.9809 21.3852 38.7896 20.6944C39.1518 20.3827 39.4635 20.0079 39.7205 19.574C39.573 19.6583 39.434 19.7636 39.3119 19.8899C39.4382 19.7636 39.573 19.6583 39.7205 19.574C40.0785 18.9633 40.327 18.2388 40.4618 17.4091L40.883 14.7639C41.3294 12.0261 39.91 10.2402 37.1975 10.2402ZM38.2631 14.6039L37.8293 17.1985C37.606 18.6095 36.9742 19.1613 35.7317 19.1613H34.6829L35.7022 12.8348H36.8394C38.1409 12.8348 38.44 13.454 38.2631 14.6039ZM38.8149 20.6312C38.8107 20.6397 38.8064 20.6481 38.8064 20.6565C38.8107 20.6481 38.8107 20.6397 38.8149 20.6312C38.8444 20.5723 38.8696 20.5133 38.8991 20.4586C38.8696 20.5133 38.8444 20.5723 38.8149 20.6312Z' fill='white'/%3e%3cpath d='M28.217 21.7559H29.7123C30.0703 21.7559 30.2978 21.6421 30.3694 21.2041L32.0163 10.9521C32.1047 10.4508 31.9573 10.2402 31.5361 10.2402H30.0703C29.7123 10.2402 29.4722 10.3034 29.3964 10.792L27.7327 21.0272C27.6611 21.5453 27.7832 21.7559 28.217 21.7559Z' fill='white'/%3e%3cpath d='M27.9309 13.614C27.9309 11.5881 26.8358 10.2402 24.5023 10.2402H21.2843C20.8042 10.2402 20.6399 10.3371 20.5641 10.8089L18.9046 21.0103C18.8287 21.4821 18.8877 21.7559 19.3974 21.7559H20.8505C21.2843 21.7559 21.4486 21.6421 21.5413 21.1704L22.0341 18.1377H23.681C26.2713 18.142 27.9309 16.3392 27.9309 13.614ZM22.8849 12.8348H24.1443C24.9656 12.8348 25.2815 13.2392 25.2815 13.9384C25.2815 15.0251 24.6245 15.5431 23.681 15.5431H22.4511L22.8849 12.8348Z' fill='white'/%3e%3cpath d='M18.4072 17.8975C18.4072 15.7704 16.9415 15.0249 15.1261 14.7006C14.1995 14.5532 13.5845 14.3931 13.5971 13.5634C13.614 12.8515 14.1531 12.5272 15.1261 12.5272C15.741 12.5272 16.3392 12.7378 16.5498 13.4538C16.6677 13.8287 16.8488 13.9551 17.1942 13.8119L18.5884 13.3106C18.9759 13.1801 19.0517 12.9863 18.9169 12.5146C18.4367 10.8761 17.2532 10 15.2314 10C12.6242 10 10.8888 11.2804 10.8888 13.7318C10.8888 15.9853 12.4894 16.9287 14.2711 17.1857C15.1977 17.3163 15.6779 17.6237 15.6779 18.3061C15.6779 19.0347 15.0503 19.4728 14.031 19.4728C13.1759 19.4728 12.7 19.0853 12.4894 18.483C12.3083 18.0281 12.144 17.9312 11.7691 18.0449L10.375 18.5462C10.0464 18.6599 9.92427 18.8705 10.0464 19.3717C10.4676 21.1239 11.7818 22 13.833 22C16.5834 22 18.3946 20.6564 18.4072 17.8975Z' fill='white'/%3e%3c/svg%3e";

var Styles$6 = {"xtag_business":"root-module_xtag_business__boNqC","xtag_business--size-s":"root-module_xtag_business--size-s__IJchy","xtag_business--size-l":"root-module_xtag_business--size-l__rr9wC"};

const brands = {
  'easy': img$6,
  'jumbo': img$5,
  'paris': img$4,
  'puntos-small': img$3,
  'puntos': img$2$1,
  'san-isabel': img$1$1,
  'spid': img$7
};
const XTagBusiness = props => {
  const rootClass = classnames(Styles$6.xtag_business, {
    [Styles$6[`xtag_business--size-${props.size}`]]: props.size
  });
  return jsx("div", {
    className: rootClass,
    children: jsx(XImage, {
      src: brands[props.brand],
      height: "full"
    })
  });
};
XTagBusiness.defaultProps = {
  size: 's'
};

var Styles$5 = {"xheader":"root-module_xheader__fOYeD","xheader--sticky":"root-module_xheader--sticky__THgyI","xheader-sticky_pinned":"root-module_xheader-sticky_pinned__BigZ1","xheader__bar":"root-module_xheader__bar__atGCt","xheader__bar__back":"root-module_xheader__bar__back__i9AO9","xheader__bar__title":"root-module_xheader__bar__title__pV3PH","xheader__bar__tag_first":"root-module_xheader__bar__tag_first__M0BQk","xheader__content":"root-module_xheader__content__4RHQb","header__content__title":"root-module_header__content__title__CDZ16"};

const XHeader = props => {
  const ref = React__default.useRef(null);
  const rootClass = classnames(Styles$5.xheader, {
    [Styles$5['xheader--sticky']]: props.sticky
  });
  const onBackHandler = e => {
    if (props.onBack) {
      props.onBack(e);
    }
  };
  useEffect(() => {
    var _ref$current;
    const onScroll = () => {
      if (ref.current) {
        const targetStiky = 1;
        const origOffsetY = ref.current.offsetTop;
        ref.current.classList.toggle(Styles$5['xheader-sticky_pinned'], origOffsetY >= targetStiky);
      }
    };
    const page = (_ref$current = ref.current) == null ? void 0 : _ref$current.parentNode;
    if (page && props.sticky) {
      page.addEventListener('scroll', onScroll);
    }
    return () => {
      page.removeEventListener('scroll', onScroll);
    };
  }, [props.sticky]);
  return jsxs("div", {
    ref: ref,
    className: rootClass,
    children: [jsxs("div", {
      className: Styles$5.xheader__bar,
      children: [props.onBack && jsx("div", {
        onClick: onBackHandler,
        className: Styles$5.xheader__main__back,
        children: jsx(XIcon, {
          size: "s",
          icon: "arrow-left"
        })
      }), props.title && jsx("div", {
        className: Styles$5.xheader__bar__title,
        children: jsx(XText, {
          weight: "bold",
          fontSize: 9,
          children: props.title
        })
      }), props.tags && props.tags.map((tag, index, array) => {
        const rootClass = classnames({
          [Styles$5.xheader__bar__tag_first]: index === 0 && array.length > 1
        });
        if (tag.type === 'business') {
          return jsx("div", {
            className: rootClass,
            children: jsx(XTagBusiness, {
              brand: tag.brand,
              size: 's'
            })
          }, index);
        }
        return jsx("div", {
          className: rootClass,
          children: jsx(XTag, {
            text: tag.text,
            icon: tag.icon,
            size: 's',
            visible: tag.visible,
            onClose: tag.onClose
          })
        }, index);
      })]
    }), jsx("div", {
      className: Styles$5.xheader__content,
      children: props.title && jsx("div", {
        className: Styles$5.header__content__title,
        children: jsx(XText, {
          weight: "bold",
          fontSize: 9,
          children: props.title
        })
      })
    })]
  });
};
XHeader.defaultProps = {
  title: undefined,
  sticky: false,
  tags: []
};

var fails$e = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$d = fails$e;

var functionBindNative = !fails$d(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$6 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$6, call$6);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$6.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;

var toString$4 = uncurryThis$b({}.toString);
var stringSlice$2 = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$2(toString$4(it), 8, -1);
};

var uncurryThis$a = functionUncurryThis;
var fails$c = fails$e;
var classof$3 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$a(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$7 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$5 = function (it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$e =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var shared$4 = {exports: {}};

var global$d = global$e;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(global$d, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$d[key] = value;
  } return value;
};

var global$c = global$e;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$c[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.30.1',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$1 = requireObjectCoercible$3;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$3(requireObjectCoercible$1(argument));
};

var uncurryThis$9 = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty$1 = uncurryThis$9({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$1(it), key);
};

var uncurryThis$8 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$3 = uncurryThis$8(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$b = global$e;
var userAgent = engineUserAgent;

var process = global$b.process;
var Deno = global$b.Deno;
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
var fails$b = fails$e;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$a = global$e;
var shared$3 = shared$4.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$4 = global$a.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$4['for'] || Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid$1;

var wellKnownSymbol$a = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$8(Symbol$4, name)
      ? Symbol$4[name]
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
var isCallable$f = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$e = isCallable$f;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$b = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it);
};

var isObject$a = isObject$b;

var $String$4 = String;
var $TypeError$6 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$6 = function (argument) {
  if (isObject$a(argument)) return argument;
  throw $TypeError$6($String$4(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$a = fails$e;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$8 = descriptors;
var fails$9 = fails$e;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$9 = global$e;
var isObject$9 = isObject$b;

var document$1 = global$9.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$9(document$1) && isObject$9(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$8 = fails$e;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND = functionBindNative;

var call$5 = Function.prototype.call;

var functionCall = NATIVE_BIND ? call$5.bind(call$5) : function () {
  return call$5.apply(call$5, arguments);
};

var global$8 = global$e;
var isCallable$d = isCallable$f;

var aFunction = function (argument) {
  return isCallable$d(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$8[namespace]) : global$8[namespace] && global$8[namespace][method];
};

var uncurryThis$7 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);

var getBuiltIn$2 = getBuiltIn$3;
var isCallable$c = isCallable$f;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$4 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$c($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$b = isCallable$f;
var tryToString = tryToString$1;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$b(argument)) return argument;
  throw $TypeError$5(tryToString(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
};

var call$4 = functionCall;
var isCallable$a = isCallable$f;
var isObject$8 = isObject$b;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$8(val = call$4(fn, input))) return val;
  if (isCallable$a(fn = input.valueOf) && !isObject$8(val = call$4(fn, input))) return val;
  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$8(val = call$4(fn, input))) return val;
  throw $TypeError$4("Can't convert object to primitive value");
};

var call$3 = functionCall;
var isObject$7 = isObject$b;
var isSymbol$3 = isSymbol$4;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;

var $TypeError$3 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$3(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$3(result)) return result;
    throw $TypeError$3("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$5 = anObject$6;
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
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$5(O);
  P = toPropertyKey$1(P);
  anObject$5(Attributes);
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
  anObject$5(O);
  P = toPropertyKey$1(P);
  anObject$5(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike(O);
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
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var hiddenKeys$4 = {};

var uncurryThis$6 = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push = uncurryThis$6([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$3, key) && hasOwn$7(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf$1(result, key) || push(result, key);
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
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$3 = objectDefineProperty;
var anObject$4 = anObject$6;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$3;

var html$1 = getBuiltIn$1('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$3 = anObject$6;
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
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$8 = wellKnownSymbol$a;
var create$2 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$8('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$7 = global$e;
var isCallable$9 = isCallable$f;

var WeakMap$1 = global$7.WeakMap;

var weakMapBasicDetection = isCallable$9(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$6 = global$e;
var isObject$6 = isObject$b;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$6 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$6.TypeError;
var WeakMap = global$6.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$6(it) || (state = get(it)).type !== TYPE) {
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
    if (hasOwn$6(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$6(it, STATE);
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

var DESCRIPTORS$3 = descriptors;
var call$2 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$2(propertyIsEnumerableModule.f, O, P), O[P]);
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$2 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$5 = functionUncurryThis;
var isCallable$8 = isCallable$f;
var store = sharedStore;

var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$8(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store.inspectSource;

var uncurryThis$4 = functionUncurryThis;
var fails$7 = fails$e;
var isCallable$7 = isCallable$f;
var hasOwn$3 = hasOwnProperty_1;
var DESCRIPTORS$1 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;
var stringSlice$1 = uncurryThis$4(''.slice);
var replace$1 = uncurryThis$4(''.replace);
var join = uncurryThis$4([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$7(function () {
  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$1) defineProperty$2(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$3(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$1) defineProperty$2(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$3(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$7(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$6 = isCallable$f;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$3 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$6(value)) makeBuiltIn(value, name, options);
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

var getBuiltIn = getBuiltIn$3;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$2 = anObject$6;

var concat = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$2(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$6 = fails$e;
var isCallable$5 = isCallable$f;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$5(detection) ? fails$6(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$5 = global$e;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$2 = defineBuiltIn$3;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
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
    target = global$5;
  } else if (STATIC) {
    target = global$5[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$5[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn$2(target, key, sourceProperty, options);
  }
};

var fails$5 = fails$e;

var correctPrototypeGetter = !fails$5(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$4 = isCallable$f;
var toObject = toObject$2;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$4(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$4 = fails$e;
var isCallable$3 = isCallable$f;
var isObject$5 = isObject$b;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$3;
var wellKnownSymbol$7 = wellKnownSymbol$a;

var ITERATOR$2 = wellKnownSymbol$7('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$4(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$3(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$6 = wellKnownSymbol$a;

var TO_STRING_TAG$3 = wellKnownSymbol$6('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$3)) {
    defineProperty$1(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
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

var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$2;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$2(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$2 = isCallable$f;

var $String$1 = String;
var $TypeError$1 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$2(argument)) return argument;
  throw $TypeError$1("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$1 = anObject$6;
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
    anObject$1(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$3 = _export;
var call$1 = functionCall;
var FunctionName = functionName;
var isCallable$1 = isCallable$f;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$3;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$5('iterator');
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
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$1(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$1(nativeIterator, this); };
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
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
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
var addToUnscopables$1 = addToUnscopables$2;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS = descriptors;

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
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
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

var global$4 = global$e;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var wellKnownSymbol$4 = wellKnownSymbol$a;

var ITERATOR = wellKnownSymbol$4('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$4('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$4[COLLECTION_NAME] && global$4[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var $$2 = _export;
var $includes = arrayIncludes.includes;
var fails$3 = fails$e;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$3(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$2({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject$4 = isObject$b;
var classof$2 = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$a;

var MATCH$1 = wellKnownSymbol$3('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$4(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$2 = wellKnownSymbol$a;

var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$f;
var classofRaw = classofRaw$1;
var wellKnownSymbol$1 = wellKnownSymbol$a;

var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var classof = classof$1;

var $String = String;

var toString$2 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var wellKnownSymbol = wellKnownSymbol$a;

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

var $$1 = _export;
var uncurryThis$1 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$3;
var toString$1 = toString$2;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$1(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString$1(requireObjectCoercible(this)),
      toString$1(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

var _root = root$2;

var root$1 = _root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root$1.Date.now();
};

var now_1 = now$1;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;

var root = _root;

/** Built-in value references. */
var Symbol$3 = root.Symbol;

var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

var baseTrim = _baseTrim,
    isObject$2 = isObject_1,
    isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var isObject$1 = isObject_1,
    now = now_1,
    toNumber = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce$1;

var debounce = debounce_1,
    isObject = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var Styles$4 = {"xbody":"root-module_xbody__VGU0O"};

const XBody = props => {
  const myRef = useRef(null);
  const [footerHeight, setFooterHeight] = React__default.useState(0);
  const [headerHeight, setHeaderHeight] = React__default.useState(0);
  const [pageHeight, setPageHeight] = React__default.useState(0);
  const [bodyHeight, setBodyHeight] = React__default.useState(0);
  const onResize = throttle_1(() => {
    const myElement = myRef.current;
    if (myElement) {
      setBodyHeight(myElement.scrollHeight);
      const parentElement = myElement.parentNode;
      if (parentElement) {
        setPageHeight(parentElement.scrollHeight);
        const childrens = parentElement.children;
        // iterate over childrens
        for (let i = 0; i < childrens.length; i++) {
          const element = childrens[i];
          if (element.className.includes('xfooter')) {
            setFooterHeight(element.scrollHeight);
          }
          if (element.className.includes('xheader')) {
            setHeaderHeight(element.scrollHeight);
          }
        }
      }
    }
  }, 200, {
    trailing: true
  });
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const ro = new ResizeObserver(entries => {
  //   for (const entry of entries) {
  //     const cr = entry.contentRect;
  //     const {
  //       width,
  //       height,
  //       top,
  //       left
  //     } = cr
  //     console.log(entry.target);
  //     console.log(width, height, top, left)
  //   }
  // });
  // ro.observe(document.querySelector('html'));
  const styles = {};
  const availableBodyHeight = pageHeight - headerHeight - footerHeight - 48;
  if (availableBodyHeight > bodyHeight) {
    // agregar min-height
    styles.height = `${availableBodyHeight}px`;
    styles.minHeight = `${availableBodyHeight}px`;
  } else {
    // agregar padding
    styles.paddingBottom = `${footerHeight}px`;
  }
  return jsx("div", {
    ref: myRef,
    className: Styles$4.xbody,
    style: styles,
    children: props.children
  });
};
XBody.defaultProps = {};

var Styles$3 = {"xfooter":"root-module_xfooter__DTxcE","xfooter--backround-solid":"root-module_xfooter--backround-solid__2mamM","xfooter--backround-gradient":"root-module_xfooter--backround-gradient__Q8vTz","xfooter--backround-transparent":"root-module_xfooter--backround-transparent__HR49f"};

const XFooter = props => {
  const rootClass = classnames(Styles$3.xfooter, {
    [Styles$3[`xfooter--backround-${props.background}`]]: props.background
  });
  return jsx("div", {
    className: rootClass,
    children: jsx(XBox, {
      orientation: 'vertical',
      verticalAlign: 'start',
      horizontalAlign: 'center',
      gap: 's',
      children: props.children
    })
  });
};
XFooter.defaultProps = {
  background: 'gradient'
};

var anObject = anObject$6;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject(this);
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

var fails$2 = fails$e;
var global$3 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$1 = fails$2(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$2(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$2(function () {
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

var fails$1 = fails$e;
var global$2 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$1(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails = fails$e;
var global$1 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = functionCall;
var uncurryThis = functionUncurryThis;
var toString = toString$2;
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
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
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
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
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

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
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

var regexpExec = patchedExec;

var $ = _export;
var exec = regexpExec;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var Styles$2 = {"xbadge":"root-module_xbadge__qYW5H","xbadge--size-xs":"root-module_xbadge--size-xs__K92A3","xbadge--size-s":"root-module_xbadge--size-s__uG51F","xbadge--size-m":"root-module_xbadge--size-m__P7cES","xbadge--size-l":"root-module_xbadge--size-l__4bDKV","xbadge--size-xl":"root-module_xbadge--size-xl__6SeNN","squared":"root-module_squared__f8rDQ"};

const XBadge = props => {
  const isSingleDigit = /^\d$/.test('' + props.value);
  const rootClass = classnames(Styles$2.xbadge, {
    [Styles$2.squared]: isSingleDigit
  }, Styles$2[`xbadge--size-${props.size}`]);
  return jsx("div", {
    className: rootClass,
    children: props.value
  });
};
XBadge.defaultProps = {
  value: 1,
  size: 'm'
};

var Styles$1 = {"xpage":"root-module_xpage__JXLst"};

const XPage = props => {
  const rootClass = classnames(Styles$1.xpage);
  const styles = {};
  if (props.backgroundImage) {
    styles.backgroundImage = `url('${props.backgroundImage}')`;
  }
  return jsx("div", {
    className: rootClass,
    style: styles,
    children: props.children
  });
};
XPage.defaultProps = {};

var Styles = {"xmodal":"root-module_xmodal__tZkke"};

const XModal = props => {
  const rootClass = classnames(Styles.xmodal);
  const styles = {};
  return jsx("div", {
    style: styles,
    className: rootClass,
    children: props.children
  });
};
XModal.defaultProps = {};

var index = {
  XBox,
  XText,
  XIcon,
  XButton,
  XButtonIcon,
  XHeader,
  XBody,
  XFooter,
  XBadge,
  XPage,
  XImage,
  XTag,
  XTagBusiness,
  XModal,
  Molecules: {}
};

var img$2 = "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M35.7783 36.6668H4.22199C3.97821 36.6413 3.75249 36.5258 3.5884 36.3427C3.42431 36.1596 3.3335 35.9219 3.3335 35.6754C3.3335 35.4289 3.42431 35.1912 3.5884 35.0081C3.75249 34.825 3.97821 34.7095 4.22199 34.684H35.7783C36.0221 34.7095 36.2478 34.825 36.4119 35.0081C36.576 35.1912 36.6668 35.4289 36.6668 35.6754C36.6668 35.9219 36.576 36.1596 36.4119 36.3427C36.2478 36.5258 36.0221 36.6413 35.7783 36.6668Z' fill='black'/%3e%3cpath d='M35.7782 19.1963H4.22184C4.00953 19.1408 3.82155 19.0159 3.68738 18.8413C3.55321 18.6668 3.48042 18.4524 3.48042 18.2317C3.48042 18.0111 3.55321 17.7967 3.68738 17.6221C3.82155 17.4475 4.00953 17.3227 4.22184 17.2671H35.7782C36.022 17.2926 36.2477 17.4081 36.4118 17.5912C36.5759 17.7743 36.6667 18.012 36.6667 18.2585C36.6667 18.505 36.5759 18.7428 36.4118 18.9259C36.2477 19.109 36.022 19.2244 35.7782 19.2499V19.1963Z' fill='black'/%3e%3cpath d='M16.6167 3.3335H8.75157C8.20889 3.3335 7.68843 3.55031 7.30469 3.93623C6.92095 4.32216 6.70537 4.84559 6.70537 5.39138V13.3013C6.70536 13.8481 6.9206 14.3727 7.30404 14.7603C7.68747 15.1479 8.20791 15.3671 8.75157 15.3699H16.6167C17.1603 15.3671 17.6808 15.1479 18.0642 14.7603C18.4477 14.3727 18.6629 13.8481 18.6629 13.3013V5.39138C18.6629 4.84559 18.4473 4.32216 18.0636 3.93623C17.6798 3.55031 17.1594 3.3335 16.6167 3.3335ZM8.75157 5.31635H16.6167C16.6365 5.31635 16.6554 5.32425 16.6694 5.33832C16.6834 5.35239 16.6913 5.37148 16.6913 5.39138V6.81689H8.67697V5.39138C8.67697 5.37148 8.68483 5.35239 8.69882 5.33832C8.71281 5.32425 8.73179 5.31635 8.75157 5.31635ZM16.6167 13.3871H8.75157C8.73086 13.3845 8.71182 13.3743 8.69807 13.3585C8.68432 13.3427 8.67681 13.3223 8.67697 13.3013V8.79974H16.6913V13.3013C16.6914 13.3223 16.6839 13.3427 16.6702 13.3585C16.6564 13.3743 16.6374 13.3845 16.6167 13.3871Z' fill='black'/%3e%3cpath d='M31.2497 3.3335H23.3846C22.8456 3.33914 22.3306 3.55844 21.9515 3.94376C21.5723 4.32908 21.3597 4.84929 21.3597 5.39138V13.3013C21.3597 13.8481 21.5749 14.3727 21.9584 14.7603C22.3418 15.1479 22.8623 15.3671 23.4059 15.3699H31.271C31.811 15.3615 32.326 15.1398 32.7048 14.7528C33.0837 14.3658 33.296 13.8444 33.2959 13.3013V5.39138C33.2959 4.84559 33.0803 4.32216 32.6966 3.93623C32.3129 3.55031 31.7924 3.3335 31.2497 3.3335ZM23.3846 5.31635H31.2497C31.2695 5.31635 31.2885 5.32425 31.3025 5.33832C31.3165 5.35239 31.3243 5.37148 31.3243 5.39138V6.81689H23.31V5.39138C23.31 5.37148 23.3179 5.35239 23.3319 5.33832C23.3458 5.32425 23.3648 5.31635 23.3846 5.31635ZM31.2497 13.3871H23.3846C23.3639 13.3845 23.3448 13.3743 23.3311 13.3585C23.3173 13.3427 23.3098 13.3223 23.31 13.3013V8.79974H31.3243V13.3013C31.3245 13.3223 31.317 13.3427 31.3032 13.3585C31.2895 13.3743 31.2704 13.3845 31.2497 13.3871Z' fill='black'/%3e%3cpath d='M31.2497 20.8038H23.3846C22.8456 20.8095 22.3306 21.0288 21.9515 21.4141C21.5723 21.7994 21.3597 22.3196 21.3597 22.8617V30.7717C21.3597 31.3184 21.5749 31.843 21.9584 32.2306C22.3418 32.6182 22.8623 32.8374 23.4059 32.8403H31.271C31.811 32.8318 32.326 32.6102 32.7048 32.2231C33.0837 31.8361 33.296 31.3148 33.2959 30.7717V22.8617C33.2959 22.3159 33.0803 21.7925 32.6966 21.4066C32.3129 21.0206 31.7924 20.8038 31.2497 20.8038ZM23.3846 22.7867H31.2497C31.2595 22.7867 31.2692 22.7886 31.2783 22.7924C31.2873 22.7961 31.2955 22.8017 31.3025 22.8086C31.3094 22.8156 31.3149 22.8239 31.3186 22.833C31.3224 22.8421 31.3243 22.8518 31.3243 22.8617V24.2872H23.31V22.8617C23.31 22.8518 23.3119 22.8421 23.3157 22.833C23.3194 22.8239 23.3249 22.8156 23.3319 22.8086C23.3388 22.8017 23.347 22.7961 23.3561 22.7924C23.3651 22.7886 23.3748 22.7867 23.3846 22.7867ZM31.2497 30.8574H23.3846C23.3639 30.8548 23.3448 30.8446 23.3311 30.8288C23.3173 30.813 23.3098 30.7927 23.31 30.7717V26.2701H31.3243V30.7717C31.3245 30.7927 31.317 30.813 31.3032 30.8288C31.2895 30.8446 31.2704 30.8548 31.2497 30.8574Z' fill='black'/%3e%3cpath d='M16.6167 20.8038H8.75157C8.20889 20.8038 7.68843 21.0206 7.30469 21.4066C6.92095 21.7925 6.70537 22.3159 6.70537 22.8617V30.7717C6.70536 31.3184 6.9206 31.843 7.30404 32.2306C7.68747 32.6182 8.20791 32.8374 8.75157 32.8403H16.6167C17.1603 32.8374 17.6808 32.6182 18.0642 32.2306C18.4477 31.843 18.6629 31.3184 18.6629 30.7717V22.8617C18.6629 22.3159 18.4473 21.7925 18.0636 21.4066C17.6798 21.0206 17.1594 20.8038 16.6167 20.8038ZM8.75157 22.7867H16.6167C16.6265 22.7867 16.6362 22.7886 16.6452 22.7924C16.6543 22.7961 16.6625 22.8017 16.6694 22.8086C16.6764 22.8156 16.6819 22.8239 16.6856 22.833C16.6894 22.8421 16.6913 22.8518 16.6913 22.8617V24.2872H8.67697V22.8617C8.67697 22.8518 8.6789 22.8421 8.68265 22.833C8.6864 22.8239 8.6919 22.8156 8.69882 22.8086C8.70575 22.8017 8.71398 22.7961 8.72303 22.7924C8.73208 22.7886 8.74178 22.7867 8.75157 22.7867ZM16.6167 30.8574H8.75157C8.73086 30.8548 8.71182 30.8446 8.69807 30.8288C8.68432 30.813 8.67681 30.7927 8.67697 30.7717V26.2701H16.6913V30.7717C16.6914 30.7927 16.6839 30.813 16.6702 30.8288C16.6564 30.8446 16.6374 30.8548 16.6167 30.8574Z' fill='black'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.3335 10.0002C3.3335 9.07969 4.07969 8.3335 5.00016 8.3335H5.01683C5.9373 8.3335 6.6835 9.07969 6.6835 10.0002C6.6835 10.9206 5.9373 11.6668 5.01683 11.6668H5.00016C4.07969 11.6668 3.3335 10.9206 3.3335 10.0002ZM11.6668 10.0002C11.6668 9.07969 12.413 8.3335 13.3335 8.3335H35.0002C35.9206 8.3335 36.6668 9.07969 36.6668 10.0002C36.6668 10.9206 35.9206 11.6668 35.0002 11.6668H13.3335C12.413 11.6668 11.6668 10.9206 11.6668 10.0002ZM3.3335 20.0002C3.3335 19.0797 4.07969 18.3335 5.00016 18.3335H5.01683C5.9373 18.3335 6.6835 19.0797 6.6835 20.0002C6.6835 20.9206 5.9373 21.6668 5.01683 21.6668H5.00016C4.07969 21.6668 3.3335 20.9206 3.3335 20.0002ZM11.6668 20.0002C11.6668 19.0797 12.413 18.3335 13.3335 18.3335H35.0002C35.9206 18.3335 36.6668 19.0797 36.6668 20.0002C36.6668 20.9206 35.9206 21.6668 35.0002 21.6668H13.3335C12.413 21.6668 11.6668 20.9206 11.6668 20.0002ZM3.3335 30.0002C3.3335 29.0797 4.07969 28.3335 5.00016 28.3335H5.01683C5.9373 28.3335 6.6835 29.0797 6.6835 30.0002C6.6835 30.9206 5.9373 31.6668 5.01683 31.6668H5.00016C4.07969 31.6668 3.3335 30.9206 3.3335 30.0002ZM11.6668 30.0002C11.6668 29.0797 12.413 28.3335 13.3335 28.3335H35.0002C35.9206 28.3335 36.6668 29.0797 36.6668 30.0002C36.6668 30.9206 35.9206 31.6668 35.0002 31.6668H13.3335C12.413 31.6668 11.6668 30.9206 11.6668 30.0002Z' fill='black'/%3e%3c/svg%3e";

const InventoryFunctionCard = props => {
  return jsx(IonCard, Object.assign({
    type: "button",
    button: true,
    onClick: props.callback
  }, {
    children: jsxs(IonItem, Object.assign({
      lines: "none"
    }, {
      children: [jsx(IonThumbnail, Object.assign({
        slot: "start"
      }, {
        children: jsx("img", {
          alt: "Planograms",
          src: props.icon
        })
      })), jsxs(index.XBox, Object.assign({
        orientation: "horizontal",
        verticalAlign: "center",
        horizontalAlign: "between",
        height: "full",
        width: "full",
        gap: "s",
        padding: "none"
      }, {
        children: [jsx(index.XText, Object.assign({
          fontSize: 10,
          lineHeight: "normal",
          weight: "bold"
        }, {
          children: props.title
        })), jsx(index.XBadge, {
          value: 20,
          size: "s"
        }), jsx(index.XIcon, {
          icon: "chevron-right",
          size: "s"
        })]
      }))]
    }))
  }));
};

const InventoryFunctionList = props => {
  const callbackHandler = path => {
    props.history.push(path);
  };
  return jsxs(Fragment$1, {
    children: [jsx(InventoryFunctionCard, {
      title: "Nuevo inventario",
      icon: img$2,
      callback: () => callbackHandler('inventory/new')
    }), jsx(InventoryFunctionCard, {
      title: "Inventario guardado",
      icon: img$1
    })]
  });
};

class HomePage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a;
    return jsx(IonPage, {
      children: jsxs(index.XPage, {
        children: [jsx(index.XHeader, {
          title: "Inventario de perecibles",
          sticky: true,
          onBack: (_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.onBack
        }), jsx(index.XBody, {
          children: jsx(index.XBox, Object.assign({
            verticalAlign: "start",
            height: "auto",
            width: "full",
            gap: "s",
            padding: "none"
          }, {
            children: jsx(InventoryFunctionList, {
              history: this.props.history
            })
          }))
        }), jsx(index.XFooter, {
          background: "transparent"
        })]
      })
    })
    // <IonPage>
    //   <IonHeader>Home Page</IonHeader>
    //   <IonContent>
    //     <div>
    //       I am the hello world page
    //       <br />
    //       you can extend the below content (red box) !!
    //     </div>
    //     <div style={{ backgroundColor: 'red', border: '1px solid red' }}>
    //       {this.props.extensions?.white_boxes?.red_box && (
    //         <this.props.extensions.white_boxes.red_box />
    //       )}
    //     </div>
    //   </IonContent>
    // </IonPage>
    ;
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/* Ionicons v7.1.0, ES Modules */
const arrowBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";

var img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.00657 6.23984C3.00657 5.50198 3.42555 5.00506 4.02268 5.00004C4.27643 4.99765 4.52167 5.1044 4.70956 5.29903C4.89745 5.49367 5.01421 5.76192 5.03659 6.05036C5.03659 6.1131 5.03659 13.8732 5.03659 17.6917C5.03659 18.412 4.62861 18.919 4.04688 18.9328C3.91168 18.9396 3.77669 18.9149 3.65011 18.8603C3.52353 18.8057 3.40801 18.7223 3.31059 18.6151C3.21317 18.5079 3.13588 18.3792 3.08342 18.2369C3.03097 18.0945 3.00444 17.9415 3.00547 17.7871C2.99557 17.0153 3.00107 8.13719 3.00657 6.23984Z' fill='%231A1A1A'/%3e%3cpath d='M16.466 6.42149C16.466 5.68363 16.885 5.18671 17.4821 5.18169C17.7358 5.17903 17.981 5.28572 18.1688 5.48044C18.3566 5.67516 18.473 5.94356 18.4949 6.23201C18.4949 6.29475 18.4949 10.8793 18.4883 14.6978C18.4883 15.4181 18.0803 15.9251 17.4986 15.9389C17.3634 15.9457 17.2284 15.921 17.1018 15.8664C16.9752 15.8118 16.8597 15.7284 16.7623 15.6212C16.6649 15.514 16.5876 15.3853 16.5351 15.243C16.4827 15.1006 16.4561 14.9476 16.4572 14.7932C16.4495 14.0214 16.466 8.31884 16.466 6.42149Z' fill='%231A1A1A'/%3e%3cpath d='M20.7366 6.42149C20.7366 5.68363 21.1556 5.18671 21.7527 5.18169C22.0064 5.17903 22.2516 5.28572 22.4394 5.48044C22.6272 5.67516 22.7436 5.94356 22.7655 6.23201C22.7655 6.29475 22.7721 14.0548 22.7655 17.8734C22.7655 18.5937 22.3575 19.1006 21.7758 19.1144C21.6406 19.1212 21.5056 19.0966 21.379 19.042C21.2524 18.9874 21.1369 18.9039 21.0395 18.7967C20.9421 18.6896 20.8648 18.5609 20.8123 18.4185C20.7599 18.2762 20.7333 18.1232 20.7344 17.9687C20.7267 17.197 20.7366 8.31884 20.7366 6.42149Z' fill='%231A1A1A'/%3e%3cpath d='M14.0153 12.1602C14.0153 14.0688 14.0153 12.7892 14.0153 14.6978C14.0153 15.6151 13.2972 16.1911 12.5989 15.8397C12.159 15.6164 11.9786 15.191 11.9775 14.6564C11.9775 13.8115 11.9775 12.9665 11.9775 12.1216C11.9775 9.20277 11.9775 9.47141 11.9775 6.55092C11.9775 6.12678 12.0512 5.74279 12.3536 5.46045C12.4951 5.31704 12.6702 5.22409 12.8575 5.19309C13.0447 5.16208 13.2358 5.19439 13.4071 5.28602C13.589 5.36352 13.745 5.50409 13.8533 5.68797C13.9616 5.87185 14.0167 6.08981 14.0109 6.31125C14.0175 7.60376 14.0175 8.89626 14.0186 10.19L14.0153 12.1602Z' fill='%231A1A1A'/%3e%3cpath d='M9.52709 12.1743C9.52709 14.0628 9.52709 12.8108 9.52709 14.6981C9.52709 15.451 9.12901 15.953 8.53738 15.9768C8.27435 15.9895 8.01752 15.8835 7.82243 15.6818C7.62734 15.4801 7.50967 15.1989 7.49488 14.8989C7.49488 14.8161 7.48828 14.732 7.48828 14.6479C7.48828 10.8725 7.48828 10.2363 7.48828 6.46087C7.48828 5.67156 7.92046 5.15957 8.55277 5.18342C9.12901 5.20475 9.52599 5.72552 9.52709 6.47969C9.52856 8.37788 9.52856 10.2761 9.52709 12.1743Z' fill='%231A1A1A'/%3e%3c/svg%3e";

const InventoryManualZoneModal = props => {
  const [entryValue, setEntryValue] = useState('');
  const inputChange = event => {
    setEntryValue(event.detail.value);
  };
  const keyUp = event => {
    if ((event.key === 'Enter' || event.keyCode === 13) && entryValue !== '') ;
  };
  return jsxs(IonModal, Object.assign({
    className: "manual-zone-modal",
    initialBreakpoint: 0.65,
    breakpoints: [0.65],
    isOpen: props.show,
    handle: false,
    backdropDismiss: false,
    canDismiss: true
  }, {
    children: [jsx(IonHeader, {
      children: jsx(IonToolbar, {
        children: jsx(index.XBox, Object.assign({
          horizontalAlign: "end",
          height: "auto",
          width: "full",
          gap: "none",
          padding: "m"
        }, {
          children: jsx(index.XIcon, {
            size: "s",
            icon: "close"
          })
        }))
      })
    }), jsxs(IonContent, Object.assign({
      className: "ion-padding"
    }, {
      children: [jsxs(index.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "xl",
        padding: "m"
      }, {
        children: [jsx(index.XText, Object.assign({
          fontSize: 8,
          lineHeight: "normal",
          weight: "bold"
        }, {
          children: "Digitaci\u00F3n manual"
        })), jsx(index.XText, Object.assign({
          fontSize: 10,
          lineHeight: "normal",
          weight: "bold"
        }, {
          children: "Zona a inventariar"
        })), jsxs(IonItem, Object.assign({
          lines: "none"
        }, {
          children: [jsx(IonImg, {
            src: img,
            slot: "start"
          }), jsx(IonInput, {
            inputmode: "numeric",
            fill: "outline",
            onIonChange: inputChange,
            value: entryValue,
            type: 'text',
            maxlength: 18,
            minlength: 1,
            onKeyUp: keyUp,
            onPaste: e => {
              e.preventDefault();
              return false;
            },
            placeholder: `Digita el código`
          })]
        }))]
      })), jsx(index.XBox, {
        height: 1
      }), jsx(index.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "xl",
        padding: "m"
      }, {
        children: jsx(index.XButton, {
          type: "solid",
          size: "xl",
          text: "Continuar"
        })
      }))]
    }))]
  }));
};

const BarCodeScannerComponent = props => {
  const [showModal, setShowModal] = useState(false);
  const goBack = () => __awaiter(void 0, void 0, void 0, function* () {
    yield BarcodeScanner.showBackground();
    document.body.style.background = '';
    document.querySelectorAll('.ion-page').forEach(element => {
      element.setAttribute('style', '');
    });
    BarcodeScanner.stopScan();
    props.onBack();
  });
  const onClickManual = () => __awaiter(void 0, void 0, void 0, function* () {
    setShowModal(true);
  });
  return jsxs("div", Object.assign({
    className: "barcode-scanner"
  }, {
    children: [jsx(IonHeader, {
      children: jsx(IonToolbar, {
        children: jsx(IonButtons, Object.assign({
          slot: "start"
        }, {
          children: jsx(IonButton, Object.assign({
            onClick: () => goBack(),
            className: "no-border"
          }, {
            children: jsx(IonIcon, {
              slot: "icon-only",
              icon: arrowBack,
              size: "small"
            })
          }))
        }))
      })
    }), jsxs("div", Object.assign({
      className: "scanner-container"
    }, {
      children: [jsx("div", Object.assign({
        className: "w100 align-left"
      }, {
        children: jsx("p", {
          children: "Coloca el c\u00F3digo en el centro del recuadro para escanear"
        })
      })), jsxs("div", Object.assign({
        className: "scanner-zone-container"
      }, {
        children: [jsx("div", {}), jsx("div", {
          className: "scanner-zone"
        }), jsx("div", {})]
      })), jsx("div", Object.assign({
        className: "w100 footer"
      }, {
        children: jsx(IonButton, Object.assign({
          expand: "block",
          fill: "outline",
          strong: true,
          shape: "round",
          color: "light",
          onClick: () => onClickManual()
        }, {
          children: "Ingresa el c\u00F3digo"
        }))
      }))]
    })), jsx(InventoryManualZoneModal, {
      show: showModal,
      onBack: () => setShowModal(false)
    })]
  }));
};

var InventoryPagesModeType;
(function (InventoryPagesModeType) {
  InventoryPagesModeType["PAGE_LOADED"] = "PAGE_LOADED";
  InventoryPagesModeType["PAGE_SCAN_ZONE"] = "PAGE_SCAN_ZONE";
})(InventoryPagesModeType || (InventoryPagesModeType = {}));

const InventoryContext = /*#__PURE__*/createContext({});
const InventoryProvider = ({
  children
}) => {
  const [inventory, setInventory] = useState();
  return jsx(InventoryContext.Provider, Object.assign({
    value: {
      inventory,
      setInventory
    }
  }, {
    children: children
  }));
};

function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}

const InventoryZoneCard = props => {
  const {
    inventory
  } = useInventory();
  return jsxs(IonCard, {
    children: [jsx(IonCardHeader, {
      children: jsx(index.XBox, Object.assign({
        horizontalAlign: "end",
        height: "full",
        width: "full",
        gap: "none",
        padding: "none"
      }, {
        children: jsx(index.XButton, {
          type: "outline",
          size: "s",
          text: "Limpiar",
          icon: "bug",
          disabled: true
        })
      }))
    }), jsx(IonCardContent, {
      children: jsxs(index.XBox, Object.assign({
        verticalAlign: "start",
        height: "full",
        width: "full",
        gap: "l",
        padding: "none"
      }, {
        children: [jsxs(index.XBox, Object.assign({
          verticalAlign: "start",
          height: "full",
          width: "full",
          gap: "none",
          padding: "none"
        }, {
          children: [jsx(index.XText, Object.assign({
            fontSize: 10,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Centro"
          })), jsx(index.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "start",
            height: "full",
            width: "full",
            gap: "none",
            padding: "none"
          }, {
            children: (inventory === null || inventory === void 0 ? void 0 : inventory.store) && jsxs(Fragment$1, {
              children: [jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.store.code,
                size: 'l'
              }), jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.store.name
              })]
            })
          }))]
        })), jsxs(index.XBox, Object.assign({
          verticalAlign: "start",
          height: "full",
          width: "full",
          gap: "none",
          padding: "none"
        }, {
          children: [jsx(index.XText, Object.assign({
            fontSize: 10,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Zonificaci\u00F3n"
          })), jsx(index.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "start",
            height: "full",
            width: "full",
            gap: "none",
            padding: "none"
          }, {
            children: (inventory === null || inventory === void 0 ? void 0 : inventory.zone) && jsxs(Fragment$1, {
              children: [jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.zone.code
              }), jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.zone.name
              })]
            })
          }))]
        })), jsxs(index.XBox, Object.assign({
          verticalAlign: "start",
          height: "full",
          width: "full",
          gap: "none",
          padding: "none"
        }, {
          children: [jsx(index.XText, Object.assign({
            fontSize: 10,
            lineHeight: "normal",
            weight: "bold"
          }, {
            children: "Almac\u00E9n"
          })), jsx(index.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "start",
            height: "full",
            width: "full",
            gap: "none",
            padding: "none"
          }, {
            children: (inventory === null || inventory === void 0 ? void 0 : inventory.storage) && jsxs(Fragment$1, {
              children: [jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.storage.code
              }), jsx(index.XTag, {
                text: inventory === null || inventory === void 0 ? void 0 : inventory.storage.name
              })]
            })
          }))]
        }))]
      }))
    })]
  });
};

const InventoryLoadedMode = props => {
  useInventory();
  // Functions
  const startScan = () => __awaiter(void 0, void 0, void 0, function* () {
    yield BarcodeScanner.hideBackground();
    document.body.style.background = 'transparent';
    document.querySelectorAll('.ion-page').forEach(element => {
      element.setAttribute('style', 'background: transparent; z-index: 1;');
    });
    document.querySelectorAll('[class*="root-module"]').forEach(element => {
      element.setAttribute('style', 'background: transparent;');
    });
    props.onStartScan();
    const result = yield BarcodeScanner.startScan();
    if (result.hasContent) {
      props.onPreviousMode();
      stopScan();
      console.log('RESULT', result);
      // this.props.history.replace(`/tools/product-scan/${result.content}`);
    }
  });

  const stopScan = () => __awaiter(void 0, void 0, void 0, function* () {
    yield BarcodeScanner.showBackground();
    document.body.style.background = '';
    document.querySelectorAll('.ion-page').forEach(element => {
      element.setAttribute('style', '');
    });
    BarcodeScanner.stopScan();
  });
  return jsxs(Fragment, {
    children: [jsx(index.XHeader, {
      title: "Inventario de perecibles",
      sticky: true,
      onBack: props.onBack
    }), jsx(index.XBody, {
      children: jsxs(index.XBox, Object.assign({
        verticalAlign: "start",
        height: "auto",
        width: "full",
        gap: "xs",
        padding: "none"
      }, {
        children: [jsx(index.XText, Object.assign({
          fontSize: 9,
          lineHeight: "normal",
          weight: "bold"
        }, {
          children: "Zona a inventariar"
        })), jsxs(index.XBox, Object.assign({
          verticalAlign: "start",
          height: "full",
          width: "full",
          gap: "s",
          padding: "l"
        }, {
          children: [jsx(index.XButton, {
            type: "solid",
            size: "xl",
            text: "Escanea el c\u00F3digo",
            icon: "stats",
            onClick: () => startScan()
          }), jsx(index.XButton, {
            type: "outline",
            size: "xl",
            text: "Ingresa el c\u00F3digo",
            icon: "notifications"
          })]
        })), jsx(InventoryZoneCard, {})]
      }))
    }), jsx(index.XFooter, Object.assign({
      background: "transparent"
    }, {
      children: jsx(index.XButton, {
        type: "solid",
        size: "xl",
        text: "Continuar",
        disabled: true
      })
    }))]
  });
};

const InventoryMain = props => {
  const [mode, setMode] = useState(InventoryPagesModeType.PAGE_LOADED);
  // Renders
  const renderPAGE_LOADED = () => {
    return jsx(InventoryLoadedMode, {
      onStartScan: () => setMode(InventoryPagesModeType.PAGE_SCAN_ZONE),
      onPreviousMode: () => setMode(InventoryPagesModeType.PAGE_LOADED),
      onBack: props.onBack
    });
  };
  const renderPAGE_SCAN_ZONE = () => {
    return jsx(BarCodeScannerComponent, {
      onBack: () => setMode(InventoryPagesModeType.PAGE_LOADED)
    });
  };
  const renders = {
    PAGE_LOADED: renderPAGE_LOADED,
    PAGE_SCAN_ZONE: renderPAGE_SCAN_ZONE
  };
  return jsx(index.XPage, {
    children: (() => {
      if (!renders[mode]) {
        return jsx("div", {
          children: mode
        });
      }
      return renders[mode]();
    })()
  });
};

class InventoryPage extends Page {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  render() {
    var _a;
    return jsx(IonPage, {
      children: jsx(InventoryMain, {
        onBack: (_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.onBack
      })
    });
  }
}

class InventoryModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/',
        page: HomePage
      }, {
        path: '/new',
        page: InventoryPage
      }],
      override
    });
  }
  render() {
    return jsx(InventoryProvider, {
      children: super.render()
    });
  }
}
InventoryModule.route = '/tools/inventory';

export { InventoryModule as default };
