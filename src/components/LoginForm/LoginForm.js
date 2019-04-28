import React, { Component } from 'react';
import {reduxForm, Field } from  'redux-form';
import _ from 'lodash';
import styles from './LoginForm.module.css'

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
      meta: {touched, error, warning },
      placeholder
  }) => (
          <div className={`${styles.fieldContainer} ${touched && error ? 'has-danger' : ''}`}>
                <input {...input} type={type} placeholder={label} className={`${styles.input} form-control`}/>
                <p className="errorText">
                    {touched ? error : ''}
                </p>
          </div>
    )
  

  render() {
    const {handleSubmit, onSubmit, title} = this.props;
    return (
      <form className={styles.container} onSubmit={handleSubmit(props => onSubmit(props))}>
        <h1 className={styles.title}>{title}</h1>
        <Field name="username" type="text" component={this.renderField} label="Username"/>
        <Field name="password" type="password" component={this.renderField} label="Password"/>
        {/*_.map(FIELDS, this.renderField.bind(this))*/}
        <button type="submit" className={styles.button}>Submit</button>
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
