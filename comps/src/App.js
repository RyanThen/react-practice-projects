import Dropdown from './components/Dropdown';
// import Button from './components/Button';

function App() {
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'}
  ]

  return (
    <div className="App">

      <Dropdown options={options} />

    </div>
  );
}

export default App;
