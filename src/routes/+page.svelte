<script>
  import Email from '$lib/components/Email.svelte';
  import CompanyExperience from '$lib/components/CompanyExperience.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Github from '$lib/components/Github.svelte';
  import LineList from '$lib/components/LineList.svelte';
  import Location from '$lib/components/Location.svelte';
  import Linkedin from '$lib/components/Linkedin.svelte';
  import Page from '$lib/components/Page.svelte';
  import Profile from '$lib/components/Profile.svelte';
  import Section from '$lib/components/Section.svelte';
  import Subsection from '$lib/components/Subsection.svelte';

  import { t } from '$lib/translations';
</script>

<Page>
  {#snippet topSidebar()}
    <Profile name="Andrea Tomasi" role={$t('cv.roles.developer')} image="profile.webp" />
  {/snippet}
  {#snippet bottomSidebar()}
    <div class="links">
      <Location
        city={$t('cv.locations.milan_expanded.city')}
        state={$t('cv.locations.milan_expanded.state')}
      />
      <Email email="tomasiandrea.at@gmail.com" />
      <Linkedin name="andrea-tomasi-b19921100" />
      <Github username="treere" />
    </div>
  {/snippet}
  {#snippet central()}
    <Section title={$t('cv.about_me.title')}>
      {@html $t('cv.about_me.description')}
    </Section>

    <Section title={$t('cv.experiences.title')}>
      <CompanyExperience
        company="Sibill s.r.l."
        where={$t('cv.locations.milan')}
        website="https://sibill.it"
        roles={[
          {
            role: $t('cv.roles.tech_lead'),
            time: '2026 — Present'
          },
          {
            role: $t('cv.roles.senior_developer'),
            time: '2022 - 2026',
            description: $t('cv.experiences.sibill.description'),
            technologies: [
              'Elixir',
              'Phoenix',
              'SQL',
              'Typescript',
              'Reactjs',
              'HTML/CSS',
              'RabbitMQ',
              'Elastic Search'
            ]
          }
        ]}
      />
      <CompanyExperience
        company="ARGO Vision"
        where={$t('cv.locations.milan')}
        website="https://argo.vision"
        roles={[
          {
            role: $t('cv.roles.head_of_development'),
            time: '2020 - 2022'
          },
          {
            role: $t('cv.roles.developer'),
            time: '2017 - 2020'
          },
          {
            role: $t('cv.roles.internship'),
            time: '2016 - 2017',
            description: $t('cv.experiences.argo.description'),
            technologies: ['C++', 'Python', 'Rust', 'Matlab']
          }
        ]}
      />
    </Section>

    <Section title={$t('cv.education.title')}>
      <Experience
        role={$t('cv.education.cs_bachelor')}
        time="2014 - 2021"
        company="Università degli Studi di Milano"
        where={$t('cv.locations.milan')}
      />
      <Experience
        role={$t('cv.education.math_bachelor')}
        company="Università degli Studi di Milano"
        where={$t('cv.locations.milan')}
        time="2009 - 2013"
      />
      <Experience
        role={$t('cv.education.diploma')}
        company="Liceo Scientifico Statale Vittorio Veneto"
        where={$t('cv.locations.milan')}
        time="2004 - 2009"
      />
    </Section>

    <Section title={$t('cv.technical_skills.title')}>
      <Subsection title={$t('cv.technical_skills.programming_languages')}>
        <LineList list={['Bash', 'C++', 'Elixir', 'Python', 'Rust', 'SQL', 'Typescript']} />
      </Subsection>

      <Subsection title={$t('cv.technical_skills.platforms_and_software')}>
        <LineList
          list={['AWS', 'Docker', 'Emacs', 'Git', 'Linux', 'Nodejs', 'PostgreSQL', 'Terraform']}
        />
      </Subsection>
    </Section>

    <Section title={$t('cv.projects.title')}>
      <Subsection title={$t('cv.projects.treby.title')}>
        <p>{@html $t('cv.projects.treby.description')}</p>
        <div class="project-meta">
          <LineList list={['Elixir', 'Phoenix LiveView', 'PostgreSQL', 'S3']} />
          <a href="https://github.com/treere/treby" target="_blank" rel="noopener noreferrer"
            >{$t('cv.projects.view_on_github')} — treere/treby ↗</a
          >
        </div>
      </Subsection>

      <Subsection title={$t('cv.projects.cytos.title')}>
        <p>{@html $t('cv.projects.cytos.description')}</p>
        <div class="project-meta">
          <LineList list={['Rust', 'Dataflow', 'Concurrency']} />
          <a href="https://github.com/treere/cytos" target="_blank" rel="noopener noreferrer"
            >{$t('cv.projects.view_on_github')} — treere/cytos ↗</a
          >
        </div>
      </Subsection>

      <p class="project-note"><em>{$t('cv.projects.note')}</em></p>
    </Section>
  {/snippet}
</Page>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    margin-top: var(--spacing-1);

    a {
      font-size: 13px;
      color: var(--color-link);
      &:hover {
        color: var(--color-link-hover);
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }

  .project-note {
    margin-top: var(--spacing-2);
    font-size: 13px;
    color: var(--color-subtitle);
  }

  p {
    margin: 0 0 var(--spacing-1);
  }
</style>
