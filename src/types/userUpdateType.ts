export interface userInfo {
  realName: string;
  phoneNumber: string;
  birthyear: string;
  gender: string;
}

export interface userType extends userInfo {
  isUser: boolean;
  email: string;
  hidden_realName: string;
  kakaoId: string;
}

export default userInfo;
