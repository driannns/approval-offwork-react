import { NavLink } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center bg-[#D9D9D9]">
        {props.children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content font-museosans">
          {/* Sidebar content here */}
          <li className="text-center text-2xl font-bold text-[#5D7285] my-4">
            Off Work
          </li>
          <li className="mb-2">
            <NavLink
              key="homemanager"
              to="/"
              className={({ isActive }) => {
                return (
                  "text-lg hover:bg-[#E9F5FE] hover:text-[#0C7FDA] transition-all " +
                  (!isActive
                    ? "text=[#5D7285]"
                    : "text-[#0C7FDA] bg-[#E9F5FE] font-semibold")
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Manager Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              key="homeemployee"
              to="/employee"
              className={({ isActive }) => {
                return (
                  "text-lg hover:bg-[#E9F5FE] hover:text-[#0C7FDA] transition-all " +
                  (!isActive
                    ? "text=[#5D7285]"
                    : "text-[#0C7FDA] bg-[#E9F5FE] font-semibold")
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Employee Dashboard
            </NavLink>
          </li>
          <li className="">
            <NavLink
              key="offwork"
              to="/offwork"
              className={({ isActive }) => {
                return (
                  "text-lg hover:bg-[#E9F5FE] hover:text-[#0C7FDA] transition-all " +
                  (!isActive
                    ? "text=[#5D7285]"
                    : "text-[#0C7FDA] bg-[#E9F5FE] font-semibold")
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Offwork
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
