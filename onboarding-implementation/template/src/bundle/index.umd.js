(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('@ionic/react'), require('react'), require('react-router-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', '@ionic/react', 'react', 'react-router-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.OnboardingSource = {}, global.jsxRuntime, global.react, global.React, global.reactRouterDom));
})(this, (function (exports, jsxRuntime, react, React, reactRouterDom) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespace(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

	var objectGetOwnPropertyDescriptor = {};

	var fails$g = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$f = fails$g;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$f(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$e = fails$g;

	var functionBindNative = !fails$e(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$2 = functionBindNative;

	var call$a = Function.prototype.call;

	var functionCall = NATIVE_BIND$2 ? call$a.bind(call$a) : function () {
	  return call$a.apply(call$a, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$2 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$9 = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$2.bind.bind(call$9, call$9);

	var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$9.apply(fn, arguments);
	  };
	};

	var uncurryThis$i = functionUncurryThis;

	var toString$9 = uncurryThis$i({}.toString);
	var stringSlice$7 = uncurryThis$i(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$7(toString$9(it), 8, -1);
	};

	var uncurryThis$h = functionUncurryThis;
	var fails$d = fails$g;
	var classof$4 = classofRaw$2;

	var $Object$3 = Object;
	var split = uncurryThis$h(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$d(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$4(it) == 'String' ? split(it, '') : $Object$3(it);
	} : $Object$3;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$4 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$3 = isNullOrUndefined$4;

	var $TypeError$8 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$7 = function (it) {
	  if (isNullOrUndefined$3(it)) throw $TypeError$8("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = indexedObject;
	var requireObjectCoercible$6 = requireObjectCoercible$7;

	var toIndexedObject$4 = function (it) {
	  return IndexedObject(requireObjectCoercible$6(it));
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

	var isObject$7 = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$e(it);
	};

	var global$d = global$e;
	var isCallable$d = isCallable$f;

	var aFunction = function (argument) {
	  return isCallable$d(argument) ? argument : undefined;
	};

	var getBuiltIn$4 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
	};

	var uncurryThis$g = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$c = global$e;
	var userAgent = engineUserAgent;

	var process = global$c.process;
	var Deno = global$c.Deno;
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
	var fails$c = fails$g;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$c(function () {
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

	var getBuiltIn$3 = getBuiltIn$4;
	var isCallable$c = isCallable$f;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$2 = Object;

	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$3('Symbol');
	  return isCallable$c($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
	};

	var $String$4 = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String$4(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$b = isCallable$f;
	var tryToString = tryToString$1;

	var $TypeError$7 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$2 = function (argument) {
	  if (isCallable$b(argument)) return argument;
	  throw $TypeError$7(tryToString(argument) + ' is not a function');
	};

	var aCallable$1 = aCallable$2;
	var isNullOrUndefined$2 = isNullOrUndefined$4;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$2(func) ? undefined : aCallable$1(func);
	};

	var call$8 = functionCall;
	var isCallable$a = isCallable$f;
	var isObject$6 = isObject$7;

	var $TypeError$6 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
	  if (isCallable$a(fn = input.valueOf) && !isObject$6(val = call$8(fn, input))) return val;
	  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
	  throw $TypeError$6("Can't convert object to primitive value");
	};

	var shared$4 = {exports: {}};

	var global$b = global$e;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$3 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$3(global$b, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$b[key] = value;
	  } return value;
	};

	var global$a = global$e;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$a[SHARED] || defineGlobalProperty$2(SHARED, {});

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

	var requireObjectCoercible$5 = requireObjectCoercible$7;

	var $Object$1 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$2 = function (argument) {
	  return $Object$1(requireObjectCoercible$5(argument));
	};

	var uncurryThis$f = functionUncurryThis;
	var toObject$1 = toObject$2;

	var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$1(it), key);
	};

	var uncurryThis$e = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$8 = uncurryThis$e(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
	};

	var global$9 = global$e;
	var shared$3 = shared$4.exports;
	var hasOwn$8 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$1 = global$9.Symbol;
	var WellKnownSymbolsStore = shared$3('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$9 = function (name) {
	  if (!hasOwn$8(WellKnownSymbolsStore, name)) {
	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)
	      ? Symbol$1[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var call$7 = functionCall;
	var isObject$5 = isObject$7;
	var isSymbol$1 = isSymbol$2;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$8 = wellKnownSymbol$9;

	var $TypeError$5 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$8('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$5(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$7(exoticToPrim, input, pref);
	    if (!isObject$5(result) || isSymbol$1(result)) return result;
	    throw $TypeError$5("Can't convert object to primitive value");
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

	var global$8 = global$e;
	var isObject$4 = isObject$7;

	var document$1 = global$8.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$9 = descriptors;
	var fails$b = fails$g;
	var createElement = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$9 && !fails$b(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$8 = descriptors;
	var call$6 = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$1 = createPropertyDescriptor$2;
	var toIndexedObject$3 = toIndexedObject$4;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$7 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$3(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$6(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$7 = descriptors;
	var fails$a = fails$g;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$a(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var isObject$3 = isObject$7;

	var $String$3 = String;
	var $TypeError$4 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$a = function (argument) {
	  if (isObject$3(argument)) return argument;
	  throw $TypeError$4($String$3(argument) + ' is not an object');
	};

	var DESCRIPTORS$6 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$9 = anObject$a;
	var toPropertyKey = toPropertyKey$2;

	var $TypeError$3 = TypeError;
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
	  anObject$9(O);
	  P = toPropertyKey(P);
	  anObject$9(Attributes);
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
	  anObject$9(O);
	  P = toPropertyKey(P);
	  anObject$9(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$5 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$2;

	var createNonEnumerableProperty$4 = DESCRIPTORS$5 ? function (object, key, value) {
	  return definePropertyModule$3.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$3 = {exports: {}};

	var DESCRIPTORS$4 = descriptors;
	var hasOwn$6 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$d = functionUncurryThis;
	var isCallable$9 = isCallable$f;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$d(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$9(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$1 = store$1.inspectSource;

	var global$7 = global$e;
	var isCallable$8 = isCallable$f;

	var WeakMap$1 = global$7.WeakMap;

	var weakMapBasicDetection = isCallable$8(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var shared$2 = shared$4.exports;
	var uid = uid$2;

	var keys$1 = shared$2('keys');

	var sharedKey$2 = function (key) {
	  return keys$1[key] || (keys$1[key] = uid(key));
	};

	var hiddenKeys$4 = {};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$6 = global$e;
	var isObject$2 = isObject$7;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
	var hasOwn$5 = hasOwnProperty_1;
	var shared$1 = sharedStore;
	var sharedKey$1 = sharedKey$2;
	var hiddenKeys$3 = hiddenKeys$4;

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
	    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
	  var STATE = sharedKey$1('state');
	  hiddenKeys$3[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$5(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
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

	var uncurryThis$c = functionUncurryThis;
	var fails$9 = fails$g;
	var isCallable$7 = isCallable$f;
	var hasOwn$4 = hasOwnProperty_1;
	var DESCRIPTORS$3 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var inspectSource = inspectSource$1;
	var InternalStateModule = internalState;

	var enforceInternalState$1 = InternalStateModule.enforce;
	var getInternalState$1 = InternalStateModule.get;
	var $String$2 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;
	var stringSlice$6 = uncurryThis$c(''.slice);
	var replace$4 = uncurryThis$c(''.replace);
	var join = uncurryThis$c([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$9(function () {
	  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
	  if (stringSlice$6($String$2(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    if (DESCRIPTORS$3) defineProperty$2(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
	    defineProperty$2(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$4(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$3) defineProperty$2(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState$1(value);
	  if (!hasOwn$4(state, 'source')) {
	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$2(function toString() {
	  return isCallable$7(this) && getInternalState$1(this).source || inspectSource(this);
	}, 'toString');

	var isCallable$6 = isCallable$f;
	var definePropertyModule$2 = objectDefineProperty;
	var makeBuiltIn$1 = makeBuiltIn$3.exports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$4 = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$6(value)) makeBuiltIn$1(value, name, options);
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
	var min$3 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$3(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

	var min$2 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$4 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$3 = toLength$4;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$1 = function (obj) {
	  return toLength$3(obj.length);
	};

	var toIndexedObject$2 = toIndexedObject$4;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike = lengthOfArrayLike$1;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$2($this);
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
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var uncurryThis$b = functionUncurryThis;
	var hasOwn$3 = hasOwnProperty_1;
	var toIndexedObject$1 = toIndexedObject$4;
	var indexOf$1 = arrayIncludes.indexOf;
	var hiddenKeys$2 = hiddenKeys$4;

	var push$1 = uncurryThis$b([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
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

	var getBuiltIn$2 = getBuiltIn$4;
	var uncurryThis$a = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$8 = anObject$a;

	var concat$1 = uncurryThis$a([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$8(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
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

	var fails$8 = fails$g;
	var isCallable$5 = isCallable$f;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$5(detection) ? fails$8(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var global$5 = global$e;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
	var defineBuiltIn$3 = defineBuiltIn$4;
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
	    target = global$5;
	  } else if (STATIC) {
	    target = global$5[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = (global$5[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
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
	      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$3(target, key, sourceProperty, options);
	  }
	};

	var classofRaw$1 = classofRaw$2;
	var uncurryThis$9 = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw$1(fn) === 'Function') return uncurryThis$9(fn);
	};

	var wellKnownSymbol$7 = wellKnownSymbol$9;

	var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
	var test = {};

	test[TO_STRING_TAG$1] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$4 = isCallable$f;
	var classofRaw = classofRaw$2;
	var wellKnownSymbol$6 = wellKnownSymbol$9;

	var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
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
	var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
	};

	var classof$2 = classof$3;

	var $String$1 = String;

	var toString$7 = function (argument) {
	  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var isObject$1 = isObject$7;
	var classof$1 = classofRaw$2;
	var wellKnownSymbol$5 = wellKnownSymbol$9;

	var MATCH$2 = wellKnownSymbol$5('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
	};

	var isRegExp$1 = isRegexp;

	var $TypeError$2 = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp$1(it)) {
	    throw $TypeError$2("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$4 = wellKnownSymbol$9;

	var MATCH$1 = wellKnownSymbol$4('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$2 = _export;
	var uncurryThis$8 = functionUncurryThisClause;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var toLength$2 = toLength$4;
	var toString$6 = toString$7;
	var notARegExp = notARegexp;
	var requireObjectCoercible$4 = requireObjectCoercible$7;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	// eslint-disable-next-line es/no-string-prototype-startswith -- safe
	var nativeStartsWith = uncurryThis$8(''.startsWith);
	var stringSlice$5 = uncurryThis$8(''.slice);
	var min$1 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	$$2({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = toString$6(requireObjectCoercible$4(this));
	    notARegExp(searchString);
	    var index = toLength$2(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = toString$6(searchString);
	    return nativeStartsWith
	      ? nativeStartsWith(that, search, index)
	      : stringSlice$5(that, index, index + search.length) === search;
	  }
	});

	var anObject$7 = anObject$a;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$7(this);
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

	var fails$7 = fails$g;
	var global$4 = global$e;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$4.RegExp;

	var UNSUPPORTED_Y$2 = fails$7(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$7(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$7(function () {
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
	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$2 = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule = objectDefineProperty;
	var anObject$6 = anObject$a;
	var toIndexedObject = toIndexedObject$4;
	var objectKeys = objectKeys$1;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$6(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$1 = getBuiltIn$4;

	var html$1 = getBuiltIn$1('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject$5 = anObject$a;
	var definePropertiesModule = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys = hiddenKeys$4;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey = sharedKey$2;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

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
	  var iframe = documentCreateElement('iframe');
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

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject$5(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};

	var fails$6 = fails$g;
	var global$3 = global$e;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$3.RegExp;

	var regexpUnsupportedDotAll = fails$6(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.exec('\n') && re.flags === 's');
	});

	var fails$5 = fails$g;
	var global$2 = global$e;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$2.RegExp;

	var regexpUnsupportedNcg = fails$5(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$5 = functionCall;
	var uncurryThis$7 = functionUncurryThis;
	var toString$5 = toString$7;
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

	var $$1 = _export;
	var exec$1 = regexpExec$2;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$1({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
	  exec: exec$1
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var uncurryThis$6 = functionUncurryThisClause;
	var defineBuiltIn$2 = defineBuiltIn$4;
	var regexpExec$1 = regexpExec$2;
	var fails$4 = fails$g;
	var wellKnownSymbol$3 = wellKnownSymbol$9;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

	var SPECIES$1 = wellKnownSymbol$3('species');
	var RegExpPrototype$3 = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$3(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$4(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
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
	    var uncurriedNativeRegExpMethod = uncurryThis$6(/./[SYMBOL]);
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var uncurriedNativeMethod = uncurryThis$6(nativeMethod);
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

	var uncurryThis$5 = functionUncurryThis;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
	var toString$4 = toString$7;
	var requireObjectCoercible$3 = requireObjectCoercible$7;

	var charAt$3 = uncurryThis$5(''.charAt);
	var charCodeAt = uncurryThis$5(''.charCodeAt);
	var stringSlice$3 = uncurryThis$5(''.slice);

	var createMethod$1 = function (CONVERT_TO_STRING) {
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

	var call$4 = functionCall;
	var anObject$4 = anObject$a;
	var isCallable$3 = isCallable$f;
	var classof = classofRaw$2;
	var regexpExec = regexpExec$2;

	var $TypeError$1 = TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable$3(exec)) {
	    var result = call$4(exec, R, S);
	    if (result !== null) anObject$4(result);
	    return result;
	  }
	  if (classof(R) === 'RegExp') return call$4(regexpExec, R, S);
	  throw $TypeError$1('RegExp#exec called on incompatible receiver');
	};

	var call$3 = functionCall;
	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$3 = anObject$a;
	var isNullOrUndefined$1 = isNullOrUndefined$4;
	var toLength$1 = toLength$4;
	var toString$3 = toString$7;
	var requireObjectCoercible$2 = requireObjectCoercible$7;
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
	      var rx = anObject$3(this);
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

	/*! *****************************************************************************
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
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || from);
	}

	var toSnakeCase = function toSnakeCase(str) {
	  var matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];
	  return matches.map(function (x) {
	    return x.toLowerCase();
	  }).join('_');
	};
	var Module = /** @class */function (_super) {
	  __extends(Module, _super);
	  function Module(props, descriptor) {
	    var _this = _super.call(this, props) || this;
	    _this.descriptor = descriptor;
	    return _this;
	  }
	  Module.prototype.render = function () {
	    var _this = this;
	    var match = this.props.match;
	    var routes = __spreadArray([], this.descriptor.routes, true);
	    if (this.descriptor.override.routes) {
	      this.descriptor.override.routes.forEach(function (route) {
	        var match = routes.find(function (r) {
	          return r.path === route.path;
	        });
	        if (!match) {
	          routes.push(route);
	          return;
	        }
	        console.warn("Override route ".concat(match.path, " was not added because it already exists in definition module."));
	      });
	    }
	    return jsxRuntime.jsx(react.IonRouterOutlet, {
	      children: routes.map(function (_a) {
	        var path = _a.path,
	          PageComponent = _a.page;
	        var absolutePath = [match.url, path].join('');
	        return jsxRuntime.jsx(reactRouterDom.Route, {
	          path: absolutePath,
	          exact: true,
	          render: function (props) {
	            var extensions = null;
	            if (_this.descriptor.override.extensions && _this.descriptor.override.extensions[toSnakeCase(PageComponent.name)]) {
	              extensions = _this.descriptor.override.extensions[toSnakeCase(PageComponent.name)];
	            }
	            return jsxRuntime.jsx(PageComponent, __assign({}, props, {
	              extensions: extensions
	            }), void 0);
	          }
	        }, path);
	      })
	    }, void 0);
	  };
	  return Module;
	}(React__namespace.Component);

	// eslint-disable-next-line @typescript-eslint/ban-types
	var Page = /** @class */function (_super) {
	  __extends(Page, _super);
	  function Page() {
	    return _super !== null && _super.apply(this, arguments) || this;
	  }
	  return Page;
	}(React__namespace.Component);

	var NATIVE_BIND = functionBindNative;

	var FunctionPrototype = Function.prototype;
	var apply$1 = FunctionPrototype.apply;
	var call$2 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply$1) : function () {
	  return call$2.apply(apply$1, arguments);
	});

	var uncurryThis$4 = functionUncurryThis;
	var toObject = toObject$2;

	var floor = Math.floor;
	var charAt$1 = uncurryThis$4(''.charAt);
	var replace$2 = uncurryThis$4(''.replace);
	var stringSlice$2 = uncurryThis$4(''.slice);
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
	var uncurryThis$3 = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var fails$3 = fails$g;
	var anObject$2 = anObject$a;
	var isCallable$2 = isCallable$f;
	var isNullOrUndefined = isNullOrUndefined$4;
	var toIntegerOrInfinity = toIntegerOrInfinity$4;
	var toLength = toLength$4;
	var toString$2 = toString$7;
	var requireObjectCoercible$1 = requireObjectCoercible$7;
	var advanceStringIndex = advanceStringIndex$2;
	var getMethod = getMethod$3;
	var getSubstitution = getSubstitution$1;
	var regExpExec = regexpExecAbstract;
	var wellKnownSymbol$2 = wellKnownSymbol$9;

	var REPLACE = wellKnownSymbol$2('replace');
	var max = Math.max;
	var min = Math.min;
	var concat = uncurryThis$3([].concat);
	var push = uncurryThis$3([].push);
	var stringIndexOf$1 = uncurryThis$3(''.indexOf);
	var stringSlice$1 = uncurryThis$3(''.slice);

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

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
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
	      var rx = anObject$2(this);
	      var S = toString$2(string);

	      if (
	        typeof replaceValue == 'string' &&
	        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
	        stringIndexOf$1(replaceValue, '$<') === -1
	      ) {
	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	        if (res.done) return res.value;
	      }

	      var functionalReplace = isCallable$2(replaceValue);
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

	// a string of all valid unicode whitespaces
	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$2 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$7;
	var toString$1 = toString$7;
	var whitespaces$1 = whitespaces$2;

	var replace$1 = uncurryThis$2(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod = function (TYPE) {
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
	  start: createMethod(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod(3)
	};

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var fails$2 = fails$g;
	var whitespaces = whitespaces$2;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$2(function () {
	    return !!whitespaces[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $ = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var uncurryThis$1 = functionUncurryThis;
	var aCallable = aCallable$2;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$1(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isCallable$1 = isCallable$f;

	var $String = String;
	var $TypeError = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
	  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThisAccessor = functionUncurryThisAccessor;
	var anObject$1 = anObject$a;
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

	var isCallable = isCallable$f;
	var isObject = isObject$7;
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
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
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
	var wellKnownSymbol$1 = wellKnownSymbol$9;
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
	var global$1 = global$e;
	var uncurryThis = functionUncurryThis;
	var isForced = isForced_1;
	var inheritIfRequired = inheritIfRequired$1;
	var createNonEnumerableProperty = createNonEnumerableProperty$4;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var isPrototypeOf = objectIsPrototypeOf;
	var isRegExp = isRegexp;
	var toString = toString$7;
	var getRegExpFlags$1 = regexpGetFlags;
	var stickyHelpers = regexpStickyHelpers;
	var proxyAccessor = proxyAccessor$1;
	var defineBuiltIn$1 = defineBuiltIn$4;
	var fails$1 = fails$g;
	var hasOwn = hasOwnProperty_1;
	var enforceInternalState = internalState.enforce;
	var setSpecies = setSpecies$1;
	var wellKnownSymbol = wellKnownSymbol$9;
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
	  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$1(function () {
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

	  for (var keys = getOwnPropertyNames(NativeRegExp), index$1 = 0; keys.length > index$1;) {
	    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index$1++]);
	  }

	  RegExpPrototype$1.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$1;
	  defineBuiltIn$1(global$1, 'RegExp', RegExpWrapper, { constructor: true });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies('RegExp');

	var PROPER_FUNCTION_NAME = functionName.PROPER;
	var defineBuiltIn = defineBuiltIn$4;
	var anObject = anObject$a;
	var $toString = toString$7;
	var fails = fails$g;
	var getRegExpFlags = regexpGetFlags;

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
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

	var events = {exports: {}};

	var R = typeof Reflect === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function'
	  ? R.apply
	  : function ReflectApply(target, receiver, args) {
	    return Function.prototype.apply.call(target, receiver, args);
	  };

	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target)
	      .concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}

	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}

	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}
	events.exports = EventEmitter;
	events.exports.once = once;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	var defaultMaxListeners = 10;

	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
	  }
	}

	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function() {
	    return defaultMaxListeners;
	  },
	  set: function(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }
	    defaultMaxListeners = arg;
	  }
	});

	EventEmitter.init = function() {

	  if (this._events === undefined ||
	      this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }
	  this._maxListeners = n;
	  return this;
	};

	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};

	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];
	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
	  var doError = (type === 'error');

	  var events = this._events;
	  if (events !== undefined)
	    doError = (doError && events.error === undefined);
	  else if (!doError)
	    return false;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    var er;
	    if (args.length > 0)
	      er = args[0];
	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    }
	    // At least give some kind of context to the user
	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }

	  var handler = events[type];

	  if (handler === undefined)
	    return false;

	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      ReflectApply(listeners[i], this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  checkListener(listener);

	  events = target._events;
	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] =
	        prepend ? [listener, existing] : [existing, listener];
	      // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    }

	    // Check for listener leak
	    m = _getMaxListeners(target);
	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true;
	      // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax
	      var w = new Error('Possible EventEmitter memory leak detected. ' +
	                          existing.length + ' ' + String(type) + ' listeners ' +
	                          'added. Use emitter.setMaxListeners() to ' +
	                          'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }

	  return target;
	}

	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0)
	      return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}

	function _onceWrap(target, type, listener) {
	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      checkListener(listener);
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// Emits a 'removeListener' event if and only if the listener was removed.
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      checkListener(listener);

	      events = this._events;
	      if (events === undefined)
	        return this;

	      list = events[type];
	      if (list === undefined)
	        return this;

	      if (list === listener || list.listener === listener) {
	        if (--this._eventsCount === 0)
	          this._events = Object.create(null);
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length - 1; i >= 0; i--) {
	          if (list[i] === listener || list[i].listener === listener) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (position === 0)
	          list.shift();
	        else {
	          spliceOne(list, position);
	        }

	        if (list.length === 1)
	          events[type] = list[0];

	        if (events.removeListener !== undefined)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events, i;

	      events = this._events;
	      if (events === undefined)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (events.removeListener === undefined) {
	        if (arguments.length === 0) {
	          this._events = Object.create(null);
	          this._eventsCount = 0;
	        } else if (events[type] !== undefined) {
	          if (--this._eventsCount === 0)
	            this._events = Object.create(null);
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        var key;
	        for (i = 0; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = Object.create(null);
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners !== undefined) {
	        // LIFO order
	        for (i = listeners.length - 1; i >= 0; i--) {
	          this.removeListener(type, listeners[i]);
	        }
	      }

	      return this;
	    };

	function _listeners(target, type, unwrap) {
	  var events = target._events;

	  if (events === undefined)
	    return [];

	  var evlistener = events[type];
	  if (evlistener === undefined)
	    return [];

	  if (typeof evlistener === 'function')
	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

	  return unwrap ?
	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}

	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};

	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events !== undefined) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};

	function arrayClone(arr, n) {
	  var copy = new Array(n);
	  for (var i = 0; i < n; ++i)
	    copy[i] = arr[i];
	  return copy;
	}

	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++)
	    list[index] = list[index + 1];
	  list.pop();
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }

	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }
	      resolve([].slice.call(arguments));
	    }
	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
	    }
	  });
	}

	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}

	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }
	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
	  }
	}

	var EVENTS_ENUM;
	(function (EVENTS_ENUM) {
	  EVENTS_ENUM[EVENTS_ENUM["PAGE:NEXT"] = 0] = "PAGE:NEXT";
	  EVENTS_ENUM[EVENTS_ENUM["PAGE:NEXT:RESPONSE"] = 1] = "PAGE:NEXT:RESPONSE";
	})(EVENTS_ENUM || (EVENTS_ENUM = {}));
	var EventStreamer = /** @class */function () {
	  function EventStreamer() {}
	  EventStreamer.prototype.on = function (event, listener) {
	    EventStreamer.emitter.on(event, listener);
	  };
	  EventStreamer.prototype.off = function (event, listener) {
	    EventStreamer.emitter.off(event, listener);
	  };
	  EventStreamer.prototype.emit = function (event) {
	    var _a;
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	      args[_i - 1] = arguments[_i];
	    }
	    return (_a = EventStreamer.emitter).emit.apply(_a, __spreadArray([event], args, false));
	  };
	  EventStreamer.emitter = new events.exports.EventEmitter();
	  return EventStreamer;
	}();
	var EventStreamer$1 = new EventStreamer();

	var BasePage = /** @class */function (_super) {
	  __extends(BasePage, _super);
	  function BasePage() {
	    var _this = _super !== null && _super.apply(this, arguments) || this;
	    _this.next = function () {
	      EventStreamer$1.emit('PAGE:NEXT');
	    };
	    return _this;
	  }
	  return BasePage;
	}(Page);

	var img$2 = "data:image/svg+xml,%3csvg width='362' height='365' viewBox='0 0 362 365' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg filter='url(%23filter0_i_2_6419)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M301.841 237.572C288.859 246.665 273.052 252 256 252C211.817 252 176 216.183 176 172C176 127.817 211.817 92 256 92C299.769 92 335.329 127.15 335.991 170.762C335.997 170.953 336 171.146 336 171.339V234.81C336 244.304 328.304 252 318.81 252C310.257 252 303.162 245.753 301.841 237.572Z' fill='url(%23paint0_linear_2_6419)'/%3e%3c/g%3e%3ccircle cx='256' cy='172' r='45.6198' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M238.686 166.195C237.944 168.194 237.539 170.358 237.539 172.615C237.539 182.811 245.804 191.077 256 191.077C266.196 191.077 274.462 182.811 274.462 172.615C274.462 162.419 266.196 154.154 256 154.154C255.23 154.154 254.47 154.201 253.724 154.293C253.919 155.094 254.022 155.93 254.022 156.791C254.022 162.618 249.299 167.341 243.473 167.341C241.749 167.341 240.122 166.927 238.686 166.195Z' fill='%23333333'/%3e%3cg filter='url(%23filter1_d_2_6419)'%3e%3cpath d='M316.248 298H218.044C206.422 298 197 307.443 197 319.091C197 330.739 206.422 340.182 218.044 340.182H316.248C327.871 340.182 337.292 330.739 337.292 319.091C337.292 307.443 327.871 298 316.248 298Z' fill='white'/%3e%3cpath d='M274.161 320.848H246.102C245.134 320.848 244.349 321.635 244.349 322.605C244.349 323.576 245.134 324.363 246.102 324.363H274.161C275.129 324.363 275.914 323.576 275.914 322.605C275.914 321.635 275.129 320.848 274.161 320.848Z' fill='%23CCCCCC'/%3e%3cpath d='M298.712 312.939H246.102C245.134 312.939 244.349 313.726 244.349 314.697C244.349 315.667 245.134 316.454 246.102 316.454H298.712C299.68 316.454 300.466 315.667 300.466 314.697C300.466 313.726 299.68 312.939 298.712 312.939Z' fill='%23CCCCCC'/%3e%3cpath d='M217.167 331.394C215.554 331.398 213.957 331.082 212.467 330.464C210.977 329.845 209.624 328.937 208.486 327.791C207.343 326.651 206.436 325.295 205.819 323.802C205.202 322.308 204.887 320.707 204.891 319.091C204.887 317.474 205.202 315.873 205.819 314.38C206.436 312.886 207.343 311.531 208.486 310.391C209.624 309.245 210.977 308.336 212.467 307.718C213.957 307.099 215.554 306.783 217.167 306.788C218.78 306.783 220.377 307.099 221.867 307.718C223.357 308.336 224.71 309.245 225.848 310.391C226.991 311.531 227.897 312.886 228.515 314.38C229.132 315.873 229.447 317.474 229.443 319.091C229.447 320.707 229.132 322.308 228.515 323.802C227.898 325.295 226.991 326.651 225.848 327.791C224.71 328.937 223.357 329.845 221.867 330.464C220.377 331.082 218.78 331.398 217.167 331.394ZM211.468 318.962C211.301 318.963 211.137 319.002 210.987 319.075C210.838 319.149 210.707 319.256 210.605 319.388C210.428 319.618 210.349 319.91 210.386 320.198C210.422 320.487 210.571 320.749 210.799 320.928L214.658 323.916C214.851 324.063 215.087 324.143 215.329 324.143C215.619 324.142 215.897 324.027 216.103 323.822L223.107 316.802C223.265 316.648 223.374 316.45 223.418 316.233C223.462 316.016 223.44 315.791 223.355 315.587C223.272 315.388 223.131 315.218 222.952 315.099C222.773 314.98 222.562 314.916 222.347 314.916H222.305C222.021 314.922 221.751 315.04 221.554 315.244L215.225 321.587L212.136 319.193C211.945 319.044 211.711 318.963 211.469 318.962H211.468Z' fill='black'/%3e%3c/g%3e%3cg filter='url(%23filter2_d_2_6419)'%3e%3cpath d='M220.248 24H122.044C110.422 24 101 33.4427 101 45.0909C101 56.7391 110.422 66.1818 122.044 66.1818H220.248C231.871 66.1818 241.292 56.7391 241.292 45.0909C241.292 33.4427 231.871 24 220.248 24Z' fill='white'/%3e%3cpath d='M178.161 46.8479H150.102C149.134 46.8479 148.349 47.6346 148.349 48.605C148.349 49.5754 149.134 50.3621 150.102 50.3621H178.161C179.129 50.3621 179.914 49.5754 179.914 48.605C179.914 47.6346 179.129 46.8479 178.161 46.8479Z' fill='%23CCCCCC'/%3e%3cpath d='M202.712 38.939H150.102C149.134 38.939 148.349 39.7256 148.349 40.6961C148.349 41.6665 149.134 42.4532 150.102 42.4532H202.712C203.68 42.4532 204.466 41.6665 204.466 40.6961C204.466 39.7256 203.68 38.939 202.712 38.939Z' fill='%23CCCCCC'/%3e%3cpath d='M121.167 57.3935C119.554 57.398 117.957 57.0818 116.467 56.4634C114.977 55.8449 113.624 54.9364 112.486 53.7904C111.343 52.6506 110.436 51.2947 109.819 49.8014C109.202 48.308 108.887 46.7068 108.891 45.0904C108.887 43.4741 109.202 41.8729 109.819 40.3795C110.436 38.8862 111.343 37.5303 112.486 36.3904C113.624 35.2444 114.977 34.3359 116.467 33.7175C117.957 33.099 119.554 32.7829 121.167 32.7874C122.78 32.7829 124.377 33.099 125.867 33.7175C127.357 34.3359 128.71 35.2444 129.848 36.3904C130.991 37.5303 131.897 38.8862 132.515 40.3795C133.132 41.8729 133.447 43.4741 133.443 45.0904C133.447 46.7068 133.132 48.308 132.515 49.8014C131.898 51.2947 130.991 52.6506 129.848 53.7904C128.71 54.9365 127.357 55.845 125.867 56.4634C124.377 57.0819 122.78 57.398 121.167 57.3935ZM115.468 44.9621C115.301 44.9628 115.137 45.0015 114.987 45.0752C114.838 45.1489 114.707 45.2557 114.605 45.3875C114.428 45.6181 114.349 45.9094 114.386 46.1979C114.422 46.4864 114.571 46.7488 114.799 46.928L118.658 49.9159C118.851 50.0627 119.087 50.1423 119.329 50.1426C119.619 50.1422 119.897 50.0269 120.103 49.8218L127.107 42.8021C127.265 42.6481 127.374 42.4497 127.418 42.2328C127.462 42.016 127.44 41.7908 127.355 41.5867C127.272 41.3878 127.131 41.218 126.952 41.0987C126.773 40.9794 126.562 40.9159 126.347 40.9162H126.305C126.021 40.9218 125.751 41.0396 125.554 41.244L119.225 47.5871L116.136 45.1924C115.945 45.044 115.711 44.963 115.469 44.9621H115.468Z' fill='black'/%3e%3c/g%3e%3cg filter='url(%23filter3_d_2_6419)'%3e%3cpath d='M143.248 230H45.0438C33.4216 230 24 239.443 24 251.091C24 262.739 33.4216 272.182 45.0438 272.182H143.248C154.871 272.182 164.292 262.739 164.292 251.091C164.292 239.443 154.871 230 143.248 230Z' fill='white'/%3e%3cpath d='M101.161 252.848H73.1023C72.1338 252.848 71.3486 253.635 71.3486 254.605C71.3486 255.575 72.1338 256.362 73.1023 256.362H101.161C102.129 256.362 102.914 255.575 102.914 254.605C102.914 253.635 102.129 252.848 101.161 252.848Z' fill='%23CCCCCC'/%3e%3cpath d='M125.712 244.939H73.1023C72.1338 244.939 71.3486 245.726 71.3486 246.696C71.3486 247.667 72.1338 248.453 73.1023 248.453H125.712C126.68 248.453 127.466 247.667 127.466 246.696C127.466 245.726 126.68 244.939 125.712 244.939Z' fill='%23CCCCCC'/%3e%3cpath d='M44.1672 263.394C42.5545 263.398 40.9569 263.082 39.4668 262.464C37.9768 261.845 36.624 260.937 35.4866 259.791C34.3432 258.651 33.4367 257.295 32.8196 255.802C32.2025 254.308 31.8871 252.707 31.8916 251.091C31.8872 249.474 32.2026 247.873 32.8197 246.38C33.4367 244.886 34.3432 243.531 35.4866 242.391C36.624 241.245 37.9768 240.336 39.4668 239.718C40.9569 239.099 42.5545 238.783 44.1672 238.788C45.78 238.783 47.3776 239.099 48.8676 239.718C50.3577 240.336 51.7105 241.245 52.8478 242.391C53.9912 243.531 54.8977 244.886 55.5148 246.38C56.1319 247.873 56.4473 249.474 56.4428 251.091C56.4473 252.707 56.1319 254.308 55.5149 255.802C54.8978 257.295 53.9913 258.651 52.8478 259.791C51.7105 260.937 50.3577 261.845 48.8676 262.464C47.3776 263.082 45.78 263.398 44.1672 263.394ZM38.4678 250.962C38.3013 250.963 38.137 251.002 37.9876 251.075C37.8381 251.149 37.7073 251.256 37.6051 251.388C37.4283 251.618 37.3496 251.91 37.386 252.198C37.4225 252.487 37.5712 252.749 37.7997 252.928L41.6577 255.916C41.851 256.063 42.0869 256.143 42.3294 256.143C42.6193 256.142 42.8973 256.027 43.1028 255.822L50.1068 248.802C50.2655 248.648 50.374 248.45 50.4183 248.233C50.4626 248.016 50.4405 247.791 50.355 247.587C50.2718 247.388 50.1317 247.218 49.9525 247.099C49.7732 246.98 49.5627 246.916 49.3475 246.916H49.3054C49.0216 246.922 48.7515 247.04 48.554 247.244L42.2251 253.587L39.136 251.193C38.9453 251.044 38.711 250.963 38.4696 250.962H38.4678Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_i_2_6419' x='176' y='92' width='160' height='160' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='shape' result='effect1_innerShadow_2_6419'/%3e%3c/filter%3e%3cfilter id='filter1_d_2_6419' x='173' y='274' width='188.292' height='90.1819' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2_6419'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2_6419' result='shape'/%3e%3c/filter%3e%3cfilter id='filter2_d_2_6419' x='77' y='0' width='188.292' height='90.1819' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2_6419'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2_6419' result='shape'/%3e%3c/filter%3e%3cfilter id='filter3_d_2_6419' x='0' y='206' width='188.292' height='90.1819' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2_6419'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2_6419' result='shape'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_2_6419' x1='303.141' y1='122.748' x2='214.921' y2='259.636' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23F7FF05'/%3e%3cstop offset='0.614583' stop-color='%232DDFA6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

	var styles$2 = {"root":"index-module_root__T0nnT","root__content":"index-module_root__content__t7g-M","image":"index-module_image__ySeUo","image__content":"index-module_image__content__OcWX9","texts":"index-module_texts__JS0-W","texts__title":"index-module_texts__title__iZ1WA","texts__subtitle":"index-module_texts__subtitle__kEquS","button":"index-module_button__tAqIx","button__text":"index-module_button__text__N6MjE"};

	var BaseWelcome = /** @class */function (_super) {
	  __extends(BaseWelcome, _super);
	  function BaseWelcome() {
	    var _this = _super !== null && _super.apply(this, arguments) || this;
	    _this.onStartClickHandler = function () {
	      // our logic here
	      _this.next();
	    };
	    _this.render = function () {
	      return jsxRuntime.jsxs(react.IonPage, __assign({
	        className: styles$2.root
	      }, {
	        children: [jsxRuntime.jsxs(react.IonContent, __assign({
	          className: styles$2.root__content
	        }, {
	          children: [jsxRuntime.jsx("div", __assign({
	            className: styles$2.image
	          }, {
	            children: jsxRuntime.jsx(react.IonImg, {
	              src: img$2,
	              className: styles$2.image__content
	            }, void 0)
	          }), void 0), jsxRuntime.jsxs("div", __assign({
	            className: styles$2.texts
	          }, {
	            children: [jsxRuntime.jsx(react.IonText, __assign({
	              color: "black",
	              className: styles$2.texts__subtitle
	            }, {
	              children: "Conoc\u00E9 Arcus"
	            }), void 0), jsxRuntime.jsx(react.IonText, __assign({
	              className: styles$2.texts__title
	            }, {
	              children: "La nueva app para facilitar todas tus tareas"
	            }), void 0)]
	          }), void 0)]
	        }), void 0), jsxRuntime.jsx(react.IonFooter, __assign({
	          className: 'ion-no-border'
	        }, {
	          children: jsxRuntime.jsx(react.IonButton, __assign({
	            color: 'light',
	            shape: "round",
	            expand: "block",
	            size: 'large',
	            className: styles$2.button,
	            onClick: _this.onStartClickHandler
	          }, {
	            children: jsxRuntime.jsx(react.IonText, __assign({
	              className: styles$2.button__text
	            }, {
	              children: "Comencemos"
	            }), void 0)
	          }), void 0)
	        }), void 0)]
	      }), void 0);
	    };
	    return _this;
	  }
	  return BaseWelcome;
	}(BasePage);

	var img$1 = "data:image/svg+xml,%3csvg width='280' height='280' viewBox='0 0 280 280' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M279.843 139.922C279.843 62.6451 217.198 0 139.922 0C62.6451 0 0 62.6451 0 139.922V140.079C0 217.356 62.6451 280.001 139.922 280.001C217.198 280.001 279.843 217.356 279.843 140.079V139.922Z' fill='%23DDDDDD'/%3e%3cpath d='M184.31 232.975L221.629 253.779C197.953 270.817 169.525 279.989 140.357 280.001L144.172 278.157L145.061 277.485L170.932 248.146L184.31 232.975ZM161.186 220.086L179.343 230.207L164.263 247.308L141.107 273.569L128.725 279.547C125.152 279.26 121.618 278.84 118.124 278.288L113.791 270.082L134.944 263.463L146.097 245.027L161.186 220.086ZM108.345 271.786L111.096 276.994C107.467 276.229 103.891 275.325 100.37 274.281L108.345 271.786ZM90.7509 184.23L103.647 188.013L156.292 217.358L140.017 244.262L131.129 258.954L91.5331 271.345C90.6161 271.005 89.7038 270.655 88.7961 270.295L79.3461 251.285L59.9385 254.777C53.5503 250.304 47.5451 245.307 41.9852 239.838L48.2143 232.734L90.7509 184.23ZM76.1033 257.38L80.8134 266.856C75.8977 264.552 71.1205 261.964 66.5063 259.104L76.1033 257.38ZM199.927 156.047C230.989 186.922 253.201 192.42 258.539 193.332L258.695 193.358L267.631 197.64C258.315 218.21 244.179 236.232 226.418 250.178L185.32 227.269L183.342 225.672L183.05 226.003L164.02 215.397L199.927 156.047ZM65.3443 167.533L80.2744 181.157L84.8708 182.506L41.5582 231.893L38.0906 235.847C33.5325 230.993 29.3248 225.822 25.4993 220.372L65.3443 167.533ZM51.9322 91.6277L49.7823 110.801L49.1698 116.244L47.013 135.471L46.6805 135.476L46.7268 138.023L45.452 149.382L61.2073 163.759L22.2101 215.471C11.0282 197.951 3.8753 178.167 1.26782 157.546C-1.33966 136.926 0.66328 115.984 7.13207 96.2319C14.3398 95.4217 21.1884 94.6788 27.678 94.0033C29.5969 93.8038 31.479 93.6113 33.3393 93.4223C39.8971 92.7567 46.0948 92.1585 51.9322 91.6277ZM146.622 154.062L180.697 177.018L159.13 212.669L127.202 194.873L131.76 160.731C137.315 160.21 142.54 157.865 146.622 154.062V154.062ZM104.621 139.945C105.917 150.55 114.596 159.02 125.611 160.575L126.065 160.636L121.888 191.912L106.212 183.175L105.93 183.016L83.2101 176.353L51.3775 147.303L52.1063 140.805L104.621 139.945ZM271.273 188.78L262.421 184.538L261.604 184.165L260.746 184.067C259.555 183.876 258.378 183.6 257.225 183.243L256.915 183.156L276.088 173.02C274.796 178.364 273.189 183.626 271.274 188.78H271.273ZM267.27 81.5765L265.433 90.9023L217.71 58.6252C219.191 55.9941 219.97 53.0263 219.971 50.0073C219.971 39.8739 211.325 31.6322 200.698 31.6322C190.072 31.6322 181.425 39.8791 181.426 50.0125C181.427 60.146 190.072 68.3876 200.698 68.3876C205.611 68.4087 210.354 66.5944 213.999 63.3003L214.341 62.981L264.281 96.7561L247.94 179.652C230.691 171.579 197.627 149.089 158.697 87.2518C158.556 86.3409 158.207 85.4747 157.677 84.7204C157.59 84.5909 157.492 84.4518 157.382 84.3048L157.283 84.1753C156.263 82.8628 154.114 80.9938 146.534 79.6839L145.841 79.5684C141.087 78.8633 136.295 78.4423 131.491 78.3075L130.871 78.2848L144.501 34.7752L155.143 0.801503C179.223 3.4188 202.212 12.2369 221.865 26.3946C241.517 40.5523 257.162 59.5653 267.27 81.5765V81.5765ZM169.023 119.801C177.041 130.759 185.737 141.205 195.06 151.077L195.875 151.929L183.545 172.31L150.189 149.837C152.261 146.778 153.549 143.257 153.94 139.583C154.331 135.908 153.813 132.195 152.431 128.768L152.198 128.21L169.023 119.801ZM277.725 114.717L279.849 137.17L279.503 137.536L279.918 137.894L279.994 138.65C279.998 139.1 280 139.55 280 140C280.002 147.008 279.483 154.007 278.446 160.938L259.76 170.815L270.65 115.577L277.239 112.19C277.409 113.03 277.571 113.873 277.725 114.717ZM129.252 118.949C132.575 118.922 135.849 119.752 138.758 121.358C141.668 122.965 144.114 125.293 145.862 128.12L146.069 128.47L146.128 128.576C147.672 131.285 148.458 134.359 148.403 137.476C148.348 140.594 147.455 143.638 145.817 146.291L145.554 146.711L144.048 148.76C142.276 150.788 140.103 152.427 137.666 153.573C135.229 154.719 132.58 155.346 129.888 155.416L129.384 155.426L126.805 155.111L126.784 155.263C117.544 154.126 110.345 146.7 110.109 137.648L110.103 137.248V137.16C110.12 127.118 118.704 118.948 129.252 118.95V118.949ZM99.1325 88.2108L117.371 116.428C114.005 118.143 111.096 120.636 108.887 123.701C106.678 126.766 105.232 130.314 104.67 134.05L104.609 134.527L52.7162 135.38L54.8845 116.056L54.9282 115.659L57.6819 91.1176C74.3008 89.6616 87.943 88.7446 99.1325 88.2117V88.2108ZM148.708 89.8549L148.795 89.8873L149.471 90.9662C154.671 99.2787 159.776 106.904 164.766 113.924L165.763 115.324L149.436 123.483C147.075 120.372 144.022 117.854 140.519 116.127C137.016 114.401 133.159 113.514 129.254 113.536C127.286 113.54 125.326 113.771 123.412 114.225L122.712 114.4L105.609 87.9378C136.124 86.7872 145.785 88.7831 148.708 89.8558V89.8549ZM276.011 106.668L271.999 108.732L273.914 99.032C274.683 101.548 275.382 104.094 276.011 106.669V106.668ZM140.079 3.26791e-08C141.242 3.26791e-08 142.402 0.0140001 143.558 0.0420002L132.134 36.5139L119.094 78.1378C113.784 78.1728 107.719 78.3268 100.792 78.6286L99.6304 78.6803L99.3259 78.2104L98.4386 78.7354C78.5979 79.6716 51.9558 81.7839 16.1009 85.6908L14.735 85.8404L13.5975 80.0654C24.9349 56.1128 42.8409 35.8719 65.232 21.6979C87.6232 7.52389 113.579 -0.000572576 140.079 3.26791e-08V3.26791e-08ZM200.699 35.946C208.837 35.946 215.463 42.253 215.463 50.0082C215.459 52.129 214.952 54.2187 213.983 56.1052C213.139 57.757 211.98 59.2273 210.57 60.433C207.822 62.7903 204.318 64.0812 200.697 64.0703C192.555 64.0703 185.932 57.7633 185.932 50.0082C185.932 42.253 192.558 35.946 200.699 35.946Z' fill='%23F2F4F4'/%3e%3cg filter='url(%23filter0_d_322_266)'%3e%3cg filter='url(%23filter1_i_322_266)'%3e%3cpath d='M139.922 77.9128C133.526 77.9093 127.192 79.1664 121.283 81.6123C115.373 84.0582 110.003 87.645 105.481 92.1675C100.958 96.69 97.3715 102.06 94.9256 107.969C92.4796 113.879 91.2225 120.213 91.2261 126.609C91.2261 157.597 139.922 201.866 139.922 201.866C139.922 201.866 188.614 157.597 188.614 126.609C188.617 120.213 187.36 113.879 184.915 107.97C182.469 102.061 178.883 96.6912 174.36 92.1688C169.838 87.6463 164.469 84.0595 158.56 81.6133C152.651 79.1672 146.317 77.9097 139.922 77.9128V77.9128Z' fill='url(%23paint0_linear_322_266)'/%3e%3c/g%3e%3cpath d='M139.922 77.9128C133.526 77.9093 127.192 79.1664 121.283 81.6123C115.373 84.0582 110.003 87.645 105.481 92.1675C100.958 96.69 97.3715 102.06 94.9256 107.969C92.4796 113.879 91.2225 120.213 91.2261 126.609C91.2261 157.597 139.922 201.866 139.922 201.866C139.922 201.866 188.614 157.597 188.614 126.609C188.617 120.213 187.36 113.879 184.915 107.97C182.469 102.061 178.883 96.6912 174.36 92.1688C169.838 87.6463 164.469 84.0595 158.56 81.6133C152.651 79.1672 146.317 77.9097 139.922 77.9128V77.9128Z' stroke='white' stroke-width='5'/%3e%3c/g%3e%3cg filter='url(%23filter2_d_322_266)'%3e%3cpath d='M139.921 103.257C135.587 103.257 131.35 104.542 127.747 106.95C124.143 109.358 121.335 112.78 119.676 116.784C118.018 120.788 117.584 125.194 118.429 129.445C119.275 133.695 121.362 137.6 124.426 140.664C127.491 143.729 131.395 145.816 135.646 146.662C139.897 147.507 144.302 147.073 148.306 145.415C152.31 143.756 155.733 140.947 158.141 137.344C160.548 133.74 161.834 129.504 161.834 125.17C161.831 119.359 159.522 113.787 155.413 109.678C151.304 105.569 145.732 103.259 139.921 103.257V103.257Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_322_266' x='48.7261' y='45.4128' width='182.388' height='209.832' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dy='10'/%3e%3cfeGaussianBlur stdDeviation='20'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_322_266'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_322_266' result='shape'/%3e%3c/filter%3e%3cfilter id='filter1_i_322_266' x='88.7261' y='75.4128' width='102.388' height='129.832' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='shape' result='effect1_innerShadow_322_266'/%3e%3c/filter%3e%3cfilter id='filter2_d_322_266' x='94.0081' y='79.2572' width='91.8254' height='91.8254' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_322_266'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_322_266' result='shape'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_322_266' x1='168.613' y1='101.734' x2='95.016' y2='191.458' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23F7FF05'/%3e%3cstop offset='0.614583' stop-color='%232DDFA6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

	var styles$1 = {"root":"index-module_root__--SK1","root__content":"index-module_root__content__Fl5AY","image":"index-module_image__rWnud","image__content":"index-module_image__content__ZFAwz","texts":"index-module_texts__34qxg","texts__title":"index-module_texts__title__rlHRL","texts__subtitle":"index-module_texts__subtitle__E4LF7","button":"index-module_button__O3PkJ","button__text":"index-module_button__text__sD-G7"};

	var BaseGPS = /** @class */function (_super) {
	  __extends(BaseGPS, _super);
	  function BaseGPS() {
	    var _this = _super !== null && _super.apply(this, arguments) || this;
	    _this.onActivateLocalizationClickHandler = function () {
	      // our logic here
	      _this.next();
	    };
	    _this.render = function () {
	      return jsxRuntime.jsxs(react.IonPage, __assign({
	        className: styles$1.root
	      }, {
	        children: [jsxRuntime.jsxs(react.IonContent, __assign({
	          className: styles$1.root__content
	        }, {
	          children: [jsxRuntime.jsx("div", __assign({
	            className: styles$1.image
	          }, {
	            children: jsxRuntime.jsx(react.IonImg, {
	              src: img$1,
	              className: styles$1.image__content
	            }, void 0)
	          }), void 0), jsxRuntime.jsxs("div", __assign({
	            className: styles$1.texts
	          }, {
	            children: [jsxRuntime.jsx(react.IonText, __assign({
	              className: styles$1.texts__title
	            }, {
	              children: "En el lugar adecuado"
	            }), void 0), jsxRuntime.jsx(react.IonText, __assign({
	              color: "black",
	              className: styles$1.texts__subtitle
	            }, {
	              children: "Activ\u00E1 para poder notificarte de info importante solo cuando estes en el local."
	            }), void 0)]
	          }), void 0)]
	        }), void 0), jsxRuntime.jsx(react.IonFooter, __assign({
	          className: 'ion-no-border'
	        }, {
	          children: jsxRuntime.jsx(react.IonButton, __assign({
	            color: 'light',
	            shape: "round",
	            expand: "block",
	            size: 'large',
	            className: styles$1.button,
	            onClick: _this.onActivateLocalizationClickHandler
	          }, {
	            children: jsxRuntime.jsx(react.IonText, __assign({
	              className: styles$1.button__text
	            }, {
	              children: "Activar localizaci\u00F3n"
	            }), void 0)
	          }), void 0)
	        }), void 0)]
	      }), void 0);
	    };
	    return _this;
	  }
	  return BaseGPS;
	}(BasePage);

	var img = "data:image/svg+xml,%3csvg width='280' height='280' viewBox='0 0 280 280' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M140 280C217.32 280 280 217.32 280 140C280 62.6801 217.32 0 140 0C62.6801 0 0 62.6801 0 140C0 217.32 62.6801 280 140 280Z' fill='%23F2F4F4'/%3e%3cmask id='mask0_322_198' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='280' height='280'%3e%3cpath d='M140 280C217.32 280 280 217.32 280 140C280 62.6801 217.32 0 140 0C62.6801 0 0 62.6801 0 140C0 217.32 62.6801 280 140 280Z' fill='%23F2F4F4'/%3e%3c/mask%3e%3cg mask='url(%23mask0_322_198)'%3e%3cmask id='mask1_322_198' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='36' y='129' width='5' height='20'%3e%3cpath d='M36.2971 129.543H40.6782V148.064H36.2971V129.543Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask1_322_198)'%3e%3cpath d='M39.5926 148.064H37.3827C36.7825 148.064 36.2971 147.577 36.2971 146.978V130.628C36.2971 130.029 36.7825 129.544 37.3827 129.544H39.5926C40.1914 129.544 40.6782 130.031 40.6782 130.63V146.98C40.6782 147.579 40.1914 148.065 39.5926 148.065' fill='%23D8D8D8'/%3e%3c/g%3e%3cpath d='M39.233 194.715H37.7423C36.9443 194.715 36.2971 194.069 36.2971 193.271V163.359C36.2971 162.562 36.9443 161.915 37.7423 161.915H39.233C40.031 161.915 40.6782 162.562 40.6782 163.36V193.271C40.6782 194.069 40.031 194.715 39.233 194.715ZM244.02 222.598H242.239C241.521 222.598 240.939 222.018 240.939 221.299V171.301C240.939 170.582 241.521 170.001 242.239 170.001H244.02C244.739 170.001 245.32 170.582 245.32 171.301V221.301C245.32 222.019 244.739 222.601 244.02 222.601V222.598ZM39.233 236.192H37.7423C36.9443 236.192 36.2971 235.545 36.2971 234.747V204.836C36.2971 204.038 36.9443 203.393 37.7423 203.393H39.233C40.031 203.393 40.6782 204.038 40.6782 204.836V234.749C40.6782 235.545 40.031 236.192 39.233 236.192Z' fill='%23D8D8D8'/%3e%3cmask id='mask2_322_198' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='38' y='64' width='206' height='422'%3e%3cpath d='M38.1592 64.9858H243.245V485.436H38.1592V64.9858Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask2_322_198)'%3e%3cpath d='M215.329 485.436H66.0714C50.6575 485.436 38.1602 472.938 38.1602 457.52V92.8999C38.1602 77.4832 50.6561 64.9858 66.0728 64.9858H215.33C230.747 64.9858 243.244 77.4832 243.244 92.8999V457.52C243.244 472.938 230.747 485.436 215.329 485.436Z' fill='%23DDDDDD'/%3e%3c/g%3e%3cpath d='M215.439 483.447H66.0007C52.1135 483.447 40.8552 472.189 40.8552 458.301V92.5101C40.8552 78.623 52.1121 67.3661 66.0007 67.3661H215.438C229.326 67.3661 240.585 78.623 240.585 92.5101V458.302C240.585 472.191 229.326 483.447 215.439 483.447Z' fill='%23CCCCCC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M215.439 483.447H66.0007C52.1135 483.447 40.8552 472.189 40.8552 458.301V92.5101C40.8552 78.623 52.1121 67.3661 66.0007 67.3661H215.438C229.326 67.3661 240.585 78.623 240.585 92.5101V458.302C240.585 472.191 229.326 483.447 215.439 483.447Z' stroke='%23DADADA' stroke-width='0.3'/%3e%3cpath d='M151.291 81.8742H129.441C128.481 81.8742 127.704 81.097 127.704 80.1372C127.704 79.1775 128.481 78.4003 129.441 78.4003H151.291C152.25 78.4003 153.027 79.1775 153.027 80.1372C153.027 81.097 152.25 81.8742 151.291 81.8742Z' fill='%23E1E1E1'/%3e%3cpath d='M214.375 74.6554H192.85C191.749 74.7245 188.42 75.4672 187.583 81.8742C186.425 90.7386 176.925 90.7193 176.925 90.7193H111.615C96.5964 91.0885 92.4518 87.8331 91.6386 79.768C91.2141 75.575 89.0526 74.7799 87.9117 74.6554H66.2719C55.4479 74.6554 46.6733 83.4313 46.6733 94.2554V457.196C46.6733 468.02 55.4479 476.794 66.2719 476.794H214.375C225.2 476.794 233.975 468.02 233.975 457.196V94.2554C233.975 83.4313 225.2 74.6554 214.375 74.6554Z' fill='white'/%3e%3cpath d='M47.9141 97.0696H229.827V333.547H47.9141V97.0696Z' fill='white'/%3e%3cpath d='M218.715 100.654H59.9216C57.2492 100.654 55.0828 102.82 55.0828 105.493V111.945C55.0828 114.618 57.2492 116.784 59.9216 116.784H218.715C221.388 116.784 223.554 114.618 223.554 111.945V105.493C223.554 102.82 221.388 100.654 218.715 100.654Z' fill='%23FAFAFA'/%3e%3cpath d='M86.9949 135.752H64.8407C60.9914 135.752 57.8708 138.873 57.8708 142.722V164.876C57.8708 168.725 60.9914 171.846 64.8407 171.846H86.9949C90.8443 171.846 93.9648 168.725 93.9648 164.876V142.722C93.9648 138.873 90.8443 135.752 86.9949 135.752Z' fill='%23FAFAFA'/%3e%3cpath d='M86.9949 180.558H64.8407C60.9914 180.558 57.8708 183.679 57.8708 187.528V209.682C57.8708 213.532 60.9914 216.652 64.8407 216.652H86.9949C90.8443 216.652 93.9648 213.532 93.9648 209.682V187.528C93.9648 183.679 90.8443 180.558 86.9949 180.558Z' fill='%23FAFAFA'/%3e%3cpath d='M86.9949 225.365H64.8407C60.9914 225.365 57.8708 228.485 57.8708 232.335V254.489C57.8708 258.338 60.9914 261.459 64.8407 261.459H86.9949C90.8443 261.459 93.9648 258.338 93.9648 254.489V232.335C93.9648 228.485 90.8443 225.365 86.9949 225.365Z' fill='%23FAFAFA'/%3e%3cpath d='M129.311 135.752H107.157C103.308 135.752 100.187 138.873 100.187 142.722V164.876C100.187 168.725 103.308 171.846 107.157 171.846H129.311C133.161 171.846 136.281 168.725 136.281 164.876V142.722C136.281 138.873 133.161 135.752 129.311 135.752Z' fill='%23FAFAFA'/%3e%3cpath d='M129.311 180.558H107.157C103.308 180.558 100.187 183.679 100.187 187.528V209.682C100.187 213.532 103.308 216.652 107.157 216.652H129.311C133.161 216.652 136.281 213.532 136.281 209.682V187.528C136.281 183.679 133.161 180.558 129.311 180.558Z' fill='%23FAFAFA'/%3e%3cpath d='M129.311 225.365H107.157C103.308 225.365 100.187 228.485 100.187 232.335V254.489C100.187 258.338 103.308 261.459 107.157 261.459H129.311C133.161 261.459 136.281 258.338 136.281 254.489V232.335C136.281 228.485 133.161 225.365 129.311 225.365Z' fill='%23FAFAFA'/%3e%3cpath d='M172.873 135.752H150.719C146.87 135.752 143.749 138.873 143.749 142.722V164.876C143.749 168.725 146.87 171.846 150.719 171.846H172.873C176.723 171.846 179.843 168.725 179.843 164.876V142.722C179.843 138.873 176.723 135.752 172.873 135.752Z' fill='%23FAFAFA'/%3e%3cpath d='M172.873 180.558H150.719C146.87 180.558 143.749 183.679 143.749 187.528V209.682C143.749 213.532 146.87 216.652 150.719 216.652H172.873C176.723 216.652 179.843 213.532 179.843 209.682V187.528C179.843 183.679 176.723 180.558 172.873 180.558Z' fill='%23FAFAFA'/%3e%3cpath d='M172.873 225.365H150.719C146.87 225.365 143.749 228.485 143.749 232.335V254.489C143.749 258.338 146.87 261.459 150.719 261.459H172.873C176.723 261.459 179.843 258.338 179.843 254.489V232.335C179.843 228.485 176.723 225.365 172.873 225.365Z' fill='%23FAFAFA'/%3e%3cpath d='M216.435 135.752H194.281C190.432 135.752 187.311 138.873 187.311 142.722V164.876C187.311 168.725 190.432 171.846 194.281 171.846H216.435C220.284 171.846 223.405 168.725 223.405 164.876V142.722C223.405 138.873 220.284 135.752 216.435 135.752Z' fill='%23FAFAFA'/%3e%3cpath d='M216.435 180.558H194.281C190.432 180.558 187.311 183.679 187.311 187.528V209.682C187.311 213.532 190.432 216.652 194.281 216.652H216.435C220.284 216.652 223.405 213.532 223.405 209.682V187.528C223.405 183.679 220.284 180.558 216.435 180.558Z' fill='%23FAFAFA'/%3e%3cpath d='M216.435 225.365H194.281C190.432 225.365 187.311 228.485 187.311 232.335V254.489C187.311 258.338 190.432 261.459 194.281 261.459H216.435C220.284 261.459 223.405 258.338 223.405 254.489V232.335C223.405 228.485 220.284 225.365 216.435 225.365Z' fill='%23FAFAFA'/%3e%3cg filter='url(%23filter0_d_322_198)'%3e%3cpath d='M251.928 99.658H27.072C22.0617 99.658 18 103.72 18 108.73V141.886C18 146.896 22.0617 150.958 27.072 150.958H251.928C256.938 150.958 261 146.896 261 141.886V108.73C261 103.72 256.938 99.658 251.928 99.658Z' fill='white'/%3e%3c/g%3e%3cpath d='M227.213 114.594H91.4006C89.3797 114.594 87.7415 116.232 87.7415 118.253V118.402C87.7415 120.423 89.3797 122.062 91.4006 122.062H227.213C229.234 122.062 230.873 120.423 230.873 118.402V118.253C230.873 116.232 229.234 114.594 227.213 114.594Z' fill='%23F3F3F3'/%3e%3cpath d='M191.119 127.04H91.4006C89.3797 127.04 87.7415 128.678 87.7415 130.699V130.849C87.7415 132.869 89.3797 134.508 91.4006 134.508H191.119C193.14 134.508 194.779 132.869 194.779 130.849V130.699C194.779 128.678 193.14 127.04 191.119 127.04Z' fill='%23F3F3F3'/%3e%3c/g%3e%3cg filter='url(%23filter1_d_322_198)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M50.49 105.6C61.5357 105.6 70.49 114.554 70.49 125.6C70.49 136.646 61.5357 145.6 50.49 145.6C39.4443 145.6 30.49 136.646 30.49 125.6C30.49 114.554 39.4443 105.6 50.49 105.6Z' fill='white'/%3e%3c/g%3e%3cg filter='url(%23filter2_i_322_198)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M63.4539 125.606C63.4544 125.562 63.4546 125.517 63.4546 125.472C63.4546 125.427 63.4544 125.383 63.4539 125.338V125.237C63.4539 125.178 63.452 125.119 63.4482 125.061C63.2311 118.101 57.5208 112.526 50.5082 112.526C43.3581 112.526 37.5618 118.322 37.5618 125.472C37.5618 132.622 43.3581 138.419 50.5082 138.419C53.2607 138.419 55.8127 137.56 57.9105 136.095C58.0729 137.405 59.1899 138.419 60.5437 138.419H60.8005C62.2659 138.419 63.4539 137.231 63.4539 135.765V125.606Z' fill='url(%23paint0_linear_322_198)'/%3e%3c/g%3e%3ccircle cx='50.5072' cy='125.472' r='7.38268' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M47.7058 124.532C47.5857 124.856 47.52 125.206 47.52 125.572C47.52 127.222 48.8576 128.559 50.5077 128.559C52.1577 128.559 53.4953 127.222 53.4953 125.572C53.4953 123.922 52.1577 122.584 50.5077 122.584C50.3833 122.584 50.2607 122.592 50.1403 122.606C50.1718 122.736 50.1885 122.872 50.1885 123.011C50.1885 123.954 49.4241 124.718 48.4813 124.718C48.2021 124.718 47.9385 124.651 47.7058 124.532Z' fill='%23333333'/%3e%3cdefs%3e%3cfilter id='filter0_d_322_198' x='-6' y='75.658' width='291' height='99.3' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='12'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_322_198'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_322_198' result='shape'/%3e%3c/filter%3e%3cfilter id='filter1_d_322_198' x='22.49' y='97.6' width='56' height='56' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='4'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_322_198'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_322_198' result='shape'/%3e%3c/filter%3e%3cfilter id='filter2_i_322_198' x='37.5618' y='112.526' width='25.8928' height='25.8929' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='1.36954'/%3e%3cfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3e%3cfeBlend mode='normal' in2='shape' result='effect1_innerShadow_322_198'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_322_198' x1='58.137' y1='117.502' x2='43.8604' y2='139.654' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23F7FF05'/%3e%3cstop offset='0.614583' stop-color='%232DDFA6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

	var styles = {"root":"index-module_root__n6S-J","root__content":"index-module_root__content__jjDi-","image":"index-module_image__NfbA9","image__content":"index-module_image__content__GBA8E","texts":"index-module_texts__ELsc3","texts__title":"index-module_texts__title__HjPzk","texts__subtitle":"index-module_texts__subtitle__ZVUvA","button":"index-module_button__J-z-U","button__text":"index-module_button__text__J9hXg"};

	var BaseNotification = /** @class */function (_super) {
	  __extends(BaseNotification, _super);
	  function BaseNotification() {
	    var _this = _super !== null && _super.apply(this, arguments) || this;
	    _this.onActivateNotificationClickHandler = function () {
	      // our logic here
	      _this.next();
	    };
	    _this.render = function () {
	      return jsxRuntime.jsxs(react.IonPage, __assign({
	        className: styles.root
	      }, {
	        children: [jsxRuntime.jsxs(react.IonContent, __assign({
	          className: styles.root__content
	        }, {
	          children: [jsxRuntime.jsx("div", __assign({
	            className: styles.image
	          }, {
	            children: jsxRuntime.jsx(react.IonImg, {
	              src: img,
	              className: styles.image__content
	            }, void 0)
	          }), void 0), jsxRuntime.jsxs("div", __assign({
	            className: styles.texts
	          }, {
	            children: [jsxRuntime.jsx(react.IonText, __assign({
	              className: styles.texts__title
	            }, {
	              children: "Siempre conectado"
	            }), void 0), jsxRuntime.jsx(react.IonText, __assign({
	              color: "black",
	              className: styles.texts__subtitle
	            }, {
	              children: "Activa siempre las notificaciones y asi no te perder\u00E1s de niguna info importante"
	            }), void 0)]
	          }), void 0)]
	        }), void 0), jsxRuntime.jsx(react.IonFooter, __assign({
	          className: 'ion-no-border'
	        }, {
	          children: jsxRuntime.jsx(react.IonButton, __assign({
	            color: 'light',
	            shape: "round",
	            expand: "block",
	            size: 'large',
	            className: styles.button,
	            onClick: _this.onActivateNotificationClickHandler
	          }, {
	            children: jsxRuntime.jsx(react.IonText, __assign({
	              className: styles.button__text
	            }, {
	              children: "Activar notificaciones"
	            }), void 0)
	          }), void 0)
	        }), void 0)]
	      }), void 0);
	    };
	    return _this;
	  }
	  return BaseNotification;
	}(BasePage);

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		BasePage: BasePage,
		BaseWelcome: BaseWelcome,
		BaseGPS: BaseGPS,
		BaseNotification: BaseNotification
	});

	var OnBoardingModule = /** @class */function (_super) {
	  __extends(OnBoardingModule, _super);
	  function OnBoardingModule(props, override) {
	    var _this = _super.call(this, props, {
	      routes: [],
	      override: override
	    }) || this;
	    _this.onChangeToNextPageHandler = function () {
	      var routes = _this.override.routes || [];
	      var currentPath = location.href.substring(location.href.indexOf(OnBoardingModule.route) + OnBoardingModule.route.length);
	      var currentIndex = routes.findIndex(function (route) {
	        return route.path === (currentPath.startsWith('/') ? currentPath : "/".concat(currentPath));
	      });
	      if (currentIndex === routes.length - 1) {
	        _this.onFinalize();
	        return;
	      }
	      var nextRoute = routes[currentIndex + 1];
	      _this.props.history.push("".concat(_this.props.match.url).concat(nextRoute.path));
	    };
	    _this.override = override;
	    EventStreamer$1.on("PAGE:NEXT", _this.onChangeToNextPageHandler);
	    return _this;
	  }
	  OnBoardingModule.prototype._onFinalize = function () {
	    EventStreamer$1.off("PAGE:NEXT", this.onChangeToNextPageHandler);
	    this.onFinalize();
	  };
	  OnBoardingModule.route = '/onboarding';
	  return OnBoardingModule;
	}(Module);

	exports.Lib = index;
	exports["default"] = OnBoardingModule;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
