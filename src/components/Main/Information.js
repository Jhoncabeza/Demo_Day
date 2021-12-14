import React from "react";

const Information = () => {
  return (
    <>
      <div className="my-20">
        <h2 className="text-center text-4xl mt-20 text-purple-500 font-bold">
          ¿Por qué usar Mind Balance?
        </h2>
        <p className="text-center text-2xl my-10">
          Mind Balance es una plataforma diseñada principalmente para
          estudiantes de todas las edades que necesiten recursos que les
          permitan manejar mejor la presión académica, mejorar su productividad,
          administrar su tiempo y entrar en contacto con el componente
          psicosocial.
        </p>
        <div className="flex flex-col text-center">
          <div className="flex items-center self-start mx-10 w-1/2 justify-center">
            <div>
              <h4 className="font-bold text-xl">Desarrolla autodisciplina</h4>
              <p className="text-md text-center m-4">
                Con ayuda de nuestros tips y herramientas lograrás determinación
                y cumplirás más fácil tus objetivos.
              </p>
            </div>
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/girl-sitting-on-books-with-laptop-by-oblik-studio_mg7wlo.png"
              alt=""
            />
          </div>
          <div className="flex flex-row-reverse self-end items-center mx-10 w-1/2 justify-center">
            <div>
              <h4 className="font-bold text-xl">
                Construye hábitos saludables
              </h4>
              <p className="text-md text-center m-4">
                Te ayudaremos a agregar rutinas diarias y a crear hábitos
                saludables que impacten positivamente en tu día a día.
              </p>
            </div>
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/fruits-glass-of-water-dumbbell-by-oblik-studio_nxm47z.png"
              alt=""
            />
          </div>
          <div className="flex items-center self-start mx-10 w-1/2 justify-center">
            <div>
              <h4 className="font-bold text-xl">
                Aprende a gestionar mejor tu tiempo
              </h4>
              <p className="text-md text-center m-4">
                Aprenderás a manejar mejor tu tiempo identificando las causas de
                la procastinación, aprendiendo a identificar la prioridad de tus
                tareas, creando planes diarios, rutinas y límites.
              </p>
            </div>
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295409/Mind%20Balance%20App/planning-sheets-of-paper-coffee-by-oblik-studio_ecuv46.png"
              alt=""
            />
          </div>
          <div className="flex flex-row-reverse self-end items-center mx-10 w-1/2 justify-center">
            <div>
              <h4 className="font-bold text-xl">
                Reconoce, previene y afronta el estrés académico
              </h4>
              <p className="text-md text-center m-4">
                Utilizando nuestras herramientas, aprenderás técnicas de
                relajación y técnicas para mejorar la productividad en general
                en tu vida que a la vez te ayudarán a identificar y gestionar
                mejor el estrés académico.
              </p>
            </div>
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295407/Mind%20Balance%20App/books-by-oblik-studio_xmfgoc.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <footer className="bg-sky-300 text-white font-bold text-center p-4 hover:bg-white hover:text-sky-300">
        &copy; Todos los derechos reservados.
      </footer>
    </>
  );
};

export default Information;
