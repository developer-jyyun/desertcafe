import react from "react";
import "./MenuItem.css";

const MenuItem = ({ beverage, setBeverage }) => {
  return (
    <>
      {/* <div className='item'style={ {backgroundImage:'url(/assets/images/bever01.jpg)'}}> */}
      {/* {process.env.PUBLIC_URL + '/assets/images/bever00.jpg'}    */}

      <div className="item">
        {/* <div
          className="item__img"
          // style={{
          //   backgroundImage: `url( ${{beverage[0].img}} )`
          // }}

          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/coffee01.jpg"
            })`
          }}
        ></div> */}

        <div className="item__img">
          <img src={beverage[0].img} alt="" />
        </div>
        <p className="item__txt">
          <h4>{beverage[0].name}</h4>
          <p>{beverage[0].price}</p>
        </p>
      </div>
      <div className="item">
        <div className="item__img">
          <img src={beverage[1].img} alt="" />
        </div>
        <p className="item__txt">
          <h5>{beverage[1].name}</h5>
          <p>{beverage[1].price}</p>
        </p>
      </div>
      <div className="item">
        <div className="item__img">
          <img src={beverage[2].img} alt="" />
        </div>
        <p className="item__txt">
          <h5>{beverage[2].name}</h5>
          <p>{beverage[2].price}</p>
        </p>
      </div>
    </>
  );
};

export default MenuItem;
