import './App.css';
import ReactMarkdown from 'react-markdown';
import {useState} from 'react';
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
  `
function App() {
  const [text,settext] = useState(defaultText)

  return (
    <div>
    <h1 className='title'>Markdown Preview</h1>
    <div className='grid'>
      <div className="editor">
        <h2 className='border'>Editor</h2>
      <textarea className='input' id="editor"
      value={text} 
      onChange={(e)=> settext(e.target.value)}  >
      </textarea>
      </div>
      <div class="view">
        <h2 className='border'>Preview</h2>
      <ReactMarkdown id="preview">{text}</ReactMarkdown>
      </div>
    </div>

    </div>
  );
}

export default App;
