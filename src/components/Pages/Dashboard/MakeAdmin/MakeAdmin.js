import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Hooks/Loading';
import AdminRow from '../AdminRow/AdminRow';

const MakeAdmin = () => {

    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }


    return (
      <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Remove user</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <AdminRow
                  index={index}
                  key={user._id}
                  user={user}
                  refetch={refetch}
                ></AdminRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MakeAdmin;