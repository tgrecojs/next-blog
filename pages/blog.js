import React from 'react';
import page from '../components/hoc/page';
import homePage from '../components/blog/blog.component';
import { initializeBlog } from '../components/hoc/env/google/googleEnv.reducer';
import blogEnv from '../components/hoc/env/google/googleEnv.component';
import { connect } from 'react-redux';


export default page(homePage);
