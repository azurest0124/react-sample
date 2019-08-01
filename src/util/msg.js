const msg = {
  error: {
    valid: {
      empty: "값이 빈 값입니다.",
      name: "이름은 2글자 이상이어야 합니다.",
      email: {
        format: "이메일 형식이 맞지 않습니다.",
        duplicate: "중복된 이메일이 존재합니다.",
        empty: "이메일 값이 빈 값입니다."
      },
      password: {
        format: "패스워드 형식은 영문, 숫자, 특수문자 조합의 8~16글자입니다.",
        empty: "패스워드 값이 빈 값입니다."
      },
      passwordConfirm: {
        different: "패스워드와 일치하지 않습니다.",
        empty: "패스워드 확인 값이 빈 값입니다."
      }
    },
    login: {
      fail:
        "로그인에 실패하였습니다. 이메일 혹은 패스워드를 다시 확인해 주세요."
    }
  },

  placeholder: {
    register: {
      email: "로그인 시 ID로 사용할 이메일을 입력해 주세요.",
      name: "이름을 작성해 주세요.",
      password: "로그인 시 사용할 패스워드를 작성해 주세요.",
      passwordConfirm: "위에 작성하신 패스워드를 다시 한번 입력해 주세요."
    },
    login: {
      email: "이메일을 입력해 주세요.",
      password: "패스워드를 입력해 주세요."
    }
  }
};

export default msg;
