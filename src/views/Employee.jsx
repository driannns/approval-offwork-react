import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffworkList } from "../store/modules/offwork/action";

const Employee = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.offwork);
  useEffect(() => {
    dispatch(fetchOffworkList());
  }, []);
  const headers = [
    "name",
    "position",
    "start date",
    "request days",
    "end date",
    "accept",
  ];
  return (
    <MainLayout>
      <p className="text-2xl font-bold text-black mb-7">Employee Dashboard</p>
      <Table headers={headers} data={data} user="employee" error={error} />
    </MainLayout>
  );
};

export default Employee;
