public with sharing class ContactPrimaryPhoneDialButtonController {
    @AuraEnabled
    public static String getPhone(Id contactId) {
        List<Contact> contact = [SELECT Phone from Contact where Id=:contactId];
        return contact.get(0).Phone;
    }
}