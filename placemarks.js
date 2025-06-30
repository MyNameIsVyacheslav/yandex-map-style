const placemarks = [
  {
    coords: [59.678940356249605, 30.473528724914257],
    title: 'Остановка автобуса. Звериницкая ул.',
    icon: 'islands#blackMassTransitCircleIcon'
  },
  {
    coords: [59.693305, 30.433215],
    title: 'Железнодорожный вокзал;<br>Привокзальная площадь, 1, Павловск, Россия<br><strong>Вокзал Павловск</strong>',
    icon: 'islands#blackRailwayCircleIcon'
  },
  {
    coords: [59.678198, 30.435874],
    title: 'Детский сад;<br>Елизаветинская ул., 7, Павловск, Россия<br><strong>Детский сад № 26</strong>',
    icon: 'islands#blackFamilyCircleIcon'
  },
  {
    coords: [59.683913, 30.461126],
    title: 'Детский сад;<br>ул. Желябова, 6/1, лит.А, Павловск, Россия<br><strong>Детский сад № 21</strong>',
    icon: 'islands#blackFamilyIcon'
  },
  {
    coords: [59.684699, 30.440339],
    title: 'Частная школа;<br>Конюшенная ул., 15, Павловск, Россия<br><strong>Павловская гимназия</strong>',
    icon: 'islands#blackEducationCircleIcon'
  },
  {
    coords: [59.679646, 30.458416],
    title: 'Общеобразовательная школа;<br>ул. Декабристов, 16, Павловск, Россия<br><strong>ГБОУ школа № 315</strong>',
    icon: 'islands#blackEducationCircleIcon'
  },
  {
    coords: [59.72617, 30.407397],
    title: 'Хореографическое училище;<br>Октябрьский бул., 8, корп. 2, Пушкин, Россия<br><strong>Императорская школа русского балета</strong>',
    icon: 'islands#blackLeisureCircleIcon'
  },
  {
    coords: [59.679418, 30.498023],
    title: 'Супермаркет;<br>Центральная улица, деревня Глинка<br><strong>Магнит</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.670749, 30.483509],
    title: 'Магазин продуктов;<br>10-я линия, 2Г, стр. 1, Павловск<br><strong>Продукты</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.685589, 30.486898],
    title: 'Пиццерия;<br>Парковая ул., 10, д. Глинка<br><strong>Piano Pizza</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.67295270680006, 30.47916532800187],
    title: 'Россия, Санкт-Петербург, Павловск, территория Грачёвка<br><strong>Негород Павловск</strong>',
    icon: 'islands#yellowHomeCircleIcon'
  },
  {
    coords: [59.68180340180841, 30.46342316931137],
    title: 'Кафе;<br>Звериницкая ул., 23, Павловск<br><strong>Вкусный Кофе</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.683878, 30.433108],
    title: 'Детская поликлиника;<br>ул. Мичурина, 3, Павловск<br><strong>Поликлиника №49, отд. №15</strong>',
    icon: 'islands#blackMedicalCircleIcon'
  },
  {
    coords: [59.718165, 30.418511],
    title: 'Больница для взрослых;<br>Госпитальная ул., 7/2, Пушкин<br><strong>Больница №38 им. Семашко</strong>',
    icon: 'islands#blackMedicalCircleIcon'
  },
  {
    coords: [59.683524, 30.43914],
    title: 'Банк;<br>Конюшенная ул., 16/13, Павловск<br><strong>СберБанк</strong>',
    icon: 'islands#blackMoneyCircleIcon'
  },
  {
    coords: [59.684176, 30.434774],
    title: 'Фитнес-клуб;<br>Лебединая ул., 16, Павловск<br><strong>Life</strong>',
    icon: 'islands#blackRunCircleIcon'
  },
  {
    coords: [59.71123, 30.43682],
    title: 'АЗС;<br>Фильтровское ш., 1, Тярлево<br><strong>Газпромнефть</strong>',
    icon: 'islands#blackFuelStationCircleIcon'
  },
  {
    coords: [59.688129848960635, 30.477892296506063],
    title: 'Парк культуры и отдыха;<br>Садовая улица, Павловск<br><strong>Павловский парк</strong>',
    icon: 'islands#darkgreenVegetationCircleIcon'
  },
  {
    coords: [59.677952, 30.450184],
    title: 'Православный храм;<br>Артиллерийская ул., 2, Павловск<br><strong>Собор Николая Чудотворца</strong>',
    icon: 'islands#blackWorshipCircleIcon'
  },
  {
    coords: [59.676139, 30.424061],
    title: 'Конный клуб;<br>ул. Александра Матросова, 1А, Павловск<br><strong>Александрова дача</strong>',
    icon: 'islands#blackRunCircleIcon'
  },
  {
    coords: [59.680634, 30.443465],
    title: 'Ресторан;<br>Мариинская ул., 4, Павловск<br><strong>Замок Бип</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.696697, 30.438855],
    title: 'Ресторан;<br>Фильтровское ш., 16, Тярлево<br><strong>Подворье</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.695316, 30.417853],
    title: 'Ресторан;<br>ул. Архитектора Данини, 5, Пушкин<br><strong>Данини</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.687262, 30.45896],
    title: 'Ресторан;<br>Садовая ул., 20В, Павловск<br><strong>Молочня</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.699748, 30.453265],
    title: 'Ресторан;<br>Нововестинская ул., 2А, Тярлево<br><strong>Унокафе</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.68120784004812, 30.44810182549929],
    title: '<strong>Парк Мариенталь</strong>',
    icon: 'islands#darkgreenVegetationCircleIcon'
  },
  {
    coords: [59.705374378488074, 30.42587167718368],
    title: '<strong>Отдельный парк</strong>',
    icon: 'islands#darkgreenVegetationCircleIcon'
  },
  {
    coords: [59.685836, 30.425599],
    title: 'Пункт выдачи;<br>Берёзовая ул., 22, корп. 2, Павловск<br><strong>Wildberries</strong>',
    icon: 'islands#blackSouvenirsCircleIcon'
  },
  {
    coords: [59.686112, 30.429739],
    title: 'Булочная, пекарня;<br>Детскосельская ул., 17/17, Павловск<br><strong>Хлеб да любовь</strong>',
    icon: 'islands#blackFoodCircleIcon'
  },
  {
    coords: [59.742951, 30.472867],
    title: 'Торговый центр;<br>Ростовская ул., 20, Славянка<br><strong>Green Park</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.719012, 30.407296],
    title: 'Торговый центр;<br>Московская ул., 25, Пушкин<br><strong>Гостиный Двор</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.702299, 30.381765],
    title: 'Торговый центр;<br>Полковая ул., 1/25, Пушкин<br><strong>Константиновский</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.681789, 30.463727],
    title: 'Супермаркет;<br>Звериницкая ул., 23, Павловск<br><strong>Магнит</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.691114, 30.430443],
    title: 'Супермаркет;<br>Слуцкая ул., 3А, Павловск<br><strong>Пятёрочка</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.685529, 30.422978],
    title: 'Супермаркет;<br>Гуммолосаровская ул., 29, Павловск<br><strong>Пятёрочка</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.665367, 30.531513],
    title: 'Супермаркет;<br>Центральная ул., 15, Фёдоровское<br><strong>Пятёрочка</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.703591, 30.384758],
    title: 'Супермаркет;<br>Гусарская ул., 4АВ, Пушкин<br><strong>Перекрёсток</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  },
  {
    coords: [59.683568, 30.434841],
    title: 'Пункт выдачи;<br>Лебединая ул., 20, Павловск<br><strong>Ozon</strong>',
    icon: 'islands#blackSouvenirsCircleIcon'
  },
  {
    coords: [59.676319, 30.456814],
    title: 'Пункт выдачи;<br>ул. Обороны, 8, Павловск<br><strong>Ozon</strong>',
    icon: 'islands#blackSouvenirsCircleIcon'
  },
  {
    coords: [59.731709, 30.401513],
    title: 'Пункт выдачи;<br>Ленинградская ул., 46, Пушкин<br><strong>Lamoda</strong>',
    icon: 'islands#blackSouvenirsCircleIcon'
  },
  {
    coords: [59.696485, 30.419479],
    title: 'Пункт выдачи;<br>ул. Архитектора Данини, 5, Пушкин<br><strong>Wildberries</strong>',
    icon: 'islands#blackSouvenirsCircleIcon'
  },
  {
    coords: [59.71951, 30.408925],
    title: 'Магазин продуктов;<br>Оранжерейная ул., 21, Пушкин<br><strong>ВкусВилл</strong>',
    icon: 'islands#blackShoppingCircleIcon'
  }
];
