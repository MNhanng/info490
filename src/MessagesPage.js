export function MessagesPage(props) {
    return (
        <main>
            <h1>Messages</h1>
            <div class="chat-container">
                <div class="messages">
                    <form class="message-search-bar">
                        <input type="search" placeholder="Search..." />
                    </form>

                    <div class="message-preview">
                        <div class="message-img"><img src={require("./img/ava.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">Ava Brown</div>
                            <div class="message-time">May 1, 2023 | 2:00pm</div>
                            <div class="message-desc">Hi there, I will send you additional details about the internship requirements</div>
                        </div>
                    </div>

                    <hr />

                    <div class="message-preview">
                        <div class="message-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">David Smith</div>
                            <div class="message-time">May 1, 2023 | 2:00pm</div>
                            <div class="message-desc">Do you have any tips for my upcoming interview?</div>
                        </div>
                    </div>

                    <hr />

                    <div class="message-preview">
                        <div class="message-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">Linda Johnson</div>
                            <div class="message-time">May 1, 2023 | 2:00pm</div>
                            <div class="message-desc">I would love to learn more about it. Talk to you later.</div>
                        </div>
                    </div>

                    <hr />

                </div>
        
                
                <div class="message-content">
                    <div class="message-content-name">Ava Brown</div>
                    <hr />

                    <div class="received-message">
                        <img src={require("./img/user-img.jpg")} alt="user profile" />
                        <div class="message">Hello, I would like to learn more about the internship that you posted about!</div>
                    </div>

                    <div class="sent-message">
                        <img src={require("./img/user-img.jpg")} alt="user profile" />
                        <div class="message">Hi there, I will send you additional details about the internship requirements</div>
                    </div>

                    <div class="add-message-container">
                        <textarea id="freeform" name="freeform">Type new message here...</textarea>
                        <button type="button">Send</button>
                    </div>
                </div>
        
            </div>
        
        
            
        </main>
    )
}