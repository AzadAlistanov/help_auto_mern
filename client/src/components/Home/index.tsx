import axios from "axios";
import { Link } from 'react-router-dom';

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
    <div className="">

      <form className="mx-auto  w-50 mb-5 hstack gap-3">
        <input className="form-control me-auto"
          type="text"
          placeholder="Поиск ответов..."/>
        <button type="submit"
          className="btn btn-secondary">Отправить</button>
      </form>

      <div className="shadow p-3 mb-5 bg-body rounded text-center">
        {brandCars.map((brand: any) => (
          <Link key={brand.name} to={`/expirience/${brand.name}`}>
            <button className="btn btn-secondary m-1">
              {brand.name.toUpperCase()}
            </button>
          </Link>
        ))}
      </div>

    </div>
  );
}

