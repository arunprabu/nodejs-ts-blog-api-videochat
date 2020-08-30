import errorHandler from "errorhandler";
import * as socketIo from "socket.io"; // new

import app from "./app";

let io: SocketIO.Server;

const socketsArray: any[] = [];

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    
    console.log("  Press CTRL-C to stop\n");
});

// setting up real time chat server using socket.io 
const setupChatServer = () =>{
    io = socketIo.listen(server);
    
    io.on("connection", (socket) => {
        console.log("Connected");

        // completing the possible server side socket related events 
        socket.broadcast.emit("add-users", {
            users: [socket.id]
        });

        socket.on("disconnect", () => {
            console.log("inside disconnect");
            socketsArray.splice(socketsArray.indexOf(socket.id), 1);
            io.emit("remove-user", socket.id);
        });

        socket.on("make-offer", (data) => {
            console.log("inside make-offer and emitting offer-made");
            socket.to(data.to).emit("offer-made", {
                offer: data.offer,
                socket: socket.id
            });
        });

        socket.on("make-answer", (data) => {
            console.log("inside make-answer and emitting answer-made");
            socket.to(data.to).emit("answer-made", {
                socket: socket.id,
                answer: data.answer
            });
        });
    });
};

setupChatServer();
export default server;
