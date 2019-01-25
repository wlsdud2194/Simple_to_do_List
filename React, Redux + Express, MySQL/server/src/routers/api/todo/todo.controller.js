const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'testing'
});

db.connect();

exports.getTodos = (req, res) => {
    db.query('SELECT * FROM todos', (err, todos, fields) => {
        if(err) { 
            const result = {
                'status': 500,
                'code': 0,
                'desc': 'result not found'
            };
            return res.status(500).json(result);
        }

        const result = {
            'status': 200,
            'code': 1,
            'todos': todos,
            'desc': 'successful todos',
        };
        return res.status(200).json(result);
    });
};

exports.insertTodo = (req, res) => {
    const { text } = req.body;

    db.query('INSERT INTO todos (text, done) VALUES (?, 0)', [text], (err, results, fields) => {
        if(err) {
            const result = {
                'status': 500,
                'code': 0,
                'desc': 'Request Failed'
            };
            return res.status(500).json(result);
        }
        db.query('SELECT * FROM todos', (err, todos, fleids) => {
            if(err) {
                const result = {
                    'status': 500,
                    'code': 0,
                    'desc': 'Request Failed'
                };
                return res.status(500).json(result);
            }

            const result = {
                'status': 200,
                'code': 1,
                'todos': todos,
                'desc': 'successful Request',
            };
            return res.status(200).json(result);
        });
    });
}


exports.toggleTodo = (req, res) => {
    const { todoId } = req.params;

    db.query('UPDATE todos SET done=!done WHERE id=?', [todoId], (err, results, fields) => {
        if(err) {
            const result = {
                'status': 500,
                'code': 0,
                'desc': 'Request Failed'
            };
            return res.status(500).json(result);
        }
        db.query('SELECT * FROM todos', (err, todos, fleids) => {
            if(err) {
                const result = {
                    'status': 500,
                    'code': 0,
                    'desc': 'Request Failed'
                };
                return res.status(500).json(result);
            }

            const result = {
                'status': 200,
                'code': 1,
                'todos': todos,
                'desc': 'successful Request',
            };
            return res.status(200).json(result);
        });
    })
}

exports.removeTodo = (req, res) => {
    const { todoId } = req.params;

    db.query('DELETE FROM todos WHERE id=?', [todoId], (err, results, fields) => {
        if(err) {
            const result = {
                'status': 500,
                'code': 0,
                'desc': 'Request Failed'
            };
            return res.status(500).json(result);
        }
        db.query('SELECT * FROM todos', (err, todos, fleids) => {
            if(err) {
                const result = {
                    'status': 500,
                    'code': 0,
                    'desc': 'Request Failed'
                };
                return res.status(500).json(result);
            }

            const result = {
                'status': 200,
                'code': 1,
                'todos': todos,
                'desc': 'successful Request',
            };
            return res.status(200).json(result);
        });
    })
}