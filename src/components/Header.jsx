
import '../styles/App.css';

function Header() {
  return (
    <header className="header">
           <div className="logo">
             <a href="https://pixabay.com/">
               <img src="https://pixabay.com/static/img/public/leaderboard_a.png" alt="Pixabay"/>
             </a>
           </div>
      <h1 className="title">Search images app</h1>
    </header>
  );
}

export default Header;
