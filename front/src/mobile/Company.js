import propTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./CompanyNews";
import { useEffect, useState } from "react";
import { apiClient } from "../apis/ApiClient";


function Company() {
  const [temp, setTemp] = useState([]);
  const rankNews = () => {
    apiClient
      .get("/news/10")
      .then((res) => setTemp(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    rankNews();
  },[])
  let set = [];
  let t = [];

  temp.map((n, index) => set.push(n.company));

  const setT = new Set(set);
  set = [...setT]; //중복제거된 회사명 리스트

  for (const s of set) {
    const temp2 = temp.filter((item) => item.company === s); //회사명을 기반으로
    t.push(temp2);
  }

  return (
    <div>
      {t.map(
        (
          n,
          index //icon company 1개당 기사묶음 map으로 5개 div추가생성
        ) => (
          <div style={{border: '4px solid #bcbcbc',  boxshadow : '5px 5px 5px 5px gray', marginBottom: "5%"}}>
            <center>
              <img style={{marginTop:'1rem', height:120, width:120}} src={n[0].icon}  />
              <h2>{n[0].company}</h2>
            </center>
            {n.map((info, index) =>
              index % 5 == 0 ? (
                <Container>
                    <Col xs>
                      <News
                        title={n[index].title}
                        content={n[index].content}
                        img={n[index].img}
                        link={n[index].link}
                      />
                    </Col>
                    <Col xs>
                      <News
                        title={n[index + 1].title}
                        content={n[index + 1].content}
                        img={n[index + 1].img}
                        link={n[index + 1].link}
                      />
                    </Col>

                    <Col xs>
                      <News
                        title={n[index + 2].title}
                        content={n[index + 2].content}
                        img={n[index + 2].img}
                        link={n[index + 2].link}
                      />
                    </Col>
                    <Col xs>
                      <News
                        title={n[index + 3].title}
                        content={n[index + 3].content}
                        img={n[index + 3].img}
                        link={n[index + 3].link}
                      />
                    </Col>
                    <Col xs>
                      <News
                        title={n[index + 4].title}
                        content={n[index + 4].content}
                        img={n[index + 4].img}
                        link={n[index + 4].link}
                      />
                    </Col>
                </Container>
              ) : null
            )}
          </div>
        )
      )}
    </div>
  );
}

Company.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  company: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default Company;
