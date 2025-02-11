const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const {PrismaClient} = require('@prisma/client')
const app = express();
require('dotenv').config()
const prisma = new PrismaClient()
// middleware
app.use(cors())
app.use(express.json())

// test API
app.get('/', (req, res) =>{
    res.send(`ticketrek server is running on ${port} port`)
})

// get tickets
app.get('/tickets', async(req,res) =>{
    try{
        const tickets = await prisma.ticket.findMany({
            include: {customer: true}
        });
        res.send(tickets)
    }catch(err){
            req.status(500).send({error: err.message})
    }
})

// create tickets
app.post('/tickets', async (req,res) =>{
    try{
        const {subject, description, customerId} = req.body
        const ticket = await prisma.ticket.create({
            data:{
                subject,
                description,
                customerId
            },
        });
        res.send(ticket)
    }catch(err){
        res.status(500).send({error: err.message})
    }
})

app.post('/users', async(req, res) =>{
    try{
        const {name, email} = req.body;
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        res.send(user)
    }catch(err){
        res.status(500).send({error: err.message})
    }
})
app.listen(port, () =>{
    console.log(`ticketrek server is running on port: ${port} port`)
})