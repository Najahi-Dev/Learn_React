import styled from "styled-components";

function AppUserComponents({name, title, url = "https://placehold.co/100"}) {
    return (
        <AppUserComponentsStyle>
            <img src={url} alt="" className="rounded"/>
            <div className="user-desc d-flex flex-column justify-content-center">
                <h4>{name}</h4>
                <p>{title}</p>
            </div>
        </AppUserComponentsStyle>
    )
}

const AppUserComponentsStyle = styled.div`
   /* border: 1px solid #000000; */
   width: 350px;
   padding: 12px;
   display: flex;
   align-items: center;
   /* justify-content: center; */
   gap: 12px;
   border-radius: 5px;
   background-color: #b9b9b9;




   .user-desc{
    /* border: 1px solid #000000; */
    margin-left: 12px;
   }
`;

export default AppUserComponents