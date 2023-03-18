import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDevices from "./pages/Devices/AddDevices/AddDevices";
import DeleteDevices from "./pages/Devices/DeleteDevices/DeleteDevices";
import ViewDevices from "./pages/Devices/ViewDevices/ViewDevices";
import AddLocations from "./pages/Locations/AddLocations/AddLocations";
import DeleteLocations from "./pages/Locations/DeleteLocations/DeleteLocations";
import EditLocations from "./pages/Locations/EditLocations/EditLocations";
import ViewLocations from "./pages/Locations/ViewLocations/ViewLocations";


function App() {
  return (
    // <div className="App">
    //   {/* <AddLocations/> */}
    //   {/* <ViewLocations/> */}
    //   {/* <EditLocations/> */}
    //   {/* <DeleteLocations/> */}
    //   {/* <AddDevices/> */}
    //   {/* <DeleteDevices/> */}
    //   <ViewDevices/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<ViewLocations />} />
        <Route path="/addlocations" element={<AddLocations />} />
        <Route path="/adddevices" element={<AddDevices />} />
        <Route path="/editlocations" element={<EditLocations />} />
        <Route path="/viewdevices" element={<ViewDevices />} />
        <Route path="/deletelocations" element={<DeleteLocations />} />
        <Route path="/deletedevices" element={<DeleteDevices />} />
      </Routes>
    </Router>
  );
}

export default App;
