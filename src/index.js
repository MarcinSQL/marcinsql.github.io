const navBtn = document.querySelector(".hamburger");
const navToggle = document.querySelector(".header__navigation--js");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navToggle.classList.toggle("header__navigation--mobile");
};

navBtn.addEventListener("click", handleNav);

fetch("https://api.github.com/users/MarcinSQL/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;
      const repositoryList = document.querySelector(".projects__container--js");
      const myTemplate = `
        <article class="project">
            <div class="project__window">
              <span class="window__circle"></span>
              <span class="window__circle"></span>
              <span class="window__circle"></span>
            </div>
            <a href="https://github.com/MarcinSQL" target="_blank">
              <img
                class="project__img"
                src="img/Github-Icon.svg"
                alt="Github icon."
              />
            </a>
            <div class="project__container">
              <p class="project__title">
                <span
                  class="title__label"
                  >project:</span
                ><span
                  class="title__value--title"
                  >${name}</span
                >
              </p>
              <p class="project__title">
                <span
                  class="title__label"
                  >description:</span
                ><span
                  class="title__value--description"
                  >${description}</span
                >
              </p>
              <p class="project__title">
                <span
                  class="title__label"
                  >demo:</span
                ><span
                  >&lt;<a
                    class="title__value--link"
                    href="${homepage}"
                    title="${name} - demo."
                    target="_blank"
                    >see here</a
                  >&gt;</span
                >
              </p>
              <p class="project__title">
                <span
                  class="title__label"
                  >github:</span
                ><span
                  >&lt;<a
                    class="title__value--link"
                    href="${html_url}"
                    title="${name} - source code."
                    target="_blank"
                    >source code</a
                  >&gt;</span
                >
              </p>
            </div>
          </article>
        `;
      if (description && name !== "Java" && name !== "marcinsql.github.io") {
        repositoryList.innerHTML += myTemplate;
      }
    }
  })
  .catch((error) => {
    console.log(
      `Repositories can not be download to website. Error code: ${error}`
    );
  });
