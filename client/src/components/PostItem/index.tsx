import React from 'react';

const PostItem = () => {
  return (
    <div className="card mb-5 mx-2" style={{ maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button type="button" className="btn btn-secondary btn-rounded">Comment<i className="fas fa-feather"></i></button>
            <button type="button" className="btn btn-secondary btn-rounded">Like<i className="far fa-thumbs-up"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
