import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth, theme} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10
  },
  part1: {
    paddingRight: screenWidth * 0.2,
  },
  textStyle: {
    color: theme?.black,
    fontWeight: '500',
    marginLeft: screenWidth * 0.05,
  },
  textSubStyle: {
    color: theme?.black,
    margin: screenHeight * 0.02,
    fontWeight: '300',
  },
  part2: {
    width: screenWidth * 0.8,
    alignSelf: 'center',
  },
  image2: {
    width: '100%',
    resizeMode: 'contain',
  },
  skipContainer: {
    marginTop: screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.1,
  },
});
