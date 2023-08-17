
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios'; 
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('Trying to login with email:', email, 'and password:', password);

      const response = await axios.post('http://194.44.93.225:5001/api/User/login', {
        email,
        password,
      });

      console.log('Server response:', response.data);

      if (response.status === 200) {
        navigate('/home');
      } else {
        navigate('/error');
      }
    } catch (error) {
      console.error('Error while making API request:', error);
      navigate('/error');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          sx: { color: 'white' },
        }}
        InputLabelProps={{
          sx: { color: 'white' },
        }}
        sx={{ width: 300, mt: 2, borderColor: 'white' }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          sx: { color: 'white' },
        }}
        InputLabelProps={{
          sx: { color: 'white' },
        }}
        sx={{ width: 300, mt: 2, borderColor: 'white' }}
      />
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 3 }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
