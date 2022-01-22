import axios from "axios";
import { Link } from 'react-router-dom';
import './home.css'

import { useEffect, useState } from "react";

  export interface BrandCarType {
    name: string,
  }

export default function Home() {

  const [ brandCars, setBrandCars ] = useState([]);

  const getBrandCar = async () => {
    axios.get('http://localhost:5000/')
    .then((res) => setBrandCars(res.data))}

  useEffect (() => {
    getBrandCar()
  }, [])

  return (
    <div className="home_wrapper">

      <div className="car">
        <div className="weel weel1"></div>
        <div className="weel weel2"></div>
      </div>

      <div className="py-5">
        <div className="shadow p-3 mb-5 bg-body bg-dark rounded text-center">
          {brandCars.map((brand: any) => (
            <Link key={brand.name} to={`/expirience/${brand.name}`}>
              <button className="btn btn-dark m-1">
                {brand.name.toUpperCase()}
              </button>
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
}

