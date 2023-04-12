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
import SearchResults from './SearchResults';

/**
 * The BulkSearchResults model module.
 * @module model/BulkSearchResults
 * @version 1.0.0
 */
class BulkSearchResults {
    /**
     * Constructs a new <code>BulkSearchResults</code>.
     * Data that contains all the results of the bulk search.
     * @alias module:model/BulkSearchResults
     */
    constructor() { 
        
        BulkSearchResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkSearchResults} obj Optional instance to populate.
     * @return {module:model/BulkSearchResults} The populated <code>BulkSearchResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkSearchResults();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [SearchResults]);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BulkSearchResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BulkSearchResults</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                SearchResults.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Number of results returned.
 * @member {Number} count
 */
BulkSearchResults.prototype['count'] = undefined;

/**
 * Data which contains the details of the search results.
 * @member {Array.<module:model/SearchResults>} items
 */
BulkSearchResults.prototype['items'] = undefined;

/**
 * Maximum results returned from search query.
 * @member {Number} limit
 * @default 25
 */
BulkSearchResults.prototype['limit'] = 25;

/**
 * Starting row of results started at.
 * @member {Number} offset
 */
BulkSearchResults.prototype['offset'] = undefined;

/**
 * Total number of results available to be returned.
 * @member {Number} total
 */
BulkSearchResults.prototype['total'] = undefined;






export default BulkSearchResults;

