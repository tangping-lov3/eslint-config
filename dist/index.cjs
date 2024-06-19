"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  defineEslintConfig: () => defineEslintConfig
});
module.exports = __toCommonJS(src_exports);
var import_node_fs = require("fs");
var import_node_path = require("path");
var import_node_process = __toESM(require("process"), 1);
var import_eslint_config = require("@antfu/eslint-config");
var EslintConfig = class {
  rules = {
    semi: [2, "never"],
    "vue/multi-word-component-names": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-self-closing": 0,
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "no-console": "off",
    "prefer-const": ["error", { destructuring: "all" }],
    "arrow-parens": [2, "as-needed"],
    "vue/comma-dangle": 0,
    "@typescript-eslint/brace-style": 0,
    "operator-linebreak": 0,
    "@typescript-eslint/indent": 0,
    "antfu/generic-spacing": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/v-on-event-hyphenation": 0,
    "quote-props": 0,
    "no-unused-vars": 1,
    "no-undef": 2,
    "style/comma-dangle": 0,
    "style/quote-props": 0,
    "style/brace-style": 0,
    "style/indent": 0,
    "style/arrow-parens": [0, "as-needed"],
    "style/member-delimiter-style": [
      2,
      {
        multiline: {
          delimiter: "none",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        },
        multilineDetection: "brackets"
      }
    ]
  };
};
function defineEslintConfig(options = {}, ...rest) {
  const _autoImport = typeof options.autoImport === "string" ? options.autoImport : options.autoImport === true ? ".eslintrc-auto-import.json" : false;
  const _antfu = (0, import_eslint_config.antfu)(
    {
      ...new EslintConfig(),
      vue: true,
      typescript: true,
      ...options,
      formatters: {
        css: true,
        html: true
      }
    },
    ...rest
  );
  if (_autoImport) {
    const autoImport = JSON.parse((0, import_node_fs.readFileSync)((0, import_node_path.join)(import_node_process.default.cwd(), _autoImport), "utf-8"));
    _antfu.append({
      languageOptions: {
        ...autoImport
      }
    });
  }
  return _antfu;
}
var src_default = defineEslintConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defineEslintConfig
});
