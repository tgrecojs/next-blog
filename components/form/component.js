import React from 'react';
import renderField from '../../shared/form/renderField';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { submitTweetAction } from './reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, actions } from './reducer';
const { submit } = actions;
const { getValue } = selectors;
import withEnv from '../hoc/env/firebase/withEnv.component'
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import renderSelectField from '../../shared/form/selectField';
import { email, minLength60, required } from '../../shared/form/validation';
import { initializeDB } from '../hoc/env/firebase/withEnv.reducer';



const handleSubmit = (val) => console.log(`${val}`);

const handleChange = e => ({
  type: 'TEXT_AREA_CHANGED',
  payload: e.target.value
});


const onSubmit = vals => ({
  type: 'FORM_SUBMITTED',
  payload: vals
});


let ContactForm = props => {
  const { handleSubmit, onSubmit, pristine } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        component={renderField}
        validate={[required]}
        label="Your Name"
      />
      <Field
        name="companyName"
        component={renderField}
        label="Company Name"
      />
      <Field
        name="email"
        component={renderField}
        validate={[required, email]}
        label="Email"
      />
      <Field
        name="reason"
        component={renderSelectField}
        label="Purpose of Contact"
      >
        <MenuItem value="JavaScript Development Opportunity" primaryText="JavaScript Development" />
        <MenuItem value="Writing or educational video inquiry" primaryText="Writing or Video Content" />
        <MenuItem value="Other Teaching Inquiry" primaryText="Other Teaching Inquiry" />
      </Field>
      <Field name="additionalInfo"
        component={renderField}
        validate={[required, minLength60]}
        label="Additional info regarding why you're reching out"
        rows={4}
      />
      <div>
        <RaisedButton type="submit" label="Submit"  primary={true} />
      </div>
    </form>
  );
};

const wrappedForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm);


export default connect(undefined, {
  initializeDB,
  onSubmit})(withEnv(wrappedForm));
