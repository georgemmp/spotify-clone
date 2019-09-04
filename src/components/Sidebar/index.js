import React from 'react';

import { Container, ButtonNewPlaylist, Nav } from './styles';

import AddPlayslistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="#">Navegar</a>
        </li>
        <li>
          <a href="#">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="#">Seu Dayli Mix</a>
        </li>
        <li>
          <a href="#">Tocados Recentemente</a>
        </li>
        <li>
          <a href="#">Músicas</a>
        </li>
        <li>
          <a href="#">Álbums</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Estações</a>
        </li>
        <li>
          <a href="#">Mídias Locais</a>
        </li>
        <li>
          <a href="#">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLIST</span>
        </li>
        <li>
          <a href="#">Melhores do Metal</a>
        </li>
      </Nav>
    </div>
    <ButtonNewPlaylist>
      <img src={AddPlayslistIcon} alt="Adicionar playlist" />
      Nova Playlist
    </ButtonNewPlaylist>
  </Container>
);

export default Sidebar;
