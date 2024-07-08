import zoomImg from "./assets/zoom.svg";
import connectImg from "./assets/connect.svg";
import settingImg from "./assets/setting.svg";
import imgHorse from "./assets/imgHorse.svg";

export const facilitateItems = [
  {
    id: 1,
    title: "Zoom",
    icon: zoomImg,
    description:
      "Для начала работы требуется установить Zoom, либо перейти по ссылке, предоставленной Администратором",
  },
  {
    id: 2,
    title: "Подключаемся",
    icon: connectImg,
    description:
      "Перейти по предоставленной ссылке и ожидать подтверждение от тренера",
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Настраиваемся",
    icon: settingImg,
    description:
      "Важно выполнить базовые настройки, подготовить аудио и видео связь",
  },
  {
    id: 4,
    title: "Наслаждаемся занятием",
    icon: imgHorse,
    description: "Получаем новые знания, занимаясь увлекательной игрой",
  },
];
