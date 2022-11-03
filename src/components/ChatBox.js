import ChatInput from "./ChatInput";
import CurrentChat from "./CurrentChat";



function ChatBox()
{

    return(
        <div className="flex-row">
            <CurrentChat></CurrentChat>
            <ChatInput></ChatInput>
        </div>
    );
}


export default ChatBox;