import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Button, Card, Space, Typography } from "antd";
import { CloseOutlined, BellOutlined } from "@ant-design/icons";
import { useUserActivity } from "./hooks/useUserActivity";
import { useSoundNotification } from "./hooks/useSoundNotification";
import messageSound from "../../sound/message.mp3";
import styles from "./NewsBanner.module.scss";

const { Title, Paragraph } = Typography;

const ANIMATION_TYPES = {
  SHAKE: "shake",
  BOUNCE: "bounce",
  PULSE: "pulse",
  SLIDE: "slide",
};

const DEFAULT_PROPS = {
  initialDelay: 10,
  repeatInterval: 180,
  showRepeat: true,
  enableSound: true,
  animationType: ANIMATION_TYPES.SHAKE,
  bannerPosition: { bottom: 20, right: 20 },
  buttonPosition: { bottom: 85, right: 30 },
};

const NotificationButton = ({ isAnimating, animationStyle, onClick }) => (
  <div className={styles.notificationButtonWrapper}>
    <Button
      type="primary"
      shape="circle"
      icon={
        <BellOutlined className={isAnimating ? styles.bellAnimation : ""} />
      }
      onClick={onClick}
      className={styles.notificationButton}
      style={{ ...animationStyle, minWidth: 44 }}
    />
    <div className={styles.notificationBadge}>!</div>
  </div>
);

const NewsItem = ({ news, onNavigate }) => {
  const { title, content, date, isUrgent, link } = news;

  return (
    <div className={`${styles.newsItem} ${isUrgent ? styles.urgent : ""}`}>
      <div className={styles.newsHeader}>
        <Title
          level={5}
          className={isUrgent ? styles.urgentTitle : styles.normalTitle}
        >
          {title}
        </Title>
        {isUrgent && <span className={styles.urgentLabel}>СРОЧНО</span>}
      </div>
      <Paragraph className={styles.newsContent}>{content}</Paragraph>
      <div className={styles.newsFooter}>
        <Paragraph type="secondary" className={styles.newsDate}>
          📅 {date}
        </Paragraph>
        <Button
          type="link"
          size="small"
          className={styles.detailsButton}
          onClick={() => onNavigate(link)}
        >
          Подробнее →
        </Button>
      </div>
    </div>
  );
};

const BannerHeader = ({ urgentCount, enableSound, onClose }) => (
  <Space className={styles.bannerHeader}>
    <Space>
      <BellOutlined />
      <span className={styles.bannerTitle}>Последние новости</span>
    </Space>
    <Space>
      {urgentCount > 0 && (
        <div className={styles.urgentCounter}>{urgentCount} СРОЧНО</div>
      )}
      <Button
        type="text"
        icon={<CloseOutlined />}
        onClick={onClose}
        className={styles.closeButton}
        size="small"
      />
    </Space>
  </Space>
);

const NewsBanner = (props) => {
  const {
    initialDelay,
    repeatInterval,
    showRepeat,
    enableSound,
    animationType,
    bannerPosition,
    buttonPosition,
  } = { ...DEFAULT_PROPS, ...props };
  const isXS = useMediaQuery("(max-width:700px)");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const lastShowTimeRef = useRef(0);

  const userActive = useUserActivity();
  const playSound = useSoundNotification(enableSound, messageSound);

  // Данные новостей
  const newsItems = useMemo(
    () => [
      {
        id: 1,
        title: "🔥 Успейте записаться!",
        content:
          "27-29 декабря: 3 лекции от гроссмейстеров. Скидка 20% до 10 декабря!",
        date: "09.12.2023",
        isUrgent: true,
        link: "/holiday-with-grandmasters",
      },
    ],
    []
  );

  const urgentCount = useMemo(
    () => newsItems.filter((news) => news.isUrgent).length,
    [newsItems]
  );

  const triggerAnimation = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  const handleClose = useCallback(() => setIsVisible(false), []);
  const handleOpen = useCallback(() => {
    playSound();
    triggerAnimation();
    setTimeout(() => setIsVisible(true), 300);
  }, [playSound, triggerAnimation]);

  useEffect(() => {
    const showBanner = () => {
      if (!userActive || isVisible) return;

      const now = Date.now();
      const timeSinceLastShow = now - lastShowTimeRef.current;

      if (
        timeSinceLastShow > repeatInterval * 1000 ||
        lastShowTimeRef.current === 0
      ) {
        playSound();
        triggerAnimation();

        setTimeout(() => {
          setIsVisible(true);
          lastShowTimeRef.current = now;

          // notification.info({
          //   message: "Есть новые новости!",
          //   description: "Посмотрите последние обновления в правом нижнем углу",
          //   placement: "topRight",
          //   duration: 3,
          // });
        }, 300);
      }
    };

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (lastShowTimeRef.current === 0) {
      timerRef.current = setTimeout(showBanner, initialDelay * 1000);
    } else if (showRepeat) {
      timerRef.current = setInterval(showBanner, repeatInterval * 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        clearInterval(timerRef.current);
      }
    };
  }, [
    userActive,
    isVisible,
    initialDelay,
    repeatInterval,
    showRepeat,
    playSound,
    triggerAnimation,
  ]);

  const getButtonAnimationStyle = useCallback(() => {
    if (!isAnimating) return {};

    const animationMap = {
      [ANIMATION_TYPES.SHAKE]: styles.shakeAnimation,
      [ANIMATION_TYPES.BOUNCE]: styles.bounceAnimation,
      [ANIMATION_TYPES.PULSE]: styles.pulseAnimation,
      [ANIMATION_TYPES.SLIDE]: styles.slideAnimation,
    };

    return {
      animation: `${animationMap[animationType]} 0.5s ease-in-out`,
      ...(animationType === ANIMATION_TYPES.PULSE && {
        animationIterationCount: "infinite",
      }),
    };
  }, [isAnimating, animationType]);

  if (!isVisible) {
    return (
      <div
        className={styles.floatingButtonContainer}
        style={{
          bottom: isXS ? 136 : buttonPosition.bottom,
          right: isXS ? 10 : buttonPosition.right,
        }}
      >
        <NotificationButton
          isAnimating={isAnimating}
          animationStyle={getButtonAnimationStyle()}
          onClick={handleOpen}
        />
      </div>
    );
  }

  const bannerStyle = {
    bottom: isXS ? 68 : bannerPosition.bottom,
    right: isXS ? 20 : bannerPosition.right,
  };

  return (
    <div
      className={`${styles.bannerContainer} ${styles.visible}`}
      style={bannerStyle}
    >
      <Card
        title={
          <BannerHeader
            urgentCount={urgentCount}
            enableSound={enableSound}
            onClose={handleClose}
          />
        }
        className={styles.newsCard}
        styles={{
          body: {
            padding: 16,
          },
        }}
      >
        <div className={styles.newsList}>
          {newsItems.map((news, index) => (
            <NewsItem
              key={news.id}
              news={news}
              onNavigate={navigate}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default NewsBanner;
