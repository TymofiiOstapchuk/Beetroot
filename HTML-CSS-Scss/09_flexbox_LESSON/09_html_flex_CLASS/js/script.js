const descr = document.getElementById("descr");
const flexBasisText = `<ol id="describe" class="describe hide">
<li>
  <p class="code">.box__item -> width: 200px;</p>
 У контейнера є вільний простір<br>
   <span class="code">flex-basis</span> у елементів не встановлено, тому по-дефолту він
   <span class="code">flex-basis: auto</span> що бере за основу ширину (200px).
</li>
<li>
    <p class="code">width: 30px; flex-basis: 250px;</p>
    Коли вказано <span class="code">flex-basis</span>, width ігнорується
</li>
<li>
    <p class="code">flex-basis: 250px; max-width: 100px;</p>
   остаточним flex-basis, у цьому випадку буде 100px
</li>
<li>
    <p class="code">flex-basis: 100px; min-width: 250px;</p>
    flex-basis не може бути менше, ніж обмеження в 250px, вказане в min-width
</li>

<li>
<p class="code">flex-basis: 250px; - 8 елементів у контейнері</p>
Перед розміщенням у контейнер, кожен з елементів буде 200px (у сумі 1600px).
<br>Ширина контейнера 1000px, тобто немає достатньо місця для всіх елементів з flex-basis = 250px
 І вони будуть зменшені по ширині до такого значення, щоб умістити контейнер.
</li>




</ol>`;

descr.insertAdjacentHTML("beforeend", flexBasisText);
const describe = document.getElementById("describe");
const descTitle = descr.querySelector(".descr__title");
descTitle.addEventListener("click", toggleContent);
if (localStorage.getItem("toggled")) {
  describe.classList.remove("hide");
  descTitle.textContent = "Закрыть описание";
}

function toggleContent(e) {
  if (describe.classList.contains("hide")) {
    describe.classList.remove("hide");
    localStorage.setItem("toggled", true);
    e.target.textContent = "Закрыть описание";
    return;
  }
  describe.classList.add("hide");
  localStorage.removeItem("toggled");
  e.target.textContent = "Открыть описание";
}
