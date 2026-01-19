import React from 'react';
import { CartItem } from '../types';

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>¥{item.price.toLocaleString()} x {item.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
        <input type="text" value={item.quantity} readOnly />
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => onRemoveItem(item.id)}>削除</button>
      </div>
    </div>
  );
};
