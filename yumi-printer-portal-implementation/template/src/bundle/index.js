import { jsx, jsxs } from 'react/jsx-runtime';
import * as SDK from '@team_yumi/sdk';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { initReactI18next, I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { PrintRequestStatusEnum, PrintRequestTypeEnum } from '@yumi-printer/shared';
import Ramen from '@team_yumi/ramen-web';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$c =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$b = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$a = fails$b;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var fails$9 = fails$b;

var functionBindNative = !fails$9(function () {
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

var uncurryThis$a = functionUncurryThis;

var toString$1 = uncurryThis$a({}.toString);
var stringSlice$1 = uncurryThis$a(''.slice);

var classofRaw = function (it) {
  return stringSlice$1(toString$1(it), 8, -1);
};

var uncurryThis$9 = functionUncurryThis;
var fails$8 = fails$b;
var classof = classofRaw;

var $Object$3 = Object;
var split = uncurryThis$9(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$8(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

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
  if (isNullOrUndefined$1(it)) throw new $TypeError$6("Can't call method on " + it);
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
var isCallable$e = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$d = isCallable$e;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$6 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$d(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$d(it);
};

var global$b = global$c;
var isCallable$c = isCallable$e;

var aFunction = function (argument) {
  return isCallable$c(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$b[namespace]) : global$b[namespace] && global$b[namespace][method];
};

var uncurryThis$8 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$a = global$c;
var userAgent = engineUserAgent;

var process = global$a.process;
var Deno = global$a.Deno;
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
var fails$7 = fails$b;
var global$9 = global$c;

var $String$4 = global$9.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$7(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$2 = getBuiltIn$3;
var isCallable$b = isCallable$e;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$b($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$a = isCallable$e;
var tryToString = tryToString$1;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$a(argument)) return argument;
  throw new $TypeError$5(tryToString(argument) + ' is not a function');
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
var isCallable$9 = isCallable$e;
var isObject$5 = isObject$6;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$5(val = call$4(fn, input))) return val;
  if (isCallable$9(fn = input.valueOf) && !isObject$5(val = call$4(fn, input))) return val;
  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$5(val = call$4(fn, input))) return val;
  throw new $TypeError$4("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$8 = global$c;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$5(global$8, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$8[key] = value;
  } return value;
};

var global$7 = global$c;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$7[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible = requireObjectCoercible$2;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$1(requireObjectCoercible(argument));
};

var uncurryThis$7 = functionUncurryThis;
var toObject$2 = toObject$3;

var hasOwnProperty = uncurryThis$7({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$6 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString = uncurryThis$6(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var global$6 = global$c;
var shared$2 = shared$3.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$6.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$3 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;

var $TypeError$3 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');

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
    throw new $TypeError$3("Can't convert object to primitive value");
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

var global$5 = global$c;
var isObject$3 = isObject$6;

var document$1 = global$5.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$9 = descriptors;
var fails$6 = fails$b;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$9 && !fails$6(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$8 = descriptors;
var call$2 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$2(!call$2(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$7 = descriptors;
var fails$5 = fails$b;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$2 = isObject$6;

var $String$2 = String;
var $TypeError$2 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw new $TypeError$2($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
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
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$4 = descriptors;
var hasOwn$6 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$6(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$5 = functionUncurryThis;
var isCallable$8 = isCallable$e;
var store$1 = sharedStore;

var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$8(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$4 = global$c;
var isCallable$7 = isCallable$e;

var WeakMap$1 = global$4.WeakMap;

var weakMapBasicDetection = isCallable$7(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$3 = global$c;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$5 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$3.TypeError;
var WeakMap = global$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn$5(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$5(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$b;
var isCallable$6 = isCallable$e;
var hasOwn$4 = hasOwnProperty_1;
var DESCRIPTORS$3 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$1 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;
var stringSlice = uncurryThis$4(''.slice);
var replace = uncurryThis$4(''.replace);
var join = uncurryThis$4([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$4(function () {
  return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (stringSlice($String$1(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$3) defineProperty$4(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
    defineProperty$4(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$4(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$3) defineProperty$4(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$4(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$6(this) && getInternalState$1(this).source || inspectSource(this);
}, 'toString');

var isCallable$5 = isCallable$e;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$3 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$5(value)) makeBuiltIn(value, name, options);
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
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$3 = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push = uncurryThis$3([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
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
var uncurryThis$2 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$3 = anObject$5;

var concat$1 = uncurryThis$2([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$3(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$b;
var isCallable$4 = isCallable$e;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$4(detection) ? fails$3(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$2 = global$c;
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
    target = global$2;
  } else if (STATIC) {
    target = global$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$2[TARGET] || {}).prototype;
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

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var uncurryThis$1 = functionUncurryThis;
var call$1 = functionCall;
var fails$2 = fails$b;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$3;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$3 = Object.defineProperty;
var concat = uncurryThis$1([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$2(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$3({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$3(this, 'b', {
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
  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
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
      if (!DESCRIPTORS$2 || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$1 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$1({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var translation = {
	title: "Impresión de faldones",
	description: "El Asignador de tareas permite comunicarse directamente con los locales. Los colaboradores recibirán las tareas directamente en App Mi Local.",
	card: {
		title: "Impresión de faldones",
		sub_title: "Imprime los faldones solicitados desde sala"
	},
	tabs: {
		pending: "Pendientes",
		history: "Historial"
	},
	filters: "Filtros",
	request_table: {
		section: "Sección",
		promotion: "Promoción",
		format: "Formato",
		quantity: "Cantidad",
		date: "Fecha",
		actions: "Acciones"
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
const i18nInstance = i18n.createInstance();
i18nInstance.use(initReactI18next).init({
  lng: 'es_CL',
  fallbackLng: 'es_CL',
  resources,
  interpolation: {
    escapeValue: false
  }
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

class BaseRestClient extends SDK.Lib.RESTClient {
  constructor(baseURL, country) {
    super({
      baseURL
    });
    this.axios.defaults.headers.common['Country'] = country;
  }
}

class BffClient extends BaseRestClient {
  static getInstance(baseUrl, country) {
    if (!BffClient.instance) {
      BffClient.instance = new BffClient(baseUrl, country);
    }
    return BffClient.instance;
  }
  getPrintRequests(queryParams) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.axios.get('/print-request', {
        params: queryParams
      });
      return response.data;
    });
  }
}

const getClients = staticParams => {
  const bffClient = new BffClient(staticParams.bffApiBaseUrl, staticParams.country);
  return {
    bffClient
  };
};

var objectDefineProperties = {};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$2 = anObject$5;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
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

var wellKnownSymbol$4 = wellKnownSymbol$6;
var create$1 = objectCreate;
var defineProperty$2 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$4('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty$2(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$1 = fails$b;

var correctPrototypeGetter = !fails$1(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$3 = isCallable$e;
var toObject = toObject$3;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails = fails$b;
var isCallable$2 = isCallable$e;
var isObject = isObject$6;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$3;
var wellKnownSymbol$3 = wellKnownSymbol$6;

var ITERATOR$2 = wellKnownSymbol$3('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$2(IteratorPrototype$2[ITERATOR$2])) {
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
var wellKnownSymbol$2 = wellKnownSymbol$6;

var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$1)) {
    defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
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

var uncurryThis = functionUncurryThis;
var aCallable = aCallable$2;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$1 = isCallable$e;

var $String = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
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

var $ = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable = isCallable$e;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$3;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$1('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
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
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
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
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
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
var defineProperty = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS = descriptors;

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

var global$1 = global$c;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var wellKnownSymbol = wellKnownSymbol$6;

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
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
  handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

const PrintRequetsContext = /*#__PURE__*/React.createContext({});
const usePrintRequestContext = () => React.useContext(PrintRequetsContext);
const PrintRequestContextProvider = ({
  children
}) => {
  const {
    clients
  } = useModuleContext();
  const [loading, setLoading] = React.useState(false);
  const [pending, setPending] = React.useState({
    items: [],
    total: 0,
    limit: 10,
    offset: 0
  });
  const [history, setHistory] = React.useState({
    items: [],
    total: 0,
    limit: 10,
    offset: 0
  });
  const fetchPending = React.useCallback(query => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const pending = yield clients.bffClient.getPrintRequests(Object.assign(Object.assign({}, query), {
        filters: {
          status: PrintRequestStatusEnum.PENDING,
          type: PrintRequestTypeEnum.PROMOTION
        }
      }));
      setPending(pending);
    } catch (err) {
      // @TODO: Use Ramen XNotification
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  const fetchHistory = React.useCallback(query => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      const history = yield clients.bffClient.getPrintRequests(Object.assign(Object.assign({}, query), {
        filters: {
          status: PrintRequestStatusEnum.PRINTED,
          type: PrintRequestTypeEnum.PROMOTION
        }
      }));
      setHistory(history);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [clients]);
  const fetchAll = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    try {
      yield fetchPending({
        limit: pending.limit,
        offset: pending.offset
      });
      yield fetchHistory({
        limit: history.limit,
        offset: history.offset
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }), [fetchHistory, fetchPending, pending.limit, pending.offset, history.limit, history.offset]);
  return jsx(PrintRequetsContext.Provider, Object.assign({
    value: {
      history,
      pending,
      fetchHistory,
      fetchPending,
      loading,
      fetchAll
    }
  }, {
    children: children
  }));
};

const ModuleContext = /*#__PURE__*/React.createContext({});
const useModuleContext = () => React.useContext(ModuleContext);
const ModuleContextProvider = ({
  children,
  params
}) => {
  return jsx(ModuleContext.Provider, Object.assign({
    value: {
      country: params.country,
      clients: getClients(params)
    }
  }, {
    children: jsx(I18nextProvider, Object.assign({
      i18n: i18nInstance,
      defaultNS: "translation"
    }, {
      children: jsx(PrintRequestContextProvider, {
        children: children
      })
    }))
  }));
};

var img = "data:image/svg+xml,%3csvg width='121' height='121' viewBox='0 0 121 121' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_6005_88269)'%3e%3cg clip-path='url(%23clip1_6005_88269)'%3e%3cg clip-path='url(%23clip2_6005_88269)'%3e%3cpath d='M188.027 0.65625H-59.8906V120.513H188.027V0.65625Z' fill='%23F5F5F5'/%3e%3cpath d='M187.878 16.7734H-18.9277V111.983H187.878V16.7734Z' fill='%23EAEAEA'/%3e%3cpath d='M187.879 23.9141H-14.6777V112.577H187.879V23.9141Z' fill='%23F5F5F5'/%3e%3cpath d='M187.879 102.391H-59.9727V120.65H187.879V102.391Z' fill='%23EAEAEA'/%3e%3cpath d='M92.1035 22.9922H88.1758V102.465H92.1035V22.9922Z' fill='%23EAEAEA'/%3e%3cpath d='M187.879 0.65625H-59.9727V8.51494H187.879V0.65625Z' fill='%23B8B8B8'/%3e%3c/g%3e%3cg clip-path='url(%23clip3_6005_88269)'%3e%3cpath d='M25.0467 126.79C25.6196 124.634 28.5433 101.049 28.7442 99.5395C29.7534 91.6359 29.7469 75.8567 30.5432 69.2887C31.3395 62.7207 35.2983 54.7089 35.2983 54.7089L45.9348 68.5551L53.6782 88.3269C53.6782 88.3269 53.0819 90.8797 52.5304 96.667C51.9839 102.469 50.2305 103.647 47.9535 108.096C47.4184 109.156 44.5551 124.718 44.1112 126.086C37.2758 125.562 30.6208 130.6 25.0467 126.79Z' fill='%23FFC197'/%3e%3cpath d='M37.818 65.9425C37.818 65.9425 38.6827 70.2325 37.1473 72.8706C35.612 75.5087 32.8031 82.2779 32.8874 84.1887L36.5024 82.0048L39.7904 76.0546L41.1959 69.6137L37.818 65.9425Z' fill='%23ECA06F'/%3e%3cpath d='M42.6808 86.1543C42.6808 86.1543 44.049 88.1346 44.9276 90.2857C45.8062 92.4368 46.2679 100.345 46.2679 100.345C46.2679 100.345 48.0551 91.1504 46.2396 86.1246C44.4241 81.0988 42.6808 86.1543 42.6808 86.1543Z' fill='%23ECA06F'/%3e%3cpath d='M79.9196 18.1568L30.6855 29.9688L47.7825 101.46L97.0165 89.6483L79.9196 18.1568Z' fill='%23F5F5F5'/%3e%3cpath d='M79.92 18.1567C86.602 46.031 95.543 79.4366 94.1905 87.6323C80.7137 92.2867 64.661 96.5939 47.6169 100.768L37.2231 28.628L79.92 18.1567Z' fill='%23D6D6D6'/%3e%3cpath d='M91.4461 85.9149C70.763 94.5154 56.433 98.1448 44.568 100.076C42.2343 83.6387 36.4532 56.7875 30.6866 29.9789L56.6156 23.8189L80.44 19.7396C87.3999 47.3309 93.5501 72.8841 91.4461 85.9149Z' fill='white'/%3e%3cpath d='M60.5198 35.6786C60.5912 35.9584 60.6056 36.2498 60.5621 36.5359C60.5186 36.822 60.4182 37.0972 60.2666 37.3455C60.115 37.5937 59.9153 37.8102 59.679 37.9822C59.4426 38.1543 59.1745 38.2786 58.8899 38.3479L41.2639 42.6379C40.6984 42.7639 40.1071 42.6662 39.6168 42.3657C39.1265 42.0652 38.7764 41.5859 38.6417 41.0307C38.507 40.4755 38.5984 39.8888 38.8963 39.3964C39.1942 38.9041 39.6749 38.5455 40.235 38.3975L57.8616 34.1064C58.4274 33.9686 59.0239 34.0564 59.5215 34.3507C60.0192 34.645 60.3779 35.1221 60.5198 35.6786ZM79.1851 38.1932C78.9979 37.6715 78.3943 37.359 77.847 37.5L41.2646 46.9831C40.7329 47.122 40.4527 47.6376 40.6346 48.1449C40.8219 48.6675 41.4255 48.9799 41.9735 48.8379L78.555 39.355C79.0868 39.216 79.3669 38.7005 79.1851 38.1932Z' fill='%235382BC'/%3e%3cpath d='M63.5586 30.5703L64.7855 30.2642L66.6168 37.6275L65.3899 37.9336L63.5586 30.5703ZM65.3989 30.1112L66.0124 29.9581L67.8437 37.3214L67.2302 37.4744L65.3989 30.1112ZM66.6258 29.8051L68.4661 29.346L70.2974 36.7092L68.4571 37.1683L66.6258 29.8051ZM69.0796 29.1929L69.693 29.0399L71.5243 36.4031L70.9109 36.5562L69.0796 29.1929ZM70.9199 28.7338L72.1468 28.4277L73.9781 35.791L72.7512 36.097L70.9199 28.7338ZM72.7602 28.2747L74.6006 27.8155L76.4319 35.1788L74.5915 35.6379L72.7602 28.2747ZM75.214 27.6625L75.8274 27.5094L77.6587 34.8727L77.0453 35.0257L75.214 27.6625Z' fill='%233D3D3D'/%3e%3cpath d='M64.4651 52.9286C64.5365 53.2084 64.5509 53.4998 64.5074 53.7859C64.4639 54.072 64.3635 54.3472 64.2119 54.5955C64.0603 54.8437 63.8606 55.0602 63.6243 55.2322C63.388 55.4043 63.1198 55.5286 62.8352 55.5979L45.2092 59.8879C44.6438 60.0139 44.0524 59.9162 43.5621 59.6157C43.0718 59.3152 42.7217 58.8359 42.587 58.2807C42.4523 57.7255 42.5437 57.1388 42.8416 56.6464C43.1395 56.1541 43.6202 55.7955 44.1803 55.6475L61.807 51.3564C62.3728 51.2186 62.9692 51.3064 63.4668 51.6007C63.9645 51.895 64.3232 52.3721 64.4651 52.9286ZM83.1304 55.4432C82.9432 54.9215 82.3396 54.609 81.7923 54.75L45.2099 64.2331C44.6782 64.372 44.3981 64.8876 44.5799 65.3949C44.7672 65.9175 45.3708 66.2299 45.9188 66.0879L82.5003 56.605C83.0321 56.466 83.3122 55.9505 83.1304 55.4432Z' fill='%235382BC'/%3e%3cpath d='M67.502 47.8203L68.7288 47.5142L70.5601 54.8775L69.3333 55.1836L67.502 47.8203ZM69.3423 47.3612L69.9557 47.2081L71.787 54.5714L71.1736 54.7244L69.3423 47.3612ZM70.5692 47.0551L72.4095 46.596L74.2408 53.9592L72.4005 54.4183L70.5692 47.0551ZM73.0229 46.4429L73.6364 46.2899L75.4677 53.6531L74.8542 53.8062L73.0229 46.4429ZM74.8633 45.9838L76.0901 45.6777L77.9215 53.041L76.6946 53.347L74.8633 45.9838ZM76.7036 45.5247L78.5439 45.0655L80.3752 52.4288L78.5349 52.8879L76.7036 45.5247ZM79.1574 44.9125L79.7708 44.7594L81.6021 52.1227L80.9887 52.2757L79.1574 44.9125Z' fill='%233D3D3D'/%3e%3cpath d='M68.7386 70.0536C68.8099 70.3334 68.8243 70.6248 68.7808 70.9109C68.7374 71.197 68.6369 71.4722 68.4853 71.7205C68.3338 71.9687 68.134 72.1852 67.8977 72.3572C67.6614 72.5293 67.3932 72.6536 67.1087 72.7229L49.4827 77.0129C48.9172 77.1389 48.3258 77.0412 47.8355 76.7407C47.3453 76.4402 46.9952 75.9609 46.8605 75.4057C46.7257 74.8505 46.8172 74.2638 47.1151 73.7714C47.413 73.2791 47.8936 72.9205 48.4538 72.7725L66.0804 68.4814C66.6462 68.3436 67.2426 68.4314 67.7403 68.7257C68.2379 69.02 68.5966 69.4971 68.7386 70.0536ZM87.4038 72.5682C87.2167 72.0465 86.613 71.734 86.0657 71.875L49.4834 81.3581C48.9516 81.497 48.6715 82.0126 48.8533 82.5199C49.0407 83.0425 49.6443 83.3549 50.1922 83.2129L86.7738 73.73C87.3055 73.591 87.5856 73.0755 87.4038 72.5682Z' fill='%235382BC'/%3e%3cpath d='M71.7773 64.9453L73.0042 64.6392L74.8355 72.0025L73.6087 72.3086L71.7773 64.9453ZM73.6177 64.4862L74.2311 64.3331L76.0624 71.6964L75.449 71.8494L73.6177 64.4862ZM74.8446 64.1801L76.6849 63.721L78.5162 71.0842L76.6759 71.5433L74.8446 64.1801ZM77.2983 63.5679L77.9118 63.4149L79.7431 70.7781L79.1296 70.9312L77.2983 63.5679ZM79.1386 63.1088L80.3655 62.8027L82.1968 70.166L80.97 70.472L79.1386 63.1088ZM80.979 62.6497L82.8193 62.1905L84.6506 69.5538L82.8103 70.0129L80.979 62.6497ZM83.4327 62.0375L84.0462 61.8844L85.8775 69.2477L85.2641 69.4007L83.4327 62.0375Z' fill='%233D3D3D'/%3e%3cpath d='M30.7435 91.9292C30.7435 91.9292 34.8886 76.5689 38.3073 73.9815C41.7409 71.3852 50.6042 65.2009 53.1658 68.7196C55.7274 72.2382 51.357 77.5656 46.0433 81.3857C46.0433 81.3857 41.0407 89.7078 42.8196 92.8456C44.5837 95.992 38.0704 96.6922 38.0704 96.6922L30.7435 91.9292Z' fill='%23FFC197'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_6005_88269'%3e%3crect x='0.0273438' y='0.65625' width='120' height='120' rx='16' fill='white'/%3e%3c/clipPath%3e%3cclipPath id='clip1_6005_88269'%3e%3crect width='120' height='120' fill='white' transform='translate(0.0273438 0.65625)'/%3e%3c/clipPath%3e%3cclipPath id='clip2_6005_88269'%3e%3crect width='248' height='120' fill='white' transform='translate(-59.9727 0.65625)'/%3e%3c/clipPath%3e%3cclipPath id='clip3_6005_88269'%3e%3crect width='78.4' height='110.8' fill='white' transform='translate(20.8281 12.6562)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const CardTool = ({
  path_module
}) => {
  const history = useHistory();
  const {
    t
  } = useTranslation();
  return jsx(Ramen.XCardImage, {
    image: img,
    title: t('card.title'),
    subTitle: t('card.sub_title'),
    onClick: () => history.push(path_module)
  });
};

const HistoryTab = () => {
  const {
    fetchHistory,
    history
  } = usePrintRequestContext();
  const {
    t
  } = useTranslation();
  useEffect(() => {
    fetchHistory({
      limit: history.limit,
      offset: history.offset
    });
  }, [fetchHistory, history.limit, history.offset]);
  const onTableChange = (sorter, pagination) => {
    if (!pagination) return;
    if (pagination.offset === history.offset && pagination.limit === history.limit) return;
    fetchHistory({
      limit: pagination.limit,
      offset: pagination.offset
    });
  };
  return jsx(Ramen.XTabPanel, Object.assign({
    tabKey: "history"
  }, {
    children: jsx(Ramen.XTable, {
      columns: [{
        key: 'section',
        title: t('request_table.section'),
        dataIndex: 'meta_data.section.name'
      }, {
        key: 'promotion',
        title: t('request_table.promotion'),
        dataIndex: 'meta_data.description'
      }, {
        key: 'format',
        title: t('request_table.format'),
        dataIndex: 'paper_size'
      }, {
        key: 'quantity',
        title: t('request_table.quantity'),
        dataIndex: 'quantity'
      }, {
        key: 'date',
        title: t('request_table.date'),
        dataIndex: 'created_at'
      }, {
        key: 'actions',
        title: t('request_table.actions')
      }],
      dataSource: history.items,
      pagination: {
        limit: history.limit,
        offset: history.offset,
        total: history.total
      },
      onChange: onTableChange,
      rowKey: '_id'
    })
  }));
};

const PendingTab = () => {
  const {
    t
  } = useTranslation();
  const {
    pending,
    fetchPending
  } = usePrintRequestContext();
  useEffect(() => {
    fetchPending({
      limit: pending.limit,
      offset: pending.offset
    });
  }, [fetchPending, pending.limit, pending.offset]);
  const onTableChange = (sorter, pagination) => {
    if (!pagination) return;
    if (pagination.offset === pending.offset && pagination.limit === pending.limit) return;
    fetchPending({
      limit: pagination.limit,
      offset: pagination.offset
    });
  };
  return jsx(Ramen.XTabPanel, Object.assign({
    tabKey: "pending"
  }, {
    children: jsx(Ramen.XTable, {
      columns: [{
        key: 'section',
        title: t('request_table.section'),
        dataIndex: 'meta_data.section.name'
      }, {
        key: 'promotion',
        title: t('request_table.promotion'),
        dataIndex: 'meta_data.description'
      }, {
        key: 'format',
        title: t('request_table.format'),
        dataIndex: 'paper_size'
      }, {
        key: 'quantity',
        title: t('request_table.quantity'),
        dataIndex: 'quantity'
      }, {
        key: 'date',
        title: t('request_table.date'),
        dataIndex: 'created_at'
      }, {
        key: 'actions',
        title: t('request_table.actions')
      }],
      dataSource: pending.items,
      pagination: {
        limit: pending.limit,
        offset: pending.offset,
        total: pending.total
      },
      onChange: onTableChange,
      rowKey: '_id'
    })
  }));
};

const Tabs = {
  HistoryTab,
  PendingTab
};

const HomePage = () => {
  const {
    loading,
    fetchAll
  } = usePrintRequestContext();
  const {
    t
  } = useTranslation();
  return jsxs(Ramen.XBox, Object.assign({
    padding: 'xl',
    width: 'full'
  }, {
    children: [jsxs(Ramen.XBox, {
      children: [jsx(Ramen.XText, Object.assign({
        fontSize: 7,
        weight: 'bold'
      }, {
        children: t('title')
      })), jsx(Ramen.XVSpace, {
        size: 's'
      }), jsx(Ramen.XText, Object.assign({
        fontSize: 10,
        lineHeight: 'title',
        colorThone: 'dim'
      }, {
        children: t('description')
      })), jsx(Ramen.XVSpace, {
        size: 's'
      })]
    }), jsxs(Ramen.XBox, Object.assign({
      width: 'full',
      orientation: 'horizontal',
      horizontalAlign: 'between'
    }, {
      children: [jsx(Ramen.XTabs, {
        defaultKey: 'pending',
        tabs: [{
          key: 'pending',
          label: `${t('tabs.pending')}`
        }, {
          key: 'history',
          label: `${t('tabs.history')}`
        }]
      }), jsx(Ramen.XBox, Object.assign({
        orientation: 'horizontal',
        gap: 's'
      }, {
        children: jsx(Ramen.XButtonIcon, {
          icon: 'refresh-cw-outline',
          onClick: () => fetchAll(),
          loading: loading
        })
      }))]
    })), jsx(Ramen.XVSpace, {
      size: 'xl'
    }), jsxs(Ramen.XTabContent, {
      children: [jsx(Tabs.PendingTab, {}), jsx(Tabs.HistoryTab, {})]
    })]
  }));
};

const Flow = ({
  params
}) => {
  const {
    url
  } = useRouteMatch();
  return jsx(ModuleContextProvider, Object.assign({
    params: params
  }, {
    children: jsx(Switch, {
      children: jsx(Route, {
        path: url,
        component: HomePage
      })
    })
  }));
};
class Module extends SDK.Lib.BaseModule {
  constructor(params) {
    super(params);
    this.defaultPath = '/printer';
    this.CardTool = CardTool;
    this.Flow = () => jsx(Flow, {
      params: params
    });
  }
}

export { Module as default };
