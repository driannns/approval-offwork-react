import { Sidebar } from "../components/Sidebar";

const MainLayout = (props) => {
  return (
    <Sidebar>
      <div className="w-full p-10 font-museosans">{props.children}</div>
    </Sidebar>
  );
};

export default MainLayout;
