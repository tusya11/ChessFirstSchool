import { useState, useEffect } from "react";
import {
  ChevronLeft,
  FileText,
  Eye,
  Download,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";
import "./ChessProgramPage.css";

const PDF_FILE_PATH = "/files/program-shahmatyata.pdf";

const ChessProgramPage = () => {
  const [isViewingFile, setIsViewingFile] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  // Данные о программе
  const programData = {
    title: "Дополнительная общеразвивающая программа «Шахматята»",
    description:
      "Программа предназначена для детей дошкольного и младшего школьного возраста, направлена на развитие логического мышления, памяти и концентрации внимания через игру в шахматы.",
    ageGroup: "5-8 лет",
    duration: "36 академических часов",
    schedule: "2 раза в неделю по 45 минут",
    file: {
      name: "Программа_Шахматята.pdf",
      size: "2.4 MB",
      lastModified: "15.01.2024",
    },
  };

  // Загружаем PDF файл
  useEffect(() => {
    const checkFile = async () => {
      try {
        const response = await fetch(PDF_FILE_PATH);
        if (response.ok) {
          setPdfUrl(PDF_FILE_PATH);
        } else {
          console.warn("PDF файл не найден по указанному пути");
        }
      } catch (error) {
        console.error("Ошибка при загрузке PDF:", error);
      }
    };

    checkFile();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleViewFile = () => {
    setIsViewingFile(true);
  };

  const handleCloseViewer = () => {
    setIsViewingFile(false);
    setZoom(100);
    setRotation(0);
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = programData.file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Файл не найден");
    }
  };

  const zoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25);
  };

  const zoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25);
  };

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const resetView = () => {
    setZoom(100);
    setRotation(0);
  };

  return (
    <div className="chess-program-page">
      {/* Навигация */}
      <div className="program-navigation">
        <button className="back-button" onClick={handleGoBack}>
          <ChevronLeft size={20} />
          Назад
        </button>
      </div>

      {/* Заголовок */}
      <div className="program-header">
        <h1>{programData.title}</h1>
        <p className="program-subtitle">Общеразвивающая программа для детей</p>
      </div>

      {/* Основная информация */}
      <div className="program-content">
        <div className="program-description">
          <p>{programData.description}</p>
        </div>

        {/* Файл программы */}
        <div className="file-section">
          <div className="file-header">
            <h2>Документ программы</h2>
            <p className="file-subtitle">
              Официальный документ программы для ознакомления
            </p>
          </div>

          <div className="file-card">
            <div className="file-icon">
              <FileText size={48} />
            </div>

            <div className="file-info">
              <h3>{programData.file.name}</h3>
              <div className="file-meta">
                <span>Размер: {programData.file.size}</span>
                <span>Обновлено: {programData.file.lastModified}</span>
              </div>

              <div className="file-actions">
                <button
                  className="action-btn view-btn"
                  onClick={handleViewFile}
                  disabled={!pdfUrl}
                >
                  <Eye size={18} />
                  {pdfUrl ? "Просмотреть" : "Файл не найден"}
                </button>

                <button
                  className="action-btn download-btn"
                  onClick={handleDownload}
                  disabled={!pdfUrl}
                >
                  <Download size={18} />
                  Скачать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF просмотрщик (модальное окно) */}
      {isViewingFile && (
        <div className="pdf-viewer-overlay">
          <div className="pdf-viewer-container">
            <div className="pdf-viewer-header">
              <h3>{programData.file.name}</h3>
              <div className="viewer-controls">
                <div className="zoom-controls">
                  <button
                    className="control-btn"
                    onClick={zoomOut}
                    disabled={zoom <= 50}
                    title="Уменьшить"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="zoom-value">{zoom}%</span>
                  <button
                    className="control-btn"
                    onClick={zoomIn}
                    disabled={zoom >= 200}
                    title="Увеличить"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                <button
                  className="control-btn"
                  onClick={rotate}
                  title="Повернуть"
                >
                  <RotateCw size={16} />
                </button>

                <button
                  className="control-btn"
                  onClick={resetView}
                  title="Сбросить вид"
                >
                  ↺
                </button>

                <button
                  className="close-btn"
                  onClick={handleCloseViewer}
                  title="Закрыть"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="pdf-viewer-content">
              {pdfUrl ? (
                <div className="pdf-container">
                  <div
                    className="pdf-wrapper"
                    style={{
                      transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                      transformOrigin: "center center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <iframe
                      src={pdfUrl}
                      title={programData.file.name}
                      className="pdf-iframe"
                    />
                  </div>
                </div>
              ) : (
                <div className="pdf-error">
                  <FileText size={64} />
                  <p>Файл не найден</p>
                  <p>
                    Поместите файл {programData.file.name} в папку public/files/
                  </p>
                </div>
              )}
            </div>

            <div className="pdf-viewer-footer">
              <div className="file-info-footer">
                <FileText size={16} />
                <span>
                  {programData.file.name} • {programData.file.size}
                </span>
              </div>

              <div className="footer-actions">
                <button
                  className="action-btn download-btn"
                  onClick={handleDownload}
                >
                  <Download size={18} />
                  Скачать PDF
                </button>
                <button
                  className="action-btn secondary-btn"
                  onClick={handleCloseViewer}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChessProgramPage;
