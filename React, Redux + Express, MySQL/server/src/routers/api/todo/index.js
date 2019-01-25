const router = require('express').Router();
const controller = require('./todo.controller');

router.get('', controller.getTodos); // todo 목록 가져오기
router.post('', controller.insertTodo); // todo 추가
router.put('/:todoId', controller.toggleTodo); // todo done 토글
router.delete('/:todoId', controller.removeTodo); // todo 삭제

module.exports = router;