import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row header-top">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <div className="logo">
              <img src="./src/image/logo.png" alt="logo" />
            </div>
          </div>

          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <ul className="menu">
              <li className="menu-item">
                <div className="icon icon-memo"></div>
                <a href="">自分の記録</a>
              </li>
              <li className="menu-item">
                <div className="icon icon-challenge"></div>
                <a href="">チャレンジ</a>
              </li>
              <li className="menu-item">
                <div className="icon icon-info"></div>
                <div className="account">
                  <span className="number-account">1</span>
                </div>
                <a href="/about">お知らせ</a>
              </li>
              <li className="menu-item">
                <div className="icon icon-menu"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
