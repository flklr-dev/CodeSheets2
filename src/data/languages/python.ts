import { ProgrammingLanguage } from '../types';

export const pythonData: ProgrammingLanguage = {
  id: '1',
  name: 'Python',
  description: 'A beginner-friendly programming language for everyone',
  color: '#3776AB',
  icon: require('../../assets/languages/python.png'), // Updated path
  categories: [
    {
      id: 'py_basics',

      title: 'Basics & Syntax',
      description: 'Core Python concepts and fundamentals',
      icon: 'code-outline',
      subcategories: [
        {
          id: 'py_variables',
          title: 'Variables & Data Types',
          description: 'Learn about Python variables and basic data types',
          examples: [
            {
              id: 'py_var_1',
              title: 'What is a Variable?',
              description: 'Understanding variables in Python and how to use them',
              code: `# A variable is like a container that stores data

# Storing text (string)
name = "Alice"

# Storing a whole number (integer)
age = 25

# Storing a decimal number (float)
height = 5.8

# Storing true/false (boolean)
is_student = True

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)`,
              output: "Name: Alice\nAge: 25\nHeight: 5.8\nIs Student: True",
              explanation: 'Variables are like labeled boxes where you can store different types of data. The `name` variable stores text, while `age` stores numbers. You can use `integers` for whole numbers and `floats` for decimal numbers. `True` or `False` are `boolean` values.'
            },
            {
              id: 'py_var_2',
              title: 'Understanding Strings',
              description: 'Learn about text data (strings) in Python',
              code: `# Strings are text surrounded by quotes
text = "Hello, World!"
name = 'Alice'

# You can combine strings using +
greeting = "Hello, " + name
print(greeting)

# Strings have many useful methods

print(text.upper())     # Convert to uppercase
print(text.lower())     # Convert to lowercase
print(len(text))        # Get string length
print(text.replace("Hello", "Hi"))  # Replace text`,
              output: "Hello, Alice\nHELLO, WORLD!\nhello, world!\n13\nHi, World!",
              explanation: '`Strings` are used to `store text`. You can create them using single quotes (\') or double quotes ("). Strings have many built-in methods to help you manipulate text, like `upper()`, `lower()`, and `replace()`.'
            },
            {
              id: 'py_var_3',
              title: 'Working with Numbers',
              description: 'Understanding integers and floating-point numbers',
              code: `# Integers (whole numbers)
num1 = 5
num2 = 3

# Basic math operations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
power = num1 ** num2

# Display results using f-strings
print(f"Addition: {addition}")
print(f"Subtraction: {subtraction}")
print(f"Multiplication: {multiplication}")
print(f"Division: {division}")
print(f"Power: {power}")`,
              output: "Addition: 8\nSubtraction: 2\nMultiplication: 15\nDivision: 1.6666666666666667\nPower: 125",
              explanation: 'Python supports different types of numbers: `integers` (whole numbers) and `floating-point numbers` (decimals). You can perform various mathematical operations like `addition` (+), `subtraction` (-), `multiplication` (*), `division` (/), and `exponentiation` (**).'
            },
            {
              id: 'py_var_4',
              title: 'Lists and Tuples',
              description: 'Working with sequences in Python',
              code: `# Lists (mutable sequences)
fruits = ['apple', 'banana', 'orange']
print(f"Original list: {fruits}")

# List operations
fruits.append('grape')
fruits[1] = 'mango'
print(f"Modified list: {fruits}")
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")
print(f"Slice: {fruits[1:3]}")

# Tuples (immutable sequences)
coordinates = (10, 20)
x, y = coordinates  # Tuple unpacking
print(f"\nCoordinates: {coordinates}")
print(f"X: {x}, Y: {y}")

# Nested structures
matrix = [[1, 2, 3], [4, 5, 6]]
print(f"Matrix: {matrix}")
print(f"Matrix[1][2]: {matrix[1][2]}")`,
              output: "Original list: ['apple', 'banana', 'orange']\nModified list: ['apple', 'mango', 'orange', 'grape']\nFirst fruit: apple\nLast fruit: grape\nSlice: ['mango', 'orange']\n\nCoordinates: (10, 20)\nX: 10, Y: 20\nMatrix: [[1, 2, 3], [4, 5, 6]]\nMatrix[1][2]: 6",
              explanation: '**Lists** are mutable sequences. Use `[]` for indexing and slicing. Common methods: `append()`, `insert()`, `remove()`, `pop()`.'
            },
            {
              id: 'py_var_5',
              title: 'Dictionaries and Sets',
              description: 'Working with key-value pairs and unique collections',
              code: `# Dictionary creation and access
person = {
    'name': 'Alice',
    'age': 25,
    'skills': ['Python', 'JavaScript']
}

print(f"Person: {person}")
print(f"Name: {person['name']}")
print(f"Skills: {person['skills']}")

# Dictionary methods
person['location'] = 'New York'  # Add new key-value
print(f"Keys: {list(person.keys())}")
print(f"Values: {list(person.values())}")

# Sets (unique elements)
numbers = {1, 2, 3, 2, 1, 4}
letters = {'a', 'b', 'c'}
print(f"\nUnique numbers: {numbers}")

# Set operations
more_numbers = {3, 4, 5}
print(f"Union: {numbers | more_numbers}")
print(f"Intersection: {numbers & more_numbers}")
print(f"Difference: {numbers - more_numbers}")`,
              output: "Person: {'name': 'Alice', 'age': 25, 'skills': ['Python', 'JavaScript']}\nName: Alice\nSkills: ['Python', 'JavaScript']\nKeys: ['name', 'age', 'skills', 'location']\nValues: ['Alice', 25, ['Python', 'JavaScript'], 'New York']\n\nUnique numbers: {1, 2, 3, 4}\nUnion: {1, 2, 3, 4, 5}\nIntersection: {3, 4}\nDifference: {1, 2}",
              explanation: '**Dictionaries** store key-value pairs. Access values using keys in `[]`. **Sets** store unique elements and support mathematical set operations like `union` (`|`), `intersection` (`&`), and `difference` (`-`).'
            },
            {
              id: 'py_var_6',
              title: 'Advanced Data Types',
              description: 'Complex data structures and special types',
              code: `from collections import namedtuple, defaultdict
from decimal import Decimal

# Named Tuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(f"Point: {p}")
print(f"X coordinate: {p.x}")

# Default Dictionary
word_count = defaultdict(int)
sentence = "the quick brown fox jumps over the lazy dog"
for word in sentence.split():
    word_count[word] += 1
print(f"\nWord count: {dict(word_count)}")

# Decimal for precise calculations
price = Decimal('10.99')
tax = Decimal('0.08')
total = price + (price * tax)
print(f"\nPrice: \${price}")
print(f"Tax: \${price * tax:.2f}")
print(f"Total: \${total:.2f}")

# None type
result = None
print(f"\nIs None: {result is None}")
print(f"Type of None: {type(None)}")`,
              output: "Point: Point(x=10, y=20)\nX coordinate: 10\n\nWord count: {'the': 2, 'quick': 1, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1, 'dog': 1}\n\nPrice: $10.99\nTax: $0.88\nTotal: $11.87\n\nIs None: True\nType of None: <class 'NoneType'>",
              explanation: '**Named tuples** create simple classes with named fields. **DefaultDict** provides default values for missing keys. `Decimal` ensures **precise decimal calculations**. `None` is a special type representing **absence of value**.'
            },
            {
              id: 'py_var_7',
              title: 'Type Hints and Complex Types',
              description: 'Modern Python type annotations and complex structures',
              code: `from typing import List, Dict, Optional

# Type hints for better code documentation
def process_user(
    name: str,
    age: int,
    scores: List[float],
    metadata: Optional[Dict[str, str]] = None
) -> str:
    avg_score = sum(scores) / len(scores)
    info = f"{name} (age {age}) - Avg: {avg_score:.1f}"
    if metadata:
        info += f" Tags: {metadata}"
    return info

# Using the typed function
user_scores = [92.5, 88.0, 95.5]
user_meta = {'level': 'advanced', 'status': 'active'}

result = process_user("Alice", 25, user_scores, user_meta)
print(result)

# Complex nested structure
data: Dict[str, List[Dict[str, any]]] = {
    'users': [
        {'id': 1, 'name': 'Bob', 'active': True},
        {'id': 2, 'name': 'Carol', 'active': False}
    ]
}

# Accessing nested data
active_users = [
    user['name'] 
    for user in data['users'] 
    if user['active']
]
print(f"\nActive users: {active_users}")`,
              output: "Alice (age 25) - Avg: 92.0 Tags: {'level': 'advanced', 'status': 'active'}\n\nActive users: ['Bob']",
              explanation: '**Type hints** improve code documentation and IDE support. Use `Optional` for values that might be `None`. **Complex data structures** can be nested. List comprehensions provide elegant data filtering.'
            }
          ]
        },
        {
          id: 'py_operators',
          title: 'Operators',
          description: 'Mathematical and logical operators in Python',
          examples: [
            {
              id: 'py_op_1',
              title: 'Arithmetic Operators',
              description: 'Basic mathematical operations',
              code: `# Basic arithmetic
x = 10
y = 3

print(f"Addition: {x + y}")        # Addition
print(f"Subtraction: {x - y}")     # Subtraction
print(f"Multiplication: {x * y}")  # Multiplication
print(f"Division: {x / y}")        # Division (float)
print(f"Floor Division: {x // y}") # Floor division
print(f"Modulus: {x % y}")         # Remainder
print(f"Exponent: {x ** y}")       # Power
print(f"Negative: {-x}")           # Negation`,
              output: "Addition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.3333333333333335\nFloor Division: 3\nModulus: 1\nExponent: 1000\nNegative: -10",
              explanation: '**Arithmetic operators** perform mathematical calculations. The `/` operator always returns a `float`, while `//` gives an integer result. The `**` operator raises a number to a power.'
            },
            {
              id: 'py_op_2',
              title: 'Comparison Operators',
              description: 'Compare values and return boolean results',
              code: `# Comparison operators
x = 5
y = 10

print(f"{x} == {y}: {x == y}")    # Equal to
print(f"{x} != {y}: {x != y}")    # Not equal to
print(f"{x} < {y}: {x < y}")      # Less than
print(f"{x} > {y}: {x > y}")      # Greater than
print(f"{x} <= {y}: {x <= y}")    # Less than or equal
print(f"{x} >= {y}: {x >= y}")    # Greater than or equal

# Compare different types
print(f"5 == '5': {5 == '5'}")    # Number vs String
print(f"True == 1: {True == 1}")   # Boolean vs Number`,
              output: "5 == 10: False\n5 != 10: True\n5 < 10: True\n5 > 10: False\n5 <= 10: True\n5 >= 10: False\n5 == '5': False\nTrue == 1: True",
              explanation: '**Comparison operators** return `True` or `False`. Python is **type-sensitive** when comparing values. Note that `True` equals `1` and `False` equals `0` in numeric contexts.'
            },
            {
              id: 'py_op_3',
              title: 'Logical Operators',
              description: 'Combine conditions with AND, OR, NOT',
              code: `# Logical operators
x = 5
y = 10
z = 15

# AND operator
print(f"x < y and y < z: {x < y and y < z}")
print(f"x < y and y > z: {x < y and y > z}")

# OR operator
print(f"x > y or y < z: {x > y or y < z}")
print(f"x > y or y > z: {x > y or y > z}")

# NOT operator
print(f"not True: {not True}")
print(f"not (x > y): {not (x > y)}")

# Short-circuit evaluation
result = False and print("This won't print")
print(f"Short-circuit result: {result}")`,
              output: "x < y and y < z: True\nx < y and y > z: False\nx > y or y < z: True\nx > y or y > z: False\nnot True: False\nnot (x > y): True\nShort-circuit result: False",
              explanation: '**Logical operators** combine conditions. `and` requires both conditions to be `True`. `or` requires at least one `True`. `not` inverts the boolean value. Python uses **short-circuit evaluation** - it stops checking conditions once the result is determined.'
            },
            {
              id: 'py_op_4',
              title: 'Assignment Operators',
              description: 'Assign and modify variables',
              code: `# Assignment operators
x = 10
print(f"Initial x: {x}")

x += 5      # Add and assign
print(f"After x += 5: {x}")

x -= 3      # Subtract and assign
print(f"After x -= 3: {x}")

x *= 2      # Multiply and assign
print(f"After x *= 2: {x}")

x /= 4      # Divide and assign
print(f"After x /= 4: {x}")

x //= 2     # Floor divide and assign
print(f"After x //= 2: {x}")

x %= 3      # Modulus and assign
print(f"After x %= 3: {x}")

x **= 2     # Power and assign
print(f"After x **= 2: {x}")`,
              output: "Initial x: 10\nAfter x += 5: 15\nAfter x -= 3: 12\nAfter x *= 2: 24\nAfter x /= 4: 6.0\nAfter x //= 2: 3.0\nAfter x %= 3: 0.0\nAfter x **= 2: 0.0",
              explanation: '**Assignment operators** combine an operation with assignment. They provide a shorter way to modify variables. Note that `/=` and `//=` can change integers to `float`.'
            },
            {
              id: 'py_op_5',
              title: 'Bitwise Operators',
              description: 'Perform operations on binary representations',
              code: `# Bitwise operators
a = 60      # 60 = 0011 1100
b = 13      # 13 = 0000 1101

print(f"a = {bin(a)[2:].zfill(8)}")  # Binary a
print(f"b = {bin(b)[2:].zfill(8)}")  # Binary b

# Bitwise AND
print(f"a & b = {a & b} ({bin(a & b)[2:].zfill(8)})")

# Bitwise OR
print(f"a | b = {a | b} ({bin(a | b)[2:].zfill(8)})")

# Bitwise XOR
print(f"a ^ b = {a ^ b} ({bin(a ^ b)[2:].zfill(8)})")

# Bitwise NOT
print(f"~a = {~a} ({bin(~a & 0xFF)[2:].zfill(8)})")

# Left shift
print(f"a << 2 = {a << 2} ({bin(a << 2)[2:].zfill(8)})")

# Right shift
print(f"a >> 2 = {a >> 2} ({bin(a >> 2)[2:].zfill(8)})")`,
              output: "a = 00111100\nb = 00001101\na & b = 12 (00001100)\na | b = 61 (00111101)\na ^ b = 49 (00110001)\n~a = -61 (11000011)\na << 2 = 240 (11110000)\na >> 2 = 15 (00001111)",
              explanation: '**Bitwise operators** work with binary representations of numbers. `&` performs AND, `|` performs OR, `^` performs XOR, `~` performs NOT. `<<` shifts bits left (multiply by 2), `>>` shifts bits right (divide by 2).'
            }
          ]
        },
        {
          id: 'py_input_output',
          title: 'Input & Output',
          description: 'Learn how to get input from users and display output',
          examples: [
            {
              id: 'py_io_1',
              title: 'Basic Input/Output',
              description: 'Using print() and input() functions',
              code: `# Basic print function
print("Hello, World!")
print("Multiple", "arguments", "are", "separated", "by", "commas")

# Print with end parameter
print("This", end=" ")
print("is", end=" ")
print("continuous")

# Input function
name = input("Enter your name: ")
print(f"Hello, {name}!")`,
              output: "Hello, World!\nMultiple arguments are separated by commas\nThis is continuous\nEnter your name: Alice\nHello, Alice!",
              explanation: 'The `print()` function displays output. Use `end=" "` to prevent new lines. The `input()` function **pauses** the program and waits for user input. It always returns a **string**.'
            },
            {
              id: 'py_io_2',
              title: 'Advanced Output Formatting',
              description: 'Formatting output with sep and file parameters',
              code: `# Using separator
print("Python", "is", "awesome", sep="-")

# Writing to a different stream
import sys
print("This is an error", file=sys.stderr)

# Printing multiple lines
print("""This is a
multi-line
text block""")

# Combining numbers and text
age = 25
print("Age:", age)`,
              output: "Python-is-awesome\nThis is an error\nThis is a\nmulti-line\ntext block\nAge: 25",
              explanation: 'Use `sep` parameter to change the **separator** between items. The `file` parameter redirects output to different streams. **Triple quotes** allow multi-line strings.'
            }
          ]
        },
        {
          id: 'py_comments_docs',
          title: 'Comments & Docstrings',
          description: 'Document your code effectively',
          examples: [
            {
              id: 'py_comment_1',
              title: 'Basic Comments',
              description: 'Single and multi-line comments',
              code: `# This is a single-line comment

# Multiple single-line comments
# can be used to explain
# complex code blocks

'''
This is a multi-line comment
using triple quotes
It can span multiple lines
'''

# Inline comment
x = 5  # This is an inline comment`,
              output: "",
              explanation: 'Comments help explain code. **Single-line comments** start with `# `. **Multi-line comments** use triple quotes. Comments are ignored by Python interpreter.'
            },
            {
              id: 'py_comment_2',
              title: 'Docstrings',
              description: 'Documentation strings for functions and classes',
              code: `def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius (float): The radius of the circle
        
    Returns:
        float: The area of the circle
    """
    return 3.14 * radius ** 2

class Person:
    """
    A class to represent a person.
    
    Attributes:
        name (str): The person's name
        age (int): The person's age
    """
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Access docstrings
print(calculate_area.__doc__)
print(Person.__doc__)`,
              output: "\n    Calculate the area of a circle.\n    \n    Args:\n        radius (float): The radius of the circle\n        \n    Returns:\n        float: The area of the circle\n    \n\n    A class to represent a person.\n    \n    Attributes:\n        name (str): The person's name\n        age (int): The person's age\n    ",
              explanation: '**Docstrings** document functions, classes, and modules. They use triple quotes and follow specific **formatting conventions**. Access docstrings using the `__doc__` attribute.'
            }
          ]
        },
        {
          id: 'py_type_conversion',
          title: 'Type Conversion & Casting',
          description: 'Convert between different data types',
          examples: [
            {
              id: 'py_type_1',
              title: 'Basic Type Conversion',
              description: 'Converting between basic data types',
              code: `# String to number conversion
str_num = "123"
integer = int(str_num)
float_num = float(str_num)
print(f"String to int: {integer}")
print(f"String to float: {float_num}")

# Number to string conversion
num = 456
str_num = str(num)
print(f"Number to string: {str_num}")

# Boolean conversion
print(f"Int to bool: {bool(1)}")
print(f"Empty string to bool: {bool('')}")`,
              output: "String to int: 123\nString to float: 123.0\nNumber to string: 456\nInt to bool: True\nEmpty string to bool: False",
              explanation: 'Use `int()`, `float()`, `str()`, and `bool()` for **type conversion**. Non-zero numbers and non-empty strings convert to `True`. Zero, empty strings, and `None` convert to `False`.'
            },
            {
              id: 'py_type_2',
              title: 'Advanced Type Conversion',
              description: 'Working with complex type conversions',
              code: `# List/tuple conversion
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
back_to_list = list(my_tuple)
print(f"List to tuple: {my_tuple}")
print(f"Tuple to list: {back_to_list}")

# Set conversion
my_string = "hello"
unique_chars = set(my_string)
print(f"String to set: {unique_chars}")

# Dictionary conversion
keys = ['a', 'b', 'c']
values = [1, 2, 3]
dictionary = dict(zip(keys, values))
print(f"Lists to dict: {dictionary}")`,
              output: "List to tuple: (1, 2, 3)\nTuple to list: [1, 2, 3]\nString to set: {'h', 'e', 'l', 'o'}\nLists to dict: {'a': 1, 'b': 2, 'c': 3}",
              explanation: 'Convert between collections using `list()`, `tuple()`, `set()`, and `dict()`. The `zip()` function pairs elements for dictionary creation. **Sets** automatically remove duplicates.'
            }
          ]
        },
        {
          id: 'py_string_formatting',
          title: 'String Formatting',
          description: 'Different ways to format strings in Python',
          examples: [
            {
              id: 'py_format_1',
              title: 'F-Strings (Modern)',
              description: 'Format strings using f-strings (Python 3.6+)',
              code: `name = "Alice"
age = 25
height = 1.75

# Basic f-strings
print(f"Name: {name}, Age: {age}")

# Expressions in f-strings
print(f"Age in 5 years: {age + 5}")

# Number formatting
print(f"Height: {height:.2f} meters")

# Using expressions
print(f"Is adult: {age >= 18}")`,
              output: "Name: Alice, Age: 25\nAge in 5 years: 30\nHeight: 1.75 meters\nIs adult: True",
              explanation: '**F-strings** are the modern way to format strings. Use `{variable}` for simple substitution. Add `:.2f` for **decimal formatting**. Can include expressions and function calls.'
            },
            {
              id: 'py_format_2',
              title: 'Format Method',
              description: 'Using the str.format() method',
              code: `name = "Bob"
age = 30

# Basic formatting
print("Name: {}, Age: {}".format(name, age))

# Named placeholders
print("Name: {n}, Age: {a}".format(n=name, a=age))

# Positional indexing
print("{1} is {0} years old".format(age, name))

# Number formatting
price = 19.99
print("Price: \${:.2f}".format(price))`,
              output: "Name: Bob, Age: 30\nName: Bob, Age: 30\nBob is 30 years old\nPrice: $19.99",
              explanation: 'The `format()` method offers flexible string formatting. Use `{}` for positional arguments. Use named placeholders like `{name}` for clarity. **Number formatting** works similar to f-strings.'
            },
            {
              id: 'py_format_3',
              title: 'Percent Formatting (Legacy)',
              description: 'Old-style string formatting with %',
              code: `name = "Charlie"
age = 35
height = 1.85

# Basic % formatting
print("Name: %s, Age: %d" % (name, age))

# Number formatting
print("Height: %.2f meters" % height)

# Dictionary formatting
data = {'name': 'Dave', 'age': 40}
print("%(name)s is %(age)d years old" % data)`,
              output: "Name: Charlie, Age: 35\nHeight: 1.85 meters\nDave is 40 years old",
              explanation: '**Percent formatting** is the oldest method. Use `%s` for strings, `%d` for integers, `%f` for floats. Can use dictionary with `%(key)s` syntax. This method is **considered legacy** but still works.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_control_flow',
      title: 'Control Flow',
      description: 'Learn about making decisions in your code',
      icon: 'git-branch-outline',
      subcategories: [
        {
          id: 'py_conditional',
          title: 'Conditional Statements',
          description: 'Control program flow with if, elif, and else',
          examples: [
            {
              id: 'py_if_1',
              title: 'Basic If Statements',
              description: 'Learn how to use if statements',
              code: `# Simple if statement
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Multiple conditions with elif
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# Nested if statements
num = 15
if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Non-positive number")`,
              output: "You are an adult\nGrade: B\nPositive odd number",
              explanation: '**If statements** let your program make decisions. Use `elif` for multiple conditions. **Nested if statements** allow complex decision trees.'
            },
            {
              id: 'py_if_2',
              title: 'Complex Conditions',
              description: 'Working with multiple conditions',
              code: `# Multiple conditions
age = 25
has_id = True
is_student = True

if age >= 18 and has_id:
    print("Can enter the venue")
    if is_student:
        print("Student discount applies")

# Checking multiple values
day = "Saturday"
if day in ["Saturday", "Sunday"]:
    print("It's the weekend!")

# Using if with lists
numbers = [1, 2, 3, 4, 5]
if numbers:  # Check if list is not empty
    print(f"First number: {numbers[0]}")
if 3 in numbers:
    print("Found number 3")`,
              output: "Can enter the venue\nStudent discount applies\nIt's the weekend!\nFirst number: 1\nFound number 3",
              explanation: 'Combine conditions with `and`, `or`. Use `in` to check membership. Empty sequences are `False` in conditions.'
            }
          ]
        },
        {
          id: 'py_logical_comparison',
          title: 'Logical & Comparison Operators',
          description: 'Compare values and combine conditions',
          examples: [
            {
              id: 'py_logic_1',
              title: 'Comparison Operators',
              description: 'Using comparison operators',
              code: `# Basic comparisons
x = 5
y = 10

print(f"{x} == {y}: {x == y}")    # Equal to
print(f"{x} != {y}: {x != y}")    # Not equal to
print(f"{x} < {y}: {x < y}")      # Less than
print(f"{x} > {y}: {x > y}")      # Greater than
print(f"{x} <= {y}: {x <= y}")    # Less than or equal
print(f"{x} >= {y}: {x >= y}")    # Greater than or equal

# Identity comparison
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"list1 == list2: {list1 == list2}")  # Value equality
print(f"list1 is list3: {list1 is list3}")  # Identity equality`,
              output: "5 == 10: False\n5 != 10: True\n5 < 10: True\n5 > 10: False\n5 <= 10: True\n5 >= 10: False\nlist1 == list2: True\nlist1 is list3: True",
              explanation: '**Comparison operators** compare values. `==` checks value equality, `is` checks identity. Use `<`, `>`, `<=`, `>=` for numeric comparisons.'
            },
            {
              id: 'py_logic_2',
              title: 'Logical Operators',
              description: 'Combining conditions with logical operators',
              code: `# Logical operators
x = 5
y = 10
z = 15

# AND operator
print(f"x < y and y < z: {x < y and y < z}")
print(f"x < y and y > z: {x < y and y > z}")

# OR operator
print(f"x > y or y < z: {x > y or y < z}")
print(f"x > y or y > z: {x > y or y > z}")

# NOT operator
print(f"not True: {not True}")
print(f"not (x > y): {not (x > y)}")

# Short-circuit evaluation
a = False
b = True
result = a and print("This won't print")
print(f"Short-circuit result: {result}")`,
              output: "x < y and y < z: True\nx < y and y > z: False\nx > y or y < z: True\nx > y or y > z: False\nnot True: False\nnot (x > y): True\nShort-circuit result: False",
              explanation: '**Logical operators** combine conditions. `and` requires both True, `or` requires one True. `not` inverts boolean values. Python uses **short-circuit evaluation**.'
            }
          ]
        },
        {
          id: 'py_ternary',
          title: 'Ternary Operator',
          description: 'Conditional expressions in a single line',
          examples: [
            {
              id: 'py_ternary_1',
              title: 'Ternary Operator Basics',
              description: 'Using the ternary operator for concise conditionals',
              code: `# Basic ternary operator
age = 20
status = "adult" if age >= 18 else "minor"
print(f"Status: {status}")

# Ternary with expressions
x = 5
result = x * 2 if x > 0 else 0
print(f"Result: {result}")

# Nested ternary
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
print(f"Grade: {grade}")

# Ternary with function calls
def is_even(n): return n % 2 == 0
numbers = [1, 2, 3, 4, 5]
parity = ["even" if is_even(n) else "odd" for n in numbers]
print(f"Parity: {parity}")`,
              output: "Status: adult\nResult: 10\nGrade: B\nParity: ['odd', 'even', 'odd', 'even', 'odd']",
              explanation: 'The **ternary operator** provides a one-line if-else statement. Format: `value_if_true if condition else value_if_false`. Can be used in list comprehensions and nested conditions.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_data_structures',
      title: 'Data Structures',
      description: 'Learn about Python collections and data structures',
      icon: 'layers-outline',
      subcategories: [
        {
          id: 'py_lists',
          title: 'Lists',
          description: 'Working with ordered collections of items',
          examples: [
            {
              id: 'py_list_1',
              title: 'Creating and Using Lists',
              description: 'Learn how to create and manipulate lists in Python',
              code: `# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Accessing elements
print(f"First fruit: {fruits[0]}")
print(f"Last number: {numbers[-1]}")
print(f"Slice of numbers: {numbers[1:4]}")

# Modifying lists
fruits.append("grape")
fruits.insert(1, "mango")
fruits.remove("banana")
popped = fruits.pop()

print(f"\\nModified fruits: {fruits}")
print(f"Popped item: {popped}")`,
              output: "First fruit: apple\nLast number: 5\nSlice of numbers: [2, 3, 4]\n\nModified fruits: ['apple', 'mango', 'orange']\nPopped item: grape",
              explanation: '**Lists** are mutable sequences. Use `[]` for indexing and slicing. Common methods: `append()`, `insert()`, `remove()`, `pop()`.'
            },
            {
              id: 'py_list_2',
              title: 'List Operations',
              description: 'Advanced list operations and methods',
              code: `numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

# List methods
numbers.sort()
print(f"Sorted: {numbers}")
numbers.reverse()
print(f"Reversed: {numbers}")

# List operations
print(f"Length: {len(numbers)}")
print(f"Count of 5: {numbers.count(5)}")
print(f"Index of 4: {numbers.index(4)}")

# List concatenation and repetition
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
repeated = list1 * 2
print(f"\\nCombined: {combined}")
print(f"Repeated: {repeated}")`,
              output: "Sorted: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]\nReversed: [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]\nLength: 10\nCount of 5: 2\nIndex of 4: 4\n\nCombined: [1, 2, 3, 4, 5, 6]\nRepeated: [1, 2, 3, 1, 2, 3]",
              explanation: 'Lists support various operations: `sort()`, `reverse()`, `len()`, `count()`, `index()`. Use `+` for concatenation and `*` for repetition.'
            }
          ]
        },
        {
          id: 'py_tuples',
          title: 'Tuples',
          description: 'Working with immutable sequences',
          examples: [
            {
              id: 'py_tuple_1',
              title: 'Tuple Basics',
              description: 'Creating and using tuples',
              code: `# Creating tuples
point = (3, 4)
person = ("Alice", 25, "New York")
single_item = (42,)  # Note the comma

# Accessing elements
print(f"X coordinate: {point[0]}")
print(f"Name: {person[0]}")

# Tuple unpacking
x, y = point
name, age, city = person
print(f"\\nUnpacked point: x={x}, y={y}")
print(f"Unpacked person: {name} is {age} from {city}")

# Tuple methods
numbers = (1, 2, 2, 3, 4, 2)
print(f"\\nCount of 2: {numbers.count(2)}")
print(f"Index of 3: {numbers.index(3)}")`,
              output: "X coordinate: 3\nName: Alice\n\nUnpacked point: x=3, y=4\nUnpacked person: Alice is 25 from New York\n\nCount of 2: 3\nIndex of 3: 3",
              explanation: '**Tuples** are immutable sequences. Use `()` to create them. **Tuple unpacking** assigns elements to variables. Only `count()` and `index()` methods are available.'
            },
            {
              id: 'py_tuple_2',
              title: 'Advanced Tuple Operations',
              description: 'Complex tuple operations and use cases',
              code: `# Nested tuples
matrix = ((1, 2, 3), (4, 5, 6))
print(f"Matrix[1][2]: {matrix[1][2]}")

# Tuples as dictionary keys
locations = {
    (40.7128, -74.0060): "New York",
    (51.5074, -0.1278): "London"
}
print(f"\\nCity at (40.7128, -74.0060): {locations[(40.7128, -74.0060)]}")

# Multiple return values
def get_coordinates():
    return (3, 4)

def get_person_info():
    return "Alice", 25, "Developer"  # Parentheses optional

x, y = get_coordinates()
name, age, job = get_person_info()
print(f"\\nCoordinates: ({x}, {y})")
print(f"Person: {name}, {age}, {job}")`,
              output: "Matrix[1][2]: 6\n\nCity at (40.7128, -74.0060): New York\n\nCoordinates: (3, 4)\nPerson: Alice, 25, Developer",
              explanation: 'Tuples can be nested and used as **dictionary keys** (unlike lists). Functions often return tuples for **multiple return values**. Parentheses are optional in many cases.'
            }
          ]
        },
        {
          id: 'py_sets',
          title: 'Sets',
          description: 'Working with unordered collections of unique elements',
          examples: [
            {
              id: 'py_set_1',
              title: 'Set Basics',
              description: 'Creating and using sets',
              code: `# Creating sets
numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "orange"}
duplicates = {1, 2, 2, 3, 3, 3}  # Duplicates removed

print(f"Numbers: {numbers}")
print(f"Fruits: {fruits}")
print(f"Duplicates removed: {duplicates}")

# Set operations
numbers.add(6)
numbers.remove(2)
numbers.discard(10)  # No error if not found

print(f"\\nModified numbers: {numbers}")
print(f"Is 1 in numbers? {1 in numbers}")
print(f"Length of numbers: {len(numbers)}")`,
              output: "Numbers: {1, 2, 3, 4, 5}\nFruits: {'orange', 'banana', 'apple'}\nDuplicates removed: {1, 2, 3}\n\nModified numbers: {1, 3, 4, 5, 6}\nIs 1 in numbers? True\nLength of numbers: 5",
              explanation: '**Sets** store unique elements in unordered fashion. Use `{}` or `set()` to create them. Methods: `add()`, `remove()`, `discard()`. Fast membership testing with `in`.'
            },
            {
              id: 'py_set_2',
              title: 'Set Operations',
              description: 'Mathematical set operations',
              code: `# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union
union = set1 | set2
print(f"Union: {union}")

# Intersection
intersection = set1 & set2
print(f"Intersection: {intersection}")

# Difference
difference = set1 - set2
print(f"Difference: {difference}")

# Symmetric difference
symmetric_diff = set1 ^ set2
print(f"Symmetric difference: {symmetric_diff}")

# Subset and superset
subset = {1, 2}
print(f"\\nIs {subset} subset of {set1}? {subset <= set1}")
print(f"Is {set1} superset of {subset}? {set1 >= subset}")`,
              output: "Union: {1, 2, 3, 4, 5, 6, 7, 8}\nIntersection: {4, 5}\nDifference: {1, 2, 3}\nSymmetric difference: {1, 2, 3, 6, 7, 8}\n\nIs {1, 2} subset of {1, 2, 3, 4, 5}? True\nIs {1, 2, 3, 4, 5} superset of {1, 2}? True",
              explanation: 'Sets support mathematical operations: `|` (union), `&` (intersection), `-` (difference), `^` (symmetric difference). Use `<=` for subset and `>=` for superset testing.'
            }
          ]
        },
        {
          id: 'py_dictionaries',
          title: 'Dictionaries',
          description: 'Working with key-value pairs',
          examples: [
            {
              id: 'py_dict_1',
              title: 'Dictionary Basics',
              description: 'Creating and using dictionaries',
              code: `# Creating dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Accessing values
print(f"Name: {person['name']}")
print(f"Age: {person.get('age')}")
print(f"Country: {person.get('country', 'Unknown')}")  # Default value

# Modifying dictionaries
person['job'] = 'Developer'  # Add new key-value
person['age'] = 26          # Modify existing value
del person['city']          # Remove key-value

print(f"\\nUpdated person: {person}")
print(f"Keys: {list(person.keys())}")
print(f"Values: {list(person.values())}")`,
              output: "Name: Alice\nAge: 25\nCountry: Unknown\n\nUpdated person: {'name': 'Alice', 'age': 26, 'job': 'Developer'}\nKeys: ['name', 'age', 'job']\nValues: ['Alice', 26, 'Developer']",
              explanation: '**Dictionaries** store key-value pairs. Use `[]` or `get()` to access values. `get()` allows default values for missing keys. Methods: `keys()`, `values()`, `items()`.'
            },
            {
              id: 'py_dict_2',
              title: 'Advanced Dictionary Operations',
              description: 'Complex dictionary operations and methods',
              code: `# Nested dictionaries
users = {
    'alice': {
        'age': 25,
        'scores': [90, 85, 88]
    },
    'bob': {
        'age': 30,
        'scores': [92, 88, 85]
    }
}

# Dictionary methods
print(f"Alice's scores: {users['alice']['scores']}")
print(f"Bob's age: {users['bob']['age']}")

# Merging dictionaries
dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}
merged = {**dict1, **dict2}  # Dictionary unpacking
print(f"\\nMerged: {merged}")

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
print(f"Squares: {squares}")`,
              output: "Alice's scores: [90, 85, 88]\nBob's age: 30\n\nMerged: {'a': 1, 'b': 2, 'c': 3, 'd': 4}\nSquares: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}",
              explanation: 'Dictionaries can be **nested** for complex data structures. Use `**` for dictionary unpacking. Dictionary methods provide powerful data manipulation capabilities.'
            }
          ]
        },
        {
          id: 'py_list_comprehension',
          title: 'List Comprehensions',
          description: 'Creating lists using compact syntax',
          examples: [
            {
              id: 'py_listcomp_1',
              title: 'Basic List Comprehensions',
              description: 'Creating lists with comprehensions',
              code: `# Simple list comprehension
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(f"Even squares: {even_squares}")

# Nested loops
matrix = [[1, 2], [3, 4], [5, 6]]
flattened = [num for row in matrix for num in row]
print(f"Flattened: {flattened}")

# With function calls
def is_vowel(c): return c.lower() in 'aeiou'
word = "Hello World"
vowels = [c for c in word if is_vowel(c)]
print(f"Vowels: {vowels}")`,
              output: "Squares: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\nEven squares: [0, 4, 16, 36, 64]\nFlattened: [1, 2, 3, 4, 5, 6]\nVowels: ['e', 'o', 'o']",
              explanation: '**List comprehensions** provide a concise way to create lists. Include conditions with `if`. Use nested loops with multiple `for` clauses. Can include function calls.'
            }
          ]
        },
        {
          id: 'py_dict_comprehension',
          title: 'Dictionary Comprehensions',
          description: 'Creating dictionaries using compact syntax',
          examples: [
            {
              id: 'py_dictcomp_1',
              title: 'Dictionary Comprehension Patterns',
              description: 'Creating dictionaries with comprehensions',
              code: `# Basic dictionary comprehension
squares = {x: x**2 for x in range(5)}
print(f"Squares: {squares}")

# With conditions
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(f"Even squares: {even_squares}")

# Transforming dictionaries
prices = {'apple': 0.40, 'banana': 0.50, 'orange': 0.45}
doubled = {item: price*2 for item, price in prices.items()}
print(f"\\nDoubled prices: {doubled}")

# Filtering dictionaries
cheap = {k: v for k, v in prices.items() if v < 0.45}
print(f"Cheap items: {cheap}")`,
              output: "Squares: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\nEven squares: {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}\n\nDoubled prices: {'apple': 0.8, 'banana': 1.0, 'orange': 0.9}\nCheap items: {'apple': 0.4}",
              explanation: '**Dictionary comprehensions** create dictionaries concisely. Use `key: value` syntax. Can include conditions with `if`. Useful for transforming and filtering dictionaries.'
            },
            {
              id: 'py_dictcomp_2',
              title: 'Advanced Dictionary Comprehensions',
              description: 'Complex dictionary comprehension patterns',
              code: `# Combining dictionaries
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
combined = {k: dict1.get(k, 0) + dict2.get(k, 0) for k in set(dict1) | set(dict2)}
print(f"Combined: {combined}")

# Nested dictionary comprehension
matrix = {i: {j: i*j for j in range(3)} for i in range(3)}
print(f"\\nMatrix: {matrix}")

# Swapping keys and values
original = {'a': 1, 'b': 2, 'c': 3}
swapped = {v: k for k, v in original.items()}
print(f"\\nOriginal: {original}")
print(f"Swapped: {swapped}")`,
              output: "Combined: {'a': 1, 'b': 5, 'c': 4}\n\nMatrix: {0: {0: 0, 1: 0, 2: 0}, 1: {0: 0, 1: 1, 2: 2}, 2: {0: 0, 1: 2, 2: 4}}\n\nOriginal: {'a': 1, 'b': 2, 'c': 3}\nSwapped: {1: 'a', 2: 'b', 3: 'c'}",
              explanation: 'Use dictionary comprehensions for **complex transformations**. Create **nested dictionaries** with nested comprehensions. Combine dictionaries and swap keys/values easily.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_functions',
      title: 'Functions',
      description: 'Learn about creating and using functions in Python',
      icon: 'code-outline',
      subcategories: [
        {
          id: 'py_func_basics',
          title: 'Defining & Calling Functions',
          description: 'Learn how to create and use functions',
          examples: [
            {
              id: 'py_func_basic_1',
              title: 'Basic Function Definition',
              description: 'Creating and calling simple functions',
              code: `# Basic function definition
def greet():
    print("Hello, World!")

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

# Function with return value
def create_greeting(name):
    return f"Hello, {name}!"

# Calling functions
greet()
greet_person("Alice")
message = create_greeting("Bob")
print(message)

# Docstrings and annotations
def calculate_area(length: float, width: float) -> float:
    """Calculate the area of a rectangle.
    
    Args:
        length: The length of the rectangle
        width: The width of the rectangle
    
    Returns:
        The area of the rectangle
    """
    return length * width

area = calculate_area(5, 3)
print(f"Area: {area}")`,
              output: "Hello, World!\nHello, Alice!\nHello, Bob!\nArea: 15",
              explanation: '**Functions** are defined using the `def` keyword. Use **docstrings** to document functions. **Type annotations** improve code clarity and IDE support.'
            },
            {
              id: 'py_func_basic_2',
              title: 'Function Best Practices',
              description: 'Function organization and best practices',
              code: `# Multiple parameters
def calculate_total(subtotal, tax_rate, discount=0):
    tax = subtotal * tax_rate
    total = subtotal + tax - discount
    return total, tax

# Multiple return values
result, tax_amount = calculate_total(100, 0.1, 20)
print(f"Total: \${result:.2f}, Tax: \${tax_amount:.2f}")

# Early returns
def get_grade(score):
    if not isinstance(score, (int, float)):
        return "Invalid input"
    if score < 0 or score > 100:
        return "Score must be between 0 and 100"
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    return "C"

print(f"Grade: {get_grade(85)}")
print(f"Grade: {get_grade('invalid')}")`,
              output: "Total: $90.00, Tax: $10.00\nGrade: B\nGrade: Invalid input",
              explanation: 'Functions can return **multiple values** using tuples. Use **early returns** for better code organization. **Input validation** improves function reliability.'
            }
          ]
        },
        {
          id: 'py_func_arguments',
          title: 'Function Arguments',
          description: 'Different types of function arguments',
          examples: [
            {
              id: 'py_func_args_1',
              title: 'Argument Types',
              description: 'Different ways to pass arguments to functions',
              code: `# Positional and keyword arguments
def create_user(name, age, city="Unknown", active=True):
    return {
        "name": name,
        "age": age,
        "city": city,
        "active": active
    }

# Different ways to call
user1 = create_user("Alice", 25)
user2 = create_user("Bob", 30, "New York")
user3 = create_user(age=35, name="Charlie", active=False)

print(f"User 1: {user1}")
print(f"User 2: {user2}")
print(f"User 3: {user3}")

# Required keyword arguments
def divide(*, numerator, denominator):
    if denominator == 0:
        raise ValueError("Cannot divide by zero")
    return numerator / denominator

try:
    result = divide(numerator=10, denominator=2)
    print(f"\\nDivision result: {result}")
    # This would raise an error:
    # result = divide(10, 2)
except TypeError as e:
    print(f"Error: {e}")`,
              output: "User 1: {'name': 'Alice', 'age': 25, 'city': 'Unknown', 'active': True}\nUser 2: {'name': 'Bob', 'age': 30, 'city': 'New York', 'active': True}\nUser 3: {'name': 'Charlie', 'age': 35, 'city': 'Unknown', 'active': False}\n\nDivision result: 5.0",
              explanation: '**Positional arguments** must be provided in order. **Keyword arguments** use parameter names. **Default values** make parameters optional. Use `*,` for **keyword-only arguments**.'
            },
            {
              id: 'py_func_args_2',
              title: 'Args and Kwargs',
              description: 'Variable-length argument lists',
              code: `# *args for variable positional arguments
def calculate_average(*numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

avg1 = calculate_average(1, 2, 3, 4, 5)
avg2 = calculate_average(10, 20)
print(f"Average 1: {avg1}")
print(f"Average 2: {avg2}")

# **kwargs for variable keyword arguments
def create_report(**data):
    lines = []
    for key, value in data.items():
        lines.append(f"{key}: {value}")
    return "\\n".join(lines)

report = create_report(
    name="Project Alpha",
    status="In Progress",
    completion=75,
    deadline="2024-12-31"
)
print(f"\\nReport:\\n{report}")

# Combining *args and **kwargs
def format_message(*args, **kwargs):
    # Args as positional format values
    # Kwargs as named format values
    return " ".join(args).format(**kwargs)

message = format_message(
    "Hello, {name}!",
    "You have {count} messages.",
    name="Alice",
    count=5
)
print(f"\\n{message}")`,
              output: "Average 1: 3.0\nAverage 2: 15.0\n\nReport:\nname: Project Alpha\nstatus: In Progress\ncompletion: 75\ndeadline: 2024-12-31\n\nHello, Alice! You have 5 messages.",
              explanation: '`*args` allows **variable number of positional arguments**. `**kwargs` allows **variable number of keyword arguments**. Combine both for flexible function interfaces.'
            }
          ]
        },
        {
          id: 'py_func_return',
          title: 'Return Values',
          description: 'Working with function return values',
          examples: [
            {
              id: 'py_func_return_1',
              title: 'Return Value Patterns',
              description: 'Different ways to return values from functions',
              code: `# Multiple return values
def get_user_stats(scores):
    minimum = min(scores)
    maximum = max(scores)
    average = sum(scores) / len(scores)
    return minimum, maximum, average

scores = [85, 92, 78, 90, 88]
min_score, max_score, avg_score = get_user_stats(scores)
print(f"Min: {min_score}, Max: {max_score}, Avg: {avg_score:.2f}")

# Return different types
def process_number(num):
    if not isinstance(num, (int, float)):
        return None
    if num < 0:
        return str(num) + " is negative"
    return num * 2

results = [
    process_number(5),
    process_number(-3),
    process_number("invalid")
]
print(f"\\nResults: {results}")

# Early returns and conditionals
def get_discount(total, user_type):
    if user_type == "new":
        return total * 0.1
    if user_type == "vip":
        if total > 100:
            return total * 0.2
        return total * 0.15
    return total * 0.05

print(f"\\nNew user discount: \${get_discount(100, 'new'):.2f}")
print(f"VIP discount (>100): \${get_discount(200, 'vip'):.2f}")
print(f"Regular discount: \${get_discount(100, 'regular'):.2f}")`,
              output: "Min: 78, Max: 92, Avg: 86.60\n\nResults: [10, '-3 is negative', None]\n\nNew user discount: $10.00\nVIP discount (>100): $40.00\nRegular discount: $5.00",
              explanation: 'Functions can return **multiple values** using tuples. Use `None` for **no result**. **Early returns** make code clearer. Return types can vary based on conditions.'
            }
          ]
        },
        {
          id: 'py_func_lambda',
          title: 'Lambda Functions',
          description: 'Working with anonymous functions',
          examples: [
            {
              id: 'py_func_lambda_1',
              title: 'Lambda Function Basics',
              description: 'Creating and using lambda functions',
              code: `# Basic lambda function
square = lambda x: x ** 2
cube = lambda x: x ** 3

print(f"Square of 5: {square(5)}")
print(f"Cube of 3: {cube(3)}")

# Lambda with multiple arguments
rectangle_area = lambda length, width: length * width
print(f"Area of 4x5 rectangle: {rectangle_area(4, 5)}")

# Lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

print(f"\\nOriginal numbers: {numbers}")
print(f"Squared numbers: {squared}")
print(f"Even numbers: {evens}")

# Sorting with lambda
points = [(1, 2), (3, 1), (0, 4)]
sorted_by_y = sorted(points, key=lambda point: point[1])
print(f"\\nSorted by y-coordinate: {sorted_by_y}")

# Lambda in dictionary operations
users = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 20}
]
sorted_users = sorted(users, key=lambda user: user["age"])
print(f"\\nSorted users: {sorted_users}")`,
              output: "Square of 5: 25\nCube of 3: 27\nArea of 4x5 rectangle: 20\n\nOriginal numbers: [1, 2, 3, 4, 5]\nSquared numbers: [1, 4, 9, 16, 25]\nEven numbers: [2, 4]\n\nSorted by y-coordinate: [(3, 1), (1, 2), (0, 4)]\n\nSorted users: [{'name': 'Charlie', 'age': 20}, {'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 30}]",
              explanation: '**Lambda functions** are anonymous single-expression functions. Common with `map()`, `filter()`, and `sorted()`. Use for simple operations and as function arguments.'
            }
          ]
        },
        {
          id: 'py_func_scope',
          title: 'Scope & Variables',
          description: 'Understanding variable scope in functions',
          examples: [
            {
              id: 'py_func_scope_1',
              title: 'Variable Scope',
              description: 'Local and global variable scope',
              code: `# Global and local variables
global_var = "I'm global"

def test_scope():
    local_var = "I'm local"
    print(f"Inside function - Global: {global_var}")
    print(f"Inside function - Local: {local_var}")

test_scope()
print(f"Outside function - Global: {global_var}")
# This would raise an error:
# print(local_var)

# Modifying global variables
counter = 0

def increment():
    global counter
    counter += 1
    print(f"Counter: {counter}")

increment()
increment()
print(f"Final counter: {counter}")

# Nonlocal variables
def outer():
    x = "outer"
    
    def inner():
        nonlocal x
        x = "modified"
        print(f"Inner x: {x}")
    
    print(f"Before inner - x: {x}")
    inner()
    print(f"After inner - x: {x}")

outer()`,
              output: "Inside function - Global: I'm global\nInside function - Local: I'm local\nOutside function - Global: I'm global\nCounter: 1\nCounter: 2\nFinal counter: 2\nBefore inner - x: outer\nInner x: modified\nAfter inner - x: modified",
              explanation: '**Local variables** are only accessible within their function. Use `global` to modify global variables. `nonlocal` accesses variables in the outer function scope.'
            },
            {
              id: 'py_func_scope_2',
              title: 'Advanced Scope Concepts',
              description: 'Closures and variable lifetime',
              code: `# Closure example
def create_counter():
    count = 0
    
    def increment():
        nonlocal count
        count += 1
        return count
    
    return increment

counter = create_counter()
print(f"Count 1: {counter()}")
print(f"Count 2: {counter()}")
print(f"Count 3: {counter()}")

# Function factory with parameters
def create_multiplier(factor):
    def multiplier(x):
        return x * factor
    return multiplier

double = create_multiplier(2)
triple = create_multiplier(3)

print(f"\\nDouble 5: {double(5)}")
print(f"Triple 5: {triple(5)}")

# Maintaining state
def create_accumulator():
    values = []
    
    def add(x):
        values.append(x)
        return sum(values)
    
    return add

acc = create_accumulator()
print(f"\\nAdd 5: {acc(5)}")
print(f"Add 3: {acc(3)}")
print(f"Add 2: {acc(2)}")`,
              output: "Count 1: 1\nCount 2: 2\nCount 3: 3\n\nDouble 5: 10\nTriple 5: 15\n\nAdd 5: 5\nAdd 3: 8\nAdd 2: 10",
              explanation: '**Closures** maintain access to variables in their outer scope. Function factories create **specialized functions**. Use closures to maintain **state between calls**.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_loops',
      title: 'Loops',
      description: 'Master different types of loops and iteration',
      icon: 'refresh-outline',
      subcategories: [
        {
          id: 'py_for_loops',
          title: 'For Loops',
          description: 'Learn about for loops and their applications',
          examples: [
            {
              id: 'py_for_1',
              title: 'Basic For Loops',
              description: 'Common for loop patterns',
              code: `# Looping through a range
for i in range(5):
    print(f"Count: {i}")

# Looping through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"Fruit: {fruit}")

# Enumerate for index and value
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")

# Looping through strings
word = "Python"
for char in word:
    print(f"Letter: {char}")`,
              output: "Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\nFruit: apple\nFruit: banana\nFruit: orange\nIndex 0: apple\nIndex 1: banana\nIndex 2: orange\nLetter: P\nLetter: y\nLetter: t\nLetter: h\nLetter: o\nLetter: n",
              explanation: '**For loops** iterate over sequences. Use `range()` for number sequences. `enumerate()` provides both **index and value**. Strings can be iterated character by character.'
            },
            {
              id: 'py_for_2',
              title: 'Advanced For Loops',
              description: 'Complex for loop patterns',
              code: `# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i: {i}, j: {j}")

# Dictionary iteration
user = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

for key in user:
    print(f"Key: {key}")

for key, value in user.items():
    print(f"{key}: {value}")

# Multiple sequences with zip
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["New York", "London", "Paris"]

for name, age, city in zip(names, ages, cities):
    print(f"{name} is {age} years old from {city}")`,
              output: "i: 0, j: 0\ni: 0, j: 1\ni: 1, j: 0\ni: 1, j: 1\ni: 2, j: 0\ni: 2, j: 1\nKey: name\nKey: age\nKey: city\nname: Alice\nage: 25\ncity: New York\nAlice is 25 years old from New York\nBob is 30 years old from London\nCharlie is 35 years old from Paris",
              explanation: '**Nested loops** iterate within iterations. Use `dict.items()` for **key-value pairs**. `zip()` combines multiple sequences for parallel iteration.'
            }
          ]
        },
        {
          id: 'py_while_loops',
          title: 'While Loops',
          description: 'Using while loops for conditional iteration',
          examples: [
            {
              id: 'py_while_1',
              title: 'While Loop Basics',
              description: 'Basic while loop patterns',
              code: `# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# While with user input
number = 0
total = 0
while number >= 0:
    total += number
    number = int(input("Enter a number (-1 to stop): "))
print(f"Sum: {total}")

# While with condition check
import random
target = random.randint(1, 10)
attempts = 0

while attempts < 3:
    guess = int(input("Guess the number (1-10): "))
    attempts += 1
    
    if guess == target:
        print("Correct!")
        break
    print("Try again!")

if guess != target:
    print(f"The number was {target}")`,
              output: "Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\nEnter a number (-1 to stop): 5\nEnter a number (-1 to stop): 3\nEnter a number (-1 to stop): -1\nSum: 8\nGuess the number (1-10): 5\nTry again!\nGuess the number (1-10): 7\nCorrect!",
              explanation: '**While loops** continue until a condition is false. Use a **counter variable** to control iterations. `break` exits the loop early when needed.'
            }
          ]
        },
        {
          id: 'py_loop_control',
          title: 'Loop Control Statements',
          description: 'Control flow within loops',
          examples: [
            {
              id: 'py_loop_ctrl_1',
              title: 'Break, Continue, and Pass',
              description: 'Loop control statements',
              code: `# Break statement
print("Break example:")
for i in range(5):
    if i == 3:
        break
    print(f"Count: {i}")

# Continue statement
print("\\nContinue example:")
for i in range(5):
    if i == 2:
        continue
    print(f"Count: {i}")

# Pass statement
print("\\nPass example:")
for i in range(3):
    if i == 1:
        pass  # Do nothing
    else:
        print(f"Count: {i}")

# Practical example
numbers = [1, -2, 3, -4, 5, 0, 6]
print("\\nProcessing numbers:")
for num in numbers:
    if num == 0:
        print("Found zero, stopping!")
        break
    if num < 0:
        continue
    print(f"Processing: {num}")`,
              output: "Break example:\nCount: 0\nCount: 1\nCount: 2\n\nContinue example:\nCount: 0\nCount: 1\nCount: 3\nCount: 4\n\nPass example:\nCount: 0\nCount: 2\n\nProcessing numbers:\nProcessing: 1\nProcessing: 3\nProcessing: 5\nFound zero, stopping!",
              explanation: '`break` **exits** the loop completely. `continue` **skips** to the next iteration. `pass` is a **no-operation** placeholder.'
            }
          ]
        },
        {
          id: 'py_iterators',
          title: 'Iterators & Generators',
          description: 'Creating custom iterables and generators',
          examples: [
            {
              id: 'py_iter_1',
              title: 'Custom Iterators',
              description: 'Creating iterator classes',
              code: `# Custom iterator class
class CountUp:
    def __init__(self, start, end):
        self.current = start
        self.end = end
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        value = self.current
        self.current += 1
        return value

# Using the iterator
counter = CountUp(1, 3)
for num in counter:
    print(f"Count: {num}")

# Generator function
def count_down(start, end):
    current = start
    while current >= end:
        yield current
        current -= 1

# Using the generator
print("\\nCounting down:")
for num in count_down(3, 1):
    print(f"Count: {num}")

# Generator expression
squares = (x**2 for x in range(4))
print("\\nSquares:")
for square in squares:
    print(f"Square: {square}")`,
              output: "Count: 1\nCount: 2\nCount: 3\n\nCounting down:\nCount: 3\nCount: 2\nCount: 1\n\nSquares:\nSquare: 0\nSquare: 1\nSquare: 4\nSquare: 9",
              explanation: '**Iterators** implement `__iter__` and `__next__`. **Generators** use `yield` to create iterators simply. Generator expressions create **lazy iterators**.'
            },
            {
              id: 'py_iter_2',
              title: 'Advanced Generators',
              description: 'Complex generator patterns',
              code: `# Infinite generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Using infinite generator with limit
print("Fibonacci sequence:")
fib = fibonacci()
for _ in range(6):
    print(next(fib))

# Generator with send
def counter():
    count = 0
    while True:
        step = yield count
        if step is None:
            step = 1
        count += step

# Using send
print("\\nCustom counter:")
c = counter()
print(next(c))      # Start generator
print(c.send(2))    # Send value
print(c.send(3))    # Send value
print(next(c))      # Default step

# Multiple yields
def multi_yield():
    yield "First"
    yield "Second"
    yield "Third"

print("\\nMultiple yields:")
for item in multi_yield():
    print(item)`,
              output: "Fibonacci sequence:\n0\n1\n1\n2\n3\n5\n\nCustom counter:\n0\n2\n5\n6\n\nMultiple yields:\nFirst\nSecond\nThird",
              explanation: '**Infinite generators** produce endless sequences. Use `send()` to pass values to generators. Generators can have **multiple yield points**.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_error_handling',
      title: 'Error Handling',
      description: 'Learn how to handle errors and exceptions in Python',
      icon: 'warning-outline',
      subcategories: [
        {
          id: 'py_try_except',
          title: 'Try-Except Blocks',
          description: 'Handle runtime errors gracefully',
          examples: [
            {
              id: 'py_error_1',
              title: 'Basic Error Handling',
              description: 'Learn how to catch and handle exceptions',
              code: `# Division by zero error handling
def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Cannot divide by zero!"
    except TypeError:
        return "Please provide numbers only!"

# Test the function
print(divide_numbers(10, 2))
print(divide_numbers(10, 0))
print(divide_numbers(10, "hello"))`,
              output: "5.0\nCannot divide by zero!\nPlease provide numbers only!",
              explanation: 'The `try-except` block is used to handle errors gracefully. The code inside the `try` block is attempted, and if an error occurs, the corresponding `except` block handles it. **Exception handling** is crucial for writing robust programs that can handle unexpected situations.'
            },
            {
              id: 'py_error_2',
              title: 'Custom Exceptions',
              description: 'Creating and using custom exceptions',
              code: `# Custom exception class
class ValidationError(Exception):
    def __init__(self, message, code=None):
        self.message = message
        self.code = code
        super().__init__(self.message)

def validate_age(age):
    if not isinstance(age, (int, float)):
        raise ValidationError("Age must be a number", "TYPE_ERROR")
    if age < 0:
        raise ValidationError("Age cannot be negative", "VALUE_ERROR")
    if age > 150:
        raise ValidationError("Age seems unrealistic", "RANGE_ERROR")

# Test the validation
test_ages = [25, -5, "not_a_number", 200]

for age in test_ages:
    try:
        validate_age(age)
        print(f"Age {age} is valid")
    except ValidationError as e:
        print(f"Error validating {age}: {e.message} (Code: {e.code})")
    except Exception as e:
        print(f"Unexpected error: {e}")`,
              output: "Age 25 is valid\nError validating -5: Age cannot be negative (Code: VALUE_ERROR)\nError validating not_a_number: Age must be a number (Code: TYPE_ERROR)\nError validating 200: Age seems unrealistic (Code: RANGE_ERROR)",
              explanation: '**Custom exceptions** help create meaningful error messages. Use `raise` to throw exceptions. The `super().__init__()` call ensures proper exception initialization. Multiple `except` blocks handle different error types.'
            },
            {
              id: 'py_error_3',
              title: 'Context Managers for Error Handling',
              description: 'Using context managers for resource management',
              code: `from contextlib import contextmanager
import sys
from typing import TextIO

@contextmanager
def managed_file(filename: str) -> TextIO:
    """Manage file operations with error handling."""
    file = None
    try:
        file = open(filename, 'w')
        yield file
    except IOError as e:
        print(f"Error during file operation: {e}")
    finally:
        if file:
            file.close()
            print(f"File {filename} closed")

@contextmanager
def error_handler(operation_name: str):
    """General purpose error handler."""
    try:
        yield
    except Exception as e:
        print(f"Error during {operation_name}: {str(e)}")
        # Log error, send notification, etc.
    else:
        print(f"{operation_name} completed successfully")

# Using the context managers
with error_handler("file writing"):
    with managed_file("example.txt") as f:
        f.write("Hello, World!")
        f.write("\\nMore content")

# Nested error handling
with error_handler("data processing"):
    data = [1, 2, 0, 4]
    results = []
    for num in data:
        with error_handler(f"processing number {num}"):
            results.append(10 / num)
    print(f"Results: {results}")`,
              output: "file writing completed successfully\nFile example.txt closed\ndata processing completed successfully\nprocessing number 1 completed successfully\nprocessing number 2 completed successfully\nError during processing number 0: division by zero\nprocessing number 4 completed successfully\nResults: [10.0, 5.0, 2.5]",
              explanation: '**Context managers** provide clean setup and teardown of resources. The `@contextmanager` decorator simplifies creating context managers. `try`/`except`/`finally` ensures proper resource cleanup. Nested context managers handle complex error scenarios.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_oop',
      title: 'Object-Oriented Programming',
      description: 'Master classes and objects in Python',
      icon: 'cube-outline',
      subcategories: [
        {
          id: 'py_classes',
          title: 'Classes and Objects',
          description: 'Understanding object-oriented programming basics',
          examples: [
            {
              id: 'py_class_1',
              title: 'Creating Classes',
              description: 'Learn how to create and use classes',
              code: `# Define a simple class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def get_info(self):
        return f"{self.name} is {self.age} years old"

# Create objects
buddy = Dog("Buddy", 5)
max = Dog("Max", 3)

# Use the objects
print(buddy.bark())
print(max.get_info())`,
              output: "Buddy says Woof!\nMax is 3 years old",
              explanation: 'Classes are blueprints for creating **objects**. The `__init__` method is a special **constructor** that initializes new objects. `self` refers to the current instance of the class. **Methods** like `bark()` define the behavior of objects.'
            }
          ]
        },
        {
          id: 'py_inheritance',
          title: 'Inheritance',
          description: 'Learn about class inheritance and polymorphism',
          examples: [
            {
              id: 'py_inherit_1',
              title: 'Class Inheritance',
              description: 'Understanding inheritance in Python',
              code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

# Child classes
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Create objects
dog = Dog("Buddy")
cat = Cat("Whiskers")

# Test polymorphism
animals = [dog, cat]
for animal in animals:
    print(animal.speak())`,
              output: "Buddy says Woof!\nWhiskers says Meow!",
              explanation: '**Inheritance** allows a class to inherit attributes and methods from another class. The `Animal` class is the **parent class**, while `Dog` and `Cat` are **child classes**. This demonstrates **polymorphism** where different classes can implement the same method differently.'
            }
          ]
        },
        {
          id: 'py_oop_advanced',
          title: 'Advanced OOP Concepts',
          description: 'Advanced object-oriented programming features',
          examples: [
            {
              id: 'py_oop_1',
              title: 'Properties and Descriptors',
              description: 'Using properties and descriptors for attribute control',
              code: `class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self.celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

# Using properties
temp = Temperature(25)
print(f"Celsius: {temp.celsius}°C")
print(f"Fahrenheit: {temp.fahrenheit}°F")

# Setting values
temp.fahrenheit = 100
print(f"New Celsius: {temp.celsius}°C")

# Validation
try:
    temp.celsius = -300
except ValueError as e:
    print(f"Error: {e}")`,
              output: "Celsius: 25°C\nFahrenheit: 77.0°F\nNew Celsius: 37.77777777777778°C\nError: Temperature below absolute zero!",
              explanation: '**Properties** provide getter/setter functionality with the `@property` decorator. They enable **data validation** and **computed attributes**. Properties help maintain **encapsulation** while providing a clean interface.'
            },
            {
              id: 'py_oop_2',
              title: 'Multiple Inheritance and Mixins',
              description: 'Understanding multiple inheritance and mixin patterns',
              code: `class LoggerMixin:
    def log(self, message):
        print(f"[LOG] {self.__class__.__name__}: {message}")

class JSONSerializableMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Pet:
    def __init__(self, owner):
        self.owner = owner
    
    def get_owner(self):
        return f"Owned by {self.owner}"

class Dog(Animal, Pet, LoggerMixin, JSONSerializableMixin):
    def __init__(self, name, owner, breed):
        Animal.__init__(self, name)
        Pet.__init__(self, owner)
        self.breed = breed
    
    def speak(self):
        self.log(f"{self.name} says Woof!")
        return "Woof!"

# Using the class
dog = Dog("Rex", "Alice", "Labrador")
print(dog.speak())
print(dog.get_owner())
print(f"JSON: {dog.to_json()}")

# Check inheritance
print(f"\nMethod Resolution Order:")
for cls in Dog.__mro__:
    print(f"- {cls.__name__}")`,
              output: "[LOG] Dog: Rex says Woof!\nWoof!\nOwned by Alice\nJSON: {\"name\": \"Rex\", \"owner\": \"Alice\", \"breed\": \"Labrador\"}\n\nMethod Resolution Order:\n- Dog\n- Animal\n- Pet\n- LoggerMixin\n- JSONSerializableMixin\n- object",
              explanation: '**Multiple inheritance** combines features from multiple classes. **Mixins** are classes that provide additional functionality. The **Method Resolution Order (MRO)** determines how Python resolves method calls in multiple inheritance.'
            },
            {
              id: 'py_oop_3',
              title: 'Metaclasses and Class Decorators',
              description: 'Advanced class creation and modification',
              code: `# Metaclass example
class Singleton(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

# Class decorator example
def validate_attributes(cls):
    original_init = cls.__init__
    
    def new_init(self, *args, **kwargs):
        original_init(self, *args, **kwargs)
        for key, value in self.__dict__.items():
            if hasattr(self, f'validate_{key}'):
                validator = getattr(self, f'validate_{key}')
                if not validator(value):
                    raise ValueError(f"Invalid value for {key}: {value}")
    
    cls.__init__ = new_init
    return cls

# Using metaclass
class Database(metaclass=Singleton):
    def __init__(self, host):
        self.host = host

# Using class decorator
@validate_attributes
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def validate_age(self, age):
        return 0 <= age <= 150
    
    def validate_name(self, name):
        return bool(name.strip())

# Testing Singleton
db1 = Database('localhost')
db2 = Database('127.0.0.1')
print(f"Same instance: {db1 is db2}")
print(f"Host: {db1.host}")  # Still 'localhost'

# Testing validation
try:
    user = User("Alice", 25)
    print(f"Valid user: {user.name}, {user.age}")
    invalid_user = User("", -5)
except ValueError as e:
    print(f"Validation error: {e}")`,
              output: "Same instance: True\nHost: localhost\nValid user: Alice, 25\nValidation error: Invalid value for name: ",
              explanation: '**Metaclasses** customize class creation. **Class decorators** modify classes after creation. **Singleton** ensures only one instance exists. The `validate_attributes` decorator adds automatic validation.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_file_handling',
      title: 'File Handling',
      description: 'Working with files in Python',
      icon: 'folder-outline',
      subcategories: [
        {
          id: 'py_file_ops',
          title: 'File Operations',
          description: 'Learn to read and write files',
          examples: [
            {
              id: 'py_file_1',
              title: 'Reading and Writing Files',
              description: 'Basic file operations in Python',
              code: `# Writing to a file
with open('example.txt', 'w') as file:
    file.write('Hello, World!\\n')
    file.write('This is a new line.')

# Reading from a file
with open('example.txt', 'r') as file:
    content = file.read()
    print('File contents:')
    print(content)

# Reading line by line
with open('example.txt', 'r') as file:
    print('\\nReading line by line:')
    for line in file:
        print(f'Line: {line.strip()}')`,
              output: "File contents:\nHello, World!\nThis is a new line.\n\nReading line by line:\nLine: Hello, World!\nLine: This is a new line.",
              explanation: 'The `with` statement ensures proper file handling. The `open()` function takes a **filename** and **mode** (`\'r\'` for read, `\'w\'` for write). Files should always be properly closed, which the `with` statement handles automatically.'
            }
          ]
        },
        {
          id: 'py_file_advanced',
          title: 'Advanced File Operations',
          description: 'Complex file handling scenarios',
          examples: [
            {
              id: 'py_file_2',
              title: 'Context Managers and File Modes',
              description: 'Advanced file handling patterns',
              code: `# Custom context manager
from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode='r'):
    try:
        f = open(filename, mode)
        yield f
    finally:
        f.close()

# Writing binary data
with open('data.bin', 'wb') as f:
    f.write(bytes([65, 66, 67]))  # ABC in ASCII

# Reading with different modes
modes = ['r', 'rb', 'r+']
for mode in modes:
    print(f"\\nOpening with mode '{mode}':")
    try:
        with open('example.txt', mode) as f:
            print(f"File object: {f}")
            print(f"Readable: {f.readable()}")
            print(f"Writable: {f.writable()}")
    except FileNotFoundError:
        print("File not found!")`,
              output: "\nOpening with mode 'r':\nFile object: <_io.TextIOWrapper name='example.txt' mode='r' encoding='utf-8'>\nReadable: True\nWritable: False\n...",
              explanation: '**Context managers** ensure proper resource cleanup. Different file **modes** control read/write access. Use `wb` mode for **binary files**. The `@contextmanager` decorator creates custom context managers.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_regex',
      title: 'Regular Expressions',
      description: 'Master pattern matching and text processing',
      icon: 'search-outline',
      subcategories: [
        {
          id: 'py_regex_basics',
          title: 'Regex Basics',
          description: 'Learn fundamental regular expression patterns',
          examples: [
            {
              id: 'py_regex_1',
              title: 'Pattern Matching',
              description: 'Basic pattern matching with regular expressions',
              code: `import re

# Basic pattern matching
text = "Contact us at: info@example.com or support@example.com"
email_pattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'

# Find all matches
emails = re.findall(email_pattern, text)
print("Found emails:", emails)

# Search and replace
new_text = re.sub(email_pattern, '[EMAIL]', text)
print("\\nRedacted text:", new_text)`,
              output: "Found emails: ['info@example.com', 'support@example.com']\nRedacted text: Contact us at: [EMAIL] or [EMAIL]",
              explanation: 'The `re` module provides support for **regular expressions**. The `findall()` function finds all matches of a pattern, while `sub()` performs substitution. The `r` prefix creates a **raw string** which treats backslashes literally.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_modules',
      title: 'Modules & Packages',
      description: 'Organize and reuse code effectively',
      icon: 'layers-outline',
      subcategories: [
        {
          id: 'py_module_basics',
          title: 'Working with Modules',
          description: 'Learn to create and import modules',
          examples: [
            {
              id: 'py_module_1',
              title: 'Creating Custom Modules',
              description: 'Learn how to create and import your own modules',
              code: `# math_operations.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# main.py
from math_operations import add, multiply

result1 = add(5, 3)
result2 = multiply(4, 2)

print(f"Addition: {result1}")
print(f"Multiplication: {result2}")`,
              output: "Addition: 8\nMultiplication: 8",
              explanation: '**Modules** help organize code into reusable files. Use `import` to access functions from other modules. The `from module import name` syntax lets you import specific items. **Packages** are collections of modules in directories.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_database',
      title: 'Database Operations',
      description: 'Work with SQL databases in Python',
      icon: 'server-outline',
      subcategories: [
        {
          id: 'py_sqlite',
          title: 'SQLite Database',
          description: 'Learn to work with SQLite databases',
          examples: [
            {
              id: 'py_db_1',
              title: 'Basic Database Operations',
              description: 'Create tables and perform CRUD operations',
              code: `import sqlite3

# Connect to database
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
)''')

# Insert data
cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))
cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Bob", 30))

# Query data
cursor.execute("SELECT * FROM users")
users = cursor.fetchall()
for user in users:
    print(f"User: {user[1]}, Age: {user[2]}")

conn.commit()
conn.close()`,
              output: "User: Alice, Age: 25\nUser: Bob, Age: 30",
              explanation: 'The `sqlite3` module provides a lightweight database solution. Use **cursor** objects to execute SQL commands. The `?` placeholder prevents **SQL injection**. Always `commit()` changes and `close()` connections.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_web',
      title: 'Web Development',
      description: 'Build web applications with Python',
      icon: 'globe-outline',
      subcategories: [
        {
          id: 'py_flask',
          title: 'Flask Framework',
          description: 'Create web applications using Flask',
          examples: [
            {
              id: 'py_web_1',
              title: 'Basic Flask App',
              description: 'Create a simple web server with Flask',
              code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/api/data')
def get_data():
    data = {
        'message': 'Success',
        'items': ['item1', 'item2', 'item3']
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)`,
              output: "* Running on http://127.0.0.1:5000/\n* Debug mode: on",
              explanation: '**Flask** is a lightweight web framework. The `@app.route()` **decorator** defines URL routes. `jsonify()` converts Python dictionaries to **JSON** responses. The `debug=True` enables development features.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_data_science',
      title: 'Data Science',
      description: 'Analyze and visualize data with Python',
      icon: 'bar-chart-outline',
      subcategories: [
        {
          id: 'py_pandas',
          title: 'Pandas Basics',
          description: 'Work with data using Pandas',
          examples: [
            {
              id: 'py_pandas_1',
              title: 'Data Analysis with Pandas',
              description: 'Basic data manipulation using Pandas',
              code: `import pandas as pd

# Create a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'London', 'Paris']
}
df = pd.DataFrame(data)

# Basic operations
print("Original DataFrame:")
print(df)

print("\\nFiltered by Age > 28:")
print(df[df['Age'] > 28])

print("\\nAverage Age:", df['Age'].mean())`,
              output: "Original DataFrame:\n   Name  Age      City\n0  Alice   25  New York\n1    Bob   30    London\n2  Charlie 35     Paris\n\nFiltered by Age > 28:\n   Name  Age    City\n1    Bob   30  London\n2  Charlie 35   Paris\n\nAverage Age: 30.0",
              explanation: '**Pandas** is a powerful data analysis library. `DataFrame` is a 2-dimensional data structure. Use **boolean indexing** for filtering and built-in methods like `mean()` for **statistical operations**.'
            }
          ]
        }
      ]
    },
    {
      id: 'py_advanced',
      title: 'Advanced Concepts',
      description: 'Master advanced Python features',
      icon: 'rocket-outline',
      subcategories: [
        {
          id: 'py_decorators',
          title: 'Decorators',
          description: 'Understand Python decorators and their uses',
          examples: [
            {
              id: 'py_dec_1',
              title: 'Creating Decorators',
              description: 'Learn how to create and use decorators',
              code: `import time
from functools import wraps

def timer_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.2f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    time.sleep(1)
    return "Function completed"

print(slow_function())`,
              output: "slow_function took 1.00 seconds\nFunction completed",
              explanation: '**Decorators** modify or enhance functions without changing their code. The `@wraps` decorator from `functools` preserves the original function\'s metadata. Use `*args` and `**kwargs` to handle any number of arguments.'
            }
          ]
        }
      ]
    }
  ]
};

// Export an array of all programming languages
export const programmingLanguages: ProgrammingLanguage[] = [
  pythonData,
  // Add other languages here
];

// Default export for easier importing
export default programmingLanguages;