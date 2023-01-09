export interface setState {
  setIsUser: Function;
  isUser: boolean;
  value?: string;
}

export interface input {
  innerRef: React.RefObject<HTMLInputElement>;
  type: string;
  placeholder: string;
}

export interface loginTitle {
  title: string;
}

export interface loginBtn {
  value: string;
}
