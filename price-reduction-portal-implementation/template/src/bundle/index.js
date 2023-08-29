import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as SDK from '@team_yumi/sdk';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import Ramen from '@team_yumi/ramen-web';
import 'axios';
import { z } from 'zod';
import { io } from 'socket.io-client';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

var objectGetOwnPropertyDescriptor = {};

var fails$s = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$r = fails$s;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$r(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$q = fails$s;

var functionBindNative = !fails$q(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$f = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$f.bind(call$f) : function () {
  return call$f.apply(call$f, arguments);
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
var call$e = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$e, call$e);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$e.apply(fn, arguments);
  };
};

var uncurryThis$t = functionUncurryThis;

var toString$9 = uncurryThis$t({}.toString);
var stringSlice$6 = uncurryThis$t(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$9(it), 8, -1);
};

var uncurryThis$s = functionUncurryThis;
var fails$p = fails$s;
var classof$a = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$s(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$p(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$a(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$c = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$4(it)) throw $TypeError$c("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$6 = function (it) {
  return IndexedObject$2(requireObjectCoercible$5(it));
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
var isCallable$k = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$j = isCallable$k;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$b = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$j(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$j(it);
};

var global$m = global$n;
var isCallable$i = isCallable$k;

var aFunction = function (argument) {
  return isCallable$i(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
};

var uncurryThis$r = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$r({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$l = global$n;
var userAgent$2 = engineUserAgent;

var process = global$l.process;
var Deno = global$l.Deno;
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
if (!version && userAgent$2) {
  match = userAgent$2.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$2.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$o = fails$s;
var global$k = global$n;

var $String$6 = global$k.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$o(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$4 = getBuiltIn$5;
var isCallable$h = isCallable$k;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$h($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
};

var $String$5 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$5(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$g = isCallable$k;
var tryToString$4 = tryToString$5;

var $TypeError$b = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$6 = function (argument) {
  if (isCallable$g(argument)) return argument;
  throw $TypeError$b(tryToString$4(argument) + ' is not a function');
};

var aCallable$5 = aCallable$6;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$5(func);
};

var call$d = functionCall;
var isCallable$f = isCallable$k;
var isObject$a = isObject$b;

var $TypeError$a = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$a(val = call$d(fn, input))) return val;
  if (isCallable$f(fn = input.valueOf) && !isObject$a(val = call$d(fn, input))) return val;
  if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$a(val = call$d(fn, input))) return val;
  throw $TypeError$a("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$j = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$j, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$j[key] = value;
  } return value;
};

var global$i = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$i[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$8 = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};

var uncurryThis$q = functionUncurryThis;
var toObject$7 = toObject$8;

var hasOwnProperty = uncurryThis$q({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$7(it), key);
};

var uncurryThis$p = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$8 = uncurryThis$p(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
};

var global$h = global$n;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$2 = global$h.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$2;

var wellKnownSymbol$h = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$c = functionCall;
var isObject$9 = isObject$b;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$g = wellKnownSymbol$h;

var $TypeError$9 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$9(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$c(exoticToPrim, input, pref);
    if (!isObject$9(result) || isSymbol$2(result)) return result;
    throw $TypeError$9("Can't convert object to primitive value");
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

var global$g = global$n;
var isObject$8 = isObject$b;

var document$1 = global$g.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$8(document$1) && isObject$8(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$d = descriptors;
var fails$n = fails$s;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$d && !fails$n(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$c = descriptors;
var call$b = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$c ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$4(!call$b(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$b = descriptors;
var fails$m = fails$s;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$m(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$7 = isObject$b;

var $String$4 = String;
var $TypeError$8 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$b = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$8($String$4(argument) + ' is not an object');
};

var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$a = anObject$b;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$7 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
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
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$9 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$8 = DESCRIPTORS$9 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$8 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || (DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$o = functionUncurryThis;
var isCallable$e = isCallable$k;
var store$1 = sharedStore;

var functionToString = uncurryThis$o(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$e(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var global$f = global$n;
var isCallable$d = isCallable$k;

var WeakMap$1 = global$f.WeakMap;

var weakMapBasicDetection = isCallable$d(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$1(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$6 = isObject$b;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$e.TypeError;
var WeakMap = global$e.WeakMap;
var set$1, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$6(it) || (state = get$1(it)).type !== TYPE) {
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
  get$1 = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$n = functionUncurryThis;
var fails$l = fails$s;
var isCallable$c = isCallable$k;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$7 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$4 = internalState;

var enforceInternalState$2 = InternalStateModule$4.enforce;
var getInternalState$4 = InternalStateModule$4.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$5 = uncurryThis$n(''.slice);
var replace$3 = uncurryThis$n(''.replace);
var join = uncurryThis$n([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$7 && !fails$l(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$5($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$3($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$7) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$7) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$2(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$c(this) && getInternalState$4(this).source || inspectSource$1(this);
}, 'toString');

var isCallable$b = isCallable$k;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$6 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$b(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$5 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$5 : ceil)(n);
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
var toLength$6 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$7(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$5 = toLength$6;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$7 = function (obj) {
  return toLength$5(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$6 = lengthOfArrayLike$7;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$6(O);
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
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$m = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$3 = uncurryThis$m([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$3(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$3(result, key);
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

var getBuiltIn$3 = getBuiltIn$5;
var uncurryThis$l = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$9 = anObject$b;

var concat$2 = uncurryThis$l([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$k = fails$s;
var isCallable$a = isCallable$k;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$a(detection) ? fails$k(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$d = global$n;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
var defineBuiltIn$5 = defineBuiltIn$6;
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
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
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
      createNonEnumerableProperty$6(sourceProperty, 'sham', true);
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

var DESCRIPTORS$6 = descriptors;
var uncurryThis$k = functionUncurryThis;
var call$a = functionCall;
var fails$j = fails$s;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$6 = toObject$8;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat$1 = uncurryThis$k([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$j(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$6 && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
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
  var T = toObject$6(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$6 || call$a(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$7 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$7({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var translation = {
	status: {
		PENDING: "Pendiente",
		APPROVED: "Aprobado",
		REJECTED: "Rechazado"
	},
	side_bar_title: "Baja de precios ",
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
i18n.use(initReactI18next).init({
  lng: 'es_CL',
  fallbackLng: 'es_CL',
  resources,
  interpolation: {
    escapeValue: false
  }
}).then(() => {
  console.log('i18n configured.');
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

const config$3 = {
  BACKEND_BASE_URL: 'http://localhost:8080'
};

const config$2 = {
  BACKEND_BASE_URL: 'https://api.staging.cencox.xyz/price-reduction-module/api'
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
      baseURL: config.getValue('BACKEND_BASE_URL')
    });
    this.axios.defaults.headers.common['Country'] = country;
    this.country = country;
  }
}

class TaskClient extends BaseClient {
  list(filter, limit, offset, sort) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/task', {
        params: {
          filter,
          limit,
          offset,
          sort
        }
      });
      return data;
    });
  }
}

const flags = {
  CL: [{
    value: 'JUMBO',
    label: 'JUMBO'
  }, {
    value: 'SISA',
    label: 'SISA'
  }, {
    value: 'SPID',
    label: 'SPID'
  }]
};
class FlagClient extends BaseClient {
  listOptions() {
    return __awaiter(this, void 0, void 0, function* () {
      switch (this.country.toUpperCase()) {
        case 'CL':
          return flags.CL;
        default:
          throw new Error('Countries different from CL are not implemented.');
      }
    });
  }
}

class StoreClient extends BaseClient {
  listOptions(flag) {
    return __awaiter(this, void 0, void 0, function* () {
      const filter = {};
      if (flag) {
        filter['flag'] = flag;
      }
      const {
        data
      } = yield this.axios.get('/store', {
        params: {
          filter
        }
      });
      return data.map(store => ({
        value: store.id,
        label: store.name
      }));
    });
  }
}

class SectionClient extends BaseClient {
  listOptions() {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/section');
      return data.map(store => ({
        value: store.name,
        label: store.name
      }));
    });
  }
}

class ReasonClient extends BaseClient {
  listOptions() {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield this.axios.get('/reasons');
      return data;
    });
  }
}

function getClients(params) {
  const taskClient = new TaskClient(params.country);
  const flagClient = new FlagClient(params.country);
  const storeClient = new StoreClient(params.country);
  const sectionClient = new SectionClient(params.country);
  const reasonClient = new ReasonClient(params.country);
  return {
    taskClient,
    flagClient,
    storeClient,
    sectionClient,
    reasonClient
  };
}

const ModuleContext = /*#__PURE__*/createContext(null);
const useContext = () => {
  const context = React.useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('Context Provider component must be in the root of the flow');
  }
  return context;
};
const Context = props => {
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
    clients: getClients(props.params),
    socket: props.socket
  };
  return jsx(ModuleContext.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};
Context.defaultProps = {};

var objectDefineProperties = {};

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$8 = anObject$b;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$2 = getBuiltIn$5;

var html$1 = getBuiltIn$2('document', 'documentElement');

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
var PROTOTYPE$1 = 'prototype';
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
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$f = wellKnownSymbol$h;
var create$3 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$f('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$i = fails$s;

var correctPrototypeGetter = !fails$i(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$9 = isCallable$k;
var toObject$5 = toObject$8;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype$2 = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$5(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$9(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype$2 : null;
};

var fails$h = fails$s;
var isCallable$8 = isCallable$k;
var isObject$5 = isObject$b;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$e = wellKnownSymbol$h;

var ITERATOR$6 = wellKnownSymbol$e('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$h(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$8(IteratorPrototype$2[ITERATOR$6])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$d = wellKnownSymbol$h;

var TO_STRING_TAG$4 = wellKnownSymbol$d('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$4)) {
    defineProperty$2(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$j = functionUncurryThis;
var aCallable$4 = aCallable$6;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$j(aCallable$4(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$7 = isCallable$k;

var $String$2 = String;
var $TypeError$6 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$7(argument)) return argument;
  throw $TypeError$6("Can't set " + $String$2(argument) + ' as a prototype');
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

var $$6 = _export;
var call$9 = functionCall;
var FunctionName$1 = functionName;
var isCallable$6 = isCallable$k;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$4 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$c = wellKnownSymbol$h;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$c('iterator');
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
    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$4) {
          setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR$5])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$5(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$9(nativeIterator, this); };
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
    } else $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
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
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$4 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$3.set;
var getInternalState$3 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

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
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$4 && values.name !== 'values') try {
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

var global$c = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
var wellKnownSymbol$b = wellKnownSymbol$h;

var ITERATOR$4 = wellKnownSymbol$b('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
      createNonEnumerableProperty$4(CollectionPrototype, ITERATOR$4, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$4] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$3]) {
      createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$4(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
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

var tryToString$3 = tryToString$5;

var $TypeError$5 = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError$5('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var wellKnownSymbol$a = wellKnownSymbol$h;

var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$5 = isCallable$k;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$9 = wellKnownSymbol$h;

var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
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
var classof$9 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$5(O.callee) ? 'Arguments' : result;
};

var classof$8 = classof$9;

var $String$1 = String;

var toString$7 = function (argument) {
  if (classof$8(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$7;
var createProperty = createProperty$1;

var $Array$2 = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$5(O);
  var k = toAbsoluteIndex$2(start, length);
  var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
  var result = $Array$2(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice$3 = arraySliceSimple;

var floor$4 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$4(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$3(array, 0, middle), comparefn),
    mergeSort(arraySlice$3(array, middle), comparefn),
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

var arraySort = mergeSort;

var fails$g = fails$s;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$g(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$5 = _export;
var uncurryThis$i = functionUncurryThis;
var aCallable$3 = aCallable$6;
var toObject$4 = toObject$8;
var lengthOfArrayLike$4 = lengthOfArrayLike$7;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$6 = toString$7;
var fails$f = fails$s;
var internalSort$1 = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var FF$1 = engineFfVersion;
var IE_OR_EDGE$1 = engineIsIeOrEdge;
var V8$1 = engineV8Version;
var WEBKIT$1 = engineWebkitVersion;

var test = [];
var nativeSort$1 = uncurryThis$i(test.sort);
var push$2 = uncurryThis$i(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$f(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$f(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT$1 = !fails$f(function () {
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

var FORCED$3 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

var getSortCompare$1 = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$6(x) > toString$6(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$5({ target: 'Array', proto: true, forced: FORCED$3 }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$3(comparefn);

    var array = toObject$4(this);

    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$4(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$2(items, array[index]);
    }

    internalSort$1(items, getSortCompare$1(comparefn));

    itemsLength = lengthOfArrayLike$4(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

class ReasonApi extends SDK.Lib.RESTClient {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * list reason using params
   * @param params
   * @returns {Promise<IArrayRestResponse<Reason.IReason>> | error }
   * @memberof ReasonClient
   */
  list(params) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get('/reasons', {
        params
      });
      return response.data;
    });
  }
}

class ValidityApi extends SDK.Lib.RESTClient {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * list reason using params
   * @param params
   * @returns {Promise<IArrayRestResponse<Validity.IValidity>> | error }
   * @memberof ValidityClient
   */
  list(params) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get('/validities', {
        params
      });
      return response.data;
    });
  }
}

class ProductApi extends SDK.Lib.RESTClient {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * Get product by EAN
   * @param params
   * @returns {Promise<Product.IProduct> | error }
   * @memberof ProductClient
   */
  getByEan(ean, store) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.post('/products', {
        ean,
        store
      });
      return response.data;
    });
  }
}

class RequestApi extends SDK.Lib.RESTClient {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * list request using params
   * @param params
   * @returns {Promise<IArrayRestResponse<Request.IRequest>> | error }
   * @memberof RequestClient
   */
  list(params) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get('/requests', {
        params
      });
      return response.data;
    });
  }
  /**
   * create request
   * @param data
   * @returns {Promise<Request.IRequest> | error }
   * @memberof RequestClient
   */
  create(data) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield this.axios.post('/requests', data);
        return response.data;
      } catch (error) {
        throw error;
      }
    });
  }
}

var classofRaw = classofRaw$2;
var uncurryThis$h = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$h(fn);
};

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor$4 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var defineBuiltIn$2 = defineBuiltIn$6;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$2(target, key, src[key], options);
  return target;
};

var isPrototypeOf$2 = objectIsPrototypeOf;

var $TypeError$4 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$4('Incorrect invocation');
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$9;
var toLength$4 = toLength$6;

var $RangeError$4 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$2 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$6(it);
  var length = toLength$4(number);
  if (number !== length) throw $RangeError$4('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$1 = Array;
var abs = Math.abs;
var pow$1 = Math.pow;
var floor$3 = Math.floor;
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
    exponent = floor$3(log$1(number) / LN2);
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

var toObject$3 = toObject$8;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$7;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$3(this);
  var length = lengthOfArrayLike$3(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var global$b = global$n;
var uncurryThis$g = functionUncurryThis;
var DESCRIPTORS$3 = descriptors;
var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$4;
var defineBuiltIns = defineBuiltIns$1;
var fails$e = fails$s;
var anInstance$1 = anInstance$2;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$9;
var toLength$3 = toLength$6;
var toIndex$1 = toIndex$2;
var IEEE754 = ieee754;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arrayFill = arrayFill$1;
var arraySlice$2 = arraySliceSimple;
var setToStringTag = setToStringTag$3;
var InternalStateModule$2 = internalState;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$2.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule$2.getterFor(DATA_VIEW);
var setInternalState$1 = InternalStateModule$2.set;
var NativeArrayBuffer = global$b[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$b[DATA_VIEW];
var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$1 = Object.prototype;
var Array$1 = global$b.Array;
var RangeError$3 = global$b.RangeError;
var fill = uncurryThis$g(arrayFill);
var reverse = uncurryThis$g([].reverse);

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
  defineBuiltInAccessor$3(Constructor[PROTOTYPE], key, {
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
  var pack = arraySlice$2(bytes, start, start + count);
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
    anInstance$1(this, ArrayBufferPrototype$1);
    var byteLength = toIndex$1(length);
    setInternalState$1(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$3) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$1(this, DataViewPrototype$1);
    anInstance$1(buffer, ArrayBufferPrototype$1);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$5(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$3(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
    setInternalState$1(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$3) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$1 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$3) {
    addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter$1($DataView, 'buffer', getInternalDataViewState);
    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype$1, {
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
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails$e(function () {
    NativeArrayBuffer(1);
  }) || !fails$e(function () {
    new NativeArrayBuffer(-1);
  }) || fails$e(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$1(this, ArrayBufferPrototype$1);
      return new NativeArrayBuffer(toIndex$1(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

    for (var keys = getOwnPropertyNames$1(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
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
  var $setInt8 = uncurryThis$g(DataViewPrototype$1.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype$1, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var uncurryThis$f = functionUncurryThis;
var fails$d = fails$s;
var isCallable$4 = isCallable$k;
var classof$7 = classof$9;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$f(constructorRegExp.exec);
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
  switch (classof$7(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$2 = !construct || fails$d(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$1 = isConstructor$2;
var tryToString$2 = tryToString$5;

var $TypeError$3 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw $TypeError$3(tryToString$2(argument) + ' is not a constructor');
};

var anObject$5 = anObject$b;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var wellKnownSymbol$8 = wellKnownSymbol$h;

var SPECIES$3 = wellKnownSymbol$8('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$5(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$2(S = anObject$5(C)[SPECIES$3]) ? defaultConstructor : aConstructor$1(S);
};

var $$4 = _export;
var uncurryThis$e = functionUncurryThisClause;
var fails$c = fails$s;
var ArrayBufferModule$1 = arrayBuffer;
var anObject$4 = anObject$b;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toLength$2 = toLength$6;
var speciesConstructor = speciesConstructor$1;

var ArrayBuffer$3 = ArrayBufferModule$1.ArrayBuffer;
var DataView$2 = ArrayBufferModule$1.DataView;
var DataViewPrototype = DataView$2.prototype;
var nativeArrayBufferSlice = uncurryThis$e(ArrayBuffer$3.prototype.slice);
var getUint8 = uncurryThis$e(DataViewPrototype.getUint8);
var setUint8 = uncurryThis$e(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails$c(function () {
  return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$4({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject$4(this), start); // FF fix
    }
    var length = anObject$4(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer$3))(toLength$2(fin - first));
    var viewSource = new DataView$2(this);
    var viewTarget = new DataView$2(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});

var typedArrayConstructor = {exports: {}};

var wellKnownSymbol$7 = wellKnownSymbol$h;

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

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
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

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$2 = descriptors;
var global$a = global$n;
var isCallable$3 = isCallable$k;
var isObject$4 = isObject$b;
var hasOwn$1 = hasOwnProperty_1;
var classof$6 = classof$9;
var tryToString$1 = tryToString$5;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
var defineBuiltIn$1 = defineBuiltIn$6;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$4;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var wellKnownSymbol$6 = wellKnownSymbol$h;
var uid = uid$3;
var InternalStateModule$1 = internalState;

var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
var Int8Array$4 = global$a.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
var Uint8ClampedArray$1 = global$a.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype = Object.prototype;
var TypeError$1 = global$a.TypeError;

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
  if (!isObject$4(it)) return false;
  var klass = classof$6(it);
  return klass === 'DataView'
    || hasOwn$1(TypedArrayConstructorsList, klass)
    || hasOwn$1(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$4(proto)) return;
  var state = getInternalState$2(proto);
  return (state && hasOwn$1(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$4(it)) return false;
  var klass = classof$6(it);
  return hasOwn$1(TypedArrayConstructorsList, klass)
    || hasOwn$1(BigIntArrayConstructorsList, klass);
};

var aTypedArray$4 = function (it) {
  if (isTypedArray$1(it)) return it;
  throw TypeError$1('Target is not a typed array');
};

var aTypedArrayConstructor$2 = function (C) {
  if (isCallable$3(C) && (!setPrototypeOf$2 || isPrototypeOf$1(TypedArray$1, C))) return C;
  throw TypeError$1(tryToString$1(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$4 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$2) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$a[ARRAY];
    if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$1[KEY] || forced) {
    defineBuiltIn$1(TypedArrayPrototype$1, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$2) return;
  if (setPrototypeOf$2) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$a[ARRAY];
      if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$1(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$a[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$1(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$a[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$a[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$3(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw TypeError$1('Incorrect invocation');
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

if (DESCRIPTORS$2 && !hasOwn$1(TypedArrayPrototype$1, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$2(TypedArrayPrototype$1, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$4(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
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

var global$9 = global$n;
var fails$b = fails$s;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
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

var isObject$3 = isObject$b;

var floor$2 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$3(it) && isFinite(it) && floor$2(it) === it;
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$9;

var $RangeError$3 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$4(it);
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

var uncurryThis$d = functionUncurryThisClause;
var aCallable$2 = aCallable$6;
var NATIVE_BIND$1 = functionBindNative;

var bind$2 = uncurryThis$d(uncurryThis$d.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$2(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$2(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$5 = classof$9;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var Iterators$1 = iterators;
var wellKnownSymbol$5 = wellKnownSymbol$h;

var ITERATOR$2 = wellKnownSymbol$5('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$2)
    || getMethod$1(it, '@@iterator')
    || Iterators$1[classof$5(it)];
};

var call$8 = functionCall;
var aCallable$1 = aCallable$6;
var anObject$3 = anObject$b;
var tryToString = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$2 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$1(iteratorMethod)) return anObject$3(call$8(iteratorMethod, argument));
  throw $TypeError$2(tryToString(argument) + ' is not iterable');
};

var wellKnownSymbol$4 = wellKnownSymbol$h;
var Iterators = iterators;

var ITERATOR$1 = wellKnownSymbol$4('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
};

var classof$4 = classof$9;

var isBigIntArray$1 = function (it) {
  var klass = classof$4(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$1 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$2 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError$1("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$1 = functionBindContext;
var call$7 = functionCall;
var aConstructor = aConstructor$2;
var toObject$2 = toObject$8;
var lengthOfArrayLike$2 = lengthOfArrayLike$7;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var isBigIntArray = isBigIntArray$1;
var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$1 = toBigInt$2;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$2(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$7(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$1(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$2(O);
  result = new (aTypedArrayConstructor$1(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt$1(value) : +value;
  }
  return result;
};

var classof$3 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$3(argument) == 'Array';
};

var isArray = isArray$1;
var isConstructor = isConstructor$2;
var isObject$2 = isObject$b;
var wellKnownSymbol$3 = wellKnownSymbol$h;

var SPECIES$2 = wellKnownSymbol$3('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject$2(C)) {
      C = C[SPECIES$2];
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

var bind = functionBindContext;
var uncurryThis$c = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$1 = toObject$8;
var lengthOfArrayLike$1 = lengthOfArrayLike$7;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push$1 = uncurryThis$c([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike$1(self);
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
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};

var getBuiltIn = getBuiltIn$5;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$4;
var wellKnownSymbol$2 = wellKnownSymbol$h;
var DESCRIPTORS$1 = descriptors;

var SPECIES$1 = wellKnownSymbol$2('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$1]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$1, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isCallable$2 = isCallable$k;
var isObject$1 = isObject$b;
var setPrototypeOf$1 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var $$3 = _export;
var global$8 = global$n;
var call$6 = functionCall;
var DESCRIPTORS = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$4 = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance = anInstance$2;
var createPropertyDescriptor = createPropertyDescriptor$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
var isIntegralNumber = isIntegralNumber$1;
var toLength$1 = toLength$6;
var toIndex = toIndex$2;
var toOffset$1 = toOffset$2;
var toPropertyKey = toPropertyKey$4;
var hasOwn = hasOwnProperty_1;
var classof$2 = classof$9;
var isObject = isObject$b;
var isSymbol = isSymbol$3;
var create$1 = objectCreate;
var isPrototypeOf = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies = setSpecies$1;
var defineBuiltInAccessor = defineBuiltInAccessor$4;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var InternalStateModule = internalState;
var inheritIfRequired = inheritIfRequired$1;

var getInternalState$1 = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
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
  defineBuiltInAccessor(it, key, {
    configurable: true,
    get: function () {
      return getInternalState$1(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$2(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
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
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $$3({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
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
      var data = getInternalState$1(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState$1(that);
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
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
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
            byteLength = toLength$1($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call$6(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
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
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
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
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$3({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
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
var classof$1 = classof$9;
var call$5 = functionCall;
var uncurryThis$b = functionUncurryThis;
var fails$a = fails$s;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var slice = uncurryThis$b(''.slice);

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
  var actualValue = slice(classof$1(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call$5($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var global$7 = global$n;
var call$4 = functionCall;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var lengthOfArrayLike = lengthOfArrayLike$7;
var toOffset = toOffset$2;
var toIndexedObject = toObject$8;
var fails$9 = fails$s;

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
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var global$6 = global$n;
var uncurryThis$a = functionUncurryThisClause;
var fails$8 = fails$s;
var aCallable = aCallable$6;
var internalSort = arraySort;
var ArrayBufferViewCore$1 = arrayBufferViewCore;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var Uint16Array = global$6.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$a(Uint16Array.prototype.sort);

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
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray$1(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$3 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$2) : function () {
  return call$3.apply(apply$2, arguments);
});

var uncurryThis$9 = functionUncurryThis;

var arraySlice$1 = uncurryThis$9([].slice);

var global$5 = global$n;
var apply$1 = functionApply;
var ArrayBufferViewCore = arrayBufferViewCore;
var fails$7 = fails$s;
var arraySlice = arraySlice$1;

var Int8Array$1 = global$5.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$7(function () {
  $toLocaleString.call(new Int8Array$1(1));
});

var FORCED$2 = fails$7(function () {
  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
}) || !fails$7(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply$1(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED$2);

class FilesApi extends SDK.Lib.RESTClient {
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
  delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        yield this.axios.delete(`/load-files/${id}`);
      } catch (error) {
        throw error;
      }
    });
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

class TaskApi extends SDK.Lib.RESTClient {
  constructor(config) {
    super({
      baseURL: config.baseURL
    });
  }
  /**
   * Save task
   * @param ITask
   * @returns {Promise<Task.ITask> | error }
   * @memberof TaskApi
   */
  save(task) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.axios.post(`tasks-v2/tasks`, task);
    });
  }
  list(filter, keyTab, limit, offset, sort) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get('/task', {
        params: {
          filter,
          keyTab,
          limit,
          offset,
          sort
        }
      });
      return response.data;
    });
  }
}

z.object({
  productName: z.string().nonempty(),
  section: z.string().nonempty(),
  urlImage: z.string().nonempty(),
  ean: z.string().nonempty(),
  sku: z.string().nonempty(),
  stockDays: z.number(),
  priceType: z.string().nonempty(),
  previousPrice: z.number(),
  stockNRT: z.number(),
  costoCppIva: z.number()
});

z.object({
  label: z.string().nonempty(),
  value: z.string().nonempty()
});

var Unit;
(function (Unit) {
  Unit["HOURS"] = "hours";
  Unit["DAYS"] = "days";
  Unit["MONTHS"] = "months";
})(Unit || (Unit = {}));
({
  [Unit.HOURS]: 60 * 60 * 1000,
  [Unit.DAYS]: 24 * 60 * 60 * 1000,
  [Unit.MONTHS]: 30 * 24 * 60 * 60 * 1000
});
z.object({
  label: z.string().nonempty(),
  value: z.string().nonempty(),
  unit: z.nativeEnum(Unit)
});

var BusinessUnit;
(function (BusinessUnit) {
  BusinessUnit["MDH"] = "MDH";
  BusinessUnit["SM"] = "SM";
  BusinessUnit["TxD"] = "TxD";
})(BusinessUnit || (BusinessUnit = {}));
//País	ISO 3166-1
var Country$1;
(function (Country) {
  Country["CL"] = "CL";
  Country["CO"] = "CO";
  Country["AR"] = "AR";
  Country["PE"] = "PE";
  Country["BR"] = "BR";
})(Country$1 || (Country$1 = {}));
var Status;
(function (Status) {
  Status["PENDING"] = "PENDING";
  Status["APPROVED"] = "APPROVED";
  Status["REJECTED"] = "REJECTED";
})(Status || (Status = {}));
z.object({
  taskID: z.string().nonempty(),
  caseNumber: z.string().optional(),
  productName: z.string().nonempty(),
  section: z.string(),
  urlImage: z.string().nonempty(),
  ean: z.string().nonempty(),
  sku: z.string().nonempty(),
  stockDays: z.number().optional(),
  priceType: z.string().optional(),
  previousPrice: z.number().positive(),
  stockNRT: z.number().int().optional(),
  costoCppIva: z.number(),
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']).default('PENDING'),
  country: z.nativeEnum(Country$1),
  businessUnit: z.nativeEnum(BusinessUnit),
  flag: z.string().nonempty(),
  store: z.string().nonempty(),
  reason: z.object({
    label: z.string().nonempty(),
    value: z.string().nonempty()
  }),
  suggestedPrice: z.number().positive(),
  suggestedPriceValidity: z.object({
    label: z.string().nonempty(),
    value: z.string().nonempty(),
    unit: z.nativeEnum(Unit)
  }),
  comment: z.string().optional(),
  expirationDate: z.date().optional(),
  files: z.array(z.object({
    name: z.string().nonempty(),
    url: z.string().nonempty(),
    urlThumbnail: z.string().optional()
  })).optional(),
  createdBy: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    userID: z.string().optional(),
    role: z.string().optional()
  }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});
z.object({
  finalPrice: z.number().positive(),
  finalPriceValidity: z.object({
    label: z.string().nonempty(),
    value: z.number().int().positive(),
    unit: z.nativeEnum(Unit)
  }),
  respondBy: z.object({
    name: z.string().nonempty().optional(),
    email: z.string().nonempty().optional(),
    userID: z.string().nonempty().optional(),
    role: z.string().nonempty().optional()
  }),
  respondDate: z.date().optional(),
  validityDate: z.date().optional()
});
z.object({
  comment: z.string(),
  respondBy: z.object({
    name: z.string().nonempty().optional(),
    email: z.string().nonempty().optional(),
    userID: z.string().nonempty().optional(),
    role: z.string().nonempty().optional()
  }),
  respondDate: z.date().optional()
});
z.object({
  finalPrice: z.number().positive().optional(),
  finalPriceValidity: z.object({
    label: z.string().optional(),
    value: z.number().int().positive(),
    unit: z.nativeEnum(Unit)
  }).optional(),
  comment: z.string().optional(),
  respondBy: z.object({
    name: z.string().nonempty().optional(),
    email: z.string().nonempty().optional(),
    userID: z.string().nonempty().optional(),
    role: z.string().nonempty().optional()
  }),
  status: z.enum([Status.APPROVED, Status.REJECTED]),
  respondDate: z.string(),
  validDate: z.string().optional()
});

z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  contentType: z.string().nonempty(),
  url: z.string().nonempty(),
  href: z.string().nonempty()
});

//País	ISO 3166-1
var Country;
(function (Country) {
  Country["CL"] = "CL";
  Country["CO"] = "CO";
  Country["AR"] = "AR";
  Country["PE"] = "PE";
  Country["BR"] = "BR";
})(Country || (Country = {}));

var anObject$2 = anObject$b;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$2(this);
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

var fails$6 = fails$s;
var global$4 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$4.RegExp;

var UNSUPPORTED_Y$1 = fails$6(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$6(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$6(function () {
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

var fails$5 = fails$s;
var global$3 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$3.RegExp;

var regexpUnsupportedDotAll = fails$5(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$4 = fails$s;
var global$2 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$2.RegExp;

var regexpUnsupportedNcg = fails$4(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$2 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var toString$5 = toString$7;
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
var charAt$4 = uncurryThis$8(''.charAt);
var indexOf = uncurryThis$8(''.indexOf);
var replace$2 = uncurryThis$8(''.replace);
var stringSlice$4 = uncurryThis$8(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$2(nativeExec, re1, 'a');
  call$2(nativeExec, re2, 'a');
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
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$2(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$2(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
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

    match = call$2(nativeExec, sticky ? reCopy : re, strCopy);

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
      call$2(nativeReplace, match[0], reCopy, function () {
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
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$7 = functionUncurryThisClause;
var defineBuiltIn = defineBuiltIn$6;
var regexpExec$1 = regexpExec$2;
var fails$3 = fails$s;
var wellKnownSymbol$1 = wellKnownSymbol$h;
var createNonEnumerableProperty = createNonEnumerableProperty$8;

var SPECIES = wellKnownSymbol$1('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$3(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$3(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
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

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$6 = functionUncurryThis;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$9;
var toString$4 = toString$7;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$3 = uncurryThis$6(''.charAt);
var charCodeAt = uncurryThis$6(''.charCodeAt);
var stringSlice$3 = uncurryThis$6(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$3($this));
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
          ? stringSlice$3(S, position, position + 2)
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
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var uncurryThis$5 = functionUncurryThis;
var toObject = toObject$8;

var floor$1 = Math.floor;
var charAt$1 = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);
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
  return replace$1(replacement, symbols, function (match, ch) {
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

var call$1 = functionCall;
var anObject$1 = anObject$b;
var isCallable$1 = isCallable$k;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$2 = fails$s;
var anObject = anObject$b;
var isCallable = isCallable$k;
var isNullOrUndefined = isNullOrUndefined$5;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$9;
var toLength = toLength$6;
var toString$3 = toString$7;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$1;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$h;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$4([].concat);
var push = uncurryThis$4([].push);
var stringIndexOf = uncurryThis$4(''.indexOf);
var stringSlice$1 = uncurryThis$4(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$2(function () {
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
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString$3(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString$3(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$3(replaceValue);

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

        var matchStr = toString$3(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$3(result[0]);
        var position = max(min(toIntegerOrInfinity$2(result.index), S.length), 0);
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
          var replacement = toString$3(apply(replaceValue, undefined, replacerArgs));
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

class TextFormat {
  static toCamelCase(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }
  static capitalizeWords(word) {
    return word.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }
}

class DateFormat {
  static formatDateDetail(isoDate, lng = 'es') {
    const date = new Date(isoDate);
    const day = TextFormat.toCamelCase(date.toLocaleDateString('es', {
      weekday: 'short'
    }));
    const month = date.toLocaleDateString(lng, {
      month: 'short'
    });
    return `${day} ${date.getDate()} ${month}. ${date.getFullYear()}`;
  }
  static formatDataTable(isoDate, lng = 'es') {
    const date = new Date(isoDate);
    const month = date.toLocaleDateString(lng, {
      month: 'short'
    });
    return `${date.getDate()} ${month}, ${date.getFullYear()}`;
  }
}

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$3 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var toString$2 = toString$7;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$3(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$2(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
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

var global$1 = global$n;
var fails$1 = fails$s;
var uncurryThis$2 = functionUncurryThis;
var toString$1 = toString$7;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var charAt = uncurryThis$2(''.charAt);
var $parseFloat$1 = global$1.parseFloat;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var FORCED$1 = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails$1(function () { $parseFloat$1(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED$1 ? function parseFloat(string) {
  var trimmedString = trim(toString$1(string));
  var result = $parseFloat$1(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat$1;

var $$1 = _export;
var $parseFloat = numberParseFloat;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$$1({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});

var uncurryThis$1 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$1(1.0.valueOf);

var toIntegerOrInfinity$1 = toIntegerOrInfinity$9;
var toString = toString$7;
var requireObjectCoercible = requireObjectCoercible$6;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $ = _export;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$9;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$s;

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
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
var validityClient = (() => new ValidityApi({
  baseURL: config.getValue('BACKEND_BASE_URL')
}));

class StatusHelper {
  static statusToType(status) {
    switch (status) {
      case Status.PENDING:
        return 'info';
      case Status.APPROVED:
        return 'success';
      case Status.REJECTED:
        return 'error';
      default:
        return 'neutral';
    }
  }
}

const DetailRequestsPage = props => {
  const [validities, setValidities] = useState([]);
  const [suggestedPrice, setSuggestedPrice] = useState(0);
  const [margen, setMargen] = useState(0);
  const [margenPorcentaje, setMargenPorcentaje] = useState(0);
  const {
    t
  } = useTranslation();
  const {
    taskData
  } = props;
  const requestData = taskData === null || taskData === void 0 ? void 0 : taskData.meta_data;
  const getValidities = () => __awaiter(void 0, void 0, void 0, function* () {
    const validities = yield validityClient().list({});
    if (!validities) {
      throw new Error('not found validities');
    }
    return validities;
  });
  useEffect(() => {
    //if costoCppIva is null, set costoCppIva = 0
    if (!requestData.costoCppIva) {
      requestData.costoCppIva = 0;
    }
    getValidities().then(data => {
      setValidities(data);
    });
    setSuggestedPrice(requestData.suggestedPrice);
    setMargen(requestData.suggestedPrice - requestData.costoCppIva);
    setMargenPorcentaje((requestData.suggestedPrice - requestData.costoCppIva) / requestData.costoCppIva * 100);
  }, [props.openDetail]);
  const handleChangeSuggestedPrice = e => {
    let price = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
    if (isNaN(price)) {
      price = 0;
    }
    setSuggestedPrice(price);
    setMargen(price - requestData.costoCppIva);
    setMargenPorcentaje((price - requestData.costoCppIva) / requestData.costoCppIva * 100);
  };
  return jsx(Ramen.XDrawer, Object.assign({
    headerType: "fixed",
    size: "xl",
    open: props.openDetail,
    closable: true,
    onClose: () => props.setOpenDetail(false)
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      padding: "s",
      width: 'full',
      height: 'full'
    }, {
      children: [jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xl",
        width: "full"
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          width: "flex"
        }, {
          children: jsx(Ramen.XBox, {
            children: jsx(Ramen.XText, Object.assign({
              fontSize: 9,
              weight: "bold"
            }, {
              children: "Estado de la solicitud"
            }))
          })
        })), jsx(Ramen.XBox, Object.assign({
          width: "flex",
          horizontalAlign: 'end'
        }, {
          children: jsx(Ramen.XBox, {
            children: jsx(Ramen.XTagState, {
              size: 's',
              type: 'solid',
              /*
                text={status.find((item) => item[requestData.status])?.[requestData.status]?.label as string || ''}
                state={(status.find((item) => item[requestData.status])?.[requestData.status]?.type as any) || 'info'}
              */
              text: t(`status.${requestData.status}`),
              state: StatusHelper.statusToType(requestData.status)
            })
          })
        }))]
      })), jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xs",
        padding: "s"
      }, {
        children: jsx(Ramen.XBox, Object.assign({
          width: "flex"
        }, {
          children: jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "solid"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: 'bold',
                colorThone: 'darkest',
                fontSize: 11
              }, {
                children: "Solicitado por"
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "s",
                padding: "s"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: "flex"
                }, {
                  children: jsx(Ramen.XCard, Object.assign({
                    size: "l",
                    borderType: "solid"
                  }, {
                    children: jsxs(Ramen.XBox, Object.assign({
                      orientation: "horizontal"
                    }, {
                      children: [jsx(Ramen.XBox, Object.assign({
                        gap: "xs",
                        padding: "xs"
                      }, {
                        children: jsx(Ramen.XCard, Object.assign({
                          size: "s",
                          borderType: "solid"
                        }, {
                          children: jsx(Ramen.XIcon, {
                            icon: "user-outline",
                            size: "l"
                          })
                        }))
                      })), jsxs(Ramen.XBox, Object.assign({
                        gap: "xs",
                        padding: "xxs"
                      }, {
                        children: [jsx(Ramen.XText, Object.assign({
                          weight: "lighter",
                          fontSize: 12
                        }, {
                          children: requestData.createdBy.role
                        })), jsx(Ramen.XText, Object.assign({
                          weight: "bold",
                          fontSize: 9,
                          textOverflow: 'break-word'
                        }, {
                          children: requestData.createdBy.name
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal",
                          horizontalAlign: "start"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: 'normal',
                            colorThone: 'dim',
                            fontSize: 11
                          }, {
                            children: "D\u00EDa de solicitud:\u00A0"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 11,
                            colorThone: 'medium'
                          }, {
                            children: new Date(requestData.createdAt).toLocaleDateString('es-ES')
                          }))]
                        }))]
                      }))]
                    }))
                  }))
                })), jsxs(Ramen.XBox, Object.assign({
                  width: "flex"
                }, {
                  children: [jsx(Ramen.XBox, Object.assign({
                    width: "flex"
                  }, {
                    children: jsxs(Ramen.XCard, Object.assign({
                      size: "l",
                      borderType: "solid"
                    }, {
                      children: [jsx(Ramen.XBox, Object.assign({
                        width: "flex",
                        padding: "xxs"
                      }, {
                        children: jsx(Ramen.XText, Object.assign({
                          weight: "lighter",
                          fontSize: 10
                        }, {
                          children: "Secci\u00F3n\u00A0"
                        }))
                      })), jsx(Ramen.XBox, Object.assign({
                        width: "flex"
                      }, {
                        children: jsx(Ramen.XText, Object.assign({
                          weight: "bold",
                          fontSize: 10,
                          textAlign: "right"
                        }, {
                          children: requestData.section
                        }))
                      }))]
                    }))
                  })), jsx(Ramen.XVSpace, {
                    size: "s"
                  }), jsx(Ramen.XBox, Object.assign({
                    width: "flex"
                  }, {
                    children: jsxs(Ramen.XCard, Object.assign({
                      size: "l",
                      borderType: "solid"
                    }, {
                      children: [jsx(Ramen.XBox, Object.assign({
                        width: "flex",
                        padding: "xxs"
                      }, {
                        children: jsx(Ramen.XText, Object.assign({
                          weight: "lighter",
                          fontSize: 10
                        }, {
                          children: "Tienda\u00A0"
                        }))
                      })), jsx(Ramen.XBox, Object.assign({
                        width: "flex"
                      }, {
                        children: jsxs(Ramen.XText, Object.assign({
                          weight: "bold",
                          fontSize: 10,
                          textAlign: "right"
                        }, {
                          children: [requestData.store, " - ", requestData.storeName]
                        }))
                      }))]
                    }))
                  }))]
                }))]
              }))]
            }))
          }))
        }))
      })), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xs",
        padding: "s",
        width: 'full'
      }, {
        children: [jsx(Ramen.XBox, Object.assign({
          width: 'flex'
        }, {
          children: jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "solid"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: 'full',
                padding: "s"
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  weight: 'bold',
                  colorThone: 'darkest',
                  fontSize: 11
                }, {
                  children: "Actual"
                }))
              })), jsx(Ramen.XCard, Object.assign({
                size: "l",
                borderType: "solid"
              }, {
                children: jsxs(Ramen.XBox, Object.assign({
                  width: 'full'
                }, {
                  children: [jsxs(Ramen.XBox, Object.assign({
                    orientation: "horizontal",
                    verticalAlign: "center",
                    gap: "s"
                  }, {
                    children: [jsx(Ramen.XImage, {
                      src: requestData.urlImage,
                      width: 2,
                      border: "solid",
                      rounded: "s"
                    }), jsxs(Ramen.XBox, Object.assign({
                      gap: "xs",
                      width: "flex"
                    }, {
                      children: [jsx(Ramen.XText, Object.assign({
                        weight: "bold",
                        fontSize: 9
                      }, {
                        children: requestData.productName
                      })), jsxs(Ramen.XBox, Object.assign({
                        gap: "xxs"
                      }, {
                        children: [jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            fontSize: 11,
                            weight: 'normal',
                            colorThone: 'dim'
                          }, {
                            children: "EAN\u00A0"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 11,
                            colorThone: 'medium'
                          }, {
                            children: requestData.ean
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: 'normal',
                            colorThone: 'dim',
                            fontSize: 11
                          }, {
                            children: "SKU\u00A0"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 11,
                            colorThone: 'medium'
                          }, {
                            children: requestData.sku
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: 'normal',
                            colorThone: 'dim',
                            fontSize: 11
                          }, {
                            children: "D\u00EDas de stock\u00A0"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 11,
                            colorThone: 'medium'
                          }, {
                            children: requestData.stockDays
                          }))]
                        })), jsxs(Ramen.XBox, Object.assign({
                          orientation: "horizontal"
                        }, {
                          children: [jsx(Ramen.XText, Object.assign({
                            weight: 'normal',
                            colorThone: 'dim',
                            fontSize: 11
                          }, {
                            children: "Tipo de precio\u00A0"
                          })), jsx(Ramen.XText, Object.assign({
                            weight: "bold",
                            fontSize: 11,
                            colorThone: 'medium'
                          }, {
                            children: requestData.priceType
                          }))]
                        }))]
                      }))]
                    }))]
                  })), jsx(Ramen.XVSpace, {
                    size: "m"
                  }), jsxs(Ramen.XBox, Object.assign({
                    gap: "xs"
                  }, {
                    children: [jsxs(Ramen.XBox, Object.assign({
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
                              weight: 'normal',
                              colorThone: 'medium',
                              fontSize: 11
                            }, {
                              children: "Precio anterior"
                            })), jsx(Ramen.XText, Object.assign({
                              weight: "bold",
                              fontSize: 10,
                              lineHeight: "copy"
                            }, {
                              children: requestData.previousPrice
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
                              weight: 'normal',
                              colorThone: 'medium',
                              fontSize: 11
                            }, {
                              children: "Costo CPP + IVA"
                            })), jsx(Ramen.XText, Object.assign({
                              weight: "bold",
                              fontSize: 10,
                              lineHeight: "copy"
                            }, {
                              children: requestData.costoCppIva
                            }))]
                          })
                        }))
                      }))]
                    })), jsxs(Ramen.XBox, Object.assign({
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
                              weight: 'normal',
                              colorThone: 'medium',
                              fontSize: 11
                            }, {
                              children: "Margen $"
                            })), jsx(Ramen.XText, Object.assign({
                              weight: "bold",
                              fontSize: 10,
                              lineHeight: "copy"
                            }, {
                              children: requestData.previousPrice - requestData.costoCppIva
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
                              weight: 'normal',
                              colorThone: 'medium',
                              fontSize: 11
                            }, {
                              children: "Margen %"
                            })), jsxs(Ramen.XText, Object.assign({
                              weight: "bold",
                              fontSize: 10,
                              lineHeight: "copy"
                            }, {
                              children: [((requestData.previousPrice - requestData.costoCppIva) / requestData.costoCppIva * 100).toFixed(2), ' ', "%"]
                            }))]
                          })
                        }))
                      }))]
                    }))]
                  }))]
                }))
              }))]
            }))
          }))
        })), jsx(Ramen.XBox, Object.assign({
          width: 'flex'
        }, {
          children: jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "solid"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full'
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                weight: 'bold',
                colorThone: 'darkest',
                fontSize: 11
              }, {
                children: "Sugerido del local"
              })), jsx(Ramen.XDivider, {}), jsxs(Ramen.XBox, Object.assign({
                gap: "l",
                padding: "s"
              }, {
                children: [jsx(Ramen.XFormItem, Object.assign({
                  label: "Vigencia de Precio"
                }, {
                  children: jsx(Ramen.XSelect, {
                    icon: "clock-outline",
                    placeholder: "24 horas",
                    options: validities,
                    value: requestData.suggestedPriceValidity.value,
                    onChange: () => {},
                    disabled: requestData.status !== 'PENDING'
                  })
                })), jsx(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  gap: "xs",
                  padding: "s"
                }, {
                  children: jsx(Ramen.XFormItem, Object.assign({
                    label: "Precio Suguerido"
                  }, {
                    children: jsx(Ramen.XTextInput, {
                      placeholder: "Ingrese el precio",
                      value: suggestedPrice,
                      size: "l",
                      onChange: event => handleChangeSuggestedPrice(event),
                      disabled: requestData.status !== 'PENDING'
                    })
                  }))
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                gap: "xs",
                padding: "s"
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
                        weight: 'normal',
                        colorThone: 'medium',
                        fontSize: 11
                      }, {
                        children: "Margen $"
                      })), jsx(Ramen.XText, Object.assign({
                        weight: "bold",
                        fontSize: 10,
                        lineHeight: "copy"
                      }, {
                        children: margen
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
                        weight: 'normal',
                        colorThone: 'medium',
                        fontSize: 11
                      }, {
                        children: "Margen %"
                      })), jsxs(Ramen.XText, Object.assign({
                        weight: "bold",
                        fontSize: 10,
                        lineHeight: "copy"
                      }, {
                        children: [margenPorcentaje.toFixed(2), " %"]
                      }))]
                    })
                  }))
                }))]
              }))]
            }))
          }))
        }))]
      })), jsx(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xs",
        padding: "s",
        width: 'full'
      }, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: 'flex'
        }, {
          children: [requestData.comment && jsxs(Fragment, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: 'bold',
              colorThone: 'darkest',
              fontSize: 10
            }, {
              children: "Comentario"
            })), jsx(Ramen.XVSpace, {
              size: "s"
            }), jsx(Ramen.XText, Object.assign({
              weight: 'normal',
              colorThone: 'medium',
              fontSize: 10
            }, {
              children: requestData.comment
            })), jsx(Ramen.XVSpace, {
              size: "s"
            })]
          }), jsx(Ramen.XText, Object.assign({
            weight: 'bold',
            colorThone: 'darkest',
            fontSize: 10
          }, {
            children: "Adjuntos"
          })), jsx(Ramen.XBox, Object.assign({
            orientation: "horizontal",
            gap: "xs",
            padding: "s"
          }, {
            children: requestData.files.map((item, index) => jsx(Ramen.XButton, {
              size: "s",
              text: item.name,
              icon: "download-outline",
              onClick: () => {
                window.open(item.href, '_blank');
              }
            }))
          }))]
        }))
      })), requestData.status === 'PENDING' && jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        gap: "xs",
        padding: "s",
        width: 'full'
      }, {
        children: [jsx(Ramen.XBox, {
          width: 'flex'
        }), jsxs(Ramen.XBox, Object.assign({
          width: 'flex',
          orientation: "horizontal",
          padding: "s",
          horizontalAlign: 'end'
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            padding: "xs"
          }, {
            children: jsx(Ramen.XButton, {
              icon: "x-bold",
              text: "Rechazar",
              size: "l",
              type: "default"
            })
          })), jsx(Ramen.XBox, Object.assign({
            padding: "xs"
          }, {
            children: jsx(Ramen.XButton, {
              icon: "check-bold",
              text: "Validar",
              size: "l",
              type: "solid"
            })
          }))]
        }))]
      }))]
    }))
  }));
};

