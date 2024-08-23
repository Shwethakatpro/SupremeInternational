import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { ArrowCircleRight } from '@mui/icons-material';
import Reconsillation from './Reconsillation/Reconsillation'
const ReconciliationList = () => {
    const [selected,setSelected]=useState(false)
    
    const rows = [
        { id: 7899, account: 'Ahold', indirectCustomer: '', promotionName: 'Central Promo' },
        { id: 7098, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 90990, account: 'All Other Director', indirectCustomer: 'Director Grocer', promotionName: '24 Val Promo' },
        { id: 78667, account: 'All Other Director', indirectCustomer: 'DC Groc', promotionName: '24-78 Val Promo' },
    ];

    const handleActionClick = () => {
setSelected(true)
       
    };
    const handleClose = () => {
        setSelected(false)
               
            };

    return (
        <div style={{ display: 'flex', width: '100%' }}>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: selected ? '50%' : '100%',
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
                  {!selected &&  <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Action</TableCell>}
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
                    {!selected && <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                      <IconButton size="small">
                        <EditIcon sx={{ color: '#6a91e6' }} fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <DeleteIcon sx={{ color: '#f26161' }} fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <SaveIcon sx={{ color: '#7ef788' }} fontSize="small" />
                      </IconButton>
                    </TableCell>}
                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                      <IconButton size="small" onClick={handleActionClick}>
                        <ArrowCircleRight sx={{ color: '#6a91e6' }} fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
        {selected && (
          <div style={{ width: '48%', transition: 'width 0.5s ease', paddingLeft:'20px', height:'50px', marginTop:'0'}}>
            <button onClick={handleClose}>Close</button>
            <Reconsillation />
          </div>
        )}
      </div>
    //    <TableContainer component={Paper} sx={{ maxWidth: '100%', fontSize: '0.75rem' }}>
    //     {!selected &&<Table size="small">
    //         <TableHead>
    //             <TableRow>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Customer Contract</TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Account</TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Indirect Customer</TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Promotion Name</TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Action</TableCell>
    //                 <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>Reconsillation</TableCell>
    //             </TableRow>
    //         </TableHead>
    //         <TableBody>
    //             {rows.map((row) => (
    //                 <TableRow key={row.id}>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.id}</TableCell>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.account}</TableCell>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.indirectCustomer}</TableCell>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.promotionName}</TableCell>
    //                     <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
    //                         <IconButton size="small" >
    //                                 <EditIcon sx={{ color:'#6a91e6' }} fontSize="small" />
    //                             </IconButton>
    //                             <IconButton size="small">
    //                                 <DeleteIcon sx={{ color:'#f26161' }} fontSize="small" />
    //                             </IconButton>
    //                             <IconButton size="small">
    //                                 <SaveIcon sx={{ color:'#7ef788' }} fontSize="small" />
    //                             </IconButton>
    //                         </TableCell>
    //                      <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>   <IconButton size="small" >
    //                                 <ArrowCircleRight sx={{ color:'#6a91e6' }} fontSize="small" onClick={() => handleActionClick()} />
    //                             </IconButton></TableCell>
    //                 </TableRow>
    //             ))}
    //         </TableBody>
    //     </Table>}
    //     {
    //         selected && <Reconsillation/>
    //     }
    // </TableContainer>
    );
};

export default ReconciliationList;
