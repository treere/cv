<script lang="ts">
  import { t } from '$lib/translations';
  import LineList from './LineList.svelte';

  export let company: string;
  export let where: string;
  export let website: string | undefined = undefined;
  export let roles: {
    role: string;
    time: string;
    description?: string;
    technologies?: string[];
  }[];
</script>

<div class="company">
  <div class="company-header">
    <div>
      {#if website !== undefined}
        <a href={website} target="_blank" rel="noopener noreferrer" class="company-name"
          >{company}</a
        >
      {:else}
        <span class="company-name">{company}</span>
      {/if}
    </div>
    <div class="where">{where}</div>
  </div>

  <div class="roles">
    {#each roles as role}
      <div class="role">
        <div class="role-header">
          <div class="role-name">{role.role}</div>
          <div class="time">{role.time}</div>
        </div>
        {#if role.description}
          <div class="description">
            {@html role.description}
          </div>
        {/if}
        {#if role.technologies}
          <div class="technologies">
            <h4 class="title">{$t('cv.technologies')}</h4>
            <LineList list={role.technologies} />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  a {
    color: var(--color-link);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-link-hover);
  }

  .company {
    margin-bottom: var(--spacing-3);
  }

  .company-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    padding: var(--spacing-2);
    border-left: 3px solid var(--color-link);
    background: rgba(0, 0, 0, 0.02);
    border-radius: 0 6px 6px 0;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }

    @media (min-width: 450px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }

    @media print {
      padding: 0 0 0 10px;
      background: none !important;
      border-left: 2px solid var(--color-link);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }

  .company-name {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-title);
  }

  .where {
    color: var(--color-subtitle);
    font-size: 14px;
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: var(--spacing-1);
  }

  .role {
    padding: var(--spacing-1) 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }

  .role-header {
    display: flex;
    flex-direction: column;

    @media (min-width: 450px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .role-name {
    font-weight: 500;
    font-size: 15px;
    color: var(--color-text);
  }

  .time {
    color: var(--color-subtitle);
    font-size: 14px;
  }

  .description {
    margin-top: var(--spacing-1);
    font-size: 14px;
    color: var(--color-text);
  }

  .technologies {
    margin-top: var(--spacing-1);

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
