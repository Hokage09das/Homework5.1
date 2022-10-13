import "./App.css";
import Comment from "./components/Comment";

const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

const incrimentId = (function increaseId() {
  let id = 0;
  return function () {
    return id++;
  };
})();

function App() {
  return (
    <div className='App'>
      {comment.map((el) => {
        return (
          <Comment
            key={incrimentId()}
            date={el.date}
            text={el.text}
            author={el.author}
          />
        );
      })}
    </div>
  );
}

export default App;
