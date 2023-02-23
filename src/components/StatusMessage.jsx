const StatusMessage = ({winner, gamingBoard}) => {
    const {squares, isONext} = gamingBoard;
    const noMovesLeft = squares.every((squareValue) => squareValue !== null);
    const currentPlayer = isONext ? 'O' : 'X';
    //const statusMessage = winner ? `Winner is ${winner}` : `Current player is ${currentPlayer}`;

    const renderStatusMessage = () => {
        if(winner)
        {
            return <>
                <span className="text-purple">Winner is {' '}
                    <span className={isONext ? 'text-green' : 'text-orange'}>
                        {winner}
                    </span>!
                </span>
            </>
        }
        else if (!winner && noMovesLeft)
        {
            return <><span className="text-purple" style={{fontWeight: "bolder"}}>TIED!</span></>
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
    return <h2 className="status-message" >{renderStatusMessage()}</h2>
}

export default StatusMessage;