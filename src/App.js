import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetUps from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUps />} />
          <Route path="/new-meetup" element={<NewMeetUp />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
