const StatusMessage = ({winner, isONext, squares}) => {

    const noMovesLeft = squares.every((squareValue) => squareValue !== null);
    const currentPlayer = isONext ? 'O' : 'X';
    //const statusMessage = winner ? `Winner is ${winner}` : `Current player is ${currentPlayer}`;

    const renderStatusMessage = () => {
        if(winner)
        {
            return <>
                Winner is {' '} 
                <span className={isONext ? 'text-orange' : 'text-green'}>
                    {winner}
                </span>!
            </>
        }
        else if (!winner && noMovesLeft)
        {
            return <>TIED!</>
        }
        else if (!winner && !noMovesLeft)
        {
            return <>
                Current player is{' '} 
                <span className={isONext ? 'text-orange' : 'text-green'}>
                    {currentPlayer}
                </span>
            </>
        }

        return null;
    }
    return <h2 className="status-message">{renderStatusMessage()}</h2>
}

export default StatusMessage;