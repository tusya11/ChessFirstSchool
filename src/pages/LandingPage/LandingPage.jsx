"use client";

import React, { useState, useEffect } from "react";

// Импортируем компоненты
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TrialInfo from "./components/TrialInfo";
import SignupCTA from "./components/SignupCTA";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ExitIntentPopup from "./components/ExitIntentPopup";
import telegram from "./assets/telegram_logo.svg";
import whatsapp from "./assets/whatsapp_logo.svg";

import "./LandingPage.scss";

const LandingPage = () => {
  // --- Логика формы ---
  const [formData, setFormData] = useState({
    telephone: "",
  });
  const [selectedMessenger, setSelectedMessenger] = useState(2); // Оставляем WhatsApp по умолчанию
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messengers = [
    {
      id: 1,
      title: "Telegram",
      icon: telegram,
    },
    {
      id: 2,
      title: "WhatsApp",
      icon: whatsapp,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;

    // Применяем валидацию только к полю телефона
    if (name === "telephone" && value) {
      validatedValue = validatedValue.substring(0, 18); // e.g., +7 (XXX) XXX-XX-XX is 18 chars
    }

    setFormData({ ...formData, [name]: validatedValue });
  };

  const handleMessengerSelect = (id) => {
    setSelectedMessenger(id === selectedMessenger ? null : id);
  };

  const handlePrivacyCheck = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);

    const submitData = new FormData();
    submitData.append(
      "Messenger",
      messengers.find((m) => m.id === selectedMessenger)?.title || "Не выбран"
    );
    submitData.append("Telephone", formData.telephone);

    // URL для Google Script
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby-QVk7tC5SPVQdaYUVjCj-hnmF7Dmr9ncBwPR8qxBZkbyR_eTsE1Sh5p9gaZVQXprB/exec";

    fetch(scriptURL, { method: "POST", body: submitData })
      .then((response) => {
        if (!response.ok) {
          // Попытка прочитать тело ошибки для диагностики
          return response.text().then((text) => {
            throw new Error(
              `Network response was not ok. Status: ${response.status}, Body: ${text}`
            );
          });
        }
        console.log("Success!", response);
        setIsSubmitted(true);
        sendToYandexMetrika("leadForm", { source: "LandingPage2Form" });
      })
      .catch((error) => {
        console.error("Error during form submission!", error);
        // Показываем более user-friendly сообщение
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами другим удобным способом."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const cleanPhone = formData.telephone.replace(/\D/g, "");
    let isPhoneValid = false;

    // Российский номер: +7XXXXXXXXXX (11 цифр) или 7/8XXXXXXXXXX (11 цифр)
    if (
      (formData.telephone.startsWith("+7") ||
        formData.telephone.startsWith("7") ||
        formData.telephone.startsWith("8")) &&
      cleanPhone.length === 11
    ) {
      isPhoneValid = true;
    }
    // Международный номер: +... (от 8 до 15 цифр включая код страны) - примерный диапазон
    else if (
      formData.telephone.startsWith("+") &&
      cleanPhone.length >= 8 &&
      cleanPhone.length <= 15
    ) {
      isPhoneValid = true;
    }

    const isValid =
      isPhoneValid && selectedMessenger !== null && isPrivacyChecked;
    setIsFormValid(isValid);
  }, [formData.telephone, selectedMessenger, isPrivacyChecked]);

  const sendToYandexMetrika = (goal, params = {}) => {
    console.log("Sending to Yandex Metrika:", goal, params);
    // Проверяем, определен ли window.ym
    const YANDEX_METRIKA_ID = process.env.YANDEX_METRIKA_ID || 96915259;
    if (window.ym) {
      try {
        window.ym(YANDEX_METRIKA_ID, "reachGoal", goal, params);
        console.log(`Yandex Metrika Goal Sent: ${goal}`, params);
      } catch (error) {
        console.error("Yandex Metrika reachGoal failed:", error);
      }
    } else {
      console.warn(
        "Yandex Metrika (window.ym) is not defined. Goal not sent:",
        goal,
        params
      );
    }
  };

  const handleClick_WA = () => {
    sendToYandexMetrika("leadWA", { source: "LandingPage_WA_Button" });
  };
  const handleClick_Tg = () => {
    sendToYandexMetrika("leadTg", { source: "LandingPage_Tg_Button" });
  };
  const handleClick_Inst = () => {
    sendToYandexMetrika("leadInst", { source: "LandingPage_Inst_Button" });
  };
  const handleClick_Phone = () => {
    sendToYandexMetrika("leadPhone", { source: "LandingPage_Phone_Link" });
  };

  // --- Рендер страницы ---
  return (
    <div className="landing-page landing-page-base">
      <Header
        handleClick_Phone={handleClick_Phone}
        handleClick_WA={handleClick_WA}
      />
      <main>
        {/* Передаем коллбэки для аналитики в компоненты */}
        <Hero handleClick_WA={handleClick_WA} />
        <Features />
        <TrialInfo /> {/* Новый блок из PDF */}
        <SignupCTA
          // Передаем все необходимые пропсы для формы
          formData={formData}
          messengers={messengers}
          selectedMessenger={selectedMessenger}
          isPrivacyChecked={isPrivacyChecked}
          isFormValid={isFormValid}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
          handleInputChange={handleInputChange}
          handleMessengerSelect={handleMessengerSelect}
          handlePrivacyCheck={handlePrivacyCheck}
          handleSubmit={handleSubmit}
        />
        <FAQ />
        <FinalCTA />
      </main>
      <ExitIntentPopup
        handleClick_WA={handleClick_WA}
        handleClick_Tg={handleClick_Tg}
        handleClick_Inst={handleClick_Inst}
      />
    </div>
  );
};

export default LandingPage;
