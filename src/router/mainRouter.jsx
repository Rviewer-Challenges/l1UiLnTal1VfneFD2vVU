import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import ElectricIntensity from '../routes/ElectricIntensity'
import DistanceMeasurement from '../routes/DistanceMeasurement'
import Mass from '../routes/Mass'
import Temperature from '../routes/Temperature'
import Time from '../routes/Time'
import NotFound from '../routes/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children:
            [
                {
                    path: 'DistanceMeasurement',
                    element: <DistanceMeasurement />,
                    errorElement: <NotFound />
                },
                {
                    path: 'Mass',
                    element: <Mass />,
                    errorElement: <NotFound />
                },
                {
                    path: 'ElectricIntencity',
                    element: <ElectricIntensity />,
                    errorElement: <NotFound />
                },
                {
                    path: 'Temperature',
                    element: <Temperature />,
                    errorElement: <NotFound />
                },
                {
                    path: 'Time',
                    element: <Time />,
                    errorElement: <NotFound />
                }
            ]
    },
])