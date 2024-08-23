// CreateSKU.js
import React from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CreateSKU = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px', overflowY: 'auto', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Create SKU</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <TextField label="SAP Code" placeholder="Placeholder" variant="outlined" size="small" />
                <TextField label="SKU Name" placeholder="Placeholder" variant="outlined" size="small" />
                <FormControl variant="outlined" size="small">
                    <InputLabel>PPG</InputLabel>
                    <Select
                        label="PPG"
                        defaultValue=""
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        {/* Add more options as needed */}
                    </Select>
                </FormControl>
                <TextField label="Unit Weight" placeholder="Placeholder" variant="outlined" size="small" />
                <TextField label="Unit Case" placeholder="Placeholder" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                <Button variant="outlined" sx={{ marginRight: 1 }}>Save</Button>
                <Button variant="outlined">Save</Button>
            </Box>
        </Box>
    );
};

export default CreateSKU;
