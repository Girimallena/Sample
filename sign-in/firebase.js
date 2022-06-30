
// const firebaseConfig = {
//     apiKey: "AIzaSyARarJky70COsBkCnDaMTL85NKSQzOgEjw",
//     authDomain: "caramel-graph-345816.firebaseapp.com",
//     projectId: "caramel-graph-345816",
//     storageBucket: "caramel-graph-345816.appspot.com",
//     messagingSenderId: "155013284144",
//     appId: "1:155013284144:web:b28c4aa13e920a39fac8f5",
//     measurementId: "G-X6H49F0W97"
// };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);






function signup(){
  console.log("Inside fn")
  window.alert("Hello")
  const mail=document.getElementById("floatingInput").value
  const pwd=document.getElementById("floatingPassword").value
  createUserWithEmailAndPassword(mail, pwd)

}

