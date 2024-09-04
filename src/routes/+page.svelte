<script>
  import Section from '$lib/components/Section.svelte';
  import Subsection from '$lib/components/Subsection.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Page from '$lib/components/Page.svelte';
  import Profile from '$lib/components/Profile.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<Page>
  <div slot="central">
    <Section title="About me">
      I love programming because it gives me the opportunity to build something new, as well as to
      analyze what already exists, disassemble it and understand how it works. My first approach to
      programming was self-taught. I programmed for fun from high school until graduated with a
      degree in mathematics. I decided to improve my computer science basics by resuming my studies.
      Today my main passion has become my job and the curiosity and desire for discovery are still
      the same.
    </Section>

    <Section title="Experiences">
      <Experience
        role="Senior Developer"
        time="2022 - present"
        company="Sibill"
        where="Milan, Italy"
        website="https://sibill.it"
        tecnologies={['Elixir', 'Phoenix', 'SQL', 'Reactjs', 'HTML/CSS']}
      >
        I develop both the back-end and front-end of our platform.
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
        tecnologies={['C++', 'Matlab', 'Python', 'Rust']}
      >
        I supervise and develop Computer Vision algorithms from prototyping to implementation. I am
        one of the maintainers of our vision library in C++: I deal with both architecture and
        performance. The library has been successfully used on low-power ARM devices, smartphones,
        and x86 servers. I have addressed classification, detection, anomaly recognition and 3D
        reconstruction problems.
      </Experience>
      <Experience
        role="Volunteer"
        time="2011 - 2017"
        company="Spazio Studio Giambellitaly"
        where="Milan, Italy"
        website="https://www.facebook.com/spaziostudiogy"
      >
        Along with other volunteers, I managed a place where university students could study. I was
        responsible for managing and coordinating the facility, preparing lunch for the users.
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
      <h3>Programming languages</h3>
      Bash C C++ Elixir Java Javascript Lisp Python Rust SQL Typescript

      <h3>Platforms and software</h3>
      AWS Docker Emacs Git Linux Nodejs PostgreSQL Subversion Terraform
    </Section>

    <Section title="Personal interests">
      <Subsection title="Computer science">
        I like to study and keep up to date with new technologies. I enjoy deepening both their
        practical and theoretical sides. I usually attend different meetups: JUG (Jvm User Group),
        XPUG (eXtreme Programming User Group), Rust Milano and Opensource Saturday.
      </Subsection>

      <Subsection title="Bike">
        Bicycle is my primary mode of transportation. I use it for all urban travel and, when
        possible, for my excursions.
      </Subsection>

      <Subsection title="Food">
        I think eating is one of life's pleasures. With cooking you have the ability to mix and
        match ingredients to create something that is far more than the sum of its parts.
      </Subsection>
    </Section>
  </div>

  <div slot="top-sidebar">
    <Profile name="Andrea Tomasi" role="Developer" image="profile.webp" />
  </div>
  <div slot="bottom-sidebar" class="links">
    <div>
      <Icon name="location.svg" size="16px" />
      Milan, Italy
    </div>
    <div>
      <Icon name="email.svg" size="16px" />
      <a href="mailto:tomasiandrea.at@gmail.com">tomasiandrea.at@gmail.com</a>
    </div>
    <div>
      <Icon name="linkedin.svg" size="16px" />
      <a href="https://linkedin.com/in/andrea-tomasi-b19921100">andrea-tomasi-b19921100</a>
    </div>
    <div>
      <Icon name="github.svg" size="16px" />
      <a href="http://github.com/treere">treere</a>
    </div>
  </div>
</Page>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }
</style>
