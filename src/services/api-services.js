// imports
// import axios from 'axios';

// global constants
const BASE_PATH = 'http://64.225.73.88:9078/articles';

export default class ApiService {
  getArticles() {
    return [
      {
        id: 2,
        title: 'אני מאמר',
        content: 'אני תוכן',
        comments: [],
      },
      {
        id: 3,
        title: 'אני מאמר 2',
        content: 'אני תוכן 2',
        comments: [],
      },
    ];
    return this.getRequest(`${BASE_PATH}`);
  }

  getComments(articleId) {
    return {
      id: 2,
      title: 'אני מאמר',
      content: 'אני תוכן',
      comments: [
        {
          id: 1,
          title: 'אני תגובה 1',
          content: 'אני תגובה 1',
          article_id: 2,
          response_to_comment_id: null,
          created_at: '2021-06-23T15:50:01.255Z',
          updated_at: '2021-06-23T16:03:55.518Z',
        },
        {
          id: 2,
          title: 'אני תגובה 2',
          content: 'אני תגובה 2',
          article_id: 2,
          response_to_comment_id: null,
          created_at: '2021-06-23T16:04:00.504Z',
          updated_at: '2021-06-23T16:04:00.504Z',
        },
        {
          id: 3,
          title: 'אני תגובה 3',
          content: 'אני תגובה 3',
          article_id: 2,
          response_to_comment_id: null,
          created_at: '2021-06-23T16:04:23.533Z',
          updated_at: '2021-06-23T16:04:23.533Z',
        },
        {
          id: 4,
          title: 'אני תגובה 4',
          content: 'אני תגובה 4',
          article_id: 2,
          response_to_comment_id: null,
          created_at: '2021-06-23T16:04:27.286Z',
          updated_at: '2021-06-23T16:04:27.286Z',
        },
        {
          id: 5,
          title: 'אני תגובה 5',
          content: 'אני תגובה 5',
          article_id: 2,
          response_to_comment_id: 4,
          created_at: '2021-06-23T16:04:30.792Z',
          updated_at: '2021-06-23T16:05:08.389Z',
        },
        {
          id: 6,
          title: 'אני תגובה 6',
          content: 'אני תגובה 6',
          article_id: 2,
          response_to_comment_id: 2,
          created_at: '2021-06-23T16:04:34.688Z',
          updated_at: '2021-06-23T16:04:53.883Z',
        },
        {
          id: 7,
          title: 'אני תגובה 7',
          content: 'אני תגובה 7',
          article_id: 2,
          response_to_comment_id: 6,
          created_at: '2021-06-23T16:04:38.898Z',
          updated_at: '2021-06-23T16:04:58.626Z',
        },
        {
          id: 8,
          title: 'אני תגובה 8',
          content: 'אני תגובה 8',
          article_id: 2,
          response_to_comment_id: 2,
          created_at: '2021-06-23T16:04:42.543Z',
          updated_at: '2021-06-23T16:05:05.270Z',
        },
      ],
    };
    return this.getRequest(`${BASE_PATH}/${articleId}`);
  }

  async getRequest(url) {
    const res = await fetch.get(url);
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
