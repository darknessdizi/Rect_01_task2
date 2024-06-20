import PropTypes from "prop-types";
import { Component } from 'react';

// ShopItemClass - - это классовый компонент
// слово "class" зарезервировано (использовать нельзя) - используем className

export class ShopItemClass extends Component {
  render() {
    // Получение props классовым компонентом
    // Это декларативный подход
    // Обязательно использовать this для props
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;
    return (
      <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="purchase-info">
        <div className="price">{currency}{price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    );
  }
};

ShopItemClass.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
};
