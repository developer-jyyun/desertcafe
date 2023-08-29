import react from "react";
import "./MenuItem.css";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const BeverageItem = ({
  beverage,
  setBeverage,
  beverageCount,
  setBeverageCount,
}) => {
  return (
    <>
      {beverage.map((a, i) => {
        return (
          <div className="item" key={beverage[i].id}>
         
            <div className="item__img">
              <img src={beverage[i].img} alt={beverage[i].name} />
              <div className="item__cart">
              <i className="item__cart-btn minus">
                  <RiSubtractFill
                    onClick={(e) => {
                      e.stopPropagation(); //이벤트 버블링 막기
                      let copy = [...beverageCount];                
                      copy[i] = copy[i] - 1;
                      setBeverageCount(copy);
                    }}
                  />
                </i>
                <i className="item__cart-btn plus">
                  <RiAddFill
                    onClick={(e) => {
                      e.stopPropagation(); //이벤트 버블링 막기
                      let copy = [...beverageCount];
                      copy[i] = copy[i] + 1;
                      setBeverageCount(copy);
                    }}
                  />
                </i>
                <i className="item__cart-btn cart">
                  🛒
                </i>
                <span className="item__cart-counter">{beverageCount[i]}</span>
              </div>
            </div>
              <div className="item__txt">
                <h4>{beverage[i].name}</h4>
                <p>{beverage[i].price}원</p>
              </div>
            </div>
          
        );
      })}
    </>
  );
};

export default BeverageItem;
