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
var InlineResponse2001CardElements = require('./InlineResponse2001CardElements');



/**
 * The InlineResponse2001Card model module.
 * @module model/InlineResponse2001Card
 */

/**
 * Constructs a new <code>InlineResponse2001Card</code>.
 * Card provides details about a card kind of note
 * @alias module:model/InlineResponse2001Card
 * @class
 * @param section {String} The section this card belongs to
 * @param title {String} The title of this card
 * @param subtitle {String} The subtitle of this card
 * @param findingNoteNames {Array.<String>} The finding note names associated to this card
 * @param elements {Array.<module:model/InlineResponse2001CardElements>} The elements of this card
 */
var exports = function(section, title, subtitle, findingNoteNames, elements) {
  var _this = this;

  _this['section'] = section;
  _this['title'] = title;
  _this['subtitle'] = subtitle;

  _this['finding_note_names'] = findingNoteNames;



  _this['elements'] = elements;
};

/**
 * Constructs a <code>InlineResponse2001Card</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InlineResponse2001Card} obj Optional instance to populate.
 * @return {module:model/InlineResponse2001Card} The populated <code>InlineResponse2001Card</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('section')) {
      obj['section'] = ApiClient.convertToType(data['section'], 'String');
    }
      if (data.hasOwnProperty('title')) {
      obj['title'] = ApiClient.convertToType(data['title'], 'String');
    }
      if (data.hasOwnProperty('subtitle')) {
      obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'Number');
    }
      if (data.hasOwnProperty('finding_note_names')) {
      obj['finding_note_names'] = ApiClient.convertToType(data['finding_note_names'], ['String']);
    }
      if (data.hasOwnProperty('requires_configuration')) {
      obj['requires_configuration'] = ApiClient.convertToType(data['requires_configuration'], 'Boolean');
    }
      if (data.hasOwnProperty('badge_text')) {
      obj['badge_text'] = ApiClient.convertToType(data['badge_text'], 'String');
    }
      if (data.hasOwnProperty('badge_image')) {
      obj['badge_image'] = ApiClient.convertToType(data['badge_image'], 'String');
    }
      if (data.hasOwnProperty('elements')) {
      obj['elements'] = ApiClient.convertToType(data['elements'], [InlineResponse2001CardElements]);
    }
    }
  return obj;
}

/**
 * The section this card belongs to
 * @member {String} section
 */
exports.prototype['section'] = undefined;
/**
 * The title of this card
 * @member {String} title
 */
exports.prototype['title'] = undefined;
/**
 * The subtitle of this card
 * @member {String} subtitle
 */
exports.prototype['subtitle'] = undefined;
/**
 * The order of the card in which it will appear on SA dashboard in the mentioned section
 * @member {Number} order
 */
exports.prototype['order'] = undefined;
/**
 * The finding note names associated to this card
 * @member {Array.<String>} finding_note_names
 */
exports.prototype['finding_note_names'] = undefined;
/**
 * @member {Boolean} requires_configuration
 * @default false
 */
exports.prototype['requires_configuration'] = false;
/**
 * The text associated to the card's badge
 * @member {String} badge_text
 */
exports.prototype['badge_text'] = undefined;
/**
 * The base64 content of the image associated to the card's badge
 * @member {String} badge_image
 */
exports.prototype['badge_image'] = undefined;
/**
 * The elements of this card
 * @member {Array.<module:model/InlineResponse2001CardElements>} elements
 */
exports.prototype['elements'] = undefined;



module.exports = exports;
