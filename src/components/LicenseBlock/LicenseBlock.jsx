import licenseFileUrl from "../../docs/license.pdf";
import "./LicenseBlock.css";

const LicenseBlock = () => {
  const handleLicenseClick = (e) => {
    e.preventDefault();
    window.open(licenseFileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="minimal-license-section">
      <div className="minimal-container">
        <div className="minimal-grid">
          <div className="minimal-col">
            <div className="minimal-tag">✓ Государственная лицензия</div>
            <h2 className="minimal-title">Обучение со статусом</h2>
            <p className="minimal-desc">
              Официальная лицензия позволяет получить налоговый вычет и
              гарантирует соответствие образовательным стандартам.
            </p>
          </div>

          <div className="minimal-col">
            <a
              href={licenseFileUrl}
              className="license-display-link"
              onClick={handleLicenseClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть файл лицензии"
            >
              <div className="license-display">
                <div className="license-label">ЛИЦЕНЗИЯ</div>
                <div className="license-code">Л035-01218-23/04245470</div>
                <div className="license-note">Министерство просвещения РФ</div>
                <div className="license-hint">
                  <span className="hint-text">Нажмите, чтобы открыть</span>
                  <svg
                    className="hint-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3H21V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <div className="benefit-box">
              <div className="benefit-amount">13%</div>
              <div className="benefit-text">
                налоговый вычет от стоимости обучения
              </div>
            </div>

            <div className="benefit-box benefit-box--matcapital">
              <div className="benefit-amount benefit-amount--small">
                Гос. поддержка
              </div>
              <div className="benefit-text">
                обучение можно оплатить средствами материнского капитала
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseBlock;
