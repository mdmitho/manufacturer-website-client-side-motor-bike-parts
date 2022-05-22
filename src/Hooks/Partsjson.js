import { useEffect, useState } from "react"

const useParts = () => {

const [parts, setParts]= useState([])
console.log(parts);

useEffect(()=>{
  fetch('parts.json')
  .then(res => res.json())
  .then(data => console.log(data))
})
return [parts, setParts]

}
export default useParts;