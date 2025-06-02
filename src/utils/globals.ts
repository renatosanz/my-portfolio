interface ProjectI {
  url: string;
  bgColor: string;
  fontColor: string;
  title: string;
  icon: string;
  repository: string;
}

export const myProjects: Array<ProjectI> = [
  {
    url: "https://calc-renato.netlify.app",
    bgColor: "#d68100",
    fontColor: "#1E1E1E",
    title: "Calc",
    icon: "https://raw.githubusercontent.com/renatosanz/Calc/df5b4bd8c66ec0b7632f78480cc1fc4ca4239548/src/images/icon.svg",
    repository: "https://github.com/renatosanz/Calc",
  },
  {
    url: "https://news-app-renato.netlify.app",
    bgColor: "#f3f3f3",
    fontColor: "#1e1e1e",
    title: "News App",
    icon: "https://raw.githubusercontent.com/renatosanz/news-APP/8c99ca1a5aba767843133e89acc15fcbabc1711e/src/homepage/imgs/logo.svg",
    repository: "https://github.com/renatosanz/news-APP",
  },
  {
    url: "https://riprtx.netlify.app/",
    bgColor: "#281a15",
    fontColor: "#fefefe",
    title: "riprtx",
    icon: "https://img.icons8.com/?size=100&id=18911&format=png&color=000000",
    repository: "https://github.com/renatosanz/riprtx",
  },

  {
    url: "https://intervisor.netlify.app/",
    bgColor: "#427b58",
    fontColor: "#fefefe",
    title: "InterVisor",
    icon: "https://img.icons8.com/?size=100&id=64353&format=png&color=000000",
    repository: "https://github.com/renatosanz/InterVisor",
  },

  {
    url: "https://github.com/renatosanz/analizadorTextos",
    bgColor: "#8f3f71",
    fontColor: "#fefefe",
    title: "textAnalyzer",
    icon: "https://img.icons8.com/?size=100&id=hiVUDmBVLfG9&format=png&color=000000",
    repository: "https://github.com/renatosanz/analizadorTextos",
  },

  {
    url: "https://github.com/renatosanz/typo",
    bgColor: "#b57614",
    fontColor: "#fefefe",
    title: "typo",
    icon: "https://img.icons8.com/?size=100&id=8WgpFCLqcMzv&format=png&color=000000",
    repository: "https://github.com/renatosanz/typo",
  },
];
