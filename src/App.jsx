import React,{useState} from 'react';
import { Box, Tabs, Tab, Button, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PromotionPage from './pages/PromotionPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSKU from './components/CreateSKU';
import SKUForecastForm from'./components/SKU_Forecast/SKUForecastForm'
import SKUList from './components/SKUList';
import MonthlyPriceList from './components/MonthlyPriceList';
import Reconsillation from './components/Reconsillation/Reconsillation'

import Navbar from './components/Navbar';
import Wholegoods from './pages/Wholegoods/wholegoods';
import Parts from './pages/Parts/Parts';
import Warranty from './pages/Warranty/Warranty';
import Finance from './pages/Finance/Finance';
import Home from './pages/Home/Home';
 

import Login from './Login/Login';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/TPM/*" element={<App1 />} />
                <Route path="/Demo/*" element={<App2 />} />
            </Routes>
        </Router>
    );
    // const [selectedTab, setSelectedTab] = useState(0);
    // const [selectedAction, setSelectedAction] = useState('');
    // const [sidebarOpen, setSidebarOpen] = useState(true);

    // const handleTabChange = (event, newValue) => {
    //     setSelectedTab(newValue);
    //     setSelectedAction(''); // Clear action on tab change
    // };

    // const handleActionClick = (action) => {
    //     setSelectedAction(action);
    // };

    // const handleToggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };

    // return (
         
    //         <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, borderBottom: '1px solid #ddd', position: 'fixed', width: '100%', top: 0, zIndex: 1, backgroundColor: 'chocolate' }}>
    //                 <Header />
    //             </Box>
    //             <Router>
    //             <Box sx={{ width: sidebarOpen ? '200px' : '60px', position: 'fixed', top: '60px', bottom: 0, backgroundColor: '#f4f4f4', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
    //                 <Sidebar open={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />
    //             </Box>
    //             <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: sidebarOpen ? '250px' : '60px', transition: 'margin-left 0.3s' }}>
               
    //         <Routes>
    //             <Route path="/" element={<PromotionPage />} />
    //             <Route path="/createSKU" element={<CreateSKU />} />
    //             <Route path="/SKUList" element={<SKUList />} />
    //             <Route path="/skuforecast" element={<SKUForecastForm />} />
    //             <Route path="/monthlypricelist" element={<MonthlyPriceList />} />
    //             <Route path="/reconsillationForm" element={<Reconsillation />} />
              
    //         </Routes>
    //             </Box>
    //             </Router> 
    //         </Box>
           
    //         );
};



function App1() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
    const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, borderBottom: '1px solid #ddd', position: 'fixed', width: '100%', top: 0, zIndex: 1, backgroundColor: 'chocolate' }}>
                <Header />
            </Box>
            <Box sx={{ width: sidebarOpen ? '200px' : '60px', position: 'fixed', top: '60px', bottom: 0, backgroundColor: '#f4f4f4', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
                <Sidebar open={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: sidebarOpen ? '250px' : '60px', transition: 'margin-left 0.3s' }}>
                <Routes>
                    <Route path="promotion" element={<PromotionPage />} />
                    <Route path="createSKU" element={<CreateSKU />} />
                    <Route path="SKUList" element={<SKUList />} />
                    <Route path="skuforecast" element={<SKUForecastForm />} />
                    <Route path="monthlypricelist" element={<MonthlyPriceList />} />
                    <Route path="reconsillationForm" element={<Reconsillation />} />
                </Routes>
            </Box>
        </Box>
    );
}

function App2() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="wholegoods" element={<Wholegoods />} />
                <Route path="parts" element={<Parts />} />
                <Route path="warranty" element={<Warranty />} />
                <Route path="finance" element={<Finance />} />
            </Routes>
        </div>
    );
}

export default App;
