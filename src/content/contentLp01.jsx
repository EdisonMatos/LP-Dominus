import bgImg from "../assets/imgs/hero/bgHeroLp.jpg";
import logo from "../assets/imgs/logo/logo.png";
import { infos } from "./content";
import { Baby } from "lucide-react";
import { Users } from "lucide-react";
import { Link } from "lucide-react";
import { Accessibility } from "lucide-react";
import { SmilePlus } from "lucide-react";
import { Gavel } from "lucide-react";
import { Scale } from "lucide-react";
import { ShieldCheck } from "lucide-react";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title: "Martins Advogadas | Pensão alimentícia em Franco da Rocha - SP",
    description:
      "Especialistas em pensão alimentícia em Franco da Rocha - SP. Assessoria jurídica para garantir direitos de crianças e responsáveis com soluções eficientes e humanizadas.",
    keywords:
      "Pensão Alimentícia, Advogada de Pensão, Martins Advogadas, Pensão Alimentícia Franco da Rocha, Advogada Franco da Rocha, Direito de Família, Revisão de Pensão, Acordo de Pensão, Cobrança de Pensão, Atraso na Pensão, Pensão para Filhos, Pai Não Paga Pensão, Execução de Pensão, Pensão Alimentícia Judicial, Valor da Pensão, Guarda e Pensão, Direitos da Criança, Família e Sucessões, Ação de Pensão, Justiça para Pensão.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1 className="text-primary">
          <span className="text-lpTitle text-white">
            Enfrentando problemas com{" "}
          </span>
          pensão alimentícia?
          <span className="text-lpTitle text-white">
            Entenda seus direitos e como resolver!
          </span>
        </h1>
      ),
      subtitle:
        "Cada situação é única, mas seus direitos são garantidos. Conte com um advogado para buscar o que é justo para você e sua família.",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      buttonLabel: "Receba a pensão que você merece!",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "QUEM TEM DIREITO?",
      title:
        "Descubra quem pode solicitar pensão alimentícia e receber o suporte adequado.",
    },
    cards: {
      card1: {
        icon: <Baby />,
        title: "Filhos menores de idade",
        description:
          "Quando os filhos são menores, ambos os pais têm a responsabilidade de prover seu sustento. A pensão alimentícia garante que as necessidades básicas sejam atendidas.",
      },
      card2: {
        icon: <Link />,
        title: "Filhos maiores de idade em dependência",
        description:
          "Mesmo após a maioridade, filhos que ainda dependem financeiramente dos pais por motivo de estudos ou saúde podem solicitar pensão alimentícia.",
      },
      card3: {
        icon: <Users />,
        title: "Ex-cônjuge em situação de necessidade",
        description:
          "Em casos de separação, o cônjuge que não tem condições de se manter pode solicitar pensão alimentícia, desde que comprove a necessidade.",
      },
      card4: {
        icon: <Accessibility />,
        title: "Pais com deficiência ou impossibilidade de trabalho",
        description:
          "Pais que não conseguem se sustentar devido a uma deficiência ou incapacidade temporária também podem ter direito a pensão alimentícia para garantir o seu bem-estar.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "PENSÃO ALIMENTÍCIA JUSTA",
      title: "Solução definitiva para pensão alimentícia",
    },
    paragraph: (
      <p>
        Questões envolvendo pensão alimentícia podem ser desafiadoras, mas estou
        aqui para garantir que seus direitos sejam respeitados. Se você está
        buscando o valor justo para o sustento de seus filhos ou do ex-cônjuge,
        atuo de forma ágil e eficaz para buscar a solução adequada para o seu
        caso.
        <br />
        <br /> Minha missão é assegurar que você receba o que é justo. Entre em
        contato e saiba como posso ajudar!
      </p>
    ),
    buttonLabel: "Exija a pensão alimentícia que você merece!",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que nos escolher para solucionar sua pensão alimentícia?",
    },
    cards: {
      card1: {
        icon: <SmilePlus />,
        title: "Assegure o bem-estar e desenvolvimento dos seus filhos",
        description:
          "A pensão alimentícia não é apenas uma obrigação legal, mas também um direito que visa garantir a alimentação, saúde, educação e lazer para seus filhos. Com o valor adequado, você proporciona um futuro mais seguro e saudável para eles, ajudando no seu crescimento e desenvolvimento integral.",
      },
      card2: {
        icon: <Gavel />,
        title: "Cumprimento da obrigação legal de sustento familiar",
        description:
          "Como pais, ambos têm a responsabilidade de prover o sustento dos filhos, seja em casamento ou separação. A pensão alimentícia é uma forma de garantir que essa obrigação legal seja cumprida, com o respaldo do Código Civil, que assegura os direitos dos menores e incapazes.",
      },
      card3: {
        icon: <Scale />,
        title: "Equilíbrio financeiro na criação dos filhos",
        description:
          "Estabelecer a pensão alimentícia é uma maneira de dividir de forma justa as responsabilidades financeiras entre os pais. Isso assegura que ambos contribuam de maneira equilibrada para as necessidades do filho, proporcionando uma criação saudável e equilibrada.",
      },
      card4: {
        icon: <ShieldCheck />,
        title: "Prevenção de conflitos e promoção de estabilidade",
        description:
          "A pensão alimentícia definida legalmente ajuda a evitar desentendimentos entre os pais, proporcionando estabilidade financeira e emocional para os filhos. Essa segurança traz equilíbrio ao ambiente familiar e minimiza disputas, criando um espaço mais harmonioso para todos.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO ESPERE MAIS",
      title: "Receba a pensão alimentícia que seu filho merece!",
      subtitle: `Seu filho tem direito a um suporte financeiro adequado. Se o outro responsável não está cumprindo com essa obrigação, podemos te ajudar a buscar a pensão alimentícia de forma justa e eficaz. Não deixe essa responsabilidade para depois—entre em contato e saiba como agir!`,
    },
    buttonLabel: "Pedir pensão agora",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      // description: `${infos.email}@${infos.domain}`,
      description: "assessoriajuridica@martinsadvogadas.adv.br",
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
