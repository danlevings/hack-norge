import React from "react";
import styled from "styled-components";

const StyledTable = styled.table``;

type Key = {
  title: string;
  key: string;
  display?: boolean;
};

type TableProps = {
  data: Record<string, any>[];
  keys: Key[];
};

const Table = ({ data, keys }: TableProps) => {
  return (
    <StyledTable>
      <tr>
        {keys.map(key => (
          <th>{key.title}</th>
        ))}
      </tr>
      {data.map(d => (
        <tr>
          {keys.map(key => (
            <td>{d[key.key]}</td>
          ))}
        </tr>
      ))}
    </StyledTable>
  );
};

export default Table;
