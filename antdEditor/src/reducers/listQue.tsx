//import {Todo} from '../types'
let arr:Array<any> = []

const listQue = (state:Array<any> = arr, action:any) => {
      switch (action!.type) {
      case 'INCREMENTLIST':
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
export default listQue;