import styled from 'styled-components'

export const Textarea = ({label, placeholder}) => {

    return(
        <Wrapper>
            <>
                <label htmlFor='textarea'>
                {label} label
                </label>
                <textarea type='text' id='textarea' placeholder={placeholder} />
            </>
        </Wrapper>
    )

}

const Wrapper = styled.textarea`
    height: 127px;
    background-color: #F6F6F6;
    border-radius: 8px;
    border: 0px;
    padding: 14px 18px;
    margin-bottom: 18px;
    resize: none;
`