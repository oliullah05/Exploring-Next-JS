export const metadata = {
  title: "Home Page",
  description: "This is homepage"
}

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
    cache:"force-cache"
  })
  const shoes = await res.json()
  // console.log(data);
  return (
    <div >
      <h1 className='text-4xl  text-center'>Welcome to next js</h1>
     <div className="grid grid-cols-3 gap-1 justify-between p-5 items-center">
     {
        shoes.map(shoe =><div key={shoe.id} className="card w-96 my-2 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {shoe.title}
            <div className="badge badge-secondary">{shoe.price}</div>
          </h2>
          <p>{shoe.description}</p>
          <div className="card-actions pb-0 mb-0 justify-end my-5">
          <button className="btn btn-outline btn-primary ml-2">Buy Now</button>
          <button className="btn btn-outline btn-primary">Details</button>
         
          </div>
        </div>
      </div>
        )
      }
     </div>
    </div>
  );
};

export default HomePage;