<script>
  import Email from '$lib/components/Email.svelte';
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
  <Profile
    name="Andrea Tomasi"
    role={$t('cv.roles.developer')}
    image="profile.webp"
    slot="top-sidebar"
  />

  <div slot="bottom-sidebar" class="links">
    <Location
      city={$t('cv.locations.milan_expanded.city')}
      state={$t('cv.locations.milan_expanded.state')}
    />
    <Email email="tomasiandrea.at@gmail.com" />
    <Linkedin name="andrea-tomasi-b19921100" />
    <Github username="treere" />
  </div>

  <svelte:fragment slot="central">
    <Section title={$t('cv.about_me.title')}>
      {$t('cv.about_me.description')}
    </Section>

    <Section title={$t('cv.experiences.title')}>
      <Experience
        role={$t('cv.roles.senior_developer')}
        time="2022 -"
        company="Sibill s.r.l."
        where={$t('cv.locations.milan')}
        website="https://sibill.it"
        technologies={[
          'Elixir',
          'Phoenix',
          'SQL',
          'Typescript',
          'Reactjs',
          'HTML/CSS',
          'RabbitMQ',
          'Elastic Search'
        ]}
      >
        {$t('cv.experiences.sibill.description')}
      </Experience>
      <Experience
        role={$t('cv.roles.head_of_development')}
        time="2020 - 2022"
        company="ARGO Vision"
        where={$t('cv.locations.milan')}
        website="https://argo.vision"
      />
      <Experience
        role={$t('cv.roles.developer')}
        time="2017 - 2020"
        company="ARGO Vision"
        where={$t('cv.locations.milan')}
        website="https://argo.vision"
      />
      <Experience
        role={$t('cv.roles.internship')}
        time="2016 - 2017"
        company="ARGO Vision"
        where={$t('cv.locations.milan')}
        website="https://argo.vision"
        technologies={['C++', 'Python', 'Rust', 'Matlab']}
      >
        {$t('cv.experiences.argo.description')}
      </Experience>
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
        time="2009 - 2013"
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

    <Section title={$t('cv.personal_interests.title')}>
      <Subsection title={$t('cv.personal_interests.computer_science.title')}>
        {$t('cv.personal_interests.computer_science.description')}
      </Subsection>

      <Subsection title={$t('cv.personal_interests.bike.title')}>
        {$t('cv.personal_interests.bike.description')}
      </Subsection>

      <Subsection title={$t('cv.personal_interests.food.title')}>
        {$t('cv.personal_interests.food.description')}
      </Subsection>
    </Section>
  </svelte:fragment>
</Page>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }
</style>
