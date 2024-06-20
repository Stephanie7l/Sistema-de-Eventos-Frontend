import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import ManageEvents from './Pages/ManageEvents/ManageEvents';
import Portifolio from './Pages/Portifolio/Portifolio';
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />}/>
        <Route path="gerenciar-eventos" element={<ManageEvents />}/>
        <Route path="eventos" element={<Events />}/>
        <Route path="portifolio" element={<Portifolio />}/>
        <Route path="contato" element={<Contact />}/>
      </Route>
    )
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }
  