import PostItem from '../PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../typeTS/initialState';
import * as actions from '../../store/actions/task';
import {useEffect} from 'react';

export default function Experience() {
  const { post: { posts }, authUser, authMaster  } = useSelector((state: State) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carBrand } = useParams();
  useEffect(() => {
    dispatch(actions.initPostAC(carBrand));
  }, []);
  const items = posts || [];
  const view = items.map((post) => {
    return <PostItem item={post}/>
  });

  const onAddPost = () => {
    navigate(`/addPost/${carBrand}`);
  };

  const authCond = authUser.auth || authMaster.masterId;

  return (
    <div className="container py-5">
      <div className="d-grid gap-2 col-3 mx-auto mb-5">
        {
          authCond 
          ? <button className="btn btn-dark" type="button" onClick={onAddPost}>Добавить новый пост</button>
          : <h2 className='text-center'>Чтобы добавить пост, необходима авторизация автовладельца</h2>
        }
      </div>
      <div>
        <h2 className='text-center'>Посты: <strong style={{color: '#ffc883'}}>{carBrand?.toLocaleUpperCase()}</strong> </h2>
        { view }
      </div>
    </div>

  );
}
