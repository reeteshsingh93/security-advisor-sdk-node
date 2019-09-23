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
 * The InlineResponse2001ReportedBy model module.
 * @module model/InlineResponse2001ReportedBy
 */

/**
 * Constructs a new <code>InlineResponse2001ReportedBy</code>.
 * The entity reporting a note
 * @alias module:model/InlineResponse2001ReportedBy
 * @class
 * @param id {String} The id of this reporter
 * @param title {String} The title of this reporter
 */
var exports = function(id, title) {
  var _this = this;

  _this['id'] = id;
  _this['title'] = title;

};

/**
 * Constructs a <code>InlineResponse2001ReportedBy</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InlineResponse2001ReportedBy} obj Optional instance to populate.
 * @return {module:model/InlineResponse2001ReportedBy} The populated <code>InlineResponse2001ReportedBy</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('title')) {
      obj['title'] = ApiClient.convertToType(data['title'], 'String');
    }
      if (data.hasOwnProperty('url')) {
      obj['url'] = ApiClient.convertToType(data['url'], 'String');
    }
    }
  return obj;
}

/**
 * The id of this reporter
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The title of this reporter
 * @member {String} title
 */
exports.prototype['title'] = undefined;
/**
 * The url of this reporter
 * @member {String} url
 */
exports.prototype['url'] = undefined;



module.exports = exports;
