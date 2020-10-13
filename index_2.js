const express =  require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

//method for initialization of application level in express + body parser

app.use(bodyParser.json())

let users = [
    {
        id: 1,
        username: 'username'
    }
]

app.get('/', (req, res) => 
    {
        res.send('Hello!')
    })


app.get('/users', (req, res) => 
{
    res.json({ users });
})

//find a specific user
app.get('/users/:id', (req, res) => 
{
    //find an id in an array
    const results = users.find(t => t.id == req.params.id);
    
    //return the result if found
    if(results !== undefined)
    {
        res.json(results);
    }
    else
    {
        res.sendStatus(404);
    }
})

//create a new user
app.post('/users', (req, res) =>
{
    const newUser = 
    {
        id: uuidv4(),
        username: req.body.username
    }

    //push the new user
    users.push(newUser);

    res.sendStatus(200);
})





let items = [
    {
        id: 1,
        title: "item's title",
        description: "item's description",
        category: "item's category",
        location: {
            city: 'Oulu',
            country: 'Finland'
        },
        images: 'example string',
        askingPrice: 120,
        deliveryType: {
            shipping: 0,
            pickUp: 1
        },
        additionalInfos: "seller's name and more informations"
    }
]

app.post('/items', (req, res) =>
{
    const newItem = 
    {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        images: req.body.images,
        askingPrice: req.body.askingPrice,
        dateOfPosting: req.body.dateOfPosting,
        deliveryType: req.body.deliveryType,
        additionalInfos: req.body.additionalInfos
    }

    //push the new item
    items.push(newItem);

    res.sendStatus(200);
})


app.get('/items', (req, res) => 
{
    res.json({ items });
})


app.get('/items/:id', (req, res) => 
{

    //find an id in an array
    const resultsItem = items.find(t => t.id == req.params.id);
    
    //return the result if found
    if(resultsItem !== undefined)
    {
        res.json(resultsItem);
    }
    else
    {
        res.sendStatus(404);
    }
})


//modify an item
app.put('/items/:id', (req, res) => 
{
    //find an id in an array
    const resultsItem = items.find(t => t.id == req.params.id);
    
    //modify the result if found
    if(resultsItem !== undefined)
    {
        for (const key in req.body)
        {
            result[key] = req.body[key];
        }
    }
    else
    {
        req.sendStatus(404);
    }
})

//delete an item
app.delete('/items/:id', (req, res) => 
{
    const resultsItem = items.findIndex(t => t.id == req.params.id);

    //nothing is found
    if(result !== -1)
    {
        //call the splice
        items.splice(result, 1);
        res.sendStatus(200);
    }
    else
    {
        res.sendStatus(404);
    }
}) 



let login = [
    {
        id: 1,
        password: 'XXXXXXX'
    }
]

app.get('/login', (req, res) => 
{
    res.json({ login });
})


app.post('/login', (req, res) =>
{
    const newLogin = 
    {
        id: uuidv4(),
        password: req.body.password
    }

    //push into todos array
    user.push(newLogin);

    //console.log(req.body);
    res.sendStatus(200);
})

app.listen(port, () =>
{
    console.log('Example app listening at http://localhost:$(port)');
})