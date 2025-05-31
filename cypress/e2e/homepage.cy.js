describe('Базовые тесты отрисовки сайта', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/main'); // Переход на главную страницу
  });

  it('1. Заголовок страницы корректный', () => {
    cy.title().should('include', 'Cool Chess School');
    cy.contains('button', 'Начать заниматься').should('exist');
    cy.contains('button', 'Записаться').should('exist');
  });

  it('2. Должен открываться Drawer при клике на кнопку', () => {
    // 1. Проверяем, что Drawer изначально закрыт
    cy.get('.ant-drawer') // или ваш селектор для Drawer
      .should('not.exist'); // или .should('not.be.visible')

    // 2. Находим и кликаем на кнопку
    cy.contains('button', 'Записаться на обучение') // Текст кнопки из вашего компонента
      .should('be.visible')
      .click();

    // 3. Проверяем, что Drawer открылся
    cy.get('.ant-drawer') // или ваш селектор
      .should('be.visible')
      .within(() => {
        // Дополнительные проверки содержимого Drawer
        cy.contains('Оплата').should('be.visible'); // Проверяем заголовок
        cy.get('form').should('exist'); // Проверяем наличие формы
      });
  });

  it('3. Должен закрываться Drawer при клике на крестик', () => {
    // 1. Открываем Drawer
    cy.contains('button', 'Записаться на обучение').click();
    
    // 2. Закрываем через иконку закрытия
    cy.get('.ant-drawer-close') // стандартный селектор для кнопки закрытия в Ant Design
      .click();
    
    // 3. Проверяем, что Drawer закрылся
    cy.get('.ant-drawer')
      .should('not.be.visible');
  });

});