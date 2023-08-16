import React, {useState} from 'react';

import './themeSwitch.css';
import {Switch} from 'antd';

import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../redux/themeSlice';

const ThemeSwitch = () => {
  const theme = useSelector(store => store.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <Switch
        checked={theme === 'dark'}
        onChange={val => dispatch(changeTheme(val))}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        className="theme-switcher-btn"
      />
    </div>
  );
};

export default ThemeSwitch;
