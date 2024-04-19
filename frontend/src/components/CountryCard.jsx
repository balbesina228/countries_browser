import { Card } from 'antd';

function CountryCard() {

  return (
    <div>
    <Card
      title={
        <div>
          <img src="https://flagcdn.com/w320/ru.png"/>
          <span>Russia</span>
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
