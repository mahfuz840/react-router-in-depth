import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Error from './pages/Error';
import Careers, { careersLoader } from "./pages/career/Careers";
import CareerDetails, { careerLoader } from "./pages/career/CareerDetails";
import CareerError from "./pages/career/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError/>}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerLoader}
        />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
