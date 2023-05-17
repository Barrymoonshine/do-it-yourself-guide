import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Welcome to my first React app!</h1>
        </p>
        <MyButton />
        <AboutPage name="Nick" heroName="Spiderman">
          <p> This is children props</p>
        </AboutPage>
        <Shoppinglist />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const MyButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times</button>;
};

const AboutPage = (props) => (
  <>
    <h1>About</h1>
    <p className="my-first-class">
      Heeellooo there {props.name} a.k.a {props.heroName}
      {props.children}
      <br />
      How do you do?
    </p>
  </>
);

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const Shoppinglist = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default App;
