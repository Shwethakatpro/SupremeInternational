// import React, { useState } from 'react';
// import { Box, Typography, Button, Input, Tabs, Tab, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';

// const UploadPromotion = () => {
//     const [selectedTab, setSelectedTab] = useState(0);

//     const handleTabChange = (event, newValue) => {
//         setSelectedTab(newValue);
//     };

//     const rows = [
//         { fileName: 'Valentine 01.xls', uploadDate: 'Today', uploadedBy: 'John Denner', status: 'Uploading' }
//     ];

//     return (
//         <Box>
//             <Typography variant="h6">Promotion Bulk Upload</Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2 }}>
//                 <Typography variant="body1">Template</Typography>
//                 <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ marginLeft: 1 }}>
//                     Download
//                 </Button>
//             </Box>
//             <Input type="file" sx={{ marginY: 2 }} />
//             <Button variant="contained" color="primary">Upload</Button>
//             <Tabs value={selectedTab} onChange={handleTabChange} aria-label="upload promotion tabs">
//                 <Tab label="Upload File" />
//                 <Tab label="Error Files" />
//                 <Tab label="Success Files" />
//             </Tabs>
//             {selectedTab === 0 && (
//                 <Box sx={{ marginY: 2 }}>

//                     <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//                         <Table size="small">
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>File Name</TableCell>
//                                     <TableCell>Upload On</TableCell>
//                                     <TableCell>Uploaded By</TableCell>
//                                     <TableCell>Status</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {rows.map((row, index) => (
//                                     <TableRow key={index}>
//                                         <TableCell>{row.fileName}</TableCell>
//                                         <TableCell>{row.uploadDate}</TableCell>
//                                         <TableCell>{row.uploadedBy}</TableCell>
//                                         <TableCell>{row.status}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Box>
//             )}
//             {selectedTab === 1 && (
//                 <Box sx={{ marginY: 2 }}>
//                     {/* Add content for Error Files */}
//                     <Typography variant="body1">No error files found.</Typography>
//                 </Box>
//             )}
//             {selectedTab === 2 && (
//                 <Box sx={{ marginY: 2 }}>
//                     {/* Add content for Success Files */}
//                     <Typography variant="body1">No success files found.</Typography>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default UploadPromotion;




