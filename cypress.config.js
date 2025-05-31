const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // URL вашего React-приложения
    chromeWebSecurity: false, // Отключает CORS-политики в Chrome
    setupNodeEvents(on, config) {
      // Можно добавить плагины (например, для покрытия кода)
    },
  },
});
