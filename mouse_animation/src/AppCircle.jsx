import styled from "styled-components";


function AppCircle({x,y}) {
    return (
        <AppCircleStyle style={{transform: `translate(${x-15}px, ${y-15}px)`}}/>
    )
}

const AppCircleStyle = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid #48bbf176;
    transition: transform 0.3s ease-out;
    /* background-color: #48bbf1; */
    /* box-shadow: 0 0 10px rgba(72, 188, 241, 0.5); */
`;

export default AppCircle