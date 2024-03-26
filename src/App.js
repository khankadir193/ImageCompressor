import logo from './logo.svg';
import './App.css';
import { CompressComp } from './Components/CompressComp';
import ImageUploader from './Components/ImageUploader';
import gardenImage from './Components/garden.jpg';

function App() {
  return (
    <div className="App">
     {/* <CompressComp />  */}
     <ImageUploader />
    </div>
  );
}

export default App;
