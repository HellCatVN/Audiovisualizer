/**
 *
 */
AFRAME.registerComponent('audioanalyser-volume-bind', {
  schema: {
    analyserEl: {type: 'selector'},
    component: {type: 'string'},
    property: {type: 'string'},
    max: {type: 'number'},
    multiplier: {type: 'number'},
  },

  tick: function () {
    var analyserComponent;
    var data = this.data;
    var el = this.el;
    var value;

    analyserComponent = data.analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    value = Math.min(data.max, analyserComponent.volume * data.multiplier);
    el.setAttribute(data.component, data.property, value);
  }
});
var _0x1665=["\x61\x75\x64\x69\x6F\x61\x6E\x61\x6C\x79\x73\x65\x72\x2D\x76\x6F\x6C\x75\x6D\x65\x2D\x73\x63\x61\x6C\x65","\x73\x65\x6C\x65\x63\x74\x6F\x72","\x6E\x75\x6D\x62\x65\x72","\x61\x6E\x61\x6C\x79\x73\x65\x72\x45\x6C","\x64\x61\x74\x61","\x65\x6C","\x61\x75\x64\x69\x6F\x61\x6E\x61\x6C\x79\x73\x65\x72","\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x73","\x61\x6E\x61\x6C\x79\x73\x65\x72","\x76\x6F\x6C\x75\x6D\x65","\x6D\x75\x6C\x74\x69\x70\x6C\x69\x65\x72","\x73\x63\x61\x6C\x65","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74"];AFRAME[_0x1665[13]](_0x1665[0],{schema:{analyserEl:{type:_0x1665[1]},multiplier:{type:_0x1665[2],default:1}},tick:function(){var _0x32a6x1=this[_0x1665[4]][_0x1665[3]]|| this[_0x1665[5]];var _0x32a6x2;var _0x32a6x3=this[_0x1665[5]];var _0x32a6x4;_0x32a6x2= _0x32a6x1[_0x1665[7]][_0x1665[6]];if(!_0x32a6x2[_0x1665[8]]){return};_0x32a6x4= _0x32a6x2[_0x1665[9]]* this[_0x1665[4]][_0x1665[10]];_0x32a6x3[_0x1665[12]](_0x1665[11],{x:_0x32a6x4,y:_0x32a6x4,z:_0x32a6x4})}})
