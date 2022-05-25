import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Hooks/Loading';
import ManagOrderDispaly from './ManagOrderDispaly/ManagOrderDispaly';

const ManageProducts = () => {
    const {
        data: parts,
        isLoading,
        refetch,
      } = useQuery(["parts"], () => fetch("http://localhost:5000/parts").then(
        (res) => res.json()))
      
      if(isLoading){
        return <Loading />;
      }
    return (
       
      <div className='container mx-auto'>
      <h1 className="text-2xl font-bold text-center my-16  text-primary">Bike parts</h1>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
              {parts.map((part, index) => (
                <ManagOrderDispaly
                  index={index}
                  key={part._id}
                  part={part}
                  refetch={refetch}
                > </ManagOrderDispaly>
              ))}
              </div>
      </div>
    );
};

export default ManageProducts;