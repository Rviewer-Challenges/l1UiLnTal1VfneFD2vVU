import { render } from '@testing-library/react'
import Calculator from '../components/calculator/Calculator'

test('esta prueba no deve fallar', () => {
    const { container } = render(<Calculator />)
  
    expect(container).toMatchSnapshot()

})