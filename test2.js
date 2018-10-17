githubUsers
  .filter(user => user.followers > 10)
  .sortBy('contributions')
  .slice(0, 256)
