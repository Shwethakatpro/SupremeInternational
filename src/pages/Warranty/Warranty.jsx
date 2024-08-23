import React, { useState } from 'react';
import './Warranty.css';
import WarrantyPolicy from '../../assets/warrantypolicy.png'
const Warranty = () => {
    const [visibleSection, setVisibleSection] = useState('');
    const serialData = [
        { serialNumber: '12345', dealer: 'Best Dealer', make: 'Honda', model: 'Civic', warrantyRegistration: '2023-01-01', warrantyStatus: 'Yes' },
        { serialNumber: '67890', dealer: 'Premium Motors', make: 'Toyota', model: 'Camry', warrantyRegistration: '2022-06-15', warrantyStatus: 'No' },
        // Add more serial numbers and their corresponding data here
    ];

    const [selectedSerial, setSelectedSerial] = useState('');
    const [dealer, setDealer] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [warrantyRegistration, setWarrantyRegistration] = useState('');
    const [warrantyStatus, setWarrantyStatus] = useState('');

    // Handle dropdown change and autofill fields
    const handleSerialNumberChange = (e) => {
        const value = e.target.value;
        setSelectedSerial(value);

        const selectedData = serialData.find(item => item.serialNumber === value);

        if (selectedData) {
            setDealer(selectedData.dealer);
            setMake(selectedData.make);
            setModel(selectedData.model);
            setWarrantyRegistration(selectedData.warrantyRegistration);
            setWarrantyStatus(selectedData.warrantyStatus);
        } else {
            // Reset fields if no match is found
            setDealer('');
            setMake('');
            setModel('');
            setWarrantyRegistration('');
            setWarrantyStatus('');
        }
    };

    const claims = [
        { id: 1, claim: 'Claim 1', details: 'Details 1', moreInfo: 'More Info 1', serviceCase: 'Service Case 1' },
        { id: 2, claim: 'Claim 2', details: 'Details 2', moreInfo: 'More Info 2', serviceCase: 'Service Case 2' },
        // Add more claims as needed
    ];

    const resolvedCases = [
        { id: 1, case: 'Case 1', amountClaimed: '$1000', amountPaid: '$900', details: 'Details 1' },
        { id: 2, case: 'Case 2', amountClaimed: '$2000', amountPaid: '$1800', details: 'Details 2' },
        // Add more resolved cases as needed
    ];

    const handleButtonClick = (section) => {
        setVisibleSection(section);
    };
    return (
        <div className="warranty-page">
            <div className='header'><h1 >WARRANTY</h1></div>
            <div className="buttons-container">

                <button className={`warranty-button ${visibleSection === 'submitClaim' ? 'active' : ''}`} onClick={() => handleButtonClick('submitClaim')}>SUBMIT CLAIM</button>
                <button className={`warranty-button ${visibleSection === 'openClaim' ? 'active' : ''}`} onClick={() => handleButtonClick('openClaim')}>OPEN CLAIMS</button>
                <button className={`warranty-button ${visibleSection === 'resolvedClaims' ? 'active' : ''}`} onClick={() => handleButtonClick('resolvedClaims')}>RESOLVED CLAIMS</button>
                <button className={`warranty-button ${visibleSection === 'warrantyPolicy' ? 'active' : ''}`} onClick={() => handleButtonClick('warrantyPolicy')}>WARRANTY POLICY</button>
                <button className={`warranty-button ${visibleSection === 'warrantyContacts' ? 'active' : ''}`} onClick={() => handleButtonClick('warrantyContacts')}>WARRANTY CONTACTS</button>
            </div>
            <div className="content-section">
                {visibleSection === 'submitClaim' && <div><h2>SUBMIT CLAIM</h2>
                    <div style={styles.container}>
                        <form style={styles.form}>
                            <div style={styles.row}>
                                <label style={styles.label}>Serial Number:</label>
                                <select
                                    style={styles.input}
                                    value={selectedSerial}
                                    onChange={handleSerialNumberChange}
                                >
                                    <option value="">Select Serial Number</option>
                                    {serialData.map((item) => (
                                        <option key={item.serialNumber} value={item.serialNumber}>
                                            {item.serialNumber}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Dealer:</label>
                                <input type="text" style={styles.input} value={dealer} readOnly />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Make:</label>
                                <input type="text" style={styles.input} value={make} readOnly />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Model:</label>
                                <input type="text" style={styles.input} value={model} readOnly />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Warranty Registration Date:</label>
                                <input type="text" style={styles.input} value={warrantyRegistration} readOnly />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Warranty Status:</label>
                                <input type="text" style={styles.input} value={warrantyStatus} readOnly />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Claim Information:</label>
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Area:</label>
                                <input type="text" style={styles.inputSmall} />
                                <label style={styles.label}>Part:</label>
                                <input type="text" style={styles.inputSmall} />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Description:</label>
                                <textarea style={styles.textarea}></textarea>
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Attached File:</label>
                                <input type="file" style={styles.inputFile} />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Submitted By:</label>
                                <input type="text" style={styles.input} />
                            </div>
                            <div style={styles.row}>
                                <label style={styles.label}>Phone:</label>
                                <input type="text" style={styles.input} />
                                <label style={styles.label}>Email:</label>
                                <input type="text" style={styles.input} />
                            </div>
                            <div style={styles.buttonContainer}>
                                <button type="submit" style={styles.buttonSubmit}>SUBMIT</button>
                                <button type="reset" style={styles.buttonClear}>CLEAR</button>
                                <button type="button" style={styles.buttonCancel}>CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>}
                {visibleSection === 'openClaim' && <div><h3>OPEN CLAIMS</h3>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Claim</th>
                                <th>Details</th>
                                <th>More Information</th>
                                <th>Service Case</th>
                            </tr>
                        </thead>
                        <tbody>
                            {claims.map((claim) => (
                                <tr key={claim.id}>
                                    <td>{claim.claim}</td>
                                    <td><a href="#">{claim.details}</a></td>
                                    <td><a href="#">{claim.moreInfo}</a></td>
                                    <td><a href="#">{claim.serviceCase}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
                {visibleSection === 'resolvedClaims' && <div><h3>RESOLVED CLAIMS</h3>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Amount Claimed</th>
                                <th>Amount Paid</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resolvedCases.map((resolvedCase) => (
                                <tr key={resolvedCase.id}>
                                    <td>{resolvedCase.case}</td>
                                    <td>{resolvedCase.amountClaimed}</td>
                                    <td>{resolvedCase.amountPaid}</td>
                                    <td><a href="#">{resolvedCase.details}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
                {visibleSection === 'warrantyPolicy' && <div ><h2>WARRANTY POLICY</h2>
                    <div className="content">
                        <div className="slideshow1">
                            <img src={WarrantyPolicy} alt='Warranty Policy' />
                        </div>
                        <div className="description1">
                            <p>A Warranty Policy is a statement that puts your users or customers on notice of what type of warranty coverage you offer, or if you don't offer one. It can be part of a Terms and Conditions agreement, as well as a standalone policy on your website.

                                This article will break down what exactly this policy is, why you should have one, and what you should include in your own Warranty Policy. We also provide a sample template to help you create your own.</p>
                        </div>
                    </div>
                </div>}
                {visibleSection === 'warrantyContacts' && <div><h2>WARRANTY CONTACTS</h2>
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


const styles = {
    container: {
        maxWidth: '600px',
        // marginTop: '10px',
        marginLeft: '250px',
        padding: '50px',
        // border: '1px solid #ddd',
        borderRadius: '5px',
    },
    title: {
        textAlign: 'left',
       
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '15px',
    },
    label: {
        flex: '1 1 100px',
        marginRight: '10px',
        fontWeight: 'bold',
    },
    input: {
        flex: '2 1 250px',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    inputSmall: {
        flex: '1 1 100px',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginRight: '10px',
    },
    textarea: {
        flex: '2 1 100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        minHeight: '100px',
    },
    inputFile: {
        flex: '2 1 100%',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttonSubmit: {
        padding: '10px 20px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonClear: {
        padding: '10px 20px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonCancel: {
        padding: '10px 20px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default Warranty;
