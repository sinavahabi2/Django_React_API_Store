import Heder from './Components/Heder'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div> 
      <Heder/>
      <Container className="py-3">
        <h1>this is a App Body</h1>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
