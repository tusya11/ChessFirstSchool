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
import { IMaskInput } from "react-imask";
import privacyPolicy from "../../../docs/privacy_policy.pdf";
import SendIcon from "@mui/icons-material/Send";
import { URL } from "./consts";
import "./Payment.scss";

const TextMaskCustom = forwardRef((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (000) 000-00-00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      placeholder="+7 (900) 000-00-00"
    />
  );
});

const Payment = ({ data }) => {
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
    if (fio && isCheckedPolicy && values.client_phone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fio, isCheckedPolicy, values]);

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
            {quantity} по {title}
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
            onChange={setEmail}
            value={email}
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
            inputComponent={TextMaskCustom}
            autoFocus
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
          Оплатить картой
        </Button>
      </div>
    </form>
  );
};

export default Payment;
