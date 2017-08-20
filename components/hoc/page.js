import React from 'react';
import Head from 'next/head';
import withEnv from './env/firebase/withEnv.component';
import { nextConnect } from '../../store/index';
import { initializeDB } from './env/firebase/withEnv.reducer';
import { initializeBlog } from './env/google/googleEnv.reducer';
import { compose } from 'redux';
import withGoogle from './env/google/googleEnv.component';
import withMui from './styles/withStyles';

export default Component => compose(
  nextConnect(state => state),
  // withGoogle,
  // withEnv,
  withMui
)(Component);
