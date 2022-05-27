import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const root = createRoot(document.getElementById('root')!);

function App() {
  useEffect(() => {
    console.log('index.tsx..()');
  }, [])
  
  return <main>Hello World!</main>;
}

root.render(<App/>)