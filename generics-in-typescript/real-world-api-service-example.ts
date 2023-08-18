interface ApiResponse<R> {
     data: R;
     status: number;
}

class ApiService {
     async get<T>(url: string): Promise<ApiResponse<T>> {
          const response = await fetch(url);
          const data = await response.json();
          return { data, status: response.status };
     }

     async post<T, R>(url: string, body: T): Promise<ApiResponse<R>> {
          const response = await fetch(url, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(body)
          });
          const data = await response.json();
          return { data, status: response.status };
     }

     // methods like put, patch, delete, etc.
}

// Usage
interface User {
     id: number;
     name: string;
     email: string;
}

const apiService = new ApiService();

// Get user by ID
apiService.get<User>('https://jsonplaceholder.typicode.com/users/1')

// Create a new user
const newUser = { name: 'John Doe', email: 'john@example.com' };
apiService.post<{ name: string, email: string }, User>('https://jsonplaceholder.typicode.com/users', newUser)