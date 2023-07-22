import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { IonRouterOutlet } from '@ionic/react';
import * as React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Ramen from '@team_yumi/ramen';
import { Preferences } from '@capacitor/preferences';
import { WithBootedClient, i18 } from '@team_eureka/eureka-ionic-core';
import { App } from '@capacitor/app';
import axios from 'axios';
import { getAuthFromCache } from '@team_eureka/eureka-ionic-core/clients/AuthenticationClient';
import { setLocale } from '@team_eureka/eureka-ionic-core/lib/i18n';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

var objectGetOwnPropertyDescriptor = {};

var fails$w = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$v = fails$w;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$v(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$u = fails$w;

var functionBindNative = !fails$u(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$p = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$p.bind(call$p) : function () {
  return call$p.apply(call$p, arguments);
};

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

var createPropertyDescriptor$6 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$o = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$o, call$o);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$o.apply(fn, arguments);
  };
};

var uncurryThis$v = functionUncurryThis;

var toString$b = uncurryThis$v({}.toString);
var stringSlice$8 = uncurryThis$v(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$8(toString$b(it), 8, -1);
};

var uncurryThis$u = functionUncurryThis;
var fails$t = fails$w;
var classof$d = classofRaw$2;

var $Object$4 = Object;
var split$3 = uncurryThis$u(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$t(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$d(it) == 'String' ? split$3(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$6 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$5 = isNullOrUndefined$6;

var $TypeError$f = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$5(it)) throw $TypeError$f("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$6 = function (it) {
  return IndexedObject$2(requireObjectCoercible$6(it));
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

var global$u = global$v;
var isCallable$o = isCallable$q;

var aFunction = function (argument) {
  return isCallable$o(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$u[namespace]) : global$u[namespace] && global$u[namespace][method];
};

var uncurryThis$t = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$t({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$t = global$v;
var userAgent$5 = engineUserAgent;

var process$4 = global$t.process;
var Deno$1 = global$t.Deno;
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
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$s = fails$w;
var global$s = global$v;

var $String$5 = global$s.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$s(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$7 = getBuiltIn$8;
var isCallable$n = isCallable$q;
var isPrototypeOf$6 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$n($Symbol) && isPrototypeOf$6($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$m = isCallable$q;
var tryToString$4 = tryToString$5;

var $TypeError$e = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$9 = function (argument) {
  if (isCallable$m(argument)) return argument;
  throw $TypeError$e(tryToString$4(argument) + ' is not a function');
};

var aCallable$8 = aCallable$9;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$8(func);
};

var call$n = functionCall;
var isCallable$l = isCallable$q;
var isObject$e = isObject$f;

var $TypeError$d = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$l(fn = input.toString) && !isObject$e(val = call$n(fn, input))) return val;
  if (isCallable$l(fn = input.valueOf) && !isObject$e(val = call$n(fn, input))) return val;
  if (pref !== 'string' && isCallable$l(fn = input.toString) && !isObject$e(val = call$n(fn, input))) return val;
  throw $TypeError$d("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = false;

var global$r = global$v;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$r, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$r[key] = value;
  } return value;
};

var global$q = global$v;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$q[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$5 = requireObjectCoercible$7;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$8 = function (argument) {
  return $Object$2(requireObjectCoercible$5(argument));
};

var uncurryThis$s = functionUncurryThis;
var toObject$7 = toObject$8;

var hasOwnProperty = uncurryThis$s({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$7(it), key);
};

var uncurryThis$r = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$a = uncurryThis$r(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
};

var global$p = global$v;
var shared$3 = shared$4.exports;
var hasOwn$f = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$2 = global$p.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$2;

var wellKnownSymbol$n = function (name) {
  if (!hasOwn$f(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$f(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$m = functionCall;
var isObject$d = isObject$f;
var isSymbol$2 = isSymbol$3;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$m = wellKnownSymbol$n;

var $TypeError$c = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$m('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$d(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$m(exoticToPrim, input, pref);
    if (!isObject$d(result) || isSymbol$2(result)) return result;
    throw $TypeError$c("Can't convert object to primitive value");
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

var global$o = global$v;
var isObject$c = isObject$f;

var document$3 = global$o.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$c(document$3) && isObject$c(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$h = descriptors;
var fails$r = fails$w;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$h && !fails$r(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$g = descriptors;
var call$l = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$5 = createPropertyDescriptor$6;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$e = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$e(O, P)) return createPropertyDescriptor$5(!call$l(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$f = descriptors;
var fails$q = fails$w;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$f && fails$q(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$b = isObject$f;

var $String$3 = String;
var $TypeError$b = TypeError;

// `Assert: Type(argument) is Object`
var anObject$i = function (argument) {
  if (isObject$b(argument)) return argument;
  throw $TypeError$b($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$e = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$h = anObject$i;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$a = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$h(O);
  P = toPropertyKey$2(P);
  anObject$h(Attributes);
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
  anObject$h(O);
  P = toPropertyKey$2(P);
  anObject$h(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$a('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$d = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$6;

var createNonEnumerableProperty$9 = DESCRIPTORS$d ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$c = descriptors;
var hasOwn$d = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$c && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$d(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$c || (DESCRIPTORS$c && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$q = functionUncurryThis;
var isCallable$k = isCallable$q;
var store$1 = sharedStore;

var functionToString = uncurryThis$q(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$k(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$n = global$v;
var isCallable$j = isCallable$q;

var WeakMap$1 = global$n.WeakMap;

var weakMapBasicDetection = isCallable$j(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys$2 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$2[key] || (keys$2[key] = uid$1(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$m = global$v;
var isObject$a = isObject$f;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
var hasOwn$c = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$5 = global$m.TypeError;
var WeakMap = global$m.WeakMap;
var set$2, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$2(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$a(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
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
  set$2 = function (it, metadata) {
    if (store.has(it)) throw TypeError$5(OBJECT_ALREADY_INITIALIZED);
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
  set$2 = function (it, metadata) {
    if (hasOwn$c(it, STATE)) throw TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$8(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$c(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$c(it, STATE);
  };
}

var internalState = {
  set: set$2,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$p = functionUncurryThis;
var fails$p = fails$w;
var isCallable$i = isCallable$q;
var hasOwn$b = hasOwnProperty_1;
var DESCRIPTORS$b = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$8 = internalState;

var enforceInternalState$3 = InternalStateModule$8.enforce;
var getInternalState$5 = InternalStateModule$8.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;
var stringSlice$7 = uncurryThis$p(''.slice);
var replace$7 = uncurryThis$p(''.replace);
var join$3 = uncurryThis$p([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$b && !fails$p(function () {
  return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$7($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$7($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$b(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$b) defineProperty$6(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$b(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$b(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$b) defineProperty$6(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$3(value);
  if (!hasOwn$b(state, 'source')) {
    state.source = join$3(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$i(this) && getInternalState$5(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$h = isCallable$q;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$d = function (O, key, value, options) {
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
var floor$6 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$6 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$7 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$6(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$7 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$5(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$6 = toLength$7;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$8 = function (obj) {
  return toLength$6(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$7 = lengthOfArrayLike$8;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$7(O);
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

var uncurryThis$o = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$5 = uncurryThis$o([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$2, key) && hasOwn$a(O, key) && push$5(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$5(result, key);
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

var getBuiltIn$6 = getBuiltIn$8;
var uncurryThis$n = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$g = anObject$i;

var concat$2 = uncurryThis$n([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$6('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$g(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$9 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$9(target, key) && !(exceptions && hasOwn$9(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$o = fails$w;
var isCallable$g = isCallable$q;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$g(detection) ? fails$o(detection)
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
var defineBuiltIn$c = defineBuiltIn$d;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
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
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$7(sourceProperty, 'sham', true);
    }
    defineBuiltIn$c(target, key, sourceProperty, options);
  }
};

var wellKnownSymbol$l = wellKnownSymbol$n;

var TO_STRING_TAG$4 = wellKnownSymbol$l('toStringTag');
var test = {};

test[TO_STRING_TAG$4] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$f = isCallable$q;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$k = wellKnownSymbol$n;

var TO_STRING_TAG$3 = wellKnownSymbol$k('toStringTag');
var $Object$1 = Object;

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
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$f(O.callee) ? 'Arguments' : result;
};

var classof$b = classof$c;

var $String$1 = String;

var toString$9 = function (argument) {
  if (classof$b(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$f = anObject$i;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$f(this);
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

var fails$n = fails$w;
var global$k = global$v;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$k.RegExp;

var UNSUPPORTED_Y$2 = fails$n(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$n(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$n(function () {
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

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$a = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$e = anObject$i;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$e(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$8;

var html$2 = getBuiltIn$5('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$d = anObject$i;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
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
    EmptyConstructor[PROTOTYPE$1] = anObject$d(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$m = fails$w;
var global$j = global$v;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$j.RegExp;

var regexpUnsupportedDotAll = fails$m(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$l = fails$w;
var global$i = global$v;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$i.RegExp;

var regexpUnsupportedNcg = fails$l(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$k = functionCall;
var uncurryThis$m = functionUncurryThis;
var toString$8 = toString$9;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create$4 = objectCreate;
var getInternalState$4 = internalState.get;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$7 = uncurryThis$m(''.charAt);
var indexOf = uncurryThis$m(''.indexOf);
var replace$6 = uncurryThis$m(''.replace);
var stringSlice$6 = uncurryThis$m(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$k(nativeExec, re1, 'a');
  call$k(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$4(re);
    var str = toString$8(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$k(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$k(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$6(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$6(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$7(str, re.lastIndex - 1) !== '\n')) {
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

    match = call$k(nativeExec, sticky ? reCopy : re, strCopy);

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
      call$k(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$4(null);
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
var exec$5 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$h({ target: 'RegExp', proto: true, forced: /./.exec !== exec$5 }, {
  exec: exec$5
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
var defineBuiltIn$b = defineBuiltIn$d;
var regexpExec$1 = regexpExec$2;
var fails$k = fails$w;
var wellKnownSymbol$j = wellKnownSymbol$n;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;

var SPECIES$4 = wellKnownSymbol$j('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$j(KEY);

  var DELEGATES_TO_SYMBOL = !fails$k(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$k(function () {
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

    defineBuiltIn$b(String.prototype, KEY, methods[0]);
    defineBuiltIn$b(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$6(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$j = functionUncurryThis;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
var toString$7 = toString$9;
var requireObjectCoercible$4 = requireObjectCoercible$7;

var charAt$6 = uncurryThis$j(''.charAt);
var charCodeAt$1 = uncurryThis$j(''.charCodeAt);
var stringSlice$5 = uncurryThis$j(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$7(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$4(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$6(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$5(S, position, position + 2)
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

var charAt$5 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$5(S, index).length : 1);
};

var call$j = functionCall;
var anObject$c = anObject$i;
var isCallable$e = isCallable$q;
var classof$a = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$9 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$e(exec)) {
    var result = call$j(exec, R, S);
    if (result !== null) anObject$c(result);
    return result;
  }
  if (classof$a(R) === 'RegExp') return call$j(regexpExec, R, S);
  throw $TypeError$9('RegExp#exec called on incompatible receiver');
};

var call$i = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$b = anObject$i;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var toLength$5 = toLength$7;
var toString$6 = toString$9;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var getMethod$3 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$3(regexp, MATCH);
      return matcher ? call$i(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$6(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$b(this);
      var S = toString$6(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$6(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$5(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var wellKnownSymbol$i = wellKnownSymbol$n;
var create$3 = objectCreate;
var defineProperty$5 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$i('unscopables');
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
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$j = fails$w;

var correctPrototypeGetter = !fails$j(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$8 = hasOwnProperty_1;
var isCallable$d = isCallable$q;
var toObject$6 = toObject$8;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$2 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$6(O);
  if (hasOwn$8(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$d(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype$2 : null;
};

var fails$i = fails$w;
var isCallable$c = isCallable$q;
var isObject$9 = isObject$f;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltIn$a = defineBuiltIn$d;
var wellKnownSymbol$h = wellKnownSymbol$n;

var ITERATOR$8 = wellKnownSymbol$h('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$2) || fails$i(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$c(IteratorPrototype$2[ITERATOR$8])) {
  defineBuiltIn$a(IteratorPrototype$2, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$7 = hasOwnProperty_1;
var wellKnownSymbol$g = wellKnownSymbol$n;

var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');

var setToStringTag$6 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$7(target, TO_STRING_TAG$2)) {
    defineProperty$4(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$3 = createPropertyDescriptor$6;
var setToStringTag$5 = setToStringTag$6;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$i = functionUncurryThis;
var aCallable$7 = aCallable$9;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$i(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$b = isCallable$q;

var $String = String;
var $TypeError$8 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$b(argument)) return argument;
  throw $TypeError$8("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$a = anObject$i;
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
    anObject$a(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$g = _export;
var call$h = functionCall;
var FunctionName$1 = functionName;
var isCallable$a = isCallable$q;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$5 = objectSetPrototypeOf;
var setToStringTag$4 = setToStringTag$6;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
var defineBuiltIn$9 = defineBuiltIn$d;
var wellKnownSymbol$f = wellKnownSymbol$n;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$f('iterator');
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
        } else if (!isCallable$a(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$9(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$5(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$h(nativeIterator, this); };
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
        defineBuiltIn$9(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$g({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$9(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$7 = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$9 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$6 = InternalStateModule$7.set;
var getInternalState$3 = InternalStateModule$7.getterFor(ARRAY_ITERATOR);

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
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$6(this, {
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
    return createIterResultObject$1(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$1(index, false);
  if (kind == 'values') return createIterResultObject$1(target[index], false);
  return createIterResultObject$1([index, target[index]], false);
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

var global$h = global$v;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
var wellKnownSymbol$e = wellKnownSymbol$n;

var ITERATOR$6 = wellKnownSymbol$e('iterator');
var TO_STRING_TAG$1 = wellKnownSymbol$e('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$4(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$1]) {
      createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
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
  handlePrototype(global$h[COLLECTION_NAME] && global$h[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$8 = descriptors;
var uncurryThis$h = functionUncurryThis;
var call$g = functionCall;
var fails$h = fails$w;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$5 = toObject$8;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;
var concat$1 = uncurryThis$h([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$h(function () {
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
  var T = toObject$5(target);
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
      if (!DESCRIPTORS$8 || call$g(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$f = _export;
var assign$1 = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$f({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$1 }, {
  assign: assign$1
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

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$3 = FunctionPrototype.apply;
var call$f = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$f.bind(apply$3) : function () {
  return call$f.apply(apply$3, arguments);
});

var uncurryThis$g = functionUncurryThis;
var toObject$4 = toObject$8;

var floor$5 = Math.floor;
var charAt$4 = uncurryThis$g(''.charAt);
var replace$5 = uncurryThis$g(''.replace);
var stringSlice$4 = uncurryThis$g(''.slice);
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
  return replace$5(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$4(ch, 0)) {
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
          var f = floor$5(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$4(ch, 1) : captures[f - 1] + charAt$4(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply$2 = functionApply;
var call$e = functionCall;
var uncurryThis$f = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$g = fails$w;
var anObject$9 = anObject$i;
var isCallable$9 = isCallable$q;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$7;
var toLength$4 = toLength$7;
var toString$5 = toString$9;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$2;
var getMethod$2 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$d = wellKnownSymbol$n;

var REPLACE = wellKnownSymbol$d('replace');
var max$1 = Math.max;
var min = Math.min;
var concat = uncurryThis$f([].concat);
var push$4 = uncurryThis$f([].push);
var stringIndexOf$2 = uncurryThis$f(''.indexOf);
var stringSlice$3 = uncurryThis$f(''.slice);

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
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = isNullOrUndefined$2(searchValue) ? undefined : getMethod$2(searchValue, REPLACE);
      return replacer
        ? call$e(replacer, searchValue, O, replaceValue)
        : call$e(nativeReplace, toString$5(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$9(this);
      var S = toString$5(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$2(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$9(replaceValue);
      if (!functionalReplace) replaceValue = toString$5(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push$4(results, result);
        if (!global) break;

        var matchStr = toString$5(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$4(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$5(result[0]);
        var position = max$1(min(toIntegerOrInfinity$3(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$4(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$4(replacerArgs, namedCaptures);
          var replacement = toString$5(apply$2(replaceValue, undefined, replacerArgs));
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
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$e = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var toString$4 = toString$9;
var whitespaces$2 = whitespaces$3;

var replace$4 = uncurryThis$e(''.replace);
var ltrim = RegExp('^[' + whitespaces$2 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$4(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$4(string, ltrim, '');
    if (TYPE & 2) string = replace$4(string, rtrim, '$1');
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

var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
var fails$f = fails$w;
var whitespaces$1 = whitespaces$3;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$f(function () {
    return !!whitespaces$1[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$2 && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$e = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$e({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var isCallable$8 = isCallable$q;
var isObject$8 = isObject$f;
var setPrototypeOf$4 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$4 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$8(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$8(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$4($this, NewTargetPrototype);
  return $this;
};

var isObject$7 = isObject$f;
var classof$9 = classofRaw$2;
var wellKnownSymbol$c = wellKnownSymbol$n;

var MATCH$2 = wellKnownSymbol$c('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$7(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$9(it) == 'RegExp');
};

var call$d = functionCall;
var hasOwn$6 = hasOwnProperty_1;
var isPrototypeOf$5 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$6(R, 'flags') && isPrototypeOf$5(RegExpPrototype$2, R)
    ? call$d(regExpFlags, R) : flags;
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

var defineBuiltInAccessor$6 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

var getBuiltIn$4 = getBuiltIn$8;
var defineBuiltInAccessor$5 = defineBuiltInAccessor$6;
var wellKnownSymbol$b = wellKnownSymbol$n;
var DESCRIPTORS$7 = descriptors;

var SPECIES$3 = wellKnownSymbol$b('species');

var setSpecies$3 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$7 && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor$5(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$6 = descriptors;
var global$g = global$v;
var uncurryThis$d = functionUncurryThis;
var isForced$1 = isForced_1;
var inheritIfRequired$1 = inheritIfRequired$2;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
var isPrototypeOf$4 = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$3 = toString$9;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$8 = defineBuiltIn$d;
var fails$e = fails$w;
var hasOwn$5 = hasOwnProperty_1;
var enforceInternalState$2 = internalState.enforce;
var setSpecies$2 = setSpecies$3;
var wellKnownSymbol$a = wellKnownSymbol$n;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$a('match');
var NativeRegExp = global$g.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$g.SyntaxError;
var exec$4 = uncurryThis$d(RegExpPrototype$1.exec);
var charAt$3 = uncurryThis$d(''.charAt);
var replace$3 = uncurryThis$d(''.replace);
var stringIndexOf$1 = uncurryThis$d(''.indexOf);
var stringSlice$2 = uncurryThis$d(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$6 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$e(function () {
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
    chr = charAt$3(string, index);
    if (chr === '\\') {
      result += chr + charAt$3(string, ++index);
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
    chr = charAt$3(string, index);
    if (chr === '\\') {
      chr = chr + charAt$3(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$4(IS_NCG, stringSlice$2(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$5(names, groupname)) {
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
    var thisIsRegExp = isPrototypeOf$4(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$4(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$3(pattern);
    flags = flags === undefined ? '' : toString$3(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
      if (dotAll) flags = replace$3(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace$3(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$2(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$3(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys$1 = getOwnPropertyNames$2(NativeRegExp), index = 0; keys$1.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys$1[index++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$8(global$g, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$2('RegExp');

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$7 = defineBuiltIn$d;
var anObject$8 = anObject$i;
var $toString$2 = toString$9;
var fails$d = fails$w;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$d(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$7(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$8(this);
    var pattern = $toString$2(R.source);
    var flags = $toString$2(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var SETTINGS_ENUM;
(function (SETTINGS_ENUM) {
  SETTINGS_ENUM[SETTINGS_ENUM["MODULE_PENDING"] = 0] = "MODULE_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["EXTENSION_PENDING"] = 1] = "EXTENSION_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["USER_AD"] = 2] = "USER_AD";
  SETTINGS_ENUM[SETTINGS_ENUM["LOCALE_DATE"] = 3] = "LOCALE_DATE";
  SETTINGS_ENUM[SETTINGS_ENUM["LOCALE_COUNTRY"] = 4] = "LOCALE_COUNTRY";
  SETTINGS_ENUM[SETTINGS_ENUM["PURCHASE_REQUISITION_PENDING"] = 5] = "PURCHASE_REQUISITION_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["ACCOUNTABILITY_PENDING"] = 6] = "ACCOUNTABILITY_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["FB60_PENDING"] = 7] = "FB60_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["PAYMENT_PROPOSAL_PENDING"] = 8] = "PAYMENT_PROPOSAL_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["PURCHASE_ORDER_PENDING"] = 9] = "PURCHASE_ORDER_PENDING";
  SETTINGS_ENUM[SETTINGS_ENUM["CENTRAL_ACTION_FETCH"] = 10] = "CENTRAL_ACTION_FETCH";
})(SETTINGS_ENUM || (SETTINGS_ENUM = {}));
const storageName = '@approvalmodule';
class ApprovalSettingsClient extends WithBootedClient {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  boot() {
    return __awaiter(this, void 0, void 0, function* () {
      const cached = yield Preferences.get({
        key: storageName
      });
      if (cached && cached.value) {
        const newState = JSON.parse(cached.value);
        this.setState(newState);
      }
    });
  }
  get(name, defaultValue = null) {
    const setting = this.state[name];
    if (typeof setting == 'undefined') {
      return defaultValue;
    }
    return setting;
  }
  set(name, value) {
    return __awaiter(this, void 0, void 0, function* () {
      this.state[name] = value;
      yield this.setState(this.state);
      yield Preferences.set({
        key: storageName,
        value: JSON.stringify(this.state)
      });
      return value;
    });
  }
  remove(name) {
    return __awaiter(this, void 0, void 0, function* () {
      delete this.state[name];
      yield this.setState(this.state);
      yield Preferences.set({
        key: storageName,
        value: JSON.stringify(this.state)
      });
      return true;
    });
  }
  setState(newState) {
    return __awaiter(this, void 0, void 0, function* () {
      this.state = newState;
    });
  }
}
var SettingsClient = new ApprovalSettingsClient();

function Index$1(props) {
  const [pending, setPending] = useState(0);
  const history = useHistory();
  const title = props.title || 'Central de Aprovações';
  const onClick = () => __awaiter(this, void 0, void 0, function* () {
    yield SettingsClient.set('CENTRAL_ACTION_FETCH', true);
    history.push(props.pathModule);
  });
  const getPendingCounter = () => __awaiter(this, void 0, void 0, function* () {
    yield SettingsClient.boot();
    const _modulePending = SettingsClient.get('MODULE_PENDING', 0);
    const _extensionPending = SettingsClient.get('EXTENSION_PENDING', 0);
    return _modulePending + _extensionPending;
  });
  useEffect(() => {
    getPendingCounter().then(p => setPending(p));
  }, []);
  return jsx(Ramen.XCard, {
    symbol: "fit-stock-neutral",
    title: title,
    count: pending,
    onClick: onClick
  });
}

function Index(props) {
  const [pending, setPending] = useState(0);
  const history = useHistory();
  const title = 'Children';
  const onClick = () => {
    history.push('/');
  };
  useEffect(() => {
    // SettingClient.get('PENDING', 0).then((p) => setPending(p));
  }, []);
  return jsx(Ramen.XCard, {
    symbol: "fit-stock-neutral",
    title: title,
    count: pending,
    onClick: onClick
  });
}

var APPROVAL_TYPES;
(function (APPROVAL_TYPES) {
  APPROVAL_TYPES["PURCHASE_REQUISITION"] = "purchaseRequisition";
  APPROVAL_TYPES["ACCOUNTABILITY"] = "accountability";
  APPROVAL_TYPES["FB60"] = "fb60";
  APPROVAL_TYPES["PAYMENT_PROPOSAL"] = "paymentProposal";
  APPROVAL_TYPES["PURCHASE_ORDER"] = "purchaseOrder";
})(APPROVAL_TYPES || (APPROVAL_TYPES = {}));

var $$d = _export;
var $includes = arrayIncludes.includes;
var fails$c = fails$w;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$c(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$d({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isRegExp = isRegexp;

var $TypeError$7 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$7("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$9 = wellKnownSymbol$n;

var MATCH = wellKnownSymbol$9('match');

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

var $$c = _export;
var uncurryThis$c = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$7;
var toString$2 = toString$9;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$c(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$c({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString$2(requireObjectCoercible(this)),
      toString$2(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var classof$8 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$8(process) == 'process';

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$6 = TypeError;

var anInstance$5 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw $TypeError$6('Incorrect invocation');
};

var uncurryThis$b = functionUncurryThis;
var fails$b = fails$w;
var isCallable$7 = isCallable$q;
var classof$7 = classof$c;
var getBuiltIn$3 = getBuiltIn$8;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$b(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$7(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$3 = !construct || fails$b(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$2 = isConstructor$3;
var tryToString$3 = tryToString$5;

var $TypeError$5 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$2(argument)) return argument;
  throw $TypeError$5(tryToString$3(argument) + ' is not a constructor');
};

var anObject$7 = anObject$i;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var wellKnownSymbol$8 = wellKnownSymbol$n;

var SPECIES$2 = wellKnownSymbol$8('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$3 = function (O, defaultConstructor) {
  var C = anObject$7(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$7(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
};

var uncurryThis$a = functionUncurryThisClause;
var aCallable$6 = aCallable$9;
var NATIVE_BIND = functionBindNative;

var bind$9 = uncurryThis$a(uncurryThis$a.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$6(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$9(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$9 = functionUncurryThis;

var arraySlice$5 = uncurryThis$9([].slice);

var $TypeError$4 = TypeError;

var validateArgumentsLength$3 = function (passed, required) {
  if (passed < required) throw $TypeError$4('Not enough arguments');
  return passed;
};

var userAgent$4 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$f = global$v;
var apply$1 = functionApply;
var bind$8 = functionBindContext;
var isCallable$6 = isCallable$q;
var hasOwn$4 = hasOwnProperty_1;
var fails$a = fails$w;
var html = html$2;
var arraySlice$4 = arraySlice$5;
var createElement = documentCreateElement$2;
var validateArgumentsLength$2 = validateArgumentsLength$3;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set$1 = global$f.setImmediate;
var clear = global$f.clearImmediate;
var process$3 = global$f.process;
var Dispatch = global$f.Dispatch;
var Function$1 = global$f.Function;
var MessageChannel = global$f.MessageChannel;
var String$1 = global$f.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$a(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$f.location;
});

var run = function (id) {
  if (hasOwn$4(queue$2, id)) {
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
  global$f.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(handler) {
    validateArgumentsLength$2(arguments.length, 1);
    var fn = isCallable$6(handler) ? handler : Function$1(handler);
    var args = arraySlice$4(arguments, 1);
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
    defer = bind$8(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$f.addEventListener &&
    isCallable$6(global$f.postMessage) &&
    !global$f.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$a(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$f.addEventListener('message', eventListener, false);
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

var userAgent$3 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$e = global$v;
var bind$7 = functionBindContext;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$e.MutationObserver || global$e.WebKitMutationObserver;
var document$2 = global$e.document;
var process$2 = global$e.process;
var Promise$1 = global$e.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$e, 'queueMicrotask');
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
    then = bind$7(promise.then, promise);
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
    macrotask = bind$7(macrotask, global$e);
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

var global$d = global$v;

var promiseNativeConstructor = global$d.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$c = global$v;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var isCallable$5 = isCallable$q;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$7 = wellKnownSymbol$n;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var SPECIES$1 = wellKnownSymbol$7('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$5(global$c.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$4(function (resolve) { resolve(1); });
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

var aCallable$5 = aCallable$9;

var $TypeError$3 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$3('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$5(resolve);
  this.reject = aCallable$5(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$b = _export;
var IS_NODE = engineIsNode;
var global$b = global$v;
var call$c = functionCall;
var defineBuiltIn$6 = defineBuiltIn$d;
var setPrototypeOf$3 = objectSetPrototypeOf;
var setToStringTag$3 = setToStringTag$6;
var setSpecies$1 = setSpecies$3;
var aCallable$4 = aCallable$9;
var isCallable$4 = isCallable$q;
var isObject$6 = isObject$f;
var anInstance$4 = anInstance$5;
var speciesConstructor$2 = speciesConstructor$3;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule$6 = internalState;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$6.getterFor(PROMISE);
var setInternalState$5 = InternalStateModule$6.set;
var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var PromiseConstructor = NativePromiseConstructor$3;
var PromisePrototype = NativePromisePrototype$2;
var TypeError$4 = global$b.TypeError;
var document$1 = global$b.document;
var process$1 = global$b.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$b.dispatchEvent);
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
  return isObject$6(it) && isCallable$4(then = it.then) ? then : false;
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
        reject(TypeError$4('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$c(then, result, resolve, reject);
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
    global$b.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$b['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$c(task, global$b, function () {
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
  call$c(task, global$b, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$6 = function (fn, state, unwrap) {
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
    if (state.facade === value) throw TypeError$4("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$c(then, value,
            bind$6(internalResolve, wrapper, state),
            bind$6(internalReject, wrapper, state)
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
    anInstance$4(this, PromisePrototype);
    aCallable$4(executor);
    call$c(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$6(internalResolve, state), bind$6(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$5(this, {
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
    var reaction = newPromiseCapability$1(speciesConstructor$2(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$4(onRejected) && onRejected;
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
    this.resolve = bind$6(internalResolve, state);
    this.reject = bind$6(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$4(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
    nativeThen = NativePromisePrototype$2.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$6(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$c(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$2.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$3) {
      setPrototypeOf$3(NativePromisePrototype$2, PromisePrototype);
    }
  }
}

$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag$3(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);

var wellKnownSymbol$6 = wellKnownSymbol$n;
var Iterators$1 = iterators;

var ITERATOR$5 = wellKnownSymbol$6('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$5] === it);
};

var classof$6 = classof$c;
var getMethod$1 = getMethod$5;
var isNullOrUndefined = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$5 = wellKnownSymbol$n;

var ITERATOR$4 = wellKnownSymbol$5('iterator');

var getIteratorMethod$5 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$4)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$6(it)];
};

var call$b = functionCall;
var aCallable$3 = aCallable$9;
var anObject$6 = anObject$i;
var tryToString$2 = tryToString$5;
var getIteratorMethod$4 = getIteratorMethod$5;

var $TypeError$2 = TypeError;

var getIterator$4 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable$3(iteratorMethod)) return anObject$6(call$b(iteratorMethod, argument));
  throw $TypeError$2(tryToString$2(argument) + ' is not iterable');
};

var call$a = functionCall;
var anObject$5 = anObject$i;
var getMethod = getMethod$5;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$5(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$a(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$5(innerResult);
  return value;
};

var bind$5 = functionBindContext;
var call$9 = functionCall;
var anObject$4 = anObject$i;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var lengthOfArrayLike$6 = lengthOfArrayLike$8;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getIterator$3 = getIterator$4;
var getIteratorMethod$3 = getIteratorMethod$5;
var iteratorClose$1 = iteratorClose$2;

var $TypeError$1 = TypeError;

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
  var fn = bind$5(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose$1(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$4(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$3(iterable);
    if (!iterFn) throw $TypeError$1(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$2(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$6(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$3(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$9(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$4 = wellKnownSymbol$n;

var ITERATOR$3 = wellKnownSymbol$4('iterator');
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

var NativePromiseConstructor$2 = promiseNativeConstructor;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
  NativePromiseConstructor$2.all(iterable).then(undefined, function () { /* empty */ });
});

var $$a = _export;
var call$8 = functionCall;
var aCallable$2 = aCallable$9;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$8($promiseResolve, C, promise).then(function (value) {
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

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var getBuiltIn$2 = getBuiltIn$8;
var isCallable$3 = isCallable$q;
var defineBuiltIn$5 = defineBuiltIn$d;

var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$3(NativePromiseConstructor$1)) {
  var method$1 = getBuiltIn$2('Promise').prototype['catch'];
  if (NativePromisePrototype$1['catch'] !== method$1) {
    defineBuiltIn$5(NativePromisePrototype$1, 'catch', method$1, { unsafe: true });
  }
}

var $$8 = _export;
var call$7 = functionCall;
var aCallable$1 = aCallable$9;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      iterate(iterable, function (promise) {
        call$7($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var call$6 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$6(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$3 = anObject$i;
var isObject$5 = isObject$f;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject$3(C);
  if (isObject$5(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn$1 = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;

getBuiltIn$1('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});

/**
 *
 * @param error * Interceptor for success request.
 *
 * @returns
 */
const onRequestError = error => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.reject(error);
});

/**
 * Interceptor for error response.
 *
 * @param error
 */
const onResponseError = error => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.reject(error);
});
/**
 *
 * @param response
 * @returns
 */
const onResponse = response => __awaiter(void 0, void 0, void 0, function* () {
  return Promise.resolve(response);
});

class AxiosProvider {
  constructor(config) {
    this.config = {
      headers: {},
      params: {}
    };
    this.axios = axios.create(config);
    this.addInterceptors();
  }
  addInterceptors() {
    this.axios.interceptors.request.use(this.onRequest);
  }
  onRequest(config) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (config.headers) {
        const jwt = yield getAuthFromCache();
        config.headers['Authorization'] = `${(_a = jwt === null || jwt === void 0 ? void 0 : jwt.user) === null || _a === void 0 ? void 0 : _a.token_type.toLowerCase()} ${(_b = jwt === null || jwt === void 0 ? void 0 : jwt.user) === null || _b === void 0 ? void 0 : _b.access_token}`;
      }
      return Promise.resolve(config);
    });
  }
  onRequestError(error) {
    return onRequestError(error);
  }
  onResponse(response) {
    return onResponse(response);
  }
  onErrorResponse(error) {
    return onResponseError(error);
  }
  get(uri, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(uri, this.mergeConfigs(params));
      return response.data;
    });
  }
  post(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.post(uri, data, this.mergeConfigs(params));
      return response.data;
    });
  }
  put(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.put(uri, data, this.mergeConfigs(params));
      return response.data;
    });
  }
  delete(uri, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.axios.delete(uri, Object.assign({}, this.mergeConfigs(params)));
    });
  }
  patch(uri, data, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.patch(uri, Object.assign(Object.assign({}, this.mergeConfigs(params)), {
        data
      }));
      return response.data;
    });
  }
  setAutorization(token_type, token) {
    if (token) {
      this.axios.defaults.headers.common['Authorization'] = `${token_type === null || token_type === void 0 ? void 0 : token_type.toString().toLowerCase()} ${token}`;
    } else if (this.axios.defaults.headers.common['Authorization']) {
      delete this.axios.defaults.headers.common['Authorization'];
    }
  }
  setBaseUrl(url) {
    this.axios.defaults.baseURL = url;
  }
  setApiKey(apiKey) {
    this.axios.defaults.headers.common['apiKey'] = apiKey;
  }
  mergeConfigs(params) {
    return Object.assign(Object.assign({}, this.config), {
      params: Object.assign(Object.assign({}, this.config.params), params)
    });
  }
}

const config$1 = {
  baseURL: '',
  timeout: 10000
};
class FicoAPI extends AxiosProvider {
  constructor() {
    super(config$1);
    this.countryCode = '';
  }
  setCountryCode(code) {
    this.countryCode = code;
  }
  getPurchaseRequisition(userAd) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/purchaseRequisition/list/approvals/${userAd}`);
    });
  }
  getPurchaseRequisitionFiles(orderId) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/purchaseRequisition/list/files/${orderId}`);
    });
  }
  getPurchaseRequisitionFileStream(fileId) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/purchaseRequisition/get/file/${fileId}`);
    });
  }
}

const config = {
  baseURL: '',
  timeout: 10000
};
class FioriAPI extends AxiosProvider {
  constructor() {
    super(config);
    this.countryCode = '';
  }
  setCountryCode(code) {
    this.countryCode = code;
  }
  getAccountability(userAd) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/accountability/list/approvals/${userAd}`);
    });
  }
  getFb60(userAd) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/fb60/list/approvals/${userAd}`);
    });
  }
  getFB60Files(data) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.post(`/v1/${this.countryCode}/fb60/list/files`, data);
    });
  }
  getFB60FileStream(fileId) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/fb60/get/file/${fileId}`);
    });
  }
  getPaymentProposal(userAd) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/paymentProposal/list/approvals/${userAd}`);
    });
  }
  getPurchaseOrder(userAd) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/purchaseOrder/list/approvals/${userAd}`);
    });
  }
  getPurchaseOrderDetail(orderId) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.get(`/v1/${this.countryCode}/purchaseOrder/list/approvals/detail/${orderId}`);
    });
  }
}

class ApprovalAPI {
  constructor() {
    this.fico = new FicoAPI();
    this.fiori = new FioriAPI();
  }
  setCountryCode(code) {
    this.fico.setCountryCode(code);
    this.fiori.setCountryCode(code);
  }
  getApprovals(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (request.type === 'purchaseRequisition') {
          const _res = yield this.fico.getPurchaseRequisition(request.userAd);
          return {
            success: true,
            data: _res
          };
        } else if (request.type === 'accountability') {
          const _res = yield this.fiori.getAccountability(request.userAd);
          return {
            success: true,
            data: _res
          };
        } else if (request.type === 'fb60') {
          const _res = yield this.fiori.getFb60(request.userAd);
          return {
            success: true,
            data: _res
          };
        } else if (request.type === 'paymentProposal') {
          const _res = yield this.fiori.getPaymentProposal(request.userAd);
          return {
            success: true,
            data: _res
          };
        } else if (request.type === 'purchaseOrder') {
          const _res = yield this.fiori.getPurchaseOrder(request.userAd);
          return {
            success: true,
            data: _res
          };
        }
        return {
          success: false,
          data: 'Approval type is invalid!'
        };
      } catch (error) {
        return {
          success: false,
          data: JSON.stringify(error)
        };
      }
    });
  }
}
const approvalAPI = new ApprovalAPI();

function ApprovalCenter(props) {
  var _a;
  const [loading, setLoading] = useState(false);
  const [purchaseRequisition, setPurchaseRequisition] = useState([]);
  const [accountability, setAccountability] = useState([]);
  const [fb60, setFB60] = useState([]);
  const [paymentProposal, setPaymentProposal] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const findAD = () => __awaiter(this, void 0, void 0, function* () {
    SettingsClient.get('USER_AD', null);
    return 'FMMARTINS';
    // if (!_ad) {
    //   adAPI.setBaseUrl(props.extensions?.env?.adApi ?? '');
    //   adAPI.setApiKey(props.extensions?.env?.adApiKey ?? '');
    //   const _adRequest = await adAPI.getAdByEmail();
    //   await ApprovalSettingsClient.set('USER_AD', _adRequest);
    //   return _adRequest;
    // }
    // return _ad;
  });

  const getData = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const _types = (_b = props.extensions) === null || _b === void 0 ? void 0 : _b.approval_types;
    approvalAPI.fico.setBaseUrl((_e = (_d = (_c = props.extensions) === null || _c === void 0 ? void 0 : _c.env) === null || _d === void 0 ? void 0 : _d.approvalFicoApi) !== null && _e !== void 0 ? _e : '');
    approvalAPI.fico.setApiKey((_g = (_f = props.extensions) === null || _f === void 0 ? void 0 : _f.env.approvalApiKey) !== null && _g !== void 0 ? _g : '');
    approvalAPI.fiori.setBaseUrl((_k = (_j = (_h = props.extensions) === null || _h === void 0 ? void 0 : _h.env) === null || _j === void 0 ? void 0 : _j.approvalFioriApi) !== null && _k !== void 0 ? _k : '');
    approvalAPI.fiori.setApiKey((_m = (_l = props.extensions) === null || _l === void 0 ? void 0 : _l.env.approvalApiKey) !== null && _m !== void 0 ? _m : '');
    approvalAPI.setCountryCode((_q = (_p = (_o = props.extensions) === null || _o === void 0 ? void 0 : _o.env) === null || _p === void 0 ? void 0 : _p.country.toLowerCase()) !== null && _q !== void 0 ? _q : '');
    if (!SettingsClient.get('CENTRAL_ACTION_FETCH', false)) {
      const _pR = SettingsClient.get('PURCHASE_REQUISITION_PENDING', []);
      const _aCC = SettingsClient.get('ACCOUNTABILITY_PENDING', []);
      const _fB = SettingsClient.get('FB60_PENDING', []);
      const _pP = SettingsClient.get('PAYMENT_PROPOSAL_PENDING', []);
      const _pO = SettingsClient.get('PURCHASE_ORDER_PENDING', []);
      setPurchaseRequisition(_pR);
      setAccountability(_aCC);
      setFB60(_fB);
      setPaymentProposal(_pP);
      setPurchaseOrder(_pO);
      yield SettingsClient.set('MODULE_PENDING', _pR.length + _aCC.length + _fB.length + _pP.length + _pO.length);
      return;
    }
    setLoading(true);
    let _pending = 0;
    const _promisses = [];
    const _approvalsInPromisses = [];
    const userAD = yield findAD();
    if (userAD) {
      if (_types === null || _types === void 0 ? void 0 : _types.includes(APPROVAL_TYPES.PURCHASE_REQUISITION)) {
        _promisses.push(approvalAPI.getApprovals({
          type: APPROVAL_TYPES.PURCHASE_REQUISITION,
          userAd: userAD
        }));
        _approvalsInPromisses.push(APPROVAL_TYPES.PURCHASE_REQUISITION);
      }
      if (_types === null || _types === void 0 ? void 0 : _types.includes(APPROVAL_TYPES.ACCOUNTABILITY)) {
        _promisses.push(approvalAPI.getApprovals({
          type: APPROVAL_TYPES.ACCOUNTABILITY,
          userAd: userAD
        }));
        _approvalsInPromisses.push(APPROVAL_TYPES.ACCOUNTABILITY);
      }
      if (_types === null || _types === void 0 ? void 0 : _types.includes(APPROVAL_TYPES.FB60)) {
        _promisses.push(approvalAPI.getApprovals({
          type: APPROVAL_TYPES.FB60,
          userAd: userAD
        }));
        _approvalsInPromisses.push(APPROVAL_TYPES.FB60);
      }
      if (_types === null || _types === void 0 ? void 0 : _types.includes(APPROVAL_TYPES.PAYMENT_PROPOSAL)) {
        _promisses.push(approvalAPI.getApprovals({
          type: APPROVAL_TYPES.PAYMENT_PROPOSAL,
          userAd: userAD
        }));
        _approvalsInPromisses.push(APPROVAL_TYPES.PAYMENT_PROPOSAL);
      }
      if (_types === null || _types === void 0 ? void 0 : _types.includes(APPROVAL_TYPES.PURCHASE_ORDER)) {
        _promisses.push(approvalAPI.getApprovals({
          type: APPROVAL_TYPES.PURCHASE_ORDER,
          userAd: userAD
        }));
        _approvalsInPromisses.push(APPROVAL_TYPES.PURCHASE_ORDER);
      }
      const result = yield Promise.all(_promisses);
      for (const [index, value] of result.entries()) {
        const _data = value.success && value.data.length > 0 ? value.data : [];
        if (_approvalsInPromisses[index] === APPROVAL_TYPES.PURCHASE_REQUISITION) {
          setPurchaseRequisition(_data);
          _pending = _pending + _data.length;
          yield SettingsClient.set('PURCHASE_REQUISITION_PENDING', _data);
        } else if (_approvalsInPromisses[index] === APPROVAL_TYPES.ACCOUNTABILITY) {
          setAccountability(_data);
          _pending = _pending + _data.length;
          yield SettingsClient.set('ACCOUNTABILITY_PENDING', _data);
        } else if (_approvalsInPromisses[index] === APPROVAL_TYPES.FB60) {
          setFB60(_data);
          _pending = _pending + _data.length;
          yield SettingsClient.set('FB60_PENDING', _data);
        } else if (_approvalsInPromisses[index] === APPROVAL_TYPES.PAYMENT_PROPOSAL) {
          setPaymentProposal(_data);
          _pending = _pending + _data.length;
          yield SettingsClient.set('PAYMENT_PROPOSAL_PENDING', _data);
        } else if (_approvalsInPromisses[index] === APPROVAL_TYPES.PURCHASE_ORDER) {
          setPurchaseOrder(_data);
          _pending = _pending + _data.length;
          yield SettingsClient.set('PURCHASE_ORDER_PENDING', _data);
        }
      }
      setLoading(false);
      yield SettingsClient.set('MODULE_PENDING', _pending);
      yield SettingsClient.set('CENTRAL_ACTION_FETCH', false);
    }
  }), [props.extensions]);
  useEffect(() => {
    SettingsClient.boot().then(() => getData());
  }, [getData]);
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: "Central de Aprova\u00E7\u00F5es",
      skeleton: loading
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [loading ? jsxs(Fragment, {
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
          }), jsx(Ramen.XSkeleton, {
            size: "l",
            type: "image",
            width: "xl"
          })]
        }) : jsxs(Fragment, {
          children: [accountability.length > 0 && jsx(Ramen.XCard, {
            symbol: "cyclical-inventory-neutral",
            title: 'Prestação de Contas',
            count: accountability.length,
            onClick: () => props.history.push(`${props.location.pathname}/${APPROVAL_TYPES.ACCOUNTABILITY}`)
          }), purchaseRequisition.length > 0 && jsx(Ramen.XCard, {
            symbol: "customers-bag-neutral",
            title: 'Requisição de Compra',
            count: purchaseRequisition.length,
            onClick: () => props.history.push(`${props.location.pathname}/${APPROVAL_TYPES.PURCHASE_REQUISITION}`)
          }), fb60.length > 0 && jsx(Ramen.XCard, {
            symbol: "user-sales-neutral",
            title: 'Contas a Pagar (FB60)',
            count: fb60.length,
            onClick: () => props.history.push(`${props.location.pathname}/${APPROVAL_TYPES.FB60}`)
          }), purchaseOrder.length > 0 && jsx(Ramen.XCard, {
            symbol: "fit-stock-neutral",
            title: 'Pedido Fico',
            count: purchaseOrder.length,
            onClick: () => props.history.push(`${props.location.pathname}/${APPROVAL_TYPES.PURCHASE_ORDER}`)
          }), paymentProposal.length > 0 && jsx(Ramen.XCard, {
            symbol: "user-sales-neutral",
            title: 'Proposta de Pagamento',
            count: paymentProposal.length,
            onClick: () => props.history.push(`${props.location.pathname}/${APPROVAL_TYPES.PAYMENT_PROPOSAL}`)
          })]
        }), ((_a = props.extensions) === null || _a === void 0 ? void 0 : _a.children) && props.extensions.children(), jsx(Ramen.XBox, {
          padding: "s"
        })]
      }))
    })]
  });
}

const locale$2 = {
  // MENU TITLE
  PURCHASE_REQUISITION_MENU_TITLE: 'Requisição de Compra',
  ACCOUNTABILITY_MENU_TITLE: 'Prestação de Contas',
  FB60_MENU_TITLE: 'Contas a Pagar (FB60)',
  PURCHASE_ORDER_MENU_TITLE: 'Pedidos Fico',
  PAYMENT_PROPOSAL_MENU_TITLE: 'Proposta de Pagamento',
  // MENU TITLE SHORT
  PURCHASE_REQUISITION_MENU_TITLE_SHORT: 'Requisição',
  ACCOUNTABILITY_MENU_TITLE_SHORT: 'Prestação',
  FB60_MENU_TITLE_SHORT: 'Conta',
  PURCHASE_ORDER_MENU_TITLE_SHORT: 'Pedido',
  PAYMENT_PROPOSAL_MENU_TITLE_SHORT: 'Proposta',
  // LABEL
  LABEL_CREATED_AT: 'Criado em',
  LABEL_CREATED_BY: 'Criado por',
  LABEL_QUANTITY: 'Quantidade',
  LABEL_LAST_APPROVER: 'Último aprovador',
  LABEL_UNIT_VALUE: 'Valor unitário',
  LABEL_STORE: 'Loja',
  LABEL_SUPPLY: 'Fornecedor',
  LABEL_CCPEP: 'CC/PEP',
  LABEL_PAYMENT_COND: 'Prazo pag',
  LABEL_DELIVERY_DATE: 'Entrega',
  LABEL_DOC_EXERC: 'Doc./Exerc.',
  LABEL_EXPIRATION_DATE: 'Vencimento',
  // ACTIONS
  LABEL_APPROVE: 'Aprovar',
  LABEL_REJECT: 'Rejeitar',
  LABEL_GIVEBACK: 'Devolver',
  LABEL_DISCARD: 'Descartar',
  LABEL_CANCEL: 'Cancelar',
  LOADING: 'Carregando...',
  ERROR_MIME: 'Formato de arquivo inválido',
  ERROR_0_BYTE: 'Arquivo corrompido!',
  ERROR_OPEN_FILE: 'Ocorreu um erro ao abrir o arquivo',
  // PURCHASE REQUISITION
  QUESTION_MODAL_PR_APPROVE: 'Deseja aprovar esta requisição de compra?',
  QUESTION_MODAL_PR_REJECT: 'Deseja rejeitar esta requisição de compra?',
  // ACCOUNTABILITY
  QUESTION_MODAL_APPROVE: 'Deseja aprovar esta prestação de contas?',
  QUESTION_MODAL_REJECT: 'Deseja rejeitar esta prestação de contas?',
  QUESTION_MODAL_GIVEBACK: 'Deseja devolver esta prestação de contas?',
  // FB60
  QUESTION_MODAL_FB60_APPROVE: 'Deseja aprovar o documento no valor de {{s}}?',
  QUESTION_MODAL_FB60_REJECT: 'Deseja rejeitar o documento no valor de {{s}}?',
  // PURCHASE_ORDER
  QUESTION_MODAL_PURCHASE_ORDER_APPROVE: 'Deseja aprovar este pedido de compra fico?',
  QUESTION_MODAL_PURCHASE_ORDER_REJECT: 'Deseja descartar de Arcus este pedido de compra fico?',
  QUESTION_MODAL_PURCHASE_ORDER_TRASH: 'Deseja descartar de Arcus este pedido de compra fico?',
  // ANOTHER TEXTS
  LABEL_EXPANSION_OPENED: 'Ver menos',
  LABEL_EXPANSION_CLOSED: 'Ver mais',
  //
  //
  //
  MENU_TITLE: 'Central de aprovações',
  // card title
  RETAIL: 'Ordem',
  SALE: 'Ordem',
  FB60: 'Contas a Pagar (FB60)',
  PURCHASE_ORDER: 'Pedido',
  PAYMENT_PROPOSAL: 'Proposta',
  QUESTION_MODAL_PAYMENT_PROPOSAL_APPROVE: 'Deseja aprovar a proposta de pagamento no valor de {{s}}?',
  QUESTION_MODAL_PAYMENT_PROPOSAL_REJECT: 'Deseja descartar de Arcus esta proposta de pagamento?',
  QUESTION_MODAL_PAYMENT_PROPOSAL_TRASH: 'Deseja descartar de Arcus esta proposta de pagamento?',
  QUESTION_MODAL_RETAIL_APPROVE: 'Deseja aprovar esta ordem de compra?',
  QUESTION_MODAL_RETAIL_REJECT: 'Deseja rejeitar esta ordem de compra?',
  QUESTION_MODAL_SALE_APPROVE: 'Deseja aprovar esta ordem de venda?',
  QUESTION_MODAL_SALE_REJECT: 'Deseja rejeitar esta ordem de venda?',
  APPROVE_BUTTON_LABEL: 'Aprovar',
  REJECT_BUTTON_LABEL: 'Rejeitar',
  TRASH_BUTTON_LABEL: 'Descartar',
  GIVEBACK_BUTTON_LABEL: 'Devolver',
  APPROVE_DONE_MSG: 'Aprovado com sucesso',
  DISCARDTED_DONE_MSG: 'Descartado com sucesso',
  REJECT_DONE_MSG: 'Rejeitado com sucesso',
  GIVEBACK_DONE_MSG: 'Retorno com sucesso',
  START_DATE_LABEL: 'Início',
  END_DATE_LABEL: 'Fim',
  JUSTIFY_LABEL: 'Motivo',
  NOT_INFORM: 'Não informado',
  OBSERVATION_LABEL: 'Observações',
  PAYMENT_METHOD_LABEL: 'Forma de pagamento',
  BANK_COMPANY_LABEL: 'Banco empresa',
  DATE_TO_PAY: 'Data de pagamento',
  ACCOUNT_ID: 'Identificador conta',
  PAYMENT_ID: 'Identificador',
  PAYMENT_AMOUNT: 'Quant. pagamentos',
  QUANTITY: 'Quant.',
  QUANTITY_LABEL: 'Qtd Itens',
  DATE_REM_LABEL: 'Data Rem',
  CREATED_AT_LABEL: 'Criado',
  COMPANY_LABEL: 'Empresa',
  TOTAL_SALE_LABEL: 'T. Venda',
  TOTAL_DISCOUNT_LABEL: 'T. Dcto.',
  PERCENT_DISCOUNT_LABEL: '% Dcto.',
  DETAIL_TOTAL_SALE: 'Total venda',
  DETAIL_TOTAL_DISCOUNT: 'Total desconto',
  DETAIL_PERCENT_DISCOUNT: '% Desconto',
  DETAIL_PAYMENT_CONDITION: 'Cond. Pagto',
  DETAIL_DDE_ORDER: 'DDE Pedido',
  DETAIL_DDE_YEARLY: 'DDE Anual',
  DETAIL_QTD: 'Qtd',
  DETAIL_VALUE: 'Valor',
  DETAIL_TOTAL: 'Total',
  DETAIL_TOTAL_WITH_DISCOUNT: 'Total c/Desc',
  DETAIL_QUANTITY_ITEMS: 'Quant. itens',
  DETAIL_PAYMENT_COND: 'Prazo pagamento',
  DETAIL_UNIT_VALUE_ITEM: 'Valor Unit.',
  DETAIL_CCPEP: 'CC/PEP',
  SEARCH_PLACEHOLDER: 'Buscar',
  DOWNLOADING: 'Baixando arquivo...',
  ERROR_DOWNLOADING: 'Erro ao baixar arquivo',
  ERROR_FORMAT: 'Formato de arquivo inválido',
  ALL_IN_ORDER: 'Você tem tudo em ordem!',
  ERROR_REQUEST: 'Erro ao verifica aprovações pendentes em FICO',
  ERROR_REQUEST_SUMARY: 'Erro ao verificar aprovações pendentes',
  ERROR_REQUEST_SALES: 'Erro ao verificar vendas atacado pendentes',
  ERROR_REQUEST_RETAIL: 'Erro ao verificar pedidos retails pendentes',
  ERROR_REQUEST_ACCOUNTABILITY: 'Erro ao verificar prestações de contas pendentes',
  ERROR_REQUEST_RC: 'Erro ao verificar requisições de compra pendentes',
  ERROR_REQUEST_FB60: 'Erro ao verificar contas a pagar (FB60) pendentes',
  ERROR_REQUEST_PURCHASE_ORDER: 'Erro ao verificar pedidos de compra pendentes',
  ERROR_REQUEST_PURCHASE_ORDER_DETAILS: 'Erro ao verificar os detalhes do pedido de compra',
  ERROR_REQUEST_PAYMENT_PROPOSAL: 'Erro ao verificar propostas de pagamento pendentes',
  ERROR_REQUEST_SALES_ACTION: 'Erro ao efetuar a ação para a ordem de venda',
  ERROR_PERMISSION_SALES: 'Você não possui permissão para aprovar uma ordem de venda',
  ERROR_PERMISSION_RETAIL: 'Você não possui permissão para aprovar uma ordem de compra',
  ERROR_REQUEST_ACCOUNTABILITY_FILES: 'Erro ao buscar a lista de anexos da prestação de contas',
  ERROR_REQUEST_RC_FILES: 'Erro ao buscar a lista de anexos da requisição de compra',
  ERROR_REQUEST_ACCOUNTABILITY_ACTION: 'Erro ao efetuar a ação para a prestação de contas',
  ERROR_REQUEST_FB60_ACTION: 'Erro ao efetuar a ação para a conta a pagar (FB60)',
  ERROR_REQUEST_RETAIL_ACTION: 'Erro ao efetuar a ação para o ordem de compra',
  ERROR_REQUEST_PURCHASE_ACTION: 'Erro ao efetuar a ação para o pedido de compra',
  ERROR_REQUEST_PAYMENTPROPOSAL_ACTION: 'Erro ao efetuar a ação para a proposta de pagamento',
  ERROR_REQUEST_RC_ACTION: 'Erro ao efetuar a ação para a requisição de compra',
  LOADING_ACCOUNTABILITY: 'Carregando prestação de contas'
};

const locale$1 = {
  SALE_MENU_TITLE: 'Sales',
  RETAIL_ORDER_MENU_TITLE: 'Retail Order',
  RC_ORDER_MENU_TITLE: 'Purchase Requisition',
  ACCOUNTABILITY_MENU_TITLE: 'Accountability',
  MENU_TITLE: 'Approval Center',
  // card title
  PROVISION: 'Provision',
  RETAIL: 'Order',
  SALE: 'Order',
  RC: 'Requisition',
  FB60: 'FB60',
  QUESTION_MODAL_APPROVE: 'Do you want to approve this rendering of accounts?',
  QUESTION_MODAL_REJECT: 'Do you want to reject this rendering of accounts?',
  QUESTION_MODAL_GIVEBACK: 'Do you want to return this rendering of accounts?',
  QUESTION_MODAL_RC_APPROVE: 'Do you want to approve this purchase requisition?',
  QUESTION_MODAL_RC_REJECT: 'Do you want to reject this purchase requisition?',
  QUESTION_MODAL_RETAIL_APPROVE: 'Do you want to approve this purchase order?',
  QUESTION_MODAL_RETAIL_REJECT: 'Do you want to reject this purchase order?',
  QUESTION_MODAL_SALE_APPROVE: 'Do you want to approve this sales order?',
  QUESTION_MODAL_SALE_REJECT: 'Do you want to reject this sales order?',
  APPROVE_BUTTON_LABEL: 'Approve',
  REJECT_BUTTON_LABEL: 'Reject',
  GIVEBACK_BUTTON_LABEL: 'Give Back',
  APPROVE_DONE_MSG: 'Successfully approved',
  REJECT_DONE_MSG: 'Successfully rejected',
  GIVEBACK_DONE_MSG: 'Successfully returned',
  START_DATE_LABEL: 'Start',
  END_DATE_LABEL: 'End',
  JUSTIFY_LABEL: 'Justify',
  NOT_INFORM: 'Not informed',
  OBSERVATION_LABEL: 'Observation',
  STORE_LABEL: 'Store',
  QUANTITY_LABEL: 'Qty Itens',
  DATE_REM_LABEL: 'Date Rem',
  CREATED_AT_LABEL: 'Created',
  TOTAL_SALE_LABEL: 'T. Sale',
  TOTAL_DISCOUNT_LABEL: 'T. Disc.',
  PERCENT_DISCOUNT_LABEL: '% Disc.',
  DETAIL_CREATED_AT: 'Created at',
  DETAIL_CREATED_BY: 'Created by',
  DETAIL_TOTAL_SALE: 'Total sale',
  DETAIL_TOTAL_DISCOUNT: 'Total discount',
  DETAIL_PERCENT_DISCOUNT: '% Discount',
  DETAIL_PAYMENT_CONDITION: 'Payterms',
  DETAIL_DDE_ORDER: 'DDE Order',
  DETAIL_DDE_YEARLY: 'DDE Yearly',
  DETAIL_QTD: 'Qty',
  DETAIL_VALUE: 'Value',
  DETAIL_TOTAL: 'Total',
  DETAIL_TOTAL_WITH_DISCOUNT: 'Total c/Disc',
  DETAIL_LAST_APPROVER: 'Last approver',
  DETAIL_QUANTITY: 'Quantity',
  DETAIL_UNIT_VALUE: 'Unit value',
  DETAIL_CCPEP: 'CC/PEP',
  DETAIL_SUPPLY: 'Supplier',
  SEARCH_PLACEHOLDER: 'Search',
  DOWNLOADING: 'Downloading file...',
  ERROR_DOWNLOADING: 'Error downloading file',
  ERROR_FORMAT: 'Invalid file format',
  ALL_IN_ORDER: 'You have everything in order!',
  ERROR_REQUEST_SUMARY: 'Error when checking pending approvals',
  ERROR_REQUEST_SALES: 'Error when fetching pending sales',
  ERROR_REQUEST_RC: 'Error when verifying purchase requisition',
  ERROR_REQUEST_SALES_ACTION: 'Error when executing the action for the sales order',
  ERROR_PERMISSION_SALES: 'You do not have permission to approve a sales order',
  ERROR_PERMISSION_RETAIL: 'You do not have permission to approve a purchase order',
  ERROR_REQUEST_ACCOUNTABILITY: 'Error when fetching pending accountabilities',
  ERROR_REQUEST_ACCOUNTABILITY_FILES: 'Error when fetching the list of accountability attachments',
  ERROR_REQUEST_RC_FILES: 'Error fetching list of purchase requisition attachments',
  ERROR_REQUEST_ACCOUNTABILITY_ACTION: 'Error when performing the action for the rendering of accounts',
  ERROR_REQUEST_RETAIL: 'Error when fetching pending purchase orders',
  ERROR_REQUEST_RETAIL_ACTION: 'Error when performing the action for the purchase order',
  ERROR_REQUEST_RC_ACTION: 'Error performing action for purchase requisition',
  LOADING_ACCOUNTABILITY: 'Loading accountability approvals'
};

const locale = {
  SALE_MENU_TITLE: 'Ventas',
  RETAIL_ORDER_MENU_TITLE: 'Pedidos al por menor',
  RC_ORDER_MENU_TITLE: 'Requisición de compra',
  ACCOUNTABILITY_MENU_TITLE: 'Prestación de cuentas',
  MENU_TITLE: 'Centro de aprobación',
  // card title
  PROVISION: 'Prestación',
  RETAIL: 'Orden',
  SALE: 'Orden',
  RC: 'Requisición',
  FB60: 'FB60',
  QUESTION_MODAL_APPROVE: '¿Quiere aprobar esta prestación de cuentas?',
  QUESTION_MODAL_REJECT: '¿Desea rechazar esta prestación de cuentas?',
  QUESTION_MODAL_GIVEBACK: '¿Quieres devolver esta prestación de cuentas?',
  QUESTION_MODAL_RC_APPROVE: '¿Quieres aprobar esta solicitud de compra?',
  QUESTION_MODAL_RC_REJECT: '¿Quiere devolver esta solicitud de compra?',
  QUESTION_MODAL_RETAIL_APPROVE: '¿Desea aprobar esta orden de compra?',
  QUESTION_MODAL_RETAIL_REJECT: '¿Desea rechazar esta orden de compra?',
  QUESTION_MODAL_SALE_APPROVE: '¿Desea aprobar este pedido de venta?',
  QUESTION_MODAL_SALE_REJECT: '¿Desea rechazar este pedido de venta?',
  APPROVE_BUTTON_LABEL: 'Aprobar',
  REJECT_BUTTON_LABEL: 'Rechazar',
  GIVEBACK_BUTTON_LABEL: 'Devolver',
  APPROVE_DONE_MSG: 'Aprobado con éxito',
  REJECT_DONE_MSG: 'Rechazado con éxito',
  GIVEBACK_DONE_MSG: 'Devuelto con éxito',
  START_DATE_LABEL: 'Inicio',
  END_DATE_LABEL: 'Fin',
  JUSTIFY_LABEL: 'Razón',
  NOT_INFORM: 'No informado',
  OBSERVATION_LABEL: 'Comentários',
  STORE_LABEL: 'Tienda',
  QUANTITY_LABEL: 'Cant Artículos',
  DATE_REM_LABEL: 'Día Rem',
  CREATED_AT_LABEL: 'Creado',
  TOTAL_SALE_LABEL: 'T. Venta',
  TOTAL_DISCOUNT_LABEL: 'T. Dto.',
  PERCENT_DISCOUNT_LABEL: '% Dto.',
  DETAIL_CREATED_AT: 'Creado en',
  DETAIL_CREATED_BY: 'Creado por',
  DETAIL_TOTAL_SALE: 'Total venta',
  DETAIL_TOTAL_DISCOUNT: 'Total descuento',
  DETAIL_PERCENT_DISCOUNT: '% Descuento',
  DETAIL_PAYMENT_CONDITION: 'Cond. de Pago',
  DETAIL_DDE_ORDER: 'DDE Pedido',
  DETAIL_DDE_YEARLY: 'DDE Anual',
  DETAIL_QTD: 'Cant.',
  DETAIL_VALUE: 'Valor',
  DETAIL_TOTAL: 'Total',
  DETAIL_TOTAL_WITH_DISCOUNT: 'Total c/Desc',
  DETAIL_LAST_APPROVER: 'Último aprobador',
  DETAIL_QUANTITY: 'Cantidad',
  DETAIL_UNIT_VALUE: 'Valor Unitario',
  DETAIL_CCPEP: 'CC/PEP',
  DETAIL_SUPPLY: 'Proveedor',
  SEARCH_PLACEHOLDER: 'Búsqueda',
  DOWNLOADING: 'Descargando archivo...',
  ERROR_DOWNLOADING: 'Error al descargar el archivo',
  ERROR_FORMAT: 'Formato de archivo inválido',
  ALL_IN_ORDER: '¡Tienes todo en orden!',
  ERROR_REQUEST_SUMARY: 'Error al verificar las aprobaciones pendientes',
  ERROR_REQUEST_SALES: 'Error al buscar orden de ventas pendientes',
  ERROR_REQUEST_RC: 'Error al verificar la solicitud de compra',
  ERROR_REQUEST_SALES_ACTION: 'Error al ejecutar la acción para el orden de venta',
  ERROR_PERMISSION_SALES: 'No tiene permiso para aprobar un pedido de ventas',
  ERROR_PERMISSION_RETAIL: 'No tiene permiso para aprobar una orden de compra',
  ERROR_REQUEST_ACCOUNTABILITY: 'Error al buscar prestación de cuentas pendientes',
  ERROR_REQUEST_ACCOUNTABILITY_FILES: 'Error al obtener la lista de archivos adjuntos de la prestación de cuentas',
  ERROR_REQUEST_RC_FILES: 'Error al obtener la lista de archivos adjuntos de solicitud de compra',
  ERROR_REQUEST_ACCOUNTABILITY_ACTION: 'Error al realizar la acción para la prestación de cuentas',
  ERROR_REQUEST_RETAIL: 'Error al obtener órdenes de compra pendientes',
  ERROR_REQUEST_RETAIL_ACTION: 'Error al realizar la acción para la orden de compra',
  ERROR_REQUEST_RC_ACTION: 'Error al realizar la acción para la solicitud de compra',
  LOADING_ACCOUNTABILITY: 'Cargando prestación de cuentas'
};

var locales = {
  br: locale$2,
  en: locale$1,
  es: locale
};

const loading = (isActive, text = 'Cargando...') => {
  if (isActive) {
    Ramen.Api.loading.show({
      text: text
    });
  } else {
    Ramen.Api.loading.hide();
  }
};
const snackbar = (type, text, placement = 'top', duration = 5) => {
  Ramen.Api.snackbar.open({
    text: text,
    placement: placement,
    type: type,
    duration: duration
  });
};
const currencyApproval = (value, monetaryCurrency, localeDate) => {
  const format = new Intl.NumberFormat(localeDate, {
    style: 'currency',
    currency: monetaryCurrency
  });
  return format.format(value);
};
const convertToYY = dateString => {
  dateString = dateString.replace(/-/gi, '/');
  const splitDt = dateString.split('/');
  return `${splitDt[0]}/${splitDt[1]}/${splitDt[2]}`;
};
const formatDate = (usDate, localeDate) => {
  const date = new Date(usDate).toLocaleDateString(localeDate, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return date ? convertToYY(date) : '';
};
const getMime = format => {
  if (format === 'pdf') {
    return 'application/pdf';
  } else if (format === 'jpg' || format === 'jpeg') {
    return 'image/jpeg';
  } else if (format === 'png') {
    return 'image/png';
  } else if (format === 'bmp') {
    return 'image/bmp';
  } else if (format === 'xml') {
    return 'application/xml';
  } else if (format === 'xls') {
    return 'application/vnd.ms-excel';
  } else if (format === 'xlsx') {
    return 'application/vnd.ms-excel';
  } else if (format === 'doc') {
    return 'application/msword';
  } else if (format === 'docx') {
    return 'application/msword';
  } else if (format === 'ppt') {
    return 'application/vnd.ms-powerpoint';
  } else if (format === 'pptx') {
    return 'application/vnd.ms-powerpoint';
  } else if (format === 'zip') {
    return 'application/zip';
  }
  return '';
};

function PurchaseRequisitionCard(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approvals, setApprovals] = useState([]);
  const [approval, setApproval] = useState();
  const [modal, setModal] = useState();
  useEffect(() => {
    SettingsClient.boot().then(() => setApprovals(SettingsClient.get('PURCHASE_REQUISITION_PENDING', [])));
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: localize('PURCHASE_REQUISITION_MENU_TITLE', '')
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [approvals.map((a, i) => {
          const orderValue = currencyApproval(a.orderValue, a.orderValueCurrency, localeDate);
          const createdAt = formatDate(a.createdAt, localeDate);
          return jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "shadow",
            onClick: () => props.history.push(`${props.location.pathname}/detail`, a)
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              gap: "m"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center"
              }, {
                children: [jsx(Ramen.XTag, {
                  text: `${localize('PURCHASE_REQUISITION_MENU_TITLE_SHORT', '')} ∙ ${a.orderId}`
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  verticalAlign: "center",
                  gap: "xs"
                }, {
                  children: [jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "check-bold",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'approve'
                      });
                    }
                  }), jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "close-outline",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'reject'
                      });
                    }
                  })]
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'flex'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 11
                  }, {
                    children: a.clientDescription
                  }))
                })), jsx(Ramen.XTag, {
                  state: "dark",
                  text: orderValue
                })]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_CREATED_AT', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: createdAt
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'half'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    fontSize: 11,
                    colorThone: "medium",
                    textOverflow: "break-word"
                  }, {
                    children: localize('LABEL_CREATED_BY', '')
                  }))
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: `${a.createdByName ? a.createdByName : a.createdBy}`
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_QUANTITY', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: a.orderProductsQuantity
                }))]
              })), jsx(Ramen.XBox, {})]
            }))
          }), i);
        }), jsx(Ramen.XBox, {
          padding: "s"
        })]
      }))
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'x-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_REJECT', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      title: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_PR_APPROVE', '') : localize('QUESTION_MODAL_PR_REJECT', '')
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium"
      }, {
        children: `${localize('PURCHASE_REQUISITION_MENU_TITLE_SHORT', '')} ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
      }))
    }))]
  });
}

var $$5 = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$9 = fails$w;
var getBuiltIn = getBuiltIn$8;
var isCallable$2 = isCallable$q;
var speciesConstructor$1 = speciesConstructor$3;
var promiseResolve = promiseResolve$2;
var defineBuiltIn$4 = defineBuiltIn$d;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails$9(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$$5({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor$1(this, getBuiltIn('Promise'));
    var isFunction = isCallable$2(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (isCallable$2(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn$4(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var defineBuiltIn$3 = defineBuiltIn$d;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) defineBuiltIn$3(target, key, src[key], options);
  return target;
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$7;
var toLength$3 = toLength$7;

var $RangeError$3 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$2 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$2(it);
  var length = toLength$3(number);
  if (number !== length) throw $RangeError$3('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$3 = Array;
var abs = Math.abs;
var pow$1 = Math.pow;
var floor$4 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array$3(bytes);
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
    exponent = floor$4(log(number) / LN2);
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
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$8;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$3(this);
  var length = lengthOfArrayLike$5(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$2(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$6;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$2(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$4 = lengthOfArrayLike$8;
var createProperty$1 = createProperty$2;

var $Array$2 = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$4(O);
  var k = toAbsoluteIndex$1(start, length);
  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
  var result = $Array$2(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};

var global$a = global$v;
var uncurryThis$8 = functionUncurryThis;
var DESCRIPTORS$5 = descriptors;
var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$6;
var defineBuiltIns$1 = defineBuiltIns$2;
var fails$8 = fails$w;
var anInstance$3 = anInstance$5;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$7;
var toLength$2 = toLength$7;
var toIndex$1 = toIndex$2;
var IEEE754 = ieee754;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arrayFill = arrayFill$1;
var arraySlice$3 = arraySliceSimple;
var setToStringTag$2 = setToStringTag$6;
var InternalStateModule$5 = internalState;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$5.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule$5.getterFor(DATA_VIEW);
var setInternalState$4 = InternalStateModule$5.set;
var NativeArrayBuffer = global$a[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$a[DATA_VIEW];
var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$1 = Object.prototype;
var Array$1 = global$a.Array;
var RangeError$3 = global$a.RangeError;
var fill = uncurryThis$8(arrayFill);
var reverse = uncurryThis$8([].reverse);

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
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$1(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice$3(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$1(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER$1) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance$3(this, ArrayBufferPrototype$1);
    var byteLength = toIndex$1(length);
    setInternalState$4(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$5) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$3(this, DataViewPrototype$1);
    anInstance$3(buffer, ArrayBufferPrototype$1);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$1(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$2(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
    setInternalState$4(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$5) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$1 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$5) {
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
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails$8(function () {
    NativeArrayBuffer(1);
  }) || !fails$8(function () {
    new NativeArrayBuffer(-1);
  }) || fails$8(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$3(this, ArrayBufferPrototype$1);
      return new NativeArrayBuffer(toIndex$1(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

    for (var keys = getOwnPropertyNames$1(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty$2($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype$1.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$2(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$2 && getPrototypeOf$1(DataViewPrototype$1) !== ObjectPrototype$1) {
    setPrototypeOf$2(DataViewPrototype$1, ObjectPrototype$1);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis$8(DataViewPrototype$1.setInt8);
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

setToStringTag$2($ArrayBuffer, ARRAY_BUFFER);
setToStringTag$2($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var $$4 = _export;
var uncurryThis$7 = functionUncurryThisClause;
var fails$7 = fails$w;
var ArrayBufferModule$1 = arrayBuffer;
var anObject$2 = anObject$i;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toLength$1 = toLength$7;
var speciesConstructor = speciesConstructor$3;

var ArrayBuffer$3 = ArrayBufferModule$1.ArrayBuffer;
var DataView$2 = ArrayBufferModule$1.DataView;
var DataViewPrototype = DataView$2.prototype;
var nativeArrayBufferSlice = uncurryThis$7(ArrayBuffer$3.prototype.slice);
var getUint8 = uncurryThis$7(DataViewPrototype.getUint8);
var setUint8 = uncurryThis$7(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails$7(function () {
  return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$4({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject$2(this), start); // FF fix
    }
    var length = anObject$2(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer$3))(toLength$1(fin - first));
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
var DESCRIPTORS$4 = descriptors;
var global$9 = global$v;
var isCallable$1 = isCallable$q;
var isObject$4 = isObject$f;
var hasOwn$3 = hasOwnProperty_1;
var classof$5 = classof$c;
var tryToString = tryToString$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
var defineBuiltIn$2 = defineBuiltIn$d;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$6;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var wellKnownSymbol$3 = wellKnownSymbol$n;
var uid = uid$3;
var InternalStateModule$4 = internalState;

var enforceInternalState$1 = InternalStateModule$4.enforce;
var getInternalState$2 = InternalStateModule$4.get;
var Int8Array$4 = global$9.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
var Uint8ClampedArray$1 = global$9.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype = Object.prototype;
var TypeError$3 = global$9.TypeError;

var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$5(global$9.opera) !== 'Opera';
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
  var klass = classof$5(it);
  return klass === 'DataView'
    || hasOwn$3(TypedArrayConstructorsList, klass)
    || hasOwn$3(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$4(proto)) return;
  var state = getInternalState$2(proto);
  return (state && hasOwn$3(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$4(it)) return false;
  var klass = classof$5(it);
  return hasOwn$3(TypedArrayConstructorsList, klass)
    || hasOwn$3(BigIntArrayConstructorsList, klass);
};

var aTypedArray$4 = function (it) {
  if (isTypedArray$1(it)) return it;
  throw TypeError$3('Target is not a typed array');
};

var aTypedArrayConstructor$2 = function (C) {
  if (isCallable$1(C) && (!setPrototypeOf$1 || isPrototypeOf$1(TypedArray$1, C))) return C;
  throw TypeError$3(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$4 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$4) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$9[ARRAY];
    if (TypedArrayConstructor && hasOwn$3(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$1[KEY] || forced) {
    defineBuiltIn$2(TypedArrayPrototype$1, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$4) return;
  if (setPrototypeOf$1) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$9[ARRAY];
      if (TypedArrayConstructor && hasOwn$3(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$2(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$9[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$2(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$9[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$9[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$1(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw TypeError$3('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$9[NAME]) setPrototypeOf$1(global$9[NAME], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype) {
  TypedArrayPrototype$1 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$9[NAME]) setPrototypeOf$1(global$9[NAME].prototype, TypedArrayPrototype$1);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
}

if (DESCRIPTORS$4 && !hasOwn$3(TypedArrayPrototype$1, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$3(TypedArrayPrototype$1, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$4(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global$9[NAME]) {
    createNonEnumerableProperty$1(global$9[NAME], TYPED_ARRAY_TAG$1, NAME);
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

var global$8 = global$v;
var fails$6 = fails$w;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = global$8.ArrayBuffer;
var Int8Array$3 = global$8.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$6(function () {
  Int8Array$3(1);
}) || !fails$6(function () {
  new Int8Array$3(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$3();
  new Int8Array$3(null);
  new Int8Array$3(1.5);
  new Int8Array$3(iterable);
}, true) || fails$6(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var isObject$3 = isObject$f;

var floor$3 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$3(it) && isFinite(it) && floor$3(it) === it;
};

var toIntegerOrInfinity = toIntegerOrInfinity$7;

var $RangeError$2 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw $RangeError$2("The argument can't be less than 0");
  return result;
};

var toPositiveInteger = toPositiveInteger$1;

var $RangeError$1 = RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError$1('Wrong offset');
  return offset;
};

var classof$4 = classof$c;

var isBigIntArray$1 = function (it) {
  var klass = classof$4(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$2 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$4 = functionBindContext;
var call$5 = functionCall;
var aConstructor = aConstructor$2;
var toObject$2 = toObject$8;
var lengthOfArrayLike$3 = lengthOfArrayLike$8;
var getIterator$2 = getIterator$4;
var getIteratorMethod$2 = getIteratorMethod$5;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
var isBigIntArray = isBigIntArray$1;
var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$1 = toBigInt$2;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$2(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$2(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod$1(iteratorMethod)) {
    iterator = getIterator$2(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$5(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$4(mapfn, arguments[2]);
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

var classof$3 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$3(argument) == 'Array';
};

var isArray = isArray$1;
var isConstructor$1 = isConstructor$3;
var isObject$2 = isObject$f;
var wellKnownSymbol$2 = wellKnownSymbol$n;

var SPECIES = wellKnownSymbol$2('species');
var $Array$1 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$1(C) && (C === $Array$1 || isArray(C.prototype))) C = undefined;
    else if (isObject$2(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$3 = functionBindContext;
var uncurryThis$6 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$1 = toObject$8;
var lengthOfArrayLike$2 = lengthOfArrayLike$8;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push$3 = uncurryThis$6([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
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
    var boundFunction = bind$3(callbackfn, that);
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
          case 2: push$3(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$3(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var $$3 = _export;
var global$7 = global$v;
var call$4 = functionCall;
var DESCRIPTORS$3 = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$4 = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$2 = anInstance$5;
var createPropertyDescriptor$1 = createPropertyDescriptor$6;
var createNonEnumerableProperty = createNonEnumerableProperty$9;
var isIntegralNumber = isIntegralNumber$1;
var toLength = toLength$7;
var toIndex = toIndex$2;
var toOffset$1 = toOffset$2;
var toPropertyKey = toPropertyKey$4;
var hasOwn$2 = hasOwnProperty_1;
var classof$2 = classof$c;
var isObject$1 = isObject$f;
var isSymbol = isSymbol$3;
var create$1 = objectCreate;
var isPrototypeOf = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies = setSpecies$3;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$6;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var InternalStateModule$3 = internalState;
var inheritIfRequired = inheritIfRequired$2;

var getInternalState$1 = InternalStateModule$3.get;
var setInternalState$3 = InternalStateModule$3.set;
var enforceInternalState = InternalStateModule$3.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError$2 = global$7.RangeError;
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
    ? createPropertyDescriptor$1(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$1(descriptor)
    && hasOwn$2(descriptor, 'value')
    && !hasOwn$2(descriptor, 'get')
    && !hasOwn$2(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$2(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$2(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$3) {
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
    var NativeTypedArrayConstructor = global$7[CONSTRUCTOR_NAME];
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
        anInstance$2(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$1(data)) {
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
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call$4(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState$3(that, {
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
        anInstance$2(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject$1(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call$4(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$3({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
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
var classof$1 = classof$c;
var call$3 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var fails$5 = fails$w;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var slice = uncurryThis$5(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails$5(function () {
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
  return call$3($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var global$6 = global$v;
var call$2 = functionCall;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var lengthOfArrayLike$1 = lengthOfArrayLike$8;
var toOffset = toOffset$2;
var toIndexedObject = toObject$8;
var fails$4 = fails$w;

var RangeError$1 = global$6.RangeError;
var Int8Array$2 = global$6.Int8Array;
var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$4(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$2($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$2.NATIVE_ARRAY_BUFFER_VIEWS && fails$4(function () {
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
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$2($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$1(src);
  var index = 0;
  if (len + offset > length) throw RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var arraySlice$2 = arraySliceSimple;

var floor$2 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$2(length / 2);
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

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var global$5 = global$v;
var uncurryThis$4 = functionUncurryThisClause;
var fails$3 = fails$w;
var aCallable = aCallable$9;
var internalSort = arraySort$1;
var ArrayBufferViewCore$1 = arrayBufferViewCore;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var Uint16Array = global$5.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$4(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$3(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails$3(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails$3(function () {
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

var global$4 = global$v;
var apply = functionApply;
var ArrayBufferViewCore = arrayBufferViewCore;
var fails$2 = fails$w;
var arraySlice$1 = arraySlice$5;

var Int8Array$1 = global$4.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$2(function () {
  $toLocaleString.call(new Int8Array$1(1));
});

var FORCED$1 = fails$2(function () {
  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
}) || !fails$2(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice$1(aTypedArray(this)) : aTypedArray(this),
    arraySlice$1(arguments)
  );
}, FORCED$1);

var charAt$2 = stringMultibyte.charAt;
var toString$1 = toString$9;
var InternalStateModule$2 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString$1(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt$2(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

var fails$1 = fails$w;
var wellKnownSymbol$1 = wellKnownSymbol$n;
var DESCRIPTORS$2 = descriptors;
var IS_PURE = isPure;

var ITERATOR$2 = wellKnownSymbol$1('iterator');

var urlConstructorDetection = !fails$1(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var searchParams2 = new URLSearchParams('a=1&a=2');
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  searchParams2['delete']('a', 2);
  return (IS_PURE && (!url.toJSON || !searchParams2.has('a', 1) || searchParams2.has('a', 2)))
    || (!searchParams.size && (IS_PURE || !DESCRIPTORS$2))
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$2]
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

var anObject$1 = anObject$i;
var iteratorClose = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var bind$2 = functionBindContext;
var call$1 = functionCall;
var toObject = toObject$8;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$3;
var isConstructor = isConstructor$3;
var lengthOfArrayLike = lengthOfArrayLike$8;
var createProperty = createProperty$2;
var getIterator$1 = getIterator$4;
var getIteratorMethod$1 = getIteratorMethod$5;

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$1(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call$1(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis$3 = functionUncurryThis;

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError = RangeError;
var exec$2 = uncurryThis$3(regexSeparators.exec);
var floor$1 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis$3(''.charCodeAt);
var join$2 = uncurryThis$3([].join);
var push$2 = uncurryThis$3([].push);
var replace$2 = uncurryThis$3(''.replace);
var split$2 = uncurryThis$3(''.split);
var toLowerCase$1 = uncurryThis$3(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$2(output, value);
        counter--;
      }
    } else {
      push$2(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
  delta += floor$1(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$1(delta / baseMinusTMin);
    k += base;
  }
  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$2(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$2(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
      throw $RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$1(qMinusT / baseMinusT);
          k += base;
        }

        push$2(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join$2(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$2(encoded, exec$2(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join$2(encoded, '.');
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$2 = _export;
var global$3 = global$v;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var USE_NATIVE_URL$1 = urlConstructorDetection;
var defineBuiltIn$1 = defineBuiltIn$d;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$6;
var defineBuiltIns = defineBuiltIns$2;
var setToStringTag$1 = setToStringTag$6;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$5;
var isCallable = isCallable$q;
var hasOwn$1 = hasOwnProperty_1;
var bind$1 = functionBindContext;
var classof = classof$c;
var anObject = anObject$i;
var isObject = isObject$f;
var $toString$1 = toString$9;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$6;
var getIterator = getIterator$4;
var getIteratorMethod = getIteratorMethod$5;
var validateArgumentsLength$1 = validateArgumentsLength$3;
var wellKnownSymbol = wellKnownSymbol$n;
var arraySort = arraySort$1;

var ITERATOR$1 = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$1) return global$3[name];
  var descriptor = getOwnPropertyDescriptor(global$3, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$3.RegExp;
var TypeError$2 = global$3.TypeError;
var decodeURIComponent = global$3.decodeURIComponent;
var encodeURIComponent$1 = global$3.encodeURIComponent;
var charAt$1 = uncurryThis$2(''.charAt);
var join$1 = uncurryThis$2([].join);
var push$1 = uncurryThis$2([].push);
var replace$1 = uncurryThis$2(''.replace);
var shift$1 = uncurryThis$2([].shift);
var splice = uncurryThis$2([].splice);
var split$1 = uncurryThis$2(''.split);
var stringSlice$1 = uncurryThis$2(''.slice);

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
  return replace$1(encodeURIComponent$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
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
    else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
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
        ) throw TypeError$2('Expected sequence with length 2');
        push$1(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
      push$1(this.entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
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
    } return join$1(result, '&');
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
  if (!DESCRIPTORS$1) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$1(arguments.length, 2);
    push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    if (!DESCRIPTORS$1) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength$1(arguments.length, 1);
    var entries = state.entries;
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
        if (value !== undefined) break;
      } else index++;
    }
    if (!DESCRIPTORS$1) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$1(arguments.length, 1);
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
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$1(arguments.length, 1);
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
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength$1(arguments.length, 1);
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
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
    validateArgumentsLength$1(arguments.length, 1);
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
    if (!DESCRIPTORS$1) this.size = entries.length;
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
    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
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
defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR$1, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
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

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$2({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
  var headersHas = uncurryThis$2(HeadersPrototype.has);
  var headersSet = uncurryThis$2(HeadersPrototype.set);

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
          body: createPropertyDescriptor(0, $toString$1(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $$2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$1 = _export;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var global$2 = global$v;
var bind = functionBindContext;
var uncurryThis$1 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$d;
var defineBuiltInAccessor = defineBuiltInAccessor$6;
var anInstance = anInstance$5;
var hasOwn = hasOwnProperty_1;
var assign = objectAssign;
var arrayFrom = arrayFrom$1;
var arraySlice = arraySliceSimple;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var $toString = toString$9;
var setToStringTag = setToStringTag$6;
var validateArgumentsLength = validateArgumentsLength$3;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global$2.URL;
var TypeError$1 = global$2.TypeError;
var parseInt$1 = global$2.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis$1(''.charAt);
var exec$1 = uncurryThis$1(/./.exec);
var join = uncurryThis$1([].join);
var numberToString = uncurryThis$1(1.0.toString);
var pop = uncurryThis$1([].pop);
var push = uncurryThis$1([].push);
var replace = uncurryThis$1(''.replace);
var shift = uncurryThis$1([].shift);
var split = uncurryThis$1(''.split);
var stringSlice = uncurryThis$1(''.slice);
var toLowerCase = uncurryThis$1(''.toLowerCase);
var unshift = uncurryThis$1([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec$1(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec$1(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt$1(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec$1(HEX, chr())) {
      value = value * 16 + parseInt$1(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec$1(DIGIT, chr())) return;
        while (exec$1(DIGIT, chr())) {
          number = parseInt$1(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec$1(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError$1(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError$1(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec$1(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec$1(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec$1(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt$1(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec$1(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec$1(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError$1(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$$1({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});

function PurchaseRequisitionDetail(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approval, setApproval] = useState();
  const [fileList, setFileList] = useState([]);
  const [modal, setModal] = useState();
  const [loadingFiles, setLoadingFiles] = useState(false);
  useEffect(() => {
    var _a, _b;
    const _state = (_b = (_a = props.history) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.state;
    setApproval(_state);
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  const orderValue = useMemo(() => {
    if (approval) {
      return currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate);
    }
    return '';
  }, [approval]);
  const createdAt = useMemo(() => {
    if (approval) {
      return formatDate(approval.createdAt, localeDate);
    }
    return '';
  }, [approval]);
  // get file list
  useEffect(() => {
    var _a, _b, _c, _d, _e;
    if (approval) {
      setLoadingFiles(true);
      approvalAPI.fico.setCountryCode(country);
      approvalAPI.fico.setBaseUrl((_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.approvalFicoApi) !== null && _c !== void 0 ? _c : '');
      approvalAPI.fico.setApiKey((_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.approvalApiKey) !== null && _e !== void 0 ? _e : '');
      approvalAPI.fico.getPurchaseRequisitionFiles(approval.orderId).then(f => {
        setFileList(f);
      }).finally(() => setLoadingFiles(false));
    }
  }, [approval]);
  // download archive
  const handleDownloadArchive = file => __awaiter(this, void 0, void 0, function* () {
    const mimetype = getMime(file.fileMime);
    if (mimetype === '') {
      snackbar('error', localize('ERROR_MIME', ''), 'top');
      return;
    }
    try {
      loading(true, localize('LOADING', ''));
      // fetch a file array buffer
      const bufferFile = yield approvalAPI.fico.getPurchaseRequisitionFileStream(file.fileId);
      // create a blob with array buffer data
      const blob = new Blob([new Uint8Array(bufferFile.data).buffer], {
        type: mimetype
      });
      // check if a blob is valid or it is corrupted
      if (blob.size === 0) {
        snackbar('error', localize('ERROR_0_BYTE', ''), 'top');
        return;
      }
      // check if is a native device
      if (Capacitor.isNativePlatform()) {
        // convert blob to string
        const reader = new FileReader();
        const dataUrlPromise = new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = error => reject(error);
          reader.readAsDataURL(blob);
        });
        const dataUrl = yield dataUrlPromise;
        // write file on cache directory on device and open the file
        Filesystem.writeFile({
          path: file.fileName,
          data: dataUrl,
          directory: Directory.Cache
        }).then(res => FileOpener.open({
          filePath: res.uri,
          contentType: mimetype
        }));
      } else {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        if (link.download !== undefined) {
          link.setAttribute('href', url);
          link.setAttribute('download', file.fileName);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Error when try download a archive: ', error);
      snackbar('error', localize('ERROR_OPEN_FILE', ''), 'top');
    } finally {
      loading(false, localize('LOADING', ''));
    }
  });
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: `${localize('PURCHASE_REQUISITION_MENU_TITLE_SHORT', '')} ∙ ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [jsx(Ramen.XCard, Object.assign({
          size: "l",
          borderType: "none",
          backgroundColor: "light"
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            width: 'full',
            gap: "m",
            padding: "xs"
          }, {
            children: [jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: 'flex'
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  textOverflow: "break-word",
                  fontSize: 11
                }, {
                  children: approval === null || approval === void 0 ? void 0 : approval.clientDescription
                }))
              })), jsx(Ramen.XTag, {
                state: "dark",
                text: orderValue
              })]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_CREATED_AT', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: createdAt
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: 'half'
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_CREATED_BY', '')
                }))
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word",
                textAlign: "right"
              }, {
                children: `${(approval === null || approval === void 0 ? void 0 : approval.createdByName) ? approval === null || approval === void 0 ? void 0 : approval.createdByName : approval === null || approval === void 0 ? void 0 : approval.createdBy}`
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_QUANTITY', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: approval === null || approval === void 0 ? void 0 : approval.orderProductsQuantity
              }))]
            }))]
          }))
        })), approval === null || approval === void 0 ? void 0 : approval.products.map((p, i) => {
          const productValue = currencyApproval(p.productTotalValue, p.productCurrency, localeDate);
          const productUnitValue = currencyApproval(p.productUnitValue, p.productCurrency, localeDate);
          return jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "shadow"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              gap: "m",
              padding: "xs"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'flex'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 11
                  }, {
                    children: p === null || p === void 0 ? void 0 : p.productDescription
                  }))
                })), jsx(Ramen.XTag, {
                  state: "dark",
                  text: productValue
                })]
              })), p.lastApprover && jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_LAST_APPROVER', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: p.lastApprover
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'half'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    fontSize: 11,
                    colorThone: "medium",
                    textOverflow: "break-word"
                  }, {
                    children: localize('LABEL_QUANTITY', '')
                  }))
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: p.quantity
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_UNIT_VALUE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: productUnitValue
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_STORE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: p.store
                }))]
              })), p.costObject && jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_CCPEP', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: p.costObject
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_SUPPLY', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: `${p.supplierId} ∙ ${p.supplierDescription}`
                }))]
              }))]
            }))
          }), i);
        }), loadingFiles ? jsx(Ramen.XButton, {
          skeleton: true,
          size: "l"
        }) : fileList.map((f, i) => {
          return jsx(Ramen.XCard, {
            title: f.fileName,
            size: "l",
            onClick: () => handleDownloadArchive(f)
          }, i);
        })]
      }))
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_APPROVE', ''),
        type: "solid",
        icon: "check-outline",
        onClick: () => setModal({
          show: true,
          action: 'approve'
        })
      }), jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_REJECT', ''),
        type: "clear",
        icon: "x-outline",
        onClick: () => setModal({
          show: true,
          action: 'reject'
        })
      })]
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'x-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_REJECT', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      title: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_PR_APPROVE', '') : localize('QUESTION_MODAL_PR_REJECT', '')
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium"
      }, {
        children: `${localize('PURCHASE_REQUISITION_MENU_TITLE_SHORT', '')} ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
      }))
    }))]
  });
}

function PurchaseOrderCard(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approvals, setApprovals] = useState([]);
  const [approval, setApproval] = useState();
  const [modal, setModal] = useState();
  useEffect(() => {
    SettingsClient.boot().then(() => setApprovals(SettingsClient.get('PURCHASE_ORDER_PENDING', [])));
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: localize('PURCHASE_ORDER_MENU_TITLE', '')
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [approvals.map((a, i) => {
          const orderValue = currencyApproval(a.orderValue, a.currency, localeDate);
          const createdAt = formatDate(a.createdAt, localeDate);
          return jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "shadow",
            onClick: () => props.history.push(`${props.location.pathname}/detail`, a)
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              gap: "m"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center"
              }, {
                children: [jsx(Ramen.XTag, {
                  text: `${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ∙ ${a.orderId}`
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  verticalAlign: "center",
                  gap: "xs"
                }, {
                  children: [jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "check-bold",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'approve'
                      });
                    }
                  }), jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "trash-outline",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'discard'
                      });
                    }
                  })]
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsxs(Ramen.XBox, Object.assign({
                  width: 'flex',
                  orientation: "vertical",
                  gap: "xxs"
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 11
                  }, {
                    children: a.supplierName
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "normal",
                    textOverflow: "break-word",
                    fontSize: 12
                  }, {
                    children: a.supplierCod
                  }))]
                })), jsx(Ramen.XTag, {
                  state: "dark",
                  text: orderValue
                })]
              })), jsx(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: a.companyName
                }))
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_CREATED_AT', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: createdAt
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'half'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    fontSize: 11,
                    colorThone: "medium",
                    textOverflow: "break-word"
                  }, {
                    children: localize('LABEL_CREATED_BY', '')
                  }))
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: `${a.createdBy}`
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_PAYMENT_COND', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: a.termOfPayment
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_QUANTITY', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: a.items.length
                }))]
              })), jsx(Ramen.XBox, {})]
            }))
          }), i);
        }), jsx(Ramen.XBox, {
          padding: "s"
        })]
      }))
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'trash-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_DISCARD', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      // subtitle={`${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ${approval?.orderId}`}
      title: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_PURCHASE_ORDER_APPROVE', '') : localize('QUESTION_MODAL_PURCHASE_ORDER_TRASH', '')
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium"
      }, {
        children: `${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
      }))
    }))]
  });
}

function PurchaseOrderDetail(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approval, setApproval] = useState();
  const [modal, setModal] = useState();
  const [detail, setDetail] = useState();
  const [loadingDetail, setLoadingDetail] = useState(false);
  useEffect(() => {
    var _a, _b;
    const _state = (_b = (_a = props.history) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.state;
    setApproval(_state);
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  const orderValue = useMemo(() => {
    if (approval) {
      return currencyApproval(approval.orderValue, approval.currency, localeDate);
    }
    return '';
  }, [approval]);
  const createdAt = useMemo(() => {
    if (approval) {
      return formatDate(approval.createdAt, localeDate);
    }
    return '';
  }, [approval]);
  // get file list
  useEffect(() => {
    var _a, _b, _c, _d, _e;
    if (approval) {
      setLoadingDetail(true);
      approvalAPI.fiori.setCountryCode(country);
      approvalAPI.fiori.setBaseUrl((_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.approvalFioriApi) !== null && _c !== void 0 ? _c : '');
      approvalAPI.fiori.setApiKey((_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.approvalApiKey) !== null && _e !== void 0 ? _e : '');
      approvalAPI.fiori.getPurchaseOrderDetail(approval.orderId).then(f => {
        setDetail(f);
      }).finally(() => setLoadingDetail(false));
    }
  }, [approval]);
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: `${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ∙ ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [jsx(Ramen.XCard, Object.assign({
          size: "l",
          borderType: "none",
          backgroundColor: "light"
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            width: 'full',
            gap: "m",
            padding: "xs"
          }, {
            children: [jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'flex'
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  textOverflow: "break-word",
                  fontSize: 11
                }, {
                  children: approval === null || approval === void 0 ? void 0 : approval.supplierName
                })), jsx(Ramen.XText, Object.assign({
                  weight: "normal",
                  textOverflow: "break-word",
                  fontSize: 12
                }, {
                  children: approval === null || approval === void 0 ? void 0 : approval.supplierCod
                }))]
              })), jsx(Ramen.XTag, {
                state: "dark",
                text: orderValue
              })]
            })), jsx(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: approval === null || approval === void 0 ? void 0 : approval.companyName
              }))
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_CREATED_AT', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: createdAt
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: 'half'
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_CREATED_BY', '')
                }))
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word",
                textAlign: "right"
              }, {
                children: `${approval === null || approval === void 0 ? void 0 : approval.createdBy}`
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_PAYMENT_COND', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: approval === null || approval === void 0 ? void 0 : approval.termOfPayment
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_QUANTITY', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: approval === null || approval === void 0 ? void 0 : approval.items.length
              }))]
            }))]
          }))
        })), jsxs(Ramen.XBox, Object.assign({
          gap: "s"
        }, {
          children: [loadingDetail && jsxs(Fragment, {
            children: [jsx(Ramen.XSkeleton, {
              type: "text"
            }), jsx(Ramen.XSkeleton, {
              type: "text",
              width: "s"
            }), jsx(Ramen.XSkeleton, {
              type: "text"
            }), jsx(Ramen.XSkeleton, {
              type: "text",
              width: "s"
            })]
          }), detail === null || detail === void 0 ? void 0 : detail.map((d, i) => {
            if (i < 5) {
              return jsx(Ramen.XText, Object.assign({
                weight: "lighter",
                colorThone: "medium",
                fontSize: 11
              }, {
                children: d
              }), i);
            } else {
              // eslint-disable-next-line array-callback-return
              return;
            }
          }), detail && detail.length > 5 && jsxs(Ramen.XExpansionPanel, Object.assign({
            closedTitle: localize('LABEL_EXPANSION_CLOSED', ''),
            openedTitle: localize('LABEL_EXPANSION_OPENED', '')
          }, {
            children: [jsx(Ramen.XBox, Object.assign({
              gap: "s"
            }, {
              children: detail === null || detail === void 0 ? void 0 : detail.map((d, i) => {
                if (i >= 5) {
                  return jsx(Ramen.XText, Object.assign({
                    weight: "lighter",
                    colorThone: "medium",
                    fontSize: 11
                  }, {
                    children: d
                  }), i);
                } else {
                  // eslint-disable-next-line array-callback-return
                  return;
                }
              })
            })), jsx(Ramen.XVSpace, {
              size: "s"
            })]
          }))]
        })), approval === null || approval === void 0 ? void 0 : approval.items.map((p, i) => {
          const itemTotalValue = currencyApproval(p.priceTotal, approval.currency, localeDate);
          const itemUnitValue = currencyApproval(p.priceUnit, approval.currency, localeDate);
          const deliveryDate = p.deliveryDate ? formatDate(p.deliveryDate, localeDate) : '';
          return jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "shadow"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              gap: "m",
              padding: "xs"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsxs(Ramen.XBox, Object.assign({
                  width: 'flex'
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 11
                  }, {
                    children: p === null || p === void 0 ? void 0 : p.productDescription
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 12
                  }, {
                    children: p === null || p === void 0 ? void 0 : p.productId
                  }))]
                })), jsx(Ramen.XTag, {
                  state: "dark",
                  text: itemTotalValue
                })]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_QUANTITY', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: p.quantity
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_UNIT_VALUE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: itemUnitValue
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_DELIVERY_DATE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: deliveryDate
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_STORE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: p.store
                }))]
              }))]
            }))
          }), i);
        })]
      }))
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_APPROVE', ''),
        type: "solid",
        icon: "check-outline",
        onClick: () => setModal({
          show: true,
          action: 'approve'
        })
      }), jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_DISCARD', ''),
        type: "clear",
        icon: "trash-outline",
        onClick: () => setModal({
          show: true,
          action: 'discard'
        })
      })]
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'trash-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_DISCARD', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      // subtitle={`${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ${approval?.orderId}`}
      title: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_PURCHASE_ORDER_APPROVE', '') : localize('QUESTION_MODAL_PURCHASE_ORDER_TRASH', '')
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium"
      }, {
        children: `${localize('PURCHASE_ORDER_MENU_TITLE_SHORT', '')} ${approval === null || approval === void 0 ? void 0 : approval.orderId}`
      }))
    }))]
  });
}

var global$1 = global$v;
var fails = fails$w;
var uncurryThis = functionUncurryThis;
var toString = toString$9;
var trim = stringTrim.trim;
var whitespaces = whitespaces$3;

var $parseInt$1 = global$1.parseInt;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt$1(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $ = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

function WorkItemCard(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approvals, setApprovals] = useState([]);
  const [approval, setApproval] = useState();
  const [modal, setModal] = useState();
  useEffect(() => {
    console.log(props);
    SettingsClient.boot().then(() => setApprovals(SettingsClient.get('FB60_PENDING', [])));
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: localize('FB60_MENU_TITLE', '')
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [approvals.map((a, i) => {
          const orderValue = currencyApproval(a.orderValue, a.orderValueCurrency, localeDate);
          const expirationDate = formatDate(a.expirationDate, localeDate);
          return jsx(Ramen.XCard, Object.assign({
            size: "l",
            borderType: "shadow",
            onClick: () => props.history.push(`${props.location.pathname}/detail`, a)
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              gap: "m"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center"
              }, {
                children: [jsx(Ramen.XTag, {
                  text: `${localize('FB60_MENU_TITLE_SHORT', '')} ∙ ${parseInt(a.orderId)}`
                }), jsxs(Ramen.XBox, Object.assign({
                  orientation: "horizontal",
                  verticalAlign: "center",
                  gap: "xs"
                }, {
                  children: [jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "check-bold",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'approve'
                      });
                    }
                  }), jsx(Ramen.XButtonIcon, {
                    type: "tonal",
                    size: "s",
                    icon: "close-outline",
                    onClick: e => {
                      e.stopPropagation();
                      setApproval(a);
                      setModal({
                        show: true,
                        action: 'reject'
                      });
                    }
                  })]
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsxs(Ramen.XBox, Object.assign({
                  width: 'flex',
                  orientation: "vertical",
                  gap: "xxs"
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    textOverflow: "break-word",
                    fontSize: 11
                  }, {
                    children: a.clientDescription
                  })), jsx(Ramen.XText, Object.assign({
                    weight: "normal",
                    textOverflow: "break-word",
                    fontSize: 12
                  }, {
                    children: a.clientId
                  }))]
                })), jsx(Ramen.XTag, {
                  state: "dark",
                  text: orderValue
                })]
              })), jsx(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: a.companyDescription
                }))
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_DOC_EXERC', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: `${a.documentId}/${a.exerciseYear}`
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XBox, Object.assign({
                  width: 'half'
                }, {
                  children: jsx(Ramen.XText, Object.assign({
                    fontSize: 11,
                    colorThone: "medium",
                    textOverflow: "break-word"
                  }, {
                    children: localize('LABEL_STORE', '')
                  }))
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word",
                  textAlign: "right"
                }, {
                  children: `${a.store}`
                }))]
              })), jsxs(Ramen.XBox, Object.assign({
                width: 'full',
                orientation: "horizontal",
                horizontalAlign: "between",
                verticalAlign: "center",
                gap: "m"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_EXPIRATION_DATE', '')
                })), jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "darkest",
                  textOverflow: "break-word"
                }, {
                  children: expirationDate
                }))]
              })), jsx(Ramen.XBox, {})]
            }))
          }), i);
        }), jsx(Ramen.XBox, {
          padding: "s"
        })]
      }))
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'trash-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_REJECT', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      title: `${approval === null || approval === void 0 ? void 0 : approval.clientDescription} ∙ ${approval === null || approval === void 0 ? void 0 : approval.clientId}`
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium",
        lineHeight: "title"
      }, {
        children: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_FB60_APPROVE', '').replace('{{s}}', approval ? currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate) : '') : localize('QUESTION_MODAL_FB60_REJECT', '').replace('{{s}}', approval ? currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate) : '')
      }))
    }))]
  });
}

function WorkItemDetail(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [approval, setApproval] = useState();
  const [fileList, setFileList] = useState([]);
  const [modal, setModal] = useState();
  const [loadingFiles, setLoadingFiles] = useState(false);
  useEffect(() => {
    var _a, _b;
    const _state = (_b = (_a = props.history) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.state;
    setApproval(_state);
  }, []);
  const country = (_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.country.toLowerCase()) !== null && _c !== void 0 ? _c : 'br';
  setLocale(country);
  const localize = i18(locales);
  const localeDate = (_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.localeDate) !== null && _e !== void 0 ? _e : 'pt-BR';
  const orderValue = useMemo(() => {
    if (approval) {
      return currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate);
    }
    return '';
  }, [approval]);
  const expirationDate = useMemo(() => {
    if (approval) {
      return formatDate(approval.expirationDate, localeDate);
    }
    return '';
  }, [approval]);
  // get file list
  useEffect(() => {
    var _a, _b, _c, _d, _e;
    if (approval) {
      setLoadingFiles(true);
      approvalAPI.fiori.setCountryCode(country);
      approvalAPI.fiori.setBaseUrl((_c = (_b = (_a = props.extensions) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.approvalFioriApi) !== null && _c !== void 0 ? _c : '');
      approvalAPI.fiori.setApiKey((_e = (_d = props.extensions) === null || _d === void 0 ? void 0 : _d.env.approvalApiKey) !== null && _e !== void 0 ? _e : '');
      approvalAPI.fiori.getFB60Files(approval).then(f => {
        setFileList(f);
      }).finally(() => setLoadingFiles(false));
    }
  }, [approval]);
  // download archive
  const handleDownloadArchive = file => __awaiter(this, void 0, void 0, function* () {
    const mimetype = getMime(file.fileMime);
    if (mimetype === '') {
      snackbar('error', localize('ERROR_MIME', ''), 'top');
      return;
    }
    try {
      loading(true, localize('LOADING', ''));
      // fetch a file array buffer
      const bufferFile = yield approvalAPI.fiori.getFB60FileStream(file.fileId);
      // create a blob with array buffer data
      const blob = new Blob([new Uint8Array(bufferFile.data).buffer], {
        type: mimetype
      });
      // check if a blob is valid or it is corrupted
      if (blob.size === 0) {
        snackbar('error', localize('ERROR_0_BYTE', ''), 'top');
        return;
      }
      // check if is a native device
      if (Capacitor.isNativePlatform()) {
        // convert blob to string
        const reader = new FileReader();
        const dataUrlPromise = new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = error => reject(error);
          reader.readAsDataURL(blob);
        });
        const dataUrl = yield dataUrlPromise;
        // write file on cache directory on device and open the file
        Filesystem.writeFile({
          path: file.fileName,
          data: dataUrl,
          directory: Directory.Cache
        }).then(res => FileOpener.open({
          filePath: res.uri,
          contentType: mimetype
        }));
      } else {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        if (link.download !== undefined) {
          link.setAttribute('href', url);
          link.setAttribute('download', file.fileName);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Error when try download a archive: ', error);
      snackbar('error', localize('ERROR_OPEN_FILE', ''), 'top');
    } finally {
      loading(false, localize('LOADING', ''));
    }
  });
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: () => props.history.goBack(),
      sticky: true,
      tags: [],
      title: `${localize('FB60_MENU_TITLE_SHORT', '')} ∙ ${approval ? parseInt(approval === null || approval === void 0 ? void 0 : approval.orderId) : ''}`
    }), jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "l"
      }, {
        children: [jsx(Ramen.XCard, Object.assign({
          size: "l",
          borderType: "none",
          backgroundColor: "light"
        }, {
          children: jsxs(Ramen.XBox, Object.assign({
            width: 'full',
            gap: "m",
            padding: "xs"
          }, {
            children: [jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsxs(Ramen.XBox, Object.assign({
                width: 'flex',
                orientation: "vertical",
                gap: "xxs"
              }, {
                children: [jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  textOverflow: "break-word",
                  fontSize: 11
                }, {
                  children: approval === null || approval === void 0 ? void 0 : approval.clientDescription
                })), jsx(Ramen.XText, Object.assign({
                  weight: "normal",
                  textOverflow: "break-word",
                  fontSize: 12
                }, {
                  children: approval === null || approval === void 0 ? void 0 : approval.clientId
                }))]
              })), jsx(Ramen.XTag, {
                state: "dark",
                text: orderValue
              })]
            })), jsx(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: approval === null || approval === void 0 ? void 0 : approval.companyDescription
              }))
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_DOC_EXERC', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: `${approval === null || approval === void 0 ? void 0 : approval.documentId}/${approval === null || approval === void 0 ? void 0 : approval.exerciseYear}`
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: 'half'
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  fontSize: 11,
                  colorThone: "medium",
                  textOverflow: "break-word"
                }, {
                  children: localize('LABEL_STORE', '')
                }))
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word",
                textAlign: "right"
              }, {
                children: `${approval === null || approval === void 0 ? void 0 : approval.store}`
              }))]
            })), jsxs(Ramen.XBox, Object.assign({
              width: 'full',
              orientation: "horizontal",
              horizontalAlign: "between",
              verticalAlign: "center",
              gap: "m"
            }, {
              children: [jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "medium",
                textOverflow: "break-word"
              }, {
                children: localize('LABEL_EXPIRATION_DATE', '')
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 11,
                colorThone: "darkest",
                textOverflow: "break-word"
              }, {
                children: expirationDate
              }))]
            }))]
          }))
        })), loadingFiles ? jsx(Ramen.XButton, {
          skeleton: true,
          size: "l"
        }) : fileList.map((f, i) => {
          return jsx(Ramen.XCard, {
            title: f.fileName,
            size: "l",
            onClick: () => handleDownloadArchive(f)
          }, i);
        })]
      }))
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_APPROVE', ''),
        type: "solid",
        icon: "check-outline",
        onClick: () => setModal({
          show: true,
          action: 'approve'
        })
      }), jsx(Ramen.XButton, {
        size: "xl",
        text: localize('LABEL_REJECT', ''),
        type: "clear",
        icon: "x-outline",
        onClick: () => setModal({
          show: true,
          action: 'reject'
        })
      })]
    }), jsx(Ramen.XModal, Object.assign({
      visible: (_f = modal === null || modal === void 0 ? void 0 : modal.show) !== null && _f !== void 0 ? _f : false,
      actions: [{
        icon: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? 'check-outline' : 'trash-outline',
        key: (_g = modal === null || modal === void 0 ? void 0 : modal.action) !== null && _g !== void 0 ? _g : '',
        text: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('LABEL_APPROVE', '') : localize('LABEL_REJECT', ''),
        type: 'solid'
      }],
      icon: "alert-circle-outline",
      onActionClick: key => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      onClose: () => setModal(Object.assign(Object.assign({}, modal), {
        show: false
      })),
      size: "xs",
      title: `${approval === null || approval === void 0 ? void 0 : approval.clientDescription} ∙ ${approval === null || approval === void 0 ? void 0 : approval.clientId}`
    }, {
      children: jsx(Ramen.XText, Object.assign({
        colorThone: "medium",
        lineHeight: "title"
      }, {
        children: (modal === null || modal === void 0 ? void 0 : modal.action) === 'approve' ? localize('QUESTION_MODAL_FB60_APPROVE', '').replace('{{s}}', approval ? currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate) : '') : localize('QUESTION_MODAL_FB60_REJECT', '').replace('{{s}}', approval ? currencyApproval(approval.orderValue, approval.orderValueCurrency, localeDate) : '')
      }))
    }))]
  });
}

class ApprovalModule extends Module {
  constructor(props, override) {
    super(props, {
      routes: [{
        path: '/',
        page: ApprovalCenter
      }, {
        path: `/${APPROVAL_TYPES.PURCHASE_REQUISITION}`,
        page: PurchaseRequisitionCard
      }, {
        path: `/${APPROVAL_TYPES.PURCHASE_REQUISITION}/detail`,
        page: PurchaseRequisitionDetail
      }, {
        path: `/${APPROVAL_TYPES.PURCHASE_ORDER}`,
        page: PurchaseOrderCard
      }, {
        path: `/${APPROVAL_TYPES.PURCHASE_ORDER}/detail`,
        page: PurchaseOrderDetail
      }, {
        path: `/${APPROVAL_TYPES.FB60}`,
        page: WorkItemCard
      }, {
        path: `/${APPROVAL_TYPES.FB60}/detail`,
        page: WorkItemDetail
      }],
      override
    });
  }
  componentDidMount() {
    const backButtonHandler = e => {
      this.props.history.goBack();
    };
    App.addListener('backButton', backButtonHandler);
  }
  componentWillUnmount() {
    App.removeAllListeners();
  }
}
ApprovalModule.route = '/approval-center';

export { Index$1 as CardApprovalCenter, Index as CardChildrenExemple, ApprovalModule as default };
