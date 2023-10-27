
import './styles.css'
import { useTyping } from '../../hooks/useTyping'

const Calculator = ({ mainMetric } = props) => {

  const {
    onTyping,
    calcConvertion,
    errorWindow,
    metricConvertion,
    setErrorWindow,
    setMetric,
    metricUnity,
    metricToConvert,
    setMetricToConvert,
  } = useTyping(mainMetric)


  return (

    <>
      {
        !errorWindow
          ? <GenericError
            errorState={errorWindow}
            setErrorWindow={() => { setErrorWindow(!errorWindow) }}
            err={err}
          />
          : <>
            <input
              type='text'
              placeholder='0'
              pattern="^\d+$"
              value={metricConvertion}
              onInput={(e) => onTyping(e)}
              className='calculator-input'
            /> <br />
            <label>

              <select
                className='calculator-select'
                onChange={e => setMetric(e.target.value)}
              // value={metric}
              >

                {
                  metricUnity.map((metric) => (

                    <option
                      className='calculator-option'
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
                className='calculator-select'
                onChange={e => setMetricToConvert(e.target.value)}
                value={metricToConvert}
              >
                {
                  metricUnity.map((metric) => (

                    <option
                      className='calculator-option'
                      key={metric}
                      value={metric} >
                      {metric}
                    </option>

                  ))
                }
              </select><br />
            </label>

            <input
              className='calculator-input'
              placeholder='result converted'
              disabled={true}
              value={metricConvertion}
            /><br />

            <button
              className='calculator-button'
              onClick={calcConvertion} type="button">Convert</button>
          </>
      }

    </>
  )
}

export default Calculator