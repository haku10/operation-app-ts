import * as React from 'react';
import UserLiked from '../user-liked';
import CardList from '../card-list';

interface Props {}

interface State {
  isLiked: boolean;
  order: number;
}

class Blog extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLiked: false,
      order: 0,
    };
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  // いいねを変更するボタン
  toggleLiked = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    return (
      <>
        <UserLiked title={'いいねリスト'} isLiked={this.state.isLiked} toggle={() => this.toggleLiked()} />
        <CardList info={'カードの情報'} />
      </>
    );
  }
}

export default Blog;
