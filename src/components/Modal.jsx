import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";

const Modal = ({ id, name, updateData }) => {
  const dispatch = useDispatch();

  const handleUpdate = (id, status) => {
    updateData(id, status);
  };

  return (
    <React.Fragment>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center text-black">
            Approval Off Work for {name}
          </h3>
          <div className="flex justify-center gap-4 mt-5">
            <Button
              value="Decline"
              variant="btn-error text-white"
              action={() => handleUpdate(id, "deny")}
            />
            <Button
              value="Approve"
              variant="btn-success text-white"
              action={() => handleUpdate(id, "accept")}
            />
          </div>
        </div>
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
