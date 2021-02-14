import './App.css';
import Character from './components/Character.js'
// import homeButton from './assets/dashboard/home_button.png';
import classPeriod from './assets/dashboard/class_period.png';

import Lesson from './components/Lesson.js'
import ProgressTracking from './components/ProgressTracking.js'
import Donation from './components/Donation.js'

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        {/* <button type="submit" className='home-button'><img src={homeButton} alt="Home"/></button> */}
        {/*<img src={homeButton} className='home-button' alt="Home"/>*/}
        <Donation />
        <div className="class-period"><img src={classPeriod} className="class-period" alt="class period"/></div>
        <ProgressTracking/>
        <Lesson/>
      </div>
    </div>
  );
}

export default App;
