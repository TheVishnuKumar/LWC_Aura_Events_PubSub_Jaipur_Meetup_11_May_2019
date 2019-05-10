import { LightningElement } from 'lwc';

export default class Lwc_to_aura_publisher extends LightningElement {
    
    fireevent(){
        const custEvnt = new CustomEvent('eventforaura', {
            detail: {
                param: 'Data from LWC to Aura'
            }
        });
        this.dispatchEvent(custEvnt);
    }
}