export const formatPhoneNumber = (phoneNumber) => {
  // Удалить пробелы, скобки и дефисы
  const cleanNumber = phoneNumber.replace(/[()\s-]/g, "");
  // Заменить начальную 8 на +7
  return cleanNumber.replace(/^8/, "+7");
};
