import React, { useEffect, useState } from 'react'
import './Quote.css'

const Quote = () => {
  const [quote, setQuote] = useState('')

useEffect(() => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/random?' + new Date().getTime())}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const parsed = JSON.parse(data.contents)
      setQuote(`${parsed[0].q} — ${parsed[0].a}`)
    })
    .catch(err => {
      console.error('Error fetching quote:', err)
      setQuote('Failed to load quote.')
    })
}, [])


  return (
    <div className='container'>
      <p>{quote}</p>
    </div>
  )
}

export default Quote
