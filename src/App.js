import { auth, db } from "./Firebase";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useEffect,lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
const Login = lazy(() => import('./Components/Login'));
const Signup = lazy(() => import('./Components/Signup'));
const Navbar = lazy(() => import('./Components/Home/nav'));
const Home = lazy(() => import('./Components/Home'));
const Contact = lazy(() => import('./Components/Contact/contact'));
const About = lazy(() => import('./Components/About/about'));
const Footer = lazy(() => import('./Components/Footer'));
const AdminRoute =lazy(() => import('./routes/AdminRoute'));
function App() {

  const dispatch = useDispatch()
  var separatedString1;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        await db.collection('users')
    // .where('uid', '==', user.email)
    .doc(user.email)
   .get()
   .then(doc => {
      if (doc && doc.exists) {
          separatedString1 = doc.data();
         //use separatedString1
      }
   }).catch((error) => {
        console.log(error);
      })
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER2",
              payload: {
                name: separatedString1.email.split("@")[0],
                email: separatedString1.email,
                token: idTokenResult.token,
                role: separatedString1.role,
                // id: res.data.id,
              },
            });
          })
          .catch();
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  
  return (<div>
    <Suspense fallback={
  
<div className="load">
<h1>Loading

<div class="dots"><span class="dot z"></span><span class="dot f"></span><span class="dot s"></span><span class="dot t"><span class="dot l"></span></span></div>
</h1></div>
}>
  <Navbar/>

    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      
      <AdminRoute exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
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
