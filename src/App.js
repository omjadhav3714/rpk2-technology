import { auth, db } from "./Firebase";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useEffect,lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import Itemdetail from "./Components/Home/Itemdetail";
import Edititem from "./Components/Home/Edititem";
import ReadTestimonial from "./Components/Home/ReadTestimonial";
import Changerole from "./admin/Changerole";
import Addcomplaient from "./admin/client/complaient/Addcomplaient";
import ClientRoute from "./routes/ClientRoute";
import Compdetail from "./admin/client/complaient/Compdetail";
import Showcomplaient from "./admin/showcomplaient/Showcomplaient";
import Showclientcomplaient from "./admin/showcomplaient/Showcomplaient";
import Innerdetail from "./admin/showcomplaient/Innerdetail";
import Editdecesion from "./admin/showcomplaient/Editdecesion";

// const Displayitem = lazy(() => import("./Components/Home/Displayitem"));

const Complaientview = lazy(() => import("./admin/client/complaient/Complaientview"));
const Clientnav = lazy(() => import("./admin/client/complaient/Clientnav"));
const Additems = lazy(() => import("./admin/Additems"));
const Viewitems = lazy(() => import("./admin/Viewitem"));
const Contactretrive = lazy(() => import("./admin/Contactretrive"));
const Usersretrive = lazy(() => import('./admin/Usersretrives'));

const Login = lazy(() => import('./Components/Login'));
const Signup = lazy(() => import('./Components/Signup'));
const Navbar = lazy(() => import('./Components/Home/nav'));
const Home = lazy(() => import('./Components/Home'));
const Contact = lazy(() => import('./Components/Contact/Contacts'));
const About = lazy(() => import('./Components/About/about'));
const Footer = lazy(() => import('./Components/Footer'));
const AdminRoute =lazy(() => import('./routes/AdminRoute'));
const Testimonial = lazy(() => import('./Components/testimonial/Testimonial'));
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
      <Route exact path="/testimonial" component={Testimonial} />
      <Route exact path="/contacts" component={Contact} />

      
      {/* <AdminRoute exact path="/admin/dashboard" component={Dashboard} /> */}
      <AdminRoute exact path="/admin/useretrive" component={Usersretrive} />

      <AdminRoute exact path="/admin/additems" component={Additems} />
      <AdminRoute exact path="/admin/viewitems" component={Viewitems} />
      <AdminRoute exact path="/admin/contactretrive" component={Contactretrive} />
      <AdminRoute exact path="/admin/edititem/:id" component={Edititem} />
      <AdminRoute exact path="/admin/changerole/:id" component={Changerole} />
      <AdminRoute exact path="/admin/complaient" component={Showclientcomplaient} />
      <AdminRoute exact path="/admin/viewuserdet/:id" component={Innerdetail} />
      <AdminRoute exact path="/admin/changedecesion/:id" component={Editdecesion} />
      

      <AdminRoute exact path="/admin/testimonial" component={ReadTestimonial} />
      <ClientRoute exact path="/client/clientnav" component={Clientnav} />
      <ClientRoute exact path="/client/addcomplaient" component={Addcomplaient} />
      <ClientRoute exact path="/client/viewcomplaient" component={Complaientview} />
      <ClientRoute exact path="/client/viewdetailcom/:id" component={Compdetail} />
      
      <Route exact path="/itemdetail/:id" component={Itemdetail} />
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
