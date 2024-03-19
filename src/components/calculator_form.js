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
    setResult(`Себестоимость: ${res} руб.`);
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
        // '& .MuiFormControl-root': { m: 1, minWidth: '300px' },
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',
        fontFamily: 'Play, sans-serif'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" sx={{ fontFamily: 'Play, sans-serif', marginBottom: 3}}>Расчет себестоимости</Typography>
      <FormControl variant="outlined">
        <TextField sx={{marginBottom: 2}}
          label="Вес, кг"
          variant="outlined"
          value={weight}
          onChange={(e) => handleChange(e, setWeight)}
        />
        <TextField sx={{marginBottom: 2}}
          label="Размер 1, см"
          variant="outlined"
          value={size1}
          onChange={(e) => handleChange(e, setSize1)}
        />
        <TextField sx={{marginBottom: 2}}
                   
          label="Размер 2, см"
          variant="outlined"
          value={size2}
          onChange={(e) => handleChange(e, setSize2)}
        />
        <TextField sx={{marginBottom: 2}}
          label="Размер 3, см"
          variant="outlined"
          value={size3}
          onChange={(e) => handleChange(e, setSize3)}
        />
      <Button variant="contained"
              color="primary"
              onClick={clearFields}
              sx={{ marginTop: 1,
                fontFamily: 'Play, sans-serif',
                width: '300px',
                height: '56px'
              }}>
        Очистить
      </Button>
      <Divider sx={{ width: 'inherit', m: 2 }} />
      <Typography variant="body1" sx={{ color: result === 'Заполните все поля' ? 'red' : 'black', fontFamily: 'Play, sans-serif' }}>
        {result || 'Результат будет отображен здесь'}
      </Typography>
      </FormControl>
    </Box>
  );
}

export default CalculatorForm;
