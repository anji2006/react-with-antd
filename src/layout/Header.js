import React from 'react';

import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

import {Layout, Menu} from 'antd';
import {useSelector} from 'react-redux';

const HeaderContent = () => {
  const navigate = useNavigate();
  const theme = useSelector(store => store.theme);

  const logoutFun = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  const onClickNavItemHandler = e => {
    navigate(`${e.key}`);
  };

  const items1 = [
    {
      key: 'users',
      label: 'users',
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
    },
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'contacts',
      label: 'Contacts',
    },
    {
      key: 'logout',
      label: (
        <button type="button" onClick={logoutFun}>
          Logout
        </button>
      ),
    },
  ];

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <Menu
        theme={theme}
        mode="horizontal"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        defaultSelectedKeys={['home']}
        items={items1}
        onClick={onClickNavItemHandler}
      />
    </Layout.Header>
  );
};

export default HeaderContent;
