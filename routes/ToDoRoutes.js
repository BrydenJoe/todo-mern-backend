const { Router } = require("express");

const { readToDo, createToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

// Test
// router.get('/', (request, response) => {
//     response.json({
//         message:"Hi there..."
//     })
// })

router.get('/', readToDo);
router.post('/create-todo', createToDo);
router.post('/update-todo', updateToDo)
router.post('/delete-todo', deleteToDo);


module.exports = router;