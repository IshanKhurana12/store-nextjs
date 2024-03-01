import Productpage from "@/Components/productpage";
import Link from "next/link";
async function getdata(id){
    const res=await fetch(`https://dummyjson.com/products/${id}`);
    const data=await res.json();
   
    return data;
}

async function Productid({params}) {
  
    // const p=params;
    // console.log(p.params.id);
    const data=await getdata(params.id);
   
  return (
    <div>
      <Productpage data={data}/>
     
    </div>
  )
}

export default Productid;
