<div class="main-container">
  <slot></slot>
</div>

<style type="scss">
  :global {
    body {
      background: #f5f5f5;
      padding: 30px 10px;
      margin: 0px;
      font-family: 'Roboto', sans-serif;
      color: #545e6c;
      line-height: 1.4;
      font-size: 14px;
    }

    a {
      text-decoration: none;
    }

    a:hover, a:focus {
      text-decoration: underline;
    }
  }
</style>
