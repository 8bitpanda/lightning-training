@isTest
public class PanicButtonControllerTests2 {
    static testMethod void testSchema() {
        
        // insert mock data
        SoundClip__c s1 = new SoundClip__c(
          name='Explosion', 
          fileUrl__c = '/resource/PanicButtonAssets/PanicButton/Explosion.mp3'
        );  

      List<SoundClip__c> sList = new List<SoundClip__c>();
          sList.add(s1);       
          insert sList;
    
        
          List<SoundClip__c> SoundClips;
          SoundClips = PanicButtonServerController.getMedia();
        
      System.debug('MediaClips '  + SoundClips);
          System.assertNotEquals(true,SoundClips.isEmpty());
    }

}