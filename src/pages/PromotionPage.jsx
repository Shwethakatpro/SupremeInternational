// PromotionPage.js
import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PromotionTable from '../components/PromotionTable';
import PromotionForm from '../components/PromotionForm';
import UpdatePromotion from '../components/UpdatePromotion';
import ReconciliationList from '../components/ReconciliationList';
import CreatePromotion from '../components/CreatePromotion';
import UploadPromotion from '../components/UploadPromotion';
import UploadDeduction from '../components/UploadDeduction';
import PromotionList from '../components/PromotionList';
import CreateSKU from '../components/CreateSKU';
import Header from '../components/Header';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { ArrowCircleRight } from '@mui/icons-material';
import Reconsillation from '../components/Reconsillation/Reconsillation';


const PromotionPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedAction, setSelectedAction] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedRecon,setSelectedRecon] =useState(false)
    const rows = [
        { id: 7899, account: 'hey', indirectCustomer: '', promotionName: 'Central Promo' },
        { id: 7098, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 90990, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 78667, account: 'All Other Director', indirectCustomer: 'DC Groc', promotionName: '24-78 Val Promo' },
    ];


    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setSelectedAction(''); // Clear action on tab change
    };

    const handleActionClick = (action) => {
        setSelectedAction(action);
    };

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleActionClick1 = () => {
        setSelectedRecon(true);
        // setSelectedAction(true)
    };
    const handleClose = () => {
        setSelectedRecon(false);
    };

    return (
        
        <Box sx={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px', overflowY: 'auto', justifyContent: 'space-between' }}>
                       
        {!selectedRecon &&<Button variant="outlined" size="small" onClick={() => handleActionClick('create')} sx={{ marginLeft: 1, backgroundColor: "#fab369" }}>Create Promotion</Button>}
        {!selectedRecon &&<Button variant="outlined" size="small" onClick={() => handleActionClick('uploadPromotion')} sx={{ marginLeft: 1, backgroundColor: "#fab369" }}>Create Bulk Promotion</Button>}
        {!selectedRecon &&<Button variant="outlined" size="small" onClick={() => handleActionClick('uploadDeduction')} sx={{ marginLeft: 1, backgroundColor: "#fab369" }}>Upload Deduction</Button>}
      {(!selectedRecon && !selectedAction ) &&<Box sx={{ flexGrow: 1, padding: 2 }}>
            <PromotionForm />
            <Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" textColor="primary" indicatorColor="primary">
                <Tab  label={<Typography variant="caption" sx={{ fontWeight: 'bold', color:"chocolate"}} >Promotion List</Typography>} />
                <Tab label={<Typography variant="caption" sx={{ fontWeight: 'bold', color:"chocolate"}}>Update Promotion</Typography>} />
                <Tab label={<Typography variant="caption" sx={{ fontWeight: 'bold', color:"chocolate"}}>Reconciliation List</Typography>} />
            </Tabs>
          
        </Box>}  
            {selectedAction === 'create' && <CreatePromotion />}
            {selectedAction === 'uploadPromotion' && <UploadPromotion />}
            {selectedAction === 'uploadDeduction' && <UploadDeduction />}
            {!selectedAction && selectedTab === 0 && <PromotionList />}
            {!selectedAction && selectedTab === 1 && <PromotionTable />}
            {/* {!selectedAction && selectedTab === 2 && <UpdatePromotion />} */}
            {!selectedAction && selectedTab === 2 &&  <div style={{ display: 'flex', width: '100%' }}>
            {!selectedRecon && <TableContainer
          component={Paper}
          sx={{
            maxWidth: '100%',
            fontSize: '0.75rem',
            transition: 'max-width 0.5s ease'
          }}
        >
        
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Customer Contract</TableCell>
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Account</TableCell>
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Indirect Customer</TableCell>
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Promotion Name</TableCell>
                  {!selectedRecon &&  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Action</TableCell>}
                  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Recon</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                      <Checkbox size="small" />
                    </TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.id}</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.account}</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.indirectCustomer}</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.promotionName}</TableCell>
                     
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                      <IconButton size="small">
                        <EditIcon sx={{ color: '#6a91e6' }} fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <DeleteIcon sx={{ color: '#f26161' }} fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <SaveIcon sx={{ color: '#7ef788' }} fontSize="small" />
                      </IconButton>
                    </TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                      <IconButton size="small" onClick={handleActionClick1}>
                        <ArrowCircleRight sx={{ color: '#6a91e6' }} fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>}
        {selectedRecon && (
          <div style={{ width: '1000px', height:'40px', marginTop:'10px'}}>
            <Button variant="contained" color="secondary" onClick={handleClose}>Back</Button>
            <Reconsillation />
          </div>
        )}
      </div>}



</Box>
            );
};

export default PromotionPage;
