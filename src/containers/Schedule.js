// import React, { useState } from "react";
// import { Formik, ErrorMessage, Field } from "formik";
// import { FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import * as emailjs from "emailjs-com";

// const Schedule = () => {
//   const [formSend, setFormSend] = useState(false);

//   return (
//     <div>
//       <div className="p-2 text-5xl text-gray-600">
//         <Link to="/Home">
//           <FaHome />
//         </Link>
//         <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
//           Agenda tu cita
//         </h1>
//       </div>
//       <div className="flex flex-col md:flex-row">
//         <div className="flex items-center justify-center w-screen md:w-1/2">
//           <div className="flex items-center ">
//             <div className="container mx-auto">
//               <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
//                 <div className="text-center">
//                   <p className="mt-0 text-gray-400 dark:text-gray-400">
//                     Llena el siguiente formulario para comunicarte con nosotros.
//                   </p>
//                 </div>
//                 <div className="m-7">
//                   <Formik
//                     initialValues={{
//                       name: "",
//                       email: "",
//                       phone: "",
//                       message: "",
//                     }}
//                     validate={(valores) => {
//                       let errores = {};

//                       //Validación nombre
//                       if (!valores.name) {
//                         errores.name = "Por favor, ingresa un nombre.";
//                       } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
//                         errores.name =
//                           "El nombre sólo puede contener letras y espacios.";
//                       }

//                       //Validación correo
//                       if (!valores.email) {
//                         errores.email = "Por favor, ingresa un correo.";
//                       } else if (
//                         !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
//                           valores.email
//                         )
//                       ) {
//                         errores.email =
//                           "El correo sólo puede utilizar letras(a-z), números(0-9), puntos(.) y guiones bajos(_).";
//                       }

//                       //Validación teléfono
//                       if (!valores.phone) {
//                         errores.phone = "Por favor, ingresa un teléfono.";
//                       } else if (!/^[0-9\s]{1,10}$/.test(valores.phone)) {
//                         errores.phone = "Ingresa un número de teléfono válido.";
//                       }

//                       //Validación mensaje
//                       if (!valores.message) {
//                         errores.message = "Por favor, ingresa un mensaje.";
//                       } else if (!/^[a-zA-Z\s]{1,200}$/.test(valores.message)) {
//                         errores.message =
//                           "El mensaje sólo puede contener letras y espacios.";
//                       }
//                       return errores;
//                     }}
//                     onSubmit={(values, { resetForm }) => {
//                       emailjs
//                         .send(
//                           process.env.REACT_APP_FORMIK_service_6zwi6oj,
//                           process.env.REACT_APP_FORMIK_template_3i1qjqh,
//                           values,
//                           process.env
//                             .REACT_APP_FORMIK_user_JfkNX3UNYbtsvNT9Ex3LI
//                         )
//                         .then(
//                           () => {
//                             resetForm();
//                             setFormSend(true);
//                             setTimeout(() => {
//                               setFormSend(false);
//                             }, 3000);
//                           },
//                           (error) => {
//                             console.log(error.text);
//                           }
//                         );
//                     }}
//                   >
//                     {({ errors, handleSubmit }) => (
//                       <form
//                         id="form"
//                         className="formit"
//                         onSubmit={handleSubmit}
//                       >
//                         <div className="mb-6">
//                           <label
//                             htmlFor="name"
//                             className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
//                           >
//                             Nombre completo
//                           </label>
//                           <Field
//                             type="text"
//                             name="name"
//                             id="name"
//                             placeholder="Ana Pérez"
//                             className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
//                           />
//                           <ErrorMessage
//                             className="error"
//                             name="name"
//                             component={() => (
//                               <div className="text-sm text-red-700">
//                                 {errors.name}
//                               </div>
//                             )}
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             htmlFor="email"
//                             className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
//                           >
//                             Correo electrónico
//                           </label>
//                           <Field
//                             type="email"
//                             name="email"
//                             id="email"
//                             placeholder="anaperez@gmail.com"
//                             className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
//                           />
//                           <ErrorMessage
//                             name="email"
//                             component={() => (
//                               <div className="text-sm text-red-700">
//                                 {errors.email}
//                               </div>
//                             )}
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             htmlFor="phone"
//                             className="text-sm text-gray-600 dark:text-gray-400"
//                           >
//                             Número de teléfono
//                           </label>
//                           <Field
//                             type="number"
//                             name="phone"
//                             id="phone"
//                             placeholder="3123456789"
//                             className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
//                           />
//                           <ErrorMessage
//                             className="error"
//                             name="phone"
//                             component={() => (
//                               <div className="text-sm text-red-700">
//                                 {errors.phone}
//                               </div>
//                             )}
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             htmlFor="message"
//                             className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
//                           >
//                             Escribe tu mensaje
//                           </label>
//                           <Field
//                             as="textarea"
//                             rows="5"
//                             name="message"
//                             id="message"
//                             placeholder="Tu mensaje"
//                             className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
//                           />
//                           <ErrorMessage
//                             className="error"
//                             name="message"
//                             component={() => (
//                               <div className="text-sm text-red-700">
//                                 {errors.message}
//                               </div>
//                             )}
//                           />
//                         </div>
//                         <div className="mb-6 justify-center">
//                           <button
//                             className="w-full bg-sky-300
//                         hover:bg-black-700 text-white font-bold py-2 px-3
//                         rounded focus:outline-none focus:shadow-outline
//                         lg:w-48"
//                             type="submit"
//                           >
//                             Enviar
//                           </button>
//                           {formSend && (
//                             <p className="text-sm text-green-700">
//                               Mensaje enviado con éxito!
//                             </p>
//                           )}
//                         </div>
//                       </form>
//                     )}
//                   </Formik>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center p-5 w-screen md:w-1/2">
//           <img
//             src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/girl-sitting-on-armchair-with-laptop-by-oblik-studio_vx9kus.png"
//             alt="girl in sofa"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;
