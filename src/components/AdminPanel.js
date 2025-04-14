import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AdminPanel = () => {
  const [contractId, setContractId] = useState('');
  const [status, setStatus] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/leases/${contractId}/status?status=${status}`);
      alert('Status updated!');
    } catch (error) {
      console.error(error);
      alert('Error updating status');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Admin Panel</Typography>
      <TextField label="Contract ID" value={contractId} onChange={(e) => setContractId(e.target.value)} fullWidth margin="normal" />
      <TextField label="Status (APPROVED/REJECTED)" value={status} onChange={(e) => setStatus(e.target.value)} fullWidth margin="normal" />
      <Button onClick={handleUpdate} variant="contained" color="primary">Update Status</Button>
    </Container>
  );
};

export default AdminPanel;