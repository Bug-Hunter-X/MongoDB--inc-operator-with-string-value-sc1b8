```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: 1}});
```