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
import Error from './Error';

/**
 * The ErrorList model module.
 * @module model/ErrorList
 * @version 1.0.0
 */
class ErrorList {
    /**
     * Constructs a new <code>ErrorList</code>.
     * @alias module:model/ErrorList
     * @param error {Array.<module:model/Error>} A List of Errors resulting from a request
     */
    constructor(error) { 
        
        ErrorList.initialize(this, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error) { 
        obj['Error'] = error;
    }

    /**
     * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorList} obj Optional instance to populate.
     * @return {module:model/ErrorList} The populated <code>ErrorList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorList();

            if (data.hasOwnProperty('Error')) {
                obj['Error'] = ApiClient.convertToType(data['Error'], [Error]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ErrorList.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['Error']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Error'])) {
                throw new Error("Expected the field `Error` to be an array in the JSON data but got " + data['Error']);
            }
            // validate the optional field `Error` (array)
            for (const item of data['Error']) {
                Error.validateJSON(item);
            };
        }

        return true;
    }


}

ErrorList.RequiredProperties = ["Error"];

/**
 * A List of Errors resulting from a request
 * @member {Array.<module:model/Error>} Error
 */
ErrorList.prototype['Error'] = undefined;






export default ErrorList;
