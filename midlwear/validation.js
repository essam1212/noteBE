const dataMethod = ['body', 'prams', 'query', 'file']

const validation = (schema) => {
    return (req, res, next) => {
        const validationError = []
        dataMethod.forEach((kay) => {
            if (schema[kay]) {
                const validationResult = schema[kay].validate(req[kay], { abortEarly: false })
                if (validationResult.error) {
                    return validationError.push(validationResult.error.details)
                }

            }
        })
        if (validationError.length) {
            return res.status(400).json({ message: 'Validation error', validationError })


        } else {
            return next()
        }
    }
}

 export default validation