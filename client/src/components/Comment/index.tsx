import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { State } from '../../typeTS/initialState';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import ReactDOM from "react-dom";
import CommentItem from './CommentItem';
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";



export default function Comment() {
  const {  authUser } = useSelector((state: State) => state);
  const { carBrand, id } = useParams();
  const [comments, setComments] = useState([]);
  const [orderState, setOrderState] = useState({
    postId:id,
    comment: "",
    user_id:authUser.userId
  });


  async function addFeedback(event: { preventDefault: () => void; }) {
    event.preventDefault();
    
    setOrderState(
      {
        ...orderState,
        comment: orderState.comment,
      });
    console.log('orderState', orderState);
    const newcomment = await axios.post('http://localhost:5000/newpostcomment', orderState)
    setOrderState({ ...orderState, comment: '' });
  }

  const comment = comments.map((order, i) => {
    return <CommentItem key={i} order={order} />})    
    useEffect(() => {
      (async function () {
        console.log(123)
        const { data:{commentWithUser} } = await axios.get(`http://localhost:5000/comment/${carBrand}/${id}`);
        console.log(commentWithUser)
        setComments(commentWithUser.reverse());
      }());
    }, [orderState]);

  return (

    <div style={{ padding: 14 }} className="App">
      <div className="d-flex">
        <h1>Comments</h1>
        <div className="form-group mx-3">
          
        <form onSubmit={addFeedback} role="form" className="w-50 mx-auto d-flex" >

        <div className="form-group">
          <textarea 
          value={orderState.comment}
          onChange={(event) => setOrderState({ ...orderState, comment: event.target.value })}
          name="post" style={{width:'300px'}} className="form-control" placeholder="Сообщение"></textarea>
        </div>
        <div className="form-group text-center">
          <input type="submit" className="btn btn-info" value="Отправить"/>
        </div>
      </form>
        </div>
      </div>
      <Paper style={{ padding: "40px 20px" }}>
        {comment}                  
      </Paper>     
    
      

    </div>
  );



}
