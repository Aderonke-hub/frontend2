import React from 'react'

const Btn = ({title,color,text}) => {
    console.log(title,color);
    
  return (
    <div>
        <button className={`$(color)$(text)`}>
        {title}</button>
    </div>
  )
}

export default Btn