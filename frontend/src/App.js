
import './App.css';
import Title from './common/components/Title';
import Principal from './static/images/Casa.jpg'

function App() {
  return (
    <div className="App">
      <Title/>
        <div class="container">
          <img src={Principal} width="100%" />
        </div>
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
