import React from 'react'


const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const Chessboard = () => {
    const board = [];

    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const index = i + j+2;
            board.push(<div className={`w-[75px] h-[75px]  ${index % 2 === 1 ? "bg-white" : "bg-green-500"} `} >{verticalAxis[i] + horizontalAxis[j]}</div>);
        }
    }

    return (
        <div
            className='w-[600px] h-[600px] bg-emerald-300 flex flex-wrap'
        >{board}</div>
    )
}

export default Chessboard