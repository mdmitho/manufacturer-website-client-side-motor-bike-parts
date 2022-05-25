import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Hooks/Loading'
const MyOrder = () => {
    const {
      data: orders,
      isLoading,
      refetch,
    } = useQuery(["order"], () =>
      fetch("http://localhost:5000/order").then((res) => res.json())
    );
      
      if(isLoading){
        return <Loading />;
      }

    return (
        <div className='container mx-auto'>
            <h1>My Order : {orders.length}</h1>
          
        </div>
    );
};

export default MyOrder;