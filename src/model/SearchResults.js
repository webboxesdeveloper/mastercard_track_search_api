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

import ApiClient from '../ApiClient';
import SearchResult from './SearchResult';

/**
 * The SearchResults model module.
 * @module model/SearchResults
 * @version 1.0.0
 */
class SearchResults {
    /**
     * Constructs a new <code>SearchResults</code>.
     * Data which contains the details of the search results.
     * @alias module:model/SearchResults
     */
    constructor() { 
        
        SearchResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResults} obj Optional instance to populate.
     * @return {module:model/SearchResults} The populated <code>SearchResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchResults();

            if (data.hasOwnProperty('bpsRegistrationId')) {
                obj['bpsRegistrationId'] = ApiClient.convertToType(data['bpsRegistrationId'], 'String');
            }
            if (data.hasOwnProperty('isBpsRegistered')) {
                obj['isBpsRegistered'] = ApiClient.convertToType(data['isBpsRegistered'], 'Boolean');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'String');
            }
            if (data.hasOwnProperty('isMatched')) {
                obj['isMatched'] = ApiClient.convertToType(data['isMatched'], 'Boolean');
            }
            if (data.hasOwnProperty('searchRequestId')) {
                obj['searchRequestId'] = ApiClient.convertToType(data['searchRequestId'], 'String');
            }
            if (data.hasOwnProperty('searchResult')) {
                obj['searchResult'] = SearchResult.constructFromObject(data['searchResult']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchResults</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bpsRegistrationId'] && !(typeof data['bpsRegistrationId'] === 'string' || data['bpsRegistrationId'] instanceof String)) {
            throw new Error("Expected the field `bpsRegistrationId` to be a primitive type in the JSON string but got " + data['bpsRegistrationId']);
        }
        // ensure the json data is a string
        if (data['confidence'] && !(typeof data['confidence'] === 'string' || data['confidence'] instanceof String)) {
            throw new Error("Expected the field `confidence` to be a primitive type in the JSON string but got " + data['confidence']);
        }
        // ensure the json data is a string
        if (data['searchRequestId'] && !(typeof data['searchRequestId'] === 'string' || data['searchRequestId'] instanceof String)) {
            throw new Error("Expected the field `searchRequestId` to be a primitive type in the JSON string but got " + data['searchRequestId']);
        }
        // validate the optional field `searchResult`
        if (data['searchResult']) { // data not null
          SearchResult.validateJSON(data['searchResult']);
        }

        return true;
    }


}



/**
 * Link Request Token to be used when requesting a link in Track BPS.
 * @member {String} bpsRegistrationId
 */
SearchResults.prototype['bpsRegistrationId'] = undefined;

/**
 * Indicator showing the entity is registered in Track BPS.
 * @member {Boolean} isBpsRegistered
 */
SearchResults.prototype['isBpsRegistered'] = undefined;

/**
 * Match confidence level (HIGH, MEDIUM or LOW).
 * @member {String} confidence
 */
SearchResults.prototype['confidence'] = undefined;

/**
 * Match versus No-Match Indicator.
 * @member {Boolean} isMatched
 */
SearchResults.prototype['isMatched'] = undefined;

/**
 * Every record must contain a request id as an identifier. Alphanumeric and hyphens are allowed.
 * @member {String} searchRequestId
 */
SearchResults.prototype['searchRequestId'] = undefined;

/**
 * @member {module:model/SearchResult} searchResult
 */
SearchResults.prototype['searchResult'] = undefined;






export default SearchResults;

