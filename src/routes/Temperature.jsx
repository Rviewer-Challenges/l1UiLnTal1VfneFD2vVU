import React from 'react'
import Calculator from '../components/calculator/Calculator'

const temperature = () => {
    return (
        <div>

            <p> temperature</p>
            
            <Calculator
            mainMetric='Temperature'
            />

        </div>
    )
}

export default temperature