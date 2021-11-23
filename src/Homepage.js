import React, { useEffect, useState } from "react"
import List from "./List"

const Homepage = () => {
    const [items, setItems] = useState(null)

    const url = 'http://localhost:8000/data'

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItems(data)
        })
    }, [url])


    return ( 
        <div className="homepage-div">
            <div className="list">
                {items && <List items={items} />}
            </div>
        </div>
     );
}
 
export default Homepage;