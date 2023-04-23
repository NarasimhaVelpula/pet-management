
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Pet from './Pages/Pet/Pet'
import PetList from './Components/Petlist';
import MedicalHistory from './Pages/MedicalHistory';
import Doctor from './Pages/Pet/Pages/Doctor';
import Allergies from './Pages/Allergies';
import Vaccination from './Pages/Vaccination';
import Medicine from './Pages/Medicine';
import Room from './Pages/Room'
import Records from './Pages/Records';
import PostCare from './Pages/PostCare';
import Bill from './Pages/Bill';
//import { Room } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            
            <Route path="/" element={<Home />} >
                <Route path="/" element={<PetList />} />
                <Route path="pet/:petId" element={<Pet />} >
                    <Route path="medicalHistory" element={<MedicalHistory />} />
                    <Route path="medicine" element={<Medicine />} />
                    <Route path="doctors" element={<Doctor />}/>
                    <Route path="allergies" element={<Allergies />} />
                    <Route path="records" element={<Records />} />
                    <Route path="vaccination" element={<Vaccination />} />
                    <Route path="room" element={<Room/>} />
                    <Route path="postcare" element={<PostCare/>} />
                    <Route path="bill" element={<Bill/>} />
                  </Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
