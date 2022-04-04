import { Link } from "react-router-dom";

export function Error404() {
  return (
    <main className="mr-t-lt">
      <figure>
        <img src="/assets/images/Error-404/404_page_pic.png" alt="Error" width="250" height="350" />
      </figure>
      <p>
       The Page you are looking for is not found.
      </p>
      <Link to="/">
        <button className="btn">Go To Homepage</button>
      </Link>
    </main>
  );
}