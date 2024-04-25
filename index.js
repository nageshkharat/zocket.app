import React from 'react';
import ReactDOM from 'react-dom';
import CanvasEditor from './CanvasEditor'; // Assuming the file is named CanvasEditor.js
// import ColorCircles from './ColorCircles';


ReactDOM.render(
  <React.StrictMode>
    <CanvasEditor />
    {/* <ColorCircles/> */}
  </React.StrictMode>,
  document.getElementById('root')
);











// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// root.render(<App/>);
// root.render(
//   <App />
// );

// //imperative programming
// document.getElementById("root").style.textDecoration= "line-through";


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// let isLoggedIn = true;

// //ternary operators
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     {isLoggedIn===true ? (
//       <h1>Hello User</h1>
//     ):(
//       <div>
    
//   <input placeholder="email"/>
//   <input placeholder="password"/>
//   <button>login</button>
// </div>
//     )}
// </div>
// );


// CanvasHandler.js





// ************************************8888888888888888888888888888888***********************

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDom from "react-dom/client";
// import './index.css';
// // JSX = Javascript XML extension

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <div style={{backgroundColor: "red"}}>
//     <h1>Hello</h1>
//     <p>Hi how are you....</p>
//     <ul>
//       <li>Apple</li>
//       <li>Orange</li>
//       <li>Banana</li>
//       <li>Mango</li>
//     </ul>
//   </div>
// );

// // const root = document.createElement("h1");
// // root.innerHTML = "Hello from DOM";
// // document.getElementsById("root").appendChild(root);

// ****************************************************************************************************

  // import React from "react";
  // import ReactDOM from "react-dom/client";
  // import "./index.css";
  // import Chapter from "./new";
  // import Card  from "./card";
 

  // let bookName = "The Little Stars";
  // let greeting = "";
  


  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(
  //   <div className="bookIndex">
  //     <h1 style={{color:"blue", textTransform: "uppercase" }}>
  //       {bookName}
  //       </h1>
  //       <Card image="https://fastly.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU" name="Prince"/>
  //       <Card image="https://fastly.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU" name="Kumar"/>
  //       <Card image="https://fastly.picsum.photos/id/87/200/300.jpg?hmac=YgijkxA35wxtPYqEsxGObDtNAlK3MVmNNb8ZH8IX1Rs" name="King"/>
  //       <Chapter chapterName="Chapter 1" pageNumber="1" />
  //       <Chapter chapterName="Chapter 2" pageNumber="20" />
  //       <Chapter chapterName="Chapter 3" pageNumber="30" />
  //       <Chapter chapterName="Chapter 4" pageNumber="40" />
  //       <Chapter chapterName="Chapter 5" pageNumber="50" />
  //       <Chapter chapterName="Chapter 6" pageNumber="60" />
  //       <Chapter chapterName="Chapter 7" pageNumber="70" />
  //       <Chapter chapterName="Chapter 8" pageNumber="80" />
  //       <Chapter chapterName="Chapter 9" pageNumber="90" />
  //       <Chapter chapterName="Chapter 10" pageNumber="100" />
        
        
  //   </div>
  // );

  // ***********************************************************************

  // import React from "react";
  // import ReactDOM from 'react-dom/client';
  // import "./index.css";
  // import Person from "./person";
  // import contacts from "./contact";

  // const number = [1,2,3,4];

  // function run(x){
  //   console.log(x);
  // }

  // let ans = number.map(run);
  // console.log(ans);

  // function input(user){
  //   return(
  //     <Person
  //     id={user.id}
  //     name={user.name}
  //     image={user.imgURL}
  //     phone={user.phone}
  //     email={user.email}
      
  //     />
  //   );
  // }

  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(
  // <div className="phoneBook">
  //   <h1>My Phone Directory</h1>
  //   {contacts.map(input)}
  // </div>
  
  // )