# API Docs



### todos 불러오기

- method : GET

- URL : /api/todo



**Response**

```json
{
    "status": 200,
    "code": 1,
    "todos": [
        {
            "id": 1,
            "text": "react.js 하기",
            "done": 0
        },
        {
            "id": 2,
            "text": "node.js로 서버 연동하기",
            "done": 0
        }
    ],
    
    "desc": "successful todos"
}
```

 

### todo 추가

- method : POST

- URL : /api/todo/



**Request**

```javascript
{
    text: "mysql"
}
```



**Response**

```json
{
    "status": 200,
    "code": 1,
    "todos": [
        {
            "id": 1,
            "text": "react.js",
            "done": 0
        },
        {
            "id": 2,
            "text": "node.js",
            "done": 0
        },
        {
            "id": 3,
            "text": "mysql",
            "done": 0
        }
     ],
     
     "desc": "successful todos"
}
```



### done 토글

- method : PUT

- URL : /api/todo/{:todoId}



**Request**

```javascript
axios.put('/api/todo/2');
```



**Response**

```json
{
 "status": 200,
 "code": 1,
 "todos": [
     {
         "id": 1,
         "text": "react.js",
         "done": 0
     },
     {
         "id": 2",
         "text": "node.js",
         "done": 1           //수행상태 토글
     },
     {
         "id": 3,
         "text": "mysql",
         "done": 0
      }
  ],
  
  "desc": "successful Response"
}
```



### todo 삭제

- method : DELETE

- URL : /api/todo/{:todoId}



**Request**

```javascript
axios.delete('/api/todo/1');
```



**Response**

```json
{
    "status": 200,
    "code": 1,
    "todos": [
        {
            "id": 2,
            "text": "node.js",
            "done": 1
        },
        {
            "id": 3,
            "text": "mysql",
            "done": 0
        }
    ],
    
    "desc": "successful Response"
}
```


