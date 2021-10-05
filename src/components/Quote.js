import React from 'react'

function Quote({quoteData}) {
  return (
    <div className="quote-container">
      <p>&ldquo;{quoteData.quoteText}&rdquo;</p>
    </div>
  )
}

export default Quote

/* 
data.data.map(data=>{
  <Quote {data}/>
})
*/
