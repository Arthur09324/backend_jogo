import Fastify from 'fastify'

const server = Fastify()


 
 server.get('/usuarios' , ()=>{

    return 'Ola Mundo"'
 }
)

 server.get('/personagem' , ()=>{

    return 'Ola Mundo"'

}
)


     server.listen(

    {port: 3000}

)

server.post('/usuarios' , (req , reply)=>{

    return req.body
 }
)