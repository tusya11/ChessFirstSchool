import { MdCall, MdSettingsAccessibility, MdConnectedTv } from "react-icons/md";
import { BiSolidHappyHeartEyes } from "react-icons/bi";

export const lessons = [
  {
    id: 1,
    title: "Zoom",
    description:
      "Для начала работы требуется установить Zoom, либо перейти по ссылке, предоставленной Администратором",
    image: <MdCall />,
  },
  {
    id: 2,
    title: "Подключаемся",
    description:
      "Перейти по предоставленной ссылке и ожидать подтверждение от тренера",
    image: <MdConnectedTv />,
  },
  {
    id: 3,
    title: "Настраиваемся",
    description:
      "Важно выполнить базовые настройки, подготовить аудио и видео связь",
    image: <MdSettingsAccessibility />,
  },
  {
    id: 4,
    title: "Наслаждаемся занятием",
    description: "Получаем новые знания, занимаясь увлекательной игрой",
    image: <BiSolidHappyHeartEyes />,
  },
];
