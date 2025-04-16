import axios from 'axios';

interface User {
    UserName: string;
    UserAge: number;
}

interface NormalResponse {
    Response: {
        Data: User[];
    };
}

interface ErrorResponse {
    Response: {
        Code: string;
        Message: string;
    };
}

export type UserResponse = NormalResponse | ErrorResponse;

export const searchUsers = async (keyword: string): Promise<User[]> => {
    try {
        const response = await axios.get<UserResponse>('https://test.com/getUser', {
            params: { keyWord: keyword }
        });

        if ('Code' in response.data.Response) {
            throw new Error(response.data.Response.Message);
        }

        return response.data.Response.Data;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};