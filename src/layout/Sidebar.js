import {Layout} from 'antd';

import React, {useState} from 'react';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import {Menu, Switch} from 'antd';
import {useSelector} from 'react-redux';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  {
    label: 'Navigation One',
    icon: <MailOutlined />,
    key: 'sub1',
    children: [
      {
        label: 'Option 1',
        key: 'op 1',
      },
      {
        label: 'Option 2',
        key: 'op 2',
      },
      {
        label: 'Sub Options',
        key: 'op 3',
        children: [
          {
            label: 'Option 1',
            key: 'hp 1',
          },
          {
            label: 'Option 2',
            key: 'hp 2',
          },
        ],
      },
      {
        label: 'Option 4',
        key: 'op 4',
      },
    ],
  },
  {
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    key: 'sub2',
    children: [
      {
        label: 'Option 1',
        key: 'bp 1',
      },
      {
        label: 'Option 2',
        key: 'bp 2',
      },
      {
        label: 'Option 3',
        key: 'bp 3',
      },
      {
        label: 'Option 4',
        key: 'bp 4',
      },
    ],
  },
  {
    label: 'Navigation Two',
    icon: <SettingOutlined />,
    key: 'sub3',
    children: [
      {
        label: 'Option 1',
        key: 'ap 1',
      },
      {
        label: 'Option 2',
        key: 'ap 2',
      },
      {
        label: 'Option 3',
        key: 'ap 3',
      },
      {
        label: 'Option 4',
        key: 'ap 4',
      },
    ],
  },
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const Sidebar = () => {
  const theme = useSelector(store => store.theme);
  const [current, setCurrent] = useState('op 1');

  //Open current sub menu only
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Layout.Sider
      theme={theme}
      width={300}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: '64px',
        bottom: 0,
      }}
      className="custom-scrollbar-div"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        // console.log(broken);
        console.log('#### this is broken');
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: '100%',
        }}
        defaultOpenKeys={['sub1']}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        className="sidebar-menu"
      />
    </Layout.Sider>
  );
};

export default Sidebar;
