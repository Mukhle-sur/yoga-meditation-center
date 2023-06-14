import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
// import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAddClass = () => {
  const { user } = useAuth();
  // const [axiosSecure]=useAxiosSecure()
  const { refetch, data: addClasses = [] } = useQuery({
    queryKey: ["addClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://yoga-meditation-server-ruby.vercel.app/studentAddClasses?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [addClasses,refetch]
};

export default useAddClass;
