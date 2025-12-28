import masterCardImg from "../../assets/masterCard.png";
import payKeeperLogo from "../../assets/paykeeperLogo.png";

import "./PaymentLogos.scss";

export const PaymentLogos = () => {
  const logos = [
    {
      name: "МИР",
      key: "mir",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/mir.png"
          alt="mir"
        />
      ),
    },
    {
      name: "VISA",
      key: "visa",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color-glass/48/visa.png"
          alt="visa"
        />
      ),
    },
    {
      name: "MasterCard",
      key: "mastercard",
      icon: <img width="48" height="32" src={masterCardImg} alt="visa" />,
    },
    {
      name: "PayKeeper",
      key: "paykeeper",
      icon: <img width="70" height="30" src={payKeeperLogo} alt="visa" />,
    },
  ];

  return (
    <div className="new-payment__logos-modern">
      <div className="new-payment__logos-header">
        <div className="new-payment__security-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.3333 7.33333H12.6667V5.33333C12.6667 2.94667 10.72 1 8.33333 1H7.66667C5.28 1 3.33333 2.94667 3.33333 5.33333V7.33333H2.66667C1.93333 7.33333 1.33333 7.93333 1.33333 8.66667V13.3333C1.33333 14.0667 1.93333 14.6667 2.66667 14.6667H13.3333C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V8.66667C14.6667 7.93333 14.0667 7.33333 13.3333 7.33333ZM5.33333 5.33333C5.33333 3.86 6.52667 2.66667 8 2.66667C9.47333 2.66667 10.6667 3.86 10.6667 5.33333V7.33333H5.33333V5.33333ZM8 12C6.89333 12 6 11.1067 6 10C6 8.89333 6.89333 8 8 8C9.10667 8 10 8.89333 10 10C10 11.1067 9.10667 12 8 12Z"
              fill="#4CAF50"
            />
          </svg>
          <span>Безопасная оплата</span>
        </div>
        <div className="new-payment__logos-label">Доступные способы оплаты</div>
      </div>

      <div className="new-payment__logos-grid">
        {logos.map((logo) => (
          <div key={logo.key} className="new-payment__logo-card">
            <div className="new-payment__logo-icon">{logo.icon}</div>
            <div className="new-payment__logo-name">{logo.name}</div>
          </div>
        ))}
      </div>

      <div className="new-payment__payment-info">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5.5" fill="#F5F5F5" stroke="#E0E0E0" />
          <path
            d="M6 3V7M6 9V9"
            stroke="#666"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span>Все транзакции защищены SSL-шифрованием</span>
      </div>
    </div>
  );
};
