import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Background from '../../src/component/background';
import MainContent from '../../src/component/main-content';
import {
  Button,
  ButtonText,
  GlasButton,
  PillButton,
  CopyButton,
  SmallButton,
  BackButton,
  CancelButton,
  QrButton,
  DownButton,
} from '../../src/component/button';
import Icon from '../../src/component/icon';
import { colors } from '../../src/component/style';

storiesOf('Button', module)
  .addDecorator(story => (
    <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Default Button', () => (
    <Button
      style={{ backgroundColor: colors.purple }}
      onPress={action('clicked')}
    />
  ))
  .add('Button Disabled', () => (
    <Button
      disabled
      style={{ backgroundColor: colors.purple }}
      onPress={action('clicked')}
    />
  ));

storiesOf('Button', module)
  .addDecorator(story => (
    <Background image="purple-gradient-bg">{story()}</Background>
  ))
  .add('Glas Button', () => (
    <GlasButton onPress={action('clicked')}>Glas Button</GlasButton>
  ))
  .add('Glas Disabled', () => (
    <GlasButton disabled onPress={action('clicked')}>
      Glas Disabled
    </GlasButton>
  ));

storiesOf('Button', module)
  .add('Pill', () => (
    <PillButton onPress={action('clicked')}>Pill Button</PillButton>
  ))
  .add('Pill Disabled', () => (
    <PillButton disabled onPress={action('clicked')}>
      Pill Disabled
    </PillButton>
  ))
  .add('Pill Orange', () => (
    <PillButton
      style={{ backgroundColor: colors.orange }}
      onPress={action('clicked')}
    >
      Pill Button
    </PillButton>
  ))
  .add('Copy Button', () => (
    <CopyButton icon="copy-purple" onPress={action('clicked')}>
      Copy Button
    </CopyButton>
  ));

storiesOf('Button', module)
  .addDecorator(story => (
    <Background image="purple-gradient-bg">
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
    </Background>
  ))
  .add('Small Button', () => (
    <SmallButton border text="Small Button" onPress={action('clicked')} />
  ))
  .add('Small Icon', () => (
    <SmallButton border text="Small Icon" onPress={action('clicked')}>
      <Icon image="cancel" style={{ height: 12, width: 12 }} />
    </SmallButton>
  ))
  .add('Small Alert', () => (
    <SmallButton
      border
      alert={colors.pinkSig}
      text="Small Alert"
      onPress={action('clicked')}
    />
  ))
  .add('Text Button', () => (
    <Button onPress={action('clicked')}>
      <ButtonText style={{ color: colors.white }}>Text Button</ButtonText>
    </Button>
  ))
  .add('Text Disabled', () => (
    <Button disabled onPress={action('clicked')}>
      <ButtonText style={{ color: colors.white }}>Text Disabled</ButtonText>
    </Button>
  ))
  .add('Icon Button', () => (
    <Button onPress={action('clicked')}>
      <Icon image="cancel" style={{ height: 14, width: 14 }} />
    </Button>
  ))
  .add('Icon Disabled', () => (
    <Button disabled onPress={action('clicked')}>
      <Icon image="cancel" style={{ height: 14, width: 14 }} />
    </Button>
  ))
  .add('Back Button', () => <BackButton onPress={action('clicked')} />)
  .add('Cancel Button', () => <CancelButton onPress={action('clicked')} />)
  .add('QR Button', () => (
    <QrButton onPress={action('clicked')}>QR Button</QrButton>
  ))
  .add('Down Button', () => (
    <DownButton onPress={action('clicked')}>Down Button</DownButton>
  ));
