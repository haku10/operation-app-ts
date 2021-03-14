import * as React from 'react';

interface Props {
  name: string;
}

interface State {
  count: number;
}

class UserRegister extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Your name = {this.props.name}</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default UserRegister;
