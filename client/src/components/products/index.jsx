import React, { Component } from 'react';
import { Layout, PageHeader, List, Avatar, Icon, Row, Col, Button, Empty } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCar } from '../../redux/actions/car';
import utils from '../../utils';

const { Header, Content } = Layout;

const { createQuery, request } = utils;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const {
      props: {
        match: {
          params: { brand = 1 }
        }
      }
    } = this;
    request(createQuery('findProductsByBrand', ['id name image price description'], { brand }))
      .then(response => {
        const {
          data: { findProductsByBrand: products }
        } = response;
        this.setState({
          products
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      state: { products },
      props: {
        history,
        actions: { addCar }
      }
    } = this;
    return (
      <div>
        <Header style={{ backgroundColor: '#fff' }}>
          <PageHeader
            onBack={() => {
              history.goBack();
            }}
            title="Marca"
          />
          ,
        </Header>
        <Content>
          <Row>
            <div style={{ backgroundColor: '#f6f7fc', minHeight: '280px', overflowY: 'scroll' }}>
              <Row>
                <Col span={22} offset={1} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
                  {products.length > 0 ? (
                    <List
                      itemLayout="vertical"
                      size="large"
                      dataSource={products}
                      renderItem={(product, i) => (
                        <List.Item
                          key={i}
                          actions={[
                            <IconText
                              type="dollar"
                              text={product.price}
                              key="list-vertical-star-o"
                            />
                          ]}
                          style={{ padding: '10px' }}
                          extra={
                            <Button
                              onClick={() => {
                                addCar(product);
                              }}
                            >
                              Añadir al Carrito
                            </Button>
                          }
                        >
                          <List.Item.Meta
                            avatar={<Avatar src={product.image} />}
                            title={product.name}
                            description={product.description}
                          />
                        </List.Item>
                      )}
                    />
                  ) : (
                    <Empty description={<span>No hay productos cargados!</span>} />
                  )}
                </Col>
              </Row>
            </div>
          </Row>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addCar
      },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Products);
