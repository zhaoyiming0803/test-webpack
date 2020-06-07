const {compile, parseComponent} = require('vue-template-compiler')

const component = `
  <template>
    <view class="container">
      <text>hello world</text>
      <text>{{a + b}}</text>
    </view>
  </template>
  
  <script>
    export default {
      data () {
        return {
          a: 1,
          b: 2
        }
      }
    }
  </script>
  
  <style>
    .container {
      font-size: 30px;
    }
  </style>
`

console.log(parseComponent(component))