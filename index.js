const callback = (data) => {
  const login = document.querySelector('.login-container');
  const profile = document.querySelector('.profile-wrapper');

  const profileInfo = document.querySelector('.profile-info');
  const profileImg = document.querySelector('.profile-img');

  Object.entries(data).forEach(([key, value]) => {
    if(value && key !== "photo") {
      const block = createUserInfo(key, value);

      profileInfo.append(block);
    }
  })


  if(data["photo"]) {
    profileImg.innerHTML = `<img src="${data["photo"]}" alt="photo" referrerpolicy="no-referrer">`
  }

  login.classList.add('hide');
  profile.classList.remove('hide');

}

new AuthPM(125, '.socials-container', callback);

const createUserInfo =(key, value ) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('user-info');

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = key;

  const val = document.createElement('div');
  val.classList.add('value');
  val.textContent = value;

  wrapper.append(title, val);

  return wrapper;
}
