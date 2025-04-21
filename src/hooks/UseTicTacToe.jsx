import { useEffect, useState } from "react";

const useTicTacToe = () => {
    const initialBoard = () => Array(9).fill(null)
    const [board, setBoard] = useState(initialBoard)
    const[winnerPopup,setWinnerPopup]=useState(false)
    const[winner,setWinner]=useState('')
    const [isXNext, setIsXNext] = useState(true); //as the first turn is of X's
    const WinningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    useEffect(() => {
        console.log("the value of board in useeffect", board);
        const winner=calculateWinner(board)
        if(winner){
            setWinnerPopup(true)
            setWinner(winner)
        }
    }, [board])
    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < WinningPatterns.length; i++) {
            const [a, b, c] = WinningPatterns[i];
            console.log("this is the pattern we are calculating", WinningPatterns[i]);
            if (currentBoard[a] &&
                currentBoard[a] === currentBoard[b] && currentBoard[c]) {
                console.log(currentBoard[a], 'aaaa');
                console.log(currentBoard[b], currentBoard[c]);
                console.log(currentBoard[a], "this is what we are returning");
                return currentBoard[a]
            }
        }
        return null;
    }
    const handleClick = (index) => {
        console.log(index, "this is the index");
        const winner = calculateWinner(board)
        console.log("board value", board);
        console.log(winner,"here is the winner");
        // if the player is winner or board has occupied we need to return.
        if (winner || board[index]) {
            return 
        }
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }
    const getStatus = () => {
        console.log("in get status function");
        const winner=calculateWinner(board)
        if(winner){
            return `Player ${winner}wins!`
        }
        if(board.includes(null)){
            console.log("this does not includes null");
            return `Player ${isXNext ?"X":"O"} turn`
        }
        else{
            console.log("This does not includes null");
            return `It's a draw`
        }
    }
    const resetGame = () => {
        setBoard(initialBoard)
        setWinner("")
        setWinnerPopup(false)
        setIsXNext(true)
    }
    return { board, handleClick, calculateWinner, getStatus, resetGame,setWinnerPopup,winnerPopup,winner }
}
export default useTicTacToe;