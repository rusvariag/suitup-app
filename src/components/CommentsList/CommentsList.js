// imports
import React from 'react';
import { Link } from 'react-scroll';
import { Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// components
import Header from '../Header/Header';
import ModalComponent from '../Modal/Modal';
import Comments from '../Comments/Comments';

// styles
import './CommentsList.css';

const CommentsList = ({ comments }) => {
  const arrIds = comments.map(comment => comment.id);
  const history = useHistory();

  const hierarchy = arr => {
    const roots = [];
    const children = {};

    // find the top level nodes and hash the children based on parent
    for (let i = 0; i < arr.length; ++i) {
      var p = arr[i].response_to_comment_id;
      if (!p) {
        roots.push({ value: arr[i], el:  'root' });
      } else {
        const target = children[p] || (children[p] = []);
        target.push({ value: arr[i] });
      }
    }

    // function to recursively build the tree
    const findChildren = parent => {
      if (children[parent.value.id]) {
        parent.children = children[parent.value.id];
        for (let i = 0; i < parent.children.length; ++i) {
          findChildren(parent.children[i]);
        }
      }
    };

    // enumerate through to handle the case where there are multiple roots
    for (let i = 0; i < roots.length; ++i) {
      findChildren(roots[i]);
    }

    return roots;
  };

  const tmp = hierarchy(comments);

  const handlerBackToArticles = () => {
    history.push('/');
  };

  return (
    <div className="comments">
      <Row className="flex-container">
        <Col xs={12} xl={5}>
          <Link to={Math.max(...arrIds).toString()}>
            <Button variant="dark">תגובה אחרונה</Button>
          </Link>
          <ModalComponent ids={arrIds} />
          <Button variant="secondary" onClick={handlerBackToArticles}>
            חזרה למאמרים
          </Button>
        </Col>
        <Col xs={12} xl={7}>
          <Header title="תגובות" />
        </Col>
      </Row>
      <div className="comments-container">
        <Comments comments={tmp} />
      </div>
      <Link to={Math.min(...arrIds).toString()}>
        <Button variant="dark">תגובה ראשונה</Button>
      </Link>
      <footer></footer>
    </div>
  );
};

export default CommentsList;
