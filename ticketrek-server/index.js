const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();
require('dotenv').config()
const prisma = new PrismaClient()

// middleware
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        methods: "GET, POST, PUT, DELETE, PATCH",
        allowedHeaders: "Content-Type,Authorization"
    }
))
app.use(express.json())

// test API
app.get('/', (req, res) =>{
    res.send(`ticketrek server is running on ${port} port`)
})

// get tickets
app.get('/tickets', async(req,res) =>{
    try{
        const {email} = req.query;
        if(email){
            const tickets = await prisma.ticket.findMany({
                where: {customer: {email : email}},
                include: {customer: true}
            });
            return res.send(tickets)
        }
        const tickets = await prisma.ticket.findMany({
            include: {customer: true}
        });
        return res.send(tickets)
    }catch(err){
            return res.status(500).send({error: err.message})
    }
})
// create tickets
app.post('/tickets', async (req,res) =>{
    try{
        const {subject, description, customerId, priority} = req.body
        const ticket = await prisma.ticket.create({
            data:{
                subject,
                description,
                priority,
                customerId
            },
        });
        // console.log(ticket)
        res.send(ticket)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// target ticket
app.get('/tickets/:id', async(req,res) =>{
    try{
        const {id} = req.params
        const ticket = await prisma.ticket.findUnique({
            where: {id},
            include: {customer: true}
        })
        res.send(ticket)
    }catch(err){
        res.status(500).send({error: err.message})
    }
})
// update tickets
app.put('/tickets/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const {subject, description, priority} = req.body
        const updatedTicket = await prisma.ticket.update({
            where: {id},
            data: {subject, description, priority}
        });

        return res.send(updatedTicket)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// update ticket status
app.put('/tickets/:id/status', async(req,res) =>{
    try{
        const {id} = req.params;
        const {status} = req.body;
        console.log(status)
        const updatedTicketStatus = await prisma.ticket.update({
            where: {id},
            data: {status}
        })
        return res.send(updatedTicketStatus)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// delete a ticket
app.delete('/tickets/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        await prisma.ticket.delete({
            where: {id}
        })
        return res.send({deletedCount: 1, message: "Ticket is deleted successfully"})
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// create user
app.post('/users', async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
        res.send(user)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// get user
app.get('/users', async(req,res) =>{
    try{
        let {email} = req.query
        if(email){
            const user = await prisma.user.findUnique({
                where: {email: email},
                select: {id: true, name: true, email: true, role:true}
            })
            return res.send(user)
        }
        const users = await prisma.user.findMany({
            select: {id: true, name: true, email: true, role: true}
        });
        return res.send(users)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
// app.delete('/users/:id', async(req,res) =>{
//     try{
//         const {id} = req.params;
//         await prisma.user.delete({
//             where: {id}
//         })
//         return res.send({deletedCount: 1, message:'User deleted Successfully!'})
//     } catch(err){
//         return res.status(500).send({error: err.message})
//     }
// })
app.listen(port, () =>{
    console.log(`ticketrek server is running on port: ${port} port`)
})