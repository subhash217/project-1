import React from "react";
import { Formik } from "formik";

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", pass: "" }}
        onSubmit={() => alert("submited")}
      >
        {() => (
          <form>
            <div>
              <label>User name</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
