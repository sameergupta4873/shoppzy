
import './App.css';
import Footer from './components/Footer'
import {Container , Rows , Cols} from 'react-bootstrap'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <>
    <Router>
      <Header />
      <Container>
      <main>
        <Container>
          <Routes>
            <Route exact path='/login' element={<LoginScreen/>}/>
            <Route exact path='/' element={<HomeScreen/>}/>
            <Route exact path='/cart' element={<CartScreen/>}/>
            <Route exact path='/cart/:id' element={<CartScreen/>}/>
            <Route exact path='/product/:id' element={<ProductScreen/>}/>
          </Routes>
        </Container>
      </main>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
