/**
 * Findings API
 * The Findings API 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.findings);
  }
}(this, function(expect, findings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new findings.InlineResponse2002FindingDataTransferred();
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

  describe('InlineResponse2002FindingDataTransferred', function() {
    it('should create an instance of InlineResponse2002FindingDataTransferred', function() {
      // uncomment below and update the code to test InlineResponse2002FindingDataTransferred
      //var instance = new findings.InlineResponse2002FindingDataTransferred();
      //expect(instance).to.be.a(findings.InlineResponse2002FindingDataTransferred);
    });

    it('should have the property clientBytes (base name: "client_bytes")', function() {
      // uncomment below and update the code to test the property clientBytes
      //var instance = new findings.InlineResponse2002FindingDataTransferred();
      //expect(instance).to.be();
    });

    it('should have the property serverBytes (base name: "server_bytes")', function() {
      // uncomment below and update the code to test the property serverBytes
      //var instance = new findings.InlineResponse2002FindingDataTransferred();
      //expect(instance).to.be();
    });

    it('should have the property clientPackets (base name: "client_packets")', function() {
      // uncomment below and update the code to test the property clientPackets
      //var instance = new findings.InlineResponse2002FindingDataTransferred();
      //expect(instance).to.be();
    });

    it('should have the property serverPackets (base name: "server_packets")', function() {
      // uncomment below and update the code to test the property serverPackets
      //var instance = new findings.InlineResponse2002FindingDataTransferred();
      //expect(instance).to.be();
    });

  });

}));