import React, { useState } from 'react';
import { Button, Select, MenuItem, Table,Input, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UploadPromotion = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [records, setRecords] = useState([
        // Example data, replace with your actual data
        { id: 1, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        { id: 2, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        { id: 3, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        { id: 4, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        { id: 5, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        { id: 6, contract: '3233', grandparent: 'HEB', indirectCustomer: '-', promotionName: 'Valentines 2024' },
        // Add more records as needed
    ]);

    const [openModal, setOpenModal] = useState(false);
    const [newRowId, setNewRowId] = useState(records.length); // Assuming the last id was 1
    const [templateName, setTemplateName] = useState('');

    const handleTemplateChange = (event) => {
        setSelectedTemplate(event.target.value);
    };

    const handleAddRow = () => {
        setRecords([
            ...records,
            { id: newRowId, contract: '', grandparent: '', indirectCustomer: '', promotionName: '' }
        ]);
        setNewRowId(newRowId );
    };

    const handleSaveTemplate = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmitTemplate = () => {
        setOpenModal(false);
        console.log("Template Name: ", templateName);
        console.log("Rows: ", rows);
        // setOpenModal(false);
        // Add logic to save template and rows
    };
    return (
        <div style={{ padding: '10px' }}>
            <h2>Create Bulk Promotion</h2>
            <div>
                <label style={{ width: '200px', fontSize: '0.875rem', height: '30px' }}>Choose Template: </label>
                <Select
                    value={selectedTemplate}
                    onChange={handleTemplateChange}
                    displayEmpty
                    style={{ width: '200px', fontSize: '0.875rem', height: '30px' }}
                >
                    <MenuItem value="" disabled>Select Template</MenuItem>
                    <MenuItem value="Template001">Template001</MenuItem>
                    <MenuItem value="Template002">Template002</MenuItem>
                    {/* Add more templates as needed */}
                </Select>
                {/* <Input type="file" sx={{ marginY: 2 }} /> */}
            <Button variant="contained" color="primary" sx={{float:'right'}} >Upload</Button>
            </div>

            {selectedTemplate && (
                <>
                    <p>Records Extracted: {records.length}</p>
                    <TableContainer component={Paper} sx={{ maxWidth: '100%', fontSize: '0.75rem' }}>
                        <Table size="small">
                            <TableHead sx={{ backgroundColor: '#F19B4B' }}>
                                <TableRow>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>SL No</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Customer Contract</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Grandparent</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Indirect Customer</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Promotion Name</TableCell>
                                    <TableCell sx={{ padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {records.map((row, index) => (
                                    <TableRow key={row.id} >
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>{index + 1}</TableCell>
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                                            <TextField sx={{
                                                height: '30px',
                                                fontSize: '0.75rem',
                                                '& .MuiInputBase-root': {
                                                    height: '30px', // Adjust the height
                                                    fontSize: '0.75rem', // Adjust the font size
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: '0 14px', // Adjust the padding to fit the height
                                                },
                                            }}
                                                value={row.contract}
                                                onChange={(e) => {
                                                    const newRows = [...records];
                                                    newRows[index].contract = e.target.value;
                                                    setRecords(newRows);
                                                }}
                                            /></TableCell>
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                                            <Select value={row.grandparent} sx={{ width: '200px', fontSize: '0.875rem', height: '30px' }}
                                                onChange={(e) => {
                                                    const newRows = [...records];
                                                    newRows[index].grandparent = e.target.value;
                                                    setRecords(newRows);
                                                }}>
                                                {/* Add more options as needed */}
                                                <MenuItem value="HEB">HEB</MenuItem>
                                                <MenuItem value="Walmart">Walmart</MenuItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }} ><TextField sx={{
                                            height: '30px',
                                            fontSize: '0.75rem',
                                            '& .MuiInputBase-root': {
                                                height: '30px', // Adjust the height
                                                fontSize: '0.75rem', // Adjust the font size
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: '0 14px', // Adjust the padding to fit the height
                                            },
                                        }}
                                            value={row.indirectCustomer}
                                            onChange={(e) => {
                                                const newRows = [...records];
                                                newRows[index].indirectCustomer = e.target.value;
                                                setRecords(newRows);
                                            }}
                                        /></TableCell>
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}><TextField sx={{
                                            height: '30px',
                                            fontSize: '0.75rem',
                                            '& .MuiInputBase-root': {
                                                height: '30px', // Adjust the height
                                                fontSize: '0.75rem', // Adjust the font size
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: '0 14px', // Adjust the padding to fit the height
                                            },
                                        }}
                                            value={row.promotionName}
                                            onChange={(e) => {
                                                const newRows = [...records];
                                                newRows[index].promotionName = e.target.value;
                                                setRecords(newRows);
                                            }}
                                        /></TableCell>
                                        <TableCell sx={{ padding: '4px', fontSize: '0.75rem' }}>
                                            <IconButton size="small">
                                                <DeleteIcon sx={{ color: 'red' }} fontSize="small" onClick={() => {
                          const newRows = records.filter((r) => r.id !== row.id);
                          setRecords(newRows);
                        
                        }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ marginTop: '10px' }}>
                    <IconButton size="small">
                                                <AddCircleIcon sx={{ color: 'blue' }} fontSize="small" onClick={handleAddRow} />
                                            </IconButton>
                        {/* <Button variant="contained" onClick={handleAddRow}>
                            Add Row
                        </Button> */}
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={handleSaveTemplate}>
                            Save Template
                        </Button>
                        <Button variant="contained" color="secondary">
                            Upload Promotions
                        </Button>
                    </div>
                </>
            )}
            <Modal open={openModal} onClose={handleCloseModal}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px', margin: '100px auto', textAlign: 'center' }}>
                    <h3>Save Template</h3>
                    <TextField
                        label="Name"
                        value={templateName}
                        onChange={(e) => setTemplateName(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmitTemplate} style={{ marginTop: '10px' }}>
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default UploadPromotion;

