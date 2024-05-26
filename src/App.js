import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <header>
        <img
          className="nxtWaveLogo"
          src="/nxtWaveLogo.png"
          alt="NXT WAVE LOGO"
        />
        <button>+ ADD</button>
        <img className="userIcon" src="/userIcon.png" alt="USER ICON" />
      </header>
      <div>
        <nav>
          <button>Resources</button>
          <button>Requests</button>
          <button>Users</button>
        </nav>
      </div>
      <SearchBar />
      <div className="cardHeader">
        <img className="cardImgs" src="/boxIcon.png" alt="Box Icon" />
        <h4 className="cardLabel">Dropbox, Inc.</h4>
        <h5 className="labelDescription">Cloud Services</h5>
      </div>
      <div>
        <a href="www.dropbox.com">www.dropbox.com</a>
      </div>
    </>
  );
}

export default App;
