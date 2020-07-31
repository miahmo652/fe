import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import './App.css';
import axios from "axios";
import InstructorSignUp from './components/instructorSignUp';
import InstructorSignIn from './components/instructorSignIn';
import InstructorConfirmation from './components/instructorConfirmation';
import Form from "./clientReg";
import Login from './components/login';
import Home from "./home";
import Confirmation from './confirmation';
import ClassList from './components/ClassList'
import AddClass from './components/AddClass'
import ClassEdit from './components/ClassEdit'
import About from './about';

function App(props) {
 

  const [dataPic, setdataPic] = useState({ img: '' });
  const [instructorData, setInstructorData] = useState(
    {
      email: '',
      password: '',
      verifyPW: '',
      Specialty: '',
      phoneNumber: '',
      daysAvailable: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      },
      TimesofDayAvailable: {
        EarlyMorning: false,
        LateMorning: false,
        EarlyAfternoon: false,
        LateAfternoon: false,
        EarlyEvening: false,
        LateEvening: false
      },
      terms: ''

    });
 const [newMember, setNewMember]=useState([{
    Full_Name:"",
    Email:"",
    Phone_Number:"",
    Pref_Cont_Meth:"",
    Username:"",
    Password:"",
    Verify_Pass:"",
    Age_Group:"",
    Goals:"",
    Mon:false,
    Tues:false,
    Wed:false,
    Thurs:false,
    Fri:false,
    Sat:false,
    Sun:false,
    Mornings:false,
    Noon:false,
    Evenings:false,
    Nights:false,
    Terms:false}]

);
  
const clientDataSetup=(data)=>{setNewMember({...newMember,Full_Name:data.Full_Name,
Email:data.Email,
Phone_Number:data.Phone_Number,
Username:data.Username,
Password:data.Password})}

  // const newMember={newMember};
  // const setNewMember={setNewMember};

//   function test(data){
   
// setNewMember(data)
// console.log("works",newMember)
//   }

  const instructorDataSetup = (Data) => {


    setInstructorData({

      ...instructorData,
      email: Data.email,
      password: Data.password,
      verifyPW: Data.verifyPW,
      Specialty: Data.Specialty,
      phoneNumber: Data.phoneNumber,
      daysAvailable: Data.daysAvailable,
      TimesofDayAvailable: Data.TimesofDayAvailable,
      terms: Data.terms

    });

  }

  /* useEffect(() => {

    axios.get("https://api.unsplash.com/photos/random?client_id=uSU0O0qzwu23MITwAOwk2HsnTU-62R4sN7_oKX0nFEg")
      .then(res => {

        console.log('res', res.data.urls.regular);
        setdataPic({
          ...dataPic,
          img: res.data.urls.regular
        });



      })

  }, [])

  useEffect(() => {
    console.log('dataPic', dataPic)
  }, [dataPic])

*/

  // const [newMember, setNewMember]=useState([]);

  return (

    <div className="App">

      <h1>Anywhere Fitness</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/classList"> classList</Link>
        <Link to="/addClass">Add Class</Link>
        
      </nav>
      {console.log("Member Data",newMember)}



      <Switch>
        
          <Route exact path="/clientReg">
          <Form newMember={newMember} setNewMember={setNewMember} 
          clientDataSetup={clientDataSetup} 
          />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirmation">
          {console.log("new",newMember)}
          <Confirmation newMember={newMember}  
          clientDataSetup={clientDataSetup}
          />
        </Route>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>

        <Route path="/instructorSignUp">
          <InstructorSignUp instructorDataSetup={instructorDataSetup} dataPic={dataPic} />
        </Route>

        <Route path="/instructorSignIn" >
          <InstructorSignIn instructorDataSetup={instructorDataSetup} dataPic={dataPic} />
        </Route>

        <Route path="/instructorConfirmation" >

          <InstructorConfirmation instructorData={instructorData} dataPic={dataPic} />
        </Route>
        <Route render={(props)=><ClassList {...props} />}exact path ="/classList">
          
        </Route>
        <Route exact path ="/addClass">
          <AddClass />
        </Route>
       <Route exact path ="/classEdit/:id">
         <ClassEdit />
       </Route>
      </Switch>



    </div>


  );
}

export default App;




   /*  <Router>
    
      <h1>Anywhere Fitness</h1>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to ="/classList">Class List</Link>
      </ul>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/confirmation" component={Confirmation}/>
      {/* <button><Link to="/clientReg">Sign up</Link></button>
      <button><Link to="/login">Login</Link></button>
    
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/> 
      
      
    </Router>
  */
