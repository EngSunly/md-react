import './App.css';
import ReactMarkdown from 'react-markdown';
import {useState} from 'react';
function App() {
  const [text,settext] = useState(
  '## markdown preview \n### subheading')
  return (
    <div>
    <h1 className='title'>Markdown Preview</h1>
    <div className='grid'>
      <div className="editor">
        <h2 className='border'>Editor</h2>
      <textarea className='input'
      value={text} 
      onChange={(e)=> settext(e.target.value)}  >
      </textarea>
      </div>
      <div class="view">
        <h2 className='border'>Preview</h2>
      <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>

    </div>
  );
}

export default App;
