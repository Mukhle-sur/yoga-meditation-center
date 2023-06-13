import { toast } from "react-hot-toast";

import { useParams } from "react-router-dom";

const UpdatedClass = () => {
  const { id } = useParams();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const availableSeat = form.seat.value;
    const price = form.price.value;
    const updateClass = { className, availableSeat, price };
    fetch(`http://localhost:5000/updateClass/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your class updated Successful");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h2 className="text-3xl text-center">Update Your Class</h2>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ClassName</span>
              </label>
              <input
                type="text"
                name="className"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seat</span>
              </label>
              <input
                type="text"
                name="seat"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                name="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
          <input
              type="submit"
              value="Update Class"
              className="btn btn-error text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatedClass;
