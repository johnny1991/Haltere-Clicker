import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("s");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"row exercice\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("canbuy:enable:disable")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addExercice", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                <div class=\"informations\">\n                    <span class=\"title\">\n                        ");
  stack1 = helpers['if'].call(depth0, "displayTitle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </span>\n                    <span class=\"points\">");
  stack1 = helpers._triageMustache.call(depth0, "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n                <span class=\"quantity\">");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n                            ???\n                        ");
  }

  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"col-xs-4 left\">\n    <div class=\"row game_title\">\n        <div class=\"col-xs-12\">\n            <h1>");
  stack1 = helpers._triageMustache.call(depth0, "game.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n    </div>\n    <div class=\"row score\">\n        <div class=\"col-xs-12\">\n            <div class=\"points\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "game.score", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" haltère");
  stack1 = helpers['if'].call(depth0, "game.showPointPlural", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></div>\n            <div class=\"hpc\"><span>");
  stack1 = helpers._triageMustache.call(depth0, "game.hpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><span> haltère");
  stack1 = helpers['if'].call(depth0, "game.showHpcPlural", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" par clic</span></div>\n        </div>\n    </div>\n    <div class=\"row haltere\">\n        <div class=\"col-xs-12\">\n            <div class=\"haltere_image\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incrementPoint", "game", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-4 center\">\n    <div class=\"content\">\n        <div class=\"row bodybuilder\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("bodybuilder")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n        <div class=\"row evolution\">\n            <h3>Evolution</h3>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("progress-width")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-4 right\">\n    <div class=\"exercices\">\n        <div class=\"row exercices_title\">\n            <div class=\"col-xs-12\">\n                <h3>Exercices</h3>\n            </div>\n        </div>\n        ");
  stack1 = helpers.each.call(depth0, "exercice", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});
