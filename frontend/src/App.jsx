import React, {useEffect, useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import CountryCard from "./components/CountryCard.jsx"
import {Menu, Spin} from 'antd';
import axios from 'axios';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('USA')
  const [countryData, setCountryData] = useState(null)


  const onClick = (e) => {
    console.log('click ', e);
    setCountryName(e.key);
  };
  useEffect(() => {
  const fetchCountries = async () => {
    await axios.get("http://127.0.0.1:8000/countries").then(r => {
      const countriesResponse = r.data
      const menuItems = countriesResponse.map(c => {
        return getItem(c.name.common, c.name.common, null, null, null);
      });

      setCountries(menuItems)
    })
  }

    fetchCountries()
  }, []);

  const fetchCountry = async () => {
    await axios.get(`http://127.0.0.1:8000/countries/${countryName}`).then(r => {
      setCountryData(r.data)
    })
  }

  useEffect(() => {
    setCountryData(null)
    fetchCountry()
  }, [countryName]);

  return (
  <div className="flex">
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={countries}
      className="h-screen overflow-scroll"
    />
    <div className="mx-auto my-auto">
      {countryData ? <CountryCard country={countryData}/> : <Spin size="large"/>}
    </div>
  </div>
  );
};
export default App;