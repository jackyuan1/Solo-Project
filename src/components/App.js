import React, { useState, useEffect } from 'react';
import Checking from './checking.js'
import Header from './Header'
import Stocks from './Stocks'
import axios from 'axios';

const App = () => {
    //a react hook
        //destructuring
        //declaring a key in state 'count' and a value '0'
        //setCount is a function that can change state
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [stocks, setStocks] = useState([])
    const toggleDropdown = () => {
        setOpen(!open)
    };
    //add a ticker to stocks components
    const addTicker = () => {
        console.log('trying to add ticker idk')
        const input = document.querySelector('.ticker1')
        console.log(input.value)
        axios.post('./../../api/stocks', {ticker: input.value})
        .then(res => {
            console.log('in appjs', res)
            setStocks(stocks.concat(res.data))
            // console.log(stocks)
        })
        .catch(err=> console.log({err: 'err in addTicker'}))
        // .then(data => {
        //     const {ticker, volume, price, day_change} = res.data[0]
        //     console.log(ticker, volume, price)
        //     console.log('app.js', data)
        // })
    }
//deletes a stock in the stocks component
    const deleteTicker = (ticker) => {
        console.log('delete', ticker)
        setStocks((arg)=>arg.filter(el=>{
            return el.ticker!==ticker
        }))
    }

    //Like componentdidmount/update
    useEffect(() => {
        console.log('State has updated!')
    })

        return (
            <div className='container'>
                <Header 
                toggleDropdown = {toggleDropdown}
                addTicker ={addTicker}
                open = {open}
                />
                <Stocks 
                stocks = {stocks}
                deleteTicker = {deleteTicker}
                />
            </div>
        )
    }
    
    // <h2 style={{float:"left", position:'absolute', margin:'30px'}}>Stock List</h2>
  // <button onClick={()=>setCount(count +1)}>Random Counter</button>
  // <Checking apple = 'test prop'/>

export default App;