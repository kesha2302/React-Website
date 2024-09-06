import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';

import Prac1 from './Components/Prac1';
import Prac2 from './Components/Prac2';
import Prac3 from './Components/Prac3';
import Prac4 from './Components/Prac4';

import ClickEvent from './Components/ClickEvent';
import ClickEvent2 from './Components/ClickEvent2';
import FunProp from './Components/FunProp';
import ClassProp from './Components/ClassProp';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import ClassState from './Components/ClassState';
import Prac5 from './Components/Prac5';
import Prac6 from './Components/Prac6';
import Prac7 from './Components/Prac7';
import Prac8 from './Components/Prac8';
import SetState from './Components/SetState';
import Inlinecss from './Components/Inlinecss';
// import './Components/mystyle.css';
import Externalcss from './Components/Externalcss';
import Prac9 from './Components/Prac9';
import Prac10 from './Components/Prac10';
import Prac11 from './Components/Prac11';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Footer from './Components/Footer';
import EventBinding from './Components/EventBinding';
import Prac12 from './Components/Prac12';
import Prac13 from './Components/Prac13';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageCarousel from './Components/Carousel';
import UncontrolledExample from './Components/Carousel';
import Carousel1 from './Components/Carousel';
import List from './Components/List';
import List2 from './Components/List2';
import Products from './Components/Products';
import PParentcomp from './Components/PParentcomp';
import Pcomponent from './Components/Pcomponent';
import Prac14 from './Components/Prac14';
import Prac15 from './Components/Prac15';
import MultiCarousel from './Components/MultiCarousel';
import Fragment from './Components/Fragment';
import Prac16 from './Components/Prac16';
import Prac17 from './Components/Prac17';
import LifeCycle1 from './Components/LifeCycle1';
import LifeCycle3 from './Components/LifeCycle3';
import Prac18 from './Components/Prac18';
import Prac19 from './Components/Prac19';
import Prac20 from './Components/Prac20';
import ErrorBoundary from './Components/ErrorBoundary';
import Prac21 from './Components/Prac21';
import FwrParent from './Components/FwrParent';
import Prac22 from './Components/Prac22';
import Prac23 from './Components/Prac23';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookArray from './Components/HookArray';
import Effect1 from './Components/Effect1';
import Effect2 from './Components/Effect2';
import Effect3 from './Components/Effect3';
import UseRefHook from './Components/UseRefHook';
import UseMemoHook from './Components/UseMemoHook';
import CallBackHook from './Components/CallBackHook';
import UseLayout from './Components/UseLayout';
import ContextProvider from './Context/AppContext';
import CProfile from './Components/CProfile';
import CFooter from './Components/CFooter';
import DataFetching from './Components/DataFetching';

import DocTitle2 from './Components/DocTitle2';
import DocTitle1 from './Components/DocTitle1';
import DataDisplay from './Components/DataDisplay';
import Profile from './Components/Profile';
import Admindashboard from './AdminPanel/Admindashboard';
import AdminProduct from './AdminPanel/AdminProduct';
import AdminUser from './AdminPanel/AdminUser';
import AdminProductForm from './AdminPanel/AdminProductForm';


function App() {
  const number="12"
  return (
    <div className="App">

      {/* <Navbar/> */}
      {/* <DataDisplay/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        <Route path='/Admindashboard' element={<Admindashboard/>}/>
        <Route path='/AdminProduct' element={<AdminProduct/>}/>
        <Route path='/AdminUser' element={<AdminUser/>}/>
        <Route path='/ProductForm' element={<AdminProductForm/>}/>
      </Routes>
      {/* <Footer/> */}
      
      {/* <Prac5/> */}
      {/* <Prac6/> */}
      {/* <Prac7 name="Kesha" lastname="Patel" other={{email:"xyz@email.com", address:"10,fyugghu"}}/> */}
      {/* <Prac7 name="Kinjal" lastname="Shah"/> */}

      {/* <Prac8 name="Kesha"/> */}

      {/* <Prac9/> */}
      {/* <Prac10/> */}
      {/* <Prac11 paragraph={true}/> */}
      {/* <EventBinding/> */}

       {/* <HomePageCarousel/> */}
      {/* <UncontrolledExample/> */}

      {/* <Prac12/> */}
      {/* <Prac13/> */}
      {/* <Pcomponent/> */}
      {/* <Prac14/> */}
      {/* <Prac15/> */}

         {/* <MultiCarousel/> */}
         {/* <Prac17/> */}
      {/* <Fragment/>
      <Prac16/> */}
       {/* <LifeCycle1/> */}
      {/* <LifeCycle3/> */}
      {/* <Prac18/> */}
      {/* <Prac19/> */}
      {/* <ErrorBoundary>
      <Prac20 name="Apple"/>
      <Prac20 name="Orange"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Prac20 name="Broccoli"/>
      </ErrorBoundary> */}

        {/* <Prac21/> */}
      {/* <FwrParent/> */}
      {/* <Prac22/>
      <Prac23/> */}

       {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookArray/> */}
      {/* <Effect1/> */}
      {/* <Effect2/> */}
      {/* <Effect3/> */}
      {/* <UseRefHook/>
      <UseMemoHook/> */}
      {/* <CallBackHook/> */}
      {/* <UseLayout/> */}

      {/* <ContextProvider>
        <CProfile/>
        <CFooter/>
      </ContextProvider> */}

      {/* <DataFetching/> */}
{/* 
      <DocTitle1/>
      <DocTitle2/> */}
    
     
    

    </div>
  );
}

export default App;
