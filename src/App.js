import React from 'react';
import Router from './router';
import {Layout, Row, Col} from 'antd';
import Nav from './components/nav';
import 'antd/dist/antd.css';

const {Header, Footer, Content} = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <Row>
          <Col span={6}>
            <h1>Online Shop</h1>
          </Col>
          <Col span={18}>
            <Nav />
          </Col>
        </Row>
      </Header>
      <Content>
        <Row>
          <Col span={24}><Router /></Col>
        </Row>
        
      </Content>
      <Footer>
      <Row>
          <Col span={24}>Footer.....</Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
