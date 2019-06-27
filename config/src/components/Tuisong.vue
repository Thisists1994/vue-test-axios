<template>
	<div class="tuisong">
		<slot name='top'></slot>
		<slot name='text'></slot>
	</div>
</template>

<style type="text/css">
.tuisong {
  margin: 10px 0;
  background: #fff;
  width: 100%;
}
.tuisong img {
  width: 100%;
}
.tuisong h4 {
  padding: 3px 3px;
}
</style>
