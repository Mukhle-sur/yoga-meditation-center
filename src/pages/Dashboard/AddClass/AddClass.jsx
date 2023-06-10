import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
const AddClass = () => {
  const { user } = useContext(AuthContext);
  //   use react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // image upload
    const imageUrl = data.image[0];
    const formData = new FormData();
    formData.append("image", imageUrl);
    console.log(formData);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_img_upload_key
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const saveClassInfo = {
          image: imageUrl,
          className: data.className,
          instructorName: data.instructorName,
          instructorEmail: data.instructorEmail,
          availableSeat: data.seat,
          price: data.price,
          status: "pending",
        };
        console.log(saveClassInfo);
      });
  };
  return (
    <div className="bg-gray-50 p-24 rounded-xl my-10 w-4/6">
      <h1 className="text-center text-4xl mb-10 text-bold">Add Your Classes</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control">
              <label className="block mb-2 text-md font-medium">
                Class Name
              </label>
              <input
                type="text"
                placeholder="Class Name"
                {...register("className", { required: true })}
                className="input input-bordered"
              />
              {errors.className?.type === "required" && (
                <p className="text-red-600 mt-1">Name is required</p>
              )}
            </div>
            <div className="form-control mt-2">
              <label htmlFor="image" className="block mb-2 text-md font-medium">
                Class Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: true })}
                name="image"
                accept="image/*"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600 mt-1">Password is required</p>
              )}
            </div>
            <div className="form-control my-2">
              <label className="block mb-2 text-md font-medium">
                Instructor Name
              </label>
              <input
                type="text"
                {...register("instructorName", { required: true })}
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="block mb-2 text-md font-medium">
                Instructor Email
              </label>
              <input
                type="email"
                {...register("instructorEmail", { required: true })}
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-2">
              <label className="block mb-2 text-md font-medium">
                Available Seat
              </label>
              <input
                type="number"
                {...register("seat", { required: true })}
                placeholder="available seat"
                className="input input-bordered"
              />
              {errors.seat?.type === "required" && (
                <p className="text-red-600 mt-1">Password is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="block mb-2 text-md font-medium">Price</label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="price"
                className="input input-bordered"
              />
              {errors.price?.type === "required" && (
                <p className="text-red-600 mt-1">Password is required</p>
              )}
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Class"
              className="btn btn-error text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
