import React from "react";
import Modal from "./Modal";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleTimeString("id-ID", options);
};

const calculateDateGap = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceMs = Math.abs(end - start);
  const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  return differenceDays;
};

const Table = ({ headers, data, user, error, updateData }) => {
  // const showModal = (id) => {
  //   document.getElementById(`my_modal_${id}`).showModal();
  // };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {error || data.length === 0 ? (
            <tr key={data.id} className="bg-white border-b">
              <th
                colSpan="6"
                scope="row"
                className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {error ? error : "Data Empty"}
              </th>
            </tr>
          ) : (
            data.map((rowData) => (
              <tr key={rowData.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {rowData.name}
                </th>
                <td className="px-6 py-4">{rowData.position}</td>
                <td className="px-6 py-4">{formatDate(rowData.start_date)}</td>
                <td className="px-6 py-4">
                  {calculateDateGap(rowData.start_date, rowData.end_date)} days
                </td>
                <td className="px-6 py-4">{formatDate(rowData.end_date)}</td>
                <td className="px-6 py-4 font-medium">
                  {rowData.status === "accept" ? (
                    <div className="p-1 border w-fit rounded-md border-[#7FC008] text-[#7FC008]">
                      {rowData.status}
                    </div>
                  ) : rowData.status === "deny" ? (
                    <div className="p-1 border w-fit rounded-md border-[#FF0000] text-[#FF0000]">
                      {rowData.status}
                    </div>
                  ) : rowData.status === "pending" ? (
                    user === "employee" ? (
                      <div className="p-1 border w-fit rounded-md border-[#FFC700] text-[#FFC700]">
                        {rowData.status}
                      </div>
                    ) : (
                      <React.Fragment>
                        <button
                          className="p-1 border w-fit rounded-md border-[#FFC700] text-[#FFC700]"
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${rowData.id}`)
                              .showModal()
                          }
                        >
                          {rowData.status}
                        </button>
                        <Modal
                          id={rowData.id}
                          name={rowData.name}
                          updateData={updateData}
                        />
                      </React.Fragment>
                    )
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
