import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Pagination, PageItem } from "react-bootstrap";

interface PagingBarIE {
  totalCount: number;
  limit: number;
  active: number;
  onPageClick: Function;
}

const PagingBar = (props: PagingBarIE) => {
  const { active, onPageClick, limit, totalCount } = props;
  const [pageItem, setPageItem] = useState([]);

  useEffect(() => {
    generatePageItem();
  }, [totalCount, limit, active]);

  const generatePageItem = useCallback(() => {
    let item: any = [];

    for (let i = 0; i < Math.ceil(totalCount / limit); i++) {
      item.push(
        <PageItem
          key={`pageItem_List_${i}`}
          onClick={() => onPageClick(i)}
          active={i + 1 === active}
        >
          {i + 1}
        </PageItem>
      );
    }
    setPageItem(item);
  }, [totalCount, limit, active]);

  return (
    <Pagination>
      {!_.isEmpty(pageItem) &&
        pageItem.map((element: React.ReactElement) => {
          return element;
        })}
    </Pagination>
  );
};

export default PagingBar;
