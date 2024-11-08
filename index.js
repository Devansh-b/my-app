import dummyProductData from './app.js'

import React from 'react'

function index(dummyProductData) {
  return (
    <div>
      <ul>
        {
           dummyProductData.map((Item,index)=>(
            console.log(item);
                <li key={index}>{Item}</li>
                
                
            ))
        }
      </ul>
    </div>
  )
}

export default index
