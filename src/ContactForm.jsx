import React, { useState } from "react";
import { CircleNotch, Check } from "phosphor-react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      id="contact-form"
      className="bg-[#f8f8f8] max-w-xl p-5 m-5 rounded-md shadow-md w-full"
      action="https://formsubmit.co/carlosdalsoler@gmail.com"
      method="POST"
    >
      <label htmlFor="name" className="flex flex-col gap-2 items-start w-full">
        Nome
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full p-2 py-3 focus:outline-none bg-[#f8f8f8] border border-gray-400 rounded-md mb-5"
          required
        />
      </label>

      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 py-3 focus:outline-none bg-[#f8f8f8] border border-gray-400 rounded-md mb-5"
          required
        />
      </div>

      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full h-32 p-2 py-3 focus:outline-none bg-[#f8f8f8] border border-gray-400 rounded-md mb-5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex justify-center w-full rounded-md p-1 py-2 border-2 border-gray-400 hover:bg-gray-200 transition-colors transition-all font-normal"
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
