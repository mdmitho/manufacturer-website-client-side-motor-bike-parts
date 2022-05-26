import { useEffect, useState } from "react";

const useParts = (id) => {
  const [parts, setParts] = useState({});
  useEffect(() => {
    const url = `https://arcane-bastion-67120.herokuapp.com/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [id]);
  return [parts, setParts];
};
export default useParts;
