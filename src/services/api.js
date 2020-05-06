export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudando NodeJS",
          description: "Aprendendo a usar ReactJS",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
        {
          id: 2,
          content: "Estudando Drag N' Drop",
          description: "Novos aprendizados",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 1,
          content: "Tomando café!",
          description: "Delicious!",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 1,
          content: "Jogar",
          description: "Pausa para o aprendizado",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 1,
          content: "Aprendir Git e GitHub",
          description: "Ferramenta muito boa!",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
        {
          id: 2,
          content: "Finalizar projeto",
          description: "Conteudo absorvido",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/211/abott@adorable.io.png",
        },
      ],
    },
  ];
}
