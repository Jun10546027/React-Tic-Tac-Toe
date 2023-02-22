import { useState } from 'react'
import f2eKing from './assets/Fox.jpg'

interface IMyButton {
    count: number
    onClick: () => void
}

export default function App() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <img
                src={f2eKing}
                className="h-16 animate-[spin_1s_infinite_linear] lg:h-24"
                alt="React logo"
            />
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

function MyButton({ count, onClick }: IMyButton) {
    return (
        <button
            onClick={onClick}
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
            Clicked {count} times
        </button>
    )
}
