import { Input } from "antd";
import { FC } from "react";

type ChangProps = {
    onChangeOne: Function
    setInput: any
}


const InputField:FC<ChangProps> = (props) => {
const {onChangeOne, setInput} = props
    return(
        <Input
              showCount
              maxLength={20}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChangeOne(e)}
              value={setInput}
            />
    )
}

export default InputField