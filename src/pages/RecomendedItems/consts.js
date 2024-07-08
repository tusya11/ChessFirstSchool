import calendar from "./images/calendar.svg";
import location from "./images/location.svg";
import message from "./images/message.svg";
import trophy from "./images/trophy.svg";

export const recomendedItems = [
  {
    id: 1,
    title: "Гибкий график обучения",
    icon: calendar,
    description:
      "Индивидуальное расписание позволяет легко совмещать шахматы с другими занятиями",
  },
  {
    id: 2,
    title: "Профессиональная команда тренеров",
    icon: trophy,
    description:
      "Составление индивидуальной траектории обучения на основе темперамента обучаемого",
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Обратная связь",
    icon: message,
    description: "Ваш личный менеджер готов помочь в любую минуту",
  },
  {
    id: 4,
    title: `Удобный формат обучения`,
    icon: location,
    description:
      "Занятия из любого города. Найти друзей по интересам из разных стран мира!",
  },
];
