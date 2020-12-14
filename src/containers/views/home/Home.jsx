import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../../redux/home/actions';

const Home = () => {

  const counter = useSelector(state => state.Home.counter);
  const dispatch = useDispatch();

  return(
    <>
      <IconButton onClick={()=>dispatch(decrementCounter())} color="primary" aria-label="upload picture" component="span">
        <RemoveCircle />
      </IconButton>

      <h3>
        {counter}
      </h3>

      <IconButton onClick={()=>dispatch(incrementCounter())} color="primary" aria-label="upload picture" component="span">
        <AddCircle />
      </IconButton>
    </>
  )
}

export default Home;