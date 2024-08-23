import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Box, Tabs, Tab, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
// import { blue, green, red } from '@mui/material/colors';


const PromotionList = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedAction, setSelectedAction] = useState('');
    const rows = [
        { id: 7899, account: 'Ahold', indirectCustomer: '', promotionName: 'Central Promo' },
        { id: 7098, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 90990, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 78667, account: 'All Other Director', indirectCustomer: 'DC Groc', promotionName: '24-78 Val Promo' },

    ];
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setSelectedAction(''); // Clear action on tab change
        setCurrentView('promotion'); // Switch back to promotion view on tab change
    };

    const handleActionClick = (action) => {
        setSelectedAction(action);
        setCurrentView('promotion'); // Switch back to promotion view on action click
    };

    return (

        <>
           
                <TableContainer component={Paper} sx={{ maxWidth: '100%', fontSize: '0.75rem' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight:'bold' }}>Customer Contract</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Account</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Indirect Customer</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Promotion Name</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.id}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.account}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.indirectCustomer}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.promotionName}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                                        <IconButton size="small" >
                                            <EditIcon sx={{ color: '#6a91e6' }} fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small">
                                            <DeleteIcon sx={{ color: '#f26161' }} fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small">
                                            <SaveIcon sx={{ color: '#7ef788' }} fontSize="small" />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
              
        </>


    );
};

export default PromotionList;
