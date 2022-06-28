import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer-menu">
          <li className="item">
            <a> 会員登録</a>
          </li>
          <li className="item">
            <a>運営会社</a>
          </li>
          <li className="item">
            <a>利用規約</a>
          </li>
          <li className="item">
            <a>個人情報の取扱について</a>
          </li>
          <li className="item">
            <a>特定商取引法に基づく表記</a>
          </li>
          <li className="item">
            <a>お問い合わせ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
