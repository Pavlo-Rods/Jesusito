
import './App.css';
import Title from './common/components/Title';
import Principal from './static/images/Casa.jpg'

function App() {
  return (
    <div className="App">
      <Title/>
        <img src={Principal} style={{ height: 250, width: 500 }}/>
        <p>
          Breve historia sobre jmm.
        </p>
        <br/><br/><br/><br/>
        <p>
          Aunque seas un puto petardo te amo Jesusin.
        </p>
    </div>
  );
}

export default App;
