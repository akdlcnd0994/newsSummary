import { useEffect, useState } from "react";
import { apiClient } from "../apis/ApiClient";
import News from "../News";
import styles from "./Home.module.css";
import Company from "../Company";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [idx, setIdx] = useState(0);

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
      .get("/news/10")
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  };

  const onClick = (idx) => {
    setIdx(idx);
    if (idx === 6) {
      enterNews();
    } else if (idx === 10) {
      rankNews();
    } else {
      headNews(idx);
    }
    setLoading(false);
  };

  useEffect(() => {
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
      <br />
      {loading ? (
        <h1>Loading...</h1>
      ) : idx !== 10 ? (
        <div>
          {news.map((n, index) =>
            //index가 3으로 나누어질때마다 새로운 Container 생성
            index % 3 === 0 ? (
              <Container>
                <Row style={{ width: '80rem', height: '37rem'}}>
                  <Col xs>
                    <News
                       title={news[index].title}
                       content={news[index].content}
                       img={news[index].img}
                       link={news[index].link}
                    />
                  </Col>
                  {index + 1 < news.length ? (
                    <Col xs={{ order: 12 }}>
                      <News
                        title={news[index+1].title}
                        content={news[index+1].content}
                        img={news[index+1].img}
                        link={news[index+1].link}
                      />
                    </Col>
                  ) : null}
                  {index + 2 < news.length ? (
                    <Col xs={{ order: 12 }}>
                      <News
                        title={news[index+2].title}
                        content={news[index+2].content}
                        img={news[index+2].img}
                        link={news[index+2].link}
                      />
                    </Col>
                  ) : null}
                </Row>
              </Container>
            ) : null
          )}
        </div>
      ) : (
        <div>
          <Company
            temp={news}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
