import React, { useState } from 'react'
import { errors } from '../helpers/errors/errors'
import { opetarionSelector } from '../helpers/operations/operationsStorage'

export const useTyping = (mainMetric) => {

    const [metric, setMetric] = useState('select a metric')
    const [metricToConvert, setMetricToConvert] = useState('select metric to convert')
    const [metricConvertion, setConvertion] = useState(0)

    const [errorWindow, setErrorWindow] = useState(true)

    let err = new errors();

    const locateMetric = new opetarionSelector();
    const metricUnity = locateMetric.getMetricUnits(mainMetric);

    const onTyping = (e) => {

        const inputValue = e.target.value.trim();

        if (inputValue === "") {

            err.addNewError(404, { message: 'Input is empty. Please enter a number.' });
            setErrorWindow(!errorWindow);

        } else if (isNaN(inputValue)) {

            err.addNewError(404, { message: 'Input is not a valid number. Please try again.' });
            setErrorWindow(!errorWindow);
            setConvertion(0)

        } else {
            
            const numericValue = parseFloat(inputValue.replace(/[^0-9]/g, ''));
            setConvertion(numericValue);
            
        }
        
    }
    
    const calcConvertion = () => {
        

        matcher();
        
        let resultMetric = locateMetric.metricConverFormula(mainMetric, metric, metricToConvert)

        let result = resultMetric(metricConvertion)

        setConvertion(result)
        return result;

    }

    const matcher = () => {

        if (metric === 'select a metric') {
            setMetric('Kilometer')
        }
    
        if (metricToConvert === 'select metric to convert') {
            setMetricToConvert('Kilometer')
        }
        
    }
    

    return {
        onTyping,
        calcConvertion,
        errorWindow,
        metricConvertion,
        setErrorWindow,
        setMetric,
        metricUnity,
        metricToConvert,
        setMetricToConvert,
    }
}
