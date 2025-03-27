import React from "react";
import { useState } from "react";

function Board({ value, onSquareClick }) {
    return <button onClick={onSquareClick} className="cursor-pointer size-20 border" >{value}</button>;
    // return <button className="cursor-pointer size-20 border" >{value}</button>;
}

export default function Square() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function squareClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
    }
    return (
        <>
            <div className="board-row" >
                <Board value={squares[0]} onSquareClick={() => squareClick(0)} />
                <Board value={squares[1]} onSquareClick={() => squareClick(1)} />
                <Board value={squares[2]} onSquareClick={() => squareClick(2)} />
            </div>
            <div className="board-row" >
                <Board value={squares[3]} onSquareClick={() => squareClick(3)} />
                <Board value={squares[4]} onSquareClick={() => squareClick(4)} />
                <Board value={squares[5]} onSquareClick={() => squareClick(5)} />
            </div>
            <div className="board-row" >
                <Board value={squares[6]} onSquareClick={() => squareClick(6)} />
                <Board value={squares[7]} onSquareClick={() => squareClick(7)} />
                <Board value={squares[8]} onSquareClick={() => squareClick(8)} />
            </div>
        </>
    );
}