class Member {
  #email
  #nickname
  #pwd

  constructor(email, nickname, pwd) {
    this.#email = email;
    this.#nickname = nickname;
    this.#pwd = pwd;
    this._email = email;
    this._nickname = nickname;
  }

  toJSON() {
    return {
      email: this.#email,
      nickname: this.#nickname,
      pwd: this.#pwd
    }
  }

  get email() {
    return this._email;
  }

  get nickname() {
    return this._nickname;
  }
}

export default Member
