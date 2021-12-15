import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { authentication, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import swal from "sweetalert";
import { doc, setDoc } from "firebase/firestore";

const SignUpForm = () => {
  return (
    <div className="flex flex-col">
      <div className="p-5 text-3xl">
        <Link to="/" className="float-left">
          <BiArrowBack />
        </Link>
      </div>

      <div className=" flex flex-col items-center justify-center">
        <div className="flex justify-center ">
          <img
            className="w-1/2"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png"
            alt=""
          />
        </div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
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

            if (!values.name) {
              errors.name = "Campo requerido";
            }

            return errors;
          }}
          onSubmit={(values) => {
            createUserWithEmailAndPassword(
              authentication,
              values.email,
              values.password
            )
              .then(async (authentication) => {
                const data = {
                  id: authentication.user.uid,
                  name: values.name,
                  email: authentication.user.email,
                  img: "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639602688/Mind%20Balance%20App/PandaProfile_aqzxzf.png",
                  aboutMe: "",
                };
                const docRef = doc(db, "usuarios", authentication.user.uid);
                await setDoc(docRef, data);
              })
              .catch((err) => {
                if (err.code === "auth/email-already-in-use")
                  return swal("El email ingresado ya se encuentra en uso");
                if (err.code === "auth/invalid-email")
                  return swal("Ingrese un email válido");
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              className=" w-full justify-items-center bg-white shadow-xl 
                rounded px-8 pb-8 mb-4 bg-white-300
                lg:w-1/2"
              onSubmit={handleSubmit}
            >
              <h1
                className="text-3xl text-center 
                    text-sky-300 font-extrabold mb-8 "
              >
                Crea tu perfil
              </h1>
              <div className="mb-4 w-full">
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nombre"
                />
                {errors.name && touched.name && errors.name}
              </div>
              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Contraseña"
                />
                {errors.password && touched.password && errors.password}
              </div>
              <div className="flex justify-center mb-6 w-full lg: w-1/3">
                <button
                  className="w-1/2 self-center bg-sky-300 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Regístrate
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
