import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 22 },
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus()
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => { return user.name === name })
    foundUser ? setUser(foundUser) : console.info('User does not exist.')
  }

  return (
    <div>
      <h2>User Search</h2>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch;
