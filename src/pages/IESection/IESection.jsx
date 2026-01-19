import { useNavigate } from "react-router-dom";
import { User, ChevronLeft } from "lucide-react";
import "./IPSection.css";

const IPSection = () => {
  const navigate = useNavigate();

  const ipInfo = {
    name: "Кулиев Эльмар Валерьевич",
    inn: "236101066701",
    ogrnip: "325237500554820",
    address:
      "353688, КРАСНОДАРСКИЙ КРАЙ, Р-Н ЕЙСКИЙ, Г. ЕЙСК, УЛ. ПЛЕХАНОВА, Д. 16",
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="ip-section">
      {/* Навигация */}
      <div className="ip-navigation">
        <button className="back-button" onClick={handleGoBack}>
          <ChevronLeft size={20} />
          Назад
        </button>
      </div>

      {/* Заголовок */}
      <div className="ip-header">
        <div className="ip-avatar">
          <User size={40} />
        </div>
        <div className="ip-title">
          <h1>Индивидуальный предприниматель</h1>
          <h2>{ipInfo.name}</h2>
        </div>
      </div>

      {/* Контент */}
      <div className="ip-content">
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">ФИО</span>
            <span className="info-value">{ipInfo.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">ИНН</span>
            <span className="info-value">{ipInfo.inn}</span>
          </div>
          <div className="info-item">
            <span className="info-label">ОГРНИП</span>
            <span className="info-value">{ipInfo.ogrnip}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Дата регистрации</span>
            <span className="info-value">{ipInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPSection;
