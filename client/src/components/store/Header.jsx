import React from 'react';
import { Layout, Col, Row, Input, Icon } from 'antd';
const { Header } = Layout;

export default () => {
  return (
    <Header style={{ backgroundColor: '#fff' }}>
      <Row>
        <Col span={24}>
          <Input
            style={{ backgroundColor: '#f6f6fe' }}
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            placeholder="Buscar productos"
          />
        </Col>
      </Row>
    </Header>
  );
};
