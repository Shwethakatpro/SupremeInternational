import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const CreatePromotion = () => {
    return (
        <Box>
            <Typography variant="h6">Create Promotion</Typography>
            {/* Add form or other components for creating promotion */}
            <TextField label="Promotion Name" variant="outlined" fullWidth sx={{ marginY: 1 }} />
            <TextField label="Account" variant="outlined" fullWidth sx={{ marginY: 1 }} />
            <Button variant="contained" color="primary">Save</Button>
        </Box>
    );
};

export default CreatePromotion;
