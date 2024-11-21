import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Validation schema
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required')
    .max(6, 'Password must not be more than 6 characters')  
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
});

function UserForm({ user, onSubmit }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: user ? user.name : '',
      email: user ? user.email : '',
      password:user?user.password:'',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const updatedUser = user ? { ...user, ...values } : values;
      onSubmit(updatedUser);
      navigate('/users');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="form-error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="form-error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="form-error">{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;