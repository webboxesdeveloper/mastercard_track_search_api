# MastercardTrackSearchApi.TrackSearchApi

All URIs are relative to *https://sandbox.api.mastercard.com/track/search*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBulkSearchResults**](TrackSearchApi.md#getBulkSearchResults) | **GET** /bulk-searches/{bulk_search_id}/results | Retrieve bulk request result
[**getBulkSearchStatus**](TrackSearchApi.md#getBulkSearchStatus) | **GET** /bulk-searches/{bulk_search_id} | Retrieve bulk request metadata
[**submitBulkSearch**](TrackSearchApi.md#submitBulkSearch) | **POST** /bulk-searches | Create a bulk request



## getBulkSearchResults

> BulkSearchResult getBulkSearchResults(bulkSearchId, opts)

Retrieve bulk request result

This endpoint allows agents to retrieve results of the supplier or buyer searches.

### Example

```javascript
import MastercardTrackSearchApi from 'mastercard_track_search_api';

let apiInstance = new MastercardTrackSearchApi.TrackSearchApi();
let bulkSearchId = f66ae13b-6a11-41ab-bc9a-47948767d6fb; // String | Unique UUID assigned to bulk request.
let opts = {
  'searchRequestId': 9202f222, // String | An identifier for a specific search request.
  'offset': 0, // Number | Starting row of results started at.
  'limit': 25 // Number | Limit sets the number of results you would like to see.
};
apiInstance.getBulkSearchResults(bulkSearchId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkSearchId** | **String**| Unique UUID assigned to bulk request. | 
 **searchRequestId** | **String**| An identifier for a specific search request. | [optional] 
 **offset** | **Number**| Starting row of results started at. | [optional] [default to 0]
 **limit** | **Number**| Limit sets the number of results you would like to see. | [optional] [default to 25]

### Return type

[**BulkSearchResult**](BulkSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBulkSearchStatus

> BulkSearchStatus getBulkSearchStatus(bulkSearchId)

Retrieve bulk request metadata

This endpoint allows agents to check the status of their bulk requests.

### Example

```javascript
import MastercardTrackSearchApi from 'mastercard_track_search_api';

let apiInstance = new MastercardTrackSearchApi.TrackSearchApi();
let bulkSearchId = f66ae13b-6a11-41ab-bc9a-47948767d6fb; // String | Unique UUID assigned to bulk request.
apiInstance.getBulkSearchStatus(bulkSearchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkSearchId** | **String**| Unique UUID assigned to bulk request. | 

### Return type

[**BulkSearchStatus**](BulkSearchStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitBulkSearch

> NewBulkSearchResult submitBulkSearch(newBulkSearch)

Create a bulk request

This endpoint allows agents to initialize searching for supplier or buyer.

### Example

```javascript
import MastercardTrackSearchApi from 'mastercard_track_search_api';

let apiInstance = new MastercardTrackSearchApi.TrackSearchApi();
let newBulkSearch = new MastercardTrackSearchApi.NewBulkSearch(); // NewBulkSearch | Bulk Search Request to look up Buyers or Suppliers.
apiInstance.submitBulkSearch(newBulkSearch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newBulkSearch** | [**NewBulkSearch**](NewBulkSearch.md)| Bulk Search Request to look up Buyers or Suppliers. | 

### Return type

[**NewBulkSearchResult**](NewBulkSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

