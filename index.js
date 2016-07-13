// Schema dependencies
var schemas = {
    billing: require('./schemas/billing'),
    domain: require('./schemas/domain'),
    instance: require('./schemas/instance'),
    listener: require('./schemas/listener'),
    method: require('./schemas/method'),
    module: require('./schemas/module'),
    organization: require('./schemas/organization'),
    process: require('./schemas/process'),
    project: require('./schemas/project'),
    store: require('./schemas/store'),
    user: require('./schemas/user'),
    application: require('./schemas/application')
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


