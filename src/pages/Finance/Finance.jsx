import React, { useState } from 'react';
import './Finance.css';

const Finance = () => {
    const [visibleSection, setVisibleSection] = useState('');

    const unpaidInvoices = [
        { id: 1, invoiceNumber: 'INV001', invoiceDate: '2024-01-01', dueDate: '2024-02-01', invoiceAmount: '$1000', amountOutstanding: '$500', pastDue: '30 days' },
        { id: 2, invoiceNumber: 'INV002', invoiceDate: '2024-02-01', dueDate: '2024-03-01', invoiceAmount: '$2000', amountOutstanding: '$1500', pastDue: '15 days' },
        // Add more invoices as needed
    ];

    const recentStatements = [
        { id: 1, statementDate: '2024-03-01', statementLink: '/statements/statement1.pdf' },
        { id: 2, statementDate: '2024-04-01', statementLink: '/statements/statement2.pdf' },
        // Add more statements as needed
    ];

    const orders = [
        { id: 1, product: 'Product A', status: 'Ordered' },
        { id: 2, product: 'Product B', status: 'Scheduled' },
        { id: 3, product: 'Product C', status: 'In Production' },
        { id: 4, product: 'Product D', status: 'Ready to Ship' },
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

    const ytdSales = 2000000;  // Example data
    const volumeMultiplier = 0.03;  // 3%
    const currentVolumeRebate = ytdSales * volumeMultiplier;

    const handleButtonClick = (section) => {
        setVisibleSection(section);
    };
    return (
        <div className="finance-page">
            <div className='header'><h1 >FINANCE</h1></div>
            <div className="buttons-container">
                <button className="finance-button" onClick={() => handleButtonClick('unpaidInvoices')}>UNPAID INVOICES</button>
                <button className="finance-button" onClick={() => handleButtonClick('recentStatements')}>RECENT STATEMENTS</button>
                <button className="finance-button" onClick={() => handleButtonClick('rebateTracker')}>REBATE TRACKER</button>
                <button className="finance-button" onClick={() => handleButtonClick('financeContacts')}>FINANCE CONTACTS</button>
                <button className="finance-button" onClick={() => handleButtonClick('partsInvoices')}>PARTS INVOICES</button>
                <button className="finance-button" onClick={() => handleButtonClick('wholegoodsInvoices')}>WHOLEGOODS INVOICES </button>

            </div>
            <div className="content-section">
                {visibleSection === 'unpaidInvoices' && <div><h3>UNPAID INVOICES</h3>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Invoice #</th>
                                <th>Invoice Date</th>
                                <th>Due Date</th>
                                <th>Invoice Amount</th>
                                <th>Amount Outstanding</th>
                                <th>Past Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {unpaidInvoices.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td><a href={`/invoices/${invoice.invoiceNumber}.pdf`}>{invoice.invoiceNumber}</a></td>
                                    <td>{invoice.invoiceDate}</td>
                                    <td>{invoice.dueDate}</td>
                                    <td>{invoice.invoiceAmount}</td>
                                    <td>{invoice.amountOutstanding}</td>
                                    <td>{invoice.pastDue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
                {visibleSection === 'recentStatements' && <div><h3>RECENT STATEMENTS</h3>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Statement Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentStatements.map((statement) => (
                                <tr key={statement.id}>
                                    <td><a href={statement.statementLink}>{statement.statementDate}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
                {visibleSection === 'rebateTracker' && <div><h3>REBATE TRACKER</h3>
                    <div style={styles.container}>
                        <div style={styles.circle}>
                            <p style={styles.label}>YTD SALES</p>
                            <p style={styles.value}>${ytdSales.toLocaleString()}</p>
                        </div>
                        <div style={styles.multiplier}>
                            <p style={styles.multiplySymbol}>×</p>
                        </div>
                        <div style={styles.circle}>
                            <p style={styles.label}>VOLUME MULTIPLIER</p>
                            <p style={styles.value}>{(volumeMultiplier * 100).toFixed(0)}%</p>
                        </div>
                        <div style={styles.equals}>
                            <p style={styles.equalsSymbol}>=</p>
                        </div>
                        <div style={styles.circle}>
                            <p style={styles.label}>CURRENT VOLUME REBATE</p>
                            <p style={styles.value}>${currentVolumeRebate.toLocaleString()}</p>
                        </div>
                    </div>
                </div>}
                {visibleSection === 'financeContacts' && <div><h3>FINANCE CONTACTS</h3>
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
                {visibleSection === 'partsInvoices' && <div><h3>PARTS INVOICES</h3>
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
                {visibleSection === 'wholegoodsInvoices' && <div><h3>WHOLEGOODS INVOICES</h3></div>}

            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
    },
    circle: {
        backgroundColor: 'red',
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    },
    label: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    value: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    multiplier: {
        fontSize: '50px',
        color: '#99A3B5',
    },
    equals: {
        fontSize: '50px',
        color: '#99A3B5',
    },
    multiplySymbol: {
        fontSize: '40px',
    },
    equalsSymbol: {
        fontSize: '40px',
    },
};

export default Finance;
