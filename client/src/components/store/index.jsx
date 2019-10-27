import React, { Component } from 'react';
import { Layout, Row, Col, Tabs, List, Avatar } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;
const { TabPane } = Tabs;

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
];

export default class Store extends Component {
  render() {
    return (
      <div>
        <Content>
          <Header />
          <Tabs defaultActiveKey="1" style={{ backgroundColor: '#FFF' }}>
            <TabPane tab="Brands" key="1">
              <div style={{ backgroundColor: '#f6f7fc', minHeight: '280px', overflowY: 'scroll' }}>
                <Row>
                  <Col span={22} offset={1} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Personal" key="2" disabled>
              Tab 2
            </TabPane>
            <TabPane tab="Shop" key="3" disabled>
              Tab 3
            </TabPane>
            <TabPane tab="fitting" key="4" disabled>
              Tab 4
            </TabPane>
          </Tabs>
          <Footer />
        </Content>
      </div>
    );
  }
}
