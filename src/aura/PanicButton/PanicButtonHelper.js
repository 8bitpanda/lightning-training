({

    playSound: function(component) {
        var domElem = component.find('audioclip').getElement();
        domElem.src = component.get('v.soundUrl');
        domElem.play();
    },

    onStartPlaying: function(component, helper) {
        var msgElem = component.find('message');
        $A.util.removeClass(msgElem, 'slds-hide');
        helper.playSound(component);
    },

    onEndPlaying: function(component) {
        var msgElem = component.find('message');
        $A.util.addClass(msgElem, 'slds-hide');
    }

})