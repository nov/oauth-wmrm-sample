(function(window, document, undefined) {
    var button = document.getElementById("authorize-button");
    button.addEventListener("click", function(evt) {
        var query = (function() {
            var queryStr = location.search.substr(1);
            var query = {};
            queryStr.split("&").forEach(function(kvStr, i) {
                var kv = kvStr.split("=");
                query[kv[0]] = decodeURIComponent(kv[1]);
            });
            return query;
        })();

        console.log(query);
        
        var redirectURI = query["redirect_uri"];
        var webMessageRequest = {
            web_message_uri: query["web_message_uri"],
            web_message_target: query["web_message_target"]
        };
        var authorizationResponse = {
            code: "SplxlOBeZQQYbYS6WxSbIA",
            state: query["state"] 
        };
        
        var mainWin = (window.opener != window) ? window.opener : window.parent;

        // For relay mode
        if (webMessageRequest["web_message_uri"] && webMessageRequest["web_message_target"]) {
            window.addEventListener("message", function(evt) {
                if (evt.origin != redirectURI)
                    return;      // replay mode
                
                switch (evt.data.type) {
                case "relay_response":
                    messageTargetWindow = evt.source.frames[webMessageRequest["web_message_target"]];
                    console.log(messageTargetWindow);
                    if (messageTargetWindow) {
                        messageTargetWindow.postMessage({
                            type: "authorization_response", 
                            response: authorizationResponse 
                        }, webMessageRequest["web_message_uri"]);

                        window.close();
                    }
                default:
                }
            }, false);

            mainWin.postMessage({ type: "relay_request" }, redirectURI);
        }
        else {
            mainWin.postMessage({
                type: "authorization_response",
                response: authorizationResponse
            }, redirectURI);

            window.close();
        }
    }, false);
})(this, this.document);
