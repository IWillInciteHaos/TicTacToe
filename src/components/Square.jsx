const Square = ( { value, onClick } ) => {
    //onClick()
    return <button type="button" className="square" onClick={onClick}>
    {value}
    </button>
}

export default Square;