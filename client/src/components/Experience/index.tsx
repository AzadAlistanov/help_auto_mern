import PostItem from '../PostItem';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../typeTS/initialState';

export default function Experience() {
  const { posts } = useSelector((state: State) => state.post);
  const navigate = useNavigate();
  const { carBrand } = useParams();
  const view = posts.map((post) => {
    return <PostItem />
  });

  const onAddPost = () => {
    navigate(`/addPost/${carBrand}`);
  };

  return (
    <div className="container py-5">
      <div className="d-grid gap-2 col-3 mx-auto mb-5">
        <button className="btn btn-cyan" type="button" onClick={onAddPost}>Add post</button>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        { view }
      </div>
    </div>

  );
}
