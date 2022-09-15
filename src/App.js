import './App.css';
import SignIn from './Components/SignIn';
import Blog from './Components/Blog';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState("Jill");
  const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1502033303885-c6e0280a4f5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=9be99762d86ae47ab59690f72d984be6");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [blogEntry, setBlogEntry] = useState("");

  if (isSignedIn === false) {
    return (
      <div>
        <SignIn
          userName={userName}
          setUserName={setUserName}
          userImage={userImage}
          setUserImage={setUserImage}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />
      </div>
    );
  }

  if (isSignedIn === true) {
    return <Blog
      userName={userName}
      userImage={userImage}
      blogEntry={blogEntry}
      setBlogEntry={setBlogEntry}
    // blogArray={blogArray}
    // setBlogArray={setBlogArray}
    />
  }


}

export default App;
