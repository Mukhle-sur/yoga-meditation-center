import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import useAxiosSecure from "../../../components/hooks/useAxiosSecure/useAxiosSecure";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const FeedBack = () => {
  const { id } = useParams();
  console.log(id);
  // const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const feedBack = data.feedBack;
    fetch(
      `https://yoga-meditation-server-ruby.vercel.app/user/feedback/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(feedBack),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          toast.success("Your feedback added Successful");
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
    // axiosSecure
    //   .put(`/users/feedback/${id}`, feedBack)
    //   .then((data) => {
    //     if (data.data.modifiedCount > 0) {
    //       reset();
    //       toast.success("Your feedBackF is Successful");
    //     }
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  return (
    <div className="bg-gray-50 p-24 rounded-xl my-10 w-4/6">
      <h1 className="text-center text-4xl mb-10 text-bold">
        Add Your Feedback
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="block mb-2 text-md font-medium">
              FeedBack Please
            </label>
            <input
              type="text"
              placeholder="Your FeedBack"
              {...register("feedBack", { required: true })}
              className="input input-bordered"
            />
            {errors.feedBack?.type === "required" && (
              <p className="text-red-600 mt-1">feedBack is required</p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add FeedBack"
              className="btn btn-error text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
