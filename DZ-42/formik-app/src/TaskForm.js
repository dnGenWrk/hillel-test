import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Result from "./Results";

function TaskForm() {
  const [result, setResult] = useState({});
  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().max(25, "Must be 25 characters or less").required("Required"),
      email: Yup.string().email("Invalid email adress").required("Required"),
      phone: Yup.number()
        .test("len", "Must be 12 numbers", (val) => {
          if (val) return val.toString().length === 12;
        })
        .typeError("Must be a numbers")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setResult({ ...values });
      formik.resetForm();
    },
  });

  function handleFormFocus() {
    setResult({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header__title">FORMIK FORM</h2>
      </header>
      <div className="App-section">
        <form onSubmit={formik.handleSubmit} className="App-section__form" onFocus={handleFormFocus}>
          <label htmlFor="fname">Name:</label>
          <input id="fname" name="fname" type="text" {...formik.getFieldProps("fname")} />
          <div className="form-err-field"> {formik.touched.fname && formik.errors.fname ? formik.errors.fname : null}</div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" {...formik.getFieldProps("email")} />
          <div className="form-err-field">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</div>
          <label htmlFor="phone">Phone:</label>
          <input id="phone" name="phone" type="text" {...formik.getFieldProps("phone")} />
          <div className="form-err-field">{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</div>
          <button type="submit" className="form-cta">
            Submit
          </button>
        </form>
      </div>
      {result.fname && result.email && result.phone ? <Result {...result}></Result> : null}
    </div>
  );
}
export default TaskForm;
