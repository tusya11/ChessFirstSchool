import React from 'react';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import succesIcon from '../../assets/success.svg';
import './SuccessPage.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import modal from '../../store/modal';
import dayjs from 'dayjs';

const urlRequest = process.env.REACT_APP_NEST_URL;

const SuccessPage = observer(() => {
  const { setAlertMsg } = modal;
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  const orderItems = JSON.parse(localStorage.getItem('order') || '{}');

  const handleClickBack = () => {
    navigate('/main');
  };

  const getInfoAboutOrder = async () => {
    const url = `${urlRequest}dolyami/orders/${orderItems.orderId}/info`;
    try {
      const response = await axios.get(url);
      setSchedule(response.data.payment_schedule || []);

      // window.open(response.data.link, "_blank");
      // window.location.href = response.data.link;
    } catch (e) {
      console.error('---e', e);
      setAlertMsg({
        status: 'error',
        message: e.response.data.message,
        visible: true,
      });
    }
  };

  useEffect(() => {
    getInfoAboutOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="success-page__wrapper">
      <div className="success-page__content">
        <div className="success-page__card">
          <div className="success-page__icon">
            <img src={succesIcon} alt="success-icon" />
          </div>
          <div className="success-page__text">
            <p className="success-page__title">Оплата успешно прошла</p>
            <span>Спасибо, что вы с нами!</span>
          </div>
          {schedule && schedule?.length > 0 && (
            <div className="success-page__schedule">
              {schedule.map((v, index) => (
                <div className="success-page__row" key={index}>
                  {index === 0 || index === 1 ? (
                    <div className={index === 1 && 'succes-page__next-pay'}>
                      {index === 0 ? 'Текущая оплата' : 'Следующая оплата'}
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div>{v.amount}&nbsp;₽</div>
                  <div>{dayjs(v.payment_date).locale('ru').format('DD MMMM YYYY')}</div>
                </div>
              ))}
            </div>
          )}
          <Button
            variant="contained"
            endIcon={<ArrowBackIosIcon />}
            onClick={handleClickBack}
            className="success-page__button"
            color="success"
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
});

export default SuccessPage;
