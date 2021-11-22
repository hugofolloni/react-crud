import React, { useState } from "react"

const Create = () => {

    const [ticker, setTicker] = useState("")
    const [amount, setAmount] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = () => {
        const data = new Date()
        const date = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + " - " + data.getHours() + ':' + data.getMinutes()
        const singlePlayer = {ticker, amount, price, date}

        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(singlePlayer)
        })
        .then(() => {
            setTicker("");
            setAmount("");
            setPrice("");
        })
        .then(() => {
            window.location.href='./'
        })
    }

    return ( 
        <div className='create-div'>
            <a href="/">Homepage</a>
            <div className="container">
                <h3>Add a purchase</h3>
                <div className="inputs-area">
                    <h4>Ticker</h4>
                    <input type="text" placeholder='Ticker' onChange={ (e) => setTicker(e.target.value) } />
                </div>
                <div className="inputs-area">
                    <h4>Amount</h4>
                    <input type="number" placeholder='Amount' min='0' onChange={ (e) => setAmount(e.target.value) } />
                </div>
                <div className="inputs-area">
                    <h4>Price</h4>
                    <input type="number" placeholder='Price' step="0.01"  min='0' onChange={ (e) => setPrice(e.target.value) }/>
                </div>
                <button onClick={ handleSubmit }>Submit</button>
            </div>
        </div>
     );
}
 
export default Create;