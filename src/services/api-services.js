// global constants
const BASE_PATH = 'http://64.225.73.88:9078/articles';

export default class ApiService {
  getArticles() {
    return this.getRequest(`${BASE_PATH}`);
  }

  getComments(articleId) {
    return this.getRequest(`${BASE_PATH}/${articleId}`);
  }

  async getRequest(url) {
    const res = await fetch(url);
    return this.responseHandler(res);
  }

  responseHandler(res) {
    if (res.status !== 200) {
      throw new Error(
        `Could not fetch ${res.config.url}, received ${res.status}`
      );
    }
    return res;
  }
}
