import Button from './components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const handleClick = () => {
  console.log('button clicked!!')
}

function App() {
  return (
    <div className="App">
      <p>App component</p>
      
      <div>
        <Button onClick={handleClick} primary>
          <GoBell />
          Testing 1
        </Button>
      </div>

      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Testing 2
        </Button>
      </div>

      <div>
        <Button success>
          <GoDatabase />
          Testing 3
        </Button>
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
