/**
 * Дополнительная конфигурация для маршрутов
 * Можно использовать для мета-данных, заголовков страниц и т.д.
 */
export const routeMeta = {
  "/": {
    title: "Главная - CoolChess",
    description: "Шахматная школа CoolChess",
  },
  "/competition": {
    title: "Летняя шахматная серия - CoolChess",
    description: "9 турниров с призовым фондом 50 000 ₽",
  },
  "/holiday-with-grandmasters": {
    title: "Каникулы с гроссмейстерами - CoolChess",
    description: "Мастер-классы от ведущих гроссмейстеров",
  },
  // ... остальные страницы
};

export const getRouteMeta = (path) => {
  return routeMeta[path] || routeMeta["/"];
};
