import React, { Component } from 'react';
import {reduxForm, Field } from  'redux-form';
import _ from 'lodash';

const FIELDS = {
    username: {
        type: 'input',
        label: 'Username',
    },
    password: {
        type: 'input',
        label: 'Password'
    }
}

export class LoginForm extends Component {


  renderField = ({
      input,
      label,
      type,
      meta: {touched, error, warning }
  }) => (
          <div className={`fieldContainer ${touched && error ? 'has-danger' : ''}`}>
                <label>{label}</label>
                <input {...input} type={type} className="form-control"/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
          </div>
    )
  

  render() {
    const {handleSubmit, onSubmit, title} = this.props;
    return (
      <form className="loginForm" onSubmit={handleSubmit(props => onSubmit(props))}>
        <h3>{title}</h3>
        <Field name="username" type="text" component={this.renderField} label="Username"/>
        <Field name="password" type="password" component={this.renderField} label="Password"/>
        {/*_.map(FIELDS, this.renderField.bind(this))*/}
        <button type="submit" className="btn btn.primary">Submit</button>
      </form>
    )
  }
}

const validate = (values) => {
    const errors = {};
    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    })
    return errors;
}


export default reduxForm({
    form:'LoginScreen',
    fields: _.keys(FIELDS),
    validate
})(LoginForm)