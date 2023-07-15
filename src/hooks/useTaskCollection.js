import useLocalStorage from "use-local-storage"
import { v4 as uuidv4 } from "uuid"
import { ColumnType } from "../utils/enums"

function useTaskCollection() {
  return useLocalStorage("tasks", {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 1",
        color: "blue.300"
      }
    ],
    "In Progress": [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: "Task 2",
        color: "yellow.300"
      }
    ],
    Blocked: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: "Task 3",
        color: "red.300"
      }
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: "Task 4",
        color: "green.300"
      }
    ]
  })
}

export default useTaskCollection