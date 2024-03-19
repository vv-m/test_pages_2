import React, { useState, useEffect } from 'react';
import { TextField, Box, Typography, Divider, FormControl, Button } from '@mui/material';

function CalculatorForm() {
  const [weight, setWeight] = useState('');
  const [size1, setSize1] = useState('');
  const [size2, setSize2] = useState('');
  const [size3, setSize3] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const calculateResult = () => {
    if (!weight || !size1 || !size2 || !size3) {
      setResult('Заполните все поля');
      return;
    }
    const res = Number(weight) * Number(size1) * Number(size2) * Number(size3);
    setResult(`Результат: ${res}`);
  };

  const clearFields = () => {
    setWeight('');
    setSize1('');
    setSize2('');
    setSize3('');
    setResult('');
  };

  useEffect(calculateResult, [weight, size1, size2, size3]);

  return (
    <Box
      sx={{
        '& .MuiFormControl-root': { m: 1, minWidth: '25ch' },
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',
        fontFamily: 'Play, sans-serif'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" sx={{ fontFamily: 'Play, sans-serif' }}>Рассчитать результат</Typography>
      <FormControl variant="outlined">
        <TextField
          label="Вес, кг"
          variant="outlined"
          value={weight}
          onChange={(e) => handleChange(e, setWeight)}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          label="Размер 1, см"
          variant="outlined"
          value={size1}
          onChange={(e) => handleChange(e, setSize1)}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          label="Размер 2, см"
          variant="outlined"
          value={size2}
          onChange={(e) => handleChange(e, setSize2)}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          label="Размер 3, см"
          variant="outlined"
          value={size3}
          onChange={(e) => handleChange(e, setSize3)}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={clearFields} sx={{ my: 2, fontFamily: 'Play, sans-serif' }}>
        Очистить
      </Button>
      <Divider sx={{ width: '100%', mb: 2 }} />
      <Typography variant="body1" sx={{ color: result === 'Заполните все поля' ? 'red' : 'black', fontFamily: 'Play, sans-serif' }}>
        {result || 'Результат будет отображен здесь'}
      </Typography>
    </Box>
  );
}

export default CalculatorForm;
