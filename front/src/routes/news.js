import { apiClient } from "../apis/ApiClient";

function News() {
  const headNews = () => {
    apiClient
      .get("/news/1")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const enterNews = () => {};

  const rankingNews = () => {};

  headNews();
}

export default News;
