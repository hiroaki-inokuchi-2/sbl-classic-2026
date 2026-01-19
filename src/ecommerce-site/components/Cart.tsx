import React from 'react';
import { CartItem } from '../types';
import { CartItemComponent } from './CartItem';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemoveItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>ショッピングカート</h2>
      {cart.length === 0 ? (
        <p>カートに商品はありません。</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItemComponent
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          ))}
          <div className="cart-total">
            合計: ¥{total.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};
