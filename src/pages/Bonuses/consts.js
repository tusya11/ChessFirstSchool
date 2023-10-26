import { BsGift, BsPercent } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { SiJest } from "react-icons/si";

export const bonuses = [
  {
    id: 1,
    title: "Бесплатные занятия",
    image: <BsGift />,
    description:
      "Ученики, занявшие призовые места в наших турнирах, получат бесплатные уроки в подарок",
  },
  {
    id: 2,
    title: "Приведи друга",
    image: <BiTargetLock />,
    description:
      "Приведите друга и получите 2 бесплатных урока, а Вашему другу мы дадим 10% скидку на первый абонемент",
  },
  {
    id: 3,
    title: "Скидки",
    image: <BsPercent />,
    description:
      "Оплатите абонемент в день после пробного урока и получите 10% скидку на следующий абонемент",
  },
  {
    id: 4,
    title: "Розыгрыши",
    image: <SiJest />,
    description:
      "Участвуйте в наших викторинах и розыгрышах для получения 10% скидки на любой абонемент",
  },
];
