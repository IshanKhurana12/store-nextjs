import Link from "next/link";
import Router from "next/navigation";
import Productbutton from "./productbutton";

async function getdata(){
    const data= await fetch("https://dummyjson.com/products");
    const res=await data.json();
    return res.products;
}


export default async function products(){


    const response=await getdata();

function handleclick(){
        alert("jai mata di");
    }

    return(
        <div>
            <h1 className="flex-row  align-middle text-center">Products</h1>
            <div className=" flex-col">
            {
                response.map((item,id)=>
                <div key={id} className=" border p-4 m-8 flex-row align-middle inline-block ">
                    <Link href={`./products/${item.id}/`} className=" text-xs"> <img className=" object-contain  h-20 w-40  block" src={item.thumbnail}></img>
                    {item.id} : {item.title}
                   
                    </Link>
                </div>
                )
            }
            </div>
        </div>
    )
}