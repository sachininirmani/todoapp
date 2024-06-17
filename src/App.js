import './App.css';
import Test01 from './Components/Test01';

const myarr = [
  {
      name: "namal",
      city: "malabe",
      position: "web dev",
  
  },
  {
      name: "kamal",
      city: "colombo",
      position: "react dev",
  
  },
  {
      name: "neela",
      city: "mathara",
      position: "devop",
  
  },
  {
      name: "namali",
      city: "jaffna",
      position: "frontend dev",
  
  },
]

function App() {
  return (
    <div>
      <h5>using given params</h5>
      <Test01  name="nirmani" city="maharagama" position="student"/>
      <Test01  name="viruli" city="kaagalla" position="student"/>
      
      <h5>map function</h5>
      {myarr.map((objele) => {
        return(
          <p>hello {objele.name}</p>
        )
      })
      }
      
      <h5>map function and object elements in array</h5>
      {myarr.map((objele) => {
        return(
          <Test01  name={objele.name} city={objele.city} position={objele.position}/>
        )
      })
      }

      <h5>map function and object elements in array with object destructure</h5>
      {myarr.map(({name, city, position}) => {
        return(
          <Test01  name={name} city={city} position={position}/>
        )
      })
      }


    </div>
  );
}

export default App;
