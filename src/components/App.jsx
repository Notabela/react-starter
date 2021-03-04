import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { add } from 'utils';
import 'styles/App.scss';

const App = () => {
  const [value, setValue] = React.useState("React");

  return (
    <div className="App">
    <header className="App-header">
      <Logo className="App-logo" />
      <h1 className="App-win">{ add('This is', value) }!</h1>
      <button
        className="App-button"
        onClick={ () => setValue({ React: 'CSC 59939', 'CSC 59939': 'React' }[value]) }
      >
        Toggle
      </button>
    </header>
    </div>
  )
}

export default App;
