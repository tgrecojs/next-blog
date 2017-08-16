import React from 'react';
import Head from 'next/head';

import withEnv from './hoc/withEnv.component';
import { nextConnect } from '../store/index';
import { initializeDB } from './hoc/withEnv.reducer';
import { compose } from 'redux';
import withMui from './hoc/withStyles';

export default Component => compose(
  nextConnect(state => state, {
    initializeDB
  }),
  withEnv,
  withMui
)(Component);
