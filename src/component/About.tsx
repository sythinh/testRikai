import React, { FC } from 'react';

const About: FC = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row recommended">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 recommended-item">
            <h1 className="title">RECOMMENDED COLUMN</h1>
            <p className="name">オススメ</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 recommended-item">
            <h1 className="title">RECOMMENDED DIET</h1>
            <p className="name">ダイエット</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 recommended-item">
            <h1 className="title">RECOMMENDED BEAUTY</h1>
            <p className="name">美容</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 recommended-item">
            <h1 className="title">RECOMMENDED HEALTH</h1>
            <p className="name">健康</p>
          </div>
        </div>
        <div className="news">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image1.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image2.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image3.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image4.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image1.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image2.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image3.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-item">
              <div className="feature-image">
                <img src="src/image/image4.png" alt="image1" />
                <span className="time">2021.05.17 23:25</span>
              </div>
              <div className="content">
                <p className="desc">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  を食べるメリ…
                </p>
                <p className="author">#魚料理 #和食 #DHA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="load-news">
          <button className="btn ">コラムをもっと見る</button>
          <div className="scroll-top">
            <img src="src/image/component_scroll.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
