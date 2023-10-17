import React, { useState } from 'react'

import GenericError from '../Error/GenericError'

import { errors } from '../../helpers/errors/errors'
import { opetarionSelector } from '../../helpers/operations/operationsStorage'

const Calculator = ({ mainMetric } = props) => {

  const [metric, setMetric] = useState('select a metric')
  const [metricToConvert, setMetricToConvert] = useState('select metric to convert')
  const [metricConvertion, setConvertion] = useState()

  const [errorWindow, setErrorWindow] = useState(true)

  let err = new errors();

  const locateMetric = new opetarionSelector();

  const metricUnity = locateMetric.getMetricUnits(mainMetric);

  const onTyping = (e) => {

    const inputValue = e.target.value;

    if (isNaN(inputValue)) {
      err.addNewError(404, { message: 'Value is not a number, please try again' })
    } else {
      // If it's a valid number, remove any non-numeric characters
      const numericValue = parseFloat(inputValue.replace(/[^0-9]/g, ''));
      setConvertion(numericValue);
    }

  }

  const matcher = () => {
    if (metric === 'select a metric') {
      setMetric('Kilometer')
    }
    if (metricToConvert === 'select metric to convert') {
      setMetricToConvert('Kilometer')
    }
  }

  const calcConvertion = () => {
    matcher();

    let resultMetric = locateMetric.metricConverFormula(mainMetric, metric, metricToConvert)
    let result = resultMetric(metricConvertion)

    setConvertion(result)
    return result;

  }

  return (

    <>
      {
        !errorWindow
          ? <GenericError
            setErrorWindow={() => { setErrorWindow(!errorWindow) }}
            err={err}
          />
          : <>
            <input
              type='text'
              placeholder='0'
              pattern="^\d+$"
              value={metricConvertion}
              onInput={onTyping}
            /> <br />
            <label>

              <select
                onChange={e => setMetric(e.target.value)}
              // value={metric}
              >

                {
                  metricUnity.map((metric) => (

                    <option
                      key={metric}
                      value={metric} >
                      {metric}
                    </option>

                  ))
                }

              </select>

            </label>
            <label>

              <select
                onChange={e => setMetricToConvert(e.target.value)}
                value={metricToConvert}
              >
                {
                  metricUnity.map((metric) => (

                    <option
                      key={metric}
                      value={metric} >
                      {metric}
                    </option>

                  ))
                }
              </select><br />
            </label>

            <input
              placeholder='result converted'
              disabled={true}
              value={metricConvertion}
            /><br />

            <button onClick={calcConvertion} type="button">Convert</button>
          </>
      }

    </>
  )
}

export default Calculator