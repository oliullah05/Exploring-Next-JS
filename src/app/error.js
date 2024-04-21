"use client"

const ErrorPage = ({error,reset}) => {
    console.log(error);

    return (
        <div>
        <h1 className='text-center text-4xl text-red-500'> something went wrong</h1>
        <h1 className='text-center text-4xl text-red-500'>{error.message}</h1>
        <button onClick={()=>reset()} className="btn btn-danger">Try Agsin</button>
        </div>
    );
};

export default ErrorPage;