import { signInWithEmailAndPassword } from "@firebase/auth";
import { authentication } from "../../firebase/firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LogInForm = () => {
  return (
    <div className="w-full">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Campo requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Ingrese un email válido";
          }
          if (!values.password) {
            errors.password = "Campo requerido";
          } else if (values.password.length < 6) {
            errors.password = "La contraseña debe ser de almenos 6 caráteres";
          }
          return errors;
        }}
        onSubmit={(values) => {
          signInWithEmailAndPassword(
            authentication,
            values.email,
            values.password
          ).catch((err) => {
            if (err.code === "auth/invalid-email")
              return alert("Ingrese un email válido");
            else if (err.code === "auth/user-not-found")
              return alert("El correo electrónico no está registrado");
            else if (err.code === "auth/wrong-password")
              return alert("Contraseña Incorrecta");
            console.log(err.code);
          });
        }}
      >
        <Form className="mt-6">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full mb-4 mr-4 lg:w-48">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="name"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="w-full mb-4 mr-4 lg:w-48">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <button
                className="w-full mb-4 mr-4 bg-sky-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48"
                type="submit"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;
