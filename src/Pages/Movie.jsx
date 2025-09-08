import React from 'react'

function Movie(props) {
  return (
    <div> 
        <h1>Movie: {props.title} ({props.year})</h1>

    </div>
  )
}

export default Movie

