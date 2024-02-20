import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOffworkList,
  updateOffworkList,
} from "../store/modules/offwork/action";
import Alert from "../components/Alert";

const Home = () => {
  const dispatch = useDispatch();
  const [alertShow, setAlertShow] = useState(false);
  const { loading, data, message, error } = useSelector(
    (state) => state.offwork
  );

  const updateData = (id, status) => {
    dispatch(updateOffworkList(id, status));
  };

  useEffect(() => {
    dispatch(fetchOffworkList());
  }, []);

  useEffect(() => {
    if (message) {
      setAlertShow(true);
      const timer = setTimeout(() => {
        setAlertShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const headers = [
    "name",
    "position",
    "start date",
    "request days",
    "end date",
    "accept",
  ];

  return (
    <React.Fragment>
      <MainLayout>
        <p className="text-2xl font-bold text-black mb-7">Manager Dashboard</p>
        <Table
          headers={headers}
          data={data}
          user="manager"
          error={error}
          updateData={updateData}
        />
        {alertShow === true ? (
          <Alert variant="alert-success" value={message} />
        ) : (
          ""
        )}
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;
