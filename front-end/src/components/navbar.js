import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../helpers/localStorage';

export default function Navbar() {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userData = getLocalStorage('user');
    setName(userData.name);
  }, []);

  const logout = () => {
    history.push('/');
    removeLocalStorage('user');
    removeLocalStorage('carrinho');
  };

  return (
    <nav>
      <ul>
        <li>
          <div data-testid="customer_products__element-navbar-link-products">
            produtos
          </div>
        </li>
        <li>
          <div data-testid="customer_products__element-navbar-link-orders">
            pedidos
          </div>
        </li>
        <li>
          <div data-testid="customer_products__element-navbar-user-full-name">
            {name}
          </div>
        </li>
        <li>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ logout }
          >
            sair
          </button>
        </li>
      </ul>
    </nav>
  );
}
