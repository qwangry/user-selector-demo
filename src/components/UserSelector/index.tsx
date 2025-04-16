import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import { useRequest } from 'ahooks';
// import { searchUsers } from '../../api/user';
import {searchUsers} from '../../mock/searchUsers'
import { User, UserSelectorProps } from './types';
import './style.css';

const { Option } = Select;

const UserSelector: React.FC<UserSelectorProps> = ({
    value = [],
    onChange,
    placeholder = '请选择用户',
    style
}) => {
    const [searchKey, setSearchKey] = useState('');

    const { data: userList, loading } = useRequest(
        () => searchUsers(searchKey),
        {
            debounceWait: 500,
            refreshDeps: [searchKey]
        }
    );

    const handleSearch = (value: string) => {
        setSearchKey(value);
    };

    const handleChange = (selectedItems: User[]) => {
        onChange?.(selectedItems);
    };

    const handleDeselect = (removedItem: User) => {
        const newValue = value.filter(item => item.UserName !== removedItem.UserName);
        onChange?.(newValue);
    };

    return (
        <Select
            mode="multiple"
            value={value}
            onChange={handleChange}
            onSearch={handleSearch}
            filterOption={false}
            notFoundContent={loading ? <Spin size="small" /> : null}
            placeholder={placeholder}
            style={style}
            labelInValue
            onDeselect={handleDeselect}
            showSearch
        >
            {userList?.map(user => (
                <Option key={user.UserName} value={user.UserName}>
                    <div className="user-option">
                        <span className="user-name">{user.UserName}</span>
                        <span className="user-age">{user.UserAge}岁</span>
                    </div>
                </Option>
            ))}
        </Select>
    );
};

export default UserSelector;