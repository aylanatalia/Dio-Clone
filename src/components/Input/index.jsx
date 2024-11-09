import { Controller } from "react-hook-form"
import { ErrorTest, IconContainer, InputContainer, InputText,  } from "./styles"

const Input = ({ leftIcon, name,control, errorMensage, ...rest }) => {
    return (
        <>
            <InputContainer >
                {leftIcon ? (<IconContainer> {leftIcon}</IconContainer >) : null
                }
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => <InputText {...field} {...rest} />}
                />
                {errorMensagem ? <ErrorTest>{errorMensage}</ErrorTest> : null}
            </InputContainer >
            {error}
        </>
    )
}

export { Input }