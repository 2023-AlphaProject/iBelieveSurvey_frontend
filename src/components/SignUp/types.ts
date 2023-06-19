export interface StyleProps {
  width?: string;
  margin?: string;
  backgroundcolor?: string;
  color?: string;
}

export interface UserInfoType {
  realName: string;
  phoneNumber: string;
  birthyear: string;
  gender: string;
}

export interface UserInfoProps {
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
  onSubmit: (e: React.FormEvent) => void;
}
