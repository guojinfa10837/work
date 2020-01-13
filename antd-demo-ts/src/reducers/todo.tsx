import {Todo} from '../types'

const todos = (state: Todo[] = [], action:any) => {
      switch (action!.type) {
      case 'INCREMENT':
        return [
                ...state,
               action.data
            ];
      case 'DECREMENT':
        return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];
      default:
        return [...state];
      }
};
export default todos;