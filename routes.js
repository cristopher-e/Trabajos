const express=require('express')
const routes=express.Router()

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        conn.query('SELECT * FROM usuarios', (err,rows)=>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
})

routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        console.log(req.body)
        conn.query('INSERT INTO usuarios set ?',[req.body], (err,rows)=>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
})

routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        console.log(req.body)
        conn.query('DELETE from usuarios where id = ?',[req.params.id], (err,rows)=>{
            if(err){
                return res.send(err)
                console.log(err)
            }
            res.json(rows)
        })
    })
})

routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        console.log(req.body)
        conn.query('UPDATE usuarios set ? WHERE id = ?',[req.body,req.params.id], (err,rows)=>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
})



module.exports=routes