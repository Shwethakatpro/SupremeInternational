
import React, { useState } from 'react';
import './wholegoods.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


const Wholegoods = () => {
    const navigate = useNavigate();
    const [visibleSection, setVisibleSection] = useState('');

    const handleButtonClick = (section) => {
        setVisibleSection(section);
        switch(section){
            case 'newQuote':
                window.open('https://www.salesforce.com/in/sales/cpq/');
                break;
            case 'submitWarrantyCard':
                window.open('https://www.luminousindia.com/warranty-registration');
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

    const dealerStock = [
        { id: 1, dealer: 'Dealer A', product: 'Product A', quantity: 100 },
        { id: 2, dealer: 'Dealer B', product: 'Product B', quantity: 50 },
        { id: 3, dealer: 'Dealer C', product: 'Product C', quantity: 75 },
        { id: 4, dealer: 'Dealer D', product: 'Product D', quantity: 20 },
        { id: 5, dealer: 'Dealer E', product: 'Product E', quantity: 150 },
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
        <div className="wholegoods-page">
            <div className='header'> <h1>WHOLEGOODS</h1></div>
           
            <div className="buttons-container">
                <button  className={`wholegoods-button ${visibleSection === 'newQuote' ? 'active' : ''}`} onClick={() => handleButtonClick('newQuote')}>NEW QUOTE</button>
                <button  className={`wholegoods-button ${visibleSection === 'submitPDI' ? 'active' : ''}`} onClick={() => handleButtonClick('submitPDI')}>SUBMIT PDI</button>
                <button className={`wholegoods-button ${visibleSection === 'submitWarrantyCard' ? 'active' : ''}`} onClick={() => handleButtonClick('submitWarrantyCard')}>SUBMIT WARRANTY CARD</button>
                <button className={`wholegoods-button ${visibleSection === 'openOrders' ? 'active' : ''}`} onClick={() => handleButtonClick('openOrders')}>OPEN ORDERS</button>
                <button className={`wholegoods-button ${visibleSection === 'dealersStock' ? 'active' : ''}`} onClick={() => handleButtonClick('dealersStock')}>DEALERS STOCK</button>
                <button className={`wholegoods-button ${visibleSection === 'priorPurchases' ? 'active' : ''}`} onClick={() => handleButtonClick('priorPurchases')}>PRIOR PURCHASES</button>
                <button className={`wholegoods-button ${visibleSection === 'salesContacts' ? 'active' : ''}`} onClick={() => handleButtonClick('salesContacts')}>SALES CONTACTS</button>
            </div>
            <div className="content-section">
                {visibleSection === 'openOrders' && <div><h3>Open Orders</h3>
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
                {visibleSection === 'dealersStock' && <div><h3>Dealers Stock</h3>
                    <table className="styled-table">
                    
                    <thead>
                        <tr>
                            <th>Dealer ID</th>
                            <th>Dealer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dealerStock.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.id}</td>
                                <td>{stock.dealer}</td>
                                <td>{stock.product}</td>
                                <td>{stock.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                
                        </table>
                </div>}
                {visibleSection === 'priorPurchases' && <div><h3>Prior Purchases</h3>
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
                {visibleSection === 'salesContacts' &&
                    <div>
                        <h3>Sales Contacts</h3>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jai</td>
                                    <td>Admin</td>
                                    <td>admin@company.com</td>
                                    <td>8967565434</td>

                                </tr>
                                <tr class="active-row">
                                    <td>Viji</td>
                                    <td>user1</td>
                                    <td>Viji@company.com</td>
                                    <td>2345654323</td>
                                </tr>
                                <tr>
                                    <td>Jaya</td>
                                    <td>user2</td>
                                    <td>Jaya@company.com</td>
                                    <td>4565256892</td>

                                </tr>
                                <tr>
                                    <td>Shree</td>
                                    <td>user3</td>
                                    <td>Shree@company.com</td>
                                    <td>998987878</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>}
            </div>

        </div>
    );
};

export default Wholegoods;
