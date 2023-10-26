import { BiTimer, BiSolidTimeFive } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";

export const prices = [
  {
    id: 1,
    title: "25 минут",
    time: 25,
    image: <BiSolidTimeFive />,
    prices_data: [
      {
        id: "price-1",
        quantity: 1,
        price_rub: 850,
        price_dollar: 12,
      },
      {
        id: "price-2",
        quantity: 5,
        price_rub: 4000,
        price_dollar: 55,
      },
      {
        id: "price-3",
        quantity: 10,
        price_rub: 7500,
        price_dollar: 100,
      },
      {
        id: "price-4",
        quantity: 15,
        price_rub: 10200,
        price_dollar: 9,
      },
    ],
  },
  {
    id: 2,
    title: "45 минут",
    time: 45,
    image: <BiTimer />,
    prices_data: [
      {
        id: "price-5",
        quantity: 1,
        price_rub: 1300,
        price_dollar: 17,
      },
      {
        id: "price-6",
        quantity: 5,
        price_rub: 6250,
        price_dollar: 83,
      },
      {
        id: "price-7",
        quantity: 10,
        price_rub: 12000,
        price_dollar: 160,
      },
      {
        id: "price-8",
        quantity: 15,
        price_rub: 15750,
        price_dollar: 14,
      },
    ],
  },
  {
    id: 3,
    title: "60 минут",
    time: 60,
    image: <CiTimer />,
    prices_data: [
      {
        id: "price-9",
        quantity: 1,
        price_rub: 1600,
        price_dollar: 21,
      },
      {
        id: "price-10",
        quantity: 5,
        price_rub: 7550,
        price_dollar: 103,
      },
      {
        id: "price-11",
        quantity: 10,
        price_rub: 15000,
        price_dollar: 200,
      },
      {
        id: "price-12",
        quantity: 15,
        price_rub: 20250,
        price_dollar: 18,
      },
    ],
  },
];
