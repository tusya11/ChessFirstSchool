import calendar from "./images/calendar.svg";
import location from "./images/location.svg";
import message from "./images/message.svg";
import trophy from "./images/trophy.svg";

export const recomendedItems = [
  {
    id: 1,
    title: "Гибкий график обучения",
    icon: calendar,
    description: `Индивидуальное расписание позволяет легко совмещать шахматы с\u00A0другими занятиями`,
  },
  {
    id: 2,
    title: "Профессиональная команда тренеров",
    icon: trophy,
    description: `Составление индивидуальной траектории обучения на\u00A0основе темперамента обучаемого`,
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Обратная связь",
    icon: message,
    description: `Ваш личный менеджер готов помочь в\u00A0любую минуту`,
  },
  {
    id: 4,
    title: `Удобный формат обучения`,
    icon: location,
    description: `Занятия из\u00A0любого города. Найти друзей по\u00A0интересам из\u00A0разных стран мира!`,
  },
];
