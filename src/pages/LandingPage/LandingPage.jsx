"use client";

import { useState, useEffect } from "react";
import hero from "./assets/hero.png";
import kids5_7 from "./assets/5-7.png";
import kids8_10 from "./assets/8-10.png";
import kids11_14 from "./assets/11-14.png";
import "./LandingPage.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    telephone: "",
    city: "",
    name: "",
    age: "",
  });
  const [selectedMessenger, setSelectedMessenger] = useState(2);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messengers = [
    {
      id: 1,
      title: "Telegram",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.03c-.19 1.98-.88 6.78-1.25 9.01-.16.95-.47 1.27-.77 1.3-.66.07-1.16-.43-1.8-.85-.99-.65-1.56-1.06-2.53-1.7-1.12-.74-.39-1.15.24-1.81.17-.18 3.03-2.77 3.08-3.01.01-.03.01-.14-.05-.2-.07-.06-.17-.04-.24-.02-.1.02-1.76 1.12-4.95 3.3-.47.32-.89.48-1.27.47-.42-.01-1.22-.24-1.82-.43-.73-.24-1.32-.37-1.27-.79.03-.22.27-.43.74-.65 2.9-1.26 4.83-2.09 5.78-2.5 2.75-1.17 3.33-1.38 3.7-1.38.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z' fill='%2329B6F6'/%3E%3C/svg%3E",
    },
    {
      id: 2,
      title: "WhatsApp",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17.6 6.32C16.8 5.5 15.8 4.85 14.7 4.4C13.6 3.95 12.3 3.7 11 3.7C9.7 3.7 8.5 3.95 7.3 4.4C6.2 4.85 5.2 5.5 4.3 6.32C3.5 7.14 2.9 8.1 2.4 9.2C2 10.3 1.7 11.5 1.7 12.8C1.7 14.4 2.1 15.9 2.8 17.3L1.7 22.2L6.7 21.1C8.1 21.8 9.5 22.2 11.1 22.2C12.4 22.2 13.6 21.9 14.7 21.5C15.8 21 16.8 20.4 17.6 19.6C18.4 18.8 19.1 17.8 19.5 16.7C20 15.6 20.2 14.3 20.2 13C20.2 11.7 19.9 10.5 19.5 9.4C19 8.1 18.4 7.14 17.6 6.32Z' fill='%2325D366'/%3E%3Cpath d='M11 20.3C9.6 20.3 8.3 19.9 7.1 19.2L6.8 19L3.9 19.7L4.6 16.9L4.4 16.6C3.6 15.4 3.2 14.1 3.2 12.7C3.2 11.6 3.4 10.6 3.8 9.7C4.2 8.8 4.7 8 5.4 7.3C6.1 6.6 6.9 6.1 7.8 5.7C8.7 5.3 9.8 5.1 10.9 5.1C12 5.1 13.1 5.3 14 5.7C14.9 6.1 15.7 6.6 16.4 7.3C17.1 8 17.6 8.8 18 9.7C18.4 10.6 18.6 11.6 18.6 12.7C18.6 13.8 18.4 14.9 18 15.8C17.6 16.7 17.1 17.5 16.4 18.2C15.7 18.9 14.9 19.4 14 19.8C13.1 20.1 12.1 20.3 11 20.3ZM15.1 14.2C15 14.1 14.8 14.1 14.5 14C14.2 13.9 13.4 13.5 13.2 13.4C12.9 13.3 12.7 13.3 12.6 13.5C12.4 13.7 12.1 14.1 12 14.3C11.9 14.5 11.8 14.5 11.5 14.4C11.2 14.3 10.7 14.1 10.1 13.6C9.6 13.2 9.3 12.7 9.1 12.4C9 12.1 9.1 12 9.2 11.9C9.3 11.8 9.4 11.6 9.5 11.5C9.6 11.4 9.6 11.2 9.7 11.1C9.8 10.9 9.7 10.8 9.7 10.7C9.6 10.6 9.3 9.8 9.1 9.4C9 9 8.8 9 8.7 9C8.6 9 8.4 9 8.2 9C8 9 7.7 9.1 7.5 9.4C7.3 9.7 6.9 10.1 6.9 10.9C6.9 11.7 7.4 12.5 7.5 12.7C7.6 12.9 9.3 15.5 11.9 16.1C14.5 16.7 14.5 16.4 15 16.4C15.5 16.4 16.2 16 16.4 15.5C16.6 15 16.6 14.6 16.5 14.5C16.4 14.4 16.3 14.3 15.1 14.2Z' fill='white'/%3E%3C/svg%3E",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let validatedValue = value;

    if (name === "telephone" && value) {
      // Удаляем все нечисловые символы, кроме начального плюса
      const digits = value.replace(/[^\d+]/g, "");

      // Проверяем, является ли это российским номером
      const isRussianNumber =
        value.startsWith("+7") ||
        value.startsWith("8") ||
        value.startsWith("7");

      if (isRussianNumber) {
        // Извлекаем цифры номера без кода страны
        const phoneDigits = digits.startsWith("+7")
          ? digits.substring(2)
          : digits.substring(1);

        if (phoneDigits.length > 0) {
          if (phoneDigits.length <= 3) {
            validatedValue = `${
              value.startsWith("+7") ? "+7" : "8"
            } (${phoneDigits}`;
          } else if (phoneDigits.length <= 6) {
            validatedValue = `${
              value.startsWith("+7") ? "+7" : "8"
            } (${phoneDigits.substring(0, 3)})${
              phoneDigits.length > 3 ? " " + phoneDigits.substring(3) : ""
            }`;
          } else if (phoneDigits.length <= 9) {
            validatedValue = `${
              value.startsWith("+7") ? "+7" : "8"
            } (${phoneDigits.substring(0, 3)}) ${phoneDigits.substring(
              3,
              6
            )}-${phoneDigits.substring(6)}`;
          } else {
            validatedValue = `${
              value.startsWith("+7") ? "+7" : "8"
            } (${phoneDigits.substring(0, 3)}) ${phoneDigits.substring(
              3,
              6
            )}-${phoneDigits.substring(6, 8)}-${phoneDigits.substring(8, 10)}`;
          }
        }
      }
      // Обработка номеров других стран
      else if (value.startsWith("+") && digits.length > 1) {
        // Определяем длину кода страны (1-3 цифры после +)
        const match = digits.match(/^\+(\d{1,3})/);
        const countryCode = match ? match[1] : digits[1];
        const phoneNumber = digits.substring(countryCode.length + 1);

        if (phoneNumber.length > 0) {
          if (phoneNumber.length <= 3) {
            validatedValue = `+${countryCode} ${phoneNumber}`;
          } else if (phoneNumber.length <= 6) {
            validatedValue = `+${countryCode} ${phoneNumber.substring(
              0,
              3
            )}-${phoneNumber.substring(3)}`;
          } else if (phoneNumber.length <= 10) {
            validatedValue = `+${countryCode} ${phoneNumber.substring(
              0,
              3
            )}-${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
          } else {
            validatedValue = `+${countryCode} ${phoneNumber.substring(
              0,
              3
            )}-${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6, 10)}`;
          }
        }
      }
      // Обработка номеров без кода страны
      else if (digits.length > 0) {
        if (digits.length <= 3) {
          validatedValue = `${digits}`;
        } else if (digits.length <= 6) {
          validatedValue = `${digits.substring(0, 3)}-${digits.substring(3)}`;
        } else if (digits.length <= 10) {
          validatedValue = `${digits.substring(0, 3)}-${digits.substring(
            3,
            6
          )}-${digits.substring(6)}`;
        } else {
          validatedValue = `${digits.substring(0, 3)}-${digits.substring(
            3,
            6
          )}-${digits.substring(6, 10)}`;
        }
      }
    }

    setFormData({
      ...formData,
      [name]: validatedValue,
    });
  };

  const handleMessengerSelect = (id) => {
    setSelectedMessenger(id === selectedMessenger ? null : id);
  };

  const handlePrivacyCheck = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create FormData object for submission
    const submitData = new FormData();
    submitData.append(
      "Messenger",
      messengers.find((m) => m.id === selectedMessenger)?.title || ""
    );
    submitData.append("Telephone", formData.telephone);

    // Google Script URL from the main site
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby-QVk7tC5SPVQdaYUVjCj-hnmF7Dmr9ncBwPR8qxBZkbyR_eTsE1Sh5p9gaZVQXprB/exec";

    // Submit the form
    fetch(scriptURL, { method: "POST", body: submitData })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Success!", response);
        setIsSubmitted(true);

        // Track conversion if analytics are available
        if (window.ym) {
          window.ym(96915259, "reachGoal", "BUTTON_CLICK");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert(
          "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Validate form
  useEffect(() => {
    // Извлекаем цифры из номера телефона
    const phoneDigits = formData.telephone.replace(/\D/g, "");

    let isPhoneValid = false;

    // Проверяем российские номера (+7 или 8)
    if (
      formData.telephone.startsWith("+7") ||
      formData.telephone.startsWith("8")
    ) {
      const phoneNumber = phoneDigits.substring(1); // Убираем код страны (7 или 8)
      isPhoneValid = phoneNumber.length === 10; // Требуем ровно 10 цифр для России
    }
    // Для других стран с кодом страны
    else if (formData.telephone.startsWith("+")) {
      const match = phoneDigits.match(/^\+(\d{1,3})/);
      const countryCodeLength = match ? match[1].length : 1;
      const phoneNumber = phoneDigits.substring(countryCodeLength);
      isPhoneValid = phoneNumber.length >= 7 && phoneNumber.length <= 12; // Более гибкий диапазон
    }
    // Для номеров без кода страны
    else {
      isPhoneValid = phoneDigits.length >= 7 && phoneDigits.length <= 12; // Гибкий диапазон
    }

    // Проверяем общую валидность формы
    const isValid =
      isPhoneValid && selectedMessenger !== null && isPrivacyChecked;

    setIsFormValid(isValid);
  }, [formData, selectedMessenger, isPrivacyChecked]);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <a href="https://coolchess.ru" className="logo-link">
              <div className="logo-icon">
                <div className="chess-piece"></div>
              </div>
              <span className="logo-text">
                Cool<strong>Chess</strong>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#advantages" className="nav-link">
              Преимущества
            </a>
            <a href="#price" className="nav-link">
              Прайс
            </a>
            <a href="#promotions" className="nav-link">
              Бонусы
            </a>
            <a href="tel:+79185445984" className="nav-link">
              +7(918)544-59-84
            </a>
          </nav>

          <div className="header-actions">
            <a
              href="https://wa.me/79185445984"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6 6.31999C16.8 5.49999 15.8 4.84999 14.7 4.39999C13.6 3.94999 12.3 3.69999 11 3.69999C9.7 3.69999 8.5 3.94999 7.3 4.39999C6.2 4.84999 5.2 5.49999 4.3 6.31999C3.5 7.13999 2.9 8.09999 2.4 9.19999C2 10.3 1.7 11.5 1.7 12.8C1.7 14.4 2.1 15.9 2.8 17.3L1.7 22.2L6.7 21.1C8.1 21.8 9.5 22.2 11.1 22.2C12.4 22.2 13.6 21.9 14.7 21.5C15.8 21 16.8 20.4 17.6 19.6C18.4 18.8 19.1 17.8 19.5 16.7C20 15.6 20.2 14.3 20.2 13C20.2 11.7 19.9 10.5 19.5 9.39999C19 8.09999 18.4 7.13999 17.6 6.31999ZM11 20.3C9.6 20.3 8.3 19.9 7.1 19.2L6.8 19L3.9 19.7L4.6 16.9L4.4 16.6C3.6 15.4 3.2 14.1 3.2 12.7C3.2 11.6 3.4 10.6 3.8 9.69999C4.2 8.79999 4.7 7.99999 5.4 7.29999C6.1 6.59999 6.9 6.09999 7.8 5.69999C8.7 5.29999 9.8 5.09999 10.9 
 5.09999C12 5.09999 13.1 5.29999 14 5.69999C14.9 6.09999 15.7 6.59999 16.4 7.29999C17.1 7.99999 17.6 8.79999 18 9.69999C18.4 10.6 18.6 11.6 18.6 12.7C18.6 13.8 18.4 14.9 18 15.8C17.6 16.7 17.1 17.5 16.4 18.2C15.7 18.9 14.9 19.4 14 19.8C13.1 20.1 12.1 20.3 11 20.3ZM15.1 14.2C15 14.1 14.8 14.1 14.5 14C14.2 13.9 13.4 13.5 13.2 13.4C12.9 13.3 12.7 13.3 12.6 13.5C12.4 13.7 12.1 14.1 12 14.3C11.9 14.5 11.8 14.5 11.5 14.4C11.2 14.3 10.7 14.1 10.1 13.6C9.6 13.2 9.3 12.7 9.1 12.4C9 12.1 9.1 12 9.2 11.9C9.3 11.8 9.4 11.6 9.5 11.5C9.6 11.4 9.6 11.2 9.7 11.1C9.8 10.9 9.7 10.8 9.7 10.7C9.6 10.6 9.3 9.79999 9.1 9.39999C9 8.99999 8.8 8.99999 8.7 8.99999C8.6 8.99999 8.4 8.99999 8.2 8.99999C8 8.99999 7.7 9.09999 7.5 9.39999C7.3 9.69999 6.9 10.1 6.9 10.9C6.9 11.7 7.4 12.5 7.5 12.7C7.6 12.9 9.3 15.5 11.9 16.1C14.5 16.7 14.5 16.4 15 16.4C15.5 16.4 16.2 16 16.4 15.5C16.6 15 16.6 14.6 16.5 14.5C16.4 14.4 16.3 14.3 15.1 14.2Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#signup" className="signup-button">
              ЗАПИСАТЬСЯ
            </a>

            {/* Mobile menu button */}
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="container mobile-nav-container">
              <a href="#advantages" className="nav-link" onClick={toggleMenu}>
                Преимущества
              </a>
              <a href="#price" className="nav-link" onClick={toggleMenu}>
                Прайс
              </a>
              <a href="#bonuses" className="nav-link" onClick={toggleMenu}>
                Бонусы
              </a>
              <a
                href="tel:+79185445984"
                className="nav-link"
                onClick={toggleMenu}
              >
                +7(918)544-59-84
              </a>
              <div className="mobile-actions">
                <a
                  href="https://wa.me/79185445984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6 6.31999C16.8 5.49999 15.8 4.84999 14.7 4.39999C13.6 3.94999 12.3 3.69999 11 3.69999C9.7 3.69999 8.5 3.94999 7.3 4.39999C6.2 4.84999 5.2 5.49999 4.3 6.31999C3.5 7.13999 2.9 8.09999 2.4 9.19999C2 10.3 1.7 11.5 1.7 12.8C1.7 14.4 2.1 15.9 2.8 17.3L1.7 22.2L6.7 21.1C8.1 21.8 9.5 22.2 11.1 22.2C12.4 22.2 13.6 21.9 14.7 21.5C15.8 21 16.8 20.4 17.6 19.6C18.4 18.8 19.1 17.8 19.5 16.7C20 15.6 20.2 14.3 20.2 13C20.2 11.7 19.9 10.5 19.5 9.39999C19 8.09999 18.4 7.13999 17.6 6.31999ZM11 20.3C9.6 20.3 8.3 19.9 7.1 19.2L6.8 19L3.9 19.7L4.6 16.9L4.4 16.6C3.6 15.4 3.2 14.1 3.2 12.7C3.2 11.6 3.4 10.6 3.8 9.69999C4.2 8.79999 4.7 7.99999 5.4 7.29999C6.1 6.59999 6.9 6.09999 7.8 5.69999C8.7 5.29999 9.8 5.09999 10.9 5.09999C12 5.09999 13.1 5.29999 14 5.69999C14.9 6.09999 15.7 6.59999 16.4 7.29999C17.1 7.99999 17.6 8.79999 18 9.69999C18.4 10.6 18.6 11.6 18.6 12.7C18.6 13.8 18.4 14.9 18 15.8C17.6 16.7 17.1 17.5 16.4 18.2C15.7 18.9 14.9 19.4 14 19.8C13.1 20.1 12.1 20.3 11 20.3ZM15.1 14.2C15 14.1 14.8 14.1 14.5 14C14.2 13.9 13.4 13.5 13.2 13.4C12.9 13.3 12.7 13.3 12.6 13.5C12.4 13.7 12.1 14.1 12 14.3C11.9 14.5 11.8 14.5 11.5 14.4C11.2 14.3 10.7 14.1 10.1 13.6C9.6 13.2 9.3 12.7 9.1 12.4C9 12.1 9.1 12 9.2 11.9C9.3 11.8 9.4 11.6 9.5 11.5C9.6 11.4 9.6 11.2 9.7 11.1C9.8 10.9 9.7 10.8 9.7 10.7C9.6 10.6 9.3 9.79999 9.1 9.39999C9 8.99999 8.8 8.99999 8.7 8.99999C8.6 8.99999 8.4 8.99999 8.2 8.99999C8 8.99999 7.7 9.09999 7.5 9.39999C7.3 9.69999 6.9 10.1 6.9 10.9C6.9 11.7 7.4 12.5 7.5 12.7C7.6 12.9 9.3 15.5 11.9 16.1C14.5 16.7 14.5 16.4 15 16.4C15.5 16.4 16.2 16 16.4 15.5C16.6 15 16.6 14.6 16.5 14.5C16.4 14.4 16.3 14.3 15.1 14.2Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#signup" className="signup-button">
                  ЗАПИСАТЬСЯ
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="free-lesson-badge">БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК</div>
            <h1 className="hero-title">Онлайн-школа шахмат CoolChess</h1>
            <p className="hero-subtitle">
              Развиваем интеллект, уверенность и мышление — всего за 25 минут в
              день
            </p>
            <div>
              <a href="#signup" className="start-button">
                ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
              </a>
            </div>
            <div className="hero-location">
              <span>📍 Из любого города мира</span> | <span>💻 Онлайн</span> |{" "}
              <span>🕒 Индивидуальный график</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="shape-container">
              <div className="shape purple-pill"></div>
              <div className="shape pink-circle"></div>
              <div className="shape yellow-pill"></div>
              <div className="shape green-pill"></div>
              <div className="chess-player">
                <img
                  // src="/hero.png?height=400&width=400"
                  src={hero}
                  alt="Шахматист"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="advantages" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Почему выбирают CoolChess?</h2>
            <p className="section-subtitle">
              Для детей и взрослых любого уровня подготовки
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon purple">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">🧠 Развитие интеллекта</h3>
              <p className="feature-description">
                Логика, аналитическое мышление, внимание и память.
                Коммуникативные навыки и развитие речи. Подготовка к школе и
                повышение успеваемости.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon yellow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">
                🎮 Полезное время за компьютером
              </h3>
              <p className="feature-description">
                Занятия проходят в комфортной, размеренной форме, без перегрузок
                и спешки. Дети учатся с удовольствием, без давления.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 3V21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">👨‍🏫 Профессиональные тренеры</h3>
              <p className="feature-description">
                Индивидуальная траектория обучения с учетом темперамента
                ученика. Гибкий график и удобное расписание. Подходит как детям,
                так и взрослым.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon pink">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">♟ Бонусы и участие в турнирах</h3>
              <p className="feature-description">
                Бесплатные призовые турниры каждую неделю. Призёры получают
                бесплатные уроки. Участвуйте в викторинах и получайте скидки до
                10% на абонементы.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon purple">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">🌍 Найти друзей по всему миру</h3>
              <p className="feature-description">
                Занятия в мини-группах или индивидуально — возможность общаться
                с единомышленниками из разных стран!
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon yellow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">
                👑 Мастер-классы от гроссмейстеров
              </h3>
              <p className="feature-description">
                Мастер-классы от международных гроссмейстеров и еженедельные
                тематические турниры для всех учеников школы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="promotions" className="promotions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🎁 Акции и подарки</h2>
            <p className="section-subtitle">
              Специальные предложения для учеников
            </p>
          </div>

          <div className="promotions-grid">
            <div className="promotion-card">
              <div className="promotion-icon">💥</div>
              <h3 className="promotion-title">Первый урок — бесплатно</h3>
              <p className="promotion-description">
                Познакомьтесь с нашим подходом к обучению без обязательств
              </p>
            </div>

            <div className="promotion-card">
              <div className="promotion-icon">🎯</div>
              <h3 className="promotion-title">Скидка 10% на абонемент</h3>
              <p className="promotion-description">
                При оплате в день пробного занятия получите скидку на первый
                абонемент
              </p>
            </div>

            <div className="promotion-card">
              <div className="promotion-icon">👫</div>
              <h3 className="promotion-title">Приведите друга</h3>
              <p className="promotion-description">
                Получите 2 бесплатных урока, а ваш друг — 10% скидку на обучение
              </p>
            </div>

            <div className="promotion-card">
              <div className="promotion-icon">🏆</div>
              <h3 className="promotion-title">Участвуйте в турнирах</h3>
              <p className="promotion-description">
                Зарабатывайте бесплатные занятия, участвуя в наших еженедельных
                турнирах
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="price" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Стоимость обучения</h2>
            <p className="section-subtitle">
              Доступные тарифы для всех уровней подготовки
            </p>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Стоимость занятий</h3>
              <div className="pricing-amount">от 790 ₽</div>
              <div className="pricing-period">за занятие</div>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <svg
                  className="check-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Индивидуальные занятия</span>
              </div>
              <div className="pricing-feature">
                <svg
                  className="check-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Групповые занятия</span>
              </div>
              <div className="pricing-feature">
                <svg
                  className="check-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Профессиональные тренеры</span>
              </div>
              <div className="pricing-feature">
                <svg
                  className="check-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Гибкий график занятий</span>
              </div>
            </div>
            <div className="pricing-cta">
              <div className="pricing-trial">
                📅 Пробное занятие — БЕСПЛАТНО, без обязательств
              </div>
              <div className="pricing-limited">
                ⏳ Места ограничены — запишитесь прямо сейчас!
              </div>
              <a href="#signup" className="pricing-button">
                Записаться на бесплатный урок
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Наши программы</h2>
            <p className="section-subtitle">
              Мы предлагаем различные программы обучения шахматам для детей
              разного возраста и уровня подготовки
            </p>
          </div>

          <div className="programs-grid">
            {/* Program 1 */}
            <div className="program-card">
              <div className="program-image purple">
                <img
                  // src="/5-7.png?height=192&width=300"
                  src={kids5_7}
                  alt="Начинающие"
                  height={192}
                  width={300}
                />
              </div>
              <div className="program-content">
                <h3 className="program-title">Для начинающих (от 4 лет)</h3>
                <p className="program-description">
                  Знакомство с шахматами в игровой форме. Дети изучают правила,
                  названия фигур и их ходы через увлекательные задания.
                </p>
                <ul className="program-features">
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>2 занятия в неделю</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Длительность: 25 минут</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Игровой формат</span>
                  </li>
                </ul>
                <a href="#signup" className="program-button">
                  Записаться
                </a>
              </div>
            </div>

            {/* Program 2 */}
            <div className="program-card">
              <div className="program-image yellow">
                <img
                  // src="/8-10.png?height=192&width=300"
                  src={kids8_10}
                  alt="Базовый курс"
                  height={192}
                  width={300}
                />
              </div>
              <div className="program-content">
                <h3 className="program-title">Базовый курс (8-10 лет)</h3>
                <p className="program-description">
                  Углубленное изучение шахматных правил, тактик и стратегий.
                  Развитие логического мышления и концентрации.
                </p>
                <ul className="program-features">
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>2-3 занятия в неделю</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Длительность: 45 минут</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Практические задания</span>
                  </li>
                </ul>
                <a href="#signup" className="program-button">
                  Записаться
                </a>
              </div>
            </div>

            {/* Program 3 */}
            <div className="program-card">
              <div className="program-image green">
                <img
                  // src="/11-14.png?height=192&width=300"
                  src={kids11_14}
                  alt="Продвинутый курс"
                  height={192}
                  width={300}
                />
              </div>
              <div className="program-content">
                <h3 className="program-title">Продвинутый курс (11-14 лет)</h3>
                <p className="program-description">
                  Глубокое изучение шахматной теории, анализ партий, подготовка
                  к турнирам и соревнованиям.
                </p>
                <ul className="program-features">
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>3 занятия в неделю</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Длительность: 60 минут</span>
                  </li>
                  <li className="program-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Турнирная подготовка</span>
                  </li>
                </ul>
                <a href="#signup" className="program-button">
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Отзывы родителей</h2>
            <p className="section-subtitle">
              Что говорят родители наших учеников о занятиях в CoolChess
            </p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar purple"></div>
                <div className="testimonial-author">
                  <h4 className="author-name">Анна</h4>
                  <p className="author-info">Мама Миши, 8 лет</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Мой сын занимается в CoolChess уже полгода, и я вижу
                значительный прогресс. Он стал более сосредоточенным, научился
                планировать свои действия. Тренер находит подход к каждому
                ребенку!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar yellow"></div>
                <div className="testimonial-author">
                  <h4 className="author-name">Сергей</h4>
                  <p className="author-info">Папа Кати, 10 лет</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Очень удобно, что занятия проходят онлайн. Дочь может
                заниматься из дома, не тратя время на дорогу. При этом качество
                обучения на высоте. Уже участвовала в двух турнирах!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar green"></div>
                <div className="testimonial-author">
                  <h4 className="author-name">Елена</h4>
                  <p className="author-info">Мама Артема, 12 лет</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Сын всегда с нетерпением ждет уроков шахмат. Преподаватели
                умеют заинтересовать детей, объясняют сложные вещи простым
                языком. Рекомендую всем родителям!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup-block" className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              ХОТИТЕ, ЧТОБЫ РЕБЕНОК СТАЛ УМНЕЕ, УВЕРЕННЕЕ И ЛЮБИЛ УЧИТЬСЯ?
            </h2>
            <p className="cta-subtitle">
              Запишитесь на бесплатный урок прямо сейчас — выберите удобное
              время
            </p>
            <ul className="cta-benefits">
              <li className="cta-benefit">
                <svg
                  className="benefit-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Познакомитесь с преподавателем</span>
              </li>
              <li className="cta-benefit">
                <svg
                  className="benefit-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Оцените формат онлайн-обучения</span>
              </li>
              <li className="cta-benefit">
                <svg
                  className="benefit-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Определим уровень подготовки</span>
              </li>
              <li className="cta-benefit">
                <svg
                  className="benefit-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Подберем подходящую программу</span>
              </li>
            </ul>
          </div>
          <div className="signup-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3 className="success-title">Спасибо за заявку!</h3>
                <p className="success-message">
                  Куратор школы свяжется с вами в ближайшее время, чтобы
                  подобрать удобное время для проведения пробного занятия.
                </p>
              </div>
            ) : (
              <form id="signup" className="signup-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Записаться на пробное занятие</h3>
                <p className="form-subtitle">
                  Подберем тренера и подходящую программу обучения под ваши
                  навыки и задачи
                </p>
                <p className="form-description">
                  Куратор школы свяжется с вами, чтобы подобрать удобное время
                  для проведения пробного занятия
                </p>

                <div className="form-group">
                  <label htmlFor="telephone" className="form-label">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="form-input"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="messenger-section">
                  <p className="messenger-label">
                    Выберите мессенджер для обратной связи
                  </p>
                  <div className="messenger-options">
                    {messengers.map((messenger) => (
                      <div
                        key={messenger.id}
                        className={`messenger-option ${
                          selectedMessenger === messenger.id ? "selected" : ""
                        }`}
                        onClick={() => handleMessengerSelect(messenger.id)}
                      >
                        <div
                          className="messenger-icon"
                          dangerouslySetInnerHTML={{
                            __html: `<img src="${messenger.icon}" alt="${messenger.title}" />`,
                          }}
                        />
                        <span className="messenger-name">
                          {messenger.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="privacy-policy">
                  <label className="privacy-label">
                    <input
                      type="checkbox"
                      checked={isPrivacyChecked}
                      onChange={handlePrivacyCheck}
                      required
                    />
                    <span>
                      Я согласен с{" "}
                      <a
                        href="https://coolchess.ru/static/media/privacy_policy.d2cf16b4e77b143ce235.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        политикой конфиденциальности
                      </a>
                      {" и "}
                      <a
                        href="https://coolchess.ru/static/media/offer.026b9b35cae731b14b57.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        офертой
                      </a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`form-submit ${isFormValid ? "" : "disabled"}`}
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading ? "Отправка..." : "Отправить"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Часто задаваемые вопросы</h2>
            <p className="section-subtitle">
              Ответы на популярные вопросы о нашей онлайн школе шахмат
            </p>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">Как проходят онлайн занятия?</h3>
              <p className="faq-answer">
                Занятия проводятся через Zoom. Преподаватель использует
                виртуальную шахматную доску, которую видит ученик. Общение
                происходит в режиме реального времени с возможностью задавать
                вопросы.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Что нужно для занятий?</h3>
              <p className="faq-answer">
                Компьютер или планшет с доступом в интернет, веб-камера и
                микрофон. Желательно иметь шахматную доску для практики, но это
                не обязательно.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                С какого возраста можно начинать?
              </h3>
              <p className="faq-answer">
                Мы принимаем детей с 4 лет. Для самых маленьких у нас есть
                специальная программа, адаптированная под их возраст и
                особенности восприятия.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Можно ли поменять преподавателя?</h3>
              <p className="faq-answer">
                Да, если вы или ваш ребенок чувствуете, что с текущим
                преподавателем не складывается контакт, мы подберем другого
                специалиста, который лучше подойдет по темпераменту и стилю
                обучения.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Last CTA Section */}
      <section className="cta-section">
        <div className="pricing-cta">
          <div className="pricing-trial">
            📅 Пробное занятие — БЕСПЛАТНО, без обязательств
          </div>
          <div className="pricing-limited">
            ⏳ Места ограничены — запишитесь прямо сейчас!
          </div>
          <a href="#signup" className="pricing-button">
            Записаться на бесплатный урок
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
