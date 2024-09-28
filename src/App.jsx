import {useState } from 'react'
import Greet from './components/classComponent/Greet';
import Message from './components/classComponent/Message';
import Events from './components/classComponent/Events';
import Parent from './components/classComponent/Parent';
import ConRendering from './components/classComponent/ConRendering';
import Lists from './components/classComponent/Lists';
import Forms from './components/classComponent/Forms';
import LifeCycle from './components/classComponent/LifeCycle';
import Fragments from './components/classComponent/Fragments';
import PureComponent from './components/classComponent/PureComponent';
// import Refs from './components/functionalComponent/Refs';
import Refs from './components/classComponent/Refs';
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/classComponent/ErrorBoundary';
import HeroParent from './components/classComponent/HeroParent';
// import Counter from './components/classComponent/Counter';
import HOC from "./components/classComponent/HOC"
// import HoverCounter from './components/classComponent/HoverCounter';
import clickCounter from "./components/classComponent/renderProps/clickCounter"
import HoverCounter from './components/classComponent/renderProps/HoverCounter';
import User from './components/classComponent/renderProps/User';
import Counter from './components/classComponent/renderProps/Counter';
import TopLevel from './components/classComponent/context/TopLevel';
import UserContext from './components/classComponent/context/UserContext';
import Api from './components/classComponent/http/apiRequests';
import PostForm from './components/classComponent/http/PostForm';


// import Events from './components/functionalComponent/Events';
// import Greet from './components/functionalComponent/Greet';
function App() {
  // const [count, setCount] = useState(0)

  // const[toggle, setToggle] = useState(false)
  return (
    <>
      {/* <Api /> */}
      <PostForm/>
      {/* <TopLevel/> */}
      {/* <UserContext/> */}
      {/* <Counter/> */}
      {/* render props method */}

      {/* <Counter
        render={(count, incrementCounter) => (
          <clickCounter count={count} incrementCounter={incrementCounter} />
        )}
      />

      <HoverCounter
        render={(count, incrementCounter) => (
          <clickCounter count={count} incrementCounter={incrementCounter} />
        )}
      /> */}

      {/* <HoverCounter /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? 'diwakar' : 'guest')} /> */}
      {/* <Counter name="diwakar"/> */}
      {/* <HoverCounter/> */}

      {/* <PureComponent/> */}
      {/* <Refs/> */}
      {/* <PortalDemo/> */}
      {/* <HeroParent/> */}
      {/* <Fragments /> */}
      {/* <button onClick={()=> setToggle(!toggle)}>toggle button</button>
        {
          toggle && <LifeCycle/>

        } */}
      {/* <Lists/> */}
      {/* <Forms/> */}
      {/* <ConRendering/> */}
      {/* <Greet /> */}
      {/* <Greet name="hehe" />
        <Greet name="diana">
          <p>this is children prop</p>
        </Greet>
        <Greet name="john" /> */}
      {/* <Message/> */}
      {/* <Events/> */}
      {/* <Events/> */}
      {/* <Parent/> */}
    </>
  );
}

export default App
