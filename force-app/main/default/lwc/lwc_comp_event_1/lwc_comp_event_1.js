import { LightningElement,track } from 'lwc';

export default class Lwc_comp_event_1 extends LightningElement {
    @track data;

    handleTestEvent(event){
        this.data = event.detail.param;
    }
}