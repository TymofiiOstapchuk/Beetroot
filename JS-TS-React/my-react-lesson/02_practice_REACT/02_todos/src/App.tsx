import { FaTrash, FaCheck, FaSave } from "react-icons/fa";

function App() {
  return (
    <section className="w-[1200px] mx-auto">
      <h3 className="title">List of tasks</h3>
      <hr />

      <div className="todo-grid">
        <div className="p-2">
          {/* Filters */}
          <div className="flex mb-2">
            <select className="filter-select">
              <option value="1">Show all tasks</option>
              <option value="2">Show Done</option>
              <option value="3">Show Remain</option>
            </select>

            <input type="text" className="form-control" name="search-tasks" />
          </div>
          {/* END Filters */}

          {/* Tasks's list */}
          <ul className="mb-5">
            <li className="item-list">
              <span>Task one</span>
              <div className="ml-auto flex">
                <div className="mr-4">
                  <FaCheck className="cursor-pointer" />
                </div>
                <div>
                  <FaTrash className="cursor-pointer" />
                </div>
              </div>
            </li>

            <li className="item-list">
              <span className="text-red-800 line-through">Done task</span>
              <div className="ml-auto flex">
                <div className="mr-4">
                  <FaCheck className="cursor-pointer" />
                </div>
                <div>
                  <FaTrash className="cursor-pointer" />
                </div>
              </div>
            </li>

            <li className="item-list">
              <div className="mr-4">
                <input className="item-list-input" type="text" value="task 2" />
              </div>
              <div className="ml-auto flex">
                <div className="mr-4">
                  <FaSave className="cursor-pointer" />
                </div>
                <div className="mr-4 cursor-pointer">
                  <FaCheck />
                </div>
                <div>
                  <FaTrash className="cursor-pointer" />
                </div>
              </div>
            </li>
          </ul>
          {/* EMD Tasks's list */}
        </div>
        <div className="p-2">
          <div className="mb-5 text-2xl">
            <p className="mr-4">
              Total - <span id="tasks-total">3</span>
            </p>
            <p className="mr-4">
              Done - <span id="tasks-done">2</span>
            </p>
            <p className="mr-4">
              Remain - <span id="tasks-remain">1</span>
            </p>
          </div>

          <hr className="hr-block" />
          <p className="title-red">Add task</p>
          <form className="" autoComplete="off">
            <div className="mb-3 flex">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add task"
                className="form-control-add"
              />
              <button type="submit" className="btn">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
