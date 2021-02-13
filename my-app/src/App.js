import './App.css';
import Character from './components/Character.js'
import homeButton from './assets/dashboard/home_button.png';
import classPeriod from './assets/dashboard/class_period.png';
import xpBar from './assets/dashboard/xp_bar.png';

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <button type="submit" className='home-button'><img src={homeButton} alt="Submit"/></button>
        <div className="class-period"><img src={classPeriod}  alt="class period"/></div>
        <img src={xpBar} className="xp-bar" alt="class period" />                              
        <Character />
      </div>
    </div>
  );
}

export default App;
