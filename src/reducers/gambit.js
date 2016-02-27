import { INPUT_TRIGGER, ADD_REPLY , DELETE_REPLY , EDIT_REPLY} from '../constants/ActionTypes';

const initialState = {
  inputTriggerText:'',
  replies: ["sure","yes"]
};

export default function gambit(state = initialState, action) {
  switch (action.type) {

  case INPUT_TRIGGER:
    return {
      inputTriggerText:action.text,
      replies: state.replies
    };

  case ADD_REPLY:
    return {
      inputTriggerText:state.inputTriggerText,
      replies: [...state.replies, '']
    };

  case DELETE_REPLY:
  var filteredReplies = state.replies.filter( (reply, index) =>
    index !== action.index
  );

  return {
    inputTriggerText:state.inputTriggerText,
    replies: filteredReplies
  };

  case EDIT_REPLY:
  var editedArray = state.replies;
  editedArray[action.index] = action.text;
  return {
    inputTriggerText:state.inputTriggerText,
    replies: editedArray
  };


  default:
    return state;
  }
}
