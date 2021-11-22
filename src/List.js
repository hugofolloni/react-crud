const List = (props) => {

    const items = props.items 
    
    return ( 
        <div className="list-div">
            { items.map((items) => (
                <div className="single-item-div">
                   <p> {items.ticker}, {items.amount}, {items.price}, {items.date} </p>
                </div>
            ))
        }
        </div>
     )
}
 
export default List;