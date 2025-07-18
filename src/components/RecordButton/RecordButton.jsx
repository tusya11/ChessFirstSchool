import './RecordButton.scss';

const RecordButton = ({ onClick }) => (
  <div className="record-button__container">
    <button onClick={onClick} className="record-btn">
      Записаться
    </button>
  </div>
);

export default RecordButton;
