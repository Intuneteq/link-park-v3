import React, { useState} from 'react'
import { Container, SubjectTemplate } from '../../../components/templates'
import { Images } from '../../../constants';

const PortalMaterials = () => {
    const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 8;
  const pagesVisited = pageNumber * cardPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const options = ["SS1", "SS2", "SS3"];
  const content = [
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
  ];

  const style = {
    width: "214px",
  };
  return (
    <Container name={'Portal'}>
        <SubjectTemplate
        title={"Materials"}
        options={options}
        content={content}
        pagesVisited={pagesVisited}
        cardPerPage={cardPerPage}
        changePage={changePage}
        style={style}
      />
    </Container>
  )
}

export default PortalMaterials