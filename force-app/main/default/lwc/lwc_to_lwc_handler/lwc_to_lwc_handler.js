import { LightningElement,wire,track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import pubsub from 'c/pubsub';

export default class Lwc_to_lwc_handler extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    @track data;

    handlePubSubEvent(data) {
        this.data = data;
    }

    connectedCallback(){
        pubsub.registerListener('my-pubsub-event', this.handlePubSubEvent, this);
    }
}