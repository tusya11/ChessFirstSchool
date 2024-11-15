import React, { forwardRef, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { IMaskInput } from "react-imask";
import privacyPolicy from "../../../docs/privacy_policy.pdf";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

import { TEXT_FORMS } from "../../../utils/globalConstants";
import { declOfNum } from "../../../utils/declOfNum";
import partPayment from "../../../assets/dolyami.svg";
import modal from "../../../store/modal";
import { URL } from "./consts";
import "./Payment.scss";

const domain = process.env.REACT_APP_API_URL;
const urlRequest = process.env.REACT_APP_NEST_URL;

const TextMaskCustom = forwardRef((props, ref) => {
  const masks = [
    {
      mask: "+0 (000) 000-00-00",
    },
    {
      mask: "+000 000 000 000",
    },
    {
      mask: "+0 000 000 000 000",
    },
    {
      mask: "+000000000000000",
    },
  ];

  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      // mask="+0 (000) 000-00-00"
      mask={masks}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      placeholder="+0 (000) 000-00-00"
    />
  );
});

const Payment = observer(({ data }) => {
  const { setAlertMsg } = modal;
  const [values, setValues] = useState({});
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [isCheckedPolicy, setIsCheckedPolicy] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { price_rub, id, quantity, title } = data;

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeFio = (e) => {
    setFio(e.target.value);
  };

  const handleChangeCheckbox = () => {
    setIsCheckedPolicy((prev) => !prev);
  };

  useEffect(() => {
    if (fio && isCheckedPolicy && values.client_phone && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fio, isCheckedPolicy, values, email]);

  //создание заявки - create
  const handleClickSplittingPay = async () => {
    let compress = (s) => s.replace(/[^0-9]/g, "");
    const transformedPhone = "+" + compress(values.client_phone);

    const getViaPerson = () => fio && fio.split(" ");
    const personDetails = getViaPerson();

    const requestBody = {
      order: {
        id: "cool-chess-" + new Date().getTime(),
        status: "approved",
        amount: price_rub,
        items: [
          {
            name: "Оплата услуги по шахматам",
            quantity: quantity,
            price: price_rub / quantity,
          },
        ],
      },
      client_info: {
        email: email,
        phone: transformedPhone,
        first_name: personDetails?.[1] || undefined,
        last_name: personDetails?.[0] || undefined,
        middle_name: personDetails?.[2] || undefined,
      },
      success_url: `${domain}/success`,
      fail_url: `${domain}/fail`,
      notification_url: "https://cool-chess.ru/dolyami/email",
    };

    const urlDolyame = `${urlRequest}dolyami/create`;

    try {
      const response = await axios.post(urlDolyame, requestBody);

      const orderDetails = {
        orderId: response.data.orderId,
        uuid: response.data.uuid,
      };

      localStorage.setItem("order", JSON.stringify(orderDetails));
      // window.open(response.data.link, "_blank");
      window.location.href = response.data.link;
    } catch (e) {
      console.error("---e", e);
      setAlertMsg({
        status: "error",
        message: e.response.data.message,
        visible: true,
      });
    }
  };

  return (
    <form
      className="payment__container"
      id={id}
      method="POST"
      action={URL + "/create/"}
    >
      <div className="payment__content">
        <div className="payment__service_name">
          <div className="payment__service_name_title">
            <span>Название услуги</span>
          </div>
          <div className="payment__input">
            <input type="text" name="service_name" value="Оплата занятий" />
            <br />
          </div>
        </div>
        <div className="payment__text">Цена</div>
        <div className="payment__text_price">
          <div className="payment__title">
            {quantity} {declOfNum(quantity, TEXT_FORMS["LESSONS"])} по {title}
          </div>
          <div className="payment__title_cost">
            <input
              type="text"
              name="sum"
              value={price_rub}
              className="payment__cost_input"
            />
            <span>
              ₽ ({quantity} x {price_rub / quantity} ₽)
            </span>
          </div>
        </div>
      </div>
      <div className="payment__textfields">
        <div className="payment__fio">
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className="payment__text-field"
            onChange={handleChangeFio}
            value={fio}
            color="success"
            name="clientid"
            required
            autoFocus
            autoComplete="off"
            type="text"
          >
            <InputLabel htmlFor="outlined-adornment">ФИО</InputLabel>
            <OutlinedInput
              autoComplete="off"
              id="outlined-adornment"
              type={"text"}
              name="clientid"
              label="ФИО"
            />
          </FormControl>
        </div>

        <div className="payment_email">
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className="payment__text-field"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="off"
            color="success"
            name="client_email"
            required
            type="email"
          >
            <InputLabel htmlFor="outlined-adornment">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment"
              type={"text"}
              label="Email"
              name="client_email"
            />
          </FormControl>
        </div>

        <div className="payment__tel">
          <label htmlFor="input">Укажите номер телефона*</label>
          <Input
            value={values.textmask}
            onChange={handleChange}
            name="client_phone"
            className="payment__text-field"
            id="mask-input"
            autoComplete="off"
            inputComponent={TextMaskCustom}
            fullWidth
            type="text"
            color="success"
            variant="filled"
          />
        </div>

        <div className="payment__policy">
          <FormControlLabel
            control={
              <Checkbox
                checked={isCheckedPolicy}
                onChange={handleChangeCheckbox}
                color="success"
              />
            }
            className="payment__policy__title"
            label={
              <span>
                Я согласен с{" "}
                <a href={privacyPolicy} target="_blank" rel="noreferrer">
                  политикой конфиденциальности
                </a>
              </span>
            }
          />
        </div>
      </div>
      <div className="payment__button">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          className="sign-up-content__button"
          disabled={disabled}
          color="success"
        >
          {/* <div className="button_pay-keeper">
            <img
              src={payKeeperImage}
              alt="pay_keeper_image"
              className="sign-up-content_pay-keeper"
            />
          </div> */}
          <div className="button_pay-keeper">Банковской картой</div>
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          // type="submit"
          onClick={handleClickSplittingPay}
          className="sign-up-content__button"
          disabled={disabled}
          color="success"
        >
          {/* Оплатить долями */}
          <div className="button_pay-keeper">
            <img
              src={partPayment}
              alt="pay_dolyami_image"
              className="sign-up-content_pay-keeper"
            />
          </div>
        </Button>
      </div>
    </form>
  );
});

export default Payment;
