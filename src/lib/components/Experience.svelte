<script lang="ts">
  export let role: string;
  export let time: string;
  export let company: string;
  export let where: string;
  export let website: string | undefined = undefined;
  export let tecnologies: string[] | undefined = undefined;
</script>

<div class="job-description">
  <div class="row">
    <div class="role">{role}</div>
    <div>{time}</div>
  </div>
  <div class="row">
    <div>
      {#if website !== undefined}
        <a href={website}>{company}</a>
      {:else}
        {company}
      {/if}
    </div>
    <div>
      {where}
    </div>
  </div>
</div>

<slot />

{#if tecnologies !== undefined}
  <div>
    <div class="tecnologies-title">Most used technologies</div>

    <ul class="tecnologies-list">
      {#each tecnologies as tecnology}
        <li>{tecnology}</li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  a {
    color: #2d7788;
  }

  a:hover {
    color: #1a454f;
  }

  .job-description {
    margin-bottom: 15px;
  }

  .role {
    font-weight: 500;
    font-size: 16px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .row > div:last-child {
    margin-left: auto;
    color: #97aac3;
  }

  .tecnologies-title {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }

  .tecnologies-list {
    list-style: none;
    padding-left: 10px;
  }

  .tecnologies-list li {
    display: inline-block;
    padding: 0.25em 0.4em;
  }
</style>
