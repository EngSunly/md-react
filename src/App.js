import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
// defaultText need a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
const defaultText = `
# Heading 
## Sub-heading
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
* apples
* oranges
* pears
Numbered list:
1. apples
2. oranges
3. pears
The rain---not the reign---in
Spain.
  *[Eng Sunly](https://www.freecodecamp.org/engsunly)*
  > Block Quotes!
  ![image](https://www.freecodecamp.org/news/content/images/2021/05/freecodecamp-org-gravatar.jpeg)
  **Bolded Text**
  
  \`<div></div>\`
  \`\`\`
  // this is multi-line code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  - [x] this is a complete item
  - [ ] this is an incomplete item
  - [x] @mentions, #refs, [links](),
  **formatting**, and <del>tags</del>
  supported
  - [x] list syntax required (any
  unordered or ordered list
  supported)
  1. First ordered list item
  2. Another item
  - Unordered sub-list.
  1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
  4. And another item.
  NOTE: The actual numbers don't matter. Just that it's a number
  1. Ordered list item
  2. Another item
  > Blockquote
  >
  > Blockquote
  Table:
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  | Header | Title |
  | Paragraph | Text |
  
`
function App() {
  const [text, settext] = useState(defaultText)

  return (
    <div>
      <h1 className='title'>Markdown Preview</h1>
      <div className='grid'>
        <h2 className='border'>Editor</h2>
        <div className="editor">
          <textarea className='input' id="editor"
            value={text}
            onChange={(e) => settext(e.target.value)}  >
          </textarea>
        </div>
        <h2 className='border'>Preview</h2>
        <div id="preview" class="view">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>

    </div>
  );
}

export default App;
