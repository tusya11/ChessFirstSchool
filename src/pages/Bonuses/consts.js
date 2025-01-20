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
      "Ученики, занявшие призовые места в\u00A0наших турнирах, получают бесплатные уроки в\u00A0подарок",
  },
  {
    id: 2,
    title: "Приведи друга",
    icon: friendImg,
    description:
      "Приведите друга и получите два\u00A0бесплатных урока, а Вашему\u00A0другу мы\u00A0дадим 10%\u00A0скидку на\u00A0первый абонемент",
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Скидки",
    icon: lightningImg,
    description:
      "Оплатите абонемент в\u00A0день после пробного урока и получите 10%\u00A0скидку на\u00A0первый абонемент",
  },
  {
    id: 4,
    title: "Розыгрыши",
    icon: giftImg,
    description:
      "Участвуйте в\u00A0наших викторинах и розыгрышах для\u00A0получения 10%\u00A0скидки на\u00A0любой абонемент",
  },
];
