<template>
  <div class="main-page">
    <div class="profile">
      <img src="../../assets/slfe.jpg" class="slfe" />
      
      <span class="description"><i>Vidikovac Ploče, Serbia</i></span>

      <p>Привет! Меня зовут Антон, мне 29.</p>

      <p>С вебом я познакомился в далеком 2010-ом, когда по наводке друга начал делать сайты под продажу ссылок.</p>

      <p>Друг научил меня табличной верстке, я брал шаблоны с Template Monster, и делал простенькие статичные сайты, наполненные сканами книг и продавал с низ ссылки на sape.ru. Потом я начал делать такие же сайты на заказ.</p>

      <p>Через какое-то время, из-за улучшения алгоритмов Яндекса, схема перестала работать, и я устроился на стажировку в веб-студию, в депортамент информационно технической поддержки. Там я получил первый опыт коммерческой разработки.</p>

      <p>В студии я проработал около двух лет с перерывом в полгода. За это время я привел в профессию двух друзей и брата: у них была какая-то университетская база, но я составил им программу по которой они за короткое время смогли освоить востребованные навыки и стать интересными работодателям. Также за это время через меня прошло 7 стажеров.</p>

      <p>Потом я работал в стартапе и после года работы в роли разработчика перешел в продакты. Роль продакта мне нравится гораздо больше, тем не менее я не забываю навыки разработки и время от времени вписываюсь в проекты как разработчик.</p>

      <p> Не могу сказать, что программирование стало моим любимым занятием, скорее моим любимым занятием стала разработка софтверных продуктов, где программирование является важным навыком. Не меньше чем разрабатывать продукты, я люблю делиться знаниями и узнавать, как это делать лучше и эффективнее.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style scoped>
.slfe {
  max-width: 600px;
}

.description {
  font-size: 13px;
  color: gray;
}

.profile {
  margin: 50px 0;
  font-family: 'Trebuchet MS', sans-serif;
  max-width: 600px;
  text-align: center; 
}

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center; 
}

.links {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 20px;
}

.link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
