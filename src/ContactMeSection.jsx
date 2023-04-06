import ContactForm from "./ContactForm";

export default function ContatctMeSection() {
  return (
    <div id="contact" className="mt-20 flex justify-center w-full mb-20">
      <section className="flex flex-col items-center projects text-center max-w-3xl px-4">
        <span className="hero-title text-3xl font-semibold text-slate-800 hover:underline hover:underline-offset-4 cursor-pointer px-2">
          Vamos Trabalhar Juntos?
        </span>
        <span className="project-text text-xl font-light text-slate-700 mb-10">
          Transforme sua visão em uma solução personalizada e eficaz com a ajuda
          de um desenvolvedor freelancer dedicado a entregar resultados
          modernos.
        </span>
        <ContactForm />
      </section>
    </div>
  );
}
