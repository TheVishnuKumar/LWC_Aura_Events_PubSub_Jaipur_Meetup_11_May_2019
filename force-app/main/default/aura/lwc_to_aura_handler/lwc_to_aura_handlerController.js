({
    doHandleCompEvent : function(component, event, helper) {
        //Getting event data
        var eventParam = event.getParam('param');
        
        //Setting event data into param
        component.set("v.data", eventParam);
	}
})
