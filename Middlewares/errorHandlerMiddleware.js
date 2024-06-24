const errorHandlerMiddleware = (err,req,res,next) => {
    const errorMessage = err.message || 'Internal Server Error'
    const errorStack = err.stack || null;
    const errorStatusCode = err.statusCode || 500


    res.status(errorStatusCode).json({
        errorMessage,
        errorStack
    })
};

export default errorHandlerMiddleware;