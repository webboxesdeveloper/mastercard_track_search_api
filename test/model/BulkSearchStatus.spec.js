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
    instance = new MastercardTrackSearchApi.BulkSearchStatus();
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

  describe('BulkSearchStatus', function() {
    it('should create an instance of BulkSearchStatus', function() {
      // uncomment below and update the code to test BulkSearchStatus
      //var instance = new MastercardTrackSearchApi.BulkSearchStatus();
      //expect(instance).to.be.a(MastercardTrackSearchApi.BulkSearchStatus);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MastercardTrackSearchApi.BulkSearchStatus();
      //expect(instance).to.be();
    });

  });

}));
