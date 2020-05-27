import React from 'react'

export default function Rainbow(slot) {
    const randBgColor = ['red', 'green', 'blue']
    const classBg = 'mantap'
    console.log("randBgColor = ", randBgColor.length)
    return (
        <div>
           <p>rainbow.js {classBg}</p> 
        </div>
    )
}
