import { LightningElement,track } from 'lwc';
import getPerson from '@salesforce/apex/ComoboboxWithDatatableClass.getAccounts';
import getContacts from '@salesforce/apex/ComoboboxWithDatatableClass.getContacts';
const columns = [
{label : 'Name' , fieldName: 'Name'},
{label : 'Phone' , fieldName: 'Id'},

]

export default class ComboBoxWithDataTAble extends LightningElement {
@track isVisible =false;
@track value ='';
@track perOptions = [];
@track data = [];
@track columns = columns;

get options(){
    return this.perOptions;
    }
connectedCallback(){
    getPerson()
        .then(res =>{
        let arr =[];
        for(var i=0; i<res.length;i++){
        arr.push({ label :res[i].Name ,value :res[i].Id})
        }
        this.perOptions = arr;
        })
        }

        handleChanged(event){
        this.isVisible = true;
        this.value = event.detail.value;
        getContacts({ selectedAccountId : this.value}) 
    .then( result =>{
        
        this.data = result;
    })
    .catch( error =>{
        window.alert("error:"+error)
    })
        }  
}