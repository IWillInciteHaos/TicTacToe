const GameHistory = ({ history, moveTo, currentMove }) =>
{
    //console.log('fasdsgs');
    return <div className="history-wrapper">
        <ul className="history">
        {
            history.map( (_, index) => (
                <li key={index}>
                    <button 
                        type="button" 
                        className={`btn-move ${currentMove === index ? 'active' : ''}`}
                        onClick={ () => moveTo(index)}>{
                    index === 0 ? 'New game' : `Move is ${index}`
                    }</button>
                </li>
        ))}
        </ul>
    </div>
    //console.log('here2');

}

export default GameHistory;