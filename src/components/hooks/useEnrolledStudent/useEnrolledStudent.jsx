import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useEnrolledStudent = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ["enrolledClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allEnrolledClasses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [enrolledClasses, refetch];
};

export default useEnrolledStudent;
