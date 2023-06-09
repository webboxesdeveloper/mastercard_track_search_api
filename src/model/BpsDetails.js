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

/**
 * The BpsDetails model module.
 * @module model/BpsDetails
 * @version 1.0.0
 */
class BpsDetails {
    /**
     * Constructs a new <code>BpsDetails</code>.
     * BPS related info for buyer or supplier from the search result.
     * @alias module:model/BpsDetails
     */
    constructor() { 
        
        BpsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BpsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BpsDetails} obj Optional instance to populate.
     * @return {module:model/BpsDetails} The populated <code>BpsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BpsDetails();

            if (data.hasOwnProperty('a2aEnabled')) {
                obj['a2aEnabled'] = ApiClient.convertToType(data['a2aEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('a2aPreferences')) {
                obj['a2aPreferences'] = ApiClient.convertToType(data['a2aPreferences'], ['String']);
            }
            if (data.hasOwnProperty('a2aRecency')) {
                obj['a2aRecency'] = ApiClient.convertToType(data['a2aRecency'], 'String');
            }
            if (data.hasOwnProperty('cardEnabled')) {
                obj['cardEnabled'] = ApiClient.convertToType(data['cardEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('cardPreferences')) {
                obj['cardPreferences'] = ApiClient.convertToType(data['cardPreferences'], ['String']);
            }
            if (data.hasOwnProperty('cardRecency')) {
                obj['cardRecency'] = ApiClient.convertToType(data['cardRecency'], 'String');
            }
            if (data.hasOwnProperty('transactionEnabled')) {
                obj['transactionEnabled'] = ApiClient.convertToType(data['transactionEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BpsDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BpsDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['a2aPreferences'])) {
            throw new Error("Expected the field `a2aPreferences` to be an array in the JSON data but got " + data['a2aPreferences']);
        }
        // ensure the json data is a string
        if (data['a2aRecency'] && !(typeof data['a2aRecency'] === 'string' || data['a2aRecency'] instanceof String)) {
            throw new Error("Expected the field `a2aRecency` to be a primitive type in the JSON string but got " + data['a2aRecency']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cardPreferences'])) {
            throw new Error("Expected the field `cardPreferences` to be an array in the JSON data but got " + data['cardPreferences']);
        }
        // ensure the json data is a string
        if (data['cardRecency'] && !(typeof data['cardRecency'] === 'string' || data['cardRecency'] instanceof String)) {
            throw new Error("Expected the field `cardRecency` to be a primitive type in the JSON string but got " + data['cardRecency']);
        }

        return true;
    }


}



/**
 * Indicator showing the Entity is available for A2A transactions in Track BPS.
 * @member {Boolean} a2aEnabled
 */
BpsDetails.prototype['a2aEnabled'] = undefined;

/**
 * What types of controls does the Entity have for A2A transactions in Track BPS.
 * @member {Array.<String>} a2aPreferences
 */
BpsDetails.prototype['a2aPreferences'] = undefined;

/**
 * When last the Entity had a A2A transaction in Track BPS.
 * @member {String} a2aRecency
 */
BpsDetails.prototype['a2aRecency'] = undefined;

/**
 * Indicator showing the Entity available for card transactions in Track BPS.
 * @member {Boolean} cardEnabled
 */
BpsDetails.prototype['cardEnabled'] = undefined;

/**
 * What types of controls does the Entity have for card transactions in Track BPS.
 * @member {Array.<String>} cardPreferences
 */
BpsDetails.prototype['cardPreferences'] = undefined;

/**
 * When last the Entity had a card transaction in Track BPS.
 * @member {String} cardRecency
 */
BpsDetails.prototype['cardRecency'] = undefined;

/**
 * Indicadtor showing the Entity available for transactions in Track BPS.
 * @member {Boolean} transactionEnabled
 */
BpsDetails.prototype['transactionEnabled'] = undefined;






export default BpsDetails;

