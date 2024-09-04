<div class="container">
  <div class="central">
    <slot name="central" />
  </div>
  <div class="sidebar">
    <div class="top-sidebar">
      <slot name="top-sidebar" />
    </div>
    <div class="bottom-sidebar">
      <slot name="bottom-sidebar" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    margin: auto;
    background: #fff;
    flex-direction: column-reverse;
    max-width: 1000px;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }

  .central {
    padding: 20px;

    @media (min-width: 1000px) {
      padding: 60px;
      padding-right: 40px;
    }
  }

  .sidebar {
    min-width: 280px;
    background: #42a8c0;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) and (min-width: 570px) {
      flex-direction: row;
      align-items: center;
    }

    .top-sidebar {
      background: #35879a;
      padding: 20px;
    }

    .bottom-sidebar {
      padding: 20px;
      color: #ffffff;

      :global(a) {
        color: #ffffff;
      }
    }
  }
</style>
