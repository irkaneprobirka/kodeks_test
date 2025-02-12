$(document).ready(() => {
  //1. Выбрать элемент с атрибутом id="rootID" и добавить класс "rootClass"
  $("#rootID").addClass("rootClass"); // по # находим элемент с id - roolId, с помощью addClass добавляем класс

  //2. Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на первом уровне вложенности
  console.log($("#rootID > .someClassName")); // знак > отвечает за поиск по первому уровню вложенности

  //3. Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на любом уровне вложенности
  console.log($("#rootID .someClassName")); // без знака > можно получить все дочерние элементы с нужным классом вне зависимости от уровня вложенности

  //4. Выбрать элементы с атрибутом class="someClassName" и аттрибутом oid = "newDoc"
  console.log($('.someClassName[oid="newDoc"]')); //сначала используется селектор класса, далее атрибут

  //5. Выбрать последний дочерний элемент с атрибутом class="someClassName" у элемента с атрибутом id="rootID" и заменить текст в параграфе (p) на "Последняя строка"
  console.log($("#rootID .someClassName:last p").text("Последняя строка")); //сначала используем селектор # по id, далее находим класс, с помощью :last p выбираем последний текст на странице
  //и с помощью метода text заменяем последний элемент
  console.log($("#rootID .someClassName p").last().text("Последняя строка"));//2 вариант
});
