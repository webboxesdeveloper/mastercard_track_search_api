# MastercardTrackSearchApi.NewBulkSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lookupType** | **String** | Type of Entity being queried. Alphanumeric characters allowed. | 
**maximumMatches** | **Number** | Maximum number of matches to be returned per record. Default 1, Max 5 | [optional] 
**minimumConfidenceThreshold** | **String** | Minimum confidence match to be included in results. | [optional] 
**requestingEntity** | [**RequesterInformation**](RequesterInformation.md) |  | [optional] 
**searches** | [**[SearchRequestEntity]**](SearchRequestEntity.md) | List of all suppliers or buyers included in the original bulk search request. | [optional] 


