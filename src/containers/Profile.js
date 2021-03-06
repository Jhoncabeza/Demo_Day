import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import { authentication, db } from "../firebase/firebase";


const Profile = () => {
  const { user } = useContext(AppContext);
  const [userInformation, setUserInformation] = useState({
    id: "",
    email: "",
    name: "",
    img: "",
    aboutMe: ""
  })

  const profile = async () => {
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);
    setUserInformation(docSnap.data())
  }

  const handleDelete = async () => {
    await deleteDoc(doc(db, "usuarios", user.uid));
    authentication.signOut();
  };

  useEffect(() => {
    profile()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="lg:h-110v xl:h-110v 2xl:h-110v">
      <div className=" p-2 text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome className="text-sky-300 m-7" />
        </Link>
      </div>
      <h1 className="text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Perfil
      </h1>
      <div className="flex flex-col items-center mt-10 mb-10">
        <div className="flex flex-col items-center rounded-2xl p-4 bg-gray-100 w-4/5 lg:flex justify-center w-1/2">
          <div className="rounded-l">
            <img
              src={userInformation.img}
              className="w-40 rounded-full mb-4"
              alt="avatar"
            />
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "", aboutMe: "",
              id: user.uid, img: user.photoURL
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Por favor, ingresa un correo.";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Ingrese un email v??lido";
              }

              if (!values.name) {
                errors.name = "Por favor, ingresa un nombre.";
              }

              if (!values.aboutMe) {
                errors.aboutMe = "Por favor, ingresa una descripci??n.";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              async function asyncCall() {
                await updateDoc(doc(db, "usuarios", user.uid), values)
              }
              asyncCall();
              resetForm();
              profile()
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
              <form onSubmit={handleSubmit} >
                <div className="flex flex-col ">
                  <div className="flex flex-row w-auto my-2 justify-center">
                    <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                      Nombre:
                    </span>
                    <input
                      className="text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 "
                      name="name"
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={userInformation.name}
                    />

                  </div>
                  <div className="text-sm text-red-700">
                    {errors.name && touched.name && errors.name}
                  </div>

                  <div className="flex flex-row w-auto my-2 justify-center">
                    <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                      Correo:
                    </span>
                    <input
                      className="text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1"
                      name="email"
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={userInformation.email}
                    />
                  </div>
                  <div className="text-sm text-red-700">
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="flex flex-row w-auto my-2 justify-center">
                    <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                      Sobre m??:
                    </span>
                    <input
                      className="text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1"
                      name="aboutMe"
                      id="aboutMe"
                      type="text"
                      value={values.aboutMe}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={userInformation.aboutMe}
                    />
                  </div>

                  <div className="text-sm text-red-700">
                    {errors.aboutMe && touched.aboutMe && errors.aboutMe}
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      className="w-full mb-4 mt-4 bg-sky-300 
                        hover:bg-sky-400 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48"
                      type="submit"

                    >
                      Actualizar datos
                    </button>
                    <button
                      className="w-full  bg-red-400 
                        hover:bg-red-500 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48"
                      onClick={handleDelete}
                    >
                      Eliminar cuenta
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
