import {Card} from 'antd';
import ErrorBoundary from './ErrorBoundary.jsx';

function CountryCard(props) {
  const { country } = props
  const currency_name = Object.values(country[0].currencies)[0].name
  const currency_symbol = Object.values(country[0].currencies)[0].symbol

  return (
    <div>
    <Card
      title={
        <div className="flex items-center gap-3">
          <img src={country[0].flags.png}
            width="100" height="70"/>
          <p>{country[0].name.common}</p>
        </div>
      }
      extra={<a href="#">More</a>}
      style={{
        width: 600,
      }}
  >
    <ErrorBoundary>
        <p>Official name: {country[0].name.official}</p>
        <p>Currency: {currency_name}, {currency_symbol}</p>
        <p>three</p>
    </ErrorBoundary>
    </Card>
    </div>
  )
}

export default CountryCard
