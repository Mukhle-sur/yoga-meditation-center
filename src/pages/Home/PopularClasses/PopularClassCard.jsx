const PopularClassCard = ({ item }) => {
  const { image, className, instructorName, price } = item;
  return (
    <div className="card border-2   mt-8 ">
      <img className="w-full h-64" src={image} alt="" />
      <div className="card-body">
        <h2 className="card-title">ClassName : {className}</h2>
        <h4>InsTructor : {instructorName}</h4>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default PopularClassCard;
