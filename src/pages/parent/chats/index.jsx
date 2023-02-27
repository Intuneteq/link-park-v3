import React from 'react'

import { CHATS_CONTENTS } from './contents'
import { MessengerCard } from '../../../components/molecules'
import { Messenger } from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { Default } from '../../../hooks/useMediaQuery'
import styles from './chats.module.scss'

const Chats = () => {
  const { messengers } = CHATS_CONTENTS

  return (
    <Container name={'Chats'} background={'#E0E0E0'}>
      <div className={styles.chats}>
        <section className={styles.chat_list}>
          {messengers.map((messenger) => (
            <MessengerCard key={messenger.id} />
          ))}
        </section>
        <Default>
          <section className={styles.messaging}>
            <Messenger />
          </section>
        </Default>
      </div>
    </Container>
  )
}

export default Chats
