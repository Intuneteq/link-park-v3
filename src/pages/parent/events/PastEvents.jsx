import React from 'react'
import { EventPages } from '../../../components/organisms'

const PastEvents = () => {
  const CONTENTS = [
    {
      day: "03",
      month: "Febuary",
      title: "PTA Meeting to tackle the new increment of school fees",
      body: "We want to cordially invite all the parents to an important meeting regarding the new school fee which is meant to take effect from 12th of January 2023. We need to all parents to be present so we could finalize before the effective date. Hope to see all of you soon. Thank you and God bless.",
    },
    {
      day: "15",
      month: "March",
      title: "Invitation to all Parents for end of the year party",
      body: "We want to cordially invite all the parents to an important meeting regarding the new school fee which is meant to take effect from 12th of January 2023. We need to all parents to be present so we could finalize before the effective date. Hope to see all of you soon. Thank you and God bless.",
    },
    {
      day: "03",
      month: "April",
      title: "Invitation for all Parents for Students Graduation Ceremony",
      body: "We want to cordially invite all the parents to an important meeting regarding the new school fee which is meant to take effect from 12th of January 2023. We need to all parents to be present so we could finalize before the effective date. Hope to see all of you soon. Thank you and God bless.",
    },
  ];

  return (
    <div>
      <EventPages contents={CONTENTS} />
    </div>
  )
}

export default PastEvents