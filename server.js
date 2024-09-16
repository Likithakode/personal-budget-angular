const express = require('express');
const app = express()
const port = 3000;


app.get('/hello',(req,res)=>{
    res.send("Hello World!");
});

app.use('/',express.static('public'));

const budget = {
    mybudget: [
    {
        title: 'Eat out',
        budget: 60
    },
    {
        title: 'Rent',
        budget: 1000
    },
    {
        title: 'Groceries',
        budget: 50
    },
    {
        title: 'Transport',
        budget: 50
    },
    {
        title: 'Entertainment',
        budget: 60
    },
    {
        title: 'Savings',
        budget: 1000
    },
    {
        title: 'Miscellaneous',
        budget: 100
    }
]
};

app.get('/budget',(req,res)=>{
    res.json(budget);
})

app.listen(port,()=>{
    console.log(`App listening in localhost:${port}"`);
})