(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FoundRate = {}, global.jsxRuntime));
})(this, (function (exports, jsxRuntime) { 'use strict';

  function FoundRate(props) {
    return jsxRuntime.jsx("div", {
      children: jsxRuntime.jsx("h1", {
        children: "Welcome to FoundRate!"
      }, void 0)
    }, void 0);
  }

  exports.FoundRate = FoundRate;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
