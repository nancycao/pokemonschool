import './App.css';
import Character from './components/Character.js'
import homeButton from './assets/dashboard/home_button.png';
import classPeriod from './assets/dashboard/class_period.png';
import xpBar from './assets/dashboard/xp_bar.png';
import endClassButton from './assets/dashboard/end_class_button.png';
import pikachu from './assets/dashboard/pikachu.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        {/* <button type="submit" className='home-button'><img src={homeButton} alt="Home"/></button> */}
        <img src={homeButton} className='home-button' alt="Home"/>
        <div className="class-period"><img src={classPeriod} className="class-period" alt="class period"/></div>
        <img src={xpBar} className="xp-bar" alt="experience bar" />

        // documentation for ProgressBar API
        // https://react-bootstrap.github.io/components/progress/
        <ProgressBar animated now={45} />

        <div className="iframe">
          <iframe
            src="https://docs.google.com/presentation/d/1_hcFnYqoaWyBTeXkTZkPQCCVokI_FKuTC1mSs6Iav6c/edit?usp=sharing"
            frameborder="0"
            width="800"
            height="600"
          ></iframe>
        </div>

        <img src={endClassButton} className="end-class-button" alt="end class"/>
        <Character/>

      </div>
    </div>
  );
}

export default App;
