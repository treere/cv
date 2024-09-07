<script lang="ts">
  import LineList from './LineList.svelte';

  export let role: string;
  export let time: string;
  export let company: string;
  export let where: string;
  export let website: string | undefined = undefined;
  export let technologies: string[] | undefined = undefined;
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

{#if technologies !== undefined}
  <div class="tecnologies">
    <h4 class="title">Technologies</h4>
    <LineList list={technologies} />
  </div>
{/if}

<style lang="scss">
  a {
    color: var(--color-link);
  }

  a:hover {
    color: var(--color-link-hover);
  }

  .job-description {
    margin-bottom: var(--spacing-2);
  }

  .role {
    font-weight: 500;
    font-size: 16px;
  }

  .row {
    display: flex;
    flex-direction: column;

    > div:last-child {
      color: var(--color-subtitle);
    }

    @media (min-width: 450px) {
      flex-direction: row;

      > div:last-child {
        margin-left: auto;
      }
    }
  }

  .tecnologies {
    margin-top: var(--spacing-2);

    .title {
      color: var(--color-title);
      font-size: 14px;
      font-weight: 600;
      margin: 0;
    }
  }
</style>
