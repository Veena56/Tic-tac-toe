import React, { useState } from 'react';
import useTicTacToe from '../hooks/UseTicTacToe';

const TicTacToe = () => {
    const { board, winner, resetGame, getStatus, handleClick, setWinnerPopup, winnerPopup } = useTicTacToe();
    return (
        <div>
            <div className='game'>
                <div className='status'>
                    {/* Player X turn */}
                    {getStatus()}
                    {/* <button className='resetBtn' onClick={resetGame}>Reset Game</button> */}
                </div>
                <div className='board'>
                    {/* need to render a board */}
                    {board.map((board, index) => (
                        <button key={index} className='cell' onClick={() => handleClick(index)}>{board}</button>
                    ))}
                </div>
            </div>
            {winnerPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <p>🎉 Winner is {winner}!</p>
                        <button onClick={resetGame}>New Game</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default TicTacToe;
