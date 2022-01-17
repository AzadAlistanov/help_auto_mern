import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { State } from '../../typeTS/initialState';
import * as actions from '../../store/actions/task';

const AddPost = () => {
  // const posts = useSelector((state: State) => state.post)
  // const [values, setValues] = useState([]);
  const { carBrand } = useParams();
  const dispatch = useDispatch();
  const onSend = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const dataToObject = Object.fromEntries(formData);
    const dataToServer = { ...dataToObject, carBrand };
    dispatch(actions.createPostAC(dataToServer));
  };

  return (
    <div className="p-5">
      <h1 className="my-4 text-light text-center">Add post</h1>
      <form role="form" className="w-50 mx-auto" onSubmit={onSend}>
        <div className="form-group">
          <input name="name" type="text" className="form-control" placeholder="Имя"/>
          <p className="help-block">Введите имя на русском языке</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input name="email" type="email" className="form-control" placeholder="E-mail"/>
        </div>
        <div className="form-group">
          <textarea name="comment" className="form-control" placeholder="Сообщение"></textarea>
        </div>
        <div className="form-group text-center">
          <input type="submit" className="btn btn-info" value="Отправить"/>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
