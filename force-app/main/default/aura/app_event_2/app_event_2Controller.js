({
    fireevent : function(component, event, helper) { 
        var myEvent = $A.get("e.c:appEvent");
        myEvent.setParams({"testParam": "Data for Component 1: Application Event Demo"});
        myEvent.fire();
    }
})