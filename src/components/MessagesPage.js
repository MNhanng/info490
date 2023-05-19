export function MessagesPage(props) {
    return (
        <main>
            <h1>Messages</h1>
            <div className="notice">* This is a static page. The chat feature is currently incomplete.</div>
            <div className="chat-container">
                <div className="messages">
                    <form className="message-search-bar">
                        <input type="search" placeholder="Search..." />
                    </form>

                    <div className="message-preview">
                        <div className="message-img"><img src={require("../img/ava.png")} alt="user profile" /></div>
                        <div>
                            <div className="message-name">Ava Brown</div>
                            <div className="message-time">May 1, 2023 | 2:00pm</div>
                            <div className="message-desc">Hi there, I will send you additional details about the internship requirements</div>
                        </div>
                    </div>

                    <hr />

                    <div className="message-preview">
                        <div className="message-img"><img src={require("../img/david.png")} alt="user profile" /></div>
                        <div>
                            <div className="message-name">David Smith</div>
                            <div className="message-time">May 1, 2023 | 2:00pm</div>
                            <div className="message-desc">Do you have any tips for my upcoming interview?</div>
                        </div>
                    </div>

                    <hr />

                    <div className="message-preview">
                        <div className="message-img"><img src={require("../img/linda.png")} alt="user profile" /></div>
                        <div>
                            <div className="message-name">Linda Johnson</div>
                            <div className="message-time">May 1, 2023 | 2:00pm</div>
                            <div className="message-desc">I would love to learn more about it. Talk to you later.</div>
                        </div>
                    </div>

                    <hr />

                </div>
        
                
                <div className="message-content">
                    <div className="message-content-name">Ava Brown</div>
                    <hr />

                    <div className="received-message">
                        <img src={require("../img/jane.png")} alt="user profile" />
                        <div className="message">Hello, I would like to learn more about the internship that you posted about!</div>
                    </div>

                    {/* <div class="sent-message">
                        <img src={require("./img/user-img.jpg")} alt="user profile" />
                        <div class="message">Hi there, I will send you additional details about the internship requirements</div>
                    </div> */}

                    <div className="add-message-container">
                        <textarea id="freeform" name="freeform" defaultValue="Type new message here..."></textarea>
                        <button type="button">Send</button>
                    </div>
                </div>
        
            </div>
        
        
            
        </main>
    )
}