import { Input } from "antd";
import { FC } from "react";


type ChangProps = {
    onChangeTwo: Function
    setText:any
}

const TextAreaField:FC<ChangProps> = (props:ChangProps) => {
const {onChangeTwo, setText} = props
const { TextArea } = Input;

    return (
        <TextArea
              showCount
              maxLength={100}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => onChangeTwo(e)}
              value={setText}
            />
    )
}

export default TextAreaField