
global.STATUS_CODES = {

    //  INFORMATIONAL
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,

    // 2XX SUCCESS
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,

    // 3XX REDIRECTION
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    // 4XX CLIENT ERROR
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    UNPROCESSABLE_ENTITY: 422,
    VALIDATION_ERROR: 422,
    NOT_VALID_DATA: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    UNORDERED_COLLECTION: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    // 5XX SERVER ERROR
    SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
}


global.STATUS_MESSAGES = {
    LOGIN_SUCCESS: "You have successfully logged in.",
    EXISTS: {
        USER: "User already exist!",
        EMAIL: "Email is already registered!"
    },
    NOT_FOUND: {
        USER_NOT_FOUND: "Invalid user received!",
        USER: "Username or password is incorrect.",
        EMAIL: "Your email address does not exist in the system !",
        ACCOUNT: "We can't find this account"
    },
    PASSWORD: {
        MISMATCH: "Provided password do not match",
        TOO_SIMPLE: "Please create more complicated password",
        INCORRECT: "Password incorrect",
        NOT_SAME: "Password and confirm password are not same",
        CHANGED: "Password changed successfully"
    },
    TOKEN: {
        NO_TOKEN: "No Token provided!",
        INVALID: "Your token is not valid.",
        EXPIRED: "Your token has been expired."
    },
    USER: {
        NEW_USER: "You have registered successfully!",
        PROFILE_UPDATED: "Your profile has been updated successfully.",
        PROFILE_DELETED: "Your profile has been deleted successfully.",
        NOT_VERIFIED: "Your email address is not verified.",
        INVALID: "Please enter valid email & password."
    },
    REQUEST: {
        LIST: "Request has been fetched successfully.",
        ADDED: "Request has been added successfully",
        UPDATED: "Request has been updated successfully",
        DELETED: "Request has been deleted successfully.",
        NOT_FOUND: "Provided request doesn't exist.",
        NOT_VALID: "Provided request is not valid"
    },
    VALIDATION: {
        REQUIRED: {
            ROLE: "Please enter role.",
            VALID_ROLE:"Please enter valid role.",
            CONFIRM_PASSWORD: "Please enter confirm password.",
            CURRENT_PASSWORD: "Please enter current password.",
            USERNAME: "Please enter user name.",
            USERNAME_REGEX: "Please enter valid user name.",
            PASSWORD_REGEX: "Please enter valid password.",
            NAME: "Please enter name.",
            RESET_TOKEN: "Please enter reset token.",
            USER_ID: "Please enter user id"
        },
        VALID: {
            EMAIL: "Please enter valid email address.",
            PASSWORD: "Please enter valid password.",
            TOKEN: "Please enter valid token."
        },
        LENGTH: {
            USERNAME_MIN: "Username must be minimum of 4 character long.",
            USERNAME_MAX: "Username must be maximum of 16 character long.",
            PASSWORD: "Password must be minimum of 8 character long.",
        }
    }
}

global.PROCESS_STATUS = {
    INACTIVE: 0,
    ACTIVE: 1,
    DELETED: 2
}
