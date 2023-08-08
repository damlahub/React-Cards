import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <Course
        image={Angular}
        title="Angular"
        description="Deserunt dolor cillum excepteur Lorem laboris. Ut eiusmod ad est aliqua occaecat dolore consequat incididunt eiusmod aliquip consequat dolor. Dolor voluptate est velit id elit non est cillum do aliqua pariatur irure. Sit ullamco sint nisi eiusmod ullamco dolor eu. Et incididunt tempor non ex irure dolore culpa magna ullamco non nulla."
      />
      <Course
        image={Bootstrap}
        title="Bootstrap 5"
        description="Deserunt dolor cillum excepteur Lorem laboris. Ut eiusmod ad est aliqua occaecat dolore consequat incididunt eiusmod aliquip consequat dolor. Dolor voluptate est velit id elit non est cillum do aliqua pariatur irure. Sit ullamco sint nisi eiusmod ullamco dolor eu. Et incididunt tempor non ex irure dolore culpa magna ullamco non nulla."
      />
      <Course
        image={CSharp}
        title="Komple Web"
        description="Deserunt dolor cillum excepteur Lorem laboris. Ut eiusmod ad est aliqua occaecat dolore consequat incididunt eiusmod aliquip consequat dolor. Dolor voluptate est velit id elit non est cillum do aliqua pariatur irure. Sit ullamco sint nisi eiusmod ullamco dolor eu. Et incididunt tempor non ex irure dolore culpa magna ullamco non nulla."
      />
      <Course
        image={KompleWeb}
        title="Backend"
        description="Deserunt dolor cillum excepteur Lorem laboris. Ut eiusmod ad est aliqua occaecat dolore consequat incididunt eiusmod aliquip consequat dolor. Dolor voluptate est velit id elit non est cillum do aliqua pariatur irure. Sit ullamco sint nisi eiusmod ullamco dolor eu. Et incididunt tempor non ex irure dolore culpa magna ullamco non nulla."
      />
    </div>
  );
}
export default App;
