import { signInWithEmailAndPassword } from "@firebase/auth";
import { authentication } from "../../firebase/firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert"

const LogInForm = () => {
  return (
    <div className="w-full">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Por favor, ingresa un correo.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "El correo sólo puede contener letras, números, puntos y guiones.";
          }
          if (!values.password) {
            errors.password = "Por favor, ingresa una contraseña";
          } else if (values.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 carácteres";
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
              return swal("Ingrese un email válido");
            else if (err.code === "auth/user-not-found")
              return swal ("El correo electrónico no está registrado");
            else if (err.code === "auth/wrong-password")
              return swal("Contraseña Incorrecta");
            console.log(err.code);
          });
        }}
      >
        <Form className="mt-6">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full mb-4 mr-4 lg:w-1/3">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="name"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage className="text-sm text-red-700"  name="email" component="div" />
            </div>

            <div className="w-full mb-4 mr-4 lg:w-1/3">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              <ErrorMessage className="text-sm text-red-700" name="password" component="div" />
            </div>

            <div className="lg:w-1/3">
              <button
                className="w-full mb-4 mr-4 bg-sky-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
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
