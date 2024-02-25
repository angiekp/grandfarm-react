import Logo from "../../LogoLight.png"

const LogoLight = () =>{
    return (
        <>
      <img
                className="cardlogo"
                alt="Kairos Tower"
                src={Logo}
                style={{
                  height:300,
                  width: 350,
                }}
              />
        </>
    );
}
export default LogoLight;