// Schema dependencies
var schemas = {
    'billing.jsonld': require('./schemas/billing'),
    'domain.jsonld': require('./schemas/domain'),
    'instance.jsonld': require('./schemas/instance'),
    'listener.jsonld': require('./schemas/listener'),
    'method.jsonld': require('./schemas/method'),
    'module.jsonld': require('./schemas/module'),
    'organization.jsonld': require('./schemas/organization'),
    'process.jsonld': require('./schemas/process'),
    'project.jsonld': require('./schemas/project'),
    'store.jsonld': require('./schemas/store'),
    'user.jsonld': require('./schemas/user'),
    'application.jsonld': require('./schemas/application')
};

function get(options, data, next) {
    var name = options._.name || data.name;

    if (!name) {
        var error = Error('Schema.get: name not provided.');
        error._ = data;
        return next(error);
    }

    var schema = schemas[name];

    if (!schema) {
        var error = Error('Schema.get: schema not found.');
        error._ = data;
        return next(error);
    }

    data.schema = schema;
    return next(null, data);
}

// export
module.exports.schemas = schemas;
module.exports.get = get;


