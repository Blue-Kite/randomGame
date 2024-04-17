import React from "react";
import "./App.css";

function App() {
  const [test, setTest] = React.useState<string>('hello')
  return (
    <>
      <p>깃허브 연동 테스트</p>
      <p>{test}</p>      
    </>
  
    
  );
}

export default App;
