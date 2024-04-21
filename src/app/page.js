export const metadata = {
  title: "Home Page",
  description: "This is homepage"
}

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes")
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
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
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