function Drawer() {
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
        <h2 className="mb-25 d-flex justify-between">Корзина<img className="cu-p" src="/img/remove.svg" alt="Remove"/></h2>

        <div className="items">
        <div className="cartItem d-flex align-center mb-20" >
           <div 
           style={{backgroundImage: 'url(/sneakers/1.jpg)'}} 
           className="cartItemImg"></div>

          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>2299 грн.</b>
          </div>
          <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
        </div>

        <div className="cartItem d-flex align-center mb-20" >
           <div 
           style={{backgroundImage: 'url(/sneakers/2.jpg)'}} 
           className="cartItemImg"></div>

          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>2299 грн.</b>
          </div>
          <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
        </div>

        <div className="cartItem d-flex align-center mb-20" >
           <div 
           style={{backgroundImage: 'url(/sneakers/3.jpg)'}} 
           className="cartItemImg"></div>

          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>2299 грн.</b>
          </div>
          <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
        </div>

        <div className="cartItem d-flex align-center">
           <div 
           style={{backgroundImage: 'url(/sneakers/4.jpg)'}} 
           className="cartItemImg"></div>

          <div className="mr-20">
            <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
            <b>7799 грн.</b>
          </div>
          <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
        </div>
        </div>
        
        <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>9988 грн.</b>
          </li>
          <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>506 грн.</b>
          </li>
        </ul> 
        <button className="greenButton">Оформить заказ <img src="/img/string.svg" alt="Arrow"/> </button>
        </div>

      </div>
      </div>
    );
}

export default Drawer;