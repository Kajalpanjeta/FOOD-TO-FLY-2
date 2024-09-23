import React, { Component } from 'react'

export class Chat extends Component {
    componentDidMount() {

        // (function (d, m) {
        //     var kommunicateSettings =
        //         { "appId": "ca2e64be52cb9a146cf16467fefc2d81", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        //     window.kommunicate = m; m._globals = kommunicateSettings;
        // })(document, window.kommunicate || {});

        (function(d, m){
            var kommunicateSettings = 
                {"appId":"ca2e64be52cb9a146cf16467fefc2d81","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

    }
    render() {
        return (
            <div>Chat</div>
        )
    }
}

export default Chat