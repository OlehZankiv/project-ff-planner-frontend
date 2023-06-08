import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import { StarIcon } from '../../assets/icons'

export const Ratings = ({}) => {
    const { colors } = useTheme()

    const [ratingValue, setRatingValue] = useState(0)
    const [ratingHoverValue, setRatingHoverValue] = useState(undefined)

    const stars = Array(5).fill(0)

    return(
        <RatingsWrapper>
            
        {stars.map((_, index) => {
            
          return (
                <StarIcon
                key={index}       
                size={24}             
                color={(ratingValue || ratingHoverValue) > index ? colors.starActive : colors.starDefault}
                onClick={() => setRatingValue(() => index + 1)}
                onMouseOver={() => setRatingHoverValue(() => index + 1)}
                onMouseLeave={() => setRatingHoverValue(() => undefined)}
                />            
          )
          
        })}
        
      </RatingsWrapper>
    )

}

const RatingsWrapper = styled.div`
    background-color: blue;
`
