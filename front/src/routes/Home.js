import { useEffect, useState } from "react";
import { apiClient } from "../apis/ApiClient";
import News from "../News";
import styles from "./Home.module.css";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const headNews = (idx) => {
    apiClient
      .get(`/news/${idx}`)
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  };

  const enterNews = () => {
    apiClient
      .get("/news/6")
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  };

  const rankNews = () => {
    apiClient
      .get("/news/10") //10은 서버에서 예외처리하여 병합 후 반환
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  };

  const onClick = (idx) => {
    if (idx === 6) {
      enterNews();
    } else if (idx === 10) {
      rankNews();
    } else {
      headNews(idx);
    }
    setLoading(false);
  };

  useState(() => {
    onClick(0);
  }, []);

  return (
    <div>
      <nav id={styles.nav1}>
        <ul>
          <li>
            <button
              onClick={() => {
                onClick(0);
              }}
            >
              정치
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(1);
              }}
            >
              경제
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(2);
              }}
            >
              사회
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(3);
              }}
            >
              생활/문화
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(4);
              }}
            >
              세계
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(5);
              }}
            >
              IT/과학
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(6);
              }}
            >
              연예
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onClick(10);
              }}
            >
              언론사별
            </button>
          </li>
        </ul>
      </nav>
      <h2 id={styles.h}>기사 제목 클릭 시 원문 링크로 이동됩니다.</h2>
      <br/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {news.map((n) => (
            <News
              title={n.title}
              content={n.content}
              img={n.img}
              link={n.link}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
