import { useQuery } from "@tanstack/react-query";
import useAuth from "../../components/hooks/useAuth/useAuth";
import useAxiosSecure from "../../components/hooks/useAxiosSecure/useAxiosSecure";
import ApprovedClassCard from "./ApprovedClassCard";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data: classes = [] } = useQuery({
    queryKey: ["approvedClasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/allApprovedClasses");
      return res.data;
    },
  });
  console.log("approved", classes);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-28">
      {classes.map((approvedClass) => (
        <ApprovedClassCard
          key={approvedClass._id}
          approvedClass={approvedClass}
        ></ApprovedClassCard>
      ))}
    </div>
  );
};

export default AllClasses;
