import React from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import './App.css';

// Aca importo un componente 
import Listas from '../Listas/Listas';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => (
  <div className="App">
    <Layout className="layout">
      <Header>
        <div className="logo"><Title level={4} style={{color: 'white'}}>Curi Series</Title></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
            <Menu.Item key="1">Cine</Menu.Item>
            <Menu.Item key="2">Series</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Series</Breadcrumb.Item>
        </Breadcrumb>
        {/* Este es un componente importado, se trabaja en /Listas */}
        <Listas />

      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Hecho con ❤ by Curi</Footer>
    </Layout>
  </div>
);

export default App;
