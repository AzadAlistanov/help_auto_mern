import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../typeTS/initialState';

type Post = {
  title: string
  post: string
  like: number
  carBrand: string
  id: any
  user_id: number
}

type Props = {
  item: Post
}

const PostItem = ({ item }: Props) => {
  const { title, post, carBrand, like, id, user_id } = item;
  const [user, setUser] = useState({nickName: '', photo: ''})
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${user_id}`);
      setUser(data.user[0])
    }());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card-post">
          <div className="">
            <h3>"{user.nickName.toLocaleUpperCase()}"</h3>
            <img 
              src={`http://localhost:5000/${user.photo}`}
              className="image-profile"
              style={{ width: '100px', height: '100px'}} />
            <h5 className="card-title mt-2">"{ title.toLocaleUpperCase() }"</h5>
            <p style={{overflowWrap: 'anywhere'}} className="card-text">
              {post}
            </p>
            <Link key={carBrand} to={`/expirience/${carBrand}/${id}`}>
              <button type="button" className="btn btn-dark btn-rounded">Комментарии <i className="fas fa-feather"></i></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
