class GitHub {
  constructor() {
    this.client_id = "4d6605fe996fa00a194b";
    this.client_secret = "cc1c098b8d76446410f74a33d14e26120152b8ca";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // get user method
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
