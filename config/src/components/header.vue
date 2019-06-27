<template>
	<div class="HeaderWrap" :style='{backgroundColor:col}'>
		<slot name='search'></slot>
		<slot name='ltImg'></slot>
		<slot name='rtImg'></slot>
	</div>
</template>

<script type="text/javascript">
export default {
  props: {
    col: {
      default: "#eee"
    }
  }
};
</script>

<style type="text/css">
.HeaderWrap {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #ccc;
  line-height: 48px;
  position: fixed;
  z-index: 2;
}

.title {
  font-size: 16px;
  font-weight: 700;
}
</style>
