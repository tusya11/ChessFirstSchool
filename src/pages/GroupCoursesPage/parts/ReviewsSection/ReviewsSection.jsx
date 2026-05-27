import React, { useEffect, useState } from "react";
import "./ReviewsSection.scss";
import mockManImage from "./assets/man.jpg";
import mockWomanOneImage from "./assets/woman_1.jpg";
import mockWomanTwoImage from "./assets/woman_3.jpg";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock данные, так как Google Maps API требует ключ и серверную часть
  const mockReviews = [
    {
      id: 1,
      author: "Roman Patrakov",
      text: "Хочу выразить огромную благодарность онлайн-школе Cool Chess! Наш ребёнок занимается здесь уже более года, и за это время мы видим стабильный прогресс, растущий интерес к шахматам и уверенность в своих силах. Особенно хочется отметить высокий уровень тренеров. Они не только умеют увлечь ребёнка, наладить с ним контакт и поддерживать мотивацию, но и сами активно участвуют в офлайн-турнирах, занимая призовые места.",
      rating: 5,
      photo: mockManImage,
      // photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: "2 недели назад",
    },
    {
      id: 2,
      author: "Nadezhda Egorova",
      text: "Ребенок занимается 4 месяца. Мне понравился профессионализм команды, играющие! опытные тренеры. Отлично ладят с детьми и взрослыми)) Дочь сказала, что хочет стать гроссмейстером) так что занимаемся дальше!",
      rating: 5,
      photo: mockWomanOneImage,
      // photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: "3 недели назад",
    },
    {
      id: 3,
      author: "Sasha Solomatina",
      text: "Занимаемся с ребенком  уже год в этой школе, очень нравится. Тематические турниры, акции, можно менять расписание, подарки от школы👍🏻 У нас тренер Анжелика, очень приятная, настоящий профессионал своего дела, с легкостью находит общий язык с детьми, стала настоящим другом нашей семьи.",
      rating: 5,
      photo: mockWomanTwoImage,
      // photo: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: "1 год назад",
    },
  ];

  useEffect(() => {
    // В реальном проекте здесь был бы fetch к Google Maps API
    const fetchReviews = async () => {
      try {
        // Имитация загрузки
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setReviews(mockReviews);
        setLoading(false);
      } catch (err) {
        setError("Не удалось загрузить отзывы");
        setLoading(false);
      }
    };

    fetchReviews();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div className="loading">Загрузка отзывов...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">Что говорят наши ученики?</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img
                  src={review.photo}
                  alt={review.author}
                  className="review-avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100";
                  }}
                />
                <div className="review-author">
                  <h3>{review.author}</h3>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < review.rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>
        <a
          href="https://www.google.com/maps/place/%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+CoolChess/@61.6763719,105.3215787,3z/data=!4m8!3m7!1s0x2c2751c718f04e93:0x7c145c981217f88e!8m2!3d61.6763718!4d105.3215787!9m1!1b1!16s%2Fg%2F11l6r_2_w0?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="more-reviews-btn"
        >
          Читать все отзывы на Google
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;
