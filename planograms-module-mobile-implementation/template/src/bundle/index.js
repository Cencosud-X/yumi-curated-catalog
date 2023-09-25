import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as SDK from '@team_yumi/sdk';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import Ramen from '@team_yumi/ramen';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import React, { useState, useEffect, createContext, useContext } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { CameraPreview } from '@capacitor-community/camera-preview';
import { Camera as Camera$1, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { v4 } from 'uuid';
import { useFieldArray, Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$d =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$d = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$c = fails$d;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$b = fails$d;

var functionBindNative = !fails$b(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;

var call$7 = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$7.bind(call$7) : function () {
  return call$7.apply(call$7, arguments);
};

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

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$6 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$6, call$6);

var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$6.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;

var toString$3 = uncurryThis$b({}.toString);
var stringSlice$2 = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$2(toString$3(it), 8, -1);
};

var uncurryThis$a = functionUncurryThis;
var fails$a = fails$d;
var classof$2 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$a(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$a(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$2(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$6 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$6("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$1(it));
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
var isCallable$g = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$f = isCallable$g;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$6 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$f(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$f(it);
};

var global$c = global$d;
var isCallable$e = isCallable$g;

var aFunction = function (argument) {
  return isCallable$e(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$c[namespace]) : global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$9 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$b = global$d;
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
var fails$9 = fails$d;
var global$a = global$d;

var $String$5 = global$a.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$9(function () {
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
var isCallable$d = isCallable$g;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$d($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$c = isCallable$g;
var tryToString = tryToString$1;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$c(argument)) return argument;
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

var call$5 = functionCall;
var isCallable$b = isCallable$g;
var isObject$5 = isObject$6;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = call$5(fn, input))) return val;
  if (isCallable$b(fn = input.valueOf) && !isObject$5(val = call$5(fn, input))) return val;
  if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = call$5(fn, input))) return val;
  throw $TypeError$4("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$9 = global$d;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$9, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$9[key] = value;
  } return value;
};

var global$8 = global$d;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$8[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible = requireObjectCoercible$2;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$2(requireObjectCoercible(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$2 = toObject$3;

var hasOwnProperty = uncurryThis$8({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$7 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$7(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
};

var global$7 = global$d;
var shared$2 = shared$3.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$7.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$a(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$4 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;

var $TypeError$3 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$4(exoticToPrim, input, pref);
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

var global$6 = global$d;
var isObject$3 = isObject$6;

var document$1 = global$6.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$8 = fails$d;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$9 = descriptors;
var call$3 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$2(!call$3(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$8 = descriptors;
var fails$7 = fails$d;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$2 = isObject$6;

var $String$3 = String;
var $TypeError$2 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$7 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw $TypeError$2($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$6 = anObject$7;
var toPropertyKey = toPropertyKey$2;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$6(O);
  P = toPropertyKey(P);
  anObject$6(Attributes);
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
  anObject$6(O);
  P = toPropertyKey(P);
  anObject$6(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$6 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$6 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$5 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$6 = functionUncurryThis;
var isCallable$a = isCallable$g;
var store$1 = sharedStore;

var functionToString = uncurryThis$6(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$a(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$5 = global$d;
var isCallable$9 = isCallable$g;

var WeakMap$1 = global$5.WeakMap;

var weakMapBasicDetection = isCallable$9(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$4 = global$d;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$7 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$4.TypeError;
var WeakMap = global$4.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn$7(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
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

var uncurryThis$5 = functionUncurryThis;
var fails$6 = fails$d;
var isCallable$8 = isCallable$g;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$1 = uncurryThis$5(''.slice);
var replace$1 = uncurryThis$5(''.replace);
var join = uncurryThis$5([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$6(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$8(this) && getInternalState$1(this).source || inspectSource(this);
}, 'toString');

var isCallable$7 = isCallable$g;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$4 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$7(value)) makeBuiltIn$1(value, name, options);
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

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
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

var uncurryThis$4 = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
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
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$5 = anObject$7;

var concat$1 = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$5(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$5 = fails$d;
var isCallable$6 = isCallable$g;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$6(detection) ? fails$5(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$3 = global$d;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$3 = defineBuiltIn$4;
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
    target = global$3;
  } else if (STATIC) {
    target = global$3[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$3[TARGET] || {}).prototype;
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
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn$3(target, key, sourceProperty, options);
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

var DESCRIPTORS$3 = descriptors;
var uncurryThis$2 = functionUncurryThis;
var call$2 = functionCall;
var fails$4 = fails$d;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$3;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat = uncurryThis$2([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$4(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
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
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$3 || call$2(propertyIsEnumerable, S, key)) T[key] = S[key];
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

function CardTool(props) {
  const history = useHistory();
  const title = props.title || 'Alertas de planograma';
  return jsx(Ramen.XCard, {
    count: 55,
    onClick: () => {
      history.push('planograms');
    },
    size: "l",
    symbol: "planograms-neutral",
    title: title
  });
}

var translation = {
	departaments: "departamentos",
	implement: "por implementar",
	sections: "Secciones",
	categories: "Categorias",
	side_bar_title: "Planogramas",
	store: "Tienda",
	section: "Sección",
	detail_description: "Revisa el planograma en PDF e implementalo en la góndola.",
	text_btn_continue: "Continuar",
	text_show_pdf_planogram: "Ver PDF planograma",
	text_question_planogram_implemented: "¿Lograste implementar el planograma correctamente?"
};
var es_PE = {
	translation: translation
};

var es_PE$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	translation: translation,
	'default': es_PE
});

const resources = {
  es_PE: es_PE$1
};
i18n.use(initReactI18next).init({
  lng: 'es_PE',
  fallbackLng: 'es_PE',
  resources,
  interpolation: {
    escapeValue: false
  }
}).then(() => {
  console.log('i18n configured.');
});

var objectDefineProperties = {};

var DESCRIPTORS$2 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$4 = anObject$7;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$3;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$7;
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
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$6 = wellKnownSymbol$8;
var create$1 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$6('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$3 = fails$d;

var correctPrototypeGetter = !fails$3(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$5 = isCallable$g;
var toObject = toObject$3;
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
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$5(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$2 = fails$d;
var isCallable$4 = isCallable$g;
var isObject = isObject$6;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$2 = defineBuiltIn$4;
var wellKnownSymbol$5 = wellKnownSymbol$8;

var ITERATOR$2 = wellKnownSymbol$5('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails$2(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$4(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$2(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$4 = wellKnownSymbol$8;

var TO_STRING_TAG$3 = wellKnownSymbol$4('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$3)) {
    defineProperty$2(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$1 = functionUncurryThis;
var aCallable = aCallable$2;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$1(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$3 = isCallable$g;

var $String$1 = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$3(argument)) return argument;
  throw $TypeError("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$2 = anObject$7;
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
    anObject$2(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$2 = _export;
var call$1 = functionCall;
var FunctionName = functionName;
var isCallable$2 = isCallable$g;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$3 = wellKnownSymbol$8;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$3('iterator');
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
        } else if (!isCallable$2(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn$1(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
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
        defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn$1(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
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
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$1 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

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
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$1 && values.name !== 'values') try {
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

var global$2 = global$d;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var wellKnownSymbol$2 = wellKnownSymbol$8;

var ITERATOR = wellKnownSymbol$2('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$2('toStringTag');
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
  handlePrototype(global$2[COLLECTION_NAME] && global$2[COLLECTION_NAME].prototype, COLLECTION_NAME);
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

var PlanogramsPagesEnum;
(function (PlanogramsPagesEnum) {
  PlanogramsPagesEnum["PAGE_DEPARTAMENT_LIST"] = "PAGE_DEPARTAMENT_LIST";
  PlanogramsPagesEnum["PAGE_SECTION_LIST"] = "PAGE_SECTION_LIST";
  PlanogramsPagesEnum["PAGE_CATEGORY_LIST"] = "PAGE_CATEGORY_LIST";
  PlanogramsPagesEnum["PAGE_DETAIL"] = "PAGE_DETAIL";
})(PlanogramsPagesEnum || (PlanogramsPagesEnum = {}));

var TitlePagesEnum;
(function (TitlePagesEnum) {
  TitlePagesEnum["PLANOGRAM_SECTION_LIST"] = "Alerta de planogramas";
})(TitlePagesEnum || (TitlePagesEnum = {}));

class BaseClient extends SDK.Lib.RESTClient {
  constructor(country, baseUrl) {
    //super({ baseURL: `${config.getValue('BACKEND_BASE_URL')}/${country}` });
    super({
      baseURL: `${baseUrl}/${country}`
    });
    this.axios.defaults.headers.common['Country'] = country;
    this.country = country;
  }
}

class PlanogramClient extends BaseClient {
  getSignedUrl(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.get(`/planogram/url?keyGoogleBucket=${encodeURI(key)}`);
    });
  }
  getDepartaments(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.get(`/planogram/departments?key=${key}`);
    });
  }
  getSections(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.get(`/planogram/sections?key=${key}`);
    });
  }
  getCategories(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.get(`/planogram/categories?key=${key}`);
    });
  }
  getDetails(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.get(`/planogram/detail?key=${key}`);
    });
  }
  sendImplementationPlanogram(key) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/planogram/send?key=${key}`);
    });
  }
}

function getClients(country, baseUrl) {
  const planogramClient = new PlanogramClient(country, baseUrl);
  return {
    planogramClient
  };
}

const PlanogramContext = /*#__PURE__*/createContext({});
const INIT_OPTION_DATA = {
  code: '',
  name: '',
  key: ''
};
const INIT_FORM_EVIDENCE_DATA = {
  typeProblem: '1',
  typeFurniture: '1',
  height: '',
  width: '',
  depth: '',
  amountBox: '',
  title: '',
  pictures: [],
  description: ''
};
const PlanogramProvider = ({
  params,
  children
}) => {
  const [page, setPage] = useState(PlanogramsPagesEnum.PAGE_DEPARTAMENT_LIST);
  const [store, setStore] = useState({
    code: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [departament, setDepartament] = useState(INIT_OPTION_DATA);
  const [section, setSection] = useState(INIT_OPTION_DATA);
  const [category, setCategory] = useState(INIT_OPTION_DATA);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [formEvidence, setFormEvidence] = useState(INIT_FORM_EVIDENCE_DATA);
  const [isPlanogramImplemented, setIsPlanogramImplemented] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const api = getClients(params.country, params.baseUrl);
  const clearData = () => {
    setDepartament(INIT_OPTION_DATA);
    setSection(INIT_OPTION_DATA);
    setCategory(INIT_OPTION_DATA);
    clearFormEvidence();
  };
  const clearFormEvidence = () => {
    setFormEvidence(INIT_FORM_EVIDENCE_DATA);
    setIsPlanogramImplemented('');
  };
  const getDepartaments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      //const { data } = await api.planogramClient.getDepartaments(store.code);
      //return data;
      return [{
        name: 'ARTICULOS NO VENTA',
        code: '32',
        key: 23,
        count: 1
      }];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  });
  const getSections = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      // const { data } = await api.planogramClient.getSections(departament.key);
      //return data;
      return [{
        name: 'ALQUILERES Y COBROS RETAIL',
        code: '32',
        key: 23,
        count: 1
      }];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  });
  const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      // const { data } = await api.planogramClient.getCategories(section.key);
      // return data;
      return [{
        name: 'ALQUILERES COMERCIALES',
        code: '32',
        key: 23
      }];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  });
  const getDetail = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      // const { data } = await api.planogramClient.getDetails(category.key);
      // return data;
      return {
        id: "64fa8aea60bf76d3bda0ac35",
        country: "PE",
        store_code: "T116",
        store_flag: "Wong",
        department_code: "D61",
        department_name: "ARTICULOS NO VENTA",
        section_code: "92",
        section_name: "ALQUILERES Y COBROS RETAIL",
        category_code: "9201",
        category_name: "ALQUILERES COMERCIALES",
        planogram_format: "T116_92_9201",
        created_user_name: "system",
        updated_user_name: "system",
        created_at: "2023-09-08T02:46:02.866Z",
        updated_at: "2023-09-17T05:00:04.024Z",
        planogram: {
          status: "TO_LOAD"
        }
      };
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  });
  const getPDFUrl = key => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
      const {
        data
      } = yield api.planogramClient.getSignedUrl(key);
      return (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.signedUrl) !== null && _b !== void 0 ? _b : '';
    } catch (error) {
      return '';
    }
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield params.getStoreData();
      setStore({
        code: 'T103',
        name: 'Benavides'
      });
    }))();
  }, []);
  const value = {
    country: params.country,
    page,
    setPage,
    store,
    setStore,
    loading,
    setLoading,
    departament,
    setDepartament,
    section,
    setSection,
    category,
    showEvidenceModal,
    setShowEvidenceModal,
    setCategory,
    getDepartaments,
    getSections,
    getCategories,
    getDetail,
    getPDFUrl,
    clearData,
    clearFormEvidence,
    formEvidence,
    setFormEvidence,
    isPlanogramImplemented,
    setIsPlanogramImplemented,
    showCamera,
    setShowCamera
  };
  return jsx(PlanogramContext.Provider, Object.assign({
    value: value
  }, {
    children: children
  }));
};

const usePlanogram = () => {
  const {
    country,
    page,
    setPage,
    departament,
    setDepartament,
    section,
    setSection,
    category,
    setCategory,
    showEvidenceModal,
    setShowEvidenceModal,
    loading,
    clearData,
    clearFormEvidence,
    getDepartaments,
    getSections,
    getCategories,
    getDetail,
    getPDFUrl,
    store,
    formEvidence,
    setFormEvidence,
    isPlanogramImplemented,
    setIsPlanogramImplemented,
    showCamera,
    setShowCamera
  } = useContext(PlanogramContext);
  const history = useHistory();
  const routeToDepartamentList = () => setPage(PlanogramsPagesEnum.PAGE_DEPARTAMENT_LIST);
  const routeToSectionList = () => setPage(PlanogramsPagesEnum.PAGE_SECTION_LIST);
  const routeToCategoryList = () => setPage(PlanogramsPagesEnum.PAGE_CATEGORY_LIST);
  const routeToDetail = () => setPage(PlanogramsPagesEnum.PAGE_DETAIL);
  const routeToHome = () => history.push('/');
  return {
    country,
    page,
    loading,
    store,
    clearData,
    clearFormEvidence,
    departament,
    setDepartament,
    section,
    setSection,
    category,
    setCategory,
    showEvidenceModal,
    setShowEvidenceModal,
    // set routes
    routeToHome,
    routeToDepartamentList,
    routeToSectionList,
    routeToCategoryList,
    routeToDetail,
    // endpoints
    getDepartaments,
    getSections,
    getCategories,
    getDetail,
    getPDFUrl,
    formEvidence,
    setFormEvidence,
    isPlanogramImplemented,
    setIsPlanogramImplemented,
    showCamera,
    setShowCamera
  };
};

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

const PlanogramSectionList = () => {
  const {
    t
  } = useTranslation();
  const {
    routeToCategoryList,
    routeToDepartamentList,
    loading,
    getSections,
    departament,
    setSection
  } = usePlanogram();
  const [dataSections, setDataSections] = useState([]);
  const nextPage = (key, code, name) => {
    setSection({
      key,
      code,
      name
    });
    routeToCategoryList();
  };
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const response = yield getSections();
      setDataSections(response);
    }))();
  }, []);
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToDepartamentList(),
      title: departament.name,
      subTitle: t('sections'),
      skeleton: loading
    }), jsx(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: "vertical",
      padding: "l",
      gap: "m"
    }, {
      children: jsx(Ramen.XList, {
        dataSource: dataSections,
        skeleton: loading,
        renderItem: item => jsx(Ramen.XCard, {
          size: "l",
          title: item.name,
          count: item.count,
          onClick: () => nextPage(item.key, item.code, item.name)
        }),
        rowKey: "code"
      })
    }))]
  });
};

const PlanogramCategoryList = () => {
  const {
    t
  } = useTranslation();
  const {
    routeToSectionList,
    routeToDetail,
    loading,
    getCategories,
    section,
    setCategory,
    clearFormEvidence
  } = usePlanogram();
  const [dataCategories, setDataCategories] = useState([]);
  const nextPage = (key, code, name) => {
    setCategory({
      key,
      code,
      name
    });
    routeToDetail();
  };
  useEffect(() => {
    clearFormEvidence();
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const response = yield getCategories();
      setDataCategories(response);
    }))();
  }, []);
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToSectionList(),
      title: section.name,
      subTitle: t('categories'),
      skeleton: loading
    }), jsx(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: "vertical",
      padding: "l",
      gap: "xxs"
    }, {
      children: jsx(Ramen.XList, {
        dataSource: dataCategories,
        skeleton: loading,
        renderItem: item => jsx(Ramen.XCard, {
          size: "l",
          title: item.name,
          onClick: () => nextPage(item.key, item.code, item.name)
        }),
        rowKey: "code"
      })
    }))]
  });
};

var wellKnownSymbol$1 = wellKnownSymbol$8;

var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$g;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$8;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
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
    : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var classof = classof$1;

var $String = String;

var toString$1 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$1 = anObject$7;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject$1(this);
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

var call = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var regExpFlags = regexpFlags;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$1, R)
    ? call(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$4;
var anObject = anObject$7;
var $toString = toString$1;
var fails$1 = fails$d;
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
const isDateAfter = (dateStart, dateEnd) => {
  if (dateStart && dateEnd) {
    return dayjs(dateStart).isAfter(dateEnd);
  }
  return false;
};

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails = fails$d;
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

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var $ = _export;
var DESCRIPTORS = descriptors;
var global$1 = global$d;
var uncurryThis = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable = isCallable$g;
var isPrototypeOf = objectIsPrototypeOf;
var toString = toString$1;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
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

const useCamera = () => {
  const [isOpen, setIsOpen] = useState(undefined);
  const askCamPermission = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      whenInNativePhone(() => __awaiter(void 0, void 0, void 0, function* () {
        const status = yield Camera$1.checkPermissions();
        if (status.camera !== 'granted') {
          yield Camera$1.requestPermissions({
            permissions: ['camera']
          });
        }
      }));
    } catch (error) {
      // if (error instanceof Error)
    } finally {
      const cameraPreview = {
        parent: 'cameraPreview',
        className: 'cameraPreview',
        x: 0,
        y: 100,
        width: window.innerWidth,
        height: window.innerHeight - 180,
        position: 'rear',
        enableZoom: true
      };
      yield CameraPreview.start(cameraPreview);
      setIsOpen(true);
    }
  });
  const searchAndGetFile = callback => __awaiter(void 0, void 0, void 0, function* () {
    try {
      whenInNativePhone(() => __awaiter(void 0, void 0, void 0, function* () {
        const status = yield Camera$1.checkPermissions();
        if (status.photos !== 'granted') {
          yield Camera$1.requestPermissions({
            permissions: ['photos']
          });
        }
      }));
    } catch (e) {
      return;
    } finally {
      const file = yield Camera$1.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
        quality: 100
      });
      const base64Image = 'data:image/jpeg;base64,' + file.base64String;
      callback(base64Image);
    }
  });
  const captureImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const cameraPreviewOptions = {
      quality: 90
    };
    const base64Result = yield CameraPreview.captureSample(cameraPreviewOptions);
    const base64Image = 'data:image/jpeg;base64,' + base64Result.value;
    CameraPreview.stop();
    setIsOpen(false);
    return base64Image;
  });
  const stopCamera = () => __awaiter(void 0, void 0, void 0, function* () {
    yield CameraPreview.stop();
    setIsOpen(false);
  });
  const initCamera = () => __awaiter(void 0, void 0, void 0, function* () {
    yield askCamPermission();
  });
  function whenInNativePhone(callback) {
    const platform = Capacitor.getPlatform();
    if (platform === 'ios' || platform === 'android') callback();
  }
  return {
    initCamera,
    stopCamera,
    captureImage,
    searchAndGetFile,
    isOpen
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

const SuccessEvidenceModal = ({
  isPlanogramImplemented,
  form
}) => {
  var _a, _b;
  const {
    routeToCategoryList,
    setIsPlanogramImplemented,
    showEvidenceModal,
    setShowEvidenceModal,
    setShowCamera
  } = usePlanogram();
  const {
    searchAndGetFile
  } = useCamera();
  const {
    getValues,
    control,
    watch,
    handleSubmit,
    formState: {
      errors
    }
  } = form;
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "pictures"
  });
  const typeProblem = watch("typeProblem");
  //console.log('errors: ', errors, getValues());
  const onSubmit = handleSubmit(data => {
    console.log('submit: ', data);
    setShowEvidenceModal(false);
    routeToCategoryList();
    notification({
      type: NotificationTypeEnum.SUCCESS,
      text: 'Se ha gestionado la alerta correctamente.'
    });
  });
  const actionSend = action => {
    if (action === 'load') onSubmit();
  };
  const fromLibraryHandler = image => {
    if (image) {
      const objectFile = {
        name: `IMG_${v4()}`,
        removable: true,
        urlImg: image,
        status: 'completed'
      };
      append(objectFile);
    }
  };
  const fileActionHandler = evidence => {
    fields.map((item, index) => {
      if ((item === null || item === void 0 ? void 0 : item.name) === evidence.name) {
        remove(index);
      }
      return item;
    });
  };
  const closeModal = () => {
    setShowEvidenceModal(false);
    setIsPlanogramImplemented('');
  };
  return jsx(Ramen.XModal, Object.assign({
    title: isPlanogramImplemented ? 'Confirmar' : 'Añade más detalles',
    actions: [{
      key: 'load',
      text: isPlanogramImplemented ? 'Finalizar' : 'Enviar',
      type: 'solid'
    }],
    onClose: () => closeModal(),
    onActionClick: action => actionSend(action),
    visible: showEvidenceModal,
    closable: true,
    size: "xl"
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      gap: "s"
    }, {
      children: [jsx(Ramen.XAlert, Object.assign({
        type: "info"
      }, {
        children: "Para confirmar la implementaci\u00F3n por favor toma una foto para evidenciarlo."
      })), jsx(Ramen.XVSpace, {
        size: "xxs"
      }), !isPlanogramImplemented ? jsxs(React.Fragment, {
        children: [jsx(Controller, {
          name: "typeProblem",
          control: control,
          render: ({
            field: {
              onChange,
              value
            }
          }) => {
            var _a, _b;
            return jsx(Ramen.XFormItem, Object.assign({
              label: "\u00BFCu\u00E1l es el problema?",
              error: (_b = (_a = errors.typeProblem) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
            }, {
              children: jsx(Ramen.XSelect, {
                modalTitle: "\u00BFCu\u00E1l es el problema?",
                okText: "Seleccionar",
                onChange: val => onChange(val.value),
                options: [{
                  label: 'Medida del mueble es incorrecta',
                  value: '1'
                }, {
                  label: 'Cantidad de bandejas',
                  value: '2'
                }, {
                  label: 'Disponibilidad de productos',
                  value: '3'
                },
                // {
                //   label: 'Planograma no corresponde a esta categoría',
                //   value: '4'
                // },
                // {
                //   label: 'Archivo dañado',
                //   value: '5'
                // },
                {
                  label: 'Otro motivo',
                  value: '6'
                }],
                value: value
              })
            }));
          }
        }), ['1', '2'].includes(typeProblem !== null && typeProblem !== void 0 ? typeProblem : '') ? jsxs(React.Fragment, {
          children: [jsx(Controller, {
            name: "typeFurniture",
            control: control,
            render: ({
              field: {
                onChange,
                value
              }
            }) => {
              var _a, _b;
              return jsx(Ramen.XFormItem, Object.assign({
                label: "Tipo de mueble",
                error: (_b = (_a = errors.typeFurniture) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
              }, {
                children: jsx(Ramen.XSelect, {
                  modalTitle: "Tipo de mueble ",
                  okText: "Seleccionar",
                  onChange: value => onChange(value.value),
                  options: [{
                    label: 'Mesa',
                    value: '1'
                  }],
                  value: value
                })
              }));
            }
          }), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XVSpace, {
              size: "s"
            }), jsx(Ramen.XText, Object.assign({
              weight: "bold"
            }, {
              children: "Medidas"
            })), jsx(Ramen.XVSpace, {
              size: "s"
            })]
          }), typeProblem === '1' ? jsxs(React.Fragment, {
            children: [jsx(Controller, {
              name: "height",
              control: control,
              render: ({
                field: {
                  onChange,
                  value
                }
              }) => {
                var _a, _b;
                return jsx(Ramen.XFormItem, Object.assign({
                  label: "Alto",
                  error: (_b = (_a = errors.height) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
                }, {
                  children: jsx(Ramen.XNumberInput, {
                    onChange: value => onChange(value.target.value),
                    placeholder: "00 cm",
                    size: "l",
                    value: value !== null && value !== void 0 ? value : ''
                  })
                }));
              }
            }), jsx(Controller, {
              name: "width",
              control: control,
              render: ({
                field: {
                  onChange,
                  value
                }
              }) => {
                var _a, _b;
                return jsx(Ramen.XFormItem, Object.assign({
                  label: "Ancho",
                  error: (_b = (_a = errors.width) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
                }, {
                  children: jsx(Ramen.XNumberInput, {
                    onChange: value => onChange(value.target.value),
                    placeholder: "00 cm",
                    size: "l",
                    value: value !== null && value !== void 0 ? value : ''
                  })
                }));
              }
            }), jsx(Controller, {
              name: "depth",
              control: control,
              render: ({
                field: {
                  onChange,
                  value
                }
              }) => {
                var _a, _b;
                return jsx(Ramen.XFormItem, Object.assign({
                  label: "Profundidad",
                  error: (_b = (_a = errors.depth) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
                }, {
                  children: jsx(Ramen.XNumberInput, {
                    onChange: value => onChange(value.target.value),
                    placeholder: "00 cm",
                    size: "l",
                    value: value !== null && value !== void 0 ? value : ''
                  })
                }));
              }
            })]
          }) : null]
        }) : null, ['1', '2'].includes(typeProblem !== null && typeProblem !== void 0 ? typeProblem : '') ? jsx(Controller, {
          name: "amountBox",
          control: control,
          render: ({
            field: {
              onChange,
              value
            }
          }) => {
            var _a, _b;
            return jsx(Ramen.XFormItem, Object.assign({
              label: "Cant. de cajas",
              error: (_b = (_a = errors.amountBox) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
            }, {
              children: jsx(Ramen.XNumberInput, {
                onChange: value => onChange(value.target.value),
                placeholder: "00",
                size: "l",
                value: value !== null && value !== void 0 ? value : ''
              })
            }));
          }
        }) : null, typeProblem === '6' ? jsx(Controller, {
          name: "title",
          control: control,
          render: ({
            field: {
              onChange,
              value
            }
          }) => {
            var _a, _b;
            return jsx(Ramen.XFormItem, Object.assign({
              label: "A\u00F1ade un t\u00EDtulo",
              error: (_b = (_a = errors.title) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
            }, {
              children: jsx(Ramen.XTextInput, {
                onChange: value => onChange(value.target.value),
                placeholder: "",
                size: "l",
                value: value !== null && value !== void 0 ? value : ''
              })
            }));
          }
        }) : null]
      }) : null, jsx(Ramen.XFormItem, Object.assign({
        label: "",
        error: (_b = (_a = errors.pictures) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
      }, {
        children: jsx(Ramen.XImageUploader, {
          files: watch('pictures'),
          takePhotoText: "Tomar foto",
          fromLibraryText: "Seleccionar",
          title: "Sube una o m\u00E1s fotograf\u00EDas",
          onFileActionClickHandler: fileActionHandler,
          onFromLibraryHandler: () => searchAndGetFile(fromLibraryHandler),
          onTakePhotoHandler: () => {
            setShowCamera(true);
          }
        })
      })), jsx(Controller, {
        name: "description",
        control: control,
        render: ({
          field: {
            onChange,
            value
          }
        }) => {
          var _a, _b;
          return jsx(Ramen.XFormItem, Object.assign({
            label: ['6', '3'].includes(typeProblem !== null && typeProblem !== void 0 ? typeProblem : '') ? "Describe el problema" : "Deja algún comentario (opcional)",
            error: (_b = (_a = errors.description) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ''
          }, {
            children: jsx(Ramen.XTextArea, {
              onChange: value => onChange(value.target.value),
              placeholder: "",
              value: value
            })
          }));
        }
      })]
    }))
  }));
};

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
const ContainerCamera = styled.div(_t || (_t = _`
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
const HeaderCamera = styled.div(_t2 || (_t2 = _`
  z-index: 3;
`));
styled.div(_t3 || (_t3 = _`
  display: grid;
  place-items: center;
`));
const CameraZone = styled.div(_t4 || (_t4 = _`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 500px;
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
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0);
  z-index: 2;
`));
const FooterScanner = styled.div(_t5 || (_t5 = _`
  position: absolute;
  bottom: 20px;
  z-index: 3;
  width: 100%;
`));

const Camera = ({
  form
}) => {
  const {
    initCamera,
    stopCamera,
    captureImage,
    isOpen
  } = useCamera();
  const {
    setShowCamera
  } = usePlanogram();
  const [preview, setPreview] = useState('');
  const {
    control
  } = form;
  //
  const {
    append
  } = useFieldArray({
    control,
    name: "pictures"
  });
  const goBackHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isOpen) yield stopCamera();
    setShowCamera(false);
  });
  const captureImageHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const photo = yield captureImage();
    setPreview(photo);
  });
  const checkImageHandler = () => {
    const objectFile = {
      name: `IMG_${v4()}`,
      removable: true,
      urlImg: preview,
      status: 'completed'
    };
    append(objectFile);
    setShowCamera(false);
  };
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield initCamera();
    }))();
  }, []);
  return jsxs(ContainerCamera, {
    children: [jsx(HeaderCamera, {
      children: jsx(Header, {
        onBack: goBackHandler,
        title: 'Fotografía'
      })
    }), !preview ? jsx("div", Object.assign({
      id: "cameraPreview",
      className: "cameraPreview"
    }, {
      children: jsx(CameraZone, {})
    })) : jsx("img", {
      style: {
        width: '100%',
        height: '500px'
      },
      src: preview,
      alt: "img"
    }), jsx(FooterScanner, {
      children: isOpen ? jsx(Ramen.XBox, Object.assign({
        width: 'full',
        orientation: "horizontal",
        horizontalAlign: "around"
      }, {
        children: jsx(Ramen.XButtonIcon, {
          type: "solid",
          icon: "camera-filled",
          onClick: captureImageHandler
        })
      })) : jsxs(Ramen.XBox, Object.assign({
        width: 'full',
        orientation: "horizontal",
        horizontalAlign: "around"
      }, {
        children: [jsx(Ramen.XButtonIcon, {
          type: "solid",
          icon: "rotate-cw-outline",
          onClick: initCamera
        }), jsx(Ramen.XButtonIcon, {
          type: "solid",
          icon: "check-outline",
          onClick: checkImageHandler
        })]
      }))
    })]
  });
};

const MSJ_REQUIRED = 'Campo requerido';
const baseSchema = yup.object({
  pictures: yup.array().of(yup.object().shape({
    name: yup.string(),
    removable: yup.boolean(),
    urlImg: yup.string(),
    status: yup.string()
  })).min(1, MSJ_REQUIRED)
});
const AffirmativeSchema = baseSchema.shape({
  typeProblem: yup.string(),
  typeFurniture: yup.string(),
  height: yup.string().notRequired(),
  width: yup.string().notRequired(),
  depth: yup.string().notRequired(),
  amountBox: yup.string().notRequired(),
  title: yup.string().notRequired(),
  description: yup.string()
}).required();
const NegativeSchema = baseSchema.shape({
  typeProblem: yup.string().required(MSJ_REQUIRED),
  typeFurniture: yup.string().when('typeProblem', {
    is: val => val === '1' || val === '2',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  height: yup.string().when('typeProblem', {
    is: val => val === '1',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  width: yup.string().when('typeProblem', {
    is: val => val === '1',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  depth: yup.string().when('typeProblem', {
    is: val => val === '1',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  amountBox: yup.string().when('typeProblem', {
    is: val => val === '1' || val === '2',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  title: yup.string().when('typeProblem', {
    is: val => val === '6',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  }),
  description: yup.string().when('typeProblem', {
    is: val => val === '6' || val === '3',
    then: () => yup.string().required(MSJ_REQUIRED),
    otherwise: () => yup.string().notRequired()
  })
}).required();

const PlanogramDetail = () => {
  const {
    t
  } = useTranslation();
  const {
    routeToCategoryList,
    loading,
    getDetail,
    getPDFUrl,
    category,
    showEvidenceModal,
    setShowEvidenceModal,
    isPlanogramImplemented,
    setIsPlanogramImplemented,
    showCamera,
    setFormEvidence,
    formEvidence
  } = usePlanogram();
  const form = useForm({
    resolver: yupResolver(isPlanogramImplemented === 'yes' ? AffirmativeSchema : NegativeSchema),
    defaultValues: INIT_FORM_EVIDENCE_DATA,
    mode: "onChange"
  });
  const {
    reset,
    watch
  } = form;
  const [dataDetail, setDataDetail] = useState();
  const [isDateImplementationValid, setIsDateImplementationValid] = useState(false);
  const dateNow = new Date().toString();
  const continueHandler = () => {
    setShowEvidenceModal(true);
  };
  const getPDF = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield getPDFUrl(dataDetail ? dataDetail.planogram.key_google_bucket : '');
    window.open(response, '_blank');
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const response = yield getDetail();
      setDataDetail(response);
      if (response.planogram.implementation_date) {
        setIsDateImplementationValid(!isDateAfter(dateNow, response.planogram.implementation_date));
      }
    }))();
  }, []);
  useEffect(() => {
    const subscription = watch(value => setFormEvidence(value));
    return () => subscription.unsubscribe();
  }, [watch]);
  useEffect(() => {
    reset(formEvidence);
  }, [reset]);
  return showCamera ? jsx(Camera, {
    form: form
  }) : jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToCategoryList(),
      title: category.name,
      skeleton: loading
    }), loading ? jsxs(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: "vertical",
      padding: "l",
      gap: "l"
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
    })) : jsxs(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: "vertical",
      padding: "l",
      gap: "l"
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        colorThone: "medium"
      }, {
        children: t('detail_description')
      })), jsx(Ramen.XAlert, Object.assign({
        type: isDateImplementationValid ? 'info' : 'warning'
      }, {
        children: `${isDateImplementationValid ? 'Fecha de implementación desde hoy' : 'Se venció la fecha para la Implementación.'} ${formatDate(dateNow, 'DD MMM YYYY')} hasta el ${formatDate(dataDetail ? dataDetail.planogram.implementation_date : '', 'DD MMM YYYY')}.`
      })), jsx(Ramen.XCard, {
        size: "l",
        symbol: "planograms-neutral",
        title: t('text_show_pdf_planogram'),
        onClick: () => getPDF()
      }), jsx(Ramen.XCardDecision, {
        label: t('text_question_planogram_implemented'),
        size: "l",
        onClickAffirmative: value => value ? setIsPlanogramImplemented('yes') : setIsPlanogramImplemented(''),
        onClickNegative: value => value ? setIsPlanogramImplemented('no') : setIsPlanogramImplemented('')
      }), showEvidenceModal ? jsx(SuccessEvidenceModal, {
        isPlanogramImplemented: isPlanogramImplemented === 'yes',
        form: form
      }) : null]
    })), jsx(Ramen.XFooter, Object.assign({
      skeleton: loading
    }, {
      children: jsx(Ramen.XButton, {
        onClick: () => continueHandler(),
        disabled: !isPlanogramImplemented,
        size: "xl",
        text: t('text_btn_continue'),
        type: "solid"
      })
    }))]
  });
};

const PlanogramDepartamentList = () => {
  const {
    t
  } = useTranslation();
  const {
    store,
    routeToHome,
    routeToSectionList,
    loading,
    getDepartaments,
    clearData,
    setDepartament
  } = usePlanogram();
  const [dataDepartaments, setDataDepartaments] = useState([]);
  const nextPage = (key, code, name) => {
    setDepartament({
      key,
      code,
      name
    });
    routeToSectionList();
  };
  useEffect(() => {
    clearData();
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (store.code) {
        const response = yield getDepartaments();
        setDataDepartaments(response);
      }
    }))();
  }, [store]);
  return jsxs(Fragment, {
    children: [jsx(Header, {
      onBack: () => routeToHome(),
      title: TitlePagesEnum.PLANOGRAM_SECTION_LIST,
      skeleton: loading
    }), jsxs(Ramen.XBox, Object.assign({
      height: 'full',
      orientation: "vertical",
      padding: "l",
      gap: "m"
    }, {
      children: [loading ? jsx(Ramen.XSkeleton, {
        type: "text",
        size: "l"
      }) : jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xxs"
      }, {
        children: [jsxs(Ramen.XText, Object.assign({
          weight: "bold",
          fontSize: 11
        }, {
          children: [dataDepartaments.length, " ", t('departaments')]
        })), jsx(Ramen.XText, Object.assign({
          weight: "normal",
          colorThone: "dim",
          fontSize: 11
        }, {
          children: t('implement')
        }))]
      })), jsx(Ramen.XList, {
        dataSource: dataDepartaments,
        skeleton: loading,
        renderItem: item => jsx(Ramen.XCard, {
          size: "l",
          symbol: "planograms-neutral",
          title: item.name,
          count: item.count,
          onClick: () => nextPage(item.key, item.code, item.name)
        }),
        rowKey: "code"
      })]
    }))]
  });
};

