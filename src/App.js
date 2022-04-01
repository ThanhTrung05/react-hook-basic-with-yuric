import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
const App = () => {
  let name = 'Yuric'

  let obj = { name: 'Yuric', chanel: 'Hoi Dan IT' }
  let link = 'https://github.com/ThanhTrung05/react-hook-basic-with-yuric/tree/dev'
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name} in {obj.chanel}</h1>
        {/* <a href={link}>Visit my channel</a> */}
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
}

export default App;
