import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const fruits = useSelector((state) => state.fruits);

  console.log(fruits);


  return (

    <div className="App-header">
      {fruits.map((item, index) => (
        <p key = {index} >{item}</p>
      ))}
    </div>
  );
}

export default App;
