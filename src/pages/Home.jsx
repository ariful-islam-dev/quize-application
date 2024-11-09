import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div>
                <div style={{marginBottom: '20px'}}>
                    <h1>Welcome to Quize App</h1>
                    <p>Hi! This is, <h2 style={{color: '#55006c'}}>Ariful Islam.</h2> A Professional Web Developer Spicialy Focused on React and Node.js</p>
                </div>
                <hr />
                <div style={{marginTop: '20px'}}>
                <h2>Do you want to play a quize?</h2>
                <button onClick={() => navigate('/quize')}>Let&#39;s Start</button>
                </div>
            </div>
        </div>
    );
};

export default Home;