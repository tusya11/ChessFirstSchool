import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Button, Card, Tooltip, Typography } from "antd";
import { CloseOutlined, BellOutlined, RightOutlined } from "@ant-design/icons";
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
    {showBadge && <div className={styles.notificationBadge} />}
  </div>
);

const NewsItem = ({ news, onNavigate, index }) => {
  const { title, content, date, period, isUrgent, link } = news;
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight,
      );
    }
  }, [content]);

  return (
    <div
      className={`${styles.newsItem} ${isUrgent ? styles.urgent : ""}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={styles.newsItemGlow} />
      <div className={styles.newsItemContent}>
        <div className={styles.newsHeader}>
          <div className={styles.newsTitleWrapper}>
            {isUrgent && (
              <span className={styles.urgentPulse}>
                <span className={styles.urgentPulseInner} />
              </span>
            )}
            <Tooltip
              title={title}
              placement="top"
              overlayClassName={styles.tooltipOverlay}
            >
              <Title
                level={5}
                className={`${styles.newsTitle} ${isUrgent ? styles.urgentTitle : ""}`}
                ellipsis={{ rows: 1, tooltip: false }}
              >
                {title}
              </Title>
            </Tooltip>
          </div>
          {isUrgent && <span className={styles.urgentLabel}>🔥</span>}
        </div>

        <div className={styles.newsContentWrapper}>
          <Tooltip
            title={content}
            placement="bottom"
            overlayClassName={styles.tooltipOverlay}
            open={isOverflowing ? undefined : false}
          >
            <Paragraph
              ref={contentRef}
              className={styles.newsContent}
              ellipsis={{ rows: 2, tooltip: false }}
            >
              {content}
            </Paragraph>
          </Tooltip>
        </div>

        <div className={styles.newsFooter}>
          <span className={styles.newsDate}>📅 {period || date}</span>
          {link && (
            <Button
              type="link"
              size="small"
              className={styles.detailsButton}
              onClick={() => onNavigate(link)}
            >
              Подробнее <RightOutlined />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const NoNewsMessage = () => (
  <div className={styles.noNewsMessage}>
    <Text>Новостей пока нет</Text>
  </div>
);

const BannerHeader = ({ urgentCount, onClose, hasNews }) => (
  <div className={styles.bannerHeader}>
    <div className={styles.bannerTitleWrapper}>
      <div className={styles.bannerIconWrapper}>
        <BellOutlined className={styles.headerIcon} />
        <span className={styles.bannerIconPulse} />
      </div>
      <span className={styles.bannerTitle}>Анонсы</span>
    </div>
    <div className={styles.bannerActions}>
      {hasNews && urgentCount > 0 && (
        <div className={styles.urgentCounter}>
          <span className={styles.counterPulse} />
          {urgentCount}
        </div>
      )}
      <Button
        type="text"
        icon={<CloseOutlined />}
        onClick={onClose}
        className={styles.closeButton}
        size="small"
      />
    </div>
  </div>
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
        id: 2,
        title: "Типовые ошибки в миттельшпиле",
        content:
          "Мастер-класс с гроссмейстером Дмитрием Кряквиным 28 августа, 15:00 (мск). Разбираем ошибки, учимся их не повторять и побеждать!",
        date: "16.08.26",
        period: "28.08.2026 - 28.08.2026",
        isUrgent: true,
        link: "/holiday-with-grandmasters",
      },
      {
        id: 1,
        title: "🏆 Летняя шахматная серия CoolChess",
        content:
          "С 5 июля по 30 августа 2026 года пройдёт Большая шахматная серия из 9 турниров. Две лиги — для опытных игроков (Лига А) и всех желающих (Лига Б). Призовой фонд: 31 000 ₽ в Лиге А и 19 000 ₽ в Лиге Б.",
        date: "23.06.26",
        period: "05.07.2026 - 30.08.2026",
        isUrgent: true,
        link: "/competition",
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
    hasNews,
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
          showBadge={hasUrgentNews}
        />
      </div>
    );
  }

  const bannerStyle = {
    bottom: isXS ? 20 : bannerPosition.bottom,
    right: isXS ? 20 : bannerPosition.right,
  };

  return (
    <div
      className={`${styles.bannerContainer} ${styles.visible}`}
      style={bannerStyle}
    >
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerBackground}>
          <div className={styles.bgOrb1} />
          <div className={styles.bgOrb2} />
          <div className={styles.bgOrb3} />
          <div className={styles.bgOrb4} />
          <div className={styles.bgOrb5} />
          <div className={styles.bgGrid} />
        </div>

        <Card className={styles.newsCard}>
          <div className={styles.newsCardGlow} />
          <div className={styles.bannerHeaderWrapper}>
            <BannerHeader
              urgentCount={urgentCount}
              onClose={handleClose}
              hasNews={hasNews}
            />
          </div>
          <div className={styles.newsList}>
            {hasNews ? (
              newsItems.map((news, index) => (
                <NewsItem
                  key={news.id}
                  news={news}
                  onNavigate={navigate}
                  index={index}
                />
              ))
            ) : (
              <NoNewsMessage />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsBanner;
