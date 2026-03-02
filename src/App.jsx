import './App.css'
import Greeting from './Greeting'
function App() {
    const name = "Alex";
    const year = new Date().getFullYear();
    const age = prompt("Please enter Alex's age:");

    const fruits = ["Apple", "Banana", "Orange"];

    const imgLink = "https://drive.google.com/thumbnail?id=1GDPNrQFI8QfLift9PYvRN0PKxOLbx1BJ"
    const profileName = "Sultan Tasmagambetov"
    const profession = "Software developer"
    let isActive = true
    function badgeState(event){
        // eslint-disable-next-line react-hooks/immutability
        isActive = !isActive;
        const button = event.target;
        button.textContent = isActive ? 'Active' : 'Inactive';
        button.className = isActive ? 'activeBtn' : 'inactiveBtn';
    }
    return (
        <>
            {/*Task 1*/}
            <h1>Welcome to JSX Lab!</h1>
            <p>This is a demonstration of a heading inside JSX render</p>
            {/*Task 2*/}
            <div className="container">This text is inside a "container" class</div>

            {/*Task 3*/}
            <div className="greetingCard">
                <h2>Hello, {name}!</h2>
                <p>Current year: {year}</p>
                <p>5 + 5 = {5 + 5}</p>
                <p>Age group: {(age >= 18) ? "Adult" : "Minor"} ({age})</p>
                <p>10 {'>'} 5: {(10 > 5) && (<span>True</span>)}</p>
            </div>
            <hr/>
            {/*Task 4*/}
            <ul>
                {fruits.map((fruit, i) => (
                    <li key={i}>{fruit}</li>
                ))}
            </ul>
            <hr/>
            {/*Task 5*/}
            <Greeting name={"Sultan"} />

            {/*Task 6*/}
            <div className="cardProfile">
                <h2>{profileName}</h2>
                <p>Profession: {profession}</p>
                <img src={imgLink} alt={profileName}/>
                <div>
                    <button className="activeBtn" onClick={badgeState}>Active</button>
                </div>
            </div>
        </>
    )
}

export default App
