import { jsxs, jsx } from 'react/jsx-runtime';
import Ramen from '@team_yumi/ramen';
import * as SDK from '@team_yumi/sdk';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';
import { Capacitor } from '@capacitor/core';
import * as Router from 'react-router-dom';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import * as React from 'react';
import React__default, { createContext } from 'react';
import { debounce } from 'lodash';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$m =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$n = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$m = fails$n;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$m(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$l = fails$n;

var functionBindNative = !fails$l(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$i = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$i.bind(call$i) : function () {
  return call$i.apply(call$i, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
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
var call$h = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$h, call$h);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$h.apply(fn, arguments);
  };
};

var uncurryThis$p = functionUncurryThis;

var toString$a = uncurryThis$p({}.toString);
var stringSlice$7 = uncurryThis$p(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$7(toString$a(it), 8, -1);
};

var uncurryThis$o = functionUncurryThis;
var fails$k = fails$n;
var classof$8 = classofRaw$2;

var $Object$4 = Object;
var split$1 = uncurryThis$o(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$k(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$g = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$4(it)) throw $TypeError$g("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$5 = function (it) {
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
var isCallable$n = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$m = isCallable$n;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it);
};

var global$l = global$m;
var isCallable$l = isCallable$n;

var aFunction = function (argument) {
  return isCallable$l(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
};

var uncurryThis$n = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$k = global$m;
var userAgent$5 = engineUserAgent;

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
var fails$j = fails$n;
var global$j = global$m;

var $String$5 = global$j.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$j(function () {
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

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$k = isCallable$n;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$k($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$j = isCallable$n;
var tryToString$4 = tryToString$5;

var $TypeError$f = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$a = function (argument) {
  if (isCallable$j(argument)) return argument;
  throw $TypeError$f(tryToString$4(argument) + ' is not a function');
};

var aCallable$9 = aCallable$a;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$4 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$9(func);
};

var call$g = functionCall;
var isCallable$i = isCallable$n;
var isObject$9 = isObject$a;

var $TypeError$e = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$9(val = call$g(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$9(val = call$g(fn, input))) return val;
  if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$9(val = call$g(fn, input))) return val;
  throw $TypeError$e("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = false;

var global$i = global$m;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$i, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$i[key] = value;
  } return value;
};

var global$h = global$m;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$h[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$5 = requireObjectCoercible$7;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$2(requireObjectCoercible$5(argument));
};

var uncurryThis$m = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$5(it), key);
};

var uncurryThis$l = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$9 = uncurryThis$l(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id + postfix, 36);
};

var global$g = global$m;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$2 = global$g.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$k = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$f = functionCall;
var isObject$8 = isObject$a;
var isSymbol$1 = isSymbol$2;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$j = wellKnownSymbol$k;

