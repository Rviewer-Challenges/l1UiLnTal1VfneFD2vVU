import './styles/home-page.css'
import { Link, Outlet } from 'react-router-dom'

import { opetarionSelector } from './helpers/operations/operationsStorage'
function App() {

  const typeOfMetric = new opetarionSelector()

  const metrics = typeOfMetric.getMetricTypes()

  return (
    <>

      <h1> Unit Converter App </h1>

      <h4> Welcome to unit converter app </h4>

      Here you going to find several units that allows to convert :

      <ul>
        {
          metrics.map((metric) => (
            <li key={metric.type}>.- {metric.type}</li>
          )
          )
        }
      </ul>


      <div className="dropdown">
        <button className="dropbtn"> Units to convert</button>
        <div className="dropdown-content">

          {
            metrics.map((metric) => (
              <div key={metric.type}>
                <Link to={metric.path}>{metric.type}</Link>
              </div>
            ))
          }

        </div>
      </div>

      <Outlet />

    </>
  )
}

export default App
