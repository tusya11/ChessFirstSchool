import { GoGoal } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { AiOutlineRise } from "react-icons/ai";
import { BiPieChart } from "react-icons/bi";
import { FaChess } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const cards_1 = [
  {
    id: 1,
    title: "Лучшие игроки",
    description: "Учим ставить цели и достигать их",
    image: <GoGoal />,
  },
  {
    id: 2,
    title: "Эффективные упражнения",
    description: "Развиваем все виды памяти",
    image: <GiSkills />,
  },
  {
    id: 3,
    title: "Познавательный процесс",
    description:
      "Развиваем умение, навыки анализировать и планировать свои действия",
    image: <AiOutlineRise />,
  },
];

export const cards_2 = [
  {
    id: 4,
    title: "Оптимальный график",
    description: "Удобный график. Составьте расписание под себя",
    image: <BiPieChart />,
  },
  {
    id: 5,
    title: "Соревнования",
    description: "Еженедельные тематические турниры",
    image: <FaChess />,
  },
  {
    id: 6,
    title: "Интересные занятия",
    description:
      "Проведения занятий в интересной, размереной форме, без спешки",
    image: <BsPeopleFill />,
  },
];
