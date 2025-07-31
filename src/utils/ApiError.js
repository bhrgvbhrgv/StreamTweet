class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors = [],
        statch = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.data=null;
        this.success = false;
        this.message=message
        
        if(statch){
            this.stack = statch;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export {ApiError}