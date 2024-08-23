import React, {useState} from 'react';

import { Box, Typography, Button, Input, Tabs, Tab, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';


const UploadDeduction = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const rows = [
        { fileName: 'Valentine 01.xls', uploadDate: 'Today', uploadedBy: 'John Denner', status: 'Uploading' }
    ];
    return (
        <Box>
            <Typography variant="h6">Upload Deduction</Typography>
            {/* Add form or other components for uploading deduction */}
            <Input type="file" sx={{ marginY: 2 }} />
            <Button variant="contained" color="primary">Upload</Button>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="upload promotion tabs">
                <Tab label="Upload File" />
                <Tab label="Error Files" />
                <Tab label="Success Files" />
            </Tabs>
            {selectedTab === 0 && (
                <Box sx={{ marginY: 2 }}>
                 
                    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>File Name</TableCell>
                                    <TableCell>Upload On</TableCell>
                                    <TableCell>Uploaded By</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.fileName}</TableCell>
                                        <TableCell>{row.uploadDate}</TableCell>
                                        <TableCell>{row.uploadedBy}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
            {selectedTab === 1 && (
                <Box sx={{ marginY: 2 }}>
                    {/* Add content for Error Files */}
                    <Typography variant="body1">No error files found.</Typography>
                </Box>
            )}
            {selectedTab === 2 && (
                <Box sx={{ marginY: 2 }}>
                    {/* Add content for Success Files */}
                    <Typography variant="body1">No success files found.</Typography>
                </Box>
            )}
        </Box>
    );
};

export default UploadDeduction;
