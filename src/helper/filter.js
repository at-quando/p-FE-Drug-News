import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  return value.replace(/\b\w/g, l => l.toUpperCase())
})

Vue.filter('takeImage', function (value) {
  return process.env.SERVER_IP + 'images/' + value
})
