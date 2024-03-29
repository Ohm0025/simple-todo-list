import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import EditBar from "./components/EditBar";
import SearchText from "./components/SearchText";
import SearchStatus from "./components/SearchStatus";
import TodoList from "./components/TodoList";
import ShowAmount from "./components/ShowAmount";
import Sort from "./components/Sort";
import ShowInfo from "./components/ShowInfo";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => {
      setTodo(res.data.todo);
    });
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);
  const [amount, setAmount] = useState(2);
  const [page, setPage] = useState(1);
  const [sortTitle, setSortTitle] = useState("-");

  //create todo
  const createTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    axios
      .post("http://localhost:8080/todos", newTodo)
      .then((res) => {
        setTodo((prev) => {
          return [newTodo, ...prev];
        });
      })
      .catch((err) => console.log(err));
  };

  //remove todo
  const removeTodo = (id) => {
    axios
      .delete("http://localhost:8080/todos/" + id)
      .then((res) => {
        setTodo((prev) => {
          return prev.filter((item) => item.id !== id);
        });
      })
      .catch((err) => console.log(err));
  };

  //updateTodo
  const updateTodo = (id, { title, completed }) => {
    axios
      .put("http://localhost:8080/todos/" + id, { title, completed })
      .then((res) => {
        setTodo((prev) => {
          return prev.map((item) => {
            return item.id === id
              ? {
                  ...item,
                  title: title ?? item.title,
                  completed: completed ?? item.completed,
                }
              : item;
          });
        });
      });
  };

  //changeSearchText
  const changeSearchText = (findText) => {
    setSearchText(findText);
  };
  //changeStatus
  const changeStatus = (status) => {
    setSearchStatus(status);
  };
  //changeAmount
  const changeAmount = (value) => {
    if (page > filterTodo().length / value) {
      setPage(Math.ceil(filterTodo().length / value));
    }
    setAmount(value);
  };

  //change sort
  const changeSortTitle = (sign) => {
    setSortTitle(sign);
  };

  //change page
  const changePage = (num) => {
    setPage(num);
  };

  //filterTodo
  const filterTodo = () => {
    return [...todo].filter(
      (item) =>
        item.title?.toLowerCase().includes(searchText.toLowerCase()) &&
        (searchStatus === null || item.completed === searchStatus)
    );
  };

  //sort todo
  const sortTodo = () => {
    return sortTitle === "-"
      ? filterTodo()
      : filterTodo().sort((a, b) => {
          if (sortTitle === "az") {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            } else {
              return -1;
            }
          }
        });
  };

  //limitTodo
  // const limitTodo = () => {
  //   return sortTodo().slice(0, amount);
  // };

  //pagetodo
  const pageTodo = () => {
    return sortTodo().slice((page - 1) * amount, page * amount);
  };

  return (
    <div className="container w-60 max-w-xs my-4">
      <EditBar createTodo={createTodo} />
      <div className="d-flex align-items-center my-4 gap-5">
        <SearchText
          changeSearchText={changeSearchText}
          searchText={searchText}
        />
        <SearchStatus changeStatus={changeStatus} />
      </div>
      <div className="d-flex align-items-center justify-content-between my-4">
        <ShowAmount changeAmount={changeAmount} />
        <Sort changeSortTitle={changeSortTitle} />
      </div>
      <TodoList
        todo={pageTodo()}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <div className="d-flex align-items-center justify-content-between">
        <ShowInfo
          amount={amount}
          number={pageTodo().length}
          realNumber={todo.length}
        />
        <Pagination
          changePage={changePage}
          length={Math.ceil(filterTodo().length / amount)}
        />
      </div>
    </div>
  );
}

export default App;