const PlanogramPage = () => {
  const {
    page
  } = usePlanogram();
  const renderPAGE_DEPARTAMENT_LIST = () => jsx(PlanogramDepartamentList, {});
  const renderPAGE_SECTION_LIST = () => jsx(PlanogramSectionList, {});
  const renderPAGE_CATEGORY_LIST = () => jsx(PlanogramCategoryList, {});
  const renderPAGE_DETAIL = () => jsx(PlanogramDetail, {});
  const renders = {
    [PlanogramsPagesEnum.PAGE_DEPARTAMENT_LIST]: renderPAGE_DEPARTAMENT_LIST,
    [PlanogramsPagesEnum.PAGE_SECTION_LIST]: renderPAGE_SECTION_LIST,
    [PlanogramsPagesEnum.PAGE_CATEGORY_LIST]: renderPAGE_CATEGORY_LIST,
    [PlanogramsPagesEnum.PAGE_DETAIL]: renderPAGE_DETAIL
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

const Flow = props => {
  const {
    path
  } = useRouteMatch();
  return jsx(PlanogramProvider, Object.assign({
    params: props.params
  }, {
    children: jsx(Switch, {
      children: jsx(Route, {
        path: `${path}`,
        exact: true,
        component: PlanogramPage
      })
    })
  }));
};
class Module extends SDK.Lib.BaseModule {
  constructor(params) {
    super(params);
    this.defaultPath = '/planograms';
    this.CardTool = CardTool;
    this.Flow = () => jsx(Flow, {
      params: params
    });
  }
  getSidebarMenu(count) {
    return {
      type: 'action',
      icon: 'grid-outline',
      text: `${i18n.t('side_bar_title')}`,
      key: 'planograms'
    };
  }
}

export { Module as default };
