import { connect } from "react-redux";
import { addTask } from "../../../redux/task-reducer";
import TasksTable from "./TasksTable";

const mapStateToProps = (state) => {
    return {
        taskList: state.task
    };
}

export default connect(mapStateToProps, { addTask })(TasksTable);