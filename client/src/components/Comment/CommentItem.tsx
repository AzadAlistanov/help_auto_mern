import React from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
type Order = {
  comment: string,
  nickName: string
  photo: any
  createdAt: any
  
}

type Props = {
  order: Order
}

export default function CommentItem(props: Props) {
  const { comment, nickName, photo, createdAt } = props.order;

  return <div className="mb-3">
   
        <Grid style={{ borderBottom: '4px solid #c0d1cd', overflowWrap: 'anywhere'}} container wrap="nowrap" >
          <Grid item>
            <Avatar className="mx-3" alt="Remy Sharp" src={`http://localhost:5000/${photo}`} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>"{nickName}"</h4>
            <p className='mt-3 text-center' style={{ textAlign: "left" }}>
              {comment}.{" "}
            </p>
            <p style={{ textAlign: "left", color: "#590404" }}>
            {new Date(createdAt).toLocaleString()}
            </p>
          </Grid>
        </Grid>   
          
                  
    
  </div>;
}

