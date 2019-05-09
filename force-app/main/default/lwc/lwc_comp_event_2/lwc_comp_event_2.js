import { LightningElement,track } from 'lwc';

export default class Lwc_comp_event_2 extends LightningElement {
    @track data;

    
    handleTestEvent(event){
        console.log('---inner--');
        this.data = event.detail.param;
    }

    handleTestEventOuter(event){
        console.log('---outer--');
        this.data = event.detail.param;
    }

    handleTestEventOuterOuter(event){
        console.log('---outer2--');
        this.data = event.detail.param;
    }
}