import { connect } from "react-redux";
import { addTask, updateTaskStatus, deleteTask, changeTask } from "../../../redux/task-reducer";
import TasksTable from "./TasksTable";

const mapStateToProps = (state) => {
    return {
        taskList: state.task
    };
}

export default connect(mapStateToProps, { addTask, updateTaskStatus, deleteTask, changeTask })(TasksTable);