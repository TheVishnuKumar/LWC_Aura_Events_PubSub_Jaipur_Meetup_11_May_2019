import { LightningElement } from 'lwc';

export default class Lwc_comp_event_3 extends LightningElement {
    
    fireevent1(){
        const custEvnt = new CustomEvent('testeventone', {
            detail: {
                param: 'Data for LWC 1'
            },
            bubbles: true, 
            composed: true
        });
        this.dispatchEvent(custEvnt);
    }

    fireevent2(){
        const custEvnt = new CustomEvent('testeventtwo', {
            detail: {
                param: 'Data for LWC 2'
            }
        });
        this.dispatchEvent(custEvnt);
    }
}