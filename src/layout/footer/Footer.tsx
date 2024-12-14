import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Footer_Styles'

const SocialItemsList = [
    {
        iconId: 'instagram'

    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'linkedin'
    },
    {
        iconId: 'vk'
    },
]

export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction='column' align='center'>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>

                    {SocialItemsList.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                <Icon height={'21px'} width={"21px"} viewbox={'0 0 21 21'} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )

                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}


