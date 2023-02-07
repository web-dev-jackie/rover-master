import React from 'react';

import Footer from 'react-bulma-companion/lib/Footer';
import Container from 'react-bulma-companion/lib/Container';
import Content from 'react-bulma-companion/lib/Content';

import styles from './styles.module.css';

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <Footer className={styles.root}>
      <Container>
        <Content className={styles.content} textAlign="center">
          <p>
            501(c)(3) Animal Rescue & Dog Trainer
            <br />
            EIN: 812178821 | Handover Rover | P.O. Box 97567
            <br />
            Phoenix, AZ 85060
            <br />
            koco@handoverrover.com
          </p>
          <p>{`Copyright Ⓒ ${year} Handover Rover. All Rights Reserved.`}</p>
        </Content>
      </Container>
    </Footer>
  );
}
