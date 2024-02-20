import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import CustomButton from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createOffworkList } from "../store/modules/offwork/action";
import Alert from "../components/Alert";

const Offwork = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const { loading, error, message } = useSelector((state) => state.offwork);

  useEffect(() => {
    if (message || error) {
      setAlertShow(true);
      const timer = setTimeout(() => {
        setAlertShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  const onSubmit = (e) => {
    e.preventDefault();
    const startDated = new Date(startDate);
    const endDated = new Date(endDate);
    const formatedStartDate = `${startDated.toISOString().slice(0, 19)}Z`;
    const formatedEndDate = `${endDated.toISOString().slice(0, 19)}Z`;
    dispatch(
      createOffworkList(
        name,
        position,
        formatedStartDate,
        formatedEndDate,
        "pending"
      )
    );
    setName("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setShowAlert(true);
  };

  return (
    <MainLayout>
      <p className="text-2xl font-bold text-black">Off Work</p>
      <form className="bg-white rounded-md p-3 mt-5 w-1/2" onSubmit={onSubmit}>
        <label className="form-control w-full bg-white border-gray-600">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white border-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="form-control w-full bg-white border-gray-600">
          <div className="label">
            <span className="label-text">What is your position?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white border-gray-600"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="form-control w-full bg-white border-gray-600">
          <div className="label">
            <span className="label-text">Start Date?</span>
          </div>
          <input
            type="datetime-local"
            placeholder="Type here"
            className="input input-bordered w-full bg-white border-gray-600"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">End Date?</span>
          </div>
          <input
            type="datetime-local"
            placeholder="Type here"
            className="input input-bordered w-full bg-white border-gray-600"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <div className="mt-4 flex justify-end">
          <CustomButton
            variant="btn-primary"
            value={loading ? "Loading..." : "Submit"}
            action={onSubmit}
          />
        </div>
      </form>
      {alertShow === true ? (
        <Alert
          variant={error ? "alert-error" : "alert-success"}
          value={error ? error : message}
        />
      ) : (
        ""
      )}
    </MainLayout>
  );
};

export default Offwork;
