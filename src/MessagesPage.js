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
                        <div class="message-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">Username</div>
                            <div class="message-time">Message date | Message time</div>
                            <div class="message-desc">Some message preview kfishfohsrhgosrhr lsfhrk lscirsjoihfoso rsurhfou hseslnkl sndjlnvl shvlhzrl hflshohfosheor</div>
                        </div>
                    </div>

                    <hr />

                    <div class="message-preview">
                        <div class="message-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">Username</div>
                            <div class="message-time">Message date | Message time</div>
                            <div class="message-desc">Some message preview kfishfohsrhgosrhr lsfhrk lscirsjoihfoso rsurhfou hseslnkl sndjlnvl shvlhzrl hflshohfosheor</div>
                        </div>
                    </div>

                    <hr />

                    <div class="message-preview">
                        <div class="message-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div>
                            <div class="message-name">Username</div>
                            <div class="message-time">Message date | Message time</div>
                            <div class="message-desc">Some message preview kfishfohsrhgosrhr lsfhrk lscirsjoihfoso rsurhfou hseslnkl sndjlnvl shvlhzrl hflshohfosheor</div>
                        </div>
                    </div>

                    <hr />

                </div>
        
                
                <div class="message-content">
                    <div class="message-content-name">Name</div>
                    <hr />

                    <div class="received-message">
                        <img src={require("./img/user-img.jpg")} alt="user profile" />
                        <div class="message">Some message lshcosrufy kschrkhkf</div>
                    </div>

                    <div class="sent-message">
                        <img src={require("./img/user-img.jpg")} alt="user profile" />
                        <div class="message">Some message lshcosrufy kschrkhkf</div>
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