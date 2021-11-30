import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Blogs
      </h1>
      <div class="grid overflow-hidden grid-cols-2 grid-rows-12 gap-3 m-6">
        <div class="box row-start-1 row-span-3">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638135864/Mind%20Balance%20App/timer_vniw0v.jpg"
            alt="clock"
          />
          <h2 className="text-2xl text-gray-50">
            ¿Qué es el método Pomodoro y para qué sirve?
          </h2>
          <span className="text-xl text-gray-50">
            <em>por</em> Yesenia Naranjo
          </span>
        </div>
        <div class="box row-start-3 row-span-5 col-start-2 col-span-2">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638136043/Mind%20Balance%20App/emojis_htdmp6.jpg"
            alt="emojis"
          />
          <h2 className="text-2xl text-gray-50">
            Los beneficios de llevar tu propio <em>mood tracker</em>
          </h2>
          <span className="text-xl text-gray-50">
            <em>por</em> Yesenia Naranjo
          </span>
        </div>
        <div class="box row-start-8 row-span-2 col-start-2 col-span-2">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-3184360_mnxhjh.jpg"
            alt="team working"
          />
          <h2 className="text-2xl text-gray-50">
            Las mejores técnicas para trabajar en grupo.
          </h2>
          <span className="text-xl text-gray-50">
            <em>por</em> Yesenia Naranjo
          </span>
        </div>
        <div class="box row-start-4 row-span-1 col-start-auto">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-301920_xu1lcq.jpg"
            alt="study"
          />
          <h2 className="text-2xl text-gray-50">
            Los mejores hábitos de estudio.
          </h2>
          <span className="text-xl text-gray-50">
            <em>por</em> Yesenia Naranjo
          </span>
        </div>
        <div class="box row-start-5 row-span-3">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271974/Mind%20Balance%20App/pexels-photo-3755761_qek2kq.jpg"
            alt="woman holding her head"
          />
          <h2 className="text-2xl text-gray-50">
            ¿Cómo manejar el estrés y la ansiedad causados por la presión académica?
          </h2>
          <span className="text-xl text-gray-50">
            <em>por</em> Yesenia Naranjo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
