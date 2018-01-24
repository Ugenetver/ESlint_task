ESLint task.
1. install nodejs
1. run `npm install` in the project folder
1. add rules to `.eslintrc` file
1. run `npm start` to check rules
1. if you see `valid: true` at the end of the output, you can sent your solution to a mentor.

Add rules to .eslintrc according to the following codestyle:

1. enforce one true brace style
1. require camel case names
1. enforce spacing after comma
1. require a comma after and on the same line as an array element, object property, or variable declaration
1. disallow padding inside computed properties
1. enforce newline at the end of file, with no multiple empty lines
1. enforce spacing between functions and their invocations
1. (warn) require function expressions to have a name
1. enforce the location of arrow function bodies with implicit returns
1. use 4 spaces for indent
1. require a space before & after keywords
1. maximum line length = 80, ignore for strings
1. disallow the omission of parentheses when invoking a constructor with no arguments
1. disallow mixed spaces and tabs for indentation
1. disallow use of chained assignment expressions
1. disallow multiple empty lines and allow only one newline at the end
1. disallow use of the Object constructor
1. disallow use of unary operators, ++ and --
1. disallow `for..in` syntax and show custom error:
_"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."_
1. disallow space between function identifier and application
1. disallow tab characters entirely
1. disallow dangling underscores in identifiers **everywhere**
1. disallow a newline before a single-line statement
1. require operator at the beginning of the line in multiline statements
    ```javascript
    // good
    var fullHeight = borderTop
                   + innerHeight
                   + borderBottom;
    ```
1. disallow padding within blocks
    ```javascript
    //bad
    if (a) {
    
        b();
    
    }
    ```
1. use only single quotes
1. require semicolons at the end of statements
1. enforce spacing after semicolons
1. enforce that semicolons are at the end of statements
1. require space before blocks
1. require space before opening parenthesis in anonymous and arrow functions. Exception: named functions.
1. disallow spaces inside parentheses
1. require spaces around operators
1. Require spaces before/after 'words' unary operators (new, delete, typeof, void, yield), disallow space before/after 'nonwords' operators (-, +, --, ++, !, !!).
1. require a space immediately following the // or /* in a comment