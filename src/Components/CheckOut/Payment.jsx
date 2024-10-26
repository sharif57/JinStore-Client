import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";



const stripePromise =loadStripe('pk_test_51PLdGEI1V2N8WTtNgAru9p0zIeKYGQ0Zym7fAM7IPCDmBXexmlIbFCoSTodjSiTcjeQn2DkQVUs7fWr5q86Uz4XU00Y2cJsHO2')
const Payment = () => {

    return <div className="mt-80">
        <Elements stripe={stripePromise} className='border-2 border-black p-6'>
            <CheckOut></CheckOut>
        </Elements>
    </div>;
};
export default Payment;