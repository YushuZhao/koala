import styled from 'styled-components';
import { Table } from 'antd';

export default styled(Table)`
  .ant-table,
  .ant-table-small {
    .ant-table-container {
      .ant-table-thead {
        border-top: 1px solid transparent;

        > tr {
          > th {
            color: #fff;
            border-bottom: none;
            background-color: ${({ theme }) => theme.tableHeadBg};
          }

          .ant-table-cell-scrollbar {
            box-shadow: none;
          }
        }
      }

      .ant-table-tbody {
        > tr {
          > td {
            color: ${({ theme }) => theme.color};
            border-bottom: 1px solid ${({ theme }) => theme.tableTdBorderBottom};
            padding: 8px 8px; //列表行间距
          }
        }

        > tr.ant-table-row:hover > td,
        > tr.ant-table-placeholder:hover > td {
          background: ${({ theme }) => theme.TableTdHover};
        }

        tr:nth-child(odd) {
          background: ${({ theme }) => theme.tableTrOddBg};
        }

        tr:nth-child(even) {
          background: ${({ theme }) => theme.tableTrEvenBg};
        }

        .ant-table-cell.ant-table-column-sort {
          background: transparent;
        }
      }
    }
  }
`;
