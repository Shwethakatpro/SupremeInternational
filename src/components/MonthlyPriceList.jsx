import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const MonthlyPriceList = () => {
  const [listPrices, setListPrices] = useState([
    { id: 1, date: 'Thu Aug 22 2024', price: '8.00' },
    { id: 2, date: 'Fri Nov 01 2024', price: '8.50' }
  ]);

  const [newDate, setNewDate] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleAddPrice = () => {
    const newList = [
      ...listPrices,
      { id: listPrices.length + 1, date: newDate, price: newPrice }
    ];
    setListPrices(newList);
    setNewDate('');
    setNewPrice('');
  };

  const handleDeletePrice = (id) => {
    const newList = listPrices.filter((item) => item.id !== id);
    setListPrices(newList);
  };

  return (
    <Box sx={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px', overflowY: 'auto', justifyContent: 'space-between' }}>
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Monthly SKU List Price
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder=" 99900002 - 5oz Sugar Free Christmas Bag - Caramel Tile 8"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box mb={1} sx={{ font:'small-caption'}}>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Typography variant="body1">
        <strong>SKU Name:</strong> 99900002 - 5oz Sugar Free Christmas Bag - Caramel Tile 8
      </Typography>
    </Grid>
   
    <Grid item xs={6}>
      <Typography variant="body1">
        <strong>Alternative Season:</strong> Xmas
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">
        {/* <strong>List Price EA:</strong> <Button variant="contained" color="primary">$7.29</Button> */}
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">
        <strong>Product Category:</strong> Xmas Bag C1T2C1XM01
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">
        <strong>List Price EA:</strong> <Button variant="contained" color="primary">$7.29</Button>
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">
        <strong>PPG:</strong> $5.49 Xmas Bag C1T2C1XM01C019X000
      </Typography>
    </Grid>
  </Grid>
</Box>

      <Paper elevation={3}>
        <Box p={2} bgcolor="chocolate" color="#fff">
          <Typography variant="h6">Add / View List Price</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ backgroundColor: 'orange', color: 'white' }}>START DATE</TableCell>
                <TableCell align="center" style={{ backgroundColor: 'orange', color: 'white' }}>LIST PRICE ($)</TableCell>
                <TableCell align="center" style={{ backgroundColor: 'orange', color: 'white' }}>CREATED</TableCell>
                <TableCell align="center" style={{ backgroundColor: 'orange', color: 'white' }}>UPDATED</TableCell>
                <TableCell align="center" style={{ backgroundColor: 'orange', color: 'white' }}>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPrices.map((price) => (
                <TableRow key={price.id}>
                  <TableCell align="center">{price.date}</TableCell>
                  <TableCell align="center">${price.price}</TableCell>
                  <TableCell align="center">Novasic Tracy</TableCell>
                  <TableCell align="center">08/07/2024, 1:25 PM</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDeletePrice(price.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell align="center">
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    placeholder="Start Date"
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="List Price"
                  />
                </TableCell>
                <TableCell align="center">Novasic Tracy</TableCell>
                <TableCell align="center">08/07/2024, 1:25 PM</TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleAddPrice}>
                    <AddIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="secondary">Clear</Button>
        <Button variant="contained" color="primary">Save</Button>
      </Box>
    </Container>
    </Box>
  );
};

export default MonthlyPriceList;
