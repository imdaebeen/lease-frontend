// src/components/LeaseForm.js
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Container, Typography } from '@mui/material';

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
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-500">Tailwind 적용 완료!</h1>
            </div>
            <main className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
                <Card className="w-full max-w-md shadow-xl">
                    <CardContent className="space-y-6 p-6">
                    <h1 className="text-2xl font-semibold text-center">로그인</h1>
                    <Input placeholder="이메일 입력" />
                    <Input placeholder="비밀번호 입력" type="password" />
                    <Button className="w-full">로그인</Button>
                    </CardContent>
                </Card>
            </main>
        </Container>
    );
};

export default LeaseForm;