import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <p>App component</p>
      
      <div>
        <Button primary>Testing 1</Button>
      </div>

      <div>
        <Button secondary rounded>Testing 2</Button>
      </div>

      <div>
        <Button success>Testing 3</Button>
      </div>

      <div>
        <Button warning rounded>Testing 4</Button>
      </div>

      <div>
        <Button danger>Testing 5</Button>
      </div>

    </div>
  );
}

export default App;
