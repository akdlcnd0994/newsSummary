import propTypes from "prop-types";
import styles from "./News.module.css";

function News({ title, content, img, link }) {
    return (
      <div className={styles.news}>
        <img src={img} className={img} />
        <div>
          <h2 className={styles.news__title}>
            <a href={`${link}`} target="_blank">{title}</a>
          </h2>
          <br/>
          <br/>
          <p>{content.length > 235 ? `${content.slice(0, 235)}...` : content}</p>
        </div>
      </div>
    );
  }
  
  News.propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
  };
  
  export default News;