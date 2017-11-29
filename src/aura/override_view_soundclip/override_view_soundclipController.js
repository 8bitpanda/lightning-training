({
    doInit : function(component, event, helper) {   
        helper.callServer(
            component,
            "c.getSoundClip",
            function(response) {
                component.set('v.soundClip',response);
            }, 
            {soundClipId: component.get('v.recordId')}
        );
    },
    
    onListen: function(component,event,helper) {
        component.find('audioPlayer').getElement().play();
    }
    
})