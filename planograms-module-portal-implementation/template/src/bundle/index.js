import { jsx, jsxs } from 'react/jsx-runtime';
import * as SDK from '@team_yumi/sdk';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import Ramen from '@team_yumi/ramen-web';
import { useTranslation, initReactI18next } from 'react-i18next';
import React, { useState, useEffect, createContext, useContext } from 'react';
import i18n from 'i18next';
import { Table, Typography, DatePicker, Upload, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import classNames from 'classnames';
import styled from 'styled-components';
import esES from 'antd/locale/es_ES';

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

var fails$c = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$b = fails$c;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$a = fails$c;

var functionBindNative = !fails$a(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;

var call$6 = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$6.bind(call$6) : function () {
  return call$6.apply(call$6, arguments);
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
var call$5 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$5, call$5);

var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$5.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;

var toString$3 = uncurryThis$b({}.toString);
var stringSlice$2 = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$2(toString$3(it), 8, -1);
};

var uncurryThis$a = functionUncurryThis;
var fails$9 = fails$c;
var classof$3 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$a(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$9(function () {
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
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$1(it));
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

var process$1 = global$b.process;
var Deno = global$b.Deno;
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
var fails$8 = fails$c;
var global$a = global$d;

var $String$5 = global$a.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$8(function () {
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
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$d($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$3(it));
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

var $TypeError$6 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$3 = function (argument) {
  if (isCallable$c(argument)) return argument;
  throw $TypeError$6(tryToString(argument) + ' is not a function');
};

var aCallable$2 = aCallable$3;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$2(func);
};

var call$4 = functionCall;
var isCallable$b = isCallable$g;
var isObject$5 = isObject$6;

var $TypeError$5 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = call$4(fn, input))) return val;
  if (isCallable$b(fn = input.valueOf) && !isObject$5(val = call$4(fn, input))) return val;
  if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = call$4(fn, input))) return val;
  throw $TypeError$5("Can't convert object to primitive value");
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
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$8({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
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
var hasOwn$9 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$7.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$9(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$9(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$3 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;

var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$3(exoticToPrim, input, pref);
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

var global$6 = global$d;
var isObject$3 = isObject$6;

var document$1 = global$6.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$7 = fails$c;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$9 = descriptors;
var call$2 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$8 = hasOwnProperty_1;
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
  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$2(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$8 = descriptors;
var fails$6 = fails$c;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$6(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$2 = isObject$6;

var $String$3 = String;
var $TypeError$3 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw $TypeError$3($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
var toPropertyKey = toPropertyKey$2;

var $TypeError$2 = TypeError;
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
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
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
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
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
var hasOwn$7 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$7(FunctionPrototype, 'name');
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
var hasOwn$6 = hasOwnProperty_1;
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

var uncurryThis$5 = functionUncurryThis;
var fails$5 = fails$c;
var isCallable$8 = isCallable$g;
var hasOwn$5 = hasOwnProperty_1;
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

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$5(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
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
  var state = enforceInternalState(value);
  if (!hasOwn$5(state, 'source')) {
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

var defineBuiltIn$3 = function (O, key, value, options) {
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
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
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
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$4 = functionUncurryThis;
var hasOwn$4 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
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
var anObject$3 = anObject$5;

var concat$1 = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$3(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$3 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$4 = fails$c;
var isCallable$6 = isCallable$g;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$6(detection) ? fails$4(detection)
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
var defineBuiltIn$2 = defineBuiltIn$3;
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
    defineBuiltIn$2(target, key, sourceProperty, options);
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
var call$1 = functionCall;
var fails$3 = fails$c;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat = uncurryThis$2([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$3(function () {
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
      if (!DESCRIPTORS$3 || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
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

var img$1 = "data:image/png;base64,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";

const CardTool = props => {
  const history = useHistory();
  const {
    t: translate
  } = useTranslation();
  const onClick = () => {
    history.push(props.pathModule);
  };
  return jsx(Ramen.XCardImage, {
    image: img$1,
    title: translate('planograms.title'),
    subTitle: translate('planograms.widget.legend'),
    onClick: onClick
  });
};

var objectDefineProperties = {};

var DESCRIPTORS$2 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$2 = anObject$5;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
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
var anObject$1 = anObject$5;
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
    EmptyConstructor[PROTOTYPE] = anObject$1(O);
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
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$2 = fails$c;

var correctPrototypeGetter = !fails$2(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$2 = hasOwnProperty_1;
var isCallable$5 = isCallable$g;
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
  if (hasOwn$2(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$5(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$1 = fails$c;
var isCallable$4 = isCallable$g;
var isObject = isObject$6;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$3;
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

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails$1(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$4(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$1 = hasOwnProperty_1;
var wellKnownSymbol$4 = wellKnownSymbol$8;

var TO_STRING_TAG$3 = wellKnownSymbol$4('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$1(target, TO_STRING_TAG$3)) {
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
var aCallable$1 = aCallable$3;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$1(aCallable$1(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$3 = isCallable$g;

var $String$1 = String;
var $TypeError$1 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$3(argument)) return argument;
  throw $TypeError$1("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject = anObject$5;
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
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$2 = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable$2 = isCallable$g;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$3;
var wellKnownSymbol$3 = wellKnownSymbol$8;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
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
      defaultIterator = function values() { return call(nativeIterator, this); };
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
    } else $$2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
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
var addToUnscopables = addToUnscopables$1;
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
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

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

var translation = {
	planograms: {
		title: "Planogramas",
		widget: {
			legend: "Publicación de planogramas, para facilitar al usuario el feedback y seguimiento del cumplimiento en tienda."
		}
	},
	status_structure: {
		TO_LOAD: "Por cargar",
		LOADED: "Cargado",
		DELIVERED: "Entregado",
		IMPLEMENTED: "Implementado",
		EXPIRED: "Vencido",
		TO_CORRECT: "Por corregir"
	},
	error_file: {
		E000: "La extensión del archivo no es correcta",
		E001: "El archivo supera el tamaño maximo permitido.",
		E002: "El nombre del archivo es incorrecto. Verifícalo e intenta de nuevo."
	},
	side_bar_title: "Planogramas",
	module_title: "Solicitudes de baja de precio",
	module_subtitle: "Revisa todas las solicitudes enviadas por los colaboradores en sala.",
	in_progress: "En curso",
	finalized: "Finalizadas",
	loading: "Cargando...",
	searcher: "Buscador",
	flag: "Bandera",
	store: "Tienda",
	section: "Sección",
	price_drop_reason: "Motivo de baja de precio",
	select: "Selecciona",
	made_in: "Hecho con ❤ por Cencosud X",
	home_page: {
		columns: {
			reason: "Motivo de baja de precio",
			section: "Sección",
			store: "Tienda",
			productName: "Producto",
			createdAt: "Fecha",
			status: "Estado"
		}
	}
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
  //console.log('i18n configured.');
});

const translateStatus = status => {
  return status ? i18n.t(`status_structure.${status}`) : '';
};

var NotificationTypeEnum;
(function (NotificationTypeEnum) {
  NotificationTypeEnum["SUCCESS"] = "success";
  NotificationTypeEnum["WARNING"] = "warning";
  NotificationTypeEnum["ERROR"] = "error";
  NotificationTypeEnum["INFO"] = "info";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));

var StatusTypes;
(function (StatusTypes) {
  StatusTypes["TO_LOAD"] = "TO_LOAD";
  StatusTypes["LOADED"] = "LOADED";
  StatusTypes["DELIVERED"] = "DELIVERED";
  StatusTypes["IMPLEMENTED"] = "IMPLEMENTED";
  StatusTypes["EXPIRED"] = "EXPIRED";
  StatusTypes["TO_CORRECT"] = "TO_CORRECT";
})(StatusTypes || (StatusTypes = {}));

const StatusStructure = ({
  status,
  action
}) => {
  const [color, setColor] = useState('neutral');
  useEffect(() => {
    switch (status) {
      case StatusTypes.TO_LOAD:
        setColor('error');
        break;
      case StatusTypes.TO_CORRECT:
        setColor('error');
        break;
      case StatusTypes.EXPIRED:
        setColor('error');
        break;
      case StatusTypes.IMPLEMENTED:
        setColor('success');
        break;
      case StatusTypes.LOADED:
        setColor('success');
        break;
      case StatusTypes.DELIVERED:
        setColor('success');
        break;
    }
  }, [status]);
  return jsx(Ramen.XTagState, {
    state: color,
    text: translateStatus(status),
    onClick: action
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

const config$3 = {
  BACKEND_BASE_URL: 'https://api.staging.cencox.xyz/yumi-planograms-module/bff/v1'
};

const config$2 = {
  BACKEND_BASE_URL: 'https://api.staging.cencox.xyz/yumi-planograms-module/bff/v1'
};

const config$1 = {
  BACKEND_BASE_URL: 'https://api.cencosudx.xyz/price-reduction-module/api'
};

var config = new SDK.Lib.ConfigManager({
  LOCAL: config$3,
  STAGING: config$2,
  PRODUCTION: config$1
});

class BaseClient extends SDK.Lib.RESTClient {
  constructor(country = 'CL') {
    super({
      baseURL: `${config.getValue('BACKEND_BASE_URL')}/${country}`
    });
    this.axios.defaults.headers.common['Country'] = country;
    this.country = country;
  }
}

const flags = {
  PE: [{
    value: 'METRO',
    label: 'Metro'
  }, {
    value: 'WONG',
    label: 'Wong'
  }]
};
class FlagClient extends BaseClient {
  listOptions() {
    return __awaiter(this, void 0, void 0, function* () {
      switch (this.country.toUpperCase()) {
        case 'PE':
          return flags['PE'];
        default:
          throw new Error('Countries different from PE are not implemented.');
      }
    });
  }
}

class PlanogramClient extends BaseClient {
  getStructures(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/structure/all`, request);
    });
  }
  getStores(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/common/stores`, request);
    });
  }
  getSections(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/common/sections`, request);
    });
  }
  getCategories(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/common/categories`, request);
    });
  }
  postValidatePlanogram(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/planogram/validate/format`, request);
    });
  }
  postUploadPlanogram(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.axios.post(`/planogram/add`, request, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    });
  }
}

function getClients(params) {
  const flagClient = new FlagClient(params.country);
  const planogramClient = new PlanogramClient(params.country);
  return {
    flagClient,
    planogramClient
  };
}

const PlanogramContext = /*#__PURE__*/createContext({});
const INIT_FILTERS = {
  store_code: [],
  section_code: [],
  category_code: [],
  status: []
};
const PlanogramProvider = props => {
  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);
  const [isOpenDetailDrawer, setIsOpenDetailDrawer] = useState(false);
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [searcher, setSearcher] = useState('');
  const [filters, setFilters] = useState(INIT_FILTERS);
  const [structure, setStructure] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loadingStructure, setLoadingStructure] = useState(false);
  const api = getClients(props.params);
  const flag = 'Wong';
  const clearFilters = () => {
    setFilters(INIT_FILTERS);
  };
  const getDataStructure = (page = 1, pageSize = 10) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    setLoadingStructure(true);
    const request = {
      flag: flag,
      store_code: (_a = filters.store_code) !== null && _a !== void 0 ? _a : [],
      section_code: (_b = filters.section_code) !== null && _b !== void 0 ? _b : [],
      category_code: (_c = filters.category_code) !== null && _c !== void 0 ? _c : [],
      status: (_d = filters.status) !== null && _d !== void 0 ? _d : [],
      page: page,
      size: pageSize,
      search_text: searcher
    };
    try {
      const {
        data
      } = yield api.planogramClient.getStructures(request);
      if (data) {
        setStructure(data.data);
        setTotalRows(data.total_rows);
      }
    } catch (error) {
      setStructure([]);
      setTotalRows(0);
    } finally {
      setLoadingStructure(false);
    }
  });
  const getDataStore = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      flag: flag
    };
    try {
      const {
        data
      } = yield api.planogramClient.getStores(request);
      if (data) {
        return data.map(item => ({
          value: item.store_code,
          label: item.store_code
        }));
      }
      return [];
    } catch (error) {
      return [];
    }
  });
  const getDataSection = stores => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      flag: flag,
      store_code: stores
    };
    try {
      const {
        data
      } = yield api.planogramClient.getSections(request);
      if (data) {
        return data.map(item => ({
          value: item.section_code,
          label: item.section_name
        }));
      }
      return [];
    } catch (error) {
      return [];
    }
  });
  const getDataCategory = (stores, sections) => __awaiter(void 0, void 0, void 0, function* () {
    const request = {
      flag: flag,
      store_code: stores,
      section_code: sections
    };
    try {
      const {
        data
      } = yield api.planogramClient.getCategories(request);
      if (data) {
        return data.map(item => ({
          value: item.category_code,
          label: item.category_name
        }));
      }
      return [];
    } catch (error) {
      return [];
    }
  });
  const postValidatePlanogram = request => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const {
        data: response
      } = yield api.planogramClient.postValidatePlanogram(request);
      if (response) {
        return response;
      }
      return [];
    } catch (error) {
      return [];
    }
  });
  const postUploadPlanogram = request => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const {
        data
      } = yield api.planogramClient.postUploadPlanogram(request);
      return !!data;
    } catch (error) {
      return false;
    }
  });
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      yield getDataStructure(1);
    }))();
  }, [searcher, filters]);
  const value = {
    country: props.params.country,
    isOpenFilterDrawer,
    setIsOpenFilterDrawer,
    isOpenDetailDrawer,
    setIsOpenDetailDrawer,
    isOpenUploadModal,
    setIsOpenUploadModal,
    filters,
    setFilters,
    clearFilters,
    searcher,
    setSearcher,
    structure,
    getDataStructure,
    getDataStore,
    getDataSection,
    getDataCategory,
    postValidatePlanogram,
    postUploadPlanogram,
    loadingStructure,
    totalRows,
    setTotalRows
  };
  return jsx(PlanogramContext.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};

const usePlanogram = () => {
  const {
    structure,
    getDataStructure,
    getDataStore,
    getDataSection,
    getDataCategory,
    postValidatePlanogram,
    postUploadPlanogram,
    isOpenUploadModal,
    setIsOpenUploadModal,
    isOpenDetailDrawer,
    setIsOpenDetailDrawer,
    isOpenFilterDrawer,
    setIsOpenFilterDrawer,
    searcher,
    setSearcher,
    loadingStructure,
    totalRows,
    setTotalRows,
    filters,
    setFilters,
    clearFilters
  } = useContext(PlanogramContext);
  const refreshDataStructure = () => {
    getDataStructure();
  };
  return {
    structure,
    getDataStructure,
    getDataStore,
    getDataSection,
    getDataCategory,
    postValidatePlanogram,
    postUploadPlanogram,
    isOpenUploadModal,
    isOpenFilterDrawer,
    isOpenDetailDrawer,
    setIsOpenUploadModal,
    setIsOpenFilterDrawer,
    setIsOpenDetailDrawer,
    refreshDataStructure,
    searcher,
    setSearcher,
    loadingStructure,
    totalRows,
    setTotalRows,
    filters,
    setFilters,
    clearFilters
  };
};

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

const country = {
  PE: 'Perú',
  CO: 'Colombia',
  CL: 'Chile',
  BR: 'Brasil',
  AR: 'Argentina'
};
const getCountryName = code => {
  var _a;
  return (_a = country[code]) !== null && _a !== void 0 ? _a : '';
};

const {
  Text
} = Typography;
const PlanogramTable = ({
  data
}) => {
  const {
    structure,
    loadingStructure,
    totalRows,
    getDataStructure,
    setIsOpenDetailDrawer
  } = usePlanogram();
  //const [search, setSearch] = useState("");
  //const [debouncedSearch] = useDebounce(search, 500);
  // const onChangeTable = async (sorter?: XTableSorter, pagination?: XTablePagination) => {
  //   console.log(sorter, pagination);
  // };
  // useEffect(() => {
  //   if(debouncedSearch){
  //     const filteredData = data.filter((fact: any) => {
  //       return Object.values(fact)
  //         .join("")
  //         .toLowerCase()
  //         .includes(debouncedSearch.toLowerCase());
  //     });
  //     //setData(filteredData);
  //   }else{
  //     //setData(context.structureData?.data);
  //   }
  //   console.log('llamada al server: ', debouncedSearch, data);
  // }, [debouncedSearch]);
  // useEffect(() => {
  //   setData(context.structureData?.data);
  // }, []);
  const columns = [{
    title: 'País',
    dataIndex: 'country',
    key: 'country',
    render: (value, record) => getCountryName(record.country)
  }, {
    title: 'Tienda',
    dataIndex: 'store_code',
    key: 'store_code'
  }, {
    title: 'Sección',
    dataIndex: 'section_name',
    key: 'section_name'
  }, {
    title: 'Categoría',
    dataIndex: 'category_name',
    key: 'category_name'
  }, {
    title: 'Última actualización',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (value, record) => formatDate(record.updated_at, 'DD MMM, YYYY')
  }, {
    title: 'Modificado por',
    dataIndex: 'created_user_name',
    key: 'created_user_name'
  }, {
    title: 'Estado',
    key: 'status',
    render: (value, record) => {
      return jsx(StatusStructure, {
        status: record.planogram.status,
        action: () => setIsOpenDetailDrawer(true)
      });
    }
  }];
  const paginationSettings = {
    total: totalRows,
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '30', '40', '50'],
    onChange: (page, pageSize) => getDataStructure(page, pageSize),
    showTotal: (total, range) => jsxs(Text, Object.assign({
      type: "secondary"
    }, {
      children: [range[0], "-", range[1], " de ", total, " resultados"]
    }))
  };
  return jsx(Table, {
    loading: loadingStructure,
    dataSource: structure,
    columns: columns,
    pagination: paginationSettings,
    rowKey: "id"
  })
  // <Ramen.XTable
  //   extraHeader={{
  //     component: 'search',
  //     size: 'l',
  //     placeholder: 'Buscador',
  //     onChange: (e) => setSearch(e.target.value),
  //     value: '',
  //   }}
  //   header={{
  //     right: [
  //       {
  //         component: 'button',
  //         text: 'Filtros',
  //         icon: 'filter-1-outline',
  //         onClick: () => '',
  //       },
  //       {
  //         component: 'button',
  //         icon: 'refresh-cw-outline',
  //         onClick: () => '',
  //       },
  //     ],
  //   }}
  //   columns={colums}
  //   sorter={undefined}
  //   pagination={undefined}
  //   dataSource={[]}
  //   onChange={onChangeTable}
  // />
  ;
};

const PlanogramToolbarAction = () => {
  const {
    setIsOpenUploadModal,
    structure,
    refreshDataStructure,
    setIsOpenFilterDrawer,
    searcher,
    setSearcher
  } = usePlanogram();
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    gap: "none"
  }, {
    children: [jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between",
      gap: "m",
      padding: "s"
    }, {
      children: [jsx(Ramen.XBox, {
        children: jsx(Ramen.XText, {})
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between",
        gap: "xs"
      }, {
        children: [jsx(Ramen.XButton, {
          text: "Por corregir",
          icon: "alert-outline",
          type: "outline"
        }), jsx(Ramen.XButton, {
          text: "Cargar planogramas",
          icon: "upload-outline",
          type: "solid",
          onClick: () => setIsOpenUploadModal(true)
        })]
      }))]
    })), (!structure.data || structure.data.length === 0) && jsxs(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "evenly",
      verticalAlign: "center",
      gap: "s",
      padding: "none"
    }, {
      children: [jsx(Ramen.XSearchInput, {
        onChange: e => setSearcher(e.target.value),
        placeholder: "Buscador",
        size: "l",
        value: searcher
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        width: 'auto',
        horizontalAlign: "evenly",
        verticalAlign: "center",
        gap: "xs",
        padding: "xs"
      }, {
        children: [jsx(Ramen.XButton, {
          icon: "filter-1-outline",
          text: "Filtros",
          onClick: () => setIsOpenFilterDrawer(true)
        }), jsx(Ramen.XButtonIcon, {
          icon: "refresh-cw-outline",
          size: "m",
          onClick: () => refreshDataStructure()
        })]
      }))]
    }))]
  }));
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7ZyBddMwEIY/WICOoA1oJ8AbwAZkA8oENRMEJmiZoGWCwASFCeINUiYI1nP7GgI+yZEsW/J97917fbGfY/05See7c0FRFEVRlHnxgvliDuzhwH6i9HLW2mVrm9Z2re17bPd4zopOYIVOvCtk4SS7ZuFivud08Q5tS+eZi2NNuHjHtmZB2Cm4H8muWQBjeOCkQqYOca5aqz3Os6HMXWu/Hv+22A3oTWvn+G0kH1v7TGEY3B5kN5maTjCJFd1m4rreOYVhp5g04A1u8Q4xrd16XLMYDPJgbzmdG8e1KwpB8sItwzzwmDPkqV3MuigN8h3hVMjrbPZUpFmzNkw0pV8yPtIO+ZV4fOO0ewgmhYhGOBYzrXXHafcQTAoRpU2jIR6NcOwVI5JCRIkHCmBqEQ3xCAmTgkghYiMcM8RD2jx+MyJTi1gRD0nE7OsyBjkQjjUNpYC+iETEPf0DrAnnA/JjZRHUyN4Y4ikGuU5TUwh2ykoDtd5iGI7BnVc0FESNPFgrxgp/KtyVwuIy266U1WFSQsrsVMjJhlgpNm9S11js2nc/4PzvPLePPNVWfIW5oOCWkxVuLwq1SxaAHeRYAtYsCLvubYkn3o44WfLsMLgLTT62QTvEThbTilcxMXNr8jR0olh7zd+7sd2hG7od13ZG3FBIPlJRFEVRlNikCHFsiGIYljyIRcNzaJRdOGToumJtMLyfidns0ZoMnmwq5iVcVo+JdpqmaGiPbWsmLPofYpCreXO3LRN7pSFuOmtxQhrKEDBYyJAQx05hn3pxQ9eAOUW94ym8eoufQPYeL0jEFe5fdsO8Ovcr/NbumgQY3NO4Zr7UyPcesz+oF1cok0OlbcXETrCd8ssjYrsjJvHGCnl3ywlXR0ble6GhTZ5SSfITeWETEl+E46OVXzf0/3KG/LDe2DeeIe0ug9im/sIE9IU93svT0Olsej7PuXTZ9Hxu8CRW43tDvgS/WTD1eyxFoCJGQEWMgIoYARUxAipiBIaKqK1s/2GoiH3/buAH+XIz8PNg7LPm8WNSTf7U/JuVN4xMRZfYnEXNNhKGLnNTxBupiqIoirJs/gCtWk5nAxtkFQAAAABJRU5ErkJggg==";

var Styles = {"to__fixed__view":"index-module_to__fixed__view__db-Xi","status":"index-module_status__mg-Vf","category":"index-module_category__j8sDO","username":"index-module_username__AYw45","vr":"index-module_vr__RWBc3","subcontainer":"index-module_subcontainer__ilkFd","full":"index-module_full__H86CK","half":"index-module_half__0PUkB","item":"index-module_item__PF2iy","grid":"index-module_grid__JA3EA"};

const PlanogramDetailDrawer = () => {
  const {
    isOpenDetailDrawer,
    setIsOpenDetailDrawer
  } = usePlanogram();
  useState([]);
  useState([]);
  useState([]);
  useState([]);
  // useEffect(() => {
  //   setStores(context.filters?.stores ?? []);
  //   setSections(context.filters?.sections ?? []);
  //   setCategories(context.filters?.categories ?? []);
  //   setStates(context.filters?.states.some((x) => x.value) ? context.filters?.states : []);
  // }, [context.filters]);
  return jsx(Ramen.XDrawer, Object.assign({
    closable: true,
    open: isOpenDetailDrawer,
    onClickAction: () => {},
    onClose: () => setIsOpenDetailDrawer(false),
    placement: "right",
    size: "l"
  }, {
    children: jsxs("div", Object.assign({
      className: Styles.to__fixed__view
    }, {
      children: [jsx("div", Object.assign({
        className: Styles.status
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          horizontalAlign: "between",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold"
          }, {
            children: "Estado de la solicitud"
          })), jsx(Ramen.XTagState, {
            state: "error",
            text: "Por corregir"
          })]
        }))
      })), jsx("h6", Object.assign({
        className: Styles.category
      }, {
        children: "Categor\u00EDa"
      })), jsx(Ramen.XText, Object.assign({
        weight: "bold",
        fontSize: 9
      }, {
        children: "Aceites"
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xs"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: "dim"
        }, {
          children: "Pa\u00EDs:"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 12
        }, {
          children: "Per\u00FA"
        })), jsx("span", {
          className: Styles.vr
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: "dim"
        }, {
          children: "Zona:"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 12
        }, {
          children: "1"
        })), jsx("span", {
          className: Styles.vr
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: "dim"
        }, {
          children: "Tienda:"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 12
        }, {
          children: "T101"
        })), jsx("span", {
          className: Styles.vr
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: "dim"
        }, {
          children: "Secci\u00F3n:"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 12
        }, {
          children: "Comidas"
        })), jsx("span", {
          className: Styles.vr
        }), jsx(Ramen.XText, Object.assign({
          fontSize: 12,
          colorThone: "dim"
        }, {
          children: "Categor\u00EDa:"
        })), jsx(Ramen.XText, Object.assign({
          fontSize: 12
        }, {
          children: "Salsas y aderezos"
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "m"
      }, {
        children: [jsx(Ramen.XFormItem, Object.assign({
          label: "Subir archivo (*)"
        }, {
          children: jsx(Ramen.XTextInput, {
            icon: "upload-outline",
            onBlur: () => {},
            onChange: () => {},
            onFocus: () => {},
            onKeyDown: () => {},
            onKeyUp: () => {},
            placeholder: "Selecciona el archivo",
            size: "l"
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          label: "Fecha l\u00EDmite de implementaci\u00F3n (*)"
        }, {
          children: jsx(Ramen.XTextInput, {
            icon: "calendar-outline",
            onBlur: () => {},
            onChange: () => {},
            onFocus: () => {},
            onKeyDown: () => {},
            onKeyUp: () => {},
            placeholder: "DD/MM/AAAA",
            size: "l"
          })
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "evenly",
        gap: "m"
      }, {
        children: [jsx("div", Object.assign({
          className: classNames(Styles.subcontainer, Styles.full)
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            gap: "s",
            padding: "s"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Tipo del problema"
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Tipo de mueble"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Seco"
                }))]
              }))
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Medidas"
            })), jsxs(Ramen.XBox, Object.assign({
              orientation: "horizontal",
              horizontalAlign: "between",
              gap: "s",
              padding: "none"
            }, {
              children: [jsx("div", Object.assign({
                className: Styles.item
              }, {
                children: jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  horizontalAlign: "between",
                  gap: "s",
                  padding: "m"
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    fontSize: 11
                  }, {
                    children: "Alto"
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 11
                  }, {
                    children: "195 cm"
                  }))]
                }))
              })), jsx("div", Object.assign({
                className: Styles.item
              }, {
                children: jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  horizontalAlign: "between",
                  gap: "s",
                  padding: "m"
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    fontSize: 11
                  }, {
                    children: "Ancho"
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 11
                  }, {
                    children: "170 cm"
                  }))]
                }))
              }))]
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Profundidad"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "80 cm"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Cantidad de bandejas"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "4"
                }))]
              }))
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Usuario"
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Notificado por"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Pedro Guerrero"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Cargo"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Jefe de secci\u00F3n"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Fecha"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "31 ene, 2023"
                }))]
              }))
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Adjuntos"
            })), jsxs("div", Object.assign({
              className: Styles.grid
            }, {
              children: [jsx(Ramen.XButton, {
                size: "xs",
                icon: "download-outline",
                text: 'Archivo1.png'
              }), jsx(Ramen.XButton, {
                size: "xs",
                icon: "download-outline",
                text: 'Archivo2.png'
              }), jsx(Ramen.XButton, {
                size: "xs",
                icon: "download-outline",
                text: 'Archivo3.png'
              }), jsx(Ramen.XButton, {
                size: "xs",
                icon: "download-outline",
                text: 'Archivo4.png'
              })]
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Comentarios"
            })), jsx(Ramen.XText, Object.assign({
              colorThone: "medium",
              fontSize: 12
            }, {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus neque dolore soluta suscipit odit? Cum aperiam quaerat tempore? Id soluta aut est omnis animi veritatis laudantium accusamus, provident maxime."
            }))]
          }))
        })), jsx("div", Object.assign({
          className: classNames(Styles.subcontainer, Styles.full)
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "vertical",
            gap: "s"
          }, {
            children: [jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XImage, {
                  src: img,
                  width: 5,
                  rounded: "m",
                  border: "shadow",
                  padding: "xs"
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: "vertical",
                  gap: "xxs",
                  padding: "xxs"
                }, {
                  children: [jsx("h6", Object.assign({
                    className: Styles.username
                  }, {
                    children: "Categor\u00EDa"
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 9
                  }, {
                    children: "Loreto Ortega"
                  })), jsxs(Ramen.XBox, Object.assign({
                    orientation: "horizontal",
                    gap: "xxs"
                  }, {
                    children: [jsx(Ramen.XText, Object.assign({
                      colorThone: "dim",
                      fontSize: 12
                    }, {
                      children: "\u00DAltima actualizaci\u00F3n"
                    })), jsx(Ramen.XText, Object.assign({
                      weight: "normal",
                      fontSize: 12
                    }, {
                      children: "18 ene, 2023"
                    }))]
                  }))]
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XImage, {
                  src: img,
                  width: 5,
                  rounded: "m",
                  border: "shadow",
                  padding: "xs"
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: "vertical",
                  gap: "xxs",
                  padding: "xxs"
                }, {
                  children: [jsx("h6", Object.assign({
                    className: Styles.username
                  }, {
                    children: "Categor\u00EDa"
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 9
                  }, {
                    children: "Pedro Guerrero"
                  })), jsxs(Ramen.XBox, Object.assign({
                    orientation: "horizontal",
                    gap: "xxs"
                  }, {
                    children: [jsx(Ramen.XText, Object.assign({
                      colorThone: "dim",
                      fontSize: 12
                    }, {
                      children: "\u00DAltima implementaci\u00F3n"
                    })), jsx(Ramen.XText, Object.assign({
                      weight: "normal",
                      fontSize: 12
                    }, {
                      children: "19 ene, 2023"
                    }))]
                  }))]
                }))]
              }))
            })), jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 10
            }, {
              children: "Planograma fue visto por"
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Diego carciente"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Gerente"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Marta Brito"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Subgerente"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Pedro Perez"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Jefe de pasillo"
                }))]
              }))
            })), jsx("div", Object.assign({
              className: Styles.item
            }, {
              children: jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                horizontalAlign: "between",
                gap: "s",
                padding: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: "Juan Dominguez"
                })), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: "Auxiliar de tienda"
                }))]
              }))
            }))]
          }))
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "s"
      }), jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "end",
        padding: "none"
      }, {
        children: jsx(Ramen.XButton, {
          type: "solid",
          disabled: true,
          text: "Corregir"
        })
      }))]
    }))
  }));
};

var aCallable = aCallable$3;
var toObject = toObject$4;
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

var fails = fails$c;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var classof$2 = classofRaw$1;

var engineIsNode = typeof process != 'undefined' && classof$2(process) == 'process';

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

const PlanogramFilterDrawer = () => {
  const {
    setIsOpenFilterDrawer,
    isOpenFilterDrawer,
    getDataStore,
    getDataSection,
    getDataCategory,
    setFilters,
    clearFilters
  } = usePlanogram();
  const [stores, setStores] = useState([]);
  const [storesSelected, setStoresSelected] = useState([]);
  const [sections, setSections] = useState([]);
  const [sectionsSelected, setSectionsSelected] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [statesSelected, setStatesSelected] = useState([]);
  const actionClear = () => {
    clearFilters();
    setSections([]);
    setCategories([]);
    setStoresSelected([]);
    setSectionsSelected([]);
    setCategoriesSelected([]);
    setStatesSelected([]);
  };
  const isDisabled = () => {
    return !(storesSelected.length > 0 || sectionsSelected.length > 0 || categoriesSelected.length > 0 || statesSelected.some(x => x.value));
  };
  const actionApply = () => {
    const transformStatus = statesSelected.reduce((acc, item) => {
      if (item.value) {
        return [...acc, item.key];
      }
      return acc;
    }, []);
    setFilters({
      store_code: storesSelected !== null && storesSelected !== void 0 ? storesSelected : [],
      section_code: sectionsSelected !== null && sectionsSelected !== void 0 ? sectionsSelected : [],
      category_code: categoriesSelected !== null && categoriesSelected !== void 0 ? categoriesSelected : [],
      status: transformStatus !== null && transformStatus !== void 0 ? transformStatus : []
    });
  };
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const allStores = yield getDataStore();
      setStores(allStores);
    }))();
  }, []);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (storesSelected.length) {
        setSections([]);
        setSectionsSelected([]);
        setCategories([]);
        setCategoriesSelected([]);
        const allSections = yield getDataSection(storesSelected);
        setSections(allSections);
      }
    }))();
  }, [storesSelected]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (sectionsSelected.length) {
        setCategories([]);
        setCategoriesSelected([]);
        const allCategories = yield getDataCategory(storesSelected, sectionsSelected);
        setCategories(allCategories);
      }
    }))();
  }, [sectionsSelected]);
  return jsx(Ramen.XDrawer, Object.assign({
    closable: true,
    open: isOpenFilterDrawer,
    onClose: () => setIsOpenFilterDrawer(false),
    placement: "right",
    headerType: "fixed",
    title: 'Filtros'
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: "vertical",
      verticalAlign: "start",
      padding: "none",
      gap: "none",
      width: 'flex',
      height: 'full',
      overflow: "scroll"
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "start",
        padding: "none",
        gap: "xs",
        width: 'flex',
        height: 'auto',
        overflow: "scroll"
      }, {
        children: [jsx(Ramen.XSelectMultiple, {
          icon: "store-outline",
          onChange: v => setStoresSelected(v),
          value: storesSelected,
          options: stores,
          placeholder: "Tienda"
        }), jsx(Ramen.XSelectMultiple, {
          icon: "flag-outline",
          onChange: v => setSectionsSelected(v),
          value: sectionsSelected,
          options: sections,
          placeholder: "Secci\u00F3n"
        }), jsx(Ramen.XSelectMultiple, {
          icon: "package-outline",
          onChange: v => setCategoriesSelected(v),
          value: categoriesSelected,
          options: categories,
          placeholder: "Categor\u00EDa"
        }), jsx(Ramen.XVSpace, {
          size: "xxs"
        }), jsx(Ramen.XText, Object.assign({
          weight: "normal",
          colorThone: "dim"
        }, {
          children: "Estados"
        })), jsx(Ramen.XCheckboxGroup, {
          columns: 1,
          onChange: v => setStatesSelected(v),
          values: statesSelected,
          items: Object.keys(StatusTypes).map(value => {
            return {
              key: value,
              label: translateStatus(value)
            };
          }),
          title: "Todos"
        })]
      })), jsx(Ramen.XDivider, {}), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "evenly",
        padding: "none",
        gap: "m",
        height: 'auto',
        width: 'full'
      }, {
        children: [jsx(Ramen.XButton, {
          icon: 'trash-2-outline',
          iconPosition: "start",
          size: "xl",
          onClick: () => actionClear(),
          text: "Limpiar"
        }), jsx(Ramen.XButton, {
          disabled: isDisabled(),
          size: "xl",
          onClick: () => actionApply(),
          text: "Aplicar"
        })]
      }))]
    }))
  }));
};

let _ = t => t,
  _t,
  _t2,
  _t3;
const redColor = '#DD4242';
const whiteLighterColor = '#f0f0f0';
const blackColor = '#000000';
const WrapperErrorText = styled.div(_t || (_t = _`
  & svg {
    color: #DD4242 !important;
  }
`));
const TextDanger = styled.span(_t2 || (_t2 = _`
  color: ${0};
  margin-left: 5px;
`), redColor);
const WrapperCard = styled.div(_t3 || (_t3 = _`
  & > div:first-of-type{
    border: 1px solid ${0};
    & > div:first-of-type > div:nth-child(2) > div{
      color: ${0};
    }
    & > div:first-of-type > div:nth-child(1) > div:nth-child(1) > svg{
      color: ${0};
    }
  }
`), props => props.$isError ? redColor : whiteLighterColor, props => props.$isError ? redColor : "#1F1F1F", props => props.$isError ? redColor : blackColor);

const ListFile = ({
  files,
  remove,
  disabled
}) => {
  const itemListRender = data => {
    const isError = data.status === 'error';
    return jsxs(WrapperCard, Object.assign({
      "$isError": isError
    }, {
      children: [jsx(Ramen.XCard, Object.assign({
        borderType: "solid"
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "full",
          gap: "xs",
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            orientation: "vertical",
            verticalAlign: "center"
          }, {
            children: jsx(Ramen.XIcon, {
              icon: isError ? "alert-outline" : "paperclip-outline",
              size: "s"
            })
          })), jsx(Ramen.XBox, Object.assign({
            width: "full",
            orientation: "vertical",
            verticalAlign: "center"
          }, {
            children: jsx(Ramen.XText, Object.assign({
              weight: "lighter",
              fontSize: 11
            }, {
              children: data.name
            }))
          })), jsx(Ramen.XBox, Object.assign({
            horizontalAlign: "end"
          }, {
            children: jsx(Ramen.XButtonIcon, {
              type: "tonal",
              size: "s",
              icon: "trash-2-outline",
              disabled: disabled,
              onClick: () => remove(data.uid)
            })
          }))]
        }))
      })), isError ? jsxs(WrapperErrorText, {
        children: [jsx(Ramen.XVSpace, {
          size: "xxs"
        }), jsxs(Ramen.XBox, Object.assign({
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XIcon, {
            icon: "alert-bold-filled",
            size: "xs"
          }), jsx(Ramen.XText, Object.assign({
            fontSize: 12,
            weight: "normal"
          }, {
            children: jsx(TextDanger, {
              children: data.error ? i18n.t(`error_file.${data.error}`) : ''
            })
          }))]
        }))]
      }) : null]
    }));
  };
  return jsxs(React.Fragment, {
    children: [jsx(Ramen.XVSpace, {
      size: "l"
    }), jsx(Ramen.XList, {
      dataSource: files,
      renderItem: data => itemListRender(data)
    })]
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

const notification = params => {
  const {
    type,
    message,
    description,
    onClose,
    duration
  } = params;
  Ramen.Api.notification[type]({
    appearance: 'solid',
    description: description !== null && description !== void 0 ? description : '',
    message: message !== null && message !== void 0 ? message : '',
    duration: duration ? duration : 4.5,
    onClose: onClose ? onClose : () => ''
  });
};

const {
  Dragger
} = Upload;
const dateFormat = 'DD/MM/YYYY';
const PlanogramUploadModal = props => {
  const {
    isOpenUploadModal,
    setIsOpenUploadModal,
    getDataStore,
    getDataCategory,
    postValidatePlanogram,
    postUploadPlanogram
  } = usePlanogram();
  const [stores, setStores] = useState([]);
  const [storesSelected, setStoresSelected] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [implementationDate, setImplementationDate] = useState('');
  const [files, setFiles] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const getFileObject = (arrayListFile, uid) => {
    const obj = arrayListFile.filter(item => item.uid === uid);
    return obj[0];
  };
  const addOrUpdateFile = (newObject, array) => {
    //Codigo para agregacion multiple de archivos
    // const indexItem = array.findIndex(item => item.uid === newObject.uid);
    // if (indexItem > -1){
    //   array[indexItem] = newObject;
    //   return array;
    // }
    // return [...array, newObject];
    return [newObject];
  };
  const removeFile = uid => {
    const filesTemp = files.filter(item => item.uid !== uid);
    setFiles(filesTemp);
  };
  const propsDrag = {
    listType: 'picture',
    accept: '.pdf',
    multiple: false,
    maxCount: 1,
    disabled: disabled,
    showUploadList: false,
    customRequest: () => {},
    onChange: ({
      fileList,
      file
    }) => __awaiter(void 0, void 0, void 0, function* () {
      var _a;
      const uid = file.uid;
      const newObj = getFileObject(fileList, uid);
      newObj.status = 'uploading';
      newObj.error = '';
      //setFiles((prev) => addOrUpdateFile(newObj, prev));
      const request = [{
        mimetype: file.type,
        originalName: file.name,
        size: file.size
      }];
      const {
        data
      } = yield postValidatePlanogram(request);
      if (data === null || data === void 0 ? void 0 : data.length) {
        if ((_a = data[0].errors) === null || _a === void 0 ? void 0 : _a.length) {
          newObj.status = "error";
          newObj.error = data[0].errors[0];
        } else {
          newObj.status = "success";
          newObj.structureId = data[0].structureId;
        }
      } else {
        newObj.status = "error";
        newObj.error = '';
      }
      setFiles(prev => addOrUpdateFile(newObj));
    })
  };
  const isDisabledUploadFile = () => {
    return !(storesSelected.length > 0 && categoriesSelected.length > 0 && implementationDate && files.length && !files.some(file => file.status === 'error'));
  };
  const clearForm = () => {
    setCategoriesSelected([]);
    setCategoriesSelected([]);
    setImplementationDate('');
    setFiles([]);
  };
  const actionUploadFile = () => __awaiter(void 0, void 0, void 0, function* () {
    setDisabled(true);
    const formData = new FormData();
    formData.append("file", files[0].originFileObj);
    formData.append("structureId", files[0].structureId);
    formData.append("category", JSON.stringify(categoriesSelected));
    formData.append("store", JSON.stringify(storesSelected));
    formData.append("implementationDate", implementationDate);
    const data = yield postUploadPlanogram(formData);
    setDisabled(false);
    if (data) {
      setIsOpenUploadModal(false);
      notification({
        description: '¡Archivos subidos exitosamente!',
        type: NotificationTypeEnum.SUCCESS
      });
    } else {
      notification({
        description: 'No se pudieron cargar los planogramas.',
        message: 'Hubo un error en el servicio. Inténtalo nuevamente.',
        type: NotificationTypeEnum.ERROR
      });
    }
    //showLoading();
    //hideloading();
  });

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const allStores = yield getDataStore();
      setStores(allStores);
    }))();
  }, []);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (storesSelected.length) {
        setCategories([]);
        setCategoriesSelected([]);
        const allCategories = yield getDataCategory(storesSelected, []);
        setCategories(allCategories);
      }
    }))();
  }, [storesSelected]);
  useEffect(() => {
    clearForm();
  }, [isOpenUploadModal]);
  return jsx(Ramen.XModal, Object.assign({
    actions: [{
      text: 'Cancelar',
      type: 'outline',
      disabled: disabled,
      onClick: () => setIsOpenUploadModal(false)
    }, {
      text: 'Cargar planogramas',
      type: 'solid',
      disabled: isDisabledUploadFile(),
      loading: disabled,
      onClick: () => actionUploadFile()
    }],
    headerType: "fixed",
    icon: "upload-outline",
    onClose: () => disabled ? '' : setIsOpenUploadModal(false),
    title: "Cargar planogramas",
    visible: isOpenUploadModal,
    size: "xl"
  }, {
    children: jsxs("div", {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "m"
      }, {
        children: [jsx(Ramen.XFormItem, Object.assign({
          label: "Tienda"
        }, {
          children: jsx(Ramen.XSelectMultiple, {
            icon: "store-outline",
            size: "s",
            onChange: value => setStoresSelected(value),
            placeholder: "Selecciona",
            options: stores,
            disabled: disabled
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          label: "Categor\u00EDa"
        }, {
          children: jsx(Ramen.XSelectMultiple, {
            icon: "flag-outline",
            size: "s",
            placeholder: "Selecciona",
            onChange: value => setCategoriesSelected(value),
            options: categories,
            disabled: disabled
          })
        })), jsx(Ramen.XFormItem, Object.assign({
          label: "Fecha l\u00EDmite de implementaci\u00F3n (*)"
        }, {
          children: jsx(DatePicker, {
            size: "large",
            placeholder: "",
            format: dateFormat,
            onChange: date => setImplementationDate(date ? date.format() : ''),
            disabled: disabled
          })
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "m"
      }), jsx(Ramen.XBox, Object.assign({
        gap: "m"
      }, {
        children: jsx(Ramen.XAlert, Object.assign({
          title: "Tener en cuenta",
          type: "info"
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xxs"
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              fontSize: 11
            }, {
              children: " La nomenclatura de tus archivos debe ser: "
            })), jsx(Ramen.XText, Object.assign({
              fontSize: 11,
              weight: "bold"
            }, {
              children: "Local_Categoria_MMAAAA.pdf"
            })), jsx(Ramen.XText, Object.assign({
              fontSize: 11
            }, {
              children: "(Ejemplo:N517_Azucar_072023.PDF) * No usar tildes."
            }))]
          }))
        }))
      })), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsxs(Ramen.XBox, {
        children: [jsxs(Dragger, Object.assign({}, propsDrag, {
          children: [jsx(Ramen.XSymbol, {
            size: "xl",
            symbol: "load-history-neutral"
          }), jsx(Ramen.XText, Object.assign({
            textAlign: "center",
            colorThone: "darkest",
            fontSize: 11
          }, {
            children: "Selecciona o arrastra los archivos"
          })), jsx(Ramen.XVSpace, {
            size: "m"
          }), jsx(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            horizontalAlign: "center"
          }, {
            children: jsx(Ramen.XButton, {
              size: "m",
              type: "tonal",
              icon: "share-outline",
              onClick: () => {},
              text: "Seleccionar planogramas"
            })
          })), jsx(Ramen.XVSpace, {
            size: "m"
          }), jsx(Ramen.XText, Object.assign({
            textAlign: "center",
            colorThone: "dim",
            fontSize: 12
          }, {
            children: "S\u00F3lo archivos .pdf - peso m\u00E1ximo 10 MB"
          }))]
        })), jsx(ListFile, {
          files: files,
          rowKey: "uid",
          remove: removeFile,
          disabled: disabled
        })]
      })]
    })
  }));
};

const PlanogramPage = () => {
  const {
    getDataStructure
  } = usePlanogram();
  useEffect(() => {
    getDataStructure();
  }, []);
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    padding: "s",
    gap: "s",
    width: 'full',
    height: 'full',
    overflow: 'auto'
  }, {
    children: [jsx(PlanogramToolbarAction, {}), jsx(PlanogramTable, {}), jsx(PlanogramDetailDrawer, {}), jsx(PlanogramFilterDrawer, {}), jsx(PlanogramUploadModal, {})]
  }));
};

dayjs.locale('es');
const Flow = props => {
  const {
    path
  } = useRouteMatch();
  const defaultData = {
    "token": {
      "colorPrimary": "#000000",
      "colorPrimaryText": "#ffffff",
      "colorPrimaryTextActive": "#fffefe",
      "fontFamily": "'Open Sans', sans-serif",
      "fontSize": 12
    },
    "components": {
      "Pagination": {
        "itemActiveBg": "rgb(0, 0, 0)",
        "colorPrimary": "rgb(249, 245, 245)",
        "colorPrimaryHover": "rgb(249, 247, 247)"
      },
      "Select": {
        "controlItemBgActive": "rgb(236, 236, 236)",
        "borderRadius": 999
      },
      "Input": {
        "borderRadius": 999,
        "borderRadiusLG": 999,
        "borderRadiusSM": 999
      },
      "DatePicker": {
        "borderRadius": 999,
        "borderRadiusOuter": 999,
        "controlHeight": 34,
        "controlHeightLG": 42,
        "colorPrimaryHover": "rgb(217, 217, 217)",
        "fontSize": 14,
        "fontSizeLG": 16,
        "fontWeightStrong": 800
      }
    }
  };
  return jsx(ConfigProvider, Object.assign({
    locale: esES,
    theme: defaultData
  }, {
    children: jsx(PlanogramProvider, Object.assign({
      params: props.params
    }, {
      children: jsx(Switch, {
        children: jsx(Route, {
          path: `${path}`,
          exact: true,
          component: PlanogramPage
        })
      })
    }))
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
