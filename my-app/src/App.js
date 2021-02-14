import './App.css';
import Character from './components/Character.js'
// import homeButton from './assets/dashboard/home_button.png';
import classPeriod from './assets/dashboard/class_period.png';
import endClassButton from './assets/dashboard/end_class_button.png';
import Lesson from './components/Lesson.js'
import ProgressTracking from './components/ProgressTracking.js'

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        {/* <button type="submit" className='home-button'><img src={homeButton} alt="Home"/></button> */}
        {/*<img src={homeButton} className='home-button' alt="Home"/>*/}
        <div className="class-period"><img src={classPeriod} className="class-period" alt="class period"/></div>
        <ProgressTracking/>
        <Lesson/>

        <img src={endClassButton} className="end-class-button" alt="end class"/>
        <Character/>

      </div>
    </div>
  );
}

export default App;
