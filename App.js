import React from 'react'
import ReactDOM from 'react-dom/client'

const name = 'Onkar';

// React Element inside JSX
const elem = <span>React Element</span>;

const Title = function () {
  return <h1 className="heading">Namaste React using JSX🚀</h1>;
};

const HeadingComponent = () => (
  <>
    <>
      <div id="container">
        <Title />
        <h1 className="heading">Namaste React From Functional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  </>
);

// * Note: React.Fragment behaves like an empty tag, means it doesn't appaear in the DOM tree on Browser

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(<HeadingComponent />);