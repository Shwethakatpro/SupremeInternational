import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const UpdatePromotion = () => {
    const rows = [
        { id: 7899, account: 'Ahold', indirectCustomer: '', promotionName: 'Central Promo' },
        { id: 7098, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 90990, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 78667, account: 'All Other Director', indirectCustomer: 'DC Groc', promotionName: '24-78 Val Promo' },
    ];

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '100%', fontSize: '0.75rem' }}>
        <Table size="small">
            <TableHead>
                <TableRow size="small">
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Customer Contract</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Account</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Indirect Customer</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Promotion Name</TableCell>
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} size="small">
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.id}</TableCell>
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.account}</TableCell>
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.indirectCustomer}</TableCell>
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.promotionName}</TableCell>
                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                            <IconButton size="small" >
                                    <EditIcon sx={{ color:'#6a91e6' }} fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon sx={{ color:'#f26161' }} fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <SaveIcon sx={{ color:'#7ef788' }} fontSize="small" />
                                </IconButton>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
};

export default UpdatePromotion;
