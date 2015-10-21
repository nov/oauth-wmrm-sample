/**
        $('#unauthenticated-link').click(function () {
          window.open($(this).attr('href'), '_unauthenticated', 'width=500, height=400');
          $(window).on('message', function (event) {
            event = event.originalEvent;
            if (event.origin != 'http://wmrm-as.dev')
              console.error('invalid origin', event.origin);
            if (event.data && event.data.type == 'relay_request')
              event.source.postMessage({
                type: 'relay_response'
              }, event.origin);
            $(window).off('message', arguments.callee);
          });
          return false;
        });

*/
(function(window, document, undefined) {
    var webMessageTarget;
    var webMessageTargetWindow = document.getElementById("message-target");
    for (var i = 0; i < window.frames.length; i++) {
        if (window.frames[i] == webMessageTargetWindow) {
            webMessageTarget = i;
            break;
        }
    }

    var link = document.getElementById("unauthenticated-link");
    link.addEventListener("click", function(evt) {
        window.open(evt.srcElement.href, "_new", "width=500,height=400");

        window.addEventListener("message", function(evt) {
            console.dir(evt);
        
            if (evt.origin != "http://wmrm-as.dev") {
                console.error("invalid origin", event.origin);
            }

            switch (evt.data.type) {
            case "relay_request":
                evt.source.postMessage({ type: "relay_response" }, evt.origin);
                (evt.data.error) ? callback(null, evt.data) : callback(evt.data, null);
                window.removeEventListener("message", arguments.callee, false);
                break;
            default:
            }
        }, false);

        
        evt.stopPropagation();
        evt.preventDefault();
        return false;
    }, false);

})(this, this.document);
