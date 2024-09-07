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
</script>

<Page>
  <svelte:fragment slot="central">
    <Section title="About me">
      I absolutely love programming! It's like a playground for building something new and cool, and
      figuring out how other stuff works. I first started teaching myself to code back in high
      school, and just kept on going through college while getting my math degree. Eventually, I
      went back to school to learn even more about computer science. Now, programming is not just a
      hobby, but my job too - and I still get a kick out of learning and discovering new things.
    </Section>

    <Section title="Experiences">
      <Experience
        role="Senior Developer"
        time="2022 - present"
        company="Sibill"
        where="Milan, Italy"
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
        As a full-stack developer, I not only develop both the back-end and front-end of the
        platform but also actively collaborate with product managers and designers. I have a strong
        preference for agile methodologies, which emphasize close-knit teams, frequent
        communication, and the ability to adapt to changing requirements. Effective communication
        and teamwork are essential to ensure that the platform meets the desired functionality,
        usability, and performance requirements, while the agile approach allows for a more flexible
        and iterative development process.
      </Experience>
      <Experience
        role="Head of development"
        time="2020 - 2022"
        company="ARGO Vision"
        where="Milan, Italy"
        website="https://argo.vision"
      />
      <Experience
        role="Developer"
        time="2017 - 2020"
        company="ARGO Vision"
        where="Milan, Italy"
        website="https://argo.vision"
      />
      <Experience
        role="Internship"
        time="2016 - 2017"
        company="ARGO Vision"
        where="Milan, Italy"
        website="https://argo.vision"
        technologies={['C++', 'Python', 'Rust', 'Matlab']}
      >
        As a Computer Vision expert, I am responsible for designing, prototyping, and implementing
        advanced Computer Vision algorithms. I oversee the development of our in-house vision
        library implemented in C++, which involves managing both the architectural design and
        performance optimization of the library. I am proud to say that the library has been
        successfully used in various systems, ranging from low-power ARM devices and smartphones to
        x86.
      </Experience>
    </Section>

    <Section title="Education">
      <Experience
        role="Bachelor degree in Computer Science"
        time="2014 - 2021"
        company="Università degli Studi di Milano"
        where="Milan, Italy"
      />
      <Experience
        role="Bachelor degree in Mathematics"
        company="Università degli Studi di Milano"
        where="Milan, Italy"
        time="2009 - 2013"
      />
      <Experience
        role="Scientific high school diploma"
        company="Liceo Scientifico Statale Vittorio Veneto"
        where="Milan, Italy"
        time="2009 - 2013"
      />
    </Section>

    <Section title="Technical skills">
      <Subsection title="Programming languages">
        <LineList list={['Bash', 'C++', 'Elixir', 'Python', 'Rust', 'SQL', 'Typescript']} />
      </Subsection>

      <Subsection title="Platforms and software">
        <LineList
          list={['AWS', 'Docker', 'Emacs', 'Git', 'Linux', 'Nodejs', 'PostgreSQL', 'Terraform']}
        />
      </Subsection>
    </Section>

    <Section title="Personal interests">
      <Subsection title="Computer science">
        I really enjoy learning about and staying current with new technologies. I love diving into
        both the practical and theoretical aspects of them. I often attend various meetups to fuel
        my curiosity, such as JVM User Group, eXtreme Programming User Group, Rust Milano, and
        Opensource Saturday. It's a great way to connect with like-minded people and learn from each
        other's experiences!
      </Subsection>

      <Subsection title="Bike">
        My bicycle is my go-to mode of transportation for urban travel and excursions. I love the
        exercise and connection to the environment it provides. Whether I'm running errands or
        exploring new places, cycling brings me joy and fulfillment.
      </Subsection>

      <Subsection title="Food">
        I believe that eating is one of life's greatest pleasures. Cooking allows me to combine
        ingredients in creative ways, resulting in dishes that are greater than the sum of their
        parts. It's a fun and rewarding way to express myself and nourish my body.
      </Subsection>
    </Section>
  </svelte:fragment>

  <Profile name="Andrea Tomasi" role="Developer" image="profile.webp" slot="top-sidebar" />

  <div slot="bottom-sidebar" class="links">
    <Location city="Milan" state="Italy" />
    <Email email="tomasiandrea.at@gmail.com" />
    <Linkedin name="andrea-tomasi-b19921100" />
    <Github username="treere" />
  </div>
</Page>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
