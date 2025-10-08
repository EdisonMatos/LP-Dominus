import bannerCurso1 from "../assets/imgs/hero/imagemCursoLegislativo.webp";

const contentCursos = {
  texts: {
    curso1: {
      title: "🌸 OUTUBRO + QUE ROSA ",
      date: "21 à 23 de Outubro",
      time: "09:00",
      description: (
        <p className="text-black">
          <span className="font-bold text-paragraph4 text-secondary">
            Imersão em Políticas Efetivas para o Bem-Estar Social e Turístico,
            com Foco em Mulheres e Pessoas Idosas
          </span>
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            Um evento inspirador voltado preferencialmente às mulheres gestoras,
            vereadoras, secretárias e assessoras, que todos os dias fazem a
            diferença em suas funções e lideram com propósito e determinação.
          </span>
          <br />
          <br />
          <span className="text-paragraph2 text-secondary">
            Durante três dias de imersão prática e reflexiva, serão debatidas
            políticas públicas, projetos e ações voltadas ao bem-estar social e
            turístico, com ênfase na valorização feminina e no cuidado com
            pessoas idosas.
          </span>
          <br />
          <br />
          📅 <strong>Datas:</strong> 21, 22 e 23 de outubro
          <br />
          📍 <strong>Local:</strong> R. General Andrade Neves, nº 90 – Sala 91,
          9º Andar, Auditório Avohai, Centro Histórico – Porto Alegre/RS
          <br />
          💰 <strong>Investimento:</strong> R$ 1.250,00
          <br />
          📲 <strong>Informações:</strong> (51) 99732-8822
          <br />
          🔗 <strong>www.dominuscursos.com.br</strong>
          <br />
          <br />
          <strong>
            Participe e fortaleça sua trajetória com conhecimento, networking,
            capacitação e o olhar de especialistas renomados na gestão pública.
          </strong>
          <br />
          <br />
        </p>
      ),
      descriptionModal: (
        <p className="text-paragraph2 desktop1:text-paragraph2">
          {/* 🗓 <strong>PROGRAMAÇÃO</strong>
          <br />
          <br /> */}
          📅 <strong>21 de outubro – Terça-feira:</strong>
          <br />
          <br />
          <span className="opacity-80">9h00 – “Cota não é só um número”</span>
          <br />
          <p className="font-bold py-2">
            👩‍⚖ Dra. Maritânia Dallagnol – Advogada:
          </p>
          As cotas como instrumento de justiça social e inclusão. Avanços,
          desafios e perspectivas para a igualdade real.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            10h30 – “Trajetória da Mulher na Política”
          </span>
          <br />
          <p className="font-bold py-2">
            👩‍💼 Mônica Leal – Secretária Municipal de Transparência (PMPA),
            ex-vereadora de Porto Alegre:
          </p>
          Desafios e conquistas da mulher nos espaços de poder. Transparência e
          liderança como pilares da representatividade.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            14h00 – “De Pequena Empresária à Vereadora”
          </span>
          <br />
          <p className="font-bold py-2">
            👩‍🔧 Cláudia Araújo – Vereadora em Porto Alegre:
          </p>
          A força do empreendedorismo feminino e os caminhos para a política com
          propósito.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            15h30 – “Conteúdos de Cultura Afro e Indígena Obrigatórios nas
            Escolas”
          </span>
          <br />
          <p className="font-bold py-2">
            👩🏽‍🎓 Eliane Almeida (Negrita) – Doutora em Educação (UFRGS),
            Presidente do Instituto Apakani:
          </p>
          Educação para a diversidade: desafios e experiências na implementação
          da Lei 11.645/08.
          <br />
          <br />
          <hr className="border-b-[1px] border-" />
          <br />
          📅 <strong>22 de outubro – Quarta-feira:</strong>
          <br />
          <br />
          <span className="opacity-80">
            9h00 – “Da Participação Popular ao Parlamento”
          </span>
          <br />
          <p className="font-bold py-2">👩‍💼 Dep. Fed. Denise Pessôa:</p>
          Da mobilização social à representação política: a importância da voz
          feminina nas decisões públicas.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            10h15 – “Mulheres Idosas: Acessibilidade e Rede de Cuidados na
            Administração Pública”
          </span>
          <br />
          <p className="font-bold py-2">👩‍🎓 Elenara Stein Leitão – Arquiteta:</p>
          Desenho universal e políticas de inclusão: cidades mais acessíveis e
          humanas para todas as idades.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            14h00 – “Envelhecimento no RS e o Desafio das Políticas Públicas”
          </span>
          <br />
          <p className="font-bold py-2">
            👩‍⚕ Cátia Siqueira – Coordenadora da Unidade Especial de Atenção à
            Pessoa Idosa:
          </p>
          O cenário do envelhecimento e as estratégias de atenção e proteção
          social no Estado.
          <br />
          <br />
          <br />
          <span className="opacity-80">
            15h30 – “Cuidando da Ansiedade no Serviço Público”
          </span>
          <br />
          <p className="font-bold py-2">
            🧠 Grace Gomes – Psicóloga clínica e do trabalho, especialista em
            transtornos de ansiedade e avaliação psicossocial:
          </p>
          Saúde mental e equilíbrio emocional como pilares do desempenho e da
          boa gestão.
          <br />
          <br />
          <hr className="border-b-[1px] border-" />
          <br />
          📅 <strong>23 de outubro – Quinta-feira:</strong>
          <br />
          <br />
          <span className="opacity-80">
            9h00 – “Turismo, Planejamento e Empoderamento das Mulheres”
          </span>
          <br />
          <p className="font-bold py-2">🌍 Angelice Motter – Turismóloga:</p>
          O turismo como ferramenta de desenvolvimento, autonomia e protagonismo
          feminino.
          <br />
          <br />
          <span className="opacity-80">
            Encerramento – Roda de Conversa “Cuidar & Transformar”
          </span>
          <br />
          Síntese dos aprendizados, integração de experiências e construção
          coletiva de compromissos para políticas públicas efetivas.
        </p>
      ),
      banner: { bannerCurso1 },
    },
  },
};

export default contentCursos;
