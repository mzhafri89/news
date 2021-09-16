import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Colors} from 'react-native-ui-lib';

function PaymentCard({brand, postfix, expiryMonth, expiryYear}) {
  let bgColor = '';
  const upperCasedBrand = brand.toUpperCase();

  if (upperCasedBrand === 'MASTERCARD') {
    bgColor = Colors.orange10;
  } else if (upperCasedBrand === 'VISA') {
    bgColor = Colors.blue10;
  } else {
    bgColor = Colors.black;
  }

  return (
    <Card
      key={`${brand}-${postfix}-${expiryMonth}-${expiryYear}`}
      row
      height={160}
      style={styles.card}
      useNative
      backgroundColor={bgColor}>
      {
        <Card.Section
          content={[
            {text: `**** **** ${postfix}`, text70: true, grey50: true},
            {
              text: brand,
              text80: true,
              grey50: true,
            },
            {
              text: `${expiryMonth} / ${expiryYear}`,
              text90: true,
              grey50: true,
            },
          ]}
          style={styles.cardSection}
        />
      }
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {marginLeft: 0, marginRight: 0},
  cardSection: {padding: 20, flex: 1},
  cardLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(PaymentCard);
