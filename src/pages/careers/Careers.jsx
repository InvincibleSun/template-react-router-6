import { Link, useLoaderData } from "react-router-dom";


export default function Careers() {
  const careers = useLoaderData();

  return(
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <h2>{career.title}</h2>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

//loader
export const careersLoader = async () => {
   const res = await fetch('http://localhost:4000/careers');

   if(!res.ok){
    throw Error("Could not fetch the career")
   }

   return res.json();
}