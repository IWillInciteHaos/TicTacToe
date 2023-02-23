
const Square = ( { value, onClick, isWinningSquare } ) => {
    const colorClass = value === 'X' ? 'text-green' : 'text-orange';
    const winIsAWin = isWinningSquare ? 'winning' : '';
    return (
        <button 
            type="button" 
            className={`square ${colorClass} ${winIsAWin}`} 
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square;