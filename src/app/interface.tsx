
export interface BatchSystemTaskContextProviderPropsType {
    children: React.ReactNode;
}

export interface BatchSystemTaskStatesType {
    bgNav: string;
    setBgNav: React.Dispatch<React.SetStateAction<string>>;
    selectNav: string;
    setSelectNav: React.Dispatch<React.SetStateAction<string>>;
    changeMode: boolean;
    setChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
}