const HomePage = () => {
  const context = useContext();
  const {
    t
  } = useTranslation();
  const defaultValue = {
    value: '',
    label: t('select')
  };
  const [result, setResult] = useState();
  const [flags, setFlags] = useState([]);
  const [stores, setStores] = useState([]);
  const [sections, setSections] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [flag, setFlag] = useState('');
  const [store, setStore] = useState('');
  const [reason, setReason] = useState('');
  const [section, setSection] = useState('');
  const [keytab, setKeytab] = useState('in_progress');
  const [changedTable, setChangedTable] = useState(0);
  const [openDetailTask, setOpenDetailTask] = useState(false);
  const [detailTask, setDetailTask] = useState();
  const [filter, setFilter] = useState({});
  const [sorter, setSorter] = useState({
    field: 'meta_data.createdAt',
    order: 'descend'
  });
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 5,
    total: 0
  });
  const [backSorter, setBackSorter] = useState({
    [sorter.field]: sorter.order === 'descend' ? -1 : 1
  });
  const onChangeTable = (sorter, pagination) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('onChangeTable', pagination, sorter);
    setPagination(pagination);
    setSorter(sorter);
    setBackSorter({
      [sorter.field]: sorter.order === 'descend' ? -1 : 1
    });
    setChangedTable(changedTable + 1);
  });
  const onSearch = e => __awaiter(void 0, void 0, void 0, function* () {
    const newFilter = Object.assign({}, filter);
    const text = e.target.value;
    if (text) {
      newFilter.productName = text;
    } else {
      delete newFilter.productName;
    }
    setFilter(newFilter);
  });
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield context.clients.taskClient.list(filter, pagination.limit, pagination.offset, backSorter);
    setResult(response);
  });
  const getFlags = () => __awaiter(void 0, void 0, void 0, function* () {
    const flags = yield context.clients.flagClient.listOptions();
    if (flags.length) flags.unshift(defaultValue);
    flags.forEach(flag => {
      if (flag.value === '') return;
      flag.label = `${TextFormat.capitalizeWords(flag.label)}`;
    });
    flags.sort((a, b) => {
      if (a.value === '' && b.value !== '') {
        return -1;
      }
      if (a.value !== '' && b.value === '') {
        return 1;
      }
      return a.label.localeCompare(b.label);
    });
    setFlags(flags);
  });
  const getStores = () => __awaiter(void 0, void 0, void 0, function* () {
    const stores = yield context.clients.storeClient.listOptions(flag);
    if (stores.length) stores.unshift(defaultValue);
    stores.forEach(store => {
      if (store.value === '') return;
      store.label = `${store.value} - ${TextFormat.capitalizeWords(store.label)}`;
    });
    setStores(stores);
  });
  const getSections = () => __awaiter(void 0, void 0, void 0, function* () {
    const sections = yield context.clients.sectionClient.listOptions();
    if (sections.length) sections.unshift(defaultValue);
    sections.forEach(section => {
      if (section.value === '') return;
      section.label = `${TextFormat.toCamelCase(section.label)}`;
    });
    sections.sort((a, b) => {
      if (a.value === '' && b.value !== '') {
        return -1;
      }
      if (a.value !== '' && b.value === '') {
        return 1;
      }
      return a.label.localeCompare(b.label);
    });
    setSections(sections);
  });
  const getReasons = () => __awaiter(void 0, void 0, void 0, function* () {
    const reasons = yield context.clients.reasonClient.listOptions();
    if (reasons.length) reasons.unshift(defaultValue);
    reasons.forEach(reason => {
      if (reason.value === '') return;
      reason.label = `${TextFormat.toCamelCase(reason.label)}`;
    });
    reasons.sort((a, b) => {
      if (a.value === '' && b.value !== '') {
        return -1;
      }
      if (a.value !== '' && b.value === '') {
        return 1;
      }
      return a.label.localeCompare(b.label);
    });
    setReasons(reasons);
  });
  const calcFilters = () => {
    const filter = {
      status: Status.PENDING
    };
    if (keytab !== 'in_progress') {
      filter.status = {
        $in: [Status.APPROVED, Status.REJECTED]
      };
    }
    if (flag) {
      filter.flag = flag;
    }
    if (store) {
      filter.store = store;
    }
    if (section) {
      filter.section = section;
    }
    if (reason) {
      filter['reason.value'] = reason;
    }
    setFilter(filter);
  };
  useEffect(() => {
    if (changedTable !== 0) getData();
  }, [filter, changedTable]);
  useEffect(() => {
    setStore('');
    getStores();
  }, [flag]);
  useEffect(() => {
    getFlags();
    getReasons();
    getSections();
  }, []);
  useEffect(() => {
    calcFilters();
  }, [keytab, store, section, reason]);
  useEffect(() => {
    if (flag && !store || !(flag && store)) calcFilters();
  }, [flag]);
  return jsx(Ramen.XBox, Object.assign({
    padding: "xl",
    width: 'full',
    overflow: 'auto'
  }, {
    children: jsxs(Ramen.XBox, Object.assign({
      orientation: 'vertical'
    }, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 7,
        weight: "bold"
      }, {
        children: t('module_title')
      })), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        lineHeight: 'title',
        colorThone: 'dim'
      }, {
        children: t('module_subtitle')
      })), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsx(Ramen.XTabs, {
        onTabChange: key => setKeytab(key),
        defaultKey: keytab,
        onActionClick: () => getData(),
        tabs: [{
          key: 'in_progress',
          label: t('in_progress')
        }, {
          key: 'finalized',
          label: t('finalized')
        }],
        actions: [{
          key: 'add-rol',
          icon: 'refresh-ccw-outline'
        }]
      }), jsx(Ramen.XVSpace, {
        size: 'xl'
      }), jsxs(Ramen.XTabContent, {
        children: [jsxs(Ramen.XBox, Object.assign({
          orientation: 'horizontal'
        }, {
          children: [jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, {
              children: t('flag')
            }), jsx(Ramen.XVSpace, {
              size: 'xs'
            }), jsx(Ramen.XSelect, {
              icon: 'globe-outline',
              placeholder: t('select'),
              options: flags,
              onChange: value => setFlag(value)
            })]
          }), jsx(Ramen.XBox, {
            width: 9
          }), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, {
              children: t('store')
            }), jsx(Ramen.XVSpace, {
              size: 'xs'
            }), jsx(Ramen.XSelect, {
              icon: 'store-outline',
              placeholder: t('select'),
              options: stores,
              onChange: value => setStore(value)
            })]
          }), jsx(Ramen.XBox, {
            width: 9
          }), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, {
              children: t('section')
            }), jsx(Ramen.XVSpace, {
              size: 'xs'
            }), jsx(Ramen.XSelect, {
              icon: 'flag-outline',
              placeholder: t('select'),
              options: sections,
              onChange: value => setSection(value)
            })]
          }), jsx(Ramen.XBox, {
            width: 9
          }), jsxs(Ramen.XBox, {
            children: [jsx(Ramen.XText, {
              children: t('price_drop_reason')
            }), jsx(Ramen.XVSpace, {
              size: 'xs'
            }), jsx(Ramen.XSelect, {
              icon: 'arrow-down-outline',
              placeholder: t('select'),
              options: reasons,
              onChange: value => setReason(value)
            })]
          })]
        })), jsx(Ramen.XVSpace, {
          size: 'xl'
        }), jsxs(Ramen.XTabPanel, Object.assign({
          tabKey: "in_progress"
        }, {
          children: [jsx(Ramen.XTable, {
            extraHeader: {
              component: 'search',
              size: 'l',
              placeholder: t('searcher'),
              onChange: onSearch
            },
            columns: [{
              title: t('home_page.columns.reason'),
              dataIndex: 'meta_data.reason.label',
              key: 'reason.label',
              sorter: true
            }, {
              title: t('home_page.columns.section'),
              dataIndex: 'meta_data.section',
              key: 'section',
              sorter: true,
              render: value => jsx(Ramen.XText, Object.assign({
                fontSize: 11
              }, {
                children: TextFormat.toCamelCase(value)
              }))
            }, {
              title: t('home_page.columns.store'),
              dataIndex: 'meta_data.store',
              key: 'store',
              sorter: true,
              render: (value, record) => {
                const request = record;
                return jsx(Ramen.XText, Object.assign({
                  fontSize: 11
                }, {
                  children: `${value} ${request.meta_data.storeName ? '- ' + TextFormat.capitalizeWords(request.meta_data.storeName) : ''}`
                }));
              }
            }, {
              title: t('home_page.columns.productName'),
              dataIndex: 'meta_data.productName',
              key: 'productName',
              sorter: true
            }, {
              title: t('home_page.columns.createdAt'),
              dataIndex: 'meta_data.createdAt',
              key: 'createdAt',
              sorter: true,
              render: value => jsx(Ramen.XText, Object.assign({
                fontSize: 11
              }, {
                children: DateFormat.formatDataTable(value)
              }))
            }, {
              title: t('home_page.columns.status'),
              key: 'status',
              render: (_, record) => {
                const task = record;
                return jsx("div", Object.assign({
                  style: {
                    cursor: 'pointer'
                  },
                  onClick: () => {
                    setDetailTask(task);
                    setOpenDetailTask(true);
                  }
                }, {
                  children: jsx(Ramen.XTagState, {
                    size: 'l',
                    type: 'solid',
                    text: t(`status.${task.meta_data.status}`),
                    state: StatusHelper.statusToType(task.meta_data.status)
                  })
                }));
              }
            }],
            sorter: sorter,
            pagination: pagination,
            dataSource: result === null || result === void 0 ? void 0 : result.data,
            onChange: onChangeTable
          }), jsx(Ramen.XBox, Object.assign({
            horizontalAlign: "center",
            verticalAlign: "center",
            padding: "xl"
          }, {
            children: jsx(Ramen.XText, {
              children: t('made_in')
            })
          }))]
        })), detailTask && jsx(DetailRequestsPage, {
          openDetail: openDetailTask,
          taskData: detailTask,
          setOpenDetail: setOpenDetailTask
        })]
      })]
    }))
  }));
};