var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$j('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$8(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$f(exoticToPrim, input, pref);
    if (!isObject$8(result) || isSymbol$1(result)) return result;
    throw $TypeError$d("Can't convert object to primitive value");
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

var global$f = global$m;
var isObject$7 = isObject$a;

var document$3 = global$f.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$7(document$3) && isObject$7(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$i = fails$n;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$e = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$4(!call$e(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$h = fails$n;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$6 = isObject$a;

var $String$3 = String;
var $TypeError$c = TypeError;

// `Assert: Type(argument) is Object`
var anObject$e = function (argument) {
  if (isObject$6(argument)) return argument;
  throw $TypeError$c($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$d = anObject$e;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$b = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey$1(P);
  anObject$d(Attributes);
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
  anObject$d(O);
  P = toPropertyKey$1(P);
  anObject$d(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$b('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
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
var isCallable$h = isCallable$n;
var store$1 = sharedStore;

var functionToString = uncurryThis$k(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$h(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$e = global$m;
var isCallable$g = isCallable$n;

var WeakMap$1 = global$e.WeakMap;

var weakMapBasicDetection = isCallable$g(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$d = global$m;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
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
  set$1 = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
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
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$j = functionUncurryThis;
var fails$g = fails$n;
var isCallable$f = isCallable$n;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$3 = internalState;

var enforceInternalState = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$6 = uncurryThis$j(''.slice);
var replace$4 = uncurryThis$j(''.replace);
var join$1 = uncurryThis$j([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$g(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$6($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$f(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$e = isCallable$n;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$e(value)) makeBuiltIn$1(value, name, options);
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
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$4(O);
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
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$i = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$3 = uncurryThis$i([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
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

var getBuiltIn$5 = getBuiltIn$7;
var uncurryThis$h = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$c = anObject$e;

var concat$2 = uncurryThis$h([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$c(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$f = fails$n;
var isCallable$d = isCallable$n;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$d(detection) ? fails$f(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$c = global$m;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$7 = defineBuiltIn$8;
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
    target = global$c;
  } else if (STATIC) {
    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$c[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
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
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$7(target, key, sourceProperty, options);
  }
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

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$b = anObject$e;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$b(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$7;

var html$2 = getBuiltIn$4('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$a = anObject$e;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
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
    EmptyConstructor[PROTOTYPE] = anObject$a(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$i = wellKnownSymbol$k;
var create$3 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$i('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $$f = _export;
var $includes = arrayIncludes.includes;
var fails$e = fails$n;
var addToUnscopables$1 = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$e(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$f({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('includes');

var isObject$4 = isObject$a;
var classof$7 = classofRaw$2;
var wellKnownSymbol$h = wellKnownSymbol$k;

var MATCH$1 = wellKnownSymbol$h('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$4(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$7(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError$a = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$a("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$g = wellKnownSymbol$k;

var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$c = isCallable$n;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$f = wellKnownSymbol$k;

var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');
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
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String$1 = String;

var toString$8 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var wellKnownSymbol$e = wellKnownSymbol$k;

var MATCH = wellKnownSymbol$e('match');

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

var $$e = _export;
var uncurryThis$g = functionUncurryThis;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var toString$7 = toString$8;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$g(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$e({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$7(requireObjectCoercible$4(this)),
      toString$7(notARegExp$1(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var iterators = {};

var fails$d = fails$n;

var correctPrototypeGetter = !fails$d(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$b = isCallable$n;
var toObject$4 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$4(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$b(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails$c = fails$n;
var isCallable$a = isCallable$n;
var isObject$3 = isObject$a;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$d = wellKnownSymbol$k;

var ITERATOR$8 = wellKnownSymbol$d('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$2) || fails$c(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$a(IteratorPrototype$2[ITERATOR$8])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$c = wellKnownSymbol$k;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');

var setToStringTag$4 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$1)) {
    defineProperty$3(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
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

var uncurryThis$f = functionUncurryThis;
var aCallable$8 = aCallable$a;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$f(aCallable$8(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$9 = isCallable$n;

var $String = String;
var $TypeError$9 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$9(argument)) return argument;
  throw $TypeError$9("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$9 = anObject$e;
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
    anObject$9(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$d = _export;
var call$d = functionCall;
var FunctionName = functionName;
var isCallable$8 = isCallable$n;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$b = wellKnownSymbol$k;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$b('iterator');
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
        } else if (!isCallable$8(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$d(nativeIterator, this); };
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
    } else $$d({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
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
var addToUnscopables = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$4 = descriptors;

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
if (DESCRIPTORS$4 && values.name !== 'values') try {
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

var global$b = global$m;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$a = wellKnownSymbol$k;

var ITERATOR$6 = wellKnownSymbol$a('iterator');
var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
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
  handlePrototype(global$b[COLLECTION_NAME] && global$b[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var fails$b = fails$n;
var wellKnownSymbol$9 = wellKnownSymbol$k;
var DESCRIPTORS$3 = descriptors;
var IS_PURE = isPure;

var ITERATOR$5 = wellKnownSymbol$9('iterator');

var urlConstructorDetection = !fails$b(function () {
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
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$2 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var defineBuiltIn$4 = defineBuiltIn$8;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$4(target, key, src[key], options);
  return target;
};

var isPrototypeOf$1 = objectIsPrototypeOf;

var $TypeError$8 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw $TypeError$8('Incorrect invocation');
};

var classofRaw = classofRaw$2;
var uncurryThis$e = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$e(fn);
};

var uncurryThis$d = functionUncurryThisClause;
var aCallable$7 = aCallable$a;
var NATIVE_BIND$1 = functionBindNative;

var bind$5 = uncurryThis$d(uncurryThis$d.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$7(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$4 = classof$6;
var getMethod$2 = getMethod$4;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var Iterators$1 = iterators;
var wellKnownSymbol$8 = wellKnownSymbol$k;

var ITERATOR$4 = wellKnownSymbol$8('iterator');

var getIteratorMethod$3 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$2(it, ITERATOR$4)
    || getMethod$2(it, '@@iterator')
    || Iterators$1[classof$4(it)];
};

var call$c = functionCall;
var aCallable$6 = aCallable$a;
var anObject$8 = anObject$e;
var tryToString$3 = tryToString$5;
var getIteratorMethod$2 = getIteratorMethod$3;

var $TypeError$7 = TypeError;

var getIterator$2 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$6(iteratorMethod)) return anObject$8(call$c(iteratorMethod, argument));
  throw $TypeError$7(tryToString$3(argument) + ' is not iterable');
};

var $TypeError$6 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$6('Not enough arguments');
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
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty = createProperty$1;

var $Array = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$3(O);
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

var $$c = _export;
var global$a = global$m;
var call$b = functionCall;
var uncurryThis$c = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn$3 = defineBuiltIn$8;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var isCallable$7 = isCallable$n;
var hasOwn$1 = hasOwnProperty_1;
var bind$4 = functionBindContext;
var classof$3 = classof$6;
var anObject$7 = anObject$e;
var isObject$2 = isObject$a;
var $toString = toString$8;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var wellKnownSymbol$7 = wellKnownSymbol$k;
var arraySort = arraySort$1;

var ITERATOR$3 = wellKnownSymbol$7('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$2) return global$a[name];
  var descriptor = getOwnPropertyDescriptor$2(global$a, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$a.RegExp;
var TypeError$2 = global$a.TypeError;
var decodeURIComponent = global$a.decodeURIComponent;
var encodeURIComponent = global$a.encodeURIComponent;
var charAt$4 = uncurryThis$c(''.charAt);
var join = uncurryThis$c([].join);
var push$2 = uncurryThis$c([].push);
var replace$3 = uncurryThis$c(''.replace);
var shift = uncurryThis$c([].shift);
var splice = uncurryThis$c([].splice);
var split = uncurryThis$c(''.split);
var stringSlice$5 = uncurryThis$c(''.slice);

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
    else this.parseQuery(typeof init == 'string' ? charAt$4(init, 0) === '?' ? stringSlice$5(init, 1) : init : $toString(init));
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
      while (!(step = call$b(next, iterator)).done) {
        entryIterator = getIterator$1(anObject$7(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$b(entryNext, entryIterator)).done ||
          (second = call$b(entryNext, entryIterator)).done ||
          !call$b(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push$2(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
      push$2(this.entries, { key: key, value: $toString(object[key]) });
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
          push$2(this.entries, {
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
      push$2(result, serialize(entry.key) + '=' + serialize(entry.value));
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
    push$2(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS$2) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
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
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$2(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
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
    validateArgumentsLength$1(arguments.length, 1);
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
    if (!found) push$2(entries, { key: key, value: val });
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
if (DESCRIPTORS$2) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$c({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$7(Headers)) {
  var headersHas = uncurryThis$c(HeadersPrototype.has);
  var headersSet = uncurryThis$c(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$2(init)) {
      var body = init.body;
      var headers;
      if (classof$3(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$1(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$7(nativeFetch)) {
    $$c({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
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

    $$c({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$b = functionUncurryThis;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var toString$6 = toString$8;
var whitespaces$1 = whitespaces$2;

var replace$2 = uncurryThis$b(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = toString$6(requireObjectCoercible$3($this));
    if (TYPE & 1) string = replace$2(string, ltrim, '');
    if (TYPE & 2) string = replace$2(string, rtrim, '$1');
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

var global$9 = global$m;
var fails$a = fails$n;
var uncurryThis$a = functionUncurryThis;
var toString$5 = toString$8;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var $parseInt$1 = global$9.parseInt;
var Symbol$1 = global$9.Symbol;
var ITERATOR$2 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$2 = uncurryThis$a(hex.exec);
var FORCED$2 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$2 && !fails$a(function () { $parseInt$1(Object(ITERATOR$2)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
  var S = trim(toString$5(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$b = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$b({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var DESCRIPTORS$1 = descriptors;
var uncurryThis$9 = functionUncurryThis;
var call$a = functionCall;
var fails$9 = fails$n;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$3 = toObject$6;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat$1 = uncurryThis$9([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$9(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
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
  var T = toObject$3(target);
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
      if (!DESCRIPTORS$1 || call$a(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$a = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$a({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
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

/**
 * Expression Class (Guard Pattern)
 */
class Expressions {
  /**
   * Execute a callback when we are in Native Phone (Capacitor)
   * @param {()=>void} callback Function to execute if we are in a native phone
   */
  whenInNativePhone(callback) {
    if (Capacitor.isNativePlatform()) {
      callback();
    }
  }
  /**
   * Execute a callback when we are not in Native Phone (Capacitor)
   * @param {()=>void} inCallback Function to execute if we are in a native phone
   */
  whenNotInNativePhone(callback) {
    if (!Capacitor.isNativePlatform()) {
      callback();
    }
  }
  /**
   * Execute a callback when we are not in Native Phone (Capacitor)
   * @param {()=>void} inCallback Function to execute if we are in a native phone
   */
  whenAndroid(callback, notCallback) {
    if (Capacitor.getPlatform() === 'android') {
      callback();
    } else if (notCallback) {
      notCallback();
    }
  }
  /**
   * Execute a callback when we are in IOS Platform
   * @param {()=>void} inCallback Function to execute if we are in a native phone
   */
  whenIos(callback, notCallback) {
    if (Capacitor.getPlatform() === 'ios') {
      callback();
    } else if (notCallback) {
      notCallback();
    }
  }
}
var Expr = new Expressions();

let config = {
  // IAM_API_BASE_URL: 'http://localhost:8080',
  // BACKEND_BASE_URL: 'http://localhost:8090',
  IAM_API_BASE_URL: 'https://api.staging.cencox.xyz/yumi-iam/api',
  BACKEND_BASE_URL: 'https://api.staging.cencox.xyz/yumi-iam/bff'
};
if (process.env['NODE_ENV'] === 'production') {
  config = {
    IAM_API_BASE_URL: 'https://api.cencosudx.xyz/yumi-iam/api',
    BACKEND_BASE_URL: 'https://api.cencosudx.xyz/yumi-iam/bff'
  };
}
var config$1 = config;

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAAmECAYAAACsJdO5AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAl1nSURBVHgB7N0JtCXJXd/5f9z3urrVm1pGEiCBJdsyCAy0ZjAzPgZLGDP4DDaSOWe8jBFwZvEcj41sn2PsscdmPBhZeEZiwJZgMEI2EjJgLUgCbKMVsWlrIQstgDQYIYS6tbW6q5eq6qq6N+bmEpn/iPhHZN635XtV38851S/fvZmRkXnz3n7xuxGRzm8JAAAAAAAATpJfCQAAAAAAAE4coQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAAYAGEMgAAAAAAAAsglAEAAAAAAFgAoQwAAAAAAMACCGUAAAAAAAAWQCgDAAAAAACwAEIZAAAAAACABRDKAAAAAAAALIBQBgAAAAAA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eQvzpsd06MMUJgAAAAAA8FKE+CAL/QIAAAAAALwg2xb6BQAAAAAAwDqEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAAAAAAADdAKAMAAAAAAHADhDIAAAAAAAA3QCgDAAAAAABwA4QyAAAAAAAAN0AoAwAAAAAAcAOEMgAA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BgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIIBQBgAAACCAUAYAAAAggFAGAAAAIMC///9fXgAAAAD4TPl/ysMx6P1wDzQAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==";

const CLIENT_ID = 'arcus';
const Login$1 = props => {
  const onAuthenticatedHandler = authData => __awaiter(void 0, void 0, void 0, function* () {
    SDK.Clients.IAM.authenticate(authData);
    props.onAuthenticated();
  });
  const onLoginHandler = provider => {
    const loginUrl = `${config$1.IAM_API_BASE_URL}/oauth2/${CLIENT_ID}/authorize/${provider}?response_type=token&prompt=login&redirect_uri=${config$1.IAM_API_BASE_URL}/oauth2/callback`;
    Expr.whenNotInNativePhone(() => {
      const onPopupMessage = e => __awaiter(void 0, void 0, void 0, function* () {
        if (e.origin === e.data.origin) {
          // success
          if (e.data.access_token) {
            const authData = e.data;
            onAuthenticatedHandler(authData);
          } else {
            if (e.data.code === 'USER_NOT_REGISTERED_IN_APP') {
              Ramen.Api.snackbar.error({
                text: 'Error haciendo login, usuario debe estar registrado previamente',
                placement: 'top'
              });
              return;
            }
            // Generic message
            Ramen.Api.snackbar.error({
              text: 'Error haciendo login, reintente por favor',
              placement: 'top'
            });
          }
        }
      });
      window.addEventListener('message', onPopupMessage);
      const loginPopUp = window.open(loginUrl, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=500,height=600');
      const timer = setInterval(() => {
        if (loginPopUp && loginPopUp.closed) {
          clearInterval(timer);
          window.removeEventListener('message', onPopupMessage);
        }
      }, 500);
    });
    Expr.whenInNativePhone(() => __awaiter(void 0, void 0, void 0, function* () {
      const inAppBrowserRef = InAppBrowser.create(loginUrl, '_blank', {
        location: 'no'
      });
      inAppBrowserRef.show();
      inAppBrowserRef.on('loadstop').subscribe(evt => __awaiter(void 0, void 0, void 0, function* () {
        if (evt.url && evt.url.includes('access_token')) {
          const queryString = evt.url.split('#')[1];
          const urlParams = new URLSearchParams(queryString);
          const authData = {
            access_token: urlParams.get('access_token') || '',
            token_type: urlParams.get('token_type') || '',
            expires_in: parseInt(urlParams.get('expires_in') || '0')
          };
          inAppBrowserRef.close();
          onAuthenticatedHandler(authData);
        }
      }));
    }));
  };
  const loginButtons = [];
  {
    // loginButtons.push({
    //   id: 'saml',
    //   label: 'Iniciar sesión',
    //   icon: 'cencosud-filled',
    //   provider: 'saml',
    // });
    loginButtons.push({
      id: 'gmail',
      label: 'Iniciar sesión',
      icon: 'cencosud-filled',
      provider: 'microsoft_saml'
    });
  }
  return jsxs(Ramen.XPage, Object.assign({
    backgroundImage: img$4
  }, {
    children: [jsx(Ramen.XBody, {
      children: jsxs(Ramen.XBox, Object.assign({
        gap: "s",
        height: "full",
        verticalAlign: "end"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 8
        }, {
          children: "Hola, qu\u00E9 bueno verte!"
        })), jsx(Ramen.XText, Object.assign({
          weight: "bold",
          fontSize: 6
        }, {
          children: "La nueva app para facilitar todas tus tareas"
        }))]
      }))
    }), jsx(Ramen.XFooter, {
      children: loginButtons.map(button => jsx(Ramen.XButton, {
        size: "xl",
        icon: button.icon,
        type: "solid",
        text: "Iniciar sesi\u00F3n",
        onClick: () => onLoginHandler(button.provider)
      }, button.id))
    })]
  }));
};
Login$1.defaultProps = {};

class Approval$2 extends SDK.Clients.RESTClient {
  get(country, flag, store, id) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(`/${country}/${flag}/${store}/approvals/${id}`);
      return response.data;
    });
  }
  getAll(country, flag, store, params) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(`/${country}/${flag}/${store}/approvals`, {
        params
      });
      return response.data;
    });
  }
  update(country, flag, store, id, data) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.put(`/${country}/${flag}/${store}/approvals/${id}`, data);
      return response.data;
    });
  }
}
var Approval$3 = new Approval$2({
  baseURL: config$1.BACKEND_BASE_URL
});

class User extends SDK.Clients.RESTClient {
  getAll(country, flag, store, params, signal) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(`/${country}/${flag}/${store}/users`, {
        params,
        signal
      });
      return response.data;
    });
  }
  update(country, flag, store, provider, identifier, data) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.put(`/${country}/${flag}/${store}/users/${provider}/${identifier}`, data);
      return response.data;
    });
  }
}
var User$1 = new User({
  baseURL: config$1.BACKEND_BASE_URL
});

class Role extends SDK.Clients.RESTClient {
  getAll(country, flag, store) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(`/${country}/${flag}/${store}/roles`);
      return response.data;
    });
  }
}
var Role$1 = new Role({
  baseURL: config$1.BACKEND_BASE_URL
});

class Section extends SDK.Clients.RESTClient {
  getAll(country, flag, store) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get(`/${country}/${flag}/${store}/sections`);
      return response.data;
    });
  }
}
var Section$1 = new Section({
  baseURL: config$1.BACKEND_BASE_URL
});

const ModuleContext$1 = /*#__PURE__*/createContext({
  country: 'yu',
  flag: '1',
  store: '1',
  draft: null,
  setDraft: () => {
    console.error('Context setDraft() not implemented');
  }
});
const useContext$1 = () => {
  const context = React.useContext(ModuleContext$1);
  if (context === undefined) {
    throw new Error('Context Provider component must be in the root of the approval flow');
  }
  return context;
};
const Context$1 = props => {
  var _a, _b;
  const location = Router.useLocation();
  const [draft, setDraft] = React.useState(null);
  const [flag] = React.useState((_a = location.state) === null || _a === void 0 ? void 0 : _a.flag);
  const [store] = React.useState((_b = location.state) === null || _b === void 0 ? void 0 : _b.store);
  if (!flag || !store) {
    return jsx(Ramen.XPage, {
      children: jsx(Ramen.XBody, {
        children: jsx(Ramen.XAlert, {
          title: "Flag and Store must be provided in the router location state",
          type: "error"
        })
      })
    });
  }
  const value = {
    country: props.extensions.country,
    flag: flag.toLowerCase(),
    store: store.toLowerCase(),
    draft,
    setDraft
  };
  return jsx(ModuleContext$1.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};
Context$1.defaultProps = {};

var img$3 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM16 30.2857C23.8898 30.2857 30.2857 23.8898 30.2857 16C30.2857 8.11022 23.8898 1.71429 16 1.71429C8.11022 1.71429 1.71429 8.11022 1.71429 16C1.71429 23.8898 8.11022 30.2857 16 30.2857Z' fill='white'/%3e%3cmask id='mask0_7145_352096' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='1' y='1' width='30' height='30'%3e%3ccircle cx='14.2857' cy='14.2857' r='14.2857' transform='matrix(-1 0 0 1 30.2859 1.71436)' fill='white'/%3e%3ccircle cx='14.2857' cy='14.2857' r='14.2857' transform='matrix(-1 0 0 1 30.2859 1.71436)' stroke='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_7145_352096)'%3e%3cpath d='M30.2858 16.0001C30.2858 23.8899 23.8899 30.2858 16.0001 30.2858C8.11029 30.2858 1.71436 23.8899 1.71436 16.0001C1.71436 8.11029 8.11029 1.71436 16.0001 1.71436C23.8899 1.71436 30.2858 8.11029 30.2858 16.0001Z' fill='%23D2D8E7'/%3e%3cpath d='M21.0144 22.2282C19.2684 23.498 17.5223 24.5139 15.7763 24.5139C14.0303 24.5139 12.2842 23.498 10.5382 22.2282C11.9774 21.7901 12.7075 21.1361 12.7287 20.2663C12.7287 20.1113 12.7275 19.8911 12.7265 19.4776C12.7265 19.412 12.7263 19.3447 12.726 19.2759C12.7232 18.1673 12.7185 16.7045 12.7119 15.2188C11.347 13.4495 11.8484 11.3753 12.2761 11.4271C12.8005 11.4909 17.3436 7.17963 18.2151 6.95859C19.0865 6.73754 21.3001 7.45116 21.6811 9.43925C22.062 11.4273 22.2212 16.4386 20.7763 18.4393C20.3651 19.0086 19.7175 19.2313 18.8334 19.1073C18.8322 19.5234 18.8297 19.757 18.8239 20.2282C18.8353 21.1376 19.5653 21.7906 21.0144 22.2282Z' fill='%23C7CFE2'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.6'%3e%3cpath d='M18.8242 19.1062C16.729 18.8681 15.3956 17.9634 15.3956 17.9634C15.3956 17.9634 16.9195 19.8681 18.8242 20.2491V19.1062Z' fill='black' fill-opacity='0.2'/%3e%3c/g%3e%3cpath d='M12.0144 15.2479C11.3583 13.6698 8.72874 10.4558 10.9954 8.45584C11.7573 4.74156 15.9668 5.1527 18.7764 6.00984C20.6646 6.58594 22.0906 7.72413 22.3954 6.86699C24.3002 8.45584 23.3463 10.0098 22.0906 10.4558C20.951 10.8606 19.024 11.2654 15.7472 10.8844C15.1619 10.8163 15.2845 12.609 14.9717 12.8028C14.5025 13.0936 14.1383 11.2654 12.8518 11.8143C11.5653 12.3633 12.3287 14.9086 13.7097 14.9086C14.1859 14.9086 14.424 16.2178 13.1383 16.8369C12.2049 17.2956 12.4408 16.2734 12.0144 15.2479Z' fill='%23B7C0D8'/%3e%3cpath d='M5.77626 25.1337C4.86959 26.9772 4.34769 31.2289 4.34769 31.2289H27.2048C27.2048 31.2289 26.6827 26.9768 25.7763 25.1337C24.8698 23.2907 19.5763 21.5812 19.5763 21.5812C16.1334 21.5806 14.9905 21.5806 11.979 21.5806C11.979 21.5806 6.68293 23.2902 5.77626 25.1337Z' fill='%23B7C0D8'/%3e%3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='169' height='168' viewBox='0 0 169 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_7342_381962)'%3e%3cg clip-path='url(%23clip1_7342_381962)'%3e%3cpath d='M194.431 0H-152.261V167.85H194.431V0Z' fill='%23D6D6D6'/%3e%3cpath d='M19.0388 0.0683594H-64.6837V110.118H19.0388V0.0683594Z' fill='%23F5F5F5'/%3e%3cpath d='M106.735 0.0683594H23.0127V110.118H106.735V0.0683594Z' fill='%23F5F5F5'/%3e%3cpath d='M194.432 0.0683594H110.709V110.118H194.432V0.0683594Z' fill='%23F5F5F5'/%3e%3cpath d='M194.811 111.277H-151.656V167.773H194.811V111.277Z' fill='%23EAEAEA'/%3e%3cpath d='M194.82 125.292H-152.221V126.288H194.82V125.292Z' fill='%23D6D6D6'/%3e%3cpath d='M194.82 136.984H-152.221V137.979H194.82V136.984Z' fill='%23D6D6D6'/%3e%3cpath d='M194.82 153.408H-152.221V154.404H194.82V153.408Z' fill='%23D6D6D6'/%3e%3cpath d='M194.82 116.587H-152.221V117.582H194.82V116.587Z' fill='%23D6D6D6'/%3e%3cpath d='M187.628 168L136.265 110.118L135.638 110.823L186.378 168H187.628Z' fill='%23D6D6D6'/%3e%3cpath d='M140.702 168L104.74 110.118L104.016 110.686L139.625 168H140.702Z' fill='%23D6D6D6'/%3e%3cpath d='M98.3289 168L74.376 110.118L73.5768 110.536L97.3531 168H98.3289Z' fill='%23D6D6D6'/%3e%3cpath d='M58.6311 168L44.8687 110.118L44.0121 110.377L57.7172 168H58.6311Z' fill='%23D6D6D6'/%3e%3cpath d='M21.7416 110.118H20.8585V168H21.7416V110.118Z' fill='%23D6D6D6'/%3e%3c/g%3e%3cpath d='M132.739 106.896L127.475 109.011L133.738 124.596L139.002 122.481L132.739 106.896Z' fill='%236E64CA'/%3e%3cpath d='M136.068 119.299L134.253 120.029C132.017 120.927 131.464 124.79 133.018 128.657L149.645 170.032C151.199 173.899 154.271 176.305 156.507 175.407L158.322 174.677C160.558 173.779 161.111 169.916 159.557 166.049L142.93 124.673C141.376 120.807 138.304 118.401 136.068 119.299Z' fill='%23564BC1'/%3e%3cpath d='M134.159 40.9507C124.646 36.8982 113.929 36.7489 104.365 40.5359C94.8012 44.3229 87.1721 51.7362 83.1547 61.1465C79.1371 70.5625 79.0643 81.2059 82.9524 90.7352C86.8405 100.264 94.371 107.899 103.887 111.959C113.403 116.017 124.124 116.169 133.692 112.382C143.26 108.594 150.892 101.177 154.909 91.7625C156.899 87.0993 157.941 82.0856 157.975 77.0078C158.009 71.9301 157.034 66.8877 155.107 62.169C153.18 57.4503 150.338 53.1476 146.744 49.5069C143.15 45.8662 138.873 42.9587 134.159 40.9507ZM106.859 104.934C103.077 103.321 99.6469 100.988 96.7638 98.0658C93.8806 95.1438 91.6012 91.6911 90.0557 87.9047C88.5103 84.1183 87.729 80.0725 87.7566 75.9983C87.7842 71.9241 88.6201 67.9012 90.2166 64.1596C93.4424 56.6045 99.5688 50.6537 107.249 47.6157C114.928 44.5778 123.532 44.7015 131.169 47.9598C138.803 51.2194 144.844 57.3452 147.963 64.9907C151.083 72.6362 151.026 81.1754 147.804 88.7309C144.581 96.2861 138.456 102.238 130.777 105.277C123.098 108.315 114.495 108.192 106.859 104.934Z' fill='black' fill-opacity='0.1'/%3e%3cpath d='M133.669 39.8486C123.77 35.6318 112.601 35.5179 102.617 39.5322C92.6341 43.5464 84.653 51.3603 80.4282 61.2564C76.2031 71.1586 76.0848 82.3337 80.0991 92.3232C84.1135 102.313 91.9317 110.298 101.834 114.523C111.736 118.746 122.909 118.863 132.897 114.848C142.885 110.833 150.869 103.015 155.093 93.1143C157.186 88.2103 158.291 82.9422 158.347 77.6107C158.403 72.2793 157.407 66.9891 155.418 62.0425C153.428 57.0959 150.483 52.5898 146.752 48.7817C143.02 44.9736 138.574 41.9381 133.669 39.8486ZM104.96 107.135C101.024 105.457 97.4583 103.021 94.4649 99.9645C91.4716 96.9082 89.1096 93.2922 87.514 89.3229C85.9183 85.3537 85.1202 81.1091 85.1652 76.8314C85.2103 72.5537 86.0976 68.3265 87.7765 64.3918C91.1689 56.4466 97.578 50.1742 105.594 46.9539C113.611 43.7336 122.578 43.8292 130.524 47.2196C138.468 50.6114 144.74 57.0189 147.961 65.0336C151.181 73.0484 151.088 82.0141 147.7 89.9597C144.31 97.905 137.902 104.178 129.887 107.399C121.871 110.62 112.905 110.525 104.96 107.135Z' fill='%237C7AE3'/%3e%3cpath d='M52.6839 79.4885C55.1446 75.4018 60.794 67.5684 74.2455 56.5613C94.5437 39.9519 75.3863 24.7598 54.8057 32.8511C52.6041 33.7168 46.5033 30.2513 40.8519 33.9022C37.2064 36.2573 38.6252 38.1029 37.2057 39.9486C35.7862 41.7943 30.3136 41.6857 29.1147 46.4783C28.4047 49.3176 30.3696 52.2917 30.1068 54.4288C29.844 56.5659 27.7697 58.4923 27.6708 61.3136C27.6279 62.5052 27.8205 63.6936 28.2375 64.8108C28.6546 65.928 29.2879 66.9523 30.1013 67.825C30.9146 68.6977 31.8922 69.4019 32.9781 69.8972C34.064 70.3925 35.2369 70.6693 36.4299 70.7117C36.4396 73.0675 37.3605 75.3283 39.0001 77.0216C40.6396 78.715 42.871 79.7099 45.2278 79.7984C46.739 79.8536 48.2399 79.5289 49.5928 78.854C50.9352 80.0898 52.0876 80.4785 52.6839 79.4885Z' fill='%23E67542'/%3e%3cpath d='M52.6331 75.267C52.6331 72.7128 52.6287 60.0584 52.6329 59.8456C45.6124 60.8792 46.2081 47.5964 53.3113 50.8601C54.874 51.8534 59.278 50.8601 58.8518 42.6299C66.5232 50.8601 75.4298 41.2608 76.1935 49.0829C77.2366 59.7638 76.1873 70.9416 69.5418 70.9424C68.8148 70.9336 67.8104 70.5376 67.0961 70.4025V75.267C67.0961 78.105 67.0961 79.524 67.0961 79.524C67.0961 79.524 63.6558 87.8393 59.9883 87.7934C56.3208 87.7474 52.6331 79.524 52.6331 79.524C52.6331 79.524 52.6331 78.105 52.6331 75.267Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M64.3333 50.3276C63.5798 50.5044 62.9511 50.8026 62.6133 51.0148C62.4527 51.1157 62.2405 51.0675 62.1394 50.907C62.0383 50.7465 62.0867 50.5345 62.2474 50.4336C62.6482 50.1818 63.3472 49.8536 64.1762 49.6592C65.0054 49.4647 65.9909 49.398 66.9478 49.7011C67.1287 49.7584 67.2289 49.9513 67.1715 50.1321C67.1141 50.3128 66.9209 50.4129 66.74 50.3556C65.9386 50.1017 65.0867 50.1509 64.3333 50.3276Z' fill='%23E67542'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M72.4901 50.2526C72.0519 50.2273 71.6446 50.3393 71.4153 50.4444C71.2428 50.5236 71.0388 50.448 70.9595 50.2757C70.8803 50.1034 70.9559 49.8996 71.1284 49.8205C71.4457 49.6749 71.9648 49.5345 72.5298 49.5672C73.1034 49.6003 73.7387 49.814 74.2387 50.3942C74.3625 50.5379 74.3463 50.7546 74.2024 50.8783C74.0585 51.002 73.8415 50.9858 73.7177 50.8421C73.3643 50.432 72.9197 50.2775 72.4901 50.2526Z' fill='%23E67542'/%3e%3cpath d='M65.2636 53.73C65.2636 54.5764 64.9763 55.2366 64.5569 55.2535C64.1376 55.2704 63.7804 54.6272 63.7338 53.7977C63.6872 52.9683 64.0133 52.2912 64.4405 52.2742C64.8676 52.2573 65.2326 52.909 65.2636 53.73Z' fill='%23232E36'/%3e%3cpath d='M73.1057 53.73C73.1057 54.5764 72.8183 55.2366 72.3989 55.2535C71.9796 55.2704 71.6223 54.6272 71.5757 53.7977C71.5291 52.9683 71.8631 52.2912 72.2825 52.2742C72.7018 52.2573 73.1057 52.909 73.1057 53.73Z' fill='%23232E36'/%3e%3cpath d='M66.2648 63.3943C66.8016 63.8846 67.5305 64.171 68.2987 64.1927C68.673 64.1927 69.0473 64.1319 69.3921 64.0061C69.7368 63.8803 70.052 63.6937 70.313 63.455C70.574 63.2164 70.7809 62.9387 70.9188 62.6306C71.0567 62.3225 71.1207 61.9927 71.1108 61.663L65.4325 61.5762C65.4325 62.2531 65.7329 62.9083 66.2648 63.3943Z' fill='%235C3737'/%3e%3cpath d='M66.6534 63.6845C66.1677 63.3721 65.7995 62.9422 65.6012 62.4432C66.2654 62.3217 66.9656 62.4348 67.5356 62.7559C68.1056 63.077 68.5343 63.5891 68.6879 64.1706C68.569 64.1836 68.4334 64.191 68.3144 64.1954C67.7147 64.178 67.1342 63.9969 66.6534 63.6845Z' fill='%23FFC3A6'/%3e%3cpath d='M65.5169 61.8424C65.4831 61.7978 65.4512 61.6463 65.4394 61.5762L71.1125 61.6629C71.1181 61.7768 71.096 61.9827 71.0843 62.0715C70.746 62.1148 65.5592 61.8981 65.5169 61.8424Z' fill='white'/%3e%3cpath d='M69.415 54.5875C69.5748 53.8608 69.5155 53.103 69.2444 52.4099C68.9733 51.7168 68.5026 51.1196 67.8918 50.6936C67.281 50.2676 66.5575 50.0319 65.8127 50.0164C65.0679 50.001 64.3352 50.2063 63.7072 50.6066C63.0792 51.0068 62.5841 51.584 62.2843 52.2652C61.9846 52.9464 61.8937 53.7011 62.0231 54.4338C62.1526 55.1666 62.4966 55.8446 63.0116 56.3822C63.5267 56.9198 64.1897 57.2929 64.9169 57.4543C65.4007 57.5617 65.901 57.5727 66.3891 57.4866C66.8772 57.4006 67.3435 57.2193 67.7614 56.953C68.1792 56.6867 68.5403 56.3407 68.8241 55.9348C69.1078 55.5289 69.3086 55.0711 69.415 54.5875V54.5875ZM68.8783 54.4671C68.743 55.0879 68.4266 55.6547 67.9691 56.0961C67.5116 56.5375 66.9335 56.8336 66.3076 56.9471C65.6818 57.0607 65.0363 56.9865 64.4526 56.734C63.869 56.4815 63.3732 56.062 63.028 55.5284C62.6828 54.9947 62.5035 54.371 62.5128 53.7357C62.5222 53.1004 62.7196 52.4821 63.0804 51.9589C63.4411 51.4356 63.9489 51.0308 64.5398 50.7954C65.1306 50.5601 65.778 50.5049 66.4002 50.6367C67.2336 50.8212 67.96 51.3276 68.4209 52.0452C68.8818 52.7629 69.0398 53.6335 68.8603 54.4671H68.8783Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M54.1392 50.9965C54.1392 50.879 54.2346 50.7837 54.3523 50.7837C55.1459 50.7837 56.4797 50.8699 57.9167 51.1276C59.3512 51.3849 60.9056 51.816 62.1294 52.5145C62.2316 52.5729 62.2671 52.7029 62.2087 52.8049C62.1504 52.907 62.0202 52.9425 61.918 52.8842C60.7551 52.2204 59.2552 51.8002 57.8413 51.5466C56.4299 51.2935 55.1213 51.2094 54.3523 51.2094C54.2346 51.2094 54.1392 51.1141 54.1392 50.9965Z' fill='white'/%3e%3cpath d='M77.7846 54.2924C77.9448 53.5654 77.8856 52.8073 77.6144 52.1139C77.3433 51.4205 76.8724 50.823 76.2613 50.3969C75.6502 49.9708 74.9264 49.7352 74.1813 49.72C73.4361 49.7048 72.7033 49.9106 72.0752 50.3114C71.4472 50.7122 70.9523 51.29 70.653 51.9717C70.3537 52.6535 70.2635 53.4085 70.3938 54.1415C70.5241 54.8744 70.869 55.5523 71.385 56.0895C71.901 56.6266 72.5648 56.9989 73.2926 57.1592C73.776 57.2657 74.2757 57.276 74.7631 57.1895C75.2505 57.1031 75.7161 56.9216 76.1332 56.6553C76.5504 56.3891 76.9109 56.0434 77.1943 55.638C77.4776 55.2325 77.6782 54.7753 77.7846 54.2924ZM77.248 54.172C77.1115 54.7933 76.7936 55.3603 76.3345 55.8011C75.8754 56.242 75.2958 56.537 74.6688 56.6488C74.0419 56.7605 73.3958 56.6841 72.8124 56.4291C72.2289 56.1741 71.7343 55.752 71.391 55.2162C71.0477 54.6804 70.8712 54.055 70.8839 53.419C70.8965 52.783 71.0976 52.165 71.4619 51.6432C71.8262 51.1214 72.3372 50.7193 72.9303 50.4876C73.5234 50.2559 74.1719 50.2051 74.794 50.3416C75.6273 50.5261 76.3538 51.0325 76.8147 51.7501C77.2756 52.4678 77.4335 53.3384 77.254 54.172H77.248Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M69.7956 52.8934C69.9058 52.8493 70.032 52.9021 70.0774 53.0114C70.4374 53.8769 70.9026 55.1106 71.049 56.2258C71.1222 56.7831 71.1186 57.3296 70.9688 57.7922C70.8162 58.2634 70.511 58.6464 69.9986 58.8529C69.8885 58.8973 69.7622 58.8447 69.7165 58.7356C69.6707 58.6264 69.7229 58.5019 69.833 58.4576C70.2121 58.3048 70.4379 58.0287 70.5575 57.6592C70.68 57.2811 70.6903 56.8055 70.6209 56.2776C70.4823 55.2223 70.0369 54.0333 69.6783 53.1711C69.6328 53.0618 69.6853 52.9375 69.7956 52.8934Z' fill='%23ECA06F'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.7'%3e%3cpath d='M66.9043 70.709C63.5479 69.934 60.3686 68.4845 57.5419 66.4404C57.5419 66.4404 59.8671 72.4222 66.8909 73.5457L66.9043 70.709Z' fill='%23FFDCC0'/%3e%3c/g%3e%3cpath d='M86.2402 85.6966L83.6541 98.1324C83.3778 99.4669 83.0683 100.801 82.7257 102.136C82.361 103.599 81.941 105.052 81.499 106.495L74.9341 127.729L74.6468 128.668L74.3594 129.588L73.6742 131.802L73.0221 133.917H49.1499L48.5089 131.802L47.7463 129.301L47.5584 128.668L46.8953 126.474L41.0489 107.227C40.5405 105.546 40.1094 103.836 39.7447 102.126C39.3911 100.446 39.1148 98.7552 38.9158 97.0648L35.9442 86.8079L40.9273 83.2648L47.68 80.6156L47.9784 80.4969L52.4545 78.7472L56.4782 77.7783H66.8097L69.4965 78.3913L71.5191 79.2711L73.9726 80.3388L78.7802 82.4443L86.2402 85.6966Z' fill='%23ADDECE'/%3e%3cpath d='M67.0952 80.1126V75.9585H52.6322V79.1115C52.6322 79.1115 57.0459 88.1372 60.7797 88.1821C64.5134 88.2269 67.0952 80.1126 67.0952 80.1126Z' fill='%23FFDCC0'/%3e%3cpath d='M88.5718 165.62L61.9477 180.22L32.3395 168.476C34.3399 157.563 40.0427 146.136 44.0988 138.998C46.6076 134.58 48.4975 131.802 48.4975 131.802H73.6738C75.1658 133.917 76.6026 136.379 77.962 138.998C84.0737 150.752 88.5718 165.62 88.5718 165.62Z' fill='%233A6598'/%3e%3cpath d='M72.5019 241.224C67.7937 241.224 63.9477 237.883 63.804 233.672L61.8367 170.04C61.8367 163.209 68.0811 157.624 75.718 157.624C83.3549 157.624 89.5992 163.209 89.5992 170.04C91.9975 191.352 88.3946 215.769 80.7466 235.955C79.553 239.109 76.2264 241.224 72.5019 241.224Z' fill='%233A6598'/%3e%3cpath d='M49.3267 241.431C54.0348 241.431 57.8809 238.09 58.0246 233.879L59.9918 170.247C59.9918 163.416 53.7475 157.831 46.1106 157.831C38.4737 157.831 32.2294 163.416 32.2294 170.247C29.8311 191.559 33.434 215.976 41.082 236.162C42.2756 239.316 45.6022 241.431 49.3267 241.431Z' fill='%233A6598'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M110.559 135.866C113.983 133.609 115.031 128.842 112.898 125.219L92.5777 91.2852C90.4448 87.6618 85.9402 86.5534 82.515 88.8094L82.0831 88.4269C78.6587 90.6837 78.0423 95.8333 80.1752 99.4574L100.496 133.39C102.628 137.014 107.133 138.122 110.559 135.866Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.4261 113.741L79.3513 98.2105C77.1633 94.4666 78.2483 89.4964 81.7613 87.1647C85.2743 84.8338 89.9388 85.9893 92.126 89.7331L101.584 104.99L88.4261 113.741Z' fill='%23ADDECE'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M116.239 84.497C118.532 84.961 120.114 87.0326 119.83 89.2003L114.355 131.039C113.717 134.862 109.869 137.315 105.8 136.492C101.695 135.661 98.969 131.824 99.7669 127.999L111.308 87.2877C111.883 85.2582 114.021 84.0484 116.239 84.497Z' fill='%23FFDCC0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M122.399 75.2275C122.399 75.2275 122.436 86.619 118.877 90.5542C115.963 93.775 112.949 89.581 112.949 89.581C112.949 89.581 110.659 87.3995 108.88 83.3445C107.709 80.6729 106.011 75.2967 107.373 74.3027C109.15 73.0061 110.711 79.2488 112.175 78.721C113.678 78.1803 113.802 77.1003 114.277 73.7927C114.575 71.7248 114.731 69.5809 114.789 67.7366C114.887 64.6357 121.337 64.7032 122.399 75.2275Z' fill='%23FFDCC0'/%3e%3cpath d='M116.136 66.175C116.274 66.1264 116.423 66.2052 116.469 66.3511C116.505 66.4646 116.468 66.5852 116.385 66.6561L116.374 66.6625L116.372 66.6733C116.367 66.693 116.362 66.7183 116.358 66.7485L116.353 66.7973C116.341 66.9429 116.345 67.1455 116.363 67.3876C116.375 67.5396 116.392 67.702 116.412 67.869L116.449 68.1439C116.461 68.2251 116.471 68.295 116.481 68.3511C116.724 70.4154 116.647 72.2808 116.371 73.873C116.315 74.1943 116.255 74.4778 116.195 74.721L116.133 74.956C116.125 74.985 116.118 75.0087 116.112 75.0271C116.066 75.1731 115.917 75.2521 115.779 75.2037C115.641 75.1552 115.567 74.9976 115.613 74.8517L115.63 74.7919C115.641 74.7542 115.654 74.7049 115.67 74.6444L115.686 74.5801C115.743 74.3499 115.8 74.0799 115.853 73.7723C116.121 72.2336 116.195 70.4249 115.96 68.4341L115.938 68.2925C115.922 68.1831 115.906 68.0647 115.89 67.9411C115.869 67.7655 115.851 67.5942 115.839 67.4322L115.824 67.2052C115.791 66.5962 115.848 66.2766 116.136 66.175Z' fill='%23FFC3A6'/%3e%3cpath d='M118.591 66.3777C118.735 66.3904 118.843 66.5249 118.831 66.6782C118.819 66.8314 118.692 66.9454 118.547 66.9327C118.193 66.9017 118.042 67.1578 118.034 67.7271C118.03 67.948 118.052 68.1891 118.091 68.4299L118.123 68.6049C118.132 68.6531 118.14 68.6901 118.145 68.7123L118.166 68.7889C118.178 68.8367 118.194 68.8988 118.211 68.9746C118.258 69.1823 118.306 69.4237 118.35 69.6965C118.636 71.4676 118.649 73.5435 118.213 75.7951C118.184 75.9458 118.045 76.0428 117.903 76.012C117.76 75.9811 117.668 75.8339 117.698 75.6833C118.12 73.5042 118.106 71.4969 117.831 69.7903C117.797 69.5821 117.762 69.394 117.726 69.2269L117.671 68.9845C117.658 68.9326 117.647 68.8929 117.639 68.8637L117.615 68.7575C117.602 68.6938 117.587 68.6149 117.573 68.5241C117.528 68.2519 117.503 67.9778 117.507 67.718C117.52 66.9034 117.825 66.3561 118.507 66.3729L118.591 66.3777Z' fill='%23FFC3A6'/%3e%3cpath d='M120.307 71.7312C120.679 73.9047 120.603 75.6557 120.245 76.9958C120.129 77.4307 120.01 77.7235 119.908 77.9059L119.76 78.1182L119.61 78.3381C119.533 78.4539 119.45 78.5782 119.365 78.7103C118.956 79.3396 118.547 80.0161 118.165 80.7128C117.732 81.5046 117.362 82.2722 117.076 82.9954C116.341 84.8525 116.22 86.2568 116.83 87.0223C116.924 87.1398 116.91 87.3155 116.799 87.4147C116.688 87.5138 116.522 87.499 116.428 87.3814C115.648 86.4038 115.786 84.8144 116.59 82.7804C116.886 82.033 117.266 81.2447 117.71 80.4337C118.098 79.7235 118.515 79.0352 118.931 78.3947L119.101 78.1363L119.391 77.7079C119.434 77.6465 119.463 77.606 119.47 77.598L119.508 77.5185C119.52 77.4927 119.533 77.4616 119.548 77.425C119.612 77.2663 119.677 77.0729 119.738 76.8442C120.088 75.5351 120.153 73.7855 119.739 71.5382L119.735 71.4273C119.723 71.051 119.732 70.6283 119.779 70.2243C119.847 69.6423 119.981 69.2034 120.224 68.9461C120.327 68.8373 120.493 68.8372 120.596 68.9458C120.687 69.0424 120.698 69.1925 120.627 69.3011L120.596 69.3396C120.46 69.4836 120.356 69.8254 120.302 70.2925C120.267 70.5889 120.255 70.9015 120.257 71.1938L120.262 71.4745L120.307 71.7312Z' fill='%23FFC3A6'/%3e%3cpath d='M112.339 79.2254C112.438 79.108 112.609 79.0981 112.72 79.2033L112.838 79.3198L112.984 79.4685C113.035 79.5214 113.088 79.5776 113.143 79.6368C113.458 79.9751 113.772 80.3454 114.066 80.7366C114.602 81.4491 115.009 82.1503 115.238 82.8181C115.503 83.5907 115.517 84.2934 115.225 84.8931C115.156 85.0331 114.993 85.088 114.861 85.0156C114.729 84.9433 114.677 84.7711 114.745 84.6311C114.96 84.1914 114.949 83.6483 114.731 83.0126C114.525 82.412 114.146 81.7601 113.644 81.0918C113.363 80.7176 113.061 80.3619 112.759 80.0371L112.606 79.8759L112.467 79.7341C112.415 79.6818 112.379 79.6461 112.36 79.6283C112.249 79.5232 112.24 79.3427 112.339 79.2254Z' fill='%23FFC3A6'/%3e%3cpath d='M65.7556 98.6639L80.4829 98.3675C80.841 98.3603 81.1826 98.5274 81.3767 98.8281C84.6881 103.96 86.5539 115.497 87.3038 126.441C87.9024 135.178 89.3198 146.721 90.3582 155.178L90.3584 155.18C90.6305 157.397 90.8766 159.401 91.0751 161.087L94.4559 216.939C94.5 217.668 93.8314 218.233 93.118 218.076C86.9394 216.716 77.3803 215.253 66.1598 217.641C56.3826 219.005 36.0383 219.702 28.9616 217.532C28.4882 217.386 28.2182 216.914 28.2799 216.423L35.2022 161.422C35.329 160.507 35.4557 159.472 35.5965 158.322C36.3407 152.24 37.4802 142.929 41.1336 130.979C45.4342 116.911 47.9965 105.651 48.2219 100.603C48.2485 100.007 48.7104 99.5089 49.3064 99.4794L65.7556 98.6639Z' fill='%2321D49B'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M50.8522 104.378C51.4516 104.422 51.974 103.973 52.0191 103.375C52.0642 102.776 51.6149 102.254 51.0155 102.209C50.4161 102.164 49.8936 102.613 49.8486 103.212C49.8035 103.811 50.2528 104.333 50.8522 104.378ZM50.825 104.739C51.6242 104.799 52.3208 104.2 52.3809 103.402C52.441 102.603 51.8419 101.908 51.0427 101.848C50.2435 101.788 49.5469 102.386 49.4868 103.185C49.4267 103.983 50.0258 104.679 50.825 104.739Z' fill='%23999999'/%3e%3cpath d='M47.9675 97.9659C46.362 91.3142 43.9688 85.9784 42.3459 82.9422C42.0822 82.4487 42.065 81.8367 42.5177 81.5075C43.1526 81.0455 44.0914 80.7233 44.7875 80.651C45.1694 80.6114 45.5119 80.8261 45.7391 81.1354C48.8269 85.338 50.7598 92.616 51.6704 97.2877C51.8535 98.227 51.1901 99.1092 50.2401 99.2261L49.8355 99.2759C48.9716 99.3823 48.1716 98.8118 47.9675 97.9659Z' fill='%23F5F5F5'/%3e%3cpath d='M51.7485 98.3189L48.5209 98.6589C48.2628 98.6861 48.1031 98.9534 48.2014 99.1935C48.2669 99.3534 48.4302 99.4509 48.6021 99.4328L51.8297 99.0928C52.0878 99.0657 52.2476 98.7983 52.1492 98.5582C52.0837 98.3983 51.9204 98.3008 51.7485 98.3189Z' fill='%23999999'/%3e%3cpath d='M50.8856 103.516L50.2094 99.0955C50.1922 98.9832 50.284 98.8841 50.3973 98.8926C50.4794 98.8987 50.5463 98.9607 50.5587 99.042L51.2349 103.463C51.2521 103.575 51.1603 103.674 51.047 103.666C50.965 103.66 50.8981 103.598 50.8856 103.516Z' fill='%23999999'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.2902 103.605C79.8896 103.65 80.412 103.201 80.4571 102.602C80.5022 102.003 80.0528 101.481 79.4534 101.436C78.854 101.391 78.3316 101.84 78.2865 102.439C78.2415 103.038 78.6908 103.56 79.2902 103.605ZM79.263 103.966C80.0622 104.026 80.7587 103.427 80.8188 102.629C80.879 101.83 80.2798 101.135 79.4806 101.075C78.6815 101.015 77.9849 101.614 77.9248 102.412C77.8647 103.21 78.4638 103.906 79.263 103.966Z' fill='%23999999'/%3e%3cpath d='M76.653 96.9096C76.1636 88.8792 74.7852 85.0656 74.1172 82.392C73.938 81.6749 74.3379 80.9128 75.0706 81.011C75.5326 81.0729 75.9863 81.2441 76.3637 81.4288C76.6573 81.5725 76.8822 81.823 77.0154 82.1214C78.8023 86.1248 79.5138 92.1643 80.1509 96.5504C80.2884 97.4974 79.6249 98.381 78.6749 98.4979L78.5582 98.5123C77.5817 98.6324 76.7128 97.8914 76.653 96.9096Z' fill='%23F5F5F5'/%3e%3cpath d='M80.1825 97.5914L76.9549 97.9313C76.6969 97.9585 76.5371 98.2259 76.6354 98.4659C76.701 98.6259 76.8642 98.7234 77.0361 98.7053L80.2637 98.3653C80.5218 98.3381 80.6816 98.0708 80.5832 97.8307C80.5177 97.6708 80.3545 97.5733 80.1825 97.5914Z' fill='%23999999'/%3e%3cpath d='M79.3196 102.789L78.6433 98.368C78.6261 98.2557 78.7179 98.1565 78.8313 98.165C78.9133 98.1712 78.9802 98.2331 78.9926 98.3144L79.6689 102.735C79.6861 102.848 79.5943 102.947 79.481 102.938C79.3989 102.932 79.332 102.87 79.3196 102.789Z' fill='%23999999'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M64.7765 151.213C64.7765 151.213 57.7483 149.238 57.3246 145.007C56.9406 141.174 60.759 140.363 60.759 140.363C60.759 140.363 64.4219 138.962 68.7987 139.07C71.6818 139.142 77.156 139.827 77.3342 141.328C77.5671 143.287 71.4145 142.155 71.1404 143.561C70.8588 145.003 72.1134 145.33 74.7254 146.998C76.3574 148.041 78.3773 148.437 79.5928 149.582C81.9684 151.816 75.0756 155.041 64.7765 151.213Z' fill='%23FFDCC0'/%3e%3cpath d='M70.7659 147.314C70.8692 147.22 71.0306 147.227 71.1264 147.33L71.2094 147.413C71.2582 147.46 71.3229 147.521 71.4034 147.592C71.6415 147.803 71.9278 148.03 72.2623 148.264C73.9226 149.427 76.0452 150.295 78.6293 150.594C78.7694 150.61 78.8705 150.736 78.8551 150.874C78.8398 151.012 78.7138 151.111 78.5737 151.095C75.8995 150.785 73.6968 149.885 71.9695 148.675C71.6185 148.429 71.3167 148.19 71.0643 147.966L70.945 147.858C70.8556 147.775 70.7914 147.712 70.7524 147.67C70.6566 147.567 70.6626 147.408 70.7659 147.314Z' fill='%23FFC3A6'/%3e%3cpath d='M68.9935 149.317C69.0754 149.204 69.2348 149.179 69.3494 149.261C71.1022 150.512 73.1323 151.248 75.0799 151.6L75.3362 151.644C75.4179 151.658 75.4958 151.669 75.5696 151.68L75.828 151.712C75.8533 151.715 75.8732 151.717 75.8874 151.718C76.0278 151.73 76.1327 151.852 76.1217 151.991C76.1106 152.13 75.9878 152.232 75.8473 152.22L75.7326 152.209C75.6988 152.205 75.6596 152.2 75.6152 152.194C75.4322 152.171 75.2233 152.138 74.9916 152.096C72.9753 151.731 70.8765 150.97 69.0528 149.669C68.9382 149.587 68.9116 149.429 68.9935 149.317Z' fill='%23FFC3A6'/%3e%3cpath d='M66.4883 150.177C66.5817 150.074 66.7429 150.065 66.8484 150.158L66.8921 150.194C66.9204 150.217 66.9585 150.247 67.0066 150.282L67.058 150.32C67.2448 150.455 67.4757 150.605 67.7524 150.765C68.9063 151.432 70.4453 152.052 72.4065 152.535C72.5434 152.569 72.6276 152.705 72.5946 152.841C72.5615 152.976 72.4237 153.058 72.2867 153.024C70.2781 152.53 68.6934 151.891 67.4972 151.2C67.254 151.059 67.0429 150.925 66.863 150.8L66.7589 150.726C66.6357 150.637 66.5535 150.571 66.5104 150.533C66.4049 150.44 66.395 150.281 66.4883 150.177Z' fill='%23FFC3A6'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M62.8737 144.91C63.673 142.992 62.7988 140.781 60.8906 139.89L24.0488 122.7C20.6113 121.23 16.6423 122.811 15.2246 126.216C13.7945 129.651 15.5179 133.597 19.0382 134.95L58.0753 147.116C60.0206 147.722 62.1016 146.766 62.8737 144.91Z' fill='%23FFDCC0'/%3e%3cpath d='M34.8198 84.7046C33.0884 85.3832 31.6154 86.7258 30.8125 88.5704L15.4122 123.961C13.8093 127.643 15.4843 131.933 19.1535 133.542L19.288 133.601C22.9571 135.209 27.2308 133.528 28.8338 129.845L41.0108 101.863L34.8198 84.7046Z' fill='%23FFDCC0'/%3e%3cpath d='M35.9444 83.7374C33.163 83.7374 31.0049 85.9481 30.1299 87.8901L22.5885 104.625L39.2765 110.874L41.7693 103.974C41.7693 103.974 47.4602 90.9841 43.7321 86.5155C40.9508 83.1817 35.9444 83.7374 35.9444 83.7374Z' fill='%23ADDECE'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_7342_381962'%3e%3crect x='0.5' width='168' height='168' rx='84' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_7342_381962'%3e%3crect width='347.2' height='168' fill='white' transform='translate(-152.38)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='169' height='168' viewBox='0 0 169 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_7078_429723)'%3e%3cg clip-path='url(%23clip1_7078_429723)'%3e%3cpath d='M257.711 0H-88.981V167.85H257.711V0Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 0H-89.1001V110.32H258.1V0Z' fill='%23F5F5F5'/%3e%3cpath d='M258.091 111.279H-88.376V167.775H258.091V111.279Z' fill='%23EAEAEA'/%3e%3cpath d='M258.1 125.293H-88.9409V126.289H258.1V125.293Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 136.984H-88.9409V137.98H258.1V136.984Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 153.41H-88.9409V154.406H258.1V153.41Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 116.588H-88.9409V117.583H258.1V116.588Z' fill='%23D6D6D6'/%3e%3cpath d='M203.982 168.001L168.02 110.119L167.296 110.687L202.905 168.001H203.982Z' fill='%23D6D6D6'/%3e%3cpath d='M161.609 168.001L137.656 110.119L136.857 110.537L160.633 168.001H161.609Z' fill='%23D6D6D6'/%3e%3cpath d='M121.911 168.001L108.149 110.119L107.292 110.378L120.997 168.001H121.911Z' fill='%23D6D6D6'/%3e%3cpath d='M85.0217 110.119H84.1387V168.001H85.0217V110.119Z' fill='%23D6D6D6'/%3e%3cpath d='M48.1669 168.001L61.8675 110.378L61.0153 110.119L47.2529 168.001H48.1669Z' fill='%23D6D6D6'/%3e%3cpath d='M8.53095 168.001L32.3072 110.537L31.5081 110.119L7.55518 168.001H8.53095Z' fill='%23D6D6D6'/%3e%3cpath d='M-33.741 168.001L1.86822 110.687L1.14412 110.119L-34.8228 168.001H-33.741Z' fill='%23D6D6D6'/%3e%3c/g%3e%3cpath d='M38.02 43.5251C38.02 35.5689 44.4287 29.1191 52.3343 29.1191H117.226C125.131 29.1191 131.54 35.5689 131.54 43.5251V206.793C131.54 214.749 125.131 221.199 117.226 221.199H52.3343C44.4287 221.199 38.02 214.749 38.02 206.793V43.5251Z' fill='%231F1F1F'/%3e%3cg clip-path='url(%23clip2_7078_429723)'%3e%3cpath d='M41.8374 45.4467C41.8374 39.0817 46.9644 33.9219 53.2888 33.9219H116.272C122.596 33.9219 127.723 39.0817 127.723 45.4467V204.873C127.723 211.238 122.596 216.398 116.272 216.398H53.2888C46.9644 216.398 41.8374 211.238 41.8374 204.873V45.4467Z' fill='white'/%3e%3cpath d='M49.1606 80.0204C49.1606 78.9596 50.0151 78.0996 51.0692 78.0996H66.3378C67.3919 78.0996 68.2464 78.9596 68.2464 80.0204V95.3868C68.2464 96.4476 67.3919 97.3076 66.3378 97.3076H51.0692C50.0151 97.3076 49.1606 96.4476 49.1606 95.3868V80.0204Z' fill='%23F5F5F5'/%3e%3cpath d='M72.0635 80.0204C72.0635 78.9596 72.918 78.0996 73.972 78.0996H89.2406C90.2947 78.0996 91.1492 78.9596 91.1492 80.0204V95.3868C91.1492 96.4476 90.2947 97.3076 89.2406 97.3076H73.972C72.918 97.3076 72.0635 96.4476 72.0635 95.3868V80.0204Z' fill='%23F5F5F5'/%3e%3cpath d='M94.9663 80.0204C94.9663 78.9596 95.8208 78.0996 96.8749 78.0996H112.143C113.198 78.0996 114.052 78.9596 114.052 80.0204V95.3868C114.052 96.4476 113.198 97.3076 112.143 97.3076H96.8749C95.8208 97.3076 94.9663 96.4476 94.9663 95.3868V80.0204Z' fill='%23F5F5F5'/%3e%3cpath d='M117.869 80.0204C117.869 78.9596 118.724 78.0996 119.778 78.0996H127.412V97.3076H119.778C118.724 97.3076 117.869 96.4476 117.869 95.3868V80.0204Z' fill='%23F5F5F5'/%3e%3cpath d='M49.1606 107.871C49.1606 106.28 50.4424 104.99 52.0235 104.99H117.869C119.45 104.99 120.732 106.28 120.732 107.871V121.317C120.732 122.908 119.45 124.198 117.869 124.198H52.0235C50.4424 124.198 49.1606 122.908 49.1606 121.317V107.871Z' fill='%23F5F5F5'/%3e%3cpath d='M49.1606 131.881C49.1606 130.29 50.4424 129 52.0235 129H117.869C119.45 129 120.732 130.29 120.732 131.881V145.327C120.732 146.918 119.45 148.208 117.869 148.208H52.0235C50.4424 148.208 49.1606 146.918 49.1606 145.327V131.881Z' fill='%23F5F5F5'/%3e%3cpath d='M49.1606 155.893C49.1606 154.302 50.4424 153.012 52.0235 153.012H117.869C119.45 153.012 120.732 154.302 120.732 155.893V169.339C120.732 170.93 119.45 172.22 117.869 172.22H52.0235C50.4424 172.22 49.1606 170.93 49.1606 169.339V155.893Z' fill='%23F5F5F5'/%3e%3cpath d='M49.1606 58.525C49.1606 57.6677 49.8512 56.9727 50.7031 56.9727H82.1699C83.0218 56.9727 83.7124 57.6677 83.7124 58.525C83.7124 59.3824 83.0218 60.0774 82.1699 60.0774H50.7031C49.8512 60.0774 49.1606 59.3824 49.1606 58.525Z' fill='%23F5F5F5'/%3e%3cpath d='M49.1606 63.2848C49.1606 62.4274 49.8512 61.7324 50.7031 61.7324H70.2413C71.0932 61.7324 71.7838 62.4274 71.7838 63.2848C71.7838 64.1421 71.0932 64.8372 70.2413 64.8372H50.7031C49.8512 64.8372 49.1606 64.1421 49.1606 63.2848Z' fill='%23F5F5F5'/%3e%3cpath d='M119.777 60.1809C119.777 61.9527 118.35 63.3891 116.589 63.3891C114.829 63.3891 113.401 61.9527 113.401 60.1809C113.401 58.409 114.829 56.9727 116.589 56.9727C118.35 56.9727 119.777 58.409 119.777 60.1809Z' fill='%23F5F5F5'/%3e%3cpath d='M55.5363 48.6555C55.5363 50.4274 54.109 51.8637 52.3485 51.8637C50.5879 51.8637 49.1606 50.4274 49.1606 48.6555C49.1606 46.8836 50.5879 45.4473 52.3485 45.4473C54.109 45.4473 55.5363 46.8836 55.5363 48.6555Z' fill='%23F5F5F5'/%3e%3c/g%3e%3cg filter='url(%23filter0_d_7078_429723)'%3e%3ccircle cx='133.78' cy='82.8807' r='20.16' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M133.78 103.041C144.914 103.041 153.94 94.0148 153.94 82.8807C153.94 71.7466 144.914 62.7207 133.78 62.7207C122.646 62.7207 113.62 71.7466 113.62 82.8807C113.62 94.0148 122.646 103.041 133.78 103.041ZM143.284 85.6642C145.139 85.6642 146.644 84.1599 146.644 82.3042C146.644 80.4485 145.139 78.9442 143.284 78.9442H124.277C122.421 78.9442 120.917 80.4485 120.917 82.3042C120.917 84.1599 122.421 85.6642 124.277 85.6642H143.284Z' fill='%23DD4242'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_7078_429723' x='95.8999' y='51' width='75.7598' height='75.7598' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeMorphology radius='1' operator='erode' in='SourceAlpha' result='effect1_dropShadow_7078_429723'/%3e%3cfeOffset dy='6'/%3e%3cfeGaussianBlur stdDeviation='6'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_7078_429723'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_7078_429723' result='shape'/%3e%3c/filter%3e%3cclipPath id='clip0_7078_429723'%3e%3crect x='0.5' width='168' height='168' rx='84' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_7078_429723'%3e%3crect width='347.2' height='168' fill='white' transform='translate(-89.1001)'/%3e%3c/clipPath%3e%3cclipPath id='clip2_7078_429723'%3e%3crect width='85.8857' height='182.476' fill='white' transform='translate(41.8374 33.9219)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var Styles$6 = {"icon":"index-module_icon__lXFq7"};

const logger$3 = SDK.Lib.ChariotConsole({
  label: 'Access Requests'
});
const List = () => {
  const history = Router.useHistory();
  const {
    url
  } = Router.useRouteMatch();
  const context = useContext$1();
  const [viewMode, setViewMode] = React__default.useState('PENDING');
  const [result, setResult] = React__default.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onBootHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setViewMode('PENDING');
      const newResult = yield Approval$3.getAll(context.country, context.flag, context.store);
      setResult(newResult);
      setViewMode('COMPLETED');
    } catch (error) {
      logger$3.error('Unexpected error booting access requests page', error);
      setViewMode('FAILED');
    }
  });
  const onSelectAccessRequestHandler = approval => {
    history.push(`${url}/${approval.id}`, {
      flag: context.flag,
      store: context.store
    });
  };
  React__default.useEffect(() => {
    onBootHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (viewMode === 'PENDING') {
    return jsxs(Ramen.XPage, Object.assign({
      skeleton: true
    }, {
      children: [jsx(Ramen.XHeader, {
        title: "Solicitudes de ingresos",
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XSkeletonRenderer, {
          children: [jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsxs(Ramen.XBox, Object.assign({
            gap: "m"
          }, {
            children: [jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            })]
          }))]
        })
      })]
    }));
  }
  if (viewMode === 'FAILED') {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: "Solicitudes de ingresos",
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XBox, Object.assign({
          height: "full",
          verticalAlign: "center",
          horizontalAlign: "center"
        }, {
          children: [jsx(Ramen.XImage, {
            src: img$1
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: "\u00A1Interrupci\u00F3n del servicio!"
          })), jsx(Ramen.XVSpace, {
            size: "s"
          }), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 10,
            textAlign: "center"
          }, {
            children: "Por favor, vuelve a intentarlo en unos minutos. Estamos trabajando para brindarte la mejor experiencia."
          })), jsx(Ramen.XVSpace, {
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
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          })]
        }))
      }), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          size: "xl",
          type: "solid",
          text: "Reintentar",
          onClick: onBootHandler
        })
      })]
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Solicitudes de ingresos",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XVSpace, {
        size: "xs"
      }), jsx(Ramen.XList, {
        dataSource: result || [],
        renderItem: approval => {
          return jsx(Ramen.XCard, Object.assign({
            onClick: () => onSelectAccessRequestHandler(approval)
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "flex",
              orientation: "horizontal",
              verticalAlign: "center",
              gap: "m",
              padding: "xxs"
            }, {
              children: [jsx(Ramen.XImage, {
                src: img$3
              }), jsx(Ramen.XBox, Object.assign({
                width: "flex"
              }, {
                children: jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 11
                }, {
                  children: approval.user.unique_name
                }))
              })), jsx("div", Object.assign({
                className: Styles$6['icon']
              }, {
                children: jsx(Ramen.XIcon, {
                  icon: "chevron-right-extrabold",
                  size: "s"
                })
              }))]
            }))
          }));
        }
      }), (result === null || result === void 0 ? void 0 : result.length) === 0 && jsxs(Ramen.XBox, Object.assign({
        verticalAlign: "center",
        horizontalAlign: "center"
      }, {
        children: [jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XImage, {
          src: img$2
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XText, Object.assign({
          weight: "bold",
          fontSize: 8
        }, {
          children: "No se encontraron resultados"
        })), jsx(Ramen.XVSpace, {
          size: "s"
        }), jsx(Ramen.XText, Object.assign({
          weight: "lighter",
          fontSize: 10,
          textAlign: "center"
        }, {
          children: "Estate atento que pronto pueden llegar nuevas solicitudes de ingresos."
        })), jsx(Ramen.XVSpace, {
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
      })), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      })]
    })]
  });
};
List.defaultProps = {};

var $$9 = _export;
var uncurryThis$8 = functionUncurryThisClause;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength$1 = toLength$3;
var toString$4 = toString$8;
var notARegExp = notARegexp;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis$8(''.startsWith);
var stringSlice$4 = uncurryThis$8(''.slice);
var min$1 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$9({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$4(requireObjectCoercible$2(this));
    notARegExp(searchString);
    var index = toLength$1(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$4(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice$4(that, index, index + search.length) === search;
  }
});

var classof$2 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$2(process) == 'process';

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
var wellKnownSymbol$6 = wellKnownSymbol$k;
var DESCRIPTORS = descriptors;

var SPECIES$3 = wellKnownSymbol$6('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var uncurryThis$7 = functionUncurryThis;
var fails$8 = fails$n;
var isCallable$6 = isCallable$n;
var classof$1 = classof$6;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$7(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$2 = tryToString$5;

var $TypeError$5 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$5(tryToString$2(argument) + ' is not a constructor');
};

var anObject$6 = anObject$e;
var aConstructor = aConstructor$1;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var wellKnownSymbol$5 = wellKnownSymbol$k;

var SPECIES$2 = wellKnownSymbol$5('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$6(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$6(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$9 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$9.bind(apply$2) : function () {
  return call$9.apply(apply$2, arguments);
});

var uncurryThis$6 = functionUncurryThis;

var arraySlice$1 = uncurryThis$6([].slice);

var userAgent$4 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$8 = global$m;
var apply$1 = functionApply;
var bind$3 = functionBindContext;
var isCallable$5 = isCallable$n;
var hasOwn = hasOwnProperty_1;
var fails$7 = fails$n;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set = global$8.setImmediate;
var clear = global$8.clearImmediate;
var process$3 = global$8.process;
var Dispatch = global$8.Dispatch;
var Function$1 = global$8.Function;
var MessageChannel = global$8.MessageChannel;
var String$1 = global$8.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$7(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$8.location;
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
  global$8.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$5(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
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
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$8.addEventListener &&
    isCallable$5(global$8.postMessage) &&
    !global$8.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$7(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$8.addEventListener('message', eventListener, false);
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

var userAgent$3 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$7 = global$m;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$7.MutationObserver || global$7.WebKitMutationObserver;
var document$2 = global$7.document;
var process$2 = global$7.process;
var Promise$1 = global$7.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$7, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$2.domain)) parent.exit();
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
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
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
  } else if (IS_NODE$3) {
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
    macrotask = bind$2(macrotask, global$7);
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

var global$6 = global$m;

var promiseNativeConstructor = global$6.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
  && typeof window == 'object'
  && typeof document == 'object';

var global$5 = global$m;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$4 = isCallable$n;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$4 = wellKnownSymbol$k;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$4('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$5.PromiseRejectionEvent);

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

var aCallable$5 = aCallable$a;

var $TypeError$4 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$4('Bad Promise constructor');
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

var $$8 = _export;
var IS_NODE$1 = engineIsNode;
var global$4 = global$m;
var call$8 = functionCall;
var defineBuiltIn$2 = defineBuiltIn$8;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$4;
var setSpecies = setSpecies$1;
var aCallable$4 = aCallable$a;
var isCallable$3 = isCallable$n;
var isObject$1 = isObject$a;
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
var TypeError$1 = global$4.TypeError;
var document$1 = global$4.document;
var process$1 = global$4.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent);
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
  return isObject$1(it) && isCallable$3(then = it.then) ? then : false;
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
        call$8(then, result, resolve, reject);
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
    global$4.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$4['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$8(task, global$4, function () {
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
  call$8(task, global$4, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
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
          call$8(then, value,
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
    aCallable$4(executor);
    call$8(Internal, this);
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
  Internal.prototype = defineBuiltIn$2(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$3(onRejected) && onRejected;
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
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$2(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$8(nativeThen, that, resolve, reject);
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

$$8({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var wellKnownSymbol$3 = wellKnownSymbol$k;
var Iterators = iterators;

var ITERATOR$1 = wellKnownSymbol$3('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
};

var call$7 = functionCall;
var anObject$5 = anObject$e;
var getMethod$1 = getMethod$4;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$5(iterator);
  try {
    innerResult = getMethod$1(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$7(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$5(innerResult);
  return value;
};

var bind = functionBindContext;
var call$6 = functionCall;
var anObject$4 = anObject$e;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
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
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
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
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$3(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$6(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$2 = wellKnownSymbol$k;

var ITERATOR = wellKnownSymbol$2('iterator');
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

var $$7 = _export;
var call$5 = functionCall;
var aCallable$3 = aCallable$a;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$7({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
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
        call$5($promiseResolve, C, promise).then(function (value) {
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

var $$6 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$2 = isCallable$n;
var defineBuiltIn$1 = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$6({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$2(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$1(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$5 = _export;
var call$4 = functionCall;
var aCallable$2 = aCallable$a;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$5({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate(iterable, function (promise) {
        call$4($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$4 = _export;
var call$3 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$4({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$3(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$3 = anObject$e;
var isObject = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$3(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$3 = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var aCallable$1 = aCallable$a;
var toObject$2 = toObject$6;
var IndexedObject = indexedObject;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;

var $TypeError$2 = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$1 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$1(callbackfn);
    var O = toObject$2(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$1(O);
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
        throw $TypeError$2('Reduce of empty array with no initial value');
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
  left: createMethod$1(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$1(true)
};

var fails$6 = fails$n;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$6(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$2 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$1 = CHROME_BUG || !arrayMethodIsStrict$1('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$2({ target: 'Array', proto: true, forced: FORCED$1 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var anObject$2 = anObject$e;

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

var fails$5 = fails$n;
var global$3 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$1 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$5(function () {
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

var fails$4 = fails$n;
var global$2 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$n;
var global$1 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$2 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$3 = toString$8;
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
var charAt$3 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$3 = uncurryThis$5(''.slice);

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
    var str = toString$3(string);
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
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$3(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
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
        match.input = stringSlice$3(match.input, charsAdded);
        match[0] = stringSlice$3(match[0], charsAdded);
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

var $$1 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$1({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$4 = functionUncurryThisClause;
var defineBuiltIn = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$2 = fails$n;
var wellKnownSymbol$1 = wellKnownSymbol$k;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES = wellKnownSymbol$1('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
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

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$2 = toString$8;
var requireObjectCoercible$1 = requireObjectCoercible$7;

var charAt$2 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$2 = uncurryThis$3(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$2(requireObjectCoercible$1($this));
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
          ? stringSlice$2(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$2 = functionUncurryThis;
var toObject$1 = toObject$6;

var floor = Math.floor;
var charAt = uncurryThis$2(''.charAt);
var replace = uncurryThis$2(''.replace);
var stringSlice$1 = uncurryThis$2(''.slice);
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
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
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

var call$1 = functionCall;
var anObject$1 = anObject$e;
var isCallable$1 = isCallable$n;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$1 = TypeError;

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
  throw $TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$1 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$1 = fails$n;
var anObject = anObject$e;
var isCallable = isCallable$n;
var isNullOrUndefined = isNullOrUndefined$5;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString$1 = toString$8;
var requireObjectCoercible = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$1;
var getMethod = getMethod$4;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$k;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$1([].concat);
var push$1 = uncurryThis$1([].push);
var stringIndexOf = uncurryThis$1(''.indexOf);
var stringSlice = uncurryThis$1(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
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
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString$1(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString$1(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$1(replaceValue);

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

        var matchStr = toString$1(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$1(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
          var replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

const logger$2 = SDK.Lib.ChariotConsole({
  label: 'Update Task'
});
const thereAreChanges$1 = (country, flag, store, approval, draft) => {
  let thereAreChanges = false;
  const userRoles = (approval === null || approval === void 0 ? void 0 : approval.user.roles) || [];
  const draftRoles = (draft === null || draft === void 0 ? void 0 : draft.user.roles) || [];
  // Check diferences in roles
  if (userRoles.length !== draftRoles.length) {
    thereAreChanges = true;
  }
  if (!thereAreChanges) {
    thereAreChanges = userRoles.some(role => {
      return !draftRoles.find(r => r === role);
    });
  }
  // Check diferences in sections
  if (!thereAreChanges) {
    const userSections = ((approval === null || approval === void 0 ? void 0 : approval.user.scope) || []).filter(scope => scope.startsWith(`country:${country}=>flag:${flag}=>store:${store}=>section`));
    const draftSections = ((draft === null || draft === void 0 ? void 0 : draft.user.scope) || []).filter(scope => scope.startsWith(`country:${country}=>flag:${flag}=>store:${store}=>section`));
    if (userSections.length !== draftSections.length) {
      thereAreChanges = true;
    }
    if (!thereAreChanges) {
      thereAreChanges = userSections.some(section => {
        return !draftSections.find(s => s === section);
      });
    }
  }
  return thereAreChanges;
};
const Update = () => {
  const history = Router.useHistory();
  const {
    url
  } = Router.useRouteMatch();
  const {
    taskId
  } = Router.useParams();
  const context = useContext$1();
  const [viewMode, setViewMode] = React.useState('PENDING');
  const [task, setTask] = React.useState();
  const [roles, setRoles] = React.useState([]);
  const [sections, setSections] = React.useState([]);
  const [showApproveConfirm, setShowApproveConfirm] = React.useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = React.useState(false);
  const [showWarningModal, setShowWarningModal] = React.useState(false);
  const [areTheySectors, setAreTheySectors] = React.useState(false);
  const changed = React.useMemo(() => {
    return thereAreChanges$1(context.country, context.flag, context.store, task, context.draft);
  }, [context.country, context.draft, context.flag, context.store, task]);
  const onGoBackHandler = () => {
    if (changed) {
      setShowWarningModal(true);
      return;
    }
    context.setDraft(null);
    history.goBack();
  };
  const onBootHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setViewMode('PENDING');
      const [task, roles, sections] = yield Promise.all([Approval$3.get(context.country, context.flag, context.store, taskId), Role$1.getAll(context.country, context.flag, context.store), Section$1.getAll(context.country, context.flag, context.store)]);
      if (!context.draft || context.draft.id !== task.id) {
        context.setDraft(task);
      }
      setTask(task);
      setRoles(roles);
      setSections(sections);
      // if there are suboptions in any section, then
      // we are working with sectors, the backend controll this
      setAreTheySectors(sections.some(s => {
        var _a;
        return ((_a = s.subOptions) === null || _a === void 0 ? void 0 : _a.length) > 0;
      }));
      setViewMode('COMPLETED');
    } catch (error) {
      logger$2.error('Unexpected error booting update task page', error);
      setViewMode('FAILED');
    }
  });
  const onApproveHandler = () => {
    setShowApproveConfirm(true);
  };
  const onRejectHandler = () => {
    setShowRejectConfirm(true);
  };
  const onApproveConfirmHandler = action => __awaiter(void 0, void 0, void 0, function* () {
    setShowApproveConfirm(false);
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
      if (action === 'confirm') {
        try {
          Ramen.Api.loading.show({
            text: 'Procesando...'
          });
          yield Approval$3.update(context.country, context.flag, context.store, context.draft.id, Object.assign(Object.assign({}, context.draft), {
            state: 'COMPLETED'
          }));
          Ramen.Api.snackbar.success({
            text: 'Solicitud aprobada',
            placement: 'top',
            closable: true
          });
          context.setDraft(null);
          setTimeout(() => {
            history.goBack();
          });
        } catch (error) {
          logger$2.error('Unexpected error updating approval request', error);
          Ramen.Api.snackbar.error({
            text: 'Error aprobando, reintente por favor',
            placement: 'top',
            closable: true
          });
        } finally {
          Ramen.Api.loading.hide();
        }
      }
    }), 400);
  });
  const onRejectConfirmHandler = action => __awaiter(void 0, void 0, void 0, function* () {
    setShowRejectConfirm(false);
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
      if (action === 'confirm') {
        try {
          Ramen.Api.loading.show({
            text: 'Procesando...'
          });
          yield Approval$3.update(context.country, context.flag, context.store, context.draft.id, Object.assign(Object.assign({}, context.draft), {
            state: 'REJECTED'
          }));
          Ramen.Api.snackbar.error({
            text: 'Solicitud rechazada',
            placement: 'top',
            closable: true
          });
          context.setDraft(null);
          setTimeout(() => {
            history.goBack();
          });
        } catch (error) {
          logger$2.error('Unexpected error rejecting approval request', error);
          Ramen.Api.snackbar.error({
            text: 'Error rechazando, reintente por favor',
            placement: 'top',
            closable: true
          });
        } finally {
          Ramen.Api.loading.hide();
        }
      }
    }), 400);
  });
  const onOpenSelectorHandler = key => {
    history.push(`${url}/update/${key}`, {
      task: context.draft,
      roles,
      sections
    });
  };
  const onWarningActionClickHandler = action => {
    setShowWarningModal(false);
    setTimeout(() => {
      if (action === 'continue') {
        context.setDraft(null);
        history.goBack();
      }
    }, 400);
  };
  React.useEffect(() => {
    onBootHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (viewMode === 'PENDING') {
    return jsxs(Ramen.XPage, Object.assign({
      skeleton: true
    }, {
      children: [jsx(Ramen.XHeader, {
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XSkeletonRenderer, {
          children: [jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsxs(Ramen.XBox, Object.assign({
            gap: "m"
          }, {
            children: [jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            })]
          }))]
        })
      })]
    }));
  }
  if (viewMode === 'FAILED') {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XBox, Object.assign({
          height: "full",
          verticalAlign: "center",
          horizontalAlign: "center"
        }, {
          children: [jsx(Ramen.XImage, {
            src: img$1
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: "\u00A1Interrupci\u00F3n del servicio!"
          })), jsx(Ramen.XVSpace, {
            size: "s"
          }), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 10,
            textAlign: "center"
          }, {
            children: "Por favor, vuelve a intentarlo en unos minutos. Estamos trabajando para brindarte la mejor experiencia."
          })), jsx(Ramen.XVSpace, {
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
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          })]
        }))
      }), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          size: "xl",
          type: "solid",
          text: "Reintentar",
          onClick: onBootHandler
        })
      })]
    });
  }
  if (!context.draft) return jsx(Ramen.XPage, {});
  const scopes = [{
    id: 'roles',
    label: 'Roles'
  }];
  if (areTheySectors) {
    scopes.push({
      id: 'two-sections',
      label: 'Sectores'
    });
  } else {
    scopes.push({
      id: 'sections',
      label: 'Secciones'
    });
  }
  const selectedRoles = context.draft.user.roles;
  const selectedSections = context.draft.user.scope.filter(scope => scope.startsWith(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`));
  const rolesText = context.draft.user.roles.reduce((text, role, index, array) => {
    const id = role.replace(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:`, '');
    const match = roles.find(o => o.id === id);
    const label = (match === null || match === void 0 ? void 0 : match.label) || role.toUpperCase();
    let newText = `${text}${label}`;
    if (index !== array.length - 1) {
      newText = `${newText}, `;
    }
    return newText;
  }, '');
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [jsxs(Ramen.XBox, Object.assign({
        gap: "s",
        orientation: "horizontal",
        verticalAlign: "center"
      }, {
        children: [jsx(Ramen.XImage, {
          src: img$3,
          height: 5
        }), jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          gap: "xxs"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 9
          }, {
            children: context.draft.user.unique_name
          })), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 12
          }, {
            children: rolesText
          }))]
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XList, {
        dataSource: scopes,
        renderItem: scope => {
          const items = scope.id === 'roles' ? selectedRoles : selectedSections;
          return jsxs(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: [jsx(Ramen.XCard, {
              size: "s",
              title: scope.label,
              count: items.length,
              onClick: () => onOpenSelectorHandler(scope.id)
            }), jsx(Ramen.XVSpace, {
              size: "xs"
            })]
          }));
        }
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: showApproveConfirm,
        icon: "alert-bold-filled",
        title: "\u00BFEstas seguro que quieres aprobar la solicitud?",
        actions: [{
          key: 'confirm',
          text: 'Aprobar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setShowApproveConfirm(false),
        onActionClick: onApproveConfirmHandler
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: showRejectConfirm,
        icon: "alert-bold-filled",
        title: "\u00BFEstas seguro que quieres rechazar la solicitud?",
        actions: [{
          key: 'confirm',
          text: 'Rechazar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setShowRejectConfirm(false),
        onActionClick: onRejectConfirmHandler
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: showWarningModal,
        icon: "warning-bold-filled",
        title: "\u00BFEstas seguro de querer salir?",
        subtitle: "Al continuar perder\u00E1s los cambios realizados",
        actions: [{
          key: 'continue',
          text: 'Continuar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setShowWarningModal(false),
        onActionClick: onWarningActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Aprobar solicitud",
        disabled: !changed,
        onClick: onApproveHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Rechazar solicitud",
        onClick: onRejectHandler
      })]
    })]
  });
};
Update.defaultProps = {};

var tryToString = tryToString$5;

var $TypeError = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $ = _export;
var uncurryThis = functionUncurryThis;
var aCallable = aCallable$a;
var toObject = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$5;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString = toString$8;
var fails = fails$n;
var internalSort = arraySort$1;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

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

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var Styles$5 = {"select--hidden":"index-module_select--hidden__z-RMU"};

const Roles$1 = () => {
  const history = Router.useHistory();
  const context = useContext$1();
  const ref = React.useRef(null);
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext$1();
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    var _a;
    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const onRemoveHandler = option => {
    setPendingToRemove(option);
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const newRoles = options.map(option => `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:${option.value}`);
    setDraft(Object.assign(Object.assign({}, draft), {
      user: Object.assign(Object.assign({}, draft.user), {
        roles: newRoles
      })
    }));
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        setDraft(Object.assign(Object.assign({}, draft), {
          user: Object.assign(Object.assign({}, draft.user), {
            roles: draft.user.roles.filter(role => role !== `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}`)
          })
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.task.id !== (draft === null || draft === void 0 ? void 0 : draft.id)) {
      setDraft(location.state.task);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.task, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const selection = ((draft === null || draft === void 0 ? void 0 : draft.user.roles) || []).map(role => {
    const id = role.replace(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:`, '');
    const match = location.state.roles.find(r => r.id === id);
    return {
      id,
      label: (match === null || match === void 0 ? void 0 : match.label) || role.toUpperCase()
    };
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin roles asignados"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando un rol."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsx(Ramen.XCard, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: jsx(Ramen.XText, {
              children: option.label
            })
          })), jsx(Ramen.XButtonIcon, {
            type: "clear",
            size: "m",
            icon: "trash-2-outline",
            onClick: () => onRemoveHandler(option)
          })]
        }))
      })
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Roles seleccionados",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx("div", Object.assign({
        className: Styles$5['select--hidden']
      }, {
        children: jsx(Ramen.XSelectMultiple, {
          ref: ref,
          title: "Seleccionar roles",
          subtitle: `Asigná un rol a ${draft.user.unique_name}`,
          options: location.state.roles.map(role => ({
            label: role.label,
            value: role.id
          })),
          values: selection.map(role => role.id),
          okText: "Guardar",
          onChange: onChangeSelectionHandler
        })
      })), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar el rol "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.label}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar rol",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
Roles$1.defaultProps = {};

var Styles$4 = {"select--hidden":"index-module_select--hidden__9pu1g"};

const Sections$1 = () => {
  const ref = React.useRef(null);
  const history = Router.useHistory();
  const context = useContext$1();
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext$1();
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    var _a;
    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const onRemoveHandler = option => {
    setPendingToRemove(option);
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
    const otherScope = draft.user.scope.filter(scope => !scope.startsWith(scopeKey));
    const newScope = options.map(option => `${scopeKey}:${option.value}`);
    setDraft(Object.assign(Object.assign({}, draft), {
      user: Object.assign(Object.assign({}, draft.user), {
        scope: [...otherScope, ...newScope]
      })
    }));
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
        setDraft(Object.assign(Object.assign({}, draft), {
          user: Object.assign(Object.assign({}, draft.user), {
            scope: draft.user.scope.filter(scope => scope !== `${scopeKey}:${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}`)
          })
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.task.id !== (draft === null || draft === void 0 ? void 0 : draft.id)) {
      setDraft(location.state.task);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.task, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
  const selection = ((draft === null || draft === void 0 ? void 0 : draft.user.scope) || []).filter(scope => scope.startsWith(scopeKey)).map(scope => {
    const keyValue = scope.split('=>').pop();
    const id = keyValue.split(':')[1];
    const match = location.state.sections.find(section => section.id === id);
    return {
      id,
      label: (match === null || match === void 0 ? void 0 : match.label) || id.toUpperCase()
    };
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin secciones asignadas"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando una secci\u00F3n."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsx(Ramen.XCard, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: jsx(Ramen.XText, {
              children: option.label
            })
          })), jsx(Ramen.XButtonIcon, {
            type: "clear",
            size: "m",
            icon: "trash-2-outline",
            onClick: () => onRemoveHandler(option)
          })]
        }))
      })
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Secciones seleccionadas",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx("div", Object.assign({
        className: Styles$4['select--hidden']
      }, {
        children: jsx(Ramen.XSelectMultiple, {
          ref: ref,
          title: "Seleccionar secciones",
          subtitle: `Asigná una sección a ${draft.user.unique_name}`,
          options: location.state.sections.map(section => ({
            label: section.label,
            value: section.id
          })),
          values: selection.map(section => section.id),
          okText: "Guardar",
          onChange: onChangeSelectionHandler
        })
      })), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar la sección "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar seccion",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
Sections$1.defaultProps = {};

var Styles$3 = {"icon":"index-module_icon__a4gBY","item":"index-module_item__OaVx4","item--selected":"index-module_item--selected__v6w98","item__text":"index-module_item__text__4FwdT"};

const XTwoSelectMultiple = props => {
  const [twoOption, setTwoOption] = React__default.useState(null);
  const [selection, setSelection] = React__default.useState([]);
  const onSelectOptionHandler = option => {
    setTwoOption(option);
  };
  const onChangeSelectionHandler = (option, subOption) => {
    let newSelection = [...selection];
    let newOption = selection.find(o => o.id === option.id);
    if (!newOption) {
      newOption = Object.assign(Object.assign({}, option), {
        subOptions: []
      });
      newSelection = [...newSelection, newOption];
    }
    const newSubOption = newOption.subOptions.find(o => o.id === subOption.id);
    if (!newSubOption) {
      newOption.subOptions = [...newOption.subOptions, subOption];
    } else {
      newOption.subOptions = newOption.subOptions.filter(o => o.id !== subOption.id);
    }
    if (newOption.subOptions.length === 0) {
      newSelection = newSelection.filter(o => o.id !== (newOption === null || newOption === void 0 ? void 0 : newOption.id));
    }
    setSelection(newSelection);
  };
  const onCloseHandler = () => {
    if (props.onClose) {
      props.onClose();
    }
  };
  const onSaveHandler = () => {
    if (props.onChange) {
      props.onChange(selection);
    }
  };
  React__default.useEffect(() => {
    setTwoOption(null);
  }, [props.visible]);
  React__default.useEffect(() => {
    if (props.visible) {
      // deep clone
      setSelection((props.values || []).map(s => Object.assign(Object.assign({}, s), {
        subptions: s.subOptions.map(o => Object.assign({}, o))
      })));
    } else {
      setSelection([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);
  const modalTitle = !twoOption ? props.title : `${twoOption.label}`;
  const modalSubtitle = !twoOption ? props.subtitle : props.twoSubtitle;
  let modalContent = jsx(Ramen.XList, {
    dataSource: props.options,
    renderItem: option => jsx(Ramen.XCard, Object.assign({
      size: "l",
      onClick: () => onSelectOptionHandler(option)
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        width: "flex",
        orientation: "horizontal",
        horizontalAlign: "between",
        verticalAlign: "center"
      }, {
        children: [jsxs(Ramen.XBox, {
          children: [jsx(Ramen.XVSpace, {
            size: "s"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 10
          }, {
            children: option.label
          })), jsx(Ramen.XVSpace, {
            size: "s"
          })]
        }), jsx("div", Object.assign({
          className: Styles$3['icon']
        }, {
          children: jsx(Ramen.XIcon, {
            size: "s",
            icon: "chevron-right-extrabold"
          })
        }))]
      }))
    }))
  });
  if (twoOption) {
    modalContent = jsx(Ramen.XList, {
      dataSource: twoOption.subOptions,
      renderItem: subOption => {
        const match = selection.find(o => o.id === twoOption.id);
        const isSelected = !!(match === null || match === void 0 ? void 0 : match.subOptions.find(o => o.id === subOption.id));
        const itemClass = [Styles$3['item']];
        if (isSelected) {
          itemClass.push(Styles$3['item--selected']);
        }
        return jsx("div", Object.assign({
          className: itemClass.join(' ')
        }, {
          children: jsx(Ramen.XCard, Object.assign({
            borderType: "solid",
            onClick: () => onChangeSelectionHandler(twoOption, subOption)
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "flex",
              orientation: "horizontal",
              verticalAlign: "center"
            }, {
              children: [jsxs("div", Object.assign({
                className: Styles$3['item__text']
              }, {
                children: [jsx(Ramen.XVSpace, {
                  size: "xs"
                }), jsx(Ramen.XText, Object.assign({
                  weight: "bold",
                  fontSize: 10
                }, {
                  children: subOption.label
                })), jsx(Ramen.XVSpace, {
                  size: "xs"
                })]
              })), jsx(Ramen.XCheckbox, {
                selected: isSelected
              })]
            }))
          }))
        }));
      }
    });
  }
  return jsx(Ramen.XModal, Object.assign({
    size: "l",
    visible: props.visible,
    title: modalTitle,
    subtitle: modalSubtitle,
    actions: [{
      key: 'save',
      text: 'Guardar',
      type: 'solid'
    }],
    onClose: onCloseHandler,
    onActionClick: onSaveHandler
  }, {
    children: modalContent
  }));
};
XTwoSelectMultiple.defaultProps = {};

var Components = {
  XTwoSelectMultiple
};

const TwoSections$1 = () => {
  const history = Router.useHistory();
  const context = useContext$1();
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext$1();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    setModalVisible(true);
  };
  const onRemoveHandler = (option, subOption) => {
    setPendingToRemove({
      option,
      subOption
    });
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
    const otherScope = draft.user.scope.filter(scope => !scope.startsWith(scopeKey));
    const newScope = [];
    options.forEach(option => {
      option.subOptions.forEach(subOption => {
        newScope.push(`${scopeKey}:${option.id}|${subOption.id}`);
      });
    });
    setDraft(Object.assign(Object.assign({}, draft), {
      user: Object.assign(Object.assign({}, draft.user), {
        scope: [...otherScope, ...newScope]
      })
    }));
    setModalVisible(false);
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        const newSelection = [...selection];
        const index = newSelection.findIndex(o => o.id === (pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.option.id));
        if (index > -1) {
          const newSubOptions = newSelection[index].subOptions.filter(o => o.id !== (pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.subOption.id));
          newSelection[index].subOptions = newSubOptions;
          if (newSubOptions.length === 0) {
            newSelection.splice(index, 1);
          }
        }
        const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
        const otherScope = draft.user.scope.filter(scope => !scope.startsWith(scopeKey));
        const newScope = [];
        newSelection.forEach(option => {
          option.subOptions.forEach(subOption => {
            newScope.push(`${scopeKey}:${option.id}|${subOption.id}`);
          });
        });
        setDraft(Object.assign(Object.assign({}, draft), {
          user: Object.assign(Object.assign({}, draft.user), {
            scope: [...otherScope, ...newScope]
          })
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.task.id !== (draft === null || draft === void 0 ? void 0 : draft.id)) {
      setDraft(location.state.task);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.task, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
  const selection = [];
  ((draft === null || draft === void 0 ? void 0 : draft.user.scope) || []).filter(scope => scope.startsWith(scopeKey)).forEach(scope => {
    const keyValue = scope.split('=>').pop();
    const value = keyValue.split(':').pop();
    const [sectionId, twoSectionId] = value.split('|');
    let match = selection.find(option => option.id === sectionId);
    // add option
    const section = location.state.sections.find(option => option.id === sectionId);
    if (!match) {
      match = {
        id: sectionId,
        label: (section === null || section === void 0 ? void 0 : section.label) || sectionId.toUpperCase(),
        subOptions: []
      };
      selection.push(match);
    }
    // add subOption
    const twoSection = section === null || section === void 0 ? void 0 : section.subOptions.find(subOption => subOption.id === twoSectionId);
    match.subOptions.push({
      id: twoSectionId,
      label: (twoSection === null || twoSection === void 0 ? void 0 : twoSection.label) || twoSectionId.toUpperCase()
    });
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin sectores asignados"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando un sector."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsxs(Ramen.XCollapseCard, Object.assign({
        title: option.label,
        count: option.subOptions.length,
        defaultOpen: true
      }, {
        children: [jsx(Ramen.XList, {
          dataSource: option.subOptions.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          }),
          renderItem: subItem => jsx(Ramen.XCard, Object.assign({
            borderType: "none"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "flex",
              orientation: "horizontal",
              verticalAlign: "center"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: "flex"
              }, {
                children: jsx(Ramen.XText, {
                  children: subItem.label
                })
              })), jsx(Ramen.XButtonIcon, {
                type: "clear",
                size: "m",
                icon: "trash-2-outline",
                onClick: () => onRemoveHandler(option, subItem)
              })]
            }))
          }))
        }), jsx(Ramen.XVSpace, {
          size: "s"
        })]
      }))
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Sectores seleccionados",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Components.XTwoSelectMultiple, {
        visible: modalVisible,
        title: "Seleccionar sectores",
        subtitle: `Asigná un sector a ${draft.user.unique_name}`,
        twoSubtitle: "Asign\u00E1 las secciones correspondientes.",
        values: selection,
        options: location.state.sections,
        onClose: () => setModalVisible(false),
        onChange: onChangeSelectionHandler
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar la sección "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.subOption.label}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar sector",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
TwoSections$1.defaultProps = {};

const Approval$1 = props => {
  const {
    path
  } = useRouteMatch();
  return jsx(Context$1, Object.assign({
    extensions: props.extensions
  }, {
    children: jsxs(Switch, {
      children: [jsx(Route, {
        path: `${path}`,
        exact: true,
        component: List
      }), jsx(Route, {
        path: `${path}/:taskId`,
        exact: true,
        component: Update
      }), jsx(Route, {
        path: `${path}/:taskId/update/roles`,
        exact: true,
        component: Roles$1
      }), jsx(Route, {
        path: `${path}/:taskId/update/sections`,
        exact: true,
        component: Sections$1
      }), jsx(Route, {
        path: `${path}/:taskId/update/two-sections`,
        exact: true,
        component: TwoSections$1
      })]
    })
  }));
};
Approval$1.defaultProps = {};

const ModuleContext = /*#__PURE__*/createContext({
  country: 'yu',
  flag: '1',
  store: '1',
  draft: null,
  setDraft: () => {
    console.error('Module context setDraft() not implemented');
  }
});
const useContext = () => {
  const context = React.useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('Context Provider component must be in the root of the management flow');
  }
  return context;
};
const Context = props => {
  var _a, _b;
  const location = Router.useLocation();
  const [draft, setDraft] = React.useState(null);
  const [flag] = React.useState((_a = location.state) === null || _a === void 0 ? void 0 : _a.flag);
  const [store] = React.useState((_b = location.state) === null || _b === void 0 ? void 0 : _b.store);
  if (!flag || !store) {
    return jsx(Ramen.XPage, {
      children: jsx(Ramen.XBody, {
        children: jsx(Ramen.XAlert, {
          title: "Flag and Store must be provided in the router location state",
          type: "error"
        })
      })
    });
  }
  const value = {
    country: props.extensions.country,
    flag: flag.toLowerCase(),
    store: store.toLowerCase(),
    draft,
    setDraft
  };
  return jsx(ModuleContext.Provider, Object.assign({
    value: value
  }, {
    children: props.children
  }));
};
Context.defaultProps = {};

var img = "data:image/svg+xml,%3csvg width='169' height='168' viewBox='0 0 169 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_7145_356412)'%3e%3cg clip-path='url(%23clip1_7145_356412)'%3e%3cpath d='M257.712 0H-88.9807V167.85H257.712V0Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 0H-89.1V110.32H258.1V0Z' fill='%23F5F5F5'/%3e%3cpath d='M258.091 111.277H-88.3759V167.773H258.091V111.277Z' fill='%23EAEAEA'/%3e%3cpath d='M258.1 125.292H-88.9408V126.288H258.1V125.292Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 136.984H-88.9408V137.98H258.1V136.984Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 153.408H-88.9408V154.404H258.1V153.408Z' fill='%23D6D6D6'/%3e%3cpath d='M258.1 116.587H-88.9408V117.582H258.1V116.587Z' fill='%23D6D6D6'/%3e%3cpath d='M203.982 168L168.02 110.118L167.296 110.686L202.905 168H203.982Z' fill='%23D6D6D6'/%3e%3cpath d='M161.609 168L137.656 110.118L136.857 110.536L160.633 168H161.609Z' fill='%23D6D6D6'/%3e%3cpath d='M121.911 168L108.149 110.118L107.292 110.377L120.997 168H121.911Z' fill='%23D6D6D6'/%3e%3cpath d='M85.0217 110.118H84.1386V168H85.0217V110.118Z' fill='%23D6D6D6'/%3e%3cpath d='M48.1669 168L61.8675 110.377L61.0153 110.118L47.2529 168H48.1669Z' fill='%23D6D6D6'/%3e%3cpath d='M8.53119 168L32.3075 110.536L31.5083 110.118L7.55542 168H8.53119Z' fill='%23D6D6D6'/%3e%3cpath d='M-33.7408 168L1.86847 110.686L1.14436 110.118L-34.8225 168H-33.7408Z' fill='%23D6D6D6'/%3e%3c/g%3e%3cpath d='M32.98 46.9884C32.98 38.3573 39.9769 31.3604 48.6081 31.3604L119.455 31.3604C128.086 31.3604 135.083 38.3573 135.083 46.9884V224.107C135.083 232.738 128.086 239.735 119.455 239.735H48.608C39.9769 239.735 32.98 232.738 32.98 224.107L32.98 46.9884Z' fill='%231F1F1F'/%3e%3cg clip-path='url(%23clip2_7145_356412)'%3e%3cpath d='M37.1475 49.0718C37.1475 42.1669 42.745 36.5693 49.6499 36.5693H118.413C125.318 36.5693 130.916 42.1669 130.916 49.0718V222.022C130.916 228.927 125.318 234.525 118.413 234.525H49.6499C42.745 234.525 37.1475 228.927 37.1475 222.022L37.1475 49.0718Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M90.1266 72.1237L115.884 116.664C116.509 117.73 116.842 118.942 116.847 120.178C116.853 121.414 116.531 122.629 115.915 123.7C115.299 124.772 114.411 125.661 113.34 126.278C112.269 126.895 111.054 127.217 109.818 127.213H58.2454C57.0095 127.217 55.7944 126.895 54.7235 126.278C53.6526 125.661 52.764 124.772 52.1479 123.7C51.5319 122.629 51.2103 121.414 51.2159 120.178C51.2215 118.942 51.554 117.73 52.1797 116.664L77.9367 72.1237C78.5534 71.0525 79.4414 70.1628 80.5114 69.5441C81.5815 68.9254 82.7956 68.5996 84.0317 68.5996C85.2677 68.5996 86.4819 68.9254 87.5519 69.5441C88.6219 70.1628 89.51 71.0525 90.1266 72.1237ZM80.9374 102.208C80.9374 103.934 82.3367 105.333 84.063 105.333C85.7892 105.333 87.1886 103.934 87.1886 102.208V89.7051C87.1886 87.9789 85.7892 86.5795 84.063 86.5795C82.3367 86.5795 80.9374 87.9789 80.9374 89.7051V102.208ZM84.063 117.836C85.7892 117.836 87.1886 116.436 87.1886 114.71C87.1886 112.984 85.7892 111.584 84.063 111.584H84.0317C82.3055 111.584 80.9061 112.984 80.9061 114.71C80.9061 116.436 82.3055 117.836 84.0317 117.836H84.063Z' fill='%23FFC107'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_7145_356412'%3e%3crect x='0.5' width='168' height='168' rx='84' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_7145_356412'%3e%3crect width='347.2' height='168' fill='white' transform='translate(-89.1)'/%3e%3c/clipPath%3e%3cclipPath id='clip2_7145_356412'%3e%3crect width='93.7684' height='197.956' fill='white' transform='translate(37.1475 36.5693)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var Styles$2 = {"item":"index-module_item__ssYuA"};

let searchCtrl = new AbortController();
const logger$1 = SDK.Lib.ChariotConsole({
  label: 'Users'
});
const Users$1 = () => {
  const history = Router.useHistory();
  const {
    url
  } = Router.useRouteMatch();
  const context = useContext();
  const [viewMode, setViewMode] = React__default.useState('PENDING');
  const [result, setResult] = React__default.useState();
  const [roles, setRoles] = React__default.useState([]);
  const [sections, setSections] = React__default.useState([]);
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onBootHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setViewMode('PENDING');
      const [newResult, roles, sections] = yield Promise.all([User$1.getAll(context.country, context.flag, context.store, {
        offset: 0,
        limit: 10
      }), Role$1.getAll(context.country, context.flag, context.store), Section$1.getAll(context.country, context.flag, context.store)]);
      setResult(Object.assign(Object.assign({}, newResult), {
        offset: newResult.offset + newResult.limit
      }));
      setRoles(roles);
      setSections(sections);
      setViewMode('COMPLETED');
    } catch (error) {
      logger$1.error('Unexpected error booting users page', error);
      setViewMode('FAILED');
    }
  });
  const onSearchHandler = React__default.useMemo(() => {
    return debounce(text => __awaiter(void 0, void 0, void 0, function* () {
      try {
        if (searchCtrl) {
          // start canceling previous request
          searchCtrl.abort();
          searchCtrl = new AbortController();
        }
        const newResult = yield User$1.getAll(context.country, context.flag, context.store, {
          offset: (result === null || result === void 0 ? void 0 : result.offset) || 0,
          limit: (result === null || result === void 0 ? void 0 : result.limit) || 10,
          search: text
        }, searchCtrl.signal);
        setResult(newResult);
      } catch (error) {
        // ignore abort errors
        if (searchCtrl.signal.aborted) {
          return;
        }
        logger$1.error('Unexpected error searching users', error);
      }
    }), 300);
  }, [context.country, context.flag, context.store, result === null || result === void 0 ? void 0 : result.limit, result === null || result === void 0 ? void 0 : result.offset]);
  const onSelectUserHandler = user => {
    history.push(`${url}/${user.identifier}`, {
      user,
      roles,
      sections
    });
  };
  React__default.useEffect(() => {
    onBootHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (viewMode === 'PENDING') {
    return jsxs(Ramen.XPage, Object.assign({
      skeleton: true
    }, {
      children: [jsx(Ramen.XHeader, {
        title: "Administrar colaboradores",
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XSkeletonRenderer, {
          children: [jsx(Ramen.XSkeleton, {
            size: "xl",
            type: "image",
            width: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsxs(Ramen.XBox, Object.assign({
            gap: "m"
          }, {
            children: [jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            }), jsx(Ramen.XSkeleton, {
              size: "xl",
              type: "image",
              width: "xl"
            })]
          }))]
        })
      })]
    }));
  }
  if (viewMode === 'FAILED') {
    return jsxs(Ramen.XPage, {
      children: [jsx(Ramen.XHeader, {
        title: "Administrar colaboradores",
        onBack: onGoBackHandler
      }), jsx(Ramen.XBody, {
        children: jsxs(Ramen.XBox, Object.assign({
          height: "full",
          verticalAlign: "center",
          horizontalAlign: "center"
        }, {
          children: [jsx(Ramen.XImage, {
            src: img$1
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 8
          }, {
            children: "\u00A1Interrupci\u00F3n del servicio!"
          })), jsx(Ramen.XVSpace, {
            size: "s"
          }), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 10,
            textAlign: "center"
          }, {
            children: "Por favor, vuelve a intentarlo en unos minutos. Estamos trabajando para brindarte la mejor experiencia."
          })), jsx(Ramen.XVSpace, {
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
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          }), jsx(Ramen.XVSpace, {
            size: "xl"
          })]
        }))
      }), jsx(Ramen.XFooter, {
        children: jsx(Ramen.XButton, {
          size: "xl",
          type: "solid",
          text: "Reintentar",
          onClick: onBootHandler
        })
      })]
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Administrar colaboradores",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [jsx(Ramen.XVSpace, {
        size: "xs"
      }), jsx(Ramen.XSearchInput, {
        size: "l",
        placeholder: "Buscador",
        onChange: e => onSearchHandler(e.target.value)
      }), jsx(Ramen.XVSpace, {
        size: "xs"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XList, {
        dataSource: (result === null || result === void 0 ? void 0 : result.items) || [],
        renderItem: user => {
          const rolesText = user.roles.reduce((text, role, index, array) => {
            const id = role.replace(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:`, '');
            const match = roles.find(r => r.id === id);
            const label = (match === null || match === void 0 ? void 0 : match.label) || role.toUpperCase();
            let newText = `${text}${label}`;
            if (index !== array.length - 1) {
              newText = `${newText}, `;
            }
            return newText;
          }, '');
          return jsx(Ramen.XCard, Object.assign({
            onClick: () => onSelectUserHandler(user)
          }, {
            children: jsxs("div", Object.assign({
              className: Styles$2['item']
            }, {
              children: [jsx(Ramen.XVSpace, {
                size: "xxs"
              }), jsxs(Ramen.XBox, Object.assign({
                orientation: "horizontal",
                verticalAlign: "center",
                width: "flex",
                gap: "m"
              }, {
                children: [jsx(Ramen.XImage, {
                  src: img$3,
                  rounded: "full"
                }), jsxs(Ramen.XBox, Object.assign({
                  width: "flex",
                  gap: "xxs"
                }, {
                  children: [jsx(Ramen.XText, Object.assign({
                    weight: "bold",
                    fontSize: 11
                  }, {
                    children: user.name
                  })), jsx(Ramen.XText, Object.assign({
                    fontSize: 12
                  }, {
                    children: rolesText
                  }))]
                })), jsx(Ramen.XIcon, {
                  size: "s",
                  icon: "chevron-right-extrabold"
                })]
              })), jsx(Ramen.XVSpace, {
                size: "xxs"
              })]
            }))
          }));
        }
      }), result && result.items.length === 0 && jsxs(Ramen.XBox, Object.assign({
        height: "full",
        verticalAlign: "center",
        horizontalAlign: "center"
      }, {
        children: [jsx(Ramen.XImage, {
          src: img
        }), jsx(Ramen.XVSpace, {
          size: "xl"
        }), jsx(Ramen.XText, Object.assign({
          weight: "bold",
          fontSize: 8
        }, {
          children: "No se encontraron resultados"
        })), jsx(Ramen.XVSpace, {
          size: "s"
        }), jsx(Ramen.XText, Object.assign({
          weight: "lighter",
          fontSize: 10,
          textAlign: "center"
        }, {
          children: "Te recomendamos buscar con otro nombre, o apellido al colaborador que deseas."
        })), jsx(Ramen.XVSpace, {
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
      }))]
    })]
  });
};
Users$1.defaultProps = {};

const logger = SDK.Lib.ChariotConsole({
  label: 'Update User'
});
const thereAreChanges = (country, flag, store, user, draft) => {
  let thereAreChanges = false;
  const userRoles = user.roles;
  const draftRoles = (draft === null || draft === void 0 ? void 0 : draft.roles) || [];
  // Check diferences in roles
  if (userRoles.length !== draftRoles.length) {
    thereAreChanges = true;
  }
  if (!thereAreChanges) {
    thereAreChanges = userRoles.some(role => {
      return !draftRoles.find(r => r === role);
    });
  }
  // Check diferences in sections
  if (!thereAreChanges) {
    const userSections = user.scopes.filter(scope => scope.startsWith(`country:${country}=>flag:${flag}=>store:${store}=>section`));
    const draftSections = ((draft === null || draft === void 0 ? void 0 : draft.scopes) || []).filter(scope => scope.startsWith(`country:${country}=>flag:${flag}=>store:${store}=>section`));
    if (userSections.length !== draftSections.length) {
      thereAreChanges = true;
    }
    if (!thereAreChanges) {
      thereAreChanges = userSections.some(section => {
        return !draftSections.find(s => s === section);
      });
    }
  }
  return thereAreChanges;
};
const UpdateTask = () => {
  const history = Router.useHistory();
  const {
    url
  } = Router.useRouteMatch();
  const context = useContext();
  const location = Router.useLocation();
  const [roles, setRoles] = React.useState();
  const {
    draft,
    setDraft
  } = useContext();
  const [confirmModal, setConfirmModal] = React.useState(false);
  const [warningModal, setWarningModal] = React.useState(false);
  // if there are suboptions in any section, then
  // we are working with sectors, the backend controll this
  const [areTheySectors] = React.useState(location.state.sections.some(s => {
    var _a;
    return ((_a = s.subOptions) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }));
  const changed = React.useMemo(() => {
    return thereAreChanges(context.country, context.flag, context.store, location.state.user, context.draft);
  }, [context.country, context.draft, context.flag, context.store, location.state.user]);
  const onGoBackHandler = () => {
    if (changed) {
      setWarningModal(true);
      return;
    }
    // remove draft
    setDraft(null);
    history.goBack();
  };
  const onOpenSelectorHandler = key => {
    history.push(`${url}/update/${key}`, {
      user: draft,
      roles: location.state.roles,
      sections: location.state.sections
    });
  };
  const onConfirmActionClickHandler = action => __awaiter(void 0, void 0, void 0, function* () {
    setConfirmModal(false);
    // This setTimeout is to allow
    // modal finish the animation
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
      if (action === 'acept') {
        try {
          Ramen.Api.loading.show({
            text: 'Procesando...'
          });
          yield User$1.update(context.country, context.flag, context.store, draft.provider, draft.identifier, draft);
          Ramen.Api.snackbar.success({
            text: `Datos de ${draft === null || draft === void 0 ? void 0 : draft.name} actualizados`,
            placement: 'top',
            closable: true
          });
          setDraft(null);
          setTimeout(() => history.goBack());
        } catch (error) {
          logger.error('Unexpected error saving user changes', error);
          Ramen.Api.snackbar.error({
            text: 'No se pudo finalizar, por favor inténtalo nuevamente.',
            placement: 'top',
            closable: true
          });
        } finally {
          Ramen.Api.loading.hide();
        }
      }
    }), 400);
  });
  const onWarningActionClickHandler = action => {
    setWarningModal(false);
    setTimeout(() => {
      if (action === 'continue') {
        // remove draft
        setDraft(null);
        history.goBack();
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    const conditions = [draft === null, location.state.user.identifier !== (draft === null || draft === void 0 ? void 0 : draft.identifier), changed && history.action === 'PUSH'];
    if (conditions.some(c => c)) {
      setDraft(location.state.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.user, draft, changed, history.action]);
  // Create roles text. If not find a match with
  // the options the app show the id in uppercase
  React.useEffect(() => {
    const newRoles = ((draft === null || draft === void 0 ? void 0 : draft.roles) || []).reduce((text, role, index, array) => {
      const id = role.replace(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:`, '');
      const match = location.state.roles.find(o => o.id === id);
      const label = (match === null || match === void 0 ? void 0 : match.label) || role.toUpperCase();
      let newText = `${text}${label}`;
      if (index !== array.length - 1) {
        newText = `${newText}, `;
      }
      return newText;
    }, '');
    setRoles(newRoles);
  }, [location.state.roles, draft === null || draft === void 0 ? void 0 : draft.roles, context.country, context.flag, context.store]);
  if (!draft) return jsx(Ramen.XPage, {});
  const scopes = [{
    id: 'roles',
    label: 'Roles'
  }];
  if (areTheySectors) {
    scopes.push({
      id: 'two-sections',
      label: 'Sectores'
    });
  } else {
    scopes.push({
      id: 'sections',
      label: 'Secciones'
    });
  }
  const selectedRoles = draft.roles;
  const selectedSections = draft.scopes.filter(scope => scope.startsWith(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`));
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [jsxs(Ramen.XBox, Object.assign({
        gap: "s",
        orientation: "horizontal"
      }, {
        children: [jsx(Ramen.XImage, {
          src: img$3,
          height: 5
        }), jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          gap: "xxs"
        }, {
          children: [jsx(Ramen.XText, Object.assign({
            weight: "bold",
            fontSize: 9
          }, {
            children: draft.name
          })), jsx(Ramen.XText, Object.assign({
            weight: "lighter",
            fontSize: 12
          }, {
            children: roles
          }))]
        }))]
      })), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XList, {
        dataSource: scopes,
        renderItem: scope => {
          const items = scope.id === 'roles' ? selectedRoles : selectedSections;
          return jsxs(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: [jsx(Ramen.XCard, {
              size: "s",
              title: scope.label,
              count: items.length,
              onClick: () => onOpenSelectorHandler(scope.id)
            }), jsx(Ramen.XVSpace, {
              size: "xs"
            })]
          }));
        }
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: confirmModal,
        icon: "alert-bold-filled",
        title: "\u00BFEstas seguro que quieres guardar los cambios?",
        actions: [{
          key: 'acept',
          text: 'Aceptar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setConfirmModal(false),
        onActionClick: onConfirmActionClickHandler
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: warningModal,
        icon: "warning-bold-filled",
        title: "\u00BFEstas seguro de querer salir?",
        subtitle: "Al continuar perder\u00E1s los cambios realizados",
        actions: [{
          key: 'continue',
          text: 'Continuar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setWarningModal(false),
        onActionClick: onWarningActionClickHandler
      })]
    }), jsx(Ramen.XFooter, {
      children: jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Guardar cambios",
        disabled: !changed,
        onClick: () => setConfirmModal(true)
      })
    })]
  });
};
UpdateTask.defaultProps = {};

var Styles$1 = {"select--hidden":"index-module_select--hidden__YDEqp"};

const Roles = () => {
  const history = Router.useHistory();
  const context = useContext();
  const ref = React.useRef(null);
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext();
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    var _a;
    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const onRemoveHandler = option => {
    setPendingToRemove(option);
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const newRoles = options.map(option => `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:${option.value}`);
    setDraft(Object.assign(Object.assign({}, draft), {
      roles: newRoles
    }));
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        setDraft(Object.assign(Object.assign({}, draft), {
          roles: draft.roles.filter(role => role !== `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}`)
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.user.identifier !== (draft === null || draft === void 0 ? void 0 : draft.identifier)) {
      setDraft(location.state.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.user, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const selection = ((draft === null || draft === void 0 ? void 0 : draft.roles) || []).map(role => {
    const id = role.replace(`country:${context.country}=>flag:${context.flag}=>store:${context.store}=>role:`, '');
    const match = location.state.roles.find(r => r.id === id);
    return {
      id,
      label: (match === null || match === void 0 ? void 0 : match.label) || role.toUpperCase()
    };
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin roles asignados"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando un rol."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsx(Ramen.XCard, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: jsx(Ramen.XText, {
              children: option.label
            })
          })), jsx(Ramen.XButtonIcon, {
            type: "clear",
            size: "m",
            icon: "trash-2-outline",
            onClick: () => onRemoveHandler(option)
          })]
        }))
      })
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Roles seleccionados",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx("div", Object.assign({
        className: Styles$1['select--hidden']
      }, {
        children: jsx(Ramen.XSelectMultiple, {
          ref: ref,
          title: "Seleccionar roles",
          subtitle: `Asigná un rol a ${draft.name}`,
          options: location.state.roles.map(role => ({
            label: role.label,
            value: role.id
          })),
          values: selection.map(role => role.id),
          okText: "Guardar",
          onChange: onChangeSelectionHandler
        })
      })), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar el rol "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.label}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar rol",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
Roles.defaultProps = {};

var Styles = {"select--hidden":"index-module_select--hidden__sg19o"};

const Sections = () => {
  const ref = React.useRef(null);
  const history = Router.useHistory();
  const context = useContext();
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext();
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    var _a;
    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const onRemoveHandler = option => {
    setPendingToRemove(option);
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
    const otherScopes = draft.scopes.filter(scope => !scope.startsWith(scopeKey));
    const newScopes = options.map(option => `${scopeKey}:${option.value}`);
    setDraft(Object.assign(Object.assign({}, draft), {
      scopes: [...otherScopes, ...newScopes]
    }));
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
        setDraft(Object.assign(Object.assign({}, draft), {
          scopes: draft.scopes.filter(scope => scope !== `${scopeKey}:${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}`)
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.user.identifier !== (draft === null || draft === void 0 ? void 0 : draft.identifier)) {
      setDraft(location.state.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.user, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section:`;
  const selection = ((draft === null || draft === void 0 ? void 0 : draft.scopes) || []).filter(scope => scope.startsWith(scopeKey)).map(scope => {
    const parts = scope.split('=>');
    const id = parts.pop().split(':')[1];
    const match = location.state.sections.find(section => section.id === id);
    return {
      id,
      label: (match === null || match === void 0 ? void 0 : match.label) || id.toUpperCase()
    };
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin secciones asignadas"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando una secci\u00F3n."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsx(Ramen.XCard, {
        children: jsxs(Ramen.XBox, Object.assign({
          width: "flex",
          orientation: "horizontal",
          verticalAlign: "center"
        }, {
          children: [jsx(Ramen.XBox, Object.assign({
            width: "flex"
          }, {
            children: jsx(Ramen.XText, {
              children: option.label
            })
          })), jsx(Ramen.XButtonIcon, {
            type: "clear",
            size: "m",
            icon: "trash-2-outline",
            onClick: () => onRemoveHandler(option)
          })]
        }))
      })
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Secciones seleccionadas",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx("div", Object.assign({
        className: Styles['select--hidden']
      }, {
        children: jsx(Ramen.XSelectMultiple, {
          ref: ref,
          title: "Seleccionar secciones",
          subtitle: `Asigná una sección a ${draft.name}`,
          options: location.state.sections.map(section => ({
            label: section.label,
            value: section.id
          })),
          values: selection.map(section => section.id),
          okText: "Guardar",
          onChange: onChangeSelectionHandler
        })
      })), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar la sección "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.id}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar seccion",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
Sections.defaultProps = {};

const TwoSections = () => {
  const history = Router.useHistory();
  const context = useContext();
  const location = Router.useLocation();
  const {
    draft,
    setDraft
  } = useContext();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [removeConfirmModal, setRemoveConfirmModal] = React.useState(false);
  const [pendingToRemove, setPendingToRemove] = React.useState();
  const onGoBackHandler = () => {
    history.goBack();
  };
  const onAddHandler = () => {
    setModalVisible(true);
  };
  const onRemoveHandler = (option, subOption) => {
    setPendingToRemove({
      option,
      subOption
    });
    setRemoveConfirmModal(true);
  };
  const onChangeSelectionHandler = options => {
    if (!draft) {
      return;
    }
    const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
    const otherScopes = draft.scopes.filter(scope => !scope.startsWith(scopeKey));
    const newScopes = [];
    options.forEach(option => {
      option.subOptions.forEach(subOption => {
        newScopes.push(`${scopeKey}:${option.id}|${subOption.id}`);
      });
    });
    setDraft(Object.assign(Object.assign({}, draft), {
      scopes: [...otherScopes, ...newScopes]
    }));
    setModalVisible(false);
  };
  const onRemoveConfirmActionClickHandler = action => {
    setRemoveConfirmModal(false);
    setTimeout(() => {
      if (action === 'remove') {
        if (!draft) {
          return;
        }
        const newSelection = [...selection];
        const index = newSelection.findIndex(o => o.id === (pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.option.id));
        if (index > -1) {
          const newSubOptions = newSelection[index].subOptions.filter(o => o.id !== (pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.subOption.id));
          newSelection[index].subOptions = newSubOptions;
          if (newSubOptions.length === 0) {
            newSelection.splice(index, 1);
          }
        }
        const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
        const otherScope = draft.scopes.filter(scope => !scope.startsWith(scopeKey));
        const newScope = [];
        newSelection.forEach(option => {
          option.subOptions.forEach(subOption => {
            newScope.push(`${scopeKey}:${option.id}|${subOption.id}`);
          });
        });
        setDraft(Object.assign(Object.assign({}, draft), {
          scopes: [...otherScope, ...newScope]
        }));
      }
    }, 400);
  };
  // Create user draft if not exist
  // Draft is used to keep editions in memory
  React.useEffect(() => {
    if (location.state.user.identifier !== (draft === null || draft === void 0 ? void 0 : draft.identifier)) {
      setDraft(location.state.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.user, draft]);
  if (!draft) return jsx(Ramen.XPage, {});
  const scopeKey = `country:${context.country}=>flag:${context.flag}=>store:${context.store}=>section`;
  const selection = [];
  ((draft === null || draft === void 0 ? void 0 : draft.scopes) || []).filter(scope => scope.startsWith(scopeKey)).forEach(scope => {
    const parts = scope.split('=>');
    const keyValue = parts[parts.length - 1];
    const value = keyValue.split(':')[1];
    const [sectionId, twoSectionId] = value.split('|');
    let match = selection.find(option => option.id === sectionId);
    // add option
    const section = location.state.sections.find(option => option.id === sectionId);
    if (!match) {
      match = {
        id: sectionId,
        label: (section === null || section === void 0 ? void 0 : section.label) || sectionId.toUpperCase(),
        subOptions: []
      };
      selection.push(match);
    }
    // add subOption
    const twoSection = section === null || section === void 0 ? void 0 : section.subOptions.find(subOption => subOption.id === twoSectionId);
    match.subOptions.push({
      id: twoSectionId,
      label: (twoSection === null || twoSection === void 0 ? void 0 : twoSection.label) || twoSectionId.toUpperCase()
    });
  });
  let content = jsxs(Ramen.XBox, Object.assign({
    height: "full",
    verticalAlign: "center",
    horizontalAlign: "center"
  }, {
    children: [jsx(Ramen.XImage, {
      src: img$2
    }), jsx(Ramen.XVSpace, {
      size: "xl"
    }), jsx(Ramen.XText, Object.assign({
      weight: "bold",
      fontSize: 8
    }, {
      children: "Sin sectores asignados"
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(Ramen.XText, Object.assign({
      weight: "lighter",
      fontSize: 10
    }, {
      children: "Comienza agregando un sector."
    }))]
  }));
  if (selection.length > 0) {
    content = jsx(Ramen.XList, {
      dataSource: selection.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
      renderItem: option => jsxs(Ramen.XCollapseCard, Object.assign({
        title: option.label,
        count: option.subOptions.length,
        defaultOpen: true
      }, {
        children: [jsx(Ramen.XList, {
          dataSource: option.subOptions.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          }),
          renderItem: subItem => jsx(Ramen.XCard, Object.assign({
            borderType: "none"
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              width: "flex",
              orientation: "horizontal",
              verticalAlign: "center"
            }, {
              children: [jsx(Ramen.XBox, Object.assign({
                width: "flex"
              }, {
                children: jsx(Ramen.XText, {
                  children: subItem.label
                })
              })), jsx(Ramen.XButtonIcon, {
                type: "clear",
                size: "m",
                icon: "trash-2-outline",
                onClick: () => onRemoveHandler(option, subItem)
              })]
            }))
          }))
        }), jsx(Ramen.XVSpace, {
          size: "s"
        })]
      }))
    });
  }
  return jsxs(Ramen.XPage, {
    children: [jsx(Ramen.XHeader, {
      title: "Sectores seleccionados",
      onBack: onGoBackHandler
    }), jsxs(Ramen.XBody, {
      children: [content, jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Ramen.XVSpace, {
        size: "xl"
      }), jsx(Components.XTwoSelectMultiple, {
        visible: modalVisible,
        title: "Seleccionar sectores",
        subtitle: `Asigná un sector a ${draft.name}`,
        twoSubtitle: "Asign\u00E1 las secciones correspondientes.",
        values: selection,
        options: location.state.sections,
        onClose: () => setModalVisible(false),
        onChange: onChangeSelectionHandler
      }), jsx(Ramen.XModal, {
        size: "xs",
        visible: removeConfirmModal,
        icon: "alert-bold-filled",
        title: `¿Seguro que quieres eliminar la sección "${pendingToRemove === null || pendingToRemove === void 0 ? void 0 : pendingToRemove.subOption.label}"?`,
        actions: [{
          key: 'remove',
          text: 'Eliminar',
          type: 'solid'
        }, {
          key: 'cancel',
          text: 'Cancelar',
          type: 'outline'
        }],
        onClose: () => setRemoveConfirmModal(false),
        onActionClick: onRemoveConfirmActionClickHandler
      })]
    }), jsxs(Ramen.XFooter, {
      children: [jsx(Ramen.XButton, {
        size: "xl",
        type: "solid",
        text: "Agregar sector",
        onClick: onAddHandler
      }), jsx(Ramen.XButton, {
        size: "xl",
        type: "outline",
        text: "Volver",
        onClick: onGoBackHandler
      })]
    })]
  });
};
TwoSections.defaultProps = {};

const Management = props => {
  const {
    path
  } = useRouteMatch();
  return jsx(Context, Object.assign({
    extensions: props.extensions
  }, {
    children: jsxs(Switch, {
      children: [jsx(Route, {
        path: `${path}/`,
        exact: true,
        component: Users$1
      }), jsx(Route, {
        path: `${path}/:userId`,
        exact: true,
        component: UpdateTask
      }), jsx(Route, {
        path: `${path}/:userId/update/roles`,
        exact: true,
        component: Roles
      }), jsx(Route, {
        path: `${path}/:userId/update/sections`,
        exact: true,
        component: Sections
      }), jsx(Route, {
        path: `${path}/:userId/update/two-sections`,
        exact: true,
        component: TwoSections
      })]
    })
  }));
};
Management.defaultProps = {};

const Login = Login$1;
const Approval = Approval$1;
const Users = Management;

export { Approval, Login, Users };
