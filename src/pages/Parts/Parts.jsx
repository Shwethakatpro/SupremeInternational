import React,{useState} from 'react';
import './Parts.css';

const Parts = () => {
    const [visibleSection, setVisibleSection] = useState('');

    const handleButtonClick = (section) => {
        setVisibleSection(section);
        switch(section){
            case 'newParts':
                window.open('https://cadshare.com/');
                break;
            default:break;
        }
    };

    const orders = [
        { id: 1, product: 'Product A', status: 'Ordered' },
        { id: 2, product: 'Product B', status: 'Scheduled' },
        { id: 3, product: 'Product C', status: 'In Production' },
        { id: 4, product: 'Product D', status: 'Ready to Ship' },
    ];

    const priorPurchases = [
        { id: 1, product: 'Product A', date: '2023-01-15', amount: 100 },
        { id: 2, product: 'Product B', date: '2023-02-20', amount: 200 },
        { id: 3, product: 'Product C', date: '2023-03-10', amount: 150 },
        { id: 4, product: 'Product D', date: '2023-04-05', amount: 50 },
        { id: 5, product: 'Product E', date: '2023-05-25', amount: 300 },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Ordered':
                return '#ffeb3b'; // Yellow
            case 'Scheduled':
                return '#03a9f4'; // Blue
            case 'In Production':
                return '#ff9800'; // Orange
            case 'Ready to Ship':
                return '#4caf50'; // Green
            default:
                return '#ffffff'; // White
        }
    };

    return (
        <div className="parts-page">
            <div className='header'><h1>PARTS</h1></div> 
            <div className="button-container">
                <button className="parts-button" onClick={() => handleButtonClick('newParts')}>NEW PARTS ORDER</button>
                <button className="parts-button" onClick={() => handleButtonClick('openOrders')}>OPEN ORDERS</button>
                <button className="parts-button" onClick={() => handleButtonClick('previousOrders')}>PREVIOUS ORDERS</button>
            </div>
            <div className="content-section">
                
                {visibleSection === 'openOrders' && <div><h3>OPEN ORDERS</h3>
                    <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} >
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td style={{ color: getStatusColor(order.status) }}>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                </div>}
                {visibleSection === 'previousOrders' && <div><h3>PREVIOUS ORDERS</h3>
                    <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Purchase ID</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {priorPurchases.map(purchase => (
                            <tr key={purchase.id}>
                                <td>{purchase.id}</td>
                                <td>{purchase.product}</td>
                                <td>{purchase.date}</td>
                                <td>{purchase.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>}
              
            </div>
        </div>
    );
};

export default Parts;