var Styles = {"wrapper":"index-module_wrapper__f2sVb","spacer":"index-module_spacer__rFQyd","text":"index-module_text__zRP1R","wrapper__icon":"index-module_wrapper__icon__MOUU0"};

var img = "data:image/png;base64,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";

function CardTool(props) {
  const history = useHistory();
  const title = props.title || 'Baja de precios';
  const subTitle = props.subTitle || 'Envia tareas directamente con los locales mediante la App Mi Local.';
  const onClick = () => {
    console.log('Go to the URL', props.pathModule);
    history.push(props.pathModule);
  };
  return jsx("div", Object.assign({
    className: Styles.wrapper,
    onClick: () => onClick()
  }, {
    children: jsx(Ramen.XCard, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: 'horizontal',
        width: 'full',
        height: 'full'
      }, {
        children: [jsx(Ramen.XImage, {
          src: img,
          rounded: 'm'
        }), jsx("div", {
          className: Styles.spacer
        }), jsx("div", Object.assign({
          className: Styles.text
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            gap: 's'
          }, {
            children: [jsx(Ramen.XText, Object.assign({
              weight: "bold",
              fontSize: 8
            }, {
              children: title
            })), jsx(Ramen.XText, Object.assign({
              colorThone: 'medium',
              lineHeight: 'title'
            }, {
              children: subTitle
            }))]
          }))
        })), jsx("div", {
          className: Styles.spacer
        }), jsx("div", Object.assign({
          className: Styles.wrapper__icon
        }, {
          children: jsx(Ramen.XBox, Object.assign({
            orientation: 'vertical',
            verticalAlign: 'center',
            height: 'full'
          }, {
            children: jsx(Ramen.XIcon, {
              icon: "chevron-right-extrabold",
              size: 's'
            })
          }))
        }))]
      }))
    })
  }));
}

