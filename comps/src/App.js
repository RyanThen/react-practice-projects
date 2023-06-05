import Accordion from './components/Accordion';
// import Button from './components/Button';

function App() {
  const items = [
    {
      label: 'Can I use React on any project?',
      content: 'Lorem ipsum dolor set idum loret issum. Lorem ipsum dolor set idum loret issum.',
      id: 1
    },
    {
      label: 'When is React a good choice?',
      content: 'Lorem ipsum dolor set idum loret issum. Lorem ipsum dolor set idum loret issum.',
      id: 2
    },
    {
      label: 'How popular is React?',
      content: 'Lorem ipsum dolor set idum loret issum. Lorem ipsum dolor set idum loret issum.',
      id: 3
    }
  ]

  return (
    <div className="App">

      <Accordion items={items} />

    </div>
  );
}

export default App;
