const ApprovedClassCard = ({ approvedClass }) => {
  const { image, className, instructorName, availableSeat, price } =
    approvedClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-normal">
      <figure className="">
        <img src={image} alt="image" className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">
          <span className="hidden md:block text-center">Yoga</span>Name :{" "}
          {className}
        </h2>
        <p>Instructor : {instructorName}</p>
        <p>AvailableSeat : {availableSeat}</p>
        <p>Price : ${price}</p>
      </div>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ApprovedClassCard;
