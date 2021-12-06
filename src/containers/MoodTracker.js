import React, { useState } from "react";
import Calendar from "react-calendar";
import { BiArrowBack } from "react-icons/bi";
import {
  BsEmojiSmile,
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiNeutral,
  BsEmojiHeartEyes,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const MoodTracker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="p-5 text-3xl">
        <Link to="/Tools" className="float-left">
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
        Mood Tracker
      </h3>
      <div className="flex flex-col justify-center items-center">
        <p>Colorea cada día dependiendo de tu estado de ánimo.</p>
        <p className="my-6">Selecciona un emoji:</p>
        <div className="flex justify-center items-center mb-6">
          <BsEmojiHeartEyes className="text-pink-500 font-bold text-3xl mx-10 cursor-pointer" />
          <BsEmojiSmile className="text-yellow-300 text-3xl mx-10 cursor-pointer" />
          <BsEmojiNeutral className="text-green-700 text-3xl mx-10 cursor-pointer" />
          <BsEmojiAngry className="text-red-500 text-3xl mx-10 cursor-pointer" />
          <BsEmojiFrown className="text-sky-500 text-3xl mx-10 cursor-pointer" />
        </div>
        <p>Luego selecciona el día correspondiente en el calendario:</p>
      </div>
      <div className="flex justify-center items-center text-center my-8">
        <Calendar className="bg-gray-100 w-full text-bold lg:w-1/5" onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default MoodTracker;
