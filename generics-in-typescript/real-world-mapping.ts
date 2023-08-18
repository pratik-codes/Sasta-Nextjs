// Define a type for the form state
interface FormState {
     username: string;
     email: string;
     password: string;
}

// Define a type for validation rules
interface ValidationRules<T> {
     [key: string]: (value: T[keyof T]) => string | undefined;
}

// Define a function that validates the form state based on validation rules
function validateForm<T extends FormState>(
     formState: T,
     validationRules: ValidationRules<T>
) {
     const errors: { [K in keyof T]?: string } = {};

     for (const key in formState) {
          if (formState.hasOwnProperty(key)) {
               const validator = validationRules[key];
               if (validator) {
                    const value = formState[key];
                    const error = validator(value);
                    if (error) {
                         errors[key] = error;
                    }
               }
          }
     }

     return errors;
}

// Example validation rules
const validationRules: ValidationRules<FormState> = {
     username: (value) => {
          if (!value) {
               return 'Username is required';
          }
          return undefined;
     },
     email: (value) => {
          if (!value) {
               return 'Email is required';
          }
          if (!/\S+@\S+\.\S+/.test(value)) {
               return 'Invalid email format';
          }
          return undefined;
     },
     password: (value) => {
          if (!value) {
               return 'Password is required';
          }
          if (value.length < 6) {
               return 'Password must be at least 6 characters';
          }
          return undefined;
     },
};

// Example form state
const formState = {
     username: 'john_doe',
     email: 'john@example.com',
     password: '',
};

// Validate the form state
const errors = validateForm(formState, validationRules);
console.log(errors);
