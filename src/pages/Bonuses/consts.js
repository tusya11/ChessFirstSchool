import fireImg from "./assets/fire.svg";
import friendImg from "./assets/friend.svg";
import lightningImg from "./assets/lightning.svg";
import giftImg from "./assets/gift.svg";

export const bonuses = [
  {
    id: 1,
    title: "Бесплатные занятия",
    icon: fireImg,
    description:
      "Ученики, занявшие призовые места в наших турнирах, получат бесплатные уроки в подарок",
  },
  {
    id: 2,
    title: "Приведи друга",
    icon: friendImg,
    description:
      "Приведите друга и получите два бесплатных урока, а Вашему другу мы дадим 10% скидку на первый абонемент",
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Скидки",
    icon: lightningImg,
    description:
      "Оплатите абонемент в день после пробного урока и получите 10% скидку на следующий абонемент",
  },
  {
    id: 4,
    title: "Розыгрыши",
    icon: giftImg,
    description:
      "Участвуйте в наших викторинах и розыгрышах для получения 10% скидки на любой абонемент",
  },
];
