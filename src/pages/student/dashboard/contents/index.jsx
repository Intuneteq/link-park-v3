import { Images } from '../../../../constants'

export const DASHBOARD_CONTENTS = {
  events: [
    {
      date1: 2,
      date2: 'jan',
      title: 'Principal Football Cup',
      time: '10am',
      color: '#5792F0',
    },
    {
      date1: 23,
      date2: 'jan',
      title: 'Inter House Sport',
      time: '10am',
      color: '#FFB0C8',
    },
    {
      date1: 15,
      date2: 'Feb',
      title: 'Swimming Class',
      time: '4pm',
      color: '#B395F3',
    },
    {
      date1: 28,
      date2: 'Feb',
      title: 'Visitation to the Zoo',
      time: '3pm',
      color: '#E9B575',
    },
    {
      date1: 28,
      date2: 'Feb',
      title: 'Excursion to Aso Rock',
      time: '11am',
      color: '#E9B575',
    },
  ],

  courses: [
    {
      img: Images.discovery,
      subject: 'Geography',
      chapters: 15,
      bgColor: '#b9fcc0',
      color: '#40c85e',
    },
    {
      img: Images.science,
      subject: 'Chemistry',
      chapters: 25,
      bgColor: '#c5edff',
      color: '#11a8e8',
    },
    {
      img: Images.calculator,
      subject: 'Physics',
      chapters: 18,
      bgColor: '#beccff',
      color: '#4069f8',
    },
    {
      img: Images.calculator,
      subject: 'Mathematics',
      chapters: 18,
      bgColor: '#beccff',
      color: '#4069f8',
    },
  ],

  tableData: {
    head: ['Course name', 'Start', 'Grade'],
    body: [
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: 'Biology',
          headText: '30 Lessons',
        },
        bodyItems: ['May 5', '100'],
      },
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: 'Biology',
          headText: '30 Lessons',
        },
        bodyItems: ['May 5', '100'],
      },
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: 'Biology',
          headText: '30 Lessons',
        },
        bodyItems: ['May 5', '100'],
      },
    ],
  },
}
