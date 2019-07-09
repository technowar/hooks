import React from 'react';
import { Layout } from 'antd';
import Footer from '../footer';
import Header from '../header';
import Sider from '../sider';
import './index.css';

export default (BaseComponent) => {
  function LayoutComponent(props) {
    return (
      <Layout>
        <Sider layout={Layout} />
        <Layout>
          <Header layout={Layout} />
          <Layout.Content>
            <BaseComponent {...props} />
          </Layout.Content>
          <Footer layout={Layout} />
        </Layout>
      </Layout>
    );
  }

  return LayoutComponent;
};
