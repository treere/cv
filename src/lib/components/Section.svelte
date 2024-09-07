<script>
  export let title;
</script>

<div class="section">
  <div class="title">{title}</div>
  <div class="body">
    <slot />
  </div>
</div>

<style lang="scss">
  .section {
    margin-bottom: 15px;

    .title {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 500;
      color: #2d7788;
      position: relative;
      margin-top: 0;
      margin-bottom: 10px;
    }

    .body {
      text-align: justify;
    }
  }
</style>
