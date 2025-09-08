const SchedulePage = () => {
  return (
    <div style={{ padding: "20px", height: "calc(100vh - 40px)" }}>
      <iframe
        src="https://coolchess.s20.online/common/1/online-schedule?branch=1&locale=ru&pc=2981b9&crm=https://coolchess.s20.online&token=e1f6148c1151eae7f22b5ec44c3d92eb&apiToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiaWF0IjoxNzU3MzM2OTI1LCJleHAiOjE3NTk5Mjg5MjV9.2ZuKzvclKU9DCBlDoDPBNUKXOQAT5weqBEFfTxYmdYE&appKey=0ae0b786b5029102bd60d6df6f896f49&"
        width="100%"
        height="100%"
        title="Онлайн запись"
        frameborder="0"
        sandbox="allow-scripts allow-forms allow-same-origin"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SchedulePage;
