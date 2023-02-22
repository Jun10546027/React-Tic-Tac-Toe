import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Board from './Board'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className="flex flex-col gap-4">
            <App />
            <Board len={3} />
        </div>
    </React.StrictMode>
)
