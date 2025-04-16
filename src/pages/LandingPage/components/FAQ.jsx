import React from "react";

const faqData = [
  {
    question: "Как проходят онлайн занятия?",
    answer:
      "Через Zoom, с виртуальной доской. Все просто: преподаватель показывает, объясняет, ребенок видит, слышит и может задавать вопросы. Никакой магии, просто современные технологии.",
  },
  {
    question: "Что нужно для занятий?",
    answer:
      "Компьютер/планшет, интернет и немного места. Шахматная доска желательна, но не обязательна. Главное – желание учиться.",
  },
  {
    question: "С какого возраста можно начинать?",
    answer:
      "С 4 лет. И нет, это не рано. Мозг в этом возрасте как губка – впитывает все. Лучше шахматы, чем бесконечные мультики, согласны?",
  },
  {
    question: "Можно ли поменять преподавателя?",
    answer:
      'Конечно! Не сложился контакт? Без проблем найдем другого. Мы за комфорт в обучении, а не за "терпи, сынок".',
  },
];

const FAQ = () => {
  return (
    // Используем стандартный класс .section и добавляем id
    <section className="faq-section section" id="faq">
      <div className="container">
        {/* Заголовок секции */}
        <div className="section-header">
          <h2 className="section-title">То, что вы стесняетесь спросить</h2>
          <p className="section-subtitle">
            Ответы на популярные вопросы о CoolChess
          </p>
        </div>

        {/* Контейнер для списка вопросов */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-footer">
          <p>
            Не нашли ответа? <a href="#signup">Задайте вопрос куратору</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
