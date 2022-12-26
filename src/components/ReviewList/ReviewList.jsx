import { RevItem, RevList, RevName, RevText } from './ReviewList.styled';

export const ReviewList = ({ reviews }) => {
  return (
    <section>
      <RevList>
        {reviews.map(({ id, author, content }) => {
          return (
            <RevItem key={id}>
              <RevName>{author}</RevName>
              <RevText>{content}</RevText>
            </RevItem>
          );
        })}
      </RevList>
    </section>
  );
};
