import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, action) => {
    if (values.query.trim() === "") {
      toast("Please, enter text to search for images!", {
        duration: 4000,
        position: "top-right",
        style: {
          border: "1px solid #0c3742b4",
          padding: "16px",
          color: "#000000b7",
        },
      });
    }
    action.resetForm();
    onSubmit(values.query);
  };
  return (
    <header className={css.header}>
      <Toaster />
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
