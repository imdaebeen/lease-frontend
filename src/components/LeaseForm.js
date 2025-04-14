// src/components/LeaseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const LeaseForm = () => {
    const [formData, setFormData] = useState({
        userId: 'testUser',
        vehicleModel: '',
        monthlyPayment: 0,
        leaseTerm: 0,
        startDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/leases', formData, {
                auth: {
                    username: 'admin',
                    password: 'secret'
                }
            });
            console.log('Response:', response.data);
            alert('Lease application submitted!');
        } catch (error) {
            console.error('Submission error:', error.response?.status, error.response?.data, error.message);
            alert('Error submitting application');
        }
    };

    return (
        <Container>
            <Typography variant="h4">Lease Application</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="userId" label="User ID" value={formData.userId} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="vehicleModel" label="Vehicle Model" value={formData.vehicleModel} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="monthlyPayment" label="Monthly Payment" type="number" value={formData.monthlyPayment} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="leaseTerm" label="Lease Term (months)" type="number" value={formData.leaseTerm} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="startDate" label="Start Date" type="date" value={formData.startDate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                <Button type="submit" variant="contained" color="primary">Submit Application</Button>
            </form>
        </Container>
    );
};

export default LeaseForm;