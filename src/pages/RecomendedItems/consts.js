import kid from "../../assets/kid.svg";
import brain from "../../assets/brain.svg";
import hourglass from "../../assets/hourglass.svg";
import computer from "../../assets/computer.svg";
import people1 from "./images/people1.jpeg";
import people2 from "./images/people2.jpeg";
import people3 from "./images/people3.jpeg";
import people4 from "./images/people4.jpeg";

export const recomendedItems = [
  {
    id: 1,
    // title: "В удобное для Вас время",
    title: "Удобный график обучения",
    icon: hourglass,
    // description:
    //   "Составьте расписание под себя! Школа работает круглосуточно, что позволяет легко совмещать обучение шахматами с другими занятиями",
    description:
      "Индивидуальное расписание позволяет легко совмещать шахматы с другими занятиями",
  },
  {
    id: 2,
    // title: "С четырёхлетнего возраста",
    title: "Обратная связь",
    icon: kid,
    description: "Ваш личный менеджер готов помочь в любую минуту",
  },
  {
    id: 3,
    // title: "Любой уровень подготовки",
    title: "Профессиональная команда тренеров",
    icon: brain,
    description:
      "Составление индивидуальной траектории обучения на основе темперамента обучаемого",
  },
  {
    id: 4,
    // title: "Занятия проходят в zoom",
    title: "Удобный формат обучения",
    icon: computer,
    // description: "Вы можете заниматься онлайн из любого города",
    description: "Занятия из любого города",
  },
];

export const itemsCardRecommend = [
  {
    id: 1,
    title: "Удобный график обучения",
    image: people1,
    description:
      "Индивидуальное расписание позволяет легко совмещать шахматы с другими занятиями",
  },
  {
    id: 2,
    title: "Обратная связь",
    image: people2,
    description: "Ваш личный менеджер готов помочь в любую минуту",
  },
  {
    id: 3,
    title: "Профессиональная команда тренеров",
    image: people3,
    description:
      "Составление индивидуальной траектории обучения на основе темперамента обучаемого",
  },
  {
    id: 4,
    title: "Удобный формат обучения",
    image: people4,
    description: "Занятия из любого города",
  },
];
