import React from 'react'

function InputBox({
    label,
    amount,
    amountdisabled=false,
    currencySelected={usd},
    currencyOptions=[],
    currencydisabled=false,
    onAmountChange,
    onCurrencyChange,   
    className=''

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div>
            <label>{label}</label>
            <input type='number'
            value={amount}
            placeholder={amount}
            disabled={amountdisabled}
            onChange={(e)=>{
                onAmountChange && onAmountChange(Number(e.target.value))
            }}>  
            </input>
        </div>
        <div>
            <p>Currency Type</p>
            <select
            value={currencySelected}
            onChange={ (e)=>{onCurrencyChange && onCurrencyChange(Number(e.target.value ))

            }}
            disabled={currencydisabled}
            >
                {currencyOptions.map((currency)=>{
                    <option key={currency}
                    value={currency}>{currency}</option>
                })}

            </select>
        </div>
    </div>
  )
}


export default InputBox