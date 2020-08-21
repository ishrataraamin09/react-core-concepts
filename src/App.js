import React, {useState, useEffect,} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {name: "Dr. Mahfuz" ,
  //              job: "Singer"
  //           } ;
  
  // var person2 = {name:"Eva Rahman" ,
  //               job:"Kokil Konthi"
  //             } ;
  
  // var style = {color: 'lightsalmon' ,
  //             backgroundColor: 'slateblue' ,
  //             } ;

  const actors = ['Ranveer' , 'Ashish' , 'Shahid' , 'Siddharth', 'Varun', 'Emraan'] ;

  const products=[
    {name: 'Photoshop' , price:'$90.99'} ,
    {name: 'Illustrator' , price:'$60.99'} ,
    {name: 'PDF Reader' , price:'$6.99'} ,
    {name: 'Premiere El' , price:'$249.99'} 
    ] ;

    const actorsName = actors.map(actors => actors) ;
    console.log(actorsName) ;

    const productNames = products.map(products => products.name) ;
    console.log(productNames) ;
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actors.map(actor => <li>{actor}</li>)
          }
         
         {
           products.map(products => <li>{products.name}</li>)
         }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        {/* <h1 className="" style={style}>My heading : {person.name+" "+person.job}</h1>
         <h3>Singer: {person2.name+" "+person2.job}</h3> */}

         {/* <Product name={products[0].name} price={products[0].price}></Product> */}

         <Product product={products[0]}></Product>
         <Product product={products[1]}></Product>
         <Product product={products[2]}></Product>

         {/* <Person name="Naziza Khan" institute="NSU"></Person>
         <Person name="Bushra Waheedi" institute="NSU"></Person>
         <Person name="Sayma Ahmed" institute="NSU"></Person> */}

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]) //initial data empty
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}<br></br>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10) ;
  const handleIncrease = () => setCount(count + 1) ;

  const handleDecrease = () => {
    const newCount1 = count -1 ;
    setCount(newCount1) ;
  }
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props){

  const productStyle={
    border:'1px sloid gray' ,
    borderRadius:'5px' ,
    backgroundColor:'lightgray' ,
    height:'200px' ,
    width:'200px' ,
    float:'left' 
  }

  const {name , price} = props.product ;
  return (
    <div style={productStyle}>
      <h3> {name} </h3>
       <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
  <div style={{border:'2px solid red', margin:'10px', boxShadow:'5px 5px 10px white', borderRadius:'10px', width:'400px'}}>
    <h1>Name: {props.name}</h1>
    <h3>Student at {props.institute}</h3>
  </div>
  )
}


export default App;
