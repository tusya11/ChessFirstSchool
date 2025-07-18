import React, { useState, useRef } from 'react';
import privacyPolicy from '../../../../docs/privacy_policy.pdf';
import videoPrivacyPolicy from '../../../../docs/videoPrivacyPolicy.pdf';
import { URL } from '../../../../components/NewPayment/consts';
import styles from './RegistrationDrawer.module.scss';

const RegistrationDrawer = ({ isOpen, onClose, totalSum }) => {
  const overlayRef = useRef();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    privacy: false,
    policy: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Введите ФИО';
    if (!form.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!form.phone.trim()) newErrors.phone = 'Введите телефон';
    if (!form.privacy) newErrors.privacy = 'Подтвердите политику конфиденциальности';
    if (!form.policy) newErrors.policy = 'Подтвердите политику видеоматериалов';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      e.target.submit();
      //отправка статистики в Яндекс Метрику
      if (window.ym) {
        window.ym(96915259, 'reachGoal', 'BUTTON_CLICK');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Укажите ваши данные</h2>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>

        <form
          className={styles.form}
          method="POST"
          action={URL + '/create/'}
          onSubmit={handleSubmit}
        >
          <input
            style={{ display: 'none' }}
            type="text"
            name="service_name"
            value="Оплата летнего интенсива"
            readOnly
          />
          <input
            style={{
              display: 'none',
            }}
            type="text"
            name="sum"
            value={totalSum}
            readOnly
          />
          <input
            type="text"
            name="name"
            placeholder="ФИО"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          {/* Задизейблен */}
          <input
            style={{ display: 'none' }}
            type="text"
            name="clientid"
            value={form.name}
            readOnly
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            style={{ display: 'none' }}
            type="text"
            name="client_email"
            value={form.email}
            readOnly
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            style={{ display: 'none' }}
            type="text"
            name="client_phone"
            value={form.phone}
            readOnly
          />
          {errors.phone && <div className={styles.error}>{errors.phone}</div>}
          <div className={styles.containerCheckboxes}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
              <span>
                Я согласен с{' '}
                <a href={privacyPolicy} className={styles.link} target="_blank" rel="noreferrer">
                  политикой конфиденциальности
                </a>
              </span>
            </label>
            {errors.privacy && <div className={styles.error}>{errors.privacy}</div>}

            <label className={styles.checkbox}>
              <input type="checkbox" name="policy" checked={form.policy} onChange={handleChange} />
              <span>
                Я согласен с{' '}
                <a
                  href={videoPrivacyPolicy}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  политикой использования видеоматериалов
                </a>
              </span>
            </label>
            {errors.policy && <div className={styles.error}>{errors.policy}</div>}
          </div>

          <button type="submit" className={styles.submit} disabled={!form.privacy || !form.policy}>
            ОПЛАТИТЬ КАРТОЙ
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationDrawer;
