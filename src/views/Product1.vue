<template>
  <div class="product-page">
    <section class="product-section">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="product-img-wrap">
              <img src="@/assets/images/ring-1.jpeg" alt="Золотые кольца" class="product-main-img js-open-product-modal">
            </div>
          </div>
          <div class="col-md-5">
            <div class="product-wrap">
              <div class="product-first-line-wrap">
                <div class="product-article">Артикул: 8047696</div>
                <div class="product-sale-percent">-30%</div>
              </div>
              <h1 class="h1">Кольцо обручальное гладкое из золота, 2 мм</h1>
              <div class="product-price-wrap">
                <div class="product-price">
                  31 150 тг
                </div>
                <strike class="product-old-price">43 500 тг</strike>
              </div>
              <div class="product-online-price">
                <i class="fas fa-credit-card"></i>
                Цена при оплате онлайн 2 993 ₽
              </div>
              <div class="product-choice-size-wrap">
                <div class="product-choice-size">
                  Выбрать размер
                </div>
                <div id="product-sizes-wrap">
                  <button class="btn-size">15.5</button>
                  <button class="btn-size active-size">16</button>
                  <button class="btn-size">16.5</button>
                  <button class="btn-size">17</button>
                  <button class="btn-size">17.5</button>
                  <button class="btn-size">18</button>
                  <button class="btn-size">18.5</button>
                  <button class="btn-size">19</button>
                  <button class="btn-size">19.5</button>
                  <button class="btn-size">20</button>
                  <button class="btn-size">20.5</button>
                  <button class="btn-size">21</button>
                  <button class="btn-size">21.5</button>
                  <button class="btn-size">22</button>
                </div>
              </div>
              <div class="product-add-to-cart-wrap">
                <button class="product-add-to-cart e-button">
                  Добавить в корзину
                </button>
                <div class="product-add-to-chosen">
                  <i class="far fa-heart" aria-hidden="true"></i>
                </div>
              </div>
              <div class="product-in-stock-in-shops">
                <a href="#" class="product-in-stock-in-shops-a">
                  В наличии в 14 магазинах
                </a>
              </div>
              <div class="detailed-description-wrap">
                <p class="detailed-description-title">
                  Подробное описание
                </p>
                <p class="description-line-title">
                  Вставки
                </p>
                <p class="description-line-char">
                  Без вставки
                </p>
                <p class="description-line-title">
                  Материалы
                </p>
                <p class="description-line-char">
                  Золото, проба 375, вес от 1.05 гр
                </p>
                <p class="description-line-title">
                  Описание материалов
                </p>
                <p class="description-line-char">
                  Золото 375 пробы
                </p>
              </div>
              <div class="product-buy-advantages-wrapper">
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img src="@/assets/images/truck2.svg" alt="" class="product-buy-advantage-img">
                    Бесплатная доставка
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img src="@/assets/images/jewelery.svg" alt="" class="product-buy-advantage-img">
                    Примерка перед покупкой
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img src="@/assets/images/card-percentage.svg" alt="" class="product-buy-advantage-img">
                    Скидка при онлайн оплате
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img src="@/assets/images/return.svg" alt="" class="product-buy-advantage-img">
                    Удобный возврат
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="myModall" class="modall">
      <span class="close cursor js-close-product-modal">&times;</span>
      <div class="modall-content">

        <div class="mySlides js-close-product-modal">
          <img src="@/assets/images/ring-1.jpeg" class="full-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Product1',
  mounted() {
    // Add active class to the current button (highlight it)
    var header = document.getElementById("product-sizes-wrap");
    var btns = header.getElementsByClassName("btn-size");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-size");
      current[0].className = current[0].className.replace(" active-size", "");
      this.className += " active-size";
      });
    }

    document.querySelector('.js-open-product-modal').addEventListener('click', openModal);

    document.querySelectorAll('.js-close-product-modal').forEach(closeModalEl => {
      closeModalEl.addEventListener('click', closeModal);
    });
  }
};

// modal slider
function openModal() {
  document.getElementById('myModall').style.display = "block";
}

function closeModal() {
  document.getElementById('myModall').style.display = "none";
}
// modal gallery
</script>
