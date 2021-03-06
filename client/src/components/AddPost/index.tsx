import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../typeTS/initialState';
import * as actions from '../../store/actions/task';
import Alert from '../Alert';

const AddPost = () => {
  const posts = useSelector((state: State) => state.post);
  const navigate = useNavigate();
  const { authUser: { userId } } = useSelector((state: State) => state);
  const { carBrand } = useParams();
  const dispatch = useDispatch();
  const onSend = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const dataToObject = Object.fromEntries(formData);
    const dataToServer = { ...dataToObject, carBrand, user_id: userId };
    dispatch(actions.createPostAC(dataToServer));
    setTimeout(() => navigate(-1), 1000);
  };

  return (
    <div className="p-5">
      <h2 className="">Добавить пост</h2>
      <form role="form" className="w-50 mx-auto" onSubmit={onSend}>
        <div className="form-group">
          <input name="title" type="text" className="form-control" placeholder="Имя"/>
        </div>
        <div className="form-group">
          <textarea name="post" className="form-control" placeholder="Сообщение"></textarea>
        </div>
        <div className="form-group text-center">
        <button type="submit" className="btn btn-dark">Отправить</button>
        </div>
      </form>
      { posts.status !== '' ? <Alert message={posts.status}/> : null }
    </div>
  );
};

export default AddPost;
