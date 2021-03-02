class Http {
  async registerUser (url, user) {
    const userResponse = await fetch(url, user);

    const user = await userResponse.json();

    return user;
    
  }
}