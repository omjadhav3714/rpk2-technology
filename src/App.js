import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
const Login = lazy(() => import('./Components/Login'));
const Signup = lazy(() => import('./Components/Signup'));
const Navbar = lazy(() => import('./Components/Home/nav'));
const Home = lazy(() => import('./Components/Home'));
const Contact = lazy(() => import('./Components/Contact/contact'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  return (<div>
    <Suspense fallback={
  
<div className="load">
<h1>Loading

<div class="dots"><span class="dot z"></span><span class="dot f"></span><span class="dot s"></span><span class="dot t"><span class="dot l"></span></span></div>
</h1></div>
}>
  <Navbar/>

    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>

  <Footer/>
      </Suspense>
{/* <Navbar/>
<Hero/>
<Slider />
<Footer /> */}
</div>
    );
}

    export default App;
