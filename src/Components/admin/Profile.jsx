import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        info_admin()
    }, []);

    async function info_admin() {

        let res = await fetch("http://127.0.0.1:8000/api/info_admin");
        let data = await res.json();
        setAdmin(data)
    }
  return (
    <>
        <h1>{admin.map((admin)=>{
            return ( <p>Hello Admin {admin.full_name}</p>)
        })} </h1>
        <table border={1}>
                <tr>
                    <th colSpan={2}>actions</th>
                </tr>
                <tr>
                    <Link to={'/add'}><td>add_product</td></Link>
                    <Link to={'/update_product'}><td>update_product</td></Link>
                    <Link to={'/delete_product'}><td>delete_product</td></Link>
                    <Link to={'/add_categories'}><td>add_categories</td></Link>
                    <Link to={'/add_flavors'}><td>add_flavors</td></Link>
                </tr>
        </table>
    </>
  )
}

export default Profile
