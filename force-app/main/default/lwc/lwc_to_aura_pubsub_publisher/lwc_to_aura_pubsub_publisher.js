import { LightningElement,wire  } from 'lwc';
import pubsub from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class Lwc_to_aura_pubsub_publisher extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    fireevent(){
        pubsub.fireEvent(this.pageRef, 'my-pubsub-event', 'PubSub fired for LWC to Aura.');
    }
}