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
    instance = new MastercardTrackSearchApi.RequesterInformation();
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

  describe('RequesterInformation', function() {
    it('should create an instance of RequesterInformation', function() {
      // uncomment below and update the code to test RequesterInformation
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be.a(MastercardTrackSearchApi.RequesterInformation);
    });

    it('should have the property bpsProfileId (base name: "bpsProfileId")', function() {
      // uncomment below and update the code to test the property bpsProfileId
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

    it('should have the property businessAddress (base name: "businessAddress")', function() {
      // uncomment below and update the code to test the property businessAddress
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

    it('should have the property businessName (base name: "businessName")', function() {
      // uncomment below and update the code to test the property businessName
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

    it('should have the property organisationIdentifications (base name: "organisationIdentifications")', function() {
      // uncomment below and update the code to test the property organisationIdentifications
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new MastercardTrackSearchApi.RequesterInformation();
      //expect(instance).to.be();
    });

  });

}));
