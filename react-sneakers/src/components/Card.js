function Card() {
    return (
        <div className="card">
  <div className="favorite">
    <img src="/img/heart-unlike.svg" alt="Unlike"/>
    </div>
    <img width={133} height={112} src="/sneakers/4.jpg" alt="Sneakers"/>
    <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>3099 грн.</b>
      </div>
      <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
    </button>
    </div>
  </div>
    );
}

export default Card;