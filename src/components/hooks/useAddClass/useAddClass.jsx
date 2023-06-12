import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";

const useAddClass = () => {
  const { user } = useAuth();
  const { refetch, data: addClass = [] } = useQuery({
    queryKey: ["addClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/studentAddClasses?email=${user?.email}`
      );
      console.log("student ", res);
      return res.json();
    },
  });

  return [addClass,refetch]
};

export default useAddClass;
