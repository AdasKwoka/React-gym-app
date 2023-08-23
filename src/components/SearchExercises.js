import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  const [search, setSearch] = useState();

  const handleSearch = async () => {
    if (search) {
      // TODO: uncomment once fetchData is ready
      // const exercisesData = await fetchData();
    }
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='37px'
      p='20px'
    >
      <Typography
        mb='50px'
        textAlign='center'
        fontWeight={700} 
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px'
          }
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {
              lg: '800px',
              xs: '350px'
            },
            backgroundColor: '#FFF',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase())
          }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px'
            },
            fontSize: {
              lg: '20px',
              xs: '14px'
            },
            height: '56px',
            position: 'absolute',
            right: 0
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;