import ufrgsMun from "../assets/thumbnails/ufrgs-mun.png";
import laika from "../assets/thumbnails/laika.png";
import corner from "../assets/thumbnails/corner.png";
import paymentReport from "../assets/thumbnails/payment-report.png";

export const projects = [
  {
    title: "UFRGSMUN 2023",
    ghLink: "https://github.com/cdartora/ufrgs-mun-2023",
    isDemoClickable: true,
    demoLink: "https://ufrgs-mun-2023.vercel.app/",
    text: "Criação de uma landing page contendo mais de 6 páginas de texto, a partir do protótipo de redesign da edição de 2023.",
    thumbnail: ufrgsMun,
  },
  {
    title: "Produtora Laika",
    ghLink: "https://github.com/cdartora/laika",
    isDemoClickable: true,
    demoLink: "https://laika-one.vercel.app/",
    text: "Criação de uma página simples para uma produtora independente, com o objetivo de disseminar QR Codes em eventos.",
    thumbnail: laika,
  },
  {
    title: "Corner",
    ghLink: "https://github.com/cdartora/corner",
    isDemoClickable: true,
    demoLink: "https://corner-lac.vercel.app/",
    text: "Exercício de lógica e estados do componente com um relógio pomodoro e uma trilha sonora customizada para minhas sessões de estudo.",
    thumbnail: corner,
  },
  {
    title: "Payment Report",
    ghLink: "https://github.com/cdartora/payment-report",
    isDemoClickable: false,
    text: "Criação de um sistema fullstack para registro de recibos e pagamentos, contendo autenticação e autorização de usuários.",
    thumbnail: paymentReport,
  },
];
