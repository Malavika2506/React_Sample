import React from 'react'

function ShoppingList({items}) {
  return (
    <div>
        <h1>ShoppingList</h1>
        <ul>{items.map( (item, index)=>(
            <li key={index}>{item}</li>
        ) ) }</ul>
    </div>
    
  )
}

export default ShoppingList
