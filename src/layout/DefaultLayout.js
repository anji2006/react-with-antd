import React from 'react';

import {Layout} from 'antd';
const {Content} = Layout;

import HeaderContent from './Header';
import {Outlet} from 'react-router-dom';
import FooterContent from './Footer';
import Sidebar from './Sidebar';

import './layout.css';

const DefaultLayout = () => {
  return (
    <Layout>
      <HeaderContent />
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <Content
            style={{
              minHeight: 'calc(100vh - 64px)',
            }}
            className="content"
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <FooterContent />
    </Layout>
  );
};

export default DefaultLayout;
