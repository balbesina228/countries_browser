import React, {useEffect, useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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

  const fetchCountries = () => {
    axios.get("http://127.0.0.1:8000/countries").then(r => {
      const countriesResponse = r.data
      const menuItems = [
        getItem('Countries list', 'g1', null,
          countriesResponse.map(c => {
            return {label: c.name}
          })
        )
      ]
      setCountries(countriesResponse)
    })
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={countries}
    />
  );
};
export default App;