import imageDefault from 'image/defaultImg.jpg';
import { CardActor, ImageActor } from './ActorList.styled';

export const ActorList = ({ actors }) => {
  return (
    <section>
      <ul>
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
              />
              <p>{name}</p>
              <p>{character}</p>
            </CardActor>
          );
        })}
      </ul>
    </section>
  );
};
