import React from 'react';

type Post = {
  title: string
  post: string
  like: number
  carBrand: string
}

type Props = {
  item: Post
}

const PostItem = ({ item }: Props) => {
  const { title, post, carBrand, like } = item;

  console.log(item);
  

  return (
    <div className="card mb-5 mx-2" style={{ maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://st.depositphotos.com/1432405/5019/v/600/depositphotos_50196171-stock-illustration-new-auto-logo-set.jpg"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">
              {post}
            </p>
            <h3 className="card-text">
              <span className="text-muted mx-2">
                Car Brand: { carBrand }
              </span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-suit-heart-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
              </svg>
              <span>{ like }</span>
            </h3>
            <button type="button" className="btn btn-secondary btn-rounded">Comment<i className="fas fa-feather"></i></button>
            <button type="button" className="btn btn-secondary btn-rounded">Like<i className="far fa-thumbs-up"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
