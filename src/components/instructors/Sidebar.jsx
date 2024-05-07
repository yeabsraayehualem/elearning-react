import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-0 -mt-12 h-screen z-10 bg-gray-200 w-64 p-4">
        <div className="mb-5 mt-2">Logo</div>
        <div className="flex flex-col">
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Dashboard</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Live Classes</div>
          <div className="py-2 bg-blue-50 rounded-lg ">  <i className="fas fa-calendar"></i> Schedules</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Quizes</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Exams</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Assignments</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Batches</div>
          <div className="py-2 bg-blue-50 rounded-lg ">   <FontAwesomeIcon icon={faHome} /> Doubts</div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
