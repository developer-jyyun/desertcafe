import React from "react";
import "./MenuItem.css";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const DesertItem = ({
  desert,
  setDesert,
  desertCount,
  setDesertCount,
  isActive,
  setActive,
  ToggleClass,
}) => {
  return (
    <>
      {desert.map((a, i) => {
        return (
          <div
            className="item"
            key={desert[i].id}
            // className={`item ${isActive ? "active" : null}`}
            // onClick={(e)=>{
            //   ToggleClass();
            // }}
          >
            <div className="item__img">
              <img src={desert[i].img} alt={desert[i].name} />
              <div className="item__cart">
                <i className="item__cart-btn minus">
                  <RiSubtractFill
                    onClick={(e) => {
                    const copy = [...desertCount];              
                      copy[i] = copy[i] - 1;
                      setDesertCount(copy);
                    }}
                  />
                </i>
                <i className="item__cart-btn plus">
                  <RiAddFill
                    onClick={(e) => {
                      let copy = [...desertCount];
                      copy[i] = copy[i] + 1;
                      setDesertCount(copy);
                    }}
                  />
                </i>
                <i className="item__cart-btn cart"
                  onClick={(e) => {
                    // 카트누르면 목록에 담기
                  }}
                >🛒</i>
                <span className="item__cart-counter">{desertCount[i]}</span>
              </div>
            </div>

            {/* <div className="item-bottom"> */}
            <div className="item__txt">
              <h4>{desert[i].name}</h4>
              <p>{desert[i].price}원</p>
            </div>
          </div>
          // </div>
        );
      })}
    </>
  );
};

export default DesertItem;
