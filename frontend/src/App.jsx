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
    axios.get("http://localhost:8000/countries").then(r => {
      console.log(`r=${r}`)
      const countriesResponse = r.data
      const menuItems = [
        getItem('Countries list', 'g1', null,
          countriesResponse.map(c => {
            {label: c.name}
          }),
          'group'
        )
      ]
      setCountries(menuItems)
    })
  }

  useEffect(() => {
    fetchCountries()
  }, []);

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
    </div>
  );
};
export default App;