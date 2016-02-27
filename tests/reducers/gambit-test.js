import expect from 'expect'
import * as actions from '../../src/actions/GambitActions'
import * as types from '../../src/constants/ActionTypes'
import gambit from '../../src/reducers/gambit'


describe('reducers', () => {

  it('should create an reducer to add INPUT', () => {
    const state = {
      inputTriggerText:'',
      replies: ["sure","yes"]
    }
    const expectedState = {
        inputTriggerText:'aaa',
        replies: ["sure","yes"]
    }
    expect(gambit(state,actions.inputTrigger('aaa'))).toEqual(expectedState)
  })

  it('should create an reducer to add REPLY', () => {
    const state = {
      inputTriggerText:'aaa',
      replies: ["sure","yes"]
    }
    const expectedState = {
        inputTriggerText:'aaa',
        replies: ["sure","yes",""]
    }
    expect(gambit(state,actions.addReply())).toEqual(expectedState)
  })

  it('should create an reducer to add DELETE_REPLY', () => {
    const state = {
      inputTriggerText:'aaa',
      replies: ["sure","yes","agh"]
    }
    const expectedState = {
        inputTriggerText:'aaa',
        replies: ["sure","agh"]
    }
    expect(gambit(state,actions.deleteReply(1))).toEqual(expectedState)
  })

  it('should create an reducer to add EDIT_REPLY', () => {
    const state = {
      inputTriggerText:'aaa',
      replies: ["www","yes","uuu"]
    }
    const expectedState = {
        inputTriggerText:'aaa',
        replies: ["www","sss","yes"]
    }
    expect(gambit(state,actions.editReply(1,'sss'))).toEqual(expectedState)
  })

})
