import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Controls from '../../components/controls/Controls';
import { UseForm, Form } from '../../components/UseForm';
import * as employeeService from '../../services/EmployeeService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const validate = (fieldvalues = values) => {
    let errorMessages = { ...errors };
    if ('fullName' in fieldvalues)
      errorMessages.fullName = fieldvalues.fullName
        ? ''
        : 'This field is required.';
    if ('email' in fieldvalues)
      errorMessages.email = /$^|.+@.+..+/.test(fieldvalues.email)
        ? ''
        : 'Email is not valid.';
    if ('mobile' in fieldvalues)
      errorMessages.mobile =
        fieldvalues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldvalues)
      errorMessages.departmentId =
        fieldvalues.departmentId.length !== 0 ? '' : 'This field is required.';
    setErrors({
      ...errorMessages,
    });
    if (fieldvalues === values)
      return Object.values(errorMessages).every((x) => x === '');
  };
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = UseForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name='email'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name='mobile'
            label='Mobile No'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name='city'
            label='City'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollections()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name='hireDate'
            label='Hire Date'
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type='submit' text='Submit' />
            <Controls.Button color='inherit' text='Reset' onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
