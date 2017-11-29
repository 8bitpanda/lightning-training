({
    onMenuClick: function(controller,event,helper) {
        alert(event.getSource().get('v.label'));
    },
    
    onRender: function(component,event,helper) {
        var targetEl =  component.find("mainApp").getElement();
        targetEl.addEventListener("touchmove", function(e) {
            e.stopPropagation();
        }, false);
        
    },

    spinnerShow : function (component, event, helper) {
        var m = component.find('modalspinner');
        $A.util.removeClass(m, "slds-hide");
    },
    
    spinnerHide : function (component, event, helper) {
        var m = component.find('modalspinner');
        $A.util.addClass(m, "slds-hide");
    }
})