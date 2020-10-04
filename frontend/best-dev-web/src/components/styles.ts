import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 16px;
    padding: 16px;
    height: 60px;
    width: 250px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;