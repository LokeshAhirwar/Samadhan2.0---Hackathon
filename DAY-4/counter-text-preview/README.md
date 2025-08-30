# React State Management Demo

## Counter + Live Text Preview

This project demonstrates React's `useState` hook for state management with two main features:

### 🎯 Features

1. **Counter Component**
   - Increment, decrement, and reset functionality
   - Real-time state updates
   - Animated counter display

2. **Live Text Preview**
   - Real-time text input handling
   - Live preview of typed text
   - Character and word count statistics
   - Controlled input component

### 🚀 Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **useState Hook** for state management
- **Modern CSS** with gradients and animations

### 📚 Learning Objectives

This project covers:

- **useState Hook**: Managing component state
- **Event Handling**: onClick and onChange events
- **Controlled Components**: Input handling in React
- **State Updates**: Real-time UI updates
- **TypeScript**: Type safety in React components

### 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload on changes

### 🎨 Key Concepts Demonstrated

#### useState Hook
```typescript
const [count, setCount] = useState(0)
const [text, setText] = useState('')
```

#### Event Handling
```typescript
const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value)
}
```

#### Controlled Input
```typescript
<input
  value={text}
  onChange={handleTextChange}
  placeholder="Type something here..."
/>
```

### 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Styling for the application
├── main.tsx         # React entry point
└── vite-env.d.ts    # Vite type definitions
```

### 🎯 State Management Flow

1. **Counter State**: 
   - Initial value: 0
   - Updates via increment/decrement/reset functions
   - Triggers re-render on each change

2. **Text State**:
   - Initial value: empty string
   - Updates on every keystroke
   - Provides live preview and statistics

### 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### 🎨 Styling Features

- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive design for mobile devices
- Glassmorphism effects
- Hover animations on buttons

### 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

### 🚀 Next Steps

After understanding this project, you can explore:
- **useEffect Hook**: Side effects and lifecycle
- **useReducer Hook**: Complex state management
- **Custom Hooks**: Reusable state logic
- **Context API**: Global state management

---

**Happy Coding! 🎉**