const createSocket = (country, URL) => io(URL || config.getValue('BACKEND_BASE_URL'), {
  extraHeaders: {
    Country: country
  }
});
// export const socket = io(config.getValue('BACKEND_BASE_URL'), {
//   transports: ['websocket', 'polling'], // use WebSocket first, if available
// });

const Flow = props => {
  const {
    path
  } = useRouteMatch();
  return jsx(Context, Object.assign({
    params: props.params,
    socket: props.socket
  }, {
    children: jsx(Switch, {
      children: jsx(Route, {
        path: `${path}`,
        exact: true,
        component: HomePage
      })
    })
  }));
};
class Module extends SDK.Lib.BaseModule {
  constructor(params) {
    super(params);
    this.defaultPath = '/price-reduction';
    this.CardTool = CardTool;
    this.count = 0;
    this.socket = createSocket(params.country);
    const onConnect = count => {
      this.count = count;
      if (this.onNewCount) this.onNewCount(count);
    };
    this.socket.on('new-count', onConnect);
    this.Flow = () => jsx(Flow, {
      params: params,
      socket: this.socket
    });
  }
  getSidebarMenu(count) {
    return {
      type: 'action',
      icon: {
        type: 'symbol',
        value: 'finance-concept-neutral'
      },
      text: `${i18n.t('side_bar_title')} (${count || this.count})`,
      key: 'price-reduction'
    };
  }
}

export { Module as default };
