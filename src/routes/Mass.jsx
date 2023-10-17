import React from 'react'
import Calculator from '../components/calculator/Calculator'

const Mass = () => {
    const metric = 'Mass'
    return (
        <div>

            <p>Mass</p>

            <Calculator
                mainMetric={metric}
            />

        </div>
    )
}

export default Mass