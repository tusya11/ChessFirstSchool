import zoomImg from "./assets/zoom.svg";
import connectImg from "./assets/connect.svg";
import settingImg from "./assets/setting.svg";
import imgHorse from "./assets/imgHorse.svg";

export const facilitateItems = [
  {
    id: 1,
    title: "Подготовка",
    icon: zoomImg,
    description:
      "Для начала работы требуется установить приложение для видеоконференций, либо\u00A0перейти по\u00A0ссылке, предоставленной Администратором",
  },
  {
    id: 2,
    title: "Подключаемся",
    icon: connectImg,
    description:
      "Перейти по\u00A0предоставленной ссылке и ожидать подтверждение от\u00A0тренера",
  },
  { id: "bordered" },
  {
    id: 3,
    title: "Настраиваемся",
    icon: settingImg,
    description:
      "Важно выполнить базовые настройки, подготовить аудио и видео\u00A0связь",
  },
  {
    id: 4,
    title: "Наслаждаемся занятием",
    icon: imgHorse,
    description: "Получаем новые знания, занимаясь увлекательной игрой",
  },
];
