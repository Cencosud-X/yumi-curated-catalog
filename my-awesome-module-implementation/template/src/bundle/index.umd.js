(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react/jsx-runtime'), require('@ionic/react'), require('react'), require('react-router-dom')) :
    typeof define === 'function' && define.amd ? define(['react/jsx-runtime', '@ionic/react', 'react', 'react-router-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyAwesomeModuleSource = factory(global.jsxRuntime, global.react, global.React, global.reactRouterDom));
})(this, (function (jsxRuntime, react, React, reactRouterDom) { 'use strict';

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
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor$1(this, V);
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

    var uncurryThis$h = functionUncurryThis;

    var toString$8 = uncurryThis$h({}.toString);
    var stringSlice$6 = uncurryThis$h(''.slice);

    var classofRaw$2 = function (it) {
      return stringSlice$6(toString$8(it), 8, -1);
    };

    var uncurryThis$g = functionUncurryThis;
    var fails$d = fails$g;
    var classof$4 = classofRaw$2;

    var $Object$3 = Object;
    var split = uncurryThis$g(''.split);

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

    var $TypeError$7 = TypeError;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible$6 = function (it) {
      if (isNullOrUndefined$3(it)) throw $TypeError$7("Can't call method on " + it);
      return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = indexedObject;
    var requireObjectCoercible$5 = requireObjectCoercible$6;

    var toIndexedObject$4 = function (it) {
      return IndexedObject(requireObjectCoercible$5(it));
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

    var uncurryThis$f = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

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

    var $TypeError$6 = TypeError;

    // `Assert: IsCallable(argument) is true`
    var aCallable$2 = function (argument) {
      if (isCallable$b(argument)) return argument;
      throw $TypeError$6(tryToString(argument) + ' is not a function');
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

    var $TypeError$5 = TypeError;

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive$1 = function (input, pref) {
      var fn, val;
      if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
      if (isCallable$a(fn = input.valueOf) && !isObject$6(val = call$8(fn, input))) return val;
      if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$6(val = call$8(fn, input))) return val;
      throw $TypeError$5("Can't convert object to primitive value");
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

    var requireObjectCoercible$4 = requireObjectCoercible$6;

    var $Object$1 = Object;

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject$2 = function (argument) {
      return $Object$1(requireObjectCoercible$4(argument));
    };

    var uncurryThis$e = functionUncurryThis;
    var toObject$1 = toObject$2;

    var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject$1(it), key);
    };

    var uncurryThis$d = functionUncurryThis;

    var id = 0;
    var postfix = Math.random();
    var toString$7 = uncurryThis$d(1.0.toString);

    var uid$2 = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
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

    var wellKnownSymbol$8 = function (name) {
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
    var wellKnownSymbol$7 = wellKnownSymbol$8;

    var $TypeError$4 = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

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
    var $TypeError$3 = TypeError;

    // `Assert: Type(argument) is Object`
    var anObject$a = function (argument) {
      if (isObject$3(argument)) return argument;
      throw $TypeError$3($String$3(argument) + ' is not an object');
    };

    var DESCRIPTORS$6 = descriptors;
    var IE8_DOM_DEFINE = ie8DomDefine;
    var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
    var anObject$9 = anObject$a;
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
      if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
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

    var uncurryThis$c = functionUncurryThis;
    var isCallable$9 = isCallable$f;
    var store$1 = sharedStore;

    var functionToString = uncurryThis$c(Function.toString);

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

    var uncurryThis$b = functionUncurryThis;
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
    var stringSlice$5 = uncurryThis$b(''.slice);
    var replace$4 = uncurryThis$b(''.replace);
    var join = uncurryThis$b([].join);

    var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$9(function () {
      return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
    });

    var TEMPLATE = String(String).split('String');

    var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
      if (stringSlice$5($String$2(name), 0, 7) === 'Symbol(') {
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
    var lengthOfArrayLike$1 = function (obj) {
      return toLength$2(obj.length);
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

    var uncurryThis$a = functionUncurryThis;
    var hasOwn$3 = hasOwnProperty_1;
    var toIndexedObject$1 = toIndexedObject$4;
    var indexOf$1 = arrayIncludes.indexOf;
    var hiddenKeys$2 = hiddenKeys$4;

    var push$1 = uncurryThis$a([].push);

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
    var uncurryThis$9 = functionUncurryThis;
    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
    var anObject$8 = anObject$a;

    var concat$1 = uncurryThis$9([].concat);

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
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
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
          createNonEnumerableProperty$2(sourceProperty, 'sham', true);
        }
        defineBuiltIn$3(target, key, sourceProperty, options);
      }
    };

    var wellKnownSymbol$6 = wellKnownSymbol$8;

    var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
    var test = {};

    test[TO_STRING_TAG$1] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;
    var isCallable$4 = isCallable$f;
    var classofRaw$1 = classofRaw$2;
    var wellKnownSymbol$5 = wellKnownSymbol$8;

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
    var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
        // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw$1(O)
        // ES3 arguments fallback
        : (result = classofRaw$1(O)) == 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
    };

    var classof$2 = classof$3;

    var $String$1 = String;

    var toString$6 = function (argument) {
      if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
      return $String$1(argument);
    };

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
    var uncurryThis$8 = functionUncurryThis;
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
    var charAt$4 = uncurryThis$8(''.charAt);
    var indexOf = uncurryThis$8(''.indexOf);
    var replace$3 = uncurryThis$8(''.replace);
    var stringSlice$4 = uncurryThis$8(''.slice);

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

    var classofRaw = classofRaw$2;
    var uncurryThis$7 = functionUncurryThis;

    var functionUncurryThisClause = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis$7(fn);
    };

    // TODO: Remove from `core-js@4` since it's moved to entry points

    var uncurryThis$6 = functionUncurryThisClause;
    var defineBuiltIn$2 = defineBuiltIn$4;
    var regexpExec$1 = regexpExec$2;
    var fails$4 = fails$g;
    var wellKnownSymbol$4 = wellKnownSymbol$8;
    var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

    var SPECIES$1 = wellKnownSymbol$4('species');
    var RegExpPrototype$3 = RegExp.prototype;

    var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
      var SYMBOL = wellKnownSymbol$4(KEY);

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
    var toString$4 = toString$6;
    var requireObjectCoercible$3 = requireObjectCoercible$6;

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
    var classof$1 = classofRaw$2;
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
      if (classof$1(R) === 'RegExp') return call$4(regexpExec, R, S);
      throw $TypeError$1('RegExp#exec called on incompatible receiver');
    };

    var call$3 = functionCall;
    var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
    var anObject$3 = anObject$a;
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
    var toLength = toLength$3;
    var toString$2 = toString$6;
    var requireObjectCoercible$1 = requireObjectCoercible$6;
    var advanceStringIndex = advanceStringIndex$2;
    var getMethod = getMethod$3;
    var getSubstitution = getSubstitution$1;
    var regExpExec = regexpExecAbstract;
    var wellKnownSymbol$3 = wellKnownSymbol$8;

    var REPLACE = wellKnownSymbol$3('replace');
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
    var requireObjectCoercible = requireObjectCoercible$6;
    var toString$1 = toString$6;
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
    var isObject$1 = isObject$7;
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

    var isObject = isObject$7;
    var classof = classofRaw$2;
    var wellKnownSymbol$2 = wellKnownSymbol$8;

    var MATCH$1 = wellKnownSymbol$2('match');

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    var isRegexp = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
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
    var wellKnownSymbol$1 = wellKnownSymbol$8;
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
    var toString = toString$6;
    var getRegExpFlags$1 = regexpGetFlags;
    var stickyHelpers = regexpStickyHelpers;
    var proxyAccessor = proxyAccessor$1;
    var defineBuiltIn$1 = defineBuiltIn$4;
    var fails$1 = fails$g;
    var hasOwn = hasOwnProperty_1;
    var enforceInternalState = internalState.enforce;
    var setSpecies = setSpecies$1;
    var wellKnownSymbol = wellKnownSymbol$8;
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
    var defineBuiltIn = defineBuiltIn$4;
    var anObject = anObject$a;
    var $toString = toString$6;
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

    var HomePage = /** @class */function (_super) {
      __extends(HomePage, _super);
      function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
      }
      HomePage.prototype.render = function () {
        var _a, _b;
        return jsxRuntime.jsxs(react.IonPage, {
          children: [jsxRuntime.jsx(react.IonHeader, {
            children: "Home Page"
          }, void 0), jsxRuntime.jsxs(react.IonContent, {
            children: [jsxRuntime.jsxs("div", {
              children: ["I am the hello world page", jsxRuntime.jsx("br", {}, void 0), "you can extend the below content (red box) !!"]
            }, void 0), jsxRuntime.jsx("div", __assign({
              style: {
                backgroundColor: 'red',
                border: '1px solid red'
              }
            }, {
              children: ((_b = (_a = this.props.extensions) === null || _a === void 0 ? void 0 : _a.white_boxes) === null || _b === void 0 ? void 0 : _b.red_box) && jsxRuntime.jsx(this.props.extensions.white_boxes.red_box, {}, void 0)
            }), void 0)]
          }, void 0)]
        }, void 0);
      };
      return HomePage;
    }(Page);

    var HelloWorldModule = /** @class */function (_super) {
      __extends(HelloWorldModule, _super);
      function HelloWorldModule(props, override) {
        var _this = _super.call(this, props, {
          routes: [{
            path: '/',
            page: HomePage
          }],
          override: override
        }) || this;
        _this.override = override;
        return _this;
      }
      HelloWorldModule.route = '/hello-world';
      return HelloWorldModule;
    }(Module);

    return HelloWorldModule;

}));
