import { Navbar } from "../Navbar/Navbar";
import { Crew } from "../Crew/Crew";
import { Destination } from '../Destination/Destination';
import { Home } from '../Home/Home';
import { Tecnology } from '../Tecnology/Tecnology';
function App(props) {
  return (
    <main className="main">
      <Navbar/>
      <Crew/>
      <Destination/>
      <Home/>
      <Tecnology/>
    </main>
  );
}

export { App };
