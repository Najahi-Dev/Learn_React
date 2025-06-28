import styled from "styled-components";
import AppUserComponents from "./AppUserComponents";


function AppUserList({ list = [] }) {
    return (
        <AppUserListStyle>
            {
                list.map(({name, title, url}) => <AppUserComponents name={name} title={title} url={url} />)
            }
        </AppUserListStyle>
    )
}

const AppUserListStyle = styled.div`
  
`;

export default AppUserList