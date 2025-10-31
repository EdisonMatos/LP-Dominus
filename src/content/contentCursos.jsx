import bannerCurso1 from "../assets/imgs/cursos/imagemCursoCarrosel1.webp";
import bannerCurso2 from "../assets/imgs/cursos/imagemCursoCarrosel2.webp";

const contentCursos = {
  texts: {
    curso1: {
      title: "JORNADA NEXUS",
      subtitle: (
        <p className="text-paragraph4">Do Aprendizado do Primeiro Ano à Blindagem dos Próximos Três</p>
      ),
      date: "21 de Novembro",
      time: "09:00",
      description: (
        <p className="text-black font-secondFont ">
          💼 <strong>Data:</strong> 21 de Novembro de 2025 (Quinta-feira)
          <br />
          💼 <strong>Local:</strong> Hotel Laghetto Siena – Gramado/RS
          <br />
          💼 <strong>Público:</strong> Prefeitos, vice-prefeitos, secretários e
          assessores estratégicos
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            08h30 - 09h00 | CREDENCIAMENTO
          </span>
          <h1 className="font-semibold text-paragraph3">
            09h00 - 09h30 | ABERTURA INSTITUCIONAL
          </h1>
          <h1 className=" text-paragraph3">
            <strong> 09h30 - 10h45 | LÚCIO UBERDAN</strong> <br />{" "}
            <span className="text-gray-500">
              Marketing Político na Gestão: Comunicação Estratégica para
              Construir Autoridade e Blindar Sua Imagem
            </span>
          </h1>
          <h1 className="font-semibold text-paragraph3">
            10h45 - 11h00 | COFFEE BREAK
          </h1>
          <h1 className=" text-paragraph3">
            <strong> 11h00 - 12h15 | JULIANO COLOMBO</strong>
            <br />
            <span className="text-gray-500">
              Da gestão de equipes à entrega de resultados - desafios do
              presente e do futuro para o Gestor Público
            </span>
          </h1>
          <h1 className="font-semibold text-paragraph3">
            12h15 – 12h30 | MOMENTO DE FERRAMENTAS ESTRATÉGICAS
          </h1>
          <h1 className="font-semibold text-paragraph3">
            12h30 - 13h30 | ALMOÇO ESTRATÉGICO (Almoço por conta dos
            participantes)
          </h1>
          <h1 className="font-semibold text-paragraph3">
            13h30 - 14h00 | CASES
          </h1>
          <h1 className=" text-paragraph3">
            <strong> 14h00 - 15h15 | TULIO MILMAN</strong> <br />
            <span className="text-gray-500">
              Desafios da Comunicação em Tempos de Redes Sociais e IA: Como
              Perguntar Certo, Comunicar Claro e Usar Inteligência Artificial a
              Favor da Sua Gestão
            </span>
          </h1>
          <h1 className=" text-paragraph3">
            <strong> 15h15 - 16h30 | ROBERTA SAWITZKI</strong>
            <br />
            <span className="text-gray-500">
              Planejamento e Execução de Projetos Públicos: Essencialismo e
              Simplicidade para Eliminar Sobrecarga e Multiplicar Entregas
            </span>
          </h1>
          <h1 className="font-semibold text-paragraph3">
            16h30 - 16h45 | MOMENTO DE CONEXÃO COM O CIDADÃO
          </h1>
          <h1 className="font-semibold text-paragraph3">
            16h45 - 17h00 | ENCERRAMENTO ESTRATÉGICO
          </h1>
          <h1 className="font-semibold text-paragraph3">
            17h00 - 18h30 | COQUETEL ESTRATÉGICO DE INTEGRAÇÃO
          </h1>
          <br />
          <strong>
            <i>
              {" "}
              Este não é um "coquetel de confraternização". É a construção da
              sua rede de apoio estratégico para os próximos 3 anos.
            </i>
          </strong>
          <br />
          <br />
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-info-icon lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Confira mais informações na programação
          </span>
        </p>
      ),
      descriptionModal: (
        <p className="text-paragraph2 desktop1:text-paragraph2">
          {/* 🗓 <strong>PROGRAMAÇÃO</strong>
          <br />
          <br /> */}
          <span className="font-semibold text-paragraph3">
            08h30 - 09h00 | CREDENCIAMENTO E CAFÉ DE BOAS-VINDAS
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-paragraph3">
            09h00 - 09h30 | ABERTURA INSTITUCIONAL
          </h1>
          <span className="text-paragraph2 text-secondary">
            09h00 - 09h30 | Boas-vindas + O Conceito NEXUS
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-paragraph3">
            BLOCO 1: COMUNICAÇÃO QUE BLINDA
          </h1>
          <span className="text-paragraph2 text-secondary">
            09h30 - 10h45 | LÚCIO UBERDAN
          </span>
          <br />
          <br />
          🎤 <strong>Palestra:</strong> "Marketing Político na Gestão:
          Comunicação Estratégica para Construir Autoridade e Blindar Sua
          Imagem"
          <br />
          💼 <strong>Especialista:</strong> Consultor | Pós-graduado em
          Marketing Político e Comunicação Eleitoral | 20 anos de experiência em
          projetos, gestões e campanhas nacionais e estaduais
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            10h45 - 11h00 | COFFEE BREAK (15 min)
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-paragraph3">
            BLOCO 2: DECISÕES QUE SUSTENTAM
          </h1>
          <span className="text-paragraph2 text-secondary">
            11h00 - 12h15 | JULIANO COLOMBO (1h15)
          </span>
          <br />
          <br />
          🎤 <strong>Palestra:</strong> "Da gestão de equipes à entrega de
          resultados - desafios do presente e do futuro para o Gestor Público"
          <br />
          💼 <strong>Especialista:</strong> Consultor | Palestrante|
          Especialista em Gestão Empresarial, Financeira e Marketing Estratégico
          | Superintendente do SESI/RS por 15 anos
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            12-15 – 12h30 - MOMENTO DE FERRAMENTAS ESTRATÉGICAS
          </span>
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            12h30 - 13h30 | ALMOÇO ESTRATÉGICO (1h)
          </span>
          <br />
          🍽️ Almoço por conta dos participantes
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            13h30 - 14h00 | CASES
          </span>
          <br />
          <br />
          <br />
          <h1 className="font-semibold text-paragraph3">
            BLOCO 3: PERGUNTAS E PROPÓSITO
          </h1>
          <span className="text-paragraph2 text-secondary">
            14h00 - 15h15 | TULIO MILMAN (1h15)
          </span>
          <br />
          <br />
          🎤 <strong>Palestra:</strong> "Desafios da Comunicação em Tempos de
          Redes Sociais e IA: Como Perguntar Certo, Comunicar Claro e Usar
          Inteligência Artificial a Favor da Sua Gestão"
          <br />
          💼 <strong>Especialista:</strong> Consultor | Jornalista por 27 anos
          do Grupo RBS | Especialista em IA – MIT | Storytelling pela Stanford |
          Autor de "Onde Estás?"
          <br />
          <br />
          <br />
          <h1 className="font-semibold text-paragraph3">
            BLOCO 4: EXECUÇÃO QUE ENTREGA
          </h1>
          <span className="text-paragraph2 text-secondary">
            15h15 - 16h30 | ROBERTA SAWITZKI (1h15)
          </span>
          <br />
          <br />
          🎤 <strong>Palestra:</strong> "Planejamento e Execução de Projetos
          Públicos: Essencialismo e Simplicidade para Eliminar Sobrecarga e
          Multiplicar Entregas"
          <br />
          💼 <strong>Especialista:</strong> Doutora em Administração (UFRGS +
          Universidade de Trento, Itália) | Ex-gerente PMO Banrisul e SESI/RS |
          Professora de Gestão de Projetos e Aprendizagem Organizacional
          <br /> <br />
          <span className="text-paragraph2 text-secondary">
            16h30 - 16h45 - MOMENTO DE CONEXÃO COM O CIDADÃO
          </span>
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            16h45 - 17h00 | ENCERRAMENTO ESTRATÉGICO (15 min)
          </span>
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            17h00 - 18h30 | COQUETEL ESTRATÉGICO DE INTEGRAÇÃO
          </span>
          <br />
          📝 Momento exclusivo para aprofundar conexões com gestores e
          palestrantes.
          <br />
          <br />
        </p>
      ),
      banner: {
        img1: bannerCurso1,
        img2: bannerCurso2,
      },
    },
  },
};

export default contentCursos;
