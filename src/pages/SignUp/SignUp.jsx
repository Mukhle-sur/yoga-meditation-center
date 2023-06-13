import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    signInWithGoogle,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   use react hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    // image upload
    const imageUrl = data.image[0];
    const formData = new FormData();
    formData.append("image", imageUrl);
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
        createUser(data.email, data.password)
          .then((result) => {
            console.log(result);
            updateUserProfile(data.name, imageUrl).then(() => {
              const saveUser = {
                name: data.name,
                email: data.email,
                role: "Student",
                image: imageUrl,
              };
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    reset();
                    toast.success("SignUp Successfully");
                    navigate("/");
                  }
                });
            });
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  // googleLogin
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success("Login SuccessFully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  //  click eya icon then show password
  const handleSeePass = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  //  click eya icon then show confirm password
  const handleSeeConfirmPass = () => {
    const confirmInput = document.getElementById("confirm");
    if (confirmInput.type === "password") {
      confirmInput.type = "text";
    } else {
      confirmInput.type = "password";
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-28">
      <div className="flex flex-col max-w-md w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome To Yoga center</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className=" ng-untouched ng-pristine ng-valid m-0"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600">image is required</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 "
                />
                {errors.password?.type === "required" && (
                  <p className="text-rose-500 mt-1">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-rose-500 mt-1">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-rose-500 mt-1">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-rose-500 mt-1">
                    Password must have one Uppercase and one number and one
                    special character.
                  </p>
                )}
                <AiOutlineEye
                  onClick={handleSeePass}
                  className="absolute top-3 right-3 cursor-pointer text-lg"
                ></AiOutlineEye>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirm"
                  {...register("confirm", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  id="confirm"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 "
                />
                {errors.confirm?.type === "required" && (
                  <p className="text-rose-500">Password is required</p>
                )}
                {errors.confirm?.type === "minLength" && (
                  <p className="text-rose-500 mt-1">
                    Password must be 6 characters
                  </p>
                )}
                {errors.confirm?.type === "maxLength" && (
                  <p className="text-rose-500 mt-1">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.confirm?.type === "pattern" && (
                  <p className="text-rose-500 mt-1">
                    Password must have one Uppercase one number, and one special
                    character.
                  </p>
                )}
                {errors.confirm?.type === "validate" && (
                  <p className="text-rose-500 mt-1">{errors.confirm.message}</p>
                )}
                <AiOutlineEye
                  onClick={handleSeeConfirmPass}
                  className="absolute top-3 right-3 cursor-pointer text-lg"
                ></AiOutlineEye>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md 
               text-white"
            >
              {loading ? (
                <TbFidgetSpinner
                  className="mx-auto animate-spin"
                  size={24}
                ></TbFidgetSpinner>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            SignUp with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleLogin}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
