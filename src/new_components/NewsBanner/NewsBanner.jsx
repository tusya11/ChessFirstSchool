import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Button, Card, Space, Typography } from "antd";
import { CloseOutlined, BellOutlined } from "@ant-design/icons";
import { useUserActivity } from "./hooks/useUserActivity";
import styles from "./NewsBanner.module.scss";

const { Title, Paragraph, Text } = Typography;

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

// Функция для проверки, является ли дата/период события завершенным
const isEventCompleted = (newsItem) => {
  if (newsItem.period) {
    const [startDateStr, endDateStr] = newsItem.period.split(" - ");

    if (startDateStr && endDateStr) {
      const endDate = parseDate(endDateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return endDate < today;
    }
  }

  if (newsItem.date) {
    const newsDate = parseDate(newsItem.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return newsDate < today;
  }

  return false;
};

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

const NotificationButton = ({
  isAnimating,
  animationStyle,
  onClick,
  showBadge,
}) => (
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
    {showBadge && <div className={styles.notificationBadge}>!</div>}
  </div>
);

const NewsItem = ({ news, onNavigate }) => {
  const { title, content, date, period, isUrgent, link } = news;

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
          📅 {period || date}
        </Paragraph>
        {link && (
          <Button
            type="link"
            size="small"
            className={styles.detailsButton}
            onClick={() => onNavigate(link)}
          >
            Подробнее →
          </Button>
        )}
      </div>
    </div>
  );
};

const NoNewsMessage = () => (
  <div className={styles.noNewsMessage}>
    <Text type="secondary">Новостей пока нет</Text>
  </div>
);

const BannerHeader = ({ urgentCount, onClose, hasNews }) => (
  <Space className={styles.bannerHeader}>
    <Space>
      <BellOutlined />
      <span className={styles.bannerTitle}>Новости</span>
    </Space>
    <Space>
      {hasNews && urgentCount > 0 && (
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

  const rawNewsItems = useMemo(
    () => [
      {
        id: 1,
        title: "🔥 Успейте записаться!",
        content:
          "28 февраля - 1 марта: Елена Томилова, поделится бесценным опытом и секретами, которые помогли ей вырастить чемпиона!",
        date: "23.02.26",
        period: "28.02.2026 - 01.03.2026",
        isUrgent: true,
        link: "/holiday-with-grandmasters",
      },
    ],
    [],
  );

  const newsItems = useMemo(() => {
    return rawNewsItems.filter((news) => !isEventCompleted(news));
  }, [rawNewsItems]);

  const hasNews = newsItems.length > 0;
  const hasUrgentNews = useMemo(
    () => newsItems.some((news) => news.isUrgent),
    [newsItems],
  );

  const urgentCount = useMemo(
    () => newsItems.filter((news) => news.isUrgent).length,
    [newsItems],
  );

  const triggerAnimation = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  const handleClose = useCallback(() => setIsVisible(false), []);
  const handleOpen = useCallback(() => {
    triggerAnimation();
    setTimeout(() => setIsVisible(true), 300);
  }, [triggerAnimation]);

  useEffect(() => {
    // Автоматически открываем баннер только если есть новости
    if (!hasNews) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        clearInterval(timerRef.current);
      }
      return;
    }

    const showBanner = () => {
      if (!userActive || isVisible) return;

      const now = Date.now();
      const timeSinceLastShow = now - lastShowTimeRef.current;

      if (
        timeSinceLastShow > repeatInterval * 1000 ||
        lastShowTimeRef.current === 0
      ) {
        triggerAnimation();

        setTimeout(() => {
          setIsVisible(true);
          lastShowTimeRef.current = now;
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
    triggerAnimation,
    hasNews, // Зависимость добавлена для отключения таймеров при отсутствии новостей
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
          showBadge={hasUrgentNews} // Показываем бейдж только если есть срочные новости
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
            onClose={handleClose}
            hasNews={hasNews}
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
          {hasNews ? (
            newsItems.map((news, index) => (
              <NewsItem
                key={news.id}
                news={news}
                onNavigate={navigate}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))
          ) : (
            <NoNewsMessage />
          )}
        </div>
      </Card>
    </div>
  );
};

export default NewsBanner;
