import ChatBox from "./ChatBox";
import ChatHead from "./ChatHead";



function Box() {


    return (
        <div className="box flex">
            <ChatHead></ChatHead>
            <ChatBox></ChatBox>
        </div>
    );
}



export default Box;