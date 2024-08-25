const sanitize = function (ignore = []) {
    return (req, res, next) => {
        const sanitizeObject = (obj) => {
            Object.keys(obj).forEach((key) => {
                if (ignore.indexOf(key) === -1 && typeof obj[key] === 'string') {
                    if (req.sanitize) {
                        obj[key] = req.sanitize(obj[key]).trim();
                    } else {
                        obj[key] = obj[key].trim();  
                    }
                }
            });
        };

        if (req.body) sanitizeObject(req.body);
        if (req.params) sanitizeObject(req.params);
        if (req.query) sanitizeObject(req.query);

        next();
    };
};

module.exports = sanitize;
