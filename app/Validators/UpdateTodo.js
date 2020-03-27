'use strict'

class UpdateTodo {
  get rules () {
    return {
      // validation rules
      editTodo: 'required|min:3'
    }
  }

  get messages() {
    return {
      'editTodo.required': 'The edit todo field is required!',
      'editTodo.min': 'The edit todo field requires at least 3 chracters!'
    }
  }
}

module.exports = UpdateTodo
