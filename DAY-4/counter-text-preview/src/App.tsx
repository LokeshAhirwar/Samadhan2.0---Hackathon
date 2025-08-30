import { useState } from 'react'
import './App.css'

function App() {
  // Counter state
  const [count, setCount] = useState(0)
  
  // Text input state
  const [text, setText] = useState('')
  
  // Counter functions
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  
  // Text input handler
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="app">
      <h1>React State Management Demo</h1>
      <p>useState Hook Examples</p>
      
      {/* Counter Section */}
      <div className="section">
        <h2>Counter Component</h2>
        <div className="counter">
          <button onClick={decrement} className="btn btn-danger">-</button>
          <span className="count">{count}</span>
          <button onClick={increment} className="btn btn-success">+</button>
        </div>
        <button onClick={reset} className="btn btn-secondary">Reset</button>
      </div>
      
      {/* Live Text Preview Section */}
      <div className="section">
        <h2>Live Text Preview</h2>
        <div className="text-input-container">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Type something here..."
            className="text-input"
          />
        </div>
        <div className="preview">
          <h3>Live Preview:</h3>
          <div className="preview-text">
            {text || 'Start typing to see the preview...'}
          </div>
        </div>
        <div className="text-stats">
          <p>Character count: {text.length}</p>
          <p>Word count: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="instructions">
        <h3>What's happening here?</h3>
        <ul>
          <li><strong>useState Hook:</strong> We're using useState to manage component state</li>
          <li><strong>Counter:</strong> State updates with increment, decrement, and reset functions</li>
          <li><strong>Text Input:</strong> Controlled input with live preview and character/word counting</li>
          <li><strong>Event Handling:</strong> onChange events update state in real-time</li>
        </ul>
      </div>
    </div>
  )
}

export default App
