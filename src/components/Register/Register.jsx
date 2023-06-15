import React from "react";
import { useFormik } from "formik";

export default function Register() {

function handleRegister(values){

    console.log(values)

};


function validate(values){

    let errors ={};
    if(!values.name){

        errors.name = "name required"
    }

    if(!values.email){

        errors.email = "email is required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "email is invalid";

    }

    if(!values.username){

        errors.username = "username is required"
    }
    else if (!/\s/.test(values.email)) {
        errors.email = "username is invalid please remove space";

    } 
    


    if(!values.password){

        errors.password = "password is required"
    }
  
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}|[\]\\:";'<>?,./])(?=.{8,})/.test(values.password)) {
        errors.password = "password not valid";
        

    }


    if(!values.repassword){

        errors.repassword = "password is required"
    }
   
    else if (values.password !== values.repassword) {
        errors.repassword = "password and repassword does not match";

    }

    return errors

}

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      repassword: "", 
    },
    validate,
    onSubmit:handleRegister
  });

  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h3>Register</h3>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
          onBlur={formik.handleBlur}
            className="form-control mb-2"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            name="name"
            id="name"
          />
{formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div>
: null}


          <label htmlFor="email">email</label>
          <input
            className="form-control mb-2"
            value={formik.values.email}
            onBlur={formik.handleBlur}

            onChange={formik.handleChange}
            type="text"
            name="email"
            id="email"
          />
{formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div>
: null}

<label htmlFor="username">username</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}

            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            name="username"
            id="username"
          />
{formik.errors.username && formik.touched.username ? <div className="alert alert-danger">{formik.errors.username}</div>
: null}



<label htmlFor="password">password</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}

            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            id="password"
          />
{formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div>
: null}


<label htmlFor="repassword">repassword</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}

            value={formik.values.repassword}
            onChange={formik.handleChange}
            type="password"
            name="repassword"
            id="repassword"
          />
{formik.errors.repassword && formik.touched.repassword ? <div className="alert alert-danger">{formik.errors.repassword}</div>
: null}

<button type="sumbit" className="btn bg-info">submit</button>

        </form>
      </div>
    </>
  );
}
