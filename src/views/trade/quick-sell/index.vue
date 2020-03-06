<template>
  <div class="quick-sell">
    <div class="currency-options">
      2222222
    </div>

    <div class="sell-input-container">

    </div>

    <div class="self-choise-sell">

    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickSell'
}
</script>

<style lang="scss" scoped>
$bg: #23252B;

.currency-options{
  background-color: $bg;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 20px 60px;
}
.sell-input-container{
  margin: 20px 0;
  height: 200px;
  background-color: #1D1F24;
  border-radius: 6px;
}
.self-choise-sell{
  height: 500px;
  background-color: $bg;
  border-radius: 6px;
}
</style>