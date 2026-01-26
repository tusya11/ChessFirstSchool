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
  Maximize2,
  Minimize2,
  Printer,
  BookOpen,
} from "lucide-react";
import pdfFile from "../../assets/program.pdf";
import "./ChessProgramPage.css";

const ChessProgramPage = () => {
  const [isViewingFile, setIsViewingFile] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      size: "2.9 MB",
      lastModified: "26.01.2026",
      pages: 69,
    },
  };

  // Загружаем PDF файл
  useEffect(() => {
    setPdfUrl(pdfFile);
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
    setIsFullscreen(false);
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
    if (zoom < 300) setZoom(zoom + 25);
  };

  const zoomOut = () => {
    if (zoom > 25) setZoom(zoom - 25);
  };

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const resetView = () => {
    setZoom(100);
    setRotation(0);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePrint = () => {
    window.print();
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
        <div className="header-content">
          <div className="title-icon">
            <BookOpen size={28} />
          </div>
          <div>
            <h1>{programData.title}</h1>
          </div>
        </div>
      </div>

      {/* Основная информация */}
      <div className="program-content">
        <div className="program-description">
          <div className="description-icon">
            <FileText size={24} />
          </div>
          <p>{programData.description}</p>
        </div>

        {/* Файл программы */}
        <div className="file-section">
          <div className="section-header">
            <h2>Документ программы</h2>
            <p className="section-subtitle">
              Официальный документ программы для ознакомления
            </p>
          </div>

          <div className="file-card">
            <div className="file-card-content">
              <h3>{programData.file.name}</h3>
              <div className="file-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Размер</span>
                  <span className="meta-value">{programData.file.size}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Страниц</span>
                  <span className="meta-value">{programData.file.pages}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Формат</span>
                  <span className="meta-value">PDF</span>
                </div>
              </div>

              <div className="file-actions">
                <button
                  className="action-btn view-btn"
                  onClick={handleViewFile}
                  disabled={!pdfUrl}
                >
                  <Eye size={18} />
                  <span>Просмотреть документ</span>
                </button>

                <button
                  className="action-btn download-btn"
                  onClick={handleDownload}
                  disabled={!pdfUrl}
                >
                  <Download size={18} />
                  <span>Скачать PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF просмотрщик (модальное окно) */}
      {isViewingFile && (
        <div
          className={`pdf-viewer-overlay ${isFullscreen ? "fullscreen" : ""}`}
        >
          <div className="pdf-viewer-container">
            {/* Верхняя панель - упрощенная */}
            <div className="pdf-viewer-toolbar">
              <div className="toolbar-left">
                <div className="document-info">
                  <FileText size={20} />
                  <div className="document-title">
                    <h3>{programData.file.name}</h3>
                    <span className="document-meta">
                      {programData.file.size} • PDF
                    </span>
                  </div>
                </div>
              </div>

              <div className="toolbar-right">
                <button
                  className="toolbar-btn"
                  onClick={toggleFullscreen}
                  title={
                    isFullscreen ? "Выйти из полного экрана" : "Полный экран"
                  }
                >
                  {isFullscreen ? (
                    <Minimize2 size={18} />
                  ) : (
                    <Maximize2 size={18} />
                  )}
                </button>
                <button
                  className="toolbar-btn close-btn"
                  onClick={handleCloseViewer}
                  title="Закрыть"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Упрощенная панель управления */}
            <div className="pdf-simple-controls">
              <div className="simple-controls-group">
                <button
                  className="simple-control-btn"
                  onClick={zoomOut}
                  disabled={zoom <= 25}
                  title="Уменьшить"
                >
                  <ZoomOut size={18} />
                </button>
                <div className="simple-zoom-display">
                  <span className="simple-zoom-value">{zoom}%</span>
                </div>
                <button
                  className="simple-control-btn"
                  onClick={zoomIn}
                  disabled={zoom >= 300}
                  title="Увеличить"
                >
                  <ZoomIn size={18} />
                </button>
              </div>

              <div className="simple-controls-group">
                <button
                  className="simple-control-btn"
                  onClick={rotate}
                  title="Повернуть"
                >
                  <RotateCw size={18} />
                </button>
                <button
                  className="simple-control-btn"
                  onClick={resetView}
                  title="Сбросить вид"
                >
                  ↺
                </button>
              </div>

              <div className="simple-controls-group">
                <button
                  className="simple-control-btn primary-btn"
                  onClick={handleDownload}
                  title="Скачать"
                >
                  <Download size={18} />
                </button>
                <button
                  className="simple-control-btn"
                  onClick={handlePrint}
                  title="Печать"
                >
                  <Printer size={18} />
                </button>
              </div>
            </div>

            {/* Контент PDF - увеличенная область */}
            <div className="pdf-viewer-content-expanded">
              {pdfUrl ? (
                <div className="pdf-container-expanded">
                  <div
                    className="pdf-wrapper-expanded"
                    style={{
                      transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                      transformOrigin: "center center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <embed
                      src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      type="application/pdf"
                      title={programData.file.name}
                      className="pdf-iframe-expanded"
                    />
                  </div>
                </div>
              ) : (
                <div className="pdf-error-state">
                  <FileText size={64} />
                  <h4>Файл не найден</h4>
                  <p>Не удалось загрузить документ для просмотра</p>
                  <button
                    className="retry-btn"
                    onClick={() => window.location.reload()}
                  >
                    Попробовать снова
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChessProgramPage;
