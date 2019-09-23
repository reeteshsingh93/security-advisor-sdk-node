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

var ApiClient = require('../ApiClient');



/**
 * The InlineResponse2002FindingDataTransferred model module.
 * @module model/InlineResponse2002FindingDataTransferred
 */

/**
 * Constructs a new <code>InlineResponse2002FindingDataTransferred</code>.
 * It provides details about data transferred between clients and servers
 * @alias module:model/InlineResponse2002FindingDataTransferred
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>InlineResponse2002FindingDataTransferred</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InlineResponse2002FindingDataTransferred} obj Optional instance to populate.
 * @return {module:model/InlineResponse2002FindingDataTransferred} The populated <code>InlineResponse2002FindingDataTransferred</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('client_bytes')) {
      obj['client_bytes'] = ApiClient.convertToType(data['client_bytes'], 'Number');
    }
      if (data.hasOwnProperty('server_bytes')) {
      obj['server_bytes'] = ApiClient.convertToType(data['server_bytes'], 'Number');
    }
      if (data.hasOwnProperty('client_packets')) {
      obj['client_packets'] = ApiClient.convertToType(data['client_packets'], 'Number');
    }
      if (data.hasOwnProperty('server_packets')) {
      obj['server_packets'] = ApiClient.convertToType(data['server_packets'], 'Number');
    }
    }
  return obj;
}

/**
 * The number of client bytes transferred
 * @member {Number} client_bytes
 */
exports.prototype['client_bytes'] = undefined;
/**
 * The number of server bytes transferred
 * @member {Number} server_bytes
 */
exports.prototype['server_bytes'] = undefined;
/**
 * The number of client packets transferred
 * @member {Number} client_packets
 */
exports.prototype['client_packets'] = undefined;
/**
 * The number of server packets transferred
 * @member {Number} server_packets
 */
exports.prototype['server_packets'] = undefined;



module.exports = exports;
