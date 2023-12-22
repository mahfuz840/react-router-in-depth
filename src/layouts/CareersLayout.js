import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return (
        <div className="career-layout">
          <h2>Career</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
          
          <Outlet />
        </div>
      );
}

export default CareersLayout;