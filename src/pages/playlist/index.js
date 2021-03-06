import React from 'react';

import { Container, Header, SongList } from  './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930" alt="Player" />

      <div>
        <span>PLAYLIST</span>
        <h1>MetalHead</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>War Pigs</td>
          <td>Black Sabbath</td>
          <td>Paranoid</td>
          <td>7:58</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
