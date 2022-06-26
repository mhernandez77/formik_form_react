import React from "react";
import './index.css';
import {useFormik} from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validation: values => {
      let errors = {};
      if(!formik.values.email) errors.password = "Field Required";
      if(!formik.values.password) errors.password = "Field Required";
      return errors;
    }
  });

  return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>Email</div>
          <input
              id="emailField"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
          />
          {formik.errors.email
          ?
          <div style={{color: 'red'}}>
                {formik.errors.email}
          </div>
          : null
          }

        <div>Password</div>
        <input
          id="pswField"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        { formik.errors.password
          ?
          <div style={{color: 'red'}}>
            {formik.errors.password}
          </div>
            :
            null
        }
        <button
          id="submitBtn"
          type="Submit"
        >
          Submit
        </button>
       </form>
     </div>
  );
}

    export default App;
