import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { products } from '../data/products';
import './AuxPages.css';

const sampleOrders = [
  {
    code: '2234981932',
    product: products[0],
    status: 'Produto em trânsito',
    statusType: 'transit',
  },
  {
    code: '4495810492',
    product: products[1],
    status: 'Finalizado',
    statusType: 'done',
  },
  {
    code: '4495810493',
    product: products[2],
    status: 'Cancelado',
    statusType: 'canceled',
  },
];

function OrdersPage() {
  useEffect(() => {
    document.title = 'Digital Store | Meus Pedidos';
  }, []);

  return (
    <Layout>
      <div className="container aux-page">
        <div className="orders-card">
          <div className="orders-header">
            <h1 className="orders-title">Meus Pedidos</h1>
            <span className="orders-status-label">STATUS</span>
          </div>

          <ul className="orders-list">
            {sampleOrders.map((order) => (
              <li key={order.code} className="order-item">
                <Link to={`/product/${order.product.id}`} className="order-product">
                  <img
                    src={order.product.image}
                    alt={order.product.name}
                    className="order-thumb"
                  />
                  <div>
                    <span className="order-code">Pedido nº {order.code}</span>
                    <p className="order-name">{order.product.name}</p>
                  </div>
                </Link>

                <span className={`order-status order-status--${order.statusType}`}>
                  {order.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default OrdersPage;
