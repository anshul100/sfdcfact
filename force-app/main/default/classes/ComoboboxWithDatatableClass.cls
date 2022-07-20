public class ComoboboxWithDatatableClass {
    @AuraEnabled
    public static list<Account> getAccounts(){
        
        list<account> acc = [select id,name from account];
        return acc;
        
        
    }
    @AuraEnabled
    public static list<Contact> getContacts(id selectedAccountId){
        
        list<contact> con = [select id,name,accountId from contact where accountid=:selectedAccountId];
        return con;
        
        
    }
}