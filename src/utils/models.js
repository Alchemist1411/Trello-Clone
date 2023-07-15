import { ColumnType } from './enums';

export const TaskModel = {
  id: '',
  title: '',
  column: ColumnType,
  color: '',
};

export const DragItem = {
  index: 0,
  id: TaskModel.id,
  from: ColumnType,
};