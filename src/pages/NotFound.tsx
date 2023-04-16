const NotFound = () => {
  return (
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin">0</i>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
        place?
        <p>
          Lets go <a href="/">home</a> and try from there.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
