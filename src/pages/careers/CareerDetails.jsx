import {useParams, useLoaderData } from "react-router-dom";


export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  console.log(id);

  return(
    <div className="career-details">
          <h2>{career.title}</h2>
          <p>Based in {career.location}</p>
          <p>Starting salary: {career.salary}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis quam error fugit distinctio, aliquid expedita deleniti quae, consequuntur, hic libero aperiam doloribus perferendis eius in eos quibusdam minus voluptas!</p>
    </div>
  )
}

//loader
export const careerDetailsLoader = async ({params}) => {
   const {id} = params;
   const res = await fetch('http://localhost:4000/careers/' + id);

   if(!res.ok){
     throw Error("Could not find that career");
   }

   return res.json();
}