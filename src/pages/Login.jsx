import People from "../assets/People.jpg";
import { Form } from "../components/Form";

export const Login = () => {
  return (
    <>
      <section className="flex flex-1 justify-center items-center ">
        <div className="card lg:card-side bg-base-100 shadow-xl top-12">
          <figure>
            <img
              src={People}
              alt="People on cross road"
              className="w-[25vw] md:block hidden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Welcome Back! Login Please </h2>

            <div className="card-actions justify-center p-4">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
