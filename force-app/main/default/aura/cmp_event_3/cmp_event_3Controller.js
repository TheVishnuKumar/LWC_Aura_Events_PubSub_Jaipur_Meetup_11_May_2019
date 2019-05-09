({
    fireevent1 : function(component, event, helper) { 
        var myEvent = component.getEvent("testEvent1");
        myEvent.setParams({"testParam": "Data for Component 1"});
        myEvent.fire();
    },
    
    fireevent2 : function(component, event, helper) { 
        var myEvent = component.getEvent("testEvent2");
        myEvent.setParams({"testParam": "Data for Component 2"});
        myEvent.fire();
    }
})
