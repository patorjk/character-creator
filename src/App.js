import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{
        isolation:'isolate',
        position: 'fixed',
        top: '60%',
        backgroundColor: 'hsl(195deg, 20%, 86%)',
        height: '40%',
        width: '100%',
      }}>

      </div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
