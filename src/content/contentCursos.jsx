import bannerCurso1 from "../assets/imgs/hero/imagemCursoLegislativo.jpg";

const currentYear = new Date().getFullYear();

const contentCursos = {
  texts: {
    curso1: {
      title:
        "Fortalecendo o Legislativo: Orçamento, Planejamento e Emendas Impositivas",
      date: "05/06",
      time: "09:00",
      description: (
        <p>
          Curso desenvolvido para capacitar vereadores, assessores legislativos
          e servidores públicos no entendimento e na atuação eficaz dentro do
          processo orçamentário municipal.
          <br />
          <br />
          O conteúdo abrange desde os fundamentos do planejamento público até a
          elaboração, análise e fiscalização do orçamento anual. Um dos focos
          principais é a compreensão e a aplicação das emendas impositivas —
          instrumento fundamental para garantir que as demandas da população
          sejam atendidas de forma direta e transparente.
          <br />
          <br />
          Com uma abordagem prática e atualizada, o curso prepara os
          participantes para exercerem um papel mais estratégico e propositivo
          no Legislativo, fortalecendo a relação entre o parlamento municipal e
          a gestão pública, e promovendo maior eficiência na alocação dos
          recursos públicos.
        </p>
      ),
      banner: { bannerCurso1 },
    },
  },
};



export default contentCursos;
