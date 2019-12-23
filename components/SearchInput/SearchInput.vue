<template>
<view class="search_input">
  <navigator class="ss" url="/pages/home/search_Page/search_Page" open-type="navigate">
    搜索
  </navigator>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {},
  methods: {
    setData: function (obj, callback) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
      callback && callback();
    }
  }
};
</script>
<style>
@import "./SearchInput.css";
</style>