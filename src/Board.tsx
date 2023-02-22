import { randomUUID } from 'crypto'
import { useState } from 'react'

interface ISquare {
    value: string
    onSquareClick: () => void
}

function calculateWinner(squares: any[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

function Square({ value, onSquareClick }: ISquare) {
    return (
        <button
            className="h-14 w-14 border-2 border-black bg-white text-black hover:bg-gray-200"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

export default function Board({ len }: { len: number }) {
    const [squares, setSquares] = useState(Array(len * len).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) return
        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    return (
        <>
            <div className="status">{status}</div>
            <div
                className="grid w-24 grid-flow-col"
                style={{
                    gridTemplateRows: `repeat(${len}, minmax(0, 1fr))`,
                }}
            >
                {squares.map((item, index) => (
                    <Square
                        key={crypto.randomUUID()}
                        value={squares[index]}
                        onSquareClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </>
    )
}
