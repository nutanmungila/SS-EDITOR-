import expect from 'expect'
import * as actions from '../../src/actions/GambitActions'
import * as types from '../../src/constants/ActionTypes'

describe('actions', () => {

  it('should create an action to add INPUT', () => {
    const text = 'afd'
    const expectedAction = {
      type: types.INPUT_TRIGGER,
      text
    }
    expect(actions.inputTrigger('afd')).toEqual(expectedAction)
  })

  it('should create an action to add REPLY-FIELD', () => {
    const expectedAction = {
      type: types.ADD_REPLY
    }
    expect(actions.addReply()).toEqual(expectedAction)
  })

  it('should create an action to delete REPLY', () => {
    const index = 1
    const expectedAction = {
      type: types.DELETE_REPLY,
      index
    }
    expect(actions.deleteReply(index)).toEqual(expectedAction)
  })

  it('should create an action to edit REPLY', () => {
    const index = 1
    const text = 'afd'
    const expectedAction = {
      type: types.EDIT_REPLY,
      index,
      text
    }
    expect(actions.editReply(index,text)).toEqual(expectedAction)
  })

})
