import react, { useState } from 'react'
import './calculator.css'

export default function Calculator() {
  const [amount, setAmount] = useState(0)
  const [tip, setTip] = useState(15)
  const [people, setPeople] = useState(1)

  const message = people > 1 ? <p className='label-person'>Per person</p>: null
  return (
        <form className='form'>
            <section className='inputs'>
                <div>
                    <label htmlFor="amount-input">Bill</label><br/>
                    <input
                        id = "amount-input"
                        min="0" 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value )}
                        />
                </div>
                <div>
                    <label htmlFor="tip-percent-input">Tip %</label><br/>
                    <input 
                        id = "tip-percent-input"
                        type="number"
                        min="0"
                        value={tip}
                        onChange={(e) => setTip(e.target.value )}
                    />
                </div>
                <div>
                    <label htmlFor="people-input">Number of people</label><br/>
                    <input 
                        id = "people-input"
                        type="number"
                        min="1"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </div>
            </section>
            <section className='results'>
                <p>Tip</p>
                {message}
                <h1>${(amount*(tip/100)).toFixed(2)}</h1>
                <p>Total</p>
                {message}
                <h1>${((parseFloat(amount)+(amount*(tip/100)))/people).toFixed(2)}</h1>
            </section>
        </form>
  )
}
