module.exports = {
  'root': true,
  "extends": [
    // "eslint:recommended",
    'stylelint-config-standard',
    // 'stylelint-config-prettier',
  ],
  "ignoreFiles": [
    "app/bootstrap/**/*.less",
    "src/assets/styles/core/lib/*.scss",
    "src/assets/styles/app.css",
    "public/assets/styles/*.css"
  ],
  'globals': {
    'wp': true,
  },
  'env': {
    'node': true,
    'es6': true,
    'amd': true,
    'browser': true,
    'jquery': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'globalReturn': true,
      'generators': false,
      'objectLiteralDuplicateProperties': false,
      'experimentalObjectRestSpread': true,
    },
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
 
  "plugins": [
    // "@typescript-eslint",
    // 'import',
  ],
  'settings': {
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  'rules': {
    "rule-empty-line-before": null,
    "no-descending-specificity": null,
    "block-opening-brace-space-before": null,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "if", "each", "include", "mixin", "screen", "apply", "layer", "for", "tailwind", "extend"]
    }],
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["focus-visible"]
    }],
    "selector-type-no-unknown": [true, {
      "ignoreTypes": ["embeddedservice-chat-header"]
    }],
    "declaration-empty-line-before": null,
    "at-rule-semicolon-newline-after": null,
    "selector-pseudo-class-parentheses-space-inside": null,
    "block-opening-brace-newline-after": null,
    "block-closing-brace-newline-after": null,
    "number-leading-zero": null,
    "color-hex-case": null,
    "comment-empty-line-before": null,
    "function-comma-space-after": null,
    "declaration-colon-space-after": null,
    "selector-combinator-space-after": null,
    "selector-combinator-space-before": null,
    "declaration-colon-space-before": null,
    "at-rule-name-space-after": null,
    "block-closing-brace-newline-before": null,
    "declaration-block-trailing-semicolon": null,
    "selector-list-comma-newline-after": null,
    "block-closing-brace-empty-line-before": null,
    "selector-descendant-combinator-no-non-space": null,
    'no-missing-end-of-source-newline': null,
    'selector-list-comma-space-before': null,
    'max-empty-lines': null,
    'indentation': null,
    'no-eol-whitespace': null,
    "selector-pseudo-element-colon-notation": null,
    "at-rule-empty-line-before": null,
    "media-feature-name-no-unknown": null,
  },
};
