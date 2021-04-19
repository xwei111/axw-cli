const pug = `<template lang="pug">
  .box table
</template>
<script>
export default {
  data() {}
};
</script>`

const common = `<template>
  <div class="box">table</div>
</template>
<script>
export default {
  data() {}
};
</script>`

module.exports = (type) => type == 'pug' ? pug : common