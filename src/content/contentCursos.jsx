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
      date: "1 de Junho",
      time: "09:00",
      description: (
        <div className="text-sm text-black font-secondFont">
          <p>
            <span>
              A comunicação pública não é mais um setor de apoio; ela é o ativo
              central da legitimidade de qualquer gestão. No dia 1º de junho,
              Porto Alegre recebe as maiores referências do Brasil para discutir
              como enfrentar a desinformação, gerir crises de imagem,
              implementar a transparência real através da Linguagem Simples e
              consolidar a governança de dados como pilar de eficiência.
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
            1. Transparência Radical: A técnica da Linguagem Simples como
            ferramenta de gestão.
          </p>
          <p className="text-paragraph3">
            2. Combate à Desinformação: Proteção institucional em um ecossistema
            de redes sociais voláteis.
          </p>
          <p className="text-paragraph3">
            3. Blindagem Reputacional: Protocolos de crise testados em
            instituições públicas e órgãos de representação.
          </p>
          <p className="text-paragraph3">
            4. Inteligência de Dados: Como sair do "achismo" e medir resultados
            reais na comunicação.
          </p>
          <p className="text-paragraph3">
            5. Governança e Integridade: O uso da transparência inteligente e da
            proteção de dados (LGPD) para uma gestão centrada no cidadão.
          </p>
          <br />
          <strong>Programação Confirmada:</strong>
          <p className="text-paragraph3">
            <strong>Sandra Bitencourt:</strong> Doutora em Comunicação (UFRGS).
            Jornalista e Pesquisadora. Assessora de Comunicação do Tesouro do
            Estado (RS) e coordenadora regional da Rede Nacional de Combate à
            Desinformação (RNCD). Diretora do Instituto Novos Paradigmas.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Soraia Hanna:</strong> Sócia-diretora executiva da Critério.
            Jornalista e autora do livro "Gerindo crises, construindo
            reputação". Especialista em gestão de imagem com trajetória em
            quatro governos estaduais (RS) e na Assembleia Legislativa do Rio
            Grande do Sul.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Maria José Finatto:</strong> Doutora em Estudos da Linguagem
            e especialista em Acessibilidade Textual. Pesquisadora premiada pelo
            Google (LARA 2019). Coautora do projeto "LDO + Simples" do Tesouro
            do Estado (RS) e professora pesquisadora da UFRGS.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Daniela Machado:</strong> Jornalista e especialista em
            Letramento Digital (Rhode Island/EUA). Coordenadora do EducaMídia
            (Instituto Palavra Aberta) e coautora do Guia da Educação Midiática.
            Atua na formação de educadores e apoio a formuladores de políticas
            públicas.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Rodrigo Abella:</strong> Diretor-executivo da Social MedIA
            Gov. Graduado em Administração Pública (UDESC). Especialista em
            inteligência de dados, IA e transparência pública, com 15 anos de
            atuação no fortalecimento da gestão da comunicação governamental.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Leandro Rolim:</strong> Doutor em Comunicação Audiovisual
            (Salamanca). Assessor Especial na SUDIM - EBC (Empresa Brasil de
            Comunicação). Professor da Universidade Católica de Brasília, com 20
            anos de experiência em inovação e mídia pública.
          </p>
          <br />
          <p className="text-paragraph3">
            <strong>Gustavo Ferenci:</strong> Secretário de Transparência,
            Controladoria e Governo Digital de Canoas e Presidente do Fórum de
            Proteção de Dados Pessoais dos Municípios. Especialista em
            transparência inteligente, integridade e governança de dados voltada
            à eficiência da gestão pública.
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
            Este não é um curso teórico de faculdade. É o encontro onde se
            define o padrão da comunicação institucional do Rio Grande do Sul
            para os próximos anos.
          </p>
        </div>
      ),
      descriptionModal: (
        <div className="text-paragraph2 desktop1:text-paragraph2">
          08h00 – 08h30 | Credenciamento
          <br />
          08h30 – 09h00 | Abertura Institucional
          <br />
          (Dominus + Autoridades convidadas)
          <br />
          09h00 – 10h00 | SANDRA BITENCOURT
          <br />
          Tema: Interesse, imagem e Comunicação Pública em tempos instáveis: os
          circuitos que precisamos decifrar.
          <br />
          (Foco: Contextualização teórica e o papel da comunicação na democracia
          atual).
          <br />
          10h00 – 10h15 | Coffee Break Estratégico
          <br />
          10h30 – 11h30 | Maria José Finatto - Professora UFRGS
          <br />
          Tema: Linguagem Simples: O direito de entender como pilar da
          transparência pública.
          <br />
          (Foco: Técnica de redação e acessibilidade para o cidadão).
          <br />
          11h30 – 12h30 | RODRIGO ABELLA (Social MedIA Gov)
          <br />
          Tema: Comunicação Pública baseada em evidências: 10 Insights para alta
          performance.
          <br />
          (Foco: Dados, benchmarking e o uso da IA para eficiência
          governamental).
          <br />
          12h30 – 14h00 | Almoço (Livre)
          <br />
          14h00 – 15h00 | SORAIA HANNA
          <br />
          Tema: Gestão de Crise na Comunicação Pública: Da narrativa à opinião
          pública.
          <br />
          (Foco: Protocolos práticos, serenidade e construção de reputação sob
          pressão).
          <br />
          15h00 – 16h00 | DANIELA MACHADO (EducaMídia)
          <br />
          Tema: Muito além das Fake News: Como enfrentar a desinformação no
          ecossistema público.
          <br />
          (Foco: Protocolos de curadoria, análise de mídias e proteção
          institucional contra boatos).
          <br />
          16h00 – 16h15 | Coffee Break Estratégico
          <br />
          16h15 – 17h15 | LEANDRO ROLIM (EBC)
          <br />
          Tema: Inovação e Expansão: Da TV 3.0 à capilaridade digital da mídia
          pública brasileira.
          <br />
          (Foco: Tecnologia, participação social e o futuro da rede nacional de
          comunicação).
          <br />
          17h15 – 17h45 | GUSTAVO FERENCI
          <br />
          Tema: Transparência Pública Inteligente: Comunicação e Governança para
          estruturas eficientes.
          <br />
          18h15 – 18h30 | Encerramento e Entrega de Certificados
        </div>
      ),
      banner: {
        img1: bannerCurso1,
        // img2: bannerCurso2,
      },
    },
    curso2: {
      title:
        "1ª FEIRA DO LIVRO INFANTOJUVENIL DO MERCADO PÚBLICO DE PORTO ALEGRE",
      date: "Dias 6 e 9 de outubro de 2026",
      description: (
        <div className="text-sm text-black font-secondFont">
          <p>
            <strong>
              Projeto "Avós e Netos pelos Livros" promoverá leitura, integração
              entre gerações e valorização da cultura em Porto Alegre
            </strong>
          </p>

          <br />

          <p>
            Entre os dias 6 e 9 de outubro de 2026, o Mercado Público de Porto
            Alegre sediará a 1ª Feira do Livro Infantojuvenil, evento que
            receberá o projeto "Avós e Netos pelos Livros", uma iniciativa
            voltada ao incentivo da leitura, ao fortalecimento dos vínculos
            familiares e à valorização da convivência entre diferentes gerações.
          </p>

          <br />

          <p>
            O projeto é desenvolvido em parceria pelo Coletivo Metamorfose da
            Vida e pelo Movimento Sociedade Sem Idadismo (MSI), organizações que
            atuam na promoção do envelhecimento saudável, da inclusão social e
            do combate ao preconceito relacionado à idade.
          </p>

          <br />

          <p>
            A proposta busca aproximar crianças, adolescentes, avós e demais
            familiares do universo literário por meio do contato direto com
            escritores, atividades culturais e experiências educativas,
            reforçando o papel da leitura como instrumento de formação cidadã,
            desenvolvimento intelectual e fortalecimento das relações
            familiares.
          </p>

          <br />

          <strong>
            Durante os quatro dias de evento, o público encontrará:
          </strong>

          <br />
          <br />

          <p className="text-paragraph3">
            1. Encontro entre crianças, adolescentes e autores de literatura
            infantojuvenil;
          </p>

          <p className="text-paragraph3">
            2. Atividades voltadas ao incentivo à leitura;
          </p>

          <p className="text-paragraph3">
            3. Ações de valorização da convivência entre avós e netos;
          </p>

          <p className="text-paragraph3">
            4. Visitas guiadas ao Mercado Público de Porto Alegre, destacando
            sua história e a importância da preservação do patrimônio cultural;
          </p>

          <p className="text-paragraph3">
            5. Espaços de integração entre famílias, escolas, escritores e
            comunidade.
          </p>

          <br />

          <strong>Participação das escolas</strong>

          <br />
          <br />

          <p>
            A organização conta com o apoio da Secretaria Municipal de Educação
            de Porto Alegre (SMED) para incentivar a participação das escolas
            municipais, promovendo visitas de estudantes à feira e estimulando
            as famílias para que avós e netos participem juntos da programação.
          </p>

          <br />

          <p>
            A Dominus Consultoria e Capacitação reconhece iniciativas como esta
            por seu relevante impacto social, educacional e cultural,
            fortalecendo políticas públicas voltadas à educação, à cidadania, à
            inclusão e à valorização das relações entre gerações.
          </p>
        </div>
      ),
    },
  },
};

export default contentCursos;
