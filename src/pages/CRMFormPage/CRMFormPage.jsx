const CRMFormPage = () => {
  return (
    <div style={{ padding: "20px", height: "calc(100vh - 40px)" }}>
      <iframe
        src="https://coolchess.s20.online"
        width="100%"
        height="100%"
        title="Личный кабинет"
        frameborder="0"
        sandbox="allow-scripts allow-forms allow-same-origin"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default CRMFormPage;
