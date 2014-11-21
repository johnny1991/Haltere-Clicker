eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"haltere/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"haltere/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=haltere/app.js");

;eval("define(\"haltere/controllers/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var controller = Ember.ArrayController.extend({\n        actions:{\n            click: function(object){\n                var model = this.get(\'model\').get(0);\n                model.score++;\n                $.cookie(\'score\', model.score);\n                $(\'.score\').text(model.score);\n            }\n        }\n    });\n\n    __exports__[\"default\"] = controller;\n  });//# sourceURL=haltere/controllers/index.js");

;eval("define(\"haltere/initializers/export-application-global\", \n  [\"ember\",\"haltere/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=haltere/initializers/export-application-global.js");

;eval("define(\"haltere/models/haltere\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = [\n        Ember.Object.create({\n            title: \'Haltere Clicker\',\n            score : 0\n        }\n    )\n    ];\n  });//# sourceURL=haltere/models/haltere.js");

;eval("define(\"haltere/router\", \n  [\"ember\",\"haltere/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n        this.route(\'index\', {path: \'/\'});\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=haltere/router.js");

;eval("define(\"haltere/routes/index\", \n  [\"ember\",\"haltere/models/haltere\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Haltere = __dependency2__[\"default\"];\n\n    var route = Ember.Route.extend({\n        model: function() {\n            Haltere.get(0).score = $.cookie(\'score\');\n            return Haltere;\n        },\n        renderTemplate: function() {\n            this.render({ outlet: \'left\' });\n        },\n    });\n\n    __exports__[\"default\"] = route;\n  });//# sourceURL=haltere/routes/index.js");

;eval("define(\"haltere/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<div class=\\\"container left\\\">\");\n      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"left\", options) : helperMissing.call(depth0, \"outlet\", \"left\", options))));\n      data.buffer.push(\"</div>\\n<div class=\\\"container center\\\">\");\n      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"center\", options) : helperMissing.call(depth0, \"outlet\", \"center\", options))));\n      data.buffer.push(\"</div>\\n<div class=\\\"container right\\\">\");\n      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"right\", options) : helperMissing.call(depth0, \"outlet\", \"right\", options))));\n      data.buffer.push(\"</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=haltere/templates/application.js");

;eval("define(\"haltere/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<div>Score : <label class=\\\"score\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"model.firstObject.score\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</label> points</div>\\n\\n<div class=\\\"haltere_image\\\" \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"click\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\">\\n\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=haltere/templates/index.js");

;eval("define(\"haltere/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/app.jshint.js");

;eval("define(\"haltere/tests/controllers/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/index.js should pass jshint\', function() { \n      ok(false, \'controllers/index.js should pass jshint.\\ncontrollers/index.js: line 8, col 13, \\\'$\\\' is not defined.\\ncontrollers/index.js: line 9, col 13, \\\'$\\\' is not defined.\\ncontrollers/index.js: line 5, col 25, \\\'object\\\' is defined but never used.\\n\\n3 errors\'); \n    });\n  });//# sourceURL=haltere/tests/controllers/index.jshint.js");

;eval("define(\"haltere/tests/haltere/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - haltere/tests/helpers\');\n    test(\'haltere/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'haltere/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/haltere/tests/helpers/resolver.jshint.js");

;eval("define(\"haltere/tests/haltere/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - haltere/tests/helpers\');\n    test(\'haltere/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'haltere/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/haltere/tests/helpers/start-app.jshint.js");

;eval("define(\"haltere/tests/haltere/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - haltere/tests\');\n    test(\'haltere/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'haltere/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/haltere/tests/test-helper.jshint.js");

;eval("define(\"haltere/tests/helpers/resolver\", \n  [\"ember/resolver\",\"haltere/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=haltere/tests/helpers/resolver.js");

;eval("define(\"haltere/tests/helpers/start-app\", \n  [\"ember\",\"haltere/app\",\"haltere/router\",\"haltere/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=haltere/tests/helpers/start-app.js");

;eval("define(\"haltere/tests/models/haltere.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/haltere.js should pass jshint\', function() { \n      ok(true, \'models/haltere.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/models/haltere.jshint.js");

;eval("define(\"haltere/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=haltere/tests/router.jshint.js");

;eval("define(\"haltere/tests/routes/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/index.js should pass jshint\', function() { \n      ok(false, \'routes/index.js should pass jshint.\\nroutes/index.js: line 6, col 32, \\\'$\\\' is not defined.\\n\\n1 error\'); \n    });\n  });//# sourceURL=haltere/tests/routes/index.jshint.js");

;eval("define(\"haltere/tests/test-helper\", \n  [\"haltere/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=haltere/tests/test-helper.js");

/* jshint ignore:start */

define('haltere/config/environment', ['ember'], function(Ember) {
  var prefix = 'haltere';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require('haltere/tests/test-helper');
} else {
  require('haltere/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
