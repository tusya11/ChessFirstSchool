import React, { useState, useEffect } from "react";
import "./PhoneIcon.scss"; // Импортируем SCSS вместо CSS

const PhoneIcon = ({
  phoneNumber,
  className = "",
  floating = false,
  pulse = false,
  theme = "default",
  size = "medium",
  disabled = false,
  loading = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    setIsMobile(checkIsMobile());
  }, []);

  const handleCall = () => {
    if (disabled || loading || !phoneNumber) return;

    const cleanNumber = phoneNumber.replace(/[^\d+]/g, "");

    if (isMobile) {
      window.location.href = `tel:${cleanNumber}`;
    } else {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(cleanNumber)
          .then(() => {
            alert(`Номер ${cleanNumber} скопирован в буфер обмена`);
          })
          .catch((err) => {
            showNumber(cleanNumber);
          });
      } else {
        showNumber(cleanNumber);
      }
    }
  };

  const showNumber = (number) => {
    alert(`Позвоните по номеру: ${number}`);
  };

  const iconClass = `
    phone-icon 
    ${className} 
    ${floating ? "floating" : ""} 
    ${pulse ? "pulse" : ""}
    ${theme !== "default" ? `theme-${theme}` : ""}
    ${size !== "medium" ? `size-${size}` : ""}
    ${disabled ? "disabled" : ""}
    ${loading ? "loading" : ""}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div
      className={iconClass}
      onClick={handleCall}
      title={
        isMobile
          ? `Позвонить: ${phoneNumber}`
          : `Скопировать номер: ${phoneNumber}`
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="phone-icon-svg"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      {!floating && <span className="phone-number">{phoneNumber}</span>}
    </div>
  );
};

export default PhoneIcon;
