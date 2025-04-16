export interface User {
    UserName: string;
    UserAge: number;
}

export interface UserSelectorProps {
    value?: User[];
    onChange?: (users: User[]) => void;
    placeholder?: string;
    style?: React.CSSProperties;
}