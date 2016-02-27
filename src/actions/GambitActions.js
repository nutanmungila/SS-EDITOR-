import { INPUT_TRIGGER, ADD_REPLY , DELETE_REPLY , EDIT_REPLY} from '../constants/ActionTypes';

export function inputTrigger(text) {
  return {
    type: INPUT_TRIGGER,
    text:text
  };
}

export function addReply() {
  return {
    type: ADD_REPLY
  };
}

export function deleteReply(index) {
  return {
    type: DELETE_REPLY,
    index:index
  };
}

export function editReply(index,text) {
  return {
    type: EDIT_REPLY,
    index:index,
    text:text
  };
}
