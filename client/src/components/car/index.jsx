import React, { Component } from 'react';
import { Layout, PageHeader, List, Avatar, Icon, Row, Col, Button, Empty } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCar, deleteItem } from '../../redux/actions/car';
// import utils from '../../utils';

const { Header, Content } = Layout;

// const { createQuery, request } = utils;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.total = this.total.bind(this);
  }

  c;

  total() {
    const {
      props: { car = [] }
    } = this;
    let subtotal = 0;
    car.map(item => {
      subtotal += item.price;
    });
    return subtotal;
  }

  render() {
    const {
        props: {
          history,
          car,
          actions: { deleteItem }
        }
      } = this,
      total = this.total();
    return (
      <div>
        <Header style={{ backgroundColor: '#fff' }}>
          <PageHeader
            onBack={() => {
              history.goBack();
            }}
            title="Carrito de compras"
          />
          ,
        </Header>
        <Content>
          <Row>
            <div style={{ backgroundColor: '#f6f7fc', minHeight: '280px', overflowY: 'scroll' }}>
              <Row>
                <Col span={22} offset={1} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
                  {car.length > 0 ? (
                    <List
                      itemLayout="vertical"
                      size="large"
                      dataSource={car}
                      header={<div>Carrito de compra</div>}
                      footer={<div>Total $ {total}</div>}
                      renderItem={(product, i) => {
                        return (
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
                              <Icon type="delete" onClick={() => deleteItem(product.id)}></Icon>
                            }
                          >
                            <List.Item.Meta
                              avatar={<Avatar src={product.image} />}
                              title={product.name}
                            />
                          </List.Item>
                        );
                      }}
                    />
                  ) : (
                    <Empty
                      imageStyle={{
                        height: 60
                      }}
                      description={<span>No hay productos en el carrito de compras!</span>}
                    >
                      <Button type="primary" onClick={() => history.push('/')}>
                        Click aqui para añadir
                      </Button>
                    </Empty>
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

const mapStateToProps = (state, ownProps) => {
  const { car = [] } = state;
  return {
    car
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        updateCar,
        deleteItem
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car);
