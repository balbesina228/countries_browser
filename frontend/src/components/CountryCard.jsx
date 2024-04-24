import {Card} from 'antd';

function CountryCard(props) {
  const { country } = props
  console.log(country)

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
      <p>odin</p>
      <p>dwa</p>
      <p>three</p>
    </Card>
    </div>
  )
}

export default CountryCard
