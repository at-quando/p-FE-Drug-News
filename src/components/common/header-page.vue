<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1>
            <img src="/static/images/logo-red.png" class="">
          </h1>
        </div>
        <div class="col-md-6">
          <div class="input-group input-w-icon mb-3 pull-right">
            <input type="text" :placeholder="$t('lang.nav.search')" aria-label="Username" aria-describedby="basic-addon1">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">{{$t('lang.nav.home')}} <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('lang.nav.about')}}</a>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <flag-dropdown></flag-dropdown>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-page'
}
</script>
<style>
</style>
