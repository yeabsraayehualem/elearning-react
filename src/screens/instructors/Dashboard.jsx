import Header from "../../components/instructors/Header"
import Profile from '../../assets/images/profile.png';
import Sidebar from "../../components/instructors/Sidebar";
const Dashboard = () => {
  return (
    <>
   
    <Header name="Yeab" nots="3" pic = {Profile} />
   <Sidebar />
     </>
  )
}

export default Dashboard