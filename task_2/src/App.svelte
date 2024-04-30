<script lang="ts">
  import sbLogo from './assets/sb.svg'
  import decor1 from './assets/heroLeftTop.svg'
  import decor2 from './assets/heroLeftBot.svg'
  import decor3 from './assets/heroMidBot.svg'
  import decor4 from './assets/heroRightBot.svg'
  import decor5 from './assets/heroRightTop.svg'
  import Compiler from './lib/Compiler.svelte'
  import Converter from './lib/Converter.svelte';
  import vk from './assets/vk.png'
  import tg from './assets/tg.png'
  import decor6 from './assets/task1LeftMid.svg'
  import decor7 from './assets/task1RightMid.svg'
  import heart from './assets/heart.svg'
</script>

<header id="header">
  <div class="header__container">
    <nav class="header__menu">
        <ul>
        <li class="header__item"><a href="#task1">Task 1</a></li>
        <li class="header__item"><a href="#task2">Task 2</a></li>
        </ul>
    </nav>
    <a href="https://sbermarketing.ru/" class="header__logo" target="_blank">
        <img src="{sbLogo}" width="32" height="32" alt="Логотип">
        <p>СБЕР МАРКЕТИНГ</p>
    </a>
  </div>
</header>
<main class="main">
  <section id="hero">
    <div class="hero__container">
      <div class="hero__text">
          <h1 class="hero__title">Тестовые задания<br><span>СберМаркетинг</span></h1>
          <h2 class="hero__subtitle">Выполненные задания</h2>
      </div>
  </div>
  </section>
  <section id="task1">
    <div class="task1__container">
      <Compiler />
    </div>
  </section>
  <section id="task2">
    <div class="task2__container">
      <Converter />
    </div>
  </section>
  <div class="decor-container">
    <img src="{decor1}" alt="Декорация" class="decor1 decor-animation">
    <img src="{decor2}" alt="Декорация" class="decor2 decor-animation">
    <img src="{decor3}" alt="Декорация" class="decor3 decor-animation">
    <img src="{decor4}" alt="Декорация" class="decor4 decor-animation">
    <img src="{decor5}" alt="Декорация" class="decor5 decor-animation">
    <img src="{decor6}" alt="Декорация" class="decor6 decor-animation">
    <img src="{decor7}" alt="Декорация" class="decor7 decor-animation">
  </div>
</main>
<footer class="footer">
  <div class="footer__container">
    <div class="footer__contacts">
      <p class="footer__email"><a href="mailto:d.sinyakin@mail.ru" target="_blank">d.sinyakin@mail.ru</a></p>
      <ul class="footer__links">
        <li class="footer__item"><a href="https://vk.com/lkizt_off"><img src="{vk}" alt="Вконтакте" width="100" height="100" target="_blank"></a></li>
        <li class="footer__item"><a href="https://t.me/lkizt"><img src="{tg}" alt="Телеграм" width="100" height="100" target="_blank"></a></li>
      </ul>
    </div>
  </div>
  <img src="{heart}" alt="" class="heart" width="200" height="200">
</footer>

<style>
  .heart {
    z-index: -1;
    position: absolute;
    right: 5%;
    top: 0;
    animation: move 1.5s infinite linear alternate;
  }

  .decor1, .decor2, .decor3, .decor4, .decor5, .decor6, .decor7 {
  position: absolute;
  z-index: -1;
  animation: move 5s infinite linear alternate;
}
@keyframes move {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

  .header__container {
    max-width: 1720px; 
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    align-items: center;
    column-gap: 470px;
  }
  .header__menu ul {
    list-style: none;
    display: flex;
    column-gap: 100px;
    font-size: 22px;
    line-height: 165%;
  }
  .header__item a {
    font-weight: 600;
    color: #fff;
    text-decoration: none;
  }
  .header__logo img {
    margin-right: 10px;
  }
  .header__logo {
    display: inline-flex;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 165%;
    color: #fff;
    text-decoration: none;
  }
  .hero__container {
      max-width: 1720px;
  }
  .hero__text {
      display: flex;
      flex-direction: column;
      position:absolute;
      width:100%;
      top:30%;
      text-align:center;
  }
  .hero__title {
      color: #fff;
      font-size: 94px;
      font-weight: 600;
      line-height: 145%;
  }
  .hero__title span {
    background: #006CFF;
    background: linear-gradient(to right, #006CFF 10%, #28F9D0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero__subtitle {
    color: #535865;
    font-size: 30px;
    line-height: 145%;
    font-weight: 600;
    margin-top: -45px;
  }
  .decor1 {
  left: -5%;
  top: -7%;
  animation-delay: 0.5s;
}

.decor2 {
  left: -8%;
  bottom: -12%;
  animation-delay: 1.3s;
}

.decor3 {
  bottom: -35%;
  left: 30%;
  animation-delay: 2.3s;
}

.decor4 {
  right: -5%;
  bottom: -25%;
  animation-delay: 1.5s;
}

.decor5 {
  right: -15%;
  top: -30%;
  animation-delay: 2.9s;
}

.decor6 {
  bottom: -160%;
  left: -40%;
  animation-delay: 1.9s;
}

.decor7 {
  right: -15%;
  bottom: -120%;
  animation-delay: 0.8s;
}
  .task1__container {
    position: relative;
    width: 1720px;
    margin: 0 auto;
  }
  .footer {
    position: relative;
  }
  .footer__container {
    max-width: 1720px;
    margin: 0 auto;
    padding: 50px 0;
    border-top: 2px solid #949494;
  }
  .footer__contacts {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer__email a {
    font-size: 32px;
    font-weight: 600;
    line-height: 165%;
    color: #fff;
    text-decoration: none;
  }
  .footer__links {
    display: flex;
    column-gap: 50px;
    list-style: none;
  }
</style>