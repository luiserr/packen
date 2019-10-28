import React, { Component } from 'react';
import '../../nav.css';
import { Icon } from 'antd';

export default class Footer extends Component {
  render() {
    const {
      props: { history }
    } = this;
    return (
      <div className="mdc-bottom-navigation">
        <nav className="mdc-bottom-navigation__list">
          <span
            className="mdc-bottom-navigation__list-item mdc-ripple-surface mdc-ripple-surface--primary"
            data-mdc-auto-init="MDCRipple"
            data-mdc-ripple-is-unbounded
            onClick={() => history.push('/')}
          >
            {' '}
            <Icon className="mdc-bottom-navigation__list-item__icon" type="home" />
            <span className="mdc-bottom-navigation__list-item__text">Inicio</span>
          </span>
          <span
            className="mdc-bottom-navigation__list-item mdc-bottom-navigation__list-item--activated mdc-ripple-surface mdc-ripple-surface--primary"
            data-mdc-auto-init="MDCRipple"
            data-mdc-ripple-is-unbounded
            onClick={() => history.push('/')}
          >
            <Icon className="mdc-bottom-navigation__list-item__icon" type="shopping" />
            <span className="mdc-bottom-navigation__list-item__text">Tienda</span>
          </span>
          <span
            className="mdc-bottom-navigation__list-item mdc-ripple-surface mdc-ripple-surface--primary"
            data-mdc-auto-init="MDCRipple"
            data-mdc-ripple-is-unbounded
            onClick={() => history.push('/cart')}
          >
            <Icon className="mdc-bottom-navigation__list-item__icon" type="shopping-cart" />
            <span className="mdc-bottom-navigation__list-item__text">Carrito</span>
          </span>
          <span
            className="mdc-bottom-navigation__list-item mdc-ripple-surface mdc-ripple-surface--primary"
            data-mdc-auto-init="MDCRipple"
            data-mdc-ripple-is-unbounded
          >
            <Icon className="mdc-bottom-navigation__list-item__icon" type="user" />
            <span className="mdc-bottom-navigation__list-item__text">Yo</span>
          </span>
        </nav>
      </div>
    );
  }
}
