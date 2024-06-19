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
var import_recommended = __toESM(require("eslint-plugin-prettier/recommended"), 1);
var import_eslint_config_prettier = __toESM(require("eslint-config-prettier"), 1);

// src/prettierrc.ts
var prettierrc_default = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: "none",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: "auto",
  // 格式化嵌入的内容
  embeddedLanguageFormatting: "auto",
  // html, vue, jsx 中每个属性占一行
  singleAttributePerLine: false
};

// src/index.ts
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
    "@typescript-eslint/indent": 0,
    "antfu/generic-spacing": 0,
    "antfu/if-newline": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/v-on-event-hyphenation": 0,
    "quote-props": 0,
    "no-unused-vars": 1,
    "no-undef": 2,
    "style/comma-dangle": 0,
    "style/quote-props": 0,
    "style/brace-style": 0,
    "style/indent": 0,
    "style/operator-linebreak": 0,
    curly: [2, "all"],
    "style/arrow-parens": [0, "as-needed"],
    "style/indent-binary-ops": 0,
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
  const _prettier = options.prettier ?? true;
  const _autoImport = typeof options.autoImport === "string" ? options.autoImport : options.autoImport === true ? ".eslintrc-auto-import.json" : false;
  const _antfu = (0, import_eslint_config.antfu)(
    {
      ...new EslintConfig(),
      vue: true,
      typescript: true,
      ...options,
      formatters: _prettier ? {} : {
        css: true,
        html: true
      }
    },
    ...rest
  );
  if (_prettier) {
    _antfu.append(import_eslint_config_prettier.default, import_recommended.default, {
      rules: {
        "prettier/prettier": ["error", prettierrc_default]
      }
    });
  }
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
