import {useContext} from 'react';
import {ShopContext} from '../context';
import {BasketItem} from './BasketItem';

function BasketList() {
  const {order = [], handleBasketShow = Function.prototype} =
    useContext(ShopContext);

  const totalPrice = order.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length > 0 ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice}руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export {BasketList};
