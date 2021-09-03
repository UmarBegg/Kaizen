// const TodoItem: React.FC<{
//   text: string;
// }> = (props) => {
//   return <li>{props.text}</li>;
// };
import { Fragment } from "react";
import styles from "./Todolist.module.css";

const TodoItem: React.FC<{
  text: string;
  createdBy: string;
  urgency: number;
  onRemoveTodo?: () => void;
  onStartTodo?: () => void;
  onFinish?: () => void;
}> = (props) => {
  return (
    <Fragment>
      <li className="mb-10 shadow-lg rounded-2xl">
        <div className="flex justify-between">
          {props.urgency === 1 && <div className="bg-red-400 h-2 w-14 rounded-full mt-6 ml-6"></div>}
          {props.urgency === 2 && <div className="bg-yellow-300 h-2 w-14 rounded-full mt-6 ml-6"></div>}
          {props.urgency === 3 && <div className="bg-green-400 h-2 w-14 rounded-full mt-6 ml-6"></div>}
          <button onClick={props.onRemoveTodo} className="h-8 w-8 rounded-full cursor-pointer hover:bg-red-100 text-s text-gray-600 mt-2 mr-2 font-mono">x</button>
        </div>
        <div onClick={props.onStartTodo} className=" px-6 pb-6 cursor-pointer">
        <h3 className="mt-2 text-base text-gray-600 font-semibold">{props.text}</h3>
        <p className="mt-2 text-gray-600 font-medium">Can't get the notes to render :(</p>
        <div className="mt-6 flex justify-center bg-blue-400 h-10 w-10 rounded-full">
          <p className="text-white self-center text-base font-semibold tracking-wider">{props.createdBy.match(/\b(\w)/g).join('')}</p>
        </div>
        {/* <button onClick={props.onStartTodo}>Start</button> */}
        {/* <button onClick={props.onFinish}>Finish</button> */}
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;