import React from 'react';
import { Box, TextField } from '@mui/material';

const PromotionForm = () => {
    return (
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <TextField label="Account" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
            <TextField label="Promotion Duration" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
            <TextField label="Season" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
            <TextField label="SKU" variant="outlined" size="small" sx={{ 
                        marginRight: 1, 
                        width: '150px', 
                        '& .MuiInputBase-root': { height: '30px' },
                        '& .MuiInputLabel-root': { fontSize: '0.75rem' } // Adjust label font size
                    }}  />
        </Box>
    );
};

export default PromotionForm;
