var _ = require('underscore')
var bitquote = require('bitquote');

module.exports = function( options ) {
  var seneca = this
  var plugin = 'bitquote'


  seneca.add( {plugin:plugin, cmd:'current'},cmd_current)

  function cmd_current(args,callback){
   bitquote(function(price){callback(null,{price:price})});
  }


  return {
    name:'bitquote'
  }
}