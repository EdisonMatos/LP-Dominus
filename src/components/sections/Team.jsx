import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  return (
    <SectionArea className="bg-bgSectionDark" paddingtop={false}>
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.team.minitag}
        sectionHeaderTitle={content.texts.team.title}
        sectionHeaderSubtitle={content.texts.team.subtitle}
        titleColorSet="text-white"
        subtitleColorSet="text-white"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-wrap tablet1:flex-row justify-evenly tablet1:items-start tablet1:gap-[20px]">
            <TeamMember
              img={content.texts.team.members.member1.img.img}
              alt={content.texts.team.members.member1.img.alt}
              name={content.texts.team.members.member1.name}
              role={content.texts.team.members.member1.role}
              modalTitle={content.texts.team.members.member1.name}
              modalContent={
                <p>
                  Dr. em Administração (UFPE). Mestrado (UFSC). Formação
                  superior na área do Cooperativismo e Administração.
                  Especialista em Administração e Supervisão e Gestão
                  Escolar.Multiplicador do Total Quality Control (TQC),
                  Facilitador de Programa de Gestão pela qualidade Total e
                  Formação em Desenvolvimento Interpessoal para Chefias e
                  Gestores.
                  <br />
                  <br />
                  Professor Universitário, atua nos programas de ensino na área
                  da Gestão, em cursos de Graduação, Tecnólogos, Pós-Graduação,
                  MBA, Mestrado e na Modalidade Ensino à Distância. Experiência
                  Profissional na área de liderança de pessoas, coordenação,
                  gestor de equipes e na área pública estadual. Comunicador e
                  apresentador de programas de rádio.
                  <br />
                  <br />
                  Pesquisador nas áreas: marketing, estratégia, comportamento do
                  consumidor, desenvolvimento regional e cooperativismo.
                  Coordenador de projeto de pesquisa junto aos municípios da
                  Região Fronteira Noroeste do Estado do RS com o tema Marketing
                  de Lugares.
                  <br />
                  Vários livros e capítulos publicados, artigos científicos
                  aceitos em periódicos- classificação- CAPES - nacionais e
                  internacionais. Membro do Conselho Regional de Administração
                  do Rio Grande do Sul.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member2.img.img}
              alt={content.texts.team.members.member2.img.alt}
              name={content.texts.team.members.member2.name}
              role={content.texts.team.members.member2.role}
              modalTitle={content.texts.team.members.member2.name}
              modalContent={
                <p>
                  Formado em Direto pela UFRGS, atua na UniRitter, Fadergs, Pós
                  graduação na Verbo, Sócio da Faganello Advogados.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member3.img.img}
              alt={content.texts.team.members.member3.img.alt}
              name={content.texts.team.members.member3.name}
              role={content.texts.team.members.member3.role}
              modalTitle={content.texts.team.members.member3.name}
              modalContent={
                <p>
                  Graduada em Licenciatura em Pedagogia pela Universidade
                  Federal do Rio Grande do Sul - UFRGS e Bacharelado em Direito
                  pelas Faculdades Integradas Machado de Assis - FEMA;
                  <br />
                  <br />
                  Pós-Graduação em nível de Especialização em Gestão Pública
                  pela Universidade Federal de Santa Maria - UFSM e MBA em
                  Gestão Financeira, Controladoria e Auditoria pela Sociedade
                  Educacional Três de Maio - SETREM e, em nível de Mestrado em
                  Direito pela Universidade Regional do Noroeste do Estado do
                  Rio Grande do Sul - UNIJUÍ.
                  <br />
                  <br />
                  Concursada no município de Horizontina para o cargo de
                  Controlador desde o ano de 2004. Professora dos Cursos
                  Superiores de Direito e Enfermagem da FEMA - Santa Rosa/RS,
                  atuando nas disciplinas de Direito Administrativo, Direito
                  Constitucional e Educação Socioambiental e Governança.
                  <br />
                  <br />
                  Atualmente ocupa a Direção Geral da Escola de Gestão Pública
                  do município de Horizontina/RS
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member4.img.img}
              alt={content.texts.team.members.member4.img.alt}
              name={content.texts.team.members.member4.name}
              role={content.texts.team.members.member4.role}
              modalTitle={content.texts.team.members.member4.name}
              modalContent={
                <p>
                  Possui graduação em Arquitetura e Urbanismo pela Universidade
                  Federal do Rio Grande do Sul (1994); Mestrado em Projeto
                  Arquitetônico pela Universidade Politécnica da Catalunha
                  (1996);
                  <br />
                  <br />
                  Mestrado em Planejamento Urbano e Regional pela Universidade
                  Federal do Rio Grande do Sul (2018). Formação em Conciliação e
                  Mediação de conflitos (CM, 2022). Ex-professor do Centro
                  Universitário Ritter dos Reis (1999/2009) e da Faculdade de
                  Arquitetura da Universidade Federal do Rio Grande do Sul -
                  UFRGS (1998/2000). Presidente do Instituto de Arquitetos do
                  Brasil - IAB/RS (2012/13 e 2014/16) e Vice Presidente
                  Extraordinário do IAB nacional (2014/2017). Conselheiro
                  Suplente do CAU/RS (2012/14).
                  <br />
                  <br />
                  Presidente do Conselho de Arquitetura e Urbanismo do Rio
                  Grande do Sul - CAU/RS (2018/20 e 2021/23). Atuação em
                  escritórios de urbanismo em Barcelona (1994/1998) com
                  trabalhos realizados na Espanha, Eslovênia, El Salvador e
                  Brasil.
                  <br />
                  <br />
                  Sócio gerente da empresa 3C Arquitetura e Urbanismo (desde
                  1999). Tem experiência na área da Arquitetura e Urbanismo, com
                  ênfase em Planejamento e Projeto Urbano e Habitação Social,
                  atuando principalmente nas seguintes áreas: consultoria em
                  planejamento e urbanismo; planos diretores, mobilidade e
                  habitacionais; planos e projetos urbanos, parques urbanos e
                  ambientais; patrimônio cultural; e habitação de interesse
                  social.
                  <br />
                  <br />
                  Principais trabalhos: Plano Diretor de Alegrete; Plano de
                  Habitação de Pelotas; Plano Cicloviário de Canoas; Plano
                  Diretor do Parque Tecnológico Itaipu; Parque do Rio Uruguai em
                  Uruguaiana; Parque Popular da Pedreira em Ijuí; Parque do
                  Gaúcho em Bagé; plano e projetos do Refúgio Biológico Bela
                  Vista em Foz do Iguaçu; projeto da Biblioteca Paulo Freire;
                  restauro do Instituto de Educação e da Usina do Gasômetro;
                  projetos para cooperativas habitacionais; e dezenas de
                  consultorias em urbanismo e planejamento para municípios da
                  região sul do Brasil. com diversas publicações e premiações
                  sendo o último o Prêmio Burle Marx nacional da ABAP
                  (Associação Brasileira dos Arquitetos Paisagistas).
                  <br />
                  <br />
                  Possui ampla experiência com Prefeituras, Administrações e
                  Empresas Públicas, além de empresas e instituições privadas,
                  em serviços de coordenação de equipes multidisciplinares de
                  planejamento e projetos; levantamentos, diagnósticos e
                  pesquisas de campo com variadas metodologias; utilização de
                  ferramentas de georreferenciamento aplicado ao urbanismo e
                  planejamento; organização e condução de eventos e processos
                  participativos aplicados ao planejamento.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member5.img.img}
              alt={content.texts.team.members.member5.img.alt}
              name={content.texts.team.members.member5.name}
              role={content.texts.team.members.member5.role}
              modalTitle={content.texts.team.members.member5.name}
              modalContent={
                <p>
                  Sou Turismóloga, Especialista em Ecoturismo e Interpretação de
                  Natureza e Mestranda em Turismo e Hotelaria, busco estar em
                  constante aprendizado. Atualmente trabalho com consultorias em
                  turismo, com foco na sustentabilidade, desenvolvimento de
                  destinos, gestão de negócios e aperfeiçoamento profissional.
                  <br />
                  <br />A curiosidade, o aprendizado e conhecimento são fatores
                  que me movem! É saber que estou contribuindo de forma positiva
                  com tudo aquilo que me proponho a fazer, entregando minha
                  melhor versão.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member6.img.img}
              alt={content.texts.team.members.member6.img.alt}
              name={content.texts.team.members.member6.name}
              role={content.texts.team.members.member6.role}
              modalTitle={content.texts.team.members.member6.name}
              modalContent={
                <p>
                  Doutorando em Ciência Política, com foco na produção e difusão
                  do conhecimento acadêmico.
                  <br />
                  <br />
                  Dedico-me à sistematização de dados e à análise crítica do
                  discurso político, com ênfase em retórica em mídias sociais,
                  polarização e guerras culturais.
                  <br />
                  <br />
                  Busco traduzir conceitos complexos para ampliar o impacto do
                  conhecimento, promovendo debates críticos e acessíveis entre
                  academia e sociedade.
                  <br />
                  <br />
                  Prezo pela ética, cordialidade e a construção de um ambiente
                  de trabalho saudável e colaborativo.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member7.img.img}
              alt={content.texts.team.members.member7.img.alt}
              name={content.texts.team.members.member7.name}
              role={content.texts.team.members.member7.role}
              modalTitle={content.texts.team.members.member7.name}
              modalContent={
                <p>
                  Advogada inscrita na OAB/RS sob o nº 84.783, graduada em
                  Direito pela UNIJUÍ. Possui pós-graduação Lato Sensu em
                  Docência na Educação Profissional pela Faculdade Mário
                  Quintana (FAMAQUI).
                  <br />
                  <br />
                  Atua como Assessora Jurídica Legislativa, com sólida
                  experiência na área pública e na elaboração de pareceres e
                  projetos de lei.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member8.img.img}
              alt={content.texts.team.members.member8.img.alt}
              name={content.texts.team.members.member8.name}
              role={content.texts.team.members.member8.role}
              modalTitle={content.texts.team.members.member8.name}
              modalContent={
                <p>
                  Advogado, inscrito na OAB/RS sob o nº 129.234, Graduado em
                  Direio na Universidade Regional do Noroeste do Estado do Rio
                  Grande do Sul, Especialista em Direito Administrativo e Gestão
                  Pública pela Faculdade de Direito da Fundação Escola Superior
                  do Ministério Público, 4 anos de experiência no setor público.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member9.img.img}
              alt={content.texts.team.members.member9.img.alt}
              name={content.texts.team.members.member9.name}
              role={content.texts.team.members.member9.role}
              modalTitle={content.texts.team.members.member9.name}
              modalContent={
                <p>
                  É escritor, tendo publicado vários livros que vão de Memórias
                  a temas de urbanismo.
                  <br />
                  <br />É organizador de publicações sobre a Pessoa Idosa, como
                  Metamorfose da Vida, volumes I e II, Perdi Tudo, e Agora, como
                  os sites: www.idadismo.net – www.metamorfosedavida.com.br
                  <br />
                  <br />
                  Como jornalista escreve para jornais, blogs, sites com
                  regularidade.
                  <br />
                  Foi vereador em Porto Alegre por 22 anos, secretário em Porto
                  Alegre, secretário da Expointer 2014.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member10.img.img}
              alt={content.texts.team.members.member10.img.alt}
              name={content.texts.team.members.member10.name}
              role={content.texts.team.members.member10.role}
              modalTitle={content.texts.team.members.member10.name}
              modalContent={
                <p>
                  Possui ampla experiência na docência de literatura e língua
                  portuguesa em escolas privadas e cursos preparatórios para
                  concursos em Porto Alegre.
                  <br />
                  <br />
                  Também é autor de 4 livros: Chão de Areia, Tortos Caminhos,
                  Crônica de um mundo ausente (escolhido livro do ano no Prêmio
                  2024 da Associação Gaúcha de Escritores e finalista do prêmio
                  Açorianos) e Correr na chuva.
                  <br />
                  <br />
                  Cristiano também colabora para inúmeros veículos de
                  comunicação em nível regional e nacional.
                </p>
              }
            />
            <TeamMember
              img={content.texts.team.members.member11.img.img}
              alt={content.texts.team.members.member11.img.alt}
              name={content.texts.team.members.member11.name}
              role={content.texts.team.members.member11.role}
              modalTitle={content.texts.team.members.member11.name}
              modalContent={
                <p>
                  Técnico em Contabilidade com sólida trajetória no setor
                  público municipal, atuando desde 1991 como servidor efetivo na
                  Prefeitura Municipal de Sede Nova/RS, onde exerce a função de
                  Oficial Administrativo, com destaque na chefia do Setor de
                  Recursos Humanos.
                  <br />
                  <br />
                  Natural de Humaitá/RS, possui 56 anos, é casado e pai de dois
                  filhos. Iniciou sua vida profissional ainda jovem como
                  estagiário da Caixa Econômica Federal, em sua cidade natal. Em
                  seguida, desempenhou funções administrativas na Cotricampo –
                  Cooperativa Tritícola Mista Campo Novo Ltda, até ingressar no
                  serviço público municipal, onde construiu uma carreira marcada
                  pela seriedade, comprometimento e conhecimento técnico.
                  <br />
                  <br />
                  Ao longo dos anos, ampliou sua formação com cursos em
                  Informática, Marketing de Vendas e capacitação específica em
                  Aposentadoria e Pensões no Serviço Público, com ênfase no
                  Regime Próprio de Previdência Social (RPPS). Também possui
                  certificação como Agente Municipal.
                  <br />
                  <br />
                  Reconhecido pela sua ética, dedicação e experiência, Celso
                  atua de forma estratégica na gestão de pessoas e processos
                  administrativos, contribuindo para a qualificação da
                  administração pública regional.
                </p>
              }
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
