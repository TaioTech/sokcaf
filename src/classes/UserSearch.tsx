import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    })

    foundUser ? this.setState({ user: foundUser }) : console.info('User does not exist.')
  }

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <h2>User Search</h2>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    )
  }
}

export default UserSearch;