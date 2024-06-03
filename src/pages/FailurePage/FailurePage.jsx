import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import failIcon from "../../assets/fail.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
import modal from "../../store/modal";
import "./FailurePage.scss";

const urlRequest = process.env.REACT_APP_NEST_URL;

const FailurePage = observer(() => {
  const { setAlertMsg } = modal;
  const navigate = useNavigate();

  const orderItems = JSON.parse(localStorage.getItem("order") || "{}");

  const handleClickBack = () => {
    navigate("/main");
  };

  const getInfoAboutOrder = async () => {
    const url = `${urlRequest}dolyami/orders/${orderItems.orderId}/info`;
    try {
      await axios.get(url);

      // window.open(response.data.link, "_blank");
      // window.location.href = response.data.link;
    } catch (e) {
      console.log("---e", e);
      setAlertMsg({
        status: "error",
        message: e.response.data.message,
        visible: true,
      });
    }
  };

  useEffect(() => {
    getInfoAboutOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderItems]);

  return (
    <div className="failure-page__wrapper">
      <div className="failure-page__content">
        <div className="failure-page__card">
          <div className="failure-page__icon">
            <img src={failIcon} alt="failure-icon" />
          </div>
          <div className="failure-page__text">
            <p className="failure-page__title">Возникли проблемы при оплате</p>
            <span>Попробуйте вернуться и повторить чуть позже</span>
          </div>

          <Button
            variant="contained"
            endIcon={<ArrowBackIosIcon />}
            onClick={handleClickBack}
            className="failure-page__button"
            color="error"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
});

export default FailurePage;
