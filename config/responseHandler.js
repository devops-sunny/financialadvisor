class ResponseHandler {
    constructor(req, res) {
      this.req = req;
      this.res = res;
    }
  
    sender(code, message, data, error) {
      return this.res.status(code).json({ status: code, message, data });
    }
  
    custom(...args) {
      this.sender(...args);
    }
  
    response(code, message, data ,error) {
      switch (code) {
        case STATUS_CODES.SUCCESS:
          this.sender(
            code,
            message || "Request has been completed successfully.",
            data
          );
          break;
  
        case STATUS_CODES.CREATED:
          this.sender(
            code,
            message || "Request has been created successfully.",
            data
          );
          break;
  
        case STATUS_CODES.BAD_REQUEST:
          this.sender(
            code,
            message || "Request line contained invalid characters.",
            data
          );
          break;
  
        case STATUS_CODES.UNAUTHORIZE:
          
          this.sender(code, message || "You are not authorized to access.", data);
          break;
  
        case STATUS_CODES.FORBIDDEN:
          this.sender(code, message || "You are not authorized to access.", data);
          break;
  
        case STATUS_CODES.NOT_VALID_DATA:
          this.sender(code, message || "Already Reported", data);
          break;
  
        case STATUS_CODES.NOT_FOUND:
          this.sender(
            code,
            message || "Resource associated with the request could not be found.",
            data
          );
          break;
  
        case STATUS_CODES.CONFLICT:
          this.sender(
            code,
            message || "Provided information already exist!",
            data
          );
          break;
  
        case STATUS_CODES.PRECONDITION_FAILED:
          this.sender(code, message || "Please complete other steps first", data);
          break;
  
        case STATUS_CODES.VALIDATION_ERROR:
          this.sender(code, message || "Validation error !", data);
          break;
  
        case STATUS_CODES.SERVER_ERROR:
          this.sender(
            code,
            message || "Request failed due to an internal error.",
            data,
            error
          );
          break;
  
        default:
          this.custom(code, message, data);
          break;
      }
    }
  }
  
  module.exports = ResponseHandler;
  