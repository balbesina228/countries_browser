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

  const onClick = (e) => {
    console.log('click ', e);
  };
  useEffect(() => {
  const fetchCountries = async () => {
    await axios.get("http://127.0.0.1:8000/countries").then(r => {
      const countriesResponse = r.data
      console.log(`countriesResponse=${countriesResponse}`)

      const menuItems = countriesResponse.map(c => {
        return getItem(c.name.common, c.name.common, null, null);
      });

      setCountries(menuItems)
    })
  }

    fetchCountries()
  }, []);

  return (
  <>
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
    </div>
    <CountryCard/>
    </>
  );
};
export default App;