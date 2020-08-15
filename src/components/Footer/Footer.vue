<template>
  <footer class="clearfix">
    <div id="newsletter">
      <div class="layout-center clearfix">
        <div class="field-content">
          <div class="block-title">
            Подпишитесь на НОВОСТИ INTERTOOL <br />
            получите 5% скидку
          </div>

          <form class="form-newsletter">
            <div class="form-item">
              <input type="text" name="" placeholder="Ваш email" />
            </div>
            <div class="form-action">
              <input type="submit" name="" />
            </div>
            <div class="check">
              <input type="checkbox" name="" id="data1" checked="checked" />
              <label for="data1"
                ><a href="">Согласие</a> на обработку персональных данных</label
              >
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="footer-wrap">
      <div class="layout-center clearfix">
        <div class="field-content">
          <div id="footer-menu-1" class="menu field-block">
            <div class="block-title">Все про INTERTOOL</div>
            <ul>
              <li><a href="">О нас</a></li>
              <li><a href="">Команда</a></li>
              <li><a href="">Миссия и ценности</a></li>
              <li><a href="">Каталог товаров</a></li>
            </ul>
          </div>
          <div id="footer-menu-2" class="menu field-block">
            <div class="block-title">Сотрудничество</div>
            <ul>
              <li><a href="">INTERTOOL GLOBAL</a></li>
              <li><a href="">Оптовая торговля</a></li>
              <li><a href="">Обратная связь</a></li>
              <li><a href="">Партнеры</a></li>
            </ul>
          </div>
          <div id="footer-menu-3" class="menu field-block">
            <div class="block-title">Сервис</div>
            <ul>
              <li><a href="">Оплата и доставка</a></li>
              <li><a href="">Возврат товара</a></li>
              <li><a href="">Программа лояльности</a></li>
              <li><a href="">Качество</a></li>
              <li><a href="">Сервис</a></li>
            </ul>
          </div>
          <div id="footer-menu-4" class="menu field-block">
            <div class="block-title">Блог</div>
            <ul>
              <li><a href="">Видеообзоры</a></li>
              <li><a href="">Новинки</a></li>
              <li><a href="">Полезные советы</a></li>
              <li><a href="">Статьи</a></li>
              <li><a href="">Новости</a></li>
            </ul>
          </div>
          <div class="rec-calls field-block">
            <div class="block-title">Прием звонков:</div>
            <p>
              Будние:<br />
              08:00 - 20:00 <br />
              Выходные:<br />
              08:00 - 17:00
            </p>
          </div>
          <div class="contact field-block">
            <div class="block-title">Контакты</div>
            <div class="tel">
              <a href="tel:+38 (067) 828-70-07">+38 (067) 828-70-07</a>
              <a href="tel:+38 (050) 355-70-07">+38 (050) 355-70-07</a>
              <a href="tel:+38 (044) 221-70-07">+38 (044) 221-70-07</a>
            </div>
            <div class="find">
              <a href="#">Найти магазин</a>
            </div>
          </div>
          <div class="mobile">
            <div class="field-logo">
              <img src="dist/images/logo.png" />
            </div>
            <div class="field-call">
              <div class="label">Связаться с нами</div>
              <div class="work-time">
                <p>Будние - 08:00 - 20:00</p>
                <p>Выходные - 08:00 - 17:00</p>
              </div>
              <ul>
                <li class="tel tel-1">
                  <a href="tel:+38 (044) 221-70-07">+38 (044) 221-70-07</a>
                </li>
                <li class="tel tel-2 mess">
                  <div class="send_mess">
                    <a href="" class="vi">viber</a>
                    <a href="" class="te">telegram</a>
                  </div>
                  <a href="tel:+38 (044) 221-70-07">+38 (044) 221-70-07</a>
                </li>
                <li class="tel tel-3">
                  <a href="tel:+38 (044) 221-70-07">+38 (044) 221-70-07</a>
                </li>
              </ul>
              <div class="find-store">
                <a href="">Найти магазин</a>
              </div>
              <div class="follow">
                <div class="label">Подпишитесь на нас</div>
                <div class="social-link">
                  <a class="fb" href="">facebook</a>
                  <a class="youtube" href="">yuotube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer-bottom">
      <div class="layout-center clearfix">
        <div class="field-content">
          <div
            class="field-block expanded_icon expanded expanded_click"
            id="block-language-dropdown_footer"
          >
            <div class="lang-dropdown-select active">РУ</div>
            <ul class="dropdown-select-language_child dropdown">
              <li><a href="">УКР</a></li>
              <li><a href="">ENG</a></li>
            </ul>
          </div>

          <div class="field-block rights">
            intertool.ua - все права защищены. |
            <a href="">Условия использования сайта</a> |
            <a href="">Карта сайта</a>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-popup" style="display: none">
      <div class="wrap">
        <div class="head-cart">
          <div class="layout-center">
            <div class="head">
              <div>Корзина</div>
              <div class="close"></div>
            </div>
          </div>
        </div>

        <div class="layout-center clearfix">
          <div id="main-content" class="no-sidebar clearfix">
            <!-- блок фильтры -->
            <!-- блок сортировки -->

            <div id="content">
              <div id="cart">
                <div class="field-content">
                  <div class="row row-1">
                    <div class="col col-1">
                      <div class="field-img">
                        <img src="dist/images/c1.png" />
                      </div>
                    </div>
                    <div class="col col-2">
                      <div class="field-title">
                        Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2
                        цилиндра. INTERTOOL PT-0007
                      </div>
                      <div class="art">
                        <div class="label">Артикул:</div>
                        PT-0010
                      </div>
                      <div class="price">
                        <div class="price-old">2,799 грн.</div>
                        <div class="price-new">1 009 грн.</div>
                      </div>
                      <div class="bonus">
                        +119.95 бонусов
                      </div>
                    </div>
                    <div class="col col-3">
                      <div class="number_of_item">
                        <div class="plusminus-link">
                          <a href="">-</a>
                        </div>
                        <div class="form-item">
                          <input type="text" name="" value="1" />
                        </div>
                        <div class="plusminus-link">
                          <a href="">+</a>
                        </div>
                      </div>
                    </div>
                    <div class="col col-4">
                      <div class="total-price">
                        1 009 грн.
                      </div>
                    </div>
                    <div class="col col-5">
                      <div class="field-delete">
                        <a href=""></a>
                      </div>
                    </div>
                  </div>

                  <div class="row row-1">
                    <div class="col col-1">
                      <div class="field-img">
                        <img src="dist/images/c2.png" />
                      </div>
                    </div>
                    <div class="col col-2">
                      <div class="field-title">
                        Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2
                        цилиндра. INTERTOOL PT-0007
                      </div>
                      <div class="art">
                        <div class="label">Артикул:</div>
                        PT-0010
                      </div>
                      <div class="price">
                        <div class="price-old">2,799 грн.</div>
                        <div class="price-new">1 009 грн.</div>
                      </div>
                      <div class="bonus">
                        +119.95 бонусов
                      </div>
                    </div>
                    <div class="col col-3">
                      <div class="number_of_item">
                        <div class="plusminus-link">
                          <a href="">-</a>
                        </div>
                        <div class="form-item">
                          <input type="text" name="" value="1" />
                        </div>
                        <div class="plusminus-link">
                          <a href="">+</a>
                        </div>
                      </div>
                    </div>
                    <div class="col col-4">
                      <div class="total-price">
                        1 009 грн.
                      </div>
                    </div>
                    <div class="col col-5">
                      <div class="field-delete">
                        <a href=""></a>
                      </div>
                    </div>
                  </div>

                  <div class="row row-1">
                    <div class="col col-1">
                      <div class="field-img">
                        <img src="dist/images/c2.png" />
                      </div>
                    </div>
                    <div class="col col-2">
                      <div class="field-title">
                        Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2
                        цилиндра. INTERTOOL PT-0007
                      </div>
                      <div class="art">
                        <div class="label">Артикул:</div>
                        PT-0010
                      </div>
                      <div class="price">
                        <div class="price-old">2,799 грн.</div>
                        <div class="price-new">1 009 грн.</div>
                      </div>
                      <div class="bonus">
                        +119.95 бонусов
                      </div>
                    </div>
                    <div class="col col-3">
                      <div class="number_of_item">
                        <div class="plusminus-link">
                          <a href="">-</a>
                        </div>
                        <div class="form-item">
                          <input type="text" name="" value="1" />
                        </div>
                        <div class="plusminus-link">
                          <a href="">+</a>
                        </div>
                      </div>
                    </div>
                    <div class="col col-4">
                      <div class="total-price">
                        1 009 грн.
                      </div>
                    </div>
                    <div class="col col-5">
                      <div class="field-delete">
                        <a href=""></a>
                      </div>
                    </div>
                  </div>

                  <div class="row row-1">
                    <div class="col col-1">
                      <div class="field-img">
                        <img src="dist/images/c2.png" />
                      </div>
                    </div>
                    <div class="col col-2">
                      <div class="field-title">
                        Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2
                        цилиндра. INTERTOOL PT-0007
                      </div>
                      <div class="art">
                        <div class="label">Артикул:</div>
                        PT-0010
                      </div>
                      <div class="price">
                        <div class="price-old">2,799 грн.</div>
                        <div class="price-new">1 009 грн.</div>
                      </div>
                      <div class="bonus">
                        +119.95 бонусов
                      </div>
                    </div>
                    <div class="col col-3">
                      <div class="number_of_item">
                        <div class="plusminus-link">
                          <a href="">-</a>
                        </div>
                        <div class="form-item">
                          <input type="text" name="" value="1" />
                        </div>
                        <div class="plusminus-link">
                          <a href="">+</a>
                        </div>
                      </div>
                    </div>
                    <div class="col col-4">
                      <div class="total-price">
                        1 009 грн.
                      </div>
                    </div>
                    <div class="col col-5">
                      <div class="field-delete">
                        <a href=""></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="total-summ">
                  <div class="col-1">
                    <div class="label">Итого:</div>
                  </div>
                  <div class="col-2">
                    <div class="field field-bonus">+230.95 бонусов</div>
                    <div class="field field-old-price">688 грн.</div>
                    <div class="field field-new-price">4000 грн.</div>
                  </div>
                </div>
                <div class="enter-shop">
                  <a href="" class="btn red">Оформить заказ</a>
                  <a href="" class="btn continue">Продолжить покупки</a>
                </div>
              </div>
            </div>
            <!-- end #content -->

            <!-- сюда пихаем item-list переключалки на след. страницы -->
          </div>
          <!-- end main-content -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";
export default {};
</script>

<style></style>
