import React, { Component } from 'react';
import { Layout, Form, Row, Col, Card, Input, Button } from 'antd';
import utils from '../../utils/';

const { createJson, request, createQuery, createMutation } = utils;

const { Header, Content } = Layout;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identification: '',
      name: '',
      phone: '',
      email: '',
      addres: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  onChange(event) {
    const {
        target: { id, value }
      } = event,
      { state } = this;
    this.setState({
      ...state,
      ...createJson(id, value)
    });
  }

  onBlur(event) {
    const {
        target: { id, value }
      } = event,
      data = createJson(id, value),
      { state } = this;
    request(createQuery('findClient', Object.keys(state), data))
      .then(response => {
        const {
          data: { findClient }
        } = response;
        this.setState({
          ...findClient
        });
      })
      .catch(err => console.log(err));
  }

  signIn() {
    const { state } = this;
    request(createMutation('addClient', 'ClientInput', state, Object.keys(state)))
      .then(response => {
        const {
          data: { findClient }
        } = response;
        this.setState({
          ...findClient
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      state: { identification, name, phone, email, addres }
    } = this;
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: '#5a7392' }}>
            <h3 style={{ color: '#FFF' }}>App Shop</h3>
          </Header>
          <Content>
            <Form>
              <Row gutter={10}>
                <Col span={12} offset={6} style={{ marginTop: 50 }}>
                  <Card title="Registro del Sistema" bordered={false}>
                    <Col span={24}>
                      <Form.Item colon={false}>
                        <Input
                          id="identification"
                          size="large"
                          placeholder="Identificación"
                          allowClear
                          value={identification}
                          onChange={this.onChange}
                          onBlur={this.onBlur}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item colon={false}>
                        <Input
                          id="name"
                          size="large"
                          placeholder="Nombre Completo"
                          allowClear
                          value={name}
                          onChange={this.onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item colon={false}>
                        <Input
                          id="phone"
                          size="large"
                          placeholder="Telefono"
                          allowClear
                          value={phone}
                          onChange={this.onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item colon={false}>
                        <Input
                          id="email"
                          size="large"
                          placeholder="Correo"
                          allowClear
                          value={email}
                          onChange={this.onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item colon={false}>
                        <Input
                          id="addres"
                          size="large"
                          placeholder="Dirección"
                          allowClear
                          value={addres}
                          onChange={this.onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Button type="primary" block onClick={this.signIn}>
                        Ingresar
                      </Button>
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}
