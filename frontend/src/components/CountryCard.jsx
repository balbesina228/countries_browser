import {Card} from 'antd';

function CountryCard(props) {
  const { country } = props
  let currency_name = '[Info not found]';
  let currency_symbol = '[Info not found]';
  let population = (country[0].population).toLocaleString('ru');


  if (country[0].currencies) {
    currency_name = Object.values(country[0].currencies)[0].name;
    currency_symbol = Object.values(country[0].currencies)[0].symbol;
  }

  return (
    <div>
    <Card
      title={
        <div className="flex mx-auto my-auto items-center gap-5">
          <img src={country[0].flags.png}
            width="100" height="70"/>
          <p className="">{country[0].name.common}</p>
        </div>
      }
      style={{
        width: 500,
      }}
  >
      <p>Official name: {country[0].name.official}</p>
      <p>Capital: {country[0].capital}</p>
      <p>Currency: {currency_name} - {currency_symbol}</p>
      <p>Population: {population}</p>
      <p><a href={country[0].maps.googleMaps}>Click here to see the map of this country</a></p>
    </Card>
    </div>
  )
}

export default CountryCard
