// Define a type for a successful API response
type ApiResponse<T> = {
     success: true;
     data: T;
};

// Define a type for an error API response
type ApiError<E> = {
     success: false;
     error: E;
};

// Combine the successful and error response types using a conditional type
type ApiResult<T, E> = T extends void
     ? ApiResponse<void>
     : T extends Error
     ? ApiError<T>
     : ApiResponse<T>;

// Example usage

// Successful response with data
const successResponse: ApiResult<number, any> = {
     success: true,
     data: 42,
};

// Error response
const errorResponse: ApiResult<any, string> = {
     success: false,
     error: "An error occurred",
};

// Void response
const voidResponse: ApiResult<void, any> = {
     success: true,
     data: undefined,
};

// Error response with specific error type
const specificErrorResponse: ApiResult<Error, string> = {
     success: false,
     error: new Error("Something went wrong"),
};
