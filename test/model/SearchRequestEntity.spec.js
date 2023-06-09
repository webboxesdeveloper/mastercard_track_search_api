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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MastercardTrackSearchApi);
  }
}(this, function(expect, MastercardTrackSearchApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MastercardTrackSearchApi.SearchRequestEntity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchRequestEntity', function() {
    it('should create an instance of SearchRequestEntity', function() {
      // uncomment below and update the code to test SearchRequestEntity
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be.a(MastercardTrackSearchApi.SearchRequestEntity);
    });

    it('should have the property annualInvoiceCount (base name: "annualInvoiceCount")', function() {
      // uncomment below and update the code to test the property annualInvoiceCount
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property annualNumberOfTransactions (base name: "annualNumberOfTransactions")', function() {
      // uncomment below and update the code to test the property annualNumberOfTransactions
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property annualTransactionAmount (base name: "annualTransactionAmount")', function() {
      // uncomment below and update the code to test the property annualTransactionAmount
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property businessAddress (base name: "businessAddress")', function() {
      // uncomment below and update the code to test the property businessAddress
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property businessName (base name: "businessName")', function() {
      // uncomment below and update the code to test the property businessName
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property organisationIdentifications (base name: "organisationIdentifications")', function() {
      // uncomment below and update the code to test the property organisationIdentifications
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property paymentTerms (base name: "paymentTerms")', function() {
      // uncomment below and update the code to test the property paymentTerms
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

    it('should have the property searchRequestId (base name: "searchRequestId")', function() {
      // uncomment below and update the code to test the property searchRequestId
      //var instance = new MastercardTrackSearchApi.SearchRequestEntity();
      //expect(instance).to.be();
    });

  });

}));
