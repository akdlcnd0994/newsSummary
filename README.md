# newsSummary

#### 프로젝트 링크
https://akdlcnd0994.github.io/newsSummary/

#### Web 서버 링크
**https**://news.woosik.site/news/{0~7 || 10}
<br/>
ex) https://news.woosik.site/news/1


#### 프로젝트 설명
뉴스를 파싱하고 나온 데이터를 koBART알고리즘을 통해 요약하며 웹 서버를 거쳐 Front에 표시해주는 프로젝트

1. 우선 python beautifulSoup 파싱과 KoBart를 이용한 파싱을 기반으로 DB에 데이터를 갱신한다.
2. 해당 데이터는 React로 작성된 Front에서 rest api를 이용해 Spring boot 웹 서버로 idx값을 포함하여 전송한다.
3. 웹 서버는 python에서 얻은 정보를 DB에 검색하고 해당 데이터를 Front로 재 전송해준다.
4. Front에서 데이터를 정렬하여 보여준다.

- front는 github pages를 이용하여 배포, web서버는 AWS EC2를 이용해 배포하였다.
- github pages는 https, EC2는 http이므로 EC2에서 Spring boot 서버를 도메인과 nginx를 이용하여 https를 적용시켰다.
<br/>

#### 개발 환경 및 언어
- Spring Boot(Intellij)
- Oracle Cloud
- React(visual studio code, BootStrap) 
- Python(IDLE)
- http->https(nginx, letsEncrypt)

### 스크린샷

#### 경제
![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/9a883d55-ed89-40bf-aacb-d0fc13b20d87)

</br>
</br>

#### 언론사별
![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/7f5f30e1-a906-4618-b840-161de75c5cda)

#### 모바일
![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/5eee1a22-70b5-47a9-a534-1998f3083d62)

![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/9fa8a398-6efa-4b72-977e-c34be19628c4)




