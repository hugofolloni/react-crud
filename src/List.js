const List = (props) => {

    const items = props.items 
    
    return ( 
        <div className="list-div">
            { items.map((items) => (
                <div className="single-item-div">
                    <h4> { items.ticker } </h4>
                    <h5> R${ (items.price * items.amount).toFixed(2) } </h5>
                    <span> Amount: { items.amount } </span>
                    <span> Average Price: { items.price } </span>
                    <span> Last Buy: {items.date } </span>
                </div>
            ))
        }
        </div>
     )
}
 
export default List;