
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import DisplayData from './DisplayData';
import ShowFiles from './ShowFiles';

function App() {
//const [fileName, setFileName] = useState('');
//const [fileContent, setFileContent] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Nav />
      <ShowFiles/>
      <DisplayData />
      <Footer />     
    </div>
  );
}

export default App;
