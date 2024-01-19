import { useState } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  //creo uno stato immutabile di partenza
  const [count, setCount] = useState(0);

  //creo uno stato immutabile di partenza
  const [liked, setLiked] = useState(false);

  //creo una variabile e assegno lo style con la condizione
  const buttonStyle = {
    color: liked ? '#8cdaff' : '',
  };

  //in unica funzione inserisco il conteggio più la condizione del conteggio e sotto un'altra per lo style del testo
  function countLike() {
    //condizione 1 conteggio
    if (count == 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    //condizione 2 style
    setLiked(!liked);
  }



  return (
    <>
      {/* <Navbar /> */}

      <h1 class="main-title">Social Posts</h1>

      <div id="container" class="posts-list">

        <div class="post">
          <div class="post__header">
            <div class="post-meta">
              <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione" />
              </div>
              <div class="post-meta__data">
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
              </div>
            </div>
          </div>
          <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
          <div class="post__image">
            <img src="https://unsplash.it/600/300?image=171" alt="" />
          </div>
          <div class="post__footer">
            <div class="likes js-likes">
              <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                  <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                  {/* onClick per l'evento scatenato dalla funzione cuontLike e in style inserisco la variabile con la condizione della proprietà color */}
                  <button onClick={countLike} style={buttonStyle} class="btn">Mi Piace</button>
                </a>
              </div>
              <div class="likes_counter">
                Piace a <b>{count}</b> persone
              </div>
            </div>
          </div>
        </div>

      </div >


    </>
  )
}

export default App
