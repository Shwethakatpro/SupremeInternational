import React,{useState} from 'react'
import CreateSKU from './CreateSKU'
import { Box, Button,TextField } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

function SKUList() {
    const [selectedAction, setSelectedAction] = useState('');
    const [action, setAction] = useState(true);
    const handleActionClick = (action) => {
        setAction(false)
        setSelectedAction(action);
    };
    const handleActionBack = () => {
        setAction(true)
        setSelectedAction('');
    };
    const rows = [
        { SAP_CODE: 7899, SKU_Name: '7899 Ester Combo', PPG: '$6.69 bunny bags', Unit_Weight: '0.25',Unit_Case: '10' },
        { SAP_CODE: 7098, SKU_Name: '7098 Surpies Bags', PPG: '$11.09 bunny bags', Unit_Weight: '1.45',Unit_Case: '11' },
        { SAP_CODE: 90990, SKU_Name: '90990 Peggy Bag', PPG: '$11.09 bunny bags', Unit_Weight: '1.45',Unit_Case: '11' },
        { SAP_CODE: 7899, SKU_Name: '7899 Bunny Pack', PPG: '$11.09 bunny bags', Unit_Weight: '1.45',Unit_Case: '11' },
       

    ];
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px', overflowY: 'auto', justifyContent: 'space-between' }}>
                       
    <Button variant="outlined" size="small" onClick={() => handleActionClick('createSKU')} sx={{ marginLeft: 1, backgroundColor: "#fab369" }}>Create SKU</Button>
    <Button variant="outlined" size="small" onClick={() => handleActionBack()} sx={{ marginLeft: 1, backgroundColor: "#ffff" }}>Back</Button>
   
  {!selectedAction &&<Box sx={{ flexGrow: 1, padding: 2 }}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <TextField label="SAP" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
       
            <TextField label="SAP Name" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
        </Box>
      
      
    </Box>}  
        {selectedAction === 'createSKU' && <CreateSKU />}
        {action && <TableContainer component={Paper} sx={{ maxWidth: '100%', fontSize: '0.75rem' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight:'bold' }}>SAP CODE</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem' ,fontWeight:'bold'}}>SKU Name</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>PPG</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Unit Weight</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Unit Case</TableCell>
                                <TableCell sx={{ padding: '4px', fontSize: '0.75rem',fontWeight:'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><Checkbox size="small" /></TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.SAP_CODE}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.SKU_Name}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.PPG}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.Unit_Weight}</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.Unit_Case}</TableCell>
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
                </TableContainer>}
      



</Box>
  )
}

export default SKUList