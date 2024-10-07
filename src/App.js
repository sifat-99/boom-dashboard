import './App.css';
import DashBoardContent from './Components/DashBoardContent';
import Sidebar from './Components/Sidebar';
import './Components/Sidebar.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div>
                <nav className="navbar">
                    <div className="nav-left">
                        <div><h1 className="logo">⬅ Document Approvals</h1></div>
                    </div>
                    <div className="nav-right">
                        <div className='search'>
                            🔍 Search Dog
                        </div>
                        <div className='notification'>📬
                        </div>
                        <img src="https://utfs.io/f/wY1JPnHeuUdXCH3uBsDZA6ukKOs9tY7fLqa3Q5o2wbI8cgrV" alt="User Avatar" className="avatar" />
                    </div>
                </nav>
                <section className="content">
                    <DashBoardContent />
                </section>
            </div>
        </div>
    );
}

export default App;
