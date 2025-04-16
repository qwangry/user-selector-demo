import type { User } from '../components/UserSelector/types';

const allUsers: User[] = [
    { UserName: 'Alice', UserAge: 25 },
    { UserName: 'Bob', UserAge: 30 },
    { UserName: 'Charlie', UserAge: 28 },
    { UserName: 'Dora', UserAge: 22 },
];

export const searchUsers = async (keyword: string): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (keyword === 'error') {
                reject(new Error('模拟错误：关键词不能为 error'));
            } else {
                const filtered = allUsers.filter(u =>
                    u.UserName.toLowerCase().includes(keyword.toLowerCase())
                );
                resolve(filtered);
            }
        }, 300); // 模拟接口延迟
    });
};