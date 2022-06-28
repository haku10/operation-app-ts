import UserLiked from '../user-liked';
import UserDisLiked from '../user-disliked';
import CardList from '../card-list';

const Blog = () => {
  return (
    <>
      <UserLiked title={'ユーザーのいいね情報'} />
      <UserDisLiked />
      <CardList info={'カードの情報'} />
    </>
  );
};

export default Blog;
