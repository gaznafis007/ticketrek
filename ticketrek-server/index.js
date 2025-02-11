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
        const {email} = req.query;
        if(email){
            const tickets = await prisma.ticket.findMany({
                where: {customer: email},
                include: {customer: true}
            });
            return res.send(tickets)
        }
        const tickets = await prisma.ticket.findMany({
            include: {customer: true}
        });
        return res.send(tickets)
    }catch(err){
            return req.status(500).send({error: err.message})
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
        return res.status(500).send({error: err.message})
    }
})
// update tickets
app.put('/tickets/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const {subject, description} = req.body
        const updatedTicket = await prisma.ticket.update({
            where: {id},
            data: {subject, description}
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
        return req.send({deletedCount: 1, message: "Ticket is deleted successfully"})
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
        const users = await prisma.user.findMany({
            select: {name: true, email: true, role: true}
        });
        return res.send(users)
    }catch(err){
        return res.status(500).send({error: err.message})
    }
})
app.listen(port, () =>{
    console.log(`ticketrek server is running on port: ${port} port`)
})