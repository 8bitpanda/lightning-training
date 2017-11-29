public with sharing class StudentQBEForm {
   
   @AuraEnabled
   public static List<Course__c> getCourses() {
      return [
          SELECT id,name
          from Course__c
          order by name
      ]; 
   }
}