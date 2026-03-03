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

import pdfForBeginners72 from "../../assets/files/forBeginners72.pdf";
import pdfForBeginners24 from "../../assets/files/forBeginners24.pdf";
import pdfForBeginners16 from "../../assets/files/forBeginners16.pdf";
import pdfForBeginners10 from "../../assets/files/forBeginners10.pdf";
import pdfFile from "../../assets/program.pdf";
import "./ChessProgramPage.css";

const ChessProgramPage = () => {
  const [isViewingFile, setIsViewingFile] = useState(false);
  const [activeFile, setActiveFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const programData = {
    title: "Дополнительная общеразвивающая программа «Шахматята»",
    description:
      "Программа предназначена для детей дошкольного и младшего школьного возраста, направлена на развитие логического мышления, памяти и концентрации внимания через игру в шахматы.",
    files: [
      {
        id: 1,
        name: "Программа_Шахматята.pdf",
        size: "2.9 MB",
        pages: 69,
        src: pdfFile,
      },
      {
        id: 2,
        name: "Шахматы_для_начинающих_72_часа.pdf",
        size: "611 KB",
        pages: 25,
        src: pdfForBeginners72,
      },
      {
        id: 3,
        name: "Шахматы_для_начинающих_24_часа.pdf",
        size: "562 KB",
        pages: 21,
        src: pdfForBeginners24,
      },
      {
        id: 4,
        name: "Шахматы_для_начинающих_16_часов.pdf",
        size: "551 KB",
        pages: 20,
        src: pdfForBeginners16,
      },
      {
        id: 5,
        name: "Шахматы_для_начинающих_10_часов.pdf",
        size: "541 KB",
        pages: 18,
        src: pdfForBeginners10,
      },
    ],
  };

  useEffect(() => {
    if (activeFile) {
      setPdfUrl(activeFile.src);
    }
  }, [activeFile]);

  const handleGoBack = () => window.history.back();

  const handleViewFile = (file) => {
    setActiveFile(file);
    setIsViewingFile(true);
  };

  const handleCloseViewer = () => {
    setIsViewingFile(false);
    setZoom(100);
    setRotation(0);
    setIsFullscreen(false);
  };

  const handleDownload = () => {
    if (!activeFile) return;

    const link = document.createElement("a");
    link.href = activeFile.src;
    link.download = activeFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <h1>{programData.title}</h1>
        </div>
      </div>

      {/* Описание */}
      <div className="program-content">
        <div className="program-description">
          <div className="description-icon">
            <FileText size={24} />
          </div>
          <p>{programData.description}</p>
        </div>

        {/* Документы */}
        <div className="file-section">
          <div className="section-header">
            <h2>Документы программы</h2>
            <p className="section-subtitle">
              Официальные материалы для ознакомления
            </p>
          </div>

          {programData.files.map((file) => (
            <div
              key={file.id}
              className="file-card"
              style={{ marginBottom: 32 }}
            >
              <div className="file-card-content">
                <h3>{file.name}</h3>

                <div className="file-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Размер</span>
                    <span className="meta-value">{file.size}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Страниц</span>
                    <span className="meta-value">{file.pages}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Формат</span>
                    <span className="meta-value">PDF</span>
                  </div>
                </div>

                <div className="file-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={() => handleViewFile(file)}
                  >
                    <Eye size={18} />
                    <span>Просмотреть документ</span>
                  </button>

                  <button
                    className="action-btn download-btn"
                    onClick={() => {
                      setActiveFile(file);
                      handleDownload();
                    }}
                  >
                    <Download size={18} />
                    <span>Скачать PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      {isViewingFile && activeFile && (
        <div
          className={`pdf-viewer-overlay ${isFullscreen ? "fullscreen" : ""}`}
        >
          <div className="pdf-viewer-container">
            <div className="pdf-viewer-toolbar">
              <div className="document-info">
                <FileText size={20} />
                <div className="document-title">
                  <h3>{activeFile.name}</h3>
                  <span className="document-meta">{activeFile.size} • PDF</span>
                </div>
              </div>

              <div className="toolbar-right">
                <button
                  className="toolbar-btn"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  {isFullscreen ? <Minimize2 /> : <Maximize2 />}
                </button>
                <button
                  className="toolbar-btn close-btn"
                  onClick={handleCloseViewer}
                >
                  <X />
                </button>
              </div>
            </div>

            <div className="pdf-simple-controls">
              <div className="simple-controls-group">
                <button onClick={() => setZoom((z) => Math.max(25, z - 25))}>
                  <ZoomOut />
                </button>
                <span>{zoom}%</span>
                <button onClick={() => setZoom((z) => Math.min(300, z + 25))}>
                  <ZoomIn />
                </button>
              </div>

              <div className="simple-controls-group">
                <button onClick={() => setRotation((r) => r + 90)}>
                  <RotateCw />
                </button>
                <button
                  className="simple-control-btn primary-btn"
                  onClick={handleDownload}
                >
                  <Download />
                </button>
                <button onClick={() => window.print()}>
                  <Printer />
                </button>
              </div>
            </div>

            <div className="pdf-viewer-content-expanded">
              <div
                className="pdf-wrapper-expanded"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                }}
              >
                <embed
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="pdf-iframe-expanded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChessProgramPage;
