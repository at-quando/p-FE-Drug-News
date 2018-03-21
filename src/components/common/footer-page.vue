<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="footer-logo">
            <img src="/static/images/logo-white.png" alt="footer-logo">
          </h1>
          <ul class="contact-list">
            <li class="contact-item">
              <font-awesome-icon icon='map-marker' class="contact-icon"></font-awesome-icon>
              18-Hoàng Quốc Việt-Cầu Giấy-Hà Nội
            </li>
            <li class="contact-item">
              <font-awesome-icon icon='phone' class="contact-icon"></font-awesome-icon>
              0123456789
            </li>
            <li class="contact-item">
              <font-awesome-icon icon='envelope' class="contact-icon"></font-awesome-icon>
              vevoiyeuthuong.org@gmail.com
            </li>
          </ul>
          <div class="social-list col-md-8">
            <div class="row">
              <div class="col-md-4"><font-awesome-icon class="social-icon" :icon="['fab', 'facebook-f']" /></div>
              <div class="col-md-4"><font-awesome-icon class="social-icon" :icon="['fab','google-plus-g']" /></div>
              <div class="col-md-4"><font-awesome-icon class="social-icon" :icon="['fab','youtube']" /></div>
            </div>
          </div>
          <p class="footer-copyright">
            &#169; VEVOIYEUTHUONG. - All rights Reserved
          </p>
        </div>
        <div class="col-md-6 right-content">
          <ul class="col-md-4 footer-menu">
            <li class="menu-item"><a href="#" class="menu-link">trang chủ</a></li>
            <li class="menu-item"><a href="#" class="menu-link">ăn uống-dinh dưỡng</a></li>
            <li class="menu-item"><a href="#" class="menu-link">năng lượng chữa bệnh</a></li>
            <li class="menu-item"><a href="#" class="menu-link">dự án</a></li>
            <li class="menu-item"><a href="#" class="menu-link">về chúng tôi</a></li>
          </ul>
          <p class="email-register">
            Đăng kí thông báo e-mail<br> để cập nhật những tin tức mới nhất từ Về Với Yêu Thương
          </p>
          <div class="col-md-9 remove-padding">
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">Username</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control remove-right-border" id="inlineFormInputGroup" placeholder="Email của bạn">
                <div class="input-group-prepend remove-left-border">
                  <div class="input-group-text remove-left-border"><font-awesome-icon class="font-icon" :icon="['fas', 'angle-right']" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-page",
  props: ["title"]
};
</script>
<style>

</style>
