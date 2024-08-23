



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Katprologo from '../assets/katprologo1.png'
import Katpro from '../assets/Katpro.png'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'TPM' && password === 'TPM123') {
            navigate('/TPM/promotion');
        } else if (username === 'Supreme' && password === 'Supreme123') {
            navigate('/Demo/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={Katprologo} alt="Company Logo" style={styles.logo} />
            </div>
            <div style={styles.loginContainer}>
            <img src={Katpro} alt="Company Logo" style={styles.logo} />
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleLogin} style={styles.button}>Login</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5deb44',
    },
    logo: {
        maxWidth: '80%',
        maxHeight: '80%',
    },
    loginContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'black',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Login;
