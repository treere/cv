<script lang="ts">
  import { t } from '$lib/translations';
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
        <a href={website} target="_blank" rel="noopener noreferrer">{company}</a>
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
  <div class="technologies">
    <h4 class="title">{$t('cv.technologies')}</h4>
    <LineList list={technologies} />
  </div>
{/if}

<style lang="scss">
  a {
    color: var(--color-link);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-link-hover);
  }

  .job-description {
    margin-bottom: var(--spacing-2);
    padding: var(--spacing-2);
    border-left: 3px solid var(--color-link);
    background: rgba(0, 0, 0, 0.02);
    border-radius: 0 6px 6px 0;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }

    @media print {
      padding: 0 0 0 10px;
      margin-bottom: 10px;
      background: none !important;
      border-left: 2px solid var(--color-link);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }

  .role {
    font-weight: 600;
    font-size: 16px;
    color: var(--color-title);
  }

  .row {
    display: flex;
    flex-direction: column;

    > div:last-child {
      color: var(--color-subtitle);
      font-size: 14px;
    }

    @media (min-width: 450px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      > div:last-child {
        margin-left: var(--spacing-2);
      }
    }
  }

  .technologies {
    margin-top: var(--spacing-2);
    margin-bottom: var(--spacing-2);

    .title {
      color: var(--color-subtitle);
      font-size: 12px;
      font-weight: 600;
      margin: 0 0 var(--spacing-1);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
</style>
