import React, { forwardRef, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { IMaskInput } from "react-imask";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { scriptURL } from "./consts";
import dayjs from "dayjs";
import modal from "../../../store/modal";
import { observer } from "mobx-react-lite";
import "./SignUpContent.scss";

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

const SignUpContent = observer(() => {
  const isXS = useMediaQuery("(max-width:700px)");
  const { setAlertMsg, setIsOpenModal } = modal;
  const [values, setValues] = useState({});
  const [city, setCity] = useState("");
  const [link, setLink] = useState({
    Telegram: false,
    Whatsapp: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const input = document.getElementById("mask-input");
    if (input && !isXS) {
      input.focus();
    }
  }, [isXS]);

  useEffect(() => {
    if (values.Telephone && city && Object.values(link).some((v) => v)) {
      setDisabled(false);
    }
  }, [values, city, link]);

  const handleClickSend = (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    const telephone = values.Telephone.split("+")?.[1];
    let links = [];

    for (let key in link) {
      if (link[key]) {
        links.push(key);
      }
    }
    formData.append("Messenger", links.join(","));
    formData.append("Telephone", telephone);
    formData.append("City", city);
    formData.append("Date", dayjs().format("DD-MM-YYYY HH:mm:ss"));

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setAlertMsg({
          status: "success",
          message: "Данные успешно добавлены!",
          visible: true,
        });
      })
      .catch((error) => {
        setAlertMsg({
          status: "error",
          message: "Что-то пошло не так...",
          visible: true,
        });
        console.error("Error!", error.message);
      })
      .finally(() => {
        setIsOpenModal(false);
        setLoading(false);
      });
  };

  return (
    <form
      className="sign-up-content__container"
      onSubmit={handleClickSend}
      name="submit-to-google-sheet"
    >
      <div className="sign-up-content__content">
        <div className="sign-up-content__body">
          <div className="sign-up-content__description">
            <h4>
              Подберем тренера и подходящую программу обучения под ваши навыки и
              задачи
            </h4>
            <span>
              Куратор школы свяжется с вами, чтобы подобрать удобное время для
              проведения пробного занятия
            </span>
          </div>

          <div className="sign-up-content__tel">
            <label htmlFor="input">Укажите номер телефона</label>
            <Input
              value={values.textmask}
              onChange={handleChange}
              name="Telephone"
              className="sign-up-content__text-field"
              id="mask-input"
              inputComponent={TextMaskCustom}
              autoFocus
            />
          </div>

          <div className="sign-up-content__city">
            <label htmlFor="text_field">Из какого вы города?</label>
            <TextField
              id="standard-basic-text-field-city"
              variant="standard"
              value={city}
              name="City"
              onChange={handleChangeCity}
              className="sign-up-content__text-field"
              autoFocus
            />
          </div>

          <div className="sign-up-content__checkboxes">
            <label htmlFor="checkbox" className="checkbox_label">
              Выберите мессенджер
            </label>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Telegram"
                checked={link.Telegram}
                name="Messenger"
                onChange={() =>
                  setLink((prev) => ({ ...prev, Telegram: !link.Telegram }))
                }
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Whatsapp"
                name="Messenger"
                checked={link.Whatsapp}
                onChange={() =>
                  setLink((prev) => ({ ...prev, Whatsapp: !link.Whatsapp }))
                }
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="sign-up-content__buttons">
        {loading ? (
          <LoadingButton
            loading
            variant="container"
            className="sign-up-content__button_btn"
            color="success"
          />
        ) : (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            className="sign-up-content__button"
            disabled={disabled}
            color="success"
          >
            Отправить
          </Button>
        )}
      </div>
    </form>
  );
});

export default SignUpContent;
