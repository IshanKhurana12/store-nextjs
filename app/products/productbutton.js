
"use client"

export default function Productbutton(props) {
  

  return (
    <div>
      <button onClick={()=>alert(props.price)}>price</button>
    </div>
  )
}
