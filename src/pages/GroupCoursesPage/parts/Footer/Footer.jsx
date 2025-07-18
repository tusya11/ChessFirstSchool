import { LINK_VK, LINK_WHATS_UP, LINK_TELEGRAMM } from '../../../../parts/Footer/consts';
import offer from '../../../../docs/offer.pdf';
import privacyPolicy from '../../../../docs/privacy_policy.pdf';
import consentPersonalData from '../../../../docs/consentPersonalData.pdf';
import videoPrivacyPolicy from '../../../../docs/videoPrivacyPolicy.pdf';
import consentMailingList from '../../../../docs/consentMailingList.pdf';
import { contactNumber } from '../../../../utils/globalConstants';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="legal-links">
            <h3>Документы</h3>
            <ul>
              <li>
                <a href={privacyPolicy} target="_blank" rel="noreferrer">
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a href={consentPersonalData} target="_blank" rel="noreferrer">
                  Согласие на обработку персональных данных
                </a>
              </li>
              <li>
                <a href={videoPrivacyPolicy} target="_blank" rel="noreferrer">
                  Согласие на использование видеоматериалов
                </a>
              </li>
              <li>
                <a href={consentMailingList} target="_blank" rel="noreferrer">
                  Согласие на рассылку
                </a>
              </li>
              <li>
                <a href={offer} target="_blank" rel="noreferrer">
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h3>Контакты</h3>
            <ul>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href={'mailto:coolchess_online@mail.ru'}>coolchess_online@mail.ru</a>
              </li>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <a href={`tel:${contactNumber}`}>{contactNumber}</a>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <h3>Мы в соцсетях</h3>
            <div className="social-icons">
              <a
                href={LINK_TELEGRAMM}
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M9.04 16.88l-.39 3.84c.56 0 .8-.24 1.1-.53l2.64-2.5 5.48 3.99c1.01.55 1.72.26 1.97-.94l3.57-16.75-.01.01c.31-1.45-.52-2.01-1.45-1.65L1.94 9.45c-1.4.55-1.38 1.33-.24 1.69l4.6 1.44 10.7-6.72c.5-.3.95-.13.58.17z" />
                </svg>
              </a>
              <a href={LINK_VK} aria-label="VK" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12.001 12C18.627 24 24 18.627 24 12c0-6.628-5.373-12-11.999-12zm5.617 16.402h-1.434c-.558 0-.725-.449-1.718-1.42-.876-.851-1.25-.925-1.469-.925-.292 0-.375.083-.375.5v1.172c0 .363-.107.673-.735.673-1.388 0-2.938-1.243-4.055-3.44-.776-1.519-.776-2.101-.776-2.282 0-.197.058-.342.707-.342h1.434c.392 0 .538.188.684.53.727 1.74 1.964 3.252 2.327 3.252.181 0 .25-.1.25-.527v-2.03c-.052-.934-.54-.991-.54-1.251 0-.14.112-.285.288-.396.28-.178.786-.39 1.029-.39h1.435c.389 0 .515.186.515.538v2.391c0 .417.186.498.3.498.181 0 .329-.088.643-.402.993-1.02 1.687-2.114 1.687-2.114.138-.206.304-.411.706-.411h1.433c.138 0 .251.045.317.123.104.126.075.298-.017.48-.717 1.455-1.814 2.739-1.933 2.882-.215.272-.223.392 0 .636.155.179.676.663 1.004 1.055.391.465.75.862.75 1.12 0 .224-.17.402-.532.402z" />
                </svg>
              </a>
              <a
                href={LINK_WHATS_UP}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12.07 0C5.43 0 .07 5.36.07 12c0 2.11.55 4.17 1.6 5.99L0 24l6.25-1.62A11.9 11.9 0 0 0 12.07 24C18.7 24 24.07 18.64 24.07 12c0-3.18-1.24-6.17-3.55-8.52zM12.07 21.9c-1.76 0-3.5-.47-5.03-1.35l-.36-.21-3.71.97.99-3.62-.24-.37a9.75 9.75 0 0 1-1.55-5.23c0-5.41 4.4-9.81 9.81-9.81 2.63 0 5.1 1.03 6.97 2.9a9.82 9.82 0 0 1-7.88 16.72zm5.46-7.13c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.29-.76.97-.94 1.17-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.15.2-.26.3-.43.1-.18.05-.33-.02-.48-.07-.14-.66-1.6-.91-2.2-.24-.58-.5-.5-.66-.5h-.56c-.2 0-.5.07-.76.36s-1 1-.99 2.47 1 2.86 1.16 3.05c.14.2 1.97 3.2 4.77 4.48.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.77-.72 2.02-1.41.25-.69.25-1.27.17-1.41-.07-.13-.25-.2-.52-.34z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} CoolChess. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
