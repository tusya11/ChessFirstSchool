import { useState, useEffect } from 'react';
import { teamData } from '../../../../pages/NewTeamPage/consts';
import './TrainersSlider.scss';

const TrainersSlider = () => {
  const trainers = teamData
    .filter((item) => item.id === 1 || item.id === 12 || item.id === 7)
    .map((person) => ({
      id: person.id,
      name: person.name,
      position: person.dignity,
      qualification: person.description,
      image: person.image,
    }));
  // const trainers = [
  //   {
  //     id: 1,
  //     name: 'Эльмар Валерьевич',
  //     position: 'Старший тренер',
  //     experience: '15 лет опыта',
  //     qualification: 'Мастер спорта международного класса, сертифицированный тренер UEFA Pro',
  //     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //   },
  //   {
  //     id: 2,
  //     name: 'Кирилл Вячеславович',
  //     position: 'Тренер по функциональной подготовке',
  //     experience: '10 лет опыта',
  //     qualification: 'Кандидат педагогических наук, специалист по спортивной физиологии',
  //     image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //   },
  //   {
  //     id: 3,
  //     name: 'Карина Яковлевна',
  //     position: 'Тренер по растяжке и реабилитации',
  //     experience: '8 лет опыта',
  //     qualification: 'Сертифицированный специалист по йогатерапии и спортивной реабилитации',
  //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //   }
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
    }, 5000); // Автопереключение каждые 5 секунд

    return () => clearInterval(interval);
  }, [trainers.length]);

  return (
    <section className="trainers-section">
      <h2 className="section-title">Наши тренеры</h2>

      <div className="trainers-slider">
        {trainers.map((trainer, index) => (
          <div
            key={trainer.id}
            className={`trainer-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p className="position">{trainer.position}</p>
              <p className="experience">{trainer.experience}</p>
              <p className="qualification">{trainer.qualification}</p>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {trainers.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSlider;
