({
    onToolbarButtonClick : function(component, event, helper) {
        var selectedButtonId = event.getSource().getLocalId();
        
        component.find(
           component.get('v.selectedButtonId')
        ).set("v.variant", "neutral");

        component.find(selectedButtonId).set("v.variant", "brand");

        component.set('v.selectedButtonId',selectedButtonId);
        
        if (selectedButtonId == 'btnCall'){
            helper.toggleCard(component,"dialbutton");
        } else {
            helper.toggleCard(component,"soundeffects");
        }
        
    }
    
})