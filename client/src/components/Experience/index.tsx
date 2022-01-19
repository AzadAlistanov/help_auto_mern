import PostItem from '../PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../typeTS/initialState';
import * as actions from '../../store/actions/task';
import {useEffect} from 'react';

export default function Experience() {
  const { posts } = useSelector((state: State) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carBrand } = useParams();
  useEffect(() => {
    dispatch(actions.initPostAC(carBrand));
  }, []);
  const view = posts.map((post) => {
    return <PostItem />
  });

  const onAddPost = () => {
    navigate(`/addPost/${carBrand}`);
  };

  return (
    <div className="container py-5">
      <div className="d-grid gap-2 col-3 mx-auto mb-5">
        <button className="btn btn-dark" type="button" onClick={onAddPost}>Добавить пост</button>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        { view }
      </div>
    </div>

  );
}
