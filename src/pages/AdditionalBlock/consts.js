import { RiComputerLine } from "react-icons/ri";
import { RiPhoneCameraLine } from "react-icons/ri";
import { IoApps } from "react-icons/io5";

export const items = [
  {
    id: 1,
    title: "Удаленное подключение",
    description:
      "Ребенку требуется любое электронное устройство (компьютер, ноутбук, планшет) с веб-камерой и микрофоном",
    icon: <RiComputerLine />,
  },
  {
    id: 2,
    title: "Удобная программа",
    description: "Программа интерактивна и реализуется в Zoom или Skype",
    icon: <RiPhoneCameraLine />,
  },
  {
    id: 3,
    icon: <IoApps />,
    fields: [
      {
        id: 11,
        title: "Скачать программу для",
        type: "ПК",
        link: "https://zoom.us/support/down4j",
      },
      {
        id: 12,
        title: "Скачать программу с",
        type: "AppStore",
        link: "https://apps.apple.com/ru/app/zoom-one-platform-to-connect/id546505307",
      },
      {
        id: 13,
        title: "Скачать программу с",
        type: "Google Play",
        link: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ru",
      },
    ],
  },
];
