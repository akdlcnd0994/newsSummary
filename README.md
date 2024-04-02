# newsSummary

#### 프로젝트 링크
https://akdlcnd0994.github.io/newsSummary/

#### Web 서버 링크
https://news.woosik.site/news/{0~7 || 10}
ex) https://news.woosik.site/news/1


#### 프로젝트 설명
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

<br/>
### 스크린샷

#### 경제
![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/61f6d00d-c6b6-4180-9593-311465ee2118)
</br>
</br>
</br>
#### 언론사별
![image](https://github.com/akdlcnd0994/newsSummary/assets/28687142/5f893bda-76ed-42df-b5b5-32f55e7ebe4e)

