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
    instance = new MastercardTrackSearchApi.BpsDetails();
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

  describe('BpsDetails', function() {
    it('should create an instance of BpsDetails', function() {
      // uncomment below and update the code to test BpsDetails
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be.a(MastercardTrackSearchApi.BpsDetails);
    });

    it('should have the property a2aEnabled (base name: "a2aEnabled")', function() {
      // uncomment below and update the code to test the property a2aEnabled
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property a2aPreferences (base name: "a2aPreferences")', function() {
      // uncomment below and update the code to test the property a2aPreferences
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property a2aRecency (base name: "a2aRecency")', function() {
      // uncomment below and update the code to test the property a2aRecency
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property cardEnabled (base name: "cardEnabled")', function() {
      // uncomment below and update the code to test the property cardEnabled
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property cardPreferences (base name: "cardPreferences")', function() {
      // uncomment below and update the code to test the property cardPreferences
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property cardRecency (base name: "cardRecency")', function() {
      // uncomment below and update the code to test the property cardRecency
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionEnabled (base name: "transactionEnabled")', function() {
      // uncomment below and update the code to test the property transactionEnabled
      //var instance = new MastercardTrackSearchApi.BpsDetails();
      //expect(instance).to.be();
    });

  });

}));
