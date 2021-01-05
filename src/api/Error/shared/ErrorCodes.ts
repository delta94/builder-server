export type ErrorCodes =
    | CommonErrorCodes
    | VerificationProcessErrorCodes
    | UserSignInErrorCodes
    | UserErrorCode;

export type CommonErrorCodes =
    | "UNDERDEVELOPMENT"
    | "VALIDATION_ERROR"
    | "UNKNOWN_ERROR"
    | "NOTHING_MATCH_WITH_ID"
    | "EXPIRED_SESSION";

export type VerificationProcessErrorCodes =
    | "UNEXIST_VERIFICATION"
    | "VERIFICATION_FAIL"
    | "VERIFICATION_EXPIRED";

export type UserSignInErrorCodes = "INVALID_EMAIL_OR_PASSWORD";

export type UserErrorCode =
    | "LIMIT_BLOCKED"
    | "UNDERDEVELOPMENT"
    | "INVALID_PARAMS"
    | "CANNOT_FIND_DATA"
    | "UNDEFINED_FIELD"
    | "ALREADY_SIGNED_UP"
    // TODO: 기존 Error Migration 필요. 필요없는 에러들 제거 ㄱㄱ
    | "ACCESS_DENY_USER"
    | "ACCESS_DENY_STORE"
    | "ACCESS_DENY_ITEM"
    | "ACCESS_DENY_PRODUCT"
    | "UNAUTHORIZED_USER"
    | "UNAUTHORIZED_STORE_USER"
    | "UNEXIST_STORE"
    | "UNEXIST_PRODUCT"
    | "UNEXIST_GROUP"
    | "UNEXIST_USER"
    | "UNDEFINED_JWK"
    | "DATETIMERANGE_UNIT_ERROR"
    | "VALUE_ERROR"
    | "UNAVAILABLE_SOLD_OUT"
    | "UNAVAILABLE_BUSINESSHOURS"
    | "UNEXIST_ITEM"
    | "UNAVAILABLE_QUERY_DATE"
    | "INVALID_USER_SUB"
    | "ALREADY_CANCELED_ITEM"
    | "ALREADY_PERMITTED_ITEM"
    | "IMPOSIBLE_CHANGE_ITEM_STATUS"
    | "UNDEFINED_COUNTRYINFO"
    | "FALCY_TIMEZONE"
    | "INVALID_VALUES"
    | "UNINCLUDED_BOOKING_DATERANGE"
    | "TOKEN_REFRESH_FAIL"
    | "SMS_SEND_FAIL"
    | "INVALID_PARAMETERS"
    | "ALREADY_REGISTERED_SENDER"
    | "PASSWORD_COMPARE_ERROR"
    | "DELETED_STORE"
    | "ITEM_VALIDATION_ERROR"
    | "UNEXIST_SMS_KEY"
    | "ACCESS_DENY_STORE_GROUP"
    | "FAIL_TO_SIGNOUT"
    | "UNEXIST_STORE_CODE"
    | "UNEXIST_STORE_USER"
    | "INVALID_USER_INFO"
    | "AUTHORIZATION_FAIL";
