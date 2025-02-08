import { ProgrammingLanguage } from '../types';

export const javascriptData: ProgrammingLanguage = {
  id: 'javascript',
  name: 'JavaScript',
  description: 'Programming language of the web',
  color: '#F7DF1E',
  icon: require('../../assets/languages/javascript.png'),
  categories: [
    {
      id: 'js_basics',
      title: 'Basics & Syntax',
      description: 'Learn JavaScript fundamentals and syntax',
      icon: 'code-outline',
      subcategories: [
        {
          id: 'js_variables',
          title: 'Variables & Data Types',
          description: 'Understanding var, let, const and different data types',
          examples: [
            {
              id: 'js_var_1',
              title: 'Variable Declaration',
              description: 'Different ways to declare variables',
              code: `// Using var (function-scoped)
var age = 25;
var name = "John";

// Using let (block-scoped)
let score = 100;
score = 200; // Can be reassigned

// Using const (block-scoped, constant)
const PI = 3.14159;
const isActive = true;

// Multiple declarations
let x = 1, y = 2, z = 3;

console.log(typeof age);    // "number"
console.log(typeof name);   // "string"
console.log(typeof isActive); // "boolean"`,
              output: "number\nstring\nboolean",
              explanation: '`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned. Use `typeof` to check data types.'
            },
            {
              id: 'js_var_2',
              title: 'Data Types',
              description: 'Basic JavaScript data types',
              code: `// Number
let integer = 42;
let float = 3.14;

// String
let greeting = "Hello";
let name = 'World';

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Object
let person = {
    name: "John",
    age: 30
};

// Array
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(person);
console.log(undefinedVar);
console.log(nullVar);`,
              output: "[1, 2, 3, 4, 5]\n{name: 'John', age: 30}\nundefined\nnull",
              explanation: 'JavaScript has **dynamic typing**. Basic types include numbers, strings, booleans, undefined, null, objects, and arrays.'
            },
            {
              id: 'js_var_3',
              title: 'Complex Data Types',
              description: 'Working with arrays and objects',
              code: `// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);     // First element
console.log(fruits.length); // Array length

// Array methods
fruits.push('grape');       // Add to end
fruits.unshift('mango');    // Add to start
console.log(fruits);

// Objects
let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

console.log(user.name);           // Dot notation
console.log(user['age']);         // Bracket notation
console.log(user.preferences.theme);`,
              output: "apple\n3\n['mango', 'apple', 'banana', 'orange', 'grape']\nJohn\n30\ndark",
              explanation: '**Arrays** store ordered lists. **Objects** store key-value pairs. Access object properties using dot or bracket notation.'
            }
          ]
        },
        {
          id: 'js_operators',
          title: 'Operators & Expressions',
          description: 'Working with different types of operators',
          examples: [
            {
              id: 'js_op_1',
              title: 'Basic Operators',
              description: 'Arithmetic and comparison operators',
              code: `// Arithmetic operators
let a = 10;
let b = 5;

console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus

// Comparison operators
console.log(a > b);   // Greater than
console.log(a < b);   // Less than
console.log(a === b); // Strict equality
console.log(a !== b); // Strict inequality`,
              output: "15\n5\n50\n2\n0\ntrue\nfalse\nfalse\ntrue",
              explanation: 'Arithmetic operators perform calculations. Comparison operators return boolean values.'
            },
            {
              id: 'js_op_2',
              title: 'Logical and Assignment Operators',
              description: 'Working with logical and assignment operators',
              code: `// Logical operators
let isAdmin = true;
let isLoggedIn = true;
console.log(isAdmin && isLoggedIn); // AND
console.log(isAdmin || false);      // OR
console.log(!isAdmin);              // NOT

// Assignment operators
let x = 10;
x += 5;  // x = x + 5
console.log(x);

x *= 2;  // x = x * 2
console.log(x);

// Nullish coalescing
let user = null;
let defaultUser = user ?? "Guest";
console.log(defaultUser);

// Optional chaining
let data = { user: { name: "John" } };
console.log(data?.user?.name);`,
              output: "true\ntrue\nfalse\n15\n30\nGuest\nJohn",
              explanation: 'Logical operators: `&&` (AND), `||` (OR), `!` (NOT). Assignment operators combine operation and assignment. `??` provides default values.'
            }
          ]
        },
        {
          id: 'js_console',
          title: 'Console Output',
          description: 'Using console.log and alert',
          examples: [
            {
              id: 'js_console_1',
              title: 'Console Methods',
              description: 'Different ways to output data',
              code: `// Basic console.log
console.log("Hello World");

// Multiple values
console.log("Name:", "John", "Age:", 25);

// Using variables
let score = 100;
console.log(\`Score: \${score}\`);

// Warning and errors
console.warn("This is a warning");
console.error("This is an error");

// Alert (browser only)
alert("This is an alert!");`,
              output: "Hello World\nName: John Age: 25\nScore: 100\n⚠️ This is a warning\n❌ This is an error",
              explanation: '`console.log()` for basic output, `console.warn()` for warnings, `console.error()` for errors. `alert()` shows popup in browsers.'
            },
            {
              id: 'js_console_2',
              title: 'Advanced Console Methods',
              description: 'Advanced console output techniques',
              code: `// Console table
let users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 }
];
console.table(users);

// Console group
console.group('User Details');
console.log('Name: John');
console.log('Age: 30');
console.groupEnd();

// Console time
console.time('loop');
for(let i = 0; i < 1000000; i++) {}
console.timeEnd('loop');

// Styled console
console.log(
  '%cHello World!', 
  'color: blue; font-size: 20px; font-weight: bold;'
);`,
              output: "┌─────────┬────────┬─────┐\n│ (index) │  name  │ age │\n├─────────┼────────┼─────┤\n│    0    │ 'John' │ 30  │\n│    1    │ 'Alice'│ 25  │\n└─────────┴────────┴─────┘\n\nUser Details\n  Name: John\n  Age: 30\n\nloop: 2.345ms\n\nHello World! (in blue)",
              explanation: '`console.table()` for tabular data, `console.group()` for grouped logs, `console.time()` for performance measurements, and CSS styling for logs.'
            }
          ]
        },
        {
          id: 'js_comments',
          title: 'Comments',
          description: 'Single-line and multi-line comments',
          examples: [
            {
              id: 'js_comments_1',
              title: 'Basic Comments',
              description: 'Different ways to write comments',
              code: `// This is a single-line comment

// Multiple single-line
// comments can be used
// to explain code

/* This is a multi-line comment
   It can span across
   multiple lines */

// Code with comments
let total = 100;  // Initialize total
let tax = 0.2;    // 20% tax rate

/* Calculate final price
   including tax */
let finalPrice = total * (1 + tax);
console.log(finalPrice);`,
              output: "120",
              explanation: 'Use `//` for **single-line comments**. Use `/* */` for **multi-line comments**. Comments are ignored by JavaScript engine.'
            },
            {
              id: 'js_comments_2',
              title: 'Documentation Comments',
              description: 'Using comments for documentation',
              code: `/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateArea(width, height) {
  return width * height;
}

// TODO: Add input validation
// FIXME: Handle negative numbers
// NOTE: Consider using TypeScript for better type safety

/* Debug code - remove in production
function debugArea(width, height) {
  console.log(\`Calculating area: \${width} x \${height}\`);
  return calculateArea(width, height);
}
*/

console.log(calculateArea(5, 3));`,
              output: "15",
              explanation: 'Use **JSDoc comments** for documentation. Special comment tags like `TODO`, `FIXME`, and `NOTE` help organize tasks. Comment out debug code in production.'
            }
          ]
        },
        {
          id: 'js_type_conversion',
          title: 'Type Conversion & Coercion',
          description: 'Converting between different data types',
          examples: [
            {
              id: 'js_type_1',
              title: 'Explicit Type Conversion',
              description: 'Manual type conversion',
              code: `// String to Number
let strNum = "123";
console.log(Number(strNum));    // Using Number()
console.log(parseInt(strNum));   // Using parseInt()
console.log(parseFloat("3.14")); // Using parseFloat()

// Number to String
let num = 456;
console.log(String(num));     // Using String()
console.log(num.toString());  // Using toString()

// Boolean conversion
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("hello")); // true`,
              output: "123\n123\n3.14\n456\n456\ntrue\nfalse\nfalse\ntrue",
              explanation: 'Use `Number()`, `parseInt()`, `parseFloat()` for number conversion. Use `String()` or `toString()` for string conversion. `Boolean()` converts to true/false.'
            },
            {
              id: 'js_type_2',
              title: 'Type Coercion',
              description: 'Automatic type conversion',
              code: `// String concatenation
console.log("3" + 4);        // String concatenation
console.log(3 + "4");        // String concatenation
console.log(3 + 4 + "5");    // Addition then concatenation

// Numeric operations
console.log("3" - 2);        // Numeric subtraction
console.log("5" * 2);        // Numeric multiplication
console.log("6" / 2);        // Numeric division

// Comparison
console.log(5 == "5");       // Loose equality
console.log(5 === "5");      // Strict equality
console.log(1 == true);      // Loose equality
console.log(1 === true);     // Strict equality`,
              output: "34\n34\n75\n1\n10\n3\ntrue\nfalse\ntrue\nfalse",
              explanation: 'JavaScript automatically converts types in operations. Use `===` for strict equality without type coercion.'
            }
          ]
        },
        {
          id: 'js_template_literals',
          title: 'Template Literals',
          description: 'Working with template strings',
          examples: [
            {
              id: 'js_template_1',
              title: 'Basic Template Literals',
              description: 'Using backticks for strings',
              code: `// Basic string
let name = "John";
let age = 30;

// Template literal with variables
let greeting = \`Hello, \${name}!\`;
console.log(greeting);

// Multiple line string
let multiLine = \`
  Name: \${name}
  Age: \${age}
  Status: Active
\`;
console.log(multiLine);

// Expressions in template literals
let a = 5;
let b = 10;
console.log(\`Sum: \${a + b}\`);
console.log(\`Max: \${Math.max(a, b)}\`);`,
              output: "Hello, John!\n\n  Name: John\n  Age: 30\n  Status: Active\n\nSum: 15\nMax: 10",
              explanation: 'Template literals use backticks (\`) and `${expression}` for variables. They support **multi-line strings** and **expressions**.'
            },
            {
              id: 'js_template_2',
              title: 'Advanced Template Literals',
              description: 'Complex expressions and nested templates',
              code: `// Object with template literal
const user = {
  name: "Alice",
  age: 25,
  role: "developer"
};

const userInfo = \`
  User Details:
  \${Object.entries(user).map(([key, value]) => 
    \`\${key}: \${value}\`
  ).join('\\n  ')}
\`;

console.log(userInfo);

// Conditional in template literal
const status = "active";
console.log(\`
  Account: \${user.name}
  Status: \${status === 'active' ? '🟢 Active' : ' Inactive'}
\`);`,
              output: "User Details:\n  name: Alice\n  age: 25\n  role: developer\n\n  Account: Alice\n  Status: 🟢 Active",
              explanation: 'Template literals can include **complex expressions**, **conditionals**, and **function calls**. Great for generating dynamic strings.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_control_flow',
      title: 'Control Flow',
      description: 'Master decision making in JavaScript',
      icon: 'git-branch-outline',
      subcategories: [
        {
          id: 'js_conditionals',
          title: 'Conditional Statements',
          description: 'Using if, else if, and else statements',
          examples: [
            {
              id: 'js_if_1',
              title: 'Basic If Statements',
              description: 'Simple conditional logic',
              code: `let age = 18;

// Simple if statement
if (age >= 18) {
    console.log("You can vote!");
}

// If-else statement
let score = 75;
if (score >= 80) {
    console.log("Grade: A");
} else {
    console.log("Grade: B");
}

// If-else if-else chain
let temp = 25;
if (temp < 0) {
    console.log("Freezing!");
} else if (temp < 20) {
    console.log("Cool");
} else if (temp < 30) {
    console.log("Warm");
} else {
    console.log("Hot!");
}`,
              output: "You can vote!\nGrade: B\nWarm",
              explanation: 'Use `if` for single conditions, `else if` for multiple conditions, and `else` for default cases.'
            },
            {
              id: 'js_if_2',
              title: 'Nested Conditionals',
              description: 'Working with nested if statements',
              code: `let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;

// Nested if statements
if (isLoggedIn) {
    console.log("Welcome!");
    if (isAdmin) {
        if (hasPermission) {
            console.log("Access granted to admin panel");
        } else {
            console.log("Permission denied");
        }
    } else {
        console.log("Regular user access");
    }
} else {
    console.log("Please log in");
}

// Better approach using logical operators
if (isLoggedIn && isAdmin && hasPermission) {
    console.log("\\nAdmin access granted");
} else if (isLoggedIn) {
    console.log("\\nRegular access granted");
} else {
    console.log("\\nAccess denied");
}`,
              output: "Welcome!\nAccess granted to admin panel\n\nAdmin access granted",
              explanation: 'Nested conditions can be simplified using logical operators. Keep conditions clear and avoid deep nesting.'
            }
          ]
        },
        {
          id: 'js_logical_operators',
          title: 'Logical & Comparison Operators',
          description: 'Understanding logical operations and comparisons',
          examples: [
            {
              id: 'js_logical_1',
              title: 'Comparison Operators',
              description: 'Different ways to compare values',
              code: `// Equality comparisons
console.log(5 == "5");    // Loose equality
console.log(5 === "5");   // Strict equality
console.log(5 != "6");    // Loose inequality
console.log(5 !== "5");   // Strict inequality

// Numeric comparisons
console.log(10 > 5);      // Greater than
console.log(5 >= 5);      // Greater than or equal
console.log(3 < 7);       // Less than
console.log(3 <= 3);      // Less than or equal

// Logical operators
let x = 5, y = 10;
console.log(x > 0 && y < 20);  // AND
console.log(x < 0 || y > 5);   // OR
console.log(!(x === 5));       // NOT`,
              output: "true\nfalse\ntrue\ntrue\ntrue\ntrue\ntrue\ntrue\ntrue\nfalse",
              explanation: 'Use `===` for strict equality. Logical operators: `&&` (AND), `||` (OR), `!` (NOT). Comparison operators return boolean values.'
            },
            {
              id: 'js_logical_2',
              title: 'Advanced Logical Operations',
              description: 'Short-circuit evaluation and nullish coalescing',
              code: `// Short-circuit evaluation with &&
let isAdmin = true;
isAdmin && console.log("Admin access granted");

// Short-circuit evaluation with ||
let userName = "";
let defaultName = userName || "Guest";
console.log("Welcome,", defaultName);

// Nullish coalescing (??)
let count = 0;
let defaultCount = count ?? 10;  // 0 is valid
console.log("Count:", defaultCount);  // Shows 0

let nullValue = null;
let defaultNull = nullValue ?? "Default";
console.log("Value:", defaultNull);   // Shows "Default"

// Chaining operators
let user = {
    name: "John",
    settings: null
};

// Using ?? with optional chaining
let theme = user?.settings?.theme ?? "light";
console.log("Theme:", theme);

// Complex logical conditions
let age = 25;
let hasPermission = true;
let isLoggedIn = true;

let canAccess = age >= 18 && (hasPermission || isLoggedIn);
console.log("Can access:", canAccess);`,
              output: "Admin access granted\nWelcome, Guest\nCount: 0\nValue: Default\nTheme: light\nCan access: true",
              explanation: '`&&` and `||` for short-circuit evaluation. `??` for null/undefined fallbacks. Chain operators for complex conditions.'
            }
          ]
        },
        {
          id: 'js_ternary',
          title: 'Ternary Operator',
          description: 'Using the conditional (ternary) operator',
          examples: [
            {
              id: 'js_ternary_1',
              title: 'Basic Ternary Usage',
              description: 'Simplified conditional expressions',
              code: `// Basic ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

// Multiple conditions
let score = 85;
let grade = score >= 90 ? "A" :
           score >= 80 ? "B" :
           score >= 70 ? "C" : "F";
console.log("Grade:", grade);

// With template literals
let name = "John";
let greeting = \`Hello \${name === "John" ? "Mr." : "Ms."} \${name}\`;
console.log(greeting);

// Nested ternary with default
let user = {
    name: "Alice",
    role: "admin"
};
let access = user.role === "admin" ? "Full" :
            user.role === "editor" ? "Limited" : "Basic";
console.log("Access level:", access);`,
              output: "Can vote? Yes\nGrade: B\nHello Mr. John\nAccess level: Full",
              explanation: 'Ternary operator: `condition ? valueIfTrue : valueIfFalse`. Can be chained but keep it readable.'
            }
          ]
        },
        {
          id: 'js_switch',
          title: 'Switch Statements',
          description: 'Using switch for multiple conditions',
          examples: [
            {
              id: 'js_switch_1',
              title: 'Basic Switch Statement',
              description: 'Switch statement with different cases',
              code: `let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// Multiple cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "pear":
        console.log("Common fruit");
        break;
    case "dragon fruit":
    case "star fruit":
        console.log("Exotic fruit");
        break;
    default:
        console.log("Unknown fruit");
}`,
              output: "Wednesday\nCommon fruit",
              explanation: 'Use `switch` for multiple conditions with the same variable. `break` prevents fall-through. `default` handles unmatched cases.'
            },
            {
              id: 'js_switch_2',
              title: 'Advanced Switch Patterns',
              description: 'Different switch statement patterns',
              code: `// Switch with expressions
let grade = 85;
switch (true) {
    case grade >= 90:
        console.log("A grade");
        break;
    case grade >= 80:
        console.log("B grade");
        break;
    case grade >= 70:
        console.log("C grade");
        break;
    default:
        console.log("Failed");
}

// Switch without break (fall-through)
let command = "start";
switch (command) {
    case "start":
        console.log("Starting...");
        // falls through
    case "process":
        console.log("Processing...");
        break;
    case "end":
        console.log("Ending...");
        break;
}`,
              output: "B grade\nStarting...\nProcessing...",
              explanation: 'Switch can use expressions with `true`. Fall-through occurs when `break` is omitted. Useful for sequential operations.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_data_structures',
      title: 'Data Structures',
      description: 'Working with JavaScript data structures',
      icon: 'layers-outline',
      subcategories: [
        {
          id: 'js_arrays',
          title: 'Arrays',
          description: 'Working with arrays and array operations',
          examples: [
            {
              id: 'js_arrays_1',
              title: 'Array Basics',
              description: 'Creating and manipulating arrays',
              code: `// Creating arrays
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, { name: 'John' }];

// Accessing elements
console.log(fruits[0]);          // First element
console.log(fruits[fruits.length - 1]); // Last element

// Modifying arrays
fruits[1] = 'grape';             // Change element
fruits.push('mango');            // Add to end
fruits.unshift('pear');          // Add to start
let removed = fruits.pop();      // Remove from end

console.log(fruits);
console.log('Removed:', removed);

// Array properties
console.log('Length:', fruits.length);
console.log('Is Array:', Array.isArray(fruits));`,
              output: "apple\norange\n['pear', 'apple', 'grape', 'orange']\nRemoved: mango\nLength: 4\nIs Array: true",
              explanation: 'Arrays are ordered lists. Use index to access/modify elements. Common methods: `push()`, `pop()`, `unshift()`.'
            },
            {
              id: 'js_arrays_2',
              title: 'Array Methods',
              description: 'Common array methods and operations',
              code: `let numbers = [1, 2, 3, 4, 5];

// Mapping: transform each element
let doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

// Filtering: keep elements that pass test
let evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens);

// Reducing: combine elements
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Finding elements
let found = numbers.find(num => num > 3);
console.log('First > 3:', found);

// Checking elements
let hasTwo = numbers.includes(2);
let someOver4 = numbers.some(num => num > 4);
let allOver0 = numbers.every(num => num > 0);

console.log('Includes 2:', hasTwo);
console.log('Some > 4:', someOver4);
console.log('All > 0:', allOver0);`,
              output: "Doubled: [2, 4, 6, 8, 10]\nEvens: [2, 4]\nSum: 15\nFirst > 3: 4\nIncludes 2: true\nSome > 4: true\nAll > 0: true",
              explanation: '`map()` transforms elements, `filter()` selects elements, `reduce()` combines elements. `find()`, `includes()`, `some()`, `every()` for searching and testing.'
            }
          ]
        },
        {
          id: 'js_objects',
          title: 'Objects',
          description: 'Working with objects and object methods',
          examples: [
            {
              id: 'js_objects_1',
              title: 'Object Basics',
              description: 'Creating and using objects',
              code: `// Creating objects
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'music'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person['age']);      // Bracket notation
console.log(person.address.city);// Nested property

// Modifying objects
person.email = 'john@example.com';  // Add property
delete person.isStudent;            // Remove property
person.age = 31;                    // Update property

// Object methods
console.log(Object.keys(person));   // Get keys
console.log(Object.values(person)); // Get values
console.log(Object.entries(person));// Get key-value pairs`,
              output: "John\n30\nNew York\n['name', 'age', 'hobbies', 'address', 'email']\n['John', 31, ['reading', 'music'], { city: 'New York', country: 'USA' }, 'john@example.com']\n[['name', 'John'], ['age', 31], ...]",
              explanation: 'Objects store key-value pairs. Access with dot or bracket notation. Use `Object.keys()`, `values()`, `entries()` to get object data.'
            },
            {
              id: 'js_objects_2',
              title: 'Object Destructuring',
              description: 'Destructuring and spreading objects',
              code: `// Basic destructuring
const user = {
    name: 'Alice',
    age: 25,
    settings: {
        theme: 'dark',
        notifications: true
    }
};

const { name, age } = user;
console.log(name, age);

// Destructuring with new names
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

// Nested destructuring
const { settings: { theme } } = user;
console.log(theme);

// Default values
const { country = 'Unknown' } = user;
console.log(country);

// Rest operator in destructuring
const { name: uName, ...rest } = user;
console.log(rest);

// Spread operator
const updatedUser = {
    ...user,
    age: 26,
    country: 'Canada'
};
console.log(updatedUser);`,
              output: "Alice 25\nAlice 25\ndark\nUnknown\n{ age: 25, settings: { theme: 'dark', notifications: true } }\n{ name: 'Alice', age: 26, settings: { theme: 'dark', notifications: true }, country: 'Canada' }",
              explanation: 'Destructuring extracts values from objects. Spread (`...`) copies properties. Rest gathers remaining properties.'
            }
          ]
        },
        {
          id: 'js_sets_maps',
          title: 'Sets & Maps',
          description: 'Working with Sets and Maps collections',
          examples: [
            {
              id: 'js_sets_1',
              title: 'Sets',
              description: 'Using Set for unique values',
              code: `// Creating a Set
let fruits = new Set(['apple', 'banana', 'apple', 'orange']);
console.log(fruits);

// Adding and removing
fruits.add('mango');
fruits.delete('banana');
console.log(fruits);

// Checking values
console.log('Has apple:', fruits.has('apple'));
console.log('Size:', fruits.size);

// Converting Set to Array
let fruitsArray = [...fruits];
console.log('Array:', fruitsArray);

// Iterating Set
fruits.forEach(fruit => {
    console.log('Fruit:', fruit);
});

// Clear Set
fruits.clear();
console.log('After clear:', fruits);`,
              output: "Set(3) {'apple', 'banana', 'orange'}\nSet(3) {'apple', 'orange', 'mango'}\nHas apple: true\nSize: 3\nArray: ['apple', 'orange', 'mango']\nFruit: apple\nFruit: orange\nFruit: mango\nAfter clear: Set(0) {}",
              explanation: '`Set` stores unique values. Use `add()`, `delete()`, `has()` to modify. Convert to array with spread operator.'
            },
            {
              id: 'js_maps_1',
              title: 'Maps',
              description: 'Using Map for key-value pairs',
              code: `// Creating a Map
let userMap = new Map([
    ['name', 'John'],
    ['age', 30]
]);

// Setting values
userMap.set('email', 'john@example.com');
userMap.set('isAdmin', true);

// Getting values
console.log('Name:', userMap.get('name'));
console.log('Has age:', userMap.has('age'));

// Size and deletion
console.log('Size:', userMap.size);
userMap.delete('isAdmin');

// Iterating Map
console.log('\\nKeys:');
for (let key of userMap.keys()) {
    console.log(key);
}

console.log('\\nEntries:');
for (let [key, value] of userMap) {
    console.log(key + ':', value);
}

// Converting to arrays
console.log('\\nAs arrays:');
console.log(Array.from(userMap.keys()));
console.log(Array.from(userMap.values()));`,
              output: "Name: John\nHas age: true\nSize: 4\n\nKeys:\nname\nage\nemail\n\nEntries:\nname: John\nage: 30\nemail: john@example.com\n\nAs arrays:\n['name', 'age', 'email']\n['John', 30, 'john@example.com']",
              explanation: '`Map` stores key-value pairs. Any value can be a key. Use `set()`, `get()`, `has()`, `delete()`. Iterate with `keys()`, `values()`, `entries()`.'
            }
          ]
        },
        {
          id: 'js_array_methods',
          title: 'Array Methods',
          description: 'Advanced array operations and transformations',
          examples: [
            {
              id: 'js_array_methods_1',
              title: 'Transformation Methods',
              description: 'Methods that transform array data',
              code: `let numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const squared = numbers.map(num => num ** 2);
console.log('Squared:', squared);

// filter() - select elements
const evenNums = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNums);

// reduce() - accumulate values
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log('Sum:', sum, 'Product:', product);

// flatMap() - map and flatten
const pairs = numbers.flatMap(num => [num, num * 2]);
console.log('Pairs:', pairs);

// forEach() - iterate elements
let total = 0;
numbers.forEach(num => total += num);
console.log('Total:', total);`,
              output: "Squared: [1, 4, 9, 16, 25]\nEven numbers: [2, 4]\nSum: 15 Product: 120\nPairs: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]\nTotal: 15",
              explanation: '`map()` transforms, `filter()` selects, `reduce()` accumulates, `flatMap()` transforms and flattens, `forEach()` iterates.'
            },
            {
              id: 'js_array_methods_2',
              title: 'Search and Sort Methods',
              description: 'Finding and ordering array elements',
              code: `let items = ['apple', 'banana', 'orange', 'grape'];
let nums = [1, 30, 4, 21, 100000];

// find() and findIndex()
let found = items.find(item => item.length > 5);
let foundIndex = items.findIndex(item => item.length > 5);
console.log('Found:', found, 'at index:', foundIndex);

// includes() and indexOf()
console.log('Has banana:', items.includes('banana'));
console.log('Index of orange:', items.indexOf('orange'));

// sort() - default and custom
console.log('Default sort:', [...nums].sort());
console.log('Custom sort:', [...nums].sort((a, b) => a - b));

// some() and every()
let hasLongWord = items.some(item => item.length > 5);
let allShortWords = items.every(item => item.length < 8);
console.log('Has long word:', hasLongWord);
console.log('All short words:', allShortWords);`,
              output: "Found: banana at index: 1\nHas banana: true\nIndex of orange: 2\nDefault sort: [1, 100000, 21, 30, 4]\nCustom sort: [1, 4, 21, 30, 100000]\nHas long word: true\nAll short words: true",
              explanation: '`find()` gets first match, `sort()` orders elements, `some()`/`every()` test conditions. Note: Default sort is alphabetical.'
            },
            {
              id: 'js_array_methods_3',
              title: 'Modification Methods',
              description: 'Methods that modify the original array',
              code: `let fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('grape');           // Add to end
fruits.unshift('mango');        // Add to start
console.log('After adding:', fruits);

// Removing elements
let last = fruits.pop();        // Remove from end
let first = fruits.shift();     // Remove from start
console.log('After removing:', fruits);
console.log('Removed:', first, last);

// Splicing
fruits.splice(1, 1, 'kiwi', 'pear'); // Remove and insert
console.log('After splice:', fruits);

// Reversing and sorting
fruits.reverse();
console.log('Reversed:', fruits);
fruits.sort();
console.log('Sorted:', fruits);`,
              output: "After adding: ['mango', 'apple', 'banana', 'orange', 'grape']\nAfter removing: ['apple', 'banana', 'orange']\nRemoved: mango grape\nAfter splice: ['apple', 'kiwi', 'pear', 'orange']\nReversed: ['orange', 'pear', 'kiwi', 'apple']\nSorted: ['apple', 'kiwi', 'orange', 'pear']",
              explanation: '`push()`/`pop()` for end, `shift()`/`unshift()` for start, `splice()` for middle. These methods modify the original array.'
            }
          ]
        },
        {
          id: 'js_spread_rest',
          title: 'Spread & Rest Operators',
          description: 'Using spread and rest operators',
          examples: [
            {
              id: 'js_spread_1',
              title: 'Spread Operator',
              description: 'Using spread to expand elements',
              code: `// Spread in arrays
let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5];
console.log('Combined:', moreNums);

// Copy arrays
let original = ['a', 'b', 'c'];
let copy = [...original];
console.log('Copy:', copy);

// Merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log('Merged:', merged);

// Spread in objects
let defaults = { theme: 'light', size: 'medium' };
let custom = {
    ...defaults,
    theme: 'dark',
    font: 'Arial'
};
console.log('Custom settings:', custom);

// Spread in function calls
let numbers = [5, 2, 8, 1, 4];
console.log('Max:', Math.max(...numbers));`,
              output: "Combined: [1, 2, 3, 4, 5]\nCopy: ['a', 'b', 'c']\nMerged: [1, 2, 3, 4]\nCustom settings: { theme: 'dark', size: 'medium', font: 'Arial' }\nMax: 8",
              explanation: 'Spread (`...`) expands arrays into elements, creates shallow copies, merges arrays/objects, and spreads arguments.'
            },
            {
              id: 'js_rest_1',
              title: 'Rest Parameters',
              description: 'Using rest to collect elements',
              code: `// Rest in function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4));

// Rest with other parameters
function logUser(name, age, ...hobbies) {
    console.log(\`\${name} (\${age}) likes: \${hobbies.join(', ')}\`);
}
logUser('John', 30, 'reading', 'music', 'sports');

// Rest in array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log('First:', first);
console.log('Rest:', rest);

// Rest in object destructuring
let user = {
    name: 'Alice',
    age: 25,
    city: 'London',
    country: 'UK',
    role: 'developer'
};
let { name, age, ...details } = user;
console.log('Details:', details);`,
              output: "Sum: 10\nJohn (30) likes: reading, music, sports\nFirst: 1\nRest: [3, 4, 5]\nDetails: { city: 'London', country: 'UK', role: 'developer' }",
              explanation: 'Rest (`...`) collects multiple elements into an array. Used in function parameters and destructuring.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_functions',
      title: 'Functions',
      description: 'Working with JavaScript functions',
      icon: 'code-outline',
      subcategories: [
        {
          id: 'js_function_declarations',
          title: 'Declaring Functions',
          description: 'Different ways to declare functions',
          examples: [
            {
              id: 'js_func_decl_1',
              title: 'Function Declaration Types',
              description: 'Various ways to create functions',
              code: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet('John'));

// Function Expression
const sayHello = function(name) {
    return \`Hi, \${name}!\`;
};
console.log(sayHello('Alice'));

// Named Function Expression
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log('Factorial of 5:', factorial(5));

// Immediately Invoked Function Expression (IIFE)
(function() {
    let counter = 0;
    console.log('IIFE executed');
})();

// Method in object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method
    subtract(a, b) {
        return a - b;
    }
};
console.log('Sum:', calculator.add(5, 3));
console.log('Difference:', calculator.subtract(10, 4));`,
              output: "Hello, John!\nHi, Alice!\nFactorial of 5: 120\nIIFE executed\nSum: 8\nDifference: 6",
              explanation: 'Functions can be declared using declarations, expressions, or as object methods. IIFEs run immediately upon definition.'
            },
            {
              id: 'js_func_decl_2',
              title: 'Advanced Function Patterns',
              description: 'Advanced patterns and use cases',
              code: `// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log([...gen]); // Convert to array

// Async function
async function fetchUser() {
    return { name: 'John', age: 30 };
}

fetchUser().then(user => console.log('User:', user));

// Function factory
function createGreeter(greeting) {
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');
console.log(sayHello('John'));
console.log(sayHi('Alice'));

// Function with private variables
const counter = (function() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        getCount() { return count; }
    };
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());`,
              output: "[1, 2, 3]\nUser: { name: 'John', age: 30 }\nHello, John!\nHi, Alice!\n1\n2\n2",
              explanation: 'Advanced patterns include generators, async functions, function factories, and module patterns with private state.'
            }
          ]
        },
        {
          id: 'js_arrow_functions',
          title: 'Arrow Functions',
          description: 'Using arrow function syntax',
          examples: [
            {
              id: 'js_arrow_1',
              title: 'Arrow Function Basics',
              description: 'Different arrow function syntaxes',
              code: `// Basic arrow function
const add = (a, b) => a + b;
console.log('Sum:', add(5, 3));

// Multiple lines need curly braces and return
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log('Product:', multiply(4, 3));

// Single parameter (parentheses optional)
const square = x => x * x;
console.log('Square of 5:', square(5));

// No parameters need empty parentheses
const getRandomNumber = () => Math.random();
console.log('Random:', getRandomNumber());

// Returning object literals
const createUser = (name, age) => ({
    name: name,
    age: age
});
console.log('User:', createUser('John', 30));

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);`,
              output: "Sum: 8\nProduct: 12\nSquare of 5: 25\nRandom: 0.123456789\nUser: { name: 'John', age: 30 }\nDoubled: [2, 4, 6, 8, 10]",
              explanation: 'Arrow functions provide concise syntax. Implicit return for single expressions. Must wrap object literals in parentheses.'
            },
            {
              id: 'js_arrow_2',
              title: 'Arrow Functions and this',
              description: 'Understanding lexical this binding',
              code: `const counter = {
    count: 0,
    // Regular function
    increment: function() {
        setTimeout(function() {
            this.count++; // 'this' is undefined
            console.log('Regular:', this.count);
        }, 100);
    },
    // Arrow function
    incrementArrow: function() {
        setTimeout(() => {
            this.count++; // 'this' refers to counter
            console.log('Arrow:', this.count);
        }, 100);
    }
};

counter.increment();      // NaN (this.count is undefined)
counter.incrementArrow(); // 1 (this.count works)

// Method context
const person = {
    name: 'John',
    regularFunction: function() {
        return this.name;
    },
    arrowFunction: () => this.name
};

console.log('Regular method:', person.regularFunction());
console.log('Arrow method:', person.arrowFunction());`,
              output: "Regular: NaN\nArrow: 1\nRegular method: John\nArrow method: undefined",
              explanation: 'Arrow functions have lexical `this` binding. They inherit `this` from the enclosing scope. Not suitable for object methods.'
            },
            {
              id: 'js_arrow_3',
              title: 'Advanced Arrow Functions',
              description: 'Complex arrow function patterns',
              code: `// Currying with arrow functions
const multiply = x => y => x * y;
const multiplyByTwo = multiply(2);
console.log('2 × 3:', multiplyByTwo(3));

// Composition with arrow functions
const add = x => x + 2;
const multiply2 = x => x * 2;
const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x);

const addAndMultiply = compose(multiply2, add);
console.log('(2 + 2) × 2:', addAndMultiply(2));

// Arrow functions in class properties
class Calculator {
    add = (a, b) => a + b;
    multiply = (a, b) => a * b;
    
    calculate = (operation, a, b) => {
        const ops = {
            add: this.add,
            multiply: this.multiply
        };
        return ops[operation](a, b);
    }
}

const calc = new Calculator();
console.log('Add:', calc.calculate('add', 5, 3));
console.log('Multiply:', calc.calculate('multiply', 4, 2));

// Pipeline with arrow functions
const pipeline = (...fns) => 
    initial => fns.reduce((acc, fn) => fn(acc), initial);

const addTen = x => x + 10;
const double = x => x * 2;
const toString = x => \`Result: \${x}\`;

const process = pipeline(addTen, double, toString);
console.log(process(5));`,
              output: "2 × 3: 6\n(2 + 2) × 2: 8\nAdd: 8\nMultiply: 8\nResult: 30",
              explanation: 'Arrow functions excel in functional programming patterns like currying, composition, and method properties in classes.'
            }
          ]
        },
        {
          id: 'js_function_parameters',
          title: 'Function Parameters',
          description: 'Working with function parameters',
          examples: [
            {
              id: 'js_params_1',
              title: 'Parameter Types',
              description: 'Different ways to handle parameters',
              code: `// Default parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return \`\${greeting}, \${name}!\`;
}
console.log(greet());
console.log(greet('John'));
console.log(greet('Alice', 'Hi'));

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4));

// Destructuring parameters
function printUserInfo({ name, age, city = 'Unknown' }) {
    console.log(\`\${name}, \${age} years old, from \${city}\`);
}
printUserInfo({ name: 'John', age: 30 });

// Parameter validation
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
console.log('Division:', divide(10, 2));`,
              output: "Hello, Guest!\nHello, John!\nHi, Alice!\nSum: 10\nJohn, 30 years old, from Unknown\nDivision: 5",
              explanation: 'Functions can have default parameters, rest parameters, and destructured parameters. Always validate parameters when needed.'
            },
            {
              id: 'js_params_2',
              title: 'Advanced Parameter Patterns',
              description: 'Complex parameter handling',
              code: `// Method chaining with default parameters
class QueryBuilder {
    constructor() {
        this.query = {};
    }
    
    where(field, value = null) {
        this.query[field] = value;
        return this;
    }
    
    limit(num = 10) {
        this.query.limit = num;
        return this;
    }
    
    toString() {
        return JSON.stringify(this.query);
    }
}

const query = new QueryBuilder()
    .where('age', 25)
    .where('active', true)
    .limit()
    .toString();
console.log('Query:', query);

// Function overloading simulation
function createElement(tag, props = {}, ...children) {
    return {
        tag,
        props,
        children: children.flat()
    };
}

console.log(
    createElement('div'),
    createElement('div', { class: 'box' }),
    createElement('div', { class: 'box' }, 'Hello', ['World'])
);

// Parameter type checking
function api(config = {}) {
    const defaults = {
        method: 'GET',
        headers: {},
        timeout: 5000
    };
    
    const options = { ...defaults, ...config };
    
    // Validation
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(options.method)) {
        throw new Error(\`Invalid method: \${options.method}\`);
    }
    
    console.log('API call with:', options);
    return options;
}

console.log(api({ method: 'POST', timeout: 3000 }));`,
              output: "Query: {\"age\":25,\"active\":true,\"limit\":10}\n{tag:'div',props:{},children:[]}\n{tag:'div',props:{class:'box'},children:[]}\n{tag:'div',props:{class:'box'},children:['Hello','World']}\nAPI call with: {method:'POST',headers:{},timeout:3000}\n{method:'POST',headers:{},timeout:3000}",
              explanation: 'Advanced parameter patterns include method chaining, function overloading simulation, and sophisticated parameter validation.'
            }
          ]
        },
        {
          id: 'js_callbacks_higher_order',
          title: 'Callbacks & Higher-Order Functions',
          description: 'Understanding function composition',
          examples: [
            {
              id: 'js_callbacks_1',
              title: 'Callback Functions',
              description: 'Using callbacks and higher-order functions',
              code: `// Basic callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log('Data received:', data);
});

// Higher-order function
function multiply(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log('Double 5:', double(5));
console.log('Triple 5:', triple(5));

// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(n => n * n);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('Squared:', squared);
console.log('Evens:', evens);
console.log('Sum:', sum);`,
              output: "Data received: { id: 1, name: 'John' }\nDouble 5: 10\nTriple 5: 15\nSquared: [1, 4, 9, 16, 25]\nEvens: [2, 4]\nSum: 15",
              explanation: 'Callbacks are functions passed as arguments. Higher-order functions return or accept functions as arguments.'
            },
            {
              id: 'js_callbacks_2',
              title: 'Advanced Callbacks',
              description: 'Complex callback patterns',
              code: `// Promise with callbacks
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id, name: 'John', age: 30 };
            resolve(user);
        }, 1000);
    });
}

fetchUserData(1)
    .then(user => console.log('User:', user));

// Event handling
function createButton(text, onClick) {
    console.log(\`Button "\${text}" clicked\`);
    onClick({ target: { text } });
}

createButton('Submit', (event) => {
    console.log('Clicked:', event.target.text);
});

// Function composition
function compose(...functions) {
    return functions.reduce((acc, fn) => {
        return (...args) => acc(fn(...args));
    });
}

const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const toString = x => \`Result: \${x}\`;

const calculate = compose(toString, multiplyByThree, addTwo);
console.log(calculate(5));`,
              output: "User: { id: 1, name: 'John', age: 30 }\nButton \"Submit\" clicked\nClicked: Submit\nResult: 21",
              explanation: 'Callbacks are used in promises, event handling, and function composition. They enable asynchronous and event-driven programming.'
            }
          ]
        },
        {
          id: 'js_scope_closures',
          title: 'Scope & Closures',
          description: 'Understanding variable scope and closures',
          examples: [
            {
              id: 'js_scope_1',
              title: 'Variable Scope',
              description: 'Different types of scope',
              code: `// Global scope
let globalVar = 'I am global';

function scopeTest() {
    // Function scope
    let functionVar = 'I am function-scoped';
    
    if (true) {
        // Block scope
        let blockVar = 'I am block-scoped';
        var varVariable = 'I am function-scoped (var)';
        console.log(blockVar);      // Accessible
        console.log(functionVar);    // Accessible
        console.log(globalVar);      // Accessible
    }
    
    console.log(varVariable);     // Accessible (var)
    // console.log(blockVar);     // Error: not accessible
}

scopeTest();

// Closure example
function createCounter() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        getCount() { return count; }
    };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());`,
              output: "I am block-scoped\nI am function-scoped\nI am global\nI am function-scoped (var)\n1\n2\n1\n1",
              explanation: 'Variables have different scopes: global, function, and block. Closures maintain access to variables from their outer scope.'
            },
            {
              id: 'js_closures_1',
              title: 'Practical Closures',
              description: 'Real-world closure examples',
              code: `// Private counter
function makeCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

// Factory function with private data
function createUser(name) {
    let loginAttempts = 0;
    
    return {
        getName: () => name,
        login: (password) => {
            loginAttempts++;
            if (password === '1234') {
                return 'Login successful';
            }
            return \`Login failed. Attempts: \${loginAttempts}\`;
        }
    };
}

const user = createUser('John');
console.log(user.getName());
console.log(user.login('wrong'));
console.log(user.login('1234'));`,
              output: "1\n2\n1\nJohn\nLogin failed. Attempts: 1\nLogin successful",
              explanation: 'Closures enable data privacy and state management. They maintain their own scope chain even after the outer function returns.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_loops',
      title: 'Loops & Iteration',
      description: 'Different ways to loop and iterate in JavaScript',
      icon: 'repeat-outline',
      subcategories: [
        {
          id: 'js_basic_loops',
          title: 'Basic Loops',
          description: 'For, While, and Do-While loops',
          examples: [
            {
              id: 'js_loops_1',
              title: 'For Loop',
              description: 'Different types of for loops',
              code: `// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(\`Count: \${i}\`);
}

// Looping through array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}

// Counting backwards
for (let i = 5; i > 0; i--) {
    console.log(\`Countdown: \${i}\`);
}

// Loop with step value
for (let i = 0; i <= 10; i += 2) {
    console.log(\`Even number: \${i}\`);
}`,
              output: "Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\nFruit 1: apple\nFruit 2: banana\nFruit 3: orange\nCountdown: 5\nCountdown: 4\nCountdown: 3\nCountdown: 2\nCountdown: 1\nEven number: 0\nEven number: 2\nEven number: 4\nEven number: 6\nEven number: 8\nEven number: 10",
              explanation: 'For loops are versatile. They can count up/down, iterate arrays, and use custom step values.'
            },
            {
              id: 'js_loops_2',
              title: 'While and Do-While',
              description: 'While and Do-While loop patterns',
              code: `// While loop
let count = 0;
while (count < 3) {
    console.log(\`While count: \${count}\`);
    count++;
}

// Do-while loop (runs at least once)
let num = 5;
do {
    console.log(\`Number: \${num}\`);
    num--;
} while (num > 2);

// While with condition
let password = "secret";
let attempt = "";
let attempts = 0;
while (attempt !== password && attempts < 3) {
    attempt = attempts === 0 ? "wrong" : "secret";
    console.log(\`Attempt \${attempts + 1}: \${attempt}\`);
    attempts++;
}

// Infinite loop with break
let i = 0;
while (true) {
    if (i >= 3) break;
    console.log(\`Loop iteration: \${i}\`);
    i++;
}`,
              output: "While count: 0\nWhile count: 1\nWhile count: 2\nNumber: 5\nNumber: 4\nNumber: 3\nAttempt 1: wrong\nAttempt 2: secret\nLoop iteration: 0\nLoop iteration: 1\nLoop iteration: 2",
              explanation: 'While loops continue until condition is false. Do-while runs at least once. Use break to exit infinite loops.'
            },
            {
              id: 'js_loops_3',
              title: 'Nested Loops',
              description: 'Working with nested loops',
              code: `// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} × \${j} = \${i * j}\`);
    }
    console.log('---');
}

// Pattern printing
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// Matrix traversal
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(\`Position [\${i},\${j}]: \${matrix[i][j]}\`);
    }
}`,
              output: "1 × 1 = 1\n1 × 2 = 2\n1 × 3 = 3\n---\n2 × 1 = 2\n2 × 2 = 4\n2 × 3 = 6\n---\n3 × 1 = 3\n3 × 2 = 6\n3 × 3 = 9\n---\n*\n**\n***\n****\nPosition [0,0]: 1\nPosition [0,1]: 2\nPosition [0,2]: 3\nPosition [1,0]: 4\nPosition [1,1]: 5\nPosition [1,2]: 6\nPosition [2,0]: 7\nPosition [2,1]: 8\nPosition [2,2]: 9",
              explanation: 'Nested loops are useful for working with 2D data structures, creating patterns, and handling complex iterations.'
            }
          ]
        },
        {
          id: 'js_loop_control',
          title: 'Loop Control',
          description: 'Using break and continue statements',
          examples: [
            {
              id: 'js_loop_control_1',
              title: 'Break and Continue',
              description: 'Controlling loop execution',
              code: `// Break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(\`With break: \${i}\`);
}

// Continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(\`With continue: \${i}\`);
}

// Break in nested loops
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(\`[i: \${i}, j: \${j}]\`);
    }
}

// Continue with while
let num = 0;
while (num < 5) {
    num++;
    if (num === 3) continue;
    console.log(\`Number: \${num}\`);
}`,
              output: "With break: 0\nWith continue: 0\nWith continue: 3\nWith continue: 4\n[i: 0, j: 0]\n[i: 0, j: 1]\n[i: 0, j: 2]\n[i: 1, j: 0]\n[i: 1, j: 1]\n[i: 1, j: 2]\n[i: 2, j: 0]\n[i: 2, j: 1]\n[i: 2, j: 2]\nNumber: 1\nNumber: 2\nNumber: 4\nNumber: 5",
              explanation: '`break` exits the loop, `continue` skips to next iteration. Labels allow breaking from nested loops.'
            },
            {
              id: 'js_loop_control_2',
              title: 'Advanced Loop Control',
              description: 'Complex loop control patterns',
              code: `// Finding prime numbers
for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;  // Exit inner loop
        }
    }
    if (!isPrime) continue;  // Skip to next iteration
    console.log(\`\${i} is prime\`);
}

// Searching 2D array
const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

searchLoop: {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'E') {
                console.log(\`Found E at [\${i},\${j}]\`);
                break searchLoop;
            }
        }
    }
}

// Skip specific values
const numbers = [1, 2, 3, -1, 4, -2, 5];
let sum = 0;

for (let num of numbers) {
    if (num < 0) continue;  // Skip negative numbers
    if (sum > 10) break;    // Stop if sum exceeds 10
    sum += num;
    console.log(\`Current sum: \${sum}\`);
}`,
              output: "2 is prime\n3 is prime\n5 is prime\n7 is prime\n11 is prime\n13 is prime\n17 is prime\n19 is prime\nFound E at [1,1]\nCurrent sum: 1\nCurrent sum: 3\nCurrent sum: 6\nCurrent sum: 10",
              explanation: 'Use `break` and `continue` with labels for complex control flow. Combine with conditional statements for sophisticated logic.'
            }
          ]
        },
        {
          id: 'js_iteration',
          title: 'Object & Array Iteration',
          description: 'Modern iteration methods',
          examples: [
            {
              id: 'js_iteration_1',
              title: 'For...in and For...of',
              description: 'Different iteration techniques',
              code: `// for...in with object
const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in user) {
    console.log(\`\${key}: \${user[key]}\`);
}

// for...of with array
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(\`Color: \${color}\`);
}

// forEach with array
colors.forEach((color, index) => {
    console.log(\`Color \${index + 1}: \${color}\`);
});

// Iterating array with entries
for (let [index, color] of colors.entries()) {
    console.log(\`Index \${index}: \${color}\`);
}`,
              output: "name: John\nage: 30\ncity: New York\nColor: red\nColor: green\nColor: blue\nColor 1: red\nColor 2: green\nColor 3: blue\nIndex 0: red\nIndex 1: green\nIndex 2: blue",
              explanation: '`for...in` for object properties, `for...of` for iterable values, `forEach` for array elements with index.'
            },
            {
              id: 'js_iteration_2',
              title: 'Advanced Iteration',
              description: 'Complex iteration patterns',
              code: `// Iterating with Object methods
const person = {
    name: 'Alice',
    age: 25,
    city: 'London'
};

Object.keys(person).forEach(key => {
    console.log(\`Key: \${key}\`);
});

Object.values(person).forEach(value => {
    console.log(\`Value: \${value}\`);
});

Object.entries(person).forEach(([key, value]) => {
    console.log(\`\${key} = \${value}\`);
});

// Array iteration methods
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);`,
              output: "Key: name\nKey: age\nKey: city\nValue: Alice\nValue: 25\nValue: London\nname = Alice\nage = 25\ncity = London\nDoubled: [2, 4, 6, 8, 10]\nEvens: [2, 4]\nSum: 15",
              explanation: 'Object methods provide different ways to iterate. Array methods like map, filter, reduce offer functional approaches to iteration.'
            },
            {
              id: 'js_iteration_3',
              title: 'Iterator Patterns',
              description: 'Custom iteration patterns',
              code: `// Custom iterator
const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

console.log('Custom range:');
for (let num of range) {
    console.log(num);
}

// Async iteration
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function runAsync() {
    console.log('Async iteration:');
    for await (let value of asyncGenerator()) {
        console.log(value);
    }
}

runAsync();

// Array-like iteration
const arrayLike = {
    0: 'zero',
    1: 'one',
    2: 'two',
    length: 3
};

Array.from(arrayLike).forEach((value, index) => {
    console.log(\`Index \${index}: \${value}\`);
});`,
              output: "Custom range:\n1\n2\n3\n4\n5\nAsync iteration:\n1\n2\n3\nIndex 0: zero\nIndex 1: one\nIndex 2: two",
              explanation: 'Create custom iterators with `Symbol.iterator`. Use async iteration for promises. Convert array-like objects for iteration.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_error_handling',
      title: 'Error Handling',
      description: 'Managing and debugging errors in JavaScript',
      icon: 'alert-circle-outline',
      subcategories: [
        {
          id: 'js_try_catch',
          title: 'Try-Catch-Finally',
          description: 'Basic error handling patterns',
          examples: [
            {
              id: 'js_try_catch_1',
              title: 'Basic Try-Catch',
              description: 'Handling common errors',
              code: `// Basic try-catch
try {
    const result = nonExistentFunction();
    console.log(result);
} catch (error) {
    console.log('Error caught:', error.message);
}

// Try-catch-finally
try {
    console.log('Starting operation...');
    throw new Error('Something went wrong');
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('Cleanup operations...');
}

// Multiple operations in try block
function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        if (error instanceof TypeError) {
            console.log('Type Error:', error.message);
        } else {
            console.log('Error:', error.message);
        }
        return null;
    }
}

console.log(divide('10', 2));
console.log(divide(10, 0));
console.log(divide(10, 2));`,
              output: "Error caught: nonExistentFunction is not defined\nStarting operation...\nError: Something went wrong\nCleanup operations...\nType Error: Both arguments must be numbers\nError: Cannot divide by zero\n5",
              explanation: 'Try-catch blocks handle runtime errors. Finally block always executes. Use instanceof to check error types.'
            },
            {
              id: 'js_try_catch_2',
              title: 'Async Error Handling',
              description: 'Handling errors in async code',
              code: `// Async function with try-catch
async function fetchUser(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.log('Fetch error:', error.message);
        return null;
    }
}

// Promise error handling
function delay(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error('Delay cannot be negative'));
        }
        setTimeout(resolve, ms);
    });
}

async function runOperations() {
    try {
        console.log('Starting...');
        await delay(-100);
        console.log('Never reaches here');
    } catch (error) {
        console.log('Operation failed:', error.message);
    }
    
    try {
        await delay(1000);
        console.log('Operation completed');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

runOperations();`,
              output: "Starting...\nOperation failed: Delay cannot be negative\nOperation completed",
              explanation: 'Use try-catch with async/await for asynchronous error handling. Chain .catch() with promises for error handling.'
            }
          ]
        },
        {
          id: 'js_custom_errors',
          title: 'Custom Errors',
          description: 'Creating and using custom error types',
          examples: [
            {
              id: 'js_custom_errors_1',
              title: 'Custom Error Classes',
              description: 'Creating custom error types',
              code: `// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Custom error with additional properties
class DatabaseError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'DatabaseError';
        this.code = code;
    }
}

// Using custom errors
function validateUser(user) {
    try {
        if (!user.name) {
            throw new ValidationError('Name is required');
        }
        if (user.age < 0) {
            throw new ValidationError('Age cannot be negative');
        }
        console.log('User is valid');
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('Validation failed:', error.message);
        } else {
            console.log('Unknown error:', error.message);
        }
    }
}

validateUser({ name: '', age: 25 });
validateUser({ name: 'John', age: -5 });
validateUser({ name: 'John', age: 25 });`,
              output: "Validation failed: Name is required\nValidation failed: Age cannot be negative\nUser is valid",
              explanation: 'Create custom error classes by extending Error. Add properties for additional error information.'
            }
          ]
        },
        {
          id: 'js_debugging',
          title: 'Debugging',
          description: 'Debugging techniques and tools',
          examples: [
            {
              id: 'js_debugging_1',
              title: 'Console Methods',
              description: 'Different console debugging methods',
              code: `// Basic console methods
console.log('Basic log message');
console.info('Info message');
console.warn('Warning message');
console.error('Error message');

// Structured data
const user = { name: 'John', age: 30 };
console.log('User object:', user);
console.table([
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 }
]);

// Console groups
console.group('User Details');
console.log('Name: John');
console.log('Age: 30');
console.groupEnd();

// Performance timing
console.time('loop');
for(let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd('loop');

// Stack trace
function firstFunction() {
    secondFunction();
}
function secondFunction() {
    console.trace('Trace demo');
}
firstFunction();`,
              output: "Basic log message\nInfo message\nWarning: Warning message\nError: Error message\nUser object: { name: 'John', age: 30 }\n[table output]\nUser Details\n  Name: John\n  Age: 30\nloop: 2.345ms\nTrace: Trace demo\n    at secondFunction\n    at firstFunction\n    at <anonymous>",
              explanation: 'Console offers various methods for debugging: log, info, warn, error, table, group, time, trace.'
            },
            {
              id: 'js_debugging_2',
              title: 'Advanced Debugging',
              description: 'Advanced debugging techniques',
              code: `// Using debugger statement
function findBug(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // debugger; // Uncomment to pause execution
        sum += array[i];
    }
    return sum;
}

// Console formatting
console.log('Styled log: %cHello World', 'color: blue; font-weight: bold');

// Console assert
const value = 5;
console.assert(value > 10, 'Value is not greater than 10');

// Logging objects
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

console.dir(user, { depth: null });

// Measuring time
console.time('operation');
for (let i = 0; i < 1000; i++) {
    // Complex operation simulation
}
console.timeEnd('operation');

// Count function calls
function processItem(item) {
    console.count('processItem called');
    return item * 2;
}

[1, 2, 3].forEach(processItem);
console.countReset('processItem called');`,
              output: "Styled log: Hello World\nAssertion failed: Value is not greater than 10\n[object Object]\noperation: 0.123ms\nprocessItem called: 1\nprocessItem called: 2\nprocessItem called: 3",
              explanation: 'Advanced debugging includes debugger statement, console formatting, assertions, and performance measurements.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_oop',
      title: 'Object-Oriented Programming',
      description: 'Working with objects and classes in JavaScript',
      icon: 'cube-outline',
      subcategories: [
        {
          id: 'js_objects_prototypes',
          title: 'Object Literals & Prototypes',
          description: 'Creating and working with objects',
          examples: [
            {
              id: 'js_objects_1',
              title: 'Object Literals',
              description: 'Basic object creation and manipulation',
              code: `// Basic object literal
const user = {
    name: 'John',
    age: 30,
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
};

console.log(user.greet());

// Object property manipulation
user.email = 'john@example.com';
delete user.age;
console.log(user);

// Computed properties
const propertyName = 'location';
const person = {
    [propertyName]: 'New York',
    [\`user_\${Date.now()}\`]: 'unique'
};

console.log(person);

// Object methods
const calculator = {
    value: 0,
    add(x) {
        this.value += x;
        return this;
    },
    subtract(x) {
        this.value -= x;
        return this;
    },
    getResult() {
        return this.value;
    }
};

console.log(
    calculator
        .add(5)
        .subtract(2)
        .getResult()
);`,
              output: "Hello, I'm John\n{ name: 'John', email: 'john@example.com', greet: [Function: greet] }\n{ location: 'New York', user_1234567890: 'unique' }\n3",
              explanation: 'Object literals provide a simple way to create objects. Support computed properties and method shorthand.'
            },
            {
              id: 'js_prototypes_1',
              title: 'Prototypes',
              description: 'Working with prototypes',
              code: `// Constructor function
function Animal(name) {
    this.name = name;
}

// Adding method to prototype
Animal.prototype.speak = function() {
    return \`\${this.name} makes a sound\`;
};

const dog = new Animal('Dog');
console.log(dog.speak());

// Prototype chain
const cat = {
    makeSound() {
        return 'Meow';
    }
};

const kitten = Object.create(cat);
kitten.age = 1;

console.log(kitten.makeSound()); // Inherited method
console.log(kitten.hasOwnProperty('age')); // Own property
console.log(kitten.hasOwnProperty('makeSound')); // False

// Multiple inheritance simulation
const swimmer = {
    swim() {
        return 'Swimming';
    }
};

const flyer = {
    fly() {
        return 'Flying';
    }
};

const duck = Object.assign({}, swimmer, flyer);
console.log(duck.swim());
console.log(duck.fly());`,
              output: "Dog makes a sound\nMeow\ntrue\nfalse\nSwimming\nFlying",
              explanation: 'Prototypes enable inheritance in JavaScript. Objects can inherit properties and methods from other objects.'
            }
          ]
        },
        {
          id: 'js_classes',
          title: 'Classes & Objects',
          description: 'ES6 class syntax and usage',
          examples: [
            {
              id: 'js_classes_1',
              title: 'Basic Classes',
              description: 'Class declaration and usage',
              code: `// Basic class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return \`Hello, I'm \${this.name}\`;
    }

    static createAnonymous() {
        return new User('Anonymous', 0);
    }
}

const user = new User('John', 30);
console.log(user.greet());

const anonymous = User.createAnonymous();
console.log(anonymous.greet());

// Class with private fields
class Counter {
    #count = 0;

    increment() {
        this.#count++;
        return this.#count;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();
console.log(counter.increment());
console.log(counter.value);`,
              output: "Hello, I'm John\nHello, I'm Anonymous\n1\n1",
              explanation: 'ES6 classes provide a cleaner syntax for object-oriented programming. Support private fields and static methods.'
            },
            {
              id: 'js_classes_2',
              title: 'Advanced Class Patterns',
              description: 'Advanced class usage and patterns',
              code: `// Singleton pattern
class Database {
    static #instance = null;
    #data = new Map();
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        Database.#instance = this;
    }
    
    set(key, value) {
        this.#data.set(key, value);
    }
    
    get(key) {
        return this.#data.get(key);
    }
}

const db1 = new Database();
const db2 = new Database();
console.log('Same instance:', db1 === db2);

// Class with private methods
class Calculator {
    #history = [];
    
    #validate(num) {
        if (typeof num !== 'number') {
            throw new Error('Invalid number');
        }
    }
    
    #logOperation(operation, num, result) {
        this.#history.push(\`\${operation}: \${num} = \${result}\`);
    }
    
    square(num) {
        this.#validate(num);
        const result = num ** 2;
        this.#logOperation('square', num, result);
        return result;
    }
    
    getHistory() {
        return [...this.#history];
    }
}

const calc = new Calculator();
console.log(calc.square(4));
console.log(calc.getHistory());

// Class mixins
class EventEmitter {
    emit(event) {
        console.log(\`Event emitted: \${event}\`);
    }
}

const LoggerMixin = Base => class extends Base {
    log(message) {
        console.log(\`[Log] \${message}\`);
    }
};

const ErrorMixin = Base => class extends Base {
    error(message) {
        console.error(\`[Error] \${message}\`);
    }
};

class Application extends LoggerMixin(ErrorMixin(EventEmitter)) {
    start() {
        this.log('Application starting');
        this.emit('start');
    }
}

const app = new Application();
app.start();
app.error('Something went wrong');`,
  output: "Same instance: true\n16\n['square: 4 = 16']\n[Log] Application starting\nEvent emitted: start\n[Error] Something went wrong",
  explanation: 'Advanced class patterns include singletons, private methods, and mixins for composition.'
},

// Add to js_constructors subcategory
{
  id: 'js_constructors_2',
  title: 'Advanced Constructor Patterns',
  description: 'Complex constructor patterns',
  code: `// Constructor with method chaining
function QueryBuilder() {
    this.query = {};
    
    this.where = function(field, value = null) {
        this.query[field] = value;
        return this;
    };
    
    this.limit = function(num = 10) {
        this.query.limit = num;
        return this;
    };
    
    this.toString = function() {
        return JSON.stringify(this.query);
    };
}

const query = new QueryBuilder()
    .where('age', 25)
    .where('active', true)
    .limit()
    .toString();
console.log('Query:', query);

// Constructor with private members
function Counter() {
    // Private variables
    let count = 0;
    let lastIncrement = null;
    
    // Private function
    function validateNumber(n) {
        return typeof n === 'number' && !isNaN(n);
    }
    
    // Public interface
    this.increment = function(n = 1) {
        if (!validateNumber(n)) {
            throw new Error('Invalid increment value');
        }
        count += n;
        lastIncrement = n;
        return count;
    };
    
    this.getLastIncrement = function() {
        return lastIncrement;
    };
}

const counter = new Counter();
console.log(counter.increment(5));
console.log(counter.getLastIncrement());

// Factory with prototypes
function createAnimal(type) {
    const proto = {
        makeSound() {
            return this.sound;
        },
        getInfo() {
            return \`\${this.name} is a \${this.type}\`;
        }
    };
    
    const animal = Object.create(proto);
    
    switch(type) {
        case 'dog':
            return Object.assign(animal, {
                type: 'dog',
                name: 'Rex',
                sound: 'Woof!'
            });
        case 'cat':
            return Object.assign(animal, {
                type: 'cat',
                name: 'Whiskers',
                sound: 'Meow!'
            });
        default:
            throw new Error('Unknown animal type');
    }
}

const dog = createAnimal('dog');
const cat = createAnimal('cat');
console.log(dog.getInfo(), dog.makeSound());
console.log(cat.getInfo(), cat.makeSound());`,
  output: "Query: {\"age\":25,\"active\":true,\"limit\":10}\n5\n5\nRex is a dog Woof!\nWhiskers is a cat Meow!",
  explanation: 'Advanced constructor patterns include method chaining, private members through closures, and factory patterns with prototypes.'
}
          ]
        },
        {
          id: 'js_inheritance',
          title: 'Inheritance & Extending Classes',
          description: 'Implementing inheritance patterns',
          examples: [
            {
              id: 'js_inheritance_1',
              title: 'Class Inheritance',
              description: 'Extending classes and method overriding',
              code: `// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return \`\${this.name} makes a sound\`;
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return \`\${this.name} barks\`;
    }
    
    fetch() {
        return \`\${this.name} fetches the ball\`;
    }
}

const dog = new Dog('Rex', 'German Shepherd');
console.log(dog.speak());
console.log(dog.fetch());

// Multiple inheritance with mixins
const swimMixin = {
    swim() {
        return \`\${this.name} is swimming\`;
    }
};

const flyMixin = {
    fly() {
        return \`\${this.name} is flying\`;
    }
};

class Duck extends Animal {
    constructor(name) {
        super(name);
        Object.assign(this, swimMixin, flyMixin);
    }
}

const duck = new Duck('Donald');
console.log(duck.swim());
console.log(duck.fly());`,
              output: "Rex barks\nRex fetches the ball\nDonald is swimming\nDonald is flying",
              explanation: 'Classes can inherit properties and methods. Use mixins for multiple inheritance-like behavior.'
            },
            {
              id: 'js_inheritance_2',
              title: 'Advanced Inheritance',
              description: 'Complex inheritance patterns',
              code: `// Abstract base class
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error('Cannot instantiate abstract class');
        }
    }
    
    calculateArea() {
        throw new Error('Method must be implemented');
    }
    
    toString() {
        return \`Area: \${this.calculateArea()}\`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log('Circle:', circle.toString());
console.log('Rectangle:', rectangle.toString());

// Composition over inheritance
class Engine {
    start() {
        return 'Engine started';
    }
    
    stop() {
        return 'Engine stopped';
    }
}

class Vehicle {
    constructor(engine) {
        this.engine = engine;
    }
    
    startEngine() {
        return this.engine.start();
    }
    
    stopEngine() {
        return this.engine.stop();
    }
}

const carEngine = new Engine();
const car = new Vehicle(carEngine);
console.log(car.startEngine());
console.log(car.stopEngine());`,
              output: "Circle: Area: 78.54\nRectangle: Area: 24\nEngine started\nEngine stopped",
              explanation: 'Abstract classes define contracts. Composition provides flexibility over inheritance.'
            }
          ]
        },
        {
          id: 'js_getters_setters',
          title: 'Getters & Setters',
          description: 'Property accessors in objects and classes',
          examples: [
            {
              id: 'js_getters_setters_1',
              title: 'Property Accessors',
              description: 'Using getters and setters',
              code: `// Object literals with accessors
const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

console.log(user.fullName);
user.fullName = 'Jane Smith';
console.log(user.firstName, user.lastName);

// Class with validation
class Temperature {
    #celsius = 0;
    
    get celsius() {
        return this.#celsius;
    }
    
    set celsius(value) {
        if (value < -273.15) {
            throw new Error('Temperature below absolute zero');
        }
        this.#celsius = value;
    }
    
    get fahrenheit() {
        return (this.#celsius * 9/5) + 32;
    }
    
    set fahrenheit(value) {
        this.celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(\`\${temp.celsius}°C is \${temp.fahrenheit}°F\`);
temp.fahrenheit = 68;
console.log(\`\${temp.celsius}°C is \${temp.fahrenheit}°F\`);`,
              output: "John Doe\nJane Smith\n25°C is 77°F\n20°C is 68°F",
              explanation: 'Getters and setters provide controlled access to object properties. Useful for validation and computed properties.'
            },
            {
              id: 'js_getters_setters_2',
              title: 'Advanced Accessors',
              description: 'Complex getter and setter patterns',
              code: `// Computed properties with caching
class Circle {
    #radius = 0;
    #areaCache = null;
    
    constructor(radius) {
        this.radius = radius;
    }
    
    get radius() {
        return this.#radius;
    }
    
    set radius(value) {
        this.#radius = value;
        this.#areaCache = null; // Invalidate cache
    }
    
    get area() {
        if (this.#areaCache === null) {
            console.log('Calculating area...');
            this.#areaCache = Math.PI * this.#radius ** 2;
        }
        return this.#areaCache;
    }
}

const circle = new Circle(5);
console.log(circle.area); // Calculates
console.log(circle.area); // Uses cache
circle.radius = 6;
console.log(circle.area); // Recalculates

// Proxy with getters and setters
const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const userProxy = new Proxy(user, {
    get(target, property) {
        if (property === 'fullName') {
            return \`\${target.firstName} \${target.lastName}\`;
        }
        return target[property];
    },
    
    set(target, property, value) {
        if (property === 'fullName') {
            [target.firstName, target.lastName] = value.split(' ');
            return true;
        }
        target[property] = value;
        return true;
    }
});

console.log(userProxy.fullName);
userProxy.fullName = 'Jane Smith';
console.log(userProxy.firstName);
console.log(userProxy.lastName);`,
              output: "Calculating area...\n78.54\n78.54\nCalculating area...\n113.10\nJohn Doe\nJane\nSmith",
              explanation: 'Use caching for expensive computations. Proxies provide dynamic property access control.'
            }
          ]
        }
      ]
    },
    {
      id: 'js_async',
      title: 'Asynchronous JavaScript & APIs',
      description: 'Working with asynchronous operations and APIs',
      icon: 'time-outline',
      subcategories: [
        {
          id: 'js_callbacks',
          title: 'Callbacks',
          description: 'Working with callback functions',
          examples: [
            {
              id: 'js_callbacks_1',
              title: 'Basic Callbacks',
              description: 'Understanding callback patterns',
              code: `// Basic callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log('Data received:', data);
});

// Error handling with callbacks
function fetchUser(id, onSuccess, onError) {
    setTimeout(() => {
        if (id < 0) {
            onError(new Error('Invalid ID'));
            return;
        }
        const user = { id, name: 'John Doe' };
        onSuccess(user);
    }, 1000);
}

fetchUser(1,
    user => console.log('Success:', user),
    error => console.log('Error:', error.message)
);

// Callback chain
function processStep(step, data, callback) {
    setTimeout(() => {
        console.log(\`Step \${step} completed with data: \${data}\`);
        callback(\`Result from step \${step}\`);
    }, 500);
}

processStep(1, 'initial', result1 => {
    processStep(2, result1, result2 => {
        processStep(3, result2, finalResult => {
            console.log('Final result:', finalResult);
        });
    });
});`,
              output: "Data received: { id: 1, name: 'John' }\nSuccess: { id: 1, name: 'John Doe' }\nStep 1 completed with data: initial\nStep 2 completed with data: Result from step 1\nStep 3 completed with data: Result from step 2\nFinal result: Result from step 3",
              explanation: 'Callbacks handle asynchronous operations. Callback chains can lead to nested code (callback hell).'
            },
            {
              id: 'js_callbacks_2',
              title: 'Advanced Callbacks',
              description: 'Complex callback patterns',
              code: `// Event emitter with callbacks
class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => {
                callback(data);
            });
        }
    }
}

const emitter = new EventEmitter();

emitter.on('userLogin', user => {
    console.log('User logged in:', user);
});

emitter.on('userLogin', user => {
    console.log('Sending welcome email to:', user.email);
});

emitter.emit('userLogin', { 
    name: 'John', 
    email: 'john@example.com' 
});

// Parallel execution with callbacks
function parallel(tasks, finalCallback) {
    let completed = 0;
    const results = [];

    tasks.forEach((task, index) => {
        task(result => {
            results[index] = result;
            completed++;
            
            if (completed === tasks.length) {
                finalCallback(results);
            }
        });
    });
}

const tasks = [
    callback => setTimeout(() => callback('First'), 1000),
    callback => setTimeout(() => callback('Second'), 500),
    callback => setTimeout(() => callback('Third'), 800)
];

parallel(tasks, results => {
    console.log('All tasks completed:', results);
});`,
              output: "User logged in: { name: 'John', email: 'john@example.com' }\nSending welcome email to: john@example.com\nAll tasks completed: ['First', 'Second', 'Third']",
              explanation: 'Advanced patterns include event emitters and parallel execution control with callbacks.'
            }
          ]
        },
        {
          id: 'js_promises',
          title: 'Promises',
          description: 'Working with Promises',
          examples: [
            {
              id: 'js_promises_1',
              title: 'Basic Promises',
              description: 'Creating and using promises',
              code: `// Creating a promise
const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = { id: 1, name: 'John' };
        resolve(user);
        // reject(new Error('Failed to fetch user'));
    }, 1000);
});

fetchUser
    .then(user => console.log('User:', user))
    .catch(error => console.log('Error:', error.message));

// Promise chaining
function getData() {
    return Promise.resolve({ id: 1 });
}

function getDetails(data) {
    return Promise.resolve({ ...data, name: 'John' });
}

function getPermissions(user) {
    return Promise.resolve({ ...user, admin: true });
}

getData()
    .then(data => getDetails(data))
    .then(user => getPermissions(user))
    .then(result => console.log('Final result:', result))
    .catch(error => console.log('Error:', error.message));

// Promise.all and Promise.race
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => 
    setTimeout(() => resolve('Second'), 100)
);
const promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, promise3])
    .then(values => console.log('All:', values));

Promise.race([promise1, promise2, promise3])
    .then(value => console.log('Race winner:', value));`,
              output: "User: { id: 1, name: 'John' }\nFinal result: { id: 1, name: 'John', admin: true }\nRace winner: First\nAll: ['First', 'Second', 'Third']",
              explanation: 'Promises provide a cleaner way to handle asynchronous operations with better error handling.'
            },
            {
              id: 'js_promises_2',
              title: 'Advanced Promises',
              description: 'Complex promise patterns',
              code: `// Promise utilities
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry mechanism with promises
async function fetchWithRetry(fn, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            console.log(\`Attempt \${i + 1} failed, retrying...\`);
            await delay(delay);
        }
    }
}

// Example usage
const mockFetch = () => new Promise((resolve, reject) => {
    const shouldSucceed = Math.random() > 0.5;
    setTimeout(() => {
        if (shouldSucceed) {
            resolve({ data: 'Success!' });
        } else {
            reject(new Error('Random failure'));
        }
    }, 500);
});

fetchWithRetry(mockFetch)
    .then(result => console.log('Success:', result))
    .catch(error => console.log('All retries failed:', error.message));

// Promise.allSettled example
const promises = [
    Promise.resolve('Success 1'),
    Promise.reject('Error 1'),
    Promise.resolve('Success 2')
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`Promise \${index + 1} fulfilled with \${result.value}\`);
            } else {
                console.log(\`Promise \${index + 1} rejected with \${result.reason}\`);
            }
        });
    });`,
  output: "Attempt 1 failed, retrying...\nSuccess: { data: 'Success!' }\nPromise 1 fulfilled with Success 1\nPromise 2 rejected with Error 1\nPromise 3 fulfilled with Success 2",
  explanation: 'Advanced promise patterns include retry mechanisms, utilities, and handling multiple promises with allSettled.'
}
          ]
        },
        {
          id: 'js_async_await',
          title: 'Async/Await',
          description: 'Modern asynchronous patterns',
          examples: [
            {
              id: 'js_async_await_1',
              title: 'Basic Async/Await',
              description: 'Using async/await syntax',
              code: `// Basic async/await
async function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: 'John' });
        }, 1000);
    });
}

async function displayUser() {
    try {
        console.log('Fetching user...');
        const user = await fetchUser(1);
        console.log('User:', user);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

displayUser();

// Sequential vs Parallel execution
async function sequential() {
    const start = Date.now();
    
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    
    console.log('Sequential time:', Date.now() - start);
    return [user1, user2];
}

async function parallel() {
    const start = Date.now();
    
    const [user1, user2] = await Promise.all([
        fetchUser(1),
        fetchUser(2)
    ]);
    
    console.log('Parallel time:', Date.now() - start);
    return [user1, user2];
}

sequential().then(users => console.log('Sequential:', users));
parallel().then(users => console.log('Parallel:', users));`,
              output: "Fetching user...\nUser: { id: 1, name: 'John' }\nSequential time: 2000\nSequential: [{ id: 1, name: 'John' }, { id: 2, name: 'John' }]\nParallel time: 1000\nParallel: [{ id: 1, name: 'John' }, { id: 2, name: 'John' }]",
              explanation: 'Async/await provides synchronous-looking code for asynchronous operations. Can be sequential or parallel.'
            },
            {
              id: 'js_async_await_2',
              title: 'Error Handling with Async/Await',
              description: 'Handling errors in async operations',
              code: `// Error handling with async/await
async function fetchUserData(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error; // Re-throw to handle it in the calling function
    }
}

// Multiple async operations with error handling
async function getUserDetails(userId) {
    try {
        const user = await fetchUserData(userId);
        const posts = await fetch(\`https://api.example.com/posts?userId=\${userId}\`)
            .then(res => res.json());
        const comments = await fetch(\`https://api.example.com/comments?userId=\${userId}\`)
            .then(res => res.json());

        return {
            user,
            posts,
            comments
        };
    } catch (error) {
        console.error('Failed to get user details:', error);
        return null;
    }
}

// Parallel execution with error handling
async function getAllUserData(userIds) {
    try {
        const userPromises = userIds.map(id => fetchUserData(id));
        const users = await Promise.all(userPromises);
        console.log('All users:', users);
    } catch (error) {
        console.error('Failed to fetch some users:', error);
    }
}

// Using async/await with timeouts
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    } finally {
        clearTimeout(id);
    }
}

// Example usage
async function runExample() {
    try {
        const userDetails = await getUserDetails(1);
        console.log('User details:', userDetails);
        
        await getAllUserData([1, 2, 3]);
        
        const dataWithTimeout = await fetchWithTimeout('https://api.example.com/data');
        console.log('Data:', dataWithTimeout);
    } catch (error) {
        console.error('Example failed:', error);
    }
}

runExample();`,
  output: "User details: { user: {...}, posts: [...], comments: [...] }\nAll users: [{...}, {...}, {...}]\nData: {...}",
  explanation: `**Async/Await** is a modern way to handle asynchronous operations in JavaScript:

- \`async\`: Declares a function that will work with asynchronous operations
- \`await\`: Pauses execution until a Promise is resolved or rejected

Common patterns:
- Error handling with try/catch
- Parallel execution with Promise.all
- Timeouts and cancellation
- Sequential vs parallel operations`
}
          ]
        },
        {
          id: 'js_fetch_api',
          title: 'Fetch API',
          description: 'Making HTTP requests with Fetch',
          examples: [
            {
              id: 'js_fetch_1',
              title: 'Basic Fetch Requests',
              description: 'Making HTTP requests with Fetch API',
              code: `// GET request
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log('Users:', data))
    .catch(error => console.error('Error:', error));

// POST request
const newUser = {
    name: 'John Doe',
    email: 'john@example.com'
};

fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then(response => response.json())
    .then(data => console.log('Created:', data))
    .catch(error => console.error('Error:', error));

// Using async/await with Fetch
async function fetchUserData(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        console.log('User data:', data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

fetchUserData(1);`,
              output: "Users: [{ id: 1, name: 'John' }]\nCreated: { id: 2, name: 'John Doe', email: 'john@example.com' }\nUser data: { id: 1, name: 'John' }",
              explanation: 'Fetch API provides a modern interface for making HTTP requests. Supports all HTTP methods and custom headers.'
            },
            {
              id: 'js_fetch_2',
              title: 'Advanced Fetch Patterns',
              description: 'Complex Fetch API usage',
              code: `// Fetch with timeout
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

// Fetch with retry
async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
            console.log(\`Attempt \${i + 1} failed, retrying...\`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Fetch multiple resources
async function fetchMultiple(urls) {
    try {
        const responses = await Promise.all(
            urls.map(url => 
                fetch(url)
                    .then(response => response.json())
                    .catch(error => ({ error: error.message }))
            )
        );
        console.log('All responses:', responses);
    } catch (error) {
        console.error('Failed to fetch:', error);
    }
}

// Example usage
fetchWithTimeout('https://api.example.com/data', 3000)
    .then(data => console.log('Data:', data))
    .catch(error => console.log('Timeout error:', error.message));

fetchWithRetry('https://api.example.com/users')
    .then(data => console.log('Users:', data))
    .catch(error => console.log('Retry failed:', error.message));

fetchMultiple([
    'https://api.example.com/users',
    'https://api.example.com/posts',
    'https://api.example.com/comments'
]);`,
  output: "Data: { status: 'success', data: [...] }\nAttempt 1 failed, retrying...\nUsers: { users: [...] }\nAll responses: [{ users: [...] }, { posts: [...] }, { comments: [...] }]",
  explanation: 'Advanced Fetch patterns include timeout handling, automatic retries, and parallel requests with error handling.'
}
          ]
        },
        {
          id: 'js_api_responses',
          title: 'Handling API Responses',
          description: 'Working with API responses and JSON data',
          examples: [
            {
              id: 'js_api_responses_1',
              title: 'Processing API Responses',
              description: 'Handling different types of API responses',
              code: `// Parsing JSON response
async function getUser(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        const contentType = response.headers.get('content-type');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            return data;
        } else {
            throw new TypeError("Response was not JSON");
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Handling different response formats
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        // Check response type
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            return await response.json();
        } else if (contentType?.includes('text/plain')) {
            return await response.text();
        } else if (contentType?.includes('application/octet-stream')) {
            return await response.blob();
        }
        
        throw new TypeError(\`Unsupported content type: \${contentType}\`);
    } catch (error) {
        console.error('Fetch error:', error.message);
        return null;
    }
}

// Response validation
async function validateApiResponse(response) {
    const data = await response.json();
    
    // Schema validation example
    const requiredFields = ['id', 'name', 'email'];
    const missingFields = requiredFields.filter(field => !(field in data));
    
    if (missingFields.length > 0) {
        throw new Error(\`Missing required fields: \${missingFields.join(', ')}\`);
    }
    
    return data;
}

// Example usage
async function processApiResponse() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await validateApiResponse(response);
        console.log('Valid data:', data);
    } catch (error) {
        console.error('Validation error:', error.message);
    }
}

processApiResponse();`,
              output: "Valid data: { id: 1, name: 'John', email: 'john@example.com' }",
              explanation: 'Handle different response types, validate data, and process errors appropriately when working with API responses.'
            }
          ]
        }
      ]
    }
  ]
}; 