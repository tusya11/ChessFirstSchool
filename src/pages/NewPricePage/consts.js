import image1 from "./assets/img_25min.png";
import image2 from "./assets/img_45min.png";
import image3 from "./assets/img_60min.png";

export const prices = [
  {
    id: 1,
    image: image1,
    flag: "25 минут",
    title: `Идеально для\u00A0самых маленьких`,
    subtitle: "детям от 3 до 6 лет",
    itemPrices: [
      {
        id: 1,
        description: "1 занятие",
        descriptionNumber: 1,
        price: "850",
        price_rub: 850,
      },
      {
        id: 2,
        description: "5 занятий",
        descriptionNumber: 5,
        price: "4 000",
        price_rub: 4000,
      },
      {
        id: 3,
        description: "10 занятий",
        descriptionNumber: 10,
        price: "7 500",
        price_rub: 7500,
      },
      {
        id: 4,
        description: "15 занятий",
        descriptionNumber: 15,
        price: "10 200",
        price_rub: 10200,
      },
    ],
  },
  {
    id: 2,
    image: image2,
    flag: "45 минут",
    title: "Для детей постарше",
    subtitle:
      "Идеальное занятие, чтобы\u00A0ребенок не\u00A0успел утомиться\u00A0и был полностью вовлечен в\u00A0процесс обучения",
    itemPrices: [
      {
        id: 1,
        description: "1 занятие",
        descriptionNumber: 1,
        price: "1 300",
        price_rub: 1300,
      },
      {
        id: 2,
        description: "5 занятий",
        descriptionNumber: 5,
        price: "6 250",
        price_rub: 6250,
      },
      {
        id: 3,
        description: "10 занятий",
        descriptionNumber: 10,
        price: "12 000",
        price_rub: 12000,
      },
      {
        id: 4,
        description: "15 занятий",
        descriptionNumber: 15,
        price: "15 750",
        price_rub: 15750,
      },
    ],
  },
  {
    id: 3,
    image: image3,
    flag: "60 минут",
    title: "Для будущих чемпионов",
    subtitle:
      "Занятия для\u00A0тех, кто\u00A0хочет участвовать в\u00A0соревнованиях и побеждать",
    itemPrices: [
      {
        id: 1,
        description: "1 занятие",
        descriptionNumber: 1,
        price: "1 600",
        price_rub: 1600,
      },
      {
        id: 2,
        description: "5 занятий",
        descriptionNumber: 5,
        price: "7 550",
        price_rub: 7550,
      },
      {
        id: 3,
        description: "10 занятий",
        descriptionNumber: 10,
        price: "15 000",
        price_rub: 15000,
      },
      {
        id: 4,
        description: "15 занятий",
        descriptionNumber: 15,
        price: "20 250",
        price_rub: 20250,
      },
    ],
  },
];
