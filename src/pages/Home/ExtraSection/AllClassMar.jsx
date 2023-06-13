const AllClassMar = ({ singleClass }) => {
  const { image, className, instructorName, availableSeat, price } =
    singleClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-normal mx-5 mt-5">
      <figure className="">
        <img src={image} alt="image" className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">
          <span className="hidden md:block text-center">Yoga</span>Name :{" "}
          {className}
        </h2>
        <p>Instructor Name : {instructorName}</p>
        <p>AvailableSeat : {availableSeat}</p>
        <p>Price : ${price}</p>
      </div>
      <div className="card-actions mx-auto my-2"></div>
    </div>
  );
};

export default AllClassMar;
