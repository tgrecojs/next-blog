import React from 'react';
import renderField from '../../shared/renderField';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { submitTweetAction } from './reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, actions } from './reducer';
const { submit } = actions;
const { getValue } = selectors;

import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

// const ContactForm = ()


const wrappedForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)
// export default connect(mapState, { submit, handleChange })(addPost);
