const linksSocialMedia = {
  github: "vpmoura",
};

const getGithubProfileInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userGithub.href = data.html_url;
      userImage.src = data.avatar_url;
      userLinkedin.href = data.blog;
      userLogin.textContent = `@${data.login}`;
    });
};

getGithubProfileInfos();
