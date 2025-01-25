import Button from "./Button";
import trackingButtonComponent from "./trackingButtonComponent";
const HoC=()=>{
    const ButtonWithTracking=trackingButtonComponent(Button);
return (
    <div>
        <h2>This is an example of higher order componenet.</h2>
        <Button name="Login"/>
        <ButtonWithTracking name="Login" trackingInfo={{customerId:"45613785",password:"hello@sece"}}/>
    </div>
);
};
export default HoC;