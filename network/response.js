exports.success = function(req, res, message, status){
    let statusCode = status || 200;
    let statusMesssage = message || '';

    res.status(status).send({
        error: false,
        status:status,
        body: message
    });

}

exports.error = function(req, res, message, status){
    let statusCode = status || 500;
    let statusMesssage = message || 'Internal Server error';

    res.status(statusCode).send({
        error: true,
        status:status,
        body: message
    });
}