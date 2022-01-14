import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrderList() {
  const { id } = useParams();
  const [orders, setOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    (async function () {
    const { data } = await axios.get(`http://localhost:5000/orderlist/${id}`);
    // setOrders(data);
    }());
  }, []);

  const cards = orders.map((order) => {
    return (
      <div className="d-inline-block">
        <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>

          <div className="card">
            <div className="card-body d-flex flex-row">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle me-3"
                   height="50px"
                   width="50px" alt="avatar"/>
              <div>
                <h5 className="card-title font-weight-bold mb-2">New spicy meals</h5>
                <p className="card-text"><i className="far fa-clock pe-2"></i>07/24/2018</p>
              </div>
            </div>
            <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                   alt="Card image cap"/>
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </div>
            <div className="card-body">
              <p className="card-text collapse" id="collapseContent">
                Recently, we added several exotic new dishes to our restaurant menu. They come from
                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                our juicy meals from around the world.
              </p>
              <div className="d-flex justify-content-between">
                <a className="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
                   role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
                <div>
                  <i className="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                     data-mdb-placement="top" title="Share this post"></i>
                  <i className="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                     data-mdb-placement="top"
                     title="I like it"></i>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  })

  return (
    <div className="container">
      { cards }
    </div>
  );
}
