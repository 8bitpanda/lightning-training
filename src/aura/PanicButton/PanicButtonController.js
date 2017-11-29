({
    handleClick: function(component, event, helper) {

        helper.onStartPlaying(component, helper);

    },

    onPlaybackEnded: function(component, event, helper) {
        helper.onEndPlaying(component, helper)
    },

    doInit: function(component, event, helper) {
        helper.callServer(
            component,
            "c.getMedia",
            function(response) {
                var defaultSound = component.get('v.sound');
                component.set('v.soundOptions', response);

                // set default value for soundSelector
                for (var i = 0; i < response.length; i++) {
                    if (response[i].Name == defaultSound) {

                        // allow 10 ms for <option> tags
                        // to be created

                        setTimeout(
                            $A.getCallback(function() {
                                if (component.isValid()) {
                                    component.set("v.soundUrl",
                                        response[i].fileUrl__c);
                                }
                            }), 10);

                        break;
                    } // if
                } // for  
            } // function
        ); // callserver
    }
})