import ProductGallery from "./ProductGallery";
import Link from "next/link";
function Productpage(props) {
    const p=props.data;
    console.log(p)
    
  return (
    <div className=" border p-4 m-10 flex-row block align-middle content-center">
        <h2>{p.title}</h2>
        <ProductGallery images={p.images} />
      <h1>{p.category}</h1>
      <div>
        
        
        <h1> {p.brand}</h1>
      
        
        <br/>
        <p>description-{p.description}</p>
        <br />
        <Link className="border" href="/products">Back</Link>
      </div>
        
    </div>
  )
}

export default Productpage
