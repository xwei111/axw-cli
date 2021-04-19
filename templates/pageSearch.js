const pug = `<template lang="pug">
  .box pageSearch
</template>
<script>
export default {
  data() {}
};
</script>`

const common = `<template>
  <div class="box">pageSearch</div>
</template>
<script>
export default {
  data() {}
};
</script>`

module.exports = (type) => type == 'pug' ? pug : common