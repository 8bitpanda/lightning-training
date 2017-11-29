({
    alert : function(component,title,message) {
        $A.createComponent(
            "c:modalDialog",
            {
                "title": title,
                "body": message,
                "onclose": component.getReference("c.onDestroyModalDialog"),
                "oncancel": component.getReference("c.onDestroyModalDialog"),
                "onconfirm": component.getReference("c.onDestroyModalDialog")
            },
            function(msgBox){
                //Add the new button to the body array
                if (component.isValid()) {
                    var targetCmp = 
                        component.find('optionalModalDialog');
                    var body = targetCmp.get("v.body");
                    body.push(msgBox);
                    targetCmp.set("v.body", body);                      
                }
            }
        );
        
    },
    
    raiseS1Event: function(component,event,helper,eventName,params) {
        var evt = $A.get(eventName);
        if (evt) {
            evt.setParams(params);
            evt.fire();
        } else {
            helper.alert(
                component,
                "Feature Only Available in Salesforce1",
                $A.get("$Label.c.FeatureNotAvailable")
            );
            
        }
        
    }
})