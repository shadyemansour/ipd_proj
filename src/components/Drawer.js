import React from "react";
import styled from "styled-components";
import { Drawer } from "antd";
import { colors } from "../styles/colors";

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 1.5rem;
    background-color: ${colors.main.secondaryBackground};
  }

  .ant-drawer-content-wrapper {
    width: 300px !important;
  }
  .anticon {
    svg {
      fill: ${colors.main.backgroud};
    }
  }
`;
