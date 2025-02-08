import { ProgrammingLanguage } from '../types';

export const htmlData: ProgrammingLanguage = {
  id: 'html',
  name: 'HTML',
  description: 'HyperText Markup Language - The standard markup language for web pages',
  color: '#E34F26',
  icon: require('../../assets/languages/html.png'),
  categories: [
    {
      id: 'html_basics',
      title: '1️⃣ Basics & Syntax',
      description: 'Learn HTML fundamentals and syntax',
      icon: 'code-outline',
      examples: [
        {
          id: 'html_structure',
          title: '1.1 HTML Structure',
          description: 'Basic HTML document structure',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
          explanation: '`<!DOCTYPE html>` → Declares the document as HTML5.\n`<html>` → Root element of the page.\n`<head>` → Contains metadata (title, styles, etc.).\n`<body>` → Holds visible content.\n`<h1>`, `<p>` → Define a heading and paragraph.'
        },
        {
          id: 'html_comments',
          title: '1.2 HTML Comments',
          description: 'Adding comments to HTML code',
          code: `<!-- This is a comment -->
<p>This is visible text.</p>

<!-- 
    Multi-line comment
    This won't be visible in the browser
-->`,
          explanation: '`<!-- comment -->` → Used for notes inside HTML, ignored by browsers.\nComments can be single or multiple lines.\nHelps in documenting code and temporarily disabling content.'
        },
        {
          id: 'html_text_elements',
          title: '1.3 Common Text Elements',
          description: 'Basic text formatting elements',
          code: `<p>This is a paragraph.</p>
<b>Bold Text</b>
<i>Italic Text</i>
<u>Underlined Text</u>
<strong>Important Text</strong>
<em>Emphasized Text</em>
<mark>Highlighted Text</mark>
<small>Smaller Text</small>
<del>Deleted Text</del>
<ins>Inserted Text</ins>
<sub>Subscript</sub> and <sup>Superscript</sup>`,
          explanation: '`<p>` → Defines a paragraph.\n`<b>`, `<strong>` → Make text bold (`<strong>` has semantic importance).\n`<i>`, `<em>` → Make text italic (`<em>` emphasizes meaning).\n`<mark>` → Highlights text.\n`<small>` → Makes text smaller.\n`<del>`, `<ins>` → Show document changes.'
        },
        {
          id: 'html_breaks',
          title: '1.4 Line Break & Horizontal Rule',
          description: 'Adding breaks and horizontal lines',
          code: `<p>First line<br>Second line</p>
<hr>
<p>Another section</p>

<!-- Line break with space -->
<p>First paragraph</p>
<br>
<p>Second paragraph</p>`,
          explanation: '`<br>` → Inserts a line break within text.\n`<hr>` → Creates a horizontal line, used to separate content sections.'
        },
        {
          id: 'html_data_types',
          title: '1.5 Data Types',
          description: 'Common HTML data types and their usage',
          code: '',
          table: {
            headers: ['Data Type', 'Example', 'Description'],
            rows: [
              ['Text', '<p>Hello</p>', 'Regular text inside a paragraph'],
              ['Number', '<input type="number">', 'Input field for numbers'],
              ['Boolean', '<input type="checkbox">', 'Checkbox for true/false values'],
              ['List', '<ul><li>Item 1</li></ul>', 'Unordered list of items'],
              ['Object', '<div class="box"></div>', 'Represents a section or block']
            ]
          },
          explanation: 'HTML elements can handle different types of data:\n- **Text**: Most common type, used in paragraphs, headings\n- **Numbers**: Used in forms and inputs\n- **Boolean**: For checkboxes and toggles\n- **Lists**: For ordered and unordered collections\n- **Objects**: Complex elements containing other elements'
        }
      ]
    }
  ]
}; 