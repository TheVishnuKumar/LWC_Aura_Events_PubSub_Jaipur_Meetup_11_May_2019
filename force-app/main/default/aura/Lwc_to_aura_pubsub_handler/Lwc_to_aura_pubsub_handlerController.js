({
    registerListener : function(component, event, helper) {
        var pubsub = component.find('pubsub');

        var callback = $A.getCallback(function(data) {
            component.set("v.data", data);
        });

        pubsub.registerListener('my-pubsub-event', callback);
	}
})