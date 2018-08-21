import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius, boxShadow } from '../../app/styles/style-util';

const DashboardStyleWrapper = styled.div`
  th {
    background-color: white !important;
  }
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    padding: 5px;
    font-size: 12px
  }
`;

export default DashboardStyleWrapper;
