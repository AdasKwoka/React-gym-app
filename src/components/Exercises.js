import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const EXERCISES_PER_PAGE = 9;

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * EXERCISES_PER_PAGE;
  const indexOfFirstExercise = indexOfLastExercise - EXERCISES_PER_PAGE;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);
      setCurrentPage(1);
    }

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{mt: { lg: '110px' }}} mt='50px' p='20px'>
      <Typography variant='h3' mb='36px'>
        Showing results
      </Typography>
      <Stack 
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{
          gap: {
            lg: '110px',
            xs: '50px'
          }
        }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > EXERCISES_PER_PAGE && (
            <Pagination 
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / EXERCISES_PER_PAGE)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises;