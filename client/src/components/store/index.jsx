import React, { Component } from 'react';
import { Layout, Row, Col, Tabs, List, Avatar, Empty } from 'antd';
import utils from '../../utils';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;
const { TabPane } = Tabs;

const { createQuery, request } = utils;

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: []
    };
  }

  componentDidMount() {
    request(createQuery('searchBrands', ['id, name, image']))
      .then(response => {
        const {
          data: { searchBrands: brands }
        } = response;
        this.setState({
          brands
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      props: { history },
      state: { brands }
    } = this;
    return (
      <div>
        <Content>
          <Header />
          <Tabs defaultActiveKey="1" style={{ backgroundColor: '#FFF' }}>
            <TabPane tab="Brands" key="1">
              <div style={{ backgroundColor: '#f6f7fc', minHeight: '280px', overflowY: 'scroll' }}>
                <Row>
                  <Col span={22} offset={1} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
                    {brands.length > 0 ? (
                      <List
                        itemLayout="horizontal"
                        dataSource={brands}
                        renderItem={brand => {
                          return (
                            <List.Item
                              onClick={() => {
                                history.push(`/products/${brand.id}`);
                              }}
                            >
                              <List.Item.Meta
                                avatar={<Avatar src={brand.image} />}
                                title={brand.name}
                              />
                            </List.Item>
                          );
                        }}
                      />
                    ) : (
                      <Empty description={<span>No hay marcas!</span>} />
                    )}
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
          <Footer history={history} />
        </Content>
      </div>
    );
  }
}
