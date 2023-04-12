/**
 * Mastercard Track Search API
 * All functionality related to the search service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BulkSearchResult from '../model/BulkSearchResult';
import BulkSearchStatus from '../model/BulkSearchStatus';
import ErrorWrapper from '../model/ErrorWrapper';
import NewBulkSearch from '../model/NewBulkSearch';
import NewBulkSearchResult from '../model/NewBulkSearchResult';

/**
* TrackSearch service.
* @module api/TrackSearchApi
* @version 1.0.0
*/
export default class TrackSearchApi {

    /**
    * Constructs a new TrackSearchApi. 
    * @alias module:api/TrackSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getBulkSearchResults operation.
     * @callback module:api/TrackSearchApi~getBulkSearchResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve bulk request result
     * This endpoint allows agents to retrieve results of the supplier or buyer searches.
     * @param {String} bulkSearchId Unique UUID assigned to bulk request.
     * @param {Object} opts Optional parameters
     * @param {String} [searchRequestId] An identifier for a specific search request.
     * @param {Number} [offset = 0)] Starting row of results started at.
     * @param {Number} [limit = 25)] Limit sets the number of results you would like to see.
     * @param {module:api/TrackSearchApi~getBulkSearchResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSearchResult}
     */
    getBulkSearchResults(bulkSearchId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'bulkSearchId' is set
      if (bulkSearchId === undefined || bulkSearchId === null) {
        throw new Error("Missing the required parameter 'bulkSearchId' when calling getBulkSearchResults");
      }

      let pathParams = {
        'bulk_search_id': bulkSearchId
      };
      let queryParams = {
        'search_request_id': opts['searchRequestId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BulkSearchResult;
      return this.apiClient.callApi(
        '/bulk-searches/{bulk_search_id}/results', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBulkSearchStatus operation.
     * @callback module:api/TrackSearchApi~getBulkSearchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSearchStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve bulk request metadata
     * This endpoint allows agents to check the status of their bulk requests.
     * @param {String} bulkSearchId Unique UUID assigned to bulk request.
     * @param {module:api/TrackSearchApi~getBulkSearchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSearchStatus}
     */
    getBulkSearchStatus(bulkSearchId, callback) {
      let postBody = null;
      // verify the required parameter 'bulkSearchId' is set
      if (bulkSearchId === undefined || bulkSearchId === null) {
        throw new Error("Missing the required parameter 'bulkSearchId' when calling getBulkSearchStatus");
      }

      let pathParams = {
        'bulk_search_id': bulkSearchId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BulkSearchStatus;
      return this.apiClient.callApi(
        '/bulk-searches/{bulk_search_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitBulkSearch operation.
     * @callback module:api/TrackSearchApi~submitBulkSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewBulkSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a bulk request
     * This endpoint allows agents to initialize searching for supplier or buyer.
     * @param {module:model/NewBulkSearch} newBulkSearch Bulk Search Request to look up Buyers or Suppliers.
     * @param {module:api/TrackSearchApi~submitBulkSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewBulkSearchResult}
     */
    submitBulkSearch(newBulkSearch, callback) {
      let postBody = newBulkSearch;
      // verify the required parameter 'newBulkSearch' is set
      if (newBulkSearch === undefined || newBulkSearch === null) {
        throw new Error("Missing the required parameter 'newBulkSearch' when calling submitBulkSearch");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NewBulkSearchResult;
      return this.apiClient.callApi(
        '/bulk-searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
