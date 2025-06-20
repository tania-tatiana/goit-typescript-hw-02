import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSearch, images }) {
  return (
    <>
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          if (values.topic.trim() === "") {
            toast.error("Please enter the word");
            return;
          }
          onSearch(values.topic);
          actions.resetForm();
        }}
      >
        <Form className={styles.form}>
          <Field
            type="text"
            name="topic"
            className={styles.input}
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </>
  );
}
