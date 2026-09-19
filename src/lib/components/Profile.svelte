<script lang="ts">
  let { image, name, role }: { image: string; name: string; role: string } = $props();
</script>

<div class="container">
  <img src={image} alt="Andrea Tomasi" width="120" height="120" fetchpriority="high" />
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
    font-size: 28px;
    line-height: 1.1;
    font-weight: 700;
    margin: var(--spacing-2) 0 var(--spacing-1);
    color: var(--color-link-light);
    text-wrap: balance;
    letter-spacing: -0.3px;
  }

  h2 {
    color: var(--color-link-light);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    opacity: 0.9;
  }

  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;

    @media print {
      width: 80px;
      height: 80px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: none;
    }
  }

  @media print {
    h1 {
      font-size: 24px;
      color: white !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    h2 {
      color: rgba(255, 255, 255, 0.9) !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
</style>
