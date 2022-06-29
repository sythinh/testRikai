import React, { FC } from 'react';

const Toppage: FC = () => {
  return (
    <div className="toppage">
      <div className="container-first">
        <div className="red-content">
          <img src="./src/images/d01.png" alt="d01" />
        </div>
        <div className="green-content"></div>
      </div>
      <div className="container-second">
        <div className="item">
          <img src="./src/images/パス48.png" alt="m01" />
        </div>
        <div className="item">
          <img src="./src/images/パス48.png" alt="m01" />
        </div>
        <div className="item">
          <img src="./src/images/パス48.png" alt="m01" />
        </div>
        <div className="item">
          <img src="./src/images/パス48.png" alt="m01" />
        </div>
      </div>
      <div className="container-third">
        <div className="food-content-first">
          <div className="food-item">
            <img src="./src/images/m01.png" alt="m01" />
            <p className="food-time-first">05.21.Morning</p>
          </div>
          <div className="food-item">
            <img src="./src/images/lunch_one.png" alt="lunch_one" />
            <p className="food-time-first">05.21.Lunch</p>
          </div>
          <div className="food-item">
            <img src="./src/images/d01_image.png" alt="d01" />
            <p className="food-time-first">05.21.Dinner</p>
          </div>
          <div className="food-item">
            <img src="./src/images/snack_one.png" alt="snack_one" />
            <p className="food-time-first">05.21.Snack</p>
          </div>
        </div>
        <div className="food-content-second">
          <div className="food-item">
            <img src="./src/images/m01.png" alt="m01" />
            <p className="food-time-second">05.20.Morning</p>
          </div>
          <div className="food-item">
            <img src="./src/images/lunch_two.png" alt="lunch_two" />
            <p className="food-time-second">05.20.Lunch</p>
          </div>
          <div className="food-item">
            <img src="./src/images/d02_image.png" alt="d02_images" />
            <p className="food-time-second">05.20.Dinner</p>
          </div>
          <div className="food-item">
            <img src="./src/images/snack_two.png" alt="snack_two" />
            <p className="food-time-second">05.20.Snack</p>
          </div>
        </div>
      </div>
      <div className="scroll-top">
        <img
          src="./src/images/component_scroll.png"
          alt="component_scroll"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        />
      </div>
      <div className="button-center">
        <button className="btn button">記録をもっと見る</button>
      </div>
    </div>
  );
};
export default Toppage;
