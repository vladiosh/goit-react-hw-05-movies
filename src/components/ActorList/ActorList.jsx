import imageDefault from 'image/defaultImg.jpg';
import {
  CardActor,
  ImageActor,
  ListActor,
  ActorName,
  Text,
} from './ActorList.styled';

export const ActorList = ({ actors }) => {
  return (
    <section>
      <ListActor>
        {actors.map(({ id, profile_path, name, character }) => {
          return (
            <CardActor key={id}>
              <ImageActor
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : imageDefault
                }
                alt={name}
                width="150px"
                height="225px"
              />
              <ActorName>{name}</ActorName>
              <Text>{character}</Text>
            </CardActor>
          );
        })}
      </ListActor>
    </section>
  );
};
