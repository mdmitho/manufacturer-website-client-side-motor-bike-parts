import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const {id} = useParams()
    const [user,setUser] = useState(id)
    useEffect(() => {
      const url = `http://localhost:5000/parts/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, [id]);
    return (
      <div className="container mx-auto">
        <h1>Purchse : {user._id}</h1>

        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
            <img src={user.img} class="w-96 h-96 rounded-lg shadow-2xl " />
            <div className='m-6'>
              <h1 class="text-5xl font-bold">Name : {user.name}</h1>
              <p class="py-4">{user.description}</p>
              <p class="py-2"> Price : ${user.price}</p>
              <p class="py-2">Minimum Order Quantity : {user.minimumqQantity}</p>
              <p class="py-2">Available Quantity : {user.availableQquantity}</p>
              <button class=" btn btn-primary mt-5 text-white">order </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PurchasePage;