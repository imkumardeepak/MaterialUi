import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function LiveShow() {
    const [data, setData] = useState({ total_in_count: 0, total_out_count: 0 });
    const [error, setError] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    // Fetch data from API
    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.10.129:5000/api/get_attendance_counts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        }
    };

    useEffect(() => {
        // Fetch data on component mount
        fetchData();

        // Set up polling
        const intervalId = setInterval(() => {
            fetchData();
            setCurrentDateTime(new Date().toLocaleString());
        }, 1000); // Poll every 5 seconds

        // Cleanup polling on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: { xs: 'auto', sm: '80px' }, // Adjust height based on screen size
                    backgroundColor: '#673ab7',
                    borderBottom: '1px solid #ddd',
                    position: 'sticky',
                    boxShadow: 3,
                    top: 0,
                    zIndex: 1200,
                    padding: { xs: '10px', sm: '0px' }, // Adjust padding based on screen size
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '3rem' }, // Adjust font size based on screen size
                        color: 'white',
                        textAlign: 'center', // Center text horizontally
                    }}
                >
                    Hindalco Mouda
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px',
                }}
            >
                <Card sx={{ width: '100%', padding: '0px',boxShadow: 3,mt:3 }}>
                <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                <TableRow sx={{ backgroundColor: '#4e342e' }}>
            <TableCell
                sx={{
                    fontSize: { xs: '1rem', sm: '1.9rem' },
                    color: 'white',
                }}
                align="center"
            >
                Type
            </TableCell>
            <TableCell
                sx={{
                    fontSize: { xs: '1rem', sm: '1.9rem' },
                    color: 'white',
                }}
                align="center"
            >
                Total IN
            </TableCell>
            <TableCell
                sx={{
                    fontSize: { xs: '1rem', sm: '1.9rem' },
                    color: 'white',
                }}
                align="center"
            >
                Total OUT
            </TableCell>
        </TableRow>
                                </TableHead>
                                <TableBody>
            <TableRow>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    EMPLOYEE
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_in_count}
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_out_count}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    CONTRACTOR
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_in_count}
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_out_count}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    VISITOR
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_in_count}
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_out_count}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    DRIVER
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_in_count}
                </TableCell>
                <TableCell
                    sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    align="center"
                >
                    {data.total_out_count}
                </TableCell>
            </TableRow>
        </TableBody>
                            </Table>
                        </TableContainer>
                </Card>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    borderTop: '1px solid #ddd',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.5rem' },
                        color: '#333',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                >
                    Current Date and Time: {currentDateTime}
                </Typography>
            </Box>
        </>
    );
}
