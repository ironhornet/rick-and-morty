const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    quotes: [ERROR, 'single'], // Enforces the consistent use of either backticks, double, or single quotes
    semi: [ERROR, 'always'], // Requires or disallows semicolons
    'jsx-quotes': [WARNING, 'prefer-single'], // Enforces the consistent use of either double or single quotes in JSX attributes
    'no-unused-vars': OFF, // Disallows unused variables, must be off to prevent issues with TS
    'no-trailing-spaces': OFF, // Disallows trailing whitespace at the end of lines
    'import/prefer-default-export': OFF,
    'max-len': OFF, // Enforces a maximum line length
    'no-console': OFF, // Disallows the use of console
    'no-plusplus': OFF, // Disallows the unary operators ++ and --
    'operator-linebreak': OFF, // Enforces consistent linebreak style for operators
    'no-shadow': OFF, // Disallows variable declarations from shadowing variables declared in the outer scope
    radix: OFF, // Enforces the consistent use of the radix argument when using parseInt()
    'consistent-return': OFF, // Requires return statements to either always or never specify values
    'quote-props': [ERROR, 'as-needed'], // Requires quotes around object literal property names
    'lines-between-class-members': [
      ERROR,
      'always',
      { exceptAfterSingleLine: true },
    ], // Requires or disallows an empty line between class members
    'no-param-reassign': OFF, // Disallows reassignment of function parameters
    'class-methods-use-this': OFF, // Enforces that class methods utilize this
    'exhaustive-deps': OFF,
    'linebreak-style': [ERROR, 'unix'], // Enforces consistent linebreak style
    'arrow-body-style': [OFF, 'as-needed'],
    'import/no-unresolved': OFF,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/require-default-props': OFF,
    'no-floating-decimal': ERROR, // this rule is aimed at eliminating floating decimal points
    'no-return-await': WARNING, // disallows unnecessary return await
    'no-useless-concat': WARNING, // this rule disallows unnecessary concatenation of strings
    'require-await': WARNING, // this rule warns async functions which have no await expression
    'no-undef': ERROR, // this rule disallows the use of undeclared variables
    'no-sparse-arrays': ERROR, // this rule disallows arrays like so [ "red",, "blue" ] ?
    'block-spacing': WARNING, // this rule disallows or enforces spaces inside of blocks after opening blocks and before closing blocks
    'comma-spacing': OFF, // this rule enforces spacing around commas
    'comma-dangle': [
      ERROR,
      {
        arrays: 'only-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'func-call-spacing': WARNING, // this rule requires or disallows spacing between function identifiers and their invocations
    'key-spacing': [WARNING, { beforeColon: false, afterColon: true }], // this rue enforces consistent spacing between keys and values in object literal properties
    'new-cap': ERROR, // this rule requires constructor names to begin with a capital letter
    'new-parens': ERROR, // this rule requires parentheses when invoking a constructor with no arguments
    'newline-before-return': WARNING, // this rule requires an empty line before return statements
    'no-mixed-spaces-and-tabs': ERROR, // this rule disallows mixed spaces and tabs for indentation
    'no-unneeded-ternary': WARNING, // this rule disallows ternary operators when simpler alternatives exist
    'no-whitespace-before-property': WARNING, // this rule disallows whitespace before properties
    'object-curly-spacing': OFF, // this rule enforces consistent spacing inside braces
    'operator-assignment': WARNING, // this rule requires or disallows assignment operator shorthand where possible
    'semi-spacing': WARNING, // this rule enforces spacing before and after semicolons
    'arrow-spacing': WARNING, // this rule requires space before/after arrow function's arrow
    'generator-star-spacing': WARNING, // this rule enforces spacing around the * in generator functions
    'no-const-assign': ERROR, // this rule disallows modifying variables that are declared using const
    'prefer-arrow-callback': [1, { allowNamedFunctions: true }], // this rule requires using arrow functions for callbacks
    'rest-spread-spacing': WARNING, // this rule enforces spacing between rest and spread operators and their expressions
    'react/prop-types': OFF,
    'react/function-component-definition': [
      OFF,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': OFF, // Checks effect dependencies
    'react/react-in-jsx-scope': OFF, // Prevent missing React when using JSX
    'react/jsx-filename-extension': [
      WARNING,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], // Restrict file extensions that may contain JSX
    'react/no-deprecated': WARNING, // Prevent usage of deprecated methods
    'react/no-direct-mutation-state': WARNING, // Prevent direct mutation of this.state
    'react/jsx-equals-spacing': [WARNING, 'never'], // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-no-comment-textnodes': WARNING, // Prevent comments from being inserted as text nodes
    'react/jsx-boolean-value': [OFF, 'always'], // Enforce boolean attributes notation in JSX
    'react/jsx-no-undef': ERROR, // Disallow undeclared variables in JSX
    'react/jsx-uses-vars': ERROR, // Prevent variables used in JSX to be incorrectly marked as unused
    'react/self-closing-comp': ERROR, // Prevent extra closing tags for components without children
    'react/jsx-closing-bracket-location': ERROR, // Validate closing bracket location in JSX
    'react/jsx-pascal-case': ERROR, // Enforce PascalCase for user-defined JSX components
    'react/jsx-curly-spacing': ERROR, // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/jsx-wrap-multilines': [
      ERROR,
      { declaration: false, assignment: false },
    ],
    'react/no-array-index-key': WARNING,
    'react/jsx-indent': [OFF, 4], // Seems to be overwritten by indent rule
    'react/jsx-key': ERROR,
    'react/jsx-no-useless-fragment': OFF,
    'react/button-has-type': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-duplicates': ERROR,
    'import/newline-after-import': ERROR,
    '@typescript-eslint/ban-types': OFF,
    '@typescript-eslint/no-unused-vars': WARNING,
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/no-unused-expressions': [
      ERROR,
      {
        allowTernary: true,
      },
    ],
    '@typescript-eslint/comma-spacing': WARNING,
    '@typescript-eslint/no-var-requires': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: { some: ['nesting', 'id'] },
      },
    ],
    'jsx-a11y/label-has-for': [
      ERROR,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
