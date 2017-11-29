public with sharing class SoundClipController {
    @AuraEnabled
    public static SoundClip__c getSoundClip(Id soundClipId) {
        List<SoundClip__c> soundClips = [SELECT Id, Name, fileUrl__c from SoundClip__c where Id=:soundClipId];
        return soundClips[0]; 
    }
}