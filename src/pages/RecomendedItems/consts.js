import kid from "../../assets/kid.svg";
import brain from "../../assets/brain.svg";
import hourglass from "../../assets/hourglass.svg";
import computer from "../../assets/computer.svg";

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
