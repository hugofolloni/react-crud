import React, { useState } from "react"

const Create = () => {

    const [ticker, setTicker] = useState("")
    const [amount, setAmount] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = () => {
        var data = new Date()
        var date = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + " - " + data.getHours() + ':' + data.getMinutes()
        fetch("http://localhost:8000/data")
        .then(
            res => res.json()
        )
        .then(data => {
            const dataSize = data.length - 1
            var alreadyExists = false;
            var positionOnArray = null;
            var id = null;
            for(var i = 0; i <= dataSize; i++) {
                console.log(data[i].ticker)
                if(data[i].ticker === ticker) {
                    alreadyExists = true;
                    positionOnArray = i;
                    id = data[i].id;
                }
            }
            console.log(alreadyExists)
            if(alreadyExists === false) {
                fetch("http://localhost:8000/data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ticker: ticker,
                        amount: Math.floor(amount),
                        price: parseFloat(price).toFixed(2),
                        date: date
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            }
            else{
                var newAmount = Math.floor(parseInt(amount)) + parseInt(data[positionOnArray].amount)
                var averagePrice = (((parseFloat(price) * parseInt(amount)) + (parseFloat(data[positionOnArray].price) * parseInt(data[positionOnArray].amount))) / newAmount).toFixed(2)
                fetch(`http://localhost:8000/data/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ticker: ticker,
                        amount: newAmount,
                        price: averagePrice,
                        date: date
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            }
               
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
            <div className="container">
                <h3>Add a purchase</h3>
                <div className="inputs-area">
                    <h4>Ticker</h4>
                    <input type="text" placeholder='Ticker' onChange={ (e) => setTicker(e.target.value.toLocaleUpperCase()) } />
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