export interface StyleProps {
  width?: string;
  margin?: string;
  backgroundcolor?: string;
  color?: string;
}

export interface UserInfoType {
  realName: string;
  phoneNumber: string;
  birthYear: string;
  gender: any;
}

export interface UserInfoProps {
  userInfo: UserInfoType;
  setUserInfo: any;
}
