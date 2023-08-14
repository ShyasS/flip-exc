import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import {Catagory} from './components/CatagoryComponent/CatagoryComponent';
import {Swipper} from './components/3rdSLiderSwipper/Swiper';
import {FourthSlider} from './components/4thSlider/FourthSlide';
import MainSkel from './components/SkeletonLoader/MainSkel';
import { Example } from './components/Login-Page/example1';
import {Index} from './components/Examp/Index';
import { SignUp } from './components/Examp/SignUp';
import { MainfourthSlider } from './components/4thSlider/Main4thSlider';
import { ProductDetail } from './components/4thSlider/ProductDetail';
// import { SpinLoader } from './MainLoader/SpinLoader';



function App() {
  return(
<Router >
<HeaderComponent/>
<Catagory/>
<Swipper/>
<Routes>
  <Route path = "/" element = {<MainfourthSlider/>}/>
  <Route path = "/products/:id" element = {<ProductDetail/>}/>
  </Routes>
  </Router>

  );
}

export default App;
