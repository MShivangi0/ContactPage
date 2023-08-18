import "./App.css";
import ContactForm from "./component/ContactForm/ContactForm";
import Contactheader from "./component/Contactheader/Contactheader";
import Navigation from "./component/Navigation/Navigation";
function App(){
  return (
  <div><Navigation />
  <main className="main_container">
  <Contactheader /><ContactForm />
  </main>
  </div>
  );
};
export default App;