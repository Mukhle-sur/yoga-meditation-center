const InstructorMar = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-normal mx-5 mb-5">
      <figure className="">
        <img src={image} alt="image" className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="hidden md:block">Instructor</span> Name : {name}
        </h2>
        <p>email : {email}</p>
      </div>
    </div>
  );
};

export default InstructorMar;
