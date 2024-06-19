// src/index.ts
import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { antfu } from "@antfu/eslint-config";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

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
  const _antfu = antfu(
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
    _antfu.append(eslintConfigPrettier, prettierRecommended, {
      rules: {
        "prettier/prettier": ["error", prettierrc_default]
      }
    });
  }
  if (_autoImport) {
    const autoImport = JSON.parse(readFileSync(join(process.cwd(), _autoImport), "utf-8"));
    _antfu.append({
      languageOptions: {
        ...autoImport
      }
    });
  }
  return _antfu;
}
var src_default = defineEslintConfig;
export {
  src_default as default,
  defineEslintConfig
};
