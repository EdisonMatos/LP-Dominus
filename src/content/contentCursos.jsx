import bannerCurso1 from "../assets/imgs/cursos/imagemCursoCarrosel1.webp";
// import bannerCurso2 from "../assets/imgs/cursos/imagemCursoCarrosel2.webp";

const contentCursos = {
  texts: {
    curso1: {
      title: "1º CONGRESSO GAÚCHO DE COMUNICAÇÃO PÚBLICA",
      subtitle: (
        <p className="text-paragraph4">
          O elo estratégico entre a gestão pública e a confiança do cidadão.
        </p>
      ),
      date: "01 de junho de 2026",
      time: "09:00",
      description: (
        <div className="text-black font-secondFont">
          <p>
            <span>
              "A comunicação pública não é mais um setor de apoio; ela é o ativo
              central da legitimidade de qualquer gestão. No dia 1º de junho,
              Porto Alegre recebe as maiores referências do Brasil para discutir
              como enfrentar a desinformação, gerir crises de imagem e
              implementar a transparência real através da Linguagem Simples."
            </span>
          </p>
          <br />
          <strong>Informações de Acesso:</strong>
          <br />
          <strong>Data:</strong> 1º de Junho de 2026 (Segunda-feira)
          <br />
          <strong>Local:</strong> AIAMU – Rua dos Andradas, 1234, Centro
          Histórico – Porto Alegre/RS
          <br />
          <strong>Público:</strong> Gestores, secretários/assessores e
          servidores dos Poderes Executivo, Legislativo e Judiciário, além de
          lideranças de Instituições Representativas e órgãos de controle.
          <br />
          <br />
          <strong>O que você vai encontrar:</strong>
          <p className="text-paragraph3">
            Transparência Radical: A técnica da Linguagem Simples como
            ferramenta de gestão.
          </p>
          <p className="text-paragraph3">
            Combate à Desinformação: Proteção institucional em um ecossistema de
            redes sociais voláteis.
          </p>
          <p className="text-paragraph3">
            Blindagem Reputacional: Protocolos de crise testados em instituições
            públicas e órgãos de representação.
          </p>
          <p className="text-paragraph3">
            Inteligência de Dados: Como sair do "achismo" e medir resultados
            reais na comunicação.
          </p>
          <br />
          <strong>Programação Confirmada:</strong>
          <p className="text-paragraph3">
            <strong>Sandra Bitencourt:</strong> Doutora em Comunicação (UFRGS).
            Jornalista e Pesquisadora. Assessora de Comunicação do Tesouro do
            Estado (RS) e coordenadora regional da Rede Nacional de Combate à
            Desinformação (RNCD). Diretora do Instituto Novos Paradigmas.
          </p>
          <p className="text-paragraph3">
            <strong>Soraia Hanna:</strong> Sócia-diretora executiva da Critério.
            Jornalista e autora do livro "Gerindo crises, construindo
            reputação". Especialista em gestão de imagem com trajetória em
            quatro governos estaduais (RS) e na Assembleia Legislativa do Rio
            Grande do Sul.
          </p>
          <p className="text-paragraph3">
            <strong>Maria José Finatto:</strong> Doutora em Estudos da Linguagem
            e especialista em Acessibilidade Textual. Pesquisadora premiada pelo
            Google (LARA 2019). Coautora do projeto "LDO + Simples" do Tesouro
            do Estado (RS) e professora pesquisadora da UFRGS.
          </p>
          <p className="text-paragraph3">
            <strong>Daniela Machado:</strong> Jornalista e especialista em
            Letramento Digital (Rhode Island/EUA). Coordenadora do EducaMídia
            (Instituto Palavra Aberta) e coautora do Guia da Educação Midiática.
            Atua na formação de educadores e apoio a formuladores de políticas
            públicas.
          </p>
          <p className="text-paragraph3">
            <strong>Rodrigo Abella:</strong> Diretor-executivo da Social MedIA
            Gov. Graduado em Administração Pública (UDESC). Especialista em
            inteligência de dados, IA e transparência pública, com 15 anos de
            atuação no fortalecimento da gestão da comunicação governamental.
          </p>
          <p className="text-paragraph3">
            <strong>Leandro Rolim:</strong> Doutor em Comunicação Audiovisual
            (Salamanca). Superintendente de Comunicação Digital na EBC (Empresa
            Brasil de Comunicação). Professor da Universidade Católica de
            Brasília, com 20 anos de experiência em inovação e mídia pública.
          </p>
          <br />
          <strong>Inscrições:</strong>
          <p className="text-paragraph3">
            <strong>Presencial (AIAMU/POA):</strong> R$ 475,00 (Vagas
            limitadas).
          </p>
          <p className="text-paragraph3">
            <strong>Virtual, ao vivo (Transmissão Nacional):</strong> R$ 79,90.
          </p>
          <br />
          <br />
          <p className="text-paragraph3">
            "Este não é um curso teórico de faculdade. É o encontro onde se
            define o padrão da comunicação institucional do Rio Grande do Sul
            para os próximos anos."
          </p>
        </div>
      ),
      descriptionModal: (
        <div className="text-paragraph2 desktop1:text-paragraph2">
          <strong>Programação Sugerida (Ordem de Fala)</strong>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            08h00 – 08h30 | Credenciamento
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            08h30 – 09h00 | Abertura Institucional
          </span>
          <br />
          <span className="text-secondary">
            (Dominus + Autoridades convidadas)
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            09h00 – 10h00 | SANDRA BITENCOURT
          </span>
          <br />
          🎤 <strong>Tema:</strong> Interesse, imagem e Comunicação Pública em
          tempos instáveis: os circuitos que precisamos decifrar.
          <br />
          <span className="text-secondary">
            (Foco: Contextualização teórica e o papel da comunicação na
            democracia atual).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            10h00 – 10h15 | Coffee Break Estratégico
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            10h30 – 11h30 | MARIA JOSÉ BOCORNY FINATTO (UFRGS)
          </span>
          <br />
          🎤 <strong>Tema:</strong> Acessibilidade Textual e Terminológica:
          Técnicas de Linguagem Simples aplicadas à Comunicação de Utilidade
          Pública.
          <br />
          <span className="text-secondary">
            (Foco: Simplificação de terminologias técnicas, médicas e jurídicas
            para promover a inclusão de cidadãos com diferentes perfis de
            letramento e escolaridade).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            11h30 – 12h30 | RODRIGO ABELLA (Social MedIA Gov)
          </span>
          <br />
          🎤 <strong>Tema:</strong> Comunicação Pública baseada em evidências:
          10 Insights para alta performance.
          <br />
          <span className="text-secondary">
            (Foco: Dados, benchmarking e o uso da IA para eficiência
            governamental).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            12h30 – 14h00 | Almoço (Livre)
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            14h00 – 15h00 | SORAIA HANNA
          </span>
          <br />
          🎤 <strong>Tema:</strong> Gestão de Crise na Comunicação Pública: Da
          narrativa à opinião pública.
          <br />
          <span className="text-secondary">
            (Foco: Protocolos práticos, serenidade e construção de reputação sob
            pressão).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            15h00 – 16h00 | DANIELA MACHADO (EducaMídia)
          </span>
          <br />
          🎤 <strong>Tema:</strong> Muito além das Fake News: Como enfrentar a
          desinformação no ecossistema público.
          <br />
          <span className="text-secondary">
            (Foco: Protocolos de curadoria, análise de mídias e proteção
            institucional contra boatos).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            16h00 – 16h15 | Coffee Break Estratégico
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            16h15 – 17h15 | LEANDRO ROLIM (EBC)
          </span>
          <br />
          🎤 <strong>Tema:</strong> Inovação e Expansão: Da TV 3.0 à
          capilaridade digital da mídia pública brasileira.
          <br />
          <span className="text-secondary">
            (Foco: Tecnologia, participação social e o futuro da rede nacional
            de comunicação).
          </span>
          <br />
          <br />
          <span className="font-semibold text-paragraph3">
            17h15 – 17h45 | Encerramento e Entrega de Certificados
          </span>
        </div>
      ),
      banner: {
        img1: bannerCurso1,
        // img2: bannerCurso2,
      },
    },
  },
};

export default contentCursos;
