const dataMethod = ['body', 'prams', 'query', 'file']

const validation = (schema) => {
    return (req, res, next) => {
        const validationError = []
        dataMethod.forEach((kay) => {
            if (schema[kay]) {
                const validationResult = schema[kay].validate(req[kay], { abortEarly: false })
                if (validationResult.error) {
                    validationError.push(validationResult.error.details)
                }

            }
        })
        if (validationError.length) {
            res.status(400).json({ message: 'Validation error', validationError })


        } else {
            next()
        }
    }
}

 module.exports = validation