import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { formatAsPercentage } from '@utils';

import * as S from './styles';

type Props = {
  mealPercents: number;
};

export function Percent({ mealPercents }: Props) {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const isDiet = mealPercents > 50;

  const handleGoToStatistics = () => navigate('statistics');

  return (
    <S.Pressable onPress={handleGoToStatistics}>
      <S.PercentBox isDiet={isDiet} sharedTransitionTag="percent-box-tag">
        <S.Open size={32} color={COLORS.GREEN_DARK} />
        <S.Percent sharedTransitionTag="percent-tag">{formatAsPercentage(mealPercents)}</S.Percent>
        <S.Label sharedTransitionTag="percent-label-tag">das refeições dentro da dieta</S.Label>
      </S.PercentBox>
    </S.Pressable>
  );
}
