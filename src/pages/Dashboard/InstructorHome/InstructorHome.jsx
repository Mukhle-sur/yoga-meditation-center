import useAuth from "../../../components/hooks/useAuth/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        {user?.displayName}, This your dashBoard{" "}
        <span className="text-red-300">Now Start Your Work!!</span>
      </h1>
    </div>
  );
};

export default InstructorHome;
