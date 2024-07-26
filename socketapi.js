const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    io.emit("max","Hello from server")

    socket.on("sony",(msg )=> {
    
    socket.broadcast.emit("max",msg)
    // jo user msg sent kr raha hai uske pas msg show nhi hoga jisko sent kiya hai bus usko dikhega
    
    
    
    
        //  console.log(msg)

    //  io.emit("max",msg)  
                                 // 1 client se dusre client ko msg send krne ke liye



      })

});

// end of socket.io logic

module.exports = socketapi;



// express 4 socket for socket.io setup code 
// npm i socket.io in terminal for socket.io 
// io = server
// socket = single user/client
// on = receieved
// emit = send