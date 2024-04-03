import propTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function News({ title, content, img, link}) {
  const onClick = () =>{
    console.log("ok")
    window.open(link, '_blank')
  }
  return (
    <Card style={{ width: '100%', paddingBottom:'20%' , display: "flex", justifyContent: "space-around", alignItems: "center", display:"block" }}>
      <Card.Img variant="top" src={img} style={{width:'90%', height: "auto", margin: "2%", padding:"20px"}}/>
      <Card.Body>
        <Card.Title style={{fontWeight : "bold"}}>{title}</Card.Title>
        <Card.Text style={{padding:"20px 20px 10px 20px", textAlign: "justify"}}>
        {content.length > 167
              ? `${content.slice(0, 167)}...`
              : content}
        </Card.Text>
        <Button onClick={onClick} variant="primary" style={{position:"absolute",  top: "91%"}}>기사 원문이동</Button>
      </Card.Body>
    </Card>
  );
}

News.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default News;
