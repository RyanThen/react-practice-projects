import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <div className="App">

      <br />

      <div>
        <Button className='mb-4' primary>
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

export default ButtonPage;
