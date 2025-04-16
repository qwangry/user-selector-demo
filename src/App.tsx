import React, { useState } from 'react';
import { Card } from 'antd';
import UserSelector from './components/UserSelector';
import { User } from './components/UserSelector/types';

function App() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleChange = (users: User[]) => {
    setSelectedUsers([...users]);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Card title="用户选择器" style={{ width: 500 }}>
        <UserSelector
          value={selectedUsers}
          onChange={handleChange}
          placeholder="请输入用户名搜索"
          style={{ width: '100%' }}
        />

        <div style={{ marginTop: '20px' }}>
          <h4>已选用户:</h4>
          {selectedUsers.length > 0 ? (
            <ul>
              {selectedUsers.map(user => (
                <li key={user.UserName}>
                  {user.UserName} ({user.UserAge}岁)
                </li>
              ))}
            </ul>
          ) : (
            <p>暂无选择</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default App;
