import './App.css';
import SignIn from './Components/SignIn';
import Blog from './Components/Blog';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState("Jill");
  const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [blogEntry, setBlogEntry] = useState("");

  if (isSignedIn === false) {
    return (
      <div className="sign-in-container">
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
