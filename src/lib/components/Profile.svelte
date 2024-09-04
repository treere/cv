<script>
  export let image;
  export let name;
  export let role;
</script>

<div class="container">
  <img src={image} alt="profile pic" />
  <div>
    <h1>{name}</h1>
    <h2>{role}</h2>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1 {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 900;
    margin: 15px 0px 10px;
    color: #ffffff;
    text-wrap: nowrap;
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
  }

  img {
    border-radius: 100%;
  }
</style>
